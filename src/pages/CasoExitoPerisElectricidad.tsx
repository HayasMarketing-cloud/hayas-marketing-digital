import React from 'react';
import CaseStudyTemplate from '@/components/CaseStudyTemplate';
import { successCaseImages } from '@/data/successCaseImages';
import { Globe, Target, Search, Zap } from 'lucide-react';

const CasoExitoPerisElectricidad = () => {
  return (
    <CaseStudyTemplate
      pageTitle="Caso de éxito Peris Electricidad | Web, CRM y SEO"
      pageDescription="Diseño web, CRM HubSpot y estrategia SEO para una empresa eléctrica con visión de futuro."
      canonical="/casos-exito/peris-electricidad"
      ogImage={successCaseImages.perisElectricidad}
      structuredData={{
        "@context": "https://schema.org",
        "@type": "CaseStudy",
        headline: "Caso de Éxito — Peris Electricidad: Energía renovada para crecer en el entorno digital",
        about: "Diseño web responsive, implantación de CRM HubSpot, estrategia SEO e integración marketing-ventas",
        url: "/casos-exito/peris-electricidad",
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
      companyName="Peris Electricidad"
      subtitle="Energía renovada para crecer en el entorno digital: diseño web, CRM y estrategia SEO para una empresa eléctrica con visión de futuro"
      badges={["Instalaciones Eléctricas", "CRM HubSpot", "SEO"]}
      websiteUrl="#"
      featuredImage={successCaseImages.perisElectricidad}
      featuredImageAlt="Peris Electricidad - Instalaciones eléctricas y eficiencia energética"
      aboutCompany="Peris Electricidad es una empresa especializada en instalaciones eléctricas, mantenimiento y soluciones de eficiencia energética. Su equipo combina experiencia técnica con un servicio cercano y adaptado a las necesidades de cada cliente."
      challenge="Querían modernizar su presencia digital, centralizar la gestión de clientes y mejorar su visibilidad en buscadores para atraer más oportunidades comerciales."
      solutions={[
        {
          icon: Globe,
          title: 'Diseño Web Personalizado',
          description: 'Creación de un sitio responsive y visualmente atractivo que presenta de forma clara sus servicios y proyectos, transmitiendo profesionalidad y confianza.'
        },
        {
          icon: Target,
          title: 'Implantación de CRM HubSpot',
          description: 'Configuración adaptada a sus procesos para gestionar contactos, oportunidades y seguimiento de proyectos de manera más eficiente.'
        },
        {
          icon: Search,
          title: 'Estrategia y Posicionamiento SEO',
          description: 'Auditoría y optimización técnica de la web, junto con una estrategia de palabras clave para aumentar la visibilidad y captar tráfico cualificado.'
        },
        {
          icon: Zap,
          title: 'Integración de Marketing y Ventas',
          description: 'Coordinación entre la estrategia digital y las herramientas de CRM para optimizar la conversión de visitantes en clientes.'
        }
      ]}
      results={[
        'Modernización completa de la presencia digital',
        'Mejora en la gestión centralizada de clientes',
        'Incremento significativo en visibilidad online',
        'Optimización del proceso de conversión'
      ]}
      learnings="En empresas de servicios técnicos, combinar un diseño web optimizado con un CRM funcional y una estrategia SEO efectiva multiplica la capacidad de captar y fidelizar clientes."
      ctaTitle="¿Quieres este enfoque para tu empresa?"
      ctaDescription="Te ayudamos a modernizar tu presencia digital y optimizar tus procesos comerciales como lo hicimos con Peris Electricidad."
      ctaButtonText="Hablemos"
      ctaButtonLink="/agendar-reunion"
    />
  );
};

export default CasoExitoPerisElectricidad;