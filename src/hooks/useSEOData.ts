import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { getSEOData } from '@/data/seoData';
import type { EnhancedPageSEOData } from '@/data/seoData';

// Obtener datos SEO de una página específica
export const useSEOPage = (path: string) => {
  return useQuery({
    queryKey: ['seo-page', path],
    queryFn: async () => {
      // 1. Intentar obtener de DB
      const { data, error } = await supabase
        .from('seo_pages')
        .select('*')
        .eq('path', path)
        .maybeSingle();

      if (error) {
        console.warn('Error fetching SEO data from DB:', error);
      }

      // 2. Si existe en DB, usar esos datos
      if (data) {
        return {
          source: 'database' as const,
          data: convertDBToSEOData(data)
        };
      }

      // 3. Fallback a seoData.ts
      const fallbackData = getSEOData(path);
      if (fallbackData) {
        return {
          source: 'fallback' as const,
          data: fallbackData
        };
      }

      // 4. Si no existe en ningún sitio, devolver null
      return null;
    }
  });
};

// Listar todas las páginas SEO (combina DB + fallback)
export const useAllSEOPages = () => {
  return useQuery({
    queryKey: ['seo-pages-all'],
    queryFn: async () => {
      // 1. Obtener todas las páginas de DB
      const { data: dbPages, error } = await supabase
        .from('seo_pages')
        .select('*')
        .order('path');

      if (error) {
        console.warn('Error fetching all SEO pages:', error);
      }

      const dbPagesMap = new Map(
        (dbPages || []).map(page => [page.path, convertDBToSEOData(page)])
      );

      // 2. Obtener todas las páginas del fallback (de seoData.ts)
      // Por ahora, vamos a obtener solo las que están en DB
      // En el futuro, se puede añadir allSEOPaths() a seoData.ts
      
      // 3. Combinar: priorizar DB
      const allPages: Array<{
        path: string;
        data: EnhancedPageSEOData;
        source: 'database' | 'fallback';
        hasWarnings: boolean;
      }> = [];

      // Añadir páginas de DB
      dbPagesMap.forEach((data, path) => {
        allPages.push({
          path,
          data,
          source: 'database',
          hasWarnings: validateSEOData(data).length > 0
        });
      });

      return allPages.sort((a, b) => a.path.localeCompare(b.path));
    }
  });
};

// Crear o actualizar página SEO (upsert)
export const useUpdateSEOPage = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (seoData: {
      path: string;
      title: string;
      description: string;
      h1: string;
      h2_primary?: string;
      h2_secondary?: string[];
      h3_strategic?: string[];
      keywords?: string[];
      canonical: string;
      robots?: string;
      og_image?: string;
      og_type?: string;
      schema_type?: string;
      category?: string;
      faqs?: Array<{ question: string; answer: string }>;
      is_indexable?: boolean;
    }) => {
      const { data, error } = await supabase
        .from('seo_pages')
        .upsert({
          path: seoData.path,
          title: seoData.title,
          description: seoData.description,
          h1: seoData.h1,
          h2_primary: seoData.h2_primary,
          h2_secondary: seoData.h2_secondary || [],
          h3_strategic: seoData.h3_strategic || [],
          keywords: seoData.keywords || [],
          canonical: seoData.canonical,
          robots: seoData.robots || 'index,follow',
          og_image: seoData.og_image,
          og_type: seoData.og_type || 'website',
          schema_type: seoData.schema_type || 'WebPage',
          category: seoData.category || 'main',
          faqs: seoData.faqs || [],
          is_indexable: seoData.is_indexable ?? true
        }, { onConflict: 'path' })
        .select()
        .single();

      if (error) throw error;
      return data;
    },
    onSuccess: (data) => {
      // Invalidar cache de todas las queries relacionadas
      queryClient.invalidateQueries({ queryKey: ['seo-page', data.path] });
      queryClient.invalidateQueries({ queryKey: ['seo-pages-all'] });
    }
  });
};

// Eliminar página SEO de DB (vuelve a usar fallback)
export const useDeleteSEOPage = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (path: string) => {
      const { error } = await supabase
        .from('seo_pages')
        .delete()
        .eq('path', path);

      if (error) throw error;
      return path;
    },
    onSuccess: (path) => {
      queryClient.invalidateQueries({ queryKey: ['seo-page', path] });
      queryClient.invalidateQueries({ queryKey: ['seo-pages-all'] });
    }
  });
};

// Helpers
function convertDBToSEOData(dbPage: any): EnhancedPageSEOData {
  return {
    title: dbPage.title || '',
    h1: dbPage.h1 || '',
    description: dbPage.description || '',
    keywords: Array.isArray(dbPage.keywords) ? dbPage.keywords : [],
    canonical: dbPage.canonical || '',
    schemaType: dbPage.schema_type || 'WebPage',
    about: Array.isArray(dbPage.about) ? dbPage.about : undefined,
    mentions: Array.isArray(dbPage.mentions) ? dbPage.mentions : undefined,
    inLanguage: dbPage.in_language || 'es-ES',
    ogImage: dbPage.og_image,
    ogType: dbPage.og_type || 'website',
    pillarPage: dbPage.pillar_page,
    relatedPages: Array.isArray(dbPage.related_pages) ? dbPage.related_pages : undefined,
    faqs: Array.isArray(dbPage.faqs) ? dbPage.faqs : undefined,
    additionalSchema: dbPage.additional_schema,
    category: dbPage.category || 'main',
    headings: {
      h2Primary: dbPage.h2_primary,
      h2Secondary: Array.isArray(dbPage.h2_secondary) ? dbPage.h2_secondary : undefined,
      h3Strategic: Array.isArray(dbPage.h3_strategic) ? dbPage.h3_strategic : undefined
    },
    robots: dbPage.robots || 'index,follow',
    isIndexable: dbPage.is_indexable ?? true
  };
}

function validateSEOData(data: EnhancedPageSEOData): string[] {
  const warnings: string[] = [];
  
  if (data.title.length > 60) warnings.push('title_too_long');
  if (data.title.length < 30) warnings.push('title_too_short');
  if (data.description.length > 160) warnings.push('description_too_long');
  if (data.description.length < 120) warnings.push('description_too_short');
  if (!data.h1) warnings.push('missing_h1');
  if (data.h1.length > 70) warnings.push('h1_too_long');
  
  return warnings;
}
