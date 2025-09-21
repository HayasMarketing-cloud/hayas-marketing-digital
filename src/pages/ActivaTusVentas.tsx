import React from 'react';
import { ArrowRight, AlertTriangle, TrendingUp, Eye, Target, Users, Bot, BarChart3, Zap, Settings, CheckCircle, Rocket, DollarSign, Star, Trophy, ArrowLeft } from 'lucide-react';
import DynamicH1 from '@/components/DynamicH1';
import { useAdvancedSEO } from '@/hooks/useAdvancedSEO';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SuccessCasesSection from '@/components/SuccessCasesSection';
import Seo from '@/components/Seo';
import FAQSection from '@/components/FAQSection';
import IntermediateCTA from '@/components/IntermediateCTA';
import KitConsultingBanner from '@/components/KitConsultingBanner';
import { successCaseImages } from '@/data/successCaseImages';
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
    href: "/servicios/publicidad-redes-sociales"
  },
  {
    icon: <Settings className="h-8 w-8 text-activa-500" />,
    title: "Publicidad en Google Ads",
    description: "Estrategias SEM para generar leads y ventas.",
    href: "/servicios/publicidad-google-ads"
  },
  {
    icon: <Bot className="h-8 w-8 text-activa-500" />,
    title: "Asistente IA para Atención al Cliente",
    description: "Chatbots inteligentes para mejorar conversión y soporte.",
    href: "/servicios/asistente-ia"
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-activa-500" />,
    title: "Consultoría estratégica y analítica",
    description: "Definición de KPIs, seguimiento y mejora continua.",
    href: "/servicios/consultoria-estrategica-analitica"
  },
  {
    icon: <Zap className="h-8 w-8 text-activa-500" />,
    title: "Integraciones y optimización con IA",
    description: "Conexión de sistemas y optimización predictiva.",
    href: "/servicios/integraciones-ia-procesos"
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

// FAQ data
const faqItems = [
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

const ActivaTusVentas = () => {
  const seoData = useAdvancedSEO({
    pageContent: "Campañas digitales y IA para activar ventas, generar leads y multiplicar resultados comerciales. Especialistas en publicidad online y automatización de procesos de ventas."
  });

  return (
    <div id="top" className="min-h-screen bg-white">
      <head>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <link rel="canonical" href={`https://hayasmarketing.com${seoData.canonical}`} />
        <meta name="robots" content={seoData.robots} />
        {seoData.structuredData && (
          <script type="application/ld+json">
            {JSON.stringify(seoData.structuredData)}
          </script>
        )}
      </head>
      <Navigation />
      
      <main>
        {/* Breadcrumbs */}
        <section className="py-4 bg-gray-50 border-b">
          <div className="container mx-auto px-4">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/es">Inicio</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Activa tus ventas</BreadcrumbPage>
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
                  Solución Activa tus ventas
                </Badge>
                <DynamicH1 
                  fallback="Activa tus ventas y multiplica tus resultados"
                  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                >
                  Activa tus ventas y multiplica tus resultados
                </DynamicH1>
                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                  Las campañas digitales y la inteligencia artificial son la clave para atraer más clientes y cerrar más ventas. En Hayas combinamos publicidad, analítica y automatización para que tus acciones de marketing generen un impacto real en tu negocio.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-activa-500 hover:bg-activa-600 text-white" asChild>
                    <Link to="/es/agendar-reunion">
                      👉 Solicita tu asesoría gratuita
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button variant="activa-outline" size="lg" asChild>
                    <a href="#casos-exito">Ver casos de éxito</a>
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
                Historias reales, resultados tangibles
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {successCases.map((case_study, index) => (
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
                <Link to="/es/casos-exito?pillar=activa">
                  Ver casos de éxito de Activa tus ventas
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Kit Consulting Banner */}
        <KitConsultingBanner />

        {/* Intermediate CTA */}
        <IntermediateCTA 
          title="¿Listo para activar tus ventas?"
          subtitle="Las ventas son el motor de tu negocio. Empieza con una asesoría gratuita y descubre cómo podemos ayudarte a diseñar campañas más efectivas, integrar IA y multiplicar tus conversiones."
          buttonText="👉 Solicita tu asesoría gratuita"
          buttonLink="/agendar-reunion"
        />

        {/* FAQ Section */}
        <FAQSection 
          title="Preguntas Frecuentes"
          subtitle="Resolvemos las dudas más comunes sobre activación de ventas y campañas digitales"
          faqs={faqItems} 
        />
      </main>

      <Footer />
    </div>
  );
};

export default ActivaTusVentas;