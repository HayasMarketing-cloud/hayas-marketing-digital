import React from 'react';
import CaseStudyTemplateEN from '@/components/CaseStudyTemplateEN';
import { successCaseImages } from '@/data/successCaseImages';
import { Palette, Globe, FileText } from 'lucide-react';

const CaseStudyNexoVital = () => {
  return (
    <CaseStudyTemplateEN
      pageTitle="Case Study: Nexo Vital | Integrative Health Branding"
      pageDescription="We transformed a specialized microbiota practice into a reference brand in integrative health with professional identity and digital strategy."
      canonical="/en/case-studies/nexo-vital"
      ogImage={successCaseImages.nexoVital}
      structuredData={{
        "@context": "https://schema.org",
        "@type": "CaseStudy",
        headline: "Case Study: Nexo Vital | Integrative Health Branding",
        about: "Branding and web development for a practice specialized in integrative health and microbiota",
        url: '/en/case-studies/nexo-vital',
        inLanguage: "en",
        publisher: { "@type": "Organization", name: "Hayas Marketing" }
      }}
      companyName="Nexo Vital"
      subtitle="We transformed a specialized microbiota practice into a reference brand in integrative health with professional identity and digital strategy"
      badges={["Integrative Health", "Branding", "Web Development"]}
      websiteUrl="https://nexovital.es"
      featuredImage={successCaseImages.nexoVital}
      featuredImageAlt="Nexo Vital - Practice specialized in integrative health and microbiota"
      aboutCompany="Nexo Vital is a practice specialized in integrative health led by a nurse expert in microbiota and functional medicine. Their holistic approach combines traditional scientific knowledge with natural therapies to offer comprehensive treatment focused on digestive health and general wellbeing."
      challenge="Despite deep specialization in microbiota and integrative health, they needed a professional presence that conveyed trust and credibility. Their visual identity did not adequately reflect their expertise, and they needed to differentiate in a market where integrative health specialization requires generating trust from the first contact."
      solutions={[
        {
          icon: Palette,
          title: 'Comprehensive Branding',
          description: 'Complete development of visual identity that conveys professionalism, trust, and specialization in integrative health and microbiota.'
        },
        {
          icon: Globe,
          title: 'Professional Web Development',
          description: 'Specialized website that effectively communicates integrative health services and facilitates patient acquisition.'
        },
        {
          icon: FileText,
          title: 'Content Strategy',
          description: 'Educational content plan about integrative health that positions as an expert and generates trust in their audience.'
        }
      ]}
      results={[
        'Positioning as a reference in integrative health and microbiota',
        'Significant increase in specialized consultations',
        'Greater professional credibility and trust',
        'Clear differentiation from traditional competition'
      ]}
      learnings="In the integrative health sector, trust is fundamental. A professional and coherent visual identity, combined with a website that clearly communicates specialization, can make the difference between being perceived as a trusted professional or just another option in the market."
      ctaTitle="Need to professionalize your practice?"
      ctaDescription="We help you create a professional brand that generates trust and positions you as a reference in your specialty."
      ctaButtonText="Develop my professional brand"
      ctaButtonLink="/en/schedule-meeting"
      relatedSolutions={[
        { label: 'Brand Creation', route: 'serviceBrandCreation' },
        { label: 'Web Design', route: 'serviceWebDesign' },
        { label: 'Content Strategy', route: 'serviceContentStrategy' },
      ]}
    />
  );
};

export default CaseStudyNexoVital;
