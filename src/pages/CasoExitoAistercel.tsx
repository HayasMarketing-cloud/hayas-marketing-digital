import React from 'react';
import CaseStudyTemplate from '@/components/CaseStudyTemplate';
import { successCaseImages } from '@/data/successCaseImages';
import { Building2, Globe, Target, Wrench } from 'lucide-react';

const CasoExitoAistercel: React.FC = () => {
  const caseStudyData = {
    // SEO and Meta
    pageTitle: 'Caso de éxito Aistercel | CRM y rediseño web',
    pageDescription: 'Implantación de CRM HubSpot y rediseño web para Aistercel: presencia digital moderna y gestión comercial centralizada.',
    canonical: '/es/casos-exito/aistercel',
    ogImage: successCaseImages.aistercel,
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'CaseStudy',
      name: 'Caso de Éxito — Aistercel',
      description: 'Implantación de CRM HubSpot y rediseño web para Aistercel: presencia digital moderna y gestión comercial centralizada.',
      inLanguage: 'es',
      url: '/casos-exito/aistercel',
      publisher: {
        '@type': 'Organization',
        name: 'Hayas Marketing',
      },
      about: [
        { '@type': 'Thing', name: 'CRM HubSpot' },
        { '@type': 'Thing', name: 'Rediseño web' },
        { '@type': 'Thing', name: 'Experiencia de usuario (UX)' },
        { '@type': 'Organization', name: 'Aistercel' },
      ],
    },

    // Header content
    companyName: 'Aistercel',
    subtitle: 'Digitalizando la gestión y renovando la presencia online para una empresa de aislamiento industrial y mantenimiento',
    badges: ['Aislamiento Industrial', 'CRM HubSpot', 'Rediseño Web'],
    websiteUrl: 'https://aistercel.es',
    featuredImage: successCaseImages.aistercel,
    featuredImageAlt: 'Aistercel - Empresa especializada en aislamiento industrial y mantenimiento',

    // Content sections
    aboutCompany: 'Aistercel es una empresa especializada en aislamiento industrial, mantenimiento y reparación de instalaciones, que ofrece soluciones técnicas a medida para clientes de diversos sectores. Su experiencia y compromiso con la calidad les han convertido en un proveedor de referencia.',
    challenge: 'Necesitaban modernizar su página web para transmitir una imagen más actual y profesional, así como implantar un CRM que centralizara la información de clientes y mejorara el seguimiento comercial.',
    solutions: [
      {
        icon: Building2,
        title: 'Implantación de CRM HubSpot',
        description: 'Configuración personalizada para centralizar datos de clientes, oportunidades y proyectos, con flujos de trabajo para seguimiento de ofertas.'
      },
      {
        icon: Globe,
        title: 'Rediseño Web Completo',
        description: 'Creación de sitio web responsive y optimizado para conversión, con estética renovada y contenido claro sobre servicios técnicos.'
      },
      {
        icon: Target,
        title: 'Optimización de UX',
        description: 'Estructura de navegación intuitiva y jerarquía de contenidos que facilita el acceso a información relevante.'
      },
      {
        icon: Wrench,
        title: 'Refuerzo Visual',
        description: 'Integración de imágenes y elementos gráficos que reflejan experiencia en proyectos industriales y transmiten profesionalidad.'
      }
    ],
    results: [
      'Mejora en la gestión centralizada de clientes y proyectos',
      'Aumento en la generación de leads cualificados',
      'Reducción en tiempo de seguimiento comercial',
      'Imagen digital más profesional y actualizada'
    ],
    learnings: 'En empresas industriales, combinar un CRM robusto con una presencia digital moderna permite mejorar la eficiencia comercial y reforzar la confianza de los clientes.',

    // CTA
    ctaTitle: '¿Necesitas digitalizar tu empresa industrial?',
    ctaDescription: 'Te ayudamos a implementar CRM, optimizar tu web y reforzar tu estrategia digital para empresas del sector industrial.',
    ctaButtonText: 'Digitalizar mi empresa',
    ctaButtonLink: '/es/agendar-reunion',
    relatedSolutions: [
      { label: 'Implantación CRM', route: 'serviceCRMImplantation' },
      { label: 'Diseño Web', route: 'serviceWebDesign' },
    ],
  };

  return <CaseStudyTemplate {...caseStudyData} />;
};

export default CasoExitoAistercel;