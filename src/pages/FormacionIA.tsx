import React from 'react';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { ServicePageData } from '@/components/ServicePageTemplate';
import { Bot, GraduationCap, Settings, Users, CheckCircle, Clock } from 'lucide-react';
import { useServiceSEO } from '@/hooks/useServiceSEO';

const FormacionIA: React.FC = () => {
  const { title, description, canonical, ogImage, structuredData } = useServiceSEO({
    serviceName: 'Formación en IA para Marketing Digital',
    serviceDescription: 'Programas de formación especializados para equipos que quieren integrar inteligencia artificial en sus estrategias de marketing.',
    canonical: '/es/servicios/formacion-ia',
    features: [
      'Workshops prácticos de IA',
      'Casos de uso reales',
      'Implementación guiada',
      'Certificación incluida'
    ],
    priceRange: '€€€',
    aggregateRating: { ratingValue: '4.9', reviewCount: '28' }
  });
  const serviceData: ServicePageData = {
    // SEO Data
    title,
    description,
    canonical,
    ogImage,
    structuredData,
    
    // Hero Section
    badge: "Formación Especializada",
    heroTitle: "Formación IA aplicada a Marketing Digital",
    heroSubtitle: "Capacita a tu equipo en el uso estratégico de herramientas de inteligencia artificial para maximizar los resultados de marketing",
    heroImage: "/formacion-ia-hero.jpg",
    heroImageAlt: "Formación en inteligencia artificial aplicada al marketing digital",
    primaryCTA: "Solicitar información del programa",
    primaryCTALink: "/contacto",
    secondaryCTA: "Consultar con HAYAS Copilot",
    secondaryCTALink: "/contacto",
    
    // Breadcrumbs
    breadcrumbItems: [
      { label: "Inicio", href: "/" },
      { label: "Servicios", href: "/servicios" },
      { label: "Formación IA Marketing", href: "/servicios/formacion-ia" }
    ],

    // Services Section
    servicesTitle: "Programa de Formación Integral",
    servicesSubtitle: "Programas de formación práctica diseñados para que tu equipo domine las herramientas de IA más avanzadas",
    services: [
      {
        icon: <GraduationCap className="h-8 w-8 text-primary" />,
        title: "Formación Práctica Hands-On",
        description: "Aprende haciendo con casos reales de tu industria. Cada módulo incluye ejercicios prácticos con herramientas de IA líderes del mercado."
      },
      {
        icon: <CheckCircle className="h-8 w-8 text-primary" />,
        title: "Certificación Profesional",
        description: "Obtén certificación oficial en IA aplicada a Marketing Digital reconocida por la industria."
      },
      {
        icon: <Users className="h-8 w-8 text-primary" />,
        title: "Soporte Continuo Post-Formación",
        description: "Acompañamiento de 3 meses después de la formación para implementar lo aprendido en tu empresa."
      }
    ],

    // Benefits Section
    benefitsTitle: "Beneficios de la Formación IA",
    benefitsSubtitle: "Resultados tangibles que obtendrás tras completar el programa",
    benefits: [
      "Reduce costos operativos hasta un 40% automatizando tareas repetitivas",
      "Mejora la productividad del equipo con herramientas de IA especializadas", 
      "Incrementa la precisión en targeting con algoritmos de ML avanzados",
      "Acelera la toma de decisiones con análisis de datos en tiempo real"
    ],

    // Process Section
    processTitle: "Metodología de Formación",
    processSubtitle: "Un proceso estructurado para maximizar el aprendizaje y la aplicación práctica",
    processSteps: [
      {
        number: "01",
        title: "Análisis de Necesidades",
        description: "Evaluamos el nivel actual de tu equipo y definimos objetivos específicos de aprendizaje alineados con tus metas de negocio.",
        icon: <Settings className="h-6 w-6" />
      },
      {
        number: "02",
        title: "Programa Personalizado",
        description: "Diseñamos un curriculum adaptado a tu industria, nivel de experiencia y herramientas que ya utilizas.",
        icon: <Bot className="h-6 w-6" />
      },
      {
        number: "03",
        title: "Formación Intensiva",
        description: "Sesiones prácticas de 4-6 semanas con ejercicios reales, casos de estudio y proyectos aplicados.",
        icon: <GraduationCap className="h-6 w-6" />
      },
      {
        number: "04",
        title: "Implementación Guiada",
        description: "Acompañamos la implementación de lo aprendido en tu empresa con soporte técnico personalizado.",
        icon: <Users className="h-6 w-6" />
      },
      {
        number: "05",
        title: "Certificación y Seguimiento",
        description: "Evaluación final, entrega de certificación y seguimiento continuo para asegurar la aplicación efectiva.",
        icon: <CheckCircle className="h-6 w-6" />
      }
    ],

    // FAQs
    faqItems: [
      {
        question: "¿Qué nivel de conocimiento previo se requiere?",
        answer: "No se requiere experiencia previa en IA. El programa está diseñado para profesionales de marketing de todos los niveles. Adaptamos el contenido según la experiencia del grupo."
      },
      {
        question: "¿Qué herramientas de IA incluye la formación?",
        answer: "Cubrimos las principales herramientas como ChatGPT, Claude, Midjourney, RunwayML, herramientas de automatización, análisis predictivo y plataformas especializadas en marketing."
      },
      {
        question: "¿La formación es presencial u online?",
        answer: "Ofrecemos ambas modalidades. La formación presencial incluye más práctica hands-on, mientras que la online permite mayor flexibilidad horaria. También disponemos de formato híbrido."
      },
      {
        question: "¿Incluye acceso a herramientas premium?",
        answer: "Sí, durante la formación proporcionamos acceso a versiones premium de las principales herramientas de IA para que puedas practicar sin limitaciones."
      },
      {
        question: "¿Hay descuentos para equipos grandes?",
        answer: "Sí, ofrecemos descuentos escalonados para grupos de 5 o más personas. También disponemos de programas corporativos personalizados con condiciones especiales."
      }
    ],

    // Show sections
    showSuccessCases: false,
    showContactForm: true,
    contactFormTitle: "Solicita información del programa",
    contactFormSubtitle: "Cuéntanos sobre tu equipo y te enviaremos información detallada del programa de formación"
  };

  return <ServicePageTemplate data={serviceData} />;
};

export default FormacionIA;