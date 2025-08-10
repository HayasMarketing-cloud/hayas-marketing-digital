import { ArrowLeft, Settings, TrendingUp, Zap, BarChart3, Target, Users, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      <Seo
        title="Activa tu estrategia digital | Consultoría, IA y Automatización"
        description="Integramos tecnología, automatización y analítica para escalar tu marketing con una estrategia digital clara."
        canonical="/soluciones/activa-tu-estrategia-digital"
      />
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 pt-8">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-primary transition-colors">Inicio</Link>
          <span>/</span>
          <span className="text-foreground">Activa tu Estrategia Digital</span>
        </div>

        <Button variant="ghost" asChild className="mb-8">
          <Link to="/" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Volver al inicio
          </Link>
        </Button>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <TrendingUp className="h-4 w-4" />
            Estrategia Digital Avanzada
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent mb-6">
            Activa tu Estrategia Digital
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Llevamos tu negocio al siguiente nivel con planificación estratégica, tecnología avanzada y mejora continua. 
            Transformamos tu visión en resultados medibles.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Solicitar Consultoría Gratuita
            </Button>
            <Button variant="outline" size="lg">
              Ver Casos de Éxito
            </Button>
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

      <KitConsultingBanner />

      <Navigation />
      <Footer />
    </div>
  );
};

export default ActivaTuEstrategiaDigital;