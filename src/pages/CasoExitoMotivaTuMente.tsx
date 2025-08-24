import React from 'react';
import CaseStudyTemplate from '@/components/CaseStudyTemplate';
import { Globe, User, Smartphone } from 'lucide-react';

const CasoExitoMotivaTuMente: React.FC = () => {
  const pageTitle = "Caso de Éxito Motiva tu Mente - Diseño Web WordPress para Desarrollo Personal | Hayas Marketing";
  const pageDescription = "Descubre cómo Motiva tu Mente logró una presencia digital profesional y atractiva con un diseño web en WordPress para su proyecto de desarrollo personal y bienestar.";
  const canonical = "https://hayasmarketing.com/casos-exito/motiva-tu-mente";
  const ogImage = "https://hayasmarketing.com/lovable-uploads/motiva-tu-mente-ester.png";

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
      companyName="Motiva tu Mente"
      subtitle="Un proyecto digital para impulsar la visibilidad de una iniciativa de desarrollo personal y bienestar"
      badges={["Salud", "Desarrollo Personal", "WordPress"]}
      websiteUrl="https://motivatumente.com"
      featuredImage="/lovable-uploads/motiva-tu-mente-ester.png"
      featuredImageAlt="Caso de éxito Motiva tu Mente - Ester y su proyecto de desarrollo personal"
      aboutCompany="Motiva tu Mente es un proyecto personal de Ester enfocado en el desarrollo personal, la motivación y el bienestar emocional. A través de contenidos inspiradores, recursos y programas, busca acompañar a las personas en su camino de crecimiento, ayudándolas a encontrar herramientas prácticas para gestionar emociones, mejorar su mentalidad y alcanzar sus objetivos."
      challenge="El proyecto necesitaba contar con una presencia digital profesional y atractiva que transmitiera confianza desde el primer momento, reflejar la identidad personal de la marca con un diseño que combinara cercanía, inspiración y claridad, facilitar la navegación de los usuarios permitiéndoles acceder fácilmente a recursos, artículos y servicios, y disponer de una plataforma escalable para futuras ampliaciones (blog, cursos online, newsletters, etc.)."
      solutions={[
        {
          icon: Globe,
          title: "Diseño Web en WordPress",
          description: "Creamos un sitio web adaptado a la identidad de la marca, con un layout limpio y profesional que transmite confianza y profesionalidad."
        },
        {
          icon: User,
          title: "Experiencia de Usuario Optimizada",
          description: "Navegación clara, jerarquía de contenidos bien estructurada y diseño responsive para todo tipo de dispositivos."
        },
        {
          icon: Smartphone,
          title: "Identidad Visual Coherente",
          description: "Paleta de colores, tipografía y estilo gráfico inspirador que refleja la esencia del proyecto de desarrollo personal."
        }
      ]}
      results={[
        "Presencia digital profesional y atractiva que transmite confianza",
        "Diseño que refleja perfectamente la identidad personal de la marca",
        "Navegación intuitiva que facilita el acceso a recursos y contenidos",
        "Plataforma escalable preparada para futuras funcionalidades",
        "Base sólida para el crecimiento en educación emocional y bienestar"
      ]}
      learnings="La nueva web de Motiva tu Mente se ha convertido en una plataforma sólida y atractiva que transmite la esencia del proyecto de Ester. Con un diseño profesional en WordPress, el proyecto dispone ahora de una presencia digital que inspira confianza, facilita la conexión con la audiencia y sienta las bases para su crecimiento en el ámbito de la educación emocional y el bienestar personal."
      ctaTitle="¿Quieres dar el salto digital con un diseño web que refleje la esencia de tu proyecto?"
      ctaDescription="Hablemos y creemos juntos una presencia digital que conecte con tu audiencia y potencie tu marca personal o proyecto empresarial."
      ctaButtonText="Solicitar Consulta Gratuita"
    />
  );
};

export default CasoExitoMotivaTuMente;