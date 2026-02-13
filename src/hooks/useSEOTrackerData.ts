import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { useAllSEOPages } from '@/hooks/useSEOData';

interface GSCRow {
  keys: string[];
  clicks: number;
  impressions: number;
  ctr: number;
  position: number;
}

interface IndexationData {
  is_indexed: boolean | null;
  google_title: string | null;
  google_snippet: string | null;
  google_position: number | null;
  checked_at: string | null;
}

export interface SEOTrackerPage {
  path: string;
  title: string;
  description: string;
  h1: string;
  keywords: string[];
  category: string;
  inLanguage: string;
  robots: string;
  schemaType: string;
  canonical: string;
  ogImage: string | null;
  hasWarnings: boolean;
  isComplete: boolean;
  source: 'database' | 'fallback';
  // GSC data
  gscClicks: number | null;
  gscImpressions: number | null;
  gscCtr: number | null;
  gscPosition: number | null;
  // Indexation data
  indexation: IndexationData | null;
}

export const useSEOTrackerData = () => {
  const { data: seoPages, isLoading: seoLoading } = useAllSEOPages();

  // Fetch GSC data (30 days, by page)
  const { data: gscData, isLoading: gscLoading } = useQuery({
    queryKey: ['seo-tracker-gsc'],
    queryFn: async () => {
      const endDate = new Date().toISOString().split('T')[0];
      const startDate = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];

      const { data, error } = await supabase.functions.invoke('gsc-data', {
        body: {
          property: 'sc-domain:hayas.marketing',
          startDate,
          endDate,
          dimensions: ['page'],
          rowLimit: 500,
        },
      });

      if (error) {
        console.warn('GSC data fetch error:', error);
        return null;
      }
      return data as { rows?: GSCRow[] };
    },
    retry: 1,
    staleTime: 5 * 60 * 1000, // 5 min
  });

  // Fetch indexation checks from DB
  const { data: indexationData, isLoading: indexLoading } = useQuery({
    queryKey: ['seo-tracker-indexation'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('indexation_checks')
        .select('*');

      if (error) {
        console.warn('Indexation data fetch error:', error);
        return [];
      }
      return data || [];
    },
    staleTime: 5 * 60 * 1000,
  });

  // Build GSC lookup by path
  const gscByPath = new Map<string, { clicks: number; impressions: number; ctr: number; position: number }>();
  if (gscData?.rows) {
    for (const row of gscData.rows) {
      const fullUrl = row.keys[0];
      // Extract path from full URL
      try {
        const url = new URL(fullUrl);
        const path = url.pathname;
        const existing = gscByPath.get(path);
        if (existing) {
          existing.clicks += row.clicks;
          existing.impressions += row.impressions;
        } else {
          gscByPath.set(path, {
            clicks: row.clicks,
            impressions: row.impressions,
            ctr: row.ctr,
            position: row.position,
          });
        }
      } catch {
        // Skip invalid URLs
      }
    }
  }

  // Build indexation lookup by path
  const indexByPath = new Map<string, IndexationData>();
  if (indexationData) {
    for (const check of indexationData) {
      indexByPath.set(check.page_path, {
        is_indexed: check.is_indexed,
        google_title: check.google_title,
        google_snippet: check.google_snippet,
        google_position: check.google_position,
        checked_at: check.checked_at,
      });
    }
  }

  // Merge all data
  const pages: SEOTrackerPage[] = (seoPages || []).map((page) => {
    const d = page.data;
    const gsc = gscByPath.get(page.path) || null;
    const idx = indexByPath.get(page.path) || null;

    const isComplete = !!(d.title && d.description && d.h1 && d.keywords && d.keywords.length > 0);

    return {
      path: page.path,
      title: d.title || '',
      description: d.description || '',
      h1: d.h1 || '',
      keywords: d.keywords || [],
      category: d.category || 'main',
      inLanguage: d.inLanguage || (page.path.startsWith('/en') ? 'en-US' : 'es-ES'),
      robots: d.robots || 'index,follow',
      schemaType: d.schemaType || 'WebPage',
      canonical: d.canonical || page.path,
      ogImage: d.ogImage || null,
      hasWarnings: page.hasWarnings,
      isComplete,
      source: page.source,
      gscClicks: gsc?.clicks ?? null,
      gscImpressions: gsc?.impressions ?? null,
      gscCtr: gsc ? gsc.ctr * 100 : null,
      gscPosition: gsc?.position ?? null,
      indexation: idx,
    };
  });

  // Global metrics
  const totalPages = pages.length;
  const completePages = pages.filter(p => p.isComplete).length;
  const healthScore = totalPages > 0 ? Math.round((completePages / totalPages) * 100) : 100;
  const indexedPages = pages.filter(p => p.indexation?.is_indexed === true).length;

  const totalGscClicks = gscData?.rows?.reduce((sum, row) => sum + row.clicks, 0) || 0;
  const totalGscImpressions = gscData?.rows?.reduce((sum, row) => sum + row.impressions, 0) || 0;

  return {
    pages,
    isLoading: seoLoading || gscLoading || indexLoading,
    metrics: {
      totalPages,
      healthScore,
      totalGscClicks,
      totalGscImpressions,
      indexedPages,
      completePages,
    },
  };
};
