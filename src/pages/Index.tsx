
import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import SofiaSection from '@/components/SofiaSection';
import SolutionsSection from '@/components/SolutionsSection';
import ServicesSection from '@/components/ServicesSection';
import AllServicesSection from '@/components/AllServicesSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow pt-20">  {/* Reduced padding for tighter layout */}
        <HeroSection />
        <SofiaSection />
        <SolutionsSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <AllServicesSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
