import React from 'react';
import CaseStudyTemplateEN from '@/components/CaseStudyTemplateEN';
import { Shield, Users, TrendingUp, Target } from 'lucide-react';

const CaseStudyASPAsepsia: React.FC = () => {
  const caseStudyData = {
    pageTitle: 'Case Study — ASP ASEPSIA: CRM and Automation to Optimize Commercial Management',
    pageDescription: 'HubSpot implementation and ongoing consulting for a hygiene and disinfection solutions company',
    canonical: '/en/case-studies/asp-asepsia',
    ogImage: '/lovable-uploads/6cf96609-e73c-4a3b-8939-bdc4e1330033.png',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'CaseStudy',
      headline: 'Case Study — ASP ASEPSIA: CRM and Automation to Optimize Commercial Management',
      about: 'HubSpot implementation and ongoing consulting for a hygiene and disinfection solutions company',
      author: { '@type': 'Organization', name: 'Hayas Marketing' },
      url: '/en/case-studies/asp-asepsia',
      inLanguage: 'en',
    },
    companyName: 'ASP ASEPSIA',
    subtitle: 'CRM and automation to optimize commercial management for a hygiene and disinfection solutions company',
    badges: ['Hygiene and Disinfection', 'HubSpot CRM', 'Automation'],
    websiteUrl: 'https://www.aspasepsia.com/',
    featuredImage: '/lovable-uploads/6cf96609-e73c-4a3b-8939-bdc4e1330033.png',
    featuredImageAlt: 'ASP ASEPSIA - Company specialized in hygiene, disinfection and pest control',
    aboutCompany: 'ASP ASEPSIA is a company specialized in hygiene, disinfection, and pest control solutions, working with clients in sectors such as healthcare, food industry, and hospitality. Their approach combines technical innovation with personalized service adapted to each client\'s needs.',
    challenge: 'They needed to centralize commercial information, automate sales processes, and improve opportunity tracking to increase efficiency and conversion. Additionally, they wanted to ensure their sales team was aligned and had full visibility of the sales cycle.',
    solutions: [
      {
        icon: Shield,
        title: 'HubSpot CRM Implementation',
        description: 'Complete and customized configuration for lead, opportunity, and customer management in the hygiene and disinfection sector.'
      },
      {
        icon: TrendingUp,
        title: 'Process Automation',
        description: 'Automatic workflows for lead follow-up, task assignment, and personalized communication delivery.'
      },
      {
        icon: Users,
        title: 'Ongoing Consulting',
        description: 'Strategic support to optimize CRM usage, implement improvements, and ensure business adaptation.'
      },
      {
        icon: Target,
        title: 'Automation System',
        description: 'Workflow design to classify, prioritize, and follow up on opportunities in real time.'
      }
    ],
    results: [
      'Real-time centralization and visibility of information',
      'Automation of repetitive tasks, freeing time for higher-value work',
      'Better tracking and conversion of commercial opportunities',
      'Real-time reporting for better decision-making',
      'Improved customer experience and satisfaction with proactive service',
      'Scalable system adaptability and growth',
      'Successful integrations with collaborative work tools'
    ],
    learnings: 'In companies with complex commercial processes, a well-implemented CRM accompanied by ongoing consulting can transform internal efficiency and collaboration.',
    ctaTitle: 'Need to optimize your commercial management?',
    ctaDescription: 'We help you implement a CRM that centralizes your information and automates your commercial processes as we did with ASP ASEPSIA.',
    ctaButtonText: 'Optimize my commercial management',
    ctaButtonLink: '/en/schedule-meeting'
  };

  return <CaseStudyTemplateEN {...caseStudyData} />;
};

export default CaseStudyASPAsepsia;
