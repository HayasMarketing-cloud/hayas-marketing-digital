import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { UniversalBreadcrumbs } from '@/components/UniversalBreadcrumbs';
import { analyzeCrawlBudget, generateInternalLinkingPlan, validateSitemap } from '@/utils/crawlBudgetOptimizer';
import { getIndexableUrls, getCrawlBudgetStats } from '@/utils/sitemap';
import Seo from '@/components/Seo';
import { CheckCircle, AlertTriangle, Info, TrendingUp, Link as LinkIcon, Search } from 'lucide-react';

/**
 * Developer page to show crawl budget optimization report
 * Demonstrates SEO improvements and technical implementation
 */
const CrawlBudgetReport = () => {
  // Get crawl budget statistics
  const stats = getCrawlBudgetStats();
  const indexableUrls = getIndexableUrls();
  
  // Sample URLs for demonstration
  const allUrls = [
    '/', '/servicios', '/casos-exito', '/blog', '/nosotros', '/contacto',
    '/soluciones/impulsa-tu-marca', '/soluciones/conecta-con-tus-clientes', '/soluciones/activa-tus-ventas',
    '/servicios/implantacion-crm', '/servicios/diseno-web', '/servicios/seo-positioning',
    '/casos-exito/bufete-maseras', '/casos-exito/asendia', '/casos-exito/centro-roraima',
    '/kit-digital', '/agendar-reunion', '/solicitar-consulta'
  ];
  
  const crawlReport = analyzeCrawlBudget(allUrls);
  const linkingPlan = generateInternalLinkingPlan(allUrls);
  const sitemapValidation = validateSitemap(indexableUrls);

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Reporte de Optimización Crawl Budget - Hayas Marketing"
        description="Análisis técnico de optimización SEO para el presupuesto de rastreo de Google. Páginas indexables, estrategia de canonicals y enlaces internos."
        robots="noindex, follow"
      />
      <Navigation />
      
      <UniversalBreadcrumbs customItems={[
        { label: 'Inicio', href: '/' },
        { label: 'SEO Technical Report' }
      ]} />

      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">
                Reporte de Optimización Crawl Budget
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Análisis técnico de las optimizaciones implementadas para maximizar 
                la eficiencia del presupuesto de rastreo de Google
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-2xl font-bold text-primary">
                    {stats.indexablePages}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Páginas Indexables
                  </p>
                  <Badge variant="secondary" className="mt-2">
                    {Math.round((stats.indexablePages / stats.totalPages) * 100)}% del total
                  </Badge>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-2xl font-bold text-green-600">
                    {stats.crawlBudgetSaved}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Páginas NoIndex
                  </p>
                  <Badge variant="outline" className="mt-2 text-green-600">
                    Budget Optimizado
                  </Badge>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-2xl font-bold text-blue-600">
                    {crawlReport.optimizationScore}%
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Score Optimización
                  </p>
                  <Badge variant={crawlReport.optimizationScore < 40 ? "default" : "secondary"} className="mt-2">
                    {crawlReport.optimizationScore < 40 ? "Óptimo" : "Revisar"}
                  </Badge>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-2xl font-bold text-purple-600">
                    {crawlReport.urlsByPriority.critical.length}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    URLs Críticas
                  </p>
                  <Badge variant="outline" className="mt-2 text-purple-600">
                    Alta Prioridad
                  </Badge>
                </CardContent>
              </Card>
            </div>

            {/* Optimization Summary */}
            <Card className="mb-12">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-green-600" />
                  Optimizaciones Implementadas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <div>
                        <h4 className="font-semibold">Sitemap Optimizado</h4>
                        <p className="text-sm text-muted-foreground">
                          Solo páginas indexables incluidas. Reducción de {stats.crawlBudgetSaved} URLs innecesarias.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <div>
                        <h4 className="font-semibold">Canonicals Estratégicos</h4>
                        <p className="text-sm text-muted-foreground">
                          Casos de éxito individuales → /casos-exito para consolidar autoridad.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <div>
                        <h4 className="font-semibold">Enlaces Internos</h4>
                        <p className="text-sm text-muted-foreground">
                          Páginas satélite enlazan hacia pilares. Casos → Servicios → Soluciones.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <div>
                        <h4 className="font-semibold">Breadcrumbs Universales</h4>
                        <p className="text-sm text-muted-foreground">
                          Navegación jerárquica en todas las páginas para optimizar crawl paths.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <div>
                        <h4 className="font-semibold">Robots Automatizados</h4>
                        <p className="text-sm text-muted-foreground">
                          Control dinámico de indexación basado en patrones de URL y contenido.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <div>
                        <h4 className="font-semibold">Validación Continua</h4>
                        <p className="text-sm text-muted-foreground">
                          Sistema de monitoreo para detectar inconsistencias sitemap vs robots.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recommendations */}
            <Card className="mb-12">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Info className="h-5 w-5 text-blue-600" />
                  Recomendaciones del Sistema
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {crawlReport.recommendations.map((rec, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
                      {rec.startsWith('✅') ? (
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      ) : rec.startsWith('⚠️') ? (
                        <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                      ) : (
                        <Info className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      )}
                      <p className="text-sm">{rec.replace(/^[✅⚠️❌]\s*/, '')}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* URL Priority Distribution */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Search className="h-5 w-5" />
                    URLs por Prioridad SEO
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Críticas</span>
                      <Badge variant="destructive">
                        {crawlReport.urlsByPriority.critical.length}
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Importantes</span>
                      <Badge variant="secondary">
                        {crawlReport.urlsByPriority.important.length}
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Normales</span>
                      <Badge variant="outline">
                        {crawlReport.urlsByPriority.normal.length}
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Bajas</span>
                      <Badge variant="outline">
                        {crawlReport.urlsByPriority.low.length}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <LinkIcon className="h-5 w-5" />
                    Validación Sitemap
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">URLs en Sitemap</span>
                      <Badge variant="secondary">
                        {sitemapValidation.totalSitemapUrls}
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">URLs Válidas</span>
                      <Badge variant={sitemapValidation.isValid ? "default" : "destructive"}>
                        {sitemapValidation.validIndexableUrls}
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Estado</span>
                      <Badge variant={sitemapValidation.isValid ? "default" : "destructive"}>
                        {sitemapValidation.isValid ? "✅ Válido" : "❌ Con errores"}
                      </Badge>
                    </div>
                    {sitemapValidation.issues.length > 0 && (
                      <div className="mt-4 p-3 bg-red-50 rounded-lg">
                        <p className="text-sm font-medium text-red-800 mb-2">Problemas detectados:</p>
                        <ul className="text-xs text-red-700 space-y-1">
                          {sitemapValidation.issues.map((issue, index) => (
                            <li key={index}>• {issue}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Technical Implementation */}
            <Card className="mb-12">
              <CardHeader>
                <CardTitle>Implementación Técnica</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-900 text-gray-100 p-6 rounded-lg font-mono text-sm overflow-x-auto">
                  <div className="space-y-4">
                    <div>
                      <span className="text-green-400">// Canonical Strategy</span>
                      <div className="ml-4 mt-1">
                        <div><span className="text-blue-400">Pillar Pages:</span> /casos-exito, /servicios, /soluciones</div>
                        <div><span className="text-blue-400">Satellite Pages:</span> individual cases → canonical to pillar</div>
                        <div><span className="text-blue-400">Robots Control:</span> dynamic noindex/index based on URL patterns</div>
                      </div>
                    </div>
                    
                    <div>
                      <span className="text-green-400">// Internal Linking Strategy</span>
                      <div className="ml-4 mt-1">
                        <div><span className="text-blue-400">Cases → Services:</span> strategic service recommendations</div>
                        <div><span className="text-blue-400">Services → Solutions:</span> pillar page consolidation</div>
                        <div><span className="text-blue-400">Breadcrumbs:</span> universal navigation hierarchy</div>
                      </div>
                    </div>
                    
                    <div>
                      <span className="text-green-400">// Crawl Budget Optimization</span>
                      <div className="ml-4 mt-1">
                        <div><span className="text-blue-400">Sitemap:</span> {stats.indexablePages} indexable URLs only</div>
                        <div><span className="text-blue-400">Saved Budget:</span> {stats.crawlBudgetSaved} noindex pages excluded</div>
                        <div><span className="text-blue-400">Efficiency:</span> {100 - crawlReport.optimizationScore}% crawl budget saved</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Actions */}
            <div className="text-center">
              <div className="inline-flex items-center gap-4 bg-primary/10 rounded-lg px-6 py-4">
                <div className="text-sm">
                  <strong>Crawl Budget Optimizado:</strong> Sistema implementado y funcionando correctamente
                </div>
                <Button asChild>
                  <a href="/sitemap-optimized.xml" target="_blank">
                    Ver Sitemap Optimizado
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CrawlBudgetReport;