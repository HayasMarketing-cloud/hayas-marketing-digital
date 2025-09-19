import React from 'react';
import CaseStudyTemplate from '@/components/CaseStudyTemplate';
import { successCaseImages } from '@/data/successCaseImages';
import { User, Linkedin, Globe } from 'lucide-react';

const CasoExitoEvaChampion: React.FC = () => {
  return (
    <CaseStudyTemplate
      pageTitle="Caso de Éxito Eva Champion | Marca personal y LinkedIn"
      pageDescription="Marca personal y estrategia en LinkedIn para visibilidad internacional de una traductora profesional especializada en francés, inglés y alemán."
      canonical="/casos-exito/eva-champion"
      ogImage={successCaseImages.evaChampion}
      structuredData={{
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Caso de Éxito — Eva Champion: Marca personal y visibilidad internacional',
        about: 'Marca personal, posicionamiento en LinkedIn y plan de contenidos internacional',
        author: { '@type': 'Organization', name: 'Hayas Marketing' },
        url: '/casos-exito/eva-champion',
        inLanguage: 'es'
      }}
      companyName="Eva Champion"
      subtitle="Marca personal y visibilidad internacional"
      badges={["Traducción", "Marca Personal", "LinkedIn"]}
      websiteUrl="https://www.linkedin.com/in/eva-champion-traductora/"
      featuredImage={successCaseImages.evaChampion}
      featuredImageAlt="Eva Champion - Traductora profesional especializada en francés, inglés y alemán"
      aboutCompany="Eva Champion es una traductora profesional especializada en francés-español, inglés y alemán, con amplia experiencia en traducción técnica y empresarial. Su objetivo era posicionarse como referente en su sector y ampliar su red de contactos profesionales a nivel internacional."
      challenge="A pesar de su experiencia y calidad profesional, Eva necesitaba mayor visibilidad en el mercado internacional. Su presencia digital era limitada y no reflejaba adecuadamente su expertise, lo que limitaba las oportunidades de negocio y colaboraciones profesionales."
      solutions={[
        {
          icon: User,
          title: 'Desarrollo de Marca Personal',
          description: 'Creación de una identidad profesional coherente que reflejara su especialización y experiencia en traducción técnica multiidioma.'
        },
        {
          icon: Linkedin,
          title: 'Estrategia de LinkedIn',
          description: 'Optimización completa del perfil, desarrollo de estrategia de contenidos y plan de networking dirigido a su audiencia objetivo.'
        },
        {
          icon: Globe,
          title: 'Plan de Contenidos Internacional',
          description: 'Creación de contenido de valor que posicionara su expertise técnica y generara engagement con profesionales de su sector.'
        }
      ]}
      results={[
        'Posicionamiento como referente en traducción técnica FR-ES',
        'Incremento significativo de contactos profesionales cualificados',
        'Mayor visibilidad en su sector de especialización',
        'Establecimiento de autoridad profesional en LinkedIn'
      ]}
      learnings="Una marca personal bien construida y una presencia estratégica en LinkedIn pueden transformar completamente la visibilidad profesional. La consistencia en el mensaje y la creación de contenido de valor son clave para establecer autoridad en sectores especializados como la traducción técnica."
      ctaTitle="¿Quieres desarrollar tu marca personal?"
      ctaDescription="Te ayudamos a construir una marca personal sólida y una estrategia de LinkedIn que impulse tu carrera profesional."
      ctaButtonText="Desarrollar mi marca personal"
      ctaButtonLink="/es/agendar-reunion"
    />
  );
};

export default CasoExitoEvaChampion;