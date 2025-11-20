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
  missingFields: string[];
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

        // Verificar optimización SEO
        const missingFields: string[] = [];
        if (dbPage) {
          if (!dbPage.title || dbPage.title.length < 30) missingFields.push('title');
          if (!dbPage.description || dbPage.description.length < 120) missingFields.push('description');
          if (!dbPage.keywords || (Array.isArray(dbPage.keywords) && dbPage.keywords.length === 0)) missingFields.push('keywords');
          if (!dbPage.h1) missingFields.push('h1');
          if (!dbPage.og_image) missingFields.push('og_image');
        }

        let status: RouteInventoryItem['status'] = 'code-only';
        if (dbPage) {
          if (enDbPage?.is_indexable) {
            status = missingFields.length === 0 ? 'complete' : 'translated';
          } else if (enDbPage) {
            status = 'translated'; // Existe pero no está indexable
          } else {
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
          seoOptimized: missingFields.length === 0 && !!dbPage,
          missingFields,
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
            missingFields: ['spanish_original'],
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
            missingFields: ['app_route'],
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
