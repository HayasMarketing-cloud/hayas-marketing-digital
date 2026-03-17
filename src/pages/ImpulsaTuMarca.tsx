import React from 'react';
import { ArrowRight, Palette, Eye, Target, TrendingUp, Users, Star, Heart, Lightbulb, FileText, Sparkles, CheckCircle, Shield, Globe, MessageSquare, Search, Presentation, Type, AlertTriangle, Zap, Award, Clock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import brandingHeroImage from '@/assets/branding-proceso-tecnicas-naming-hero.jpg';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SuccessCasesSection from '@/components/SuccessCasesSection';
import EnhancedSEO from '@/components/EnhancedSEO';
import FAQSection from '@/components/FAQSection';
import IntermediateCTA from '@/components/IntermediateCTA';
import DynamicH1 from '@/components/DynamicH1';
import { useAdvancedSEO } from '@/hooks/useAdvancedSEO';
import { servicesByPillar } from '@/data/services';
import { successCaseImages } from '@/data/successCaseImages';
import { generateItemListSchema } from '@/data/seoData';
import { useTranslation } from '@/hooks/useTranslation';
import SenseContextBanner from '@/components/SenseContextBanner';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from '@/components/ui/breadcrumb';

// Pain points data
const painPoints = [
  {
    icon: <AlertTriangle className="h-8 w-8 text-red-500" />,
    title: "Marcas invisibles en mercados saturados",
    description: "Sin diferenciación clara, tu negocio se pierde entre la competencia y no logra destacar."
  },
  {
    icon: <Eye className="h-8 w-8 text-orange-500" />,
    title: "Falta de coherencia visual y de mensaje",
    description: "La inconsistencia genera desconfianza y confunde a tus clientes potenciales."
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-red-500" />,
    title: "Marketing sin estrategia de branding",
    description: "Sin una marca sólida, tus acciones de marketing pierden impacto y ROI."
  }
];

// Benefits data
const benefits = [
  {
    icon: <Shield className="h-8 w-8 text-impulsa-500" />,
    title: "Identidad sólida",
    description: "Coherente y reconocible en todos los canales"
  },
  {
    icon: <Target className="h-8 w-8 text-impulsa-500" />,
    title: "Diferenciación real",
    description: "Destaca con un mensaje único"
  },
  {
    icon: <Heart className="h-8 w-8 text-impulsa-500" />,
    title: "Confianza",
    description: "Transmite profesionalidad y fideliza"
  },
  {
    icon: <Eye className="h-8 w-8 text-impulsa-500" />,
    title: "Visibilidad",
    description: "Reconocimiento en buscadores, redes y puntos de contacto"
  },
  {
    icon: <Zap className="h-8 w-8 text-impulsa-500" />,
    title: "Crecimiento sostenible",
    description: "Una marca pensada para evolucionar a largo plazo"
  }
];

// Success cases data
const successCases = [
  {
    title: "Calistenia Online",
    description: "Academia online de entrenamiento",
    image: successCaseImages.calistheniaOnline
  },
  {
    title: "Nexo Vital",
    description: "Clínica de salud con estrategia digital integral",
    image: successCaseImages.nexoVital
  },
  {
    title: "Beka Finance",
    description: "Posicionamiento de marca en sector financiero",
    image: successCaseImages.bekaFinance
  },
  {
    title: "Joints'Up",
    description: "Startup deportiva con branding y crecimiento online",
    image: successCaseImages.jointsUp
  }
];

// FAQ data
const faqItems = [
  {
    question: "¿Cuánto tiempo lleva crear una marca completa?",
    answer: "El proceso completo de creación de marca suele llevar entre 4-8 semanas, dependiendo de la complejidad del proyecto y los tiempos de feedback. Incluye naming, identidad visual, manual de marca y aplicaciones."
  },
  {
    question: "¿Qué incluye el manual de marca?",
    answer: "Nuestro manual de marca incluye: historia y valores de la marca, especificaciones del logotipo, paleta de colores, tipografías, aplicaciones en diferentes medios, y guías de uso correcto e incorrecto."
  },
  {
    question: "¿Ayudáis con el registro de marca y dominio?",
    answer: "Sí, te asesoramos en la disponibilidad del nombre y dominio, y te orientamos sobre el proceso de registro de marca. Aunque no gestionamos directamente los trámites legales, te conectamos con los especialistas adecuados."
  },
  {
    question: "¿Se puede actualizar una marca existente?",
    answer: "Por supuesto. Ofrecemos servicios de rebranding y evolución de marca. Analizamos tu identidad actual y desarrollamos una estrategia para modernizarla manteniendo el reconocimiento existente."
  }
];

const ImpulsaTuMarca = () => {
  const { t, language } = useTranslation();
  const isEnglish = language === 'en';
  
  // Get translations for this page
  const pageT = (key: string) => t(`solutionPages.boostYourBrand.${key}`);
  
  // Get impulsa services
  const impulsaServices = servicesByPillar.visibility || [];
  
  const seoData = useAdvancedSEO({
    pageContent: isEnglish 
      ? "Strategic branding, identity design and brand manual to differentiate your business. Professional brand creation and development services."
      : "Branding estratégico, diseño de identidad y manual de marca para diferenciar tu negocio. Servicios profesionales de creación y desarrollo de marca."
  });

  // Generate ItemList schema for services
  const itemListSchema = generateItemListSchema({
    items: impulsaServices.map(s => ({
      name: s.title,
      url: `https://hayasmarketing.com${s.href}`,
      description: s.description
    })),
    listName: isEnglish ? 'Boost Your Brand Services - Hayas Marketing' : 'Servicios Impulsa tu marca - Hayas Marketing',
    listDescription: isEnglish 
      ? 'Branding, web design, SEO and content services to boost and differentiate your brand in the market.'
      : 'Servicios de branding, diseño web, SEO y contenidos para impulsar y diferenciar tu marca en el mercado.'
  });

  const combinedStructuredData = [seoData.structuredData, itemListSchema].filter(Boolean);
  
  // Language-specific content
  const content = {
    breadcrumbHome: isEnglish ? 'Home' : 'Inicio',
    breadcrumbCurrent: isEnglish ? 'Boost Your Brand' : 'Impulsa tu marca',
    badge: isEnglish ? 'Boost Your Brand Solution' : 'Solución Impulsa tu marca',
    heroTitle: isEnglish ? 'Boost your brand and stand out in a competitive market' : 'Impulsa tu marca y destaca en un mercado competitivo',
    heroDescription: isEnglish 
      ? 'Your brand identity is your greatest asset. At Hayas we help you create an authentic, differentiated and memorable presence, combining branding, design and strategic marketing so your business grows with purpose.'
      : 'La identidad de tu marca es tu mayor activo. En Hayas te ayudamos a crear una presencia auténtica, diferenciada y memorable, combinando branding, diseño y marketing estratégico para que tu negocio crezca con propósito.',
    ctaPrimary: isEnglish ? '👉 Request your free consultation' : '👉 Solicita tu asesoría gratuita',
    ctaSecondary: isEnglish ? 'View success stories' : 'Ver casos de éxito',
    painPointsTitle: isEnglish ? 'Why does your brand need a boost?' : '¿Por qué tu marca necesita un impulso?',
    painPointsCta: isEnglish 
      ? '👉 A strong brand not only attracts customers, it also builds loyalty and multiplies your business value.'
      : '👉 Una marca fuerte no solo atrae clientes, también fideliza y multiplica el valor de tu negocio.',
    solutionTitle: isEnglish ? 'Our approach' : 'Nuestra propuesta',
    benefitsTitle: isEnglish ? 'What you\'ll gain with us' : 'Qué ganarás con nosotros',
    servicesTitle: isEnglish ? 'Services that boost your brand' : 'Servicios que impulsan tu marca',
    viewService: isEnglish ? 'View service' : 'Ver servicio',
    successCasesTitle: isEnglish ? 'Real stories, tangible results' : 'Historias reales, resultados tangibles',
    ctaScheduleLink: isEnglish ? '/en/schedule-meeting' : '/es/agendar-reunion',
    homeLink: isEnglish ? '/en' : '/es',
    heroImageAlt: isEnglish 
      ? 'Brand strategy and creative design - Boost your brand with Hayas Marketing'
      : 'Estrategia de marca y diseño creativo - Impulsa tu marca con Hayas Marketing',
  };

  // Pain points with translations
  const painPointsData = isEnglish ? [
    {
      icon: <AlertTriangle className="h-8 w-8 text-red-500" />,
      title: "Invisible brands in saturated markets",
      description: "Without clear differentiation, your business gets lost among the competition and fails to stand out."
    },
    {
      icon: <Eye className="h-8 w-8 text-orange-500" />,
      title: "Lack of visual and message coherence",
      description: "Inconsistency generates distrust and confuses your potential customers."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-red-500" />,
      title: "Marketing without branding strategy",
      description: "Without a solid brand, your marketing actions lose impact and ROI."
    }
  ] : painPoints;

  // Benefits with translations  
  const benefitsData = isEnglish ? [
    { icon: <Shield className="h-8 w-8 text-impulsa-500" />, title: "Solid identity", description: "Consistent and recognizable across all channels" },
    { icon: <Target className="h-8 w-8 text-impulsa-500" />, title: "Real differentiation", description: "Stand out with a unique message" },
    { icon: <Heart className="h-8 w-8 text-impulsa-500" />, title: "Trust", description: "Convey professionalism and build loyalty" },
    { icon: <Eye className="h-8 w-8 text-impulsa-500" />, title: "Visibility", description: "Recognition in search engines, social media and touchpoints" },
    { icon: <Zap className="h-8 w-8 text-impulsa-500" />, title: "Sustainable growth", description: "A brand designed to evolve long-term" }
  ] : benefits;

  // FAQ items with translations
  const faqData = isEnglish ? [
    {
      question: "How long does it take to create a complete brand?",
      answer: "The complete brand creation process usually takes 4-8 weeks, depending on project complexity and feedback times. It includes naming, visual identity, brand manual and applications."
    },
    {
      question: "What does the brand manual include?",
      answer: "Our brand manual includes: brand story and values, logo specifications, color palette, typography, applications in different media, and correct/incorrect usage guidelines."
    },
    {
      question: "Do you help with brand and domain registration?",
      answer: "Yes, we advise on name and domain availability, and guide you through the trademark registration process. Although we don't directly handle legal procedures, we connect you with the right specialists."
    },
    {
      question: "Can an existing brand be updated?",
      answer: "Absolutely. We offer rebranding and brand evolution services. We analyze your current identity and develop a strategy to modernize it while maintaining existing recognition."
    }
  ] : faqItems;

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
                    <Link to={content.homeLink}>{content.breadcrumbHome}</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>{content.breadcrumbCurrent}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </section>

        {/* Hero Section */}
        <section className="relative py-16 md:py-20 bg-gradient-to-br from-impulsa-50 to-impulsa-100 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="outline" className="mb-6 text-impulsa-500 border-impulsa-200 bg-white/50">
                  {content.badge}
                </Badge>
                <DynamicH1 
                  fallback={content.heroTitle}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                >
                  {content.heroTitle}
                </DynamicH1>
                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                  {content.heroDescription}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-impulsa-500 hover:bg-impulsa-600 text-white" asChild>
                    <Link to={content.ctaScheduleLink}>
                      {content.ctaPrimary}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button variant="impulsa-outline" size="lg" asChild>
                    <a href="#casos-exito">{content.ctaSecondary}</a>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-impulsa-200 to-impulsa-300 rounded-3xl transform rotate-6 scale-105 opacity-20"></div>
                <img 
                  src={brandingHeroImage}
                  alt={content.heroImageAlt}
                  className="relative z-10 w-full h-auto rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        <SenseContextBanner />

        {/* El problema Section */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {content.painPointsTitle}
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {painPointsData.map((point, index) => (
                <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow h-full">
                  <CardHeader className="text-center pb-4">
                    <div className="mb-4 mx-auto p-4 rounded-full w-fit bg-gray-100">
                      {point.icon}
                    </div>
                    <CardTitle className="text-xl font-bold">
                      {point.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-gray-600 leading-relaxed text-center">
                      {point.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center bg-impulsa-50 rounded-2xl p-8">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-impulsa-100 rounded-full">
                  <TrendingUp className="h-8 w-8 text-impulsa-500" />
                </div>
              </div>
              <p className="text-lg font-semibold text-gray-800">
                {content.painPointsCta}
              </p>
            </div>
          </div>
        </section>

        {/* La solución Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Nuestra propuesta
              </h2>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-impulsa-100 rounded-lg flex items-center justify-center">
                      <Palette className="h-6 w-6 text-impulsa-500" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Estrategias de marca completas</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Diseñamos estrategias de marca completas, desde la identidad visual, página web o tienda online, estrategia de contenidos y optimización SEO.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-impulsa-100 rounded-lg flex items-center justify-center">
                      <Heart className="h-6 w-6 text-impulsa-500" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Branding auténtico</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Creamos branding auténtico y diferenciado que conecta con las emociones y valores de tu audiencia.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-impulsa-100 rounded-lg flex items-center justify-center">
                      <Globe className="h-6 w-6 text-impulsa-500" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Integración completa</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Integramos tu marca en todas tus acciones de marketing, online y offline.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-impulsa-100 rounded-lg flex items-center justify-center">
                      <Clock className="h-6 w-6 text-impulsa-500" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Soporte continuo</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Ofrecemos soporte y mejora continua para que tu identidad evolucione con tu empresa y con el mercado.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Beneficios clave Section */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-impulsa-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Qué ganarás con nosotros
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.slice(0, 5).map((benefit, index) => (
                <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full">
                  <CardHeader className="text-center pb-4">
                    <div className="mb-4 mx-auto p-4 rounded-full w-fit bg-impulsa-100">
                      {benefit.icon}
                    </div>
                    <CardTitle className="text-xl font-bold">
                      🌟 {benefit.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-gray-600 leading-relaxed text-center">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Servicios relacionados Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Servicios que impulsan tu marca
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {impulsaServices.slice(0, 7).map((service) => (
                <Card key={service.id} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full">
                  <CardHeader className="text-center pb-4">
                    <div className="mb-4 mx-auto p-4 rounded-full w-fit bg-impulsa-100">
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl font-bold">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-gray-600 leading-relaxed text-center mb-4">
                      {service.description}
                    </p>
                    <div className="text-center">
                      <Button variant="outline" size="sm" asChild>
                        <Link to={service.href}>
                          Ver servicio
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Casos de éxito Section */}
        <section id="casos-exito" className="py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Historias reales, resultados tangibles
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {successCases.map((case_study, index) => (
                <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full">
                  <CardHeader className="pb-4">
                    <div className="mb-4">
                      <img 
                        src={case_study.image} 
                        alt={case_study.title}
                        className="w-full h-40 object-cover rounded-lg"
                      />
                    </div>
                    <CardTitle className="text-lg font-bold">
                      {case_study.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {case_study.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button variant="outline" size="lg" asChild>
                <Link to="/es/casos-exito?filter=branding">
                  👉 Ver casos de éxito de Impulsa tu marca
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Intermediate CTA */}
        <IntermediateCTA 
          title="Descubre como podemos hacer que tu Marca sea tu principal activo digital"
          subtitle="Solicita una asesoria gratuita y te mostraremos nuestra metodologia y el potencial de tu Marca"
          buttonText="Solicitar asesoria gratuita"
          buttonLink="/es/solicitar-consulta"
        />

        {/* FAQ Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Preguntas Frecuentes
              </h2>
            </div>
            <FAQSection
              title=""
              subtitle=""
              faqs={faqItems}
            />
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ImpulsaTuMarca;