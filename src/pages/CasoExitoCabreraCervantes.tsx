import React from 'react';
import CaseStudyTemplate from '@/components/CaseStudyTemplate';
import { successCaseImages } from '@/data/successCaseImages';
import { FileText, Users, Globe } from 'lucide-react';

const CasoExitoCabreraCervantes = () => {
  return (
    <CaseStudyTemplate
      pageTitle="Caso de Éxito: Cabrera Cervantes Asesoría - Web Profesional en WordPress"
      pageDescription="Conoce cómo transformamos la presencia digital de Cabrera Cervantes Asesoría con un diseño web profesional y moderno."
      canonical="/casos-exito/cabrera-cervantes"
      ogImage={successCaseImages.cabreraCervantes}
      structuredData={{
        '@context': 'https://schema.org',
        '@type': 'CaseStudy',
        headline: 'Caso de Éxito: Cabrera Cervantes Asesoría - Web Profesional en WordPress',
        about: 'Diseño web profesional para asesoría jurídica y contable',
        url: '/casos-exito/cabrera-cervantes',
        inLanguage: 'es',
        publisher: { '@type': 'Organization', name: 'Hayas Marketing' }
      }}
      companyName="Cabrera Cervantes Asesoría"
      subtitle="Diseño web profesional para asesoría jurídica y contable"
      badges={["Legal", "Servicios Profesionales", "WordPress"]}
      websiteUrl="https://www.cabreracervantes.com"
      featuredImage={successCaseImages.cabreraCervantes}
      featuredImageAlt="Cabrera Cervantes Asesoría - Despacho jurídico y contable profesional"
      aboutCompany="Cabrera Cervantes Asesoría es un despacho especializado en asesoría jurídica y contable, con amplia experiencia en áreas como Derecho Civil, Derecho Administrativo y Derecho de Empresa. Entre sus servicios destacan la gestión de testamentos, herencias, contratos, así como la contabilidad y el asesoramiento integral a empresas."
      challenge="Necesitaba un sitio web moderno y profesional que reflejara su trayectoria y seriedad en el ámbito jurídico y contable. Era fundamental organizar de forma clara sus servicios y transmitir confianza y cercanía a través de un diseño sobrio y elegante, además de disponer de un espacio digital escalable."
      solutions={[
        {
          icon: Globe,
          title: 'Diseño Web en WordPress',
          description: 'Creación de sitio responsive, profesional y alineado con la identidad de la asesoría.'
        },
        {
          icon: FileText,
          title: 'Estructura Organizacional',
          description: 'Estructuración clara de secciones: derecho civil, administrativo, empresarial y contabilidad.'
        },
        {
          icon: Users,
          title: 'Experiencia de Usuario',
          description: 'Navegación sencilla con formularios optimizados para captar consultas de clientes.'
        }
      ]}
      results={[
        'Sitio web moderno y profesional en WordPress',
        'Estructuración clara de servicios jurídicos y contables',
        'Diseño visual sobrio y elegante adaptado al sector legal',
        'Optimización para SEO básico y futura ampliación'
      ]}
      learnings="En el sector legal, la presencia digital debe transmitir confianza y profesionalidad desde el primer contacto. Un diseño web sobrio, bien estructurado y con navegación intuitiva se convierte en una herramienta clave para diferenciarse en un mercado competitivo y facilitar la captación de nuevos clientes."
      ctaTitle="¿Necesitas una web profesional para tu despacho?"
      ctaDescription="Creamos presencias digitales que transmiten confianza y profesionalidad, adaptadas específicamente al sector legal y de servicios profesionales."
      ctaButtonText="Solicitar consulta gratuita"
      ctaButtonLink="/agendar-reunion"
    />
  );
};

export default CasoExitoCabreraCervantes;