import React from 'react';
import CaseStudyTemplate from '@/components/CaseStudyTemplate';
import { successCaseImages } from '@/data/successCaseImages';
import { ShoppingCart, Target, Users, Smartphone } from 'lucide-react';

const CasoExitoLaOrientalSinGluten = () => {
  return (
    <CaseStudyTemplate
      pageTitle="Caso de éxito La Oriental Sin Gluten | Ecommerce, CRM y RRSS"
      pageDescription="Rediseño de ecommerce, CRM HubSpot y estrategia en redes sociales para crecer de forma sostenible."
      canonical="/casos-exito/pasteleria-la-oriental-sin-gluten"
      ogImage={successCaseImages.laOrientalSinGluten}
      structuredData={{
        "@context": "https://schema.org",
        "@type": "CaseStudy",
        headline: "Caso de Éxito — Pastelería La Oriental Sin Gluten: Endulzando el mercado digital",
        about: "Rediseño de ecommerce, implantación de CRM HubSpot, estrategia de contenidos en redes sociales y optimización de UX",
        url: "/casos-exito/pasteleria-la-oriental-sin-gluten",
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
      companyName="Pastelería La Oriental Sin Gluten"
      subtitle="Endulzando el mercado digital: rediseño de ecommerce, CRM y estrategia en redes sociales para una pastelería referente en su sector"
      badges={["Pastelería", "Sin Gluten", "Ecommerce"]}
      websiteUrl="#"
      featuredImage={successCaseImages.laOrientalSinGluten}
      featuredImageAlt="Pastelería La Oriental Sin Gluten - Repostería artesanal sin gluten"
      aboutCompany="Pastelería La Oriental Sin Gluten es un referente en repostería sin gluten, elaborando productos artesanales y de alta calidad para clientes con necesidades alimentarias especiales. Su compromiso con el sabor y la seguridad alimentaria les ha convertido en una marca de confianza."
      challenge="Necesitaban modernizar su tienda online para mejorar la experiencia de compra, centralizar la gestión de clientes y reforzar su presencia en redes sociales para llegar a un público más amplio y fidelizar a su comunidad."
      solutions={[
        {
          icon: ShoppingCart,
          title: 'Rediseño de Ecommerce',
          description: 'Tienda online moderna, responsive y optimizada para la conversión, con navegación sencilla y procesos de compra rápidos y seguros.'
        },
        {
          icon: Target,
          title: 'Implantación de CRM HubSpot',
          description: 'Configuración para centralizar los datos de clientes, gestionar pedidos y coordinar campañas de marketing de forma eficiente.'
        },
        {
          icon: Users,
          title: 'Estrategia y Plan de Contenidos en Redes Sociales',
          description: 'Calendario editorial y publicaciones visuales que transmiten la calidad del producto y la filosofía de la marca.'
        },
        {
          icon: Smartphone,
          title: 'Optimización de Experiencia de Usuario',
          description: 'Mejoras en estructura de categorías, fichas de producto y medios de pago para facilitar las compras y reducir abandonos de carrito.'
        }
      ]}
      results={[
        'Modernización completa de la tienda online',
        'Mejora significativa en la experiencia de usuario',
        'Centralización eficaz de datos de clientes',
        'Mayor engagement y alcance en redes sociales'
      ]}
      learnings="En negocios especializados, la combinación de un ecommerce bien diseñado, un CRM funcional y una estrategia activa en redes sociales puede multiplicar la visibilidad y las ventas manteniendo el espíritu artesanal."
      ctaTitle="¿Quieres resultados como estos?"
      ctaDescription="Te ayudamos a modernizar tu ecommerce y desarrollar una estrategia integral como lo hicimos con La Oriental Sin Gluten."
      ctaButtonText="Conversemos"
      ctaButtonLink="/es/agendar-reunion"
    />
  );
};

export default CasoExitoLaOrientalSinGluten;