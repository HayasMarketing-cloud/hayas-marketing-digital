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
  Bell,
  Building2,
  Users,
  Globe,
  Layers,
  ArrowRight,
} from 'lucide-react';

const SensePlatform = () => {
  const { language } = useTranslation();
  const isEnglish = language === 'en';

  const content = {
    serviceName: isEnglish ? 'SENSE - Marketing Intelligence Platform' : 'SENSE - Plataforma de Inteligencia de Marketing',
    serviceDescription: isEnglish
      ? 'Your own marketing platform: SEO tracker, content hub, dashboards and connected data in one system. Built for agencies, marketing teams and data-driven companies.'
      : 'Tu plataforma propia de marketing: SEO tracker, content hub, dashboards y datos conectados en un solo sistema. Diseñada para agencias, equipos de marketing y empresas data-driven.',
    canonical: isEnglish ? '/en/services/marketing-intelligence-platform' : '/es/servicios/plataforma-inteligencia-marketing',
    features: isEnglish ? [
      'Custom branded marketing platform',
      'SEO tracker with GSC & DataForSEO',
      'Content hub with editorial management',
      'Real-time performance dashboards'
    ] : [
      'Plataforma de marketing con tu marca',
      'SEO tracker con GSC y DataForSEO',
      'Content hub con gestión editorial',
      'Dashboards de rendimiento en tiempo real'
    ],

    breadcrumbHome: isEnglish ? 'Home' : 'Inicio',
    breadcrumbSolutions: isEnglish ? 'Solutions' : 'Soluciones',
    breadcrumbCurrent: isEnglish ? 'SENSE Platform' : 'Plataforma SENSE',
    homeLink: isEnglish ? '/en' : '/es',
    solutionsLink: isEnglish ? '/en/solutions/boost-your-brand' : '/es/soluciones/impulsa-tu-marca',

    heroTitle: isEnglish
      ? <>Your <span className="text-gradient-primary">Marketing Intelligence</span> Platform</>
      : <>Tu Plataforma de <span className="text-gradient-primary">Inteligencia de Marketing</span></>,
    heroSubtitle: isEnglish
      ? 'Connect strategy, data and execution in a custom-built platform for your business. Not a generic SaaS — your own system, with your brand.'
      : 'Conecta estrategia, datos y ejecución en una plataforma construida a medida para tu negocio. No es un SaaS genérico — es TU sistema, con TU marca.',

    whatIsTitle: isEnglish ? 'What is SENSE?' : '¿Qué es SENSE?',
    whatIsDescription: isEnglish
      ? 'SENSE is our proprietary system that unifies marketing strategy, data tracking, content management and performance analytics into a single branded platform. Built with modern technology, each SENSE deployment is customized to the client\'s specific needs.'
      : 'SENSE es nuestro sistema propietario que unifica estrategia de marketing, seguimiento de datos, gestión de contenidos y analítica de rendimiento en una única plataforma con tu marca. Construida con tecnología moderna, cada implementación de SENSE se personaliza según las necesidades específicas del cliente.',

    featuresTitle: isEnglish ? 'What\'s included' : 'Qué incluye',
    
    useCasesTitle: isEnglish ? 'Who is it for?' : '¿Para quién es?',
    
    differentiatorTitle: isEnglish ? 'Why SENSE?' : '¿Por qué SENSE?',
    differentiatorDescription: isEnglish
      ? 'Unlike generic marketing tools, SENSE is YOUR platform. Custom-built, white-labeled, and tailored to your workflows. You own the data, the brand, and the experience.'
      : 'A diferencia de las herramientas genéricas de marketing, SENSE es TU plataforma. Construida a medida, con tu marca y adaptada a tus flujos de trabajo. Tú controlas los datos, la marca y la experiencia.',

    ctaTitle: isEnglish ? 'Ready to unify your marketing?' : '¿Listo para unificar tu marketing?',
    ctaDescription: isEnglish
      ? 'Schedule a strategic session to explore how SENSE can transform your marketing operations.'
      : 'Agenda una sesión estratégica para explorar cómo SENSE puede transformar tus operaciones de marketing.',
    ctaButton: isEnglish ? 'Schedule a demo' : 'Agendar una demo',
    ctaLink: isEnglish ? '/en/contact' : '/es/contacto',
  };

  const featuresList = isEnglish ? [
    { icon: Search, title: 'SEO Tracker', description: 'Integrated keyword tracking with Google Search Console and DataForSEO. Monitor positions, indexation and organic performance.' },
    { icon: FileText, title: 'Content Hub', description: 'Editorial management with briefings, content calendars, and AI-assisted content creation workflows.' },
    { icon: BarChart3, title: 'Performance Dashboards', description: 'Real-time analytics dashboards that connect SEO, content, CRM and campaign data in one view.' },
    { icon: Link2, title: 'CRM Integration', description: 'Native connections to HubSpot, GoHighLevel and other CRMs. Unified customer data and marketing attribution.' },
    { icon: Bell, title: 'Automated Reports & Alerts', description: 'Scheduled reporting and intelligent alerts for ranking changes, traffic anomalies and conversion drops.' },
    { icon: Layers, title: 'White-Label Platform', description: 'Fully branded with your logo, colors and domain. Your clients see your brand, not ours.' },
  ] : [
    { icon: Search, title: 'SEO Tracker', description: 'Seguimiento de keywords integrado con Google Search Console y DataForSEO. Monitoriza posiciones, indexación y rendimiento orgánico.' },
    { icon: FileText, title: 'Content Hub', description: 'Gestión editorial con briefings, calendarios de contenido y flujos de creación asistidos por IA.' },
    { icon: BarChart3, title: 'Dashboards de Rendimiento', description: 'Analítica en tiempo real que conecta datos de SEO, contenidos, CRM y campañas en una sola vista.' },
    { icon: Link2, title: 'Integración CRM', description: 'Conexiones nativas con HubSpot, GoHighLevel y otros CRMs. Datos unificados de clientes y atribución de marketing.' },
    { icon: Bell, title: 'Informes y Alertas Automáticas', description: 'Reporting programado y alertas inteligentes ante cambios de ranking, anomalías de tráfico y caídas de conversión.' },
    { icon: Layers, title: 'Plataforma White-Label', description: 'Totalmente personalizada con tu logo, colores y dominio. Tus clientes ven tu marca, no la nuestra.' },
  ];

  const useCases = isEnglish ? [
    { icon: Building2, title: 'Agencies', description: 'Build branded platforms for your clients. Deliver dashboards, SEO tracking and content management under your brand.' },
    { icon: Users, title: 'Marketing Teams', description: 'Centralize data and execution. Stop switching between 10 tools — one platform for strategy, content and analytics.' },
    { icon: Globe, title: 'Multi-brand Companies', description: 'Manage multiple brands, markets or business units from a single unified system with role-based access.' },
  ] : [
    { icon: Building2, title: 'Agencias', description: 'Construye plataformas propias para tus clientes. Entrega dashboards, tracking SEO y gestión de contenidos bajo tu marca.' },
    { icon: Users, title: 'Equipos de Marketing', description: 'Centraliza datos y ejecución. Deja de saltar entre 10 herramientas — una sola plataforma para estrategia, contenido y analítica.' },
    { icon: Globe, title: 'Empresas Multi-marca', description: 'Gestiona múltiples marcas, mercados o unidades de negocio desde un sistema unificado con acceso por roles.' },
  ];

  const faqs = isEnglish ? [
    { question: 'What technology does SENSE use?', answer: 'SENSE is built with modern web technologies (React, TypeScript) and integrates with industry-standard APIs like Google Search Console and DataForSEO for data accuracy.' },
    { question: 'Is SENSE a SaaS product?', answer: 'No. Each SENSE platform is custom-built for the client. It\'s not a login to a shared tool — it\'s your own platform, hosted under your domain with your branding.' },
    { question: 'How long does implementation take?', answer: 'A basic SENSE deployment takes 4-6 weeks. Complex implementations with multiple integrations and custom modules can take 8-12 weeks.' },
    { question: 'Can I integrate my existing CRM?', answer: 'Yes. SENSE supports native integrations with HubSpot, GoHighLevel, and custom CRM connections via API.' },
    { question: 'Who manages the platform after launch?', answer: 'We offer ongoing management and optimization plans, or your team can manage it independently with our training and documentation.' },
  ] : [
    { question: '¿Qué tecnología usa SENSE?', answer: 'SENSE está construido con tecnologías web modernas (React, TypeScript) e integra APIs estándar de la industria como Google Search Console y DataForSEO para la precisión de datos.' },
    { question: '¿Es SENSE un producto SaaS?', answer: 'No. Cada plataforma SENSE se construye a medida para el cliente. No es un login a una herramienta compartida — es tu propia plataforma, alojada en tu dominio con tu marca.' },
    { question: '¿Cuánto tarda la implementación?', answer: 'Un despliegue básico de SENSE tarda 4-6 semanas. Implementaciones complejas con múltiples integraciones y módulos personalizados pueden llevar 8-12 semanas.' },
    { question: '¿Puedo integrar mi CRM actual?', answer: 'Sí. SENSE soporta integraciones nativas con HubSpot, GoHighLevel y conexiones CRM personalizadas vía API.' },
    { question: '¿Quién gestiona la plataforma tras el lanzamiento?', answer: 'Ofrecemos planes de gestión y optimización continua, o tu equipo puede gestionarla de forma independiente con nuestra formación y documentación.' },
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
              <span>SENSE Platform</span>
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

        {/* What is SENSE */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold font-dm-sans text-foreground mb-6 text-center">
              {content.whatIsTitle}
            </h2>
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto">
              {content.whatIsDescription}
            </p>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold font-dm-sans text-foreground mb-12 text-center">
              {content.featuresTitle}
            </h2>
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

        <IntermediateCTA />

        {/* Use Cases */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold font-dm-sans text-foreground mb-12 text-center">
              {content.useCasesTitle}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {useCases.map((useCase, idx) => (
                <div key={idx} className="text-center p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-impulsa/10 mb-4">
                    <useCase.icon className="h-8 w-8 text-impulsa" />
                  </div>
                  <h3 className="text-xl font-semibold font-dm-sans text-foreground mb-3">{useCase.title}</h3>
                  <p className="text-muted-foreground">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Differentiator */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-dm-sans text-foreground mb-6">
              {content.differentiatorTitle}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              {content.differentiatorDescription}
            </p>
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
