import React, { useState, useRef, useCallback, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { Loader2, ZoomIn, Move } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

const OG_WIDTH = 1200;
const OG_HEIGHT = 630;
const CANVAS_DISPLAY_WIDTH = 600;
const CANVAS_DISPLAY_HEIGHT = 315;

interface OGImageCropperProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  imageSource: string | File | null;
  onComplete: (publicUrl: string) => void;
  uploadPath?: string;
}

export const OGImageCropper: React.FC<OGImageCropperProps> = ({
  open,
  onOpenChange,
  imageSource,
  onComplete,
  uploadPath = 'og-images',
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [img, setImg] = useState<HTMLImageElement | null>(null);
  const [zoom, setZoom] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [uploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  // Load image from source
  useEffect(() => {
    if (!open || !imageSource) return;
    setLoading(true);
    const image = new Image();
    image.crossOrigin = 'anonymous';
    image.onload = () => {
      setImg(image);
      // Calculate initial zoom to cover the canvas
      const scaleX = OG_WIDTH / image.width;
      const scaleY = OG_HEIGHT / image.height;
      const initialZoom = Math.max(scaleX, scaleY);
      setZoom(initialZoom);
      // Center the image
      setOffset({
        x: (OG_WIDTH - image.width * initialZoom) / 2,
        y: (OG_HEIGHT - image.height * initialZoom) / 2,
      });
      setLoading(false);
    };
    image.onerror = () => {
      toast({ title: 'Error cargando imagen', variant: 'destructive' });
      setLoading(false);
    };

    if (typeof imageSource === 'string') {
      image.src = imageSource;
    } else {
      const reader = new FileReader();
      reader.onload = (e) => { image.src = e.target?.result as string; };
      reader.readAsDataURL(imageSource);
    }
  }, [open, imageSource]);

  // Draw preview
  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas || !img) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, CANVAS_DISPLAY_WIDTH, CANVAS_DISPLAY_HEIGHT);
    ctx.fillStyle = '#1a1a2e';
    ctx.fillRect(0, 0, CANVAS_DISPLAY_WIDTH, CANVAS_DISPLAY_HEIGHT);

    const scale = CANVAS_DISPLAY_WIDTH / OG_WIDTH;
    ctx.save();
    ctx.scale(scale, scale);
    ctx.drawImage(img, offset.x, offset.y, img.width * zoom, img.height * zoom);
    ctx.restore();
  }, [img, zoom, offset]);

  useEffect(() => { draw(); }, [draw]);

  // Drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setDragging(true);
    setDragStart({ x: e.clientX - offset.x, y: e.clientY - offset.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!dragging) return;
    const scale = OG_WIDTH / CANVAS_DISPLAY_WIDTH;
    setOffset({
      x: (e.clientX - dragStart.x),
      y: (e.clientY - dragStart.y),
    });
  };

  const handleMouseUp = () => setDragging(false);

  // Touch handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    setDragging(true);
    setDragStart({ x: touch.clientX - offset.x, y: touch.clientY - offset.y });
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!dragging) return;
    const touch = e.touches[0];
    setOffset({
      x: (touch.clientX - dragStart.x),
      y: (touch.clientY - dragStart.y),
    });
  };

  const handleZoomChange = (value: number[]) => {
    if (!img) return;
    const newZoom = value[0];
    // Zoom towards center
    const cx = OG_WIDTH / 2;
    const cy = OG_HEIGHT / 2;
    const imgCx = (cx - offset.x) / zoom;
    const imgCy = (cy - offset.y) / zoom;
    setOffset({
      x: cx - imgCx * newZoom,
      y: cy - imgCy * newZoom,
    });
    setZoom(newZoom);
  };

  const handleGenerate = async () => {
    if (!img) return;
    setUploading(true);

    try {
      // Render full-res canvas
      const finalCanvas = document.createElement('canvas');
      finalCanvas.width = OG_WIDTH;
      finalCanvas.height = OG_HEIGHT;
      const ctx = finalCanvas.getContext('2d');
      if (!ctx) throw new Error('Canvas context unavailable');

      ctx.fillStyle = '#1a1a2e';
      ctx.fillRect(0, 0, OG_WIDTH, OG_HEIGHT);
      ctx.drawImage(img, offset.x, offset.y, img.width * zoom, img.height * zoom);

      // Convert to blob
      const blob = await new Promise<Blob>((resolve, reject) => {
        finalCanvas.toBlob(
          (b) => b ? resolve(b) : reject(new Error('Blob creation failed')),
          'image/jpeg',
          0.9
        );
      });

      // Upload to storage
      const fileName = `og-${Date.now()}.jpg`;
      const filePath = `${uploadPath}/${fileName}`.replace('og-images/', '');
      
      const { error: uploadError } = await supabase.storage
        .from('og-images')
        .upload(filePath, blob, {
          contentType: 'image/jpeg',
          upsert: true,
        });

      if (uploadError) throw uploadError;

      const { data: urlData } = supabase.storage
        .from('og-images')
        .getPublicUrl(filePath);

      onComplete(urlData.publicUrl);
      onOpenChange(false);

      toast({ title: 'Imagen OG generada', description: `${OG_WIDTH}×${OG_HEIGHT}px subida correctamente` });
    } catch (error: any) {
      console.error('OG image generation error:', error);
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
    } finally {
      setUploading(false);
    }
  };

  const minZoom = img ? Math.max(OG_WIDTH / img.width, OG_HEIGHT / img.height) * 0.5 : 0.1;
  const maxZoom = img ? Math.max(OG_WIDTH / img.width, OG_HEIGHT / img.height) * 4 : 5;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[680px]">
        <DialogHeader>
          <DialogTitle>Adaptar imagen a 1200×630px</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {loading ? (
            <div className="flex items-center justify-center h-[315px] bg-muted rounded-lg">
              <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
            </div>
          ) : (
            <>
              <div className="relative rounded-lg overflow-hidden border-2 border-dashed border-primary/30 bg-muted/30">
                <canvas
                  ref={canvasRef}
                  width={CANVAS_DISPLAY_WIDTH}
                  height={CANVAS_DISPLAY_HEIGHT}
                  className="w-full cursor-grab active:cursor-grabbing"
                  style={{ aspectRatio: `${OG_WIDTH}/${OG_HEIGHT}` }}
                  onMouseDown={handleMouseDown}
                  onMouseMove={handleMouseMove}
                  onMouseUp={handleMouseUp}
                  onMouseLeave={handleMouseUp}
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleMouseUp}
                />
                <div className="absolute top-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                  <Move className="h-3 w-3" />
                  Arrastra para posicionar
                </div>
              </div>

              <div className="flex items-center gap-3">
                <ZoomIn className="h-4 w-4 text-muted-foreground shrink-0" />
                <Label className="shrink-0 text-sm">Zoom</Label>
                <Slider
                  value={[zoom]}
                  onValueChange={handleZoomChange}
                  min={minZoom}
                  max={maxZoom}
                  step={0.01}
                  className="flex-1"
                />
                <span className="text-xs text-muted-foreground w-12 text-right">
                  {Math.round(zoom * 100)}%
                </span>
              </div>
            </>
          )}
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancelar
          </Button>
          <Button onClick={handleGenerate} disabled={uploading || !img}>
            {uploading ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Subiendo...
              </>
            ) : (
              'Generar y subir'
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
