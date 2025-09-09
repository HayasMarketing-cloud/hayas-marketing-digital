import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ProcessSection from '@/components/ProcessSection';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Seo from '@/components/Seo';
import FAQSection from '@/components/FAQSection';
import ServiceContactSection from '@/components/ServiceContactSection';
import { 
  Database, Users, Mail, Settings, 
  BarChart3, Zap, Target, Calendar,
  ArrowRight, CheckCircle, TrendingUp,
  Euro, FileCheck, Bot, Filter
} from 'lucide-react';

const services = [
  {
    icon: <Database className="h-8 w-8 text-hayas-600" />,
    title: "Implementación CRM",
    description: "Instalación y configuración personalizada de sistema CRM adaptado a tu tipo de negocio y procesos."
  },
  {
    icon: <Users className="h-8 w-8 text-turquesa-600" />,
    title: "Gestión de Contactos",
    description: "Organización centralizada de todos tus clientes, leads y prospects con historial completo de interacciones."
  },
  {
    icon: <Mail className="h-8 w-8 text-hayas-600" />,
    title: "Email Marketing Automatizado",
    description: "Creación de campañas automáticas de seguimiento, nurturing y fidelización de clientes."
  },
  {
    icon: <Settings className="h-8 w-8 text-turquesa-600" />,
    title: "Flujos de Trabajo",
    description: "Automatización de procesos comerciales: seguimiento de leads, recordatorios y tareas recurrentes."
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-hayas-600" />,
    title: "Informes y Analytics",
    description: "Dashboards personalizados con métricas clave de ventas, conversión y rendimiento comercial."
  },
  {
    icon: <Target className="h-8 w-8 text-turquesa-600" />,
    title: "Segmentación Avanzada",
    description: "Clasificación inteligente de clientes por comportamiento, preferencias y valor comercial."
  },
  {
    icon: <Calendar className="h-8 w-8 text-hayas-600" />,
    title: "Gestión de Citas",
    description: "Sistema integrado de reservas y calendario para optimizar la gestión de reuniones comerciales."
  },
  {
    icon: <Zap className="h-8 w-8 text-turquesa-600" />,
    title: "Integración Multicanal",
    description: "Conexión con web, redes sociales, teléfono y email para captura automática de leads."
  }
];

const benefits = [
  {
    icon: <Users className="h-6 w-6 text-hayas-600" />,
    title: "Mayor Retención de Clientes",
    description: "Mejora las relaciones con seguimiento personalizado y comunicación más efectiva."
  },
  {
    icon: <TrendingUp className="h-6 w-6 text-turquesa-600" />,
    title: "Aumento de Ventas",
    description: "Optimiza tu proceso comercial y no pierdas oportunidades de venta por falta de seguimiento."
  },
  {
    icon: <Zap className="h-6 w-6 text-hayas-600" />,
    title: "Automatización de Procesos",
    description: "Elimina tareas repetitivas y enfócate en actividades de alto valor añadido."
  },
  {
    icon: <BarChart3 className="h-6 w-6 text-turquesa-600" />,
    title: "Visión 360° del Cliente",
    description: "Accede al historial completo de cada cliente para personalizar tu estrategia comercial."
  },
  {
    icon: <Filter className="h-6 w-6 text-hayas-600" />,
    title: "Segmentación Inteligente",
    description: "Identifica tus mejores clientes y personaliza las comunicaciones según sus necesidades."
  },
  {
    icon: <Bot className="h-6 w-6 text-turquesa-600" />,
    title: "Eficiencia Operativa",
    description: "Reduce el tiempo de gestión administrativa y mejora la productividad del equipo comercial."
  }
];

const processSteps = [
  {
    number: "01",
    title: "Solicitud Kit Digital",
    description: "Te ayudamos con el registro en Acelera pyme y la solicitud del bono para CRM."
  },
  {
    number: "02", 
    title: "Análisis de Necesidades",
    description: "Estudiamos tu proceso comercial actual y definimos los flujos óptimos para tu CRM."
  },
  {
    number: "03",
    title: "Implementación y Configuración",
    description: "Instalamos y personalizamos tu CRM con todos los campos, automatizaciones y integraciones necesarias."
  },
  {
    number: "04",
    title: "Migración y Formación",
    description: "Migramos tus datos actuales y formamos a tu equipo para aprovechar al máximo el sistema."
  }
];

