import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import KitDigitalBanner from '@/components/KitDigitalBanner';
import { useServiceSEO } from '@/hooks/useServiceSEO';
import Seo from '@/components/Seo';
import FAQSection from '@/components/FAQSection';
import ServiceContactSection from '@/components/ServiceContactSection';
import { 
  Heart, Users, BarChart3, Calendar, Camera, MessageCircle, 
  ArrowRight, CheckCircle, Star, Zap, TrendingUp, Target,
  Sparkles, Shield, Timer, Settings, Eye, Globe,
  Instagram, Facebook, Linkedin, Twitter, Youtube
} from 'lucide-react';
import gestionRedesSocialesHero from '@/assets/gestion-redes-sociales-hero.jpg';

const socialMediaServices = [
  {
    icon: <Target className="h-8 w-8 text-primary" />,
    title: "Estrategia de Contenido",
    description: "Desarrollamos una estrategia personalizada de contenido que refleje la personalidad de tu marca y conecte con tu audiencia."
  },
  {
    icon: <Camera className="h-8 w-8 text-primary" />,
    title: "Creación de Contenido Visual",
    description: "Diseñamos posts, stories, videos y contenido visual atractivo que genere engagement y destaque en el feed."
  },
  {
    icon: <Calendar className="h-8 w-8 text-primary" />,
    title: "Planificación y Programación",
    description: "Creamos un calendario editorial estratégico y programamos las publicaciones en los mejores horarios."
  },
  {
    icon: <MessageCircle className="h-8 w-8 text-primary" />,
    title: "Community Management",
    description: "Gestionamos la interacción con tu comunidad, respondemos comentarios y mensajes de forma profesional."
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-primary" />,
    title: "Análisis y Reporting",
    description: "Monitorizamos el rendimiento y proporcionamos informes detallados con insights y recomendaciones."
  },
  {
    icon: <Heart className="h-8 w-8 text-primary" />,
    title: "Engagement y Crecimiento",
    description: "Implementamos estrategias para aumentar el engagement, seguidores y construir una comunidad leal."
  }
];

const socialPlatforms = [
  {
    name: "Instagram",
    icon: <Instagram className="h-8 w-8" />,
    description: "Visual storytelling y conexión emocional",
    features: ["Posts & Stories", "Reels creativos", "Shopping tags", "IGTV"]
  },
  {
    name: "Facebook",
    icon: <Facebook className="h-8 w-8" />,
    description: "Alcance masivo y segmentación precisa",
    features: ["Posts orgánicos", "Facebook Ads", "Eventos", "Grupos"]
  },
  {
    name: "LinkedIn",
    icon: <Linkedin className="h-8 w-8" />,
    description: "Networking profesional y B2B",
    features: ["Contenido profesional", "LinkedIn Ads", "Artículos", "Networking"]
  },
  {
    name: "TikTok",
    icon: <MessageCircle className="h-8 w-8" />,
    description: "Contenido viral y audiencia joven",
    features: ["Videos cortos", "Tendencias", "Hashtags", "Challenges"]
  }
];

const processSteps = [
  {
    number: "01",
    title: "Evaluación de Presencia Actual",
    description: "Analizamos tu presencia en redes sociales, identificando fortalezas y áreas de mejora.",
    icon: <Eye className="h-6 w-6" />
  },
  {
    number: "02", 
    title: "Investigación de Audiencia",
    description: "Definimos y comprendemos a tu audiencia objetivo, incluyendo sus preferencias y comportamientos.",
    icon: <Users className="h-6 w-6" />
  },
  {
    number: "03",
    title: "Estrategia Personalizada",
    description: "Creamos una estrategia de contenido y comunicación alineada con tus objetivos de marca.",
    icon: <Target className="h-6 w-6" />
  },
  {
    number: "04",
    title: "Implementación y Gestión",
    description: "Ejecutamos la estrategia con contenido de calidad y gestión profesional de la comunidad.",
    icon: <Settings className="h-6 w-6" />
  }
];

