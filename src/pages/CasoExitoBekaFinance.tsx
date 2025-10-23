import React from 'react';
import CaseStudyTemplate from '@/components/CaseStudyTemplate';
import { Calculator, Palette, FileText, TrendingUp } from 'lucide-react';

const CasoExitoBekaFinance: React.FC = () => {
  const caseStudyData = {
    // SEO and Meta
    pageTitle: 'Caso de éxito Beka Finance | Naming e identidad visual',
    pageDescription: 'Naming e identidad visual para proyectar confianza y liderazgo en el sector financiero.',
    canonical: '/es/casos-exito/beka-finance',
    ogImage: '/lovable-uploads/cb5e2b7b-ad42-4a68-b3e7-bf2f51e4ce45.png',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'CaseStudy',
      headline: 'Caso de Éxito — Beka Finance: Una marca sólida para un referente financiero',
      about: 'Creación de naming, identidad visual corporativa, aplicaciones de marca y enfoque estratégico',
      url: '/casos-exito/beka-finance',
      inLanguage: 'es',
      publisher: { '@type': 'Organization', name: 'Hayas Marketing' },
    },

    // Header content
    companyName: 'Beka Finance',
    subtitle: 'Una marca sólida para un referente financiero: naming e identidad visual para proyectar confianza y liderazgo',
    badges: ['Servicios Financieros', 'Naming', 'Identidad Visual'],
    websiteUrl: 'https://www.bekafinance.com/',
    featuredImage: '/lovable-uploads/cb5e2b7b-ad42-4a68-b3e7-bf2f51e4ce45.png',
    featuredImageAlt: 'Beka Finance - Firma independiente especializada en banca de inversión y gestión de activos',

    // Content sections
    aboutCompany: 'Beka Finance es una firma independiente especializada en banca de inversión, gestión de activos y asesoramiento financiero. Su objetivo es ofrecer soluciones personalizadas y de alto valor añadido a clientes institucionales, corporativos y familiares.',
    challenge: 'Necesitaban una marca que reflejara solidez, credibilidad y proyección internacional, capaz de posicionarse como un actor relevante en un sector altamente competitivo y regulado.',
    solutions: [
      {
        icon: Calculator,
        title: 'Creación del Naming',
        description: 'Desarrollo de un nombre distintivo, fácil de recordar y con capacidad de transmitir confianza, profesionalidad y alcance global.'
      },
      {
        icon: Palette,
        title: 'Diseño de Identidad Visual',
        description: 'Sistema visual coherente con logotipo, paleta, tipografía y estilo gráfico para proyectar una entidad moderna y sólida.'
      },
      {
        icon: FileText,
        title: 'Aplicaciones de Marca',
        description: 'Diseño de plantillas y materiales corporativos para garantizar consistencia en todos los puntos de contacto.'
      },
      {
        icon: TrendingUp,
        title: 'Enfoque Estratégico',
        description: 'Alineación de la identidad con los valores de la compañía y su propuesta de valor para el mercado financiero.'
      }
    ],
    results: [
      'Marca distintiva que proyecta solidez y confianza',
      'Identidad visual coherente y profesional',
      'Sistema de aplicaciones corporativas completo',
      'Posicionamiento estratégico en el sector financiero'
    ],
    learnings: 'En el sector financiero, una identidad visual bien construida y un naming potente son claves para transmitir confianza y diferenciarse en un entorno exigente y globalizado.',

    // CTA
    ctaTitle: '¿Quieres una marca sólida para tu sector?',
    ctaDescription: 'Te ayudamos a crear una identidad de marca que proyecte confianza y liderazgo como lo hicimos con Beka Finance.',
    ctaButtonText: 'Crear mi marca sólida',
    ctaButtonLink: '/es/agendar-reunion'
  };

  return <CaseStudyTemplate {...caseStudyData} />;
};

export default CasoExitoBekaFinance;