import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

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
      // Get all ES pages from DB (source of truth)
      const { data: esPages, error: esError } = await supabase
        .from('seo_pages')
        .select('id, path, category, is_indexable, title, description, keywords, h1')
        .eq('in_language', 'es-ES')
        .eq('is_indexable', true);

      if (esError) throw esError;

      // Get all EN pages with their translation_of link
      const { data: enPages, error: enError } = await supabase
        .from('seo_pages')
        .select('id, translation_of, is_indexable')
        .eq('in_language', 'en-US');

      if (enError) throw enError;

      const enPagesByTranslationId = new Map(
        (enPages || []).map(page => [page.translation_of, page])
      );

      let translated = 0;
      let pending = 0;
      let drafts = 0;
      let seoOptimized = 0;
      let seoIncomplete = 0;
      const byCategory: Record<string, { total: number; translated: number; pending: number }> = {};

      // Process all ES pages from DB (no more hardcoded routes)
      (esPages || []).forEach(esPage => {
        const category = esPage.category || 'other';
        if (!byCategory[category]) {
          byCategory[category] = { total: 0, translated: 0, pending: 0 };
        }
        byCategory[category].total++;

        // Check SEO optimization - critical fields only
        const hasSEO = 
          esPage.title && esPage.title.length >= 30 &&
          esPage.description && esPage.description.length >= 120 &&
          esPage.keywords && Array.isArray(esPage.keywords) && esPage.keywords.length > 0 &&
          esPage.h1;

        if (hasSEO) {
          seoOptimized++;
        } else {
          seoIncomplete++;
        }

        // Check translation status
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

      const total = esPages?.length || 0;

      return {
        total,
        totalInCode: total, // Now using DB as source of truth
        translated,
        pending,
        drafts,
        codeOnly: 0, // No longer tracking code-only routes
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
