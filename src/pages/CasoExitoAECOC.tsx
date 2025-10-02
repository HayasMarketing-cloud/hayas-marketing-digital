import React from 'react';
import CaseStudyTemplate from '@/components/CaseStudyTemplate';
import { Database, Settings, Share2, Target } from 'lucide-react';

const CasoExitoAECOC = () => {
  return (
    <CaseStudyTemplate
      pageTitle="Caso de Éxito: AECOC | CRM y Marketing Digital para Educación"
      pageDescription="Implementamos CRM y estrategia digital para AECOC, conectando estudiantes con grandes empresas del sector consumo mediante un proyecto social innovador."
      canonical="/es/casos-exito"
      ogImage="/lovable-uploads/34af75c9-4cb5-4537-853e-73361c647202.png"
      structuredData={{
        "@context": "https://schema.org",
        "@type": "CaseStudy",
        headline: "Caso de Éxito: AECOC | CRM y Marketing Digital para Educación",
        about: "Proyecto social para conectar estudiantes universitarios y de FP con empresas del sector consumo",
        url: "/es/casos-exito/aecoc",
        inLanguage: "es",
        publisher: { "@type": "Organization", name: "Hayas Marketing" },
      }}
      companyName="AECOC"
      subtitle="Conectando estudiantes con las grandes empresas del sector consumo"
      badges={["Educación", "Formación", "CRM", "Redes Sociales"]}
      websiteUrl="https://www.aecoc.es/"
      featuredImage="/lovable-uploads/34af75c9-4cb5-4537-853e-73361c647202.png"
      featuredImageAlt="AECOC - Premios Académicos conectando estudiantes con empresas"
      aboutCompany="AECOC es una de las mayores asociaciones empresariales de España, que reúne a compañías líderes del sector consumo. Conscientes de la importancia de tender puentes entre el mundo académico y el empresarial, AECOC impulsó un proyecto social destinado a ayudar a estudiantes universitarios y de formación profesional a incorporarse al mercado laboral."
      challenge="El principal desafío de AECOC era crear una plataforma de comunicación eficaz entre estudiantes y empresas, que permitiera dar visibilidad al programa social entre el público joven, llegar a los estudiantes a través de redes sociales con un lenguaje cercano, facilitar la gestión de interacciones y captar estudiantes para participar en los eventos y Premios Académicos que la asociación organiza cada año."
      solutions={[
        {
          icon: Database,
          title: 'Implantación de CRM',
          description: 'Configuración de una solución CRM adaptada con pipelines específicos para la gestión de estudiantes y empresas participantes.'
        },
        {
          icon: Settings,
          title: 'Administración del CRM',
          description: 'Gestión y optimización de los flujos de datos, asegurando un seguimiento continuo de los participantes y mejorando la calidad de la información.'
        },
        {
          icon: Share2,
          title: 'Gestión de Redes Sociales',
          description: 'Creación de contenidos orientados a estudiantes y empresas, transmitiendo de forma clara los beneficios del programa e incentivando la participación.'
        },
        {
          icon: Target,
          title: 'Publicidad en Redes Sociales',
          description: 'Campañas segmentadas para llegar a perfiles de estudiantes universitarios y de FP, así como a empresas del sector consumo interesadas en captar talento joven.'
        }
      ]}
      results={[
        "Mayor visibilidad del programa social entre estudiantes universitarios y de FP",
        "Incremento significativo en la participación en eventos y Premios Académicos",
        "Mejora en la comunicación entre estudiantes y empresas del sector consumo",
        "Optimización de los procesos de gestión y seguimiento de participantes",
        "Fortalecimiento del impacto social de la iniciativa de AECOC"
      ]}
      learnings="El caso de AECOC demuestra cómo la combinación de CRM, comunicación digital y campañas en redes sociales puede potenciar proyectos con un fuerte impacto social. Gracias a este enfoque, la asociación pudo fortalecer su iniciativa y abrir nuevas vías para que los estudiantes se acerquen al mercado laboral y encuentren oportunidades en las compañías líderes del sector consumo."
      ctaTitle="¿Quieres impulsar un proyecto social o educativo?"
      ctaDescription="Descubre cómo nuestras soluciones digitales pueden ayudarte a conseguir un impacto real en tu sector."
      ctaButtonText="Solicitar consulta gratuita"
      ctaButtonLink="/es/contacto"
    />
  );
};

export default CasoExitoAECOC;