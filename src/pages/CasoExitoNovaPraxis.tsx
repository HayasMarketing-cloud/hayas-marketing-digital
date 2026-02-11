import React from 'react';
import CaseStudyTemplate from '@/components/CaseStudyTemplate';
import { successCaseImages } from '@/data/successCaseImages';
import { Target, Zap, Linkedin, Search, Megaphone } from 'lucide-react';

const CasoExitoNovaPraxis = () => {
  return (
    <CaseStudyTemplate
      pageTitle="Caso de Éxito Nova Praxis | CRM, SEO, LinkedIn y Ads"
      pageDescription="CRM con automatizaciones, SEO, LinkedIn y Google Ads para impulsar el crecimiento B2B de Nova Praxis."
      canonical="/es/casos-exito/nova-praxis"
      ogImage={successCaseImages.novaPraxis}
      structuredData={{
        '@context': 'https://schema.org',
        '@type': 'CaseStudy',
        headline: 'Caso de Éxito — Nova Praxis: Optimización comercial y visibilidad para una consultora estratégica',
        about: 'CRM HubSpot, automatizaciones, LinkedIn, SEO y Google Ads para crecimiento empresarial',
        url: '/casos-exito/nova-praxis',
        inLanguage: 'es',
        author: { '@type': 'Organization', name: 'Hayas Marketing' },
        publisher: {
          '@type': 'Organization',
          name: 'Hayas Marketing',
          logo: {
            '@type': 'ImageObject',
            url: 'https://hayas.marketing/lovable-uploads/hayas-logo.png'
          }
        },
        review: {
          '@type': 'Review',
          author: { '@type': 'Person', name: 'Miguel Alonso' },
          reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
          reviewBody: 'Hayas demuestra gran profesionalidad y profundidad en la definición estratégica del marketing'
        }
      }}
      companyName="Nova Praxis"
      subtitle="Optimización comercial y visibilidad para una consultora estratégica: CRM, automatizaciones, LinkedIn, SEO y Google Ads para impulsar el crecimiento empresarial"
      badges={["Consultoría Estratégica", "CRM HubSpot", "SEO", "LinkedIn"]}
      websiteUrl="https://nova-praxis.com"
      featuredImage={successCaseImages.novaPraxis}
      featuredImageAlt="Nova Praxis — consultoría estratégica B2B"
      aboutCompany="Nova Praxis es una consultora estratégica que ayuda a empresas y organizaciones a diseñar e implementar planes de transformación, innovación y desarrollo organizativo. Su enfoque combina visión a largo plazo con soluciones prácticas adaptadas a cada cliente."
      challenge="Necesitaban centralizar la gestión de clientes, mejorar su posicionamiento online y reforzar su presencia en LinkedIn para llegar a decisores de alto nivel. Además, querían automatizar procesos de cualificación de leads y optimizar sus campañas de captación digital."
      solutions={[
        {
          icon: Target,
          title: 'Implantación de CRM HubSpot',
          description: 'Configuración personalizada para centralizar datos de clientes y oportunidades, facilitando el seguimiento comercial y la gestión de relaciones.'
        },
        {
          icon: Zap,
          title: 'Automatizaciones en CRM',
          description: 'Sistema de lead scoring que clasifica prospectos según interés y potencial de conversión, priorizando acciones del equipo de ventas.'
        },
        {
          icon: Linkedin,
          title: 'Gestión de LinkedIn',
          description: 'Estrategia editorial y optimización de perfil corporativo para posicionamiento como referente en consultoría estratégica y atracción de audiencias B2B.'
        },
        {
          icon: Search,
          title: 'Estrategia y Posicionamiento SEO',
          description: 'Auditoría técnica, optimización de contenidos y arquitectura web orientada a palabras clave estratégicas para aumentar visibilidad y tráfico cualificado.'
        },
        {
          icon: Megaphone,
          title: 'Consultoría y Formación en Google Ads',
          description: 'Capacitación y apoyo en campañas de captación B2B con segmentación por sector, ubicación y cargo.'
        }
      ]}
      results={[
        'Centralización eficaz de la gestión comercial',
        'Automatización inteligente de procesos de ventas',
        'Incremento significativo en visibilidad B2B',
        'Mejora en la generación de leads cualificados'
      ]}
      testimonial={{
        quote: "Hayas demuestra gran profesionalidad y profundidad en la definición estratégica del marketing",
        author: "Miguel Alonso",
        position: "Socio Director",
        company: "Nova Praxis",
        isGoogleReview: true,
        rating: 5,
        reviewUrl: "https://www.google.com/search?q=Hayas+Marketing+Rese%C3%B1as&rflfq=1&num=20&rldimm=16726254471854884245&tbm=lcl#lkt=LocalPoiReviews",
        authorImage: "/lovable-uploads/844b8adb-0e8c-48df-9265-49d739a1fd14.png"
      }}
      learnings="En consultoras estratégicas, integrar un CRM bien configurado con automatizaciones inteligentes, SEO, Google Ads segmentado y presencia activa en LinkedIn crea un ecosistema comercial y de marketing altamente eficiente."
      ctaTitle="Visita Nova Praxis"
      ctaDescription="Conoce su enfoque estratégico y las soluciones que implementan para empresas."
      ctaButtonText="Visita Nova Praxis"
      ctaButtonLink="https://nova-praxis.com"
    />
  );
};

export default CasoExitoNovaPraxis;
