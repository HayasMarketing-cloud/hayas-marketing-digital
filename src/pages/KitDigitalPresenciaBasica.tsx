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
  Globe, Server, Palette, Settings, Smartphone, 
  Search, Shield, BarChart3, 
  ArrowRight, CheckCircle, Star, Zap, Users, TrendingUp,
  Euro, FileCheck, Calendar, ExternalLink
} from 'lucide-react';

const services = [
  {
    icon: <Globe className="h-8 w-8 text-hayas-600" />,
    title: "Diseño Web Profesional",
    description: "Diseño responsive adaptado a tu marca con experiencia de usuario optimizada para conversiones."
  },
  {
    icon: <Server className="h-8 w-8 text-turquesa-600" />,
    title: "Dominio y Hosting Incluido",
    description: "Registro de dominio personalizado y alojamiento web optimizado con copias de seguridad automáticas."
  },
  {
    icon: <Palette className="h-8 w-8 text-hayas-600" />,
    title: "Identidad Visual Corporativa",
    description: "Adaptación de tu imagen de marca al entorno digital manteniendo coherencia visual."
  },
  {
    icon: <Settings className="h-8 w-8 text-turquesa-600" />,
    title: "Panel de Administración",
    description: "Gestor de contenido intuitivo para que actualices tu web de forma autónoma."
  },
  {
    icon: <Smartphone className="h-8 w-8 text-hayas-600" />,
    title: "Optimización Móvil",
    description: "Diseño 100% responsive que funciona perfectamente en todos los dispositivos."
  },
  {
    icon: <Search className="h-8 w-8 text-turquesa-600" />,
    title: "SEO Básico Incluido",
    description: "Optimización inicial para buscadores con configuración técnica y contenido optimizado."
  },
  {
    icon: <Shield className="h-8 w-8 text-hayas-600" />,
    title: "Seguridad Web",
    description: "Certificado SSL, protección anti-malware y cumplimiento de normativas de privacidad."
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-turquesa-600" />,
    title: "Analítica Web",
    description: "Configuración de Google Analytics para medir el rendimiento de tu sitio web."
  }
];

const benefits = [
  {
    icon: <Users className="h-6 w-6 text-hayas-600" />,
    title: "Mayor Credibilidad",
    description: "Proyecta profesionalidad y confianza desde el primer momento con una presencia digital sólida."
  },
  {
    icon: <TrendingUp className="h-6 w-6 text-turquesa-600" />,
    title: "Alcance 24/7",
    description: "Tu negocio estará disponible las 24 horas para clientes actuales y potenciales."
  },
  {
    icon: <Search className="h-6 w-6 text-hayas-600" />,
    title: "Visibilidad en Google",
    description: "Aparece en los resultados de búsqueda cuando tus clientes te busquen online."
  },
  {
    icon: <Zap className="h-6 w-6 text-turquesa-600" />,
    title: "Competitividad Digital",
    description: "Mantente competitivo frente a empresas que ya tienen presencia online."
  },
  {
    icon: <CheckCircle className="h-6 w-6 text-hayas-600" />,
    title: "Fácil Gestión",
    description: "Actualiza contenidos, fotos y servicios sin conocimientos técnicos."
  },
  {
    icon: <Euro className="h-6 w-6 text-turquesa-600" />,
    title: "Retorno de Inversión",
    description: "Genera nuevas oportunidades de negocio y aumenta tus ventas online."
  }
];

const processSteps = [
  {
    number: "01",
    title: "Solicitud Kit Digital",
    description: "Te ayudamos con el registro en Acelera pyme y la solicitud del bono digital."
  },
  {
    number: "02", 
    title: "Análisis y Planificación",
    description: "Analizamos tu negocio y definimos la estructura y contenidos de tu web."
  },
  {
    number: "03",
    title: "Diseño y Desarrollo",
    description: "Creamos tu sitio web siguiendo las mejores prácticas de diseño y usabilidad."
  },
  {
    number: "04",
    title: "Lanzamiento y Formación",
    description: "Publicamos tu web y te formamos para que la gestiones de forma autónoma."
  }
];

const faqItems = [
  {
    question: "¿Qué incluye exactamente la solución de Presencia Básica en Internet?",
    answer: "Incluye diseño y desarrollo de sitio web corporativo, registro de dominio, hosting durante 1 año, diseño responsive, SEO básico, certificado SSL, formularios de contacto y panel de administración para gestión autónoma."
  },
  {
    question: "¿Mi empresa puede acceder al Kit Digital para presencia web?",
    answer: "Sí, si eres empresa del Segmento III (0-2 empleados) puedes acceder hasta 3.000€, o si eres comunidad de bienes, sociedad civil o explotación agraria (hasta 50 empleados) hasta 12.000€. Ambas convocatorias están abiertas hasta el 31/10/2025."
  },
  {
    question: "¿Cuánto tiempo tarda en estar lista mi página web?",
    answer: "El desarrollo completo de tu sitio web toma entre 3-5 semanas desde la aprobación del Kit Digital, incluyendo diseño, desarrollo, configuración y formación."
  },
  {
    question: "¿Podré actualizar el contenido de mi web yo mismo?",
    answer: "Sí, incluimos un panel de administración intuitivo y formación personalizada para que puedas actualizar textos, imágenes, servicios y páginas sin conocimientos técnicos."
  },
  {
    question: "¿Qué pasa con mi web cuando termine el primer año de hosting?",
    answer: "Al finalizar el primer año incluido, podrás renovar el hosting y mantenimiento a precio de mercado. Te avisaremos con antelación suficiente para que no haya interrupciones."
  },
  {
    question: "¿La web estará optimizada para móviles y SEO?",
    answer: "Sí, todas nuestras webs tienen diseño responsive (se adaptan a móviles y tablets) y incluyen optimización SEO básica: meta etiquetas, estructura técnica y configuración inicial para aparecer en Google."
  }
];

