import React from 'react';
import CaseStudyTemplate from '@/components/CaseStudyTemplate';
import { successCaseImages } from '@/data/successCaseImages';
import { Palette, Globe, FileText } from 'lucide-react';

const CasoExitoNexoVital = () => {
  return (
    <CaseStudyTemplate
      pageTitle="Caso de Éxito: Nexo Vital | Branding Salud Integrativa"
      pageDescription="Transformamos una consulta especializada en microbiota en una marca de referencia en salud integrativa con identidad profesional y estrategia digital."
      canonical="/casos-exito/nexo-vital"
      ogImage={successCaseImages.nexoVital}
      structuredData={{
        "@context": "https://schema.org",
        "@type": "CaseStudy",
        headline: "Caso de Éxito: Nexo Vital | Branding Salud Integrativa",
        about: "Branding y desarrollo web para consulta especializada en salud integrativa y microbiota",
        url: "/casos-exito/nexo-vital",
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
      companyName="Nexo Vital"
      subtitle="Transformamos una consulta especializada en microbiota en una marca de referencia en salud integrativa con identidad profesional y estrategia digital"
      badges={["Salud Integrativa", "Branding", "Desarrollo Web"]}
      websiteUrl="https://nexovital.es"
      featuredImage={successCaseImages.nexoVital}
      featuredImageAlt="Nexo Vital - Consulta especializada en salud integrativa y microbiota"
      aboutCompany="Nexo Vital es una consulta especializada en salud integrativa dirigida por una enfermera experta en microbiota y medicina funcional. Su enfoque holístico combina conocimientos científicos tradicionales con terapias naturales para ofrecer un tratamiento integral centrado en la salud digestiva y el bienestar general."
      challenge="A pesar de su profunda especialización en microbiota y salud integrativa, necesitaba una presencia profesional que transmitiera confianza y credibilidad. Su identidad visual no reflejaba adecuadamente su expertise, y necesitaba diferenciarse en un mercado donde la especialización en salud integrativa requiere generar confianza desde el primer contacto."
      solutions={[
        {
          icon: Palette,
          title: 'Branding Integral',
          description: 'Desarrollo completo de identidad visual que transmite profesionalidad, confianza y especialización en salud integrativa y microbiota.'
        },
        {
          icon: Globe,
          title: 'Desarrollo Web Profesional',
          description: 'Sitio web especializado que comunica efectivamente los servicios de salud integrativa y facilita la captación de pacientes.'
        },
        {
          icon: FileText,
          title: 'Estrategia de Contenidos',
          description: 'Plan de contenidos educativos sobre salud integrativa que posiciona como experta y genera confianza en su audiencia.'
        }
      ]}
      results={[
        'Posicionamiento como referente en salud integrativa y microbiota',
        'Incremento significativo en consultas especializadas',
        'Mayor credibilidad y confianza profesional',
        'Diferenciación clara frente a la competencia tradicional'
      ]}
      learnings="En el sector de la salud integrativa, la confianza es fundamental. Una identidad visual profesional y coherente, combinada con un sitio web que comunique claramente la especialización, puede marcar la diferencia entre ser percibido como un profesional de confianza o simplemente otra opción más en el mercado."
      ctaTitle="¿Necesitas profesionalizar tu consulta?"
      ctaDescription="Te ayudamos a crear una marca profesional que genere confianza y te posicione como referente en tu especialidad."
      ctaButtonText="Desarrollar mi marca profesional"
      ctaButtonLink="/es/agendar-reunion"
    />
  );
};

export default CasoExitoNexoVital;