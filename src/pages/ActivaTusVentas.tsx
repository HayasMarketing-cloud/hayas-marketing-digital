import React from 'react';
import { ArrowRight, AlertTriangle, TrendingUp, Eye, Target, Users, Bot, BarChart3, Zap, Settings, CheckCircle, Rocket, DollarSign, Star, Trophy, ArrowLeft } from 'lucide-react';
import DynamicH1 from '@/components/DynamicH1';
import { useAdvancedSEO } from '@/hooks/useAdvancedSEO';
import { generateItemListSchema } from '@/data/seoData';
import { servicesByPillar } from '@/data/services';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SuccessCasesSection from '@/components/SuccessCasesSection';
import EnhancedSEO from '@/components/EnhancedSEO';
import FAQSection from '@/components/FAQSection';
import IntermediateCTA from '@/components/IntermediateCTA';
import { successCaseImages } from '@/data/successCaseImages';
import { useTranslation } from '@/hooks/useTranslation';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from '@/components/ui/breadcrumb';

// Pain points data
const painPoints = [
  {
    icon: <AlertTriangle className="h-8 w-8 text-red-500" />,
    title: "Inviertes en publicidad pero no logras un retorno claro",
    description: "Sin una estrategia de medición clara, tu inversión publicitaria se convierte en gasto sin resultados visibles."
  },
  {
    icon: <Users className="h-8 w-8 text-orange-500" />,
    title: "Tus clientes potenciales se pierden en el camino",
    description: "La falta de seguimiento y automatización hace que pierdas oportunidades de venta valiosas."
  },
  {
    icon: <Settings className="h-8 w-8 text-red-500" />,
    title: "No cuentas con la tecnología necesaria",
    description: "Sin las herramientas adecuadas para optimizar campañas y automatizar ventas, tu crecimiento se ve limitado."
  }
];

// Solution points
const solutionPoints = [
  {
    icon: <Target className="h-8 w-8 text-activa-500" />,
    title: "Campañas digitales rentables",
    description: "Diseñamos y gestionamos campañas en redes sociales y Google que generan leads cualificados con ROI medible."
  },
  {
    icon: <Bot className="h-8 w-8 text-activa-500" />,
    title: "IA aplicada a marketing y ventas",
    description: "Implementamos inteligencia artificial para mejorar conversiones, reducir costes y automatizar procesos."
  },
  {
    icon: <Eye className="h-8 w-8 text-activa-500" />,
    title: "Experiencias personalizadas",
    description: "Creamos experiencias únicas que convierten más visitantes en clientes y fidelizan mejor."
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-activa-500" />,
    title: "Consultoría estratégica y analítica",
    description: "Te ofrecemos consultoría continua para evolucionar tus resultados con análisis de datos reales."
  }
];

// Benefits data
const benefits = [
  {
    icon: <Rocket className="h-8 w-8 text-activa-500" />,
    title: "Más clientes",
    description: "Campañas de publicidad optimizadas que generan leads de calidad"
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-activa-500" />,
    title: "Resultados medibles",
    description: "Analítica clara para saber qué funciona y qué no"
  },
  {
    icon: <Bot className="h-8 w-8 text-activa-500" />,
    title: "Atención mejorada",
    description: "Asistentes de IA para dar soporte y captar leads 24/7"
  },
  {
    icon: <Target className="h-8 w-8 text-activa-500" />,
    title: "Optimización constante",
    description: "Procesos que evolucionan con tus objetivos"
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-activa-500" />,
    title: "Escalabilidad",
    description: "Soluciones que crecen al ritmo de tu negocio"
  }
];

