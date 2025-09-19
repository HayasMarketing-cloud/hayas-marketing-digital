import React from 'react';
import CaseStudyTemplate from '@/components/CaseStudyTemplate';
import { successCaseImages } from '@/data/successCaseImages';
import { Award, Stethoscope, Heart } from 'lucide-react';

const CasoExitoJointsUp = () => {
  return (
    <CaseStudyTemplate
      pageTitle="Caso de Éxito: Joints'Up | Branding Médico Especializado"
      pageDescription="Creando una marca médica de confianza para cirujanos traumatólogos especializados en cirugía articular."
      canonical="/casos-exito/jointsup"
      ogImage={successCaseImages.jointsUp}
      structuredData={{
        '@context': 'https://schema.org',
        '@type': 'CaseStudy',
        headline: 'Caso de Éxito: Joints\'Up | Branding Médico Especializado',
        about: 'Naming estratégico, branding médico y diseño web para cirujanos traumatólogos',
        url: '/casos-exito/jointsup',
        inLanguage: 'es',
        publisher: { '@type': 'Organization', name: 'Hayas Marketing' }
      }}
      companyName="Joints'Up"
      subtitle="Excelencia Médica Especializada"
      badges={["Cirugía Traumatológica", "Especialistas Médicos", "Branding Médico"]}
      websiteUrl="https://jointsup.es"
      featuredImage={successCaseImages.jointsUp}
      featuredImageAlt="Joints'Up - Cirugía Traumatológica Especializada"
      aboutCompany="Grupo de cirujanos traumatólogos altamente especializados en cirugía de hombro, rodilla, codo, manos y dedos, espalda y cadera. Su práctica médica se centra en técnicas avanzadas y tratamientos innovadores para problemas articulares y óseos complejos, atendiendo tanto a pacientes deportistas como población general."
      challenge="Necesitaban crear una marca médica que transmitiera autoridad científica y generara confianza inmediata en pacientes que requieren cirugías complejas. El desafío era comunicar su alta especialización técnica de manera accesible, diferenciándose en un sector donde la credibilidad y la reputación son fundamentales."
      solutions={[
        {
          icon: Award,
          title: 'Naming Estratégico',
          description: 'Desarrollo del nombre \'Joints\'Up\' que comunica especialización articular y mejora ascendente.'
        },
        {
          icon: Stethoscope,
          title: 'Branding Médico',
          description: 'Identidad visual que equilibra profesionalidad científica con accesibilidad humana.'
        },
        {
          icon: Heart,
          title: 'Diseño Web Médico',
          description: 'Plataforma digital que genera confianza y facilita la toma de decisiones del paciente.'
        }
      ]}
      results={[
        'Mensaje de marca claro y diferenciador',
        'Nuevo canal de comunicación con pacientes',
        'Posicionamiento como referentes médicos',
        'Incremento en la confianza de pacientes y colegas'
      ]}
      learnings="Este proyecto nos enseñó la complejidad del branding médico especializado. Descubrimos que en el sector sanitario, la marca debe equilibrar autoridad científica con calidez humana, comunicando competencia técnica sin generar distancia emocional. El naming y la identidad visual se convierten en herramientas cruciales para generar confianza instantánea."
      ctaTitle="¿Tu práctica médica necesita una marca de confianza?"
      ctaDescription="Creamos identidades médicas que transmiten autoridad profesional y generan confianza inmediata en pacientes. Tu especialización merece una marca a su altura."
      ctaButtonText="Crear mi Marca Médica"
      ctaButtonLink="/es/agendar-reunion"
    />
  );
};

export default CasoExitoJointsUp;