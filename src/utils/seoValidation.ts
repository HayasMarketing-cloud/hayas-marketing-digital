/**
 * Sistema de Validación y Alertas SEO
 * Valida consistencia entre rutas, SEO y sitemap
 */

import { EnhancedPageSEOData } from '@/data/seoData';
import { RouteDefinition } from './routeRegistry';

export interface SEOValidationIssue {
  severity: 'error' | 'warning' | 'info';
  type: 'missing_seo' | 'orphaned_seo' | 'missing_sitemap' | 'inconsistent_data' | 'quality_issue';
  path: string;
  message: string;
  suggestion?: string;
}

export interface SEOHealthMetrics {
  score: number; // 0-100
  totalRoutes: number;
  routesWithSEO: number;
  routesWithOptimizedSEO: number;
  newRoutesWithoutSEO: number;
  orphanedSEOPages: number;
  issues: SEOValidationIssue[];
}

/**
 * Valida la salud general del SEO del sitio
 */
export function validateSEOHealth(
  routes: RouteDefinition[],
  seoPages: Map<string, EnhancedPageSEOData>,
  sitemapUrls: string[]
): SEOHealthMetrics {
  const issues: SEOValidationIssue[] = [];
  
  const indexableRoutes = routes.filter(r => r.isIndexable);
  let routesWithSEO = 0;
  let routesWithOptimizedSEO = 0;
  
  // 1. Validar que todas las rutas indexables tengan SEO
  indexableRoutes.forEach(route => {
    const seoData = seoPages.get(route.path);
    
    if (!seoData) {
      issues.push({
        severity: 'warning',
        type: 'missing_seo',
        path: route.path,
        message: `Ruta sin datos SEO definidos`,
        suggestion: 'El sistema aplicará SEO auto-generado. Considera definir SEO optimizado.'
      });
    } else {
      routesWithSEO++;
      
      // Validar calidad del SEO
      const qualityIssues = validateSEOQuality(seoData);
      if (qualityIssues.length === 0) {
        routesWithOptimizedSEO++;
      } else {
        issues.push(...qualityIssues.map(issue => ({
          ...issue,
          path: route.path
        })));
      }
    }
    
    // 2. Validar que esté en el sitemap
    if (!sitemapUrls.includes(route.path)) {
      issues.push({
        severity: 'error',
        type: 'missing_sitemap',
        path: route.path,
        message: 'Ruta indexable no está en el sitemap',
        suggestion: 'El sitemap dinámico debería incluirla automáticamente.'
      });
    }
  });
  
  // 3. Detectar SEO huérfano (páginas con SEO pero sin ruta)
  const routePaths = new Set(routes.map(r => r.path));
  seoPages.forEach((seoData, path) => {
    if (!routePaths.has(path)) {
      issues.push({
        severity: 'warning',
        type: 'orphaned_seo',
        path,
        message: 'Datos SEO sin ruta correspondiente',
        suggestion: 'Considera eliminar estos datos o crear la ruta.'
      });
    }
  });
  
  // 4. Calcular score de salud
  const score = calculateHealthScore(
    indexableRoutes.length,
    routesWithSEO,
    routesWithOptimizedSEO,
    issues
  );
  
  return {
    score,
    totalRoutes: indexableRoutes.length,
    routesWithSEO,
    routesWithOptimizedSEO,
    newRoutesWithoutSEO: indexableRoutes.length - routesWithSEO,
    orphanedSEOPages: Array.from(seoPages.keys()).filter(path => !routePaths.has(path)).length,
    issues: issues.sort((a, b) => {
      const severityOrder = { error: 0, warning: 1, info: 2 };
      return severityOrder[a.severity] - severityOrder[b.severity];
    })
  };
}

/**
 * Valida la calidad de los datos SEO de una página
 */