// Services data
const services = [
  {
    icon: <Target className="h-8 w-8 text-activa-500" />,
    title: "Publicidad en Redes Sociales",
    description: "Campañas en Meta, LinkedIn y más para captar clientes.",
    href: "/es/servicios/publicidad-redes-sociales"
  },
  {
    icon: <Settings className="h-8 w-8 text-activa-500" />,
    title: "Publicidad en Google Ads",
    description: "Estrategias SEM para generar leads y ventas.",
    href: "/es/servicios/publicidad-google-ads"
  },
  {
    icon: <Bot className="h-8 w-8 text-activa-500" />,
    title: "Asistente IA para Atención al Cliente",
    description: "Chatbots inteligentes para mejorar conversión y soporte.",
    href: "/es/servicios/asistente-ia"
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-activa-500" />,
    title: "Consultoría estratégica y analítica",
    description: "Definición de KPIs, seguimiento y mejora continua.",
    href: "/es/servicios/consultoria-estrategica-analitica"
  },
  {
    icon: <Zap className="h-8 w-8 text-activa-500" />,
    title: "Integraciones y optimización con IA",
    description: "Conexión de sistemas y optimización predictiva.",
    href: "/es/servicios/integraciones-ia-procesos"
  }
];

// Success cases data
const successCases = [
  {
    title: "Nexo Vital",
    description: "Captación de pacientes con campañas en Google Ads y redes",
    image: successCaseImages.nexoVital
  },
  {
    title: "Beka Finance",
    description: "Estrategia de conversión y publicidad digital para servicios financieros",
    image: successCaseImages.bekaFinance
  },
  {
    title: "La Oriental Sin Gluten",
    description: "Ecommerce optimizado con campañas digitales",
    image: successCaseImages.laOrientalSinGluten
  },
  {
    title: "Nova Praxis",
    description: "Captación B2B con campañas de Google Ads y LinkedIn",
    image: successCaseImages.novaPraxis
  }
];

// FAQ data - Spanish
const faqItemsES = [
  {
    question: "¿Cuánto tiempo se tarda en ver resultados en las campañas?",
    answer: "Los primeros resultados suelen aparecer en 2-4 semanas. Sin embargo, la optimización completa de campañas requiere 2-3 meses para alcanzar su máximo potencial de conversión."
  },
  {
    question: "¿Incluyen la gestión completa de las campañas publicitarias?",
    answer: "Sí, nos encargamos de todo: investigación de palabras clave, creación de anuncios, configuración de audiencias, optimización continua y reporting detallado de resultados."
  },
  {
    question: "¿Qué plataformas de publicidad manejan?",
    answer: "Trabajamos con Google Ads (Search, Display, Shopping, YouTube), Meta (Facebook e Instagram), LinkedIn Ads, y otras plataformas según tu sector y objetivos específicos."
  },
  {
    question: "¿Cómo integran la IA en el proceso de ventas?",
    answer: "Implementamos chatbots inteligentes, lead scoring automatizado, personalización de contenidos, análisis predictivo de conversiones y automatización de workflows de nurturing."
  }
];

// FAQ data - English
const faqItemsEN = [
  {
    question: "How long does it take to see results in campaigns?",
    answer: "First results usually appear in 2-4 weeks. However, complete campaign optimization requires 2-3 months to reach maximum conversion potential."
  },
  {
    question: "Do you include complete management of advertising campaigns?",
    answer: "Yes, we handle everything: keyword research, ad creation, audience configuration, continuous optimization and detailed results reporting."
  },
  {
    question: "What advertising platforms do you manage?",
    answer: "We work with Google Ads (Search, Display, Shopping, YouTube), Meta (Facebook and Instagram), LinkedIn Ads, and other platforms according to your sector and specific objectives."
  },
  {
    question: "How do you integrate AI in the sales process?",
    answer: "We implement intelligent chatbots, automated lead scoring, content personalization, predictive conversion analysis and nurturing workflow automation."
  }
];

