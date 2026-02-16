import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ProcessSection from '@/components/ProcessSection';
import ServiceRelatedPosts from '@/components/ServiceRelatedPosts';
import ReviewsSection from '@/components/ReviewsSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import EnhancedSEO from '@/components/EnhancedSEO';
import FAQSection from '@/components/FAQSection';
import SuccessCasesSection from '@/components/SuccessCasesSection';
import ServiceContactSection from '@/components/ServiceContactSection';
import PainPointsSection from '@/components/PainPointsSection';
import SolutionPreviewSection from '@/components/SolutionPreviewSection';
import IntermediateCTA from '@/components/IntermediateCTA';
import TechnologyPlatformSection from '@/components/TechnologyPlatformSection';
import BenefitsGridSection from '@/components/BenefitsGridSection';
import { useServiceSEO } from '@/hooks/useServiceSEO';
import { useFAQSEO } from '@/hooks/useFAQSEO';
import { useTranslation } from '@/hooks/useTranslation';

const DisenoWeb = () => {
  const { language } = useTranslation();
  const isEnglish = language === 'en';

  // Bilingual content
  const content = {
    // SEO
    serviceName: isEnglish ? 'Professional Web Design' : 'Diseño Web Profesional',
    serviceDescription: isEnglish 
      ? 'We design professional websites with Lovable: fast, modern, with applied AI, integrated SEO and CRM connections.'
      : 'Diseñamos webs profesionales con Lovable: rápidas, modernas, con IA aplicada, SEO integrado y conexiones con CRM.',
    canonical: isEnglish ? '/en/services/web-design' : '/es/servicios/diseno-web',
    features: isEnglish ? [
      'Responsive design and optimized UX',
      'Integrated technical SEO',
      'Built with Lovable (React + TypeScript)',
      'CRM and analytics integrations',
      'Applied AI for content and SEO',
      'Continuous support and maintenance'
    ] : [
      'Diseño responsive y UX optimizado',
      'SEO técnico integrado',
      'Construida con Lovable (React + TypeScript)',
      'Integraciones con CRM y analítica',
      'IA aplicada a contenidos y SEO',
      'Soporte y mantenimiento continuo'
    ],
    
    // Breadcrumb
    breadcrumbHome: isEnglish ? 'Home' : 'Inicio',
    breadcrumbSolutions: isEnglish ? 'Solutions' : 'Soluciones',
    breadcrumbCurrent: isEnglish ? 'Web Design' : 'Diseño Web',
    homeLink: isEnglish ? '/en' : '/es',
    solutionsLink: isEnglish ? '/en#solutions' : '/es#soluciones',
    
    // Process
    processTitle: isEnglish 
      ? <>How Our <span className="text-gradient-primary">Process</span> Works</>
      : <>Cómo <span className="text-gradient-primary">Funciona</span> Nuestro Proceso</>,
    processSubtitle: isEnglish 
      ? 'We develop your professional website in 4 clear and efficient steps'
      : 'Desarrollamos tu web profesional en 4 pasos claros y eficientes',
    
    // Success cases
    successCasesTitle: isEnglish 
      ? "Success <span class='text-gradient-primary'>stories</span>"
      : "Casos de <span class='text-gradient-primary'>éxito</span>",
    successCasesSubtitle: isEnglish 
      ? 'Websites we have developed that are generating exceptional results for our clients.'
      : 'Webs que hemos desarrollado y que están generando resultados excepcionales para nuestros clientes.',
    
    // FAQ
    faqTitle: isEnglish ? 'Frequently asked questions' : 'Preguntas frecuentes',
    faqSubtitle: isEnglish 
      ? 'We answer the most common questions about professional website development'
      : 'Resolvemos las dudas más comunes sobre el desarrollo de sitios web profesionales',
    
    // Contact
    contactTitle: isEnglish ? 'Start today with your new website' : 'Empieza hoy con tu nueva web',
    contactSubtitle: isEnglish 
      ? 'Request a free meeting and discover how we can transform your digital presence to generate more clients and business opportunities.'
      : 'Solicita una reunión gratuita y descubre cómo podemos transformar tu presencia digital para generar más clientes y oportunidades de negocio.',
    
    // CTA link
    scheduleMeeting: isEnglish ? '/en/schedule-meeting' : '/es/agendar-reunion',
  };

  // Bilingual process steps
  const processSteps = isEnglish ? [
    { number: "01", title: "Strategy & Analysis", description: "We analyze your business, competition and objectives to create the perfect web strategy." },
    { number: "02", title: "Briefing Creation", description: "We define the style and tone of the brand as well as the base content." },
    { number: "03", title: "Design & Development", description: "We create the UX/UI design and develop your website with the best technologies." },
    { number: "04", title: "Launch & Support", description: "We publish your website and accompany you with technical support and continuous optimization." }
  ] : [
    { number: "01", title: "Estrategia y Análisis", description: "Analizamos tu negocio, competencia y objetivos para crear la estrategia web perfecta." },
    { number: "02", title: "Creación de briefing", description: "Definimos el estilo y tono de la marca así como los contenidos de base." },
    { number: "03", title: "Diseño y Desarrollo", description: "Creamos el diseño UX/UI y desarrollamos tu web con las mejores tecnologías." },
    { number: "04", title: "Lanzamiento y Soporte", description: "Publicamos tu web y te acompañamos con soporte técnico y optimización continua." }
  ];

  // Bilingual FAQ items
  const faqItems = isEnglish ? [
    {
      question: "How long does it take to develop a professional website?",
      answer: "Professional website development takes between 3-6 weeks depending on complexity. It includes UX/UI design, development, content, testing and launch. For more complex projects like B2B platforms, the time can extend to 8-12 weeks."
    },
    {
      question: "What technologies do you use for development?",
      answer: "We build with Lovable — modern React and TypeScript technology that delivers speed, scalability and a professional experience. We also work with WordPress for content-focused projects. All websites include CRM integrations, applied AI for content and SEO, and connections to tools like Google Search Console and analytics platforms."
    },
    {
      question: "Do you use artificial intelligence in web development?",
      answer: "Yes. We apply AI to optimize content creation, automate SEO workflows, and integrate intelligent assistants like chatbots. AI helps us deliver faster, smarter websites that adapt to your marketing strategy."
    },
    {
      question: "Will the website be mobile optimized?",
      answer: "Absolutely. All our websites have responsive design and are optimized to offer a perfect experience on mobile phones, tablets and computers. We also prioritize loading speed on mobile devices."
    },
    {
      question: "Do you include hosting and domain in the service?",
      answer: "Yes, we include optimized premium hosting, domain registration, SSL certificate, automatic backups and technical support. All managed so you don't have to worry about technical aspects."
    },
    {
      question: "Can I manage my website content myself?",
      answer: "Yes, we develop all websites with an intuitive admin panel that allows you to edit texts, images, create pages and manage content easily. We also provide personalized training."
    },
    {
      question: "What does SEO optimization include?",
      answer: "We include complete technical SEO: optimized structure, loading speed, meta tags, schema markup, XML sitemap, image optimization, friendly URLs and Google Analytics and Search Console configuration."
    },
    {
      question: "How much does a professional website cost in 2025?",
      answer: "The price of a professional website varies depending on complexity: from €2,500 for basic corporate websites to €15,000+ for complex platforms. Factors include: custom design, functionalities, CRM integration, number of pages and custom development. Our projects include everything: design, development, content, SEO, hosting and support."
    },
    {
      question: "Do you offer support after launch?",
      answer: "Yes, we offer continuous technical support, security updates, automatic backups, 24/7 monitoring and strategic consulting to help you grow your digital presence."
    },
    {
      question: "Can you migrate my current website without losing SEO?",
      answer: "Yes, we perform complete migrations preserving SEO, URLs, content and positioning. We use advanced redirection techniques and maintain all the authority of your current domain."
    },
    {
      question: "What is UX/UI design and why is it important?",
      answer: "UX (User Experience) focuses on user experience and how they interact with your website. UI (User Interface) is the visual and aesthetic design. Good UX/UI design improves user satisfaction, increases conversions by up to 400%, reduces bounce rate and improves SEO positioning. We design thinking about user behavior and business objectives."
    }
  ] : [
    {
      question: "¿Cuánto tiempo se tarda en desarrollar una web profesional?",
      answer: "El desarrollo de una web profesional toma entre 3-6 semanas según la complejidad. Incluye diseño UX/UI, desarrollo, contenido, pruebas y lanzamiento. Para proyectos más complejos como plataformas B2B, el tiempo puede extenderse a 8-12 semanas."
    },
    {
      question: "¿Qué tecnologías utilizan para el desarrollo?",
      answer: "Construimos con Lovable — tecnología moderna React y TypeScript que ofrece velocidad, escalabilidad y una experiencia profesional. También trabajamos con WordPress para proyectos centrados en contenido. Todas las webs incluyen integraciones con CRM, IA aplicada a contenidos y SEO, y conexiones con herramientas como Google Search Console y plataformas de analítica."
    },
    {
      question: "¿Utilizan inteligencia artificial en el desarrollo web?",
      answer: "Sí. Aplicamos IA para optimizar la creación de contenidos, automatizar workflows de SEO e integrar asistentes inteligentes como chatbots. La IA nos permite entregar webs más rápidas e inteligentes que se adaptan a tu estrategia de marketing."
    },
    {
      question: "¿La web estará optimizada para móviles?",
      answer: "Absolutamente. Todas nuestras webs tienen diseño responsive y están optimizadas para ofrecer una experiencia perfecta en móviles, tablets y ordenadores. Además, priorizamos la velocidad de carga en dispositivos móviles."
    },
    {
      question: "¿Incluyen hosting y dominio en el servicio?",
      answer: "Sí, incluimos hosting premium optimizado, registro de dominio, certificado SSL, copias de seguridad automáticas y soporte técnico. Todo gestionado para que no tengas que preocuparte por aspectos técnicos."
    },
    {
      question: "¿Podré gestionar el contenido de mi web yo mismo?",
      answer: "Sí, desarrollamos todas las webs con un panel de administración intuitivo que te permite editar textos, imágenes, crear páginas y gestionar contenido fácilmente. Además, te proporcionamos formación personalizada."
    },
    {
      question: "¿Qué incluye la optimización SEO?",
      answer: "Incluimos SEO técnico completo: estructura optimizada, velocidad de carga, meta tags, schema markup, sitemap XML, optimización de imágenes, URLs amigables y configuración de Google Analytics y Search Console."
    },
    {
      question: "¿Cuánto cuesta una web profesional en España en 2025?",
      answer: "El precio de una web profesional en España varía según la complejidad: desde 2.500€ para webs corporativas básicas hasta 15.000€+ para plataformas complejas. Factores que influyen: diseño personalizado, funcionalidades, integración con CRM, número de páginas y desarrollo a medida. Nuestros proyectos incluyen todo: diseño, desarrollo, contenido, SEO, hosting y soporte."
    },
    {
      question: "¿Ofrecen soporte después del lanzamiento?",
      answer: "Sí, ofrecemos soporte técnico continuo, actualizaciones de seguridad, backups automáticos, monitorización 24/7 y consultoría estratégica para ayudarte a hacer crecer tu presencia digital."
    },
    {
      question: "¿Pueden migrar mi web actual sin perder el SEO?",
      answer: "Sí, realizamos migraciones completas preservando el SEO, urls, contenido y posicionamiento. Usamos técnicas avanzadas de redirección y mantenemos toda la autoridad de tu dominio actual."
    },
    {
      question: "¿Qué es el diseño UX/UI y por qué es importante?",
      answer: "UX (User Experience) se centra en la experiencia del usuario y cómo interactúa con tu web. UI (User Interface) es el diseño visual y estético. Un buen diseño UX/UI mejora la satisfacción del usuario, aumenta conversiones hasta un 400%, reduce tasa de rebote y mejora el posicionamiento SEO. Diseñamos pensando en el comportamiento del usuario y los objetivos de negocio."
    }
  ];

  const { title, description, canonical, ogImage, structuredData } = useServiceSEO({
    serviceName: content.serviceName,
    serviceDescription: content.serviceDescription,
    canonical: content.canonical,
    features: content.features,
    priceRange: '€€€',
    aggregateRating: { ratingValue: '4.9', reviewCount: '42' }
  });

  // FAQ Schema para Featured Snippets
  const faqSchema = useFAQSEO({
    faqs: faqItems,
    pageUrl: content.canonical
  });

  // Combine schemas
  const combinedStructuredData = [structuredData, faqSchema.structuredData];

  return (
    <div className="min-h-screen bg-white">
      <EnhancedSEO />
      <Navigation />
      
      {/* Breadcrumb */}
      <div className="bg-muted/30 py-4 mt-20">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-gray-600">
            <Link to={content.homeLink} className="hover:text-primary">{content.breadcrumbHome}</Link>
            <span className="mx-2">/</span>
            <Link to={content.solutionsLink} className="hover:text-primary">{content.breadcrumbSolutions}</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">{content.breadcrumbCurrent}</span>
          </nav>
        </div>
      </div>

      {/* Sección 1: Dolor / Problema */}
      <PainPointsSection />

      {/* Sección 2: Propuesta / Nuestra solución */}
      <SolutionPreviewSection />

      {/* Sección 3: Cómo funciona */}
      <ProcessSection
        title={content.processTitle}
        subtitle={content.processSubtitle}
        steps={processSteps}
      />

      {/* Sección 4: Beneficios */}
      <BenefitsGridSection />

      {/* Sección 4b: Tecnología y Plataforma */}
      <TechnologyPlatformSection />

      {/* Sección 5: Prueba social */}
      <SuccessCasesSection
        id="casos-exito"
        title={content.successCasesTitle}
        subtitle={content.successCasesSubtitle}
        specificCases={["Corte A Films", "Aistercel", "Dr. Parrón", "Inbound Students"]}
        maxCases={4}
        showAllLink={true}
      />
      
      <ReviewsSection />

      {/* Sección 6: CTA intermedio */}
      <IntermediateCTA />

      {/* Sección 7: Preguntas frecuentes */}
      <FAQSection 
        title={content.faqTitle}
        subtitle={content.faqSubtitle}
        faqs={faqItems} 
      />

      {/* Posts Relacionados */}
      <ServiceRelatedPosts serviceSlug="diseno-web" />

      {/* Sección final: CTA fuerte (footer extendido) */}
      <ServiceContactSection
        title={content.contactTitle}
        subtitle={content.contactSubtitle}
        className="bg-gradient-to-br from-primary/10 via-white to-accent/10"
        sourcePage="Diseño Web"
      />
      
      <Footer />
    </div>
  );
};

export default DisenoWeb;
