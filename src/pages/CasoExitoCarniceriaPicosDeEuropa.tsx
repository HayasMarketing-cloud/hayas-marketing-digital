import React from 'react';
import CaseStudyTemplate from '@/components/CaseStudyTemplate';
import { successCaseImages } from '@/data/successCaseImages';
import { Instagram, Edit, Users, Target } from 'lucide-react';

const CasoExitoCarniceriaPicosDeEuropa: React.FC = () => {
  return (
    <CaseStudyTemplate
      pageTitle="Caso de éxito Carnicería Picos de Europa | Instagram y contenidos"
      pageDescription="Estrategia y gestión de Instagram para acercar un producto de calidad a su comunidad."
      canonical="/es/casos-exito/carniceria-picos-de-europa"
      ogImage={successCaseImages.carniceriaPicosDeEuropa}
      structuredData={{
        "@context": "https://schema.org",
        "@type": "CaseStudy",
        headline: "Caso de Éxito — Carnicería Picos de Europa: Potenciando la tradición cárnica en redes sociales",
        about: "Estrategia de contenidos en Instagram, gestión de publicaciones, optimización de perfil e interacción con la comunidad",
        url: "/es/casos-exito/carniceria-picos-de-europa",
        inLanguage: "es",
        publisher: { "@type": "Organization", name: "Hayas Marketing" }
      }}
      companyName="Carnicería Picos de Europa"
      subtitle="Estrategia y gestión de Instagram para acercar un producto de calidad a su comunidad"
      badges={["Carnicería", "Instagram", "Redes Sociales"]}
      websiteUrl="#"
      featuredImage={successCaseImages.carniceriaPicosDeEuropa}
      featuredImageAlt="Carnicería Picos de Europa - Potenciando la tradición cárnica en redes sociales"
      aboutCompany="La Carnicería Picos de Europa es un negocio especializado en carnes de alta calidad, que combina el saber hacer tradicional con una cuidada selección de productos. Su propuesta se centra en ofrecer cortes frescos, preparados y elaborados con la máxima dedicación."
      challenge="Querían reforzar su presencia digital para atraer nuevos clientes y fidelizar a los actuales, utilizando Instagram como escaparate visual para mostrar la calidad de sus productos y la cercanía de su trato."
      solutions={[
        {
          icon: Instagram,
          title: "Estrategia de Contenidos para Instagram",
          description: "Plan editorial adaptado a la identidad de la marca y enfocado en resaltar la calidad del producto y la tradición del negocio."
        },
        {
          icon: Edit,
          title: "Gestión de Publicaciones",
          description: "Creación y programación de contenidos visuales atractivos (fotografías y vídeos) que muestran los productos y preparaciones de la carnicería."
        },
        {
          icon: Target,
          title: "Optimización de Perfil",
          description: "Mejora de biografía, destacados y enlaces para facilitar la comunicación y el acceso a la información."
        },
        {
          icon: Users,
          title: "Interacción con la Comunidad",
          description: "Gestión de mensajes y comentarios para mantener un trato cercano y fomentar la fidelidad del cliente."
        }
      ]}
      results={[]}
      learnings="En negocios tradicionales de alimentación, una estrategia bien ejecutada en redes sociales puede convertirse en un canal clave para mostrar la calidad del producto y conectar emocionalmente con la comunidad."
      ctaTitle="¿Quieres impulsar tu marca en Instagram?"
      ctaDescription="Te ayudamos a desarrollar una estrategia de contenidos efectiva para redes sociales que conecte con tu audiencia."
      ctaButtonText="Potenciar mi marca en Instagram"
      relatedSolutions={[
        { label: 'Gestión de Redes Sociales', route: 'serviceSocialMedia' },
      ]}
    />
  );
};

export default CasoExitoCarniceriaPicosDeEuropa;