import React from 'react';
import CaseStudyTemplateEN from '@/components/CaseStudyTemplateEN';
import { Calculator, Palette, FileText, TrendingUp } from 'lucide-react';

const CaseStudyBekaFinance: React.FC = () => {
  const caseStudyData = {
    pageTitle: 'Case Study: Beka Finance | Naming and Visual Identity',
    pageDescription: 'Naming and visual identity to project trust and leadership in the financial sector.',
    canonical: '/en/case-studies/beka-finance',
    ogImage: '/lovable-uploads/cb5e2b7b-ad42-4a68-b3e7-bf2f51e4ce45.png',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'CaseStudy',
      headline: 'Case Study — Beka Finance: A Solid Brand for a Financial Reference',
      about: 'Creation of naming, corporate visual identity, brand applications and strategic focus',
      url: '/en/case-studies/beka-finance',
      inLanguage: 'en',
      publisher: { '@type': 'Organization', name: 'Hayas Marketing' },
    },
    companyName: 'Beka Finance',
    subtitle: 'A solid brand for a financial reference: naming and visual identity to project trust and leadership',
    badges: ['Financial Services', 'Naming', 'Visual Identity'],
    websiteUrl: 'https://www.bekafinance.com/',
    featuredImage: '/lovable-uploads/cb5e2b7b-ad42-4a68-b3e7-bf2f51e4ce45.png',
    featuredImageAlt: 'Beka Finance - Independent firm specialized in investment banking and asset management',
    aboutCompany: 'Beka Finance is an independent firm specialized in investment banking, asset management, and financial advisory. Their goal is to offer personalized, high value-added solutions to institutional, corporate, and family clients.',
    challenge: 'They needed a brand that reflected solidity, credibility, and international projection, capable of positioning itself as a relevant player in a highly competitive and regulated sector.',
    solutions: [
      {
        icon: Calculator,
        title: 'Naming Creation',
        description: 'Development of a distinctive name, easy to remember and capable of conveying trust, professionalism, and global reach.'
      },
      {
        icon: Palette,
        title: 'Visual Identity Design',
        description: 'Coherent visual system with logo, palette, typography, and graphic style to project a modern and solid entity.'
      },
      {
        icon: FileText,
        title: 'Brand Applications',
        description: 'Design of templates and corporate materials to ensure consistency at all touchpoints.'
      },
      {
        icon: TrendingUp,
        title: 'Strategic Focus',
        description: 'Alignment of identity with company values and value proposition for the financial market.'
      }
    ],
    results: [
      'Distinctive brand that projects solidity and trust',
      'Coherent and professional visual identity',
      'Complete corporate applications system',
      'Strategic positioning in the financial sector'
    ],
    learnings: 'In the financial sector, a well-built visual identity and a powerful naming are key to conveying trust and differentiating in a demanding and globalized environment.',
    ctaTitle: 'Want a solid brand for your sector?',
    ctaDescription: 'We help you create a brand identity that projects trust and leadership as we did with Beka Finance.',
    ctaButtonText: 'Create my solid brand',
    ctaButtonLink: '/en/schedule-meeting'
  };

  return <CaseStudyTemplateEN {...caseStudyData} />;
};

export default CaseStudyBekaFinance;
