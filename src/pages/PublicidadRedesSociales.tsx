import React from 'react';
import socialMediaHeroImage from '@/assets/social-media-ads-hero-dashboard.jpg';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import FAQSection from '@/components/FAQSection';
import ServiceContactSection from '@/components/ServiceContactSection';
import SuccessCasesSection from '@/components/SuccessCasesSection';
import { getServiceSuccessCasesConfig } from '@/data/serviceSuccessCasesMapping';
import { useServiceSEO } from '@/hooks/useServiceSEO';
import Seo from '@/components/Seo';
import { 
  Target, TrendingUp, BarChart3, Zap, Users, DollarSign,
  ArrowRight, CheckCircle, Star, Eye, MousePointer, Sparkles,
  Shield, Timer, Settings, Globe, MessageCircle, Calendar,
  Facebook, Instagram, Linkedin, Twitter, Youtube
} from 'lucide-react';

const advertisingServices = [
  {
    icon: <Target className="h-8 w-8 text-primary" />,
    title: "Estrategia Publicitaria",
    description: "Desarrollamos estrategias de paid media personalizadas según tus objetivos de negocio y audiencia objetivo."
  },
  {
    icon: <Eye className="h-8 w-8 text-primary" />,
    title: "Segmentación Avanzada",
    description: "Definimos audiencias precisas utilizando datos demográficos, intereses, comportamientos y audiencias similares."
  },
  {
    icon: <Sparkles className="h-8 w-8 text-primary" />,
    title: "Creatividades Efectivas",
    description: "Diseñamos anuncios visuales y videos que captan la atención y generan conversiones."
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-primary" />,
    title: "Optimización Continua",
    description: "Monitorizamos y optimizamos constantemente las campañas para maximizar el ROI y reducir costes."
  },
  {
    icon: <DollarSign className="h-8 w-8 text-primary" />,
    title: "Gestión de Presupuesto",
    description: "Administramos tu inversión publicitaria de forma eficiente para obtener el máximo rendimiento."
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-primary" />,
    title: "Reporting Detallado",
    description: "Proporcionamos informes completos con métricas clave, insights y recomendaciones de mejora."
  }
];

const advertisingPlatforms = [
  {
    name: "Facebook Ads",
    icon: <Facebook className="h-8 w-8" />,
    description: "La plataforma con mayor alcance y opciones de segmentación",
    features: ["Audiencias personalizadas", "Lookalike audiences", "Pixel tracking", "Retargeting"]
  },
  {
    name: "Instagram Ads",
    icon: <Instagram className="h-8 w-8" />,
    description: "Publicidad visual para marcas con enfoque en lifestyle",
    features: ["Stories ads", "Reels promocionados", "Shopping ads", "Influencer marketing"]
  },
  {
    name: "LinkedIn Ads",
    icon: <Linkedin className="h-8 w-8" />,
    description: "La mejor opción para publicidad B2B y profesional",
    features: ["Segmentación profesional", "Lead gen forms", "Sponsored content", "Message ads"]
  },
  {
    name: "TikTok Ads",
    icon: <MessageCircle className="h-8 w-8" />,
    description: "Alcanza audiencias jóvenes con contenido viral",
    features: ["In-feed ads", "Brand takeover", "Hashtag challenge", "Branded effects"]
  }
];

const campaignTypes = [
  {
    title: "Awareness y Branding",
    description: "Incrementa el conocimiento de marca y alcance",
    metrics: ["Impresiones", "Alcance", "CPM", "Brand Recall"]
  },
  {
    title: "Tráfico Web",
    description: "Dirige usuarios cualificados a tu sitio web",
    metrics: ["CTR", "CPC", "Sesiones", "Tiempo en página"]
  },
  {
    title: "Generación de Leads",
    description: "Captura leads cualificados para tu embudo de ventas",
    metrics: ["CPL", "Tasa conversión", "Calidad leads", "ROI"]
  },
  {
    title: "Conversiones y Ventas",
    description: "Impulsa las ventas directas y conversiones",
    metrics: ["ROAS", "CPA", "Revenue", "LTV"]
  }
];

