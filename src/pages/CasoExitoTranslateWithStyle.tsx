import React from 'react';
import CaseStudyTemplate from '@/components/CaseStudyTemplate';
import { successCaseImages } from '@/data/successCaseImages';
import { Award, Languages, Globe } from 'lucide-react';

const CasoExitoTranslateWithStyle = () => {
  return (
    <CaseStudyTemplate
      pageTitle="Caso de Éxito: Translate With Style | Elegancia Lingüística"
      pageDescription="Posicionando una traductora profesional como referente en marketing y moda internacional con branding sofisticado y estrategia premium."
      canonical="/casos-exito/translate-with-style"
      ogImage={successCaseImages.translateWithStyle}
      structuredData={{
        '@context': 'https://schema.org',
        '@type': 'CaseStudy',
        headline: 'Caso de Éxito: Translate With Style | Elegancia Lingüística',
        about: 'Branding sofisticado y posicionamiento premium para traductora especializada en marketing y moda',
        url: '/casos-exito/translate-with-style',
        inLanguage: 'es',
        author: { '@type': 'Organization', name: 'Hayas Marketing' },
        publisher: {
          '@type': 'Organization',
          name: 'Hayas Marketing',
          logo: {
            '@type': 'ImageObject',
            url: 'https://hayas.marketing/lovable-uploads/hayas-logo.png'
          }
        }
      }}
      companyName="Translate with Style"
      subtitle="Posicionando una traductora profesional como referente en marketing y moda internacional"
      badges={["Traducción Especializada", "Marketing & Moda", "Branding Premium"]}
      websiteUrl="https://translatewithstyle.com"
      featuredImage={successCaseImages.translateWithStyle}
      featuredImageAlt="Translate With Style - Traducción Profesional"
      aboutCompany="Traductora profesional altamente especializada en textos de marketing, branding y moda. Su expertise combina dominio lingüístico con comprensión profunda de códigos culturales y tendencias del sector fashion y comunicación comercial internacional."
      challenge="Diferenciarse en un mercado saturado de traductores generalistas, posicionándose como la especialista premium en sectores creativos y de alta gama. Necesitaba una marca que reflejara sofisticación y expertise cultural, atrayendo marcas internacionales que valoran la traducción como estrategia de marca."
      solutions={[
        {
          icon: Award,
          title: 'Branding Sofisticado',
          description: 'Identidad visual que transmite elegancia, profesionalidad y comprensión cultural avanzada.'
        },
        {
          icon: Languages,
          title: 'Estrategia de Comunicación',
          description: 'Desarrollo de mensajes que posicionan la traducción como herramienta estratégica de marca.'
        },
        {
          icon: Globe,
          title: 'Diseño Web Premium',
          description: 'Plataforma digital que refleja el nivel de sofisticación de marcas internacionales objetivo.'
        }
      ]}
      results={[
        'Posicionamiento como especialista premium en traducción de moda',
        'Atracción de marcas internacionales de alto prestigio',
        'Diferenciación clara frente a traductores generalistas',
        'Incremento significativo en tarifas y valor percibido'
      ]}
      learnings="Este proyecto nos demostró el poder de la especialización ultra-nicho en servicios profesionales. Aprendimos que cuando se domina perfectamente un sector específico, la marca debe reflejar no solo competencia técnica sino también comprensión cultural profunda. La sofisticación visual se convierte en una herramienta de credibilidad instantánea en mercados premium."
      ctaTitle="¿Tu expertise merece posicionamiento premium?"
      ctaDescription="Transformamos servicios profesionales especializados en marcas premium que atraen los clientes más selectos del mercado. Tu especialización puede ser tu mayor ventaja competitiva."
      ctaButtonText="Crear mi Marca Premium"
      ctaButtonLink="/es/agendar-reunion"
    />
  );
};

export default CasoExitoTranslateWithStyle;