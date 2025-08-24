import React from 'react';
import CaseStudyTemplate from '@/components/CaseStudyTemplate';
import { MessageSquare, Users, Sparkles } from 'lucide-react';

const CasoExitoFundacionCasaMexico: React.FC = () => {
  const pageTitle = "Caso de Éxito Fundación Casa de México - Filtro Digital Día de Muertos | Hayas Marketing";
  const pageDescription = "Descubre cómo la Fundación Casa de México en España innovó en comunicación digital con un filtro de redes sociales para el Día de Muertos y consultoría estratégica.";
  const canonical = "https://hayasmarketing.com/casos-exito/fundacion-casa-mexico";
  const ogImage = "https://hayasmarketing.com/lovable-uploads/fundacion-casa-mexico-dia-muertos.png";

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
      companyName="Fundación Casa de México en España"
      subtitle="Una acción creativa para unir tradición y tecnología a través de un filtro en redes sociales y asesoría estratégica"
      badges={["Medios / Marketing / Eventos", "Cultura", "Redes Sociales"]}
      websiteUrl="https://www.casademexico.es"
      featuredImage="/lovable-uploads/fundacion-casa-mexico-dia-muertos.png"
      featuredImageAlt="Caso de éxito Fundación Casa de México - Filtro digital Día de Muertos"
      aboutCompany="La Fundación Casa de México en España es un espacio cultural de referencia en Madrid, dedicado a promover el arte, la cultura, la gastronomía y las tradiciones mexicanas. Su programación anual incluye exposiciones, talleres, proyecciones y eventos emblemáticos que acercan a miles de visitantes a la riqueza cultural de México. Entre sus celebraciones más importantes se encuentra el Día de Muertos, una festividad que cada año atrae a un público creciente y que se ha consolidado como una de las citas culturales más esperadas en la capital española."
      challenge="La Fundación buscaba en esta edición del Día de Muertos innovar en la comunicación digital para conectar con públicos más jóvenes y digitales, ampliar el alcance del evento más allá de los asistentes presenciales en Madrid, ofrecer una experiencia interactiva y creativa en redes sociales que permitiera a cualquier usuario participar en la celebración desde cualquier lugar, y contar con un acompañamiento estratégico para alinear estas acciones con sus objetivos de difusión cultural."
      solutions={[
        {
          icon: MessageSquare,
          title: "Consultoría Estratégica",
          description: "Analizamos los objetivos de la Fundación y propusimos acciones digitales que reforzaran el posicionamiento del Día de Muertos como evento cultural de referencia en España."
        },
        {
          icon: Sparkles,
          title: "Filtro en Redes Sociales",
          description: "Desarrollamos un filtro interactivo inspirado en la iconografía del Día de Muertos (calaveras, flores de cempasúchil, colores tradicionales), disponible en Instagram y Facebook."
        },
        {
          icon: Users,
          title: "Engagement y Viralidad",
          description: "El filtro permitió que los usuarios compartieran sus fotos y vídeos personalizados, generando conversación en redes sociales y multiplicando el alcance del evento."
        }
      ]}
      results={[
        "Integración exitosa de tradición y tecnología en la comunicación del evento",
        "Ampliación significativa del alcance más allá de los asistentes presenciales",
        "Participación activa de miles de usuarios a través del filtro digital",
        "Refuerzo del posicionamiento como puente cultural entre México y España",
        "Generación de conversación y viralidad en redes sociales"
      ]}
      learnings="Gracias a esta colaboración, la Fundación Casa de México en España logró integrar tradición y tecnología, ofreciendo una experiencia cultural innovadora y participativa. El filtro de Día de Muertos no solo amplió el alcance del evento, sino que permitió que miles de usuarios se sintieran parte de la celebración, reforzando el papel de la Fundación como puente cultural entre México y España."
      ctaTitle="¿Quieres potenciar la visibilidad de tus eventos con estrategias digitales creativas?"
      ctaDescription="Descubre cómo podemos ayudarte a combinar tradición e innovación digital para amplificar el impacto de tus eventos culturales y conectar con nuevas audiencias."
      ctaButtonText="Solicitar Consulta Gratuita"
    />
  );
};

export default CasoExitoFundacionCasaMexico;