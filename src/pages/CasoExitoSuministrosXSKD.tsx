import React from 'react';
import CaseStudyTemplate from '@/components/CaseStudyTemplate';
import { successCaseImages } from '@/data/successCaseImages';
import { Search, TrendingUp, Target } from 'lucide-react';

const CasoExitoSuministrosXSKD = () => {
  return (
    <CaseStudyTemplate
      pageTitle="Caso de Éxito: Suministros XS KD - Posicionamiento SEO Industrial"
      pageDescription="Descubre cómo ayudamos a Suministros XS KD a mejorar su posicionamiento SEO y presencia digital en el sector industrial retail."
      canonical="/casos-exito/suministros-xs-kd"
      ogImage={successCaseImages.suministrosXSKD}
      structuredData={{
        "@context": "https://schema.org",
        "@type": "CaseStudy",
        headline: "Caso de Éxito — Suministros XS KD: Posicionamiento SEO y presencia digital especializada",
        about: "Posicionamiento SEO, mejora de visibilidad online y optimización para el sector industrial",
        url: "/casos-exito/suministros-xs-kd",
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
      companyName="Suministros XS KD"
      subtitle="Posicionamiento SEO y presencia digital especializada para distribución de productos industriales y suministros técnicos"
      badges={["Retail Industrial", "SEO", "Distribución"]}
      websiteUrl="#"
      featuredImage={successCaseImages.suministrosXSKD}
      featuredImageAlt="Suministros XS KD - Distribución de productos industriales y suministros técnicos"
      aboutCompany="Suministros XS KD es una empresa especializada en la distribución de productos industriales y suministros técnicos, reconocida por su amplio catálogo y servicio personalizado a empresas del sector industrial."
      challenge="Necesitaban mejorar su visibilidad online en un mercado altamente competitivo, aumentar el tráfico orgánico y generar más consultas comerciales cualificadas a través de su presencia digital."
      solutions={[
        {
          icon: Search,
          title: 'Estrategia SEO Especializada',
          description: 'Optimización técnica y de contenidos enfocada en keywords del sector industrial y productos específicos.'
        },
        {
          icon: Target,
          title: 'Posicionamiento Estratégico',
          description: 'Trabajo de posicionamiento para keywords de alta conversión en búsquedas industriales y B2B.'
        },
        {
          icon: TrendingUp,
          title: 'Optimización de Conversión',
          description: 'Mejora de la arquitectura web y experiencia de usuario para maximizar las consultas comerciales.'
        }
      ]}
      results={[
        'Mejora del 150% en tráfico orgánico',
        'Incremento del 80% en consultas comerciales',
        'Posicionamiento top 3 para keywords estratégicas',
        'Mayor visibilidad en búsquedas industriales'
      ]}
      learnings="En el sector industrial B2B, una estrategia SEO bien ejecutada que combine optimización técnica con contenido especializado puede generar resultados significativos en visibilidad y generación de leads cualificados."
      ctaTitle="¿Quieres mejorar tu SEO industrial?"
      ctaDescription="Te ayudamos a posicionar tu empresa en búsquedas industriales y aumentar tus consultas comerciales."
      ctaButtonText="Solicitar consulta SEO"
      ctaButtonLink="/agendar-reunion"
    />
  );
};

export default CasoExitoSuministrosXSKD;