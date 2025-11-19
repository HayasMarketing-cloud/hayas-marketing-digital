/**
 * Sistema de Sitemap Bilingüe
 * Genera sitemaps separados para ES y EN, más un sitemap index
 */

import { getRobotsDirective } from '@/data/seoData';
import { getIndexableRoutes } from './routeRegistryData';

interface SitemapUrl {
  loc: string;
  changefreq: string;
  priority: string;
  lastmod?: string;
  alternates?: {
    es?: string;
    en?: string;
  };
}

const baseUrl = 'https://hayasmarketing.com';

/**
 * Genera sitemap para un idioma específico
 */
export const generateSitemapForLanguage = (language: 'es' | 'en'): string => {
  const currentDate = new Date().toISOString().split('T')[0];
  
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n';
  
  const indexableRoutes = getIndexableRoutes();
  const languageRoutes = indexableRoutes.filter(route => 
    route.path.startsWith(`/${language}/`)
  );
  
  const sortedRoutes = [...languageRoutes].sort((a, b) => b.priority - a.priority);
  
  sortedRoutes.forEach(route => {
    const robotsDirective = getRobotsDirective(route.path);
    const shouldIndex = !robotsDirective.includes('noindex');
    
    if (shouldIndex) {
      xml += '  <url>\n';
      xml += `    <loc>${baseUrl}${route.path}</loc>\n`;
      xml += `    <lastmod>${currentDate}</lastmod>\n`;
      xml += `    <changefreq>${route.changefreq}</changefreq>\n`;
      xml += `    <priority>${route.priority.toFixed(1)}</priority>\n`;
      
      // Add hreflang alternates
      const pathWithoutLang = route.path.replace(/^\/(es|en)/, '');
      xml += `    <xhtml:link rel="alternate" hreflang="es" href="${baseUrl}/es${pathWithoutLang}"/>\n`;
      xml += `    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/en${pathWithoutLang}"/>\n`;
      xml += `    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}/es${pathWithoutLang}"/>\n`;
      
      xml += '  </url>\n';
    }
  });

  xml += '</urlset>';
  return xml;
};

/**
 * Genera sitemap index que apunta a los sitemaps de cada idioma
 */
export const generateSitemapIndex = (): string => {
  const currentDate = new Date().toISOString().split('T')[0];
  
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  xml += '  <sitemap>\n';
  xml += `    <loc>${baseUrl}/sitemap-es.xml</loc>\n`;
  xml += `    <lastmod>${currentDate}</lastmod>\n`;
  xml += '  </sitemap>\n';
  
  xml += '  <sitemap>\n';
  xml += `    <loc>${baseUrl}/sitemap-en.xml</loc>\n`;
  xml += `    <lastmod>${currentDate}</lastmod>\n`;
  xml += '  </sitemap>\n';
  
  xml += '</sitemapindex>';
  return xml;
};

/**
 * Obtiene URLs indexables por idioma
 */
export const getIndexableUrlsByLanguage = (language: 'es' | 'en'): string[] => {
  const indexableRoutes = getIndexableRoutes();
  
  return indexableRoutes
    .filter(route => route.path.startsWith(`/${language}/`))
    .filter(route => {
      const robotsDirective = getRobotsDirective(route.path);
      return !robotsDirective.includes('noindex');
    })
    .map(route => route.path);
};

/**
 * Estadísticas de crawl budget por idioma
 */
export const getCrawlBudgetStatsByLanguage = () => {
  const indexableRoutes = getIndexableRoutes();
  
  const esRoutes = indexableRoutes.filter(r => r.path.startsWith('/es/'));
  const enRoutes = indexableRoutes.filter(r => r.path.startsWith('/en/'));
  
  const esIndexable = getIndexableUrlsByLanguage('es');
  const enIndexable = getIndexableUrlsByLanguage('en');
  
  return {
    es: {
      totalPages: esRoutes.length,
      indexablePages: esIndexable.length,
      noIndexPages: esRoutes.length - esIndexable.length,
      efficiency: esRoutes.length > 0 
        ? ((esIndexable.length / esRoutes.length) * 100).toFixed(1) + '%'
        : '100%'
    },
    en: {
      totalPages: enRoutes.length,
      indexablePages: enIndexable.length,
      noIndexPages: enRoutes.length - enIndexable.length,
      efficiency: enRoutes.length > 0 
        ? ((enIndexable.length / enRoutes.length) * 100).toFixed(1) + '%'
        : '100%'
    },
    total: {
      totalPages: indexableRoutes.length,
      indexablePages: esIndexable.length + enIndexable.length,
      noIndexPages: indexableRoutes.length - (esIndexable.length + enIndexable.length)
    }
  };
};
