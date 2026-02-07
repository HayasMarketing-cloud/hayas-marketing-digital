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
import ProgramTransitionBanner from '@/components/ProgramTransitionBanner';
import { useLocalizedRoutes } from '@/hooks/useLocalizedRoutes';
import { 
  Share2, Camera, Target, BarChart3, 
  Users, Calendar, Megaphone, Shield,
  ArrowRight, CheckCircle, TrendingUp,
  Euro, Hash, Eye, Heart, MessageCircle
} from 'lucide-react';

const services = [
  {
    icon: <Share2 className="h-8 w-8 text-hayas-600" />,
    title: "Estrategia de Redes Sociales",
    description: "Desarrollo de estrategia integral adaptada a tu sector y objetivos comerciales específicos."
  },
  {
    icon: <Camera className="h-8 w-8 text-turquesa-600" />,
    title: "Creación de Contenido",
    description: "Producción de contenido visual y textual atractivo y coherente con tu identidad de marca."
  },
  {
    icon: <Calendar className="h-8 w-8 text-hayas-600" />,
    title: "Planificación y Programación",
    description: "Calendario editorial estratégico con publicaciones programadas en horarios óptimos."
  },
  {
    icon: <Target className="h-8 w-8 text-turquesa-600" />,
    title: "Publicidad en Redes",
    description: "Campañas de pago segmentadas en Facebook, Instagram, LinkedIn y otras plataformas relevantes."
  },
  {
    icon: <Users className="h-8 w-8 text-hayas-600" />,
    title: "Gestión de Comunidad",
    description: "Interacción diaria con tu audiencia, respuesta a comentarios y gestión de mensajes privados."
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-turquesa-600" />,
    title: "Analítica y Reporting",
    description: "Medición de KPIs, análisis de rendimiento y informes detallados de resultados obtenidos."
  },
  {
    icon: <Shield className="h-8 w-8 text-hayas-600" />,
    title: "Gestión de Reputación",
    description: "Monitorización de menciones, gestión de crisis y construcción de reputación online positiva."
  },
  {
    icon: <Megaphone className="h-8 w-8 text-turquesa-600" />,
    title: "Influencer Marketing",
    description: "Identificación y colaboración con influencers relevantes para amplificar tu alcance."
  }
];

const benefits = [
  {
    icon: <Eye className="h-6 w-6 text-hayas-600" />,
    title: "Mayor Visibilidad de Marca",
    description: "Aumenta tu presencia digital y haz que más personas conozcan tu negocio y servicios."
  },
  {
    icon: <Users className="h-6 w-6 text-turquesa-600" />,
    title: "Comunidad Fiel",
    description: "Construye una audiencia comprometida que interactúa con tu contenido y recomienda tu marca."
  },
  {
    icon: <TrendingUp className="h-6 w-6 text-hayas-600" />,
    title: "Aumento de Ventas",
    description: "Convierte seguidores en clientes a través de estrategias de social selling efectivas."
  },
  {
    icon: <Target className="h-6 w-6 text-turquesa-600" />,
    title: "Segmentación Precisa",
    description: "Llega exactamente a tu público objetivo con mensajes personalizados y relevantes."
  },
  {
    icon: <Heart className="h-6 w-6 text-hayas-600" />,
    title: "Engagement Auténtico",
    description: "Genera interacciones genuinas que fortalecen la relación con tus clientes actuales y potenciales."
  },
  {
    icon: <BarChart3 className="h-6 w-6 text-turquesa-600" />,
    title: "Resultados Medibles",
    description: "Obtén métricas claras sobre el rendimiento de tus acciones y el retorno de inversión."
  }
];

const processSteps = [
  {
    number: "01",
    title: "Solicitud Kit Digital",
    description: "Te ayudamos con el registro en Acelera pyme y la solicitud del bono para redes sociales."
  },
  {
    number: "02", 
    title: "Auditoría y Estrategia",
    description: "Analizamos tu presencia actual y definimos la estrategia de redes sociales más efectiva."
  },
  {
    number: "03",
    title: "Implementación y Contenido",
    description: "Configuramos perfiles, creamos contenido de calidad y lanzamos las primeras campañas."
  },
  {
    number: "04",
    title: "Gestión y Optimización",
    description: "Gestionamos diariamente tus redes y optimizamos continuamente para maximizar resultados."
  }
];

