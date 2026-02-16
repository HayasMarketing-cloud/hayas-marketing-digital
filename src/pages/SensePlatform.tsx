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
    serviceName: isEnglish ? 'SENSE - Marketing Intelligence Platform' : 'SENSE - Plataforma de Inteligencia de Marketing',
    serviceDescription: isEnglish
      ? 'Marketing intelligence platform that connects strategy, data and execution. Built with modern technology and real integrations.'
      : 'Plataforma de inteligencia de marketing que conecta estrategia, datos y ejecución. Construida con tecnología moderna e integraciones reales.',
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
    breadcrumbCurrent: isEnglish ? 'SENSE Platform' : 'Plataforma SENSE',
    homeLink: isEnglish ? '/en' : '/es',
    solutionsLink: isEnglish ? '/en#solutions' : '/es#soluciones',
    heroTitle: isEnglish
      ? <>SENSE: Your <span className="text-gradient-primary">Marketing Intelligence</span> Platform</>
      : <>SENSE: Tu Plataforma de <span className="text-gradient-primary">Inteligencia de Marketing</span></>,
    heroSubtitle: isEnglish
      ? 'Strategy, data and execution connected in one platform. Your website, SEO monitoring, content management and performance dashboards — all integrated and built for your business.'
      : 'Estrategia, datos y ejecución conectados en una plataforma. Tu web, monitorización SEO, gestión de contenidos y dashboards de rendimiento — todo integrado y construido para tu negocio.',
    whatIsTitle: isEnglish ? 'What does it include?' : '¿Qué incluye?',
    whatIsDescription: isEnglish
      ? 'Not just a website. A complete digital presence system: your website, SEO monitoring, content management and performance dashboards — connected, branded and built with modern technology.'
      : 'No es solo una web. Es un sistema completo de presencia digital: tu web, monitorización SEO, gestión de contenidos y dashboards de rendimiento — conectados, con tu marca y construidos con tecnología moderna.',
    builtWithTitle: isEnglish ? 'Built with Lovable' : 'Construido con Lovable',
    builtWithDescription: isEnglish
      ? 'We build your platform with Lovable — modern React and TypeScript technology that delivers speed, scalability and a professional experience. No WordPress. No templates. Your own platform, ready to grow with you.'
      : 'Construimos tu plataforma con Lovable — tecnología moderna React y TypeScript que ofrece velocidad, escalabilidad y una experiencia profesional. Sin WordPress. Sin plantillas. Tu propia plataforma, lista para crecer contigo.',
    integrationsTitle: isEnglish ? 'Real integrations' : 'Integraciones reales',
    integrationsDescription: isEnglish
      ? 'Your platform connects with the tools that matter: Google Search Console, DataForSEO, HubSpot, GoHighLevel, analytics platforms and more. Real data, real-time.'
      : 'Tu plataforma se conecta con las herramientas que importan: Google Search Console, DataForSEO, HubSpot, GoHighLevel, plataformas de analítica y más. Datos reales, en tiempo real.',
    forWhomTitle: isEnglish ? 'Who is it for?' : '¿Para quién es?',
    ctaTitle: isEnglish ? 'Ready to professionalize your digital presence?' : '¿Listo para profesionalizar tu presencia digital?',
    ctaDescription: isEnglish
      ? 'Schedule a strategic session to explore how we can build your custom marketing platform.'
      : 'Agenda una sesión estratégica para explorar cómo construir tu plataforma de marketing a medida.',
    ctaButton: isEnglish ? 'Schedule a demo' : 'Agendar una demo',
    ctaLink: isEnglish ? '/en/contact' : '/es/contacto',
  };

  const featuresList = isEnglish ? [
    { icon: Globe, title: 'Professional Website', description: 'Modern, fast, responsive website built with React. Optimized for conversions and brand consistency.' },
    { icon: Search, title: 'SEO Tracker', description: 'Integrated keyword tracking with Google Search Console and DataForSEO. Monitor positions, indexation and organic performance.' },
    { icon: FileText, title: 'Content Hub', description: 'Editorial management with briefings, content calendars, and AI-assisted content creation workflows.' },
    { icon: BarChart3, title: 'Performance Dashboards', description: 'Real-time analytics connecting SEO, content, CRM and campaign data in one view.' },
    { icon: Link2, title: 'CRM Integration', description: 'Native connections to HubSpot, GoHighLevel and other CRMs. Unified customer data and marketing attribution.' },
    { icon: Layers, title: 'White-Label Platform', description: 'Fully branded with your logo, colors and domain. It\'s your platform, not a shared tool.' },
  ] : [
    { icon: Globe, title: 'Web Profesional', description: 'Web moderna, rápida y responsive construida con React. Optimizada para conversiones y coherencia de marca.' },
    { icon: Search, title: 'SEO Tracker', description: 'Seguimiento de keywords integrado con Google Search Console y DataForSEO. Monitoriza posiciones, indexación y rendimiento orgánico.' },
    { icon: FileText, title: 'Content Hub', description: 'Gestión editorial con briefings, calendarios de contenido y flujos de creación asistidos por IA.' },
    { icon: BarChart3, title: 'Dashboards de Rendimiento', description: 'Analítica en tiempo real que conecta datos de SEO, contenidos, CRM y campañas en una sola vista.' },
    { icon: Link2, title: 'Integración CRM', description: 'Conexiones nativas con HubSpot, GoHighLevel y otros CRMs. Datos unificados de clientes y atribución de marketing.' },
    { icon: Layers, title: 'Plataforma con tu Marca', description: 'Totalmente personalizada con tu logo, colores y dominio. Es tu plataforma, no una herramienta compartida.' },
  ];

  const builtWithFeatures = isEnglish ? [
    { icon: Code2, title: 'Modern Technology', description: 'React, TypeScript and component architecture. No legacy code, no plugin soup.' },
    { icon: Zap, title: 'Fast & Scalable', description: 'Sub-second load times. Grows with your business without performance loss.' },
    { icon: Shield, title: 'Secure & Owned', description: 'You own your platform. Your data, your domain, your brand — always.' },
    { icon: Rocket, title: 'Rapid Deployment', description: 'From concept to launch in 4-6 weeks. No 6-month development cycles.' },
  ] : [
    { icon: Code2, title: 'Tecnología Moderna', description: 'React, TypeScript y arquitectura de componentes. Sin código legacy, sin soup de plugins.' },
    { icon: Zap, title: 'Rápida y Escalable', description: 'Tiempos de carga por debajo del segundo. Crece con tu negocio sin perder rendimiento.' },
    { icon: Shield, title: 'Segura y Propia', description: 'Tú eres dueño de tu plataforma. Tus datos, tu dominio, tu marca — siempre.' },
    { icon: Rocket, title: 'Despliegue Rápido', description: 'De concepto a lanzamiento en 4-6 semanas. Sin ciclos de desarrollo de 6 meses.' },
  ];

  const integrations = [
    { name: 'Google Search Console', description: isEnglish ? 'Organic search data' : 'Datos de búsqueda orgánica' },
    { name: 'DataForSEO', description: isEnglish ? 'Keyword tracking & SERP analysis' : 'Tracking de keywords y análisis SERP' },
    { name: 'HubSpot', description: isEnglish ? 'CRM & marketing automation' : 'CRM y automatización de marketing' },
    { name: 'GoHighLevel', description: isEnglish ? 'CRM for SMBs & agencies' : 'CRM para pymes y agencias' },
    { name: 'Google Analytics', description: isEnglish ? 'Traffic & behavior analytics' : 'Analítica de tráfico y comportamiento' },
    { name: 'Stripe', description: isEnglish ? 'Payments & subscriptions' : 'Pagos y suscripciones' },
  ];

  const forWhom = isEnglish ? [
    { title: 'Growing businesses', description: 'Companies that want a professional digital presence backed by real data, not just a pretty website.' },
    { title: 'Marketing teams', description: 'Teams that need SEO, content and performance data centralized in one platform instead of 10 separate tools.' },
    { title: 'Agencies & consultants', description: 'Professionals who want to deliver branded platforms to their clients with real tracking capabilities.' },
  ] : [
    { title: 'Empresas en crecimiento', description: 'Empresas que quieren una presencia digital profesional respaldada por datos reales, no solo una web bonita.' },
    { title: 'Equipos de marketing', description: 'Equipos que necesitan SEO, contenidos y datos de rendimiento centralizados en una plataforma, no en 10 herramientas separadas.' },
    { title: 'Agencias y consultores', description: 'Profesionales que quieren entregar plataformas con su marca a sus clientes con capacidades reales de seguimiento.' },
  ];

  const faqs = isEnglish ? [
    { question: 'What technology is the platform built with?', answer: 'We use Lovable to build platforms with React and TypeScript — modern, fast and scalable web technology. No WordPress, no templates.' },
    { question: 'Is this a shared SaaS product?', answer: 'No. Each platform is custom-built for you. Your domain, your brand, your data. It\'s not a login to a shared tool.' },
    { question: 'How long does implementation take?', answer: 'A standard deployment takes 4-6 weeks. Complex implementations with multiple integrations can take 8-12 weeks.' },
    { question: 'Can I integrate my existing CRM?', answer: 'Yes. We support native integrations with HubSpot, GoHighLevel, and custom CRM connections via API.' },
    { question: 'What happens after launch?', answer: 'We offer ongoing management and optimization plans. Or your team can manage it independently with our training and documentation.' },
    { question: 'Does it include SEO optimization?', answer: 'Yes. The platform includes built-in SEO best practices, integrated tracking with GSC and DataForSEO, and content tools designed for search visibility.' },
  ] : [
    { question: '¿Con qué tecnología se construye la plataforma?', answer: 'Usamos Lovable para construir plataformas con React y TypeScript — tecnología web moderna, rápida y escalable. Sin WordPress, sin plantillas.' },
    { question: '¿Es un producto SaaS compartido?', answer: 'No. Cada plataforma se construye a medida para ti. Tu dominio, tu marca, tus datos. No es un login a una herramienta compartida.' },
    { question: '¿Cuánto tarda la implementación?', answer: 'Un despliegue estándar tarda 4-6 semanas. Implementaciones complejas con múltiples integraciones pueden llevar 8-12 semanas.' },
    { question: '¿Puedo integrar mi CRM actual?', answer: 'Sí. Soportamos integraciones nativas con HubSpot, GoHighLevel y conexiones CRM personalizadas vía API.' },
    { question: '¿Qué pasa después del lanzamiento?', answer: 'Ofrecemos planes de gestión y optimización continua. O tu equipo puede gestionarla de forma independiente con nuestra formación y documentación.' },
    { question: '¿Incluye optimización SEO?', answer: 'Sí. La plataforma incluye buenas prácticas SEO integradas, tracking con GSC y DataForSEO, y herramientas de contenido diseñadas para visibilidad en buscadores.' },
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
              <span>{isEnglish ? 'SENSE Platform' : 'Plataforma SENSE'}</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-dm-sans text-foreground mb-6 leading-tight">
              {content.heroTitle}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              {content.heroSubtitle}
            </p>
            <Button variant="impulsa" size="lg" asChild>
              <Link to={content.ctaLink}>
                {content.ctaButton} <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
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

        {/* Built with Lovable */}
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
