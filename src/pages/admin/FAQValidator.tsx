import React, { useState, useMemo } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEONavigation from '@/components/seo-dashboard/SEONavigation';
import { AdminBreadcrumbs } from '@/components/admin/AdminBreadcrumbs';
import { FAQValidatorCard } from '@/components/admin/faq-validator/FAQValidatorCard';
import { FAQSchemaModal } from '@/components/admin/faq-validator/FAQSchemaModal';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { faqPages } from '@/data/faqPagesConfig';
import { 
  validateFAQSchema, 
  getGoogleRichResultsTestUrl, 
  getValidationSummary,
  FAQValidationResult 
} from '@/utils/faq-schema-validator';
import { generateFAQSchema } from '@/data/seoData';
import { HelpCircle, TrendingUp, AlertTriangle, CheckCircle2, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Mock FAQ data - In production, this would be fetched from the actual pages
const mockFAQData: Record<string, Array<{ question: string; answer: string }>> = {
  'diseno-web': [
    {
      question: '¿Cuánto tiempo tarda el desarrollo de una página web profesional?',
      answer: 'El tiempo de desarrollo de una página web profesional varía según la complejidad del proyecto. Una web corporativa básica puede estar lista en 2-3 semanas, mientras que un sitio web complejo con funcionalidades avanzadas, e-commerce o integraciones específicas puede requerir entre 4-8 semanas. En Hayas Marketing trabajamos con metodología ágil para entregar avances semanales y ajustar el proyecto según tus necesidades. Cada proyecto incluye fases de diseño, desarrollo, pruebas y optimización para garantizar resultados profesionales.'
    },
    {
      question: '¿Qué incluye el servicio de diseño web profesional?',
      answer: 'Nuestro servicio de diseño web profesional incluye: análisis de objetivos y competencia, arquitectura de información optimizada para SEO, diseño UI/UX responsive adaptado a todos los dispositivos, desarrollo con las últimas tecnologías web, optimización de velocidad y rendimiento, integración de CRM y herramientas de marketing, contenidos optimizados para SEO, formación para gestión autónoma del sitio, y soporte técnico post-lanzamiento. Todo diseñado para convertir visitantes en clientes.'
    },
    {
      question: '¿El diseño web será responsive y compatible con móviles?',
      answer: 'Sí, absolutamente. Todos nuestros diseños web son 100% responsive y están optimizados para ofrecer una experiencia perfecta en smartphones, tablets y ordenadores. Más del 60% del tráfico web actual proviene de dispositivos móviles, por lo que el diseño mobile-first es nuestra prioridad. Realizamos pruebas exhaustivas en diferentes dispositivos y navegadores para garantizar que tu web funcione perfectamente en cualquier pantalla, manteniendo velocidad de carga óptima y usabilidad excepcional.'
    },
    {
      question: '¿Puedo actualizar el contenido de mi web yo mismo después del desarrollo?',
      answer: 'Sí, desarrollamos todas nuestras webs con sistemas de gestión de contenido (CMS) intuitivos que te permiten actualizar textos, imágenes, productos y contenidos sin conocimientos técnicos. Proporcionamos formación personalizada para que tu equipo pueda gestionar la web de forma autónoma. Utilizamos plataformas como WordPress, que cuenta con un panel de administración visual y sencillo. Además, ofrecemos documentación completa y soporte técnico continuo para resolver cualquier duda que surja durante la gestión de tu sitio web.'
    },
    {
      question: '¿Qué diferencia un diseño web profesional de una plantilla genérica?',
      answer: 'Un diseño web profesional personalizado ofrece ventajas clave sobre las plantillas genéricas: diseño único que refleja tu identidad de marca y se diferencia de la competencia, optimización específica para tus objetivos de negocio y público objetivo, código limpio y optimizado para mejor rendimiento SEO, funcionalidades personalizadas adaptadas a tus necesidades específicas, mejor experiencia de usuario diseñada estratégicamente, escalabilidad para crecer con tu negocio, y soporte técnico especializado. Las plantillas suelen ser limitadas, difíciles de personalizar y afectan negativamente al posicionamiento web.'
    },
    {
      question: '¿El diseño web incluye optimización para buscadores (SEO)?',
      answer: 'Sí, todos nuestros diseños web incluyen optimización SEO técnica desde el inicio. Esto incluye: estructura HTML semántica optimizada, velocidad de carga optimizada (Core Web Vitals), responsive design mobile-first, URLs amigables y estructura de enlazado interno, meta etiquetas y datos estructurados Schema.org, optimización de imágenes y recursos, integración con Google Search Console y Analytics, y sitemap XML automático. Además, ofrecemos servicios complementarios de SEO avanzado para trabajar el posicionamiento orgánico de forma continua.'
    },
    {
      question: '¿Qué tecnologías utilizáis para el desarrollo web?',
      answer: 'Utilizamos tecnologías web modernas y robustas según las necesidades de cada proyecto: React, Next.js y TypeScript para aplicaciones web avanzadas con excelente rendimiento, WordPress con desarrollo a medida para sitios corporativos y blogs, Shopify y WooCommerce para e-commerce profesionales, integración con APIs y servicios externos (CRM, pasarelas de pago, herramientas de marketing), bases de datos optimizadas, y hosting premium con SSL y CDN. Todas nuestras tecnologías están actualizadas, son seguras y permiten escalabilidad futura.'
    },
    {
      question: '¿Ofrecéis mantenimiento y soporte después del lanzamiento?',
      answer: 'Sí, ofrecemos diferentes planes de mantenimiento web adaptados a tus necesidades. El mantenimiento incluye: actualizaciones de seguridad y plugins, copias de seguridad automáticas diarias, monitorización de rendimiento y uptime, corrección de errores y bugs, actualizaciones de contenido según plan contratado, soporte técnico prioritario, informes mensuales de rendimiento, y optimización continua de velocidad y SEO. Puedes elegir entre planes básicos de mantenimiento técnico o planes avanzados con gestión de contenidos y actualizaciones regulares.'
    }
  ],
  'posicionamiento-seo': [
    {
      question: '¿Cuánto tiempo tarda en verse resultados con el posicionamiento SEO?',
      answer: 'Los primeros resultados de una estrategia SEO profesional comienzan a verse entre 3-6 meses, aunque esto depende de varios factores: la competencia de tu sector, el estado actual de tu web, la calidad de la estrategia implementada, y la autoridad de dominio existente. Durante los primeros meses trabajamos la base técnica y de contenidos, mientras que los resultados más significativos en tráfico y conversiones se consolidan entre los 6-12 meses. El SEO es una inversión a medio-largo plazo con resultados sostenibles, a diferencia de la publicidad de pago que se detiene cuando paras la inversión.'
    },
    {
      question: '¿Qué incluye un servicio de posicionamiento SEO profesional?',
      answer: 'Nuestro servicio de SEO profesional incluye: auditoría técnica completa de tu web, análisis de competencia y keywords estratégicas, optimización técnica on-page (velocidad, estructura, código), creación de contenido optimizado y de calidad, estrategia de link building con enlaces de autoridad, optimización de Core Web Vitals y experiencia de usuario, seguimiento con Google Search Console y Analytics, informes mensuales detallados de evolución y KPIs, y ajustes continuos de estrategia según resultados. Todo diseñado para mejorar tu visibilidad orgánica y aumentar tráfico cualificado.'
    },
    {
      question: '¿Es mejor SEO o publicidad de pago (Google Ads)?',
      answer: 'SEO y Google Ads son complementarios, no excluyentes. El SEO ofrece resultados sostenibles a largo plazo: tráfico orgánico sin coste por clic, mayor credibilidad y confianza del usuario, ROI creciente con el tiempo, y resultados permanentes. Google Ads proporciona visibilidad inmediata y control preciso del presupuesto. Lo ideal es combinar ambas estrategias: Google Ads para resultados inmediatos mientras se consolida el SEO, que luego reduce la dependencia de publicidad de pago. En sectores competitivos, recomendamos una estrategia integrada para maximizar presencia online.'
    },
    {
      question: '¿Cómo garantizáis que el SEO cumplirá con las directrices de Google?',
      answer: 'Aplicamos exclusivamente técnicas de SEO white hat que cumplen estrictamente las directrices de Google. Esto incluye: creación de contenido original y de valor para el usuario, optimización técnica siguiendo las Web Quality Guidelines, construcción de enlaces naturales de calidad, mejora de la experiencia de usuario (UX), optimización de Core Web Vitals, y transparencia total en todas las acciones realizadas. Evitamos cualquier técnica black hat (compra de enlaces masivos, keyword stuffing, contenido duplicado) que pueda penalizar tu web. Trabajamos para resultados sostenibles y seguros a largo plazo.'
    },
    {
      question: '¿El SEO funciona para negocios locales o solo para e-commerce?',
      answer: 'El SEO es fundamental para negocios locales, incluso más efectivo que para e-commerce en muchos casos. El SEO local incluye: optimización de Google Business Profile para aparecer en búsquedas locales y Google Maps, keywords geolocalizadas (ej: "fontanero Madrid centro"), reseñas y reputación online gestionadas, contenido específico para tu zona geográfica, y citas locales en directorios relevantes. Los usuarios buscan servicios cerca de ellos constantemente. Una estrategia SEO local bien ejecutada posiciona tu negocio ante clientes potenciales en tu área de servicio, generando leads de alta calidad y con intención de compra inmediata.'
    },
    {
      question: '¿Qué es el link building y por qué es importante para el SEO?',
      answer: 'El link building es la estrategia de conseguir enlaces de calidad desde otras webs hacia la tuya, y es uno de los factores más importantes para el posicionamiento en Google. Los enlaces actúan como "votos de confianza" que aumentan la autoridad de tu dominio. Sin embargo, no todos los enlaces son iguales: priorizamos enlaces de sitios relevantes de tu sector, con buena autoridad de dominio, seguidos (dofollow), en contenido contextualizado y de calidad. Evitamos estrategias de enlaces masivos de baja calidad. Una estrategia de link building profesional mejora significativamente tu posicionamiento y tráfico orgánico.'
    },
    {
      question: '¿Necesito SEO si ya tengo una web que funciona bien?',
      answer: 'Sí, el SEO es necesario incluso si tu web actual funciona. Los algoritmos de Google se actualizan constantemente, y tu competencia no deja de optimizar sus sitios. Sin SEO continuo, tu posicionamiento se deteriora gradualmente. El SEO no es un proyecto único, sino un proceso continuo que incluye: mantener y mejorar posiciones actuales, adaptarse a cambios de algoritmo de Google, aprovechar nuevas oportunidades de keywords, actualizar contenidos y mejorar la experiencia de usuario, y defender tu posición frente a competidores. Invertir en SEO proactivamente es más rentable que recuperar posiciones perdidas.'
    },
    {
      question: '¿Cómo medís los resultados del posicionamiento SEO?',
      answer: 'Medimos los resultados SEO con KPIs concretos y accionables: evolución de posiciones para keywords estratégicas, crecimiento de tráfico orgánico cualificado, mejora de CTR en resultados de búsqueda, tiempo de permanencia y tasa de rebote, conversiones y leads generados desde orgánico, incremento de autoridad de dominio, y visibilidad en búsquedas de marca. Proporcionamos informes mensuales detallados con Google Analytics y Search Console, análisis de ROI comparando inversión vs resultados obtenidos, y recomendaciones de optimización continua. Transparencia total en cada métrica relevante para tu negocio.'
    }
  ],
  'publicidad-google-ads': [
    {
      question: '¿Cuánto presupuesto necesito para campañas de Google Ads efectivas?',
      answer: 'El presupuesto óptimo para Google Ads depende de tu sector, objetivos y competencia. Como referencia general: negocios locales pueden comenzar con 300-500€/mes para ver primeros resultados, e-commerce suelen necesitar 800-2000€/mes para ser competitivos, y empresas B2B con ciclos de venta largos funcionan bien desde 500-1500€/mes. Lo importante no es solo cuánto inviertes, sino cómo lo optimizas. Nosotros gestionamos tu presupuesto maximizando el ROI mediante segmentación precisa, optimización de pujas, mejora continua de Quality Score y testing A/B constante. Comenzamos con presupuestos conservadores y escalamos según resultados.'
    },
    {
      question: '¿Cuál es la diferencia entre Google Ads y SEO?',
      answer: 'Google Ads (SEM) y SEO son estrategias complementarias con diferencias clave: Google Ads ofrece resultados inmediatos (en horas), pago por clic con control total del presupuesto, visibilidad garantizada en posiciones premium, y flexibilidad para activar/desactivar campañas. El SEO proporciona resultados a medio-largo plazo (3-6 meses), tráfico orgánico sin coste por clic, credibilidad y confianza superior, y resultados sostenibles en el tiempo. Lo ideal es combinar ambas: Google Ads para conversiones inmediatas y testear keywords, mientras construyes autoridad orgánica con SEO para reducir dependencia de publicidad pagada.'
    },
    {
      question: '¿Cómo garantizáis un buen retorno de inversión (ROI) en Google Ads?',
      answer: 'Garantizamos ROI positivo mediante metodología probada: análisis exhaustivo de tu negocio, márgenes y valor de cliente, configuración de campañas con segmentación ultra-específica, creación de anuncios optimizados para conversión con testing A/B continuo, páginas de destino optimizadas para cada campaña, seguimiento de conversiones con Google Analytics 4 y píxeles de seguimiento, optimización de pujas basada en datos reales, exclusión de términos no rentables, y ajustes diarios según rendimiento. Nuestro objetivo no es solo generar clics, sino conversiones rentables. Informes transparentes con coste por conversión y ROI real en cada campaña.'
    },
    {
      question: '¿Qué tipos de campañas de Google Ads son mejores para mi negocio?',
      answer: 'Depende de tus objetivos específicos. Campañas de Búsqueda funcionan para captar demanda activa con alta intención de compra, ideales para servicios locales y e-commerce. Campañas de Display generan awareness y retargeting, perfectas para aumentar reconocimiento de marca. Shopping Ads son imprescindibles para e-commerce con catálogo de productos. Performance Max combina todos los canales de Google con IA para maximizar conversiones. Video Ads en YouTube crean engagement y visibilidad masiva. Recomendamos un mix estratégico: comenzar con Búsqueda para resultados inmediatos, añadir remarketing Display para recuperar visitantes, y escalar a otros formatos según objetivos y presupuesto.'
    },
    {
      question: '¿Cuánto tiempo tardan en aparecer resultados con Google Ads?',
      answer: 'Los primeros resultados de Google Ads son prácticamente inmediatos: tus anuncios pueden estar activos y generando clics en 24-48 horas tras la aprobación. Sin embargo, la optimización real requiere tiempo: primera semana de recopilación de datos iniciales y ajustes de segmentación, segundo mes de optimización de pujas, anuncios y landing pages, y tercer mes en adelante de consolidación de resultados con ROI positivo estable. Google Ads necesita acumular datos de conversión para que su IA optimice automáticamente. Las campañas mejoran significativamente con el tiempo mediante testing continuo y machine learning. No esperes resultados perfectos desde día 1, pero sí tráfico cualificado inmediato.'
    },
    {
      question: '¿Necesito una landing page específica o puedo usar mi web actual?',
      answer: 'Recomendamos landing pages específicas para cada campaña de Google Ads porque aumentan drásticamente la conversión. Una landing page efectiva tiene: mensaje alineado con el anuncio y la intención de búsqueda, llamada a la acción clara y única, diseño sin distracciones ni navegación, formularios optimizados y reducidos, velocidad de carga ultra-rápida, diseño responsive mobile-first, y elementos de confianza (testimonios, garantías). Puedes comenzar con páginas de tu web actual, pero para maximizar ROI, las landing pages dedicadas convierten un 30-50% más. Las creamos como parte de nuestro servicio de gestión de Google Ads.'
    },
    {
      question: '¿Cómo competir en Google Ads si mi sector es muy competitivo?',
      answer: 'En sectores competitivos, la estrategia es clave sobre el presupuesto: segmentación ultra-específica con long-tail keywords de menor competencia, creación de anuncios altamente relevantes para mejorar Quality Score, optimización de landing pages para aumentar ratio de conversión, uso de extensiones de anuncios para mayor visibilidad, remarketing agresivo para recuperar visitantes, segmentación geográfica y horaria precisa, y foco en nichos específicos donde seas más fuerte. Un Quality Score alto reduce el CPC hasta 50%. La clave no es solo pujar más alto, sino ser más relevante. Combinamos tecnología, datos y creatividad para competir efectivamente incluso con presupuestos menores.'
    },
    {
      question: '¿Qué métricas son más importantes para evaluar campañas de Google Ads?',
      answer: 'Las métricas clave dependen de tus objetivos, pero las más importantes son: CTR (Click-Through Rate) para medir relevancia de anuncios, tasa de conversión para evaluar efectividad de landing pages, CPA (Coste Por Adquisición) para rentabilidad real, ROAS (Return On Ad Spend) para ROI en e-commerce, Quality Score para optimización y reducción de costes, y porcentaje de impresiones para evaluar presencia. Métricas de vanidad como impresiones o clics son menos relevantes sin conversiones. Nos enfocamos en métricas de negocio real: ¿cuántos leads o ventas generamos? ¿A qué coste? ¿Qué ROI obtienes? Informes mensuales con transparencia total y recomendaciones accionables.'
    }
  ]
};

const FAQValidator: React.FC = () => {
  const [selectedPage, setSelectedPage] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Validate all FAQ pages
  const validationResults = useMemo(() => {
    const results: Record<string, FAQValidationResult> = {};
    
    faqPages.forEach(page => {
      const faqs = mockFAQData[page.id] || [];
      results[page.id] = validateFAQSchema(faqs);
    });
    
    return results;
  }, []);

  const summary = useMemo(() => getValidationSummary(validationResults), [validationResults]);

  const handleViewDetails = (pageId: string) => {
    setSelectedPage(pageId);
    setIsModalOpen(true);
  };

  const selectedPageData = selectedPage ? faqPages.find(p => p.id === selectedPage) : null;
  const selectedValidation = selectedPage ? validationResults[selectedPage] : null;
  const selectedFAQs = selectedPage ? mockFAQData[selectedPage] : [];
  const selectedSchema = selectedPage ? generateFAQSchema(selectedFAQs, selectedPageData?.path || '') : null;
  const selectedGoogleUrl = selectedPageData ? getGoogleRichResultsTestUrl(selectedPageData.url) : '';

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <SEONavigation />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto space-y-8">
          <AdminBreadcrumbs currentPage="Validador FAQ Schema" />
          
          <div>
            <h1 className="text-4xl font-bold mb-2">Validador FAQ Schema</h1>
            <p className="text-muted-foreground">
              Validación local y testing con Google Rich Results para Featured Snippets
            </p>
          </div>

          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Score Promedio
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{summary.avgScore}%</div>
                <p className="text-xs text-muted-foreground mt-1">
                  {summary.healthStatus === 'excellent' ? '🌟 Excelente' :
                   summary.healthStatus === 'good' ? '✅ Bueno' :
                   summary.healthStatus === 'fair' ? '⚠️ Aceptable' : '❌ Necesita mejora'}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Páginas Validadas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{summary.totalPages}</div>
                <p className="text-xs text-muted-foreground mt-1">
                  {summary.validPages} válidas, {summary.invalidPages} con errores
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Issues Totales
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{summary.totalIssues}</div>
                <p className="text-xs text-muted-foreground mt-1">
                  {summary.criticalIssues} críticos
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Potencial Snippets
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">
                  {faqPages.reduce((sum, page) => sum + page.faqCount, 0)}
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  FAQs optimizadas
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Info Card */}
          <Card className="bg-blue-500/5 border-blue-500/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-blue-500" />
                Sobre el Validador FAQ Schema
              </CardTitle>
              <CardDescription>
                Esta herramienta valida localmente la estructura de tus FAQ Schema y proporciona
                acceso directo a Google Rich Results Test para validación oficial.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <p className="font-medium">Validación Local Automática</p>
                  <p className="text-sm text-muted-foreground">
                    Verifica longitud de preguntas/respuestas, estructura, unicidad y optimización
                    para Featured Snippets
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <ExternalLink className="h-5 w-5 text-blue-500 mt-0.5" />
                <div>
                  <p className="font-medium">Google Rich Results Test</p>
                  <p className="text-sm text-muted-foreground">
                    Acceso directo al validador oficial de Google para confirmar que tus FAQs
                    son elegibles para Rich Results
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <TrendingUp className="h-5 w-5 text-purple-500 mt-0.5" />
                <div>
                  <p className="font-medium">Recomendaciones SEO</p>
                  <p className="text-sm text-muted-foreground">
                    Sugerencias específicas para mejorar la probabilidad de aparecer en Featured
                    Snippets y aumentar CTR
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* FAQ Pages Grid */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Páginas con FAQ Schema</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {faqPages.map((page) => (
                <FAQValidatorCard
                  key={page.id}
                  pageName={page.name}
                  pageUrl={page.url}
                  targetKeywords={page.targetKeywords}
                  faqCount={page.faqCount}
                  validation={validationResults[page.id]}
                  onViewDetails={() => handleViewDetails(page.id)}
                  googleTestUrl={getGoogleRichResultsTestUrl(page.url)}
                  priority={page.priority}
                />
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Validation Modal */}
      {selectedPageData && selectedValidation && selectedSchema && (
        <FAQSchemaModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          pageName={selectedPageData.name}
          validation={selectedValidation}
          googleTestUrl={selectedGoogleUrl}
          schemaJson={selectedSchema}
        />
      )}

      <Footer />
    </div>
  );
};

export default FAQValidator;
