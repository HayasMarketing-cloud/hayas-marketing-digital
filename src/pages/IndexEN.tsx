import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import HeroSlider from '@/components/HeroSlider';
import SolutionsSection from '@/components/SolutionsSection';
import AllServicesSection from '@/components/AllServicesSection';
import ChatbotPromoSection from '@/components/ChatbotPromoSection';
import ReviewsSection from '@/components/ReviewsSection';
import Footer from '@/components/Footer';
import Seo from '@/components/Seo';
import FAQSection from '@/components/FAQSection';
import { hayasOrganizationSchema } from '@/data/seoData';
import { useTranslation } from '@/hooks/useTranslation';

const IndexEN = () => {
  const [searchParams] = useSearchParams();
  const [origin, setOrigin] = useState('');
  const { t } = useTranslation();
  
  useEffect(() => {
    // Set origin only on client side to prevent hydration issues
    setOrigin(window.location.origin);
  }, []);
  
  useEffect(() => {
    const scrollTo = searchParams.get('scrollTo');
    if (scrollTo) {
      const element = document.getElementById(scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [searchParams]);
  
  // SEO schemas and FAQs in English
  const homeFaqs = [
    {
      question: t('faq.home.q1'),
      answer: t('faq.home.a1'),
    },
    {
      question: t('faq.home.q2'),
      answer: t('faq.home.a2'),
    },
    {
      question: t('faq.home.q3'),
      answer: t('faq.home.a3'),
    },
    {
      question: t('faq.home.q4'),
      answer: t('faq.home.a4'),
    },
    {
      question: t('faq.home.q5'),
      answer: t('faq.home.a5'),
    },
    {
      question: t('faq.home.q6'),
      answer: t('faq.home.a6'),
    },
  ];

  // Generate structured data only when origin is available
  const website = origin ? {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Hayas Marketing",
    url: origin,
  } as const : null;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: homeFaqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <div id="top" className="min-h-screen flex flex-col">
      <Seo
        title="Hayas Marketing | Strategy, CRM, AI & Digital Marketing"
        description="Marketing and sales solutions: branding, lead generation, CRM, automation and AI to grow your business."
        canonical="/en"
        keywords={['digital marketing', 'CRM', 'automation', 'artificial intelligence', 'leads', 'sales']}
        ogImage="/og-home.jpg"
        ogType="website"
        inLanguage="en-US"
        about={['Digital Marketing', 'CRM', 'Sales Automation', 'Artificial Intelligence']}
        mentions={['HubSpot', 'GoHighLevel', 'SofÍA', 'Google Ads', 'Meta Ads']}
        faqs={homeFaqs}
        structuredData={[hayasOrganizationSchema, website, faqSchema].filter(Boolean)}
      />
      <Navigation />
      
      <main className="flex-grow mt-4 md:mt-6" role="main">
        <HeroSlider />
        <SolutionsSection />
        
        {/* No MethodologySection for English version */}
        
        <AllServicesSection />
        <ChatbotPromoSection />
        
        {/* FAQ Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {t('faq.title')}
              </h2>
            </div>
            <FAQSection
              title=""
              subtitle=""
              faqs={homeFaqs}
            />
          </div>
        </section>

        <ReviewsSection />
        
      </main>
      
      <Footer showKitSection={true} />
    </div>
  );
};

export default IndexEN;
