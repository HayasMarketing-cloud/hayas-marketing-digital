import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { normalizePath, extractLocale } from '@/utils/normalizePath';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';

const CATEGORY_LABELS: Record<string, string> = {
  blog: 'Blog',
  service: 'Servicio',
  solution: 'Solución',
  'case-study': 'Caso de éxito',
};

function getCategoryLabel(category: string | null): string {
  return (category && CATEGORY_LABELS[category]) || 'Página';
}

interface RelatedContentBlockProps {
  currentPath: string;
  className?: string;
}

const RelatedContentBlock: React.FC<RelatedContentBlockProps> = ({ currentPath, className }) => {
  const normalizedPath = normalizePath(currentPath);
  const currentLocale = extractLocale(normalizedPath);

  const { data: relatedPages } = useQuery({
    queryKey: ['related-content', normalizedPath],
    staleTime: 10 * 60 * 1000,
    gcTime: 30 * 60 * 1000,
    queryFn: async () => {
      // Step 1: Get related_pages array for current page
      const { data: currentPage, error: err1 } = await supabase
        .from('seo_pages')
        .select('related_pages')
        .eq('path', normalizedPath)
        .maybeSingle();

      if (err1 || !currentPage) return null;

      const rawRelated = currentPage.related_pages;
      if (!Array.isArray(rawRelated) || rawRelated.length === 0) return null;

      // Step 2: Filter by same locale and exclude current path
      const paths = (rawRelated as string[])
        .map(normalizePath)
        .filter(p => p !== normalizedPath && (!currentLocale || extractLocale(p) === currentLocale));

      if (paths.length === 0) return null;

      // Step 3: Fetch related page data in a single query
      const { data: pages, error: err2 } = await supabase
        .from('seo_pages')
        .select('path, h1, description, category')
        .in('path', paths)
        .eq('is_indexable', true);

      if (err2 || !pages || pages.length === 0) return null;

      // Step 4: Reorder by original array index (editorial intent)
      const orderMap = new Map(paths.map((p, i) => [p, i]));
      const sorted = [...pages].sort((a, b) => (orderMap.get(a.path) ?? 99) - (orderMap.get(b.path) ?? 99));

      // Step 5: Limit to 4
      return sorted.slice(0, 4);
    },
  });

  if (!relatedPages || relatedPages.length === 0) return null;

  return (
    <section className={`bg-muted/30 rounded-xl p-8 border border-border/50 ${className || ''}`}>
      <h3 className="text-xl font-bold mb-6 text-foreground">
        📚 También te puede interesar
      </h3>
      <div className="grid sm:grid-cols-2 gap-4">
        {relatedPages.map((page) => (
          <Link
            key={page.path}
            to={page.path}
            className="group bg-background rounded-lg p-5 border border-border/50 hover:border-primary/30 hover:shadow-md transition-all duration-200"
          >
            <Badge variant="outline" className="text-xs mb-3">
              {getCategoryLabel(page.category)}
            </Badge>
            <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-2 line-clamp-2">
              {page.h1}
            </h4>
            <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
              {page.description}
            </p>
            <span className="inline-flex items-center text-primary text-sm font-medium gap-1">
              {page.category === 'service' ? 'Ver servicio' : 'Leer más'}
              <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RelatedContentBlock;
