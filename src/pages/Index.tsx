
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
    <div id="top" className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow pt-24">  {/* Increased padding to account for large header */}
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
