
import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import SolutionsSection from '@/components/SolutionsSection';
import ServicesSection from '@/components/ServicesSection';
import AllServicesSection from '@/components/AllServicesSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import ReviewsSection from '@/components/ReviewsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import FAQSection from '@/components/FAQSection';

const Index = () => {
  const [searchParams] = useSearchParams();
  
  useEffect(() => {
    const scrollTo = searchParams.get('scrollTo');
    if (scrollTo) {
      const element = document.getElementById(scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [searchParams]);
  return (
    <div id="top" className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow pt-24">  {/* Increased padding to account for large header */}
        <HeroSection />
        <SolutionsSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <AllServicesSection />
        <ReviewsSection />
        <FAQSection
          faqs={[
            {
              question: "¿Qué diferencia a Hayas Marketing de otras agencias?",
              answer: "Nos especializamos en soluciones integrales que combinan estrategia, tecnología e inteligencia artificial. No solo creamos campañas, sino que implementamos sistemas completos de gestión comercial con CRM, automatizaciones y herramientas de IA como nuestro chatbot SofÍA."
            },
            {
              question: "¿Trabajan con empresas B2B y B2C?",
              answer: "Sí, tenemos experiencia y soluciones específicas para ambos modelos. Para B2B utilizamos plataformas como HubSpot enfocadas en procesos de venta complejos, mientras que para B2C implementamos Go High Level optimizado para conversión rápida y gestión masiva de leads."
            },
            {
              question: "¿Cuánto tiempo toma ver resultados?",
              answer: "Los primeros resultados en campañas publicitarias pueden verse en 2-4 semanas. Para SEO y estrategias de contenido, los resultados sólidos aparecen entre 3-6 meses. La implementación de CRM y automatizaciones genera eficiencias inmediatas desde el primer mes."
            },
            {
              question: "¿Ofrecen servicios de forma individual o solo paquetes completos?",
              answer: "Ofrecemos tanto servicios individuales como soluciones integrales. Puedes contratar desde un servicio específico como creación de marca o SEO, hasta un plan completo de transformación digital con CRM, automatizaciones y estrategia de marketing."
            },
            {
              question: "¿Qué incluye el soporte y mantenimiento?",
              answer: "Todos nuestros servicios incluyen soporte técnico, formación del equipo, actualizaciones regulares y reuniones de seguimiento. Para CRM y automatizaciones ofrecemos soporte prioritario y optimizaciones continuas basadas en el rendimiento."
            },
            {
              question: "¿Pueden trabajar con nuestro equipo interno?",
              answer: "Absolutamente. Nos adaptamos a tu estructura organizacional. Podemos trabajar como departamento de marketing externo, colaborar con tu equipo interno existente, o proporcionar consultoría y formación para que gestionen las herramientas internamente."
            }
          ]}
        />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
