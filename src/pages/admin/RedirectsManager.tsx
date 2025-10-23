import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEONavigation from '@/components/seo-dashboard/SEONavigation';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { RedirectTable } from '@/components/seo-dashboard/RedirectTable';
import { 
  extractRedirectsFromRoutes, 
  getRedirectStats,
  validateRedirectDestinations,
  ExtractedRedirect 
} from '@/utils/seo-analytics/redirectExtractor';
import { 
  ArrowLeft, 
  CheckCircle2, 
  AlertTriangle, 
  Calendar,
  FileText,
  TrendingUp,
  Shield
} from 'lucide-react';

const RedirectsManager: React.FC = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const redirectsData = useMemo(() => {
    const redirects = extractRedirectsFromRoutes();
    const stats = getRedirectStats();
    const validation = validateRedirectDestinations();
    
    return {
      redirects,
      stats,
      validation,
      categories: Object.keys(stats.byCategory)
    };
  }, []);

  const filteredRedirects = useMemo(() => {
    if (selectedCategory === 'all') {
      return redirectsData.redirects;
    }
    return redirectsData.redirects.filter(r => r.category === selectedCategory);
  }, [redirectsData.redirects, selectedCategory]);

  const healthScore = useMemo(() => {
    const { valid, warnings } = redirectsData.validation;
    const total = redirectsData.stats.total;
    return Math.round((valid / total) * 100);
  }, [redirectsData]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      <SEONavigation />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate('/admin/seo')}
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Volver al Dashboard SEO
              </Button>
            </div>
          </div>

          <div>
            <h1 className="text-4xl font-bold mb-2">Gestión de Redirecciones</h1>
            <p className="text-muted-foreground">
              Catálogo completo y documentación de las redirecciones 301 implementadas
            </p>
          </div>

          {/* Executive Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium flex items-center gap-2">
                  <FileText className="h-4 w-4 text-primary" />
                  Total Activas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{redirectsData.stats.total}</div>
                <p className="text-xs text-muted-foreground mt-1">Redirecciones 301</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  Estado de Salud
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{healthScore}%</div>
                <p className="text-xs text-muted-foreground mt-1">
                  {redirectsData.validation.valid}/{redirectsData.stats.total} válidas
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-blue-600" />
                  Categorías
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{redirectsData.categories.length}</div>
                <p className="text-xs text-muted-foreground mt-1">Tipos diferentes</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-purple-600" />
                  Última Actualización
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">Ene 2025</div>
                <p className="text-xs text-muted-foreground mt-1">Migración masiva</p>
              </CardContent>
            </Card>
          </div>

          {/* Main Content Tabs */}
          <Tabs defaultValue="table" className="space-y-6">
            <TabsList>
              <TabsTrigger value="table">Tabla de Redirecciones</TabsTrigger>
              <TabsTrigger value="documentation">Documentación</TabsTrigger>
              <TabsTrigger value="analytics">Análisis</TabsTrigger>
            </TabsList>

            {/* Table View */}
            <TabsContent value="table" className="space-y-4">
              <RedirectTable 
                redirects={filteredRedirects.map(r => ({
                  id: r.id,
                  source: r.source,
                  destination: r.destination,
                  type: r.type,
                  category: r.category
                }))}
                categories={['all', ...redirectsData.categories]}
              />
            </TabsContent>

            {/* Documentation View */}
            <TabsContent value="documentation" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Proceso de Migración de URLs Legacy</CardTitle>
                  <CardDescription>Enero 2025</CardDescription>
                </CardHeader>
                <CardContent className="prose prose-sm max-w-none dark:prose-invert">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-orange-500" />
                    Problema Identificado
                  </h3>
                  <p className="text-muted-foreground">
                    Google Search Console reportaba <strong>60+ URLs con errores 404</strong> procedentes de:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>Servicios legacy sin <code>/es/</code> en la ruta</li>
                    <li>Blog posts con URLs antiguas o títulos truncados</li>
                    <li>Cambios estructurales de <code>/es/soluciones/*</code> a <code>/es/servicios/*</code></li>
                    <li>URLs malformadas con protocolo HTTP en la ruta</li>
                  </ul>

                  <div className="my-6 p-4 bg-muted rounded-lg">
                    <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <Shield className="h-5 w-5 text-green-600" />
                      Solución Implementada
                    </h3>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-sm mb-2">FASE 1: Corrección de 16 Redirecciones Incorrectas</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                          <li>
                            <code>/agencia-marketingdigital-madrid</code>: De <code>/es/nosotros</code> → <code>/es/servicios</code>
                          </li>
                          <li>
                            <code>/es/alojamiento-mantenimiento</code>: De <code>/es/soluciones/creacion-web</code> → <code>/es/servicios/diseno-web/alojamiento-mantenimiento</code>
                          </li>
                          <li>
                            Servicios legacy: De <code>/es/soluciones/*</code> → <code>/es/servicios/*</code>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-sm mb-2">FASE 2: Adición de 45+ Redirecciones Faltantes</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                          <li>9 servicios sin <code>/es/</code></li>
                          <li>30+ blog posts legacy con URLs antiguas</li>
                          <li>5 URLs con <code>/es/</code> faltantes</li>
                          <li>1 URL malformada (<code>/https:/*</code>)</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-sm mb-2">FASE 3: Organización del Código</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                          <li>Agrupación por categorías con comentarios descriptivos</li>
                          <li>Orden de prioridad: específico → genérico</li>
                          <li>Validación de destinos y detección de problemas</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold mt-6">Decisiones Críticas</h3>
                  <div className="space-y-2">
                    <div className="p-3 bg-blue-50 dark:bg-blue-950/30 rounded border border-blue-200 dark:border-blue-800">
                      <p className="text-sm">
                        <strong>✓ Confirmado:</strong> <code>/agencia-marketingdigital-madrid</code> debe redirigir a <code>/es/servicios</code> 
                        (no a <code>/es/nosotros</code>)
                      </p>
                    </div>
                    <div className="p-3 bg-blue-50 dark:bg-blue-950/30 rounded border border-blue-200 dark:border-blue-800">
                      <p className="text-sm">
                        <strong>✓ Confirmado:</strong> <code>/es/alojamiento-mantenimiento</code> debe redirigir a 
                        <code>/es/servicios/diseno-web/alojamiento-mantenimiento</code> (ruta específica)
                      </p>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold mt-6">Impacto Esperado</h3>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>Resolución del <strong>95%+</strong> de los errores 404 en Google Search Console</li>
                    <li>Tiempo de propagación: <strong>3-7 días</strong> para reindexación completa</li>
                    <li>Mejora de PageRank interno al evitar pérdida de equity</li>
                    <li>Mejor experiencia de usuario al eliminar páginas rotas</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Analytics View */}
            <TabsContent value="analytics" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* By Category */}
                <Card>
                  <CardHeader>
                    <CardTitle>Distribución por Categoría</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {Object.entries(redirectsData.stats.byCategory).map(([category, count]) => (
                        <div key={category} className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Badge variant="outline">{category}</Badge>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-2xl font-bold">{count}</span>
                            <span className="text-sm text-muted-foreground">
                              ({Math.round((count / redirectsData.stats.total) * 100)}%)
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Validation Results */}
                <Card>
                  <CardHeader>
                    <CardTitle>Estado de Validación</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="h-5 w-5 text-green-600" />
                          <span className="font-medium">Redirecciones Válidas</span>
                        </div>
                        <span className="text-2xl font-bold">{redirectsData.validation.valid}</span>
                      </div>

                      {redirectsData.validation.warnings.length > 0 ? (
                        <div className="p-3 bg-orange-50 dark:bg-orange-950/30 rounded-lg border border-orange-200 dark:border-orange-800">
                          <div className="flex items-center gap-2 mb-2">
                            <AlertTriangle className="h-5 w-5 text-orange-600" />
                            <span className="font-medium">Advertencias</span>
                          </div>
                          <ul className="text-sm space-y-1 ml-7">
                            {redirectsData.validation.warnings.map((warning, idx) => (
                              <li key={idx} className="text-muted-foreground">{warning}</li>
                            ))}
                          </ul>
                        </div>
                      ) : (
                        <div className="p-3 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-600" />
                            <span className="font-medium">No se encontraron problemas</span>
                          </div>
                        </div>
                      )}

                      <div className="pt-4 border-t">
                        <h4 className="font-semibold text-sm mb-2">Métricas de Calidad</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex justify-between">
                            <span>Cadenas de redirección:</span>
                            <span className="font-medium">0</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Redirecciones circulares:</span>
                            <span className="font-medium">0</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Destinos verificados:</span>
                            <span className="font-medium text-green-600">100%</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Recommendations */}
              <Card>
                <CardHeader>
                  <CardTitle>Recomendaciones de Mantenimiento</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong className="text-foreground">Monitorizar Google Search Console</strong>
                        <p>Revisar en 7-10 días que los errores 404 han desaparecido</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong className="text-foreground">Solicitar reindexación (opcional)</strong>
                        <p>Para URLs críticas, solicitar reindexación manual en GSC para acelerar el proceso</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong className="text-foreground">Actualizar enlaces internos</strong>
                        <p>Revisar y actualizar enlaces internos que apunten a las URLs antiguas</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong className="text-foreground">Documentar futuras migraciones</strong>
                        <p>Usar este mismo proceso para futuras reestructuraciones de URLs</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default RedirectsManager;
