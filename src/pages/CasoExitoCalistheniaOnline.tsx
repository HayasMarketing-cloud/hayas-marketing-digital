import React from 'react';
import CaseStudyTemplate from '@/components/CaseStudyTemplate';
import { successCaseImages } from '@/data/successCaseImages';
import { User, Globe, Zap } from 'lucide-react';

const CasoExitoCalistheniaOnline = () => {
  return (
    <CaseStudyTemplate
      pageTitle="Caso de Éxito Calisthenia Online | Branding y SEO"
      pageDescription="Branding, identidad visual, diseño web y SEO para un entrenador online especializado en calistenia"
      canonical="/casos-exito/calistenia-online"
      ogImage={successCaseImages.calistheniaOnline}
      structuredData={{
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Caso de Éxito — Calisthenia Online: Una marca sólida para entrenar sin límites",
        "description": "Branding, identidad visual, diseño web y SEO para un entrenador online especializado en calistenia",
        "author": { "@type": "Organization", "name": "Hayas Marketing" },
        "url": "/casos-exito/calistenia-online",
        "inLanguage": "es"
      }}
      companyName="Calisthenia Online"
      subtitle="Una marca sólida para entrenar sin límites"
      badges={["Entrenamiento Online", "Calistenia", "Branding"]}
      websiteUrl="https://calistheniaonline.com"
      featuredImage={successCaseImages.calistheniaOnline}
      featuredImageAlt="Calisthenia Online - Plataforma de entrenamiento especializada en calistenia"
      aboutCompany="Calisthenia Online es una plataforma de entrenamiento creada por un entrenador personal especializado en calistenia, que ofrece programas y asesoramiento online para todo tipo de niveles, desde principiantes hasta atletas avanzados. Su enfoque se basa en el entrenamiento con peso corporal para desarrollar fuerza, flexibilidad y control corporal."
      challenge="Partíamos de cero: era necesario crear la marca, definir su identidad visual y construir una página web que transmitiera confianza, profesionalidad y energía, además de posicionarla en buscadores para captar clientes en un nicho muy específico como la calistenia."
      solutions={[
        {
          icon: User,
          title: 'Branding y Naming',
          description: "Creación del nombre 'Calisthenia Online' y desarrollo de identidad visual que transmite dinamismo, fuerza y modernidad."
        },
        {
          icon: Globe,
          title: 'Diseño Web Personalizado',
          description: 'Desarrollo de sitio responsive optimizado para conversión, con presentación clara de servicios, programas y testimonios.'
        },
        {
          icon: Zap,
          title: 'Estrategia SEO',
          description: 'Implementación de estrategia SEO técnica orientada a palabras clave del sector fitness y calistenia para aumentar visibilidad.'
        }
      ]}
      results={[
        'Marca sólida y reconocible en el sector de calistenia',
        'Incremento significativo en la visibilidad online',
        'Mejora en la captación de clientes cualificados',
        'Posicionamiento como referente en entrenamiento con peso corporal'
      ]}
      learnings="En proyectos de entrenamiento online, una marca clara y coherente, un diseño web atractivo y una estrategia SEO bien definida son esenciales para destacar en un mercado altamente competitivo. La especialización en un nicho específico como la calistenia permite posicionarse como referente."
      ctaTitle="¿Quieres escalar tu negocio de servicios personalizados?"
      ctaDescription="Transformamos negocios tradicionales en plataformas digitales escalables sin perder la esencia personal. Tu expertise merece una marca y sistemas a su altura."
      ctaButtonText="Escalar mi Negocio Digital"
      ctaButtonLink="/agendar-reunion"
    />
  );
};

export default CasoExitoCalistheniaOnline;