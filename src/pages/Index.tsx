
import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import SolutionsSection from '@/components/SolutionsSection';
import ServicesSection from '@/components/ServicesSection';
import AllServicesSection from '@/components/AllServicesSection';
import ChatbotPromoSection from '@/components/ChatbotPromoSection';


import Footer from '@/components/Footer';
import Seo from '@/components/Seo';
import FAQSection from '@/components/FAQSection';
import MethodologySection from '@/components/MethodologySection';

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

  const origin = window.location.origin;
  const org = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Hayas Marketing",
    url: origin,
    logo: `${origin}/favicon.ico`,
  } as const;

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Hayas Marketing",
    url: origin,
  } as const;

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
        title="Hayas Marketing | Estrategia, CRM, IA y Marketing"
        description="Soluciones de marketing y ventas: branding, captación de leads, CRM, automatización e IA para hacer crecer tu negocio."
        canonical="/"
        structuredData={[org, website, faqSchema]}
      />
      <Navigation />
      
      <main className="flex-grow pt-24" role="main">
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

        {/* Location & Reviews Section */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold">
                    Conectamos desde Madrid con marcas de todo el mundo
                  </h2>
                </div>
                <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
                  Nuestra oficina está en el corazón de Madrid, a pocos pasos de Madrid Río y La Latina. Desde aquí ayudamos a empresas de toda España a crecer con estrategias digitales auténticas.
                </p>
                <div className="flex items-center justify-center gap-1 mb-8">
                  {[1,2,3,4,5].map((star) => (
                    <svg key={star} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                  <span className="ml-2 text-gray-700 font-medium">5.0 en Google</span>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
                <div className="p-6">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold mb-4">Reseñas verificadas de Google Maps</h3>
                  </div>
                  
                  {/* Placeholder for Google Maps */}
                  <div className="relative bg-gray-100 rounded-lg h-64 md:h-80 mb-6 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                          <span className="text-red-500 font-bold text-sm">H</span>
                        </div>
                      </div>
                      <div className="text-sm text-gray-600 mb-2">
                        <strong>Hayas Marketing</strong><br/>
                        C. de Manzanares, 4, Arganzuela,<br/>
                        28005 Madrid
                      </div>
                      <div className="flex items-center justify-center gap-1 text-sm">
                        <span className="text-orange-500">5,0</span>
                        {[1,2,3,4,5].map((star) => (
                          <svg key={star} className="w-3 h-3 text-orange-500 fill-current" viewBox="0 0 20 20">
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                          </svg>
                        ))}
                        <span className="ml-1 text-gray-600">16 reseñas</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      Cómo llegar a la oficina
                    </button>
                    <a 
                      href="/agendar-reunion"
                      className="bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      Reservar reunión online
                    </a>
                  </div>
                  
                  <div className="text-center mt-6">
                    <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center justify-center gap-1 mx-auto transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Ver todas las reseñas
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
      </main>
      
      <Footer showKitSection={true} />
    </div>
  );
};

export default Index;
