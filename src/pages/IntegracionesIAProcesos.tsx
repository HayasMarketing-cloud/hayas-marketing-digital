import React from 'react';
import ServicePageTemplate, { ServicePageData } from '@/components/ServicePageTemplate';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { PlugZap, BrainCircuit, Workflow, ShieldCheck, ChartLine, Search, Cog, TestTube, TrendingUp } from 'lucide-react';
import { useServiceSEO } from '@/hooks/useServiceSEO';
import { useTranslation } from '@/hooks/useTranslation';

const IntegracionesIAProcesos: React.FC = () => {
  const { language } = useTranslation();
  const isEnglish = language === 'en';

  const content = {
    es: {
      serviceName: 'Integraciones y optimización con IA',
      serviceDescription: 'Conectamos tus sistemas y aplicamos IA para acelerar procesos, reducir costes y mejorar la experiencia del cliente.',
      canonical: '/es/servicios/integraciones-ia-procesos',
      features: ['Integraciones CRM-Web-Ads', 'IA aplicada', 'Workflows de procesos', 'Seguridad y RGPD'],
      badge: 'Solución IA',
      heroTitle: 'Integraciones y optimización de procesos con IA',
      heroSubtitle: 'Integramos tus sistemas y aplicamos IA para que marketing y ventas trabajen con eficiencia y datos fiables.',
      primaryCTA: 'Explorar integraciones',
      primaryCTALink: '/agendar-reunion',
      secondaryCTA: 'Cuéntanos tu caso',
      secondaryCTALink: '/contacto',
      servicesTitle: 'Conectamos tus herramientas',
      servicesSubtitle: 'Integraciones inteligentes que unifican tus datos y automatizan procesos',
      benefitsTitle: 'Casos de uso y beneficios',
      benefitsSubtitle: 'Optimiza tus procesos con IA aplicada',
      benefits: [
        'Sincronización bidireccional CRM-Web-Ads',
        'Enriquecimiento de leads y priorización con IA',
        'Automatización de procesos internos (ventas y soporte)',
        'Contenidos y respuestas asistidas por IA (SofÍA)',
        'Reducción de costes operativos y tiempo de respuesta',
        'Mejora en la experiencia del cliente'
      ],
      processTitle: 'Nuestra metodología',
      processSubtitle: 'Proceso estructurado para integraciones exitosas',
      ctaLabel: 'Eficiencia operativa',
      ctaTitle: 'Procesos escalables y medibles',
      ctaDescription: 'Menos fricción, más foco en lo que importa.',
      ctaButton: 'Quiero integrarlo',
      contactFormTitle: '¿Hablamos sobre tus integraciones?',
      contactFormSubtitle: 'Cuéntanos tu contexto tecnológico y objetivos. Te responderemos con una propuesta de integración personalizada.',
      features_list: [
        { title: 'Integraciones', description: 'Conecta CRM, web, ads y herramientas internas para un dato único.' },
        { title: 'IA aplicada', description: 'Automatiza tareas, personaliza experiencias y acelera operaciones.' },
        { title: 'Workflows de procesos', description: 'Orquestación end-to-end con disparadores y estados.' },
        { title: 'Seguridad y RGPD', description: 'Diseño conforme a normativa y consentimiento explícito.' }
      ],
      steps: [
        { number: '1', title: 'Descubrimiento', description: 'Mapa de procesos, sistemas y puntos de fricción.' },
        { number: '2', title: 'Arquitectura', description: 'Definición de integraciones, responsabilidades y SLAs.' },
        { number: '3', title: 'Implementación', description: 'Conexiones, automatizaciones y pruebas de extremo a extremo.' },
        { number: '4', title: 'Optimización', description: 'Monitoreo, mejoras y documentación viva.' }
      ],
      faqItems: [
        { question: '¿Qué CRMs integráis?', answer: 'HubSpot y Go High Level como estándar. También conectamos con ERPs, plataformas de ads y herramientas BI.' },
        { question: '¿Qué casos de IA implementáis?', answer: 'Desde asistentes (SofÍA) y generación de contenidos a clasificación de leads y priorización con scoring predictivo.' },
        { question: '¿Cómo gestionáis la seguridad?', answer: 'Principio de mínimo privilegio, registros de actividad y cumplimiento RGPD en formularios y bases de datos.' }
      ],
      breadcrumbItems: [
        { label: 'Inicio', href: '/' },
        { label: 'Activa tu estrategia digital', href: '/soluciones/activa-tu-estrategia-digital' },
        { label: 'Impulsa tu marca', href: '/soluciones/impulsa-tu-marca' },
        { label: 'Servicios', href: '/servicios' },
        { label: 'Integraciones y optimización con IA' }
      ]
    },
    en: {
      serviceName: 'AI Integrations & Process Optimization',
      serviceDescription: 'We connect your systems and apply AI to accelerate processes, reduce costs, and improve customer experience.',
      canonical: '/en/services/ai-process-integration',
      features: ['CRM-Web-Ads integrations', 'Applied AI', 'Process workflows', 'Security and GDPR'],
      badge: 'AI Solution',
      heroTitle: 'AI Integrations & Process Optimization',
      heroSubtitle: 'We integrate your systems and apply AI so marketing and sales work efficiently with reliable data.',
      primaryCTA: 'Explore integrations',
      primaryCTALink: '/agendar-reunion',
      secondaryCTA: 'Tell us your case',
      secondaryCTALink: '/contacto',
      servicesTitle: 'We connect your tools',
      servicesSubtitle: 'Smart integrations that unify your data and automate processes',
      benefitsTitle: 'Use cases and benefits',
      benefitsSubtitle: 'Optimize your processes with applied AI',
      benefits: [
        'Bidirectional CRM-Web-Ads synchronization',
        'Lead enrichment and AI-powered prioritization',
        'Internal process automation (sales and support)',
        'AI-assisted content and responses (SofÍA)',
        'Operational cost and response time reduction',
        'Improved customer experience'
      ],
      processTitle: 'Our methodology',
      processSubtitle: 'Structured process for successful integrations',
      ctaLabel: 'Operational efficiency',
      ctaTitle: 'Scalable and measurable processes',
      ctaDescription: 'Less friction, more focus on what matters.',
      ctaButton: 'I want to integrate',
      contactFormTitle: 'Shall we talk about your integrations?',
      contactFormSubtitle: 'Tell us about your technology context and goals. We\'ll respond with a personalized integration proposal.',
      features_list: [
        { title: 'Integrations', description: 'Connect CRM, web, ads, and internal tools for unified data.' },
        { title: 'Applied AI', description: 'Automate tasks, personalize experiences, and accelerate operations.' },
        { title: 'Process workflows', description: 'End-to-end orchestration with triggers and states.' },
        { title: 'Security and GDPR', description: 'Compliant design with explicit consent.' }
      ],
      steps: [
        { number: '1', title: 'Discovery', description: 'Process mapping, systems, and friction points.' },
        { number: '2', title: 'Architecture', description: 'Integration definition, responsibilities, and SLAs.' },
        { number: '3', title: 'Implementation', description: 'Connections, automations, and end-to-end testing.' },
        { number: '4', title: 'Optimization', description: 'Monitoring, improvements, and living documentation.' }
      ],
      faqItems: [
        { question: 'What CRMs do you integrate?', answer: 'HubSpot and Go High Level as standard. We also connect with ERPs, ads platforms, and BI tools.' },
        { question: 'What AI use cases do you implement?', answer: 'From assistants (SofÍA) and content generation to lead classification and predictive scoring prioritization.' },
        { question: 'How do you handle security?', answer: 'Principle of least privilege, activity logs, and GDPR compliance in forms and databases.' }
      ],
      breadcrumbItems: [
        { label: 'Home', href: '/' },
        { label: 'Activate your digital strategy', href: '/en/solutions/activate-your-digital-strategy' },
        { label: 'Boost your brand', href: '/en/solutions/boost-your-brand' },
        { label: 'Services', href: '/en/services' },
        { label: 'AI & Process Integration' }
      ]
    }
  };

  const t = isEnglish ? content.en : content.es;

  const { title, description, canonical, ogImage, structuredData } = useServiceSEO({
    serviceName: t.serviceName,
    serviceDescription: t.serviceDescription,
    canonical: t.canonical,
    heroImagePath: '/integraciones-ia-procesos-hero.jpg',
    features: t.features,
    priceRange: '€€€',
    aggregateRating: { ratingValue: '4.9', reviewCount: '28' }
  });

  const featureIcons = [PlugZap, BrainCircuit, Workflow, ShieldCheck];
  const stepIcons = [Search, Cog, TestTube, TrendingUp];

  const serviceData: ServicePageData = {
    title,
    description,
    canonical,
    ogImage,
    structuredData,
    badge: t.badge,
    heroTitle: t.heroTitle,
    heroSubtitle: t.heroSubtitle,
    heroImage: '/integraciones-ia-procesos-hero.jpg',
    heroImageAlt: isEnglish ? 'AI process integration and automation dashboard' : 'Dashboard de automatización e integración de procesos con IA',
    primaryCTA: t.primaryCTA,
    primaryCTALink: t.primaryCTALink,
    secondaryCTA: t.secondaryCTA,
    secondaryCTALink: t.secondaryCTALink,
    servicesTitle: t.servicesTitle,
    servicesSubtitle: t.servicesSubtitle,
    services: t.features_list.map((f, i) => ({
      icon: React.createElement(featureIcons[i], { className: "h-6 w-6 text-primary" }),
      title: f.title,
      description: f.description
    })),
    benefitsTitle: t.benefitsTitle,
    benefitsSubtitle: t.benefitsSubtitle,
    benefits: t.benefits,
    processTitle: t.processTitle,
    processSubtitle: t.processSubtitle,
    processSteps: t.steps.map((s, i) => ({
      number: s.number,
      title: s.title,
      description: s.description,
      icon: React.createElement(stepIcons[i], { className: "h-6 w-6 text-primary" })
    })),
    faqItems: t.faqItems,
    showSuccessCases: true,
    successCasesServiceSlug: 'integraciones-ia-procesos',
    successCasesTitle: isEnglish ? 'Success Cases' : 'Casos de Éxito',
    additionalContent: (
      <section className="mb-16 text-center">
        <div className="p-8 rounded-xl border bg-muted/30">
          <div className="flex items-center justify-center gap-2 mb-2 text-primary">
            <ChartLine className="h-5 w-5" />
            <span className="text-sm font-medium">{t.ctaLabel}</span>
          </div>
          <h3 className="text-2xl font-semibold mb-3">{t.ctaTitle}</h3>
          <p className="text-muted-foreground mb-4">{t.ctaDescription}</p>
          <Button asChild>
            <Link to="/es/solicitar-consulta">{t.ctaButton}</Link>
          </Button>
        </div>
      </section>
    ),
    showContactForm: true,
    contactFormTitle: t.contactFormTitle,
    contactFormSubtitle: t.contactFormSubtitle,
    breadcrumbItems: t.breadcrumbItems
  };

  return <ServicePageTemplate data={serviceData} />;
};

export default IntegracionesIAProcesos;
