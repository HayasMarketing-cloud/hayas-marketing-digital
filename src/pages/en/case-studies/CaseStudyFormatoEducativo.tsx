import React from 'react';
import CaseStudyTemplateEN from '@/components/CaseStudyTemplateEN';
import { successCaseImages } from '@/data/successCaseImages';
import { Database, Users } from 'lucide-react';

const CaseStudyFormatoEducativo = (): React.JSX.Element => {
  return (
    <CaseStudyTemplateEN
      pageTitle="Case Study: Formato Educativo | Educational CRM"
      pageDescription="CRM implementation and administration to digitize educational management for Formato Educativo, improving tracking and conversion."
      canonical="/en/case-studies/formato-educativo"
      ogImage={successCaseImages.formatoEducativo}
      structuredData={{
        '@context': 'https://schema.org',
        '@type': 'CaseStudy',
        name: 'Case Study — Formato Educativo: CRM That Powers Your Management',
        description: 'CRM implementation and administration to digitize educational management for Formato Educativo, improving tracking and conversion.',
        url: '/en/case-studies/formato-educativo',
        inLanguage: 'en',
        about: {
          '@type': 'Organization',
          name: 'Formato Educativo',
          url: 'https://formatoeducativo.com',
          areaServed: 'ES',
          industry: 'Education and training'
        },
        provider: {
          '@type': 'Organization',
          name: 'Hayas Marketing',
          url: 'https://hayasmarketing.com'
        }
      }}
      companyName="Formato Educativo"
      subtitle="CRM that powers your educational management"
      badges={["Educational Platform", "CRM", "HubSpot"]}
      websiteUrl="https://formatoeducativo.com"
      featuredImage={successCaseImages.formatoEducativo}
      featuredImageAlt="Formato Educativo - Digital educational platform"
      aboutCompany="Formato Educativo is a platform specialized in professional training and continuing education. They offer courses and training programs aimed at professionals seeking to update their skills and acquire new abilities in a constantly evolving job market."
      challenge="Educational lead management was performed manually and in a dispersed manner, causing loss of conversion opportunities and difficulties in tracking potential students. They needed a comprehensive solution that centralized all information and automated nurturing and follow-up processes for their educational audience."
      solutions={[
        {
          icon: Database,
          title: 'HubSpot CRM Configuration',
          description: 'Complete setup adapted to educational processes with custom properties, workflows, and specific funnels for student tracking.'
        },
        {
          icon: Users,
          title: 'Administration and Training',
          description: 'Ongoing CRM management, educational team training, and technical support to ensure adoption and system optimization.'
        }
      ]}
      results={[
        'Centralized management of all educational leads',
        'Complete automation of the follow-up process',
        'Improved lead-to-student conversion rates',
        'Significant reduction in administrative management time'
      ]}
      learnings="In the education sector, proper lead management is crucial to maximize conversions. A well-implemented CRM not only improves operational efficiency but also allows for personalized communication according to the profile and specific needs of each potential student."
      ctaTitle="Need to digitize your educational management?"
      ctaDescription="We help you implement a CRM that transforms how you manage your students and educational processes."
      ctaButtonText="Request free consultation"
      ctaButtonLink="/en/schedule-meeting"
      relatedSolutions={[
        { label: 'CRM Implementation', route: 'serviceCRMImplantation' },
        { label: 'CRM Administration', route: 'serviceCRMAdmin' },
      ]}
    />
  );
};

export default CaseStudyFormatoEducativo;
