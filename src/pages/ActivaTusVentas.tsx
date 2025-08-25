import { ArrowLeft, Settings, TrendingUp, Zap, BarChart3, Target, Users, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import Seo from '@/components/Seo';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import KitConsultingBanner from '@/components/KitConsultingBanner';
import PillarServicesSection from '@/components/PillarServicesSection';

const ActivaTusVentas = () => {
  const services = [
    {
      icon: Target,
      title: "Publicidad Google Ads",
      description: "Campañas SEM optimizadas para generar leads cualificados y maximizar el ROI de cada click con segmentación avanzada."
    },
    {
      icon: Settings,
      title: "Publicidad en Redes Sociales",
      description: "Campañas publicitarias rentables en Facebook, Instagram y LinkedIn que convierten audiencias en clientes reales."
    },
    {
      icon: BarChart3,
      title: "Consultoría Estratégica de Ventas",
      description: "Análisis de tu funnel de ventas, optimización de procesos comerciales y estrategias para acelerar la conversión."
    },
    {
      icon: Zap,
      title: "Automatización de Procesos de Ventas",
      description: "Implementamos sistemas que automatizan tu pipeline, lead scoring y seguimiento para acelerar el cierre de ventas."
    },
    {
      icon: Users,
      title: "Email Marketing y Automatizaciones",
      description: "Workflows inteligentes conectados a tu CRM que nutren leads y convierten prospectos en clientes recurrentes."
    }
  ];

  const benefits = [
    "Conversión de tráfico en ventas reales",
    "Automatización del proceso comercial",
    "Optimización del ROI publicitario",
    "Lead scoring y seguimiento inteligente",
    "Escalabilidad del crecimiento de ventas",
    "Métricas de conversión medibles"
  ];

  const processSteps = [
    {
      step: "01",
      title: "Análisis del Funnel de Ventas",
      description: "Evaluamos tu proceso comercial actual, identificamos cuellos de botella y oportunidades de optimización."
    },
    {
      step: "02", 
      title: "Estrategia de Conversión",
      description: "Diseñamos campañas publicitarias y automatizaciones enfocadas en convertir leads en clientes."
    },
    {
      step: "03",
      title: "Implementación y Automatización",
      description: "Ejecutamos las campañas y configuramos sistemas de automatización para optimizar el proceso de ventas."
    },
    {
      step: "04",
      title: "Optimización de Resultados",
      description: "Monitoreamos la conversión, ajustamos campañas y optimizamos el rendimiento comercial constantemente."
    }
  ];

  return (
    <div id="top" className="min-h-screen bg-white">
      <Seo
        title="Activa tus Ventas | Convierte tráfico en clientes"
        description="Transforma leads en ventas con estrategias probadas: Google Ads, publicidad social, automatización y consultoría estratégica de ventas."
        canonical="/soluciones/activa-tus-ventas"
        structuredData={[
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Hayas Marketing",
            url: window.location.origin,
            logo: `${window.location.origin}/favicon.ico`,
          },
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Activación de Ventas",
            serviceType: "Sales Conversion Consulting",
            provider: { "@type": "Organization", name: "Hayas Marketing", url: window.location.origin, logo: `${window.location.origin}/favicon.ico` },
            url: `${window.location.origin}/soluciones/activa-tus-ventas`,
            areaServed: "España",
            description: "Estrategias de conversión que transforman leads en ventas: Google Ads, publicidad social, automatización y consultoría estratégica.",
          },
          {
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: "Cómo activar tus ventas",
            step: processSteps.map((s) => ({ "@type": "HowToStep", name: s.title, text: s.description })),
          },
        ]}
      />
      <Navigation />

      <main>
        {/* Breadcrumbs */}
        <section className="py-4 bg-muted/30">
          <div className="container mx-auto px-4">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/">Inicio</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Activa tus Ventas</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </section>

        {/* Header Navigation */}
        <section className="py-6 bg-muted/30">
          <div className="container mx-auto px-4">
            <Link to="/#top" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver al Inicio
            </Link>
          </div>
        </section>

        {/* Hero Section */}
        <section className="relative py-8 md:py-12 bg-gradient-to-br from-hayas-50 to-hayas-100 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="outline" className="mb-4 text-hayas-600 border-hayas-200">
                  Estrategias de Conversión de Ventas
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Activa tus <span className="text-gradient-primary">Ventas</span>
                </h1>
                <p className="text-xl text-gray-700 mb-8 leading-relaxed font-medium">
                  Convierte el tráfico en clientes y escala tus ventas con estrategias probadas de conversión y automatización. Implementamos sistemas que transforman leads en ventas recurrentes y optimizan cada punto de contacto del customer journey.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/agendar-reunion">
                    <Button className="gradient-primary text-white px-8 py-6 text-lg w-full sm:w-auto">
                      Solicitar Consultoría Gratuita
                    </Button>
                  </Link>
                  <a href="#casos-exito">
                    <Button variant="outline" className="px-8 py-6 text-lg">
                      Ver Casos de Éxito
                    </Button>
                  </a>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-hayas-200 to-hayas-300 rounded-3xl transform rotate-6 scale-105 opacity-20"></div>
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop" 
                  alt="Activación de ventas con estrategias digitales" 
                  className="relative z-10 w-full h-auto rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Value Proposition Section */}
        <section className="py-8 md:py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-hayas-100 to-secondary/20 rounded-2xl transform rotate-3"></div>
                  <img 
                    src="/activa-ventas-conversion-dashboard.jpg" 
                    alt="Dashboard de conversión y métricas de ventas" 
                    className="relative z-10 w-full h-auto rounded-2xl shadow-xl"
                  />
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <Badge variant="outline" className="mb-4 text-hayas-600 border-hayas-200">
                  Estrategia Integrada
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                  Una <span className="text-gradient-primary">máquina de conversión</span> que transforma leads en ventas
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  La activación efectiva de ventas requiere una estrategia integral que conecte cada touchpoint 
                  del customer journey. Transformamos tu proceso comercial en un sistema optimizado que convierte 
                  cada lead en una oportunidad real de venta y maximiza el retorno de tu inversión publicitaria.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-hayas-100 rounded-lg flex items-center justify-center">
                      <Target className="h-6 w-6 text-hayas-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Conversión Optimizada</h3>
                      <p className="text-gray-600">
                        Diseñamos campañas publicitarias altamente segmentadas que atraen leads cualificados 
                        y los guían a través de un funnel optimizado para la conversión.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                      <Zap className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Seguimiento Automatizado</h3>
                      <p className="text-gray-600">
                        Implementamos sistemas de lead scoring y workflows automatizados que nutren 
                        cada prospecto hasta convertirlo en cliente, sin perder oportunidades.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-hayas-100 rounded-lg flex items-center justify-center">
                      <BarChart3 className="h-6 w-6 text-hayas-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">ROI Medible</h3>
                      <p className="text-gray-600">
                        Rastreamos cada euro invertido desde la primera impresión hasta la venta final, 
                        optimizando constantemente para maximizar tu retorno publicitario.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      {/* Nuestros Servicios Section */}
      <PillarServicesSection
        pillar="activa"
        title="Nuestros Servicios de Activación de Ventas"
        description="Descubre todos los servicios profesionales para activar tus ventas y convertir leads en clientes."
        accentColor="activa"
      />

      {/* Process Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nuestro Proceso de Activación de Ventas
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Metodología probada para transformar tu proceso comercial en una máquina de generar ventas
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-primary to-primary opacity-20"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 relative z-10 shadow-lg">
                  {step.step}
                </div>
                {/* Connection indicator for mobile */}
                {index < processSteps.length - 1 && (
                  <div className="lg:hidden flex justify-center mt-4">
                    <div className="w-px h-8 bg-gradient-to-b from-primary to-primary/20"></div>
                  </div>
                )}
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kit Consulting Banner */}
      <KitConsultingBanner />

      {/* Benefits Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-card rounded-2xl p-8 md:p-12 border border-primary/20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                ¿Por qué elegir nuestras estrategias de activación de ventas?
              </h2>
              <p className="text-lg text-muted-foreground">
                Resultados reales que transforman tu proceso comercial y aceleran el crecimiento
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 md:p-12 text-center text-primary-foreground">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Listo para activar tus ventas?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Agenda una consultoría gratuita y descubre cómo podemos transformar tu proceso comercial con estrategias que convierten leads en ventas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                Consultoría Gratuita
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Llamar Ahora
              </Button>
            </div>
          </div>
        </div>
      </section>

        </main>

        <Footer />
    </div>
  );
};

export default ActivaTusVentas;