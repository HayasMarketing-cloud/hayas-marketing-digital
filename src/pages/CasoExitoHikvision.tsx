import React from 'react';
import CaseStudyTemplate from '@/components/CaseStudyTemplate';
import { successCaseImages } from '@/data/successCaseImages';
import { Globe, Target, Users, Settings } from 'lucide-react';

const CasoExitoHikvision: React.FC = () => {
  return (
    <CaseStudyTemplate
      pageTitle="Caso de Éxito Hikvision | Landing B2B para Smart Cities"
      pageDescription="Landing page optimizada para inscripciones en evento de Smart Cities: diseño, copy y formulario de registro."
      canonical="/es/casos-exito"
      ogImage={successCaseImages.hikvision}
      structuredData={{
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Caso de Éxito — Hikvision: Captando asistentes para un evento de Smart Cities',
        about: 'Landing page B2B optimizada para registro de participantes en evento tecnológico',
        author: { '@type': 'Organization', name: 'Hayas Marketing' },
        url: '/es/casos-exito/hikvision',
      }}
      companyName="Hikvision"
      subtitle="Captando asistentes para un evento de Smart Cities"
      badges={["Smart Cities", "Landing Page", "B2B"]}
      websiteUrl="https://www.hikvision.com/es/"
      featuredImage={successCaseImages.hikvision}
      featuredImageAlt="Hikvision - Líder mundial en soluciones de seguridad e inteligencia artificial"
      aboutCompany="Hikvision es un líder mundial en soluciones y productos de seguridad, inteligencia artificial y tecnologías de la información, con presencia global en múltiples sectores y un compromiso constante con la innovación en el ámbito de las Smart Cities."
      challenge="Necesitaban una landing page específica para la inscripción a un evento de Smart Cities, capaz de comunicar el valor de la propuesta, transmitir profesionalidad y facilitar el registro de participantes de forma ágil, dirigida a profesionales y empresas del sector tecnológico."
      solutions={[
        {
          icon: Globe,
          title: 'Diseño y Desarrollo de Landing',
          description: 'Página clara, responsive y alineada con su identidad, optimizada para la conversión y la captación de leads.'
        },
        {
          icon: Target,
          title: 'Copy y Mensajería Persuasiva',
          description: 'Textos centrados en beneficios del evento para profesionales y empresas del sector Smart Cities.'
        },
        {
          icon: Users,
          title: 'Formulario de Registro Optimizado',
          description: 'Campos clave y experiencia fluida para maximizar altas y facilitar el proceso de inscripción.'
        },
        {
          icon: Settings,
          title: 'Elementos Visuales de Impacto',
          description: 'Imágenes temáticas de Smart Cities para reforzar el mensaje y el interés inmediato.'
        }
      ]}
      results={[
        'Landing page optimizada para conversión',
        'Incremento significativo en las inscripciones al evento',
        'Mejora en la calidad de los leads generados',
        'Comunicación efectiva del valor del evento'
      ]}
      learnings="En eventos B2B, una landing page optimizada puede marcar la diferencia en la conversión de visitantes en participantes cuando diseño y mensaje se alinean perfectamente con el público objetivo y sus necesidades específicas."
      ctaTitle="¿Necesitas una landing que convierta?"
      ctaDescription="Creamos landing pages optimizadas que maximizan las conversiones y captan leads cualificados para tus eventos y campañas."
      ctaButtonText="Crear mi landing page"
      ctaButtonLink="/es/agendar-reunion"
      relatedSolutions={[
        { label: 'Diseño Web', route: 'serviceWebDesign' },
        { label: 'Publicidad Google Ads', route: 'serviceGoogleAds' },
      ]}
    />
  );
};

export default CasoExitoHikvision;