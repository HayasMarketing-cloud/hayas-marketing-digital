import React from 'react';
import CaseStudyTemplate from '@/components/CaseStudyTemplate';
import { successCaseImages } from '@/data/successCaseImages';
import { Target, Linkedin } from 'lucide-react';

const CasoExitoBufeteMaseras: React.FC = () => {
  return (
    <CaseStudyTemplate
      pageTitle="Caso de Éxito Bufete MASERAS | HubSpot + LinkedIn"
      pageDescription="Unificando clientes y presencia online para un despacho legal de referencia: implantación de HubSpot y gestión de LinkedIn."
      canonical="/casos-exito/bufete-maseras"
      ogImage={successCaseImages.bufeteMaseras}
      structuredData={{
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Caso de Éxito — Bufete MASERAS: Gestión legal potenciada por estrategia digital',
        about: 'Implantación de CRM HubSpot y gestión de LinkedIn',
        author: { '@type': 'Organization', name: 'Hayas Marketing' },
        url: '/casos-exito/bufete-maseras'
      }}
      companyName="Bufete MASERAS"
      subtitle="Gestión legal potenciada por estrategia digital"
      badges={["Derecho", "CRM", "LinkedIn"]}
      websiteUrl="https://despachomaseras.es/"
      featuredImage={successCaseImages.bufeteMaseras}
      featuredImageAlt="Bufete MASERAS — despacho legal"
      aboutCompany="Bufete MASERAS es un despacho de abogados especializado en derecho civil, mercantil y administrativo, con un enfoque personalizado y de calidad en la defensa de los intereses de sus clientes."
      challenge="El despacho buscaba optimizar la gestión de clientes y oportunidades, además de reforzar su presencia profesional en LinkedIn para atraer a un público objetivo más amplio. Necesitaban una herramienta CRM que centralizara el seguimiento de casos y la comunicación con clientes, y una estrategia de contenidos que posicionara su experiencia en el sector legal."
      solutions={[
        {
          icon: Target,
          title: "Implantación de CRM HubSpot",
          description: "Configuración para gestionar ciclo de vida de clientes y casos, automatizar recordatorios y centralizar información."
        },
        {
          icon: Linkedin,
          title: "Gestión de LinkedIn",
          description: "Estrategia de contenidos, optimización de perfil y línea editorial para reforzar reputación y alcance."
        }
      ]}
      results={[
        "Mejora en el seguimiento y organización de expedientes",
        "Incremento en interacciones y alcance en LinkedIn",
        "Mayor reconocimiento de marca dentro del sector jurídico"
      ]}
      learnings="La transformación digital en el sector legal requiere combinar herramientas de gestión con presencia estratégica en canales profesionales para obtener un impacto real en el negocio."
      ctaTitle="¿Quieres un resultado similar?"
      ctaDescription="Hablemos de tu contexto y diseñemos una implantación de HubSpot y estrategia en LinkedIn a medida."
      ctaButtonText="Solicitar consulta gratuita"
    />
  );
};

export default CasoExitoBufeteMaseras;