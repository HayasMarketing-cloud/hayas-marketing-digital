import { getRobotsDirective } from '@/data/seoData';

export interface CrawlBudgetReport {
  totalPages: number;
  indexablePages: number;
  noindexPages: number;
  optimizationScore: number;
  recommendations: string[];
  urlsByPriority: {
    critical: string[];
    important: string[];
    normal: string[];
    low: string[];
  };
}

/**
 * Analyzes crawl budget optimization across the site
 */
export const analyzeCrawlBudget = (allUrls: string[]): CrawlBudgetReport => {
  const indexable: string[] = [];
  const noindex: string[] = [];
  
  // Categorize URLs by indexability
  allUrls.forEach(url => {
    const robots = getRobotsDirective(url);
    if (robots.includes('index')) {
      indexable.push(url);
    } else {
      noindex.push(url);
    }
  });

  // Calculate optimization score
  const optimizationScore = Math.round((indexable.length / allUrls.length) * 100);
  
  // Generate recommendations
  const recommendations: string[] = [];
  
  if (noindex.length > indexable.length) {
    recommendations.push('✅ Excelente: Más páginas noindex que index - crawl budget optimizado');
  }
  
  if (indexable.length > 50) {
    recommendations.push('⚠️ Considera reducir páginas indexables si el contenido es similar');
  }
  
  if (optimizationScore > 70) {
    recommendations.push('❌ Demasiadas URLs indexables - riesgo de dilución de crawl budget');
  } else if (optimizationScore < 30) {
    recommendations.push('✅ Crawl budget bien optimizado - solo contenido de valor indexado');
  }

  // Categorize by priority
  const urlsByPriority = categorizeUrlsByPriority(indexable);

  return {
    totalPages: allUrls.length,
    indexablePages: indexable.length,
    noindexPages: noindex.length,
    optimizationScore,
    recommendations,
    urlsByPriority
  };
};

/**
 * Categorizes indexable URLs by SEO priority
 */
const categorizeUrlsByPriority = (indexableUrls: string[]) => {
  const critical: string[] = [];
  const important: string[] = [];
  const normal: string[] = [];
  const low: string[] = [];

  indexableUrls.forEach(url => {
    if (url === '/' || url === '/servicios' || url === '/casos-exito') {
      critical.push(url);
    } else if (url.startsWith('/soluciones/') || url === '/blog') {
      important.push(url);
    } else if (url.startsWith('/servicios/') && !url.includes('/alojamiento')) {
      normal.push(url);
    } else {
      low.push(url);
    }
  });

  return { critical, important, normal, low };
};

/**
 * Generates internal linking recommendations for orphaned pages
 */
export const generateInternalLinkingPlan = (allUrls: string[]) => {
  const linkingPlan = {
    pillarToSatellite: [
      {
        pillar: '/casos-exito',
        satellites: allUrls.filter(url => url.match(/\/casos-exito\/.+/)),
        strategy: 'Individual case studies should link back to main /casos-exito page'
      },
      {
        pillar: '/servicios',
        satellites: allUrls.filter(url => url.match(/\/servicios\/.+/)),
        strategy: 'Service pages should link to /servicios and related solutions'
      },
      {
        pillar: '/blog',
        satellites: allUrls.filter(url => url.match(/\/blog\/.+/)),
        strategy: 'Blog posts should link to related services and main topics'
      }
    ],
    crossLinking: [
      'Link related services (CRM → Automatización → Consultoría)',
      'Link case studies to relevant services',
      'Link blog posts to service pages',
      'Create topic clusters around main keywords'
    ]
  };

  return linkingPlan;
};

/**
 * Validates sitemap against robots directives
 */
export const validateSitemap = (sitemapUrls: string[]) => {
  const issues: string[] = [];
  
  sitemapUrls.forEach(url => {
    const robots = getRobotsDirective(url);
    
    if (robots.includes('noindex')) {
      issues.push(`❌ URL ${url} está en sitemap pero marcada como noindex`);
    }
  });

  const indexableUrls = sitemapUrls.filter(url => {
    const robots = getRobotsDirective(url);
    return robots.includes('index');
  });

  return {
    totalSitemapUrls: sitemapUrls.length,
    validIndexableUrls: indexableUrls.length,
    issues,
    isValid: issues.length === 0
  };
};