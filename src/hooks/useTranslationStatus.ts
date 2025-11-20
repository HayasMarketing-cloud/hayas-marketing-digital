import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

interface TranslationStats {
  total: number;
  translated: number;
  pending: number;
  drafts: number;
  byCategory: Record<string, { total: number; translated: number; pending: number }>;
}

export const useTranslationStatus = () => {
  const { data: stats, isLoading, error } = useQuery({
    queryKey: ['translation-status'],
    queryFn: async (): Promise<TranslationStats> => {
      // Get all ES pages
      const { data: esPages, error: esError } = await supabase
        .from('seo_pages')
        .select('id, path, category, is_indexable')
        .eq('in_language', 'es-ES')
        .eq('is_indexable', true);

      if (esError) throw esError;

      // Get all EN pages with their translation_of link
      const { data: enPages, error: enError } = await supabase
        .from('seo_pages')
        .select('id, translation_of, path, is_indexable')
        .eq('in_language', 'en-US');

      if (enError) throw enError;

      const enPagesByTranslationId = new Map(
        (enPages || []).map(page => [page.translation_of, page])
      );

      let translated = 0;
      let pending = 0;
      let drafts = 0;
      const byCategory: Record<string, any> = {};

      (esPages || []).forEach(esPage => {
        const category = esPage.category || 'other';
        if (!byCategory[category]) {
          byCategory[category] = { total: 0, translated: 0, pending: 0 };
        }
        byCategory[category].total++;

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
        translated,
        pending,
        drafts,
        byCategory,
      };
    },
  });

  return {
    stats: stats || {
      total: 0,
      translated: 0,
      pending: 0,
      drafts: 0,
      byCategory: {},
    },
    isLoading,
    error,
  };
};