const faqItems = [
  {
    question: "¿Qué redes sociales incluye la solución Kit Digital?",
    answer: "La gestión incluye las principales redes sociales relevantes para tu sector: Facebook, Instagram, LinkedIn, Twitter/X, TikTok y YouTube. Seleccionamos las más adecuadas según tu público objetivo y tipo de negocio."
  },
  {
    question: "¿Mi empresa puede acceder al Kit Digital para redes sociales?",
    answer: "Sí, si eres empresa del Segmento III (0-2 empleados) puedes acceder hasta 3.000€, o si eres comunidad de bienes, sociedad civil o explotación agraria (hasta 50 empleados) hasta 12.000€. Ambas convocatorias están abiertas hasta el 31/10/2025."
  },
  {
    question: "¿Cuántas publicaciones incluye el servicio mensualmente?",
    answer: "El servicio incluye entre 15-30 publicaciones mensuales distribuidas estratégicamente, además de Stories, contenido interactivo y respuesta a comentarios. La cantidad exacta depende de la estrategia definida para tu sector."
  },
  {
    question: "¿Crean todo el contenido visual o necesito proporcionarlo yo?",
    answer: "Creamos todo el contenido necesario: diseños gráficos, vídeos, fotografías (cuando sea posible), textos y copy. Solo necesitamos que nos proporciones información sobre tus productos/servicios y tu identidad de marca."
  },
  {
    question: "¿Incluye publicidad de pago en redes sociales?",
    answer: "Sí, incluimos la gestión de campañas publicitarias en redes sociales. El presupuesto de publicidad va aparte del bono Kit Digital y lo definimos según tus objetivos y capacidad de inversión."
  },
  {
    question: "¿Qué resultados puedo esperar y en qué tiempo?",
    answer: "Los primeros resultados de engagement y crecimiento se ven entre 1-3 meses. Para conversiones comerciales, generalmente entre 3-6 meses. Te proporcionamos informes mensuales con todas las métricas y evolución."
  },
  {
    question: "¿Puedo participar en la creación de contenido?",
    answer: "Por supuesto. Trabajamos de forma colaborativa: puedes revisar y aprobar contenidos antes de su publicación, aportar ideas y participar activamente en la estrategia según tu disponibilidad."
  }
];