const successCases = [
  {
    client: "Alcorahe",
    industry: "Aceites de Oliva",
    results: "400% incremento en engagement",
    timeframe: "6 meses",
    testimonial: "Transformaron completamente nuestra presencia en redes. Ahora tenemos una comunidad activa y comprometida."
  },
  {
    client: "Asendia",
    industry: "Empresa Logística", 
    results: "300% crecimiento en seguidores",
    timeframe: "4 meses",
    testimonial: "Profesionales excepcionales. Nos ayudaron a posicionarnos como líderes en nuestro sector."
  },
  {
    client: "La Oriental",
    industry: "Pastelería",
    results: "250% aumento en ventas online",
    timeframe: "3 meses",
    testimonial: "Las redes sociales se convirtieron en nuestro canal principal de ventas gracias a su trabajo."
  }
];

const benefits = [
  "Mayor visibilidad y reconocimiento de marca",
  "Incremento del engagement y interacción",
  "Crecimiento orgánico de la comunidad",
  "Generación de leads cualificados",
  "Mejora en la reputación online",
  "Aumento de las ventas directas"
];

const faqItems = [
  {
    question: "¿En qué redes sociales pueden gestionar mi presencia?",
    answer: "Gestionamos todas las principales plataformas: Instagram, Facebook, LinkedIn, TikTok, Twitter/X, YouTube. Seleccionamos las más adecuadas según tu audiencia y objetivos."
  },
  {
    question: "¿Cuántas publicaciones realizan por semana?",
    answer: "Depende del plan contratado, pero generalmente realizamos entre 3-7 publicaciones semanales por plataforma, incluyendo posts, stories y contenido interactivo."
  },
  {
    question: "¿Crean todo el contenido visual?",
    answer: "Sí, nuestro equipo creativo desarrolla todo el contenido visual: posts, stories, videos, graphics, adaptándolo al estilo y personalidad de tu marca."
  },
  {
    question: "¿Responden a comentarios y mensajes?",
    answer: "Sí, incluimos community management completo. Respondemos comentarios, mensajes directos y gestionamos la interacción con tu audiencia de forma profesional."
  },
  {
    question: "¿Qué tipo de informes proporcionan?",
    answer: "Entregamos informes mensuales detallados con métricas de rendimiento, análisis de audiencia, engagement, alcance y recomendaciones de mejora."
  },
  {
    question: "¿Pueden gestionar las campañas publicitarias?",
    answer: "Sí, además de la gestión orgánica, podemos crear y gestionar campañas publicitarias en redes sociales para maximizar el alcance y conversiones."
  }
];

