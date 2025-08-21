import React from 'react';
import CaseStudyTemplate from '@/components/CaseStudyTemplate';
import { successCaseImages } from '@/data/successCaseImages';
import { Camera, Monitor, Eye, Navigation } from 'lucide-react';

const CasoExitoCorteAFilms: React.FC = () => {
  return (
    <CaseStudyTemplate
      pageTitle="Caso de éxito Corte A Films | Diseño web audiovisual"
      pageDescription="Diseño web visual e inspirador con portfolio optimizado para Corte A Films, productora audiovisual."
      canonical="/casos-exito/corte-a-films"
      ogImage={successCaseImages.corteAFilms}
      structuredData={{
        "@context": "https://schema.org",
        "@type": "CaseStudy",
        headline: "Caso de Éxito — Corte A Films: Una imagen que cuenta historias",
        about: "Diseño web visual, portfolio y experiencia de usuario para productora audiovisual",
        url: "/casos-exito/corte-a-films",
        inLanguage: "es",
        publisher: { "@type": "Organization", name: "Hayas Marketing" }
      }}
      companyName="Corte A Films"
      subtitle="Una imagen que cuenta historias"
      badges={["Audiovisual", "Diseño Web", "Portfolio"]}
      websiteUrl="https://corteafilms.com/"
      featuredImage={successCaseImages.corteAFilms}
      featuredImageAlt="Corte A Films - Diseño web para productora audiovisual"
      aboutCompany="Corte A Films es una productora audiovisual especializada en la creación de cortometrajes, documentales y vídeos corporativos para empresas. Su estilo combina narrativa cinematográfica con una calidad técnica impecable, transmitiendo emociones y mensajes con fuerza visual."
      challenge="Necesitaban una página web que reflejara su creatividad y profesionalidad, permitiendo mostrar su portfolio de forma atractiva y transmitir la esencia visual de su trabajo a potenciales clientes."
      solutions={[
        {
          icon: Monitor,
          title: 'Diseño Web Personalizado',
          description: 'Creación de un sitio responsive con un diseño muy visual, priorizando el impacto estético y la experiencia del usuario.'
        },
        {
          icon: Camera,
          title: 'Presentación de Portfolio',
          description: 'Integración de galerías y vídeos optimizados para web, que permiten a los visitantes disfrutar de sus producciones sin pérdida de calidad.'
        },
        {
          icon: Eye,
          title: 'Narrativa Visual',
          description: 'Uso de imágenes y recursos gráficos que transmiten la identidad cinematográfica de la productora.'
        },
        {
          icon: Navigation,
          title: 'Optimización de Usabilidad',
          description: 'Navegación intuitiva que guía al usuario desde la primera impresión visual hasta el contacto, destacando los servicios y trabajos más representativos.'
        }
      ]}
      results={[]}
      learnings="En productoras audiovisuales, la web es su carta de presentación: debe ser visualmente impecable, transmitir el estilo de la marca y facilitar que el cliente imagine cómo podría ser su propio proyecto."
      ctaTitle="¿Quieres un resultado similar?"
      ctaDescription="Hablemos de tu proyecto audiovisual y diseñemos una web que cuente tu historia."
      ctaButtonText="Solicitar consulta gratuita"
      ctaButtonLink="/agendar-reunion"
    />
  );
};

export default CasoExitoCorteAFilms;