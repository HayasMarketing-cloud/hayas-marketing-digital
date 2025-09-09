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
  Search, TrendingUp, FileText, Target, 
  BarChart3, Zap, Globe, Settings,
  ArrowRight, CheckCircle, Eye,
  Euro, Hash, Brain, Link as LinkIcon
} from 'lucide-react';

const services = [
  {
    icon: <Search className="h-8 w-8 text-hayas-600" />,
    title: "Investigación de Palabras Clave",
    description: "Análisis exhaustivo de keywords relevantes para tu sector con potencial de conversión y volumen de búsqueda."
  },
  {
    icon: <FileText className="h-8 w-8 text-turquesa-600" />,
    title: "Optimización On-Page",
    description: "Mejora técnica de títulos, meta descriptions, estructura HTML y velocidad de carga para mejor posicionamiento."
  },
  {
    icon: <Brain className="h-8 w-8 text-hayas-600" />,
    title: "Contenido SEO Optimizado",
    description: "Creación de contenido de calidad orientado a palabras clave estratégicas que generen tráfico cualificado."
  },
  {
    icon: <Target className="h-8 w-8 text-turquesa-600" />,
    title: "Estrategia de Enlaces",
    description: "Construcción de autoridad web mediante estrategia de link building y optimización de enlaces internos."
  },
  {
    icon: <Settings className="h-8 w-8 text-hayas-600" />,
    title: "SEO Técnico Avanzado",
    description: "Optimización de Core Web Vitals, marcado Schema, sitemap XML y configuración técnica para buscadores."
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-turquesa-600" />,
    title: "Monitorización y Reporting",
    description: "Seguimiento de posicionamiento, tráfico orgánico y conversiones con informes detallados mensualmente."
  },
  {
    icon: <Globe className="h-8 w-8 text-hayas-600" />,
    title: "SEO Local",
    description: "Optimización para búsquedas locales, Google My Business y directorios para negocios con ubicación física."
  },
  {
    icon: <Zap className="h-8 w-8 text-turquesa-600" />,
    title: "Optimización de Conversión",
    description: "Mejora de elementos web para convertir el tráfico SEO en leads y ventas reales para tu negocio."
  }
];

const benefits = [
  {
    icon: <Eye className="h-6 w-6 text-hayas-600" />,
    title: "Visibilidad en Google",
    description: "Aparece en las primeras posiciones cuando tus clientes potenciales busquen tus servicios."
  },
  {
    icon: <TrendingUp className="h-6 w-6 text-turquesa-600" />,
    title: "Tráfico Cualificado",
    description: "Atrae visitantes realmente interesados en tus productos o servicios, no solo tráfico genérico."
  },
  {
    icon: <Target className="h-6 w-6 text-hayas-600" />,
    title: "Ventaja Competitiva",
    description: "Supera a tu competencia en los resultados de búsqueda y captura más oportunidades de negocio."
  },
  {
    icon: <BarChart3 className="h-6 w-6 text-turquesa-600" />,
    title: "ROI Sostenible",
    description: "El SEO genera resultados a largo plazo con una inversión más rentable que la publicidad de pago."
  },
  {
    icon: <CheckCircle className="h-6 w-6 text-hayas-600" />,
    title: "Autoridad de Marca",
    description: "Posicionarte en las primeras posiciones genera confianza y credibilidad ante tu audiencia."
  },
  {
    icon: <Zap className="h-6 w-6 text-turquesa-600" />,
    title: "Crecimiento Escalable",
    description: "Cada mejora SEO potencia el rendimiento global de tu presencia digital a largo plazo."
  }
];

const processSteps = [
  {
    number: "01",
    title: "Solicitud Kit Digital",
    description: "Te ayudamos con el registro en Acelera pyme y la solicitud del bono para SEO avanzado."
  },
  {
    number: "02", 
    title: "Auditoría SEO Completa",
    description: "Analizamos tu situación actual, competencia y definimos la estrategia de posicionamiento óptima."
  },
  {
    number: "03",
    title: "Implementación SEO",
    description: "Ejecutamos todas las mejoras técnicas, de contenido y optimizaciones identificadas en la auditoría."
  },
  {
    number: "04",
    title: "Monitorización y Mejora",
    description: "Seguimiento continuo de posiciones y rendimiento con optimizaciones constantes para maximizar resultados."
  }
];

