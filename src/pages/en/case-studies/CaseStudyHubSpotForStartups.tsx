import React from 'react';
import CaseStudyTemplateEN from '@/components/CaseStudyTemplateEN';
import { successCaseImages } from '@/data/successCaseImages';
import { ClipboardList, MessageSquare, Palette, PenTool, Globe } from 'lucide-react';

const CaseStudyHubSpotForStartups: React.FC = () => {
  return (
    <CaseStudyTemplateEN
      pageTitle="Case Study: HubSpot for Startups | Inbound Marketing"
      pageDescription="Inbound campaign with success stories to boost startup visibility on their website."
      canonical="/en/case-studies/hubspot-for-startups"
      ogImage={successCaseImages.hubSpotForStartups}
      structuredData={{
        "@context": "https://schema.org",
        "@type": "CaseStudy",
        headline: "Case Study — HubSpot for Startups: Real Stories to Inspire Growth",
        about: "Personalized questionnaires, interviews, visual assets, SEO copywriting and web publishing",
        url: '/en/case-studies/hubspot-for-startups',
        inLanguage: "en",
        publisher: { "@type": "Organization", name: "Hayas Marketing" }
      }}
      companyName="HubSpot for Startups"
      subtitle="Real stories to inspire growth"
      badges={["HubSpot", "Inbound Marketing", "Startups"]}
      websiteUrl="https://www.hubspot.com/startups"
      featuredImage={successCaseImages.hubSpotForStartups}
      featuredImageAlt="HubSpot for Startups - Real stories to inspire growth"
      aboutCompany="HubSpot for Startups is HubSpot's program designed to help emerging companies grow, offering marketing, sales, and service tools, training, and resources tailored to their needs."
      challenge="They wanted to showcase the impact of their program by publishing success stories of startups using it, with an inspiring and attractive approach to capture the attention of new entrepreneurs."
      solutions={[
        {
          icon: ClipboardList,
          title: "Custom Questionnaire Design",
          description: "Creation of interview guides tailored to each startup to obtain relevant information coherent with the campaign storytelling."
        },
        {
          icon: MessageSquare,
          title: "In-depth Interviews",
          description: "Conducting interviews with founders and key teams to capture their story, achievements, and learnings."
        },
        {
          icon: Palette,
          title: "Visual Asset Production",
          description: "Design of graphic and visual elements for publication on the HubSpot for Startups website, ensuring brand identity coherence."
        },
        {
          icon: PenTool,
          title: "Web Content Writing",
          description: "Elaboration of clear, inspiring, and SEO-optimized texts that highlight each startup's experience."
        },
        {
          icon: Globe,
          title: "Website Publication",
          description: "Integration of success stories on the program's official website, enhancing their impact as an inbound marketing tool."
        }
      ]}
      results={[]}
      learnings="In startup support programs, telling real and visually attractive stories creates closeness with the target audience and reinforces the credibility of the value proposition."
      ctaTitle="Need to boost your startup?"
      ctaDescription="We help you develop an inbound marketing strategy that enhances your emerging company's growth."
      ctaButtonText="Boost my startup"
      ctaButtonLink="/en/schedule-meeting"
      relatedSolutions={[
        { label: 'Content Strategy', route: 'serviceContentStrategy' },
        { label: 'SEO Positioning', route: 'serviceSEOPositioning' },
      ]}
    />
  );
};

export default CaseStudyHubSpotForStartups;
