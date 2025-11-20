import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useBatchSEOGeneration } from '@/hooks/useBatchSEOGeneration';
import { Loader2, CheckCircle2, XCircle, Sparkles, AlertTriangle, Database } from 'lucide-react';
import { useState, useEffect } from 'react';
import type { RouteInventoryItem } from '@/hooks/useAllRoutes';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';

interface BatchSEOGeneratorProps {
  isOpen: boolean;
  onClose: () => void;
  routes: RouteInventoryItem[];
  onSuccess: () => void;
}

export const BatchSEOGenerator = ({
  isOpen,
  onClose,
  routes,
  onSuccess,
}: BatchSEOGeneratorProps) => {
  const { generateBatchSEO, isProcessing, progress, reset } = useBatchSEOGeneration();
  const [autoSave, setAutoSave] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      reset();
      setHasStarted(false);
    }
  }, [isOpen, reset]);

  const handleStart = async () => {
    setHasStarted(true);

    await generateBatchSEO({
      pages: routes.map(r => ({
        path: r.path,
        category: r.category,
        pageContent: `Ruta: ${r.path}\nCategoría: ${r.category}\nTítulo: ${r.title || 'Sin título'}`,
      })),
      autoSave,
    });
  };

  const handleSaveAll = async () => {
    if (!progress) return;

    const successItems = progress.items.filter(
      item => item.status === 'success' && item.suggestions && !item.saved
    );

    if (successItems.length === 0) {
      toast({
        title: 'No hay datos para guardar',
        description: 'Todas las páginas exitosas ya han sido guardadas.',
      });
      return;
    }

    try {
      const insertData = successItems.map(item => ({
        path: item.path,
        title: item.suggestions!.title,
        description: item.suggestions!.description,
        h1: item.suggestions!.h1,
        keywords: item.suggestions!.keywords,
        canonical: item.path,
        category: item.category || 'general',
        in_language: 'es-ES',
        is_indexable: true,
      }));

      const { error } = await supabase.from('seo_pages').insert(insertData);

      if (error) throw error;

      toast({
        title: '✅ Guardado exitoso',
        description: `${successItems.length} páginas guardadas en la base de datos`,
      });

      onSuccess();
      onClose();
    } catch (error) {
      toast({
        title: '❌ Error al guardar',
        description: error instanceof Error ? error.message : 'Error desconocido',
        variant: 'destructive',
      });
    }
  };

  const percentageComplete = progress 
    ? Math.round((progress.completed / progress.total) * 100)
    : 0;

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'processing':
        return <Loader2 className="w-4 h-4 animate-spin text-blue-500" />;
      case 'success':
        return <CheckCircle2 className="w-4 h-4 text-green-500" />;
      case 'error':
        return <XCircle className="w-4 h-4 text-red-500" />;
      default:
        return <div className="w-4 h-4 rounded-full border-2 border-muted" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'processing':
        return <Badge variant="secondary">Procesando...</Badge>;
      case 'success':
        return <Badge variant="default">✓ Generado</Badge>;
      case 'error':
        return <Badge variant="destructive">✗ Error</Badge>;
      default:
        return <Badge variant="outline">Pendiente</Badge>;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[85vh] overflow-hidden flex flex-col">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" />
            Generación Masiva de SEO con IA
          </DialogTitle>
          <DialogDescription>
            {hasStarted 
              ? `Procesando ${routes.length} páginas...`
              : `Generar automáticamente SEO para ${routes.length} páginas seleccionadas`
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

          {/* Pages List */}
          <div className="flex-1 overflow-hidden">
            <ScrollArea className="h-full pr-4">
              <div className="space-y-2">
                {!hasStarted && (
                  <div className="bg-blue-500/10 p-4 rounded-lg mb-4">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                      <div className="text-sm">
                        <p className="font-semibold text-blue-700 mb-1">Antes de comenzar:</p>
                        <ul className="text-muted-foreground space-y-1 list-disc list-inside">
                          <li>Se procesarán {routes.length} páginas en lotes de 3</li>
                          <li>Cada lote tendrá 2 segundos de delay (rate limiting)</li>
                          <li>Tiempo estimado: ~{Math.ceil(routes.length / 3) * 2} segundos</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                {(progress?.items || routes.map(r => ({ path: r.path, category: r.category, status: 'pending' as const }))).map((item) => (
                  <Card key={item.path} className="p-3">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-start gap-3 flex-1 min-w-0">
                        {getStatusIcon(item.status)}
                        <div className="flex-1 min-w-0">
                          <p className="font-medium truncate">{item.path}</p>
                          {item.category && (
                            <p className="text-xs text-muted-foreground">
                              {item.category}
                            </p>
                          )}
                          {item.error && (
                            <p className="text-xs text-red-600 mt-1">
                              Error: {item.error}
                            </p>
                          )}
                          {item.suggestions && (
                            <div className="mt-2 text-xs space-y-1">
                              <p className="text-muted-foreground truncate">
                                <strong>Title:</strong> {item.suggestions.title}
                              </p>
                              <p className="text-muted-foreground truncate">
                                <strong>H1:</strong> {item.suggestions.h1}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="shrink-0">
                        {getStatusBadge(item.status)}
                        {item.saved && (
                          <Badge variant="outline" className="ml-2">
                            <Database className="w-3 h-3 mr-1" />
                            Guardado
                          </Badge>
                        )}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </ScrollArea>
          </div>

          {/* Actions */}
          <div className="space-y-3 pt-4 border-t">
            {!hasStarted && (
              <div className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg">
                <input
                  type="checkbox"
                  id="auto-save"
                  checked={autoSave}
                  onChange={(e) => setAutoSave(e.target.checked)}
                  className="rounded"
                />
                <label htmlFor="auto-save" className="text-sm cursor-pointer">
                  Guardar automáticamente al generar (recomendado)
                </label>
              </div>
            )}

            <div className="flex gap-3">
              {!hasStarted ? (
                <>
                  <Button
                    onClick={handleStart}
                    disabled={isProcessing}
                    className="flex-1"
                    size="lg"
                  >
                    <Sparkles className="w-4 h-4 mr-2" />
                    Iniciar Generación
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
                  {!isProcessing && progress && progress.successful > 0 && (
                    <>
                      {!autoSave && (
                        <Button
                          onClick={handleSaveAll}
                          className="flex-1"
                          size="lg"
                        >
                          <Database className="w-4 h-4 mr-2" />
                          Guardar Todas ({progress.successful})
                        </Button>
                      )}
                      <Button
                        onClick={() => {
                          onSuccess();
                          onClose();
                        }}
                        variant={autoSave ? "default" : "outline"}
                        size="lg"
                        className={autoSave ? "flex-1" : ""}
                      >
                        {autoSave ? 'Finalizar' : 'Cerrar'}
                      </Button>
                    </>
                  )}
                  {isProcessing && (
                    <Button disabled className="flex-1" size="lg">
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Procesando...
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
