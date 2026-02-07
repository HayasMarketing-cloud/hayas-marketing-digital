import React from 'react';
import BlogPostTemplate from '@/components/BlogPost/BlogPostTemplate';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useLocalizedRoutes } from '@/hooks/useLocalizedRoutes';
import { 
  Search, 
  MessageSquare, 
  Brain,
  Globe,
  Building2,
  MessageCircle,
  CheckCircle,
  Target,
  TrendingUp,
  ArrowRight,
  Eye,
  Database,
  FileText,
  Shield,
  Users,
  Zap,
  Bot
} from 'lucide-react';

const BlogNuevoParadigmaSeoAeoGeo = () => {
  const { getRoute } = useLocalizedRoutes();
  
  const metadata = {
    title: 'El Nuevo Paradigma SEO en la Era de la IA (AEO y GEO)',
    metaTitle: 'Nuevo Paradigma SEO: AEO y GEO para Google, Bing y ChatGPT | Hayas Marketing',
    description: 'Descubre las estrategias AEO (Answer Engine Optimization) y GEO (Generative Engine Optimization) para posicionar tu marca en Google, Bing Copilot y ChatGPT.',
    metaDescription: 'El SEO ha evolucionado de optimizar para el clic a ser la fuente citada por las IA. Aprende AEO y GEO para Google SGE, Bing Copilot y ChatGPT.',
    date: '2026-02-07',
    readTime: '14 min',
    category: 'SEO',
    author: 'Rubén Reyero',
    tags: ['SEO', 'AEO', 'GEO', 'IA', 'ChatGPT', 'Google SGE', 'Bing Copilot', 'Marketing Digital'],
    canonical: '/es/blog/nuevo-paradigma-seo-aeo-geo',
    ogImage: '/seo-aeo-geo-paradigma-hero.jpg',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "El Nuevo Paradigma SEO en la Era de la IA (AEO y GEO)",
      "author": {
        "@type": "Person",
        "name": "Rubén Reyero",
        "url": "https://hayasmarketing.com/es/autor/ruben-reyero"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Hayas Marketing",
        "@id": "https://hayasmarketing.com/#organization",
        "logo": {
          "@type": "ImageObject",
          "url": "https://hayasmarketing.com/lovable-uploads/hayas-logo.webp",
          "width": 300,
          "height": 100
        }
      },
      "datePublished": "2026-02-07T00:00:00+01:00",
      "dateModified": "2026-02-07T00:00:00+01:00",
      "image": "/seo-aeo-geo-paradigma-hero.jpg",
      "mainEntityOfPage": "https://hayasmarketing.com/es/blog/nuevo-paradigma-seo-aeo-geo"
    },
    mainKeyword: 'nuevo paradigma SEO IA',
    secondaryKeywords: ['AEO', 'GEO', 'Answer Engine Optimization', 'Generative Engine Optimization', 'SEO para IA', 'Google SGE', 'Bing Copilot']
  };

  const faqs = [
    {
      question: "¿Qué es AEO (Answer Engine Optimization)?",
      answer: "AEO optimiza contenido para que sea fácilmente recuperable e interpretable por asistentes de IA que responden preguntas. El foco pasa de la captación a la claridad y la acción."
    },
    {
      question: "¿Qué es GEO (Generative Engine Optimization)?",
      answer: "GEO busca que tu marca sea descubierta y recomendada dentro de sistemas de IA generativa como ChatGPT, Copilot o Perplexity, construyendo credibilidad y confianza."
    },
    {
      question: "¿En qué se diferencia GEO de AEO?",
      answer: "AEO optimiza para que tu contenido sea la respuesta directa a preguntas específicas (featured snippets, respuestas de voz). GEO va más allá: busca que las IA generativas te citen como fuente confiable y te recomienden proactivamente, incluso sin una pregunta directa del usuario."
    },
    {
      question: "¿Google y Bing siguen siendo importantes con la IA?",
      answer: "Sí. Google SGE y Bing Copilot refuerzan la importancia de E-E-A-T, contenido estructurado y claridad. Los fundamentos SEO son la base sobre la que se construye la visibilidad en IA."
    },
    {
      question: "¿Cómo puedo aparecer en las respuestas de ChatGPT?",
      answer: "Permitiendo el acceso de GPTBot, creando contenido profundo y bien estructurado, y asegurando presencia en listicles y guías de terceros que las IA usan como fuentes."
    },
    {
      question: "¿Qué son los tres canales de datos de Microsoft?",
      answer: "Son: datos rastreados (web indexado), datos de feeds (catálogos, precios) y datos en vivo (reseñas, experiencia on-site). Optimizar los tres es clave para Bing Copilot."
    }
  ];

  const relatedServices = [
    {
      title: "SEO, AEO y GEO",
      description: "Posicionamiento integral para buscadores tradicionales y asistentes de IA generativa.",
      link: "/es/servicios/seo-positioning"
    },
    {
      title: "Estrategia de Contenidos",
      description: "Contenido optimizado para humanos y máquinas, con estructura AEO-ready.",
      link: "/es/servicios/estrategia-contenidos"
    }
  ];

  return (
    <BlogPostTemplate 
      metadata={metadata}
      faqs={faqs}
      relatedServices={relatedServices}
    >
      <div className="space-y-12">
        {/* Introducción */}
        <section>
          <p className="text-lg text-elegant">
            La forma en que los usuarios encuentran información en internet está cambiando radicalmente, y con ello, las reglas del juego del SEO. La búsqueda ha evolucionado de un modelo centrado en clics a uno dominado por las <strong>respuestas generativas y los Agentes de IA</strong>.
          </p>
          
          <p className="text-elegant mt-4">
            El enfoque ya no es solo aparecer en la posición #1 de los resultados orgánicos tradicionales, sino <strong>ser la fuente elegida y citada por los motores de inteligencia artificial</strong>. Este cambio define el nuevo paradigma, basado en dos conceptos clave: la <strong>AEO (Answer/Agentic Engine Optimization)</strong> y la <strong>GEO (Generative Engine Optimization)</strong>.
          </p>

          <Card className="my-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <TrendingUp className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-xl font-semibold mb-2">El objetivo ya no es el clic.</p>
                  <p className="text-elegant text-lg">Es ser la fuente de confianza que las IA recomiendan.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator />

        {/* Definiciones AEO y GEO */}
        <section>
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Target className="h-8 w-8 text-primary" />
            AEO y GEO: La nueva métrica de la visibilidad
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100/50 dark:from-blue-900/20 dark:to-blue-800/10 border-blue-200 dark:border-blue-700">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <MessageSquare className="h-8 w-8 text-blue-600" />
                  <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100">AEO</h3>
                </div>
                <p className="text-sm font-medium text-blue-700 dark:text-blue-300 mb-3">Answer/Agentic Engine Optimization</p>
                <p className="text-elegant">
                  Se centra en hacer que tu contenido y tus datos sean <strong>fácilmente recuperables e interpretables</strong> por asistentes de IA que responden preguntas y realizan acciones.
                </p>
                <Badge className="mt-4" variant="secondary">Foco: Claridad y Acción</Badge>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-50 to-purple-100/50 dark:from-purple-900/20 dark:to-purple-800/10 border-purple-200 dark:border-purple-700">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Brain className="h-8 w-8 text-purple-600" />
                  <h3 className="text-xl font-bold text-purple-900 dark:text-purple-100">GEO</h3>
                </div>
                <p className="text-sm font-medium text-purple-700 dark:text-purple-300 mb-3">Generative Engine Optimization</p>
                <p className="text-elegant">
                  Busca que tu marca sea <strong>descubierta y convincente</strong> dentro de sistemas de IA generativa, construyendo credibilidad y confianza para que la IA recomiende tus productos o servicios.
                </p>
                <Badge className="mt-4" variant="secondary">Foco: Influencia</Badge>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator />

        {/* Google SGE */}
        <section>
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Globe className="h-8 w-8 text-primary" />
            1. Google (SGE): E-E-A-T Reforzado y Claridad Estructural
          </h2>
          
          <p className="text-elegant mb-6">
            Google, con su <strong>Search Generative Experience (SGE)</strong>, insiste en que "los fundamentos siguen importando", pero la forma en que presenta la información cambia el foco.
          </p>

          <Card className="bg-muted/50">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Recomendaciones Clave para Google SGE</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-elegant">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>E-E-A-T Visible:</strong> La confianza es lo más importante. Muestra autores identificables con credenciales, cita fuentes primarias, y garantiza transparencia sobre tu sitio ("Sobre nosotros").
                  </div>
                </li>
                <li className="flex items-start gap-3 text-elegant">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Estructura y formato legible:</strong> La IA favorece los párrafos cortos, bullets, y bloques de pregunta-respuesta fáciles de extraer. Adopta un enfoque de "pirámide invertida": respuesta directa y concisa primero, detalles después.
                  </div>
                </li>
                <li className="flex items-start gap-3 text-elegant">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Contenido neutral y profundo:</strong> Evita el texto de relleno y el lenguaje promocional. Google AI prefiere hechos claros, neutrales y objetivos. Incluye secciones de FAQ, listas y tablas para que la IA tome "fragmentos digeribles" como citas.
                  </div>
                </li>
                <li className="flex items-start gap-3 text-elegant">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Schema.org:</strong> Utiliza el marcado estructurado (Article, FAQPage, HowTo) para mejorar la claridad y legibilidad para máquinas, facilitando que la IA interprete correctamente tu contenido como fuente confiable.
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <Separator />

        {/* Bing/Microsoft Copilot */}
        <section>
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Building2 className="h-8 w-8 text-primary" />
            2. Bing/Microsoft (Copilot): Los Tres Canales de Datos
          </h2>
          
          <p className="text-elegant mb-6">
            La guía oficial de Microsoft, <em>"From Discovery to Influence: A Guide to AEO and GEO"</em>, subraya la importancia de la confianza y la integridad de los datos para sus asistentes como Copilot.
          </p>

          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <Card className="bg-gradient-to-br from-cyan-50 to-cyan-100/50 dark:from-cyan-900/20 dark:to-cyan-800/10 border-cyan-200 dark:border-cyan-700">
              <CardContent className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Search className="h-6 w-6 text-cyan-600" />
                  <span className="font-bold text-cyan-800 dark:text-cyan-200">Canal 1</span>
                </div>
                <h4 className="font-semibold mb-2">Datos Rastreados</h4>
                <p className="text-sm text-elegant">Contenido web indexado por los crawlers de Bing.</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-orange-50 to-orange-100/50 dark:from-orange-900/20 dark:to-orange-800/10 border-orange-200 dark:border-orange-700">
              <CardContent className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Database className="h-6 w-6 text-orange-600" />
                  <span className="font-bold text-orange-800 dark:text-orange-200">Canal 2</span>
                </div>
                <h4 className="font-semibold mb-2">Datos de Feeds</h4>
                <p className="text-sm text-elegant">Catálogos, precios y stock proporcionados directamente a la plataforma.</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-50 to-green-100/50 dark:from-green-900/20 dark:to-green-800/10 border-green-200 dark:border-green-700">
              <CardContent className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Eye className="h-6 w-6 text-green-600" />
                  <span className="font-bold text-green-800 dark:text-green-200">Canal 3</span>
                </div>
                <h4 className="font-semibold mb-2">Datos en Vivo</h4>
                <p className="text-sm text-elegant">Reseñas, experiencia de usuario y comportamiento on-site.</p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-muted/50">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Estrategia AEO/GEO de Microsoft</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-elegant">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Datos Estructurados Impecables:</strong> Utiliza schema.org de forma exhaustiva (Producto, Oferta, Organización) e incorpora campos dinámicos (precio, stock). La precisión y consistencia de estos datos es vital: los productos con más campos rellenados rankean más alto.
                  </div>
                </li>
                <li className="flex items-start gap-3 text-elegant">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Señales de Autoridad y Confianza:</strong> Las IA priorizan fuentes en las que pueden confiar. Refuerza tu credibilidad con reseñas de usuarios verificadas, menciones en prensa, certificaciones y premios.
                  </div>
                </li>
                <li className="flex items-start gap-3 text-elegant">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Preparación para Agentes (Agentic Commerce):</strong> La IA no solo lee tu sitio, actúa en él. Un Copilot podría intentar un proceso de compra. Cuida la experiencia on-site (Web Vitals, checkout, enlaces rotos) para no perder ventas asistidas por IA.
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <Separator />

        {/* ChatGPT/OpenAI */}
        <section>
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <MessageCircle className="h-8 w-8 text-primary" />
            3. ChatGPT/OpenAI: El Blog Corporativo como Fuente de Entrenamiento
          </h2>
          
          <p className="text-elegant mb-6">
            OpenAI no es un buscador tradicional, pero su modelo influye en miles de millones de consultas. La visibilidad aquí se logra en dos fases: el <strong>entrenamiento del modelo</strong> y la <strong>búsqueda en tiempo real</strong>.
          </p>

          <Card className="bg-muted/50">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Claves para la Visibilidad en ChatGPT/OpenAI</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-elegant">
                  <Bot className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Permitir el Acceso de GPTBot:</strong> Para que tu contenido forme parte del conocimiento del modelo (pre-entrenamiento), es fundamental no bloquear el crawler GPTBot de OpenAI en tu robots.txt.
                  </div>
                </li>
                <li className="flex items-start gap-3 text-elegant">
                  <FileText className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Contenido Profundo y de Formato Amigable:</strong> La evidencia indica que el blog corporativo es la fuente primaria que las IA citan en entornos B2B. Documentación técnica, whitepapers y fichas de producto ricas en información se convierten en "data points" que el modelo absorbe.
                  </div>
                </li>
                <li className="flex items-start gap-3 text-elegant">
                  <Users className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>El Poder del Digital PR:</strong> Para preguntas genéricas (ej. "mejores soluciones CRM"), más del 75% de las citas provienen de listicles o guías de "Top 10" creadas por terceros. Asegurar tu inclusión en listados influyentes es crítico.
                  </div>
                </li>
                <li className="flex items-start gap-3 text-elegant">
                  <Shield className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Reforzar la Confiabilidad:</strong> ChatGPT tiende a citar a fuentes de alta autoridad (Wikipedia, grandes medios). Un contenido neutral, bien documentado y con autorías visibles tiene más opciones de ser extraído, ya que el modelo prioriza evitar alucinaciones.
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <Separator />

        {/* Oportunidad Estratégica */}
        <section>
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Zap className="h-8 w-8 text-primary" />
            Una Oportunidad Estratégica
          </h2>
          
          <p className="text-elegant mb-6">
            El nuevo paradigma SEO es un cambio de mentalidad: de perseguir el clic a <strong>demostrar la autoridad y la utilidad de nuestros datos y contenidos</strong>.
          </p>

          <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20 mb-8">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Nuestro foco estratégico es:</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Badge variant="default" className="mt-1">1</Badge>
                  <div>
                    <h4 className="font-semibold mb-1">Auditar la "AEO-Readiness"</h4>
                    <p className="text-elegant">Asegurar que la estructura técnica (Schema.org) y la organización del contenido sean óptimas para la extracción de respuestas directas por las IA.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Badge variant="default" className="mt-1">2</Badge>
                  <div>
                    <h4 className="font-semibold mb-1">Producir Contenido de "Confianza Intransferible"</h4>
                    <p className="text-elegant">Publicar análisis, datos originales y perspectivas de primera mano (E-E-A-T) que demuestren un nivel de experiencia que las IA no pueden sintetizar.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Badge variant="default" className="mt-1">3</Badge>
                  <div>
                    <h4 className="font-semibold mb-1">Estrategia de Influence</h4>
                    <p className="text-elegant">Combinar SEO, datos estructurados impecables y Digital PR para garantizar la presencia en los "tres canales de datos" (Microsoft) y en los listicles que las IA usan para generar sus recomendaciones finales (ChatGPT, Gemini, Claude, Perplexity...).</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="p-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg">
            <p className="text-elegant text-lg mb-4">
              El objetivo es posicionar a Hayas y a nuestros clientes no solo como referentes orgánicos, sino como <strong>fuentes de conocimiento revisadas, contrastadas y con criterio humano</strong>.
            </p>
            <p className="text-elegant">
              En un entorno donde cada vez más contenidos se generan de forma automática, creemos que el verdadero valor está en la combinación de inteligencia artificial y revisión experta para ofrecer información fiable, útil y responsable.
            </p>
          </div>
        </section>

        <Separator />

        {/* CTA Final */}
        <section className="text-center">
          <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">
                ¿Necesitas adaptar tu estrategia de posicionamiento a la era de la IA?
              </h3>
              <p className="text-elegant text-lg mb-6 max-w-2xl mx-auto">
                Descubre cómo podemos ayudarte a transicionar de un SEO tradicional al nuevo modelo AEO/GEO.
              </p>
              <Button asChild size="lg" className="gap-2">
                <Link to={getRoute('seoPositioning')}>
                  Nuestra solución de posicionamiento SEO
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </section>
      </div>
    </BlogPostTemplate>
  );
};

export default BlogNuevoParadigmaSeoAeoGeo;