const KitDigitalPresenciaBasica = () => {
  const seoData = {
    title: "Kit Digital Presencia Básica en Internet - Ayuda hasta 12.000€ | Hayas Marketing",
    description: "Crea tu página web profesional con el Kit Digital 2025. Ayudas hasta 3.000€ para Segmento III y hasta 12.000€ para comunidades de bienes. Solicita tu asesoría gratuita.",
    keywords: "Kit Digital, presencia básica internet, página web, diseño web, ayuda digitalización, bono digital, Segmento III, comunidades bienes",
    canonical: "https://hayasmarketing.com/kit-digital/presencia-basica-internet"
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
            <span className="text-gray-900">Presencia Básica en Internet</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-hayas-50 via-white to-turquesa-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-hayas-100 text-hayas-700 border-hayas-200">
                💻 Kit Digital 2025
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Presencia básica en internet <span className="text-gradient-primary">con el Kit Digital</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Ayuda Kit Digital para crear tu página web profesional y posicionarla en Internet. 
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
                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <span className="text-xs text-gray-500">tunegocio.com</span>
                  </div>
                  <div className="space-y-3">
                    <div className="h-4 bg-hayas-200 rounded w-3/4"></div>
                    <div className="h-4 bg-turquesa-200 rounded w-1/2"></div>
                    <div className="grid grid-cols-2 gap-2 mt-4">
                      <div className="h-16 bg-hayas-100 rounded flex items-center justify-center">
                        <Palette className="h-6 w-6 text-hayas-600" />
                      </div>
                      <div className="h-16 bg-turquesa-100 rounded flex items-center justify-center">
                        <Globe className="h-6 w-6 text-turquesa-600" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Presencia online 24/7</span>
                  <div className="flex items-center gap-1 text-hayas-600">
                    <TrendingUp className="h-4 w-4" />
                    <span className="text-sm font-medium">Kit Digital</span>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-hayas-500 text-white p-3 rounded-full shadow-lg">
                <Globe className="h-6 w-6" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-turquesa-500 text-white p-3 rounded-full shadow-lg">
                <Search className="h-6 w-6" />
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
              El Kit Digital de Presencia Básica en Internet incluye todo lo necesario para 
              establecer tu presencia online profesional.
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
              Una presencia web profesional transformará la percepción de tu negocio y 
              abrirá nuevas oportunidades comerciales.
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
                  <Star className="h-6 w-6 text-white" />
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
              <div className="flex items-start gap-2 md:col-span-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                <span>Estar inscrito en el Censo de empresarios, profesionales y retenedores de la Agencia Tributaria</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <ProcessSection
        title={
          <>
            Pasos para solicitar tu <span className="text-gradient-primary">Kit Digital</span>
          </>
        }
        subtitle="Te acompañamos en todo el proceso de solicitud y desarrollo de tu presencia digital."
        steps={processSteps}
        backgroundColor="bg-gradient-to-br from-gray-50 to-white"
        showIcons={false}
      />

      {/* FAQ */}
      <FAQSection
        title="Preguntas frecuentes sobre <span class='text-gradient-primary'>Presencia Web</span>"
        subtitle="Resolvemos las dudas más comunes sobre el Kit Digital para presencia básica en internet"
        faqs={faqItems}
      />

      {/* Final CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-hayas-500 via-hayas-600 to-turquesa-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              ¿Listo para crear tu presencia digital profesional?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Aprovecha las ayudas del Kit Digital 2025 y da el salto digital que tu negocio necesita.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 font-semibold" asChild>
                <Link to="#contacto">
                  Solicita tu asesoría gratuita
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" className="bg-white/20 text-white border border-white/30 hover:bg-white hover:text-gray-900 font-semibold" asChild>
                <Link to="/agendar-reunion">Agenda tu reunión</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Official Link */}
      <section className="py-8 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-400 mb-2">Información oficial del programa Kit Digital</p>
          <Button variant="link" className="text-white hover:text-gray-300 p-0 h-auto" asChild>
            <a href="https://www.red.es/es/iniciativas/kit-digital" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
              Convocatoria oficial Red.es Kit Digital 2025
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>

      {/* Contact Section */}
      <ServiceContactSection
        formId="ZHNw4rjAzNdvFbFnIk1V"
        title="Solicita tu asesoría gratuita para el Kit Digital"
        subtitle="Te ayudamos con todo el proceso: desde la solicitud del bono hasta el desarrollo de tu presencia digital."
        minHeight={820}
      />

      <Footer />
    </div>
  );
};

export default KitDigitalPresenciaBasica;