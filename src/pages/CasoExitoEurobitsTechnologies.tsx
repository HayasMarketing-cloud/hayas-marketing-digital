import React from 'react';
import CaseStudyTemplate from '@/components/CaseStudyTemplate';
import { Globe, MessageSquare, PenTool } from 'lucide-react';

const CasoExitoEurobitsTechnologies: React.FC = () => {
  const pageTitle = "Caso de Éxito Eurobits Technologies - Estrategia Digital Integral para Empresa Fintech | Hayas Marketing";
  const pageDescription = "Descubre cómo Eurobits Technologies reforzó su posicionamiento internacional con una estrategia digital integral incluyendo diseño web, redes sociales y localización de contenidos.";
  const canonical = "https://hayasmarketing.com/casos-exito/eurobits-technologies";
  const ogImage = "https://hayasmarketing.com/lovable-uploads/eurobits-technologies-15-years.png";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": pageTitle,
    "description": pageDescription,
    "image": ogImage,
    "author": {
      "@type": "Organization",
      "name": "Hayas Marketing"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Hayas Marketing",
      "logo": {
        "@type": "ImageObject",
        "url": "https://hayasmarketing.com/lovable-uploads/hayas-logo.png"
      }
    },
    "datePublished": "2024-01-01",
    "dateModified": "2024-01-01"
  };

  return (
    <CaseStudyTemplate
      pageTitle={pageTitle}
      pageDescription={pageDescription}
      canonical={canonical}
      ogImage={ogImage}
      structuredData={structuredData}
      companyName="Eurobits Technologies"
      subtitle="Una empresa líder en agregación financiera que confió en Hayas para mejorar su presencia online y conectar con su audiencia global"
      badges={["Tecnología", "Fintech", "Internacional"]}
      websiteUrl="https://www.eurobits.es"
      featuredImage="/lovable-uploads/eurobits-technologies-15-years.png"
      featuredImageAlt="Caso de éxito Eurobits Technologies - Edificio corporativo con logo de 15 años de aniversario"
      aboutCompany="Eurobits Technologies es una empresa internacional de referencia en el sector tecnológico, especializada en soluciones de agregación financiera para bancos y entidades financieras. Sus servicios permiten a las instituciones ofrecer a los clientes una visión unificada y segura de sus productos financieros, contribuyendo a mejorar la transparencia y la experiencia de usuario en el sector bancario. En un entorno de alta competencia e innovación constante, Eurobits necesitaba consolidar su branding digital y transmitir con claridad su propuesta de valor a nivel internacional."
      challenge="Los principales desafíos de Eurobits eran actualizar su presencia digital con un diseño web profesional y alineado con su liderazgo en el sector tecnológico, mejorar el branding a través de redes sociales proyectando una imagen de empresa innovadora, confiable y global, impulsar su estrategia de contenidos mostrando tanto su expertise técnico como su papel pionero en la industria financiera, y localizar contenidos para audiencias internacionales, adaptando el mensaje a distintos mercados y contextos culturales."
      solutions={[
        {
          icon: Globe,
          title: "Diseño Web Corporativo",
          description: "Creamos un sitio moderno, funcional y orientado a transmitir solidez tecnológica y confianza para bancos y entidades financieras."
        },
        {
          icon: MessageSquare,
          title: "Gestión de Redes Sociales",
          description: "Planificación y ejecución de publicaciones con foco en branding, innovación y presencia internacional."
        },
        {
          icon: PenTool,
          title: "Estrategia de Contenidos y Localización",
          description: "Redacción de artículos especializados y adaptación lingüística y cultural de mensajes clave para audiencias internacionales."
        }
      ]}
      results={[
        "Refuerzo de la marca a nivel global con presencia digital coherente",
        "Consolidación como referente en el sector fintech",
        "Nuevo diseño web que transmite solidez tecnológica y confianza",
        "Estrategia de redes sociales exitosa con enfoque internacional",
        "Contenidos localizados que mejoran la comunicación global"
      ]}
      learnings="Gracias a esta colaboración, Eurobits Technologies logró reforzar su marca a nivel global, consolidando una presencia digital coherente con su papel como referente en el sector fintech. El nuevo diseño web, la estrategia de redes sociales y los contenidos localizados permitieron transmitir una imagen sólida y confiable, alineada con las necesidades de bancos y entidades financieras internacionales."
      ctaTitle="¿Quieres proyectar tu empresa tecnológica a nivel internacional?"
      ctaDescription="Descubre cómo nuestras soluciones digitales pueden ayudarte a reforzar tu marca y conectar con audiencias globales en el sector tecnológico."
      ctaButtonText="Solicitar Consulta Gratuita"
      relatedSolutions={[
        { label: 'Diseño Web', route: 'serviceWebDesign' },
        { label: 'SEO y Posicionamiento', route: 'serviceSEOPositioning' },
      ]}
    />
  );
};

export default CasoExitoEurobitsTechnologies;