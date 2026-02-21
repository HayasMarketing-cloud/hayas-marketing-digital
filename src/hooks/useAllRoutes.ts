import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { getAllSpanishRoutes, getAllEnglishRoutes, categorizeRoute, getEnglishEquivalent, getSpanishEquivalent, isDynamicRouteMatch, isEnRouteInApp } from '@/utils/routeScanner';
import { findRouteInApp } from '@/utils/routeExtractor';

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
  // EN page details
  enPageData?: {
    title?: string;
    description?: string;
    h1?: string;
    keywords?: any;
    is_indexable?: boolean;
    og_image?: string;
    translation_of?: string;
    dbId?: string;
  };
  enRouteInApp?: boolean;
  // Priority fields
  priorityScore?: number;
  strategicImportance?: string;
  estimatedTraffic?: number;
  lastOptimizedAt?: string;
}

// ─── Helper: evaluate SEO completeness ───
function evaluateSEO(dbPage: any) {
  const missingCriticalFields: string[] = [];
  const missingRecommendedFields: string[] = [];

  if (!dbPage.title || dbPage.title.length < 30) missingCriticalFields.push('title');
  if (!dbPage.description || dbPage.description.length < 120) missingCriticalFields.push('description');
  if (!dbPage.keywords || (Array.isArray(dbPage.keywords) && dbPage.keywords.length === 0)) missingCriticalFields.push('keywords');
  if (!dbPage.h1) missingCriticalFields.push('h1');
  if (!dbPage.og_image) missingRecommendedFields.push('og_image');

  const seoOptimized = missingCriticalFields.length === 0;
  const seoFullyOptimized = seoOptimized && missingRecommendedFields.length === 0;

  return { missingCriticalFields, missingRecommendedFields, seoOptimized, seoFullyOptimized };
}

// ─── Helper: build inventory item ───
function buildInventoryItem(
  esPath: string,
  dbPage: any | null,
  enDbPage: any | null,
  enPath: string | null,
  inApp: boolean,
): RouteInventoryItem {
  const { missingCriticalFields, missingRecommendedFields, seoOptimized, seoFullyOptimized } = dbPage
    ? evaluateSEO(dbPage)
    : { missingCriticalFields: [], missingRecommendedFields: [], seoOptimized: false, seoFullyOptimized: false };

  let status: RouteInventoryItem['status'] = 'code-only';
  if (dbPage) {
    if (enDbPage?.is_indexable) {
      status = seoOptimized ? 'complete' : 'translated';
    } else if (enDbPage) {
      status = 'translated';
    } else {
      status = 'pending';
    }
  }

  const enRouteInApp = enPath ? isEnRouteInApp(enPath) : false;

  return {
    path: esPath,
    language: 'es',
    category: dbPage?.category || categorizeRoute(esPath),
    status,
    inApp,
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
    enPageData: enDbPage ? {
      title: enDbPage.title,
      description: enDbPage.description,
      h1: enDbPage.h1,
      keywords: enDbPage.keywords,
      is_indexable: enDbPage.is_indexable,
      og_image: enDbPage.og_image,
      translation_of: enDbPage.translation_of,
      dbId: enDbPage.id,
    } : undefined,
    enRouteInApp,
    priorityScore: dbPage?.priority_score || 0,
    strategicImportance: dbPage?.strategic_importance || 'medium',
    estimatedTraffic: dbPage?.estimated_traffic || 0,
    lastOptimizedAt: dbPage?.last_optimized_at || undefined,
  };
}

export const useAllRoutes = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['all-routes-inventory'],
    queryFn: async (): Promise<RouteInventoryItem[]> => {
      // 1. Hardcoded routes from code
      const allEsRoutes = getAllSpanishRoutes();
      const allEnRoutes = getAllEnglishRoutes();

      // 2. All pages from DB
      const { data: dbPages, error: dbError } = await supabase
        .from('seo_pages')
        .select('*')
        .in('in_language', ['es-ES', 'en-US']);

      if (dbError) throw dbError;

      // 3. Map DB pages by path
      const dbPagesMap = new Map((dbPages || []).map(page => [page.path, page]));

      const inventory: RouteInventoryItem[] = [];
      const processedEsPaths = new Set<string>();

      // 4. Process hardcoded ES routes
      for (const esPath of allEsRoutes) {
        processedEsPaths.add(esPath);
        const dbPage = dbPagesMap.get(esPath);
        const enPath = getEnglishEquivalent(esPath);
        const enDbPage = enPath ? dbPagesMap.get(enPath) : null;
        inventory.push(buildInventoryItem(esPath, dbPage, enDbPage, enPath, true));
      }

      // 5. ✨ NEW: Include ES pages from DB not in hardcoded list (blog posts, etc.)
      const esDbPages = (dbPages || []).filter(p => p.in_language === 'es-ES');
      for (const dbPage of esDbPages) {
        if (processedEsPaths.has(dbPage.path)) continue;
        processedEsPaths.add(dbPage.path);

        const inApp = isDynamicRouteMatch(dbPage.path);
        const enPath = getEnglishEquivalent(dbPage.path);
        
        // Try to find EN page by translation_of link or by path
        let enDbPage = enPath ? dbPagesMap.get(enPath) : null;
        if (!enDbPage) {
          // Also check if any EN page has translation_of pointing to this ES page
          enDbPage = (dbPages || []).find(
            p => p.in_language === 'en-US' && p.translation_of === dbPage.id
          ) || null;
        }

        inventory.push(buildInventoryItem(
          dbPage.path, dbPage, enDbPage, 
          enDbPage?.path || enPath, 
          inApp
        ));
      }

      // 6. Process orphan EN routes (no ES equivalent)
      for (const enPath of allEnRoutes) {
        const esPath = getSpanishEquivalent(enPath);
        if (!esPath || !processedEsPaths.has(esPath)) {
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

      // 7. Process orphan DB pages (not in code at all)
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

      // Sort by priority
      return inventory.sort((a, b) => {
        const statusOrder = { pending: 0, translated: 1, complete: 2, 'code-only': 3, orphan: 4 };
        const statusDiff = statusOrder[a.status] - statusOrder[b.status];
        if (statusDiff !== 0) return statusDiff;

        const categoryOrder = { main: 0, service: 1, solution: 2, tool: 3, blog: 4, 'case-study': 5, other: 6 };
        const catDiff = (categoryOrder[a.category as keyof typeof categoryOrder] || 6) - 
                        (categoryOrder[b.category as keyof typeof categoryOrder] || 6);
        if (catDiff !== 0) return catDiff;

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
