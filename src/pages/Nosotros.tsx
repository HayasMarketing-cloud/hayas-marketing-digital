import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ReviewsSection from '@/components/ReviewsSection';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Target, Users, TrendingUp, Award, CheckCircle, Lightbulb, Zap, Heart, ArrowRight, Bot, GraduationCap, BarChart3, Settings } from 'lucide-react';
import EnhancedSEO from '@/components/EnhancedSEO';
import { useLanguage } from '@/contexts/LanguageContext';

// Import logos
import hubspotLogo from '@/assets/logos/hubspot-logo.png';
import ghlLogo from '@/assets/logos/ghl-logo.png';
import googleLogo from '@/assets/logos/google-logo.png';
import metaLogo from '@/assets/logos/meta-logo.png';
import wordpressLogo from '@/assets/logos/wordpress-logo.png';
import lovableLogo from '@/assets/logos/lovable-logo.png';
import aiLogo from '@/assets/logos/ai-logo.png';
import JoinFreelancersSection from '@/components/JoinFreelancersSection';
import FAQSection from '@/components/FAQSection';

const Nosotros = () => {
  const { isEnglish } = useLanguage();

  // Bilingual content
  const content = {
    // Hero section
    heroTitle1: isEnglish ? 'We are ' : 'Somos ',
    heroTitle2: 'Hayas Marketing',
    heroSubtitle: isEnglish 
      ? 'Digital marketing agency and consultancy specialized in strategy, automation and artificial intelligence at the service of people.'
      : 'Agencia y consultora de marketing digital especializada en estrategia, automatización e inteligencia artificial al servicio de las personas.',
    heroDescription: isEnglish
      ? 'Since 2014, we help entrepreneurs and companies connect more effectively and authentically with their customers, driving their growth through essential digital marketing strategies.'
      : 'Desde 2014, ayudamos a emprendedores y empresas a conectar de forma más efectiva y auténtica con sus clientes, impulsando su crecimiento a través de estrategias de marketing digital esenciales.',
    
    // "Lo que nos guía" section
    guidingTitle: isEnglish ? '👉 What guides us' : '👉 Lo que nos guía',
    guidingSubtitle: isEnglish
      ? 'Three fundamental pillars that define our way of working and creating sustainable results for our clients.'
      : 'Tres pilares fundamentales que definen nuestra forma de trabajar y crear resultados sostenibles para nuestros clientes.',
    
    // 3 pillars
    pillar1Title: isEnglish ? 'Strategy, technology and autonomy' : 'Estrategia, tecnología y autonomía',
    pillar1Desc: isEnglish
      ? 'We design strategies aligned with your real objectives, implement technology with intention (AI, CRM, automation) and train you to make decisions autonomously.'
      : 'Diseñamos estrategias alineadas con tus objetivos reales, implementamos tecnología con intención (IA, CRM, automatización) y te formamos para que puedas tomar decisiones con autonomía.',
    pillar2Title: isEnglish ? 'Measurable and sustainable results' : 'Resultados medibles y sostenibles',
    pillar2Desc: isEnglish
      ? 'We measure what matters. We establish clear KPIs, prioritize real impact and foster sustainable growth through continuous improvement.'
      : 'Medimos lo que importa. Establecemos KPIs claros, priorizamos el impacto real y fomentamos el crecimiento sostenible a través de la mejora continua.',
    pillar3Title: isEnglish ? 'Human connection and purpose' : 'Conexión humana y propósito',
    pillar3Desc: isEnglish
      ? 'We believe in people, in their authenticity and in their capacity to transform. We prioritize transparency, inclusion, work-life balance and respect as the basis of every relationship.'
      : 'Creemos en las personas, en su autenticidad y en su capacidad para transformar. Priorizamos la transparencia, la inclusión, la conciliación y el respeto como base de toda relación.',
    
    // Principles
    principlesTitle: isEnglish ? 'Our principles' : 'Nuestros principios',
    principleEducation: isEnglish ? 'Education' : 'Educación',
    principleSustainability: isEnglish ? 'Sustainability' : 'Sostenibilidad',
    principleEfficiency: isEnglish ? 'Efficiency' : 'Eficiencia',
    principleDiversity: isEnglish ? 'Diversity' : 'Diversidad',
    principleBalance: isEnglish ? 'Work-life balance' : 'Conciliación',
    principlePrivacy: isEnglish ? 'Privacy' : 'Privacidad',
    
    // Why Hayas section
    whyHayasTitle: isEnglish 
      ? 'Growing together: our community of business momentum'
      : 'Creciendo juntos: nuestra comunidad de impulso empresarial',
    whyHayasSubtitle: isEnglish
      ? 'Like a beech forest, we grow together: solid in our values, flexible to adapt to different contexts and with a broad vision to drive our businesses.'
      : 'Como un bosque de hayas, crecemos juntos: sólidos en nuestros valores, flexibles para adaptarnos a los distintos contextos y con una visión amplia para impulsar nuestras empresas.',
    whyHayasDesc1: isEnglish
      ? 'Beech forests are one of the most beautiful and resilient ecosystems in Europe:'
      : 'Los bosques de hayas son uno de los ecosistemas más bellos y resilientes de Europa:',
    whyHayasList1: isEnglish ? 'they thrive in community' : 'prosperan en comunidad',
    whyHayasList2: isEnglish ? 'they filter light harmoniously' : 'filtran la luz de forma armoniosa',
    whyHayasList3: isEnglish 
      ? 'they allow each tree to grow with strength, without losing its connection'
      : 'permiten que cada árbol crezca con fuerza, sin perder su conexión',
    whyHayasDesc2: isEnglish
      ? 'We are inspired by their ability to create a fertile microclimate, where everything is balanced with natural intelligence: the soil nourishes, the roots connect, the air flows.'
      : 'Nos inspira su capacidad para crear un microclima fértil, donde todo se equilibra con inteligencia natural: el suelo nutre, las raíces conectan, el aire fluye.',
    whyHayasDesc3: isEnglish
      ? 'Like beech forests, we evolve organically, seeking sustainability, connection and purpose in everything we do.'
      : 'Como los hayedos, evolucionamos de forma orgánica, buscando sostenibilidad, conexión y propósito en todo lo que hacemos.',
    
    // Team section
    teamTitle: isEnglish ? 'Our Team' : 'Nuestro Equipo',
    teamSubtitle: isEnglish
      ? 'Our diverse and multidisciplinary team leads strategy, project coordination and is in direct contact with our clients. They set the direction, ensure quality and make sure each project reflects the essence and impact that defines Hayas.'
      : 'Nuestro equipo, diverso y multidisciplinar, lidera la estrategia, la coordinación de proyectos y está en contacto directo con nuestros clientes. Son quienes marcan el rumbo, garantizan la calidad y aseguran que cada proyecto refleje la esencia y el impacto que define a Hayas.',
    
    // Certifications
    certificationsTitle: isEnglish ? 'Certifications and Technology Partners' : 'Certificaciones y Partners Tecnológicos',
    certificationsSubtitle: isEnglish
      ? 'We are official partners and maintain certifications on the main technology platforms in the market'
      : 'Somos partners oficiales y mantenemos certificaciones en las principales plataformas tecnológicas del mercado',
    
    // CTA
    ctaTitle: isEnglish 
      ? '👉 Ready to boost your business with strategy and purpose?'
      : '👉 ¿Listo para impulsar tu negocio con estrategia y sentido?',
    ctaSubtitle: isEnglish
      ? 'Schedule a free 30-minute consultation and discover how we can help you get more customers and optimize your digital strategy.'
      : 'Agenda una consulta gratuita de 30 minutos y descubre cómo podemos ayudarte a conseguir más clientes y optimizar tu estrategia digital.',
    ctaButton: isEnglish ? 'Request Free Consultation' : 'Solicitar Asesoría Gratuita',
    ctaNoCommitment: isEnglish ? 'No commitment' : 'Sin compromiso',
    ctaPersonalized: isEnglish ? 'Personalized consultation' : 'Consulta personalizada',
    ctaFree: isEnglish ? 'Free initial consultation' : 'Consultoría inicial gratuita',
    
    // FAQ
    faqTitle: isEnglish ? 'Frequently Asked Questions' : 'Preguntas Frecuentes',
    faqSubtitle: isEnglish 
      ? 'We resolve the most common questions about our agency and services'
      : 'Resolvemos las dudas más comunes sobre nuestra agencia y servicios',
    
    // Schedule link
    scheduleLink: isEnglish ? '/en/schedule-meeting' : '/es/agendar-reunion',
  };

  // Team members with bilingual descriptions
  const teamMembers = [{
    name: "Rubén",
    role: "CEO & Founder",
    description: isEnglish 
      ? "Visionary and strategic leader, specialized in digital transformation and sustainable business growth."
      : "Visionario y líder estratégico, especializado en transformación digital y crecimiento empresarial sostenible.",
    image: "/lovable-uploads/4aedecdb-9c20-490d-ba11-072181bdf3d6.png"
  }, {
    name: "Fátima",
    role: "Social Media Manager",
    description: isEnglish
      ? "Expert in social media management, content creation and community management to enhance digital presence."
      : "Experta en gestión de redes sociales, creación de contenido y community management para potenciar la presencia digital.",
    image: "/lovable-uploads/1d44b1f0-6326-4c3b-8653-d985c9724dd2.png"
  }, {
    name: "Ebelyn",
    role: "Digital Marketing Manager",
    description: isEnglish
      ? "Specialist in comprehensive digital strategies, SEO, SEM and campaign automation to maximize ROI."
      : "Especialista en estrategias digitales integrales, SEO, SEM y automatización de campañas para maximizar el ROI.",
    image: "/lovable-uploads/869ded51-92ac-41e0-815c-65c18ee5a35d.png"
  }, {
    name: "Sandra",
    role: isEnglish ? "Art Director" : "Directora de Arte",
    description: isEnglish
      ? "Creative expert in branding, visual design and user experience. Transforms ideas into impactful visual identities."
      : "Creativa experta en branding, diseño visual y experiencia de usuario. Transforma ideas en identidades visuales impactantes.",
    image: "/lovable-uploads/1a251b6e-acde-4e14-90a6-7cac838ba078.png"
  }, {
    name: "Iolanda",
    role: "Key Account Manager",
    description: isEnglish
      ? "Key account manager specialized in strategic business relationships and corporate client growth."
      : "Gestora de cuentas clave especializada en relaciones comerciales estratégicas y crecimiento de clientes corporativos.",
    image: "/lovable-uploads/55bec5bb-9e3b-4208-9101-ea3fa923568f.png"
  }, {
    name: "Daniela",
    role: isEnglish ? "Web Developer and CRM Specialist" : "Desarrollo web y especialista en CRM",
    description: isEnglish
      ? "Expert in web development and CRM system management, specialized in creating optimized digital solutions and efficient automations."
      : "Experta en desarrollo web y gestión de sistemas CRM, especializada en crear soluciones digitales optimizadas y automatizaciones eficientes.",
    image: "/lovable-uploads/26de1124-c82f-4741-800d-030e305eb147.png"
  }, {
    name: "Tomás White",
    role: "CRM Manager",
    description: isEnglish
      ? "Specialist in HubSpot implementation and management. Expert in business process automation, lead scoring and customer journey optimization to maximize conversions."
      : "Especialista en implementación y gestión de HubSpot. Experto en automatización de procesos comerciales, lead scoring y optimización de customer journey para maximizar conversiones.",
    image: "/lovable-uploads/foto_tomas.jpg"
  }, {
    name: "Styng Arias",
    role: "Full Stack Developer",
    description: isEnglish
      ? "Full Stack Developer specialized in modern web and mobile architectures. Expert in React, Node.js and databases, focused on creating scalable solutions and exceptional user experiences."
      : "Desarrollador Full Stack especializado en arquitecturas modernas web y mobile. Experto en React, Node.js y bases de datos, enfocado en crear soluciones escalables y experiencias de usuario excepcionales.",
    image: "/lovable-uploads/foto_styng.png"
  }];

  // FAQ items with bilingual content
  const faqItems = isEnglish ? [
    {
      question: "What type of agency is Hayas Marketing?",
      answer: "Hayas is a digital marketing agency and consultancy specialized in Essential Marketing, combining strategy, technology and innovation to create real impact. We work under a hybrid model, with freelance specialists coordinated by a strategic team that integrates as an extension of the client."
    },
    {
      question: "What type of companies do you help?",
      answer: "We accompany medium-sized companies, startups, professionals and entrepreneurs looking to grow sustainably. We specialize in projects that value authenticity, strategy and measurable results."
    },
    {
      question: "What makes you different from other agencies?",
      answer: "We don't make noise: we make impact. Our proposal is based on: People-centered strategies, Applied automation and artificial intelligence, Authentic and measurable content, A collaborative and transparent approach with our clients."
    },
    {
      question: "Do you offer one-time services or ongoing support?",
      answer: "Both. We can create a specific project (like a website, a CRM or an SEO strategy) or become your outsourced marketing team, aligned with your long-term goals."
    },
    {
      question: "What services do you offer?",
      answer: "Our services are designed to cover the essentials in digital marketing: Marketing and sales strategies, SEO, content and blogs, Social media and digital advertising, Web design, branding and UX, HubSpot CRM implementation, Applied automation and artificial intelligence."
    },
    {
      question: "What is it like to work with you?",
      answer: "We collaborate with clarity, purpose and commitment. Each client has an assigned team, coordinated by an Account Manager who prioritizes efficiency, active listening and goal achievement. We use tools like Slack, ClickUp and HubSpot to maintain fluid and transparent communication."
    },
    {
      question: "What is your work process?",
      answer: "Strategic diagnosis, Personalized value proposition, Agile execution with specialists, Tracking with clear metrics, Continuous optimization. All under a key principle: less noise, more impact."
    },
    {
      question: "Can I hire just a specific service?",
      answer: "Yes. We can help you with a specific service (like website design, CRM installation or site design) or design a comprehensive plan. We adapt each proposal to your real needs."
    },
    {
      question: "What are your prices?",
      answer: "Our budgets are customized. We base them on project scope, objectives and available resources. We guarantee transparency from the start: each proposal includes deliverables, timeline and clear metrics."
    }
  ] : [
    {
      question: "¿Qué tipo de agencia es Hayas Marketing?",
      answer: "Hayas es una agencia y consultora de marketing digital especializada en Marketing Esencial, que combina estrategia, tecnología e innovación para crear impacto real. Trabajamos bajo un modelo híbrido, con especialistas freelance coordinados por un equipo estratégico que se integra como una extensión del cliente."
    },
    {
      question: "¿A qué tipo de empresas ayudáis?",
      answer: "Acompañamos a empresas medianas, startups, profesionales y emprendedores que buscan crecer de forma sostenible. Nos especializamos en proyectos que valoran la autenticidad, la estrategia y los resultados medibles."
    },
    {
      question: "¿Qué os diferencia de otras agencias?",
      answer: "No hacemos ruido: hacemos impacto. Nuestra propuesta se basa en: Estrategias centradas en las personas, Automatización e inteligencia artificial aplicada, Contenidos auténticos y medibles, Un enfoque colaborativo y transparente con nuestros clientes."
    },
    {
      question: "¿Ofrecéis servicios puntuales o acompañamiento continuo?",
      answer: "Ambos. Podemos crear un proyecto específico (como una web, un CRM o una estrategia SEO) o convertirnos en tu equipo de marketing externalizado, alineado con tus metas a largo plazo."
    },
    {
      question: "¿Qué servicios ofrecéis?",
      answer: "Nuestros servicios están diseñados para cubrir lo esencial en marketing digital: Estrategias de marketing y ventas, SEO, contenidos y blogs, Redes sociales y publicidad digital, Diseño web, branding y UX, Implementación de CRM HubSpot, Automatización e inteligencia artificial aplicada."
    },
    {
      question: "¿Cómo es trabajar con vosotros?",
      answer: "Colaboramos con claridad, propósito y compromiso. Cada cliente tiene un equipo asignado, coordinado por un Account Manager que prioriza la eficiencia, la escucha activa y el cumplimiento de objetivos. Usamos herramientas como Slack, ClickUp y HubSpot para mantener una comunicación fluida y transparente."
    },
    {
      question: "¿Cuál es vuestro proceso de trabajo?",
      answer: "Diagnóstico estratégico, Propuesta de valor personalizada, Ejecución ágil con especialistas, Seguimiento con métricas claras, Optimización continua. Todo bajo un principio clave: menos ruido, más impacto."
    },
    {
      question: "¿Puedo contratar solo un servicio específico?",
      answer: "Sí. Podemos ayudarte con un servicio puntual (como el diseño de una web, la instalación de un CRM o el diseño de un sitio web) o diseñar un plan integral. Adaptamos cada propuesta a tus necesidades reales."
    },
    {
      question: "¿Cuáles son vuestros precios?",
      answer: "Nuestros presupuestos son personalizados. Nos basamos en el alcance del proyecto, los objetivos y los recursos disponibles. Garantizamos transparencia desde el inicio: cada propuesta incluye entregables, cronograma y métricas claras."
    }
  ];

  const certifications = [{
    name: "HubSpot Partner",
    logo: "/lovable-uploads/5b8c9d90-e355-4b27-b2a3-018f2c5a6734.png",
    url: "https://www.hubspot.com"
  }, {
    name: "Go High Level",
    logo: "/lovable-uploads/db3b7311-53c8-4d88-9818-3377203174a3.png",
    url: "https://www.gohighlevel.com"
  }, {
    name: "Google Partner",
    logo: googleLogo,
    url: "https://www.google.com/partners"
  }, {
    name: "Meta Business Partner",
    logo: "/lovable-uploads/e9556961-6aaa-41da-8ccb-fc0cdbd24142.png",
    url: "https://business.facebook.com"
  }, {
    name: "WordPress",
    logo: "/lovable-uploads/ed1d9897-ed2d-49a3-9ce2-1cea880aee32.png",
    url: "https://wordpress.org"
  }, {
    name: "Lovable Partner",
    logo: "/lovable-uploads/7794bc2d-846f-4d33-96bc-01ea5fe75d53.png",
    url: "https://lovable.dev"
  }, {
    name: "WhatsApp Business",
    logo: "/lovable-uploads/d5141b27-1db2-4f9b-8ff4-486fb23e0ae8.png",
    url: "https://business.whatsapp.com"
  }, {
    name: "Shopify Partner",
    logo: "/lovable-uploads/481fb23a-8710-41bb-93e6-b3c991fa58c8.png",
    url: "https://www.shopify.com/partners"
  }, {
    name: "Aircall Partner",
    logo: "/lovable-uploads/b18fc977-3bb3-4613-8232-8fac4fb4d9ee.png",
    url: "https://aircall.io"
  }, {
    name: "AEPD",
    logo: "/lovable-uploads/f4b23acc-a714-4f14-92f4-50ba1fda2565.png",
    url: "https://www.aepd.es"
  }, {
    name: "Sharpei",
    logo: "/lovable-uploads/42d61146-8307-49fd-bf0e-6f48707c1284.png",
    url: "https://www.gosharpei.com/"
  }, {
    name: "Connectif",
    logo: "/lovable-uploads/92c382be-7597-473a-97d4-fc45f3d7d598.png",
    url: "https://connectif.ai"
  }];

  return <div className="min-h-screen flex flex-col">
      <EnhancedSEO />
      <Navigation />
      
      <main className="flex-grow mt-4 md:mt-6">
        {/* Hero Section - Modernized with gradient background */}
        <section className="relative py-24 md:py-32 lg:py-40 overflow-hidden bg-header-gradient bg-pattern-dots">
          {/* Enhanced decorative elements */}
          <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
            <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-hayas-primary/15 blur-3xl"></div>
            <div className="absolute top-20 -right-32 w-96 h-96 rounded-full bg-hayas-secondary/10 blur-2xl"></div>
            <div className="absolute top-1/2 left-1/4 w-40 h-40 rounded-full bg-hayas-primary/8 blur-xl"></div>
          </div>
          
          {/* Floating geometric shapes */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
            <div className="absolute top-20 left-10 w-6 h-6 bg-hayas-primary/20 rotate-45 animate-pulse"></div>
            <div className="absolute bottom-32 right-20 w-8 h-8 bg-hayas-secondary/15 rounded-full animate-bounce" style={{
            animationDelay: '2s'
          }}></div>
            <div className="absolute top-40 right-1/4 w-4 h-4 bg-hayas-primary/25 rotate-12"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <h1 className="title-hero mb-8 leading-tight animate-fade-in">
                {content.heroTitle1}<span className="text-gradient-primary">{content.heroTitle2}</span>
              </h1>
              <p className="text-hero text-gray-800 mb-8 animate-slide-up max-w-4xl mx-auto leading-relaxed font-medium">{content.heroSubtitle}</p>
              
              {/* New integrated text content */}
              <div className="max-w-5xl mx-auto animate-fade-in">
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 border border-white/30 shadow-elegant">
                  <p className="text-xl text-gray-800 leading-relaxed font-medium">
                    {content.heroDescription}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom section separator */}
          <div className="absolute bottom-0 left-0 right-0 h-px section-divider"></div>
        </section>

        {/* Nuestro Enfoque - Sección de enfoques estratégicos */}
        <section className="relative py-20 md:py-28 bg-white overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
            <div className="absolute top-20 -left-20 w-64 h-64 rounded-full bg-hayas-primary/10 blur-2xl"></div>
            <div className="absolute bottom-20 -right-20 w-80 h-80 rounded-full bg-hayas-secondary/8 blur-3xl"></div>
            <div className="absolute top-1/2 left-1/3 w-32 h-32 rounded-full bg-hayas-primary/5 blur-xl"></div>
          </div>
          
          {/* Subtle geometric patterns */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
            <div className="absolute top-32 left-12 w-3 h-3 bg-hayas-primary/20 rotate-45"></div>
            <div className="absolute bottom-40 right-16 w-4 h-4 bg-hayas-secondary/15 rounded-full"></div>
            <div className="absolute top-20 right-1/3 w-2 h-2 bg-hayas-primary/25"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-7xl mx-auto">
              {/* Header section */}
              <div className="text-center mb-16 relative">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-6 w-16 h-1 bg-gradient-primary rounded-full opacity-70"></div>
                <h2 className="title-section mb-6 text-gradient-primary relative">
                  {content.guidingTitle}
                  <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-hayas-primary/40 rounded-full"></span>
                </h2>
                <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
                  {content.guidingSubtitle}
                </p>
              </div>
              
              {/* 3 Main conceptual blocks */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-20">
                {/* Estrategia, tecnología y autonomía */}
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 text-center shadow-elegant hover-scale border border-gray-100 relative overflow-hidden group">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-primary opacity-80"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-hayas-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="w-20 h-20 bg-hayas-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Target className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-6 text-hayas-primary leading-tight">{content.pillar1Title}</h3>
                    <p className="text-gray-700 leading-relaxed">
                      {content.pillar1Desc}
                    </p>
                  </div>
                </div>
                
                {/* Resultados medibles y sostenibles */}
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 text-center shadow-elegant hover-scale border border-gray-100 relative overflow-hidden group">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-primary opacity-80"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-hayas-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="w-20 h-20 bg-hayas-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <BarChart3 className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-6 text-hayas-primary leading-tight">{content.pillar2Title}</h3>
                    <p className="text-gray-700 leading-relaxed">
                      {content.pillar2Desc}
                    </p>
                  </div>
                </div>
                
                {/* Conexión humana y propósito */}
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 text-center shadow-elegant hover-scale border border-gray-100 relative overflow-hidden group">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-primary opacity-80"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-hayas-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="w-20 h-20 bg-hayas-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Heart className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-6 text-hayas-primary leading-tight">{content.pillar3Title}</h3>
                    <p className="text-gray-700 leading-relaxed">
                      {content.pillar3Desc}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Nuestros principios - Visual row matching main section size */}
              <div className="pt-12 border-t border-hayas-primary/20">
                <div className="text-center mb-12">
                  <h3 className="text-2xl md:text-3xl font-bold text-hayas-primary mb-2">{content.principlesTitle}</h3>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                  <div className="flex flex-col items-center group">
                    <div className="w-20 h-20 bg-hayas-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-hayas-primary/20 transition-colors duration-300 shadow-lg group-hover:scale-110 transition-transform">
                      <span className="text-4xl">🎓</span>
                    </div>
                    <span className="text-lg font-semibold text-hayas-primary">{content.principleEducation}</span>
                  </div>
                  
                  <div className="flex flex-col items-center group">
                    <div className="w-20 h-20 bg-hayas-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-hayas-primary/20 transition-colors duration-300 shadow-lg group-hover:scale-110 transition-transform">
                      <span className="text-4xl">🌿</span>
                    </div>
                    <span className="text-lg font-semibold text-hayas-primary">{content.principleSustainability}</span>
                  </div>
                  
                  <div className="flex flex-col items-center group">
                    <div className="w-20 h-20 bg-hayas-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-hayas-primary/20 transition-colors duration-300 shadow-lg group-hover:scale-110 transition-transform">
                      <span className="text-4xl">⚡</span>
                    </div>
                    <span className="text-lg font-semibold text-hayas-primary">{content.principleEfficiency}</span>
                  </div>
                  
                  <div className="flex flex-col items-center group">
                    <div className="w-20 h-20 bg-hayas-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-hayas-primary/20 transition-colors duration-300 shadow-lg group-hover:scale-110 transition-transform">
                      <span className="text-4xl">💚</span>
                    </div>
                    <span className="text-lg font-semibold text-hayas-primary">{content.principleDiversity}</span>
                  </div>
                  
                  <div className="flex flex-col items-center group">
                    <div className="w-20 h-20 bg-hayas-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-hayas-primary/20 transition-colors duration-300 shadow-lg group-hover:scale-110 transition-transform">
                      <span className="text-4xl">🤝</span>
                    </div>
                    <span className="text-lg font-semibold text-hayas-primary">{content.principleBalance}</span>
                  </div>
                  
                  <div className="flex flex-col items-center group">
                    <div className="w-20 h-20 bg-hayas-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-hayas-primary/20 transition-colors duration-300 shadow-lg group-hover:scale-110 transition-transform">
                      <span className="text-4xl">🔒</span>
                    </div>
                    <span className="text-lg font-semibold text-hayas-primary">{content.principlePrivacy}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom section separator */}
          <div className="absolute bottom-0 left-0 right-0 h-px section-divider"></div>
        </section>

        {/* ¿Por qué Hayas? - Sección de origen del nombre */}
        <section className="py-16 md:py-20 relative overflow-hidden">
          {/* Fondo del bosque de hayas */}
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
          backgroundImage: `url('/lovable-uploads/1399f918-aa74-41b7-b838-f1dc283e5b87.png')`,
          filter: 'brightness(0.6) contrast(1.1)'
        }}></div>
          
          {/* Overlay para mejorar legibilidad */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/75 to-white/70"></div>
          
          {/* Decoraciones sutiles */}
          <div className="absolute top-0 left-0 w-full h-full opacity-5">
            <div className="absolute top-12 left-12 w-32 h-32 rounded-full bg-hayas-primary/20"></div>
            <div className="absolute bottom-12 right-12 w-48 h-48 rounded-full bg-hayas-secondary/15"></div>
            <div className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full bg-hayas-primary/10"></div>
          </div>
          
          <div className="container mx-auto px-4 relative">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient-primary">
                  {content.whyHayasTitle}
                </h2>
                <p className="text-lg text-gray-900 font-medium max-w-2xl mx-auto">
                  {content.whyHayasSubtitle}
                </p>
              </div>
              
              <div className="max-w-4xl mx-auto">
                {/* Contenido principal de texto */}
                <div className="space-y-8">
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 border-l-4 border-hayas-primary shadow-sm">
                    <p className="text-gray-900 font-medium leading-relaxed text-lg">
                      {content.whyHayasDesc1}
                    </p>
                    <ul className="mt-6 space-y-3">
                      <li className="flex items-center text-gray-900">
                        <CheckCircle className="h-5 w-5 text-hayas-primary mr-3 flex-shrink-0" />
                        <span className="text-lg">{content.whyHayasList1}</span>
                      </li>
                      <li className="flex items-center text-gray-900">
                        <CheckCircle className="h-5 w-5 text-hayas-primary mr-3 flex-shrink-0" />
                        <span className="text-lg">{content.whyHayasList2}</span>
                      </li>
                      <li className="flex items-center text-gray-900">
                        <CheckCircle className="h-5 w-5 text-hayas-primary mr-3 flex-shrink-0" />
                        <span className="text-lg">{content.whyHayasList3}</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl p-8 shadow-sm border border-gray-200">
                    <p className="text-gray-900 font-medium leading-relaxed mb-6 text-lg">
                      {content.whyHayasDesc2}
                    </p>
                    <p className="text-gray-900 font-medium leading-relaxed text-lg">
                      {content.whyHayasDesc3}
                    </p>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </section>

        {/* Nuestro Equipo - Fondo blanco */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient-primary">{content.teamTitle}</h2>
                <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                  {content.teamSubtitle}
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {teamMembers.map((member, index) => <div key={index} className="bg-white rounded-xl p-6 text-center shadow-corporate hover-scale group">
                  <div className="relative w-48 h-48 mx-auto mb-4 overflow-hidden rounded-full border-4 border-gradient-primary">
                      <img src={member.image} alt={`${member.name} - ${member.role}`} width={400} height={400} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" style={{ aspectRatio: '1/1' }} />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-hayas-primary">{member.name}</h3>
                    <p className="text-hayas-primary font-medium mb-3 text-sm">{member.role}</p>
                    <p className="text-gray-700 text-sm leading-relaxed">{member.description}</p>
                  </div>)}
              </div>
            </div>
          </div>
        </section>


        <JoinFreelancersSection />


        {/* Certificaciones y Partners - Fondo tenue */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-hayas-primary/5 to-hayas-secondary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient-primary">{content.certificationsTitle}</h2>
              <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto">
                {content.certificationsSubtitle}
              </p>
              
              <div className="space-y-8">
                {/* Primera línea - 3 logos */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {certifications.slice(0, 3).map((cert, index) => (
                    <div key={index} className="group hover-scale">
                      <a 
                        href={cert.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <div className="bg-white rounded-xl p-8 shadow-corporate border border-gray-100 group-hover:shadow-elegant transition-all duration-300">
                          <div className="h-20 flex items-center justify-center mb-4">
                            <img src={cert.logo} alt={`${cert.name} logo`} width={150} height={64} className="h-16 object-contain filter transition-all duration-300 group-hover:scale-110" style={{ aspectRatio: '150/64' }} />
                          </div>
                          <p className="text-sm font-semibold text-hayas-primary text-center">{cert.name}</p>
                        </div>
                      </a>
                    </div>
                  ))}
                </div>
                
                {/* Segunda línea - 3 logos */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {certifications.slice(3, 6).map((cert, index) => (
                    <div key={index} className="group hover-scale">
                      <a 
                        href={cert.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <div className="bg-white rounded-xl p-8 shadow-corporate border border-gray-100 group-hover:shadow-elegant transition-all duration-300">
                          <div className="h-20 flex items-center justify-center mb-4">
                            <img src={cert.logo} alt={`${cert.name} logo`} width={150} height={64} className="h-16 object-contain filter transition-all duration-300 group-hover:scale-110" style={{ aspectRatio: '150/64' }} />
                          </div>
                          <p className="text-sm font-semibold text-hayas-primary text-center">{cert.name}</p>
                        </div>
                      </a>
                    </div>
                  ))}
                </div>
                
                {/* Tercera línea - 6 logos restantes */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {certifications.slice(6).map((cert, index) => (
                    <div key={index} className="group hover-scale">
                      <a 
                        href={cert.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <div className="bg-white rounded-xl p-8 shadow-corporate border border-gray-100 group-hover:shadow-elegant transition-all duration-300">
                          <div className="h-20 flex items-center justify-center mb-4">
                            <img src={cert.logo} alt={`${cert.name} logo`} width={150} height={cert.name === 'AEPD' ? 80 : 64} className={`${cert.name === 'AEPD' ? 'h-20' : 'h-16'} object-contain filter transition-all duration-300 group-hover:scale-110`} style={{ aspectRatio: cert.name === 'AEPD' ? '150/80' : '150/64' }} />
                          </div>
                          <p className="text-sm font-semibold text-hayas-primary text-center">{cert.name}</p>
                        </div>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Lo que dicen nuestros clientes - Fondo blanco */}
        <section className="py-16 md:py-20 bg-white">
          <ReviewsSection />
        </section>

        {/* FAQ Section */}
        <FAQSection 
          title={content.faqTitle}
          subtitle={content.faqSubtitle}
          faqs={faqItems}
        />

        {/* CTA Final - Solicitar Asesoría */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-white rounded-2xl p-8 md:p-12 shadow-elegant border border-gray-100">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gradient-primary mb-4">
                    {content.ctaTitle}
                  </h2>
                  <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                    {content.ctaSubtitle}
                  </p>
                </div>
                
                <div className="flex justify-center">
                  <Button 
                    className="gradient-primary text-white py-6 px-8 text-lg font-medium shadow-elegant hover-scale focus-ring"
                    onClick={() => window.location.href = content.scheduleLink}
                  >
                    <ArrowRight className="mr-2 h-5 w-5" />
                    {content.ctaButton}
                  </Button>
                </div>
                
                <div className="mt-8 flex items-center justify-center gap-6 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-hayas-primary" />
                    <span>{content.ctaNoCommitment}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-hayas-primary" />
                    <span>{content.ctaPersonalized}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-hayas-primary" />
                    <span>{content.ctaFree}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>;
};
export default Nosotros;
