import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { getAllSpanishRoutes, getAllEnglishRoutes, categorizeRoute, getEnglishEquivalent, getSpanishEquivalent } from '@/utils/routeScanner';

export interface RouteInventoryItem {
  path: string;
  language: 'es' | 'en';
  category: string;
  status: 'complete' | 'translated' | 'pending' | 'code-only' | 'orphan';
  inApp: boolean;
  inDatabase: boolean;
  dbId?: string;
  translationPath?: string;
  translationId?: string;
  hasTranslation: boolean;
  // SEO Optimization Status
  seoOptimized: boolean;
  seoFullyOptimized: boolean;
  missingFields: string[];
  missingCriticalFields: string[];
  missingRecommendedFields: string[];
  title?: string;
  description?: string;
  keywords?: any;
  h1?: string;
  is_indexable?: boolean;
  // Priority fields
  priorityScore?: number;
  strategicImportance?: string;
  estimatedTraffic?: number;
  lastOptimizedAt?: string;
}

export const useAllRoutes = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['all-routes-inventory'],
    queryFn: async (): Promise<RouteInventoryItem[]> => {
      // 1. Obtener todas las rutas del código
      const allEsRoutes = getAllSpanishRoutes();
      const allEnRoutes = getAllEnglishRoutes();

      // 2. Obtener todas las páginas de la base de datos
      const { data: dbPages, error: dbError } = await supabase
        .from('seo_pages')
        .select('*')
        .in('in_language', ['es-ES', 'en-US']);

      if (dbError) throw dbError;

      // 3. Mapear páginas DB por path
      const dbPagesMap = new Map(
        (dbPages || []).map(page => [page.path, page])
      );

      // 4. Crear inventario completo
      const inventory: RouteInventoryItem[] = [];

      // Procesar rutas ES
      for (const esPath of allEsRoutes) {
        const dbPage = dbPagesMap.get(esPath);
        const enPath = getEnglishEquivalent(esPath);
        const enDbPage = enPath ? dbPagesMap.get(enPath) : null;

        // Verificar optimización SEO - Separar críticos de recomendados
        const missingCriticalFields: string[] = [];
        const missingRecommendedFields: string[] = [];
        
        if (dbPage) {
          // Campos críticos (bloqueantes)
          if (!dbPage.title || dbPage.title.length < 30) missingCriticalFields.push('title');
          if (!dbPage.description || dbPage.description.length < 120) missingCriticalFields.push('description');
          if (!dbPage.keywords || (Array.isArray(dbPage.keywords) && dbPage.keywords.length === 0)) missingCriticalFields.push('keywords');
          if (!dbPage.h1) missingCriticalFields.push('h1');
          
          // Campos recomendados (no bloqueantes)
          if (!dbPage.og_image) missingRecommendedFields.push('og_image');
        }

        // seoOptimized = críticos OK (puede faltar og_image)
        const seoOptimized = missingCriticalFields.length === 0 && !!dbPage;
        const seoFullyOptimized = seoOptimized && missingRecommendedFields.length === 0;

        let status: RouteInventoryItem['status'] = 'code-only';
        if (dbPage) {
          if (enDbPage?.is_indexable) {
            // Tiene traducción EN indexable: complete si SEO básico OK, translated si no
            status = seoOptimized ? 'complete' : 'translated';
          } else if (enDbPage) {
            // Existe EN pero no está indexable
            status = 'translated';
          } else {
            // No existe EN
            status = 'pending';
          }
        }

        inventory.push({
          path: esPath,
          language: 'es',
          category: categorizeRoute(esPath),
          status,
          inApp: true,
          inDatabase: !!dbPage,
          dbId: dbPage?.id,
          translationPath: enPath || undefined,
          translationId: enDbPage?.id,
          hasTranslation: !!enDbPage,
          seoOptimized,
          seoFullyOptimized,
          missingFields: [...missingCriticalFields, ...missingRecommendedFields],
          missingCriticalFields,
          missingRecommendedFields,
          title: dbPage?.title,
          description: dbPage?.description,
          keywords: dbPage?.keywords,
          h1: dbPage?.h1,
          is_indexable: dbPage?.is_indexable,
          priorityScore: dbPage?.priority_score || 0,
          strategicImportance: dbPage?.strategic_importance || 'medium',
          estimatedTraffic: dbPage?.estimated_traffic || 0,
          lastOptimizedAt: dbPage?.last_optimized_at || undefined,
        });
      }

      // Procesar rutas EN que no tienen equivalente ES (huérfanas)
      for (const enPath of allEnRoutes) {
        const esPath = getSpanishEquivalent(enPath);
        if (!esPath || !allEsRoutes.includes(esPath)) {
          const dbPage = dbPagesMap.get(enPath);
          
          inventory.push({
            path: enPath,
            language: 'en',
            category: categorizeRoute(enPath),
            status: 'orphan',
            inApp: true,
            inDatabase: !!dbPage,
            dbId: dbPage?.id,
            hasTranslation: false,
            seoOptimized: false,
            seoFullyOptimized: false,
            missingFields: ['spanish_original'],
            missingCriticalFields: ['spanish_original'],
            missingRecommendedFields: [],
            title: dbPage?.title,
            description: dbPage?.description,
            is_indexable: dbPage?.is_indexable,
          });
        }
      }

      // Procesar páginas DB que no están en el código (huérfanas)
      for (const dbPage of (dbPages || [])) {
        const existsInInventory = inventory.some(item => item.path === dbPage.path);
        if (!existsInInventory) {
          const isEs = dbPage.in_language === 'es-ES';
          
          inventory.push({
            path: dbPage.path,
            language: isEs ? 'es' : 'en',
            category: dbPage.category || categorizeRoute(dbPage.path),
            status: 'orphan',
            inApp: false,
            inDatabase: true,
            dbId: dbPage.id,
            hasTranslation: false,
            seoOptimized: false,
            seoFullyOptimized: false,
            missingFields: ['app_route'],
            missingCriticalFields: ['app_route'],
            missingRecommendedFields: [],
            title: dbPage.title,
            description: dbPage.description,
            is_indexable: dbPage.is_indexable,
          });
        }
      }

      // Ordenar por prioridad
      return inventory.sort((a, b) => {
        // Primero por status (pending > translated > complete > code-only > orphan)
        const statusOrder = { pending: 0, translated: 1, complete: 2, 'code-only': 3, orphan: 4 };
        const statusDiff = statusOrder[a.status] - statusOrder[b.status];
        if (statusDiff !== 0) return statusDiff;

        // Luego por categoría
        const categoryOrder = { main: 0, service: 1, solution: 2, tool: 3, blog: 4, 'case-study': 5, other: 6 };
        const catDiff = (categoryOrder[a.category as keyof typeof categoryOrder] || 6) - 
                        (categoryOrder[b.category as keyof typeof categoryOrder] || 6);
        if (catDiff !== 0) return catDiff;

        // Finalmente por path
        return a.path.localeCompare(b.path);
      });
    },
  });

  return {
    routes: data || [],
    isLoading,
    error,
  };
};
