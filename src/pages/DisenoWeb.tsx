import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ProcessSection from '@/components/ProcessSection';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import KitDigitalBanner from '@/components/KitDigitalBanner';

import FAQSection from '@/components/FAQSection';
import SuccessCasesSection from '@/components/SuccessCasesSection';
import ServiceContactSection from '@/components/ServiceContactSection';
import { 
  Globe, Palette, Code, Smartphone, Search, BarChart3, 
  ArrowRight, CheckCircle, Star, Zap, Users, TrendingUp,
  Monitor, Layout, Sparkles, Shield, Timer, FileText,
  Settings, Lightbulb, Target, Calendar, Bot, Gauge
} from 'lucide-react';

const technologies = [
  { name: "WordPress", icon: "🌐", description: "CMS líder mundial" },
  { name: "React", icon: "⚛️", description: "Framework moderno" },
  { name: "HTML5 & CSS3", icon: "💻", description: "Estándares web" },
  { name: "JavaScript", icon: "🚀", description: "Interactividad avanzada" }
];

const services = [
  {
    icon: <Globe className="h-8 w-8 text-primary" />,
    title: "Hosting y Dominio Premium",
    description: "Alojamiento optimizado con SSL, backups automáticos y soporte 24/7 para máximo rendimiento."
  },
  {
    icon: <Palette className="h-8 w-8 text-primary" />,
    title: "Diseño UX/UI Profesional",
    description: "Diseño centrado en el usuario con enfoque en conversión y experiencia de navegación óptima."
  },
  {
    icon: <Code className="h-8 w-8 text-primary" />,
    title: "Desarrollo a Medida",
    description: "Código limpio, optimizado y escalable siguiendo las mejores prácticas de desarrollo web."
  },
  {
    icon: <Smartphone className="h-8 w-8 text-primary" />,
    title: "Responsive Design",
    description: "Diseño adaptativo que funciona perfectamente en móviles, tablets y ordenadores."
  },
  {
    icon: <Search className="h-8 w-8 text-primary" />,
    title: "SEO Técnico Avanzado",
    description: "Optimización completa para motores de búsqueda con estructura y velocidad optimizada."
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-primary" />,
    title: "Analítica Web",
    description: "Integración de herramientas de análisis para medir rendimiento y comportamiento de usuarios."
  },
  {
    icon: <Shield className="h-8 w-8 text-primary" />,
    title: "Seguridad Avanzada",
    description: "Protección completa con certificados SSL, firewalls y actualizaciones de seguridad."
  },
  {
    icon: <Timer className="h-8 w-8 text-primary" />,
    title: "Velocidad Optimizada",
    description: "Carga ultrarrápida con técnicas de optimización avanzadas y CDN global."
  },
  {
    icon: <FileText className="h-8 w-8 text-primary" />,
    title: "CMS Autogestionable",
    description: "Panel de administración intuitivo para que gestiones contenido de forma autónoma."
  },
  {
    icon: <Bot className="h-8 w-8 text-primary" />,
    title: "Integración con IA",
    description: "Chatbots inteligentes, automatizaciones y herramientas de IA para mejorar la experiencia."
  }
];

const webTypes = [
  {
    icon: <Monitor className="h-6 w-6 text-primary" />,
    title: "Webs Corporativas",
    description: "Sitios profesionales que transmiten credibilidad y confianza a tus clientes.",
    features: ["Diseño profesional", "Múltiples secciones", "Formularios de contacto", "Integración CRM"]
  },
  {
    icon: <Layout className="h-6 w-6 text-primary" />,
    title: "Landing Pages",
    description: "Páginas de conversión optimizadas para maximizar leads y ventas.",
    features: ["Alta conversión", "Diseño persuasivo", "A/B Testing", "Analítica avanzada"]
  },
  {
    icon: <Sparkles className="h-6 w-6 text-primary" />,
    title: "Portafolios Creativos",
    description: "Showcases visuales para profesionales creativos y artistas.",
    features: ["Galerías dinámicas", "Animaciones", "Diseño único", "Optimización móvil"]
  },
  {
    icon: <Users className="h-6 w-6 text-primary" />,
    title: "Plataformas B2B",
    description: "Soluciones empresariales complejas con funcionalidades avanzadas.",
    features: ["Áreas privadas", "Dashboards", "Integraciones API", "Escalabilidad"]
  }
];

const processSteps = [
  {
    number: "01",
    title: "Análisis y Estrategia",
    description: "Estudiamos tu negocio, competencia y objetivos para definir la estrategia web óptima.",
    icon: <Target className="h-6 w-6" />
  },
  {
    number: "02", 
    title: "Diseño UX/UI",
    description: "Creamos wireframes y diseños centrados en la experiencia del usuario y conversión.",
    icon: <Palette className="h-6 w-6" />
  },
  {
    number: "03",
    title: "Desarrollo y Testing",
    description: "Programamos tu web con las mejores tecnologías y realizamos pruebas exhaustivas.",
    icon: <Code className="h-6 w-6" />
  },
  {
    number: "04",
    title: "Lanzamiento y Optimización",
    description: "Publicamos tu web y la optimizamos continuamente basándose en datos reales.",
    icon: <TrendingUp className="h-6 w-6" />
  }
];