function validateSEOQuality(seoData: EnhancedPageSEOData): Omit<SEOValidationIssue, 'path'>[] {
  const issues: Omit<SEOValidationIssue, 'path'>[] = [];
  
  // Validar longitud del título
  if (seoData.title.length < 30) {
    issues.push({
      severity: 'warning',
      type: 'quality_issue',
      message: `Título muy corto (${seoData.title.length} caracteres)`,
      suggestion: 'Los títulos óptimos tienen entre 50-60 caracteres.'
    });
  } else if (seoData.title.length > 60) {
    issues.push({
      severity: 'info',
      type: 'quality_issue',
      message: `Título largo (${seoData.title.length} caracteres)`,
      suggestion: 'Los títulos óptimos tienen entre 50-60 caracteres.'
    });
  }
  
  // Validar longitud de la descripción
  if (seoData.description.length < 120) {
    issues.push({
      severity: 'warning',
      type: 'quality_issue',
      message: `Descripción muy corta (${seoData.description.length} caracteres)`,
      suggestion: 'Las descripciones óptimas tienen entre 150-160 caracteres.'
    });
  } else if (seoData.description.length > 160) {
    issues.push({
      severity: 'info',
      type: 'quality_issue',
      message: `Descripción larga (${seoData.description.length} caracteres)`,
      suggestion: 'Las descripciones óptimas tienen entre 150-160 caracteres.'
    });
  }
  
  // Validar keywords
  if (!seoData.keywords || seoData.keywords.length === 0) {
    issues.push({
      severity: 'info',
      type: 'quality_issue',
      message: 'No hay keywords definidas',
      suggestion: 'Añade 5-10 keywords relevantes.'
    });
  } else if (seoData.keywords.length < 3) {
    issues.push({
      severity: 'info',
      type: 'quality_issue',
      message: `Pocas keywords (${seoData.keywords.length})`,
      suggestion: 'Lo ideal es tener entre 5-10 keywords.'
    });
  }
  
  // Validar H1
  if (seoData.h1.length < 20) {
    issues.push({
      severity: 'warning',
      type: 'quality_issue',
      message: 'H1 muy corto',
      suggestion: 'El H1 debería ser descriptivo y contener keywords principales.'
    });
  }
  
  // Validar canonical
  if (!seoData.canonical.startsWith('https://')) {
    issues.push({
      severity: 'error',
      type: 'quality_issue',
      message: 'Canonical no usa HTTPS',
      suggestion: 'Todas las URLs canónicas deben usar HTTPS.'
    });
  }
  
  // Validar estructura de headings
  if (!seoData.headings?.h2Primary) {
    issues.push({
      severity: 'info',
      type: 'quality_issue',
      message: 'No hay H2 primario definido',
      suggestion: 'Define estructura de headings para mejor SEO.'
    });
  }
  
  return issues;
}

/**
 * Calcula el score de salud SEO (0-100)
 */
function calculateHealthScore(
  totalRoutes: number,
  routesWithSEO: number,
  routesWithOptimizedSEO: number,
  issues: SEOValidationIssue[]
): number {
  if (totalRoutes === 0) return 100;
  
  // Puntuación base: % de rutas con SEO
  const baseScore = (routesWithSEO / totalRoutes) * 100;
  
  // Bonificación: rutas con SEO optimizado
  const optimizationBonus = ((routesWithOptimizedSEO / totalRoutes) * 20);
  
  // Penalización por issues
  const errorPenalty = issues.filter(i => i.severity === 'error').length * 5;
  const warningPenalty = issues.filter(i => i.severity === 'warning').length * 2;
  
  const score = Math.max(
    0,
    Math.min(100, baseScore + optimizationBonus - errorPenalty - warningPenalty)
  );
  
  return Math.round(score);
}

/**
 * Genera reporte de diferencias entre rutas y SEO
 */
export function generateSEODiffReport(
  routes: RouteDefinition[],
  seoPages: Map<string, EnhancedPageSEOData>
): {
  newRoutes: RouteDefinition[];
  deletedSEO: string[];
  matchedRoutes: RouteDefinition[];
} {
  const routePaths = new Set(routes.map(r => r.path));
  const seoPaths = new Set(seoPages.keys());
  
  const newRoutes = routes.filter(r => r.isIndexable && !seoPaths.has(r.path));
  const deletedSEO = Array.from(seoPaths).filter(path => !routePaths.has(path));
  const matchedRoutes = routes.filter(r => seoPaths.has(r.path));
  
  return {
    newRoutes,
    deletedSEO,
    matchedRoutes
  };
}

/**
 * Valida que una ruta específica esté correctamente configurada
 */
export function validateRoute(
  route: RouteDefinition,
  seoData: EnhancedPageSEOData | undefined,
  isInSitemap: boolean
): SEOValidationIssue[] {
  const issues: SEOValidationIssue[] = [];
  
  if (!route.isIndexable) {
    return issues; // No validar rutas no indexables
  }
  
  if (!seoData) {
    issues.push({
      severity: 'warning',
      type: 'missing_seo',
      path: route.path,
      message: 'Ruta sin datos SEO',
      suggestion: 'Define datos SEO optimizados para esta ruta.'
    });
  } else {
    const qualityIssues = validateSEOQuality(seoData);
    issues.push(...qualityIssues.map(issue => ({
      ...issue,
      path: route.path
    })));
  }
  
  if (!isInSitemap) {
    issues.push({
      severity: 'error',
      type: 'missing_sitemap',
      path: route.path,
      message: 'Ruta no está en sitemap',
      suggestion: 'Añade esta ruta al sitemap automático.'
    });
  }
  
  return issues;
}
