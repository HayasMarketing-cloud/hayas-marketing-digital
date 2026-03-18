import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ReviewsSection from '@/components/ReviewsSection';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Target, BarChart3, Heart } from 'lucide-react';
import EnhancedSEO from '@/components/EnhancedSEO';
import { useLanguage } from '@/contexts/LanguageContext';
import FAQSection from '@/components/FAQSection';

const Nosotros = () => {
  const { isEnglish } = useLanguage();

  const content = {
    // Hero
    heroLabel: isEnglish ? 'The Agency' : 'La Agencia',
    heroTitle: isEnglish ? 'SENSE thinks.\nHayas activates.' : 'SENSE piensa.\nHayas activa.',
    heroSubtitle: isEnglish
      ? 'Since 2014, we help companies connect market intelligence with strategic execution. Not as an agency. As a system.'
      : 'Desde 2014, ayudamos a empresas a conectar inteligencia de mercado con ejecución estratégica. No como agencia. Como sistema.',

    // Dual positioning
    dualTitle: isEnglish ? 'Two forces, one system' : 'Dos fuerzas, un sistema',
    senseTitle: 'SENSE',
    senseRole: isEnglish ? 'Marketing Operating System' : 'Marketing Operating System',
    senseDesc: isEnglish
      ? 'The intelligence layer. 6 modules that connect your brand identity, market signals, strategic direction and tactical planning in a continuous flow.'
      : 'La capa de inteligencia. 6 módulos que conectan tu identidad de marca, señales de mercado, dirección estratégica y planificación táctica en un flujo continuo.',
    hayasTitle: 'HAYAS',
    hayasRole: isEnglish ? 'Activation System' : 'Sistema de Activación',
    hayasDesc: isEnglish
      ? 'The execution layer. 6 specialized activations that transform strategic decisions into measurable results. From branding to automation.'
      : 'La capa de ejecución. 6 activaciones especializadas que transforman decisiones estratégicas en resultados medibles. Del branding a la automatización.',

    // Pillars
    pillarsTitle: isEnglish ? 'What guides us' : 'Lo que nos guía',
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
      ? 'We believe in people, in their authenticity and in their capacity to transform. We prioritize transparency, inclusion, work-life balance and respect.'
      : 'Creemos en las personas, en su autenticidad y en su capacidad para transformar. Priorizamos la transparencia, la inclusión, la conciliación y el respeto.',

    // Principles
    principles: [
      { emoji: '🎓', label: isEnglish ? 'Education' : 'Educación' },
      { emoji: '🌿', label: isEnglish ? 'Sustainability' : 'Sostenibilidad' },
      { emoji: '⚡', label: isEnglish ? 'Efficiency' : 'Eficiencia' },
      { emoji: '💚', label: isEnglish ? 'Diversity' : 'Diversidad' },
      { emoji: '🤝', label: isEnglish ? 'Work-life balance' : 'Conciliación' },
      { emoji: '🔒', label: isEnglish ? 'Privacy' : 'Privacidad' },
    ],

    // Why Hayas
    whyHayasTitle: isEnglish ? 'Why "Hayas"?' : '¿Por qué "Hayas"?',
    whyHayasSubtitle: isEnglish
      ? 'Like a beech forest, we grow together: solid in our values, flexible to adapt, with broad vision.'
      : 'Como un bosque de hayas, crecemos juntos: sólidos en nuestros valores, flexibles para adaptarnos, con visión amplia.',
    whyHayasList: isEnglish
      ? ['They thrive in community', 'They filter light harmoniously', 'Each tree grows strong without losing connection']
      : ['Prosperan en comunidad', 'Filtran la luz de forma armoniosa', 'Cada árbol crece con fuerza sin perder su conexión'],
    whyHayasClose: isEnglish
      ? 'Like beech forests, we evolve organically, seeking sustainability, connection and purpose in everything we do.'
      : 'Como los hayedos, evolucionamos de forma orgánica, buscando sostenibilidad, conexión y propósito en todo lo que hacemos.',

    // Team
    teamTitle: isEnglish ? 'The team' : 'El equipo',
    teamSubtitle: isEnglish
      ? 'Diverse and multidisciplinary. They set the direction, ensure quality and make sure each project reflects our essence.'
      : 'Diverso y multidisciplinar. Marca el rumbo, garantiza la calidad y asegura que cada proyecto refleje nuestra esencia.',

    // Certifications
    certsTitle: isEnglish ? 'Technology Partners' : 'Partners Tecnológicos',
    certsSubtitle: isEnglish
      ? 'Official partners and certifications on the main platforms'
      : 'Partners oficiales y certificaciones en las principales plataformas',

    // CTA
    ctaTitle: isEnglish ? 'Ready to activate your strategy?' : '¿Listo para activar tu estrategia?',
    ctaSubtitle: isEnglish
      ? 'Schedule a free 30-minute consultation. No commitment.'
      : 'Agenda una consulta gratuita de 30 minutos. Sin compromiso.',
    ctaButton: isEnglish ? 'Request Free Consultation' : 'Solicitar Consulta Gratuita',
    scheduleLink: isEnglish ? '/en/schedule-meeting' : '/es/agendar-reunion',

    // FAQ
    faqTitle: isEnglish ? 'Frequently Asked Questions' : 'Preguntas Frecuentes',
    faqSubtitle: isEnglish
      ? 'Common questions about our agency and how we work'
      : 'Dudas comunes sobre nuestra agencia y forma de trabajo',
  };

  const teamMembers = [
    { name: "Rubén", role: "CEO & Founder", image: "/lovable-uploads/4aedecdb-9c20-490d-ba11-072181bdf3d6.png",
      description: isEnglish ? "Visionary and strategic leader. 15+ years in digital transformation and B2B growth." : "Visionario y líder estratégico. +15 años en transformación digital y crecimiento B2B." },
    { name: "Fátima", role: "Social Media Manager", image: "/lovable-uploads/1d44b1f0-6326-4c3b-8653-d985c9724dd2.png",
      description: isEnglish ? "Expert in social media, content creation and community management." : "Experta en redes sociales, creación de contenido y community management." },
    { name: "Ebelyn", role: "Digital Marketing Manager", image: "/lovable-uploads/869ded51-92ac-41e0-815c-65c18ee5a35d.png",
      description: isEnglish ? "Specialist in digital strategies, SEO, SEM and campaign automation." : "Especialista en estrategias digitales, SEO, SEM y automatización de campañas." },
    { name: "Sandra", role: isEnglish ? "Art Director" : "Directora de Arte", image: "/lovable-uploads/1a251b6e-acde-4e14-90a6-7cac838ba078.png",
      description: isEnglish ? "Creative expert in branding, visual design and user experience." : "Creativa experta en branding, diseño visual y experiencia de usuario." },
    { name: "Iolanda", role: "Key Account Manager", image: "/lovable-uploads/55bec5bb-9e3b-4208-9101-ea3fa923568f.png",
      description: isEnglish ? "Strategic business relationships and corporate client growth." : "Relaciones comerciales estratégicas y crecimiento de clientes corporativos." },
    { name: "Daniela", role: isEnglish ? "Web Developer & CRM" : "Desarrollo Web y CRM", image: "/lovable-uploads/26de1124-c82f-4741-800d-030e305eb147.png",
      description: isEnglish ? "Web development and CRM systems. Optimized digital solutions." : "Desarrollo web y gestión de sistemas CRM. Soluciones digitales optimizadas." },
    { name: "Tomás White", role: "CRM Manager", image: "/lovable-uploads/foto_tomas.jpg",
      description: isEnglish ? "HubSpot specialist. Process automation and customer journey optimization." : "Especialista en HubSpot. Automatización de procesos y optimización de customer journey." },
    { name: "Styng Arias", role: "Full Stack Developer", image: "/lovable-uploads/foto_styng.png",
      description: isEnglish ? "Modern web and mobile architectures. React, Node.js, scalable solutions." : "Arquitecturas modernas web y mobile. React, Node.js, soluciones escalables." },
  ];

  const certifications = [
    { name: "HubSpot Partner", logo: "/lovable-uploads/5b8c9d90-e355-4b27-b2a3-018f2c5a6734.png", url: "https://www.hubspot.com" },
    { name: "Go High Level", logo: "/lovable-uploads/db3b7311-53c8-4d88-9818-3377203174a3.png", url: "https://www.gohighlevel.com" },
    { name: "Google Partner", logo: "/lovable-uploads/google-logo.png", url: "https://www.google.com/partners" },
    { name: "Meta Business Partner", logo: "/lovable-uploads/e9556961-6aaa-41da-8ccb-fc0cdbd24142.png", url: "https://business.facebook.com" },
    { name: "WordPress", logo: "/lovable-uploads/ed1d9897-ed2d-49a3-9ce2-1cea880aee32.png", url: "https://wordpress.org" },
    { name: "Lovable Partner", logo: "/lovable-uploads/7794bc2d-846f-4d33-96bc-01ea5fe75d53.png", url: "https://lovable.dev" },
    { name: "WhatsApp Business", logo: "/lovable-uploads/d5141b27-1db2-4f9b-8ff4-486fb23e0ae8.png", url: "https://business.whatsapp.com" },
    { name: "Shopify Partner", logo: "/lovable-uploads/481fb23a-8710-41bb-93e6-b3c991fa58c8.png", url: "https://www.shopify.com/partners" },
    { name: "Aircall Partner", logo: "/lovable-uploads/b18fc977-3bb3-4613-8232-8fac4fb4d9ee.png", url: "https://aircall.io" },
    { name: "AEPD", logo: "/lovable-uploads/f4b23acc-a714-4f14-92f4-50ba1fda2565.png", url: "https://www.aepd.es" },
    { name: "Sharpei", logo: "/lovable-uploads/42d61146-8307-49fd-bf0e-6f48707c1284.png", url: "https://www.gosharpei.com/" },
    { name: "Connectif", logo: "/lovable-uploads/92c382be-7597-473a-97d4-fc45f3d7d598.png", url: "https://connectif.ai" },
  ];

  const faqItems = isEnglish ? [
    { question: "What type of agency is Hayas Marketing?", answer: "Hayas is a digital marketing consultancy specialized in connecting market intelligence with strategic execution. We work under a hybrid model with specialists coordinated by a strategic team that integrates as an extension of the client." },
    { question: "What type of companies do you help?", answer: "We accompany medium-sized companies, startups and entrepreneurs looking to grow sustainably. We specialize in projects that value strategy and measurable results." },
    { question: "What makes you different from other agencies?", answer: "We don't make noise: we make impact. Our system SENSE provides the intelligence; our team Hayas activates it. Strategy, technology, automation and AI, fully integrated." },
    { question: "Do you offer one-time services or ongoing support?", answer: "Both. We can create a specific project or become your outsourced marketing system, aligned with your long-term goals." },
    { question: "What is your work process?", answer: "Strategic diagnosis → Personalized value proposition → Agile execution with specialists → Tracking with clear metrics → Continuous optimization. Less noise, more impact." },
    { question: "What are your prices?", answer: "Our budgets are customized based on project scope, objectives and resources. We guarantee transparency: each proposal includes deliverables, timeline and metrics." },
  ] : [
    { question: "¿Qué tipo de agencia es Hayas Marketing?", answer: "Hayas es una consultora de marketing digital especializada en conectar inteligencia de mercado con ejecución estratégica. Trabajamos bajo un modelo híbrido con especialistas coordinados por un equipo estratégico que se integra como extensión del cliente." },
    { question: "¿A qué tipo de empresas ayudáis?", answer: "Acompañamos a empresas medianas, startups y emprendedores que buscan crecer de forma sostenible. Nos especializamos en proyectos que valoran la estrategia y los resultados medibles." },
    { question: "¿Qué os diferencia de otras agencias?", answer: "No hacemos ruido: hacemos impacto. Nuestro sistema SENSE proporciona la inteligencia; nuestro equipo Hayas la activa. Estrategia, tecnología, automatización e IA, totalmente integrados." },
    { question: "¿Ofrecéis servicios puntuales o acompañamiento continuo?", answer: "Ambos. Podemos crear un proyecto específico o convertirnos en tu sistema de marketing externalizado, alineado con tus metas a largo plazo." },
    { question: "¿Cuál es vuestro proceso de trabajo?", answer: "Diagnóstico estratégico → Propuesta de valor personalizada → Ejecución ágil con especialistas → Seguimiento con métricas claras → Optimización continua. Menos ruido, más impacto." },
    { question: "¿Cuáles son vuestros precios?", answer: "Nuestros presupuestos son personalizados según el alcance, objetivos y recursos disponibles. Garantizamos transparencia: cada propuesta incluye entregables, cronograma y métricas." },
  ];

  const pillars = [
    { icon: Target, title: content.pillar1Title, desc: content.pillar1Desc },
    { icon: BarChart3, title: content.pillar2Title, desc: content.pillar2Desc },
    { icon: Heart, title: content.pillar3Title, desc: content.pillar3Desc },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <EnhancedSEO />
      <Navigation />

      <main className="flex-grow">
        {/* Hero — Minimal, editorial */}
        <section className="relative py-28 md:py-40 bg-foreground overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary mb-6 block">
                {content.heroLabel}
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-dm-sans text-background leading-[1.1] mb-8 whitespace-pre-line">
                {content.heroTitle}
              </h1>
              <p className="text-lg md:text-xl text-background/60 max-w-2xl leading-relaxed">
                {content.heroSubtitle}
              </p>
            </div>
          </div>
        </section>

        {/* Dual Positioning — SENSE + HAYAS */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold font-dm-sans text-foreground mb-16 text-center">
              {content.dualTitle}
            </h2>
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
              {/* SENSE */}
              <div className="relative p-8 md:p-10 rounded-2xl border border-border bg-muted/30">
                <div className="absolute top-0 left-8 -translate-y-1/2 bg-foreground text-background text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                  {content.senseTitle}
                </div>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4 mt-2">{content.senseRole}</p>
                <p className="text-foreground/80 leading-relaxed">{content.senseDesc}</p>
              </div>
              {/* HAYAS */}
              <div className="relative p-8 md:p-10 rounded-2xl border border-secondary/30 bg-secondary/5">
                <div className="absolute top-0 left-8 -translate-y-1/2 bg-secondary text-secondary-foreground text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                  {content.hayasTitle}
                </div>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4 mt-2">{content.hayasRole}</p>
                <p className="text-foreground/80 leading-relaxed">{content.hayasDesc}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pillars + Principles */}
        <section className="py-20 md:py-28 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold font-dm-sans text-foreground mb-16 text-center">
              {content.pillarsTitle}
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">
              {pillars.map((p, i) => (
                <div key={i} className="text-center space-y-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto">
                    <p.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>

            {/* Principles strip */}
            <div className="border-t border-border pt-12">
              <div className="flex flex-wrap justify-center gap-6 md:gap-10">
                {content.principles.map((p, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <span className="text-2xl">{p.emoji}</span>
                    <span className="text-sm font-semibold text-foreground/70">{p.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Hayas — Origin story */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center" style={{
            backgroundImage: `url('/lovable-uploads/1399f918-aa74-41b7-b838-f1dc283e5b87.png')`,
            filter: 'brightness(0.4)'
          }} />
          <div className="absolute inset-0 bg-foreground/60" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold font-dm-sans text-background mb-6">
                {content.whyHayasTitle}
              </h2>
              <p className="text-lg text-background/70 mb-10 leading-relaxed">
                {content.whyHayasSubtitle}
              </p>
              <div className="space-y-3 mb-10">
                {content.whyHayasList.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 justify-center">
                    <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0" />
                    <span className="text-background/80">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-background/50 text-sm italic max-w-xl mx-auto">
                {content.whyHayasClose}
              </p>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl font-bold font-dm-sans text-foreground mb-4">{content.teamTitle}</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">{content.teamSubtitle}</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto">
              {teamMembers.map((member, i) => (
                <div key={i} className="text-center group">
                  <div className="w-28 h-28 md:w-32 md:h-32 mx-auto mb-4 rounded-full overflow-hidden border-2 border-border group-hover:border-primary/30 transition-colors">
                    <img src={member.image} alt={`${member.name} - ${member.role}`} className="w-full h-full object-cover" width={128} height={128} style={{ aspectRatio: '1/1' }} />
                  </div>
                  <h3 className="font-bold text-foreground text-sm">{member.name}</h3>
                  <p className="text-xs text-primary font-medium mb-1.5">{member.role}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed hidden md:block">{member.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold font-dm-sans text-foreground mb-3">{content.certsTitle}</h2>
              <p className="text-muted-foreground text-sm">{content.certsSubtitle}</p>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-4xl mx-auto">
              {certifications.map((cert, i) => (
                <a key={i} href={cert.url} target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center p-4 rounded-xl bg-background border border-border hover:border-primary/20 hover:shadow-sm transition-all group">
                  <img src={cert.logo} alt={cert.name} className="h-10 md:h-12 object-contain opacity-60 group-hover:opacity-100 transition-opacity" width={80} height={48} style={{ aspectRatio: '80/48' }} />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section className="py-16 md:py-20 bg-background">
          <ReviewsSection />
        </section>

        {/* FAQ */}
        <FAQSection title={content.faqTitle} subtitle={content.faqSubtitle} faqs={faqItems} />

        {/* CTA — Dark, minimal */}
        <section className="py-20 md:py-28 bg-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-dm-sans text-background mb-4">
              {content.ctaTitle}
            </h2>
            <p className="text-background/50 mb-10 max-w-lg mx-auto">
              {content.ctaSubtitle}
            </p>
            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8"
              onClick={() => window.location.href = content.scheduleLink}
            >
              <ArrowRight className="mr-2 h-5 w-5" />
              {content.ctaButton}
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Nosotros;
