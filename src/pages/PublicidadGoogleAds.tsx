import React from 'react';
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
import { useFAQSEO } from '@/hooks/useFAQSEO';
import Seo from '@/components/Seo';
import { 
  Search, Target, TrendingUp, BarChart3, Zap, DollarSign, MousePointer,
  ArrowRight, CheckCircle, Star, Eye, Users, Sparkles, Globe,
  Shield, Timer, Settings, Calendar, MapPin, Smartphone, Monitor
} from 'lucide-react';

const googleAdsServices = [
  {
    icon: <Search className="h-8 w-8 text-primary" />,
    title: "Red de Búsqueda",
    description: "Anuncios de texto que aparecen cuando los usuarios buscan tus productos o servicios en Google."
  },
  {
    icon: <Eye className="h-8 w-8 text-primary" />,
    title: "Red de Display",
    description: "Anuncios visuales en millones de sitios web, apps y videos para aumentar el reconocimiento de marca."
  },
  {
    icon: <Smartphone className="h-8 w-8 text-primary" />,
    title: "Campañas de Shopping",
    description: "Promociona tus productos con imágenes, precios y información directamente en los resultados de búsqueda."
  },
  {
    icon: <Monitor className="h-8 w-8 text-primary" />,
    title: "Campañas de Video",
    description: "Anuncios en YouTube y en la red de socios de video de Google para máximo alcance visual."
  },
  {
    icon: <MapPin className="h-8 w-8 text-primary" />,
    title: "Campañas Locales",
    description: "Atrae clientes a tu ubicación física con anuncios locales optimizados geográficamente."
  },
  {
    icon: <Target className="h-8 w-8 text-primary" />,
    title: "Remarketing",
    description: "Reconecta con usuarios que ya visitaron tu sitio web para aumentar las conversiones."
  }
];

const campaignObjectives = [
  {
    title: "Incrementar Ventas",
    description: "Generar más conversiones y aumentar los ingresos",
    metrics: ["ROAS", "CPA", "Revenue", "Conversiones"]
  },
  {
    title: "Obtener Leads",
    description: "Capturar información de clientes potenciales cualificados",
    metrics: ["CPL", "Tasa conversión", "Calidad leads", "Formularios"]
  },
  {
    title: "Aumentar Tráfico Web",
    description: "Dirigir más visitantes cualificados a tu sitio web",
    metrics: ["CTR", "CPC", "Sesiones", "Páginas vistas"]
  },
  {
    title: "Generar Awareness",
    description: "Incrementar el conocimiento y reconocimiento de marca",
    metrics: ["Impresiones", "Alcance", "CPM", "Share of voice"]
  }
];

const processSteps = [
  {
    number: "01",
    title: "Auditoría y Análisis",
    description: "Analizamos tu negocio, competencia y objetivos para definir la estrategia SEM más efectiva.",
    icon: <BarChart3 className="h-6 w-6" />
  },
  {
    number: "02", 
    title: "Investigación de Palabras Clave",
    description: "Identificamos las keywords más relevantes y rentables para tu negocio y sector.",
    icon: <Search className="h-6 w-6" />
  },
  {
    number: "03",
    title: "Configuración de Campañas",
    description: "Creamos y configuramos las campañas, grupos de anuncios, palabras clave y extensiones.",
    icon: <Settings className="h-6 w-6" />
  },
  {
    number: "04",
    title: "Optimización Continua",
    description: "Monitorizamos y optimizamos diariamente para mejorar el rendimiento y reducir costes.",
    icon: <TrendingUp className="h-6 w-6" />
  }
];

