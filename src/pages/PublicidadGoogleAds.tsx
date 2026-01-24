import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import FAQSection from '@/components/FAQSection';
import ServiceContactSection from '@/components/ServiceContactSection';
import SuccessCasesSection from '@/components/SuccessCasesSection';
import { getServiceSuccessCasesConfig } from '@/data/serviceSuccessCasesMapping';
import { useServiceSEO } from '@/hooks/useServiceSEO';
import { useFAQSEO } from '@/hooks/useFAQSEO';
import { useTranslation } from '@/hooks/useTranslation';
import Seo from '@/components/Seo';
import { 
  Search, Target, TrendingUp, BarChart3, Zap, DollarSign, MousePointer,
  ArrowRight, CheckCircle, Star, Eye, Users, Sparkles, Globe,
  Shield, Timer, Settings, Calendar, MapPin, Smartphone, Monitor
} from 'lucide-react';

const PublicidadGoogleAds: React.FC = () => {
  const { language } = useTranslation();
  const isEnglish = language === 'en';
  const successCasesConfig = getServiceSuccessCasesConfig('publicidad-google-ads');

  const googleAdsServices = isEnglish ? [
    {
      icon: <Search className="h-8 w-8 text-primary" />,
      title: "Search Network",
      description: "Text ads that appear when users search for your products or services on Google."
    },
    {
      icon: <Eye className="h-8 w-8 text-primary" />,
      title: "Display Network",
      description: "Visual ads on millions of websites, apps, and videos to increase brand awareness."
    },
    {
      icon: <Smartphone className="h-8 w-8 text-primary" />,
      title: "Shopping Campaigns",
      description: "Promote your products with images, prices, and information directly in search results."
    },
    {
      icon: <Monitor className="h-8 w-8 text-primary" />,
      title: "Video Campaigns",
      description: "Ads on YouTube and Google's video partner network for maximum visual reach."
    },
    {
      icon: <MapPin className="h-8 w-8 text-primary" />,
      title: "Local Campaigns",
      description: "Attract customers to your physical location with geographically optimized local ads."
    },
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Remarketing",
      description: "Reconnect with users who have already visited your website to increase conversions."
    }
  ] : [
    {
      icon: <Search className="h-8 w-8 text-primary" />,
      title: "Red de Búsqueda",
      description: "Anuncios de texto que aparecen cuando los usuarios buscan tus productos o servicios en Google."
    },
    {
      icon: <Eye className="h-8 w-8 text-primary" />,
      title: "Red de Display",
      description: "Anuncios visuales en millones de sitios web, apps y videos para aumentar el reconocimiento de marca."
    },
    {
      icon: <Smartphone className="h-8 w-8 text-primary" />,
      title: "Campañas de Shopping",
      description: "Promociona tus productos con imágenes, precios y información directamente en los resultados de búsqueda."
    },
    {
      icon: <Monitor className="h-8 w-8 text-primary" />,
      title: "Campañas de Video",
      description: "Anuncios en YouTube y en la red de socios de video de Google para máximo alcance visual."
    },
    {
      icon: <MapPin className="h-8 w-8 text-primary" />,
      title: "Campañas Locales",
      description: "Atrae clientes a tu ubicación física con anuncios locales optimizados geográficamente."
    },
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Remarketing",
      description: "Reconecta con usuarios que ya visitaron tu sitio web para aumentar las conversiones."
    }
  ];

  const campaignObjectives = isEnglish ? [
    {
      title: "Increase Sales",
      description: "Generate more conversions and increase revenue",
      metrics: ["ROAS", "CPA", "Revenue", "Conversions"]
    },
    {
      title: "Get Leads",
      description: "Capture information from qualified potential customers",
      metrics: ["CPL", "Conversion rate", "Lead quality", "Forms"]
    },
    {
      title: "Increase Web Traffic",
      description: "Drive more qualified visitors to your website",
      metrics: ["CTR", "CPC", "Sessions", "Page views"]
    },
    {
      title: "Generate Awareness",
      description: "Increase brand knowledge and recognition",
      metrics: ["Impressions", "Reach", "CPM", "Share of voice"]
    }
  ] : [
    {
      title: "Incrementar Ventas",
      description: "Generar más conversiones y aumentar los ingresos",
      metrics: ["ROAS", "CPA", "Revenue", "Conversiones"]
    },
    {
      title: "Obtener Leads",
      description: "Capturar información de clientes potenciales cualificados",
      metrics: ["CPL", "Tasa conversión", "Calidad leads", "Formularios"]
    },
    {
      title: "Aumentar Tráfico Web",
      description: "Dirigir más visitantes cualificados a tu sitio web",
      metrics: ["CTR", "CPC", "Sesiones", "Páginas vistas"]
    },
    {
      title: "Generar Awareness",
      description: "Incrementar el conocimiento y reconocimiento de marca",
      metrics: ["Impresiones", "Alcance", "CPM", "Share of voice"]
    }
  ];

  const processSteps = isEnglish ? [
    {
      number: "01",
      title: "Audit & Analysis",
      description: "We analyze your business, competition, and objectives to define the most effective SEM strategy.",
      icon: <BarChart3 className="h-6 w-6" />
    },
    {
      number: "02", 
      title: "Keyword Research",
      description: "We identify the most relevant and profitable keywords for your business and sector.",
      icon: <Search className="h-6 w-6" />
    },
    {
      number: "03",
      title: "Campaign Setup",
      description: "We create and configure campaigns, ad groups, keywords, and extensions.",
      icon: <Settings className="h-6 w-6" />
    },
    {
      number: "04",
      title: "Continuous Optimization",
      description: "We monitor and optimize daily to improve performance and reduce costs.",
      icon: <TrendingUp className="h-6 w-6" />
    }
  ] : [
    {
      number: "01",
      title: "Auditoría y Análisis",
      description: "Analizamos tu negocio, competencia y objetivos para definir la estrategia SEM más efectiva.",
      icon: <BarChart3 className="h-6 w-6" />
    },
    {
      number: "02", 
      title: "Investigación de Palabras Clave",
      description: "Identificamos las keywords más relevantes y rentables para tu negocio y sector.",
      icon: <Search className="h-6 w-6" />
    },
    {
      number: "03",
      title: "Configuración de Campañas",
      description: "Creamos y configuramos las campañas, grupos de anuncios, palabras clave y extensiones.",
      icon: <Settings className="h-6 w-6" />
    },
    {
      number: "04",
      title: "Optimización Continua",
      description: "Monitorizamos y optimizamos diariamente para mejorar el rendimiento y reducir costes.",
      icon: <TrendingUp className="h-6 w-6" />
    }
  ];

  const successCases = isEnglish ? [
    {
      client: "Software Company",
      campaign: "Google Ads B2B - Search + Display",
      results: "580% ROAS - 200+ qualified leads/month",
      timeframe: "6 months",
      testimonial: "They completely transformed our lead generation. Exceptional ROI from the first month."
    },
    {
      client: "Sports E-commerce",
      campaign: "Shopping + Search Campaigns",
      results: "420% increase in online sales",
      timeframe: "4 months",
      testimonial: "Google Ads campaigns became our most profitable sales channel."
    },
    {
      client: "Dental Clinic",
      campaign: "Local + Search Campaigns",
      results: "350% increase in booked appointments",
      timeframe: "3 months",
      testimonial: "Always full agenda thanks to Google advertising. Investment completely recovered."
    }
  ] : [
    {
      client: "Empresa de Software",
      campaign: "Google Ads B2B - Search + Display",
      results: "580% ROAS - 200+ leads cualificados/mes",
      timeframe: "6 meses",
      testimonial: "Transformaron completamente nuestra generación de leads. ROI excepcional desde el primer mes."
    },
    {
      client: "E-commerce Deportes",
      campaign: "Shopping + Search Campaigns",
      results: "420% incremento en ventas online",
      timeframe: "4 meses",
      testimonial: "Las campañas de Google Ads se convirtieron en nuestro canal de ventas más rentable."
    },
    {
      client: "Clínica Dental",
      campaign: "Campañas Locales + Search",
      results: "350% aumento en citas reservadas",
      timeframe: "3 meses",
      testimonial: "Agenda siempre llena gracias a la publicidad en Google. Inversión totalmente recuperada."
    }
  ];

  const benefits = isEnglish ? [
    "Appear immediately on Google when they search for you",
    "Precise targeting by location, age, interests",
    "Pay only for clicks received",
    "Measurable and optimizable results in real-time",
    "Total control of daily and monthly budget",
    "Faster than organic positioning"
  ] : [
    "Aparece inmediatamente en Google cuando te buscan",
    "Segmentación precisa por ubicación, edad, intereses",
    "Pago únicamente por clics recibidos",
    "Resultados medibles y optimizables en tiempo real",
    "Control total del presupuesto diario y mensual",
    "Mayor velocidad que el posicionamiento orgánico"
  ];

  const faqItems = isEnglish ? [
    {
      question: "What is the minimum recommended investment in Google Ads?",
      answer: "We recommend a minimum budget of €500-800/month to get enough data and effectively optimize campaigns. This varies by sector and competition."
    },
    {
      question: "How long does it take to see results?",
      answer: "Ads appear immediately once approved (24-48h), but we need 2-4 weeks to optimize and achieve stable, profitable results."
    },
    {
      question: "How do you determine the right keywords?",
      answer: "We conduct exhaustive research using professional tools, analyze competition, and select keywords based on search volume, competition, and relevance."
    },
    {
      question: "What type of campaigns do you recommend for my business?",
      answer: "It depends on your objectives: Search to capture demand, Display for awareness, Shopping for e-commerce, and YouTube for engagement. We analyze your specific case."
    },
    {
      question: "How do you measure campaign success?",
      answer: "We use key metrics like ROAS, CPA, CTR, Quality Score, conversions, and revenue. We provide detailed monthly reports with analysis and recommendations."
    },
    {
      question: "Can you optimize existing campaigns?",
      answer: "Yes, we perform audits of existing accounts and optimize structure, keywords, bids, ads, and landing pages to improve performance."
    },
    {
      question: "How much does Google Ads advertising cost in 2025?",
      answer: "Google Ads cost depends on your sector and competition. Average CPC in Spain: €0.50-3 for generic keywords, €3-15+ for competitive sectors (legal, finance, insurance). In addition to the ads budget, consider professional management (10-20% of budget or fixed fee from €400/month). A local business can start with €500-800/month, while competitive B2B companies invest €3,000-10,000+/month."
    },
    {
      question: "What is Quality Score and how does it affect my ads?",
      answer: "Quality Score is a Google metric (1-10) that evaluates the relevance of your ads, keywords, and landing pages. A high Quality Score (7-10) reduces your CPC by up to 50%, improves ad position, and increases ROI. It improves with: relevant keywords, specific ads per group, optimized landing pages, high CTR, and positive user experience."
    }
  ] : [
    {
      question: "¿Cuál es la inversión mínima recomendada en Google Ads?",
      answer: "Recomendamos un presupuesto mínimo de €500-800/mes para obtener suficientes datos y poder optimizar efectivamente las campañas. Esto varía según el sector y competencia."
    },
    {
      question: "¿Cuánto tiempo tarda en verse resultados?",
      answer: "Los anuncios aparecen inmediatamente una vez aprobados (24-48h), pero necesitamos 2-4 semanas para optimizar y conseguir resultados estables y rentables."
    },
    {
      question: "¿Cómo determinan las palabras clave adecuadas?",
      answer: "Realizamos investigación exhaustiva usando herramientas profesionales, analizamos la competencia y seleccionamos keywords basadas en volumen de búsqueda, competencia y relevancia."
    },
    {
      question: "¿Qué tipo de campañas recomiendan para mi negocio?",
      answer: "Depende de tus objetivos: Search para captar demanda, Display para awareness, Shopping para e-commerce, y YouTube para engagement. Analizamos tu caso específico."
    },
    {
      question: "¿Cómo miden el éxito de las campañas?",
      answer: "Utilizamos métricas clave como ROAS, CPA, CTR, Quality Score, conversiones y revenue. Proporcionamos informes detallados mensuales con análisis y recomendaciones."
    },
    {
      question: "¿Pueden optimizar campañas ya existentes?",
      answer: "Sí, realizamos auditorías de cuentas existentes y optimizamos estructura, palabras clave, pujas, anuncios y landing pages para mejorar el rendimiento."
    },
    {
      question: "¿Cuánto cuesta la publicidad en Google Ads en 2025?",
      answer: "El coste de Google Ads depende de tu sector y competencia. CPC promedio en España: 0.50€-3€ para keywords genéricas, 3€-15€+ para sectores competitivos (legal, finanzas, seguros). Además del presupuesto de ads, considera la gestión profesional (10-20% del presupuesto o tarifa fija desde 400€/mes). Un negocio local puede empezar con 500-800€/mes, mientras que empresas B2B competitivas invierten 3.000€-10.000€+/mes."
    },
    {
      question: "¿Qué es el Quality Score y cómo afecta mis anuncios?",
      answer: "Quality Score (Nivel de Calidad) es una métrica de Google (1-10) que evalúa la relevancia de tus anuncios, keywords y landing pages. Un Quality Score alto (7-10) reduce tu CPC hasta un 50%, mejora la posición del anuncio y aumenta el ROI. Se mejora con: keywords relevantes, anuncios específicos por grupo, landing pages optimizadas, CTR alto y experiencia de usuario positiva."
    }
  ];

  const { title, description, canonical, ogImage, structuredData } = useServiceSEO({
    serviceName: isEnglish ? "Google Ads Advertising" : "Publicidad en Google Ads",
    serviceDescription: isEnglish 
      ? "Optimized SEM advertising campaigns on Google Ads to generate conversions. Professional campaign management with continuous analysis and ROI optimization."
      : "Campañas de publicidad SEM en Google Ads optimizadas para generar conversiones. Gestión profesional de campañas con análisis continuo y optimización del ROI.",
    canonical: isEnglish ? "/en/services/google-ads-advertising" : "/es/servicios/marketing-visibilidad/publicidad-google-ads",
    serviceType: isEnglish ? "Digital Advertising" : "Publicidad Digital",
    priceRange: "€€€",
    features: isEnglish ? [
      "Search Network",
      "Display Network",
      "Shopping Campaigns",
      "Video Campaigns",
      "Local Campaigns",
      "Remarketing"
    ] : [
      "Red de Búsqueda",
      "Red de Display",
      "Campañas de Shopping",
      "Campañas de Video",
      "Campañas Locales",
      "Remarketing"
    ],
    aggregateRating: {
      ratingValue: "4.8",
      reviewCount: "53"
    }
  });

  // FAQ Schema para Featured Snippets
  const faqSchema = useFAQSEO({
    faqs: faqItems,
    pageUrl: isEnglish ? '/en/services/google-ads-advertising' : '/es/servicios/marketing-visibilidad/publicidad-google-ads'
  });

  // Combine schemas
  const combinedStructuredData = [structuredData, faqSchema.structuredData];

  const breadcrumbItems = isEnglish ? [
    { label: 'Home', href: '/en' },
    { label: 'Services', href: '/en/services' },
    { label: 'Google Ads Advertising' }
  ] : [
    { label: 'Inicio', href: '/' },
    { label: 'Servicios', href: '/servicios' },
    { label: 'Publicidad en Google Ads' }
  ];

  const content = {
    heroBadge: 'SEM & Google Ads',
    heroTitle: isEnglish 
      ? 'Appear first on Google when <span class="text-primary">they search for you</span>'
      : 'Aparece primero en Google cuando <span class="text-primary">te buscan</span>',
    heroSubtitle: isEnglish 
      ? 'Power your business with strategic Google Ads advertising. Appear exactly when your customers search for what you offer and convert clicks into real sales.'
      : 'Potencia tu negocio con publicidad estratégica en Google Ads. Aparece justo cuando tus clientes buscan lo que ofreces y convierte clics en ventas reales.',
    heroCTA: isEnglish ? 'Start Campaign' : 'Empezar Campaña',
    heroSecondaryCTA: isEnglish ? 'View Strategy' : 'Ver Estrategia',
    campaignTypesTitle: isEnglish ? 'All types of Google Ads campaigns' : 'Todos los tipos de campañas de Google Ads',
    campaignTypesSubtitle: isEnglish 
      ? 'From search to display, shopping, and video. We use all Google Ads formats to maximize your reach and conversions.'
      : 'Desde búsquedas hasta display, shopping y video. Utilizamos todos los formatos de Google Ads para maximizar tu alcance y conversiones.',
    objectivesTitle: isEnglish ? 'Campaigns designed for your objectives' : 'Campañas diseñadas para tus objetivos',
    objectivesSubtitle: isEnglish 
      ? 'Every business has unique objectives. We configure campaigns specifically to achieve your business goals.'
      : 'Cada negocio tiene objetivos únicos. Configuramos las campañas específicamente para alcanzar tus metas comerciales.',
    keyMetrics: isEnglish ? 'Key metrics:' : 'Métricas clave:',
    whyUsTitle: isEnglish 
      ? 'Why trust us with your Google advertising?'
      : '¿Por qué confiar tu publicidad en Google a nosotros?',
    whyUsSubtitle: isEnglish 
      ? 'We are certified Google Ads specialists with years of experience managing advertising budgets and optimizing profitable campaigns.'
      : 'Somos especialistas certificados en Google Ads con años de experiencia gestionando presupuestos publicitarios y optimizando campañas rentables.',
    certifiedTitle: isEnglish ? 'Certified Google Partner' : 'Certificados Google Partner',
    certifiedSubtitle: isEnglish 
      ? 'Certified specialists with access to advanced tools'
      : 'Especialistas certificados con acceso a herramientas avanzadas',
    avgROAS: isEnglish ? 'Average ROAS' : 'ROAS Promedio',
    adSpendManaged: isEnglish ? 'Ad Spend Managed' : 'Ad Spend Gestionado',
    methodologyTitle: isEnglish ? 'Our Google Ads methodology' : 'Nuestra metodología de Google Ads',
    methodologySubtitle: isEnglish 
      ? 'A proven process that ensures profitable campaigns from day one and continuous optimization to maximize your return on investment.'
      : 'Un proceso probado que garantiza campañas rentables desde el primer día y optimización continua para maximizar tu retorno de inversión.',
    successTitle: isEnglish ? 'Google Ads Success Cases' : 'Casos de Éxito en Google Ads',
    successSubtitle: isEnglish 
      ? 'Companies that have transformed their lead generation and sales with our Google Ads campaigns.'
      : 'Empresas que han transformado su generación de leads y ventas con nuestras campañas de Google Ads.',
    ctaTitle: isEnglish 
      ? 'Ready to dominate Google search results?'
      : '¿Listo para dominar los resultados de búsqueda de Google?',
    ctaSubtitle: isEnglish 
      ? 'Start getting qualified leads and sales from Google Ads today.'
      : 'Empieza a conseguir leads cualificados y ventas desde Google Ads hoy.',
    ctaPrimary: isEnglish ? 'Start Now' : 'Empezar Ahora',
    ctaSecondary: isEnglish ? 'View Plans' : 'Ver Planes',
    faqTitle: isEnglish 
      ? 'Frequently Asked Questions about Google Ads Advertising'
      : 'Preguntas Frecuentes sobre Publicidad en Google Ads',
    faqSubtitle: isEnglish 
      ? 'Everything you need to know about our Google Ads management service.'
      : 'Todo lo que necesitas saber sobre nuestro servicio de gestión de Google Ads.',
    contactTitle: isEnglish 
      ? 'Ready to boost your Google Ads?'
      : '¿Listo para potenciar tu Google Ads?',
    contactSubtitle: isEnglish 
      ? 'Tell us about your goals and we will design a Google Ads strategy tailored to your business.'
      : 'Cuéntanos sobre tus objetivos y diseñaremos una estrategia de Google Ads adaptada a tu negocio.'
  };

  return (
    <div className="min-h-screen bg-white">
      <Seo 
        title={title}
        description={description}
        canonical={canonical}
        ogImage={ogImage}
        structuredData={combinedStructuredData}
      />
      <Navigation />
      
      {/* Breadcrumb */}
      <div className="bg-muted/30 py-4">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-muted-foreground">
            {breadcrumbItems.map((item, index) => (
              <React.Fragment key={index}>
                {index > 0 && <span className="mx-2">/</span>}
                {item.href ? (
                  <Link to={item.href} className="hover:text-primary">{item.label}</Link>
                ) : (
                  <span className="text-foreground">{item.label}</span>
                )}
              </React.Fragment>
            ))}
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">
                <Search className="h-4 w-4 mr-2" />
                {content.heroBadge}
              </Badge>
              <h1 
                className="text-4xl lg:text-5xl font-bold mb-6"
                dangerouslySetInnerHTML={{ __html: content.heroTitle }}
              />
              <p className="text-lg text-muted-foreground mb-8">
                {content.heroSubtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="group" asChild>
                  <Link to={isEnglish ? "/en/contact" : "/es/contacto"}>
                    {content.heroCTA}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="#estrategia">{content.heroSecondaryCTA}</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/publicidad-google-ads-hero.jpg"
                  alt={isEnglish 
                    ? "Professional Google Ads management panel - Campaigns and metrics"
                    : "Panel de gestión profesional de Google Ads - Campañas y métricas"
                  }
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tipos de Campañas */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              {content.campaignTypesTitle}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {content.campaignTypesSubtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {googleAdsServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20">
                <CardHeader>
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Objetivos de Campaña */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              {content.objectivesTitle}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {content.objectivesSubtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {campaignObjectives.map((objective, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">{objective.title}</CardTitle>
                  <p className="text-muted-foreground">{objective.description}</p>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-3">{content.keyMetrics}</h4>
                  <ul className="space-y-2">
                    {objective.metrics.map((metric, metricIndex) => (
                      <li key={metricIndex} className="flex items-center">
                        <BarChart3 className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        <span className="text-sm">{metric}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Por qué Elegirnos */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                {content.whyUsTitle}
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                {content.whyUsSubtitle}
              </p>
              
              <div className="grid gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-4 mt-1">
                      <CheckCircle className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary/10">
                <div className="text-center">
                  <Zap className="h-16 w-16 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-4">{content.certifiedTitle}</h3>
                  <p className="text-muted-foreground mb-6">
                    {content.certifiedSubtitle}
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-primary">500%</div>
                      <div className="text-sm text-muted-foreground">{content.avgROAS}</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">€1M+</div>
                      <div className="text-sm text-muted-foreground">{content.adSpendManaged}</div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Proceso de Trabajo */}
      <section id="estrategia" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              {content.methodologyTitle}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {content.methodologySubtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <span className="text-2xl font-bold text-primary">{step.number}</span>
                  </div>
                  <div className="mb-2 text-primary group-hover:scale-110 transition-transform duration-300 flex justify-center">
                    {step.icon}
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Casos de Éxito */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              {content.successTitle}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {content.successSubtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {successCases.map((caseItem, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">{caseItem.campaign}</Badge>
                    <span className="text-xs text-muted-foreground">{caseItem.timeframe}</span>
                  </div>
                  <CardTitle className="text-xl">{caseItem.client}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="text-lg font-bold text-primary mb-2">{caseItem.results}</div>
                  </div>
                  <blockquote className="text-sm text-muted-foreground italic border-l-2 border-primary pl-4">
                    "{caseItem.testimonial}"
                  </blockquote>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            {content.ctaTitle}
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            {content.ctaSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="group" asChild>
              <Link to={isEnglish ? "/en/contact" : "/es/contacto"}>
                {content.ctaPrimary}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to={isEnglish ? "/en/services" : "/servicios"}>
                {content.ctaSecondary}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection 
        title={content.faqTitle}
        subtitle={content.faqSubtitle}
        faqs={faqItems}
      />

      {/* Contact Section */}
      <ServiceContactSection
        title={content.contactTitle}
        subtitle={content.contactSubtitle}
        formId="google-ads"
      />

      <Footer />
    </div>
  );
};

export default PublicidadGoogleAds;
