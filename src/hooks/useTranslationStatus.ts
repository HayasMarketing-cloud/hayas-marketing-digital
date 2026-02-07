import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { getAllSpanishRoutes } from '@/utils/routeScanner';

interface TranslationStats {
  total: number;
  totalInCode: number;
  translated: number;
  pending: number;
  drafts: number;
  codeOnly: number;
  seoOptimized: number;
  seoIncomplete: number;
  byCategory: Record<string, { total: number; translated: number; pending: number }>;
}

export const useTranslationStatus = () => {
  const { data: stats, isLoading, error } = useQuery({
    queryKey: ['translation-status'],
    queryFn: async (): Promise<TranslationStats> => {
      // Get all routes from code
      const allEsRoutesInCode = getAllSpanishRoutes();
      
      // Get all ES pages from DB
      const { data: esPages, error: esError } = await supabase
        .from('seo_pages')
        .select('id, path, category, is_indexable, title, description, keywords, h1, og_image')
        .eq('in_language', 'es-ES')
        .eq('is_indexable', true);

      if (esError) throw esError;

      // Get all EN pages with their translation_of link
      const { data: enPages, error: enError } = await supabase
        .from('seo_pages')
        .select('id, translation_of, path, is_indexable, title, description, keywords')
        .eq('in_language', 'en-US');

      if (enError) throw enError;

      const esPagesMap = new Map((esPages || []).map(page => [page.path, page]));
      const enPagesByTranslationId = new Map(
        (enPages || []).map(page => [page.translation_of, page])
      );

      let translated = 0;
      let pending = 0;
      let drafts = 0;
      let codeOnly = 0;
      let seoOptimized = 0;
      let seoIncomplete = 0;
      const byCategory: Record<string, any> = {};

      // Process all routes from code
      allEsRoutesInCode.forEach(routePath => {
        const esPage = esPagesMap.get(routePath);
        
        if (!esPage) {
          // Route exists in code but not in DB
          codeOnly++;
          return;
        }

        const category = esPage.category || 'other';
        if (!byCategory[category]) {
          byCategory[category] = { total: 0, translated: 0, pending: 0 };
        }
        byCategory[category].total++;

        // Check SEO optimization - Solo campos críticos (no og_image)
        const missingCriticalFields = [];
        if (!esPage.title || esPage.title.length < 30) missingCriticalFields.push('title');
        if (!esPage.description || esPage.description.length < 120) missingCriticalFields.push('description');
        if (!esPage.keywords || (Array.isArray(esPage.keywords) && esPage.keywords.length === 0)) missingCriticalFields.push('keywords');
        if (!esPage.h1) missingCriticalFields.push('h1');

        if (missingCriticalFields.length === 0) {
          seoOptimized++;
        } else {
          seoIncomplete++;
        }

        const enPage = enPagesByTranslationId.get(esPage.id);
        if (enPage) {
          if (enPage.is_indexable) {
            translated++;
            byCategory[category].translated++;
          } else {
            drafts++;
          }
        } else {
          pending++;
          byCategory[category].pending++;
        }
      });

      return {
        total: esPages?.length || 0,
        totalInCode: allEsRoutesInCode.length,
        translated,
        pending,
        drafts,
        codeOnly,
        seoOptimized,
        seoIncomplete,
        byCategory,
      };
    },
  });

  return {
    stats: stats || {
      total: 0,
      totalInCode: 0,
      translated: 0,
      pending: 0,
      drafts: 0,
      codeOnly: 0,
      seoOptimized: 0,
      seoIncomplete: 0,
      byCategory: {},
    },
    isLoading,
    error,
  };
};
