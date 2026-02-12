import React from 'react';
import CaseStudyTemplate from '@/components/CaseStudyTemplate';
import { Users, Target, MessageCircle, Zap, TrendingUp } from 'lucide-react';

const CasoExitoCOVEBO = () => {
  const pageTitle = "Caso de Éxito COVEBO - Estrategia Digital para Empleo Internacional | Hayas Marketing";
  const pageDescription = "Descubre cómo COVEBO conecta talento español con oportunidades en Holanda mediante gestión de redes sociales y estrategia de contenidos.";
  const canonical = "https://hayasmarketing.com/casos-exito/covebo";
  const ogImage = "https://hayasmarketing.com/lovable-uploads/afe158ac-6126-4bde-86d8-82a591c3351b.png";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CaseStudy",
    "name": "COVEBO conecta talento español con oportunidades laborales en Holanda",
    "description": pageDescription,
    "url": canonical,
    "image": ogImage,
    "datePublished": "2024-01-20",
    "author": {
      "@type": "Organization",
      "name": "Hayas Marketing",
      "url": "https://hayasmarketing.com"
    },
    "subject": {
      "@type": "Organization",
      "name": "COVEBO",
      "description": "Agencia de empleo internacional que conecta trabajadores con empresas en Europa"
    },
    "result": [
      "Mayor captación de candidatos españoles",
      "Imagen de marca más sólida y profesional",
      "Mejor aprovechamiento de canales digitales",
      "Posicionamiento destacado en empleo internacional"
    ]
  };

  return (
    <CaseStudyTemplate
      pageTitle={pageTitle}
      pageDescription={pageDescription}
      canonical={canonical}
      ogImage={ogImage}
      structuredData={structuredData}
      companyName="COVEBO"
      subtitle="Una estrategia digital para captar candidatos y proyectar una imagen de marca profesional en el sector del empleo internacional"
      badges={["Educación / Formación", "Empleo Internacional", "Redes Sociales"]}
      websiteUrl="https://www.covebo.com"
      featuredImage="/lovable-uploads/afe158ac-6126-4bde-86d8-82a591c3351b.png"
      featuredImageAlt="Caso de éxito COVEBO - Equipo trabajando en oficina moderna conectando talento con oportunidades"
      aboutCompany="COVEBO es una agencia de empleo con presencia internacional que conecta trabajadores con empresas de múltiples sectores en Europa, especialmente en Holanda. Su misión es ofrecer oportunidades de trabajo a candidatos cualificados y apoyar a las empresas en la captación de talento. En España, su reto principal era llegar a jóvenes profesionales y trabajadores en busca de nuevas oportunidades en el extranjero, transmitiendo a la vez confianza y profesionalidad como marca empleadora."
      challenge="El desafío de COVEBO en el mercado español se centraba en captar candidatos españoles interesados en trabajar en Holanda, compitiendo con numerosas plataformas y agencias. Necesitaban construir una imagen de marca sólida y profesional que generara confianza tanto en candidatos como en empresas colaboradoras, aprovechando canales digitales, especialmente redes sociales, para llegar a un público joven, diverso y en constante búsqueda de oportunidades, gestionando esta estrategia con un equipo multidisciplinar joven y dinámico."
      solutions={[
        {
          icon: MessageCircle,
          title: "Gestión de Redes Sociales",
          description: "Creación y calendarización de contenidos en plataformas clave (Facebook, Instagram, LinkedIn), adaptando el tono y los formatos al público objetivo."
        },
        {
          icon: Target,
          title: "Estrategia de Contenidos",
          description: "Elaboración de publicaciones informativas sobre oportunidades laborales, testimonios de candidatos y consejos prácticos para trabajar en Holanda."
        },
        {
          icon: TrendingUp,
          title: "Branding Digital",
          description: "Diseño visual coherente y profesional para transmitir la seriedad y fiabilidad de la marca, alineado con sus valores corporativos."
        },
        {
          icon: Zap,
          title: "Campañas de Engagement",
          description: "Dinámicas interactivas para aumentar la participación de los usuarios y generar comunidad en torno a la marca."
        },
        {
          icon: Users,
          title: "Soporte al Equipo Interno",
          description: "Coordinación con el equipo joven de COVEBO en España, integrando ideas y adaptando la estrategia a un estilo cercano y dinámico."
        }
      ]}
      results={[
        "Mayor captación de candidatos españoles interesados en oportunidades en Holanda",
        "Construcción de una presencia digital más sólida y confiable",
        "Refuerzo del branding y posicionamiento en el mercado laboral internacional",
        "Aumento de la participación y engagement en redes sociales",
        "Mejora en la percepción de confianza y profesionalidad de la marca",
        "Generación de comunidad activa en torno a las oportunidades de empleo"
      ]}
      learnings="La colaboración con COVEBO permitió construir una presencia digital más sólida y confiable, que atrajo a más candidatos españoles interesados en oportunidades de empleo en Holanda. Con una estrategia de contenidos adaptada y una gestión profesional de redes sociales, la marca consiguió reforzar su branding y posicionarse como una opción destacada dentro del mercado laboral internacional."
      ctaTitle="¿Quieres potenciar tu marca empleadora?"
      ctaDescription="Descubre cómo nuestra estrategia de redes sociales y contenidos puede ayudarte a captar el mejor talento y construir una imagen de marca sólida en tu sector."
      ctaButtonText="Solicitar Consulta Gratuita"
      relatedSolutions={[
        { label: 'Gestión de Redes Sociales', route: 'serviceSocialMedia' },
        { label: 'Estrategia de Contenidos', route: 'serviceContentStrategy' },
      ]}
    />
  );
};

export default CasoExitoCOVEBO;