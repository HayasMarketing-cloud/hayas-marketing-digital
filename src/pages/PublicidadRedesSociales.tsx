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
import { useTranslation } from '@/hooks/useTranslation';
import EnhancedSEO from '@/components/EnhancedSEO';
import { 
  Target, TrendingUp, BarChart3, Zap, DollarSign,
  ArrowRight, CheckCircle, Eye, Sparkles,
  Settings, MessageCircle,
  Facebook, Instagram, Linkedin
} from 'lucide-react';

const PublicidadRedesSociales: React.FC = () => {
  const { language } = useTranslation();
  const isEnglish = language === 'en';
  const successCasesConfig = getServiceSuccessCasesConfig('publicidad-redes-sociales');

  const content = {
    es: {
      serviceName: "Publicidad en Redes Sociales",
      serviceDescription: "Campañas publicitarias en Facebook, Instagram, LinkedIn y TikTok. Segmentación avanzada, creatividades efectivas y optimización continua del ROI.",
      canonical: "/es/servicios/marketing-visibilidad/publicidad-redes-sociales",
      breadcrumb: { home: "Inicio", services: "Servicios", current: "Publicidad en Redes Sociales" },
      badge: "Paid Media & Social Ads",
      heroTitle: "Publicidad que",
      heroTitleHighlight: "genera resultados",
      heroTitleEnd: "inmediatos",
      heroSubtitle: "Impulsa tu negocio con campañas publicitarias altamente efectivas en redes sociales. Alcanza tu audiencia ideal, optimiza tu inversión y maximiza tu retorno publicitario.",
      primaryCTA: "Empezar Campaña",
      secondaryCTA: "Ver Estrategia",
      platformsTitle: "Publicidad estratégica en todas las plataformas",
      platformsSubtitle: "Cada plataforma social tiene sus propias oportunidades publicitarias. Elegimos las mejores opciones según tu audiencia y objetivos de negocio.",
      campaignTypesTitle: "Campañas adaptadas a tus objetivos",
      campaignTypesSubtitle: "Cada objetivo requiere una estrategia específica. Diseñamos campañas personalizadas para maximizar el retorno de tu inversión publicitaria.",
      keyMetrics: "Métricas clave:",
      servicesTitle: "Gestión integral de publicidad digital",
      servicesSubtitle: "Desde la estrategia hasta la optimización, nos encargamos de todos los aspectos necesarios para que tus campañas publicitarias sean exitosas.",
      whyUsTitle: "¿Por qué confiar tu publicidad digital en nosotros?",
      whyUsSubtitle: "Combinamos experiencia, tecnología y creatividad para crear campañas publicitarias que no solo generan clics, sino conversiones reales y crecimiento sostenible.",
      roiTitle: "ROI Garantizado",
      roiSubtitle: "Promedio de 4:1 ROAS en nuestras campañas publicitarias",
      roasLabel: "ROAS Promedio",
      adSpendLabel: "Ad Spend Gestionado",
      processTitle: "Nuestro proceso de gestión publicitaria",
      processSubtitle: "Una metodología probada que garantiza campañas exitosas y maximiza el retorno de tu inversión publicitaria.",
      ctaTitle: "¿Listo para hacer despegar tu negocio?",
      ctaSubtitle: "Deja que gestionemos tu publicidad digital mientras tú te centras en tu negocio. Campañas rentables, resultados medibles y crecimiento garantizado.",
      ctaPrimary: "Lanzar campañas",
      ctaSecondary: "Ver más resultados",
      successCasesTitle: "Casos de éxito",
      contactTitle: "¿Hablamos sobre tu publicidad en redes sociales?",
      contactSubtitle: "Cuéntanos tu negocio y objetivos en redes. Te responderemos con una propuesta personalizada.",
      advertisingServices: [
        { title: "Estrategia Publicitaria", description: "Desarrollamos estrategias de paid media personalizadas según tus objetivos de negocio y audiencia objetivo." },
        { title: "Segmentación Avanzada", description: "Definimos audiencias precisas utilizando datos demográficos, intereses, comportamientos y audiencias similares." },
        { title: "Creatividades Efectivas", description: "Diseñamos anuncios visuales y videos que captan la atención y generan conversiones." },
        { title: "Optimización Continua", description: "Monitorizamos y optimizamos constantemente las campañas para maximizar el ROI y reducir costes." },
        { title: "Gestión de Presupuesto", description: "Administramos tu inversión publicitaria de forma eficiente para obtener el máximo rendimiento." },
        { title: "Reporting Detallado", description: "Proporcionamos informes completos con métricas clave, insights y recomendaciones de mejora." }
      ],
      advertisingPlatforms: [
        { name: "Facebook Ads", description: "La plataforma con mayor alcance y opciones de segmentación", features: ["Audiencias personalizadas", "Lookalike audiences", "Pixel tracking", "Retargeting"] },
        { name: "Instagram Ads", description: "Publicidad visual para marcas con enfoque en lifestyle", features: ["Stories ads", "Reels promocionados", "Shopping ads", "Influencer marketing"] },
        { name: "LinkedIn Ads", description: "La mejor opción para publicidad B2B y profesional", features: ["Segmentación profesional", "Lead gen forms", "Sponsored content", "Message ads"] },
        { name: "TikTok Ads", description: "Alcanza audiencias jóvenes con contenido viral", features: ["In-feed ads", "Brand takeover", "Hashtag challenge", "Branded effects"] }
      ],
      campaignTypes: [
        { title: "Awareness y Branding", description: "Incrementa el conocimiento de marca y alcance", metrics: ["Impresiones", "Alcance", "CPM", "Brand Recall"] },
        { title: "Tráfico Web", description: "Dirige usuarios cualificados a tu sitio web", metrics: ["CTR", "CPC", "Sesiones", "Tiempo en página"] },
        { title: "Generación de Leads", description: "Captura leads cualificados para tu embudo de ventas", metrics: ["CPL", "Tasa conversión", "Calidad leads", "ROI"] },
        { title: "Conversiones y Ventas", description: "Impulsa las ventas directas y conversiones", metrics: ["ROAS", "CPA", "Revenue", "LTV"] }
      ],
      processSteps: [
        { number: "01", title: "Análisis y Estrategia", description: "Analizamos tu mercado, competencia y definimos los objetivos y KPIs de las campañas." },
        { number: "02", title: "Configuración de Campañas", description: "Creamos las campañas, definimos audiencias, presupuestos y configuramos el tracking." },
        { number: "03", title: "Creatividades y Copy", description: "Desarrollamos anuncios visuales atractivos y textos persuasivos que generen conversiones." },
        { number: "04", title: "Monitorización y Optimización", description: "Supervisamos el rendimiento diario y optimizamos para mejorar resultados continuamente." }
      ],
      benefits: [
        "Alcance masivo y segmentación precisa",
        "Resultados medibles y optimización continua",
        "Mayor velocidad que el posicionamiento orgánico",
        "Control total del presupuesto y gasto",
        "Retargeting para recuperar usuarios interesados",
        "Escalabilidad según resultados obtenidos"
      ],
      faqItems: [
        { question: "¿Cuál es la inversión mínima recomendada en publicidad?", answer: "Recomendamos un presupuesto mínimo de €300-500/mes por plataforma para obtener datos significativos y poder optimizar las campañas efectivamente." },
        { question: "¿En cuánto tiempo se ven resultados en las campañas?", answer: "Los primeros datos se obtienen inmediatamente, pero necesitamos 2-4 semanas para optimizar y ver resultados consistentes. Los mejores resultados se alcanzan a partir del mes 2-3." },
        { question: "¿Qué plataformas recomiendan para mi negocio?", answer: "Depende de tu audiencia y objetivos. Para B2C recomendamos Facebook/Instagram, para B2B LinkedIn, para audiencias jóvenes TikTok. Analizamos tu caso específico." },
        { question: "¿Cómo miden el éxito de las campañas?", answer: "Utilizamos KPIs específicos según objetivos: ROAS, CPA, CTR, CPL, etc. Proporcionamos informes detallados con métricas de rendimiento y recomendaciones." },
        { question: "¿Pueden gestionar el presupuesto publicitario?", answer: "Sí, gestionamos completamente tu inversión publicitaria, optimizando la distribución entre campañas y plataformas para maximizar resultados." },
        { question: "¿Qué sucede si las campañas no funcionan?", answer: "Analizamos qué está fallando y ajustamos estrategia, audiencias, creatividades o presupuestos. Nuestro compromiso es conseguir resultados rentables para tu negocio." }
      ]
    },
    en: {
      serviceName: "Social Media Advertising",
      serviceDescription: "Advertising campaigns on Facebook, Instagram, LinkedIn and TikTok. Advanced targeting, effective creatives, and continuous ROI optimization.",
      canonical: "/en/services/social-media-advertising",
      breadcrumb: { home: "Home", services: "Services", current: "Social Media Advertising" },
      badge: "Paid Media & Social Ads",
      heroTitle: "Advertising that",
      heroTitleHighlight: "delivers results",
      heroTitleEnd: "immediately",
      heroSubtitle: "Boost your business with highly effective social media advertising campaigns. Reach your ideal audience, optimize your investment, and maximize your advertising return.",
      primaryCTA: "Start Campaign",
      secondaryCTA: "View Strategy",
      platformsTitle: "Strategic advertising across all platforms",
      platformsSubtitle: "Each social platform has its own advertising opportunities. We choose the best options based on your audience and business goals.",
      campaignTypesTitle: "Campaigns tailored to your goals",
      campaignTypesSubtitle: "Each goal requires a specific strategy. We design personalized campaigns to maximize your advertising investment return.",
      keyMetrics: "Key metrics:",
      servicesTitle: "Comprehensive digital advertising management",
      servicesSubtitle: "From strategy to optimization, we handle all aspects needed to make your advertising campaigns successful.",
      whyUsTitle: "Why trust us with your digital advertising?",
      whyUsSubtitle: "We combine experience, technology, and creativity to create advertising campaigns that not only generate clicks, but real conversions and sustainable growth.",
      roiTitle: "Guaranteed ROI",
      roiSubtitle: "Average 4:1 ROAS in our advertising campaigns",
      roasLabel: "Average ROAS",
      adSpendLabel: "Ad Spend Managed",
      processTitle: "Our advertising management process",
      processSubtitle: "A proven methodology that guarantees successful campaigns and maximizes your advertising investment return.",
      ctaTitle: "Ready to launch your business?",
      ctaSubtitle: "Let us manage your digital advertising while you focus on your business. Profitable campaigns, measurable results, and guaranteed growth.",
      ctaPrimary: "Launch campaigns",
      ctaSecondary: "See more results",
      successCasesTitle: "Success cases",
      contactTitle: "Shall we talk about your social media advertising?",
      contactSubtitle: "Tell us about your business and social media goals. We'll respond with a personalized proposal.",
      advertisingServices: [
        { title: "Advertising Strategy", description: "We develop personalized paid media strategies based on your business objectives and target audience." },
        { title: "Advanced Targeting", description: "We define precise audiences using demographics, interests, behaviors, and lookalike audiences." },
        { title: "Effective Creatives", description: "We design visual ads and videos that capture attention and generate conversions." },
        { title: "Continuous Optimization", description: "We constantly monitor and optimize campaigns to maximize ROI and reduce costs." },
        { title: "Budget Management", description: "We efficiently manage your advertising investment to get maximum performance." },
        { title: "Detailed Reporting", description: "We provide complete reports with key metrics, insights, and improvement recommendations." }
      ],
      advertisingPlatforms: [
        { name: "Facebook Ads", description: "The platform with the greatest reach and targeting options", features: ["Custom audiences", "Lookalike audiences", "Pixel tracking", "Retargeting"] },
        { name: "Instagram Ads", description: "Visual advertising for lifestyle-focused brands", features: ["Stories ads", "Promoted Reels", "Shopping ads", "Influencer marketing"] },
        { name: "LinkedIn Ads", description: "The best option for B2B and professional advertising", features: ["Professional targeting", "Lead gen forms", "Sponsored content", "Message ads"] },
        { name: "TikTok Ads", description: "Reach young audiences with viral content", features: ["In-feed ads", "Brand takeover", "Hashtag challenge", "Branded effects"] }
      ],
      campaignTypes: [
        { title: "Awareness & Branding", description: "Increase brand awareness and reach", metrics: ["Impressions", "Reach", "CPM", "Brand Recall"] },
        { title: "Web Traffic", description: "Drive qualified users to your website", metrics: ["CTR", "CPC", "Sessions", "Time on page"] },
        { title: "Lead Generation", description: "Capture qualified leads for your sales funnel", metrics: ["CPL", "Conversion rate", "Lead quality", "ROI"] },
        { title: "Conversions & Sales", description: "Drive direct sales and conversions", metrics: ["ROAS", "CPA", "Revenue", "LTV"] }
      ],
      processSteps: [
        { number: "01", title: "Analysis & Strategy", description: "We analyze your market, competition, and define campaign objectives and KPIs." },
        { number: "02", title: "Campaign Setup", description: "We create campaigns, define audiences, budgets, and configure tracking." },
        { number: "03", title: "Creatives & Copy", description: "We develop attractive visual ads and persuasive copy that generate conversions." },
        { number: "04", title: "Monitoring & Optimization", description: "We supervise daily performance and optimize to continuously improve results." }
      ],
      benefits: [
        "Massive reach and precise targeting",
        "Measurable results and continuous optimization",
        "Faster than organic positioning",
        "Total budget and spending control",
        "Retargeting to recover interested users",
        "Scalability based on results obtained"
      ],
      faqItems: [
        { question: "What is the recommended minimum advertising investment?", answer: "We recommend a minimum budget of €300-500/month per platform to obtain significant data and optimize campaigns effectively." },
        { question: "How long does it take to see campaign results?", answer: "Initial data is obtained immediately, but we need 2-4 weeks to optimize and see consistent results. Best results are achieved from month 2-3." },
        { question: "Which platforms do you recommend for my business?", answer: "It depends on your audience and goals. For B2C we recommend Facebook/Instagram, for B2B LinkedIn, for young audiences TikTok. We analyze your specific case." },
        { question: "How do you measure campaign success?", answer: "We use specific KPIs based on objectives: ROAS, CPA, CTR, CPL, etc. We provide detailed reports with performance metrics and recommendations." },
        { question: "Can you manage the advertising budget?", answer: "Yes, we completely manage your advertising investment, optimizing distribution between campaigns and platforms to maximize results." },
        { question: "What happens if campaigns don't work?", answer: "We analyze what's failing and adjust strategy, audiences, creatives, or budgets. Our commitment is to achieve profitable results for your business." }
      ]
    }
  };

  const t = isEnglish ? content.en : content.es;
  const platformIcons = [<Facebook className="h-8 w-8" />, <Instagram className="h-8 w-8" />, <Linkedin className="h-8 w-8" />, <MessageCircle className="h-8 w-8" />];
  const serviceIcons = [<Target className="h-8 w-8 text-primary" />, <Eye className="h-8 w-8 text-primary" />, <Sparkles className="h-8 w-8 text-primary" />, <BarChart3 className="h-8 w-8 text-primary" />, <DollarSign className="h-8 w-8 text-primary" />, <TrendingUp className="h-8 w-8 text-primary" />];
  const processIcons = [<BarChart3 className="h-6 w-6" />, <Settings className="h-6 w-6" />, <Sparkles className="h-6 w-6" />, <TrendingUp className="h-6 w-6" />];

  const { title, description, canonical, ogImage, structuredData } = useServiceSEO({
    serviceName: t.serviceName,
    serviceDescription: t.serviceDescription,
    canonical: t.canonical,
    heroImagePath: socialMediaHeroImage,
    serviceType: "Publicidad Digital",
    priceRange: "€€€",
    features: t.advertisingServices.map(s => s.title),
    aggregateRating: { ratingValue: "4.9", reviewCount: "39" }
  });
  
  return (
    <div className="min-h-screen bg-background">
      <EnhancedSEO />
      <Navigation />
      
      {/* Breadcrumb */}
      <div className="bg-muted/30 py-4">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary">{t.breadcrumb.home}</Link>
            <span className="mx-2">/</span>
            <Link to={isEnglish ? "/en/services" : "/servicios"} className="hover:text-primary">{t.breadcrumb.services}</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">{t.breadcrumb.current}</span>
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
                {t.badge}
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                {t.heroTitle} <span className="text-primary">{t.heroTitleHighlight}</span> {t.heroTitleEnd}
              </h1>
              <p className="text-lg text-muted-foreground mb-8">{t.heroSubtitle}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="group" asChild>
                  <Link to={isEnglish ? "/contacto" : "/es/contacto"}>
                    {t.primaryCTA}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="#estrategia">{t.secondaryCTA}</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={socialMediaHeroImage}
                  alt={isEnglish ? "Professional social media advertising dashboard - Facebook, Instagram and LinkedIn Analytics" : "Dashboard profesional de publicidad en redes sociales - Analytics de Facebook, Instagram y LinkedIn"}
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">{t.platformsTitle}</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{t.platformsSubtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {t.advertisingPlatforms.map((platform, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 text-center">
                <CardHeader>
                  <div className="mb-4 text-primary group-hover:scale-110 transition-transform duration-300 flex justify-center">
                    {platformIcons[index]}
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">{t.campaignTypesTitle}</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{t.campaignTypesSubtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {t.campaignTypes.map((type, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">{type.title}</CardTitle>
                  <p className="text-muted-foreground">{type.description}</p>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-3">{t.keyMetrics}</h4>
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">{t.servicesTitle}</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{t.servicesSubtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.advertisingServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20">
                <CardHeader>
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                    {serviceIcons[index]}
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
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">{t.whyUsTitle}</h2>
              <p className="text-lg text-muted-foreground mb-8">{t.whyUsSubtitle}</p>
              
              <div className="grid gap-6">
                {t.benefits.map((benefit, index) => (
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
                  <h3 className="text-2xl font-bold mb-4">{t.roiTitle}</h3>
                  <p className="text-muted-foreground mb-6">{t.roiSubtitle}</p>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-primary">400%</div>
                      <div className="text-sm text-muted-foreground">{t.roasLabel}</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">€500K+</div>
                      <div className="text-sm text-muted-foreground">{t.adSpendLabel}</div>
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">{t.processTitle}</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{t.processSubtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.processSteps.map((step, index) => (
              <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <span className="text-2xl font-bold text-primary">{step.number}</span>
                  </div>
                  <div className="mb-2 text-primary group-hover:scale-110 transition-transform duration-300">
                    {processIcons[index]}
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
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">{t.ctaTitle}</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">{t.ctaSubtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="group" asChild>
              <Link to={isEnglish ? "/contacto" : "/es/contacto"}>
                {t.ctaPrimary}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" asChild>
              <Link to={isEnglish ? "/en/case-studies" : "/es/casos-exito"}>{t.ctaSecondary}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Success Cases Section */}
      {successCasesConfig && (
        <SuccessCasesSection
          id="casos-exito"
          title={t.successCasesTitle}
          subtitle={successCasesConfig.subtitle}
          filterTags={successCasesConfig.filterTags}
          specificCases={successCasesConfig.specificCases}
          maxCases={4}
          showAllLink={true}
        />
      )}

      {/* FAQ Section */}
      <FAQSection faqs={t.faqItems} />

      {/* Contact Section */}
      <ServiceContactSection
        title={t.contactTitle}
        subtitle={t.contactSubtitle}
      />
      
      <Footer />
    </div>
  );
};

export default PublicidadRedesSociales;
