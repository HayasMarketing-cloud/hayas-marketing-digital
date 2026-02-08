import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { Sparkles, RefreshCw, Check, ExternalLink, Image as ImageIcon } from 'lucide-react';
import { useOGImageGeneration } from '@/hooks/useOGImageGeneration';

interface OGImageGeneratorProps {
  path: string;
  title: string;
  description?: string;
  category?: string;
  language?: string;
  currentOgImage?: string;
  onImageGenerated: (url: string) => void;
  onManualUrlChange: (url: string) => void;
}

export const OGImageGenerator: React.FC<OGImageGeneratorProps> = ({
  path,
  title,
  description,
  category,
  language,
  currentOgImage,
  onImageGenerated,
  onManualUrlChange,
}) => {
  const { generateOGImage, isGenerating, generatedImage, error, clearGeneratedImage } = useOGImageGeneration();

  const handleGenerate = async () => {
    const url = await generateOGImage({
      path,
      title,
      description,
      category,
      language,
    });

    if (url) {
      onImageGenerated(url);
    }
  };

  const handleRegenerate = () => {
    clearGeneratedImage();
    handleGenerate();
  };

  const displayImage = generatedImage || currentOgImage;

  return (
    <div className="space-y-3 border-t pt-4">
      <Label className="flex items-center gap-2">
        <ImageIcon className="h-4 w-4" />
        Open Graph Image
        <Badge variant="outline" className="text-xs">Opcional</Badge>
      </Label>

      {/* Preview Area */}
      <div className="relative rounded-lg border bg-muted/30 overflow-hidden">
        {isGenerating ? (
          <div className="aspect-[1.91/1] max-h-[200px] flex flex-col items-center justify-center gap-3 p-4">
            <Skeleton className="w-full h-full absolute inset-0" />
            <div className="relative z-10 flex flex-col items-center gap-2">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
              <p className="text-sm text-muted-foreground animate-pulse">
                Generando imagen con IA...
              </p>
            </div>
          </div>
        ) : displayImage ? (
          <div className="relative group">
            <img
              src={displayImage}
              alt="OG Image Preview"
              className="w-full aspect-[1.91/1] max-h-[200px] object-cover"
              onError={(e) => {
                e.currentTarget.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" fill="%23f3f4f6"><rect width="100%" height="100%"/><text x="50%" y="50%" text-anchor="middle" fill="%239ca3af" font-size="24">Error cargando imagen</text></svg>';
              }}
            />
            {generatedImage && (
              <div className="absolute top-2 right-2 flex gap-1">
                <Badge className="bg-green-500/90 text-white text-xs">
                  <Check className="h-3 w-3 mr-1" />
                  Generada con IA
                </Badge>
              </div>
            )}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
              <Button
                size="sm"
                variant="secondary"
                onClick={handleRegenerate}
                disabled={isGenerating}
              >
                <RefreshCw className="h-4 w-4 mr-1" />
                Regenerar
              </Button>
              <Button
                size="sm"
                variant="secondary"
                asChild
              >
                <a href={displayImage} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-1" />
                  Ver
                </a>
              </Button>
            </div>
          </div>
        ) : (
          <div className="aspect-[1.91/1] max-h-[200px] flex flex-col items-center justify-center gap-3 p-4 text-muted-foreground">
            <ImageIcon className="h-12 w-12 opacity-30" />
            <p className="text-sm text-center">
              Sin imagen OG.<br />
              Genera una con IA o pega una URL.
            </p>
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2">
        <Button
          type="button"
          onClick={handleGenerate}
          disabled={isGenerating || !title}
          className="flex-1"
          variant={displayImage ? "outline" : "default"}
        >
          <Sparkles className="h-4 w-4 mr-2" />
          {isGenerating ? 'Generando...' : displayImage ? 'Regenerar con IA' : 'Generar con IA'}
        </Button>
      </div>

      {/* Manual URL Input */}
      <div className="space-y-1.5">
        <Label htmlFor="og_image_url" className="text-xs text-muted-foreground">
          O pegar URL manualmente:
        </Label>
        <Input
          id="og_image_url"
          value={currentOgImage || ''}
          onChange={(e) => onManualUrlChange(e.target.value)}
          placeholder="https://example.com/image.jpg"
          className="text-sm"
        />
      </div>

      {/* Error Message */}
      {error && (
        <p className="text-xs text-destructive">
          {error}
        </p>
      )}

      {/* Info */}
      <p className="text-xs text-muted-foreground">
        Dimensiones recomendadas: 1200×630px (ratio 1.91:1)
      </p>
    </div>
  );
};
