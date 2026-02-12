import React from 'react';
import CaseStudyTemplate from '@/components/CaseStudyTemplate';
import { successCaseImages } from '@/data/successCaseImages';
import { ClipboardList, MessageSquare, Palette, PenTool, Globe } from 'lucide-react';

const CasoExitoHubSpotForStartups: React.FC = () => {
  return (
    <CaseStudyTemplate
      pageTitle="Caso éxito HubSpot for Startups | Inbound"
      pageDescription="Campaña de inbound con casos de éxito para impulsar la visibilidad de startups en su web."
      canonical="/es/casos-exito"
      ogImage={successCaseImages.hubSpotForStartups}
      structuredData={{
        "@context": "https://schema.org",
        "@type": "CaseStudy",
        headline: "Caso de Éxito — HubSpot for Startups: Historias reales para inspirar el crecimiento",
        about: "Cuestionarios personalizados, entrevistas, assets visuales, redacción SEO y publicación web",
        url: '/es/casos-exito/hubspot-for-startups',
        inLanguage: "es",
        publisher: { "@type": "Organization", name: "Hayas Marketing" }
      }}
      companyName="HubSpot for Startups"
      subtitle="Historias reales para inspirar el crecimiento"
      badges={["HubSpot", "Inbound Marketing", "Startups"]}
      websiteUrl="https://www.hubspot.com/startups"
      featuredImage={successCaseImages.hubSpotForStartups}
      featuredImageAlt="HubSpot for Startups - Historias reales para inspirar el crecimiento"
      aboutCompany="HubSpot for Startups es el programa de HubSpot diseñado para ayudar a empresas emergentes a crecer, ofreciendo herramientas, formación y recursos de marketing, ventas y servicio adaptados a sus necesidades."
      challenge="Querían poner en valor el impacto de su programa mediante la publicación de casos de éxito de startups que lo utilizan, con un enfoque inspirador y atractivo para captar la atención de nuevos emprendedores."
      solutions={[
        {
          icon: ClipboardList,
          title: "Diseño de Cuestionarios Personalizados",
          description: "Creación de guías de entrevista adaptadas a cada startup para obtener información relevante y coherente con el storytelling de la campaña."
        },
        {
          icon: MessageSquare,
          title: "Entrevistas en Profundidad",
          description: "Realización de entrevistas con los fundadores y equipos clave para capturar su historia, logros y aprendizajes."
        },
        {
          icon: Palette,
          title: "Producción de Assets Visuales",
          description: "Diseño de elementos gráficos y visuales para la publicación en la web de HubSpot for Startups, asegurando coherencia con la identidad de la marca."
        },
        {
          icon: PenTool,
          title: "Redacción de Contenidos Web",
          description: "Elaboración de textos claros, inspiradores y optimizados para SEO que destacan la experiencia de cada startup."
        },
        {
          icon: Globe,
          title: "Publicación en la Página Web",
          description: "Integración de los casos de éxito en la web oficial del programa, potenciando su impacto como herramienta de inbound marketing."
        }
      ]}
      results={[]}
      learnings="En programas de apoyo a startups, contar historias reales y visualmente atractivas genera cercanía con el público objetivo y refuerza la credibilidad de la propuesta de valor."
      ctaTitle="¿Necesitas impulsar tu startup?"
      ctaDescription="Te ayudamos a desarrollar una estrategia de inbound marketing que potencie el crecimiento de tu empresa emergente."
      ctaButtonText="Impulsar mi startup"
      relatedSolutions={[
        { label: 'Estrategia de Contenidos', route: 'serviceContentStrategy' },
        { label: 'SEO y Posicionamiento', route: 'serviceSEOPositioning' },
      ]}
    />
  );
};

export default CasoExitoHubSpotForStartups;