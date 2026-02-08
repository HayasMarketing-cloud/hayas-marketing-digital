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
import { Progress } from '@/components/ui/progress';
import { 
  AlertCircle, 
  Plus, 
  Trash2, 
  AlertTriangle,
  CheckCircle2,
  Loader2,
  Sparkles,
  Brain,
  Zap
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

interface GenerationProgress {
  current: number;
  total: number;
  currentPath: string;
  aiSuccess: number;
  fallbackUsed: number;
  errors: number;
}

// Detectar idioma de la ruta
const detectLanguageFromPath = (path: string): 'es' | 'en' => {
  return path.startsWith('/en/') || path === '/en' ? 'en' : 'es';
};

export const SyncReportModal: React.FC<SyncReportModalProps> = ({
  isOpen,
  onClose,
  report,
}) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [useAI, setUseAI] = useState(true);
  const [progress, setProgress] = useState<GenerationProgress | null>(null);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  // Generar SEO con IA para una ruta específica
  const generateWithAI = async (route: RouteDefinition): Promise<{
    success: boolean;
    data?: any;
    usedAI: boolean;
  }> => {
    try {
      const targetLanguage = detectLanguageFromPath(route.path);
      
      const { data, error } = await supabase.functions.invoke('generate-seo-suggestions', {
        body: {
          path: route.path,
          category: route.category,
          targetLanguage,
        },
      });

      if (error) throw error;
      if (!data?.success || !data?.suggestions) {
        throw new Error('No suggestions received');
      }

      return {
        success: true,
        data: data.suggestions,
        usedAI: true,
      };
    } catch (error) {
      console.warn(`⚠️ AI generation failed for ${route.path}, using fallback:`, error);
      return {
        success: true,
        data: null,
        usedAI: false,
      };
    }
  };

  // Crear entrada SEO en la base de datos
  const createSEOEntry = async (
    route: RouteDefinition,
    aiSuggestions: any | null
  ): Promise<boolean> => {
    try {
      const targetLanguage = detectLanguageFromPath(route.path);
      const inLanguage = targetLanguage === 'en' ? 'en-US' : 'es-ES';
      
      // Si tenemos sugerencias de IA, usarlas; si no, usar autoSEO básico
      if (aiSuggestions) {
        await supabase.from('seo_pages').insert({
          path: route.path,
          title: aiSuggestions.title || 'Sin título',
          h1: aiSuggestions.h1 || aiSuggestions.title || 'Sin título',
          description: aiSuggestions.description || '',
          canonical: `https://hayasmarketing.com${route.path}`,
          category: route.category || 'main',
          keywords: aiSuggestions.keywords || [],
          h2_primary: aiSuggestions.h2_primary || null,
          schema_type: route.category === 'service' ? 'Service' : 'WebPage',
          og_type: 'website',
          in_language: inLanguage,
          robots: 'index, follow',
          is_indexable: route.isIndexable !== false,
          about: [],
          mentions: [],
        });
      } else {
        // Fallback a generación básica
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
          in_language: inLanguage,
          robots: autoSEO.robots || 'index, follow',
          is_indexable: route.isIndexable,
          about: autoSEO.about || [],
          mentions: autoSEO.mentions || [],
        });
      }
      
      return true;
    } catch (error) {
      console.error(`Error creando SEO para ${route.path}:`, error);
      return false;
    }
  };

  const handleCreateAutoSEO = async () => {
    setIsProcessing(true);
    setProgress({
      current: 0,
      total: report.newRoutes.length,
      currentPath: '',
      aiSuccess: 0,
      fallbackUsed: 0,
      errors: 0,
    });

    try {
      let aiSuccess = 0;
      let fallbackUsed = 0;
      let errors = 0;

      for (let i = 0; i < report.newRoutes.length; i++) {
        const route = report.newRoutes[i];
        
        setProgress(prev => prev ? {
          ...prev,
          current: i + 1,
          currentPath: route.path,
        } : null);

        let aiData = null;
        let usedAI = false;

        // Intentar generación con IA si está habilitada
        if (useAI) {
          const result = await generateWithAI(route);
          if (result.usedAI && result.data) {
            aiData = result.data;
            usedAI = true;
          }
          
          // Pausa entre llamadas para evitar rate limiting (800ms)
          if (i < report.newRoutes.length - 1) {
            await new Promise(resolve => setTimeout(resolve, 800));
          }
        }

        // Crear entrada en la base de datos
        const success = await createSEOEntry(route, aiData);
        
        if (success) {
          if (usedAI) {
            aiSuccess++;
          } else {
            fallbackUsed++;
          }
        } else {
          errors++;
        }

        setProgress(prev => prev ? {
          ...prev,
          aiSuccess,
          fallbackUsed,
          errors,
        } : null);
      }

      await queryClient.invalidateQueries({ queryKey: ['seo-pages'] });

      const totalSuccess = aiSuccess + fallbackUsed;
      toast({
        title: '✨ SEO generado con IA',
        description: `✅ ${totalSuccess} rutas creadas (${aiSuccess} con IA, ${fallbackUsed} básico)${errors > 0 ? ` | ⚠️ ${errors} errores` : ''}`,
        duration: 5000,
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
      setProgress(null);
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

  const progressPercent = progress 
    ? Math.round((progress.current / progress.total) * 100) 
    : 0;

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
            {/* Progress indicator during processing */}
            {progress && (
              <div className="p-4 rounded-lg bg-primary/5 border border-primary/20 space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-2">
                    <Brain className="h-4 w-4 text-primary animate-pulse" />
                    Generando con IA...
                  </span>
                  <span className="font-mono text-xs">
                    {progress.current}/{progress.total}
                  </span>
                </div>
                <Progress value={progressPercent} className="h-2" />
                <div className="text-xs text-muted-foreground font-mono truncate">
                  {progress.currentPath}
                </div>
                <div className="flex gap-4 text-xs">
                  <span className="text-green-600">
                    ✓ IA: {progress.aiSuccess}
                  </span>
                  <span className="text-yellow-600">
                    ○ Básico: {progress.fallbackUsed}
                  </span>
                  {progress.errors > 0 && (
                    <span className="text-red-600">
                      ✕ Errores: {progress.errors}
                    </span>
                  )}
                </div>
              </div>
            )}

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
              {isProcessing && !progress ? (
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              ) : (
                <Trash2 className="h-4 w-4 mr-2" />
              )}
              Eliminar obsoletos
            </Button>
          )}
          
          {report.newRoutes.length > 0 && (
            <div className="flex gap-2">
              {/* Toggle AI mode */}
              <Button
                variant="outline"
                size="sm"
                onClick={() => setUseAI(!useAI)}
                disabled={isProcessing}
                className={useAI ? 'border-primary text-primary' : 'text-muted-foreground'}
                title={useAI ? 'IA activada - click para desactivar' : 'IA desactivada - click para activar'}
              >
                {useAI ? (
                  <Brain className="h-4 w-4" />
                ) : (
                  <Zap className="h-4 w-4" />
                )}
              </Button>
              
              <Button
                onClick={handleCreateAutoSEO}
                disabled={isProcessing}
                className="bg-primary hover:bg-primary/90"
              >
                {isProcessing ? (
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                ) : useAI ? (
                  <Brain className="h-4 w-4 mr-2" />
                ) : (
                  <Sparkles className="h-4 w-4 mr-2" />
                )}
                {useAI ? 'Generar con IA' : 'Generar básico'} ({report.newRoutes.length})
              </Button>
            </div>
          )}
          
          <Button variant="outline" onClick={onClose} disabled={isProcessing}>
            Cerrar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
