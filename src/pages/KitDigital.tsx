import React from 'react';
import { ArrowLeft, Smartphone, Globe, TrendingUp, Users, CheckCircle, Euro, Building2, Award, Target, Calendar, Phone, Mail, Database, MessageCircle, ChevronRight, Bot } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import NativeServiceForm from '@/components/NativeServiceForm';
import FAQSection from '@/components/FAQSection';
import EnhancedSEO from '@/components/EnhancedSEO';
import ProgramTransitionBanner from '@/components/ProgramTransitionBanner';

import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from '@/components/ui/breadcrumb';

const KitDigital = () => {
  const faqs = [
    {
      question: "¿Qué es el Kit Digital para autónomos y pymes?",
      answer: "Es una ayuda económica financiada por la Unión Europea a través de los fondos Next Generation EU, destinada a impulsar la digitalización de autónomos, microempresas y pequeñas empresas en España. Permite acceder a soluciones digitales como páginas web, gestión de redes sociales, ecommerce, etc."
    },
    {
      question: "¿Cuánto dinero es la subvención del kit digital para autónomos y pymes de menos de 3 empleados?",
      answer: "Si eres autónomo (Segmento III: de 0 a menos de 3 empleados), puedes recibir hasta 3.000 €. De estos, 1.000 € están reservados obligatoriamente para \"Puesto de trabajo seguro en internet\", por lo que tendrás disponibles hasta 2.000 € para el resto de soluciones ofrecidas por Hayas Marketing."
    },
    {
      question: "¿Qué requisitos debo cumplir para solicitar el Kit Digital como autónomo?",
      answer: "Debes cumplir los siguientes requisitos: Estar dado de alta como autónomo. Tener una antigüedad mínima (generalmente 6 meses). Estar al corriente de tus obligaciones tributarias y con la Seguridad Social. No estar en situación de crisis económica. No haber superado el límite de ayudas mínimis (200.000 € en 3 años). No tener una orden de recuperación pendiente por ayudas ilegales de la UE."
    },
    {
      question: "¿Qué pasos debo seguir para la solicitud del Kit Digital para autónomos?",
      answer: "El proceso es sencillo y lo puedes realizar tú mismo o a través de Hayas Marketing: Alta en Acelera Pyme: en https://www.acelerapyme.gob.es/registro-pyme. Hacer el test de diagnóstico de transformación digital. Solicitar la subvención en el portal RED.ES en la página de tu convocatoria. Para los autónomos y empresas que decidan implementar una solución del kit digital con nosotros les ofrecemos la gestión de la solicitud de tu kit digital totalmente gratis. Envíanos un Whatsapp o un formulario de contacto y te ayudamos también con la solicitud."
    },
    {
      question: "¿Puedo usar el bono de autónom@ y el de mi empresa para digitalizar el mismo negocio?",
      answer: "❌ No puedes usar el bono de autónom@ para digitalizar una empresa. Si tienes una empresa constituida, el bono digital debe estar a nombre de la empresa. ✅ Pero sí puedes usar ambos bonos para soluciones distintas, siempre que estén claramente separadas: El bono de la empresa puede aplicarse a la web o al SEO. El bono como autónoma a otras soluciones como factura electrónica u oficina virtual, si se justifican como parte de tu actividad como persona física."
    },
    {
      question: "¿Qué solución del Kit Digital puedo implementar con Hayas Marketing?",
      answer: "Con Hayas Marketing puedes implementar las siguientes soluciones del Kit Digital incluidas en el catálogo oficial: Sitio web y presencia básica en internet - Diseño y desarrollo de una web profesional, optimizada para buscadores y adaptada a móviles. Presencia avanzada en internet (SEO avanzado) - Mejora del posicionamiento web para atraer más visitas cualificadas desde buscadores como Google. Comercio electrónico - Creación de una tienda online con pasarela de pago, gestión de productos y diseño personalizado. Gestión de una red social - Plan de contenidos, publicación periódica, dinamización de perfiles y mejora de la presencia en redes. Gestión de clientes (CRM) - Herramientas para organizar y automatizar relaciones con clientes, mejorar el seguimiento comercial y la fidelización. Marketplace - Asistencia para vender tus productos en plataformas como Amazon, eBay u otras, con gestión de catálogo. Nos encontrarás en el Catálogo de Agentes Digitalizadores del Kit Digital con nuestra razón social: Apps 4 Business SL"
    }
  ];

  const solutions = [
    {
      icon: <Globe className="h-8 w-8 text-hayas-600" />,
      title: "Presencia básica en internet",
      subtitle: "Diseño Página Web o Tienda Online",
      description: "Web profesional o e-commerce completo para que tu negocio tenga presencia digital de calidad.",
      activities: ["Diseño responsive", "Optimización de velocidad", "Integración de pagos", "Panel de administración"],
      funding: "Hasta 2.000 €",
      link: "/es/kit-digital/presencia-basica-internet"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-turquesa-600" />,
      title: "Presencia avanzada en internet",
      subtitle: "Estrategia y optimización SEO",
      description: "Posicionamiento en Google para que tus clientes potenciales te encuentren fácilmente.",
      activities: ["Análisis de palabras clave", "Optimización técnica", "Contenido SEO", "Seguimiento de rankings"],
      funding: "Hasta 2.000 €",
      link: "/es/kit-digital/presencia-avanzada-seo"
    },
    {
      icon: <Smartphone className="h-8 w-8 text-hayas-600" />,
      title: "Gestión de una red social",
      subtitle: "Instagram | Facebook | LinkedIn",
      description: "Estrategia y gestión profesional de tus redes sociales para conectar con tu audiencia.",
      activities: ["Estrategia de contenidos", "Diseño gráfico", "Programación de posts", "Análisis de métricas"],
      funding: "Hasta 2.000 €",
      link: "/es/kit-digital/gestion-red-social"
    },
    {
      icon: <Database className="h-8 w-8 text-turquesa-600" />,
      title: "Gestión de Clientes",
      subtitle: "Estrategia e implementación de CRM",
      description: "Implementación y configuración de CRM profesional para optimizar tus procesos de ventas y marketing.",
      activities: ["Creación de pipeline de ventas", "Configuración email marketing y campañas", "Diseño de funnel de automatización", "Setup CRM (GoHighLevel o HubSpot)"],
      funding: "Hasta 2.000 €",
      link: "/es/kit-digital/gestion-clientes-crm"
    }
  ];

  const benefits = [
    {
      icon: <Target className="h-6 w-6 text-hayas-600" />,
      title: "Estrategia personalizada",
      description: "No solo digitalizamos, estrategizamos"
    },
    {
      icon: <Building2 className="h-6 w-6 text-turquesa-600" />,
      title: "Tecnología + Creatividad",
      description: "Combinamos lo mejor de ambos mundos"
    },
    {
      icon: <Award className="h-6 w-6 text-hayas-600" />,
      title: "Especialistas certificados",
      description: "Equipo especializado en proyectos con propósito"
    },
    {
      icon: <Users className="h-6 w-6 text-turquesa-600" />,
      title: "Acompañamiento completo",
      description: "Lo hacemos contigo, no por ti"
    }
  ];

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
                    <Link to="/es">Inicio</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Kit Digital</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </section>

        {/* Program Transition Banner */}
        <ProgramTransitionBanner programName="Kit Digital" />

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
        <section className="relative py-8 md:py-12 bg-gradient-to-br from-hayas-50 to-turquesa-50 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="outline" className="mb-4 text-hayas-600 border-hayas-200">
                  Kit Digital - Subvención Autónomos y Micropymes
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Digitaliza tu <span className="text-gradient-primary">negocio</span> con el Kit Digital
                </h1>
                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                  Autónomos y micropymes, esta es vuestra oportunidad de crecer con impacto y sin coste. 
                  Subvención directa de hasta 3.000€ para empresas de hasta 2 empleados.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="gradient-primary text-white px-8 py-6 text-lg">
                    Quiero mi bono de 2.000€
                  </Button>
                  <Button variant="outline" className="px-8 py-6 text-lg">
                    Consulta con HAYAS Copilot
                  </Button>
                </div>
                <div className="mt-6 flex items-center gap-4">
                  <Badge className="bg-green-100 text-green-800 text-sm px-3 py-1">
                    <Euro className="h-4 w-4 mr-1" />
                    Hasta 3.000 € en subvención
                  </Badge>
                  <Badge className="bg-blue-100 text-blue-800 text-sm px-3 py-1">
                    <Calendar className="h-4 w-4 mr-1" />
                    Convocatoria abierta
                  </Badge>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-hayas-200 to-turquesa-200 rounded-3xl transform rotate-6 scale-105 opacity-20"></div>
                <div className="relative z-10 bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
                  <img 
                    src="/lovable-uploads/f9d2b651-7c92-42b3-86ce-64e3add924c6.png" 
                    alt="Kit Digital - Programa oficial de digitalización" 
                    className="w-full max-w-md h-auto mx-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What is Kit Digital Section */}
        <section className="py-8 md:py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                ¿Qué es el <span className="text-gradient-primary">Kit Digital</span>?
              </h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                Es una subvención del Gobierno de España para que puedas digitalizar tu negocio con 
                soluciones como una web profesional, tienda online, posicionamiento SEO o gestión de redes sociales.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Eligibility Section */}
        <section className="py-8 md:py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                ¿Quién puede <span className="text-gradient-primary">beneficiarse</span>?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Verifica que cumples con los requisitos para acceder a la subvención Kit Digital.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: <Users className="h-8 w-8 text-hayas-600" />,
                  title: "Autónomos y Micropymes",
                  description: "Hasta 2 empleados (Segmento III)"
                },
                {
                  icon: <Building2 className="h-8 w-8 text-turquesa-600" />,
                  title: "Censado en España",
                  description: "Inscrito en el Censo de empresarios, profesionales y retenedores de la Agencia Tributaria"
                },
                {
                  icon: <CheckCircle className="h-8 w-8 text-hayas-600" />,
                  title: "Al día con obligaciones",
                  description: "Hacienda y Seguridad Social"
                },
                {
                  icon: <Euro className="h-8 w-8 text-turquesa-600" />,
                  title: "Subvención disponible",
                  description: "Hasta 3.000€ por empresa*"
                }
              ].map((requirement, index) => (
                <Card key={index} className="text-center border-none shadow-md hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      {requirement.icon}
                    </div>
                    <CardTitle className="text-lg font-bold">
                      {requirement.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">
                      {requirement.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Nota informativa con asterisco */}
            <div className="mt-12 text-center">
              <p className="text-gray-600 text-sm max-w-4xl mx-auto leading-relaxed">
                *Hayas Marketing te ayuda a gestionar tu bono digital por 3.000€ pero únicamente proporciona las soluciones de marketing digital, branding y visibilidad por 2.000€. La solución de Puesto Seguro en Internet de 1.000€ tiene que solicitarse a empresas fabricantes y/o distribidoras de PC o Portátiles, que estén certificadas por el programa Kit Digital.
              </p>
            </div>
          </div>
        </section>

        {/* Funding Information Section */}
        <section className="py-8 md:py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
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
                    <CheckCircle className="h-6 w-6 text-white" />
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
                  <span>No haber superado el límite de ayudas de minimis</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                  <span>Cumplir requisitos específicos del segmento correspondiente</span>
                </div>
                <div className="flex items-start gap-2 md:col-span-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                  <span>Estar inscrito en el Censo de empresarios, profesionales y retenedores de la Agencia Tributaria</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-8 md:py-12 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Soluciones <span className="text-gradient-primary">Digitales</span> que ofrecemos
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Con Hayas, tu subvención Kit Digital se convierte en una estrategia digital completa 
                que genera resultados reales para tu negocio.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {solutions.map((solution, index) => (
                <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                   <CardHeader>
                     <div className="mb-4 p-3 rounded-lg bg-gray-100 w-fit">
                       {solution.icon}
                     </div>
                     <CardTitle className="text-xl font-bold">
                       {solution.title}
                     </CardTitle>
                     {solution.subtitle && (
                       <p className="text-sm text-gray-600 font-medium mt-1">
                         {solution.subtitle}
                       </p>
                     )}
                     <Badge className="w-fit text-green-800 bg-green-100">
                       {solution.funding}
                     </Badge>
                   </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      {solution.description}
                    </p>
                    <div className="space-y-2 mb-4">
                      <h4 className="font-semibold text-sm">Incluye:</h4>
                      <ul className="space-y-1">
                        {solution.activities.slice(0, 3).map((activity, actIndex) => (
                          <li key={actIndex} className="flex items-start gap-2 text-sm text-gray-600">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            {activity}
                          </li>
                        ))}
                        {solution.activities.length > 3 && (
                          <li className="text-sm text-gray-500">
                            +{solution.activities.length - 3} servicios más
                          </li>
                        )}
                      </ul>
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <Button 
                        asChild 
                        variant="outline" 
                        className="w-full text-hayas-600 border-hayas-200 hover:bg-hayas-50"
                      >
                        <Link to={solution.link}>
                          Ver solución
                          <ChevronRight className="h-4 w-4 ml-1" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-8 md:py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Empieza ahora con <span className="text-gradient-primary">3 pasos simples</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Nos encargamos de todo el proceso, incluyendo el papeleo. 
                Tú solo tienes que enfocarte en hacer crecer tu negocio.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Rellena el formulario",
                  description: "Compártenos los detalles de tu negocio y qué solución digital necesitas."
                },
                {
                  step: "02", 
                  title: "Te llamamos en menos de 24 horas",
                  description: "Nuestro equipo se pone en contacto contigo para definir la estrategia perfecta."
                },
                {
                  step: "03",
                  title: "Nos encargamos de todo",
                  description: "Gestionamos la subvención y ejecutamos tu proyecto digital con acompañamiento completo."
                }
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-hayas-600 to-turquesa text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-8 md:py-12 bg-gradient-to-br from-background via-background/95 to-primary/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Solicita tu <span className="text-gradient-primary">Kit Digital</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Rellena el formulario y nos pondremos en contacto contigo para gestionar tu bono digital 
                y comenzar la transformación de tu negocio.
              </p>
            </div>

            {/* Main grid: Form + Sidebar */}
            <div className="grid lg:grid-cols-3 gap-12 items-start max-w-6xl mx-auto">
              {/* Formulario (col-span-2) */}
              <div className="lg:col-span-2">
                <NativeServiceForm sourcePage="kit-digital" />
              </div>

              {/* Sidebar de contacto directo y SofÍA */}
              <div className="space-y-6">
                {/* Contacto Directo */}
                <div className="bg-card rounded-2xl p-8 shadow-xl border border-border/50">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-hayas-600 to-turquesa-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Mail className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Contacto Directo</h3>
                    <p className="text-muted-foreground mb-6">Envíanos un mensaje por WhatsApp</p>
                    <div>
                      <a
                        href="https://wa.me/34672288182"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:scale-105 w-full"
                      >
                        <MessageCircle className="w-5 h-5" />
                        WhatsApp
                      </a>
                    </div>
                  </div>
                </div>

                {/* SofÍA */}
                <div className="bg-card rounded-2xl p-8 shadow-xl border border-border/50">
                  <div className="text-center">
                    <div className="relative w-20 h-20 mx-auto mb-6">
                      <div className="w-20 h-20 bg-gradient-to-r from-lime-500 to-lime-600 rounded-full flex items-center justify-center relative">
                        <Bot className="w-10 h-10 text-white" />
                        <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white">
                          <div className="absolute inset-0 bg-green-400 rounded-full animate-ping"></div>
                        </div>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">Chatea con SofÍA</h3>
                    <p className="text-muted-foreground mb-6">
                      Nuestra asistente de IA está disponible 24/7 para resolver tus dudas sobre el Kit Digital
                    </p>
                    <button
                      onClick={() => window.dispatchEvent(new CustomEvent('openSofiaChat'))}
                      className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-lime-500 to-lime-600 hover:from-lime-600 hover:to-lime-700 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:scale-105 w-full shadow-md"
                    >
                      <MessageCircle className="w-5 h-5" />
                      Iniciar Conversación
                    </button>
                    <p className="text-xs text-muted-foreground mt-3">Respuesta inmediata • Disponible siempre</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-8 md:py-12 bg-gradient-to-br from-hayas-600 via-hayas-700 to-turquesa-600 text-white relative overflow-hidden">
          {/* Background Pattern for visual interest */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 border border-white/30 rounded-lg transform rotate-12"></div>
            <div className="absolute bottom-10 right-20 w-24 h-24 border border-white/30 rounded-lg transform -rotate-12"></div>
            <div className="absolute top-1/2 right-1/4 w-16 h-16 border border-white/30 rounded-lg transform rotate-45"></div>
          </div>

          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white drop-shadow-lg">
              ¡Convocatoria abierta hasta el 31 de octubre!
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90 drop-shadow-md">
              Plazas limitadas hasta agotar fondos. No dejes pasar esta oportunidad 
              de digitalizar tu negocio sin coste.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-hayas-700 hover:bg-gray-100 hover:text-hayas-800 px-8 py-6 text-lg font-bold shadow-xl">
                Quiero mi bono de 2.000€
              </Button>
              <Button variant="outline" className="border-2 border-white text-white bg-white/10 hover:bg-white hover:text-hayas-700 backdrop-blur-sm px-8 py-6 text-lg font-semibold">
                Más Información
              </Button>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <FAQSection
          title="Preguntas frecuentes sobre el Kit Digital"
          subtitle="Resolvemos las dudas más comunes sobre el programa oficial de digitalización"
          faqs={faqs}
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default KitDigital;