const faqItems = [
  {
    question: "¿Qué CRM incluye la solución Kit Digital de Gestión de Clientes?",
    answer: "Implementamos CRMs profesionales como HubSpot (para empresas medianas) o GoHighLevel (para pequeños negocios), dependiendo de tus necesidades específicas. Ambos incluyen gestión de contactos, automatizaciones, email marketing y reporting avanzado."
  },
  {
    question: "¿Mi empresa puede acceder al Kit Digital para CRM?",
    answer: "Sí, si eres empresa del Segmento III (0-2 empleados) puedes acceder hasta 3.000€, o si eres comunidad de bienes, sociedad civil o explotación agraria (hasta 50 empleados) hasta 12.000€. Ambas convocatorias están abiertas hasta el 31/10/2025."
  },
  {
    question: "¿Cuánto tiempo tarda la implementación completa del CRM?",
    answer: "La implementación completa del CRM toma entre 2-4 semanas desde la aprobación del Kit Digital, incluyendo configuración, migración de datos, automatizaciones y formación del equipo."
  },
  {
    question: "¿Pueden migrar mis datos de clientes actuales al nuevo CRM?",
    answer: "Sí, incluimos la migración completa de tus datos desde Excel, otras herramientas CRM o sistemas que tengas actualmente. Garantizamos que no se pierda información y que todo esté correctamente organizado."
  },
  {
    question: "¿El CRM se integra con mi página web y redes sociales?",
    answer: "Sí, configuramos todas las integraciones necesarias: formularios web, redes sociales, email, teléfono y cualquier herramienta que uses actualmente en tu negocio para capturar y gestionar leads automáticamente."
  },
  {
    question: "¿Qué formación incluye para usar el CRM?",
    answer: "Incluimos formación completa personalizada para tu equipo: uso diario del CRM, creación de campañas, interpretación de informes, gestión de automatizaciones y mejores prácticas para maximizar resultados comerciales."
  },
  {
    question: "¿Qué soporte tengo después de la implementación?",
    answer: "Ofrecemos soporte técnico continuo, actualizaciones del sistema, resolución de incidencias y consultoría estratégica para optimizar continuamente tu proceso comercial y resultados."
  }
];

