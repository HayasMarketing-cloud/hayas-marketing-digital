import React from 'react';
import CaseStudyTemplate from '@/components/CaseStudyTemplate';
import { Languages, Globe, Linkedin, Target } from 'lucide-react';

const CasoExitoBelugaLinguistics: React.FC = () => {
  const caseStudyData = {
    // SEO and Meta
    pageTitle: 'Caso de Éxito Beluga Linguistics | CRM, SEO y LinkedIn',
    pageDescription: 'CRM HubSpot, estrategia SEO y LinkedIn para escalar una agencia de traducción con alcance internacional.',
    canonical: '/es/casos-exito/beluga-linguistics',
    ogImage: '/lovable-uploads/de93dd1b-7f99-4499-81a7-87a1ec7c9d5f.png',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Caso de Éxito — Beluga Linguistics: Tecnología y marketing para una agencia de traducción global',
      about: 'Implantación de CRM HubSpot, SEO internacional y presencia en LinkedIn',
      author: { '@type': 'Organization', name: 'Hayas Marketing' },
      url: '/casos-exito/beluga-linguistics',
    },

    // Header content
    companyName: 'Beluga Linguistics',
    subtitle: 'Tecnología y marketing para una agencia de traducción global: CRM, SEO y LinkedIn para escalar internacionalmente',
    badges: ['Traducción', 'CRM HubSpot', 'SEO', 'LinkedIn'],
    websiteUrl: 'https://belugalinguistics.com',
    featuredImage: '/lovable-uploads/de93dd1b-7f99-4499-81a7-87a1ec7c9d5f.png',
    featuredImageAlt: 'Beluga Linguistics - Agencia de traducción e interpretación internacional',

    // Content sections
    aboutCompany: 'Beluga Linguistics es una agencia de traducción e interpretación que trabaja con empresas de todo el mundo para ofrecer servicios lingüísticos de alta calidad en múltiples idiomas. Su propuesta combina precisión lingüística, especialización por sectores y un enfoque flexible y cercano.',
    challenge: 'Necesitaban optimizar la gestión de clientes y oportunidades, mejorar su visibilidad online y reforzar su presencia en LinkedIn para llegar a audiencias internacionales. El objetivo era consolidar su posición como proveedor de referencia en el sector de la traducción profesional.',
    solutions: [
      {
        icon: Languages,
        title: 'Implantación de CRM HubSpot',
        description: 'Configuración completa y personalizada para centralizar información de clientes, segmentar audiencias y automatizar flujos de trabajo.'
      },
      {
        icon: Globe,
        title: 'Estrategia y Posicionamiento SEO',
        description: 'Auditoría técnica, optimización de metadatos y estrategia de palabras clave orientada a mercados internacionales.'
      },
      {
        icon: Linkedin,
        title: 'Optimización de LinkedIn',
        description: 'Mejora del perfil corporativo, alineación visual con la marca y plan de publicaciones para reforzar autoridad.'
      },
      {
        icon: Target,
        title: 'Integración de Marketing',
        description: 'Coordinación entre SEO, LinkedIn y CRM para asegurar un flujo coherente de generación y maduración de leads.'
      }
    ],
    results: [
      'Gestión centralizada y automatizada de clientes internacionales',
      'Mejora significativa en el posicionamiento SEO internacional',
      'Incremento en la autoridad y networking en LinkedIn',
      'Flujo coherente de leads desde diferentes canales digitales'
    ],
    learnings: 'En agencias de servicios B2B con alcance internacional, la combinación de CRM, SEO y presencia activa en LinkedIn genera un ecosistema sólido para atraer, gestionar y fidelizar clientes en distintos mercados.',

    // CTA
    ctaTitle: '¿Quieres escalar tu agencia internacionalmente?',
    ctaDescription: 'Te ayudamos a implementar una estrategia integral de CRM, SEO y LinkedIn que impulse tu crecimiento internacional como lo hicimos con Beluga Linguistics.',
    ctaButtonText: 'Escalar mi agencia',
    ctaButtonLink: '/es/agendar-reunion',
    relatedSolutions: [
      { label: 'Implantación CRM', route: 'serviceCRMImplantation' },
      { label: 'SEO y Posicionamiento', route: 'serviceSEOPositioning' },
    ],
  };

  return <CaseStudyTemplate {...caseStudyData} />;
};

export default CasoExitoBelugaLinguistics;