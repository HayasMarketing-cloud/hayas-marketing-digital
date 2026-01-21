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
import { useTranslation } from '@/hooks/useTranslation';
import { 
  Palette, Target, BarChart3, Globe, CheckCircle, ArrowRight,
  Lightbulb, FileText, Eye, Users
} from 'lucide-react';

const CreacionMarca = () => {
  const { language } = useTranslation();
  const isEnglish = language === 'en';

  // Bilingual content
  const content = {
    // SEO
    serviceName: isEnglish ? 'Brand Creation' : 'Creación de Marca',
    serviceDescription: isEnglish 
      ? 'We design complete brand identities: strategy, naming, logo, brand manual and graphic applications.'
      : 'Diseñamos identidades de marca completas: estrategia, naming, logo, manual de marca y aplicaciones gráficas.',
    canonical: isEnglish ? '/en/services/brand-creation' : '/es/servicios/creacion-marca',
    features: isEnglish ? [
      'Brand strategy and positioning',
      'Complete visual identity',
      'Professional brand manual',
      'Graphic applications'
    ] : [
      'Estrategia y posicionamiento de marca',
      'Identidad visual completa',
      'Manual de marca profesional',
      'Aplicaciones gráficas'
    ],
    
    // Breadcrumb
    breadcrumbHome: isEnglish ? 'Home' : 'Inicio',
    breadcrumbServices: isEnglish ? 'Services' : 'Servicios',
    breadcrumbCurrent: isEnglish ? 'Brand Creation' : 'Creación de Marca',
    homeLink: isEnglish ? '/en' : '/',
    servicesLink: isEnglish ? '/en/services' : '/servicios',
    
    // Section titles
    typesTitle: isEnglish ? 'Types of' : 'Tipos de',
    typesTitleHighlight: 'Branding',
    typesSubtitle: isEnglish 
      ? 'We adapt our methodology according to your project type and specific objectives'
      : 'Adaptamos nuestra metodología según tu tipo de proyecto y objetivos específicos',
    includesLabel: isEnglish ? 'Includes:' : 'Incluye:',
    
    // Process
    processTitle: isEnglish 
      ? <>Our <span className="text-gradient-primary">brand creation</span> process</>
      : <>Nuestro proceso de <span className="text-gradient-primary">creación de marca</span></>,
    processSubtitle: isEnglish 
      ? 'A structured approach that guarantees a brand aligned with your objectives'
      : 'Un enfoque estructurado que garantiza una marca alineada con tus objetivos',
    
    // Success cases
    successCasesTitle: isEnglish 
      ? "Success <span class='text-gradient-primary'>stories</span>"
      : "Casos de <span class='text-gradient-primary'>éxito</span>",
    successCasesSubtitle: isEnglish 
      ? 'Brands we have created that are generating exceptional results for our clients.'
      : 'Marcas que hemos creado y que están generando resultados excepcionales para nuestros clientes.',
    
    // CTA
    ctaTitle: isEnglish 
      ? 'Discover how a professional brand can help you'
      : 'Descubre cómo puede ayudarte una marca profesional',
    ctaSubtitle: isEnglish 
      ? 'Request a free consultation and we will show you how to transform your brand identity to better connect with your audience'
      : 'Solicita una consulta gratuita y te mostraremos cómo transformar tu identidad de marca para conectar mejor con tu audiencia',
    ctaButton: isEnglish ? 'Talk to a specialist' : 'Hablar con un especialista',
    ctaLink: isEnglish ? '/en/schedule-meeting' : '/agendar-reunion',
    
    // FAQ
    faqTitle: isEnglish ? 'Frequently asked questions about Brand Creation' : 'Preguntas frecuentes sobre Creación de Marca',
    faqSubtitle: isEnglish 
      ? 'We answer the most common questions about the branding and visual identity process'
      : 'Resolvemos las dudas más comunes sobre el proceso de branding e identidad visual',
    
    // Contact
    contactTitle: isEnglish ? 'Ready to create a memorable brand?' : '¿Listo para crear una marca memorable?',
    contactSubtitle: isEnglish 
      ? 'Tell us about your project and vision. We will respond with a personalized proposal to create your brand identity.'
      : 'Cuéntanos tu proyecto y visión. Te responderemos con una propuesta personalizada para crear tu identidad de marca.',
  };

  // Bilingual services data
  const brandingServices = isEnglish ? [
    {
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
      title: "Brand Strategy",
      description: "We define the personality, values and unique positioning of your brand in the market."
    },
    {
      icon: <Palette className="h-8 w-8 text-primary" />,
      title: "Complete Visual Identity",
      description: "Logo, typography, colors, and all the graphic elements that represent your brand."
    },
    {
      icon: <FileText className="h-8 w-8 text-primary" />,
      title: "Brand Manual",
      description: "Complete guide for using the visual identity to maintain consistency across all applications."
    },
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Naming & Positioning",
      description: "Creation of the perfect name and definition of strategic market positioning."
    },
    {
      icon: <Eye className="h-8 w-8 text-primary" />,
      title: "Graphic Applications",
      description: "Design of business cards, stationery, packaging and all materials your brand needs."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Brand Experience",
      description: "We define how your audience perceives and interacts with your brand at all touchpoints."
    }
  ] : [
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

  // Bilingual branding types
  const brandingTypes = isEnglish ? [
    {
      title: "Corporate Branding",
      description: "For established companies looking to renew or strengthen their corporate image.",
      features: ["Strategic rebranding", "Brand architecture", "Corporate culture"]
    },
    {
      title: "Product Branding",
      description: "Brand creation specific to new products or business lines.",
      features: ["Product identity", "Packaging design", "Differentiated communication"]
    },
    {
      title: "Personal Branding",
      description: "For professionals and entrepreneurs who want to stand out as a personal brand.",
      features: ["Professional image", "Digital presence", "Industry authority"]
    },
    {
      title: "Digital Branding",
      description: "Brand optimized for the digital environment and social media.",
      features: ["Digital identity", "Social media", "Online presence"]
    }
  ] : [
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

  // Bilingual process steps
  const processSteps = isEnglish ? [
    {
      number: "01",
      title: "Research & Analysis",
      description: "We study your market, competition and target audience to create a solid foundation.",
      icon: <BarChart3 className="h-6 w-6" />
    },
    {
      number: "02", 
      title: "Brand Strategy",
      description: "We define personality, values, value proposition and strategic positioning.",
      icon: <Target className="h-6 w-6" />
    },
    {
      number: "03",
      title: "Creative Development",
      description: "We create the logo, colors, typography and all the visual elements of your brand.",
      icon: <Palette className="h-6 w-6" />
    },
    {
      number: "04",
      title: "Implementation & Launch",
      description: "We apply the new identity across all materials and communication channels.",
      icon: <Globe className="h-6 w-6" />
    }
  ] : [
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

  // Bilingual FAQ items
  const faqItems = isEnglish ? [
    {
      question: "How long does it take to create a complete brand?",
      answer: "The complete branding process usually takes between 6-12 weeks, depending on the scope of the project. It includes research, strategy, creative development and implementation."
    },
    {
      question: "What does the brand manual include?",
      answer: "The manual includes logo and variations, color palette, typography, correct and incorrect applications, stationery, and usage guides for digital and print media."
    },
    {
      question: "Can you help with naming my company?",
      answer: "Yes, we offer complete naming services that include research, name generation, availability verification and domain and trademark registration."
    },
    {
      question: "What's the difference between a logo and brand identity?",
      answer: "The logo is just one element of brand identity. Complete identity includes colors, typography, graphic style, communication tone and the entire brand experience."
    },
    {
      question: "Do you deliver files in different formats?",
      answer: "Yes, we deliver all files in vector formats (AI, EPS, SVG) and raster formats (PNG, JPG) in different resolutions, ready for any application."
    },
    {
      question: "Do you offer trademark and domain registration?",
      answer: "Yes, we can manage your trademark registration and help you with the web domain registration you need for your project."
    }
  ] : [
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

  const { title, description, canonical, ogImage, structuredData } = useServiceSEO({
    serviceName: content.serviceName,
    serviceDescription: content.serviceDescription,
    canonical: content.canonical,
    features: content.features,
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
            <Link to={content.homeLink} className="hover:text-primary">{content.breadcrumbHome}</Link>
            <span className="mx-2">/</span>
            <Link to={content.servicesLink} className="hover:text-primary">{content.breadcrumbServices}</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">{content.breadcrumbCurrent}</span>
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
            <h2 className="text-3xl lg:text-4xl font-bold font-dm-sans mb-4">
              {content.typesTitle} <span className="text-gradient-primary">{content.typesTitleHighlight}</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {content.typesSubtitle}
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
                      <h4 className="font-semibold mb-3">{content.includesLabel}</h4>
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
        title={content.processTitle}
        subtitle={content.processSubtitle}
        steps={processSteps}
      />

      {/* Sección 5: Beneficios */}
      <BrandingBenefitsGridSection />

      {/* Sección 6: Prueba social */}
      <SuccessCasesSection
        id="casos-exito"
        title={content.successCasesTitle}
        subtitle={content.successCasesSubtitle}
        filterTags={["creacion-marca"]}
        maxCases={4}
        showAllLink={true}
      />
      
      <ReviewsSection />

      {/* Sección 6: CTA intermedio */}
      <IntermediateCTA
        title={content.ctaTitle}
        subtitle={content.ctaSubtitle}
        buttonText={content.ctaButton}
        buttonLink={content.ctaLink}
      />

      {/* Sección 7: Preguntas frecuentes */}
      <FAQSection 
        title={content.faqTitle}
        subtitle={content.faqSubtitle}
        faqs={faqItems} 
      />

      {/* Posts Relacionados */}
      <ServiceRelatedPosts serviceSlug="creacion-marca" />

      {/* Sección final: CTA fuerte (footer extendido) */}
      <ServiceContactSection
        title={content.contactTitle}
        subtitle={content.contactSubtitle}
        formId="ZHNw4rjAzNdvFbFnIk1V"
        className="bg-gradient-to-br from-primary/10 via-white to-accent/10"
      />
      
      <Footer />
    </div>
  );
};

export default CreacionMarca;
