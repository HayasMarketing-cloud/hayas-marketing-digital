import React from 'react';
import CaseStudyTemplate from '@/components/CaseStudyTemplate';
import { successCaseImages } from '@/data/successCaseImages';
import { ShoppingCart, Users, CreditCard, Smartphone } from 'lucide-react';

const CasoExitoPeixosEmilio = () => {
  return (
    <CaseStudyTemplate
      pageTitle="Caso de éxito Peixos Emilio | Ecommerce B2B Menorca"
      pageDescription="Ecommerce B2B y gestión de pedidos para hoteles y restaurantes: digitalización de Peixos Emilio en Menorca."
      canonical="/casos-exito/peixos-emilio"
      ogImage={successCaseImages.peixosEmilio}
      structuredData={{
        "@context": "https://schema.org",
        "@type": "CaseStudy",
        headline: "Caso de Éxito — Peixos Emilio: Digitalizando una tradición pesquera en Menorca",
        about: "Ecommerce B2B, gestión de pedidos y optimización de experiencia de compra",
        url: "/casos-exito/peixos-emilio",
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
      companyName="Peixos Emilio"
      subtitle="Digitalizando una tradición pesquera en Menorca: ecommerce para llevar la frescura del mar a hoteles y restaurantes en Menorca y la península"
      badges={["Pescadería", "Ecommerce B2B", "Menorca"]}
      websiteUrl="https://peixosemilio.com"
      featuredImage={successCaseImages.peixosEmilio}
      featuredImageAlt="Peixos Emilio - Pescadería al por mayor en Menorca"
      aboutCompany="Peixos Emilio es una pescadería al por mayor con una larga trayectoria en Menorca, reconocida por la calidad y frescura de su producto. Su clientela incluye algunos de los hoteles y restaurantes más prestigiosos de la isla, así como establecimientos en la península."
      challenge="Querían modernizar su modelo de negocio incorporando un canal digital que les permitiera recibir pedidos online de forma ágil, segura y organizada, manteniendo su compromiso de frescura y entrega rápida."
      solutions={[
        {
          icon: ShoppingCart,
          title: 'Diseño y Desarrollo de Ecommerce',
          description: 'Creación de una tienda online responsive adaptada al sector alimentario, con un diseño que transmite frescura, confianza y profesionalidad.'
        },
        {
          icon: Users,
          title: 'Gestión de Pedidos B2B',
          description: 'Configuración de funcionalidades específicas para clientes profesionales, incluyendo precios por volumen y opciones personalizadas de entrega.'
        },
        {
          icon: CreditCard,
          title: 'Integración de Métodos de Pago y Logística',
          description: 'Implementación de pagos seguros y coordinación de envíos adaptados a la naturaleza perecedera del producto.'
        },
        {
          icon: Smartphone,
          title: 'Optimización de la Experiencia de Compra',
          description: 'Flujo de navegación claro y rápido para que los clientes puedan realizar pedidos en pocos pasos, incluso desde dispositivos móviles.'
        }
      ]}
      results={[
        'Digitalización exitosa del modelo de negocio tradicional',
        'Apertura de nuevos mercados en la península',
        'Optimización de la gestión de pedidos B2B',
        'Mantenimiento de la esencia de marca familiar'
      ]}
      learnings="En negocios tradicionales con un producto de alta calidad, la digitalización mediante ecommerce puede abrir nuevos mercados y optimizar la relación con clientes profesionales sin perder la esencia de la marca."
      ctaTitle="¿Necesitas digitalizar tu negocio tradicional?"
      ctaDescription="Te ayudamos a llevar tu negocio al entorno digital manteniendo su esencia y calidad."
      ctaButtonText="Digitalizar mi negocio"
      ctaButtonLink="/es/agendar-reunion"
    />
  );
};

export default CasoExitoPeixosEmilio;