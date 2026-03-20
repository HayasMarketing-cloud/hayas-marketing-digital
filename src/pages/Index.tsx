
import React, { useEffect, lazy } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import HeroSlider from '@/components/HeroSlider';
import MarketingChangedSection from '@/components/MarketingChangedSection';
import Footer from '@/components/Footer';
import EnhancedSEO from '@/components/EnhancedSEO';
import LazySection from '@/components/LazySection';
import { useTranslation } from '@/hooks/useTranslation';

// Lazy-loaded below-the-fold components
const SenseConnectionSection = lazy(() => import('@/components/SenseConnectionSection'));
const SenseActivationsSection = lazy(() => import('@/components/SenseActivationsSection'));
const SenseAudienceCtaSection = lazy(() => import('@/components/SenseAudienceCtaSection'));
const FAQSection = lazy(() => import('@/components/FAQSection'));
const ReviewsSection = lazy(() => import('@/components/ReviewsSection'));

const Index = () => {
  const [searchParams] = useSearchParams();
  const { t } = useTranslation();
  
  useEffect(() => {
    const scrollTo = searchParams.get('scrollTo');
    if (scrollTo) {
      const element = document.getElementById(scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [searchParams]);
  
  const homeFaqs = [
    { question: t('faq.home.q1'), answer: t('faq.home.a1') },
    { question: t('faq.home.q2'), answer: t('faq.home.a2') },
    { question: t('faq.home.q3'), answer: t('faq.home.a3') },
    { question: t('faq.home.q4'), answer: t('faq.home.a4') },
    { question: t('faq.home.q5'), answer: t('faq.home.a5') },
    { question: t('faq.home.q6'), answer: t('faq.home.a6') },
  ];

  return (
    <div id="top" className="min-h-screen flex flex-col">
      <EnhancedSEO />
      <Navigation />
      
      <main className="flex-grow" role="main">
        <HeroSlider />
        <MarketingChangedSection />
        <LazySection component={SenseConnectionSection} fallbackHeight="400px" />
        <LazySection component={SenseActivationsSection} fallbackHeight="500px" />
        <LazySection component={SenseAudienceCtaSection} fallbackHeight="400px" />
        
        {/* FAQ Section */}
        <LazySection component={FAQSection} fallbackHeight="500px" componentProps={{
          title: "",
          subtitle: "",
          faqs: homeFaqs,
        }}>
          <section className="py-14 md:py-20 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold font-dm-sans mb-6">
                  {t('faq.title')}
                </h2>
              </div>
              <React.Suspense fallback={null}>
                <FAQSection title="" subtitle="" faqs={homeFaqs} />
              </React.Suspense>
            </div>
          </section>
        </LazySection>

        <LazySection component={ReviewsSection} fallbackHeight="500px" />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
