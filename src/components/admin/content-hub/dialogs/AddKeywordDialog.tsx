import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { useCreateKeyword, useKeywordGroups } from '@/hooks/useContentHub';
import { useToast } from '@/hooks/use-toast';

interface AddKeywordDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const AddKeywordDialog: React.FC<AddKeywordDialogProps> = ({
  open,
  onOpenChange,
}) => {
  const { toast } = useToast();
  const { data: groups } = useKeywordGroups();
  const createKeyword = useCreateKeyword();

  const [formData, setFormData] = useState<{
    keyword: string;
    group_id: string;
    strategy_type: 'seo_clasico' | 'aeo' | 'geo' | 'hibrido';
    search_volume: string;
    difficulty: string;
    is_favorite: boolean;
    is_objective: boolean;
    notes: string;
  }>({
    keyword: '',
    group_id: '',
    strategy_type: 'seo_clasico',
    search_volume: '',
    difficulty: '',
    is_favorite: false,
    is_objective: false,
    notes: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.keyword.trim()) {
      toast({
        title: 'Error',
        description: 'La keyword es obligatoria',
        variant: 'destructive',
      });
      return;
    }

    try {
      await createKeyword.mutateAsync({
        keyword: formData.keyword.trim(),
        group_id: formData.group_id || null,
        strategy_type: formData.strategy_type,
        search_volume: formData.search_volume ? parseInt(formData.search_volume) : null,
        difficulty: formData.difficulty ? parseInt(formData.difficulty) : null,
        is_favorite: formData.is_favorite,
        is_objective: formData.is_objective,
        notes: formData.notes || null,
      });

      toast({
        title: 'Keyword añadida',
        description: `"${formData.keyword}" se ha añadido correctamente`,
      });

      // Reset form
      setFormData({
        keyword: '',
        group_id: '',
        strategy_type: 'seo_clasico',
        search_volume: '',
        difficulty: '',
        is_favorite: false,
        is_objective: false,
        notes: '',
      });
      onOpenChange(false);
    } catch (error) {
      toast({
        title: 'Error',
        description: 'No se pudo añadir la keyword',
        variant: 'destructive',
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Añadir Keyword</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="keyword">Keyword *</Label>
            <Input
              id="keyword"
              value={formData.keyword}
              onChange={(e) => setFormData({ ...formData, keyword: e.target.value })}
              placeholder="ej: agencia marketing digital madrid"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Grupo</Label>
              <Select
                value={formData.group_id}
                onValueChange={(value) => setFormData({ ...formData, group_id: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Sin grupo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">Sin grupo</SelectItem>
                  {groups?.map(group => (
                    <SelectItem key={group.id} value={group.id}>
                      {group.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Estrategia</Label>
              <Select
                value={formData.strategy_type}
                onValueChange={(value) => 
                  setFormData({ ...formData, strategy_type: value as 'seo_clasico' | 'aeo' | 'geo' | 'hibrido' })
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="seo_clasico">SEO Clásico</SelectItem>
                  <SelectItem value="aeo">AEO (Respuestas)</SelectItem>
                  <SelectItem value="geo">GEO (IA Generativa)</SelectItem>
                  <SelectItem value="hibrido">Híbrido</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="volume">Volumen de búsqueda</Label>
              <Input
                id="volume"
                type="number"
                value={formData.search_volume}
                onChange={(e) => setFormData({ ...formData, search_volume: e.target.value })}
                placeholder="ej: 1000"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="difficulty">Dificultad (0-100)</Label>
              <Input
                id="difficulty"
                type="number"
                min="0"
                max="100"
                value={formData.difficulty}
                onChange={(e) => setFormData({ ...formData, difficulty: e.target.value })}
                placeholder="ej: 45"
              />
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Checkbox
                id="favorite"
                checked={formData.is_favorite}
                onCheckedChange={(checked) => 
                  setFormData({ ...formData, is_favorite: checked as boolean })
                }
              />
              <Label htmlFor="favorite" className="cursor-pointer">Favorito</Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox
                id="objective"
                checked={formData.is_objective}
                onCheckedChange={(checked) => 
                  setFormData({ ...formData, is_objective: checked as boolean })
                }
              />
              <Label htmlFor="objective" className="cursor-pointer">Objetivo</Label>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="notes">Notas</Label>
            <Textarea
              id="notes"
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              placeholder="Notas adicionales sobre esta keyword..."
              rows={3}
            />
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancelar
            </Button>
            <Button type="submit" disabled={createKeyword.isPending}>
              {createKeyword.isPending ? 'Añadiendo...' : 'Añadir Keyword'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
