import React from 'react';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Target, Search, CalendarDays, Share2, Recycle, BarChart3, BookOpenText } from 'lucide-react';
import { useServiceSEO } from '@/hooks/useServiceSEO';
import { useTranslation } from '@/hooks/useTranslation';
import { useLocalizedRoutes } from '@/hooks/useLocalizedRoutes';

const EstrategiaContenidos: React.FC = () => {
  const { language } = useTranslation();
  const { getRoute } = useLocalizedRoutes();
  const isEnglish = language === 'en';

  const content = {
    es: {
      serviceName: 'Estrategia de Contenidos',
      serviceDescription: 'Desarrollamos estrategias de contenido alineadas con tus objetivos de negocio para atraer, educar y convertir a tu audiencia ideal.',
      canonical: '/es/servicios/estrategia-contenidos',
      features: [
        'Auditoría de contenido',
        'Planificación editorial',
        'Creación de contenido SEO',
        'Análisis de rendimiento'
      ],
      heroTitle: "Estrategia de contenidos",
      heroSubtitle: "Atrae y convierte con un plan editorial alineado a tu marca y objetivos: investigación, SEO, producción y distribución que funciona.",
      badge: "Contenido que impulsa marca",
      primaryCTA: "Solicitar propuesta",
      secondaryCTA: "Ver solución: Impulsa tu marca",
      primaryCTALink: "/es/agendar-reunion",
      secondaryCTALink: "/es/soluciones/impulsa-tu-marca",
      servicesTitle: "Metodología integral de contenidos",
      servicesSubtitle: "Un enfoque completo que abarca desde la estrategia hasta la medición",
      benefitsTitle: "Entregables clave",
      benefitsSubtitle: "Todo lo que necesitas para ejecutar una estrategia de contenidos exitosa",
      benefits: [
        "Estrategia y arquitectura de contenidos",
        "Calendario editorial 90 días (formatos, canales y responsables)",
        "Templates de brief y checklist SEO on-page",
        "Plan de distribución y reutilización",
        "Cuadro de mando de contenidos y KPIs"
      ],
      processTitle: "Cómo trabajamos",
      processSubtitle: "Metodología probada para crear contenido que convierte",
      ctaLabel: "Contenido que impulsa marca",
      ctaTitle: "Construye autoridad con un sistema de contenidos",
      ctaDescription: "De la estrategia al calendario, con ejecución y medición reales.",
      ctaButton: "Quiero empezar",
      faqItems: [
        {
          question: '¿En qué se basa esta metodología?',
          answer: 'En nuestra guía práctica del blog sobre estrategia de contenidos y en la experiencia aplicándola a diferentes sectores.'
        },
        {
          question: '¿Qué entregables recibo?',
          answer: 'Estrategia, calendario editorial, templates de briefs, checklist SEO on-page y cuadro de mando de contenidos.'
        },
        {
          question: '¿Podéis producir el contenido?',
          answer: 'Sí. Podemos asumir la producción completa o trabajar con tu equipo interno guiando el proceso y la calidad.'
        }
      ],
      contactFormTitle: "¿Hablamos sobre tu estrategia de contenidos?",
      contactFormSubtitle: "Cuéntanos tu marca, objetivos y audiencia. Te ayudaremos a diseñar una estrategia de contenidos efectiva.",
      breadcrumbItems: [
        { label: "Inicio", href: "/" },
        { label: "Impulsa tu marca", href: "/soluciones/impulsa-tu-marca" },
        { label: "Servicios", href: "/servicios" },
        { label: "Estrategia de contenidos" }
      ],
      features_list: [
        { title: 'Objetivos y audiencia', description: 'Definimos objetivos SMART y buyer personas para enfocar el contenido en resultados.' },
        { title: 'SEO y research', description: 'Keyword research, intención de búsqueda y clustering temático para ganar visibilidad.' },
        { title: 'Plan editorial', description: 'Calendario por formatos y canales con priorización por impacto y esfuerzo.' },
        { title: 'Distribución multicanal', description: 'Social, email y web para maximizar alcance y conversión.' },
        { title: 'Reutilización', description: 'Atomizamos y remezclamos contenidos para mantener cadencia con calidad.' },
        { title: 'Medición', description: 'KPIs por etapa (awareness, consideración, conversión) y reporting continuo.' }
      ],
      steps: [
        { title: 'Diagnóstico y enfoque', description: 'Auditoría de contenidos, posicionamiento actual y brechas de oportunidad.' },
        { title: 'Arquitectura de contenidos', description: 'Pilares, clusters y guía editorial alineada a marca y negocio.' },
        { title: 'Producción y SEO on-page', description: 'Briefs, optimización y estándares de estilo con control de calidad.' },
        { title: 'Distribución y promoción', description: 'Playbooks por canal, paid support cuando aporta ROI y activación con email.' },
        { title: 'Medición y mejora', description: 'Dashboards y experimentación para escalar lo que funciona.' }
      ]
    },
    en: {
      serviceName: 'Content Strategy',
      serviceDescription: 'We develop content strategies aligned with your business goals to attract, educate, and convert your ideal audience.',
      canonical: '/en/services/content-strategy',
      features: [
        'Content audit',
        'Editorial planning',
        'SEO content creation',
        'Performance analysis'
      ],
      heroTitle: "Content Strategy",
      heroSubtitle: "Attract and convert with an editorial plan aligned to your brand and goals: research, SEO, production, and distribution that works.",
      badge: "Content that drives brand",
      primaryCTA: "Request proposal",
      secondaryCTA: "See solution: Boost your brand",
      primaryCTALink: "/en/schedule-meeting",
      secondaryCTALink: "/en/solutions/boost-your-brand",
      servicesTitle: "Comprehensive content methodology",
      servicesSubtitle: "A complete approach spanning from strategy to measurement",
      benefitsTitle: "Key deliverables",
      benefitsSubtitle: "Everything you need to execute a successful content strategy",
      benefits: [
        "Content strategy and architecture",
        "90-day editorial calendar (formats, channels, and owners)",
        "Brief templates and on-page SEO checklist",
        "Distribution and repurposing plan",
        "Content dashboard and KPIs"
      ],
      processTitle: "How we work",
      processSubtitle: "Proven methodology to create content that converts",
      ctaLabel: "Content that drives brand",
      ctaTitle: "Build authority with a content system",
      ctaDescription: "From strategy to calendar, with real execution and measurement.",
      ctaButton: "I want to start",
      faqItems: [
        {
          question: 'What is this methodology based on?',
          answer: 'On our practical blog guide about content strategy and our experience applying it across different sectors.'
        },
        {
          question: 'What deliverables do I receive?',
          answer: 'Strategy, editorial calendar, brief templates, on-page SEO checklist, and content dashboard.'
        },
        {
          question: 'Can you produce the content?',
          answer: 'Yes. We can handle full production or work with your internal team guiding the process and quality.'
        }
      ],
      contactFormTitle: "Shall we talk about your content strategy?",
      contactFormSubtitle: "Tell us about your brand, goals, and audience. We'll help you design an effective content strategy.",
      breadcrumbItems: [
        { label: "Home", href: "/" },
        { label: "Boost your brand", href: "/en/solutions/boost-your-brand" },
        { label: "Services", href: "/en/services" },
        { label: "Content Strategy" }
      ],
      features_list: [
        { title: 'Goals and audience', description: 'We define SMART objectives and buyer personas to focus content on results.' },
        { title: 'SEO and research', description: 'Keyword research, search intent, and topic clustering for visibility.' },
        { title: 'Editorial plan', description: 'Calendar by formats and channels with prioritization by impact and effort.' },
        { title: 'Multichannel distribution', description: 'Social, email, and web to maximize reach and conversion.' },
        { title: 'Repurposing', description: 'We atomize and remix content to maintain cadence with quality.' },
        { title: 'Measurement', description: 'KPIs by stage (awareness, consideration, conversion) and continuous reporting.' }
      ],
      steps: [
        { title: 'Diagnosis and focus', description: 'Content audit, current positioning, and opportunity gaps.' },
        { title: 'Content architecture', description: 'Pillars, clusters, and editorial guide aligned to brand and business.' },
        { title: 'Production and on-page SEO', description: 'Briefs, optimization, and style standards with quality control.' },
        { title: 'Distribution and promotion', description: 'Channel playbooks, paid support when ROI positive, and email activation.' },
        { title: 'Measurement and improvement', description: 'Dashboards and experimentation to scale what works.' }
      ]
    }
  };

  const t = isEnglish ? content.en : content.es;

  const { title, description, canonical, ogImage, structuredData } = useServiceSEO({
    serviceName: t.serviceName,
    serviceDescription: t.serviceDescription,
    canonical: t.canonical,
    features: t.features,
    priceRange: '€€',
    aggregateRating: { ratingValue: '4.9', reviewCount: '35' }
  });

  const icons = [Target, Search, CalendarDays, Share2, Recycle, BarChart3];
  const stepIcons = [Target, BookOpenText, Search, Share2, BarChart3];

  const features = t.features_list.map((f, i) => ({
    icon: React.createElement(icons[i], { className: "h-6 w-6" }),
    title: f.title,
    description: f.description
  }));

  const steps = t.steps.map((s, i) => ({
    number: String(i + 1).padStart(2, '0'),
    title: s.title,
    description: s.description,
    icon: React.createElement(stepIcons[i], { className: "h-6 w-6" })
  }));

  const serviceData = {
    title,
    description,
    canonical,
    ogImage,
    structuredData,
    heroTitle: t.heroTitle,
    heroSubtitle: t.heroSubtitle,
    heroDescription: "",
    heroImage: "/estrategia-contenidos-hero-new.jpg",
    heroImageAlt: isEnglish ? "Professional content strategy - Editorial planning and SEO" : "Estrategia de contenidos profesional - Planificación editorial y SEO",
    badge: t.badge,
    primaryCTA: t.primaryCTA,
    secondaryCTA: t.secondaryCTA,
    primaryCTALink: t.primaryCTALink,
    secondaryCTALink: t.secondaryCTALink,
    servicesTitle: t.servicesTitle,
    servicesSubtitle: t.servicesSubtitle,
    servicesDescription: "",
    services: features,
    benefitsTitle: t.benefitsTitle,
    benefitsSubtitle: t.benefitsSubtitle,
    benefitsDescription: "",
    benefits: t.benefits,
    processTitle: t.processTitle,
    processSubtitle: t.processSubtitle,
    processDescription: "",
    processSteps: steps,
    additionalContent: (
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="p-8 rounded-xl border bg-muted/30">
            <div className="flex items-center justify-center gap-2 mb-2 text-primary">
              <BookOpenText className="h-5 w-5" />
              <span className="text-sm font-medium">{t.ctaLabel}</span>
            </div>
            <h3 className="text-2xl font-semibold mb-3">{t.ctaTitle}</h3>
            <p className="text-muted-foreground mb-4">{t.ctaDescription}</p>
            <a href={getRoute('requestConsultation')} className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors">
              {t.ctaButton}
            </a>
          </div>
        </div>
      </section>
    ),
    faqTitle: isEnglish ? "Frequently asked questions" : "Preguntas frecuentes",
    faqDescription: isEnglish ? "We answer the most common questions about content strategy" : "Resolvemos las dudas más comunes sobre estrategia de contenidos",
    faqItems: t.faqItems,
    showSuccessCases: true,
    successCasesServiceSlug: 'estrategia-contenidos',
    successCasesTitle: isEnglish ? 'Success Cases' : 'Casos de Éxito',
    showContactForm: true,
    contactFormTitle: t.contactFormTitle,
    contactFormSubtitle: t.contactFormSubtitle,
    breadcrumbItems: t.breadcrumbItems
  };

  return <ServicePageTemplate data={serviceData} />;
};

export default EstrategiaContenidos;
