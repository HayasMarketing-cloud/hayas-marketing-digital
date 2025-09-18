import React from 'react';
import { ArrowRight, Target, TrendingUp, BarChart3, Lightbulb, CheckCircle, Users, Zap, ArrowLeft } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FAQSection from '@/components/FAQSection';
import KitConsultingBanner from '@/components/KitConsultingBanner';
import DynamicH1 from '@/components/DynamicH1';
import { useAdvancedSEO } from '@/hooks/useAdvancedSEO';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from '@/components/ui/breadcrumb';

// Problem areas data
const problemAreas = [
  {
    icon: <Target className="h-8 w-8 text-red-500" />,
    title: "Falta de visión estratégica integral",
    description: "Tu marca, captación y ventas funcionan de manera aislada sin una estrategia que los conecte eficientemente."
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-orange-500" />,
    title: "Inversión dispersa sin ROI claro",
    description: "Inviertes en diferentes canales y herramientas sin una medición clara del retorno de inversión conjunto."
  },
  {
    icon: <Users className="h-8 w-8 text-red-500" />,
    title: "Desconexión entre equipos y objetivos",
    description: "Los equipos de marketing, ventas y servicio al cliente no están alineados con objetivos comunes."
  }
];

// Strategy pillars
const strategyPillars = [
  {
    icon: <Lightbulb className="h-8 w-8 text-estrategia-primary" />,
    title: "Diagnóstico y Auditoría Digital",
    description: "Análisis completo de tu presencia actual: marca, web, captación, conversiones y competencia."
  },
  {
    icon: <Target className="h-8 w-8 text-estrategia-primary" />,
    title: "Estrategia Integral Personalizada",
    description: "Diseñamos una hoja de ruta que alinea branding, marketing digital y objetivos comerciales."
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-estrategia-primary" />,
    title: "Implementación por Fases",
    description: "Ejecutamos la estrategia de forma escalonada, midiendo resultados y ajustando en tiempo real."
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-estrategia-primary" />,
    title: "Medición y Optimización Continua",
    description: "KPIs claros, informes regulares y optimización constante para maximizar el ROI."
  }
];

// Benefits data
const benefits = [
  {
    icon: <CheckCircle className="h-8 w-8 text-estrategia-primary" />,
    title: "Visión estratégica clara",
    description: "Una hoja de ruta definida que conecta todos tus esfuerzos digitales"
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-estrategia-primary" />,
    title: "Crecimiento medible",
    description: "KPIs claros y seguimiento constante del progreso hacia tus objetivos"
  },
  {
    icon: <Target className="h-8 w-8 text-estrategia-primary" />,
    title: "Eficiencia en inversión",
    description: "Optimización de recursos para obtener el máximo ROI en cada canal"
  },
  {
    icon: <Users className="h-8 w-8 text-estrategia-primary" />,
    title: "Equipos alineados",
    description: "Todos los departamentos trabajando hacia objetivos comunes"
  }
];

// FAQ data
const faqData = [
  {
    question: "¿Qué incluye la consultoría estratégica?",
    answer: "Incluye auditoría digital completa, análisis de competencia, diseño de estrategia personalizada, plan de implementación por fases, definición de KPIs y seguimiento mensual durante 6 meses."
  },
  {
    question: "¿Cuánto tiempo toma ver resultados?",
    answer: "Los primeros resultados se ven en 2-3 meses con la implementación de mejoras rápidas. Los resultados significativos se alcanzan entre 6-12 meses dependiendo del sector y objetivos."
  },
  {
    question: "¿Es solo para empresas grandes?",
    answer: "No, adaptamos la estrategia al tamaño y presupuesto de cada empresa. Desde startups hasta empresas consolidadas pueden beneficiarse de una estrategia digital integral."
  },
  {
    question: "¿Incluye la implementación técnica?",
    answer: "Sí, no solo diseñamos la estrategia sino que nos encargamos de su implementación completa: desarrollo web, campañas, automatizaciones, contenidos y formación del equipo."
  }
];

