import React from 'react';
import CaseStudyTemplate from '@/components/CaseStudyTemplate';
import { Shield, Users, TrendingUp, Target } from 'lucide-react';

const CasoExitoAspAsepsia: React.FC = () => {
  const caseStudyData = {
    // SEO and Meta
    pageTitle: 'Caso de Éxito — ASP ASEPSIA: CRM y automatización para optimizar la gestión comercial',
    pageDescription: 'Implantación de HubSpot y consultoría continua para una empresa de soluciones de higiene y desinfección',
    canonical: '/casos-exito/asp-asepsia',
    ogImage: '/lovable-uploads/6cf96609-e73c-4a3b-8939-bdc4e1330033.png',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'CaseStudy',
      headline: 'Caso de Éxito — ASP ASEPSIA: CRM y automatización para optimizar la gestión comercial',
      about: 'Implantación de HubSpot y consultoría continua para una empresa de soluciones de higiene y desinfección',
      author: { '@type': 'Organization', name: 'Hayas Marketing' },
      url: '/casos-exito/asp-asepsia',
    },

    // Header content
    companyName: 'ASP ASEPSIA',
    subtitle: 'CRM y automatización para optimizar la gestión comercial de una empresa de soluciones de higiene y desinfección',
    badges: ['Higiene y Desinfección', 'CRM HubSpot', 'Automatización'],
    websiteUrl: 'https://www.aspasepsia.com/',
    featuredImage: '/lovable-uploads/6cf96609-e73c-4a3b-8939-bdc4e1330033.png',
    featuredImageAlt: 'ASP ASEPSIA - Empresa especializada en higiene, desinfección y control de plagas',

    // Content sections
    aboutCompany: 'ASP ASEPSIA es una empresa especializada en soluciones de higiene, desinfección y control de plagas, que trabaja con clientes de sectores como la sanidad, la industria alimentaria y el sector hotelero. Su enfoque combina innovación técnica con un servicio adaptado a las necesidades de cada cliente.',
    challenge: 'Necesitaban centralizar la información comercial, automatizar procesos de ventas y mejorar el seguimiento de oportunidades para aumentar la eficiencia y la conversión. Además, querían asegurar que su equipo comercial estuviera alineado y tuviera visibilidad total del ciclo de ventas.',
    solutions: [
      {
        icon: Shield,
        title: 'Implantación de CRM HubSpot',
        description: 'Configuración completa y personalizada para la gestión de leads, oportunidades y clientes en el sector de higiene y desinfección.'
      },
      {
        icon: TrendingUp,
        title: 'Automatización de Procesos',
        description: 'Flujos automáticos para seguimiento de leads, asignación de tareas y envío de comunicaciones personalizadas.'
      },
      {
        icon: Users,
        title: 'Consultoría Continua',
        description: 'Acompañamiento estratégico para optimizar el uso del CRM, implementar mejoras y garantizar la adaptación al negocio.'
      },
      {
        icon: Target,
        title: 'Sistema de Automatización',
        description: 'Diseño de workflows para clasificar, priorizar y dar seguimiento a oportunidades en tiempo real.'
      }
    ],
    results: [
      'Centralización y visibilidad de información en tiempo real',
      'Automatización de tareas repetitivas, ganando tiempo para labores de mayor valor',
      'Mejor seguimiento y conversión de oportunidades comerciales',
      'Reporting en tiempo real para tomar mejores decisiones',
      'Mejor experiencia y satisfacción del cliente con atención proactiva',
      'Adaptabilidad y crecimiento escalable del sistema',
      'Integraciones exitosas con herramientas de trabajo colaborativo'
    ],
    learnings: 'En empresas con procesos comerciales complejos, un CRM bien implementado y acompañado de consultoría continua puede transformar la eficiencia y la colaboración interna.',

    // CTA
    ctaTitle: '¿Necesitas optimizar tu gestión comercial?',
    ctaDescription: 'Te ayudamos a implementar un CRM que centralice tu información y automatice tus procesos comerciales como lo hicimos con ASP ASEPSIA.',
    ctaButtonText: 'Optimizar mi gestión comercial',
    ctaButtonLink: '/agendar-reunion'
  };

  return <CaseStudyTemplate {...caseStudyData} />;
};

export default CasoExitoAspAsepsia;