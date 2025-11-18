/**
 * Sistema de Sitemap Dinámico
 * Genera sitemap.xml automáticamente desde el registro de rutas
 */

import { getRobotsDirective } from '@/data/seoData';
import { getIndexableRoutes } from './routeRegistryData';

interface SitemapUrl {
  loc: string;
  changefreq: string;
  priority: string;
  lastmod?: string;
}

export const generateSitemapXML = (): string => {
  const baseUrl = 'https://hayasmarketing.com';
  const currentDate = new Date().toISOString().split('T')[0];
  
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  const indexableRoutes = getIndexableRoutes();
  const sortedRoutes = [...indexableRoutes].sort((a, b) => b.priority - a.priority);
  
  sortedRoutes.forEach(route => {
    const robotsDirective = getRobotsDirective(route.path);
    const shouldIndex = !robotsDirective.includes('noindex');
    
    if (shouldIndex) {
      xml += '  <url>\n';
      xml += `    <loc>${baseUrl}${route.path}</loc>\n`;
      xml += `    <lastmod>${currentDate}</lastmod>\n`;
      xml += `    <changefreq>${route.changefreq}</changefreq>\n`;
      xml += `    <priority>${route.priority.toFixed(1)}</priority>\n`;
      xml += '  </url>\n';
    }
  });

  xml += '</urlset>';
  return xml;
};

export const getIndexableUrls = (): string[] => {
  const indexableRoutes = getIndexableRoutes();
  
  return indexableRoutes
    .filter(route => {
      const robotsDirective = getRobotsDirective(route.path);
      return !robotsDirective.includes('noindex');
    })
    .map(route => route.path);
};

export const getCrawlBudgetStats = () => {
  const indexableRoutes = getIndexableRoutes();
  const indexableUrls = getIndexableUrls();
  
  const noIndexUrls = indexableRoutes
    .filter(route => {
      const robotsDirective = getRobotsDirective(route.path);
      return robotsDirective.includes('noindex');
    })
    .map(route => route.path);

  const crawlBudgetSaved = indexableRoutes.length - indexableUrls.length;

  return {
    totalPages: indexableRoutes.length,
    indexablePages: indexableUrls.length,
    noIndexPages: noIndexUrls.length,
    indexableUrls,
    noIndexUrls,
    crawlBudgetSaved,
    crawlBudgetEfficiency: indexableRoutes.length > 0 
      ? ((indexableUrls.length / indexableRoutes.length) * 100).toFixed(1) + '%'
      : '100%'
  };
};
