import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { SEOPreviewCard } from './SEOPreviewCard';
import { Sparkles, Info, Globe } from 'lucide-react';
import { useState, useEffect } from 'react';
import type { SEOSuggestions, TargetLanguage } from '@/hooks/useGenerateSEO';
import { Badge } from '@/components/ui/badge';

interface AIGenerationModalProps {
  isOpen: boolean;
  onClose: () => void;
  suggestions: SEOSuggestions | null;
  path: string;
  targetLanguage?: TargetLanguage;
  onApply: (data: {
    title: string;
    description: string;
    h1: string;
    keywords: string;
  }) => void;
}

const languageLabels = {
  es: { name: 'Español', flag: '🇪🇸' },
  en: { name: 'English', flag: '🇬🇧' },
};

export const AIGenerationModal = ({
  isOpen,
  onClose,
  suggestions,
  path,
  targetLanguage = 'es',
  onApply,
}: AIGenerationModalProps) => {
  const [editedData, setEditedData] = useState({
    title: '',
    description: '',
    h1: '',
    keywords: '',
  });

  useEffect(() => {
    if (suggestions) {
      setEditedData({
        title: suggestions.title,
        description: suggestions.description,
        h1: suggestions.h1,
        keywords: Array.isArray(suggestions.keywords) 
          ? suggestions.keywords.join(', ') 
          : suggestions.keywords,
      });
    }
  }, [suggestions]);

  const handleApply = () => {
    onApply(editedData);
    onClose();
  };

  if (!suggestions) return null;

  const langInfo = languageLabels[targetLanguage] || languageLabels.es;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" />
            {targetLanguage === 'en' ? 'AI-Generated SEO Suggestions' : 'Sugerencias SEO generadas con IA'}
            <Badge variant="outline" className="ml-2 gap-1">
              <Globe className="w-3 h-3" />
              {langInfo.flag} {langInfo.name}
            </Badge>
          </DialogTitle>
          <DialogDescription>
            {targetLanguage === 'en' 
              ? <>Review and edit the suggestions before applying them to <strong>{path}</strong></>
              : <>Revisa y edita las sugerencias antes de aplicarlas a <strong>{path}</strong></>
            }
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          {/* Reasoning */}
          {suggestions.reasoning && (
            <div className="bg-muted/50 p-4 rounded-lg border border-border/50">
              <div className="flex items-start gap-2">
                <Info className="w-4 h-4 mt-1 text-primary shrink-0" />
                <div className="text-sm text-muted-foreground">
                  <strong className="text-foreground">
                    {targetLanguage === 'en' ? 'AI Reasoning:' : 'Razonamiento de la IA:'}
                  </strong>
                  <p className="mt-1">{suggestions.reasoning}</p>
                </div>
              </div>
            </div>
          )}

          {/* Preview de Google SERP */}
          <div>
            <Label className="text-sm font-semibold mb-2 block">
              {targetLanguage === 'en' ? 'Google Preview' : 'Preview en Google'}
            </Label>
            <SEOPreviewCard
              title={editedData.title}
              description={editedData.description}
              url={`https://hayasmarketing.com${path}`}
              showValidation={true}
            />
          </div>

          {/* Campos editables */}
          <div className="space-y-4">
            <div>
              <Label htmlFor="title">Title Meta Tag</Label>
              <Input
                id="title"
                value={editedData.title}
                onChange={(e) => setEditedData(prev => ({ ...prev, title: e.target.value }))}
                placeholder={targetLanguage === 'en' ? 'SEO optimized title' : 'Título optimizado para SEO'}
              />
              <p className="text-xs text-muted-foreground mt-1">
                {editedData.title.length} / 60 {targetLanguage === 'en' ? 'recommended characters' : 'caracteres recomendados'}
              </p>
            </div>

            <div>
              <Label htmlFor="description">Meta Description</Label>
              <Textarea
                id="description"
                value={editedData.description}
                onChange={(e) => setEditedData(prev => ({ ...prev, description: e.target.value }))}
                placeholder={targetLanguage === 'en' 
                  ? 'Attractive description that will appear in search results'
                  : 'Descripción atractiva que aparecerá en resultados de búsqueda'
                }
                rows={3}
              />
              <p className="text-xs text-muted-foreground mt-1">
                {editedData.description.length} / 160 {targetLanguage === 'en' ? 'recommended characters' : 'caracteres recomendados'}
              </p>
            </div>

            <div>
              <Label htmlFor="h1">{targetLanguage === 'en' ? 'Main H1' : 'H1 Principal'}</Label>
              <Input
                id="h1"
                value={editedData.h1}
                onChange={(e) => setEditedData(prev => ({ ...prev, h1: e.target.value }))}
                placeholder={targetLanguage === 'en' ? 'Main page title' : 'Título principal de la página'}
              />
              <p className="text-xs text-muted-foreground mt-1">
                {editedData.h1.length} {targetLanguage === 'en' ? 'characters' : 'caracteres'}
              </p>
            </div>

            <div>
              <Label htmlFor="keywords">Keywords</Label>
              <Input
                id="keywords"
                value={editedData.keywords}
                onChange={(e) => setEditedData(prev => ({ ...prev, keywords: e.target.value }))}
                placeholder="keyword1, keyword2, keyword3..."
              />
              <p className="text-xs text-muted-foreground mt-1">
                {targetLanguage === 'en' ? 'Separated by commas' : 'Separadas por comas'}
              </p>
            </div>

            {suggestions.h2_primary && (
              <div className="bg-muted/30 p-3 rounded-lg">
                <Label className="text-sm">{targetLanguage === 'en' ? 'Suggested H2' : 'H2 Sugerido'}</Label>
                <p className="text-sm text-foreground mt-1">{suggestions.h2_primary}</p>
              </div>
            )}

            {suggestions.og_image_suggestion && (
              <div className="bg-muted/30 p-3 rounded-lg">
                <Label className="text-sm">{targetLanguage === 'en' ? 'OG Image Suggestion' : 'Sugerencia de OG Image'}</Label>
                <p className="text-sm text-muted-foreground mt-1">
                  {suggestions.og_image_suggestion}
                </p>
              </div>
            )}
          </div>

          {/* Botones de acción */}
          <div className="flex gap-3 pt-4 border-t">
            <Button
              onClick={handleApply}
              className="flex-1"
              size="lg"
            >
              {targetLanguage === 'en' ? '✅ Apply Suggestions' : '✅ Aplicar Sugerencias'}
            </Button>
            <Button
              onClick={onClose}
              variant="outline"
              size="lg"
            >
              {targetLanguage === 'en' ? 'Cancel' : 'Cancelar'}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