const successCases = [
  {
    client: "Empresa de Software",
    campaign: "Google Ads B2B - Search + Display",
    results: "580% ROAS - 200+ leads cualificados/mes",
    timeframe: "6 meses",
    testimonial: "Transformaron completamente nuestra generación de leads. ROI excepcional desde el primer mes."
  },
  {
    client: "E-commerce Deportes",
    campaign: "Shopping + Search Campaigns",
    results: "420% incremento en ventas online",
    timeframe: "4 meses",
    testimonial: "Las campañas de Google Ads se convirtieron en nuestro canal de ventas más rentable."
  },
  {
    client: "Clínica Dental",
    campaign: "Campañas Locales + Search",
    results: "350% aumento en citas reservadas",
    timeframe: "3 meses",
    testimonial: "Agenda siempre llena gracias a la publicidad en Google. Inversión totalmente recuperada."
  }
];

const benefits = [
  "Aparece inmediatamente en Google cuando te buscan",
  "Segmentación precisa por ubicación, edad, intereses",
  "Pago únicamente por clics recibidos",
  "Resultados medibles y optimizables en tiempo real",
  "Control total del presupuesto diario y mensual",
  "Mayor velocidad que el posicionamiento orgánico"
];

const faqItems = [
  {
    question: "¿Cuál es la inversión mínima recomendada en Google Ads?",
    answer: "Recomendamos un presupuesto mínimo de €500-800/mes para obtener suficientes datos y poder optimizar efectivamente las campañas. Esto varía según el sector y competencia."
  },
  {
    question: "¿Cuánto tiempo tarda en verse resultados?",
    answer: "Los anuncios aparecen inmediatamente una vez aprobados (24-48h), pero necesitamos 2-4 semanas para optimizar y conseguir resultados estables y rentables."
  },
  {
    question: "¿Cómo determinan las palabras clave adecuadas?",
    answer: "Realizamos investigación exhaustiva usando herramientas profesionales, analizamos la competencia y seleccionamos keywords basadas en volumen de búsqueda, competencia y relevancia."
  },
  {
    question: "¿Qué tipo de campañas recomiendan para mi negocio?",
    answer: "Depende de tus objetivos: Search para captar demanda, Display para awareness, Shopping para e-commerce, y YouTube para engagement. Analizamos tu caso específico."
  },
  {
    question: "¿Cómo miden el éxito de las campañas?",
    answer: "Utilizamos métricas clave como ROAS, CPA, CTR, Quality Score, conversiones y revenue. Proporcionamos informes detallados mensuales con análisis y recomendaciones."
  },
  {
    question: "¿Pueden optimizar campañas ya existentes?",
    answer: "Sí, realizamos auditorías de cuentas existentes y optimizamos estructura, palabras clave, pujas, anuncios y landing pages para mejorar el rendimiento."
  },
  {
    question: "¿Cuánto cuesta la publicidad en Google Ads en 2025?",
    answer: "El coste de Google Ads depende de tu sector y competencia. CPC promedio en España: 0.50€-3€ para keywords genéricas, 3€-15€+ para sectores competitivos (legal, finanzas, seguros). Además del presupuesto de ads, considera la gestión profesional (10-20% del presupuesto o tarifa fija desde 400€/mes). Un negocio local puede empezar con 500-800€/mes, mientras que empresas B2B competitivas invierten 3.000€-10.000€+/mes."
  },
  {
    question: "¿Qué es el Quality Score y cómo afecta mis anuncios?",
    answer: "Quality Score (Nivel de Calidad) es una métrica de Google (1-10) que evalúa la relevancia de tus anuncios, keywords y landing pages. Un Quality Score alto (7-10) reduce tu CPC hasta un 50%, mejora la posición del anuncio y aumenta el ROI. Se mejora con: keywords relevantes, anuncios específicos por grupo, landing pages optimizadas, CTR alto y experiencia de usuario positiva."
  }
];

