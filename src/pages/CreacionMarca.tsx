import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ProcessSection from '@/components/ProcessSection';
import ServiceRelatedPosts from '@/components/ServiceRelatedPosts';
import ReviewsSection from '@/components/ReviewsSection';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Seo from '@/components/Seo';
import { useServiceSEO } from '@/hooks/useServiceSEO';
import FAQSection from '@/components/FAQSection';
import SuccessCasesSection from '@/components/SuccessCasesSection';
import ServiceContactSection from '@/components/ServiceContactSection';
import BrandingPainPointsSection from '@/components/BrandingPainPointsSection';
import BrandingSolutionPreviewSection from '@/components/BrandingSolutionPreviewSection';
import IntermediateCTA from '@/components/IntermediateCTA';
import BrandingBenefitsGridSection from '@/components/BrandingBenefitsGridSection';
import { 
  Palette, Target, BarChart3, Globe, CheckCircle, ArrowRight,
  Lightbulb, FileText, Eye, Users
} from 'lucide-react';
import { getServiceSuccessCasesConfig } from '@/data/serviceSuccessCasesMapping';

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

const CreacionMarca = () => {
  const { title, description, canonical, ogImage, structuredData } = useServiceSEO({
    serviceName: 'Creación de Marca',
    serviceDescription: 'Diseñamos identidades de marca completas: estrategia, naming, logo, manual de marca y aplicaciones gráficas.',
    canonical: '/es/servicios/creacion-marca',
    features: [
      'Estrategia y posicionamiento de marca',
      'Identidad visual completa',
      'Manual de marca profesional',
      'Aplicaciones gráficas'
    ],
    priceRange: '€€€',
    aggregateRating: { ratingValue: '4.9', reviewCount: '45' }
  });

  return (
    <div className="min-h-screen bg-white">
      <Seo 
        title={title}
        description={description}
        canonical={canonical}
        ogImage={ogImage}
        structuredData={structuredData}
      />
      <Navigation />
      
      {/* Breadcrumb */}
      <div className="bg-muted/30 py-4 mt-20">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-gray-600">
            <Link to="/" className="hover:text-primary">Inicio</Link>
            <span className="mx-2">/</span>
            <Link to="/servicios" className="hover:text-primary">Servicios</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Creación de Marca</span>
          </nav>
        </div>
      </div>

      {/* Sección 1: Dolor / Problema */}
      <BrandingPainPointsSection />

      {/* Sección 2: Propuesta / Nuestra solución */}
      <BrandingSolutionPreviewSection />

      {/* Sección 3: Soluciones Especializadas */}
      <section id="tipos" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Tipos de <span className="text-gradient-primary">Branding</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Adaptamos nuestra metodología según tu tipo de proyecto y objetivos específicos
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {brandingTypes.map((type, index) => (
              <Card key={index} className="relative overflow-hidden hover:shadow-xl transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-3 rounded-lg ${index % 2 === 0 ? 'bg-primary/10 text-primary' : 'bg-secondary/10 text-secondary'}`}>
                      <Palette className="w-8 h-8" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{type.title}</CardTitle>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{type.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3">Incluye:</h4>
                      <ul className="space-y-2">
                        {type.features.map((feature, fIndex) => (
                          <li key={fIndex} className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sección 4: Cómo funciona */}
      <ProcessSection
        title={<>Nuestro proceso de <span className="text-gradient-primary">creación de marca</span></>}
        subtitle="Un enfoque estructurado que garantiza una marca alineada con tus objetivos"
        steps={processSteps}
      />

      {/* Sección 5: Beneficios */}
      <BrandingBenefitsGridSection />

      {/* Sección 6: Prueba social */}
      <SuccessCasesSection
        id="casos-exito"
        title="Casos de <span className='text-gradient-primary'>éxito</span>"
        subtitle="Marcas que hemos creado y que están generando resultados excepcionales para nuestros clientes."
        filterTags={["creacion-marca"]}
        maxCases={4}
        showAllLink={true}
      />
      
      <ReviewsSection />

      {/* Sección 6: CTA intermedio */}
      <IntermediateCTA
        title="Descubre cómo puede ayudarte una marca profesional"
        subtitle="Solicita una consulta gratuita y te mostraremos cómo transformar tu identidad de marca para conectar mejor con tu audiencia"
        buttonText="Hablar con un especialista"
        buttonLink="/agendar-reunion"
      />

      {/* Sección 7: Preguntas frecuentes */}
      <FAQSection 
        title="Preguntas frecuentes sobre Creación de Marca"
        subtitle="Resolvemos las dudas más comunes sobre el proceso de branding e identidad visual"
        faqs={faqItems} 
      />

      {/* Posts Relacionados */}
      <ServiceRelatedPosts serviceSlug="creacion-marca" />

      {/* Sección final: CTA fuerte (footer extendido) */}
      <ServiceContactSection
        title="¿Listo para crear una marca memorable?"
        subtitle="Cuéntanos tu proyecto y visión. Te responderemos con una propuesta personalizada para crear tu identidad de marca."
        formId="ZHNw4rjAzNdvFbFnIk1V"
        className="bg-gradient-to-br from-primary/10 via-white to-accent/10"
      />
      
      <Footer />
    </div>
  );
};

export default CreacionMarca;