const processSteps = [
  {
    number: "01",
    title: "Análisis y Estrategia",
    description: "Analizamos tu mercado, competencia y definimos los objetivos y KPIs de las campañas.",
    icon: <BarChart3 className="h-6 w-6" />
  },
  {
    number: "02", 
    title: "Configuración de Campañas",
    description: "Creamos las campañas, definimos audiencias, presupuestos y configuramos el tracking.",
    icon: <Settings className="h-6 w-6" />
  },
  {
    number: "03",
    title: "Creatividades y Copy",
    description: "Desarrollamos anuncios visuales atractivos y textos persuasivos que generen conversiones.",
    icon: <Sparkles className="h-6 w-6" />
  },
  {
    number: "04",
    title: "Monitorización y Optimización",
    description: "Supervisamos el rendimiento diario y optimizamos para mejorar resultados continuamente.",
    icon: <TrendingUp className="h-6 w-6" />
  }
];

const successCases = [
  {
    client: "E-commerce Moda",
    campaign: "Conversiones Facebook + Instagram",
    results: "450% ROAS - €4.5 por cada €1 invertido",
    timeframe: "3 meses",
    testimonial: "Increíble retorno de inversión. Las campañas superaron todas nuestras expectativas."
  },
  {
    client: "Software B2B",
    campaign: "Lead Generation LinkedIn",
    results: "67% reducción CPL - 300+ leads cualificados",
    timeframe: "6 meses",
    testimonial: "Lograron reducir nuestro coste por lead mientras aumentaban la calidad. Profesionales excelentes."
  },
  {
    client: "Restaurante Local",
    campaign: "Awareness Facebook + Instagram",
    results: "280% incremento en reservas online",
    timeframe: "2 meses",
    testimonial: "Pasamos de tener mesas vacías a estar completos cada fin de semana. Increíble trabajo."
  }
];

const benefits = [
  "Alcance masivo y segmentación precisa",
  "Resultados medibles y optimización continua",
  "Mayor velocidad que el posicionamiento orgánico",
  "Control total del presupuesto y gasto",
  "Retargeting para recuperar usuarios interesados",
  "Escalabilidad según resultados obtenidos"
];

const faqItems = [
  {
    question: "¿Cuál es la inversión mínima recomendada en publicidad?",
    answer: "Recomendamos un presupuesto mínimo de €300-500/mes por plataforma para obtener datos significativos y poder optimizar las campañas efectivamente."
  },
  {
    question: "¿En cuánto tiempo se ven resultados en las campañas?",
    answer: "Los primeros datos se obtienen inmediatamente, pero necesitamos 2-4 semanas para optimizar y ver resultados consistentes. Los mejores resultados se alcanzan a partir del mes 2-3."
  },
  {
    question: "¿Qué plataformas recomiendan para mi negocio?",
    answer: "Depende de tu audiencia y objetivos. Para B2C recomendamos Facebook/Instagram, para B2B LinkedIn, para audiencias jóvenes TikTok. Analizamos tu caso específico."
  },
  {
    question: "¿Cómo miden el éxito de las campañas?",
    answer: "Utilizamos KPIs específicos según objetivos: ROAS, CPA, CTR, CPL, etc. Proporcionamos informes detallados con métricas de rendimiento y recomendaciones."
  },
  {
    question: "¿Pueden gestionar el presupuesto publicitario?",
    answer: "Sí, gestionamos completamente tu inversión publicitaria, optimizando la distribución entre campañas y plataformas para maximizar resultados."
  },
  {
    question: "¿Qué sucede si las campañas no funcionan?",
    answer: "Analizamos qué está fallando y ajustamos estrategia, audiencias, creatividades o presupuestos. Nuestro compromiso es conseguir resultados rentables para tu negocio."
  }
];

