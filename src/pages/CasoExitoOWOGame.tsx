import React from 'react';
import CaseStudyTemplate from '@/components/CaseStudyTemplate';
import { successCaseImages } from '@/data/successCaseImages';
import { Target, Users, Search, Zap } from 'lucide-react';

const CasoExitoOWOGame = () => {
  return (
    <CaseStudyTemplate
      pageTitle="Caso de Éxito OWO Game | CRM, SEO y Redes Sociales"
      pageDescription="CRM HubSpot, redes sociales y SEO para impulsar el crecimiento internacional de OWO Game."
      canonical="/es/casos-exito"
      ogImage={successCaseImages.owoGame}
      structuredData={{
        "@context": "https://schema.org",
        "@type": "CaseStudy",
        headline: "Caso de Éxito — OWO Game: Tecnología háptica y marketing para un crecimiento global",
        about: "Implantación de CRM, estrategia SEO y consultoría de redes sociales para startup de gaming inmersivo",
        url: '/es/casos-exito/owo-game',
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
      companyName="OWO Game"
      subtitle="Tecnología háptica y marketing para un crecimiento global: CRM, redes sociales y SEO para una startup de videojuegos inmersivos"
      badges={["Gaming", "Tecnología Háptica", "Startup"]}
      websiteUrl="https://owogame.com"
      featuredImage={successCaseImages.owoGame}
      featuredImageAlt="OWO Game — chaleco háptico y gaming inmersivo"
      aboutCompany="OWO Game es una startup tecnológica con sede en Málaga que ha desarrollado un chaleco háptico revolucionario para videojuegos, capaz de transmitir sensaciones físicas reales al jugador. Su propuesta combina innovación, experiencia inmersiva y proyección internacional."
      challenge="Con un producto disruptivo y gran potencial global, OWO Game necesitaba optimizar su gestión comercial, mejorar su posicionamiento en buscadores y reforzar su presencia en redes sociales para llegar a audiencias internacionales y partners estratégicos."
      solutions={[
        {
          icon: Target,
          title: 'Implantación de CRM HubSpot',
          description: 'Configuración y personalización del CRM con segmentación de leads, seguimiento de oportunidades y automatización de comunicaciones clave.'
        },
        {
          icon: Users,
          title: 'Consultoría para Redes Sociales',
          description: 'Definición de tono, estilo visual y formatos óptimos para presentar el producto, maximizando engagement y visibilidad.'
        },
        {
          icon: Search,
          title: 'Estrategia y Posicionamiento SEO',
          description: 'Optimización técnica y de contenidos con foco en keywords de tecnología háptica y gaming inmersivo para mercados internacionales.'
        },
        {
          icon: Zap,
          title: 'Integración de esfuerzos comerciales y marketing',
          description: 'Coordinación entre SEO, redes y CRM para un flujo coherente de atracción, conversión y fidelización.'
        }
      ]}
      results={[
        'Gestión comercial optimizada y centralizada',
        'Mayor visibilidad en mercados internacionales',
        'Presencia coherente y atractiva en redes sociales',
        'Flujo integrado de marketing y ventas'
      ]}
      learnings="En startups tecnológicas con ambición global, la combinación de un CRM bien implementado, SEO estratégico y redes sociales optimizadas es esencial para generar visibilidad y construir relaciones comerciales sólidas."
      ctaTitle="Visita OWO Game"
      ctaDescription="Descubre su tecnología háptica y su visión del gaming inmersivo."
      ctaButtonText="Visita OWO Game"
      ctaButtonLink="https://owogame.com"
      relatedSolutions={[
        { label: 'Implantación CRM', route: 'serviceCRMImplantation' },
        { label: 'SEO y Posicionamiento', route: 'serviceSEOPositioning' },
        { label: 'Gestión de Redes Sociales', route: 'serviceSocialMedia' },
      ]}
    />
  );
};

export default CasoExitoOWOGame;