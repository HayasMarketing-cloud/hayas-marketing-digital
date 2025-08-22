import React from 'react';
import CaseStudyTemplate from '@/components/CaseStudyTemplate';
import { successCaseImages } from '@/data/successCaseImages';
import { Target, Users, TrendingUp, Award } from 'lucide-react';

const CasoExitoCalisteniaOnline = () => {
  return (
    <CaseStudyTemplate
      pageTitle="Caso de Éxito: Calistenia Online - Transformación Digital Deportiva | Hayas Marketing"
      pageDescription="Descubre cómo ayudamos a Calistenia Online a digitalizar su academia de entrenamiento físico y aumentar su base de estudiantes online en un 300%."
      canonical="/casos-exito/calistenia-online"
      ogImage="/casos-exito/calistenia-online/og-image.jpg"
      structuredData={{
        "@context": "https://schema.org",
        "@type": "CaseStudy",
        "name": "Caso de Éxito: Calistenia Online",
        "description": "Transformación digital de academia de entrenamiento físico",
        "publisher": {
          "@type": "Organization",
          "name": "Hayas Marketing"
        }
      }}
      companyName="Calistenia Online"
      subtitle="Transformación Digital de Academia Deportiva"
      badges={["Educación Online", "Deporte", "Transformación Digital"]}
      websiteUrl="https://calisteniaonline.com"
      featuredImage={successCaseImages.calistheniaOnline}
      featuredImageAlt="Plataforma digital Calistenia Online - Academia de entrenamiento"
      aboutCompany="Calistenia Online es una academia especializada en entrenamiento físico basado en calistenia, que buscaba expandir su alcance mediante una plataforma digital completa para ofrecer cursos y entrenamientos online."
      challenge="La empresa necesitaba digitalizar completamente su modelo de negocio, pasando de clases presenciales a una plataforma online robusta que permitiera gestionar estudiantes, contenido educativo y pagos de forma automatizada."
      solutions={[
        {
          icon: Target,
          title: "Plataforma E-Learning",
          description: "Desarrollo de plataforma educativa completa con gestión de cursos, estudiantes y progreso de entrenamiento."
        },
        {
          icon: Users,
          title: "Sistema de Membresías",
          description: "Implementación de sistema de suscripciones y membresías con diferentes niveles de acceso al contenido."
        },
        {
          icon: TrendingUp,
          title: "Marketing Digital Especializado",
          description: "Estrategia de marketing enfocada en el nicho deportivo con campañas en redes sociales y Google Ads."
        },
        {
          icon: Award,
          title: "Comunidad Online",
          description: "Creación de comunidad digital para estudiantes con foros, seguimiento de progreso y motivación grupal."
        }
      ]}
      results={[
        "Aumento del 300% en la base de estudiantes online",
        "Incremento del 250% en ingresos mensuales", 
        "Creación de una comunidad activa de más de 1,500 miembros",
        "Reducción del 60% en tiempo de gestión administrativa",
        "Mejora del 85% en satisfacción de estudiantes"
      ]}
      learnings="La digitalización completa del modelo de negocio deportivo requiere no solo tecnología, sino también una estrategia de comunidad sólida que mantenga la motivación y el compromiso de los estudiantes a distancia."
      ctaTitle="¿Quieres digitalizar tu academia o negocio deportivo?"
      ctaDescription="Te ayudamos a crear tu plataforma educativa online y desarrollar una estrategia digital que conecte con tu audiencia deportiva."
      ctaButtonText="Solicitar Consultoría Gratuita"
      ctaButtonLink="/solicitar-consulta"
    />
  );
};

export default CasoExitoCalisteniaOnline;