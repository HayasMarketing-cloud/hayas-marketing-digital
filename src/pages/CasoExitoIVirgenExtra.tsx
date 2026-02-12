import React from 'react';
import CaseStudyTemplate from '@/components/CaseStudyTemplate';
import { successCaseImages } from '@/data/successCaseImages';
import { Award, Factory, TrendingUp } from 'lucide-react';

const CasoExitoIVirgenExtra = () => {
  return (
    <CaseStudyTemplate
      pageTitle="Caso de Éxito: I Virgen Extra | Consultoría Industrial AOVE"
      pageDescription="Transformando la consultoría industrial en una marca de autoridad en producción de aceite de oliva virgen extra (AOVE)."
      canonical="/es/casos-exito"
      ogImage={successCaseImages.iVirgenExtra}
      structuredData={{
        '@context': 'https://schema.org',
        '@type': 'CaseStudy',
        headline: 'Caso de Éxito: I Virgen Extra | Consultoría Industrial AOVE',
        about: 'Branding técnico y desarrollo web para consultoría especializada en aceite de oliva',
        url: '/es/casos-exito/i-virgen-extra',
        inLanguage: 'es',
        publisher: { '@type': 'Organization', name: 'Hayas Marketing' }
      }}
      companyName="I Virgen Extra"
      subtitle="Excelencia en consultoría de Aceite de Oliva"
      badges={["Ingeniería Industrial", "Aceite de Oliva", "Consultoría"]}
      websiteUrl="https://ivirgenextra.com"
      featuredImage={successCaseImages.iVirgenExtra}
      featuredImageAlt="I Virgen Extra - Consultoría especializada en producción de AOVE"
      aboutCompany="Consultor ingeniero especializado en procesos industriales para la producción de aceite de oliva virgen extra (AOVE). Su expertise abarca desde el diseño de almazaras hasta la optimización de procesos de extracción y calidad, posicionándose como referente técnico en el sector oleícola."
      challenge="Necesitaba posicionarse como el referente técnico en consultoría de AOVE, diferenciándose de la competencia generalista. Requería una identidad profesional que transmitiera expertise técnico y confianza a productores y empresas del sector oleícola que buscan optimizar sus procesos de producción."
      solutions={[
        {
          icon: Award,
          title: 'Branding Técnico',
          description: 'Desarrollo de una identidad que combina profesionalidad industrial con la tradición del aceite de oliva.'
        },
        {
          icon: Factory,
          title: 'Desarrollo Web',
          description: 'Creación de una plataforma digital que muestra expertise técnico y casos de éxito industriales.'
        },
        {
          icon: TrendingUp,
          title: 'Identidad Profesional',
          description: 'Manual de marca completo que establece los estándares de comunicación en el sector industrial.'
        }
      ]}
      results={[
        'Posicionamiento como autoridad en consultoría AOVE',
        'Identidad visual profesional y diferenciada',
        'Plataforma web que transmite expertise técnico',
        'Incremento en la confianza de clientes industriales'
      ]}
      learnings="Este proyecto nos demostró la importancia de equilibrar la modernidad tecnológica con la tradición del sector oleícola. Desarrollamos un enfoque que respeta la herencia cultural del aceite de oliva mientras proyecta innovación industrial, creando una marca que comunica expertise técnico sin perder la esencia mediterránea del producto."
      ctaTitle="¿Quieres posicionarte como experto en tu sector?"
      ctaDescription="Creamos marcas que transmiten autoridad y expertise técnico. Tu consultoría especializada merece una identidad a su altura."
      ctaButtonText="Desarrollar mi Marca Profesional"
      ctaButtonLink="/es/agendar-reunion"
      relatedSolutions={[
        { label: 'Consultoría Estratégica', route: 'serviceStrategicConsulting' },
        { label: 'Diseño Web', route: 'serviceWebDesign' },
      ]}
    />
  );
};

export default CasoExitoIVirgenExtra;