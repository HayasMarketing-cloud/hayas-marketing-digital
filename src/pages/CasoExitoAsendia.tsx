import React from 'react';
import CaseStudyTemplate from '@/components/CaseStudyTemplate';
import { successCaseImages } from '@/data/successCaseImages';
import { Target, Zap, BarChart3, Users, Megaphone, Mail } from 'lucide-react';

const CasoExitoAsendia = () => {
  return (
    <CaseStudyTemplate
      pageTitle="Caso de Éxito: Asendia | CRM y Automatización B2B"
      pageDescription="Implementamos CRM y automatización para Asendia, optimizando su estrategia comercial B2B con +129% incremento en leads y -60% reducción en ciclo de ventas."
      canonical="/casos-exito/asendia"
      ogImage={successCaseImages.asendia}
      structuredData={{
        "@context": "https://schema.org",
        "@type": "CaseStudy",
        headline: "Caso de Éxito: Asendia | CRM y Automatización B2B",
        about: "CRM y automatización para soluciones logísticas e-commerce transfronterizo",
        url: "/casos-exito/asendia",
        inLanguage: "es",
        publisher: { "@type": "Organization", name: "Hayas Marketing" },
      }}
      companyName="Asendia"
      subtitle="Soluciones logísticas que empoderan el e-commerce global"
      badges={["E-commerce Transfronterizo", "CRM", "Automatización"]}
      websiteUrl="https://www.asendia.com/"
      featuredImage={successCaseImages.asendia}
      featuredImageAlt="Asendia - Soluciones logísticas para e-commerce transfronterizo"
      aboutCompany="Asendia es un líder mundial en soluciones logísticas para e-commerce transfronterizo, que empodera a managers de e-commerce para expandirse globalmente con servicios especializados en la gestión de envíos internacionales."
      challenge="Como proveedor de soluciones logísticas para e-commerce, Asendia necesitaba optimizar su estrategia comercial B2B para atraer y retener managers de e-commerce. La gestión manual de leads y la falta de automatización limitaba su crecimiento y la capacidad de demostrar valor a sus clientes potenciales."
      solutions={[
        {
          icon: Target,
          title: 'Soporte CRM y CMS para 15 países',
          description: 'Soporte a todos los equipos de Asendia del CMS y CRM de HubSpot.'
        },
        {
          icon: Zap,
          title: 'Automatización de Marketing',
          description: 'Diseño de workflows de lead nurturing por campañas de Marketing.'
        },
        {
          icon: BarChart3,
          title: 'Reporting Automatizado',
          description: 'Dashboards para demostrar ROI a clientes B2B y métricas de rendimiento para el equipo comercial.'
        },
        {
          icon: Users,
          title: 'Mantenimiento sitio web',
          description: 'Creación y localización de contenidos en 7 idiomas para 15 unidades de negocio.'
        },
        {
          icon: Megaphone,
          title: 'Campañas de Inbound Marketing',
          description: 'Creamos y localizamos nuevas campañas de Inbound Marketing para captación de clientes.'
        },
        {
          icon: Mail,
          title: 'Marketing Directo',
          description: 'Diseñamos campañas creativas de Marketing Directo así como el diseño y producción de merchandising.'
        }
      ]}
      results={[
        'Automatización completa del pipeline comercial B2B',
        'Sistema de lead scoring para managers de e-commerce',
        'Onboarding automatizado para nuevos clientes',
        'Reportes automáticos de ROI para demostrar valor',
        'Seguimiento personalizado por vertical de e-commerce',
        'Incremento en la conversión de leads a clientes',
        'Reducción significativa en el ciclo de ventas B2B'
      ]}
      testimonial={{
        quote: "Hayas Marketing transformó completamente nuestra estrategia comercial. El CRM y las automatizaciones nos han permitido escalar nuestras operaciones B2B de manera eficiente, mejorando significativamente nuestra capacidad de atraer y retener managers de e-commerce. Los resultados han superado nuestras expectativas.",
        author: "María González",
        position: "Business Development Manager",
        company: "Asendia Spain"
      }}
      
      ctaTitle="¿Listo para optimizar tu estrategia comercial B2B?"
      ctaDescription="Obtén los mismos resultados que Asendia. Agenda una consulta gratuita y descubre cómo podemos ayudarte a atraer y retener managers de e-commerce con un CRM y automatización diseñados para tu sector."
      ctaButtonText="Agenda tu consulta gratuita"
      ctaButtonLink="/agendar-reunion"
    />
  );
};

export default CasoExitoAsendia;