import React from 'react';
import CaseStudyTemplate from '@/components/CaseStudyTemplate';
import { Search, Share2, BarChart3 } from 'lucide-react';

const CasoExitoAIPClinic: React.FC = () => {
  const pageTitle = "Caso de Éxito AIP Clinic - Google Ads y Redes Sociales para Clínica Dermatológica Online | Hayas Marketing";
  const pageDescription = "Descubre cómo AIP Clinic impulsó su crecimiento con campañas digitales en Google Ads y redes sociales para aumentar la captación de pacientes en dermatología online.";
  const canonical = "https://hayasmarketing.com/casos-exito/aip-clinic";
  const ogImage = "https://hayasmarketing.com/lovable-uploads/aip-clinic-dermatologia-online.png";

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
      companyName="AIP Clinic"
      subtitle="Una clínica dermatológica online que confía en Hayas para aumentar su visibilidad y captar pacientes a través de publicidad digital"
      badges={["Salud / Clínica Online", "Dermatología", "Google Ads"]}
      websiteUrl="https://www.aipclinic.com"
      featuredImage="/lovable-uploads/aip-clinic-dermatologia-online.png"
      featuredImageAlt="Caso de éxito AIP Clinic - Dermatología online con profesionalidad y agenda intacta"
      aboutCompany="AIP Clinic es una clínica dermatológica online especializada en ofrecer diagnósticos y tratamientos de la piel a través de consultas digitales. Con un modelo innovador de atención médica remota, permite a los pacientes acceder a dermatólogos de confianza sin necesidad de desplazarse, ofreciendo comodidad, rapidez y profesionalidad. Su reto era claro: aumentar la visibilidad de la clínica en el entorno digital y captar pacientes interesados en consultas dermatológicas online en un mercado sanitario cada vez más competitivo."
      challenge="Los principales desafíos de AIP Clinic eran dar a conocer su modelo de clínica online transmitiendo confianza en un sector donde la atención presencial sigue siendo la norma, aumentar la captación de pacientes a través de canales digitales efectivos, optimizar la inversión publicitaria asegurando un retorno positivo con campañas segmentadas, y posicionarse como clínica dermatológica online de referencia frente a otras soluciones de telemedicina y dermatología presencial."
      solutions={[
        {
          icon: Search,
          title: "Campañas en Google Ads",
          description: "Creación y optimización de campañas de búsqueda segmentadas por palabras clave específicas como 'dermatólogo online' con ajustes de pujas para maximizar conversiones."
        },
        {
          icon: Share2,
          title: "Publicidad en Redes Sociales",
          description: "Desarrollo de campañas en Facebook e Instagram con creatividades adaptadas al sector salud, mensajes claros y segmentación avanzada para públicos interesados en consultas médicas online."
        },
        {
          icon: BarChart3,
          title: "Consultoría Estratégica y Analítica",
          description: "Revisión de procesos de captación digital, definición de KPIs clave y creación de dashboards para medir el rendimiento de campañas y captación de pacientes."
        }
      ]}
      results={[
        "Aumento significativo de la visibilidad digital de la clínica",
        "Captación exitosa de nuevos pacientes interesados en dermatología online",
        "Optimización de la inversión publicitaria con ROI positivo",
        "Posicionamiento como clínica innovadora en salud digital",
        "Transmisión efectiva de confianza en modelo de atención remota",
        "Dashboards precisos para medir rendimiento y captación",
        "Segmentación exitosa de audiencias interesadas en telemedicina"
      ]}
      learnings="Gracias a la estrategia desarrollada, AIP Clinic logró aumentar su visibilidad digital y captar nuevos pacientes interesados en consultas dermatológicas online. La combinación de campañas en Google Ads, publicidad en redes sociales, localización de contenidos y consultoría estratégica reforzó su posicionamiento como clínica innovadora en el sector de la salud digital."
      ctaTitle="¿Quieres atraer más pacientes a tu clínica o consulta médica?"
      ctaDescription="Descubre cómo nuestras estrategias digitales especializadas en el sector salud pueden ayudarte a crecer y optimizar la captación de pacientes online."
      ctaButtonText="Solicitar Consulta Gratuita"
      relatedSolutions={[
        { label: 'Publicidad Google Ads', route: 'serviceGoogleAds' },
      ]}
    />
  );
};

export default CasoExitoAIPClinic;