const faqItems = [
  {
    question: "¿En qué se diferencia el SEO avanzado de la optimización básica?",
    answer: "El SEO avanzado incluye investigación exhaustiva de keywords, optimización técnica profunda, creación de contenido estratégico, link building, SEO local y análisis competitivo. Va mucho más allá de los aspectos básicos técnicos."
  },
  {
    question: "¿Mi empresa puede acceder al Kit Digital para SEO avanzado?",
    answer: "Sí, si eres empresa del Segmento III (0-2 empleados) puedes acceder hasta 3.000€, o si eres comunidad de bienes, sociedad civil o explotación agraria (hasta 50 empleados) hasta 12.000€. Ambas convocatorias están abiertas hasta el 31/10/2025."
  },
  {
    question: "¿Cuánto tiempo tardan en verse los resultados SEO?",
    answer: "Los primeros resultados SEO suelen verse entre 3-6 meses, aunque algunas mejoras técnicas pueden tener efecto más rápido. El SEO es una estrategia a medio-largo plazo que genera resultados sostenibles y crecientes."
  },
  {
    question: "¿Garantizan posicionamiento en primera página de Google?",
    answer: "No se pueden garantizar posiciones específicas ya que Google cambia constantemente su algoritmo. Sin embargo, aplicamos las mejores prácticas SEO probadas y trabajamos para conseguir el mejor posicionamiento posible para tus keywords objetivo."
  },
  {
    question: "¿Crean contenido nuevo para SEO o solo optimizan el existente?",
    answer: "Realizamos ambas acciones: optimizamos el contenido existente y creamos contenido nuevo estratégico según la investigación de keywords y las necesidades de tu sector para maximizar el posicionamiento."
  },
  {
    question: "¿El SEO local está incluido si tengo un negocio físico?",
    answer: "Sí, incluimos optimización SEO local completa: Google My Business, citaciones locales, reviews, optimización para búsquedas 'cerca de mí' y todo lo necesario para dominar las búsquedas locales de tu sector."
  },
  {
    question: "¿Qué informes recibo sobre el progreso SEO?",
    answer: "Recibes informes mensuales detallados con evolución de posicionamiento, tráfico orgánico, conversiones, análisis competitivo y recomendaciones de mejora. Todo presentado de forma clara y comprensible."
  }
];

const KitDigitalPresenciaAvanzada = () => {
  const seoData = {
    title: "Kit Digital Presencia Avanzada SEO - Ayuda hasta 12.000€ | Hayas Marketing",
    description: "Optimiza tu posicionamiento SEO con el Kit Digital 2025. Ayudas hasta 3.000€ para Segmento III y hasta 12.000€ para comunidades de bienes. Domina Google con SEO profesional.",
    keywords: "Kit Digital, SEO avanzado, posicionamiento Google, optimización SEO, presencia avanzada internet, bono digital, Segmento III, comunidades bienes",
    canonical: "https://hayasmarketing.com/kit-digital/presencia-avanzada-seo"
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
            <span className="text-gray-900">Presencia Avanzada SEO</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-hayas-50 via-white to-turquesa-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-hayas-100 text-hayas-700 border-hayas-200">
                🚀 Kit Digital SEO
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Presencia avanzada en internet <span className="text-gradient-primary">con el Kit Digital</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Ayuda Kit Digital para optimizar tu posicionamiento SEO. 
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
                    <h3 className="font-semibold text-gray-800">Ranking SEO</h3>
                    <Badge className="bg-green-500 text-white">Top 3</Badge>
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Keyword principal</span>
                        <span className="text-green-600 font-medium">#1</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded">
                        <div className="h-2 bg-gradient-to-r from-hayas-500 to-turquesa-500 rounded w-full"></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Keywords secundarias</span>
                        <span className="text-hayas-600 font-medium">#2-3</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded">
                        <div className="h-2 bg-gradient-to-r from-turquesa-500 to-hayas-500 rounded w-4/5"></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Long tail keywords</span>
                        <span className="text-turquesa-600 font-medium">Top 10</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded">
                        <div className="h-2 bg-turquesa-500 rounded w-3/5"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Tráfico orgánico</span>
                  <div className="flex items-center gap-1 text-hayas-600">
                    <TrendingUp className="h-4 w-4" />
                    <span className="text-sm font-medium">+340%</span>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-hayas-500 text-white p-3 rounded-full shadow-lg">
                <Search className="h-6 w-6" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-turquesa-500 text-white p-3 rounded-full shadow-lg">
                <Hash className="h-6 w-6" />
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
              El Kit Digital de Presencia Avanzada incluye estrategia SEO completa para posicionar 
              tu negocio en las primeras posiciones de Google de forma sostenible.
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
              Una estrategia SEO avanzada te posicionará por encima de tu competencia y generará 
              tráfico cualificado de forma constante y creciente.
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
                  <Search className="h-6 w-6 text-white" />
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
                  <Globe className="h-6 w-6 text-white" />
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
            Pasos para solicitar tu <span className="text-gradient-primary">Kit Digital SEO</span>
          </>
        }
        subtitle="Te acompañamos en todo el proceso de solicitud y optimización SEO avanzada de tu presencia digital."
        steps={processSteps}
        backgroundColor="bg-gradient-to-br from-gray-50 to-white"
        showIcons={false}
      />

      {/* FAQ */}
      <FAQSection
        title="Preguntas frecuentes sobre <span class='text-gradient-primary'>SEO Avanzado Kit Digital</span>"
        subtitle="Resolvemos las dudas más comunes sobre la optimización SEO avanzada con el Kit Digital"
        faqs={faqItems}
      />

      {/* Final CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-hayas-500 via-hayas-600 to-turquesa-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              ¿Listo para dominar Google con SEO profesional?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Aprovecha las ayudas del Kit Digital 2025 y posiciona tu negocio en las primeras posiciones.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 font-semibold" asChild>
                <Link to="#contacto">
                  Solicita tu asesoría gratuita
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-semibold" asChild>
                <Link to="/agendar-reunion">Agenda tu reunión</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ServiceContactSection
        formId="ZHNw4rjAzNdvFbFnIk1V"
        title="Solicita tu asesoría gratuita para SEO Avanzado Kit Digital"
        subtitle="Te ayudamos con todo el proceso: desde la solicitud del bono hasta la optimización completa de tu posicionamiento SEO."
        minHeight={820}
      />

      <Footer />
    </div>
  );
};

export default KitDigitalPresenciaAvanzada;