const successCases = [
  {
    name: "Translate with Style",
    category: "Empresa de Traducción",
    service: "Diseño Web Premium",
    results: "+400% tráfico orgánico, +180% conversiones",
    image: "🌍"
  },
  {
    name: "JointsUp",
    category: "Clínica Médica Especializada", 
    service: "Diseño Web Médico",
    results: "+250% citas online, +300% alcance",
    image: "⚕️"
  },
  {
    name: "Centro Roraima",
    category: "Centro de Formación",
    service: "Plataforma Educativa",
    results: "+200% inscripciones, automatización completa",
    image: "🎓"
  },
  {
    name: "InBound Students",
    category: "Consultoría Educativa",
    service: "Web Corporativa",
    results: "+350% leads cualificados, +150% conversión",
    image: "🎯"
  }
];

const benefits = [
  "Diseño 100% personalizado y único",
  "Optimización SEO desde el desarrollo",
  "Carga ultrarrápida (< 3 segundos)",
  "Responsive en todos los dispositivos",
  "Panel de administración intuitivo",
  "Integración con herramientas de marketing",
  "Analítica y seguimiento avanzado",
  "Soporte técnico continuo",
  "Actualizaciones de seguridad automáticas",
  "Escalabilidad y crecimiento futuro"
];

const faqItems = [
  {
    question: "¿Cuánto tiempo se tarda en desarrollar una web profesional?",
    answer: "El desarrollo de una web profesional toma entre 3-6 semanas según la complejidad. Incluye diseño UX/UI, desarrollo, contenido, pruebas y lanzamiento. Para proyectos más complejos como plataformas B2B, el tiempo puede extenderse a 8-12 semanas."
  },
  {
    question: "¿Qué tecnologías utilizan para el desarrollo?",
    answer: "Utilizamos las mejores tecnologías según el proyecto: WordPress para sitios corporativos, React para aplicaciones web avanzadas, y tecnologías modernas como HTML5, CSS3, JavaScript ES6+. Siempre elegimos la stack tecnológica más adecuada para cada caso."
  },
  {
    question: "¿La web estará optimizada para móviles?",
    answer: "Absolutamente. Todas nuestras webs tienen diseño responsive y están optimizadas para ofrecer una experiencia perfecta en móviles, tablets y ordenadores. Además, priorizamos la velocidad de carga en dispositivos móviles."
  },
  {
    question: "¿Incluyen hosting y dominio en el servicio?",
    answer: "Sí, incluimos hosting premium optimizado, registro de dominio, certificado SSL, copias de seguridad automáticas y soporte técnico. Todo gestionado para que no tengas que preocuparte por aspectos técnicos."
  },
  {
    question: "¿Podré gestionar el contenido de mi web yo mismo?",
    answer: "Sí, desarrollamos todas las webs con un panel de administración intuitivo que te permite editar textos, imágenes, crear páginas y gestionar contenido fácilmente. Además, te proporcionamos formación personalizada."
  },
  {
    question: "¿Qué incluye la optimización SEO?",
    answer: "Incluimos SEO técnico completo: estructura optimizada, velocidad de carga, meta tags, schema markup, sitemap XML, optimización de imágenes, URLs amigables y configuración de Google Analytics y Search Console."
  },
  {
    question: "¿Ofrecen soporte después del lanzamiento?",
    answer: "Sí, ofrecemos soporte técnico continuo, actualizaciones de seguridad, backups automáticos, monitorización 24/7 y consultoría estratégica para ayudarte a hacer crecer tu presencia digital."
  },
  {
    question: "¿Pueden migrar mi web actual sin perder el SEO?",
    answer: "Sí, realizamos migraciones completas preservando el SEO, urls, contenido y posicionamiento. Usamos técnicas avanzadas de redirección y mantenemos toda la autoridad de tu dominio actual."
  }
];

const DisenoWeb = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4 mt-20">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-gray-600">
            <Link to="/" className="hover:text-primary">Inicio</Link>
            <span className="mx-2">/</span>
            <Link to="/soluciones" className="hover:text-primary">Soluciones</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Diseño Web</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-white to-accent/5">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                Diseño Web Profesional
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Diseño y Desarrollo Web que <span className="text-gradient-primary">Convierte</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Creamos sitios web profesionales que combinan diseño excepcional, tecnología avanzada 
                y estrategia digital para hacer crecer tu negocio online.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="gradient-primary text-white" asChild>
                  <Link to="/agendar-reunion">
                    Solicitar Propuesta
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="#casos-exito">Ver Casos de Éxito</Link>
                </Button>
              </div>
              
              {/* Technology Stack */}
              <div>
                <p className="text-sm text-gray-500 mb-3">Desarrollamos con las mejores tecnologías:</p>
                <div className="grid grid-cols-2 gap-3">
                  {technologies.map((tech, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="text-lg">{tech.icon}</span>
                      <div>
                        <span className="font-medium">{tech.name}</span>
                        <p className="text-xs text-gray-500">{tech.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                {/* Browser mockup */}
                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <span className="text-xs text-gray-500">tuweb.com</span>
                  </div>
                  <div className="space-y-3">
                    <div className="h-6 bg-gradient-to-r from-primary to-accent rounded w-2/3"></div>
                    <div className="h-4 bg-gray-200 rounded w-full"></div>
                    <div className="h-4 bg-gray-200 rounded w-4/5"></div>
                    <div className="grid grid-cols-3 gap-2 mt-6">
                      <div className="h-16 bg-primary/10 rounded"></div>
                      <div className="h-16 bg-accent/10 rounded"></div>
                      <div className="h-16 bg-primary/20 rounded"></div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Web responsive y rápida</span>
                  <div className="flex items-center gap-1 text-green-600">
                    <Gauge className="h-4 w-4" />
                    <span className="text-sm font-medium">98/100 Speed</span>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-primary text-white p-3 rounded-full shadow-lg">
                <Palette className="h-6 w-6" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-accent text-white p-3 rounded-full shadow-lg">
                <Code className="h-6 w-6" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Servicio <span className="text-gradient-primary">Integral</span> de Desarrollo Web
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Todo lo que necesitas para tener una presencia web exitosa. Desde el diseño hasta el hosting, 
              cubrimos cada aspecto de tu proyecto digital.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
                <CardHeader className="pb-4">
                  <div className="mb-4 p-3 rounded-lg bg-primary/10 w-fit">
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

          <div className="mt-10 text-center">
            <Link to="/servicios/diseno-web/alojamiento-mantenimiento" className="inline-flex items-center text-primary hover:underline">
              ¿Buscas Alojamiento y Mantenimiento Web? Ver servicio
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Web Types Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
              Tipos de Web
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Webs Especializadas para cada <span className="text-gradient-primary">Necesidad</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Desarrollamos diferentes tipos de sitios web adaptados a los objetivos específicos de tu negocio.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {webTypes.map((type, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      {type.icon}
                    </div>
                    <CardTitle className="text-xl font-bold">{type.title}</CardTitle>
                  </div>
                  <p className="text-gray-600">{type.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {type.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                ¿Por qué elegir nuestro <span className="text-gradient-primary">Desarrollo Web</span>?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                No solo creamos webs bonitas, desarrollamos herramientas estratégicas que hacen crecer tu negocio 
                y te posicionan por delante de la competencia.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 shrink-0" />
                    <span className="text-sm text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-white rounded-full mb-4">
                    <Lightbulb className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Desarrollo Estratégico</h3>
                  <p className="text-gray-600">
                    Cada web que desarrollamos está pensada para generar resultados medibles y hacer crecer tu negocio.
                  </p>
                </div>
                
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="text-2xl font-bold text-primary">98%</div>
                    <div className="text-xs text-gray-500">Velocidad</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="text-2xl font-bold text-accent">24/7</div>
                    <div className="text-xs text-gray-500">Soporte</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="text-2xl font-bold text-primary">100%</div>
                    <div className="text-xs text-gray-500">Responsive</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <ProcessSection
        title='Nuestro <span className="text-gradient-primary">Proceso</span> de Desarrollo'
        subtitle="Metodología probada que garantiza el éxito de tu proyecto web desde la estrategia hasta el lanzamiento."
        steps={processSteps}
        backgroundColor="bg-gradient-to-br from-gray-50 to-white"
        showIcons={true}
      />

      {/* Success Cases */}
      <SuccessCasesSection
        id="casos-exito"
        title="Casos de <span className='text-gradient-primary'>Éxito</span>"
        subtitle="Webs que hemos desarrollado y que están generando resultados excepcionales para nuestros clientes."
        filterTags={["diseño-web"]}
        showAllLink={true}
      />

      {/* Kit Digital Banner */}
      <KitDigitalBanner />

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Listo para Crear tu Web Profesional?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Agenda una reunión estratégica gratuita y descubre cómo podemos llevar tu presencia digital al siguiente nivel.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100" asChild>
              <Link to="/agendar-reunion">
                Agenda Reunión Gratuita
                <Calendar className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
              <Link to="/contacto">Solicitar Información</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Preguntas <span className="text-gradient-primary">Frecuentes</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Resolvemos las dudas más comunes sobre el desarrollo de sitios web profesionales.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <FAQSection faqs={faqItems} />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ServiceContactSection
        title="¿Hablamos sobre tu nuevo sitio web?"
        subtitle="Cuéntanos tu proyecto y objetivos. Te responderemos con una propuesta personalizada para tu sitio web."
      />
      
      <Footer />
    </div>
  );
};

export default DisenoWeb;