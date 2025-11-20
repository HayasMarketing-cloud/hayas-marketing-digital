import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Input } from '@/components/ui/input';
import { useBatchTranslation } from '@/hooks/useBatchTranslation';
import { batchGenerateEnglishRoutes } from '@/utils/generateEnglishRoute';
import { Loader2, CheckCircle2, XCircle, Languages, AlertTriangle, Globe } from 'lucide-react';
import { useState, useEffect, useMemo } from 'react';
import type { RouteInventoryItem } from '@/hooks/useAllRoutes';

interface BatchTranslationGeneratorProps {
  isOpen: boolean;
  onClose: () => void;
  routes: RouteInventoryItem[];
  onSuccess: () => void;
}

interface RouteMapping {
  esPath: string;
  enPath: string;
  esPageId?: string;
  category?: string;
  isValid: boolean;
  warnings: string[];
}

export const BatchTranslationGenerator = ({
  isOpen,
  onClose,
  routes,
  onSuccess,
}: BatchTranslationGeneratorProps) => {
  const { batchTranslate, isProcessing, progress, reset } = useBatchTranslation();
  const [hasStarted, setHasStarted] = useState(false);
  const [routeMappings, setRouteMappings] = useState<RouteMapping[]>([]);

  // Generate initial mappings when dialog opens
  useEffect(() => {
    if (isOpen && routes.length > 0) {
      const generated = batchGenerateEnglishRoutes(routes.map(r => r.path));
      const mappings = generated.map((gen, index) => ({
        esPath: gen.esPath,
        enPath: gen.enPath,
        esPageId: undefined, // Routes don't have IDs, they come from code
        category: routes[index].category,
        isValid: gen.isValid,
        warnings: gen.warnings,
      }));
      setRouteMappings(mappings);
    }
  }, [isOpen, routes]);

  useEffect(() => {
    if (!isOpen) {
      reset();
      setHasStarted(false);
    }
  }, [isOpen, reset]);

  const handleStart = async () => {
    setHasStarted(true);

    await batchTranslate({
      pages: routeMappings.map(m => ({
        esPath: m.esPath,
        enPath: m.enPath,
        esPageId: m.esPageId,
        category: m.category,
      })),
    });

    onSuccess();
  };

  const handleEditEnPath = (index: number, newEnPath: string) => {
    const updated = [...routeMappings];
    updated[index].enPath = newEnPath;
    setRouteMappings(updated);
  };

  const percentageComplete = progress 
    ? Math.round((progress.completed / progress.total) * 100)
    : 0;

  const invalidMappings = useMemo(
    () => routeMappings.filter(m => !m.isValid).length,
    [routeMappings]
  );

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'processing':
        return <Loader2 className="w-4 h-4 animate-spin text-blue-500" />;
      case 'success':
        return <CheckCircle2 className="w-4 h-4 text-green-500" />;
      case 'error':
        return <XCircle className="w-4 h-4 text-red-500" />;
      default:
        return <Globe className="w-4 h-4 text-muted-foreground" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'processing':
        return <Badge variant="secondary">Traduciendo...</Badge>;
      case 'success':
        return <Badge variant="default">✓ Traducido</Badge>;
      case 'error':
        return <Badge variant="destructive">✗ Error</Badge>;
      default:
        return <Badge variant="outline">Pendiente</Badge>;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[85vh] overflow-hidden flex flex-col">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Languages className="w-5 h-5 text-primary" />
            Traducción Masiva ES → EN
          </DialogTitle>
          <DialogDescription>
            {hasStarted 
              ? `Traduciendo ${routes.length} páginas al inglés...`
              : `Traducir automáticamente ${routes.length} páginas al inglés con IA`
            }
          </DialogDescription>
        </DialogHeader>

        <div className="flex-1 overflow-hidden flex flex-col gap-4">
          {/* Progress Section */}
          {progress && (
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium">Progreso General</span>
                <span className="text-muted-foreground">
                  {progress.completed} / {progress.total} páginas
                </span>
              </div>
              <Progress value={percentageComplete} className="h-3" />
              
              <div className="grid grid-cols-3 gap-2 text-sm">
                <Card className="p-3 bg-green-500/10 border-green-500/20">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    <div>
                      <div className="font-semibold text-green-700">{progress.successful}</div>
                      <div className="text-xs text-muted-foreground">Exitosas</div>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-3 bg-red-500/10 border-red-500/20">
                  <div className="flex items-center gap-2">
                    <XCircle className="w-4 h-4 text-red-600" />
                    <div>
                      <div className="font-semibold text-red-700">{progress.failed}</div>
                      <div className="text-xs text-muted-foreground">Fallidas</div>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-3 bg-muted/50">
                  <div className="flex items-center gap-2">
                    <Loader2 className={`w-4 h-4 ${isProcessing ? 'animate-spin text-blue-500' : 'text-muted-foreground'}`} />
                    <div>
                      <div className="font-semibold">{progress.total - progress.completed}</div>
                      <div className="text-xs text-muted-foreground">Pendientes</div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          )}

          {/* Route Mappings Preview/List */}
          <div className="flex-1 overflow-hidden">
            <ScrollArea className="h-full pr-4">
              <div className="space-y-2">
                {!hasStarted && invalidMappings > 0 && (
                  <div className="bg-yellow-500/10 p-4 rounded-lg mb-4">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-yellow-600 shrink-0 mt-0.5" />
                      <div className="text-sm">
                        <p className="font-semibold text-yellow-700 mb-1">Advertencias:</p>
                        <p className="text-muted-foreground">
                          {invalidMappings} ruta{invalidMappings !== 1 ? 's' : ''} con advertencias. 
                          Revisa y edita las rutas EN si es necesario.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {!hasStarted && (
                  <div className="bg-blue-500/10 p-4 rounded-lg mb-4">
                    <div className="flex items-start gap-3">
                      <Languages className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                      <div className="text-sm">
                        <p className="font-semibold text-blue-700 mb-1">Preview del mapeo:</p>
                        <ul className="text-muted-foreground space-y-1 list-disc list-inside">
                          <li>Las rutas EN se han generado automáticamente</li>
                          <li>Puedes editarlas antes de iniciar la traducción</li>
                          <li>Se procesarán {routes.length} páginas en lotes de 3</li>
                          <li>Tiempo estimado: ~{Math.ceil(routes.length / 3) * 2} segundos</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                {(progress?.items || routeMappings.map((m, i) => ({ 
                  esPath: m.esPath, 
                  enPath: m.enPath,
                  status: 'pending' as const,
                  index: i,
                }))).map((item, index) => {
                  const mapping = routeMappings[index];
                  const progressItem = progress?.items.find(pi => pi.esPath === item.esPath);
                  
                  return (
                    <Card key={item.esPath} className="p-3">
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-start gap-3 flex-1 min-w-0">
                          {getStatusIcon(progressItem?.status || 'pending')}
                          <div className="flex-1 min-w-0 space-y-2">
                            <div className="grid grid-cols-2 gap-3">
                              <div>
                                <p className="text-xs text-muted-foreground mb-1">🇪🇸 Español</p>
                                <p className="font-medium text-sm truncate">{item.esPath}</p>
                              </div>
                              <div>
                                <p className="text-xs text-muted-foreground mb-1">🇬🇧 English</p>
                                {!hasStarted ? (
                                  <Input
                                    value={mapping?.enPath || item.enPath}
                                    onChange={(e) => handleEditEnPath(index, e.target.value)}
                                    className="h-8 text-sm"
                                  />
                                ) : (
                                  <p className="font-medium text-sm truncate">{item.enPath}</p>
                                )}
                              </div>
                            </div>
                            
                            {!hasStarted && mapping?.warnings && mapping.warnings.length > 0 && (
                              <div className="text-xs text-yellow-600 bg-yellow-500/10 p-2 rounded">
                                ⚠️ {mapping.warnings.join(', ')}
                              </div>
                            )}
                            
                            {progressItem?.error && (
                              <p className="text-xs text-red-600 bg-red-500/10 p-2 rounded">
                                Error: {progressItem.error}
                              </p>
                            )}
                          </div>
                        </div>
                        <div className="shrink-0">
                          {getStatusBadge(progressItem?.status || 'pending')}
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </ScrollArea>
          </div>

          {/* Actions */}
          <div className="space-y-3 pt-4 border-t">
            <div className="flex gap-3">
              {!hasStarted ? (
                <>
                  <Button
                    onClick={handleStart}
                    disabled={isProcessing || invalidMappings > 0}
                    className="flex-1"
                    size="lg"
                  >
                    <Languages className="w-4 h-4 mr-2" />
                    Iniciar Traducción
                  </Button>
                  <Button
                    onClick={onClose}
                    variant="outline"
                    size="lg"
                  >
                    Cancelar
                  </Button>
                </>
              ) : (
                <>
                  {!isProcessing && progress && (
                    <Button
                      onClick={() => {
                        onSuccess();
                        onClose();
                      }}
                      className="flex-1"
                      size="lg"
                    >
                      Finalizar
                    </Button>
                  )}
                  {isProcessing && (
                    <Button disabled className="flex-1" size="lg">
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Traduciendo...
                    </Button>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
