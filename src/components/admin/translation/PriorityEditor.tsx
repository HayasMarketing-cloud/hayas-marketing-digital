import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';
import { TrendingUp, Save } from 'lucide-react';

interface PriorityEditorProps {
  isOpen: boolean;
  onClose: () => void;
  pagePath: string;
  currentImportance?: string;
  currentTraffic?: number;
  onSuccess?: () => void;
}

export const PriorityEditor = ({
  isOpen,
  onClose,
  pagePath,
  currentImportance = 'medium',
  currentTraffic = 0,
  onSuccess,
}: PriorityEditorProps) => {
  const [strategicImportance, setStrategicImportance] = useState(currentImportance);
  const [estimatedTraffic, setEstimatedTraffic] = useState(currentTraffic);
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = async () => {
    setIsSaving(true);
    try {
      const { error } = await supabase
        .from('seo_pages')
        .update({
          strategic_importance: strategicImportance,
          estimated_traffic: estimatedTraffic,
        })
        .eq('path', pagePath);

      if (error) throw error;

      toast({
        title: '✅ Prioridad actualizada',
        description: 'La priorización se ha recalculado automáticamente',
      });

      onSuccess?.();
      onClose();
    } catch (error) {
      console.error('Error updating priority:', error);
      toast({
        title: '❌ Error al actualizar',
        description: error instanceof Error ? error.message : 'Error desconocido',
        variant: 'destructive',
      });
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-primary" />
            Ajustar Prioridad
          </DialogTitle>
          <DialogDescription>
            Configura la importancia estratégica y tráfico estimado para calcular la prioridad
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Strategic Importance */}
          <div className="space-y-2">
            <Label>Importancia Estratégica</Label>
            <Select value={strategicImportance} onValueChange={setStrategicImportance}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="low">🔵 Baja - Páginas secundarias</SelectItem>
                <SelectItem value="medium">🟡 Media - Páginas estándar</SelectItem>
                <SelectItem value="high">🟠 Alta - Páginas importantes</SelectItem>
                <SelectItem value="critical">🔴 Crítica - Landing pages clave</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-xs text-muted-foreground">
              Afecta +5 a +30 puntos de prioridad
            </p>
          </div>

          {/* Estimated Traffic */}
          <div className="space-y-2">
            <Label>Tráfico Mensual Estimado</Label>
            <div className="space-y-3">
              <Input
                type="number"
                value={estimatedTraffic}
                onChange={(e) => setEstimatedTraffic(parseInt(e.target.value) || 0)}
                min={0}
                max={10000}
                placeholder="0"
              />
              <Slider
                value={[estimatedTraffic]}
                onValueChange={(vals) => setEstimatedTraffic(vals[0])}
                min={0}
                max={1000}
                step={50}
                className="w-full"
              />
            </div>
            <p className="text-xs text-muted-foreground">
              Afecta hasta +20 puntos de prioridad (máximo a 1000+ visitas/mes)
            </p>
          </div>

          {/* Info Box */}
          <div className="bg-blue-500/10 p-3 rounded-lg text-sm">
            <p className="font-semibold text-blue-700 mb-1">📊 Cálculo Automático</p>
            <p className="text-muted-foreground text-xs">
              La prioridad final se calcula automáticamente combinando:
            </p>
            <ul className="text-xs text-muted-foreground mt-2 space-y-1 list-disc list-inside">
              <li>Categoría de página (0-40 pts)</li>
              <li>Importancia estratégica (5-30 pts)</li>
              <li>Tráfico estimado (0-20 pts)</li>
              <li>Frescura de optimización (0-10 pts)</li>
            </ul>
          </div>
        </div>

        <div className="flex gap-3">
          <Button onClick={handleSave} disabled={isSaving} className="flex-1">
            <Save className="w-4 h-4 mr-2" />
            {isSaving ? 'Guardando...' : 'Guardar Prioridad'}
          </Button>
          <Button onClick={onClose} variant="outline">
            Cancelar
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
