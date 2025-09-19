import React from 'react';
import CaseStudyTemplate from '@/components/CaseStudyTemplate';
import { successCaseImages } from '@/data/successCaseImages';
import { TrendingUp, Settings } from 'lucide-react';
const CasoExitoOMR = (): React.JSX.Element => {
  return (
    <CaseStudyTemplate
      pageTitle="Caso de Éxito: OMR | Diseño web y mantenimiento"
      pageDescription="Rediseñamos la web de OMR y gestionamos su alojamiento/mantenimiento para mejorar captación y rendimiento."
      canonical="/casos-exito/omr"
      ogImage={successCaseImages.omr}
      structuredData={{
        '@context': 'https://schema.org',
        '@type': 'CaseStudy',
        name: 'Caso de Éxito — OMR: Diseño web para un transporte a medida',
        description: 'Diseño web y alojamiento/mantenimiento para OMR, modernizando su presencia digital y asegurando rendimiento y disponibilidad.',
        url: '/casos-exito/omr',
        inLanguage: 'es',
        about: {
          '@type': 'Organization',
          name: 'Agencia de Transportes Especiales OMR',
          url: 'https://transportesespecialesomr.es',
          sameAs: ['https://transportesespecialesomr.es'],
          areaServed: 'ES',
          industry: 'Transporte especializado'
        },
        provider: {
          '@type': 'Organization',
          name: 'Hayas Marketing'
        }
      }}
      companyName="OMR"
      subtitle="Modernizando la presencia digital de una agencia de transporte especializado"
      badges={["Transporte", "Diseño Web", "Alojamiento & Mantenimiento"]}
      websiteUrl="https://transportesespecialesomr.es"
      featuredImage={successCaseImages.omr}
      featuredImageAlt="Transporte especializado — camión en carretera (OMR)"
      aboutCompany="OMR es una agencia especializada en transportes especiales que ofrece soluciones adaptadas a cargas sobredimensionadas y mercancías que requieren atención personalizada. Su compromiso con la puntualidad y la seguridad los ha convertido en un referente en su sector."
      challenge="Necesitaban una web moderna y optimizada que reflejara la profesionalidad y especialización de sus servicios, facilitara la consulta de información y captara nuevos clientes. Además, requerían un sistema estable de alojamiento y mantenimiento para garantizar rendimiento y disponibilidad constantes."
      solutions={[
        {
          icon: Settings,
          title: 'Diseño Web',
          description: 'Creamos una página moderna y responsive, con estructura clara de servicios, galería de proyectos y formularios optimizados para captación de leads.'
        },
        {
          icon: TrendingUp,
          title: 'Alojamiento y Mantenimiento',
          description: 'Configuramos un entorno seguro y de alto rendimiento, con actualizaciones periódicas y monitorización continua para asegurar disponibilidad.'
        }
      ]}
      results={[
        'Imagen profesional moderna y actualizada',
        'Mejora en la captación de leads y consultas',
        'Mayor confianza y credibilidad en su sector',
        'Rendimiento y disponibilidad optimizados'
      ]}
      learnings="Este proyecto nos mostró la importancia de combinar un diseño web atractivo con un servicio de alojamiento y mantenimiento sólido, para que empresas de sectores especializados como el transporte puedan transmitir confianza y captar clientes sin preocuparse de la parte técnica."
      ctaTitle="¿Quieres una web que te ayude a crecer?"
      ctaDescription="Diseñamos y mantenemos tu web para que puedas concentrarte en tus clientes. Rendimiento, seguridad y captación en una sola solución."
      ctaButtonText="Solicitar Consulta"
      ctaButtonLink="/es/solicitar-consulta"
    />
  );
};
export default CasoExitoOMR;