import React from 'react';
import CaseStudyTemplate from '@/components/CaseStudyTemplate';
import { successCaseImages } from '@/data/successCaseImages';
import { Megaphone, ChartLine } from 'lucide-react';

const CasoExitoAlmaCruceros = () => {
  return (
    <CaseStudyTemplate
      pageTitle="Caso de Éxito Alma Cruceros | Campañas Google Ads"
      pageDescription="Estrategia publicitaria para aumentar reservas y visibilidad online mediante campañas segmentadas en Google Ads."
      canonical="/casos-exito/alma-cruceros"
      ogImage={successCaseImages.almaCruceros}
      structuredData={{
        "@context": "https://schema.org",
        "@type": "CaseStudy",
        headline: "Caso de Éxito — Alma Cruceros: Navegando hacia más clientes con Google Ads",
        about: "Campañas en Google Ads y optimización continua",
        url: "/casos-exito/alma-cruceros",
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
      companyName="Alma Cruceros"
      subtitle="Navegando hacia más clientes con Google Ads: estrategia publicitaria para aumentar reservas y visibilidad online"
      badges={["Turismo", "Google Ads", "Cruceros"]}
      websiteUrl="https://almacruceros.com"
      featuredImage={successCaseImages.almaCruceros}
      featuredImageAlt="Alma Cruceros — compañía especializada en viajes en crucero"
      aboutCompany="Alma Cruceros es una compañía especializada en viajes en crucero, ofreciendo experiencias únicas y personalizadas en destinos nacionales e internacionales. Su enfoque combina la pasión por los viajes con un servicio personalizado para crear experiencias inolvidables en el mar."
      challenge="Necesitaban aumentar su visibilidad online y atraer un mayor volumen de reservas a través de campañas segmentadas en Google Ads, compitiendo en un sector turístico altamente competitivo donde la estacionalidad y la segmentación precisa son fundamentales para el éxito."
      solutions={[
        {
          icon: Megaphone,
          title: 'Campañas en Google Ads',
          description: 'Diseño y optimización de campañas de búsqueda y display segmentadas por intereses, ubicaciones y fechas clave.'
        },
        {
          icon: ChartLine,
          title: 'Optimización continua',
          description: 'Ajuste de palabras clave, anuncios y pujas para maximizar el ROI y mejorar el rendimiento constantemente.'
        }
      ]}
      results={[
        'Aumento de clics y conversiones hacia la web de reservas',
        'Reducción del coste por adquisición',
        'Mayor visibilidad en búsquedas relevantes'
      ]}
      learnings="En sectores como el turismo, una estrategia de anuncios bien segmentada puede marcar la diferencia en temporada alta y baja. La clave está en entender los patrones de búsqueda estacional y adaptar las campañas en consecuencia."
      ctaTitle="¿Quieres un resultado similar?"
      ctaDescription="Hablemos de tu contexto y diseñemos campañas de Google Ads enfocadas a reservas y ROI."
      ctaButtonText="Solicitar consulta gratuita"
      ctaButtonLink="/es/agendar-reunion"
    />
  );
};

export default CasoExitoAlmaCruceros;