const KitDigitalGestionClientes = () => {
  const seoData = {
    title: "Kit Digital Gestión de Clientes CRM - Ayuda hasta 12.000€ | Hayas Marketing",
    description: "Implementa tu CRM profesional con el Kit Digital 2025. Ayudas hasta 3.000€ para Segmento III y hasta 12.000€ para comunidades de bienes. Automatiza tu gestión comercial.",
    keywords: "Kit Digital, CRM, gestión clientes, automatización ventas, HubSpot, GoHighLevel, bono digital, Segmento III, comunidades bienes",
    canonical: "https://hayasmarketing.com/kit-digital/gestion-clientes-crm"
  };

  return (
    <div className="min-h-screen bg-white">
      <Seo {...seoData} />
      <Navigation />
      
      {/* Breadcrumb */}
      <div className="bg-muted/30 py-4 mt-20">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-gray-600">
            <Link to="/" className="hover:text-primary">Inicio</Link>
            <span className="mx-2">/</span>
            <Link to="/kit-digital" className="hover:text-primary">Kit Digital</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Gestión de Clientes CRM</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-hayas-50 via-white to-turquesa-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-hayas-100 text-hayas-700 border-hayas-200">
                🎯 Kit Digital CRM
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Gestión de Clientes CRM <span className="text-gradient-primary">con el Kit Digital</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Ayuda Kit Digital para implementar tu CRM y automatizar ventas. 
                Hasta 3.000€ para empresas del Segmento III y hasta 12.000€ para comunidades de bienes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-gradient-to-r from-hayas-500 to-turquesa-500 text-white hover:from-hayas-600 hover:to-turquesa-600" asChild>
                  <Link to="#contacto">
                    Solicita tu asesoría gratuita
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-hayas-200 text-hayas-700 hover:bg-hayas-50" asChild>
                  <Link to="/agendar-reunion">Agenda tu reunión</Link>
                </Button>
              </div>
              
              {/* Funding Info */}
              <div className="bg-white/70 rounded-lg p-4 border border-hayas-100">
                <div className="flex items-center gap-3 mb-2">
                  <Euro className="h-5 w-5 text-hayas-600" />
                  <span className="font-semibold text-hayas-800">Convocatorias 2025 abiertas</span>
                </div>
                <div className="text-sm text-gray-600 space-y-1">
                  <div>• Segmento III (0-2 empleados): hasta <strong>3.000€</strong></div>
                  <div>• Comunidades de bienes: hasta <strong>12.000€</strong></div>
                  <div className="text-xs text-gray-500 mt-2">Plazo: hasta 31/10/2025</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                <div className="bg-gradient-to-br from-hayas-50 to-turquesa-50 rounded-lg p-6 mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-gray-800">Panel CRM</h3>
                    <Badge className="bg-hayas-500 text-white">En vivo</Badge>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-hayas-200 rounded-full flex items-center justify-center">
                        <Users className="h-4 w-4 text-hayas-600" />
                      </div>
                      <div className="flex-1">
                        <div className="h-2 bg-hayas-200 rounded w-3/4"></div>
                        <div className="h-2 bg-turquesa-200 rounded w-1/2 mt-1"></div>
                      </div>
                      <Badge variant="outline" className="text-xs">Caliente</Badge>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-turquesa-200 rounded-full flex items-center justify-center">
                        <Target className="h-4 w-4 text-turquesa-600" />
                      </div>
                      <div className="flex-1">
                        <div className="h-2 bg-turquesa-200 rounded w-2/3"></div>
                        <div className="h-2 bg-hayas-200 rounded w-1/3 mt-1"></div>
                      </div>
                      <Badge variant="outline" className="text-xs">Seguimiento</Badge>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Gestión automatizada</span>
                  <div className="flex items-center gap-1 text-hayas-600">
                    <TrendingUp className="h-4 w-4" />
                    <span className="text-sm font-medium">+180% eficiencia</span>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-hayas-500 text-white p-3 rounded-full shadow-lg">
                <Database className="h-6 w-6" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-turquesa-500 text-white p-3 rounded-full shadow-lg">
                <BarChart3 className="h-6 w-6" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What it includes */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ¿En qué <span className="text-gradient-primary">consiste?</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              El Kit Digital de Gestión de Clientes incluye la implementación completa de un CRM 
              profesional con todas las automatizaciones necesarias para optimizar tu proceso comercial.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
                <CardHeader className="pb-4">
                  <div className="mb-4 p-3 rounded-lg bg-gradient-to-br from-hayas-50 to-turquesa-50 w-fit">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-hayas-50 to-turquesa-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Beneficios para <span className="text-gradient-primary">tu negocio</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Un CRM profesional transformará tu gestión comercial, mejorará las relaciones con clientes 
              y aumentará significativamente tus ventas.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex gap-4 p-6 bg-white rounded-xl shadow-md border border-gray-100">
                <div className="p-3 rounded-lg bg-gradient-to-br from-hayas-100 to-turquesa-100 shrink-0">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Funding Information */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Convocatorias vigentes y <span className="text-gradient-primary">cuantía</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-6 border-hayas-200 bg-gradient-to-br from-hayas-50 to-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-hayas-500 rounded-lg">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">Segmento III</h3>
              </div>
              <p className="text-gray-600 mb-4">Empresas de 0 a 2 empleados</p>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span>Bono disponible:</span>
                  <span className="font-bold text-hayas-600">3.000€</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Plazo solicitud:</span>
                  <span className="font-medium">Hasta 31/10/2025</span>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-turquesa-200 bg-gradient-to-br from-turquesa-50 to-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-turquesa-500 rounded-lg">
                  <Database className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">Comunidades de Bienes</h3>
              </div>
              <p className="text-gray-600 mb-4">Sociedades civiles, explotaciones agrarias (hasta 50 empleados)</p>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span>Bono disponible:</span>
                  <span className="font-bold text-turquesa-600">Hasta 12.000€</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Plazo solicitud:</span>
                  <span className="font-medium">Hasta 31/10/2025</span>
                </div>
              </div>
            </Card>
          </div>

          <div className="bg-gray-50 rounded-xl p-6">
            <h4 className="font-bold mb-4">Requisitos generales:</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                <span>Estar al corriente de obligaciones tributarias y de Seguridad Social</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                <span>No estar en situación de crisis</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                <span>No haber superado el límite de ayudas de mínimis</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                <span>Cumplir requisitos específicos del segmento correspondiente</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <ProcessSection
        title={
          <>
            Pasos para solicitar tu <span className="text-gradient-primary">Kit Digital CRM</span>
          </>
        }
        subtitle="Te acompañamos en todo el proceso de solicitud e implementación de tu sistema de gestión de clientes."
        steps={processSteps}
        backgroundColor="bg-gradient-to-br from-gray-50 to-white"
        showIcons={false}
      />

      {/* FAQ */}
      <FAQSection
        title="Preguntas frecuentes sobre <span class='text-gradient-primary'>CRM Kit Digital</span>"
        subtitle="Resolvemos las dudas más comunes sobre la implementación de CRM con el Kit Digital"
        faqs={faqItems}
      />

      {/* Final CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-hayas-500 via-hayas-600 to-turquesa-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              ¿Listo para optimizar tu gestión comercial?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Aprovecha las ayudas del Kit Digital 2025 e implementa un CRM que transformará tu negocio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-hayas-600 hover:bg-gray-100" asChild>
                <Link to="#contacto">
                  Solicita tu asesoría gratuita
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                <Link to="/agendar-reunion">Agenda tu reunión</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ServiceContactSection
        formId="ZHNw4rjAzNdvFbFnIk1V"
        title="Solicita tu asesoría gratuita para CRM Kit Digital"
        subtitle="Te ayudamos con todo el proceso: desde la solicitud del bono hasta la implementación completa de tu CRM."
        minHeight={820}
      />

      <Footer />
    </div>
  );
};

export default KitDigitalGestionClientes;