import React from 'react';
import CaseStudyTemplate from '@/components/CaseStudyTemplate';
import { Users, ShoppingCart, Search } from 'lucide-react';

const CasoExitoBodegasVilano: React.FC = () => {
  const pageTitle = "Caso de Éxito Bodegas Vilano - CRM, eCommerce y SEO para Bodega Ribera del Duero | Hayas Marketing";
  const pageDescription = "Descubre cómo Bodegas Vilano digitalizó su estrategia comercial con CRM HubSpot, tienda online WooCommerce y SEO internacional para impulsar su transformación digital.";
  const canonical = "https://hayasmarketing.com/casos-exito/bodegas-vilano";
  const ogImage = "https://hayasmarketing.com/lovable-uploads/bodegas-vilano-case-study.png";

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
      companyName="Bodegas Vilano"
      subtitle="Una bodega histórica de Ribera del Duero que confió en Hayas para impulsar su transformación digital y su expansión global"
      badges={["Retail / Alimentación", "Vino", "eCommerce"]}
      websiteUrl="https://www.bodegasvilano.com"
      featuredImage="/lovable-uploads/bodegas-vilano-case-study.png"
      featuredImageAlt="Caso de éxito Bodegas Vilano - Transformación digital de bodega Ribera del Duero"
      aboutCompany="Bodegas Vilano, fundada en 1957 en Pedrosa de Duero (Burgos), es una de las bodegas más representativas de la Ribera del Duero. Con más de 300 hectáreas de viñedo y un fuerte compromiso con la calidad y la tradición, la bodega ha consolidado su presencia en el mercado nacional e internacional. El reto era claro: adaptarse a los nuevos hábitos de consumo digital, potenciando sus ventas online y fortaleciendo su posicionamiento en mercados internacionales sin perder la esencia de su marca."
      challenge="Los principales desafíos de Bodegas Vilano eran optimizar la gestión comercial interna mediante la implantación de un CRM que centralizara la relación con clientes, distribuidores y mercados internacionales, lanzar una tienda online profesional en WooCommerce para ofrecer sus vinos directamente a consumidores finales, mejorar su posicionamiento SEO para ganar visibilidad en buscadores frente a la alta competencia del sector vinícola, e integrar la bodega en marketplaces internacionales con el objetivo de llegar a más clientes y aumentar su presencia global."
      solutions={[
        {
          icon: Users,
          title: "Implantación de CRM HubSpot",
          description: "Configuramos y personalizamos HubSpot para gestionar leads, clientes y distribuidores, mejorando la trazabilidad de las oportunidades comerciales."
        },
        {
          icon: ShoppingCart,
          title: "Tienda Online WooCommerce",
          description: "Desarrollamos un eCommerce funcional y atractivo, alineado con la identidad visual de la marca, optimizado para la conversión y la experiencia de usuario."
        },
        {
          icon: Search,
          title: "Posicionamiento SEO y Marketplaces",
          description: "Aplicamos estrategias de SEO on-page y técnico, optimización de contenidos y asesoramos la integración en plataformas internacionales clave."
        }
      ]}
      results={[
        "Modernización de la gestión comercial con CRM centralizado",
        "Apertura de nuevas vías de crecimiento a través del canal online",
        "Mejora significativa en el posicionamiento SEO sectorial",
        "Integración exitosa en marketplaces internacionales",
        "Refuerzo de la capacidad competitiva en el mercado global",
        "Mantenimiento de la esencia tradicional de Ribera del Duero"
      ]}
      learnings="Gracias a este proceso de transformación digital, Bodegas Vilano logró modernizar su gestión comercial y abrir nuevas vías de crecimiento a través del canal online. El CRM de HubSpot, el eCommerce en WooCommerce, el SEO estratégico y la integración en marketplaces internacionales reforzaron su capacidad para competir en un mercado global sin perder la esencia de la Ribera del Duero."
      ctaTitle="¿Quieres digitalizar tu negocio en retail y alimentación?"
      ctaDescription="Descubre cómo nuestras soluciones en CRM, eCommerce y SEO pueden ayudarte a crecer en el mercado internacional manteniendo la esencia de tu marca."
      ctaButtonText="Solicitar Consulta Gratuita"
      relatedSolutions={[
        { label: 'Tienda Online', route: 'serviceOnlineStore' },
        { label: 'Estrategia de Contenidos', route: 'serviceContentStrategy' },
      ]}
    />
  );
};

export default CasoExitoBodegasVilano;