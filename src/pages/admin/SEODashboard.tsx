import React, { useMemo, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEONavigation from '@/components/seo-dashboard/SEONavigation';
import { AdminBreadcrumbs } from '@/components/admin/AdminBreadcrumbs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { 
  FileText, Globe, ArrowRight, Map, Zap, BarChart3, 
  CheckCircle, AlertTriangle, Bot, BookOpen, ExternalLink,
  Search, MessageSquare, FileCode, Database, Sparkles,
  TrendingUp, Target, Layers, Activity
} from 'lucide-react';
import { getIndexableUrls } from '@/utils/sitemap';
import { GSCQuickMetrics } from '@/components/admin/seo/GSCQuickMetrics';

const SEODashboard: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  
  const stats = useMemo(() => {
    const allUrls = getIndexableUrls();
    return {
      totalUrls: allUrls.length,
      esUrls: allUrls.filter(u => u.startsWith('/es')).length,
      enUrls: allUrls.filter(u => u.startsWith('/en')).length,
    };
  }, []);

  // Sistema SEO implementado
  const seoSystems = {
    classic: {
      title: 'SEO Clásico',
      icon: Search,
      status: 'active',
      description: 'Optimización para motores de búsqueda tradicionales (Google, Bing)',
      features: [
        { name: 'Meta tags dinámicos', status: 'active', path: '/admin/seo/pages' },
        { name: 'JSON-LD Schema markup', status: 'active', path: '/admin/seo/pages' },
        { name: 'Sitemaps bilingües', status: 'active', path: '/admin/seo/sitemap' },
        { name: 'Robots.txt optimizado', status: 'active', path: '/admin/seo/robots' },
        { name: 'Canonical URLs', status: 'active', path: '/admin/seo/pages' },
        { name: 'Hreflang tags', status: 'active', path: '/admin/seo/sitemap' },
        { name: 'Google Search Console', status: 'active', path: '/admin/seo/gsc' },
        { name: 'IndexNow Protocol', status: 'active', path: '/admin/seo/indexnow' },
      ]
    },
    geo: {
      title: 'GEO (Generative Engine Optimization)',
      icon: Bot,
      status: 'active',
      description: 'Optimización para motores de IA generativa (ChatGPT, Perplexity, Gemini)',
      features: [
        { name: 'llms.txt y llms-full.txt', status: 'active', detail: 'Ficheros de contexto para crawlers IA' },
        { name: 'Ficheros .md en /content/', status: 'active', detail: '35+ ficheros con IA_SUMMARY' },
        { name: 'IA_SUMMARY blocks', status: 'active', detail: '60-80 palabras por fichero' },
        { name: 'E-E-A-T compliance', status: 'active', detail: 'Autor, fecha, fuentes citables' },
        { name: 'SpeakableSpecification', status: 'active', detail: 'Blog posts optimizados para voz' },
        { name: 'Wikidata entities', status: 'active', detail: 'Vinculación semántica en blog' },
      ]
    },
    aeo: {
      title: 'AEO (Answer Engine Optimization)',
      icon: MessageSquare,
      status: 'active',
      description: 'Optimización para featured snippets y respuestas directas',
      features: [
        { name: 'FAQ Schema markup', status: 'active', path: '/admin/faq-validator' },
        { name: 'Resúmenes citables', status: 'active', detail: 'Blockquotes AEO en .md' },
        { name: 'Preguntas frecuentes', status: 'active', detail: 'FAQs estructuradas por servicio' },
        { name: 'SofÍA context injection', status: 'active', detail: 'Edge function con conocimiento dinámico' },
      ]
    }
  };

  // Herramientas del panel
  const tools = [
    { 
      title: 'Search Console', 
      description: 'Métricas de GSC: clicks, impresiones, CTR', 
      icon: BarChart3, 
      path: '/admin/seo/gsc',
      status: 'active'
    },
    { 
      title: 'Editor de Páginas', 
      description: 'Gestión de metadatos y schemas', 
      icon: FileText, 
      path: '/admin/seo/pages',
      status: 'active'
    },
    { 
      title: 'Sitemap Manager', 
      description: 'Índice bilingüe con hreflang', 
      icon: Map, 
      path: '/admin/seo/sitemap',
      status: 'active'
    },
    { 
      title: 'Robots.txt', 
      description: 'Configuración de crawlers', 
      icon: Globe, 
      path: '/admin/seo/robots',
      status: 'deprecated',
      note: 'Archivo estático en /public'
    },
    { 
      title: 'Redirecciones', 
      description: 'Gestión de redirects', 
      icon: ArrowRight, 
      path: '/admin/seo/redirects',
      status: 'deprecated',
      note: 'Usar React Router + _redirects'
    },
    { 
      title: 'IndexNow', 
      description: 'Notificación inmediata a buscadores', 
      icon: Zap, 
      path: '/admin/seo/indexnow',
      status: 'active'
    },
  ];

  // Contenido GEO/AEO implementado
  const contentStats = {
    services: { es: 10, en: 10 },
    solutions: { es: 3, en: 3 },
    caseStudies: { es: 15, en: 0 },
    general: { es: 1, en: 1 },
  };

  const totalContent = Object.values(contentStats).reduce(
    (acc, curr) => ({ es: acc.es + curr.es, en: acc.en + curr.en }), 
    { es: 0, en: 0 }
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <SEONavigation />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto space-y-8">
          <AdminBreadcrumbs currentPage="SEO Control Center" />
          
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-4xl font-bold mb-2">SEO Control Center</h1>
              <p className="text-muted-foreground">
                Sistema integral: SEO Clásico + GEO (IA) + AEO (Respuestas)
              </p>
            </div>
            <div className="flex gap-2">
              <Badge variant="default" className="px-3 py-1">
                <CheckCircle className="h-3 w-3 mr-1" />
                3 sistemas activos
              </Badge>
            </div>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="overview">Vista General</TabsTrigger>
              <TabsTrigger value="documentation">Documentación</TabsTrigger>
              <TabsTrigger value="tools">Herramientas</TabsTrigger>
            </TabsList>

            {/* VISTA GENERAL */}
            <TabsContent value="overview" className="space-y-6">
              {/* Métricas rápidas */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">URLs Indexables</p>
                        <p className="text-3xl font-bold">{stats.totalUrls}</p>
                      </div>
                      <Map className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <div className="flex gap-2 mt-2 text-xs text-muted-foreground">
                      <span>ES: {stats.esUrls}</span>
                      <span>|</span>
                      <span>EN: {stats.enUrls}</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">Ficheros .md (GEO)</p>
                        <p className="text-3xl font-bold">{totalContent.es + totalContent.en}</p>
                      </div>
                      <FileCode className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <div className="flex gap-2 mt-2 text-xs text-muted-foreground">
                      <span>ES: {totalContent.es}</span>
                      <span>|</span>
                      <span>EN: {totalContent.en}</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">Servicios</p>
                        <p className="text-3xl font-bold">{contentStats.services.es}</p>
                      </div>
                      <Layers className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      100% documentados ES/EN
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">Casos de Éxito</p>
                        <p className="text-3xl font-bold">{contentStats.caseStudies.es}</p>
                      </div>
                      <Target className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      100% documentados ES
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Widget de métricas GSC en tiempo real */}
              <GSCQuickMetrics />

              {/* Estado de los 3 sistemas */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {Object.entries(seoSystems).map(([key, system]) => {
                  const Icon = system.icon;
                  return (
                    <Card key={key} className="border-2">
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="p-2 rounded-lg bg-primary/10">
                              <Icon className="h-5 w-5 text-primary" />
                            </div>
                            <CardTitle className="text-lg">{system.title}</CardTitle>
                          </div>
                          <Badge variant="default">
                            <CheckCircle className="h-3 w-3 mr-1" />
                            Activo
                          </Badge>
                        </div>
                        <CardDescription>{system.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-1">
                          {system.features.slice(0, 4).map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm">
                              <CheckCircle className="h-3 w-3 text-primary" />
                              <span>{feature.name}</span>
                            </li>
                          ))}
                          {system.features.length > 4 && (
                            <li className="text-xs text-muted-foreground pl-5">
                              +{system.features.length - 4} más...
                            </li>
                          )}
                        </ul>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Accesos rápidos */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="h-5 w-5" />
                    Acciones Rápidas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <Button variant="outline" onClick={() => navigate('/admin/seo/gsc')} className="justify-start">
                      <BarChart3 className="h-4 w-4 mr-2" />
                      Ver GSC
                    </Button>
                    <Button variant="outline" onClick={() => navigate('/admin/seo/pages')} className="justify-start">
                      <FileText className="h-4 w-4 mr-2" />
                      Editar Páginas
                    </Button>
                    <Button variant="outline" onClick={() => navigate('/admin/seo/indexnow')} className="justify-start">
                      <Zap className="h-4 w-4 mr-2" />
                      IndexNow
                    </Button>
                    <Button variant="outline" onClick={() => navigate('/admin/content-hub')} className="justify-start">
                      <Database className="h-4 w-4 mr-2" />
                      Content Hub
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* DOCUMENTACIÓN */}
            <TabsContent value="documentation" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5" />
                    Sistema SEO Integral - Documentación Técnica
                  </CardTitle>
                  <CardDescription>
                    Resumen completo de la infraestructura SEO, GEO y AEO implementada
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <Accordion type="multiple" className="w-full">
                    {/* SEO CLÁSICO */}
                    <AccordionItem value="seo-clasico">
                      <AccordionTrigger>
                        <div className="flex items-center gap-2">
                          <Search className="h-4 w-4" />
                          <span className="font-semibold">1. SEO Clásico (Google, Bing)</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="space-y-4 text-sm">
                        <div className="grid gap-4">
                          <div className="border rounded-lg p-4">
                            <h4 className="font-semibold mb-2">📄 Meta Tags Dinámicos</h4>
                            <p className="text-muted-foreground mb-2">
                              Sistema centralizado en <code className="bg-muted px-1 rounded">seo_pages</code> (DB) + 
                              componente <code className="bg-muted px-1 rounded">Seo.tsx</code>
                            </p>
                            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                              <li>Title, description, og:image dinámicos por página</li>
                              <li>Fallback a <code>autoSEO()</code> si no hay datos en DB</li>
                              <li>Soporte multiidioma (ES/EN)</li>
                            </ul>
                          </div>

                          <div className="border rounded-lg p-4">
                            <h4 className="font-semibold mb-2">🔗 JSON-LD Schema Markup</h4>
                            <p className="text-muted-foreground mb-2">
                              Schemas estructurados por tipo de página:
                            </p>
                            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                              <li><strong>Organization</strong>: Home y páginas corporativas</li>
                              <li><strong>Service</strong>: Páginas de servicios</li>
                              <li><strong>Article + Person</strong>: Blog posts con autor</li>
                              <li><strong>FAQPage</strong>: Secciones de preguntas frecuentes</li>
                              <li><strong>ProfilePage</strong>: Perfil de autor (/es/autor/ruben-reyero)</li>
                            </ul>
                          </div>

                          <div className="border rounded-lg p-4">
                            <h4 className="font-semibold mb-2">🗺️ Sitemaps Bilingües</h4>
                            <p className="text-muted-foreground mb-2">
                              Estructura: <code className="bg-muted px-1 rounded">sitemap.xml</code> (índice) → 
                              <code className="bg-muted px-1 rounded">sitemap-es.xml</code> + 
                              <code className="bg-muted px-1 rounded">sitemap-en.xml</code>
                            </p>
                            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                              <li>Hreflang cruzados entre versiones ES↔EN</li>
                              <li>200+ URLs indexables</li>
                              <li>Generación dinámica desde <code>routeRegistryData.ts</code></li>
                            </ul>
                          </div>

                          <div className="border rounded-lg p-4">
                            <h4 className="font-semibold mb-2">📊 Google Search Console</h4>
                            <p className="text-muted-foreground mb-2">
                              Integración activa via Edge Function <code className="bg-muted px-1 rounded">gsc-data</code>
                            </p>
                            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                              <li>Métricas: clicks, impresiones, CTR, posición</li>
                              <li>Top páginas y keywords</li>
                              <li>Acceso: <Link to="/admin/seo/gsc" className="text-primary underline">/admin/seo/gsc</Link></li>
                            </ul>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    {/* GEO */}
                    <AccordionItem value="geo">
                      <AccordionTrigger>
                        <div className="flex items-center gap-2">
                          <Bot className="h-4 w-4" />
                          <span className="font-semibold">2. GEO - Generative Engine Optimization</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="space-y-4 text-sm">
                        <div className="grid gap-4">
                          <div className="border rounded-lg p-4">
                            <h4 className="font-semibold mb-2">📁 Ficheros .md para Crawlers IA</h4>
                            <p className="text-muted-foreground mb-2">
                              Ubicación: <code className="bg-muted px-1 rounded">/public/content/</code>
                            </p>
                            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                              <li><strong>Servicios ES</strong>: 10 ficheros en <code>/content/es/servicios/</code></li>
                              <li><strong>Servicios EN</strong>: 10 ficheros en <code>/content/en/services/</code></li>
                              <li><strong>Soluciones</strong>: 3 ES + 3 EN</li>
                              <li><strong>Casos de Éxito</strong>: 15 ficheros en <code>/content/es/casos-exito/</code></li>
                              <li><strong>General</strong>: empresa.md (ES) + company.md (EN)</li>
                            </ul>
                          </div>

                          <div className="border rounded-lg p-4">
                            <h4 className="font-semibold mb-2">🤖 IA_SUMMARY Block</h4>
                            <p className="text-muted-foreground mb-2">
                              Bloque oculto en cada .md (60-80 palabras) para procesamiento eficiente:
                            </p>
                            <pre className="bg-muted p-3 rounded text-xs overflow-x-auto">
{`<!--
IA_SUMMARY:
[Qué es]: Descripción del servicio
[Para quién]: Público objetivo
[Qué incluye]: Elementos principales
[Resultado]: Beneficio esperado
-->`}
                            </pre>
                          </div>

                          <div className="border rounded-lg p-4">
                            <h4 className="font-semibold mb-2">📋 llms.txt y llms-full.txt</h4>
                            <p className="text-muted-foreground mb-2">
                              Ficheros de contexto para crawlers IA (ChatGPT, Perplexity, Claude):
                            </p>
                            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                              <li><code className="bg-muted px-1 rounded">/llms.txt</code>: 568 líneas - Contexto completo de la agencia</li>
                              <li><code className="bg-muted px-1 rounded">/llms-full.txt</code>: Versión extendida con blog posts</li>
                              <li>Referenciados en <code>robots.txt</code></li>
                            </ul>
                          </div>

                          <div className="border rounded-lg p-4">
                            <h4 className="font-semibold mb-2">🔊 SpeakableSpecification</h4>
                            <p className="text-muted-foreground mb-2">
                              Optimización para búsqueda por voz en blog posts:
                            </p>
                            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                              <li>Selector <code>.article-lead</code> para primer párrafo</li>
                              <li>Título H1 y primera FAQ incluidos</li>
                              <li>Compatible con Siri, Alexa, Google Assistant</li>
                            </ul>
                          </div>

                          <div className="border rounded-lg p-4">
                            <h4 className="font-semibold mb-2">🌐 Wikidata Entities</h4>
                            <p className="text-muted-foreground mb-2">
                              Vinculación semántica en <code className="bg-muted px-1 rounded">wikidataEntities.ts</code>:
                            </p>
                            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                              <li>Conceptos técnicos vinculados a URLs de Wikidata</li>
                              <li>Mejora la comprensión de entidades por IA</li>
                              <li>Ej: HubSpot → Q7894234</li>
                            </ul>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    {/* AEO */}
                    <AccordionItem value="aeo">
                      <AccordionTrigger>
                        <div className="flex items-center gap-2">
                          <MessageSquare className="h-4 w-4" />
                          <span className="font-semibold">3. AEO - Answer Engine Optimization</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="space-y-4 text-sm">
                        <div className="grid gap-4">
                          <div className="border rounded-lg p-4">
                            <h4 className="font-semibold mb-2">❓ FAQ Schema Markup</h4>
                            <p className="text-muted-foreground mb-2">
                              Implementado en páginas de servicios y soluciones:
                            </p>
                            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                              <li>Schema FAQPage válido para Rich Results</li>
                              <li>Validador: <Link to="/admin/faq-validator" className="text-primary underline">/admin/faq-validator</Link></li>
                              <li>FAQs estructuradas en ficheros .md</li>
                            </ul>
                          </div>

                          <div className="border rounded-lg p-4">
                            <h4 className="font-semibold mb-2">💬 SofÍA Context Injection</h4>
                            <p className="text-muted-foreground mb-2">
                              Edge Function <code className="bg-muted px-1 rounded">sofia-chat</code>:
                            </p>
                            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                              <li>Inyección dinámica de contexto desde ficheros .md</li>
                              <li>Extracción de IA_SUMMARY, Casos de Éxito, FAQs</li>
                              <li>Respuestas citables con datos reales</li>
                              <li>Optimización de tokens en conversaciones largas</li>
                            </ul>
                          </div>

                          <div className="border rounded-lg p-4">
                            <h4 className="font-semibold mb-2">📝 Resúmenes AEO Citables</h4>
                            <p className="text-muted-foreground mb-2">
                              Cada fichero .md incluye un blockquote citable:
                            </p>
                            <pre className="bg-muted p-3 rounded text-xs overflow-x-auto">
{`> Hayas Marketing crea identidades de marca 
> que conectan con tu audiencia y te 
> diferencian de la competencia.`}
                            </pre>
                            <p className="text-muted-foreground mt-2">
                              Facilita la extracción de respuestas por motores de IA.
                            </p>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    {/* E-E-A-T */}
                    <AccordionItem value="eeat">
                      <AccordionTrigger>
                        <div className="flex items-center gap-2">
                          <Sparkles className="h-4 w-4" />
                          <span className="font-semibold">4. E-E-A-T Compliance</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="space-y-4 text-sm">
                        <div className="grid gap-4">
                          <div className="border rounded-lg p-4">
                            <h4 className="font-semibold mb-2">👤 Perfil de Autor</h4>
                            <p className="text-muted-foreground mb-2">
                              Página dedicada: <code className="bg-muted px-1 rounded">/es/autor/ruben-reyero</code>
                            </p>
                            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                              <li>Schema ProfilePage + Person</li>
                              <li>Vinculación con artículos del blog</li>
                              <li>Credenciales y experiencia documentadas</li>
                            </ul>
                          </div>

                          <div className="border rounded-lg p-4">
                            <h4 className="font-semibold mb-2">📰 Política de Autoría</h4>
                            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                              <li><strong>Rubén Reyero</strong> (Person): Artículos de estrategia, visión, tendencias IA</li>
                              <li><strong>Hayas Marketing</strong> (Organization): Guías técnicas, contenido institucional</li>
                            </ul>
                          </div>

                          <div className="border rounded-lg p-4">
                            <h4 className="font-semibold mb-2">📋 Metadatos E-E-A-T en .md</h4>
                            <pre className="bg-muted p-3 rounded text-xs overflow-x-auto">
{`## Metadatos
- **Tipo de contenido**: Servicio
- **Nivel de intención**: Evaluación
- **URL canónica**: https://hayasmarketing.com/...
- **Última actualización**: 2026-02-06
- **Versión**: 1.0
- **Idioma**: Español`}
                            </pre>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    {/* ARQUITECTURA TÉCNICA */}
                    <AccordionItem value="architecture">
                      <AccordionTrigger>
                        <div className="flex items-center gap-2">
                          <Layers className="h-4 w-4" />
                          <span className="font-semibold">5. Arquitectura Técnica</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="space-y-4 text-sm">
                        <div className="grid gap-4">
                          <div className="border rounded-lg p-4">
                            <h4 className="font-semibold mb-2">📂 Estructura de Ficheros</h4>
                            <pre className="bg-muted p-3 rounded text-xs overflow-x-auto">
{`/public/
├── content/
│   ├── es/
│   │   ├── servicios/ (10 ficheros)
│   │   ├── soluciones/ (3 ficheros)
│   │   ├── casos-exito/ (15 ficheros)
│   │   └── general/ (1 fichero)
│   └── en/
│       ├── services/ (10 ficheros)
│       ├── solutions/ (3 ficheros)
│       └── general/ (1 fichero)
├── llms.txt
├── llms-full.txt
├── robots.txt
├── sitemap.xml (índice)
├── sitemap-es.xml
└── sitemap-en.xml

/docs/
└── CONTENT_SYNC.md (mapping React ↔ .md)`}
                            </pre>
                          </div>

                          <div className="border rounded-lg p-4">
                            <h4 className="font-semibold mb-2">🔄 Flujo de Datos</h4>
                            <ol className="list-decimal list-inside space-y-1 text-muted-foreground">
                              <li>Usuario navega a página (ej: /es/servicios/creacion-marca)</li>
                              <li>React renderiza componente con SEO de DB</li>
                              <li>SofÍA detecta ruta y carga .md correspondiente</li>
                              <li>Edge Function extrae IA_SUMMARY + Casos + FAQs</li>
                              <li>Prompt enriquecido genera respuesta contextual</li>
                            </ol>
                          </div>

                          <div className="border rounded-lg p-4">
                            <h4 className="font-semibold mb-2">📄 Mapping docs/CONTENT_SYNC.md</h4>
                            <p className="text-muted-foreground">
                              Documento que vincula cada componente React con su fichero .md 
                              correspondiente en ES y EN. Incluye checklist de sincronización.
                            </p>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </TabsContent>

            {/* HERRAMIENTAS */}
            <TabsContent value="tools" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {tools.map((tool) => {
                  const Icon = tool.icon;
                  const isDeprecated = tool.status === 'deprecated';
                  
                  return (
                    <Card 
                      key={tool.path} 
                      className={`cursor-pointer transition-all hover:shadow-md ${isDeprecated ? 'opacity-60' : ''}`}
                      onClick={() => !isDeprecated && navigate(tool.path)}
                    >
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className={`p-2 rounded-lg ${isDeprecated ? 'bg-muted' : 'bg-primary/10'}`}>
                              <Icon className={`h-5 w-5 ${isDeprecated ? 'text-muted-foreground' : 'text-primary'}`} />
                            </div>
                            <CardTitle className="text-lg">{tool.title}</CardTitle>
                          </div>
                          {isDeprecated ? (
                            <Badge variant="secondary">
                              <AlertTriangle className="h-3 w-3 mr-1" />
                              Legacy
                            </Badge>
                          ) : (
                            <ExternalLink className="h-4 w-4 text-muted-foreground" />
                          )}
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">{tool.description}</p>
                        {tool.note && (
                          <p className="text-xs text-muted-foreground mt-2 italic">{tool.note}</p>
                        )}
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Herramientas adicionales */}
              <Card>
                <CardHeader>
                  <CardTitle>Herramientas Relacionadas</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <Button variant="outline" onClick={() => navigate('/admin/faq-validator')} className="justify-start h-auto py-3">
                      <div className="flex flex-col items-start">
                        <span className="font-medium">FAQ Validator</span>
                        <span className="text-xs text-muted-foreground">Validar schemas FAQ</span>
                      </div>
                    </Button>
                    <Button variant="outline" onClick={() => navigate('/admin/content-hub')} className="justify-start h-auto py-3">
                      <div className="flex flex-col items-start">
                        <span className="font-medium">Content Hub</span>
                        <span className="text-xs text-muted-foreground">Keywords y contenidos</span>
                      </div>
                    </Button>
                    <Button variant="outline" onClick={() => navigate('/admin/sofia')} className="justify-start h-auto py-3">
                      <div className="flex flex-col items-start">
                        <span className="font-medium">SofÍA Admin</span>
                        <span className="text-xs text-muted-foreground">Configurar chatbot</span>
                      </div>
                    </Button>
                    <Button variant="outline" asChild className="justify-start h-auto py-3">
                      <a href="/llms.txt" target="_blank" rel="noopener noreferrer">
                        <div className="flex flex-col items-start">
                          <span className="font-medium">llms.txt</span>
                          <span className="text-xs text-muted-foreground">Ver fichero IA</span>
                        </div>
                      </a>
                    </Button>
                  </div>
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

export default SEODashboard;
