import React from 'react';
import CaseStudyTemplate from '@/components/CaseStudyTemplate';
import { successCaseImages } from '@/data/successCaseImages';
import { Users, Camera, Shield, Megaphone } from 'lucide-react';

const CasoExitoPlazaEstacion: React.FC = () => {
  return (
    <CaseStudyTemplate
      pageTitle="Caso de éxito Plaza de la Estación | Redes sociales y web"
      pageDescription="Estrategia, contenido, campañas y mantenimiento web para el Centro Comercial Plaza de la Estación (Fuenlabrada)."
      canonical="/es/casos-exito"
      ogImage={successCaseImages.plazaEstacion}
      structuredData={{
        "@context": "https://schema.org",
        "@type": "CaseStudy",
        headline: "Caso de Éxito — Centro Comercial Plaza de la Estación: Conectando con su comunidad a través de redes sociales",
        about: "Estrategia de contenidos, campañas creativas, coordinación de canales y mantenimiento web",
        url: '/es/casos-exito/plaza-de-la-estacion',
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
      companyName="Centro Comercial Plaza de la Estación"
      subtitle="Conectando con su comunidad a través de redes sociales: estrategia, contenido, campañas creativas y mantenimiento web para un centro comercial de referencia en Fuenlabrada"
      badges={["Centro Comercial", "Redes Sociales", "Retail"]}
      websiteUrl="https://plazadelaestacion.es/"
      featuredImage={successCaseImages.plazaEstacion}
      featuredImageAlt="Centro Comercial Plaza de la Estación - Fuenlabrada"
      aboutCompany="El Centro Comercial Plaza de la Estación, ubicado en Fuenlabrada, es un punto de encuentro para compras, ocio y gastronomía. Reúne una amplia oferta de tiendas, restauración y servicios, atrayendo diariamente a visitantes de toda la zona sur de Madrid."
      challenge="Querían reforzar su presencia en redes sociales para conectar con su comunidad, aumentar el tráfico al centro comercial y dinamizar la relación con clientes y visitantes mediante campañas atractivas y participativas. Además, buscaban garantizar la estabilidad y el correcto funcionamiento de su página web."
      solutions={[
        {
          icon: Users,
          title: 'Estrategia de Contenidos en Redes Sociales',
          description: 'Definición de un plan editorial adaptado a la identidad del centro comercial y orientado a su público objetivo.'
        },
        {
          icon: Camera,
          title: 'Plan de Publicaciones Creativo',
          description: 'Creación de contenidos variados (fotografía, vídeo, promociones y eventos) para mantener una comunicación activa y atractiva.'
        },
        {
          icon: Megaphone,
          title: 'Campañas Creativas',
          description: 'Diseño y ejecución de acciones especiales y promociones para incentivar la participación de los clientes y atraer nuevos visitantes.'
        },
        {
          icon: Shield,
          title: 'Alojamiento y Mantenimiento Web',
          description: 'Servicio integral para garantizar el rendimiento, seguridad y disponibilidad de la web, con copias de seguridad y soporte técnico proactivo.'
        }
      ]}
      results={[
        'Refuerzo significativo de la presencia en redes sociales',
        'Mayor engagement y participación de la comunidad',
        'Incremento en el tráfico y visitas al centro comercial',
        'Mejora en la estabilidad y rendimiento web'
      ]}
      learnings="En entornos de retail y centros comerciales, una estrategia de contenidos bien planificada, combinada con campañas creativas y una web optimizada, permite mantener viva la relación con el público y generar visitas recurrentes."
      ctaTitle="Visita Plaza de la Estación"
      ctaDescription="Descubre este centro comercial de referencia en Fuenlabrada."
      ctaButtonText="Visita la web del Centro Comercial"
      ctaButtonLink="https://plazadelaestacion.es/"
      relatedSolutions={[
        { label: 'Gestión de Redes Sociales', route: 'serviceSocialMedia' },
        { label: 'Estrategia de Contenidos', route: 'serviceContentStrategy' },
      ]}
    />
  );
};

export default CasoExitoPlazaEstacion;