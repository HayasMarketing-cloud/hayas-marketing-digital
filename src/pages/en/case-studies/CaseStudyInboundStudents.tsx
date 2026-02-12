import React from 'react';
import CaseStudyTemplateEN from '@/components/CaseStudyTemplateEN';
import { successCaseImages } from '@/data/successCaseImages';
import { Target, Globe, Zap } from 'lucide-react';

const CaseStudyInboundStudents = () => {
  return (
    <CaseStudyTemplateEN
      pageTitle="Case Study: Inbound Students | Educational Digital Transformation"
      pageDescription="We developed a comprehensive digital strategy for Inbound Students, including responsive web design and automation to digitize educational services."
      canonical="/en/case-studies/inbound-students"
      ogImage={successCaseImages.inboundStudents}
      structuredData={{
        "@context": "https://schema.org",
        "@type": "CaseStudy",
        headline: "Case Study: Inbound Students | Educational Digital Transformation",
        about: "Digitization of educational services with digital strategy, web design and automation",
        url: '/en/case-studies/inbound-students',
        inLanguage: "en",
        publisher: { "@type": "Organization", name: "Hayas Marketing" }
      }}
      companyName="Inbound Students"
      subtitle="Comprehensive digital transformation for educational services"
      badges={["Education", "Web Design", "Automation"]}
      websiteUrl="https://inboundstudents.com"
      featuredImage={successCaseImages.inboundStudents}
      featuredImageAlt="Inbound Students - Educational services for international students"
      aboutCompany="Inbound Students is a platform specialized in offering comprehensive services for international students who wish to study in Spain. They facilitate everything from documentation management to accommodation and academic guidance, serving as a fundamental bridge between international students and the Spanish educational system."
      challenge="They needed to completely modernize their digital presence to effectively serve international students. Their existing website did not offer an optimized user experience for their multicultural audience, and management processes were performed manually, generating inefficiencies and loss of commercial opportunities."
      solutions={[
        {
          icon: Target,
          title: 'Digital Strategy',
          description: 'Comprehensive planning to digitize educational services for international students, optimizing acquisition and conversion.'
        },
        {
          icon: Globe,
          title: 'Responsive Web Design',
          description: 'Development of a responsive website adapted to international audiences with UX optimized for international students.'
        },
        {
          icon: Zap,
          title: 'Process Automation',
          description: 'Implementation of automations for lead management, student tracking, and optimization of educational processes.'
        }
      ]}
      results={[
        'Complete digitization of educational services',
        'Significant improvement in user experience',
        'Automation of student management processes',
        'Increase in international student conversions'
      ]}
      learnings="In services targeting international audiences, user experience must be intuitive and multicultural. Process automation not only improves operational efficiency but also allows for a more personalized and scalable service to students from different countries."
      ctaTitle="Need to digitize your services?"
      ctaDescription="We help you digitally transform your business with strategy, web design, and personalized automation."
      ctaButtonText="Digitize my business"
      ctaButtonLink="/en/schedule-meeting"
      relatedSolutions={[
        { label: 'Brand Creation', route: 'serviceBrandCreation' },
        { label: 'Web Design', route: 'serviceWebDesign' },
        { label: 'Content Strategy', route: 'serviceContentStrategy' },
      ]}
    />
  );
};

export default CaseStudyInboundStudents;
