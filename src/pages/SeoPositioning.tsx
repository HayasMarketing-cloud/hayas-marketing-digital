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
import { 
  Search, BarChart3, FileText, Target, ArrowRight, CheckCircle, 
  TrendingUp, Users, Globe, Settings, MessageSquare, Bot, 
  Brain, Zap, AlertCircle, Sparkles, Eye
} from 'lucide-react';

const SeoPositioning = () => {
  const { language } = useTranslation();
  const isEnglish = language === 'en';
  const successCasesConfig = getServiceSuccessCasesConfig('seo-positioning');

  // Bilingual content - NEW SEO + AEO + GEO positioning
  const content = {
    // SEO metadata
    serviceName: isEnglish ? 'SEO, AEO & GEO: AI Search Optimization' : 'SEO, AEO y GEO: Posicionamiento para IA',
    serviceDescription: isEnglish 
      ? 'We optimize your website to appear in Google and to be understood, cited and recommended by AI assistants like ChatGPT, Copilot, Gemini and Perplexity.'
      : 'Optimizamos tu web para que aparezca en Google y para que los asistentes de IA entiendan tu propuesta, confíen en tu marca y te recomienden cuando los usuarios toman decisiones.',
    canonical: isEnglish ? '/en/services/seo-positioning' : '/es/servicios/seo-positioning',
    serviceType: isEnglish ? 'SEO, AEO and GEO Services' : 'Servicios SEO, AEO y GEO',
    features: isEnglish ? [
      'Classic SEO & Technical Optimization',
      'Answer Engine Optimization (AEO)',
      'Generative Engine Optimization (GEO)',
      'AI-citable content structure',
      'E-E-A-T authority building',
      'AI citation monitoring'
    ] : [
      'SEO clásico y optimización técnica',
      'Answer Engine Optimization (AEO)',
      'Generative Engine Optimization (GEO)',
      'Estructura de contenido citable por IA',
      'Construcción de autoridad E-E-A-T',
      'Monitorización de citaciones IA'
    ],
    
    // Breadcrumb
    breadcrumbHome: isEnglish ? 'Home' : 'Inicio',
    breadcrumbSolutions: isEnglish ? 'Solutions' : 'Soluciones',
    breadcrumbCurrent: isEnglish ? 'SEO, AEO & GEO' : 'SEO, AEO y GEO',
    homeLink: isEnglish ? '/en' : '/es',
    solutionsLink: isEnglish ? '/en#solutions' : '/es#soluciones',
    
    // Hero - NEW positioning
    badge: isEnglish ? '🤖 AI-Era Visibility' : '🤖 Visibilidad en la era de la IA',
    heroTitle: isEnglish 
      ? 'SEO, AEO & GEO: <span class="text-gradient-primary">Positioning for Search Engines and AI Assistants</span>'
      : 'SEO, AEO y GEO: <span class="text-gradient-primary">Posicionamiento para Buscadores y Asistentes de IA</span>',
    heroDescription: isEnglish 
      ? 'We optimize your website not just to appear in Google, but so that AI assistants understand your value proposition, trust your brand, and recommend you when users make decisions.'
      : 'Optimizamos tu web para que no solo aparezca en Google, sino para que los asistentes de IA entiendan tu propuesta, confíen en tu marca y te recomienden cuando los usuarios toman decisiones.',
    heroCTA: isEnglish ? 'Evaluate my SEO + AI visibility' : 'Evaluar mi visibilidad SEO + IA',
    heroSecondaryCTA: isEnglish ? 'View success stories' : 'Ver casos de éxito',
    heroStats: isEnglish ? {
      stat1Label: 'Cited in ChatGPT',
      stat2Label: 'TOP 3 in Google',
      stat3Label: 'Results timeline'
    } : {
      stat1Label: 'Citado en ChatGPT',
      stat2Label: 'TOP 3 en Google',
      stat3Label: 'Tiempo de resultados'
    },
    
    // Paradigm shift section
    paradigmBadge: isEnglish ? 'The New Reality' : 'La Nueva Realidad',
    paradigmTitle: isEnglish 
      ? 'Why traditional SEO is <span class="text-gradient-primary">no longer enough</span>'
      : 'Por qué el SEO tradicional <span class="text-gradient-primary">ya no es suficiente</span>',
    paradigmPoints: isEnglish ? [
      { icon: <MessageSquare className="h-6 w-6" />, title: 'Users now converse', description: 'They don\'t just search keywords, they ask questions to AI assistants.' },
      { icon: <Brain className="h-6 w-6" />, title: 'Research happens in AI', description: 'Much of the research occurs inside ChatGPT, Copilot or Perplexity, not just Google.' },
      { icon: <Zap className="h-6 w-6" />, title: 'Decisions before the click', description: 'Many decisions are made before visiting your website, in AI-generated responses.' }
    ] : [
      { icon: <MessageSquare className="h-6 w-6" />, title: 'Los usuarios ahora conversan', description: 'Ya no solo buscan keywords, hacen preguntas a asistentes de IA.' },
      { icon: <Brain className="h-6 w-6" />, title: 'La investigación ocurre en IA', description: 'Mucha investigación ocurre dentro de ChatGPT, Copilot o Perplexity, no solo en Google.' },
      { icon: <Zap className="h-6 w-6" />, title: 'Decisiones antes del clic', description: 'Muchas decisiones se toman antes de visitar tu web, en respuestas generadas por IA.' }
    ],
    paradigmCallout: isEnglish 
      ? 'If your brand isn\'t structured for AI, you don\'t exist in that invisible phase of the funnel.'
      : 'Si tu marca no está estructurada para IA, no existe en esa fase invisible del funnel.',
    
    // SEO vs AEO vs GEO section
    comparisonBadge: isEnglish ? 'The Three Pillars' : 'Los Tres Pilares',
    comparisonTitle: isEnglish 
      ? 'SEO + AEO + GEO: <span class="text-gradient-primary">Complete visibility strategy</span>'
      : 'SEO + AEO + GEO: <span class="text-gradient-primary">Estrategia de visibilidad completa</span>',
    comparisonSubtitle: isEnglish 
      ? 'Three complementary approaches that work together to maximize your digital presence.'
      : 'Tres enfoques complementarios que trabajan juntos para maximizar tu presencia digital.',
    pillars: isEnglish ? [
      {
        icon: <Search className="h-8 w-8" />,
        title: 'SEO',
        subtitle: 'Essential foundation',
        description: 'Position pages for strategic keywords.',
        results: ['Rankings in Google/Bing', 'Organic traffic', 'Base for discovery'],
        color: 'primary'
      },
      {
        icon: <MessageSquare className="h-8 w-8" />,
        title: 'AEO',
        subtitle: 'Answer Engine Optimization',
        description: 'Optimize content to answer real questions.',
        results: ['Featured snippets', 'Direct answers', 'Immediate responses'],
        color: 'accent'
      },
      {
        icon: <Bot className="h-8 w-8" />,
        title: 'GEO',
        subtitle: 'Generative Engine Optimization',
        description: 'Build authority so AI cites you.',
        results: ['Cited in ChatGPT/Copilot', 'AI recommendations', 'Influence on decisions'],
        color: 'primary'
      }
    ] : [
      {
        icon: <Search className="h-8 w-8" />,
        title: 'SEO',
        subtitle: 'Base necesaria',
        description: 'Posicionar páginas para keywords estratégicas.',
        results: ['Rankings en Google/Bing', 'Tráfico orgánico', 'Base de descubrimiento'],
        color: 'primary'
      },
      {
        icon: <MessageSquare className="h-8 w-8" />,
        title: 'AEO',
        subtitle: 'Answer Engine Optimization',
        description: 'Optimizar contenido para responder preguntas reales.',
        results: ['Featured snippets', 'Respuestas directas', 'Respuestas inmediatas'],
        color: 'accent'
      },
      {
        icon: <Bot className="h-8 w-8" />,
        title: 'GEO',
        subtitle: 'Generative Engine Optimization',
        description: 'Construir autoridad para que la IA te cite.',
        results: ['Citado en ChatGPT/Copilot', 'Recomendaciones IA', 'Influencia en decisiones'],
        color: 'primary'
      }
    ],
    
    // Benefits section - NEW
    benefitsTitle: isEnglish 
      ? 'What your company <span class="text-gradient-primary">gains</span>'
      : 'Qué <span class="text-gradient-primary">gana</span> tu empresa',
    benefitsSubtitle: isEnglish 
      ? 'Tangible results from combining SEO + AEO + GEO in your visibility strategy.'
      : 'Resultados tangibles de combinar SEO + AEO + GEO en tu estrategia de visibilidad.',
    benefits: isEnglish ? [
      { icon: <Bot className="h-5 w-5" />, text: 'Appear in ChatGPT and Copilot responses' },
      { icon: <Sparkles className="h-5 w-5" />, text: 'Be cited as an expert source' },
      { icon: <Target className="h-5 w-5" />, text: 'Influence decisions before price comparison' },
      { icon: <TrendingUp className="h-5 w-5" />, text: 'Reduce dependence on purely organic traffic' },
      { icon: <Eye className="h-5 w-5" />, text: 'Prepare your web for AI agents that browse and act' },
      { icon: <Globe className="h-5 w-5" />, text: 'Stay visible in Google and Bing' }
    ] : [
      { icon: <Bot className="h-5 w-5" />, text: 'Aparecer en respuestas de ChatGPT y Copilot' },
      { icon: <Sparkles className="h-5 w-5" />, text: 'Ser citado como fuente experta' },
      { icon: <Target className="h-5 w-5" />, text: 'Influir en decisiones antes de que comparen precios' },
      { icon: <TrendingUp className="h-5 w-5" />, text: 'Reducir dependencia del tráfico puramente orgánico' },
      { icon: <Eye className="h-5 w-5" />, text: 'Preparar la web para agentes IA que navegan y actúan' },
      { icon: <Globe className="h-5 w-5" />, text: 'Mantener visibilidad en Google y Bing' }
    ],
    
    // Services included - reformulated
    servicesTitle: isEnglish 
      ? 'What we <span class="text-gradient-primary">include</span>'
      : 'Qué <span class="text-gradient-primary">incluye</span>',
    servicesSubtitle: isEnglish 
      ? 'Services focused on results, not just activities.'
      : 'Servicios enfocados en resultados, no solo en actividades.',
    services: isEnglish ? [
      {
        icon: <BarChart3 className="h-8 w-8 text-primary" />,
        title: "SEO + AEO Audit",
        description: "Complete technical, content and structure analysis to identify SEO and AI visibility opportunities.",
        features: ["Technical analysis", "Content structure", "AI readiness assessment", "Opportunity mapping"]
      },
      {
        icon: <Search className="h-8 w-8 text-primary" />,
        title: "Semantic & Conversational Research",
        description: "Identifying questions and topics your audience is asking, in Google and AI assistants.",
        features: ["Intent research", "Conversational keywords", "Long-tail FAQs", "AI query patterns"]
      },
      {
        icon: <FileText className="h-8 w-8 text-primary" />,
        title: "AI-Optimized Content",
        description: "Creating and optimizing content that responds, is citable, and has AI trust signals.",
        features: ["Citable content", "E-E-A-T signals", "Modular structure", "Clear entities"]
      },
      {
        icon: <Settings className="h-8 w-8 text-primary" />,
        title: "Entity & FAQ Structuring",
        description: "Organizing your content so search engines and AI clearly understand your brand and offerings.",
        features: ["Schema markup", "FAQ optimization", "Author profiles", "Entity definition"]
      },
      {
        icon: <Bot className="h-8 w-8 text-primary" />,
        title: "Generative Search Preparation",
        description: "Specific optimizations for visibility in ChatGPT, Copilot, Perplexity and Gemini.",
        features: ["GEO optimization", "Citation building", "Trust signals", "AI accessibility"]
      },
      {
        icon: <TrendingUp className="h-8 w-8 text-primary" />,
        title: "Continuous Tracking & Evolution",
        description: "Monitoring rankings, AI citations, and continuous adaptation to algorithm changes.",
        features: ["Google rankings", "AI citations tracking", "Competition analysis", "Algorithmic adaptation"]
      }
    ] : [
      {
        icon: <BarChart3 className="h-8 w-8 text-primary" />,
        title: "Auditoría SEO + AEO",
        description: "Análisis técnico, de contenido y estructura para identificar oportunidades de SEO y visibilidad IA.",
        features: ["Análisis técnico", "Estructura de contenido", "Evaluación IA", "Mapeo de oportunidades"]
      },
      {
        icon: <Search className="h-8 w-8 text-primary" />,
        title: "Investigación Semántica y Conversacional",
        description: "Identificamos las preguntas y temas que tu audiencia está preguntando en Google y asistentes IA.",
        features: ["Research de intención", "Keywords conversacionales", "FAQs long-tail", "Patrones de consulta IA"]
      },
      {
        icon: <FileText className="h-8 w-8 text-primary" />,
        title: "Contenidos Optimizados para IA",
        description: "Creación y optimización de contenido que responde, es citable y tiene señales de confianza.",
        features: ["Contenido citable", "Señales E-E-A-T", "Estructura modular", "Entidades claras"]
      },
      {
        icon: <Settings className="h-8 w-8 text-primary" />,
        title: "Estructuración de Entidades y FAQs",
        description: "Organizamos tu contenido para que buscadores e IA entiendan claramente tu marca y oferta.",
        features: ["Schema markup", "Optimización de FAQs", "Perfiles de autor", "Definición de entidades"]
      },
      {
        icon: <Bot className="h-8 w-8 text-primary" />,
        title: "Preparación para Buscadores Generativos",
        description: "Optimizaciones específicas para visibilidad en ChatGPT, Copilot, Perplexity y Gemini.",
        features: ["Optimización GEO", "Construcción de citaciones", "Señales de confianza", "Accesibilidad IA"]
      },
      {
        icon: <TrendingUp className="h-8 w-8 text-primary" />,
        title: "Seguimiento y Evolución Continua",
        description: "Monitoreo de rankings, citaciones IA y adaptación continua a cambios algorítmicos.",
        features: ["Rankings Google", "Tracking citaciones IA", "Análisis competencia", "Adaptación algorítmica"]
      }
    ],
    
    // Process - 4 phases reformulated
    processTitle: isEnglish 
      ? 'Our <span class="text-gradient-primary">SEO + AEO + GEO</span> Methodology'
      : 'Nuestra Metodología <span class="text-gradient-primary">SEO + AEO + GEO</span>',
    processSubtitle: isEnglish 
      ? 'A four-phase approach that builds from solid foundations to AI authority.'
      : 'Un enfoque en cuatro fases que construye desde fundamentos sólidos hasta autoridad en IA.',
    
    // CTA - NEW
    ctaTitle: isEnglish 
      ? 'Is your website ready for search engines and AI assistants?'
      : '¿Tu web está preparada para buscadores y asistentes de IA?',
    ctaSubtitle: isEnglish 
      ? 'We analyze your current positioning and show you what opportunities you have in SEO, AEO and GEO. No commitment.'
      : 'Analizamos tu posicionamiento actual y te mostramos qué oportunidades tienes en SEO, AEO y GEO. Sin compromiso.',
    ctaPrimary: isEnglish ? 'Evaluate my visibility' : 'Evaluar mi visibilidad',
    ctaSecondary: isEnglish ? 'Talk to SofÍA' : 'Hablar con SofÍA',
    scheduleMeeting: isEnglish ? '/en/schedule-meeting' : '/agendar-reunion',
    contactLink: isEnglish ? '/en/contact' : '/es/contacto',
    
    // Contact
    contactTitle: isEnglish 
      ? 'Ready to be visible in Google and AI?'
      : '¿Preparado para ser visible en Google e IA?',
    contactSubtitle: isEnglish 
      ? 'Tell us about your project and positioning goals. We\'ll respond with a personalized proposal.'
      : 'Cuéntanos tu proyecto y objetivos de posicionamiento. Te responderemos con una propuesta personalizada.',
  };

  // Process steps - 4 phases aligned with plan
  const processSteps = isEnglish ? [
    {
      number: "01",
      title: "Solid SEO Foundations",
      description: "Clear web architecture, crawlable content, technical performance, and correct indexing.",
      icon: <Search className="h-6 w-6" />
    },
    {
      number: "02",
      title: "Intent-Oriented Content (AEO)",
      description: "Real user questions, modular and citable content, long-tail FAQs, texts that answer.",
      icon: <MessageSquare className="h-6 w-6" />
    },
    {
      number: "03",
      title: "Authority & Trust (GEO)",
      description: "Documented real cases, identified author (E-E-A-T), clear entities, message consistency.",
      icon: <Bot className="h-6 w-6" />
    },
    {
      number: "04",
      title: "Monitoring & Optimization",
      description: "Google/Bing rankings, AI citations (new KPI), competition analysis, algorithmic adaptation.",
      icon: <BarChart3 className="h-6 w-6" />
    }
  ] : [
    {
      number: "01",
      title: "Fundamentos SEO Sólidos",
      description: "Arquitectura web clara, contenido rastreable, rendimiento técnico e indexación correcta.",
      icon: <Search className="h-6 w-6" />
    },
    {
      number: "02",
      title: "Contenido Orientado a Intención (AEO)",
      description: "Preguntas reales del usuario, contenido modular y citable, FAQs long-tail, textos que responden.",
      icon: <MessageSquare className="h-6 w-6" />
    },
    {
      number: "03",
      title: "Autoridad y Confianza (GEO)",
      description: "Casos reales documentados, autor identificado (E-E-A-T), entidades claras, consistencia del mensaje.",
      icon: <Bot className="h-6 w-6" />
    },
    {
      number: "04",
      title: "Monitorización y Optimización",
      description: "Rankings Google/Bing, citaciones en IA (nuevo KPI), análisis de competencia, adaptación algorítmica.",
      icon: <BarChart3 className="h-6 w-6" />
    }
  ];

  // FAQs - AEO optimized (designed to be cited by AI)
  const faqItems = isEnglish ? [
    {
      question: "What is AEO and how is it different from SEO?",
      answer: "AEO (Answer Engine Optimization) optimizes content to answer real questions directly. While traditional SEO seeks rankings, AEO seeks to appear in featured snippets and immediate responses. SEO is the foundation, AEO adds response clarity."
    },
    {
      question: "Can my website appear in ChatGPT or Copilot?",
      answer: "Yes, if your content is properly structured, citable, and has authority signals (identified author, real cases, clear entities). This is what we call GEO (Generative Engine Optimization) - building trust so AI cites you."
    },
    {
      question: "Is Google still important?",
      answer: "Absolutely. Classic SEO is the foundation on which AEO and GEO are built. Without a technically solid and well-indexed website, AI assistants cannot access your content. Google remains essential."
    },
    {
      question: "Does this replace traditional SEO?",
      answer: "No. SEO, AEO, and GEO are complementary. SEO is the base for discovery, AEO provides response clarity, and GEO builds authority for generative environments. The three work together."
    },
    {
      question: "What type of companies is this for?",
      answer: "For any company that wants to be found when their audience researches and makes decisions: B2B, professional services, e-commerce, startups... If your clients search before deciding, this is for you."
    },
    {
      question: "How long does it take to see results?",
      answer: "Classic SEO shows significant improvements in 3-6 months. AI citations (GEO) depend on building authority, generally visible between 6-12 months. It's a medium-long term investment with sustainable results."
    }
  ] : [
    {
      question: "¿Qué es AEO y en qué se diferencia del SEO?",
      answer: "AEO (Answer Engine Optimization) optimiza el contenido para responder preguntas reales de forma directa. Mientras el SEO tradicional busca rankings, AEO busca aparecer en featured snippets y respuestas inmediatas. SEO es la base, AEO añade claridad de respuesta."
    },
    {
      question: "¿Mi web puede aparecer en ChatGPT o Copilot?",
      answer: "Sí, si tu contenido está estructurado correctamente, es citable y tiene señales de autoridad (autor identificado, casos reales, entidades claras). Esto es lo que llamamos GEO (Generative Engine Optimization) - construir confianza para que la IA te cite."
    },
    {
      question: "¿Google sigue siendo importante?",
      answer: "Absolutamente. El SEO clásico es la base sobre la que se construye AEO y GEO. Sin una web técnicamente sólida y bien indexada, los asistentes IA no pueden acceder a tu contenido. Google sigue siendo esencial."
    },
    {
      question: "¿Esto sustituye al SEO tradicional?",
      answer: "No. SEO, AEO y GEO son complementarios. SEO es la base de descubrimiento, AEO aporta claridad de respuesta, y GEO construye autoridad para entornos generativos. Los tres trabajan juntos."
    },
    {
      question: "¿Para qué tipo de empresas tiene sentido?",
      answer: "Para cualquier empresa que quiera ser encontrada cuando su audiencia investiga y toma decisiones: B2B, servicios profesionales, e-commerce, startups... Si tus clientes buscan antes de decidir, esto es para ti."
    },
    {
      question: "¿Cuánto tiempo tardan en verse resultados?",
      answer: "El SEO clásico muestra mejoras significativas en 3-6 meses. Las citaciones en IA (GEO) dependen de la construcción de autoridad, generalmente visible entre 6-12 meses. Es una inversión a medio-largo plazo con resultados sostenibles."
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

      {/* Hero Section - NEW positioning */}
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
              
              {/* Updated Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary flex items-center justify-center gap-1">
                    <Bot className="h-5 w-5" />
                    <span>IA</span>
                  </div>
                  <div className="text-sm text-gray-600">{content.heroStats.stat1Label}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">TOP 3</div>
                  <div className="text-sm text-gray-600">{content.heroStats.stat2Label}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">6-12 {isEnglish ? 'mo' : 'meses'}</div>
                  <div className="text-sm text-gray-600">{content.heroStats.stat3Label}</div>
                </div>
              </div>
            </div>
            
            {/* Updated visual - SERP + AI mockup */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 pb-4 border-b border-gray-100">
                    <Search className="h-5 w-5 text-gray-400" />
                    <span className="text-gray-500">{isEnglish ? 'your service + your city' : 'tu servicio + tu ciudad'}</span>
                  </div>
                  
                  <div className="space-y-4">
                    {/* Google result */}
                    <div className="p-4 bg-green-50 border-l-4 border-green-500 rounded-r-lg">
                      <div className="flex items-center gap-2 mb-1">
                        <Globe className="h-4 w-4 text-green-600" />
                        <span className="text-sm text-green-700 font-medium">Google - {isEnglish ? 'Position #1' : 'Posición #1'}</span>
                      </div>
                      <div className="text-xs text-green-600">{isEnglish ? 'Your Business • Top organic result' : 'Tu Negocio • Resultado orgánico top'}</div>
                    </div>
                    
                    {/* AI citation */}
                    <div className="p-4 bg-purple-50 border-l-4 border-purple-500 rounded-r-lg">
                      <div className="flex items-center gap-2 mb-1">
                        <Bot className="h-4 w-4 text-purple-600" />
                        <span className="text-sm text-purple-700 font-medium">ChatGPT - {isEnglish ? 'Cited as source' : 'Citado como fuente'}</span>
                      </div>
                      <div className="text-xs text-purple-600">{isEnglish ? '"According to [Your Brand]..."' : '"Según [Tu Marca]..."'}</div>
                    </div>
                    
                    {/* Featured snippet */}
                    <div className="p-4 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg">
                      <div className="flex items-center gap-2 mb-1">
                        <MessageSquare className="h-4 w-4 text-blue-600" />
                        <span className="text-sm text-blue-700 font-medium">Featured Snippet</span>
                      </div>
                      <div className="text-xs text-blue-600">{isEnglish ? 'Direct answer in search' : 'Respuesta directa en búsqueda'}</div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100">
                  <span className="text-sm text-gray-600">{isEnglish ? 'SEO + AEO + GEO visibility' : 'Visibilidad SEO + AEO + GEO'}</span>
                  <div className="flex items-center gap-1 text-green-600">
                    <TrendingUp className="h-4 w-4" />
                    <span className="text-sm font-medium">360°</span>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-primary text-white p-3 rounded-full shadow-lg">
                <Search className="h-6 w-6" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-accent text-white p-3 rounded-full shadow-lg">
                <Bot className="h-6 w-6" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Paradigm Shift Section - NEW */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-white text-primary border-primary/20">
              {content.paradigmBadge}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" dangerouslySetInnerHTML={{ __html: content.paradigmTitle }} />
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {content.paradigmPoints.map((point, index) => (
              <Card key={index} className="border-none shadow-lg bg-white/80 backdrop-blur">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-4 rounded-full bg-primary/10 w-fit text-primary">
                    {point.icon}
                  </div>
                  <CardTitle className="text-lg font-bold">{point.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">{point.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Callout */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-xl border-l-4 border-primary">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-primary/10 rounded-full shrink-0">
                  <AlertCircle className="h-6 w-6 text-primary" />
                </div>
                <p className="text-lg text-gray-800 font-medium leading-relaxed">
                  {content.paradigmCallout}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO vs AEO vs GEO Section - Three Pillars */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
              {content.comparisonBadge}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" dangerouslySetInnerHTML={{ __html: content.comparisonTitle }} />
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {content.comparisonSubtitle}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {content.pillars.map((pillar, index) => (
              <Card key={index} className={`border-2 ${index === 1 ? 'border-accent shadow-xl scale-105' : 'border-gray-200'} hover:shadow-xl transition-all duration-300`}>
                <CardHeader className="text-center pb-4">
                  <div className={`mx-auto mb-4 p-4 rounded-full ${index === 1 ? 'bg-accent/10 text-accent' : 'bg-primary/10 text-primary'} w-fit`}>
                    {pillar.icon}
                  </div>
                  <CardTitle className="text-2xl font-bold">{pillar.title}</CardTitle>
                  <Badge variant="secondary" className="mt-2">{pillar.subtitle}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center mb-6">{pillar.description}</p>
                  <div className="space-y-3">
                    {pillar.results.map((result, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle className={`h-5 w-5 shrink-0 ${index === 1 ? 'text-accent' : 'text-primary'}`} />
                        <span className="text-sm text-gray-700">{result}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section - NEW */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" dangerouslySetInnerHTML={{ __html: content.benefitsTitle }} />
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {content.benefitsSubtitle}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {content.benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="p-2 bg-primary/10 rounded-full text-primary shrink-0">
                  {benefit.icon}
                </div>
                <span className="text-gray-700 font-medium">{benefit.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - Reformulated */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" dangerouslySetInnerHTML={{ __html: content.servicesTitle }} />
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {content.servicesSubtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.services.map((service, index) => (
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

      {/* Process Section */}
      <ProcessSection 
        title={<span dangerouslySetInnerHTML={{ __html: content.processTitle }} />}
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

      {/* FAQ Section - AEO Optimized */}
      <FAQSection 
        title={isEnglish ? "Frequently asked questions" : "Preguntas frecuentes"}
        subtitle={isEnglish ? "Answers designed to help you understand SEO, AEO and GEO" : "Respuestas diseñadas para ayudarte a entender SEO, AEO y GEO"}
        faqs={faqItems}
      />

      {/* CTA Section - NEW */}
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
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
              <Link to={content.contactLink}>
                {content.ctaSecondary}
                <Bot className="ml-2 h-5 w-5" />
              </Link>
            </Button>
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
