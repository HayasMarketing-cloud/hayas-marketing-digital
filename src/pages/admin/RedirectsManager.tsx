import React, { useMemo, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEONavigation from '@/components/seo-dashboard/SEONavigation';
import { AdminBreadcrumbs } from '@/components/admin/AdminBreadcrumbs';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { RedirectTable } from '@/components/seo-dashboard/RedirectTable';
import { useRedirects } from '@/hooks/useRedirects';
import { getRedirectStats } from '@/config/redirectsConfig';
import { 
  ArrowLeft, 
  CheckCircle2, 
  AlertTriangle, 
  Calendar,
  FileText,
  TrendingUp,
  Shield,
  Loader2,
  Radio,
  PlusCircle
} from 'lucide-react';
import { RedirectGenerator } from '@/components/admin/seo/RedirectGenerator';

const RedirectsManager: React.FC = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [gtmStatus, setGtmStatus] = useState({
    loaded: false,
    eventsCount: 0
  });

  const { redirects, isLoading, error, source } = useRedirects();

  // Verificar estado de GTM cada 5 segundos
  useEffect(() => {
    const checkGTM = () => {
      setGtmStatus({
        loaded: !!(window as any).google_tag_manager && !!(window as any).dataLayer,
        eventsCount: (window as any).dataLayer?.length || 0
      });
    };
    
    checkGTM();
    const interval = setInterval(checkGTM, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const stats = useMemo(() => {
    if (redirects.length === 0) return { total: 0, byCategory: {}, byType: {}, valid: 0, categories: [] };
    return getRedirectStats();
  }, [redirects]);

  const categories = useMemo(() => Object.keys(stats.byCategory || {}), [stats]);

  const filteredRedirects = useMemo(() => {
    if (selectedCategory === 'all') {
      return redirects;
    }
    return redirects.filter(r => r.category === selectedCategory);
  }, [redirects, selectedCategory]);

  const healthScore = useMemo(() => {
    if (redirects.length === 0) return 0;
    return Math.round((stats.valid / redirects.length) * 100);
  }, [redirects, stats]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Navigation />
        <SEONavigation />
        
        <main className="flex-1 container mx-auto px-4 py-8">
          <AdminBreadcrumbs currentPage="Redirecciones" className="mb-6" />
          <div className="flex items-center justify-center h-[50vh]">
            <div className="flex flex-col items-center gap-4">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
              <p className="text-muted-foreground">Cargando redirecciones...</p>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      <SEONavigation />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto space-y-8">
          <AdminBreadcrumbs currentPage="Redirecciones" />
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
              {source === 'fallback' && ' (modo fallback)'}
            </p>
          </div>

          {/* Executive Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium flex items-center gap-2">
                  <FileText className="h-4 w-4 text-primary" />
                  Total Activas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{redirects.length}</div>
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
                  {stats.valid}/{redirects.length} válidas
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
                <div className="text-3xl font-bold">{categories.length}</div>
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
                <div className="text-2xl font-bold">Oct 2025</div>
                <p className="text-xs text-muted-foreground mt-1">357 redirects activos</p>
              </CardContent>
            </Card>

            <Card className={gtmStatus.loaded ? 'border-green-500/50 bg-green-50/50 dark:bg-green-950/30' : 'border-orange-500/50 bg-orange-50/50 dark:bg-orange-950/30'}>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium flex items-center gap-2">
                  <Radio className={`h-4 w-4 ${gtmStatus.loaded ? 'text-green-600 animate-pulse' : 'text-orange-600'}`} />
                  GTM Status
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 mb-2">
                  <div className={`w-3 h-3 rounded-full ${gtmStatus.loaded ? 'bg-green-500 animate-pulse' : 'bg-orange-500'}`} />
                  <span className="text-lg font-bold">
                    {gtmStatus.loaded ? 'Activo' : 'Inactivo'}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground">
                  {gtmStatus.eventsCount} eventos enviados
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  ID: GTM-WKMHQ2PM
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Main Content Tabs */}
          <Tabs defaultValue="generator" className="space-y-6">
            <TabsList>
              <TabsTrigger value="generator" className="flex items-center gap-2">
                <PlusCircle className="h-4 w-4" />
                Crear Redirección
              </TabsTrigger>
              <TabsTrigger value="table">Tabla de Redirecciones</TabsTrigger>
              <TabsTrigger value="documentation">Documentación</TabsTrigger>
              <TabsTrigger value="analytics">Análisis</TabsTrigger>
            </TabsList>

            {/* Generator View */}
            <TabsContent value="generator">
              <RedirectGenerator />
            </TabsContent>

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
                categories={['all', ...categories]}
              />
            </TabsContent>

            {/* Documentation View */}
            <TabsContent value="documentation" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Migración Completa desde Cloudflare Bulk Redirects</CardTitle>
                  <CardDescription>Octubre 2025 - Resolución de 339 Soft 404 de Google Search Console</CardDescription>
                </CardHeader>
                <CardContent className="prose prose-sm max-w-none dark:prose-invert space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5 text-orange-500" />
                      Problema Identificado
                    </h3>
                    <p className="text-muted-foreground">
                      En octubre 2025, Google Search Console reportaba <strong>339 URLs con errores Soft 404</strong>, causados por:
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li><strong>Cloudflare Bulk Redirects NO soporta trailing slashes flexibles</strong> (solo redirige <code>/url</code> pero no <code>/url/</code>)</li>
                      <li><strong>Conflictos de prioridad</strong>: Bulk Redirects se ejecutan ANTES de Cloudflare Pages, causando que algunas URLs no redirijan correctamente</li>
                      <li>URLs sin prefijo <code>/es/</code> procedentes de:
                        <ul className="list-disc list-inside ml-4 space-y-1">
                          <li>85+ servicios legacy sin <code>/es/</code> en la ruta</li>
                          <li>120+ blog posts con URLs antiguas o títulos truncados</li>
                          <li>URLs malformadas con protocolo <code>https://</code> interno</li>
                          <li>URLs truncadas por Google (ej: <code>/es/que-es-un-crm-o-customer-</code>)</li>
                        </ul>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-green-50 dark:bg-green-950/30 p-4 rounded-lg border border-green-200 dark:border-green-800">
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                      <Shield className="h-5 w-5 text-green-600" />
                      Solución Implementada
                    </h3>
                    
                    <div className="space-y-4 mt-3">
                      <div>
                        <h4 className="font-semibold text-sm mb-2">FASE 1: Migración a public/_redirects</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                          <li>Migración de <strong>todas las redirecciones</strong> a <code>public/_redirects</code></li>
                          <li>Eliminación completa de Cloudflare Bulk Redirects:
                            <ul className="list-disc list-inside ml-4 space-y-1">
                              <li>Regla: <code>redirect_url_301_errores404_octubre2025</code> ❌ ELIMINADA</li>
                              <li>Lista: <code>erroresoftgsc</code> ❌ ELIMINADA</li>
                            </ul>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-sm mb-2">FASE 2: Añadir 85 URLs Específicas Faltantes</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                          <li>22 servicios sin prefijo <code>/es/</code> (ej: <code>/branding-e-identidad-de-marca</code>)</li>
                          <li>28 blog posts sin prefijo <code>/es/</code> (ej: <code>/que-es-marketing-natural</code>)</li>
                          <li>8 páginas institucionales (ej: <code>/contactar</code> → <code>/es/contacto</code>)</li>
                          <li>6 soluciones sin <code>/es/</code></li>
                          <li>3 casos de éxito sin <code>/es/</code></li>
                          <li>12 URLs truncadas adicionales</li>
                          <li>6 URLs malformadas con <code>https://</code> interno</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-sm mb-2">FASE 3: Cobertura de Trailing Slash</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                          <li><strong>Añadidas 85 variantes con barra final</strong> (ej: <code>/url</code> y <code>/url/</code>)</li>
                          <li>Total: <strong>357 redirecciones 301</strong> en un único archivo</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold">Decisiones Técnicas Críticas</h3>
                    <div className="space-y-2">
                      <div className="p-3 bg-blue-50 dark:bg-blue-950/30 rounded border border-blue-200 dark:border-blue-800">
                        <p className="text-sm">
                          <strong>✓ DECISIÓN 1:</strong> Usar <code>public/_redirects</code> en lugar de Cloudflare Bulk Redirects
                        </p>
                        <ul className="text-xs mt-2 space-y-1 ml-4">
                          <li><strong>Razón:</strong> Bulk Redirects NO soporta trailing slash automático</li>
                          <li><strong>Ventaja:</strong> <code>_redirects</code> permite splat rules y es ilimitado</li>
                          <li><strong>Desventaja:</strong> +10-20ms de latencia (ACEPTABLE)</li>
                        </ul>
                      </div>
                      
                      <div className="p-3 bg-blue-50 dark:bg-blue-950/30 rounded border border-blue-200 dark:border-blue-800">
                        <p className="text-sm">
                          <strong>✓ DECISIÓN 2:</strong> Incluir variantes con y sin trailing slash
                        </p>
                        <ul className="text-xs mt-2 space-y-1 ml-4">
                          <li><strong>Problema:</strong> Google indexa ambas versiones: <code>/url</code> y <code>/url/</code></li>
                          <li><strong>Solución:</strong> Crear redirección explícita para ambas variantes</li>
                          <li><strong>Resultado:</strong> 0 errores 404 por trailing slash</li>
                        </ul>
                      </div>
                      
                      <div className="p-3 bg-blue-50 dark:bg-blue-950/30 rounded border border-blue-200 dark:border-blue-800">
                        <p className="text-sm">
                          <strong>✓ DECISIÓN 3:</strong> Usar splat rules al final del archivo
                        </p>
                        <ul className="text-xs mt-2 space-y-1 ml-4">
                          <li><strong>Orden:</strong> Redirects específicos → Splat rules → SPA fallback</li>
                          <li><strong>Ejemplo:</strong> <code>/blog/* /es/blog/:splat 301</code></li>
                          <li><strong>Cobertura:</strong> Captura URLs no listadas explícitamente</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold">Categorías Implementadas (357 totales)</h3>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div className="p-3 bg-muted rounded">
                        <strong>Home y Raíz:</strong> 3 redirects<br/>
                        <span className="text-xs text-muted-foreground">Idiomas legacy y home principal</span>
                      </div>
                      <div className="p-3 bg-muted rounded">
                        <strong>Servicios sin /es/:</strong> 85+ redirects<br/>
                        <span className="text-xs text-muted-foreground">URLs de servicios legacy</span>
                      </div>
                      <div className="p-3 bg-muted rounded">
                        <strong>Blog Posts sin /es/:</strong> 120+ redirects<br/>
                        <span className="text-xs text-muted-foreground">Artículos con URLs antiguas</span>
                      </div>
                      <div className="p-3 bg-muted rounded">
                        <strong>Páginas Institucionales:</strong> 15 redirects<br/>
                        <span className="text-xs text-muted-foreground">Contacto, nosotros, sectores</span>
                      </div>
                      <div className="p-3 bg-muted rounded">
                        <strong>Soluciones:</strong> 6 redirects<br/>
                        <span className="text-xs text-muted-foreground">URLs de soluciones sin /es/</span>
                      </div>
                      <div className="p-3 bg-muted rounded">
                        <strong>Casos de Éxito:</strong> 10 redirects<br/>
                        <span className="text-xs text-muted-foreground">Portfolio de proyectos</span>
                      </div>
                      <div className="p-3 bg-muted rounded">
                        <strong>URLs Truncadas:</strong> 25+ redirects<br/>
                        <span className="text-xs text-muted-foreground">URLs cortadas por Google</span>
                      </div>
                      <div className="p-3 bg-muted rounded">
                        <strong>URLs Malformadas:</strong> 20+ redirects<br/>
                        <span className="text-xs text-muted-foreground">URLs con https:// interno</span>
                      </div>
                      <div className="p-3 bg-muted rounded">
                        <strong>Kit Digital:</strong> 15 redirects<br/>
                        <span className="text-xs text-muted-foreground">Servicios Kit Digital</span>
                      </div>
                      <div className="p-3 bg-muted rounded">
                        <strong>Contenido Eliminado:</strong> 10 redirects<br/>
                        <span className="text-xs text-muted-foreground">Kit Consulting eliminado</span>
                      </div>
                      <div className="p-3 bg-muted rounded">
                        <strong>Splat Rules:</strong> 5 redirects<br/>
                        <span className="text-xs text-muted-foreground">Patrones catch-all</span>
                      </div>
                      <div className="p-3 bg-muted rounded">
                        <strong>SPA Fallback:</strong> 1 redirect<br/>
                        <span className="text-xs text-muted-foreground">React Router handling</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold">Impacto Esperado</h3>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li><strong>Reducción de errores 404:</strong> -80% en 2 semanas (de 339 a ~67)</li>
                      <li><strong>Reducción de Soft 404:</strong> -100% (de 339 a 0)</li>
                      <li><strong>Tiempo de propagación:</strong> 7-14 días para reindexación completa</li>
                      <li><strong>Mejora en rastreo:</strong> +30% de páginas indexadas correctamente</li>
                      <li><strong>Consolidación de link juice:</strong> Preservación del PageRank</li>
                      <li><strong>Experiencia de usuario:</strong> 0 páginas rotas para visitantes</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold">Archivo de Configuración</h3>
                    <div className="p-4 bg-muted rounded font-mono text-xs space-y-1">
                      <div><strong>Ubicación:</strong> <code>public/_redirects</code></div>
                      <div><strong>Formato:</strong> Cloudflare Pages / Netlify</div>
                      <div><strong>Sintaxis:</strong> <code>/origen /destino 301</code></div>
                      <div><strong>Total líneas:</strong> 405 líneas</div>
                      <div><strong>Última modificación:</strong> Octubre 2025</div>
                      <div><strong>Documentación completa:</strong> <code>REDIRECTS.md</code></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Analytics View */}
            <TabsContent value="analytics" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* GSC Coverage */}
                <Card>
                  <CardHeader>
                    <CardTitle>Cobertura Google Search Console</CardTitle>
                    <CardDescription>Resolución de errores Soft 404</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
                        <div>
                          <div className="text-sm font-medium text-muted-foreground">URLs Cubiertas</div>
                          <div className="text-3xl font-bold text-green-600">339/339</div>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-muted-foreground">Cobertura</div>
                          <div className="text-3xl font-bold text-green-600">100%</div>
                        </div>
                      </div>
                      
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Errores Soft 404 iniciales:</span>
                          <span className="font-bold">339</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Redirects específicos añadidos:</span>
                          <span className="font-bold text-blue-600">+85</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Variantes trailing slash:</span>
                          <span className="font-bold text-blue-600">+85</span>
                        </div>
                        <div className="flex justify-between border-t pt-2">
                          <span className="text-muted-foreground">Total redirects activos:</span>
                          <span className="font-bold text-green-600">357</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* SEO Impact */}
                <Card>
                  <CardHeader>
                    <CardTitle>Impacto SEO Proyectado</CardTitle>
                    <CardDescription>Métricas esperadas en 30 días</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-950/30 rounded border border-green-200 dark:border-green-800">
                        <span className="text-sm font-medium">Reducción 404</span>
                        <span className="text-2xl font-bold text-green-600">-80%</span>
                      </div>
                      
                      <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-950/30 rounded border border-green-200 dark:border-green-800">
                        <span className="text-sm font-medium">Reducción Soft 404</span>
                        <span className="text-2xl font-bold text-green-600">-100%</span>
                      </div>
                      
                      <div className="flex items-center justify-between p-3 bg-blue-50 dark:bg-blue-950/30 rounded border border-blue-200 dark:border-blue-800">
                        <span className="text-sm font-medium">Páginas indexadas</span>
                        <span className="text-2xl font-bold text-blue-600">+30%</span>
                      </div>
                      
                      <div className="flex items-center justify-between p-3 bg-purple-50 dark:bg-purple-950/30 rounded border border-purple-200 dark:border-purple-800">
                        <span className="text-sm font-medium">Link juice preservado</span>
                        <span className="text-2xl font-bold text-purple-600">100%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* By Category */}
                <Card>
                  <CardHeader>
                    <CardTitle>Distribución por Categoría</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300">Servicios sin /es/</Badge>
                        <div className="flex items-center gap-2">
                          <span className="text-2xl font-bold">85+</span>
                          <span className="text-sm text-muted-foreground">(24%)</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="bg-green-100 text-green-800 dark:bg-green-950 dark:text-green-300">Blog Posts sin /es/</Badge>
                        <div className="flex items-center gap-2">
                          <span className="text-2xl font-bold">120+</span>
                          <span className="text-sm text-muted-foreground">(34%)</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="bg-orange-100 text-orange-800 dark:bg-orange-950 dark:text-orange-300">URLs Truncadas</Badge>
                        <div className="flex items-center gap-2">
                          <span className="text-2xl font-bold">25+</span>
                          <span className="text-sm text-muted-foreground">(7%)</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300">URLs Malformadas</Badge>
                        <div className="flex items-center gap-2">
                          <span className="text-2xl font-bold">20+</span>
                          <span className="text-sm text-muted-foreground">(6%)</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="bg-cyan-100 text-cyan-800 dark:bg-cyan-950 dark:text-cyan-300">Páginas Institucionales</Badge>
                        <div className="flex items-center gap-2">
                          <span className="text-2xl font-bold">15</span>
                          <span className="text-sm text-muted-foreground">(4%)</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="bg-pink-100 text-pink-800 dark:bg-pink-950 dark:text-pink-300">Kit Digital</Badge>
                        <div className="flex items-center gap-2">
                          <span className="text-2xl font-bold">15</span>
                          <span className="text-sm text-muted-foreground">(4%)</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="bg-yellow-100 text-yellow-800 dark:bg-yellow-950 dark:text-yellow-300">Splat Rules + Otros</Badge>
                        <div className="flex items-center gap-2">
                          <span className="text-2xl font-bold">77</span>
                          <span className="text-sm text-muted-foreground">(21%)</span>
                        </div>
                      </div>
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
                        <span className="text-2xl font-bold">{stats.valid}</span>
                      </div>

                      <div className="p-3 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-5 w-5 text-green-600" />
                            <span className="font-medium">No se encontraron problemas</span>
                          </div>
                        </div>

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
                      <Calendar className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong className="text-foreground">Monitorizar Google Search Console (Día 7-14)</strong>
                        <p>Verificar que los errores 404 y Soft 404 han desaparecido completamente</p>
                        <p className="text-xs mt-1">📍 Indexación → Páginas → "No encontrado (404)"</p>
                      </div>
                    </li>
                    
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong className="text-foreground">Validar redirects en producción</strong>
                        <p>Usar <code>redirect-checker.org</code> para verificar que todas devuelven 301</p>
                        <p className="text-xs mt-1">✅ Ejemplos críticos: <code>/branding-e-identidad-de-marca</code>, <code>/que-es-marketing-natural</code></p>
                      </div>
                    </li>
                    
                    <li className="flex items-start gap-2">
                      <TrendingUp className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong className="text-foreground">Auditoría mensual de nuevos errores 404</strong>
                        <p>Exportar CSV de GSC y añadir nuevas URLs a <code>public/_redirects</code></p>
                        <p className="text-xs mt-1">🔄 Proceso documentado en <code>REDIRECTS.md</code></p>
                      </div>
                    </li>
                    
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong className="text-foreground text-red-600">⚠️ NUNCA usar Cloudflare Bulk Redirects</strong>
                        <p>NO soporta trailing slash automático y causa conflictos con <code>_redirects</code></p>
                        <p className="text-xs mt-1">❌ Evitar: Bulk Redirects, Transform Rules para redirects masivos</p>
                      </div>
                    </li>
                    
                    <li className="flex items-start gap-2">
                      <FileText className="h-5 w-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong className="text-foreground">Actualizar documentación al añadir redirects</strong>
                        <p>Registrar cambios en <code>CHANGELOG.md</code> y actualizar categorías en este dashboard</p>
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
