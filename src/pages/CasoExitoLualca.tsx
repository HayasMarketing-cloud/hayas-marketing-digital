import React from 'react';
import CaseStudyTemplate from '@/components/CaseStudyTemplate';
import { successCaseImages } from '@/data/successCaseImages';
import { Globe, Settings, Shield } from 'lucide-react';

const CasoExitoLualca: React.FC = () => {
  return (
    <CaseStudyTemplate
      pageTitle="Caso de éxito Lualca | Rediseño, hosting y mantenimiento"
      pageDescription="Rediseño, alojamiento y mantenimiento web para Lualca: mejor presencia online y experiencia de usuario."
      canonical="/es/casos-exito/lualca"
      ogImage={successCaseImages.lualca}
      structuredData={{
        "@context": "https://schema.org",
        "@type": "CaseStudy",
        headline: "Caso de Éxito — Lualca: Renovando la imagen digital de una empresa líder en su sector",
        about: "Rediseño web, alojamiento, mantenimiento, UX y refuerzo visual",
        url: "/es/casos-exito/lualca",
        inLanguage: "es",
        publisher: { "@type": "Organization", name: "Hayas Marketing" }
      }}
      companyName="Lualca"
      subtitle="Renovando la imagen digital de una empresa líder"
      badges={["Construcción", "Mantenimiento Industrial", "Rediseño Web"]}
      websiteUrl="https://lualca.es"
      featuredImage={successCaseImages.lualca}
      featuredImageAlt="Lualca - Rediseño web para construcción y mantenimiento industrial"
      aboutCompany="Lualca es una empresa especializada en soluciones integrales para la construcción y el mantenimiento industrial, reconocida por su calidad, experiencia y compromiso con sus clientes. Su equipo combina conocimiento técnico con un enfoque innovador para ofrecer proyectos a medida."
      challenge="Su página web necesitaba una actualización completa para transmitir mejor su identidad corporativa, mejorar la navegación y optimizar la presentación de sus servicios a clientes potenciales. Además, buscaban un servicio integral que asegurara su correcto funcionamiento técnico y disponibilidad online."
      solutions={[
        {
          icon: Globe,
          title: 'Rediseño Web Completo',
          description: 'Creación de un sitio responsive con una estética moderna y adaptada a la identidad visual de Lualca.'
        },
        {
          icon: Shield,
          title: 'Alojamiento y Mantenimiento',
          description: 'Implementación de un servicio integral que garantiza la disponibilidad, seguridad y rendimiento del sitio.'
        },
        {
          icon: Settings,
          title: 'Optimización UX',
          description: 'Estructura de navegación intuitiva que facilita el acceso a la información clave sobre servicios y proyectos.'
        }
      ]}
      results={[
        'Presencia digital moderna y estable',
        'Mejora significativa en la experiencia de usuario',
        'Estructura técnica preparada para futuro crecimiento',
        'Alineación con estándares del sector B2B'
      ]}
      learnings="En empresas con gran trayectoria, un rediseño web combinado con un servicio de alojamiento y mantenimiento profesional no solo moderniza su imagen, sino que asegura la estabilidad y disponibilidad de su presencia digital."
      ctaTitle="¿Quieres un resultado similar?"
      ctaDescription="Hablemos de tu contexto y diseñemos una solución web integral para tu empresa."
      ctaButtonText="Solicitar consulta gratuita"
      ctaButtonLink="/es/agendar-reunion"
      relatedSolutions={[
        { label: 'Diseño Web', route: 'serviceWebDesign' },
      ]}
    />
  );
};

export default CasoExitoLualca;