import React from 'react';
import CaseStudyTemplateEN from '@/components/CaseStudyTemplateEN';
import { successCaseImages } from '@/data/successCaseImages';
import { Target, Zap, BarChart3, Users, Megaphone, Mail } from 'lucide-react';

const CaseStudyAsendia = () => {
  return (
    <CaseStudyTemplateEN
      pageTitle="Case Study: Asendia | CRM and B2B Automation"
      pageDescription="We implemented CRM and automation for Asendia, optimizing their B2B commercial strategy with +129% lead increase and -60% sales cycle reduction."
      canonical="/en/case-studies/asendia"
      ogImage={successCaseImages.asendia}
      structuredData={{
        "@context": "https://schema.org",
        "@type": "CaseStudy",
        headline: "Case Study: Asendia | CRM and B2B Automation",
        about: "CRM and automation for cross-border e-commerce logistics solutions",
        url: "/en/case-studies/asendia",
        inLanguage: "en",
        publisher: { "@type": "Organization", name: "Hayas Marketing" },
      }}
      companyName="Asendia"
      subtitle="Logistics solutions that empower global e-commerce"
      badges={["Cross-border E-commerce", "CRM", "Automation"]}
      websiteUrl="https://www.asendia.com/"
      featuredImage={successCaseImages.asendia}
      featuredImageAlt="Asendia - Logistics solutions for cross-border e-commerce"
      aboutCompany="Asendia is a global leader in cross-border e-commerce logistics solutions, empowering e-commerce managers to expand globally with specialized services for international shipping management."
      challenge="As a logistics solutions provider for e-commerce, Asendia needed to optimize their B2B commercial strategy to attract and retain e-commerce managers. Manual lead management and lack of automation limited their growth and ability to demonstrate value to potential clients."
      solutions={[
        {
          icon: Target,
          title: 'CRM and CMS Support for 15 Countries',
          description: 'Support for all Asendia teams across HubSpot CMS and CRM platforms.'
        },
        {
          icon: Zap,
          title: 'Marketing Automation',
          description: 'Design of lead nurturing workflows for marketing campaigns.'
        },
        {
          icon: BarChart3,
          title: 'Automated Reporting',
          description: 'Dashboards with key metrics for general and campaign-specific performance.'
        },
        {
          icon: Users,
          title: 'Website Maintenance',
          description: 'Content creation and localization in 7 languages for 15 business units.'
        },
        {
          icon: Megaphone,
          title: 'Inbound Marketing Campaigns',
          description: 'We create and localize new Inbound Marketing campaigns for customer acquisition.'
        },
        {
          icon: Mail,
          title: 'Direct Marketing',
          description: 'We design creative Direct Marketing campaigns as well as merchandising design and production.'
        }
      ]}
      results={[
        'Complete automation of B2B commercial pipeline',
        'Lead scoring system for e-commerce managers',
        'Automated onboarding for new clients',
        'Automatic ROI reports to demonstrate value',
        'Personalized follow-up by e-commerce vertical',
        'Increase in lead-to-customer conversion',
        'Significant reduction in B2B sales cycle'
      ]}
      testimonial={{
        quote: "Hayas Marketing completely transformed our commercial strategy. The CRM and automations have allowed us to scale our B2B operations efficiently, significantly improving our ability to attract and retain e-commerce managers. The results have exceeded our expectations.",
        author: "María González",
        position: "Business Development Manager",
        company: "Asendia Spain"
      }}
      ctaTitle="Ready to optimize your B2B commercial strategy?"
      ctaDescription="Get the same results as Asendia. Schedule a free consultation and discover how we can help you attract and retain e-commerce managers with a CRM and automation designed for your industry."
      ctaButtonText="Schedule your free consultation"
      ctaButtonLink="/en/schedule-meeting"
      relatedSolutions={[
        { label: 'CRM Implementation', route: 'serviceCRMImplantation' },
        { label: 'Sales Automation', route: 'serviceSalesAutomation' },
        { label: 'Direct Marketing', route: 'serviceDirectMarketing' },
      ]}
    />
  );
};

export default CaseStudyAsendia;
