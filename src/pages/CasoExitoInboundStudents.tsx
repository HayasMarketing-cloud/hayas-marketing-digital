import React from 'react';
import CaseStudyTemplate from '@/components/CaseStudyTemplate';
import { successCaseImages } from '@/data/successCaseImages';
import { Target, Globe, Zap } from 'lucide-react';

const CasoExitoInboundStudents = () => {
  return (
    <CaseStudyTemplate
      pageTitle="Caso de Éxito: Inbound Students | Transformación Digital Educativa"
      pageDescription="Desarrollamos estrategia digital integral para Inbound Students, incluyendo diseño web responsive y automatización para digitalizar servicios educativos."
      canonical="/es/casos-exito"
      ogImage={successCaseImages.inboundStudents}
      structuredData={{
        "@context": "https://schema.org",
        "@type": "CaseStudy",
        headline: "Caso de Éxito: Inbound Students | Transformación Digital Educativa",
        about: "Digitalización de servicios educativos con estrategia digital, diseño web y automatización",
        url: '/es/casos-exito/inbound-students',
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
      companyName="Inbound Students"
      subtitle="Transformación digital integral para servicios educativos"
      badges={["Educación", "Diseño Web", "Automatización"]}
      websiteUrl="https://inboundstudents.com"
      featuredImage={successCaseImages.inboundStudents}
      featuredImageAlt="Inbound Students - Servicios educativos para estudiantes extranjeros"
      aboutCompany="Inbound Students es una plataforma especializada en ofrecer servicios integrales para estudiantes extranjeros que desean estudiar en España. Facilitan desde la gestión de documentación hasta alojamiento y orientación académica, siendo un puente fundamental entre estudiantes internacionales y el sistema educativo español."
      challenge="Necesitaban modernizar completamente su presencia digital para atender eficazmente a estudiantes internacionales. Su web existente no ofrecía una experiencia de usuario optimizada para su audiencia multicultural, y los procesos de gestión se realizaban de forma manual, generando ineficiencias y pérdidas de oportunidades comerciales."
      solutions={[
        {
          icon: Target,
          title: 'Estrategia Digital',
          description: 'Planificación integral para digitalizar servicios educativos dirigidos a estudiantes extranjeros, optimizando la captación y conversión.'
        },
        {
          icon: Globe,
          title: 'Diseño Web Responsive',
          description: 'Desarrollo de sitio web responsive adaptado a audiencias internacionales con UX optimizada para estudiantes extranjeros.'
        },
        {
          icon: Zap,
          title: 'Automatización de Procesos',
          description: 'Implementación de automatizaciones para gestión de leads, seguimiento de estudiantes y optimización de procesos educativos.'
        }
      ]}
      results={[
        'Digitalización completa de servicios educativos',
        'Mejora significativa en experiencia de usuario',
        'Automatización de procesos de gestión de estudiantes',
        'Incremento en conversiones de estudiantes internacionales'
      ]}
      learnings="En servicios dirigidos a audiencias internacionales, la experiencia de usuario debe ser intuitiva y multicultural. La automatización de procesos no solo mejora la eficiencia operativa, sino que también permite ofrecer un servicio más personalizado y escalable a estudiantes de diferentes países."
      ctaTitle="¿Necesitas digitalizar tus servicios?"
      ctaDescription="Te ayudamos a transformar digitalmente tu negocio con estrategia, diseño web y automatización personalizada."
      ctaButtonText="Digitalizar mi negocio"
      ctaButtonLink="/es/agendar-reunion"
      relatedSolutions={[
        { label: 'Creación de Marca', route: 'serviceBrandCreation' },
        { label: 'Diseño Web', route: 'serviceWebDesign' },
        { label: 'Estrategia de Contenidos', route: 'serviceContentStrategy' },
      ]}
    />
  );
};

export default CasoExitoInboundStudents;