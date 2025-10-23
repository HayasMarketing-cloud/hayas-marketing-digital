/**
 * Advanced sitemap analysis and validation
 */

import { getIndexableUrls, getCrawlBudgetStats } from '@/utils/sitemap';
import { validateSitemap } from '@/utils/crawlBudgetOptimizer';
import { getRobotsDirective } from '@/data/seoData';

export interface SitemapUrl {
  loc: string;
  priority: number;
  changefreq: string;
  lastmod?: string;
  category?: string;
  isIndexable: boolean;
  robotsDirective: string;
}

export interface SitemapStats {
  totalUrls: number;
  indexableUrls: number;
  noindexUrls: number;
  byCategory: Record<string, number>;
  byPriority: Record<string, number>;
  byChangefreq: Record<string, number>;
  avgPriority: number;
}

export interface SitemapIssue {
  type: 'error' | 'warning' | 'info';
  url?: string;
  message: string;
}

/**
 * Analyzes sitemap with enhanced categorization
 */
export const analyzeSitemap = (): {
  urls: SitemapUrl[];
  stats: SitemapStats;
  issues: SitemapIssue[];
} => {
  const indexableUrls = getIndexableUrls();
  const crawlBudgetStats = getCrawlBudgetStats();
  const issues: SitemapIssue[] = [];
  
  // Build detailed URL list
  const urls: SitemapUrl[] = indexableUrls.map(url => {
    const robots = getRobotsDirective(url);
    const isIndexable = robots.includes('index');
    
    // Determine category
    let category = 'Other';
    if (url === '/' || url === '/es') category = 'Main';
    else if (url.includes('/blog')) category = 'Blog';
    else if (url.includes('/servicios')) category = 'Services';
    else if (url.includes('/soluciones')) category = 'Solutions';
    else if (url.includes('/casos-exito')) category = 'Case Studies';
    else if (url.includes('/kit-digital')) category = 'Kit Digital';
    
    // Determine priority
    let priority = 0.5;
    if (url === '/' || url === '/es') priority = 1.0;
    else if (url.includes('/soluciones/') || url === '/blog') priority = 0.9;
    else if (url.includes('/servicios/')) priority = 0.8;
    else if (url.includes('/blog/')) priority = 0.7;
    
    // Determine changefreq
    let changefreq = 'monthly';
    if (url.includes('/blog/')) changefreq = 'weekly';
    else if (url === '/' || url === '/es') changefreq = 'weekly';
    
    // Check for issues
    if (!isIndexable) {
      issues.push({
        type: 'error',
        url,
        message: `URL en sitemap pero marcada como noindex`
      });
    }
    
    return {
      loc: url,
      priority,
      changefreq,
      category,
      isIndexable,
      robotsDirective: robots
    };
  });
  
  // Calculate statistics
  const byCategory: Record<string, number> = {};
  const byPriority: Record<string, number> = {};
  const byChangefreq: Record<string, number> = {};
  let totalPriority = 0;
  
  urls.forEach(url => {
    byCategory[url.category || 'Other'] = (byCategory[url.category || 'Other'] || 0) + 1;
    byPriority[url.priority.toString()] = (byPriority[url.priority.toString()] || 0) + 1;
    byChangefreq[url.changefreq] = (byChangefreq[url.changefreq] || 0) + 1;
    totalPriority += url.priority;
  });
  
  const stats: SitemapStats = {
    totalUrls: urls.length,
    indexableUrls: urls.filter(u => u.isIndexable).length,
    noindexUrls: urls.filter(u => !u.isIndexable).length,
    byCategory,
    byPriority,
    byChangefreq,
    avgPriority: totalPriority / urls.length
  };
  
  // Additional validation
  if (stats.noindexUrls > 0) {
    issues.push({
      type: 'error',
      message: `${stats.noindexUrls} URLs en sitemap con noindex - deben eliminarse`
    });
  }
  
  if (stats.totalUrls > 500) {
    issues.push({
      type: 'warning',
      message: 'Sitemap grande (>500 URLs) - considera dividir en múltiples sitemaps'
    });
  }
  
  if (stats.avgPriority < 0.5) {
    issues.push({
      type: 'info',
      message: 'Prioridad promedio baja - considera aumentar prioridad de páginas clave'
    });
  }
  
  return { urls, stats, issues };
};

/**
 * Finds URLs missing from sitemap
 */
export const findMissingUrls = (appRoutes: string[]): string[] => {
  const sitemapUrls = getIndexableUrls();
  const missing: string[] = [];
  
  appRoutes.forEach(route => {
    // Skip admin, auth, and utility routes
    if (route.includes('/admin') || route.includes('/auth') || route.includes('*')) {
      return;
    }
    
    // Normalize route
    const normalized = route.replace(/\/$/, '');
    
    if (!sitemapUrls.includes(normalized) && !sitemapUrls.includes(route)) {
      missing.push(route);
    }
  });
  
  return missing;
};

/**
 * Generates sitemap recommendations
 */
export const generateSitemapRecommendations = (
  analysis: ReturnType<typeof analyzeSitemap>
): string[] => {
  const recommendations: string[] = [];
  
  const { stats, issues } = analysis;
  
  // Check for critical issues
  if (issues.some(i => i.type === 'error')) {
    recommendations.push('🔴 Resolver errores críticos antes de continuar');
  }
  
  // Priority optimization
  if (stats.byPriority['1.0'] && stats.byPriority['1.0'] > 5) {
    recommendations.push('💡 Demasiadas URLs con prioridad 1.0 - reservar solo para páginas clave');
  }
  
  // Changefreq optimization
  if (stats.byChangefreq['daily'] && stats.byChangefreq['daily'] > 10) {
    recommendations.push('💡 Muchas URLs con changefreq "daily" puede no ser realista');
  }
  
  // Category balance
  const totalServices = stats.byCategory['Services'] || 0;
  const totalBlog = stats.byCategory['Blog'] || 0;
  
  if (totalBlog > totalServices * 3) {
    recommendations.push('💡 Ratio blog/servicios desbalanceado - considera noindex en blog posts antiguos');
  }
  
  return recommendations;
};
