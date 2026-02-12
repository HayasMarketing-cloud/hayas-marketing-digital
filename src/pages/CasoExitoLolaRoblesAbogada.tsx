import React from 'react';
import CaseStudyTemplate from '@/components/CaseStudyTemplate';
import { Globe, Shield, Wrench } from 'lucide-react';

const CasoExitoLolaRoblesAbogada: React.FC = () => {
  const pageTitle = "Caso de Éxito Lola Robles Abogada - Diseño Web WordPress para Servicios Legales | Hayas Marketing";
  const pageDescription = "Descubre cómo Lola Robles, abogada especializada en Derecho Civil, Familia y Administrativo, fortaleció su presencia digital con un sitio web profesional en WordPress.";
  const canonical = "https://hayasmarketing.com/casos-exito/lola-robles-abogada";
  const ogImage = "https://hayasmarketing.com/lovable-uploads/lola-robles-abogada-familia.png";

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
      companyName="Lola Robles Abogada"
      subtitle="Una abogada especializada en Derecho Civil, Familia y Administrativo que confió en Hayas para crear una web clara, cercana y optimizada para captar clientes"
      badges={["Legal / Servicios Profesionales", "Derecho de Familia", "WordPress"]}
      websiteUrl="https://www.lolaroblesabogada.com"
      featuredImage="/lovable-uploads/lola-robles-abogada-familia.png"
      featuredImageAlt="Caso de éxito Lola Robles Abogada - Servicios legales especializados en Derecho de Familia"
      aboutCompany="Lola Robles es una abogada especializada en Derecho Civil, Derecho de Familia y Derecho Administrativo, con una amplia trayectoria ofreciendo asesoramiento y defensa jurídica en casos de contratos, desahucios, divorcios, custodias, indemnizaciones y procedimientos administrativos. Su misión es ofrecer un servicio profesional, cercano y accesible a clientes particulares que buscan confianza y claridad en procesos legales complejos."
      challenge="Los principales desafíos de Lola Robles eran contar con una página web profesional y actualizada que reflejara su experiencia y especialización en distintas ramas del derecho, transmitir confianza y cercanía a potenciales clientes con un diseño claro y orientado a la captación de consultas, organizar los contenidos de forma sencilla mostrando sus especialidades legales de manera comprensible, y disponer de un servicio de alojamiento y mantenimiento que garantizara seguridad, estabilidad y soporte técnico."
      solutions={[
        {
          icon: Globe,
          title: "Diseño Web en WordPress",
          description: "Creación de una web profesional, intuitiva y responsive con estructura clara dedicada a Derecho Civil, Familia y Administrativo, usando un diseño sobrio y elegante."
        },
        {
          icon: Shield,
          title: "Alojamiento Optimizado",
          description: "Configuración de hosting optimizado para asegurar la velocidad y seguridad del sitio, garantizando estabilidad y rendimiento profesional."
        },
        {
          icon: Wrench,
          title: "Mantenimiento Integral",
          description: "Mantenimiento técnico periódico y actualizaciones con soporte directo en caso de incidencias, permitiendo centrarse en la práctica profesional."
        }
      ]}
      results={[
        "Página web profesional que refleja experiencia y especialización legal",
        "Diseño que transmite confianza y cercanía a potenciales clientes",
        "Estructura clara y comprensible de especialidades legales",
        "Hosting optimizado con seguridad y estabilidad garantizadas",
        "Servicio de mantenimiento integral sin preocupaciones técnicas",
        "Mejor posicionamiento en el entorno digital local"
      ]}
      learnings="Gracias a esta colaboración, Lola Robles cuenta con una página web que refleja su profesionalidad, transmite confianza a los clientes y le permite posicionarse mejor en el entorno digital. El diseño en WordPress, junto con un servicio sólido de alojamiento y mantenimiento, ofrece una solución completa y preparada para acompañar el crecimiento de su despacho jurídico."
      ctaTitle="¿Quieres una web profesional que transmita confianza y sencillez y te ayude a captar clientes?"
      ctaDescription="Descubre cómo podemos crear una presencia digital sólida para tu despacho jurídico con diseño profesional, alojamiento seguro y mantenimiento integral."
      ctaButtonText="Solicitar Consulta Gratuita"
      relatedSolutions={[
        { label: 'Diseño Web', route: 'serviceWebDesign' },
      ]}
    />
  );
};

export default CasoExitoLolaRoblesAbogada;