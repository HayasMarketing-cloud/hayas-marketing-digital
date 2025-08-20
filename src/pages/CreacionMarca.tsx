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
import ServiceContactSection from '@/components/ServiceContactSection';
import { 
  Palette, Lightbulb, FileText, Target, Eye, Users, 
  ArrowRight, CheckCircle, Star, Zap, TrendingUp,
  Sparkles, Shield, Timer, Settings, BarChart3, Globe
} from 'lucide-react';
import OptimizedImage from '@/components/OptimizedImage';

const brandingServices = [
  {
    icon: <Lightbulb className="h-8 w-8 text-primary" />,
    title: "Estrategia de Marca",
    description: "Definimos la personalidad, valores y posicionamiento único de tu marca en el mercado."
  },
  {
    icon: <Palette className="h-8 w-8 text-primary" />,
    title: "Identidad Visual Completa",
    description: "Logotipo, tipografías, colores, y todos los elementos gráficos que representen tu marca."
  },
  {
    icon: <FileText className="h-8 w-8 text-primary" />,
    title: "Manual de Marca",
    description: "Guía completa de uso de la identidad visual para mantener consistencia en todas las aplicaciones."
  },
  {
    icon: <Target className="h-8 w-8 text-primary" />,
    title: "Naming y Positioning",
    description: "Creación del nombre perfecto y definición del posicionamiento estratégico en el mercado."
  },
  {
    icon: <Eye className="h-8 w-8 text-primary" />,
    title: "Aplicaciones Gráficas",
    description: "Diseño de tarjetas, papelería, packaging y todos los materiales que necesite tu marca."
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Experiencia de Marca",
    description: "Definimos cómo tu audiencia percibe e interactúa con tu marca en todos los puntos de contacto."
  }
];

const brandingTypes = [
  {
    title: "Branding Corporativo",
    description: "Para empresas establecidas que buscan renovar o fortalecer su imagen corporativa.",
    features: ["Rebranding estratégico", "Arquitectura de marca", "Cultura corporativa"]
  },
  {
    title: "Branding de Producto",
    description: "Creación de marca específica para nuevos productos o líneas de negocio.",
    features: ["Identidad de producto", "Packaging design", "Comunicación diferenciada"]
  },
  {
    title: "Branding Personal",
    description: "Para profesionales y emprendedores que quieren destacar como marca personal.",
    features: ["Imagen profesional", "Presencia digital", "Autoridad en sector"]
  },
  {
    title: "Branding Digital",
    description: "Marca optimizada para el entorno digital y redes sociales.",
    features: ["Identidad digital", "Social media", "Presencia online"]
  }
];

const processSteps = [
  {
    number: "01",
    title: "Investigación y Análisis",
    description: "Estudiamos tu mercado, competencia y audiencia objetivo para crear una base sólida.",
    icon: <BarChart3 className="h-6 w-6" />
  },
  {
    number: "02", 
    title: "Estrategia de Marca",
    description: "Definimos personalidad, valores, propuesta de valor y posicionamiento estratégico.",
    icon: <Target className="h-6 w-6" />
  },
  {
    number: "03",
    title: "Desarrollo Creativo",
    description: "Creamos el logotipo, colores, tipografías y todos los elementos visuales de tu marca.",
    icon: <Palette className="h-6 w-6" />
  },
  {
    number: "04",
    title: "Implementación y Lanzamiento",
    description: "Aplicamos la nueva identidad en todos los materiales y canales de comunicación.",
    icon: <Globe className="h-6 w-6" />
  }
];

const successCases = [
  {
    client: "Centro Roraima",
    service: "Branding Completo + Web",
    results: "300% aumento en reconocimiento de marca",
    timeframe: "3 meses",
    testimonial: "Transformaron completamente nuestra imagen. Ahora los clientes nos recuerdan y recomiendan."
  },
  {
    client: "JointsUp",
    service: "Rebranding + Posicionamiento",
    results: "250% mejora en percepción de marca",
    timeframe: "4 meses",
    testimonial: "El nuevo branding nos posicionó como líderes en nuestro sector. Resultados increíbles."
  },
  {
    client: "Dr. Parrón",
    service: "Identidad Corporativa + Web",
    results: "Posicionamiento como referente médico",
    timeframe: "3 meses",
    testimonial: "La nueva identidad transmite confianza y profesionalidad. Mis pacientes valoran mucho la imagen renovada."
  },
  {
    client: "IV Extra",
    service: "Identidad Visual + Manual",
    results: "400% incremento en engagement",
    timeframe: "2 meses", 
    testimonial: "Una identidad que realmente conecta con nuestros clientes. Trabajo excepcional."
  }
];

const benefits = [
  "Diferenciación clara frente a la competencia",
  "Mayor reconocimiento y recordación de marca",
  "Incremento en la percepción de valor",
  "Cohesión en todas las comunicaciones",
  "Base sólida para el crecimiento del negocio",
  "Atracción de clientes ideales"
];