const GestionRedesSociales: React.FC = () => {
  const { title, description, canonical, ogImage, structuredData } = useServiceSEO({
    serviceName: "Gestión de Redes Sociales",
    serviceDescription: "Gestión profesional de redes sociales con estrategia de contenido, community management y analítica. Construye tu comunidad y aumenta el engagement.",
    canonical: "/es/servicios/marketing-visibilidad/gestion-redes-sociales",
    heroImagePath: gestionRedesSocialesHero,
    serviceType: "Marketing Digital",
    priceRange: "€€",
    features: [
      "Estrategia de Contenido",
      "Creación de Contenido Visual",
      "Planificación y Programación",
      "Community Management",
      "Análisis y Reporting",
      "Engagement y Crecimiento"
    ],
    aggregateRating: {
      ratingValue: "4.8",
      reviewCount: "45"
    }
  });
  
  return (
    <div className="min-h-screen bg-background">
      <Seo 
        title={title}
        description={description}
        canonical={canonical}
        ogImage={ogImage}
        structuredData={structuredData}
      />
      <Navigation />
      
      {/* Breadcrumb */}
      <div className="bg-muted/30 py-4">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary">Inicio</Link>
            <span className="mx-2">/</span>
            <Link to="/servicios" className="hover:text-primary">Servicios</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">Gestión de Redes Sociales</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">
                <Heart className="h-4 w-4 mr-2" />
                Community Management & Social Media
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Contenido que <span className="text-primary">Conecta y Convierte</span> en Redes Sociales
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Transformamos tu presencia en redes sociales con estrategias personalizadas 
                que generan engagement auténtico, construyen comunidad y impulsan tu negocio.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="group" asChild>
                  <Link to="/es/contacto">
                    Potenciar mis Redes
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="#metodologia">Ver Metodología</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={gestionRedesSocialesHero}
                  alt="Gestión profesional de redes sociales con Instagram, TikTok, Facebook y LinkedIn"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plataformas Sociales */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Presencia Estratégica en Todas las Plataformas
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Cada red social tiene su propio lenguaje y audiencia. Adaptamos tu mensaje 
              y estrategia para maximizar el impacto en cada plataforma.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {socialPlatforms.map((platform, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 text-center">
                <CardHeader>
                  <div className="mb-4 text-primary group-hover:scale-110 transition-transform duration-300 flex justify-center">
                    {platform.icon}
                  </div>
                  <CardTitle className="text-xl">{platform.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{platform.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {platform.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center justify-center">
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

      {/* Servicios Integrales */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Gestión Integral de Redes Sociales
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Desde la estrategia hasta la ejecución, nos encargamos de todos los aspectos 
              necesarios para hacer crecer tu presencia en redes sociales.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {socialMediaServices.map((service, index) => (
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

      {/* Por qué Elegirnos */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                ¿Por qué confiar en nosotros tus redes sociales?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Combinamos creatividad, estrategia y análisis de datos para crear contenido 
                que no solo se ve bien, sino que genera resultados reales para tu negocio.
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
                  <Users className="h-16 w-16 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Equipo Especializado</h3>
                  <p className="text-muted-foreground mb-6">
                    Dos especialistas dedicados: un senior y un junior para tu proyecto
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-primary">+50</div>
                      <div className="text-sm text-muted-foreground">Marcas Gestionadas</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">300%</div>
                      <div className="text-sm text-muted-foreground">Crecimiento Medio</div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Metodología */}
      <section id="metodologia" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Nuestra Metodología de Trabajo
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Un proceso estructurado que garantiza resultados consistentes y 
              crecimiento sostenible en todas las plataformas sociales.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <span className="text-2xl font-bold text-primary">{step.number}</span>
                  </div>
                  <div className="mb-2 text-primary group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Casos de Éxito */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Casos de Éxito en Redes Sociales
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Marcas que han transformado su presencia digital y alcanzado 
              resultados extraordinarios con nuestra gestión.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {successCases.map((caso, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg">{caso.client}</CardTitle>
                    <Badge variant="secondary">{caso.timeframe}</Badge>
                  </div>
                  <p className="text-sm text-primary font-medium">{caso.industry}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-green-50 dark:bg-green-950 p-4 rounded-lg">
                    <p className="text-sm font-medium text-green-700 dark:text-green-300">
                      {caso.results}
                    </p>
                  </div>
                  <blockquote className="text-sm text-muted-foreground italic border-l-4 border-primary pl-4">
                    "{caso.testimonial}"
                  </blockquote>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Kit Digital */}
      <KitDigitalBanner />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            ¿Listo para hacer crecer tu comunidad?
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Deja que gestionemos tus redes sociales mientras tú te centras en tu negocio. 
            Contenido de calidad, engagement auténtico y resultados medibles.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="group" asChild>
              <Link to="/es/contacto">
                Empezar Ahora
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" asChild>
              <Link to="/es/casos-exito">Ver Más Casos</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection faqs={faqItems} />

      {/* Contact Section */}
      <ServiceContactSection
        title="¿Hablamos sobre la gestión de tus redes sociales?"
        subtitle="Cuéntanos tu negocio y objetivos en redes. Te responderemos con una propuesta personalizada."
      />
      
      <Footer />
    </div>
  );
};

export default GestionRedesSociales;