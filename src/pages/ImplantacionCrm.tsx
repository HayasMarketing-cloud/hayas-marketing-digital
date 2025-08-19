import React from 'react';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Settings, Target, Mail, Zap, Building2, Users, CheckCircle } from 'lucide-react';

const ImplantacionCrm = () => {
  const features = [
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Configuración Completa",
      description: "Integración total con tus activos digitales: web, blog y redes sociales"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Pipeline Personalizado",
      description: "Diseño de procesos de ventas adaptados a tu modelo de negocio"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Marketing Avanzado",
      description: "Automatización de campañas y secuencias de nurturing personalizadas"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Funnels Segmentados",
      description: "Creación de embudos específicos por tipo de cliente y objetivos"
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Análisis y Planificación",
      description: "Evaluamos tu negocio actual y diseñamos la estrategia de implementación perfecta para tus objetivos.",
      icon: <Target className="w-6 h-6" />
    },
    {
      number: "02",
      title: "Configuración del Sistema",
      description: "Instalamos y configuramos tu CRM con todas las integraciones necesarias para tu ecosistema digital.",
      icon: <Settings className="w-6 h-6" />
    },
    {
      number: "03",
      title: "Migración de Datos",
      description: "Transferimos todos tus datos existentes de forma segura, garantizando la continuidad de tu información.",
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      number: "04",
      title: "Formación y Lanzamiento",
      description: "Entrenamos a tu equipo y lanzamos el sistema con soporte completo durante las primeras semanas.",
      icon: <Users className="w-6 h-6" />
    }
  ];

  const types = [
    {
      title: "Solución B2B con HubSpot",
      description: "Perfecta para empresas que venden a otras empresas con procesos de venta complejos.",
      features: [
        "Plataforma todo-en-uno para marketing, ventas y servicio",
        "Integración nativa con herramientas empresariales", 
        "Analytics avanzados y reporting completo",
        "Escalabilidad empresarial"
      ],
      idealFor: [
        "Consultorías y servicios profesionales",
        "Software y tecnología",
        "Proveedores industriales",
        "Agencias de marketing"
      ],
      icon: <Building2 className="w-8 h-8" />,
      variant: "primary"
    },
    {
      title: "Solución B2C con Go High Level",
      description: "Optimizada para empresas que venden directamente al consumidor final.",
      features: [
        "Automatización de marketing multicanal",
        "Landing pages y funnels integrados",
        "SMS, WhatsApp y email en una plataforma",
        "Calendario y reservas online"
      ],
      idealFor: [
        "E-commerce y retail",
        "Servicios locales (gym, belleza, salud)",
        "Educación y formación online",
        "Inmobiliarias y seguros"
      ],
      icon: <Users className="w-8 h-8" />,
      variant: "secondary"
    }
  ];

  const faqs = [
    {
      question: "¿Cuál es la diferencia entre HubSpot y Go High Level?",
      answer: "HubSpot es ideal para empresas B2B con procesos de venta complejos, ofertas de alto valor y ciclos largos. Go High Level está optimizado para B2C, conversiones rápidas, gestión masiva de leads y comunicación multicanal (SMS, WhatsApp, email)."
    },
    {
      question: "¿Cuánto tiempo toma la implementación completa?",
      answer: "La implementación básica toma 2-4 semanas, incluyendo configuración, migración de datos, integración con herramientas existentes y formación del equipo. Las personalizaciones avanzadas pueden extender el plazo a 6-8 semanas."
    },
    {
      question: "¿Pueden migrar nuestros datos actuales?",
      answer: "Sí, gestionamos la migración completa de datos desde tu sistema actual: contactos, historial de interacciones, oportunidades de venta, y configuraciones personalizadas. Garantizamos que no pierdas información crítica durante el proceso."
    },
    {
      question: "¿Incluyen formación para nuestro equipo?",
      answer: "Incluimos formación completa: sesiones grupales para todo el equipo, entrenamiento específico por roles, documentación personalizada, videos tutoriales y soporte posterior para resolver dudas durante las primeras semanas de uso."
    },
    {
      question: "¿Se integra con nuestras herramientas actuales?",
      answer: "Configuramos integraciones con tus herramientas existentes: email marketing, contabilidad, calendarios, redes sociales, sistemas de facturación y cualquier software específico de tu sector. Creamos un ecosistema conectado y eficiente."
    },
    {
      question: "¿Qué soporte ofrecen después de la implementación?",
      answer: "Proporcionamos soporte técnico prioritario, actualizaciones regulares, optimizaciones basadas en uso real, reuniones de seguimiento mensuales y acceso a nuevas funcionalidades. Tu éxito es nuestro compromiso a largo plazo."
    }
  ];

  const serviceData = {
    // SEO Data
    title: "Implantación de CRM Personalizada | Hayas Marketing",
    description: "Implementamos la solución CRM perfecta para tu empresa. HubSpot para B2B, Go High Level para B2C. Configuración completa, migración de datos y formación incluida.",
    canonical: "/servicios/implantacion-crm",
    
    // Hero Section
    heroTitle: "Implantación de CRM",
    heroSubtitle: "Personalizada",
    heroDescription: "Implementamos y configuramos tu CRM ideal con migración completa de datos, integración con tus herramientas actuales y formación personalizada para tu equipo. Soluciones especializadas en HubSpot para B2B y Go High Level para B2C.",
    heroImage: "/implantacion-crm-hero.jpg",
    heroImageAlt: "Implementación profesional de CRM - Configuración, migración y formación personalizada",
    badge: "Servicio Especializado",
    primaryCTA: "Solicitar Consultoría Gratuita",
    secondaryCTA: "Ver Planes",
    primaryCTALink: "/?scrollTo=contacto",
    secondaryCTALink: "#tipos",
    
    // Services Section
    servicesTitle: "¿Qué incluye nuestra implantación?",
    servicesSubtitle: "Una implementación completa que abarca todos los aspectos de tu estrategia comercial",
    servicesDescription: "Configuración personalizada, migración de datos, formación incluida",
    services: features,
    
    // Additional Features
    additionalFeatures: [
      "Integración con activos digitales existentes",
      "Configuración de herramientas de marketing",
      "Automatización de email marketing",
      "Diseño de pipeline de ventas",
      "Sistema de lead nurturing",
      "Funnels personalizados por segmento",
      "Segmentación avanzada de clientes",
      "Informes y analytics en tiempo real",
      "Formación del equipo incluida"
    ],
    
    // Types Section (optional)
    typesTitle: "Soluciones Especializadas",
    typesDescription: "Elegimos la plataforma perfecta según tu modelo de negocio",
    types,
    
    // Benefits Section
    benefitsTitle: "Ventajas de Nuestra Implementación",
    benefitsSubtitle: "Todo lo que obtienes con nuestra implementación profesional",
    benefitsDescription: "Resultados garantizados con nuestro enfoque profesional",
    benefits: [
      "Configuración personalizada según tu modelo de negocio",
      "Migración segura de todos tus datos existentes",
      "Integración completa con tu ecosistema digital",
      "Formación integral para todo tu equipo",
      "Soporte técnico prioritario post-implementación",
      "Optimización continua basada en resultados"
    ],
    
    // Process Section
    processTitle: "Nuestro Proceso de Implementación",
    processSubtitle: "Un enfoque estructurado que garantiza el éxito de tu proyecto",
    processDescription: "Metodología probada en más de 100 implementaciones exitosas",
    processSteps: steps,
    
    // Success Cases (optional)
    successCasesTitle: "Casos de Éxito",
    successCasesDescription: "Empresas que han transformado su gestión comercial",
    
    // Additional Content (for custom sections like Hayas CRM)
    additionalContent: (
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            ¿Prefieres una solución completamente personalizada?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Conoce Hayas CRM: nuestra plataforma desarrollada específicamente para pequeñas y medianas empresas españolas
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/hayas-crm" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors">
              Descubrir Hayas CRM
            </a>
          </div>
        </div>
      </section>
    ),
    
    // CTA Section
    ctaTitle: "¿Listo para Transformar tu Gestión Comercial?",
    ctaDescription: "Agenda una consultoría gratuita y descubre cómo podemos implementar la solución CRM perfecta para tu empresa",
    ctaPrimary: {
      text: "Agendar Consultoría Gratuita",
      href: "/?scrollTo=contacto"
    },
    ctaSecondary: {
      text: "Descargar Guía CRM",
      href: "#"
    },
    
    // FAQ Section
    faqTitle: "Preguntas Frecuentes sobre Implantación de CRM",
    faqDescription: "Resolvemos las dudas más comunes sobre la implementación de sistemas CRM",
    faqItems: faqs,
    
    // Breadcrumbs
    breadcrumbItems: [
      { label: "Inicio", href: "/" },
      { label: "Servicios", href: "#" },
      { label: "Implantación de CRM" }
    ]
  };

  return <ServicePageTemplate data={serviceData} />;
};

export default ImplantacionCrm;