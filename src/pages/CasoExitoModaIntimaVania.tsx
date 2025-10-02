import React from 'react';
import CaseStudyTemplate from '@/components/CaseStudyTemplate';
import { successCaseImages } from '@/data/successCaseImages';
import { Target, Linkedin } from 'lucide-react';

const CasoExitoModaIntimaVania: React.FC = () => {
  return (
    <CaseStudyTemplate
      pageTitle="Caso de Éxito Moda Íntima Vania | CRM HubSpot + Redes Sociales"
      pageDescription="De la boutique al CRM: uniendo redes sociales y gestión de clientes para una marca de moda íntima."
      canonical="/es/casos-exito"
      ogImage={successCaseImages.modaIntimaVania}
      structuredData={{
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Caso de Éxito — Moda Íntima Vania: Estrategia digital para potenciar la experiencia de compra',
        about: 'Consultoría en redes sociales e implantación de CRM HubSpot',
        author: { '@type': 'Organization', name: 'Hayas Marketing' },
        url: '/es/casos-exito/moda-intima-vania'
      }}
      companyName="Moda Íntima Vania"
      subtitle="De la boutique al CRM: uniendo redes sociales y gestión de clientes para una marca de moda íntima con atención personalizada"
      badges={["Moda Íntima", "CRM HubSpot", "Redes Sociales"]}
      websiteUrl="https://intimavania.com/es/"
      featuredImage={successCaseImages.modaIntimaVania}
      featuredImageAlt="Moda Íntima Vania - Boutique especializada en lencería y ropa interior femenina"
      aboutCompany="Moda Íntima Vania es una boutique especializada en lencería y ropa interior femenina, reconocida por su selección de productos de alta calidad y atención personalizada. Con presencia física y online, su objetivo es ofrecer una experiencia de compra que combine estilo, confort y cercanía."
      challenge="Necesitaban optimizar su presencia digital y conectar mejor las interacciones en redes sociales con la gestión de clientes. La falta de un sistema centralizado dificultaba dar seguimiento a consultas y oportunidades de venta generadas en canales online."
      solutions={[
        {
          icon: Linkedin,
          title: 'Consultoría en Redes Sociales',
          description: 'Análisis, estrategia de contenidos y recomendaciones para mejorar engagement y conversión.'
        },
        {
          icon: Target,
          title: 'Implantación de CRM HubSpot',
          description: 'Integración de datos desde redes sociales y otros canales, seguimiento y automatización comercial.'
        }
      ]}
      results={[
        'Incremento en la interacción y alcance en redes sociales',
        'Mayor trazabilidad de las oportunidades generadas en entornos digitales',
        'Optimización del seguimiento a clientes y fidelización'
      ]}
      learnings="En el sector retail, la integración entre redes sociales y CRM permite maximizar el valor de cada interacción, ofreciendo una experiencia más coherente y efectiva para el cliente."
      ctaTitle="¿Quieres un resultado similar?"
      ctaDescription="Hablemos de tu contexto y diseñemos una implantación de HubSpot y estrategia en redes sociales a medida."
      ctaButtonText="Solicitar consulta gratuita"
      ctaButtonLink="/es/agendar-reunion"
    />
  );
};

export default CasoExitoModaIntimaVania;