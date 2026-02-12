import React from 'react';
import CaseStudyTemplateEN from '@/components/CaseStudyTemplateEN';
import { successCaseImages } from '@/data/successCaseImages';
import { Globe, Target, Search, Zap } from 'lucide-react';

const CaseStudyPerisElectricidad = () => {
  return (
    <CaseStudyTemplateEN
      pageTitle="Case Study: Peris Electricidad | Web, CRM and SEO"
      pageDescription="Web design, HubSpot CRM and SEO strategy for an electrical company with a vision for the future."
      canonical="/en/case-studies/peris-electricidad"
      ogImage={successCaseImages.perisElectricidad}
      structuredData={{
        "@context": "https://schema.org",
        "@type": "CaseStudy",
        headline: "Case Study — Peris Electricidad: Renewed Energy for Digital Growth",
        about: "Responsive web design, HubSpot CRM implementation, SEO strategy and marketing-sales integration",
        url: '/en/case-studies/peris-electricidad',
        inLanguage: "en",
        publisher: { "@type": "Organization", name: "Hayas Marketing" }
      }}
      companyName="Peris Electricidad"
      subtitle="Renewed energy for digital growth: web design, CRM and SEO strategy for an electrical company with a vision for the future"
      badges={["Electrical Installations", "HubSpot CRM", "SEO"]}
      websiteUrl="#"
      featuredImage={successCaseImages.perisElectricidad}
      featuredImageAlt="Peris Electricidad - Electrical installations and energy efficiency"
      aboutCompany="Peris Electricidad is a company specialized in electrical installations, maintenance, and energy efficiency solutions. Their team combines technical experience with personalized service adapted to each client's needs."
      challenge="They wanted to modernize their digital presence, centralize customer management, and improve their search engine visibility to attract more commercial opportunities."
      solutions={[
        {
          icon: Globe,
          title: 'Custom Web Design',
          description: 'Creation of a responsive and visually attractive site that clearly presents their services and projects, conveying professionalism and trust.'
        },
        {
          icon: Target,
          title: 'HubSpot CRM Implementation',
          description: 'Configuration adapted to their processes for managing contacts, opportunities, and project tracking more efficiently.'
        },
        {
          icon: Search,
          title: 'SEO Strategy and Positioning',
          description: 'Technical audit and website optimization, along with a keyword strategy to increase visibility and attract qualified traffic.'
        },
        {
          icon: Zap,
          title: 'Marketing and Sales Integration',
          description: 'Coordination between digital strategy and CRM tools to optimize visitor-to-customer conversion.'
        }
      ]}
      results={[
        'Complete modernization of digital presence',
        'Improved centralized customer management',
        'Significant increase in online visibility',
        'Optimization of the conversion process'
      ]}
      learnings="In technical service companies, combining an optimized web design with a functional CRM and an effective SEO strategy multiplies the ability to capture and retain customers."
      ctaTitle="Want this approach for your company?"
      ctaDescription="We help you modernize your digital presence and optimize your commercial processes as we did with Peris Electricidad."
      ctaButtonText="Let's talk"
      ctaButtonLink="/en/schedule-meeting"
      relatedSolutions={[
        { label: 'Web Design', route: 'serviceWebDesign' },
        { label: 'CRM Implementation', route: 'serviceCRMImplantation' },
        { label: 'SEO Positioning', route: 'serviceSEOPositioning' },
      ]}
    />
  );
};

export default CaseStudyPerisElectricidad;
