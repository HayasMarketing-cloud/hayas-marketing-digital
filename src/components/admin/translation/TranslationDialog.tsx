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
import { Separator } from '@/components/ui/separator';
import { useTranslatePage } from '@/hooks/useTranslatePage';
import { generateEnglishSlug } from '@/utils/slugTranslation';
import { findRouteInApp } from '@/utils/routeExtractor';
import { getRegisteredRoutes } from '@/utils/routeRegistryData';
import { Loader2, ArrowRight, Languages, CheckCircle, AlertTriangle, FileCode, Database, Globe, ListChecks } from 'lucide-react';

interface TranslationDialogProps {
  pair: any;
  onClose: () => void;
}

export const TranslationDialog: React.FC<TranslationDialogProps> = ({ pair, onClose }) => {
  const { translatePage, isTranslating } = useTranslatePage();
  const [customSlug, setCustomSlug] = useState('');
  const [routeExistsInApp, setRouteExistsInApp] = useState(false);
  const [routeExistsInRegistry, setRouteExistsInRegistry] = useState(false);
  
  const suggestedEnSlug = generateEnglishSlug(pair.esPath);
  const finalEnSlug = customSlug || suggestedEnSlug;

  // Validate if route exists in App.tsx and routeRegistryData.ts
  useEffect(() => {
    const inApp = findRouteInApp(finalEnSlug);
    const registeredRoutes = getRegisteredRoutes();
    const inRegistry = registeredRoutes.some(route => route.path === finalEnSlug);
    
    setRouteExistsInApp(inApp);
    setRouteExistsInRegistry(inRegistry);
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

          {/* Route validation status */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <ListChecks className="h-4 w-4" />
              <span className="text-sm font-medium">Estado de sincronización</span>
            </div>
            
            <div className="space-y-2">
              {/* App.tsx status */}
              <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <div className="flex items-center gap-2">
                  <FileCode className="h-4 w-4" />
                  <span className="text-sm">App.tsx</span>
                </div>
                <Badge variant={routeExistsInApp ? 'default' : 'destructive'}>
                  {routeExistsInApp ? (
                    <><CheckCircle className="h-3 w-3 mr-1" /> Existe</>
                  ) : (
                    <><AlertTriangle className="h-3 w-3 mr-1" /> Falta</>
                  )}
                </Badge>
              </div>

              {/* routeRegistryData.ts status */}
              <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4" />
                  <span className="text-sm">routeRegistryData.ts</span>
                </div>
                <Badge variant={routeExistsInRegistry ? 'default' : 'secondary'}>
                  {routeExistsInRegistry ? (
                    <><CheckCircle className="h-3 w-3 mr-1" /> Existe</>
                  ) : (
                    <><AlertTriangle className="h-3 w-3 mr-1" /> Falta</>
                  )}
                </Badge>
              </div>

              {/* Database status - will be created */}
              <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <div className="flex items-center gap-2">
                  <Database className="h-4 w-4" />
                  <span className="text-sm">seo_pages (DB)</span>
                </div>
                <Badge variant="outline">
                  Se creará automáticamente
                </Badge>
              </div>
            </div>
          </div>

          {/* Warning if route doesn't exist in App.tsx */}
          {!routeExistsInApp && (
            <Alert className="border-yellow-500 bg-yellow-50">
              <AlertTriangle className="h-4 w-4 text-yellow-600" />
              <AlertDescription>
                <strong className="text-yellow-700">⚠ Acción requerida antes de traducir</strong>
                <p className="text-sm text-muted-foreground mt-2">
                  Esta ruta no existe en <code className="bg-yellow-100 px-1 rounded">App.tsx</code>. 
                  Añádela primero para que la traducción funcione correctamente.
                </p>
                <div className="mt-3 p-2 bg-white rounded text-xs font-mono">
                  {`<Route path="${finalEnSlug}" element={<PageSuspense><Pages.YourComponent /></PageSuspense>} />`}
                </div>
              </AlertDescription>
            </Alert>
          )}

          {/* Info if route doesn't exist in registry */}
          {routeExistsInApp && !routeExistsInRegistry && (
            <Alert className="border-blue-500 bg-blue-50">
              <CheckCircle className="h-4 w-4 text-blue-600" />
              <AlertDescription>
                <strong className="text-blue-700">ℹ Recordatorio post-traducción</strong>
                <p className="text-sm text-muted-foreground mt-2">
                  Después de traducir, añade esta entrada a <code className="bg-blue-100 px-1 rounded">routeRegistryData.ts</code>:
                </p>
                <div className="mt-3 p-2 bg-white rounded text-xs font-mono">
                  {`{ path: '${finalEnSlug}', category: '${pair.category}', isIndexable: true, priority: 0.8, changefreq: 'weekly', isDynamic: false, isLegacy: false },`}
                </div>
              </AlertDescription>
            </Alert>
          )}

          {/* Success if everything is in place */}
          {routeExistsInApp && routeExistsInRegistry && (
            <Alert className="border-green-500 bg-green-50">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <AlertDescription>
                <strong className="text-green-700">✓ Listo para traducir</strong>
                <p className="text-sm text-muted-foreground mt-1">
                  La ruta existe en App.tsx y routeRegistryData.ts. La traducción creará automáticamente los datos SEO en la DB.
                </p>
              </AlertDescription>
            </Alert>
          )}

          <Separator />

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