const ActivaTusVentas = () => {
  const { t, language } = useTranslation();
  const isEnglish = language === 'en';
  const activaServices = servicesByPillar.activa || [];
  
  const seoData = useAdvancedSEO({
    pageContent: isEnglish 
      ? "Digital campaigns and AI to activate sales, generate leads and multiply commercial results. Specialists in online advertising and sales process automation."
      : "Campañas digitales y IA para activar ventas, generar leads y multiplicar resultados comerciales. Especialistas en publicidad online y automatización de procesos de ventas."
  });

  // Generate ItemList schema for services
  const itemListSchema = generateItemListSchema({
    items: activaServices.map(s => ({
      name: s.title,
      url: `https://hayasmarketing.com${s.href}`,
      description: s.description
    })),
    listName: isEnglish ? 'Activate Sales Services - Hayas Marketing' : 'Servicios Activa tus ventas - Hayas Marketing',
    listDescription: isEnglish 
      ? 'Advertising campaigns, strategic consulting, artificial intelligence and automation to activate and multiply your sales.'
      : 'Campañas publicitarias, consultoría estratégica, inteligencia artificial y automatización para activar y multiplicar tus ventas.'
  });

  const combinedStructuredData = [seoData.structuredData, itemListSchema].filter(Boolean);
  
  // FAQ data based on language
  const faqData = isEnglish ? faqItemsEN : faqItemsES;

  // Language-specific content
  const content = {
    breadcrumbHome: isEnglish ? 'Home' : 'Inicio',
    breadcrumbCurrent: isEnglish ? 'Activate Sales' : 'Activa tus ventas',
    badge: isEnglish ? 'Activate Sales Solution' : 'Solución Activa tus ventas',
    heroTitle: isEnglish ? 'Activate your sales and multiply your results' : 'Activa tus ventas y multiplica tus resultados',
    heroDescription: isEnglish 
      ? 'Digital campaigns and artificial intelligence are the key to attracting more customers and closing more sales. At Hayas we combine advertising, analytics and automation so your marketing actions generate a real impact on your business.'
      : 'Las campañas digitales y la inteligencia artificial son la clave para atraer más clientes y cerrar más ventas. En Hayas combinamos publicidad, analítica y automatización para que tus acciones de marketing generen un impacto real en tu negocio.',
    ctaPrimary: isEnglish ? '👉 Request your free consultation' : '👉 Solicita tu asesoría gratuita',
    ctaSecondary: isEnglish ? 'View success stories' : 'Ver casos de éxito',
    homeLink: isEnglish ? '/en' : '/es',
    consultaLink: isEnglish ? '/en/schedule-meeting' : '/es/agendar-reunion',
    casosLink: isEnglish ? '/en/case-studies?pillar=activa' : '/es/casos-exito?pillar=activa',
    // Pain Points
    painPointsTitle: isEnglish ? 'Why do you need to activate your sales?' : '¿Por qué necesitas activar tus ventas?',
    painPointsCta: isEnglish 
      ? '👉 With the right strategy, every euro invested in marketing becomes tangible growth.'
      : '👉 Con la estrategia adecuada, cada euro invertido en marketing se convierte en crecimiento tangible.',
    // Solution
    solutionTitle: isEnglish ? 'Our approach' : 'Nuestra propuesta',
    // Benefits
    benefitsTitle: isEnglish ? 'What you\'ll gain with us' : 'Qué ganarás con nosotros',
    // Services
    servicesTitle: isEnglish ? 'Services that activate your sales' : 'Servicios que activan tus ventas',
    viewService: isEnglish ? 'View service' : 'Ver servicio',
    // Success Cases
    successCasesTitle: isEnglish ? 'Real stories, tangible results' : 'Historias reales, resultados tangibles',
    viewAllCases: isEnglish ? 'View Activate Sales success stories' : 'Ver casos de éxito de Activa tus ventas',
    // CTA
    ctaTitle: isEnglish ? 'Ready to activate your sales?' : '¿Listo para activar tus ventas?',
    ctaSubtitle: isEnglish 
      ? 'Sales are the engine of your business. Start with a free consultation and discover how we can help you design more effective campaigns, integrate AI and multiply your conversions.'
      : 'Las ventas son el motor de tu negocio. Empieza con una asesoría gratuita y descubre cómo podemos ayudarte a diseñar campañas más efectivas, integrar IA y multiplicar tus conversiones.',
    // FAQ
    faqTitle: isEnglish ? 'Frequently Asked Questions' : 'Preguntas Frecuentes',
    faqSubtitle: isEnglish 
      ? 'We answer the most common questions about sales activation and digital campaigns'
      : 'Resolvemos las dudas más comunes sobre activación de ventas y campañas digitales',
  };

  // Pain points with translations
  const painPointsData = isEnglish ? [
    {
      icon: <AlertTriangle className="h-8 w-8 text-red-500" />,
      title: "You invest in advertising but don't get a clear return",
      description: "Without a clear measurement strategy, your advertising investment becomes spending without visible results."
    },
    {
      icon: <Users className="h-8 w-8 text-orange-500" />,
      title: "Your potential customers get lost along the way",
      description: "Lack of follow-up and automation causes you to lose valuable sales opportunities."
    },
    {
      icon: <Settings className="h-8 w-8 text-red-500" />,
      title: "You don't have the necessary technology",
      description: "Without the right tools to optimize campaigns and automate sales, your growth is limited."
    }
  ] : painPoints;

  // Solution points with translations
  const solutionPointsData = isEnglish ? [
    {
      icon: <Target className="h-8 w-8 text-activa-500" />,
      title: "Profitable digital campaigns",
      description: "We design and manage campaigns on social media and Google that generate qualified leads with measurable ROI."
    },
    {
      icon: <Bot className="h-8 w-8 text-activa-500" />,
      title: "AI applied to marketing and sales",
      description: "We implement artificial intelligence to improve conversions, reduce costs and automate processes."
    },
    {
      icon: <Eye className="h-8 w-8 text-activa-500" />,
      title: "Personalized experiences",
      description: "We create unique experiences that convert more visitors into customers and build better loyalty."
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-activa-500" />,
      title: "Strategic consulting and analytics",
      description: "We offer continuous consulting to evolve your results with real data analysis."
    }
  ] : solutionPoints;

  // Benefits with translations
  const benefitsData = isEnglish ? [
    { icon: <Rocket className="h-8 w-8 text-activa-500" />, title: "More customers", description: "Optimized advertising campaigns that generate quality leads" },
    { icon: <BarChart3 className="h-8 w-8 text-activa-500" />, title: "Measurable results", description: "Clear analytics to know what works and what doesn't" },
    { icon: <Bot className="h-8 w-8 text-activa-500" />, title: "Improved service", description: "AI assistants to provide support and capture leads 24/7" },
    { icon: <Target className="h-8 w-8 text-activa-500" />, title: "Constant optimization", description: "Processes that evolve with your objectives" },
    { icon: <TrendingUp className="h-8 w-8 text-activa-500" />, title: "Scalability", description: "Solutions that grow at the pace of your business" }
  ] : benefits;

  // Services with translations  
  const servicesData = isEnglish ? [
    { icon: <Target className="h-8 w-8 text-activa-500" />, title: "Social Media Advertising", description: "Campaigns on Meta, LinkedIn and more to capture customers.", href: "/en/services/social-media-advertising" },
    { icon: <Settings className="h-8 w-8 text-activa-500" />, title: "Google Ads Advertising", description: "SEM strategies to generate leads and sales.", href: "/en/services/google-ads-advertising" },
    { icon: <Bot className="h-8 w-8 text-activa-500" />, title: "AI Customer Service Assistant", description: "Intelligent chatbots to improve conversion and support.", href: "/en/services/ai-assistant" },
    { icon: <BarChart3 className="h-8 w-8 text-activa-500" />, title: "Strategic Consulting & Analytics", description: "KPI definition, tracking and continuous improvement.", href: "/en/services/strategic-consulting-analytics" },
    { icon: <Zap className="h-8 w-8 text-activa-500" />, title: "AI Integrations & Optimization", description: "System connection and predictive optimization.", href: "/en/services/ai-process-integration" }
  ] : services;

  // Success cases with translations
  const successCasesData = isEnglish ? [
    { title: "Nexo Vital", description: "Patient acquisition with Google Ads and social media campaigns", image: successCaseImages.nexoVital },
    { title: "Beka Finance", description: "Conversion strategy and digital advertising for financial services", image: successCaseImages.bekaFinance },
    { title: "La Oriental Sin Gluten", description: "Optimized e-commerce with digital campaigns", image: successCaseImages.laOrientalSinGluten },
    { title: "Nova Praxis", description: "B2B acquisition with Google Ads and LinkedIn campaigns", image: successCaseImages.novaPraxis }
  ] : successCases;

  return (
    <div id="top" className="min-h-screen bg-white">
      <EnhancedSEO />
      <Navigation />
      
      <main>
        {/* Breadcrumbs */}
        <section className="py-4 bg-gray-50 border-b">
          <div className="container mx-auto px-4">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to={content.homeLink}>{content.breadcrumbHome}</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>{content.breadcrumbCurrent}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </section>

        {/* Hero Section */}
        <section className="relative py-16 md:py-20 bg-gradient-to-br from-activa-50 to-activa-100 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="outline" className="mb-6 text-activa-500 border-activa-200 bg-white/50">
                  {content.badge}
                </Badge>
                <DynamicH1 
                  fallback={content.heroTitle}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                >
                  {content.heroTitle}
                </DynamicH1>
                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                  {content.heroDescription}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-activa-500 hover:bg-activa-600 text-white" asChild>
                    <Link to={content.consultaLink}>
                      {content.ctaPrimary}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button variant="activa-outline" size="lg" asChild>
                    <a href="#casos-exito">{content.ctaSecondary}</a>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-activa-200 to-activa-300 rounded-3xl transform rotate-6 scale-105 opacity-20"></div>
                <img 
                  src="/activa-tus-ventas-hero.jpg"
                  alt="Activación de ventas con campañas digitales e IA"
                  className="relative z-10 w-full h-auto rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* El problema Section */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                ¿Por qué necesitas activar tus ventas?
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {painPoints.map((point, index) => (
                <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow h-full">
                  <CardHeader className="text-center pb-4">
                    <div className="mb-4 mx-auto p-4 rounded-full w-fit bg-gray-100">
                      {point.icon}
                    </div>
                    <CardTitle className="text-xl font-bold">
                      {point.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-gray-600 leading-relaxed text-center">
                      {point.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center bg-activa-50 rounded-2xl p-8">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-activa-100 rounded-full">
                  <TrendingUp className="h-8 w-8 text-activa-500" />
                </div>
              </div>
              <p className="text-lg font-semibold text-gray-800">
                👉 Con la estrategia adecuada, cada euro invertido en marketing se convierte en crecimiento tangible.
              </p>
            </div>
          </div>
        </section>

        {/* La solución Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Nuestra propuesta
              </h2>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {solutionPoints.map((point, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-activa-100 rounded-lg flex items-center justify-center">
                      {point.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">{point.title}</h3>
                      <p className="text-gray-600 leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Beneficios clave Section */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-activa-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Qué ganarás con nosotros
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.slice(0, 5).map((benefit, index) => (
                <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full">
                  <CardHeader className="text-center pb-4">
                    <div className="mb-4 mx-auto p-4 rounded-full w-fit bg-activa-100">
                      {benefit.icon}
                    </div>
                    <CardTitle className="text-xl font-bold">
                      {benefit.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-gray-600 leading-relaxed text-center">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Servicios relacionados Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Servicios que activan tus ventas
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full">
                  <CardHeader className="text-center pb-4">
                    <div className="mb-4 mx-auto p-4 rounded-full w-fit bg-activa-100">
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl font-bold">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-gray-600 leading-relaxed text-center mb-4">
                      {service.description}
                    </p>
                    <div className="text-center">
                      <Button variant="outline" size="sm" asChild>
                        <Link to={service.href}>
                          Ver servicio
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Casos de éxito Section */}
        <section id="casos-exito" className="py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {content.successCasesTitle}
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {successCasesData.map((case_study, index) => (
                <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full">
                  <CardHeader className="pb-4">
                    <div className="mb-4">
                      <img 
                        src={case_study.image} 
                        alt={case_study.title}
                        className="w-full h-40 object-cover rounded-lg"
                      />
                    </div>
                    <CardTitle className="text-lg font-bold">
                      {case_study.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {case_study.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button variant="outline" size="lg" asChild>
                <Link to={content.casosLink}>
                  {content.viewAllCases}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Intermediate CTA */}
        <IntermediateCTA 
          title={content.ctaTitle}
          subtitle={content.ctaSubtitle}
          buttonText={content.ctaPrimary}
          buttonLink={content.consultaLink}
        />

        {/* FAQ Section */}
        <FAQSection 
          title={content.faqTitle}
          subtitle={content.faqSubtitle}
          faqs={faqData} 
        />
      </main>

      <Footer />
    </div>
  );
};

export default ActivaTusVentas;