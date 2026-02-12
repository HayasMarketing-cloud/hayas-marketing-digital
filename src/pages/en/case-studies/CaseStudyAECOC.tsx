import React from 'react';
import CaseStudyTemplateEN from '@/components/CaseStudyTemplateEN';
import { Database, Settings, Share2, Target } from 'lucide-react';

const CaseStudyAECOC = () => {
  return (
    <CaseStudyTemplateEN
      pageTitle="Case Study: AECOC | CRM and Digital Marketing for Education"
      pageDescription="We implemented CRM and digital strategy for AECOC, connecting students with leading consumer sector companies through an innovative social project."
      canonical="/en/case-studies/aecoc"
      ogImage="/lovable-uploads/34af75c9-4cb5-4537-853e-73361c647202.png"
      structuredData={{
        "@context": "https://schema.org",
        "@type": "CaseStudy",
        headline: "Case Study: AECOC | CRM and Digital Marketing for Education",
        about: "Social project to connect university and vocational training students with consumer sector companies",
        url: "/en/case-studies/aecoc",
        inLanguage: "en",
        publisher: { "@type": "Organization", name: "Hayas Marketing" },
      }}
      companyName="AECOC"
      subtitle="Connecting students with leading consumer sector companies"
      badges={["Education", "Training", "CRM", "Social Media"]}
      websiteUrl="https://www.aecoc.es/"
      featuredImage="/lovable-uploads/34af75c9-4cb5-4537-853e-73361c647202.png"
      featuredImageAlt="AECOC - Academic Awards connecting students with companies"
      aboutCompany="AECOC is one of Spain's largest business associations, bringing together leading consumer sector companies. Aware of the importance of building bridges between academia and business, AECOC launched a social project aimed at helping university and vocational training students enter the job market."
      challenge="AECOC's main challenge was creating an effective communication platform between students and companies, providing visibility to the social program among young audiences, reaching students through social media with relatable language, facilitating interaction management, and attracting students to participate in the events and Academic Awards the association organizes each year."
      solutions={[
        {
          icon: Database,
          title: 'CRM Implementation',
          description: 'Configuration of an adapted CRM solution with specific pipelines for managing participating students and companies.'
        },
        {
          icon: Settings,
          title: 'CRM Administration',
          description: 'Data flow management and optimization, ensuring continuous participant tracking and improving information quality.'
        },
        {
          icon: Share2,
          title: 'Social Media Management',
          description: 'Content creation targeted at students and companies, clearly communicating program benefits and encouraging participation.'
        },
        {
          icon: Target,
          title: 'Social Media Advertising',
          description: 'Segmented campaigns to reach university and vocational training student profiles, as well as consumer sector companies interested in attracting young talent.'
        }
      ]}
      results={[
        "Greater visibility of the social program among university and vocational training students",
        "Significant increase in participation in events and Academic Awards",
        "Improved communication between students and consumer sector companies",
        "Optimization of participant management and tracking processes",
        "Strengthening of AECOC's social initiative impact"
      ]}
      learnings="The AECOC case demonstrates how the combination of CRM, digital communication, and social media campaigns can enhance projects with strong social impact. Thanks to this approach, the association was able to strengthen its initiative and open new pathways for students to approach the job market and find opportunities in leading consumer sector companies."
      ctaTitle="Want to boost a social or educational project?"
      ctaDescription="Discover how our digital solutions can help you achieve real impact in your sector."
      ctaButtonText="Request free consultation"
      ctaButtonLink="/en/contact"
      relatedSolutions={[
        { label: 'CRM Implementation', route: 'serviceCRMImplantation' },
        { label: 'Social Media Management', route: 'serviceSocialMedia' },
        { label: 'Google Ads Advertising', route: 'serviceGoogleAds' },
      ]}
    />
  );
};

export default CaseStudyAECOC;
