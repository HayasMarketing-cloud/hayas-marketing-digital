import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export interface TranslationPair {
  esId: string;
  esPath: string;
  esTitle?: string;
  enId?: string;
  enPath?: string;
  enTitle?: string;
  status: 'translated' | 'pending' | 'draft';
  category: string;
  priority: number;
}

export const useTranslationPairs = () => {
  const { data: pairs, isLoading, error } = useQuery({
    queryKey: ['translation-pairs'],
    queryFn: async (): Promise<TranslationPair[]> => {
      // Get all ES pages
      const { data: esPages, error: esError } = await supabase
        .from('seo_pages')
        .select('id, path, title, category, is_indexable')
        .eq('in_language', 'es-ES')
        .eq('is_indexable', true)
        .order('path');

      if (esError) throw esError;

      // Get all EN pages
      const { data: enPages, error: enError } = await supabase
        .from('seo_pages')
        .select('id, path, title, translation_of, is_indexable')
        .eq('in_language', 'en-US');

      if (enError) throw enError;

      // Map EN pages by their translation_of reference
      const enPagesByEsId = new Map(
        (enPages || []).map(page => [page.translation_of, page])
      );

      // Create pairs
      const pairs: TranslationPair[] = (esPages || []).map(esPage => {
        const enPage = enPagesByEsId.get(esPage.id);
        
        let status: 'translated' | 'pending' | 'draft' = 'pending';
        if (enPage) {
          status = enPage.is_indexable ? 'translated' : 'draft';
        }

        // Calculate priority based on path depth and category
        let priority = 0.5;
        if (esPage.path === '/es/' || esPage.path === '/es') priority = 1.0;
        else if (esPage.category === 'main') priority = 0.9;
        else if (esPage.category === 'solution') priority = 0.8;
        else if (esPage.category === 'service') priority = 0.7;
        else if (esPage.category === 'blog') priority = 0.6;

        return {
          esId: esPage.id,
          esPath: esPage.path,
          esTitle: esPage.title,
          enId: enPage?.id,
          enPath: enPage?.path,
          enTitle: enPage?.title,
          status,
          category: esPage.category || 'other',
          priority,
        };
      });

      // Sort by priority (high to low), then by status (pending first)
      return pairs.sort((a, b) => {
        if (a.priority !== b.priority) return b.priority - a.priority;
        if (a.status === 'pending' && b.status !== 'pending') return -1;
        if (a.status !== 'pending' && b.status === 'pending') return 1;
        return 0;
      });
    },
  });

  return { pairs: pairs || [], isLoading, error };
};
