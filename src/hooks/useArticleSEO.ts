import { useMemo } from 'react';
import { generateArticleSchema } from '@/data/seoData';

interface ArticleSEOData {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
  structuredData: Record<string, any>;
}

interface UseArticleSEOProps {
  headline: string;
  description: string;
  canonical: string;
  author?: {
    name: string;
    url?: string;
  };
  datePublished: string; // ISO 8601 format
  dateModified?: string; // ISO 8601 format
  articleSection?: string; // Category/section
  keywords?: string[];
  wordCount?: number;
  heroImagePath?: string;
  articleBody?: string; // Full text for better SEO
}

/**
 * Hook for Blog/Article pages with enhanced Schema.org Article markup
 * Optimized for Google's Article rich results and News carousel
 */
export const useArticleSEO = ({ 
  headline, 
  description, 
  canonical,
  author,
  datePublished,
  dateModified,
  articleSection,
  keywords,
  wordCount,
  heroImagePath,
  articleBody
}: UseArticleSEOProps): ArticleSEOData => {
  return useMemo(() => {
    const title = `${headline} | Blog Hayas Marketing`;
    const ogImage = heroImagePath ? `${window.location.origin}${heroImagePath}` : undefined;
    
    const structuredData = generateArticleSchema({
      headline,
      description,
      canonical,
      author: author || { name: 'Equipo Hayas Marketing' },
      datePublished,
      dateModified: dateModified || datePublished,
      articleSection,
      keywords,
      wordCount,
      articleBody
    });

    return {
      title,
      description,
      canonical,
      ogImage,
      structuredData
    };
  }, [headline, description, canonical, author, datePublished, dateModified, articleSection, keywords, wordCount, heroImagePath, articleBody]);
};

export default useArticleSEO;
