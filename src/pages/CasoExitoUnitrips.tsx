import React from 'react';
import CaseStudyTemplate from '@/components/CaseStudyTemplate';
import { Users, BarChart3, Target } from 'lucide-react';

const CasoExitoUnitrips: React.FC = () => {
  const pageTitle = "Caso de Éxito UNITRIPS - CRM y Estrategia Digital para Turismo Juvenil | Hayas Marketing";
  const pageDescription = "Descubre cómo UNITRIPS impulsó su crecimiento en turismo juvenil con CRM especializado, consultoría estratégica y automatización de procesos para grupos de viaje.";
  const canonical = "https://hayasmarketing.com/casos-exito/unitrips";
  const ogImage = "https://hayasmarketing.com/lovable-uploads/unitrips-europe-travel.png";

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
      companyName="UNITRIPS"
      subtitle="Una agencia de viajes para grupos que apostó por la tecnología y la consultoría estratégica para optimizar su gestión y crecer en el mercado"
      badges={["Turismo", "Viajes Juveniles", "CRM"]}
      websiteUrl="https://www.unitrips.org"
      featuredImage="/lovable-uploads/unitrips-europe-travel.png"
      featuredImageAlt="Caso de éxito UNITRIPS - Viajes grupales para jóvenes por Europa"
      aboutCompany="UNITRIPS es una agencia de viajes especializada en experiencias para grupos, con un fuerte enfoque en el público joven y en la creación de aventuras únicas en Europa y otros destinos internacionales. Sus viajes combinan ocio, cultura y comunidad, convirtiéndose en una alternativa diferenciada dentro del sector turismo. En un mercado muy competitivo, la agencia necesitaba modernizar su gestión de clientes y leads, y reforzar su estrategia digital para seguir creciendo y ofreciendo experiencias memorables."
      challenge="Los principales desafíos de UNITRIPS eran centralizar la gestión de leads y clientes en un sistema unificado que mejorara la trazabilidad y el seguimiento de cada oportunidad, automatizar procesos internos como la captación de interesados y la gestión de reservas para optimizar recursos del equipo, definir una estrategia digital clara con KPIs y métricas que midieran el rendimiento comercial y la eficacia de las acciones de marketing, y conocer mejor a sus buyer personas, identificando sus motivaciones de viaje y cómo conectar con ellas de forma más efectiva."
      solutions={[
        {
          icon: Users,
          title: "Implantación de CRM Especializado",
          description: "Configuración de un CRM adaptado a la gestión de reservas y leads en turismo, con pipelines específicos y automatizaciones de seguimiento."
        },
        {
          icon: BarChart3,
          title: "KPIs y Métricas de Rendimiento",
          description: "Definición de indicadores clave para evaluar la captación de leads, coste por adquisición y tasa de conversión en el sector turístico."
        },
        {
          icon: Target,
          title: "Investigación de Buyer Personas",
          description: "Análisis profundo de viajeros jóvenes para diseñar experiencias alineadas con sus expectativas y optimizar funnels de captación."
        }
      ]}
      results={[
        "Profesionalización de la gestión comercial y digital",
        "Centralización efectiva de leads y clientes en sistema unificado",
        "Automatización exitosa de procesos de captación y reservas",
        "Definición clara de estrategia digital con KPIs medibles",
        "Mejor comprensión de buyer personas y sus motivaciones",
        "Optimización de funnels desde primer contacto hasta conversión",
        "Fortalecimiento de la capacidad de fidelización de clientes"
      ]}
      learnings="La colaboración con UNITRIPS permitió a la agencia profesionalizar su gestión comercial y digital, dotándola de herramientas para seguir creciendo en el mercado turístico juvenil. La implantación de un CRM y la consultoría estratégica fortalecieron sus procesos internos y su capacidad para atraer, gestionar y fidelizar a grupos de viajeros en un entorno cada vez más competitivo."
      ctaTitle="¿Quieres transformar tu agencia de viajes con soluciones digitales adaptadas al turismo?"
      ctaDescription="Descubre cómo nuestras estrategias de CRM especializado y consultoría estratégica pueden ayudarte a crecer y optimizar tu gestión comercial."
      ctaButtonText="Solicitar Consulta Gratuita"
    />
  );
};

export default CasoExitoUnitrips;