const ActivaTuEstrategiaDigital = () => {
  const seoData = useAdvancedSEO({
    pageContent: "Consultoría estratégica digital integral que alinea branding, marketing y ventas. Desarrollamos estrategias personalizadas para el crecimiento sostenible de tu negocio."
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
                  <BreadcrumbPage>Activa tu Estrategia Digital</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </section>

        {/* Header Navigation */}
        <section className="py-6 bg-gray-50">
          <div className="container mx-auto px-4">
            <Link to="/es#top" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver al Inicio
            </Link>
          </div>
        </section>

        {/* Hero Section */}
        <section className="relative py-16 md:py-20 bg-gradient-to-br from-estrategia-50 to-estrategia-100 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="outline" className="mb-6 text-estrategia-primary border-estrategia-200 bg-white/50">
                  Solución Estrategia Digital Integral
                </Badge>
                <DynamicH1 
                  fallback="Activa tu Estrategia Digital Integral"
                  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                >
                  Activa tu Estrategia Digital Integral
                </DynamicH1>
                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                  Desarrolla una visión estratégica completa que alinee branding, captación y ventas. 
                  Consultoría especializada para empresas que buscan crecimiento sostenible y eficiente.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-estrategia-primary hover:bg-estrategia-primary/90 text-white" asChild>
                     <Link to="/es/agendar-reunion">
                      👉 Solicita tu asesoría estratégica
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <a href="#beneficios">Ver beneficios</a>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-estrategia-200 to-estrategia-300 rounded-3xl transform rotate-6 scale-105 opacity-20"></div>
                <div className="relative z-10 bg-white rounded-3xl p-8 shadow-2xl">
                  <h3 className="text-2xl font-bold mb-4 text-estrategia-primary">Estrategia 360°</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Auditoría digital completa</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Estrategia personalizada</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Implementación guiada</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Seguimiento y optimización</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Areas Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                ¿Te sientes <span className="text-red-500">perdido</span> en el ecosistema digital?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Muchas empresas invierten en marketing digital de forma dispersa, 
                sin una visión estratégica que conecte todos los esfuerzos hacia objetivos claros.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {problemAreas.map((problem, index) => (
                <Card key={index} className="border-l-4 border-l-red-500 hover:shadow-lg transition-all">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 p-3 bg-red-50 rounded-lg">
                        {problem.icon}
                      </div>
                      <div>
                        <CardTitle className="text-xl mb-2">{problem.title}</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{problem.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Strategy Pillars Section */}
        <section className="py-16 bg-gradient-to-br from-estrategia-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Nuestra <span className="text-gradient-primary">Metodología Estratégica</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Un enfoque integral que conecta todos los aspectos de tu presencia digital 
                con una visión estratégica clara y objetivos medibles.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {strategyPillars.map((pillar, index) => (
                <Card key={index} className="border-l-4 border-l-estrategia-primary hover:shadow-lg transition-all">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 p-3 bg-estrategia-100 rounded-lg">
                        {pillar.icon}
                      </div>
                      <div>
                        <CardTitle className="text-xl mb-2">{pillar.title}</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{pillar.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="beneficios" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Transforma tu <span className="text-gradient-primary">Enfoque Digital</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Con una estrategia integral, cada inversión en marketing digital 
                contribuye de forma sinérgica al crecimiento de tu negocio.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center group hover:bg-estrategia-50 rounded-lg p-6 transition-all">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-estrategia-100 rounded-full group-hover:bg-estrategia-200 transition-colors">
                      {benefit.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-estrategia-600 to-estrategia-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Listo para desarrollar tu estrategia digital integral?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Agenda una consulta estratégica gratuita y descubre cómo alinear 
              todos tus esfuerzos digitales hacia el crecimiento sostenible.
            </p>
            <Button size="lg" className="bg-white text-estrategia-600 hover:bg-gray-100" asChild>
              <Link to="/es/agendar-reunion">
                Solicitar Consulta Estratégica Gratuita
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection 
          title="Preguntas frecuentes sobre Estrategia Digital"
          faqs={faqData}
        />

        <KitConsultingBanner />
      </main>
      
      <Footer />
    </div>
  );
};

export default ActivaTuEstrategiaDigital;