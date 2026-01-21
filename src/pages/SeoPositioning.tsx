import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ProcessSection from '@/components/ProcessSection';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

import FAQSection from '@/components/FAQSection';
import ServiceContactSection from '@/components/ServiceContactSection';
import SuccessCasesSection from '@/components/SuccessCasesSection';
import { getServiceSuccessCasesConfig } from '@/data/serviceSuccessCasesMapping';
import Seo from '@/components/Seo';
import { useServiceSEO } from '@/hooks/useServiceSEO';
import { useFAQSEO } from '@/hooks/useFAQSEO';
import { useTranslation } from '@/hooks/useTranslation';
import { Search, BarChart3, FileText, Link as LinkIcon, Target, ArrowRight, CheckCircle, TrendingUp, Users, Globe, Settings, MessageSquare, Bot, Award } from 'lucide-react';

const SeoPositioning = () => {
  const { language } = useTranslation();
  const isEnglish = language === 'en';
  const successCasesConfig = getServiceSuccessCasesConfig('seo-positioning');

  // Bilingual content
  const content = {
    // SEO
    serviceName: isEnglish ? 'SEO Positioning' : 'Posicionamiento SEO',
    serviceDescription: isEnglish 
      ? 'Comprehensive SEO strategy combining technical analysis, optimized content and link building to position your business in the top Google results.'
      : 'Estrategia SEO integral que combina análisis técnico, contenido optimizado y link building para posicionar tu negocio en los primeros resultados de Google.',
    canonical: isEnglish ? '/en/services/seo-positioning' : '/es/servicios/seo-positioning',
    serviceType: isEnglish ? 'SEO and Web Positioning' : 'SEO y Posicionamiento Web',
    features: isEnglish ? [
      'Complete SEO audit',
      'On-page and technical optimization',
      'SEO content strategy',
      'Quality link building',
      'Local SEO and Google My Business',
      'Monthly monitoring and reports'
    ] : [
      'Auditoría SEO completa',
      'Optimización on-page y técnica',
      'Estrategia de contenidos SEO',
      'Link building de calidad',
      'SEO local y Google My Business',
      'Monitoreo y reportes mensuales'
    ],
    
    // Breadcrumb
    breadcrumbHome: isEnglish ? 'Home' : 'Inicio',
    breadcrumbSolutions: isEnglish ? 'Solutions' : 'Soluciones',
    breadcrumbCurrent: isEnglish ? 'SEO & Positioning' : 'SEO y Posicionamiento',
    homeLink: isEnglish ? '/en' : '/es',
    solutionsLink: isEnglish ? '/en#solutions' : '/es#soluciones',
    
    // Hero
    badge: isEnglish ? '🔍 SEO & Positioning' : '🔍 SEO y Posicionamiento',
    heroTitle: isEnglish 
      ? 'Appear <span class="text-gradient-primary">First on Google</span> when they search for you'
      : 'Aparece <span className="text-gradient-primary">Primero en Google</span> cuando te busquen',
    heroDescription: isEnglish 
      ? 'Comprehensive SEO strategy combining technical analysis, optimized content and link building to position your business in the top Google results.'
      : 'Estrategia SEO integral que combina análisis técnico, contenido optimizado y link building para posicionar tu negocio en los primeros resultados de Google.',
    heroCTA: isEnglish ? 'Free SEO Audit' : 'Auditoría SEO Gratuita',
    heroSecondaryCTA: isEnglish ? 'View Results' : 'Ver Resultados',
    heroStats: isEnglish ? {
      traffic: 'Average traffic increase',
      positions: 'Positions achieved',
      time: 'Average time'
    } : {
      traffic: 'Aumento promedio tráfico',
      positions: 'Posiciones conseguidas',
      time: 'Tiempo promedio'
    },
    
    // Services section
    servicesTitle: isEnglish ? 'Comprehensive <span class="text-gradient-primary">SEO Strategy</span>' : 'Estrategia <span className="text-gradient-primary">SEO Integral</span>',
    servicesSubtitle: isEnglish 
      ? 'We combine all advanced SEO techniques to position your business in the top Google results and attract qualified traffic.'
      : 'Combinamos todas las técnicas SEO avanzadas para posicionar tu negocio en los primeros resultados de Google y atraer tráfico cualificado.',
    
    // Types section
    typesTitle: isEnglish ? 'Specialized SEO for every <span class="text-gradient-primary">Objective</span>' : 'SEO Especializado para cada <span className="text-gradient-primary">Objetivo</span>',
    typesSubtitle: isEnglish 
      ? 'Different SEO approaches adapted to your business type, audience and commercial objectives.'
      : 'Diferentes enfoques SEO adaptados a tu tipo de negocio, audiencia y objetivos comerciales.',
    typesBadge: isEnglish ? 'SEO Types' : 'Tipos de SEO',
    
    // Benefits
    benefitsTitle: isEnglish ? 'Why invest in <span class="text-gradient-primary">professional SEO</span>?' : '¿Por qué invertir en <span className="text-gradient-primary">SEO profesional</span>?',
    benefitsDescription: isEnglish 
      ? 'SEO is not just positioning, it is a comprehensive strategy that builds authority, credibility and generates sustainable long-term results.'
      : 'El SEO no es solo posicionamiento, es una estrategia integral que construye autoridad, credibilidad y genera resultados sostenibles a largo plazo.',
    roiTitle: isEnglish ? 'Proven ROI' : 'ROI Demostrado',
    roiDescription: isEnglish 
      ? 'SEO generates an average ROI of 1400%, surpassing any other digital marketing channel.'
      : 'El SEO genera un ROI promedio del 1400%, superando a cualquier otro canal de marketing digital.',
    organicTraffic: isEnglish ? 'Organic Traffic' : 'Tráfico Orgánico',
    qualifiedLeads: isEnglish ? 'Qualified Leads' : 'Leads Cualificados',
    conversions: isEnglish ? 'Conversions' : 'Conversiones',
    
    // Process
    processTitle: isEnglish ? 'Our <span class="text-gradient-primary">SEO Process</span>' : 'Nuestro <span className="text-gradient-primary">Proceso</span> SEO',
    processSubtitle: isEnglish 
      ? 'Proven methodology that guarantees measurable and sustainable results in positioning your business.'
      : 'Metodología probada que garantiza resultados medibles y sostenibles en el posicionamiento de tu negocio.',
    
    // CTA
    ctaTitle: isEnglish ? 'Ready to dominate Google?' : '¿Preparado para dominar Google?',
    ctaSubtitle: isEnglish 
      ? 'Schedule a free SEO audit and discover how we can take your business to the first page of Google.'
      : 'Agenda una auditoría SEO gratuita y descubre cómo podemos llevar tu negocio a la primera página de Google.',
    ctaPrimary: isEnglish ? 'Free SEO Audit' : 'Auditoría SEO Gratuita',
    ctaSecondary: isEnglish ? 'Request Information' : 'Solicitar Información',
    scheduleMeeting: isEnglish ? '/en/schedule-meeting' : '/agendar-reunion',
    contactLink: isEnglish ? '/en/contact' : '/es/contacto',
    
    // Contact
    contactTitle: isEnglish ? 'Shall we talk about your SEO strategy?' : '¿Hablamos sobre tu estrategia SEO?',
    contactSubtitle: isEnglish 
      ? 'Tell us about your project and positioning objectives. We will respond with a personalized proposal.'
      : 'Cuéntanos tu proyecto y objetivos de posicionamiento. Te responderemos con una propuesta personalizada.',
  };

  // Bilingual services data
  const seoServices = isEnglish ? [
    {
      icon: <Search className="h-8 w-8 text-primary" />,
      title: "Keyword Analysis",
      description: "Exhaustive research of relevant keywords for your sector, competition and target audience.",
      features: ["Keyword research", "Competition analysis", "Long-tail search", "Search intent"]
    },
    {
      icon: <FileText className="h-8 w-8 text-primary" />,
      title: "On-Page SEO",
      description: "Technical and content optimization within your website to improve positioning.",
      features: ["Title optimization", "Meta descriptions", "HTML structure", "Loading speed"]
    },
    {
      icon: <LinkIcon className="h-8 w-8 text-primary" />,
      title: "Link Building",
      description: "Building quality links from relevant and authoritative websites.",
      features: ["Natural links", "Guest posting", "Specialized directories", "Digital PR"]
    },
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Local SEO",
      description: "Positioning in local searches to attract customers from your geographic area.",
      features: ["Google My Business", "Local citations", "Reviews and reputation", "Google Maps"]
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
      title: "SEO Audit",
      description: "Complete analysis of your website to identify improvement opportunities.",
      features: ["Technical analysis", "Duplicate content", "Crawling errors", "Optimization opportunities"]
    },
    {
      icon: <Bot className="h-8 w-8 text-primary" />,
      title: "AI-Powered SEO",
      description: "We use artificial intelligence to optimize and automate SEO processes.",
      features: ["Content generation", "Predictive analysis", "Automation", "Continuous optimization"]
    }
  ] : [
    {
      icon: <Search className="h-8 w-8 text-primary" />,
      title: "Análisis de Palabras Clave",
      description: "Investigación exhaustiva de keywords relevantes para tu sector, competencia y audiencia objetivo.",
      features: ["Research de keywords", "Análisis de competencia", "Búsqueda de long-tail", "Intención de búsqueda"]
    },
    {
      icon: <FileText className="h-8 w-8 text-primary" />,
      title: "SEO On-Page",
      description: "Optimización técnica y de contenido dentro de tu sitio web para mejorar el posicionamiento.",
      features: ["Optimización de títulos", "Meta descripciones", "Estructura HTML", "Velocidad de carga"]
    },
    {
      icon: <LinkIcon className="h-8 w-8 text-primary" />,
      title: "Link Building",
      description: "Construcción de enlaces de calidad desde sitios web relevantes y con autoridad.",
      features: ["Enlaces naturales", "Guest posting", "Directorios especializados", "Relaciones públicas digitales"]
    },
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "SEO Local",
      description: "Posicionamiento en búsquedas locales para atraer clientes de tu zona geográfica.",
      features: ["Google My Business", "Citas locales", "Reseñas y reputación", "Mapas de Google"]
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
      title: "Auditoría SEO",
      description: "Análisis completo de tu sitio web para identificar oportunidades de mejora.",
      features: ["Análisis técnico", "Contenido duplicado", "Errores de crawling", "Oportunidades de optimización"]
    },
    {
      icon: <Bot className="h-8 w-8 text-primary" />,
      title: "SEO con IA",
      description: "Utilizamos inteligencia artificial para optimizar y automatizar procesos SEO.",
      features: ["Generación de contenido", "Análisis predictivo", "Automatización", "Optimización continua"]
    }
  ];

  // Bilingual SEO types
  const seoTypes = isEnglish ? [
    {
      icon: <Globe className="h-6 w-6 text-primary" />,
      title: "National SEO",
      description: "Nationwide positioning to reach broad audiences.",
      metrics: ["National ranking", "Massive organic traffic", "High competition"]
    },
    {
      icon: <Target className="h-6 w-6 text-primary" />,
      title: "Local SEO",
      description: "Dominate local searches and attract customers from your area.",
      metrics: ["Google My Business", "Nearby searches", "Local conversion"]
    },
    {
      icon: <Settings className="h-6 w-6 text-primary" />,
      title: "Technical SEO",
      description: "Advanced technical optimization for complex websites.",
      metrics: ["Core Web Vitals", "Indexation", "Web architecture"]
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-primary" />,
      title: "Content SEO",
      description: "Optimized content strategy to attract qualified traffic.",
      metrics: ["Content marketing", "Blog SEO", "Engagement"]
    }
  ] : [
    {
      icon: <Globe className="h-6 w-6 text-primary" />,
      title: "SEO Nacional",
      description: "Posicionamiento a nivel nacional para alcanzar audiencias amplias.",
      metrics: ["Ranking nacional", "Tráfico orgánico masivo", "Competencia alta"]
    },
    {
      icon: <Target className="h-6 w-6 text-primary" />,
      title: "SEO Local",
      description: "Domina las búsquedas locales y atrae clientes de tu zona.",
      metrics: ["Google My Business", "Búsquedas cercanas", "Conversión local"]
    },
    {
      icon: <Settings className="h-6 w-6 text-primary" />,
      title: "SEO Técnico",
      description: "Optimización técnica avanzada para sitios web complejos.",
      metrics: ["Core Web Vitals", "Indexación", "Arquitectura web"]
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-primary" />,
      title: "SEO de Contenidos",
      description: "Estrategia de contenido optimizada para atraer tráfico cualificado.",
      metrics: ["Content marketing", "Blog SEO", "Engagement"]
    }
  ];

  // Bilingual process steps
  const processSteps = isEnglish ? [
    {
      number: "01",
      title: "Audit & Analysis",
      description: "We analyze your website, competition and keywords to create a personalized strategy.",
      icon: <Search className="h-6 w-6" />
    },
    {
      number: "02",
      title: "SEO Strategy",
      description: "We develop a comprehensive plan combining technical SEO, content and link building.",
      icon: <Target className="h-6 w-6" />
    },
    {
      number: "03",
      title: "Implementation",
      description: "We execute all on-page optimizations, create content and build links.",
      icon: <Settings className="h-6 w-6" />
    },
    {
      number: "04",
      title: "Monitoring & Optimization",
      description: "We continuously track and optimize based on real data and results.",
      icon: <BarChart3 className="h-6 w-6" />
    }
  ] : [
    {
      number: "01",
      title: "Auditoría y Análisis",
      description: "Analizamos tu sitio web, competencia y palabras clave para crear una estrategia personalizada.",
      icon: <Search className="h-6 w-6" />
    },
    {
      number: "02",
      title: "Estrategia SEO",
      description: "Desarrollamos un plan integral que combina SEO técnico, contenido y link building.",
      icon: <Target className="h-6 w-6" />
    },
    {
      number: "03",
      title: "Implementación",
      description: "Ejecutamos todas las optimizaciones on-page, creamos contenido y construimos enlaces.",
      icon: <Settings className="h-6 w-6" />
    },
    {
      number: "04",
      title: "Monitoreo y Optimización",
      description: "Seguimos y optimizamos continuamente basándose en datos y resultados reales.",
      icon: <BarChart3 className="h-6 w-6" />
    }
  ];

  // Bilingual benefits
  const benefits = isEnglish ? [
    "More qualified organic traffic",
    "Better positioning on Google",
    "Greater brand visibility",
    "Increase in leads and sales",
    "Superior ROI vs paid advertising",
    "Sustainable long-term results",
    "Online authority and credibility",
    "Sustained competitive advantage",
    "Detailed analysis and reports",
    "Strategy adapted to your sector"
  ] : [
    "Más tráfico orgánico cualificado",
    "Mejor posicionamiento en Google",
    "Mayor visibilidad de marca",
    "Incremento en leads y ventas",
    "ROI superior a la publicidad pagada",
    "Resultados sostenibles a largo plazo",
    "Autoridad y credibilidad online",
    "Ventaja competitiva sostenida",
    "Análisis y reportes detallados",
    "Estrategia adaptada a tu sector"
  ];

  // Bilingual FAQ
  const faqItems = isEnglish ? [
    {
      question: "How long does it take to see SEO results?",
      answer: "Initial SEO results are usually seen between 3-6 months, although this can vary depending on sector competition and your website's current state. The most significant results are achieved between 6-12 months, but SEO is a long-term investment that provides sustained benefits."
    },
    {
      question: "What's the difference between SEO and paid advertising (SEM)?",
      answer: "SEO generates free organic traffic long-term, while SEM requires continuous payment for each click. SEO has superior long-term ROI, greater credibility and sustainable results, although it takes longer to see results than paid advertising."
    },
    {
      question: "Do you guarantee first position on Google?",
      answer: "We don't offer guarantees of specific positions as Google constantly changes its algorithms. However, we guarantee measurable improvements in organic traffic, relevant keyword positioning and overall visibility based on our proven methodology."
    },
    {
      question: "What does the monthly SEO service include?",
      answer: "It includes continuous on-page optimization, SEO content creation, link building, position monitoring, competition analysis, detailed monthly reports and strategic adjustments based on results and algorithm changes."
    },
    {
      question: "Do you work on local SEO for my physical business?",
      answer: "Yes, we have extensive experience in local SEO. We optimize Google My Business, create consistent local citations, manage reviews, optimize for 'near me' searches and implement local schema markup to maximize your visibility in your geographic area."
    },
    {
      question: "How do you measure and report SEO results?",
      answer: "We use professional tools like Google Analytics, Search Console, SEMrush and Ahrefs to measure organic traffic, keyword positions, CTR, conversions and ROI. We send detailed monthly reports with progress analysis and strategic recommendations."
    },
    {
      question: "Can you work with my current website or do I need a new one?",
      answer: "We can optimize any existing website. We perform an initial audit to identify technical and content improvement opportunities. We only recommend a new website if technical problems are so severe they prevent effective SEO."
    },
    {
      question: "What happens if Google changes its algorithm?",
      answer: "We closely follow all Google updates and adapt our strategies accordingly. We use 'white hat' techniques aligned with Google guidelines, so our clients are protected against algorithmic changes and maintain their positions."
    }
  ] : [
    {
      question: "¿Cuánto tiempo tardan en verse los resultados del SEO?",
      answer: "Los primeros resultados del SEO suelen verse entre 3-6 meses, aunque esto puede variar según la competencia del sector y el estado actual de tu web. Los resultados más significativos se alcanzan entre 6-12 meses, pero el SEO es una inversión a largo plazo que proporciona beneficios sostenidos."
    },
    {
      question: "¿Qué diferencia hay entre SEO y publicidad pagada (SEM)?",
      answer: "El SEO genera tráfico orgánico gratuito a largo plazo, mientras que SEM requiere pago continuo por cada clic. El SEO tiene un ROI superior a largo plazo, mayor credibilidad y resultados sostenibles, aunque requiere más tiempo para ver resultados que la publicidad pagada."
    },
    {
      question: "¿Garantizan la primera posición en Google?",
      answer: "No ofrecemos garantías de posiciones específicas ya que Google cambia constantemente sus algoritmos. Sin embargo, garantizamos mejoras medibles en tráfico orgánico, posicionamiento de keywords relevantes y visibilidad general basándose en nuestra metodología probada."
    },
    {
      question: "¿Qué incluye el servicio de SEO mensual?",
      answer: "Incluye optimización on-page continua, creación de contenido SEO, link building, monitoreo de posiciones, análisis de competencia, reportes mensuales detallados y ajustes estratégicos basados en los resultados y cambios del algoritmo."
    },
    {
      question: "¿Trabajan SEO local para mi negocio físico?",
      answer: "Sí, tenemos amplia experiencia en SEO local. Optimizamos Google My Business, creamos citas locales consistentes, gestionamos reseñas, optimizamos para búsquedas 'cerca de mí' y implementamos schema markup local para maximizar tu visibilidad en tu zona geográfica."
    },
    {
      question: "¿Cómo miden y reportan los resultados SEO?",
      answer: "Utilizamos herramientas profesionales como Google Analytics, Search Console, SEMrush y Ahrefs para medir tráfico orgánico, posiciones de keywords, CTR, conversiones y ROI. Enviamos reportes mensuales detallados con análisis de progreso y recomendaciones estratégicas."
    },
    {
      question: "¿Pueden trabajar con mi web actual o necesito una nueva?",
      answer: "Podemos optimizar cualquier web existente. Realizamos una auditoría inicial para identificar oportunidades de mejora técnica y de contenido. Solo recomendamos una nueva web si los problemas técnicos son tan severos que impiden un SEO efectivo."
    },
    {
      question: "¿Qué pasa si Google cambia su algoritmo?",
      answer: "Seguimos de cerca todas las actualizaciones de Google y adaptamos nuestras estrategias en consecuencia. Usamos técnicas 'white hat' que se alinean con las directrices de Google, por lo que nuestros clientes están protegidos ante cambios algorítmicos y mantienen sus posiciones."
    }
  ];
  
  // Service Schema with features and rating
  const seoData = useServiceSEO({
    serviceName: content.serviceName,
    serviceDescription: content.serviceDescription,
    canonical: content.canonical,
    serviceType: content.serviceType,
    priceRange: "€€€",
    features: content.features,
    aggregateRating: {
      ratingValue: "4.9",
      reviewCount: "67"
    }
  });

  // FAQ Schema para Featured Snippets
  const faqSchema = useFAQSEO({
    faqs: faqItems,
    pageUrl: content.canonical
  });

  // Combine schemas
  const combinedStructuredData = [seoData.structuredData, faqSchema.structuredData];

  return (
    <div className="min-h-screen bg-white">
      <Seo 
        title={seoData.title}
        description={seoData.description}
        canonical={seoData.canonical}
        ogImage={seoData.ogImage}
        structuredData={combinedStructuredData}
      />
      <Navigation />
      
      {/* Breadcrumb */}
      <div className="bg-muted/30 py-4 mt-20">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-gray-600">
            <Link to={content.homeLink} className="hover:text-primary">{content.breadcrumbHome}</Link>
            <span className="mx-2">/</span>
            <Link to={content.solutionsLink} className="hover:text-primary">{content.breadcrumbSolutions}</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">{content.breadcrumbCurrent}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-white to-accent/5">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                {content.badge}
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight" dangerouslySetInnerHTML={{ __html: content.heroTitle }} />
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {content.heroDescription}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="gradient-primary text-white" asChild>
                  <Link to={content.scheduleMeeting}>
                    {content.heroCTA}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="#casos-exito">{content.heroSecondaryCTA}</Link>
                </Button>
              </div>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">450%</div>
                  <div className="text-sm text-gray-600">{content.heroStats.traffic}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">TOP 3</div>
                  <div className="text-sm text-gray-600">{content.heroStats.positions}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">6 {isEnglish ? 'months' : 'meses'}</div>
                  <div className="text-sm text-gray-600">{content.heroStats.time}</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                {/* Google SERP mockup */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3 pb-4 border-b border-gray-100">
                    <Search className="h-5 w-5 text-gray-400" />
                    <span className="text-gray-500">{isEnglish ? 'your service + your city' : 'tu servicio + tu ciudad'}</span>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-green-50 border-l-4 border-green-500 rounded-r-lg">
                      <div className="text-sm text-green-700 font-medium">{isEnglish ? 'Your Business - Position #1' : 'Tu Negocio - Posición #1'}</div>
                      <div className="text-xs text-green-600">{isEnglish ? 'Industry leader • More visits • More clients' : 'Líder en tu sector • Más visitas • Más clientes'}</div>
                    </div>
                    
                    <div className="p-4 bg-gray-50 rounded-lg opacity-60">
                      <div className="text-sm text-gray-500">{isEnglish ? 'Competitor 1' : 'Competidor 1'}</div>
                      <div className="text-xs text-gray-400">{isEnglish ? 'Second position' : 'Segunda posición'}</div>
                    </div>
                    
                    <div className="p-4 bg-gray-50 rounded-lg opacity-40">
                      <div className="text-sm text-gray-500">{isEnglish ? 'Competitor 2' : 'Competidor 2'}</div>
                      <div className="text-xs text-gray-400">{isEnglish ? 'Third position' : 'Tercera posición'}</div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100">
                  <span className="text-sm text-gray-600">{isEnglish ? 'Organic results' : 'Resultados orgánicos'}</span>
                  <div className="flex items-center gap-1 text-green-600">
                    <TrendingUp className="h-4 w-4" />
                    <span className="text-sm font-medium">+450% {isEnglish ? 'traffic' : 'tráfico'}</span>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-primary text-white p-3 rounded-full shadow-lg">
                <Search className="h-6 w-6" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-accent text-white p-3 rounded-full shadow-lg">
                <BarChart3 className="h-6 w-6" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" dangerouslySetInnerHTML={{ __html: content.servicesTitle }} />
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {content.servicesSubtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {seoServices.map((service, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
                <CardHeader className="pb-4">
                  <div className="mb-4 p-3 rounded-lg bg-primary/10 w-fit">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Types Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
              {content.typesBadge}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" dangerouslySetInnerHTML={{ __html: content.typesTitle }} />
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {content.typesSubtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {seoTypes.map((type, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 rounded-lg bg-primary/10 w-fit">
                    {type.icon}
                  </div>
                  <CardTitle className="text-lg font-bold">{type.title}</CardTitle>
                  <p className="text-gray-600 text-sm">{type.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {type.metrics.map((metric, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-xs text-gray-600">{metric}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6" dangerouslySetInnerHTML={{ __html: content.benefitsTitle }} />
              <p className="text-lg text-gray-600 mb-8">
                {content.benefitsDescription}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 shrink-0" />
                    <span className="text-sm text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-white rounded-full mb-4">
                    <Award className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{content.roiTitle}</h3>
                  <p className="text-gray-600">
                    {content.roiDescription}
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                    <span className="text-sm font-medium">{content.organicTraffic}</span>
                    <div className="flex items-center gap-2 text-green-600">
                      <TrendingUp className="h-4 w-4" />
                      <span className="text-sm font-bold">+450%</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                    <span className="text-sm font-medium">{content.qualifiedLeads}</span>
                    <div className="flex items-center gap-2 text-green-600">
                      <Users className="h-4 w-4" />
                      <span className="text-sm font-bold">+320%</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                    <span className="text-sm font-medium">{content.conversions}</span>
                    <div className="flex items-center gap-2 text-green-600">
                      <Target className="h-4 w-4" />
                      <span className="text-sm font-bold">+280%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <ProcessSection 
        title={content.processTitle}
        subtitle={content.processSubtitle}
        steps={processSteps} 
        backgroundColor="bg-gradient-to-br from-gray-50 to-white" 
        showIcons={true} 
      />

      {/* Success Cases Section */}
      {successCasesConfig && (
        <SuccessCasesSection 
          id="casos-exito" 
          title={isEnglish ? "Success <span class='text-gradient-primary'>stories</span>" : "Casos de <span className='text-gradient-primary'>éxito</span>"} 
          subtitle={successCasesConfig.subtitle} 
          filterTags={successCasesConfig.filterTags} 
          specificCases={successCasesConfig.specificCases} 
          maxCases={4} 
          showAllLink={true} 
        />
      )}

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{content.ctaTitle}</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            {content.ctaSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100" asChild>
              <Link to={content.scheduleMeeting}>
                {content.ctaPrimary}
                <Search className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white bg-white/10 hover:bg-white/20" asChild>
              <Link to={content.contactLink}>{content.ctaSecondary}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <FAQSection faqs={faqItems} />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ServiceContactSection 
        title={content.contactTitle} 
        subtitle={content.contactSubtitle} 
      />
      
      <Footer />
    </div>
  );
};

export default SeoPositioning;
