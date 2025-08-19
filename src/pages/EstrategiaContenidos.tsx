import React from 'react';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Target, Search, CalendarDays, Share2, Recycle, BarChart3, BookOpenText } from 'lucide-react';

const EstrategiaContenidos: React.FC = () => {
  const features = [
    {
      icon: <Target className="h-6 w-6" />,
      title: 'Objetivos y audiencia',
      description: 'Definimos objetivos SMART y buyer personas para enfocar el contenido en resultados.'
    },
    {
      icon: <Search className="h-6 w-6" />,
      title: 'SEO y research',
      description: 'Keyword research, intención de búsqueda y clustering temático para ganar visibilidad.'
    },
    {
      icon: <CalendarDays className="h-6 w-6" />,
      title: 'Plan editorial',
      description: 'Calendario por formatos y canales con priorización por impacto y esfuerzo.'
    },
    {
      icon: <Share2 className="h-6 w-6" />,
      title: 'Distribución multicanal',
      description: 'Social, email y web para maximizar alcance y conversión.'
    },
    {
      icon: <Recycle className="h-6 w-6" />,
      title: 'Reutilización',
      description: 'Atomizamos y remezclamos contenidos para mantener cadencia con calidad.'
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: 'Medición',
      description: 'KPIs por etapa (awareness, consideración, conversión) y reporting continuo.'
    }
  ];

  const steps = [
    {
      number: "01",
      title: 'Diagnóstico y enfoque',
      description: 'Auditoría de contenidos, posicionamiento actual y brechas de oportunidad.',
      icon: <Target className="h-6 w-6" />
    },
    {
      number: "02",
      title: 'Arquitectura de contenidos',
      description: 'Pilares, clusters y guía editorial alineada a marca y negocio.',
      icon: <BookOpenText className="h-6 w-6" />
    },
    {
      number: "03",
      title: 'Producción y SEO on-page',
      description: 'Briefs, optimización y estándares de estilo con control de calidad.',
      icon: <Search className="h-6 w-6" />
    },
    {
      number: "04",
      title: 'Distribución y promoción',
      description: 'Playbooks por canal, paid support cuando aporta ROI y activación con email.',
      icon: <Share2 className="h-6 w-6" />
    },
    {
      number: "05",
      title: 'Medición y mejora',
      description: 'Dashboards y experimentación para escalar lo que funciona.',
      icon: <BarChart3 className="h-6 w-6" />
    }
  ];

  const faqs = [
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
  ];

  const serviceData = {
    // SEO Data
    title: 'Estrategia de contenidos | Hayas Marketing',
    description: 'Diseñamos tu estrategia de contenidos: research SEO, plan editorial, distribución y medición para impulsar tu marca.',
    canonical: '/servicios/estrategia-contenidos',
    
    // Hero Section
    heroTitle: "Estrategia de contenidos",
    heroSubtitle: "",
    heroDescription: "Atrae y convierte con un plan editorial alineado a tu marca y objetivos: investigación, SEO, producción y distribución que funciona.",
    heroImage: "/estrategia-contenidos-hero.jpg",
    heroImageAlt: "Estrategia de contenidos profesional - Planificación editorial y SEO",
    badge: "Contenido que impulsa marca",
    primaryCTA: "Solicitar propuesta",
    secondaryCTA: "Ver solución: Impulsa tu marca",
    primaryCTALink: "/agendar-reunion",
    secondaryCTALink: "/soluciones/impulsa-tu-marca",
    
    // Services Section
    servicesTitle: "Metodología integral de contenidos",
    servicesSubtitle: "Un enfoque completo que abarca desde la estrategia hasta la medición",
    servicesDescription: "Cada elemento trabajado para maximizar el impacto de tu marca",
    services: features,
    
    // Benefits Section
    benefitsTitle: "Entregables clave",
    benefitsSubtitle: "Todo lo que necesitas para ejecutar una estrategia de contenidos exitosa",
    benefitsDescription: "Herramientas y recursos para impulsar tu marca",
    benefits: [
      "Estrategia y arquitectura de contenidos",
      "Calendario editorial 90 días (formatos, canales y responsables)",
      "Templates de brief y checklist SEO on-page",
      "Plan de distribución y reutilización",
      "Cuadro de mando de contenidos y KPIs"
    ],
    
    // Process Section
    processTitle: "Cómo trabajamos",
    processSubtitle: "Metodología probada para crear contenido que convierte",
    processDescription: "Un proceso estructurado que garantiza resultados medibles",
    processSteps: steps,
    
    // Additional Content (for the call-to-action section)
    additionalContent: (
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="p-8 rounded-xl border bg-muted/30">
            <div className="flex items-center justify-center gap-2 mb-2 text-primary">
              <BookOpenText className="h-5 w-5" />
              <span className="text-sm font-medium">Contenido que impulsa marca</span>
            </div>
            <h3 className="text-2xl font-semibold mb-3">Construye autoridad con un sistema de contenidos</h3>
            <p className="text-muted-foreground mb-4">De la estrategia al calendario, con ejecución y medición reales.</p>
            <a href="/solicitar-consulta" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors">
              Quiero empezar
            </a>
          </div>
        </div>
      </section>
    ),
    
    // FAQ Section
    faqTitle: "Preguntas frecuentes",
    faqDescription: "Resolvemos las dudas más comunes sobre estrategia de contenidos",
    faqItems: faqs,
    
    // Breadcrumbs
    breadcrumbItems: [
      { label: "Inicio", href: "/" },
      { label: "Impulsa tu marca", href: "/soluciones/impulsa-tu-marca" },
      { label: "Servicios", href: "/servicios" },
      { label: "Estrategia de contenidos" }
    ]
  };

  return <ServicePageTemplate data={serviceData} />;
};

export default EstrategiaContenidos;
