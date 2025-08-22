
import React from 'react';
import CaseStudyTemplate from '@/components/CaseStudyTemplate';
import { successCaseImages } from '@/data/successCaseImages';
import { Target, Users, TrendingUp, Award } from 'lucide-react';

const CalistheniaOnlinePage = () => {
  return (
    <CaseStudyTemplate
      pageTitle="Caso de Éxito: Calisthenia Online - Transformación Digital Deportiva | Hayas Marketing"
      pageDescription="Descubre cómo ayudamos a Calisthenia Online a digitalizar su academia de entrenamiento físico y aumentar su base de estudiantes online en un 300%."
      canonical="/casos-exito/calisthenia-online"
      ogImage="/casos-exito/calisthenia-online/og-image.jpg"
      structuredData={{
        "@context": "https://schema.org",
        "@type": "CaseStudy",
        "name": "Caso de Éxito: Calisthenia Online",
        "description": "Transformación digital de academia de entrenamiento físico",
        "publisher": {
          "@type": "Organization",
          "name": "Hayas Marketing"
        }
      }}
      companyName="Calisthenia Online"
      subtitle="Transformación Digital de Academia Deportiva"
      badges={["Educación Online", "Deporte", "Transformación Digital"]}
      websiteUrl="https://calisthenia.online/"
      featuredImage={successCaseImages.calistheniaOnline}
      featuredImageAlt="Plataforma digital Calisthenia Online - Academia de entrenamiento"
      aboutCompany="Calisthenia Online nace como la evolución natural de la marca personal de Nicolás Reyero, dando un salto hacia una identidad más sólida, especializada y conectada con el mundo del deporte. Nuestro objetivo: llevar la calistenia a más personas a través de una plataforma digital completa, diseñada para ofrecer entrenamientos, cursos y recursos que potencien el progreso físico y mental desde cualquier lugar. Nos transformamos para crecer, y con esta transformación, abrimos las puertas a una comunidad que busca superarse día a día. Ya no se trata solo de un entrenador, sino de una experiencia integral para quienes quieren entrenar con libertad, constancia y resultados reales."
      challenge="Calisthenia online quiere transformar la forma en que las personas entrenan y se cuidan. En Calisthenia Online, el reto va más allá del ejercicio físico. Queremos romper barreras mentales, sociales y tecnológicas para que cualquier persona, sin importar su nivel o entorno, pueda acceder a entrenamientos eficaces, motivadores y adaptados a su realidad. Nuestro desafío es que más personas descubran el poder de su propio cuerpo, desarrollen fuerza y disciplina, y encuentren en la calistenia una herramienta de cambio duradero."
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

export default CalistheniaOnlinePage;
