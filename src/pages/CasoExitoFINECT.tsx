import React from 'react';
import CaseStudyTemplate from '@/components/CaseStudyTemplate';
import { Database, Users, Target, TrendingUp, BarChart3 } from 'lucide-react';

const CasoExitoFINECT = () => {
  const pageTitle = "Caso de Éxito FINECT - CRM y Estrategia Digital para Educación Financiera | Hayas Marketing";
  const pageDescription = "Descubre cómo FINECT optimizó su relación con inversores y gestoras mediante CRM y consultoría estratégica para impulsar la educación financiera.";
  const canonical = "https://hayasmarketing.com/casos-exito/finect";
  const ogImage = "https://hayasmarketing.com/lovable-uploads/e8f0ab4b-8a60-45d7-b73f-d0774e1de395.png";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CaseStudy",
    "name": "FINECT impulsa la educación financiera con CRM y estrategia digital",
    "description": pageDescription,
    "url": canonical,
    "image": ogImage,
    "datePublished": "2024-01-15",
    "author": {
      "@type": "Organization",
      "name": "Hayas Marketing",
      "url": "https://hayasmarketing.com"
    },
    "subject": {
      "@type": "Organization",
      "name": "FINECT",
      "description": "Plataforma líder en información financiera y educación para inversores"
    },
    "result": [
      "Centralización de la relación con inversores y gestoras",
      "Segmentación y personalización de comunicaciones",
      "Optimización del acompañamiento formativo de usuarios",
      "Redefinición estratégica de procesos y buyer personas"
    ]
  };

  return (
    <CaseStudyTemplate
      pageTitle={pageTitle}
      pageDescription={pageDescription}
      canonical={canonical}
      ogImage={ogImage}
      structuredData={structuredData}
      companyName="FINECT"
      subtitle="Cómo una plataforma líder en información financiera optimizó su relación con inversores y gestoras para seguir formando a su comunidad"
      badges={["Educación / Formación", "Servicios Financieros", "CRM"]}
      websiteUrl="https://www.finect.com"
      featuredImage="/lovable-uploads/e8f0ab4b-8a60-45d7-b73f-d0774e1de395.png"
      featuredImageAlt="Caso de éxito FINECT - Educación financiera con CRM y estrategia digital"
      aboutCompany="FINECT es una plataforma de contenidos especializada en fondos de inversión y valores que se ha convertido en un referente para gestoras de fondos y ahorradores individuales. Cada día publica noticias y análisis sobre la actualidad financiera y ofrece herramientas para comparar fondos de inversión, ETFs, roboadvisors y planes de pensiones. Con un equipo de unas 20 personas, su objetivo es ofrecer a usuarios y entidades los mejores servicios y convertirse en un medio de referencia para inversores. Además de informar, FINECT busca formar a sus usuarios: cada mes, más de 500.000 inversores y profesionales visitan su plataforma y realizan más de 50.000 comparaciones de productos financieros."
      challenge="A medida que crecía su comunidad de usuarios y su catálogo de servicios, FINECT necesitaba dar un salto en la gestión de sus relaciones y en su estrategia digital. Se enfrentaba a varios desafíos: centralizar la relación con inversores y gestoras, segmentar y personalizar la comunicación para diferentes perfiles y niveles formativos, atraer y acompañar a los usuarios en su formación (eventos, webinars, premios académicos), y contar con asesoramiento estratégico que redefiniera procesos, buyer personas y funnels de captación."
      solutions={[
        {
          icon: Database,
          title: "Implantación de CRM",
          description: "Selección y configuración de un CRM adaptado a la operativa de FINECT, con integración web y automatización de secuencias de seguimiento."
        },
        {
          icon: Users,
          title: "Investigación de Buyer Personas",
          description: "Análisis de perfiles de inversores y gestoras para segmentar contenidos y comunicaciones de manera efectiva."
        },
        {
          icon: Target,
          title: "Diseño de Funnels de Captación",
          description: "Creación de embudos específicos para leads educativos y de inversión, optimizando el proceso de conversión."
        },
        {
          icon: TrendingUp,
          title: "Gestión de Leads",
          description: "Estrategia para nutrir, clasificar y priorizar contactos hasta convertirlos en clientes o usuarios activos."
        },
        {
          icon: BarChart3,
          title: "Definición de KPIs",
          description: "Establecimiento de métricas de éxito específicas: leads captados, participación en eventos e interacciones de comparadores."
        }
      ]}
      results={[
        "Centralización exitosa de la relación con inversores y gestoras",
        "Segmentación y personalización efectiva de comunicaciones",
        "Optimización del acompañamiento formativo de usuarios",
        "Redefinición estratégica completa de procesos y buyer personas",
        "Mejora en la captación y gestión de leads educativos",
        "Incremento en la participación en eventos y webinars formativos"
      ]}
      learnings="El caso de FINECT demuestra cómo la combinación de un CRM bien implantado y una consultoría estratégica centrada en buyer personas y funnels de captación fortalece el impacto educativo y la relación con inversores y gestoras. Así, la plataforma mantiene su objetivo de ofrecer información, análisis y herramientas para invertir mejor y continúa creciendo como referencia en educación financiera."
      ctaTitle="¿Quieres impulsar tu proyecto educativo con impacto real?"
      ctaDescription="Descubre cómo nuestras soluciones de CRM y consultoría estratégica pueden ayudarte a optimizar la relación con tu comunidad y potenciar tu crecimiento."
      ctaButtonText="Solicitar Consulta Gratuita"
      relatedSolutions={[
        { label: 'Implantación CRM', route: 'serviceCRMImplantation' },
        { label: 'Consultoría Estratégica', route: 'serviceStrategicConsulting' },
      ]}
    />
  );
};

export default CasoExitoFINECT;