const PublicidadGoogleAds: React.FC = () => {
  const successCasesConfig = getServiceSuccessCasesConfig('publicidad-google-ads');
  
  const { title, description, canonical, ogImage, structuredData } = useServiceSEO({
    serviceName: "Publicidad en Google Ads",
    serviceDescription: "Campañas de publicidad SEM en Google Ads optimizadas para generar conversiones. Gestión profesional de campañas con análisis continuo y optimización del ROI.",
    canonical: "/es/servicios/marketing-visibilidad/publicidad-google-ads",
    serviceType: "Publicidad Digital",
    priceRange: "€€€",
    features: [
      "Red de Búsqueda",
      "Red de Display",
      "Campañas de Shopping",
      "Campañas de Video",
      "Campañas Locales",
      "Remarketing"
    ],
    aggregateRating: {
      ratingValue: "4.8",
      reviewCount: "53"
    }
  });

  // FAQ Schema para Featured Snippets (FASE 7)
  const faqSchema = useFAQSEO({
    faqs: faqItems,
    pageUrl: '/es/servicios/marketing-visibilidad/publicidad-google-ads'
  });

  // Combine schemas
  const combinedStructuredData = [structuredData, faqSchema.structuredData];

  return (
    <div className="min-h-screen bg-white">
      <Seo 
        title={title}
        description={description}
        canonical={canonical}
        ogImage={ogImage}
        structuredData={combinedStructuredData}
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
            <span className="text-foreground">Publicidad en Google Ads</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">
                <Search className="h-4 w-4 mr-2" />
                SEM & Google Ads
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Aparece primero en Google cuando <span className="text-primary">te buscan</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Potencia tu negocio con publicidad estratégica en Google Ads. Aparece justo 
                cuando tus clientes buscan lo que ofreces y convierte clics en ventas reales.
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
                  src="/publicidad-google-ads-hero.jpg"
                  alt="Panel de gestión profesional de Google Ads - Campañas y métricas"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tipos de Campañas */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Todos los tipos de campañas de Google Ads
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Desde búsquedas hasta display, shopping y video. Utilizamos todos los formatos 
              de Google Ads para maximizar tu alcance y conversiones.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {googleAdsServices.map((service, index) => (
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

      {/* Objetivos de Campaña */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Campañas diseñadas para tus objetivos
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Cada negocio tiene objetivos únicos. Configuramos las campañas 
              específicamente para alcanzar tus metas comerciales.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {campaignObjectives.map((objective, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">{objective.title}</CardTitle>
                  <p className="text-muted-foreground">{objective.description}</p>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-3">Métricas clave:</h4>
                  <ul className="space-y-2">
                    {objective.metrics.map((metric, metricIndex) => (
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

      {/* Por qué Elegirnos */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                ¿Por qué confiar tu publicidad en Google a nosotros?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Somos especialistas certificados en Google Ads con años de experiencia 
                gestionando presupuestos publicitarios y optimizando campañas rentables.
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
                  <h3 className="text-2xl font-bold mb-4">Certificados Google Partner</h3>
                  <p className="text-muted-foreground mb-6">
                    Especialistas certificados con acceso a herramientas avanzadas
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-primary">500%</div>
                      <div className="text-sm text-muted-foreground">ROAS Promedio</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">€1M+</div>
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
      <section id="estrategia" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Nuestra metodología de Google Ads
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Un proceso probado que garantiza campañas rentables desde el primer día 
              y optimización continua para maximizar tu retorno de inversión.
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
            ¿Listo para aparecer en Google cuando te buscan?
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Deja que gestionemos tu publicidad en Google Ads mientras tú te centras en tu negocio. 
            Resultados inmediatos, campañas rentables y crecimiento sostenible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="group" asChild>
              <Link to="/es/contacto">
                Empezar ahora
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" asChild>
              <Link to="/es/casos-exito">Ver más casos</Link>
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
        title="¿Hablamos sobre tus campañas de Google Ads?"
        subtitle="Cuéntanos tu negocio y objetivos publicitarios. Te responderemos con una propuesta personalizada."
      />
      
      <Footer />
    </div>
  );
};

export default PublicidadGoogleAds;