import React from 'react';
import CaseStudyTemplate from '@/components/CaseStudyTemplate';
import { successCaseImages } from '@/data/successCaseImages';
import { Database, Users } from 'lucide-react';

const CasoExitoFormatoEducativo = (): React.JSX.Element => {
  return (
    <CaseStudyTemplate
      pageTitle="Caso de Éxito Formato Educativo | CRM Educativo"
      pageDescription="Implementación y administración de CRM para digitalizar la gestión educativa de Formato Educativo, mejorando el seguimiento y la conversión."
      canonical="/casos-exito/formato-educativo"
      ogImage={successCaseImages.formatoEducativo}
      structuredData={{
        '@context': 'https://schema.org',
        '@type': 'CaseStudy',
        name: 'Caso de Éxito — Formato Educativo: CRM que potencia tu gestión',
        description: 'Implementación y administración de CRM para digitalizar la gestión educativa de Formato Educativo, mejorando el seguimiento y la conversión.',
        url: '/casos-exito/formato-educativo',
        inLanguage: 'es',
        about: {
          '@type': 'Organization',
          name: 'Formato Educativo',
          url: 'https://formatoeducativo.com',
          sameAs: ['https://formatoeducativo.com'],
          areaServed: 'ES',
          industry: 'Educación y formación'
        },
        provider: {
          '@type': 'Organization',
          name: 'Hayas Marketing',
          url: 'https://hayas.marketing',
          sameAs: ['https://hayas.marketing/casos-exito/formato-educativo'],
          areaServed: 'ES',
          industry: 'Marketing digital y automatización'
        }
      }}
      companyName="Formato Educativo"
      subtitle="CRM que potencia tu gestión educativa"
      badges={["Plataforma Educativa", "CRM", "HubSpot"]}
      websiteUrl="https://formatoeducativo.com"
      featuredImage={successCaseImages.formatoEducativo}
      featuredImageAlt="Formato Educativo - Plataforma educativa digital"
      aboutCompany="Formato Educativo es una plataforma especializada en formación profesional y educación continua. Ofrecen cursos y programas formativos dirigidos a profesionales que buscan actualizar sus competencias y adquirir nuevas habilidades en un mercado laboral en constante evolución."
      challenge="La gestión de leads educativos se realizaba de forma manual y dispersa, lo que provocaba pérdida de oportunidades de conversión y dificultades en el seguimiento de estudiantes potenciales. Necesitaban una solución integral que centralizara toda la información y automatizara los procesos de nurturing y seguimiento de su audiencia educativa."
      solutions={[
        {
          icon: Database,
          title: 'Configuración de CRM HubSpot',
          description: 'Setup completo adaptado a procesos educativos con propiedades personalizadas, flujos de trabajo y embudos específicos para seguimiento de estudiantes.'
        },
        {
          icon: Users,
          title: 'Administración y Formación',
          description: 'Gestión continua del CRM, formación del equipo educativo y soporte técnico para asegurar la adopción y optimización del sistema.'
        }
      ]}
      results={[
        'Gestión centralizada de todos los leads educativos',
        'Automatización completa del proceso de seguimiento',
        'Mejora en las tasas de conversión de leads a estudiantes',
        'Reducción significativa en tiempo de gestión administrativa'
      ]}
      learnings="En el sector educativo, la gestión adecuada de leads es crucial para maximizar las conversiones. Un CRM bien implementado no solo mejora la eficiencia operativa, sino que también permite personalizar la comunicación según el perfil y necesidades específicas de cada estudiante potencial."
      ctaTitle="¿Necesitas digitalizar tu gestión educativa?"
      ctaDescription="Te ayudamos a implementar un CRM que transforme la manera en que gestionas tus estudiantes y procesos educativos."
      ctaButtonText="Solicitar consulta gratuita"
      ctaButtonLink="/agendar-reunion"
    />
  );
};

export default CasoExitoFormatoEducativo;