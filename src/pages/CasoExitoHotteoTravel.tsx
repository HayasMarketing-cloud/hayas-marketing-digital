import React from 'react';
import CaseStudyTemplate from '@/components/CaseStudyTemplate';
import { Search, PenTool, BarChart3 } from 'lucide-react';

const CasoExitoHotteoTravel: React.FC = () => {
  const pageTitle = "Caso de Éxito Hotteo Travel - Estrategia Digital y SEO para Agencia de Viajes | Hayas Marketing";
  const pageDescription = "Descubre cómo Hotteo Travel potencia su visibilidad digital con estrategia SEO y consultoría para posicionarse como agencia de viajes de experiencias únicas.";
  const canonical = "https://hayasmarketing.com/casos-exito/hotteo-travel";
  const ogImage = "https://hayasmarketing.com/lovable-uploads/hotteo-travel-patagonia-experience.png";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": pageTitle,
    "description": pageDescription,
    "image": ogImage,
    "author": {
      "@type": "Organization",
      "name": "Hayas Marketing"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Hayas Marketing",
      "logo": {
        "@type": "ImageObject",
        "url": "https://hayasmarketing.com/lovable-uploads/hayas-logo.png"
      }
    },
    "datePublished": "2024-01-01",
    "dateModified": "2024-01-01"
  };

  return (
    <CaseStudyTemplate
      pageTitle={pageTitle}
      pageDescription={pageDescription}
      canonical={canonical}
      ogImage={ogImage}
      structuredData={structuredData}
      companyName="Hotteo Travel"
      subtitle="Una agencia de viajes innovadora que confía en Hayas para posicionarse en buscadores y atraer nuevos clientes"
      badges={["Turismo", "Experiencias Únicas", "SEO"]}
      websiteUrl="https://www.hotteotravel.com"
      featuredImage="/lovable-uploads/hotteo-travel-patagonia-experience.png"
      featuredImageAlt="Caso de éxito Hotteo Travel - Experiencias de viaje únicas en Patagonia chilena"
      aboutCompany="Hotteo Travel es una agencia de viajes especializada en diseñar experiencias únicas, personalizadas y diferentes para viajeros que buscan mucho más que un paquete turístico tradicional. Con una propuesta basada en la innovación y la autenticidad, Hotteo Travel necesitaba destacar en un mercado altamente competitivo y digitalizado."
      challenge="Los principales desafíos de Hotteo Travel eran aumentar la visibilidad en buscadores compitiendo con grandes portales de viajes y OTAs, posicionarse como agencia diferenciada destacando por su propuesta de viajes exclusivos y personalizados, definir una estrategia digital clara que orientara los contenidos y las acciones de marketing a captar clientes cualificados, y atraer tráfico orgánico de calidad incrementando el número de potenciales clientes interesados en experiencias únicas."
      solutions={[
        {
          icon: Search,
          title: "Estrategia SEO Integral",
          description: "Auditoría completa de la web, investigación de palabras clave enfocada en viajes personalizados, optimización on-page y SEO técnico para mejorar indexación y posicionamiento."
        },
        {
          icon: PenTool,
          title: "Estrategia de Contenidos",
          description: "Plan editorial enfocado en viajeros interesados en experiencias personalizadas, creación de contenidos de valor y optimización continua para captar tráfico cualificado."
        },
        {
          icon: BarChart3,
          title: "Consultoría Estratégica",
          description: "Definición de KPIs de tráfico, leads y conversión, orientación de la estrategia digital para diferenciarse en el sector turístico."
        }
      ]}
      results={[
        "Aumento significativo de la visibilidad digital en buscadores",
        "Mejora del posicionamiento en Google para palabras clave relevantes",
        "Atracción de clientes interesados en viajes personalizados",
        "Consolidación como propuesta innovadora en el sector turismo",
        "Incremento del tráfico orgánico de calidad",
        "Diferenciación efectiva frente a grandes portales de viajes",
        "Optimización técnica completa de la arquitectura web"
      ]}
      learnings="Con la implementación de la estrategia y el SEO, Hotteo Travel ha logrado aumentar su visibilidad digital y mejorar su posicionamiento en buscadores, atrayendo clientes interesados en viajes personalizados y experiencias únicas. La combinación de consultoría estratégica y optimización SEO consolidó a la agencia como una propuesta innovadora dentro del sector turismo."
      ctaTitle="¿Quieres que tu empresa aparezca en las primeras posiciones de Google?"
      ctaDescription="Descubre cómo nuestras estrategias de SEO especializadas en turismo pueden ayudarte a crecer y diferenciarte de la competencia."
      ctaButtonText="Solicitar Consulta Gratuita"
    />
  );
};

export default CasoExitoHotteoTravel;