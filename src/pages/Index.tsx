
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import SolutionsSection from '@/components/SolutionsSection';
import ServicesSection from '@/components/ServicesSection';
import AllServicesSection from '@/components/AllServicesSection';
import ChatbotPromoSection from '@/components/ChatbotPromoSection';
import ReviewsSection from '@/components/ReviewsSection';
import Footer from '@/components/Footer';
import Seo from '@/components/Seo';
import FAQSection from '@/components/FAQSection';
import MethodologySection from '@/components/MethodologySection';

const Index = () => {
  const [searchParams] = useSearchParams();
  const [origin, setOrigin] = useState('');
  
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
  
  // SEO schemas and FAQs
  const homeFaqs = [
    {
      question: "¿Qué diferencia a Hayas Marketing de otras agencias?",
      answer:
        "Nos especializamos en soluciones integrales que combinan estrategia, tecnología e inteligencia artificial. No solo creamos campañas, sino que implementamos sistemas completos de gestión comercial con CRM, automatizaciones y herramientas de IA como nuestro chatbot SofÍA.",
    },
    {
      question: "¿Trabajan con empresas B2B y B2C?",
      answer:
        "Sí, tenemos experiencia y soluciones específicas para ambos modelos. Para B2B utilizamos plataformas como HubSpot enfocadas en procesos de venta complejos, mientras que para B2C implementamos Go High Level optimizado para conversión rápida y gestión masiva de leads.",
    },
    {
      question: "¿Cuánto tiempo toma ver resultados?",
      answer:
        "Los primeros resultados en campañas publicitarias pueden verse en 2-4 semanas. Para SEO y estrategias de contenido, los resultados sólidos aparecen entre 3-6 meses. La implementación de CRM y automatizaciones genera eficiencias inmediatas desde el primer mes.",
    },
    {
      question:
        "¿Ofrecen servicios de forma individual o solo paquetes completos?",
      answer:
        "Ofrecemos tanto servicios individuales como soluciones integrales. Puedes contratar desde un servicio específico como creación de marca o SEO, hasta un plan completo de transformación digital con CRM, automatizaciones y estrategia de marketing.",
    },
    {
      question: "¿Qué incluye el soporte y mantenimiento?",
      answer:
        "Todos nuestros servicios incluyen soporte técnico, formación del equipo, actualizaciones regulares y reuniones de seguimiento. Para CRM y automatizaciones ofrecemos soporte prioritario y optimizaciones continuas basadas en el rendimiento.",
    },
    {
      question: "¿Pueden trabajar con nuestro equipo interno?",
      answer:
        "Absolutamente. Nos adaptamos a tu estructura organizacional. Podemos trabajar como departamento de marketing externo, colaborar con tu equipo interno existente, o proporcionar consultoría y formación para que gestionen las herramientas internamente.",
    },
  ];

  // Generate structured data only when origin is available
  const org = origin ? {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Hayas Marketing",
    url: origin,
    logo: `${origin}/favicon.ico`,
  } as const : null;

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
        title="Hayas Marketing | Estrategia, CRM, IA y Marketing Digital"
        description="Soluciones de marketing y ventas: branding, captación de leads, CRM, automatización e IA para hacer crecer tu negocio."
        canonical="/"
        keywords={['marketing digital', 'CRM', 'automatización', 'inteligencia artificial', 'leads', 'ventas']}
        ogImage="/og-home.jpg"
        ogType="website"
        inLanguage="es-ES"
        about={['Marketing Digital', 'CRM', 'Automatización de Ventas', 'Inteligencia Artificial']}
        mentions={['HubSpot', 'GoHighLevel', 'SofÍA', 'Google Ads', 'Meta Ads']}
        faqs={homeFaqs}
        structuredData={[org, website].filter(Boolean)}
      />
      <Navigation />
      
      <main className="flex-grow mt-4 md:mt-6" role="main">
        <HeroSection />
        <SolutionsSection />
        
        
        <MethodologySection />
        <AllServicesSection />
        <ChatbotPromoSection />
        {/* FAQ Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Preguntas Frecuentes
              </h2>
            </div>
            <FAQSection
              title=""
              subtitle=""
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
                  answer: "Los primeros resultados en campañas publicitarias pueden verses en 2-4 semanas. Para SEO y estrategias de contenido, los resultados sólidos aparecen entre 3-6 meses. La implementación de CRM y automatizaciones genera eficiencias inmediatas desde el primer mes."
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
          </div>
        </section>

        <ReviewsSection />
        
      </main>
      
      <Footer showKitSection={true} />
    </div>
  );
};

export default Index;
