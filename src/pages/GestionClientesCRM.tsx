import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useServiceSEO } from '@/hooks/useServiceSEO';
import EnhancedSEO from '@/components/EnhancedSEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Link } from 'react-router-dom';
import ServiceContactSection from '@/components/ServiceContactSection';
import { DynamicH1 } from '@/components/DynamicH1';
import { Database, Users, TrendingUp, BarChart3, Zap, Workflow, ArrowRight } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

const GestionClientesCRM: React.FC = () => {
  const { language } = useTranslation();
  const isEnglish = language === 'en';

  const content = {
    es: {
      serviceName: "Gestión de Clientes CRM",
      serviceDescription: "Implementación y optimización de CRM profesional. Organiza tu embudo comercial, automatiza seguimiento y obtén visibilidad total de oportunidades.",
      canonical: "/es/servicios/gestion-clientes-crm",
      breadcrumb: { home: "Inicio", solution: "Activa tus ventas", current: "Gestión de Clientes CRM" },
      solutionPath: "/es/soluciones/activa-tus-ventas",
      heroTitle: "Centraliza tu gestión comercial con un CRM profesional",
      heroSubtitle: "Implementamos y optimizamos sistemas CRM que organizan tu embudo comercial, automatizan el seguimiento y te dan visibilidad total sobre tus oportunidades de negocio.",
      primaryCTA: "Solicitar demo personalizada",
      secondaryCTA: "Comparar CRMs",
      compareLink: "/es/comparativa/hubspot-vs-go-high-level",
      valueTitle: "Un CRM que",
      valueTitleHighlight: "impulsa tus ventas",
      valueCards: [
        { title: "Datos Centralizados", description: "Toda la información de tus clientes, leads y oportunidades en un único sistema accesible." },
        { title: "Automatización Comercial", description: "Workflows inteligentes que automatizan seguimientos, recordatorios y tareas administrativas." },
        { title: "Insights Accionables", description: "Dashboards en tiempo real que revelan oportunidades y optimizan tu estrategia comercial." }
      ],
      serviceTitle: "Implementación y optimización",
      serviceTitleHighlight: "end-to-end",
      serviceSubtitle: "No solo instalamos un CRM, lo adaptamos a tu proceso comercial, capacitamos a tu equipo y garantizamos que realmente lo uses para vender más.",
      serviceSteps: [
        { title: "Consultoría y elección de plataforma", description: "Analizamos tu proceso comercial y recomendamos el CRM ideal (HubSpot, GoHighLevel) según tu sector, tamaño y objetivos." },
        { title: "Configuración personalizada", description: "Diseñamos pipelines, etiquetas, campos personalizados y automatizaciones que reflejan exactamente tu forma de trabajar." },
        { title: "Integración con tus herramientas", description: "Conectamos tu CRM con email, calendario, formularios web, WhatsApp y todas las herramientas que ya usas." },
        { title: "Formación y adopción", description: "Capacitamos a tu equipo comercial para que adopte el CRM desde el día uno y lo convierta en su mejor aliado de ventas." }
      ],
      includesTitle: "¿Qué incluye la",
      includesTitleHighlight: "implementación",
      includesItems: [
        "Análisis de tu proceso comercial actual",
        "Configuración de pipelines y etapas de venta",
        "Importación y limpieza de base de datos",
        "Automatizaciones de seguimiento y recordatorios",
        "Integración con email, calendario y WhatsApp",
        "Dashboards personalizados de ventas",
        "Formación del equipo comercial",
        "Soporte post-implementación 30 días"
      ],
      benefitsTitle: "Beneficios de tener un",
      benefitsTitleHighlight: "CRM bien implementado",
      benefitsItems: [
        "Nunca más perderás un lead por falta de seguimiento",
        "Visibilidad total del embudo en tiempo real",
        "Reducción del tiempo en tareas administrativas",
        "Mejora en la conversión de oportunidades",
        "Histórico completo de cada cliente y conversación",
        "Previsiones de venta más precisas"
      ],
      ctaTitle: "¿Listo para organizar tu gestión comercial?",
      ctaSubtitle: "Agenda una demo personalizada y descubre cómo un CRM profesional puede transformar tu proceso de ventas.",
      ctaButton: "Solicitar demo gratuita"
    },
    en: {
      serviceName: "CRM Customer Management",
      serviceDescription: "Professional CRM implementation and optimization. Organize your sales funnel, automate follow-ups, and get full visibility into your opportunities.",
      canonical: "/en/services/crm-customer-management",
      breadcrumb: { home: "Home", solution: "Activate your sales", current: "CRM Customer Management" },
      solutionPath: "/en/solutions/activate-sales",
      heroTitle: "Centralize your sales management with a professional CRM",
      heroSubtitle: "We implement and optimize CRM systems that organize your sales funnel, automate follow-ups, and give you complete visibility into your business opportunities.",
      primaryCTA: "Request personalized demo",
      secondaryCTA: "Compare CRMs",
      compareLink: "/es/comparativa/hubspot-vs-go-high-level",
      valueTitle: "A CRM that",
      valueTitleHighlight: "drives your sales",
      valueCards: [
        { title: "Centralized Data", description: "All your client, lead, and opportunity information in one accessible system." },
        { title: "Sales Automation", description: "Smart workflows that automate follow-ups, reminders, and administrative tasks." },
        { title: "Actionable Insights", description: "Real-time dashboards that reveal opportunities and optimize your sales strategy." }
      ],
      serviceTitle: "End-to-end implementation and",
      serviceTitleHighlight: "optimization",
      serviceSubtitle: "We don't just install a CRM, we adapt it to your sales process, train your team, and ensure you actually use it to sell more.",
      serviceSteps: [
        { title: "Consulting and platform selection", description: "We analyze your sales process and recommend the ideal CRM (HubSpot, GoHighLevel) based on your sector, size, and objectives." },
        { title: "Personalized configuration", description: "We design pipelines, tags, custom fields, and automations that reflect exactly how you work." },
        { title: "Integration with your tools", description: "We connect your CRM with email, calendar, web forms, WhatsApp, and all the tools you already use." },
        { title: "Training and adoption", description: "We train your sales team to adopt the CRM from day one and make it their best sales ally." }
      ],
      includesTitle: "What does the",
      includesTitleHighlight: "implementation include",
      includesItems: [
        "Analysis of your current sales process",
        "Pipeline and sales stage configuration",
        "Database import and cleanup",
        "Follow-up and reminder automations",
        "Email, calendar, and WhatsApp integration",
        "Personalized sales dashboards",
        "Sales team training",
        "30-day post-implementation support"
      ],
      benefitsTitle: "Benefits of having a",
      benefitsTitleHighlight: "well-implemented CRM",
      benefitsItems: [
        "Never lose a lead due to lack of follow-up again",
        "Full funnel visibility in real-time",
        "Reduced time on administrative tasks",
        "Improved opportunity conversion",
        "Complete history of each client and conversation",
        "More accurate sales forecasts"
      ],
      ctaTitle: "Ready to organize your sales management?",
      ctaSubtitle: "Schedule a personalized demo and discover how a professional CRM can transform your sales process.",
      ctaButton: "Request free demo"
    }
  };

  const t = isEnglish ? content.en : content.es;
  const stepIcons = [Users, Workflow, Zap, BarChart3];
  const valueIcons = [Database, Workflow, TrendingUp];

  const { title, description, canonical, ogImage, structuredData } = useServiceSEO({
    serviceName: t.serviceName,
    serviceDescription: t.serviceDescription,
    canonical: t.canonical,
    serviceType: "CRM",
    priceRange: "€€€",
    features: [
      "Centralized Data",
      "Process Automation",
      "Real-time Visibility",
      "Email/WhatsApp Integration",
      "Advanced Reporting",
      "Custom Workflows"
    ],
    aggregateRating: { ratingValue: "4.9", reviewCount: "41" }
  });
  
  return (
    <>
      <EnhancedSEO />
      <Navigation />

      <main className="pt-36">
        <div className="container mx-auto px-4">
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to={isEnglish ? "/en" : "/es"}>{t.breadcrumb.home}</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to={t.solutionPath}>{t.breadcrumb.solution}</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{t.breadcrumb.current}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* Hero Section */}
          <section className="text-center mb-12">
            <DynamicH1 
              fallback={t.heroTitle}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            />
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-4xl mx-auto">
              {t.heroSubtitle}
            </p>
            <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
              <Button asChild size="lg" className="text-base">
                <Link to={isEnglish ? "/contacto" : "/es/contacto"}>{t.primaryCTA}</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-base">
                <Link to={t.compareLink}>{t.secondaryCTA}</Link>
              </Button>
            </div>
          </section>

          {/* Value Proposition */}
          <section className="py-16 bg-gradient-to-br from-background to-secondary/20 rounded-2xl mb-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                {t.valueTitle} <span className="text-gradient-primary">{t.valueTitleHighlight}</span>
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                {t.valueCards.map((card, index) => {
                  const Icon = valueIcons[index];
                  return (
                    <Card key={index} className="border-primary/20 hover:border-primary/40 transition-all">
                      <CardHeader>
                        <Icon className="w-12 h-12 text-primary mb-4" />
                        <CardTitle>{card.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{card.description}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Detailed Service */}
          <section className="py-16 mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
                {t.serviceTitle} <span className="text-gradient-primary">{t.serviceTitleHighlight}</span>
              </h2>
              <p className="text-lg text-muted-foreground text-center mb-12 leading-relaxed">
                {t.serviceSubtitle}
              </p>

              <div className="space-y-8">
                {t.serviceSteps.map((step, index) => {
                  const Icon = stepIcons[index];
                  return (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Includes Section */}
          <section className="py-16 bg-secondary/30 rounded-2xl mb-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">
                {t.includesTitle} <span className="text-gradient-primary">{t.includesTitleHighlight}</span>?
              </h2>
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {t.includesItems.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 bg-background p-4 rounded-lg">
                    <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <p className="text-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-16 mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                {t.benefitsTitle} <span className="text-gradient-primary">{t.benefitsTitleHighlight}</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {t.benefitsItems.map((benefit, index) => (
                  <Card key={index} className="border-primary/10">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3">
                        <TrendingUp className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                        <p className="text-foreground font-medium">{benefit}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-gradient-to-br from-primary/10 to-secondary/20 rounded-2xl text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.ctaTitle}</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">{t.ctaSubtitle}</p>
            <Button asChild size="lg" className="text-base">
              <Link to={isEnglish ? "/contacto" : "/es/contacto"}>{t.ctaButton}</Link>
            </Button>
          </section>

          <ServiceContactSection />
        </div>
      </main>

      <Footer />
    </>
  );
};

export default GestionClientesCRM;