const KitDigitalRedesSociales = () => {
  const { getRoute } = useLocalizedRoutes();
  const seoData = {
    title: "Kit Digital Gestión de Red Social - Ayuda hasta 12.000€ | Hayas Marketing",
    description: "Gestiona tus redes sociales profesionalmente con el Kit Digital 2025. Ayudas hasta 3.000€ para Segmento III y hasta 12.000€ para comunidades de bienes. Aumenta tu presencia digital.",
    keywords: ["Kit Digital", "redes sociales", "social media", "gestión redes", "contenido digital", "publicidad redes", "bono digital", "Segmento III", "comunidades bienes"],
    canonical: "https://hayasmarketing.com/kit-digital/gestion-red-social"
  };

  return (
    <div className="min-h-screen bg-white">
      <Seo {...seoData} />
      <Navigation />
      
      {/* Breadcrumb */}
      <div className="bg-muted/30 py-4 mt-20">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-gray-600">
            <Link to={getRoute('home')} className="hover:text-primary">Inicio</Link>
            <span className="mx-2">/</span>
            <Link to={getRoute('kitDigital')} className="hover:text-primary">Kit Digital</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Gestión de Red Social</span>
          </nav>
        </div>
      </div>

      {/* Program Transition Banner */}
      <ProgramTransitionBanner programName="Kit Digital" />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-hayas-50 via-white to-turquesa-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-hayas-100 text-hayas-700 border-hayas-200">
                📱 Kit Digital Social Media
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Gestión de Red Social <span className="text-gradient-primary">con el Kit Digital</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Ayuda Kit Digital para profesionalizar tu presencia en redes sociales. 
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
                  <Link to={getRoute('scheduleMeeting')}>Agenda tu reunión</Link>
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
                    <h3 className="font-semibold text-gray-800">Dashboard Social</h3>
                    <Badge className="bg-turquesa-500 text-white">Activo</Badge>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <Share2 className="h-4 w-4 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between text-xs mb-1">
                          <span>Facebook</span>
                          <span>+24%</span>
                        </div>
                        <div className="h-2 bg-blue-200 rounded">
                          <div className="h-2 bg-blue-500 rounded w-3/4"></div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                        <Camera className="h-4 w-4 text-pink-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between text-xs mb-1">
                          <span>Instagram</span>
                          <span>+45%</span>
                        </div>
                        <div className="h-2 bg-pink-200 rounded">
                          <div className="h-2 bg-pink-500 rounded w-4/5"></div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <Users className="h-4 w-4 text-blue-700" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between text-xs mb-1">
                          <span>LinkedIn</span>
                          <span>+67%</span>
                        </div>
                        <div className="h-2 bg-blue-200 rounded">
                          <div className="h-2 bg-blue-600 rounded w-2/3"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Engagement promedio</span>
                  <div className="flex items-center gap-1 text-hayas-600">
                    <TrendingUp className="h-4 w-4" />
                    <span className="text-sm font-medium">+89%</span>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-hayas-500 text-white p-3 rounded-full shadow-lg">
                <Hash className="h-6 w-6" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-turquesa-500 text-white p-3 rounded-full shadow-lg">
                <Heart className="h-6 w-6" />
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
              El Kit Digital de Gestión de Red Social incluye la estrategia completa para 
              profesionalizar tu presencia en redes sociales y aumentar tu comunidad digital.
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
              Una gestión profesional de redes sociales aumentará tu visibilidad, generará confianza 
              y convertirá seguidores en clientes reales.
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
                  <Share2 className="h-6 w-6 text-white" />
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
            Pasos para solicitar tu <span className="text-gradient-primary">Kit Digital Social Media</span>
          </>
        }
        subtitle="Te acompañamos en todo el proceso de solicitud y gestión profesional de tus redes sociales."
        steps={processSteps}
        backgroundColor="bg-gradient-to-br from-gray-50 to-white"
        showIcons={false}
      />

      {/* FAQ */}
      <FAQSection
        title="Preguntas frecuentes sobre <span class='text-gradient-primary'>Redes Sociales Kit Digital</span>"
        subtitle="Resolvemos las dudas más comunes sobre la gestión de redes sociales con el Kit Digital"
        faqs={faqItems}
      />

      {/* Final CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-hayas-500 via-hayas-600 to-turquesa-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              ¿Listo para potenciar tu presencia en redes sociales?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Aprovecha las ayudas del Kit Digital 2025 y profesionaliza tu estrategia de redes sociales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 font-semibold" asChild>
                <Link to="#contacto">
                  Solicita tu asesoría gratuita
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" className="bg-white/20 text-white border border-white/30 hover:bg-white hover:text-gray-900 font-semibold" asChild>
                <Link to={getRoute('scheduleMeeting')}>Agenda tu reunión</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Solicita tu asesoría gratuita para Redes Sociales Kit Digital
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Te ayudamos con todo el proceso: desde la solicitud del bono hasta la gestión completa de tus redes sociales.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden" style={{minHeight: '820px'}}>
              <iframe
                src="https://links.hayasmarketing.com/widget/form/CIBs3XkPVEQVfMfwBIe2"
                style={{width:'100%',height:'100%',border:'none',borderRadius:'4px'}}
                id="inline-CIBs3XkPVEQVfMfwBIe2" 
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="WEB KD Form  - Solution request"
                data-height="805"
                data-layout-iframe-id="inline-CIBs3XkPVEQVfMfwBIe2"
                data-form-id="CIBs3XkPVEQVfMfwBIe2"
                title="WEB KD Form  - Solution request"
              >
              </iframe>
              <script src="https://links.hayasmarketing.com/js/form_embed.js"></script>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default KitDigitalRedesSociales;