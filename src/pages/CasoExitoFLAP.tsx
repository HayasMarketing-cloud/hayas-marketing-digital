import React from 'react';
import CaseStudyTemplate from '@/components/CaseStudyTemplate';
import { successCaseImages } from '@/data/successCaseImages';
import { Instagram, Video, Target, Users } from 'lucide-react';

const CasoExitoFLAP: React.FC = () => {
  return (
    <CaseStudyTemplate
      pageTitle="Caso de éxito FLAP | Contenidos e Instagram"
      pageDescription="Estrategia de contenidos y producción audiovisual para Instagram."
      canonical="/es/casos-exito/flap-articulos-peluqueria"
      ogImage={successCaseImages.flap}
      structuredData={{
        "@context": "https://schema.org",
        "@type": "CaseStudy",
        headline: "Caso de Éxito — FLAP Artículos de Peluquería: Impulsando una marca de belleza en redes sociales",
        about: "Estrategia de contenidos para Instagram, producción de Reels, optimización de perfil e interacción con la comunidad",
        url: "/es/casos-exito/flap-articulos-peluqueria",
        inLanguage: "es",
        publisher: { "@type": "Organization", name: "Hayas Marketing" }
      }}
      companyName="FLAP Artículos de Peluquería"
      subtitle="Estrategia de contenidos y producción audiovisual para Instagram"
      badges={["Belleza", "Instagram", "Contenidos"]}
      websiteUrl="#"
      featuredImage={successCaseImages.flap}
      featuredImageAlt="FLAP Artículos de Peluquería - Impulsando una marca de belleza en redes sociales"
      aboutCompany="FLAP Artículos de Peluquería es una tienda especializada en productos y accesorios para el cuidado capilar, dirigida tanto a profesionales como a particulares. Su catálogo combina marcas líderes con artículos exclusivos para un cuidado completo del cabello."
      challenge="Querían reforzar su presencia digital para llegar a un público más amplio, aprovechar el potencial visual de Instagram y generar contenidos que inspiraran y aportaran valor a clientes actuales y potenciales."
      solutions={[
        {
          icon: Instagram,
          title: "Estrategia y Plan de Contenidos para Instagram",
          description: "Calendario editorial adaptado al sector de la belleza y cuidado capilar, con publicaciones orientadas a aumentar el engagement y las ventas."
        },
        {
          icon: Video,
          title: "Producción Audiovisual de Reels",
          description: "Vídeos cortos y dinámicos mostrando productos, tips de uso y tendencias, optimizados para maximizar el alcance en Instagram."
        },
        {
          icon: Target,
          title: "Optimización de Perfil",
          description: "Ajustes en biografía, destacados y enlaces para una imagen profesional y facilitar la interacción con el público."
        },
        {
          icon: Users,
          title: "Interacción Activa",
          description: "Gestión de comunidad mediante respuestas a comentarios y mensajes para fortalecer la relación con la audiencia."
        }
      ]}
      results={[]}
      learnings="En belleza y cosmética, una estrategia de contenidos bien definida y una producción audiovisual atractiva es clave para destacar en redes sociales."
      ctaTitle="¿Quieres potenciar tu marca en Instagram?"
      ctaDescription="Te ayudamos a desarrollar una estrategia de contenidos efectiva que impulse tu marca de belleza en redes sociales."
      ctaButtonText="Potenciar mi marca en Instagram"
      relatedSolutions={[
        { label: 'Gestión de Redes Sociales', route: 'serviceSocialMedia' },
        { label: 'Estrategia de Contenidos', route: 'serviceContentStrategy' },
      ]}
    />
  );
};

export default CasoExitoFLAP;