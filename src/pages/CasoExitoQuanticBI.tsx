import React from 'react';
import CaseStudyTemplate from '@/components/CaseStudyTemplate';
import { successCaseImages } from '@/data/successCaseImages';
import { Target, Zap, BarChart3, GraduationCap } from 'lucide-react';

const CasoExitoQuanticBI: React.FC = () => {
  return (
    <CaseStudyTemplate
      pageTitle="Caso de éxito QuanticBI | CRM para consultora de datos"
      pageDescription="Implantación de CRM HubSpot y automatizaciones para QuanticBI: gestión comercial centralizada y visibilidad en tiempo real."
      canonical="/es/casos-exito"
      ogImage={successCaseImages.quanticBI}
      structuredData={{
        "@context": "https://schema.org",
        "@type": "CaseStudy",
        headline: "Caso de Éxito — QuanticBI: Inteligencia de negocio con gestión comercial optimizada",
        about: "Implantación de CRM HubSpot, automatización de procesos y reportes para consultora de datos",
        url: '/es/casos-exito/quanticbi',
        inLanguage: "es",
        author: { "@type": "Organization", name: "Hayas Marketing" },
        publisher: {
          "@type": "Organization",
          name: "Hayas Marketing",
          logo: {
            "@type": "ImageObject",
            url: "https://hayas.marketing/lovable-uploads/hayas-logo.png"
          }
        }
      }}
      companyName="QuanticBI"
      subtitle="Inteligencia de negocio con gestión comercial optimizada: implantación de CRM para potenciar la eficiencia en una consultora de datos"
      badges={["Business Intelligence", "CRM HubSpot", "Consultoría"]}
      websiteUrl="https://quanticbi.com/"
      featuredImage={successCaseImages.quanticBI}
      featuredImageAlt="QuanticBI - Consultora especializada en Business Intelligence y análisis de datos"
      aboutCompany="QuanticBI es una consultora especializada en soluciones de inteligencia de negocio y análisis de datos, que ayuda a empresas a transformar la información en decisiones estratégicas. Su equipo combina experiencia técnica con un profundo conocimiento de negocio para generar valor a sus clientes."
      challenge="Necesitaban centralizar la gestión de clientes y oportunidades para tener una visión global de sus proyectos y mejorar la coordinación entre los equipos comerciales y técnicos."
      solutions={[
        {
          icon: Target,
          title: 'Implantación de CRM HubSpot',
          description: 'Configuración adaptada a sus procesos internos para unificar la información de contactos, oportunidades y proyectos en una única plataforma.'
        },
        {
          icon: Zap,
          title: 'Automatización de Procesos',
          description: 'Creación de flujos de trabajo para el seguimiento de leads, envío de comunicaciones y control de las fases del ciclo de ventas.'
        },
        {
          icon: BarChart3,
          title: 'Visibilidad en Tiempo Real',
          description: 'Implementación de paneles de control y reportes que permiten analizar la evolución de oportunidades y la eficacia comercial.'
        },
        {
          icon: GraduationCap,
          title: 'Formación al Equipo',
          description: 'Capacitación para asegurar la adopción completa del CRM y maximizar el rendimiento de la herramienta.'
        }
      ]}
      results={[
        'Centralización efectiva de la gestión comercial',
        'Mejora en la coordinación entre equipos',
        'Mayor visibilidad de oportunidades y proyectos',
        'Optimización en la toma de decisiones estratégicas'
      ]}
      learnings="En consultoras de datos, disponer de un CRM bien implantado no solo mejora la organización interna, sino que permite una visión clara de las oportunidades y favorece la toma de decisiones estratégicas."
      ctaTitle="Visita QuanticBI"
      ctaDescription="Descubre sus soluciones de Business Intelligence y análisis de datos."
      ctaButtonText="Visita QuanticBI"
      ctaButtonLink="https://quanticbi.com/"
      relatedSolutions={[
        { label: 'Implantación CRM', route: 'serviceCRMImplantation' },
        { label: 'Automatización de Ventas', route: 'serviceSalesAutomation' },
      ]}
    />
  );
};

export default CasoExitoQuanticBI;
