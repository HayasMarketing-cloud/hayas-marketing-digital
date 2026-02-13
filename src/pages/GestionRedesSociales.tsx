import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

import { useServiceSEO } from '@/hooks/useServiceSEO';
import { useTranslation } from '@/hooks/useTranslation';
import EnhancedSEO from '@/components/EnhancedSEO';
import FAQSection from '@/components/FAQSection';
import ServiceContactSection from '@/components/ServiceContactSection';
import { 
  Heart, Users, BarChart3, Calendar, Camera, MessageCircle, 
  ArrowRight, CheckCircle, Star, Zap, TrendingUp, Target,
  Sparkles, Shield, Timer, Settings, Eye, Globe,
  Instagram, Facebook, Linkedin, Twitter, Youtube
} from 'lucide-react';
import gestionRedesSocialesHero from '@/assets/gestion-redes-sociales-hero.jpg';

const GestionRedesSociales: React.FC = () => {
  const { language } = useTranslation();
  const isEnglish = language === 'en';

  const socialMediaServices = isEnglish ? [
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Content Strategy",
      description: "We develop a personalized content strategy that reflects your brand personality and connects with your audience."
    },
    {
      icon: <Camera className="h-8 w-8 text-primary" />,
      title: "Visual Content Creation",
      description: "We design posts, stories, videos, and attractive visual content that generates engagement and stands out in the feed."
    },
    {
      icon: <Calendar className="h-8 w-8 text-primary" />,
      title: "Planning & Scheduling",
      description: "We create a strategic editorial calendar and schedule posts at the best times."
    },
    {
      icon: <MessageCircle className="h-8 w-8 text-primary" />,
      title: "Community Management",
      description: "We manage interaction with your community, responding to comments and messages professionally."
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
      title: "Analytics & Reporting",
      description: "We monitor performance and provide detailed reports with insights and recommendations."
    },
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: "Engagement & Growth",
      description: "We implement strategies to increase engagement, followers, and build a loyal community."
    }
  ] : [
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

  const socialPlatforms = isEnglish ? [
    {
      name: "Instagram",
      icon: <Instagram className="h-8 w-8" />,
      description: "Visual storytelling and emotional connection",
      features: ["Posts & Stories", "Creative Reels", "Shopping tags", "IGTV"]
    },
    {
      name: "Facebook",
      icon: <Facebook className="h-8 w-8" />,
      description: "Massive reach and precise targeting",
      features: ["Organic posts", "Facebook Ads", "Events", "Groups"]
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-8 w-8" />,
      description: "Professional networking and B2B",
      features: ["Professional content", "LinkedIn Ads", "Articles", "Networking"]
    },
    {
      name: "TikTok",
      icon: <MessageCircle className="h-8 w-8" />,
      description: "Viral content and young audience",
      features: ["Short videos", "Trends", "Hashtags", "Challenges"]
    }
  ] : [
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

  const processSteps = isEnglish ? [
    {
      number: "01",
      title: "Current Presence Evaluation",
      description: "We analyze your social media presence, identifying strengths and areas for improvement.",
      icon: <Eye className="h-6 w-6" />
    },
    {
      number: "02", 
      title: "Audience Research",
      description: "We define and understand your target audience, including their preferences and behaviors.",
      icon: <Users className="h-6 w-6" />
    },
    {
      number: "03",
      title: "Customized Strategy",
      description: "We create a content and communication strategy aligned with your brand objectives.",
      icon: <Target className="h-6 w-6" />
    },
    {
      number: "04",
      title: "Implementation & Management",
      description: "We execute the strategy with quality content and professional community management.",
      icon: <Settings className="h-6 w-6" />
    }
  ] : [
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

  const successCases = isEnglish ? [
    {
      client: "Alcorahe",
      industry: "Olive Oils",
      results: "400% increase in engagement",
      timeframe: "6 months",
      testimonial: "They completely transformed our social media presence. Now we have an active and engaged community."
    },
    {
      client: "Asendia",
      industry: "Logistics Company", 
      results: "300% follower growth",
      timeframe: "4 months",
      testimonial: "Exceptional professionals. They helped us position ourselves as leaders in our sector."
    },
    {
      client: "La Oriental",
      industry: "Bakery",
      results: "250% increase in online sales",
      timeframe: "3 months",
      testimonial: "Social media became our main sales channel thanks to their work."
    }
  ] : [
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

  const benefits = isEnglish ? [
    "Greater visibility and brand recognition",
    "Increased engagement and interaction",
    "Organic community growth",
    "Qualified lead generation",
    "Improved online reputation",
    "Direct sales increase"
  ] : [
    "Mayor visibilidad y reconocimiento de marca",
    "Incremento del engagement y interacción",
    "Crecimiento orgánico de la comunidad",
    "Generación de leads cualificados",
    "Mejora en la reputación online",
    "Aumento de las ventas directas"
  ];

  const faqItems = isEnglish ? [
    {
      question: "Which social networks can you manage my presence on?",
      answer: "We manage all major platforms: Instagram, Facebook, LinkedIn, TikTok, Twitter/X, YouTube. We select the most suitable ones based on your audience and objectives."
    },
    {
      question: "How many posts do you publish per week?",
      answer: "It depends on the plan contracted, but we generally publish 3-7 posts weekly per platform, including posts, stories, and interactive content."
    },
    {
      question: "Do you create all the visual content?",
      answer: "Yes, our creative team develops all visual content: posts, stories, videos, graphics, adapting it to your brand's style and personality."
    },
    {
      question: "Do you respond to comments and messages?",
      answer: "Yes, we include complete community management. We respond to comments, direct messages, and professionally manage interaction with your audience."
    },
    {
      question: "What type of reports do you provide?",
      answer: "We deliver detailed monthly reports with performance metrics, audience analysis, engagement, reach, and improvement recommendations."
    },
    {
      question: "Can you manage advertising campaigns?",
      answer: "Yes, in addition to organic management, we can create and manage advertising campaigns on social media to maximize reach and conversions."
    }
  ] : [
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

  const { title, description, canonical, ogImage, structuredData } = useServiceSEO({
    serviceName: isEnglish ? "Social Media Management" : "Gestión de Redes Sociales",
    serviceDescription: isEnglish 
      ? "Professional social media management with content strategy, community management, and analytics. Build your community and increase engagement."
      : "Gestión profesional de redes sociales con estrategia de contenido, community management y analítica. Construye tu comunidad y aumenta el engagement.",
    canonical: isEnglish ? "/en/services/social-media-management" : "/es/servicios/marketing-visibilidad/gestion-redes-sociales",
    heroImagePath: gestionRedesSocialesHero,
    serviceType: isEnglish ? "Digital Marketing" : "Marketing Digital",
    priceRange: "€€",
    features: isEnglish ? [
      "Content Strategy",
      "Visual Content Creation",
      "Planning & Scheduling",
      "Community Management",
      "Analytics & Reporting",
      "Engagement & Growth"
    ] : [
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

  const breadcrumbItems = isEnglish ? [
    { label: 'Home', href: '/en' },
    { label: 'Services', href: '/en/services' },
    { label: 'Social Media Management' }
  ] : [
    { label: 'Inicio', href: '/' },
    { label: 'Servicios', href: '/servicios' },
    { label: 'Gestión de Redes Sociales' }
  ];

  const content = {
    heroBadge: isEnglish ? 'Community Management & Social Media' : 'Community Management & Social Media',
    heroTitle: isEnglish 
      ? 'Content that <span class="text-primary">Connects and Converts</span> on Social Media'
      : 'Contenido que <span class="text-primary">Conecta y Convierte</span> en Redes Sociales',
    heroSubtitle: isEnglish 
      ? 'We transform your social media presence with personalized strategies that generate authentic engagement, build community, and drive your business.'
      : 'Transformamos tu presencia en redes sociales con estrategias personalizadas que generan engagement auténtico, construyen comunidad y impulsan tu negocio.',
    heroCTA: isEnglish ? 'Boost my Networks' : 'Potenciar mis Redes',
    heroSecondaryCTA: isEnglish ? 'View Methodology' : 'Ver Metodología',
    platformsTitle: isEnglish ? 'Strategic Presence on All Platforms' : 'Presencia Estratégica en Todas las Plataformas',
    platformsSubtitle: isEnglish 
      ? 'Each social network has its own language and audience. We adapt your message and strategy to maximize impact on each platform.'
      : 'Cada red social tiene su propio lenguaje y audiencia. Adaptamos tu mensaje y estrategia para maximizar el impacto en cada plataforma.',
    servicesTitle: isEnglish ? 'Comprehensive Social Media Management' : 'Gestión Integral de Redes Sociales',
    servicesSubtitle: isEnglish 
      ? 'From strategy to execution, we handle all aspects needed to grow your social media presence.'
      : 'Desde la estrategia hasta la ejecución, nos encargamos de todos los aspectos necesarios para hacer crecer tu presencia en redes sociales.',
    whyUsTitle: isEnglish 
      ? 'Why trust us with your social media?'
      : '¿Por qué confiar en nosotros tus redes sociales?',
    whyUsSubtitle: isEnglish 
      ? 'We combine creativity, strategy, and data analysis to create content that not only looks good but generates real results for your business.'
      : 'Combinamos creatividad, estrategia y análisis de datos para crear contenido que no solo se ve bien, sino que genera resultados reales para tu negocio.',
    teamTitle: isEnglish ? 'Specialized Team' : 'Equipo Especializado',
    teamSubtitle: isEnglish 
      ? 'Two dedicated specialists: a senior and a junior for your project'
      : 'Dos especialistas dedicados: un senior y un junior para tu proyecto',
    brandsManaged: isEnglish ? 'Brands Managed' : 'Marcas Gestionadas',
    averageGrowth: isEnglish ? 'Average Growth' : 'Crecimiento Medio',
    methodologyTitle: isEnglish ? 'Our Work Methodology' : 'Nuestra Metodología de Trabajo',
    methodologySubtitle: isEnglish 
      ? 'A structured process that ensures consistent results and sustainable growth across all social platforms.'
      : 'Un proceso estructurado que garantiza resultados consistentes y crecimiento sostenible en todas las plataformas sociales.',
    successTitle: isEnglish ? 'Social Media Success Cases' : 'Casos de Éxito en Redes Sociales',
    successSubtitle: isEnglish 
      ? 'Brands that have transformed their digital presence and achieved measurable results.'
      : 'Marcas que han transformado su presencia digital y alcanzado resultados medibles.',
    ctaTitle: isEnglish 
      ? 'Ready to Transform Your Social Media?'
      : '¿Listo para Transformar tus Redes Sociales?',
    ctaSubtitle: isEnglish 
      ? "Let's create content that builds community and drives business results."
      : 'Creemos contenido que construya comunidad e impulse resultados de negocio.',
    ctaPrimary: isEnglish ? 'Start Now' : 'Empezar Ahora',
    ctaSecondary: isEnglish ? 'See Plans' : 'Ver Planes',
    faqTitle: isEnglish 
      ? 'Frequently Asked Questions about Social Media Management'
      : 'Preguntas Frecuentes sobre Gestión de Redes Sociales',
    faqSubtitle: isEnglish 
      ? 'Everything you need to know about our social media management service.'
      : 'Todo lo que necesitas saber sobre nuestro servicio de gestión de redes sociales.',
    contactTitle: isEnglish 
      ? 'Ready to boost your social media?'
      : '¿Listo para potenciar tus redes sociales?',
    contactSubtitle: isEnglish 
      ? 'Tell us about your brand and we will design a social media strategy tailored to your goals.'
      : 'Cuéntanos sobre tu marca y diseñaremos una estrategia de redes sociales adaptada a tus objetivos.'
  };
  
  return (
    <div className="min-h-screen bg-background">
      <EnhancedSEO />
      <Navigation />
      
      {/* Breadcrumb */}
      <div className="bg-muted/30 py-4">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-muted-foreground">
            {breadcrumbItems.map((item, index) => (
              <React.Fragment key={index}>
                {index > 0 && <span className="mx-2">/</span>}
                {item.href ? (
                  <Link to={item.href} className="hover:text-primary">{item.label}</Link>
                ) : (
                  <span className="text-foreground">{item.label}</span>
                )}
              </React.Fragment>
            ))}
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
                {content.heroBadge}
              </Badge>
              <h1 
                className="text-4xl lg:text-5xl font-bold mb-6"
                dangerouslySetInnerHTML={{ __html: content.heroTitle }}
              />
              <p className="text-lg text-muted-foreground mb-8">
                {content.heroSubtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="group" asChild>
                  <Link to={isEnglish ? "/en/contact" : "/es/contacto"}>
                    {content.heroCTA}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="#metodologia">{content.heroSecondaryCTA}</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={gestionRedesSocialesHero}
                  alt={isEnglish 
                    ? "Professional social media management with Instagram, TikTok, Facebook and LinkedIn"
                    : "Gestión profesional de redes sociales con Instagram, TikTok, Facebook y LinkedIn"
                  }
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
              {content.platformsTitle}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {content.platformsSubtitle}
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
              {content.servicesTitle}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {content.servicesSubtitle}
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
                {content.whyUsTitle}
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                {content.whyUsSubtitle}
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
                  <h3 className="text-2xl font-bold mb-4">{content.teamTitle}</h3>
                  <p className="text-muted-foreground mb-6">
                    {content.teamSubtitle}
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-primary">+50</div>
                      <div className="text-sm text-muted-foreground">{content.brandsManaged}</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">300%</div>
                      <div className="text-sm text-muted-foreground">{content.averageGrowth}</div>
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
              {content.methodologyTitle}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {content.methodologySubtitle}
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
              {content.successTitle}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {content.successSubtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {successCases.map((caseItem, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">{caseItem.industry}</Badge>
                    <span className="text-xs text-muted-foreground">{caseItem.timeframe}</span>
                  </div>
                  <CardTitle className="text-xl">{caseItem.client}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="text-2xl font-bold text-primary mb-2">{caseItem.results}</div>
                  </div>
                  <blockquote className="text-sm text-muted-foreground italic border-l-2 border-primary pl-4">
                    "{caseItem.testimonial}"
                  </blockquote>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            {content.ctaTitle}
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            {content.ctaSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="group" asChild>
              <Link to={isEnglish ? "/en/contact" : "/es/contacto"}>
                {content.ctaPrimary}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to={isEnglish ? "/en/services" : "/servicios"}>
                {content.ctaSecondary}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection 
        title={content.faqTitle}
        subtitle={content.faqSubtitle}
        faqs={faqItems}
      />

      {/* Contact Section */}
      <ServiceContactSection
        title={content.contactTitle}
        subtitle={content.contactSubtitle}
        sourcePage="Gestión Redes Sociales"
      />

      <Footer />
    </div>
  );
};

export default GestionRedesSociales;
