import React from 'react';
import CaseStudyTemplate from '@/components/CaseStudyTemplate';
import { successCaseImages } from '@/data/successCaseImages';
import { Target, Database } from 'lucide-react';

const CasoExitoAlfixConsultores = () => {
  return (
    <CaseStudyTemplate
      pageTitle="Caso de Éxito ALFIX Consultores | HubSpot CRM"
      pageDescription="Organización y datos centralizados con HubSpot para mejorar atención, eficiencia y venta cruzada."
      canonical="/es/casos-exito"
      ogImage={successCaseImages.alfixConsultores}
      structuredData={{
        "@context": "https://schema.org",
        "@type": "CaseStudy",
        headline: "Caso de Éxito — ALFIX Consultores: Organización y datos para un servicio más eficiente",
        about: "Implantación de CRM HubSpot con enfoque en eficiencia y venta cruzada",
        url: "/es/casos-exito/alfix-consultores",
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
      companyName="ALFIX Consultores"
      subtitle="Organización y datos centralizados con HubSpot para mejorar la atención, la eficiencia interna y la venta cruzada"
      badges={["Asesoría Fiscal", "HubSpot CRM", "Automatización"]}
      websiteUrl="https://www.alfixconsultores.es"
      featuredImage={successCaseImages.alfixConsultores}
      featuredImageAlt="ALFIX Consultores - Profesional en oficina con títulos y certificaciones"
      aboutCompany="ALFIX Consultores es una asesoría fiscal y despacho de abogados que ofrece servicios integrales a empresas y particulares. Con un enfoque cercano y especializado, busca optimizar la gestión de cada cliente y ofrecer soluciones completas que cubran todas sus necesidades legales y fiscales."
      challenge="Necesitaban mejorar la organización interna de sus servicios y optimizar el uso de los datos de clientes para ofrecer un servicio más ágil y personalizado. También buscaban implementar estrategias de venta cruzada para incrementar el valor de cada cliente, pero carecían de una herramienta centralizada que unificara la información y flujos de trabajo."
      solutions={[
        {
          icon: Target,
          title: 'Implantación de CRM HubSpot',
          description: 'Configuración adaptada a servicios y flujos de trabajo. Propiedades y embudos personalizados para detectar oportunidades de venta cruzada.'
        },
        {
          icon: Database,
          title: 'Integración de datos y formación',  
          description: 'Unificación de información, capacitación del equipo y acompañamiento para asegurar adopción y uso efectivo.'
        }
      ]}
      results={[
        'Mayor control y visibilidad sobre el estado de cada cliente y servicio',
        'Incremento en la identificación y ejecución de ventas cruzadas',
        'Reducción del tiempo de respuesta y mejora en la calidad de la atención'
      ]}
      learnings="En despachos con múltiples servicios, un CRM bien implementado no solo mejora la eficiencia interna, sino que también abre la puerta a estrategias comerciales más efectivas, como la venta cruzada."
      ctaTitle="¿Quieres un resultado similar?"
      ctaDescription="Hablemos de tu contexto y diseñemos una implantación de HubSpot alineada a tus servicios."
      ctaButtonText="Solicitar consulta gratuita"
      ctaButtonLink="/es/agendar-reunion"
      relatedSolutions={[
        { label: 'Implantación CRM', route: 'serviceCRMImplantation' },
        { label: 'Automatización de Ventas', route: 'serviceSalesAutomation' },
      ]}
    />
  );
};

export default CasoExitoAlfixConsultores;