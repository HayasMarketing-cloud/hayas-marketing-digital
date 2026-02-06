import React from 'react';
import CaseStudyTemplateEN from '@/components/CaseStudyTemplateEN';
import { successCaseImages } from '@/data/successCaseImages';
import { Target, Zap, BarChart3, GraduationCap } from 'lucide-react';

const CaseStudyQuanticBI: React.FC = () => {
  return (
    <CaseStudyTemplateEN
      pageTitle="Case Study: QuanticBI | CRM for Data Consulting"
      pageDescription="HubSpot CRM implementation and automations for QuanticBI: centralized commercial management and real-time visibility."
      canonical="/en/case-studies/quanticbi"
      ogImage={successCaseImages.quanticBI}
      structuredData={{
        "@context": "https://schema.org",
        "@type": "CaseStudy",
        headline: "Case Study — QuanticBI: Business Intelligence with Optimized Commercial Management",
        about: "HubSpot CRM implementation, process automation and reporting for data consulting",
        url: '/en/case-studies/quanticbi',
        inLanguage: "en",
        publisher: { "@type": "Organization", name: "Hayas Marketing" }
      }}
      companyName="QuanticBI"
      subtitle="Business intelligence with optimized commercial management: CRM implementation to enhance efficiency in a data consulting firm"
      badges={["Business Intelligence", "HubSpot CRM", "Consulting"]}
      websiteUrl="https://quanticbi.com/"
      featuredImage={successCaseImages.quanticBI}
      featuredImageAlt="QuanticBI - Consulting specialized in Business Intelligence and data analysis"
      aboutCompany="QuanticBI is a consulting firm specialized in business intelligence solutions and data analysis, helping companies transform information into strategic decisions. Their team combines technical expertise with deep business knowledge to generate value for their clients."
      challenge="They needed to centralize customer and opportunity management to have a global view of their projects and improve coordination between commercial and technical teams."
      solutions={[
        {
          icon: Target,
          title: 'HubSpot CRM Implementation',
          description: 'Configuration adapted to their internal processes to unify contact, opportunity, and project information on a single platform.'
        },
        {
          icon: Zap,
          title: 'Process Automation',
          description: 'Creation of workflows for lead tracking, communication delivery, and sales cycle phase control.'
        },
        {
          icon: BarChart3,
          title: 'Real-Time Visibility',
          description: 'Implementation of dashboards and reports that allow analysis of opportunity evolution and commercial effectiveness.'
        },
        {
          icon: GraduationCap,
          title: 'Team Training',
          description: 'Training to ensure complete CRM adoption and maximize tool performance.'
        }
      ]}
      results={[
        'Effective centralization of commercial management',
        'Improved coordination between teams',
        'Greater visibility of opportunities and projects',
        'Optimization in strategic decision-making'
      ]}
      learnings="In data consulting firms, having a well-implemented CRM not only improves internal organization but also allows a clear view of opportunities and favors strategic decision-making."
      ctaTitle="Visit QuanticBI"
      ctaDescription="Discover their Business Intelligence and data analysis solutions."
      ctaButtonText="Visit QuanticBI"
      ctaButtonLink="https://quanticbi.com/"
    />
  );
};

export default CaseStudyQuanticBI;
