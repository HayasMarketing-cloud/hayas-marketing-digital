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

const ActivaTuEstrategiaDigital = () => {
  const services = [
    {
      icon: Target,
      title: "Consultoría Estratégica Digital",
      description: "Análisis completo de tu situación actual y diseño de una hoja de ruta personalizada para el crecimiento digital de tu negocio."
    },
    {
      icon: Settings,
      title: "Automatización de Procesos",
      description: "Implementamos sistemas que automatizan tareas repetitivas, optimizan workflows y liberan tiempo para actividades estratégicas."
    },
    {
      icon: BarChart3,
      title: "Analítica e Informes Avanzados",
      description: "Dashboards personalizados y reportes que te ayudan a tomar decisiones basadas en datos reales y métricas relevantes."
    },
    {
      icon: Zap,
      title: "Integración Tecnológica",
      description: "Conectamos todas tus herramientas digitales para crear un ecosistema tecnológico cohesivo y eficiente."
    }
  ];

  const benefits = [
    "Estrategia digital clara y medible",
    "Procesos automatizados que ahorran tiempo",
    "Datos organizados y actionables",
    "Tecnología al servicio de tus objetivos",
    "Escalabilidad para el crecimiento",
    "ROI medible en cada acción"
  ];

  const processSteps = [
    {
      step: "01",
      title: "Auditoría Digital",
      description: "Analizamos tu situación actual, herramientas existentes y oportunidades de mejora."
    },
    {
      step: "02", 
      title: "Diseño de Estrategia",
      description: "Creamos un plan personalizado con objetivos claros, métricas y cronograma de implementación."
    },
    {
      step: "03",
      title: "Implementación",
      description: "Ejecutamos la estrategia paso a paso, integrando tecnologías y automatizaciones necesarias."
    },
    {
      step: "04",
      title: "Optimización Continua",
      description: "Monitoreamos resultados, ajustamos estrategias y optimizamos el rendimiento constantemente."
    }
  ];

  return (
    <div id="top" className="min-h-screen bg-white">
      <Seo
        title="Activa tu estrategia digital | Plan claro y medible"
        description="Convierte ideas en resultados con una estrategia a medida que integra Ads, contenidos, SEO y analítica para crecimiento constante y medible."
        canonical="/soluciones/activa-tu-estrategia-digital"
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
            name: "Consultoría de Estrategia Digital",
            serviceType: "Digital Strategy Consulting",
            provider: { "@type": "Organization", name: "Hayas Marketing", url: window.location.origin, logo: `${window.location.origin}/favicon.ico` },
            url: `${window.location.origin}/soluciones/activa-tu-estrategia-digital`,
            areaServed: "España",
            description: "Estrategias a medida que integran Ads, contenidos, SEO y analítica para crecimiento constante y medible.",
          },
          {
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: "Cómo activar tu estrategia digital",
            step: processSteps.map((s) => ({ "@type": "HowToStep", name: s.title, text: s.description })),
          },
        ]}
      />
      <Navigation />

      <main className="pt-56">
        {/* Breadcrumbs */}
        <section className="py-4 bg-gray-50 border-b">
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
                  <BreadcrumbPage>Activa tu Estrategia Digital</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </section>

        {/* Header Navigation */}
        <section className="py-6 bg-gray-50">
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
                  Estrategia Digital a Medida
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Activa tu <span className="text-gradient-primary">Estrategia Digital</span>
                </h1>
                <p className="text-xl text-gray-700 mb-8 leading-relaxed font-medium">
                  Convierte tus ideas en resultados con un plan claro, medible y adaptable. Integramos creatividad, datos y ejecución ágil en todos los canales: Google Ads y Meta Ads, contenidos, SEO estratégico y analítica avanzada, para un crecimiento constante y medible.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/?scrollTo=contacto">
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
                  alt="Estrategia digital con tecnología y analítica" 
                  className="relative z-10 w-full h-auto rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

      {/* Services Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nuestros Servicios Estratégicos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluciones integrales para activar y potenciar tu presencia digital con resultados medibles
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-primary/20">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nuestro Proceso Estratégico
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Metodología probada para transformar tu visión digital en resultados tangibles
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {processSteps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                {step.step}
              </div>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-card rounded-2xl p-8 md:p-12 border border-primary/20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                ¿Por qué elegir nuestra estrategia digital?
              </h2>
              <p className="text-lg text-muted-foreground">
                Resultados reales que transforman tu negocio y aceleran tu crecimiento
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
              ¿Listo para activar tu estrategia digital?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Agenda una consultoría gratuita y descubre cómo podemos transformar tu negocio con una estrategia digital clara y resultados medibles.
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

        <KitConsultingBanner />
        <Footer />
    </div>
  );
};

export default ActivaTuEstrategiaDigital;