const PublicidadRedesSociales: React.FC = () => {
  const successCasesConfig = getServiceSuccessCasesConfig('publicidad-redes-sociales');
  
  const { title, description, canonical, ogImage, structuredData } = useServiceSEO({
    serviceName: "Publicidad en Redes Sociales",
    serviceDescription: "Campañas publicitarias en Facebook, Instagram, LinkedIn y TikTok. Segmentación avanzada, creatividades efectivas y optimización continua del ROI.",
    canonical: "/es/servicios/marketing-visibilidad/publicidad-redes-sociales",
    heroImagePath: socialMediaHeroImage,
    serviceType: "Publicidad Digital",
    priceRange: "€€€",
    features: [
      "Estrategia Publicitaria",
      "Segmentación Avanzada",
      "Creatividades Efectivas",
      "Optimización Continua",
      "Gestión de Presupuesto",
      "Reporting Detallado"
    ],
    aggregateRating: {
      ratingValue: "4.9",
      reviewCount: "39"
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
            <span className="text-foreground">Publicidad en Redes Sociales</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">
                <Zap className="h-4 w-4 mr-2" />
                Paid Media & Social Ads
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Publicidad que <span className="text-primary">genera resultados</span> inmediatos
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Impulsa tu negocio con campañas publicitarias altamente efectivas en redes sociales. 
                Alcanza tu audiencia ideal, optimiza tu inversión y maximiza tu retorno publicitario.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="group" asChild>
                  <Link to="/es/contacto">
                    Empezar Campaña
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="#estrategia">Ver Estrategia</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={socialMediaHeroImage}
                  alt="Dashboard profesional de publicidad en redes sociales - Analytics de Facebook, Instagram y LinkedIn"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plataformas Publicitarias */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Publicidad estratégica en todas las plataformas
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Cada plataforma social tiene sus propias oportunidades publicitarias. 
              Elegimos las mejores opciones según tu audiencia y objetivos de negocio.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {advertisingPlatforms.map((platform, index) => (
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

      {/* Tipos de Campañas */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Campañas adaptadas a tus objetivos
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Cada objetivo requiere una estrategia específica. Diseñamos campañas 
              personalizadas para maximizar el retorno de tu inversión publicitaria.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {campaignTypes.map((type, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">{type.title}</CardTitle>
                  <p className="text-muted-foreground">{type.description}</p>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-3">Métricas clave:</h4>
                  <ul className="space-y-2">
                    {type.metrics.map((metric, metricIndex) => (
                      <li key={metricIndex} className="flex items-center">
                        <BarChart3 className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        <span className="text-sm">{metric}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Servicios de Publicidad */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Gestión integral de publicidad digital
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Desde la estrategia hasta la optimización, nos encargamos de todos los aspectos 
              necesarios para que tus campañas publicitarias sean exitosas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advertisingServices.map((service, index) => (
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
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                ¿Por qué confiar tu publicidad digital en nosotros?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Combinamos experiencia, tecnología y creatividad para crear campañas publicitarias 
                que no solo generan clics, sino conversiones reales y crecimiento sostenible.
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
                  <DollarSign className="h-16 w-16 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-4">ROI Garantizado</h3>
                  <p className="text-muted-foreground mb-6">
                    Promedio de 4:1 ROAS en nuestras campañas publicitarias
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-primary">400%</div>
                      <div className="text-sm text-muted-foreground">ROAS Promedio</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">€500K+</div>
                      <div className="text-sm text-muted-foreground">Ad Spend Gestionado</div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Proceso de Trabajo */}
      <section id="estrategia" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Nuestro proceso de gestión publicitaria
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Una metodología probada que garantiza campañas exitosas y 
              maximiza el retorno de tu inversión publicitaria.
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            ¿Listo para hacer despegar tu negocio?
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Deja que gestionemos tu publicidad digital mientras tú te centras en tu negocio. 
            Campañas rentables, resultados medibles y crecimiento garantizado.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="group" asChild>
              <Link to="/es/contacto">
                Lanzar campañas
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" asChild>
              <Link to="/es/casos-exito">Ver más resultados</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Success Cases Section */}
      {successCasesConfig && (
        <SuccessCasesSection
          id="casos-exito"
          title="Casos de <span className='text-gradient-primary'>éxito</span>"
          subtitle={successCasesConfig.subtitle}
          filterTags={successCasesConfig.filterTags}
          specificCases={successCasesConfig.specificCases}
          maxCases={4}
          showAllLink={true}
        />
      )}

      {/* FAQ Section */}
      <FAQSection faqs={faqItems} />

      {/* Contact Section */}
      <ServiceContactSection
        title="¿Hablamos sobre tu publicidad en redes sociales?"
        subtitle="Cuéntanos tu negocio y objetivos en redes. Te responderemos con una propuesta personalizada."
      />
      
      <Footer />
    </div>
  );
};

export default PublicidadRedesSociales;