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
import FAQSection from '@/components/FAQSection';
import SuccessCasesSection from '@/components/SuccessCasesSection';
import ServiceContactSection from '@/components/ServiceContactSection';
import IntermediateCTA from '@/components/IntermediateCTA';
import { 
  Globe, Languages, Search, Target, Sparkles, Users, TrendingUp, 
  ArrowRight, CheckCircle, Star, Zap, Monitor, Layout,
  Shield, Timer, FileText, Settings, Lightbulb, Calendar
} from 'lucide-react';

const processSteps = [
  {
    number: '01',
    title: 'Análisis cultural y de mercado',
    description: 'Investigamos tu audiencia objetivo, competencia local, keywords regionales y contexto cultural específico.',
    icon: <Target className="h-6 w-6" />
  },
  {
    number: '02',
    title: 'Adaptación lingüística especializada',
    description: 'Localización por expertos nativos especializados en tu sector, respetando matices culturales y técnicos.',
    icon: <Languages className="h-6 w-6" />
  },
  {
    number: '03',
    title: 'Implementación técnica y SEO',
    description: 'Configuración técnica multiidioma, optimización SEO local y testing de funcionalidades por región.',
    icon: <Search className="h-6 w-6" />
  },
  {
    number: '04',
    title: 'Optimización y medición',
    description: 'Monitorización de rendimiento, ajustes basados en métricas locales y optimización continua.',
    icon: <TrendingUp className="h-6 w-6" />
  }
];

const faqItems = [
  {
    question: '¿Cuál es la diferencia entre traducción y localización?',
    answer: 'La traducción convierte texto de un idioma a otro. La localización adapta completamente el contenido al contexto cultural, incluyendo monedas, formatos de fecha, referencias culturales, colores, imágenes y SEO local. Es una adaptación integral para cada mercado.'
  },
  {
    question: '¿Qué idiomas y mercados pueden cubrir?',
    answer: 'Trabajamos con más de 25 idiomas principales incluyendo inglés, francés, alemán, italiano, portugués, chino, japonés y árabe. Nos especializamos en mercados europeos, americanos y asiáticos, con traductores nativos especializados por sector.'
  },
  {
    question: '¿Incluyen SEO internacional en la localización?',
    answer: 'Sí, es fundamental. Incluimos investigación de keywords locales, configuración hreflang, optimización técnica internacional, estructura de URLs multiidioma y estrategia de contenido adaptada para el SEO de cada región.'
  },
  {
    question: '¿Cuánto tiempo toma localizar un sitio web completo?',
    answer: 'Depende del volumen y complejidad. Un sitio corporativo estándar toma 3-4 semanas por idioma. E-commerce complejos pueden requerir 6-8 semanas. Siempre proporcionamos cronogramas detallados tras el análisis inicial.'
  },
  {
    question: '¿Cómo manejan las diferencias culturales sensibles?',
    answer: 'Tenemos protocolos específicos de revisión cultural. Analizamos simbolismos, colores, imágenes, referencias históricas y costumbres locales. Cada proyecto pasa por revisión cultural con expertos nativos del mercado objetivo.'
  },
  {
    question: '¿Pueden localizar campañas publicitarias existentes?',
    answer: 'Absolutamente. Adaptamos creatividades, copys, landing pages y estrategias publicitarias completas. Esto incluye adaptación de mensajes, imágenes culturalmente apropiadas y optimización para plataformas locales.'
  }
];

