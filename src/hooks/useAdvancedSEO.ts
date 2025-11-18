import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { getSEOData, EnhancedPageSEOData, extractConceptsFromContent, PageHeadings, getCanonicalUrl, getRobotsDirective } from '@/data/seoData';
import { useSEOPage } from './useSEOData';

interface UseAdvancedSEOOptions {
  pageContent?: string; // For automatic about/mentions extraction
  customSEO?: Partial<EnhancedPageSEOData>; // Override specific SEO data
  skipAutoExtraction?: boolean; // Skip automatic concept extraction
}

interface AdvancedSEOResult {
  title: string;
  h1: string;
  description: string;
  keywords?: string[];
  canonical: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'service';
  inLanguage: string;
  about?: string[];
  mentions?: string[];
  faqs?: Array<{ question: string; answer: string }>;
  structuredData?: Record<string, any>[];
  schemaType: string;
  category: string;
  pillarPage?: string;
  isCanonical: boolean; // Whether this page should be indexed
  headings?: PageHeadings;
  robots?: string; // Robots directive for indexing control
}

export const useAdvancedSEO = (options: UseAdvancedSEOOptions = {}): AdvancedSEOResult => {
  const location = useLocation();
  const { pageContent, customSEO, skipAutoExtraction = false } = options;

  // ✨ NUEVO: Consultar DB primero
  const { data: dbSEOPage } = useSEOPage(location.pathname);

  // Stabilize origin to prevent re-renders
  const origin = useMemo(() => window.location.origin, []);

  return useMemo(() => {
    const path = location.pathname;
    
    // ✨ Priorizar DB sobre fallback
    let seoData: EnhancedPageSEOData | null = null;
    
    if (dbSEOPage?.data) {
      seoData = dbSEOPage.data; // Usar datos de DB si existen
    } else {
      seoData = getSEOData(path); // Fallback a seoData.ts
    }
    
    // Fallback SEO data if not found - use auto-generation
    const fallbackSEO: EnhancedPageSEOData = seoData ? seoData : (() => {
      const { generateAutoSEO } = require('@/utils/autoSEO');
      const autoSEO = generateAutoSEO(path);
      return {
        ...autoSEO,
        title: autoSEO.title || `${path.split('/').pop()?.replace(/-/g, ' ') || 'Página'} | Hayas Marketing`,
        h1: autoSEO.h1 || path.split('/').pop()?.replace(/-/g, ' ') || 'Página',
        description: autoSEO.description || 'Descubre nuestros servicios de marketing digital, CRM e inteligencia artificial.',
        canonical: autoSEO.canonical || path,
        schemaType: autoSEO.schemaType || 'WebPage',
        inLanguage: autoSEO.inLanguage || 'es-ES',
        category: autoSEO.category || 'main'
      } as EnhancedPageSEOData;
    })();

    const baseSEO = seoData || fallbackSEO;
    
    // Extract concepts from content if provided and not skipped
    let extractedConcepts: { about: string[]; mentions: string[] } = { about: [], mentions: [] };
    if (pageContent && !skipAutoExtraction) {
      extractedConcepts = extractConceptsFromContent(pageContent);
    }

    // Merge all SEO data with canonical and robots strategy
    const strategicCanonical = getCanonicalUrl(path);
    const strategicRobots = getRobotsDirective(path);
    
    const mergedSEO = {
      ...baseSEO,
      ...customSEO,
      canonical: customSEO?.canonical || baseSEO?.canonical || strategicCanonical,
      robots: customSEO?.robots || baseSEO?.robots || strategicRobots,
      about: customSEO?.about || baseSEO.about || extractedConcepts.about,
      mentions: customSEO?.mentions || baseSEO.mentions || extractedConcepts.mentions,
    };

    // Generate base structured data based on schema type
    const baseStructuredData = generateBaseStructuredData(mergedSEO, path, origin);
    
    // Combine with additional structured data
    const allStructuredData = [
      baseStructuredData,
      ...(mergedSEO.additionalSchema ? [mergedSEO.additionalSchema] : [])
    ];

    // Determine if this is a canonical page (should be indexed)
    const isCanonical = mergedSEO.robots?.includes('index') !== false && !mergedSEO.pillarPage;

    return {
      title: mergedSEO.title,
      h1: mergedSEO.h1,
      description: mergedSEO.description || '',
      keywords: mergedSEO.keywords,
      canonical: mergedSEO.canonical,
      ogImage: mergedSEO.ogImage,
      ogType: mergedSEO.ogType,
      inLanguage: mergedSEO.inLanguage,
      about: mergedSEO.about,
      mentions: mergedSEO.mentions,
      faqs: mergedSEO.faqs,
      structuredData: allStructuredData,
      schemaType: mergedSEO.schemaType,
      category: mergedSEO.category,
      pillarPage: mergedSEO.pillarPage,
      isCanonical,
      headings: mergedSEO.headings,
      robots: mergedSEO.robots
    };
  }, [location.pathname, pageContent, customSEO, skipAutoExtraction, origin, dbSEOPage]);
};

// Generate base structured data based on schema type
const generateBaseStructuredData = (seoData: EnhancedPageSEOData, path: string, baseUrl: string): Record<string, any> => {
  const fullUrl = `${baseUrl}${path}`;
  
  const baseSchema = {
    "@context": "https://schema.org",
    "@type": seoData.schemaType,
    name: seoData.h1,
    description: seoData.description,
    url: fullUrl,
    inLanguage: seoData.inLanguage,
    ...(seoData.about && { about: seoData.about }),
    ...(seoData.mentions && { mentions: seoData.mentions })
  };

  // Enhance based on schema type
  switch (seoData.schemaType) {
    case 'Service':
      return {
        ...baseSchema,
        provider: {
          "@type": "Organization",
          name: "Hayas Marketing",
          url: baseUrl
        },
        serviceType: seoData.category === 'service' ? 'Marketing Digital' : 'Consultoría',
        areaServed: {
          "@type": "Country",
          name: "España"
        }
      };
      
    case 'WebPage':
      return {
        ...baseSchema,
        isPartOf: {
          "@type": "WebSite",
          name: "Hayas Marketing",
          url: baseUrl
        },
        primaryImageOfPage: seoData.ogImage ? `${baseUrl}${seoData.ogImage}` : undefined
      };
      
    case 'BlogPosting':
      return {
        ...baseSchema,
        author: {
          "@type": "Organization",
          name: "Hayas Marketing"
        },
        publisher: {
          "@type": "Organization",
          name: "Hayas Marketing",
          logo: {
            "@type": "ImageObject",
            url: `${baseUrl}/lovable-uploads/hayas-logo.webp`
          }
        },
        datePublished: new Date().toISOString(),
        dateModified: new Date().toISOString()
      };
      
    case 'AboutPage':
      return {
        ...baseSchema,
        about: {
          "@type": "Organization",
          name: "Hayas Marketing"
        }
      };
      
    case 'ContactPage':
      return {
        ...baseSchema,
        mainEntity: {
          "@type": "Organization",
          name: "Hayas Marketing",
          contactPoint: {
            "@type": "ContactPoint",
            contactType: "customer service",
            availableLanguage: "Spanish"
          }
        }
      };
      
    default:
      return baseSchema;
  }
};

// Hook for dynamic H1 based on SEO data
export const useDynamicH1 = (fallbackH1?: string): string => {
  const location = useLocation();
  
  return useMemo(() => {
    const seoData = getSEOData(location.pathname);
    return seoData?.h1 || fallbackH1 || 'Hayas Marketing';
  }, [location.pathname, fallbackH1]);
};

// Hook for SEO validation (useful for development)
export const useSEOValidation = (seoData: AdvancedSEOResult): { isValid: boolean; warnings: string[] } => {
  return useMemo(() => {
    const warnings: string[] = [];
    
    // Title validation
    if (seoData.title.length > 60) {
      warnings.push('Title tag is longer than 60 characters');
    }
    if (seoData.title.length < 30) {
      warnings.push('Title tag is shorter than 30 characters');
    }
    
    // Description validation
    if (seoData.description && seoData.description.length > 160) {
      warnings.push('Meta description is longer than 160 characters');
    }
    if (seoData.description && seoData.description.length < 120) {
      warnings.push('Meta description is shorter than 120 characters');
    }
    
    // H1 validation
    if (seoData.h1.length > 70) {
      warnings.push('H1 is longer than 70 characters');
    }
    
    // Keywords validation
    if (seoData.keywords && seoData.keywords.length > 10) {
      warnings.push('Too many keywords (more than 10)');
    }
    
    // Canonical validation
    if (seoData.pillarPage && seoData.isCanonical) {
      warnings.push('Page has pillar page but is marked as canonical - possible cannibalization');
    }
    
    return {
      isValid: warnings.length === 0,
      warnings
    };
  }, [seoData]);
};