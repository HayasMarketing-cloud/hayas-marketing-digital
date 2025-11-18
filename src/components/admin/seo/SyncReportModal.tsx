import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { 
  AlertCircle, 
  Plus, 
  Trash2, 
  AlertTriangle,
  CheckCircle2,
  Loader2,
  Sparkles
} from 'lucide-react';
import { RouteDefinition } from '@/utils/routeRegistry';
import { useToast } from '@/hooks/use-toast';
import { useQueryClient } from '@tanstack/react-query';
import { generateAutoSEO } from '@/utils/autoSEO';
import { supabase } from '@/integrations/supabase/client';

export interface SyncReport {
  newRoutes: RouteDefinition[];
  orphanedSEO: Array<{ path: string; title: string }>;
  inconsistencies: Array<{
    path: string;
    issue: string;
    registryValue: string;
    dbValue: string;
  }>;
  recommendations: string[];
}

interface SyncReportModalProps {
  isOpen: boolean;
  onClose: () => void;
  report: SyncReport;
}

export const SyncReportModal: React.FC<SyncReportModalProps> = ({
  isOpen,
  onClose,
  report,
}) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const handleCreateAutoSEO = async () => {
    setIsProcessing(true);
    try {
      let successCount = 0;
      let errorCount = 0;

      for (const route of report.newRoutes) {
        try {
          const autoSEO = generateAutoSEO(route.path, route.category);
          
          await supabase.from('seo_pages').insert({
            path: route.path,
            title: autoSEO.title || 'Sin título',
            h1: autoSEO.h1 || 'Sin título',
            description: autoSEO.description || '',
            canonical: autoSEO.canonical || route.path,
            category: autoSEO.category || 'main',
            keywords: autoSEO.keywords || [],
            schema_type: autoSEO.schemaType || 'WebPage',
            og_type: autoSEO.ogType || 'website',
            in_language: autoSEO.inLanguage || 'es-ES',
            robots: autoSEO.robots || 'index, follow',
            is_indexable: route.isIndexable,
            about: autoSEO.about || [],
            mentions: autoSEO.mentions || [],
          });
          
          successCount++;
        } catch (error) {
          console.error(`Error creando SEO para ${route.path}:`, error);
          errorCount++;
        }
      }

      await queryClient.invalidateQueries({ queryKey: ['seo-pages'] });

      toast({
        title: 'SEO auto-generado creado',
        description: `✅ ${successCount} rutas procesadas${errorCount > 0 ? ` | ⚠️ ${errorCount} errores` : ''}`,
        duration: 4000,
      });

      onClose();
    } catch (error) {
      console.error('Error en creación masiva:', error);
      toast({
        title: 'Error en sincronización',
        description: 'No se pudieron crear todos los registros SEO',
        variant: 'destructive',
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const handleDeleteOrphaned = async () => {
    if (report.orphanedSEO.length === 0) return;
    
    setIsProcessing(true);
    try {
      const paths = report.orphanedSEO.map(o => o.path);
      
      const { error } = await supabase
        .from('seo_pages')
        .delete()
        .in('path', paths);

      if (error) throw error;

      await queryClient.invalidateQueries({ queryKey: ['seo-pages'] });

      toast({
        title: 'Rutas obsoletas eliminadas',
        description: `Se eliminaron ${paths.length} registros SEO obsoletos`,
        duration: 3000,
      });

      onClose();
    } catch (error) {
      console.error('Error eliminando rutas obsoletas:', error);
      toast({
        title: 'Error al eliminar',
        description: 'No se pudieron eliminar las rutas obsoletas',
        variant: 'destructive',
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const totalIssues = 
    report.newRoutes.length + 
    report.orphanedSEO.length + 
    report.inconsistencies.length;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" />
            Reporte de Sincronización
          </DialogTitle>
          <DialogDescription>
            Análisis de rutas detectadas vs. datos SEO en base de datos
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="max-h-[50vh] pr-4">
          <div className="space-y-6">
            {/* Summary */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
                <div className="text-2xl font-bold text-blue-600">
                  {report.newRoutes.length}
                </div>
                <div className="text-sm text-muted-foreground">
                  Rutas nuevas
                </div>
              </div>
              <div className="text-center p-4 rounded-lg bg-orange-500/10 border border-orange-500/20">
                <div className="text-2xl font-bold text-orange-600">
                  {report.orphanedSEO.length}
                </div>
                <div className="text-sm text-muted-foreground">
                  SEO obsoletos
                </div>
              </div>
              <div className="text-center p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
                <div className="text-2xl font-bold text-yellow-600">
                  {report.inconsistencies.length}
                </div>
                <div className="text-sm text-muted-foreground">
                  Inconsistencias
                </div>
              </div>
            </div>

            {totalIssues === 0 ? (
              <div className="text-center py-8">
                <CheckCircle2 className="h-12 w-12 text-green-500 mx-auto mb-3" />
                <p className="text-lg font-semibold">¡Todo sincronizado!</p>
                <p className="text-sm text-muted-foreground">
                  No se detectaron problemas entre rutas y datos SEO
                </p>
              </div>
            ) : (
              <>
                {/* New Routes */}
                {report.newRoutes.length > 0 && (
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Plus className="h-4 w-4 text-blue-500" />
                      <h3 className="font-semibold">Rutas sin SEO ({report.newRoutes.length})</h3>
                      <Badge variant="secondary" className="ml-auto">
                        Acción recomendada
                      </Badge>
                    </div>
                    <div className="space-y-2">
                      {report.newRoutes.slice(0, 10).map((route) => (
                        <div
                          key={route.path}
                          className="p-3 rounded-lg bg-muted/30 border text-sm"
                        >
                          <div className="font-mono text-xs text-muted-foreground">
                            {route.path}
                          </div>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge variant="outline" className="text-xs">
                              {route.category}
                            </Badge>
                            <span className="text-xs text-muted-foreground">
                              Prioridad: {route.priority}
                            </span>
                          </div>
                        </div>
                      ))}
                      {report.newRoutes.length > 10 && (
                        <p className="text-xs text-muted-foreground text-center pt-2">
                          ... y {report.newRoutes.length - 10} rutas más
                        </p>
                      )}
                    </div>
                  </div>
                )}

                {report.newRoutes.length > 0 && report.orphanedSEO.length > 0 && (
                  <Separator />
                )}

                {/* Orphaned SEO */}
                {report.orphanedSEO.length > 0 && (
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Trash2 className="h-4 w-4 text-orange-500" />
                      <h3 className="font-semibold">SEO sin ruta ({report.orphanedSEO.length})</h3>
                      <Badge variant="outline" className="ml-auto border-orange-500 text-orange-500">
                        Limpieza sugerida
                      </Badge>
                    </div>
                    <div className="space-y-2">
                      {report.orphanedSEO.slice(0, 8).map((seo) => (
                        <div
                          key={seo.path}
                          className="p-3 rounded-lg bg-orange-500/5 border border-orange-500/20 text-sm"
                        >
                          <div className="font-mono text-xs text-muted-foreground">
                            {seo.path}
                          </div>
                          <div className="text-xs mt-1 truncate">
                            {seo.title}
                          </div>
                        </div>
                      ))}
                      {report.orphanedSEO.length > 8 && (
                        <p className="text-xs text-muted-foreground text-center pt-2">
                          ... y {report.orphanedSEO.length - 8} registros más
                        </p>
                      )}
                    </div>
                  </div>
                )}

                {report.inconsistencies.length > 0 && (
                  <>
                    <Separator />
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <AlertTriangle className="h-4 w-4 text-yellow-500" />
                        <h3 className="font-semibold">Inconsistencias detectadas</h3>
                      </div>
                      <div className="space-y-2">
                        {report.inconsistencies.slice(0, 5).map((issue, idx) => (
                          <div
                            key={idx}
                            className="p-3 rounded-lg bg-yellow-500/5 border border-yellow-500/20 text-sm"
                          >
                            <div className="font-mono text-xs text-muted-foreground mb-1">
                              {issue.path}
                            </div>
                            <div className="text-xs">{issue.issue}</div>
                            <div className="flex gap-3 mt-2 text-xs">
                              <span className="text-muted-foreground">
                                Registry: <span className="font-medium">{issue.registryValue}</span>
                              </span>
                              <span className="text-muted-foreground">
                                DB: <span className="font-medium">{issue.dbValue}</span>
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )}

                {/* Recommendations */}
                {report.recommendations.length > 0 && (
                  <>
                    <Separator />
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <AlertCircle className="h-4 w-4 text-primary" />
                        <h3 className="font-semibold">Recomendaciones</h3>
                      </div>
                      <ul className="space-y-2">
                        {report.recommendations.map((rec, idx) => (
                          <li key={idx} className="text-sm flex gap-2">
                            <span className="text-primary">•</span>
                            <span>{rec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                )}
              </>
            )}
          </div>
        </ScrollArea>

        <DialogFooter className="flex-col sm:flex-row gap-2">
          {report.orphanedSEO.length > 0 && (
            <Button
              variant="outline"
              onClick={handleDeleteOrphaned}
              disabled={isProcessing}
              className="border-orange-500 text-orange-500 hover:bg-orange-500/10"
            >
              {isProcessing ? (
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              ) : (
                <Trash2 className="h-4 w-4 mr-2" />
              )}
              Eliminar obsoletos
            </Button>
          )}
          
          {report.newRoutes.length > 0 && (
            <Button
              onClick={handleCreateAutoSEO}
              disabled={isProcessing}
              className="bg-blue-500 hover:bg-blue-600"
            >
              {isProcessing ? (
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              ) : (
                <Sparkles className="h-4 w-4 mr-2" />
              )}
              Crear SEO auto-generado ({report.newRoutes.length})
            </Button>
          )}
          
          <Button variant="outline" onClick={onClose} disabled={isProcessing}>
            Cerrar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