// Hero Section Component
const HeroSection = () => {
  return (
    <section className="relative mt-4 md:mt-6 pb-16 bg-gradient-to-br from-primary/5 via-white to-accent/5 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <Badge variant="secondary" className="w-fit">
              🌍 Expansión Internacional
            </Badge>
            
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Localización de{' '}
                <span className="text-gradient-primary">contenidos</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Conecta con audiencias globales adaptando tu mensaje a su idioma, cultura y contexto. 
                Más que traducción: localización integral con enfoque SEO.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8 py-6" asChild>
                <Link to="/es/solicitar-consulta">
                  Solicitar propuesta de localización
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              
              <Button variant="outline" size="lg" className="text-lg px-8 py-6" asChild>
                <Link to="#casos-exito">
                  Ver casos de éxito
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10">
              <img
                src="/localizacion-contenidos-hero-unique.jpg"
                alt="Localización de contenidos para expansión internacional"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-accent to-primary rounded-full opacity-10 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Pain Points Section Component
const LocalizacionPainPointsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            ¿Por qué tu negocio necesita <span className="text-gradient-primary">localización profesional</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            La simple traducción no es suficiente para conquistar mercados internacionales
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="p-8 text-center border-l-4 border-l-red-500 bg-red-50/50">
            <CardContent className="p-0">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Barrera cultural invisible
              </h3>
              <p className="text-gray-600">
                Tu contenido se pierde en traducciones literales que no conectan emocionalmente con la audiencia local.
              </p>
            </CardContent>
          </Card>
          
          <Card className="p-8 text-center border-l-4 border-l-orange-500 bg-orange-50/50">
            <CardContent className="p-0">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                SEO internacional perdido
              </h3>
              <p className="text-gray-600">
                Sin keywords locales ni configuración técnica adecuada, tu contenido no se encuentra en mercados objetivos.
              </p>
            </CardContent>
          </Card>
          
          <Card className="p-8 text-center border-l-4 border-l-yellow-500 bg-yellow-50/50">
            <CardContent className="p-0">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Oportunidades desperdiciadas
              </h3>
              <p className="text-gray-600">
                Cada día que tu contenido no está localizado es una oportunidad de expansión perdida en mercados rentables.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

// Solution Preview Section Component
const LocalizacionSolutionPreviewSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Nuestra <span className="text-gradient-primary">solución integral</span> de localización
              </h2>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Adaptamos tu contenido para que resuene culturalmente y se posicione en cada mercado objetivo.
              </p>
            </div>
            
            <div className="grid gap-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Languages className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Adaptación lingüística y cultural</h3>
                  <p className="text-gray-600">
                    Traducción especializada que respeta el contexto cultural, modismos locales y preferencias de comunicación.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Search className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">SEO multilingüe avanzado</h3>
                  <p className="text-gray-600">
                    Investigación de keywords locales, optimización técnica internacional y estrategia adaptada por mercado.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Globe className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Implementación técnica completa</h3>
                  <p className="text-gray-600">
                    Configuración hreflang, estructura multiidioma, CDN regional y optimización de rendimiento.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <Card className="p-8 shadow-xl">
              <CardContent className="p-0">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline">Mercados objetivo</Badge>
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                      <span className="text-sm font-medium">🇪🇸 España</span>
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    </div>
                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                      <span className="text-sm font-medium">🇺🇸 Estados Unidos</span>
                      <ArrowRight className="h-5 w-5 text-blue-600" />
                    </div>
                    <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                      <span className="text-sm font-medium">🇫🇷 Francia</span>
                      <ArrowRight className="h-5 w-5 text-purple-600" />
                    </div>
                    <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                      <span className="text-sm font-medium">🇩🇪 Alemania</span>
                      <ArrowRight className="h-5 w-5 text-orange-600" />
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Incremento conversión</span>
                      <span className="font-semibold text-green-600">+320%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

// Benefits Grid Section Component
const LocalizacionBenefitsGridSection = () => {
  const benefits = [
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "87% mayor conexión",
      description: "Conexión y confianza con tu público objetivo internacional"
    },
    {
      icon: <Search className="h-8 w-8" />,
      title: "+156% tráfico orgánico",
      description: "Incremento en tráfico orgánico en mercados localizados"
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "3.2x mejor conversión",
      description: "Mejor conversión al eliminar barreras culturales"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "SEO optimizado",
      description: "Posicionamiento SEO optimizado para cada mercado específico"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Adaptación cultural",
      description: "Respeta costumbres y sensibilidades locales"
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "UX nativa",
      description: "Experiencia de usuario nativa en cada idioma y región"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-white to-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            ¿Por qué localizar <span className="text-gradient-primary">tus contenidos</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            La localización va más allá de la traducción: conecta emocionalmente con tu audiencia internacional.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-primary">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

const LocalizacionContenidos = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Breadcrumb */}
      <div className="bg-muted/30 py-4 mt-20">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-gray-600">
            <Link to="/es" className="hover:text-primary">Inicio</Link>
            <span className="mx-2">/</span>
            <Link to="/es#soluciones" className="hover:text-primary">Soluciones</Link>
            <span className="mx-2">/</span>
            <Link to="/es/soluciones/impulsa-tu-marca" className="hover:text-primary">Impulsa tu marca</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Localización de contenidos</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <HeroSection />

      {/* Pain Points Section */}
      <LocalizacionPainPointsSection />

      {/* Solution Preview Section */}
      <LocalizacionSolutionPreviewSection />

      {/* Process Section */}
      <ProcessSection
        title={<>Nuestro proceso de <span className="text-gradient-primary">localización</span></>}
        subtitle="Metodología probada en 4 fases para garantizar el éxito en cada mercado objetivo."
        steps={processSteps}
      />

      {/* Benefits Grid Section */}
      <LocalizacionBenefitsGridSection />

      {/* Success Cases Section */}
      <SuccessCasesSection
        id="casos-exito"
        title="Casos de <span className='text-gradient-primary'>éxito</span> en localización"
        subtitle="Proyectos internacionales que han conseguido resultados excepcionales gracias a la localización profesional."
        filterTags={["traduccion"]}
        maxCases={4}
        showAllLink={true}
      />
      
      <ReviewsSection />

      {/* Intermediate CTA */}
      <IntermediateCTA 
        title="¿Listo para expandir tu negocio internacionalmente?"
        subtitle="Solicita una consulta gratuita y descubre cómo la localización profesional puede multiplicar tu alcance y conversiones en mercados internacionales"
        buttonText="Solicitar consulta gratuita"
        buttonLink="/solicitar-consulta"
      />

      {/* FAQ Section */}
      <FAQSection 
        title="Preguntas frecuentes"
        subtitle="Resolvemos las dudas más comunes sobre localización de contenidos"
        faqs={faqItems} 
      />

      {/* Related Posts */}
      <ServiceRelatedPosts serviceSlug="localizacion-contenidos" />

      {/* Contact Section */}
      <ServiceContactSection
        title="¿Listo para expandir tu negocio internacionalmente?"
        subtitle="Cuéntanos qué mercados quieres abordar y qué contenidos necesitas localizar. Te enviaremos una propuesta personalizada."
        formId="ZHNw4rjAzNdvFbFnIk1V"
        className="bg-gradient-to-br from-primary/10 via-white to-accent/10"
      />
      
      <Footer />
    </div>
  );
};

export default LocalizacionContenidos;