const faqItems = [
  {
    question: "¿Cuánto tiempo toma crear una marca completa?",
    answer: "El proceso completo de branding suele tomar entre 6-12 semanas, dependiendo del alcance del proyecto. Incluye investigación, estrategia, desarrollo creativo e implementación."
  },
  {
    question: "¿Qué incluye el manual de marca?",
    answer: "El manual incluye logotipo y variaciones, paleta de colores, tipografías, aplicaciones correctas e incorrectas, papelería, y guías de uso para medios digitales e impresos."
  },
  {
    question: "¿Pueden ayudar con el naming de mi empresa?",
    answer: "Sí, ofrecemos servicios completos de naming que incluyen investigación, generación de nombres, verificación de disponibilidad y registro de dominios y marcas."
  },
  {
    question: "¿Qué diferencia hay entre logo e identidad de marca?",
    answer: "El logo es solo un elemento de la identidad de marca. La identidad completa incluye colores, tipografías, estilo gráfico, tono de comunicación y toda la experiencia de marca."
  },
  {
    question: "¿Entregan archivos en diferentes formatos?",
    answer: "Sí, entregamos todos los archivos en formatos vectoriales (AI, EPS, SVG) y rasterizados (PNG, JPG) en diferentes resoluciones, listos para cualquier aplicación."
  },
  {
    question: "¿Ofrecen registro de marca y dominio?",
    answer: "Sí, podemos gestionar el registro de tu marca ante la OEPM y ayudarte con el registro de dominios web que necesites para tu proyecto."
  }
];

const CreacionMarca: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Breadcrumb */}
      <div className="bg-muted/30 py-3 md:py-4 mb-4 md:mb-6">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-muted-foreground" role="navigation" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-primary">Inicio</Link>
            <span className="mx-2">/</span>
            <Link to="/servicios" className="hover:text-primary">Servicios</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">Creación de Marca</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="section-tight bg-gradient-to-r from-primary/10 via-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="stack-sm">
                <Badge variant="secondary" className="mb-4">
                  <Sparkles className="h-4 w-4 mr-2" />
                  Branding & Identidad Visual
                </Badge>
                <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                  Creamos Marcas que <span className="text-primary">Conectan y Convierten</span>
                </h1>
              </div>
              <p className="text-lg text-muted-foreground mb-8">
                Transformamos tu idea en una marca memorable que destaque en el mercado. 
                Desde la estrategia hasta la implementación, creamos identidades visuales 
                que generan conexión emocional con tu audiencia.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="group" asChild>
                  <Link to="/contacto">
                    Crear mi Marca
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="#proceso">Ver Proceso</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <OptimizedImage
                  src="/lovable-uploads/bf24688d-75b9-4512-979e-8e9ace8f1643.png"
                  alt="Creación de marca: paletas de color, pruebas de identidad visual y aplicaciones digitales"
                  className="w-full h-auto"
                  priority
                  sizes="(max-width: 1024px) 100vw, 600px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios Integrales */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Branding Integral que Marca la Diferencia
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Desarrollamos todos los elementos necesarios para que tu marca tenga una presencia 
              coherente, memorable y efectiva en todos los puntos de contacto con tus clientes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {brandingServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20">
                <CardHeader>
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tipos de Branding */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Branding Especializado para cada Necesidad
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Adaptamos nuestra metodología de branding según el tipo de proyecto, 
              sector y objetivos específicos de tu negocio.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {brandingTypes.map((type, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">{type.title}</CardTitle>
                  <p className="text-muted-foreground">{type.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {type.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Por qué Elegirnos */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                ¿Por qué crear tu marca con nosotros?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Combinamos estrategia, creatividad y experiencia para crear marcas 
                que no solo se ven bien, sino que funcionan y generan resultados reales.
              </p>
              
              <div className="grid gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-4 mt-1">
                      <CheckCircle className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary/10">
                <div className="text-center">
                  <Zap className="h-16 w-16 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Resultados Garantizados</h3>
                  <p className="text-muted-foreground mb-6">
                    Más de 50 marcas creadas y renovadas con resultados medibles
                  </p>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-primary">98%</div>
                      <div className="text-sm text-muted-foreground">Satisfacción</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">+50</div>
                      <div className="text-sm text-muted-foreground">Marcas Creadas</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">6-12</div>
                      <div className="text-sm text-muted-foreground">Semanas</div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Proceso */}
      <ProcessSection
        title="Nuestro Proceso de Creación de Marca"
        subtitle="Un proceso estructurado y colaborativo que garantiza una marca alineada con tus objetivos y que conecte con tu audiencia."
        steps={processSteps}
        backgroundColor="bg-gradient-to-br from-gray-50 to-white"
        showIcons={true}
      />


      {/* Kit Digital */}
      <KitDigitalBanner />

      {/* CTA Section */}
      <section className="section-normal bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            ¿Listo para crear una marca memorable?
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Deja que tu marca hable por ti. Creamos identidades visuales que conectan, 
            convierten y perduran en la memoria de tus clientes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="group" asChild>
              <Link to="/contacto">
                Empezar mi Proyecto
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" asChild>
              <Link to="/casos-exito">Ver Casos de Éxito</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection faqs={faqItems} />

      {/* Contact Section */}
      <ServiceContactSection
        title="¿Hablamos sobre tu nueva marca?"
        subtitle="Cuéntanos tu proyecto y visión. Te responderemos con una propuesta personalizada para crear tu identidad de marca."
      />
      
      <Footer />
    </div>
  );
};

export default CreacionMarca;