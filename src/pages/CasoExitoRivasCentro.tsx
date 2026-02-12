import React from 'react';
import CaseStudyTemplate from '@/components/CaseStudyTemplate';
import { successCaseImages } from '@/data/successCaseImages';
import { Users, Megaphone, Shield, Target } from 'lucide-react';

const CasoExitoRivasCentro: React.FC = () => {
  return (
    <CaseStudyTemplate
      pageTitle="Caso de éxito Rivas Centro | Estrategia digital y web"
      pageDescription="Contenido, campañas creativas y mantenimiento web para Rivas Centro (Rivas-Vaciamadrid)."
      canonical="/es/casos-exito"
      ogImage={successCaseImages.rivasCentro}
      structuredData={{
        "@context": "https://schema.org",
        "@type": "CaseStudy",
        headline: "Caso de Éxito — Rivas Centro: Estrategia digital y mantenimiento web para un centro comercial urbano",
        about: "Estrategia y plan de contenidos, campañas creativas, optimización de comunicación online y mantenimiento web",
        url: '/es/casos-exito/rivas-centro',
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
      companyName="Rivas Centro"
      subtitle="Estrategia digital y mantenimiento web para un centro comercial urbano: contenido, campañas creativas y soporte web para conectar con clientes y visitantes"
      badges={["Centro Comercial", "Estrategia Digital", "Rivas-Vaciamadrid"]}
      websiteUrl="#"
      featuredImage={successCaseImages.rivasCentro}
      featuredImageAlt="Rivas Centro - Centro comercial urbano en Rivas-Vaciamadrid"
      aboutCompany="El Centro Comercial Rivas Centro es un espacio comercial y de ocio en el corazón de Rivas-Vaciamadrid, que combina una oferta variada de tiendas, restauración y servicios para toda la familia."
      challenge="Querían aumentar su visibilidad en redes sociales y mantener el interés de su comunidad local a través de contenidos atractivos y campañas creativas. Además, necesitaban asegurar el correcto funcionamiento y mantenimiento de su página web."
      solutions={[
        {
          icon: Users,
          title: 'Estrategia y Plan de Contenidos',
          description: 'Creación de un calendario editorial con publicaciones adaptadas a las distintas audiencias y eventos del centro comercial.'
        },
        {
          icon: Megaphone,
          title: 'Campañas Creativas',
          description: 'Acciones de marketing orientadas a incrementar el tráfico al centro y fidelizar a los visitantes habituales.'
        },
        {
          icon: Shield,
          title: 'Alojamiento y Mantenimiento Web',
          description: 'Servicio técnico integral para garantizar la seguridad, el rendimiento y la disponibilidad de la web, con copias de seguridad periódicas.'
        },
        {
          icon: Target,
          title: 'Optimización de Comunicación Online',
          description: 'Unificación de mensajes y coordinación entre canales digitales para reforzar la identidad del centro.'
        }
      ]}
      results={[
        'Aumento significativo de la visibilidad en redes sociales',
        'Mayor engagement con la comunidad local',
        'Incremento en el tráfico al centro comercial',
        'Mejora en la estabilidad y disponibilidad web'
      ]}
      learnings="En centros comerciales de ámbito local, la combinación de marketing de contenidos, campañas creativas y una web siempre operativa es clave para mantenerse presentes en la mente del cliente."
      ctaTitle="¿Tienes un centro comercial?"
      ctaDescription="Te ayudamos a crear una estrategia digital efectiva para conectar con tu comunidad local."
      ctaButtonText="Hablemos de tu proyecto"
      ctaButtonLink="/es/agendar-reunion"
      relatedSolutions={[
        { label: 'Gestión de Redes Sociales', route: 'serviceSocialMedia' },
        { label: 'Estrategia de Contenidos', route: 'serviceContentStrategy' },
        { label: 'Diseño Web', route: 'serviceWebDesign' },
      ]}
    />
  );
};

export default CasoExitoRivasCentro;