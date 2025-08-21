import React from 'react';
import CaseStudyTemplate from '@/components/CaseStudyTemplate';
import { successCaseImages } from '@/data/successCaseImages';
import { Heart, BookOpen, Award, TrendingUp } from 'lucide-react';

const CasoExitoCentroRoraima = () => {
  return (
    <CaseStudyTemplate
      pageTitle="Caso de Éxito: Centro Roraima | Branding Médico Salud Mental"
      pageDescription="Desarrollamos branding médico integral para Centro Roraima, posicionándolo como referente en atención psiquiátrica y psicológica con enfoque multidisciplinario."
      canonical="/casos-exito/centro-roraima"
      ogImage={successCaseImages.centroRoraima}
      structuredData={{
        "@context": "https://schema.org",
        "@type": "CaseStudy",
        headline: "Caso de Éxito: Centro Roraima | Branding Médico Salud Mental",
        about: "Branding médico y diseño web para centro de salud mental especializado",
        url: "/casos-exito/centro-roraima",
        inLanguage: "es",
        publisher: { "@type": "Organization", name: "Hayas Marketing" }
      }}
      companyName="Centro Roraima"
      subtitle="Salud Mental Integral"
      badges={["Psiquiatría", "Psicología Clínica", "Branding Médico"]}
      websiteUrl="https://centrororaima.es"
      featuredImage={successCaseImages.centroRoraima}
      featuredImageAlt="Centro Roraima - Desarrollo Personal"
      aboutCompany="Centro Roraima está dedicado a la atención integral de los trastornos de salud mental, que ofrece un enfoque multidisciplinario de alta especialización. Combina ciencia y empatía para brindar la mejor atención posible a cada paciente."
      challenge="Necesitaban posicionarse como centro de referencia en salud mental en un mercado donde la credibilidad médica y la confianza del paciente son fundamentales. El reto era comunicar su alta especialización médica mientras transmitían cercanía y empatía para generar confianza en pacientes que buscan atención en salud mental."
      solutions={[
        {
          icon: Heart,
          title: "Branding Médico",
          description: "Identidad visual que transmite confianza médica, profesionalidad y calidez humana."
        },
        {
          icon: BookOpen,
          title: "Diseño Web",
          description: "Plataforma digital especializada que facilita el acceso a información sobre servicios de salud mental."
        },
        {
          icon: Award,
          title: "Estrategia de Contenidos",
          description: "Consultoría en contenidos que posiciona como autoridad en psiquiatría y psicología clínica."
        },
        {
          icon: TrendingUp,
          title: "SEO Especializado",
          description: "Posicionamiento natural para búsquedas relacionadas con salud mental y servicios psiquiátricos."
        }
      ]}
      results={[]}
      learnings="Este proyecto nos enseñó la importancia de equilibrar la credibilidad médica con la accesibilidad comunicativa. Descubrimos que en el sector de la salud mental, la marca debe reflejar tanto la alta especialización profesional como la empatía humana, creando un entorno de confianza que facilite el acceso a la atención psiquiátrica y psicológica."
      ctaTitle="¿Tu centro de salud necesita mayor visibilidad?"
      ctaDescription="Ayudamos a centros de salud mental y clínicas especializadas a posicionarse como referentes en su sector a través de estrategias de marca médicas auténticas y efectivas."
      ctaButtonText="Posicionar mi Centro de Salud"
      ctaButtonLink="/contacto"
    />
  );
};

export default CasoExitoCentroRoraima;