import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { RefreshCw } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useQueryClient } from '@tanstack/react-query';
import { getRegisteredRoutes } from '@/utils/routeRegistryData';
import { useAllSEOPages } from '@/hooks/useSEOData';
import { SyncReportModal, SyncReport } from './SyncReportModal';

export const SyncRoutesButton: React.FC = () => {
  const [isSyncing, setIsSyncing] = useState(false);
  const [showReport, setShowReport] = useState(false);
  const [syncReport, setSyncReport] = useState<SyncReport | null>(null);
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const { data: allSEOPages, isLoading } = useAllSEOPages();

  const analyzeSyncStatus = async (): Promise<SyncReport> => {
    // Obtener todas las rutas registradas
    const registeredRoutes = getRegisteredRoutes();
    
    // Obtener todos los datos SEO de la BD
    const seoPages = allSEOPages || [];
    const seoPagePaths = new Set(seoPages.map(p => p.path));
    const registryPaths = new Set(registeredRoutes.map(r => r.path));

    // 1. Detectar rutas nuevas sin SEO
    const newRoutes = registeredRoutes.filter(
      route => !seoPagePaths.has(route.path) && route.isIndexable
    );

    // 2. Detectar SEO sin ruta correspondiente (obsoletos)
    const orphanedSEO = seoPages
      .filter(seo => !registryPaths.has(seo.path))
      .map(seo => ({ path: seo.path, title: seo.data.title }));

    // 3. Detectar inconsistencias (rutas que existen en ambos pero con diferencias)
    const inconsistencies: SyncReport['inconsistencies'] = [];
    
    seoPages.forEach(seoPage => {
      const registryRoute = registeredRoutes.find(r => r.path === seoPage.path);
      if (!registryRoute) return; // Ya está en orphaned
      
      // Comparar categorías
      if (seoPage.data.category !== registryRoute.category) {
        inconsistencies.push({
          path: seoPage.path,
          issue: 'Categoría no coincide',
          registryValue: registryRoute.category || 'N/A',
          dbValue: seoPage.data.category || 'N/A',
        });
      }
      
      // Comparar indexabilidad
      if (seoPage.data.isIndexable !== registryRoute.isIndexable) {
        inconsistencies.push({
          path: seoPage.path,
          issue: 'Indexabilidad no coincide',
          registryValue: registryRoute.isIndexable ? 'Indexable' : 'No indexable',
          dbValue: seoPage.data.isIndexable ? 'Indexable' : 'No indexable',
        });
      }
    });

    // 4. Generar recomendaciones
    const recommendations: string[] = [];
    
    if (newRoutes.length > 0) {
      recommendations.push(
        `Crear SEO auto-generado para ${newRoutes.length} ruta(s) nueva(s) detectada(s)`
      );
    }
    
    if (orphanedSEO.length > 0) {
      recommendations.push(
        `Eliminar ${orphanedSEO.length} registro(s) SEO obsoleto(s) que ya no tienen ruta`
      );
    }
    
    if (inconsistencies.length > 0) {
      recommendations.push(
        `Revisar manualmente ${inconsistencies.length} inconsistencia(s) detectada(s)`
      );
    }
    
    if (recommendations.length === 0) {
      recommendations.push('✅ Todas las rutas están sincronizadas correctamente');
    }

    return {
      newRoutes,
      orphanedSEO,
      inconsistencies,
      recommendations,
    };
  };

  const handleSync = async () => {
    if (isLoading) {
      toast({
        title: 'Cargando datos',
        description: 'Espera a que terminen de cargar los datos SEO',
      });
      return;
    }

    setIsSyncing(true);
    
    try {
      // Invalidar cache para obtener datos frescos
      await queryClient.invalidateQueries({ queryKey: ['seo-pages'] });
      
      // Analizar estado de sincronización
      const report = await analyzeSyncStatus();
      
      setSyncReport(report);
      setShowReport(true);
      
      const totalIssues = 
        report.newRoutes.length + 
        report.orphanedSEO.length + 
        report.inconsistencies.length;
      
      if (totalIssues === 0) {
        toast({
          title: 'Sincronización completa',
          description: '✅ Todas las rutas están sincronizadas',
          duration: 3000,
        });
      }
    } catch (error) {
      console.error('Error en sincronización:', error);
      toast({
        title: 'Error en sincronización',
        description: 'No se pudo analizar el estado de las rutas',
        variant: 'destructive'
      });
    } finally {
      setIsSyncing(false);
    }
  };

  return (
    <>
      <Button
        onClick={handleSync}
        disabled={isSyncing || isLoading}
        variant="outline"
        size="sm"
      >
        {isSyncing ? (
          <>
            <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
            Analizando...
          </>
        ) : (
          <>
            <RefreshCw className="h-4 w-4 mr-2" />
            Sincronizar Rutas
          </>
        )}
      </Button>

      {syncReport && (
        <SyncReportModal
          isOpen={showReport}
          onClose={() => setShowReport(false)}
          report={syncReport}
        />
      )}
    </>
  );
};
