import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ReviewsSection from '@/components/ReviewsSection';
import { Card, CardContent } from '@/components/ui/card';
import EnhancedSEO from '@/components/EnhancedSEO';
import FAQSection from '@/components/FAQSection';
import ServiceContactSection from '@/components/ServiceContactSection';
import IntermediateCTA from '@/components/IntermediateCTA';
import { useTranslation } from '@/hooks/useTranslation';
import { Button } from '@/components/ui/button';
import {
  BrainCircuit,
  Search,
  FileText,
  BarChart3,
  Link2,
  Layers,
  ArrowRight,
  Code2,
  Zap,
  Shield,
  Rocket,
  Globe,
  Database,
} from 'lucide-react';

const SensePlatform = () => {
  const { language } = useTranslation();
  const isEnglish = language === 'en';

  const content = {
    serviceName: isEnglish ? 'SENSE - Marketing Intelligence System' : 'SENSE - Sistema de Inteligencia de Marketing',
    serviceDescription: isEnglish
      ? 'Marketing intelligence system that connects strategy, data and execution. Designed to grow with your business.'
      : 'Sistema de inteligencia de marketing que conecta estrategia, datos y ejecución. Diseñado para crecer con tu negocio.',
    canonical: isEnglish ? '/en/solutions/marketing-intelligence-platform' : '/es/soluciones/plataforma-inteligencia-marketing',
    features: isEnglish ? [
      'Professional website with your brand',
      'SEO tracker with GSC & DataForSEO',
      'Content hub with editorial management',
      'Real-time performance dashboards'
    ] : [
      'Web profesional con tu marca',
      'SEO tracker con GSC y DataForSEO',
      'Content hub con gestión editorial',
      'Dashboards de rendimiento en tiempo real'
    ],
    breadcrumbHome: isEnglish ? 'Home' : 'Inicio',
    breadcrumbSolutions: isEnglish ? 'Solutions' : 'Soluciones',
    breadcrumbCurrent: isEnglish ? 'SENSE Marketing' : 'Marketing SENSE',
    homeLink: isEnglish ? '/en' : '/es',
    solutionsLink: isEnglish ? '/en#solutions' : '/es#soluciones',
    heroTitle: isEnglish
      ? <>SENSE: Your <span className="text-gradient-primary">Marketing Intelligence</span> System</>
      : <>SENSE: Tu Sistema de <span className="text-gradient-primary">Inteligencia de Marketing</span></>,
    heroSubtitle: isEnglish
      ? 'Strategy, data and execution connected in one system. Your website, SEO monitoring, content management and performance dashboards — all integrated and built for your business.'
      : 'Estrategia, datos y ejecución conectados en un sistema. Tu web, monitorización SEO, gestión de contenidos y dashboards de rendimiento — todo integrado y construido para tu negocio.',
    whatIsTitle: isEnglish ? 'What does SENSE include?' : '¿Qué incluye SENSE?',
    whatIsDescription: isEnglish
      ? 'A 360 marketing plan aligned with your business strategy. Website, SEO, content, CRM and performance dashboards — all connected in one system. Powered by AI, governed by people.'
      : 'Un plan de marketing 360 alineado con la estrategia de tu negocio. Web, SEO, contenidos, CRM y dashboards de rendimiento — todo conectado en un solo sistema. Impulsado por IA, gobernado por personas.',
    builtWithTitle: isEnglish ? 'Our technology' : 'Nuestra tecnología',
    builtWithDescription: isEnglish
      ? 'We build your system with cutting-edge web technology: fast, scalable and with a professional experience. No WordPress. No templates. Your own system, ready to grow with you.'
      : 'Construimos tu sistema con tecnología web de última generación: rápida, escalable y con una experiencia profesional. Sin WordPress. Sin plantillas. Tu propio sistema, listo para crecer contigo.',
    integrationsTitle: isEnglish ? 'Real integrations' : 'Integraciones reales',
    integrationsDescription: isEnglish
      ? 'Your system connects with the tools that matter: CRM, SEO tracking, analytics and more. Real data, real-time.'
      : 'Tu sistema se conecta con las herramientas que importan: CRM, seguimiento SEO, analítica y más. Datos reales, en tiempo real.',
    forWhomTitle: isEnglish ? 'Who is it for?' : '¿Para quién es?',
    ctaTitle: isEnglish ? 'Ready to professionalize your digital presence?' : '¿Listo para profesionalizar tu presencia digital?',
    ctaDescription: isEnglish
      ? 'Schedule a strategic session to explore how we can build your custom marketing system.'
      : 'Agenda una sesión estratégica para explorar cómo construir tu sistema de marketing a medida.',
    ctaButton: isEnglish ? 'Schedule a demo' : 'Agendar una demo',
    ctaLink: isEnglish ? '/en/schedule-meeting' : '/es/agendar-reunion',
  };

  const featuresList = isEnglish ? [
    { icon: Globe, title: 'Professional Website', description: 'Modern, fast and responsive website. Optimized for conversions and brand consistency.' },
    { icon: Search, title: 'SEO Tracker', description: 'Integrated keyword tracking and monitoring. Follow your positions, indexation and organic performance in real time.' },
    { icon: FileText, title: 'Content Hub', description: 'Editorial management with briefings, content calendars, and AI-assisted content creation workflows.' },
    { icon: BarChart3, title: 'Performance Dashboards', description: 'Real-time analytics connecting SEO, content, CRM and campaign data in one view.' },
    { icon: Link2, title: 'CRM Integration', description: 'Native connections to your CRM. Unified customer data and marketing attribution.' },
    { icon: Layers, title: 'White-Label System', description: 'Fully branded with your logo, colors and domain. It\'s your system, not a shared tool.' },
  ] : [
    { icon: Globe, title: 'Web Profesional', description: 'Web moderna, rápida y responsive. Optimizada para conversiones y coherencia de marca.' },
    { icon: Search, title: 'SEO Tracker', description: 'Seguimiento de keywords y monitorización integrados. Sigue tus posiciones, indexación y rendimiento orgánico en tiempo real.' },
    { icon: FileText, title: 'Content Hub', description: 'Gestión editorial con briefings, calendarios de contenido y flujos de creación asistidos por IA.' },
    { icon: BarChart3, title: 'Dashboards de Rendimiento', description: 'Analítica en tiempo real que conecta datos de SEO, contenidos, CRM y campañas en una sola vista.' },
    { icon: Link2, title: 'Integración CRM', description: 'Conexiones nativas con tu CRM. Datos unificados de clientes y atribución de marketing.' },
    { icon: Layers, title: 'Sistema con tu Marca', description: 'Totalmente personalizado con tu logo, colores y dominio. Es tu sistema, no una herramienta compartida.' },
  ];

  const builtWithFeatures = isEnglish ? [
    { icon: Code2, title: 'Cutting-edge technology', description: 'Modular and flexible design. No unnecessary dependencies or technological debt.' },
    { icon: Zap, title: 'Fast & Scalable', description: 'Your website loads instantly. Grows with your business without losing performance.' },
    { icon: Shield, title: 'Secure & Owned', description: 'You own your system. Your data, your domain, your brand — always.' },
    { icon: Rocket, title: 'Rapid Deployment', description: 'From concept to launch in 4-6 weeks. No 6-month development cycles.' },
  ] : [
    { icon: Code2, title: 'Tecnología de última generación', description: 'Diseño modular y flexible. Sin dependencias innecesarias ni deuda tecnológica.' },
    { icon: Zap, title: 'Rápida y Escalable', description: 'Tu web carga al instante. Crece con tu negocio sin perder rendimiento.' },
    { icon: Shield, title: 'Seguro y Propio', description: 'Tú eres dueño de tu sistema. Tus datos, tu dominio, tu marca — siempre.' },
    { icon: Rocket, title: 'Despliegue Rápido', description: 'De concepto a lanzamiento en 4-6 semanas. Sin ciclos de desarrollo de 6 meses.' },
  ];

  const integrations = [
    { name: 'Google Search Console', description: isEnglish ? 'Organic search data' : 'Datos de búsqueda orgánica' },
    { name: isEnglish ? 'SEO API' : 'API de SEO', description: isEnglish ? 'Keyword tracking & SERP analysis' : 'Tracking de keywords y análisis SERP' },
    { name: 'HubSpot', description: isEnglish ? 'CRM & marketing automation' : 'CRM y automatización de marketing' },
    { name: 'GoHighLevel', description: isEnglish ? 'CRM for SMBs & agencies' : 'CRM para pymes y agencias' },
    { name: 'Google Analytics', description: isEnglish ? 'Traffic & behavior analytics' : 'Analítica de tráfico y comportamiento' },
    { name: 'Stripe', description: isEnglish ? 'Payments & subscriptions' : 'Pagos y suscripciones' },
  ];

  const forWhom = isEnglish ? [
    { title: 'Growing businesses', description: 'Companies that want a professional digital presence backed by real data, not just a pretty website.' },
    { title: 'Marketing teams', description: 'Teams that need SEO, content and performance data centralized in one system instead of 10 separate tools.' },
    { title: 'Agencies & consultants', description: 'Professionals who want to deliver branded systems to their clients with real tracking capabilities.' },
  ] : [
    { title: 'Empresas en crecimiento', description: 'Empresas que quieren una presencia digital profesional respaldada por datos reales, no solo una web bonita.' },
    { title: 'Equipos de marketing', description: 'Equipos que necesitan SEO, contenidos y datos de rendimiento centralizados en un sistema, no en 10 herramientas separadas.' },
    { title: 'Agencias y consultores', description: 'Profesionales que quieren entregar sistemas con su marca a sus clientes con capacidades reales de seguimiento.' },
  ];

  const faqs = isEnglish ? [
    { question: 'What technology is the system built with?', answer: 'We use cutting-edge web technology: fast, scalable and designed for professional experiences. No WordPress, no templates.' },
    { question: 'Is this a shared SaaS product?', answer: 'No. Each system is custom-built for you. Your domain, your brand, your data. It\'s not a login to a shared tool.' },
    { question: 'How long does implementation take?', answer: 'A standard deployment takes 4-6 weeks. Complex implementations with multiple integrations can take 8-12 weeks.' },
    { question: 'Can I integrate my existing CRM?', answer: 'Yes. We support native integrations with HubSpot, GoHighLevel, and custom CRM connections via API.' },
    { question: 'What happens after launch?', answer: 'We offer ongoing management and optimization plans. Or your team can manage it independently with our training and documentation.' },
    { question: 'Does it include SEO optimization?', answer: 'Yes. The system includes built-in SEO best practices, integrated tracking tools, and content features designed for search visibility.' },
  ] : [
    { question: '¿Con qué tecnología se construye el sistema?', answer: 'Utilizamos tecnología web de última generación: rápida, escalable y diseñada para experiencias profesionales. Sin WordPress, sin plantillas.' },
    { question: '¿Es un producto SaaS compartido?', answer: 'No. Cada sistema se construye a medida para ti. Tu dominio, tu marca, tus datos. No es un login a una herramienta compartida.' },
    { question: '¿Cuánto tarda la implementación?', answer: 'Un despliegue estándar tarda 4-6 semanas. Implementaciones complejas con múltiples integraciones pueden llevar 8-12 semanas.' },
    { question: '¿Puedo integrar mi CRM actual?', answer: 'Sí. Soportamos integraciones nativas con HubSpot, GoHighLevel y conexiones CRM personalizadas vía API.' },
    { question: '¿Qué pasa después del lanzamiento?', answer: 'Ofrecemos planes de gestión y optimización continua. O tu equipo puede gestionarlo de forma independiente con nuestra formación y documentación.' },
    { question: '¿Incluye optimización SEO?', answer: 'Sí. El sistema incluye buenas prácticas SEO integradas, herramientas de seguimiento y funcionalidades de contenido diseñadas para visibilidad en buscadores.' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <EnhancedSEO />
      <Navigation />
      
      <main>
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 pt-24 pb-4">
          <nav className="flex text-sm text-muted-foreground" aria-label="Breadcrumb">
            <Link to={content.homeLink} className="hover:text-foreground transition-colors">{content.breadcrumbHome}</Link>
            <span className="mx-2">/</span>
            <Link to={content.solutionsLink} className="hover:text-foreground transition-colors">{content.breadcrumbSolutions}</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground font-medium">{content.breadcrumbCurrent}</span>
          </nav>
        </div>

        {/* Hero */}
        <section className="py-12 md:py-20 bg-background">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-impulsa/10 px-4 py-1.5 text-sm font-medium text-impulsa mb-6">
              <BrainCircuit size={16} />
              <span>{isEnglish ? 'SENSE Marketing' : 'Marketing SENSE'}</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-dm-sans text-foreground mb-6 leading-tight">
              {content.heroTitle}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              {content.heroSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <p className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs font-medium text-primary">
                <Zap size={12} />
                {isEnglish ? 'Powered by AI, governed by people' : 'Impulsado por IA, gobernado por personas'}
              </p>
              <Button variant="impulsa" size="lg" asChild>
                <Link to={content.ctaLink}>
                  {content.ctaButton} <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* What's included */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 max-w-4xl text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-dm-sans text-foreground mb-6">
              {content.whatIsTitle}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {content.whatIsDescription}
            </p>
          </div>
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuresList.map((feature, idx) => (
                <Card key={idx} className="border border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="pt-6">
                    <feature.icon className="h-10 w-10 text-impulsa mb-4" strokeWidth={1.5} />
                    <h3 className="text-lg font-semibold font-dm-sans text-foreground mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Our Technology */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-dm-sans text-foreground mb-6">
                {content.builtWithTitle}
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                {content.builtWithDescription}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {builtWithFeatures.map((feature, idx) => (
                <div key={idx} className="text-center p-6 rounded-xl bg-muted/30">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-base font-semibold font-dm-sans text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integrations */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-dm-sans text-foreground mb-6">
                {content.integrationsTitle}
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                {content.integrationsDescription}
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {integrations.map((integration, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border/50">
                  <Database className="h-5 w-5 text-impulsa flex-shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">{integration.name}</p>
                    <p className="text-xs text-muted-foreground">{integration.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <IntermediateCTA />

        {/* For whom */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold font-dm-sans text-foreground mb-12 text-center">
              {content.forWhomTitle}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {forWhom.map((item, idx) => (
                <div key={idx} className="p-6 rounded-xl border border-border/50 bg-card">
                  <h3 className="text-xl font-semibold font-dm-sans text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <FAQSection faqs={faqs} />

        <ReviewsSection />

        {/* Final CTA */}
        <ServiceContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default SensePlatform;
