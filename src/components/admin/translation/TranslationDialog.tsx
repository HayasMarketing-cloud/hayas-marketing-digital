import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useTranslatePage } from '@/hooks/useTranslatePage';
import { generateEnglishSlug } from '@/utils/slugTranslation';
import { getRegisteredRoutes } from '@/utils/routeRegistryData';
import { Loader2, ArrowRight, Languages, CheckCircle, AlertTriangle } from 'lucide-react';

interface TranslationDialogProps {
  pair: any;
  onClose: () => void;
}

export const TranslationDialog: React.FC<TranslationDialogProps> = ({ pair, onClose }) => {
  const { translatePage, isTranslating } = useTranslatePage();
  const [customSlug, setCustomSlug] = useState('');
  const [routeExists, setRouteExists] = useState(false);
  
  const suggestedEnSlug = generateEnglishSlug(pair.esPath);
  const finalEnSlug = customSlug || suggestedEnSlug;

  // Validate if route exists in App.tsx / routeRegistryData.ts
  useEffect(() => {
    const registeredRoutes = getRegisteredRoutes();
    const exists = registeredRoutes.some(route => route.path === finalEnSlug);
    setRouteExists(exists);
  }, [finalEnSlug]);

  const handleTranslate = async () => {
    await translatePage({
      esPath: pair.esPath,
      enPath: finalEnSlug,
      category: pair.category,
    });
    onClose();
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Languages className="h-5 w-5 text-blue-500" />
            Traducir página al inglés
          </DialogTitle>
          <DialogDescription>
            Se generarán automáticamente los metadatos SEO y el contenido traducido
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Original Spanish Path */}
          <div className="space-y-2">
            <Label>Página original (ES)</Label>
            <div className="flex items-center gap-2 p-3 bg-muted rounded-lg">
              <Badge variant="outline">ES</Badge>
              <span className="font-mono text-sm">{pair.esPath}</span>
            </div>
            {pair.esTitle && (
              <p className="text-sm text-muted-foreground pl-12">{pair.esTitle}</p>
            )}
          </div>

          <div className="flex items-center justify-center text-muted-foreground">
            <ArrowRight className="h-5 w-5" />
          </div>

          {/* Suggested English Path */}
          <div className="space-y-2">
            <Label>Slug sugerido (EN)</Label>
            <div className="flex items-center gap-2 p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
              <Badge className="bg-blue-500 text-white">EN</Badge>
              <span className="font-mono text-sm text-blue-600">{suggestedEnSlug}</span>
            </div>
            <p className="text-xs text-muted-foreground">
              Generado automáticamente según las reglas de traducción
            </p>
          </div>

          {/* Custom Slug Option */}
          <div className="space-y-2">
            <Label htmlFor="custom-slug">Personalizar slug (opcional)</Label>
            <Input
              id="custom-slug"
              placeholder={suggestedEnSlug}
              value={customSlug}
              onChange={(e) => setCustomSlug(e.target.value)}
              className="font-mono text-sm"
            />
            <p className="text-xs text-muted-foreground">
              Deja vacío para usar el slug sugerido
            </p>
          </div>

          {/* Preview Final Path */}
          {customSlug && (
            <div className="p-4 bg-accent rounded-lg border-l-4 border-blue-500">
              <p className="text-sm font-medium mb-1">Slug final:</p>
              <p className="font-mono text-sm text-blue-600">{finalEnSlug}</p>
            </div>
          )}

          {/* Route validation alert */}
          <Alert className={`${routeExists ? 'border-green-500 bg-green-50' : 'border-yellow-500 bg-yellow-50'}`}>
            {routeExists ? (
              <>
                <CheckCircle className="h-4 w-4 text-green-600" />
                <AlertDescription>
                  <strong className="text-green-700">✓ Ruta registrada en sistema</strong>
                  <p className="text-sm text-muted-foreground mt-1">
                    Esta ruta existe en App.tsx y routeRegistryData.ts
                  </p>
                </AlertDescription>
              </>
            ) : (
              <>
                <AlertTriangle className="h-4 w-4 text-yellow-600" />
                <AlertDescription>
                  <strong className="text-yellow-700">⚠ Ruta nueva - Se auto-registrará</strong>
                  <p className="text-sm text-muted-foreground mt-1">
                    Esta ruta se registrará automáticamente tras la traducción. Asegúrate de que existe en App.tsx.
                  </p>
                </AlertDescription>
              </>
            )}
          </Alert>

          {/* Info Box */}
          <div className="p-4 bg-blue-500/5 border border-blue-500/20 rounded-lg">
            <h4 className="font-medium text-sm mb-2">✨ Qué se creará automáticamente:</h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>✓ Metadatos SEO optimizados (title, description, keywords)</li>
              <li>✓ Estructura H1, H2 traducida</li>
              <li>✓ Entrada en la base de datos SEO</li>
              <li>✓ Actualización del sitemap bilingüe</li>
              <li>✓ Vinculación con la página ES original</li>
            </ul>
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={onClose} disabled={isTranslating}>
            Cancelar
          </Button>
          <Button 
            onClick={handleTranslate} 
            disabled={isTranslating}
            className="bg-blue-500 hover:bg-blue-600"
          >
            {isTranslating ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Traduciendo...
              </>
            ) : (
              <>
                <Languages className="mr-2 h-4 w-4" />
                Traducir Ahora
              </>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
