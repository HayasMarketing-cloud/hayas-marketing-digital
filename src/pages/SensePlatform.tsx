import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ReviewsSection from '@/components/ReviewsSection';
import { Card, CardContent } from '@/components/ui/card';
import EnhancedSEO from '@/components/EnhancedSEO';
import FAQSection from '@/components/FAQSection';
import ServiceContactSection from '@/components/ServiceContactSection';
import { useTranslation } from '@/hooks/useTranslation';
import { Button } from '@/components/ui/button';
import {
  BrainCircuit,
  Search,
  BarChart3,
  ArrowRight,
  Code2,
  Zap,
  Shield,
  Rocket,
  Database,
  Cpu,
  Radar,
  Target,
  FileText,
  Settings,
  Sparkles,
  Eye,
  LayoutDashboard,
  RefreshCw,
  Users,
  Building2,
  Briefcase,
  Globe,
  BotMessageSquare,
} from 'lucide-react';

const SensePlatform = () => {
  const { language } = useTranslation();
  const isEnglish = language === 'en';

  const ctaLink = isEnglish ? '/en/schedule-meeting' : '/es/agendar-reunion';
  const ctaButton = isEnglish ? 'Schedule a demo' : 'Agendar una demo';

  // ── 6 Modules ──
  const modules = [
    {
      number: '01',
      name: 'BRAIN',
      subtitle: isEnglish ? 'Strategic Identity' : 'Identidad Estratégica',
      icon: BrainCircuit,
      description: isEnglish
        ? 'Your centralized marketing memory. Value proposition, solutions, ICPs, Buyer Personas, competitive advantages and brand voice — all in one place. The Brain is the context that makes every AI output relevant to your business, not generic.'
        : 'Tu memoria de marketing centralizada. Propuesta de valor, soluciones, ICPs, Buyer Personas, ventajas competitivas y voz de marca — todo en un solo lugar. El Brain es el contexto que hace que cada output de la IA sea relevante para tu negocio, no genérico.',
    },
    {
      number: '02',
      name: 'RADAR',
      subtitle: isEnglish ? 'Market Intelligence' : 'Inteligencia de Mercado',
      icon: Radar,
      description: isEnglish
        ? 'Continuous monitoring of your industry and competitors. Signals prioritized by strategic relevance, AI-powered competitor reports, and Market Reports that synthesize opportunities and threats. Your team sees what matters, not noise.'
        : 'Monitorización continua de tu industria y competidores. Señales priorizadas por relevancia estratégica, informes de competidor con IA, y Market Reports que sintetizan oportunidades y amenazas. Tu equipo ve lo que importa, no ruido.',
    },
    {
      number: '03',
      name: 'SEARCH',
      subtitle: isEnglish ? 'Visibility & Intent' : 'Visibilidad e Intención',
      icon: Search,
      description: isEnglish
        ? 'Keyword tracking on Google, Bing and AI engines (ChatGPT, Gemini, Perplexity). Brand perception audits on LLMs, Content Gap analysis and topical authority mapping. Understand how the market sees you — including AI.'
        : 'Seguimiento de keywords en Google, Bing y motores de IA (ChatGPT, Gemini, Perplexity). Auditorías de percepción de marca en LLMs, análisis de Content Gaps y mapeo de autoridad temática. Entiende cómo te ve el mercado — incluyendo la IA.',
    },
    {
      number: '04',
      name: 'STRATEGY',
      subtitle: isEnglish ? 'Strategic Direction' : 'Dirección Estratégica',
      icon: Target,
      description: isEnglish
        ? 'Market drivers, strategic directives and coherence scoring. The system automatically evaluates if your execution is aligned with market forces and your identity. No spreadsheets. No disconnects.'
        : 'Drivers de mercado, directivas estratégicas y scoring de coherencia. El sistema evalúa automáticamente si tu ejecución está alineada con las fuerzas del mercado y tu identidad. Sin hojas de cálculo. Sin desconexiones.',
    },
    {
      number: '05',
      name: 'PLANS',
      subtitle: isEnglish ? 'Execution & Activation' : 'Ejecución y Activación',
      icon: FileText,
      description: isEnglish
        ? 'Marketing plans generated from real intelligence. Typed activations (campaigns, content, events, ABM, funnels), Content Studio with contextualized generation, and strategic proposals with full traceability: from signal to deliverable.'
        : 'Planes de marketing generados desde inteligencia real. Activaciones tipadas (campañas, contenido, eventos, ABM, funnels), Content Studio con generación contextualizada, y propuestas estratégicas con trazabilidad completa: de la señal al entregable.',
    },
    {
      number: '06',
      name: 'WORKSPACE',
      subtitle: isEnglish ? 'Operations Center' : 'Tu Centro de Operaciones',
      icon: Settings,
      description: isEnglish
        ? 'Source management, strategic documentation, team configuration and integrations. The backoffice that keeps everything running.'
        : 'Gestión de fuentes, documentación estratégica, configuración de equipo e integraciones. El backoffice que mantiene todo funcionando.',
    },
  ];

  // ── AI Features ──
  const aiFeatures = [
    {
      icon: BarChart3,
      title: isEnglish ? 'Reports with real signals' : 'Reportes con señales reales',
      description: isEnglish
        ? 'Executive reports generated from prioritized signals in your industry. Opportunities, threats and recommendations based on data — not assumptions.'
        : 'Informes ejecutivos generados a partir de señales priorizadas de tu industria. Oportunidades, amenazas y recomendaciones basadas en datos — no en suposiciones.',
    },
    {
      icon: Sparkles,
      title: isEnglish ? 'Content with your voice, not an AI\'s' : 'Contenido con tu voz, no la de una IA',
      description: isEnglish
        ? 'Every piece automatically injects your value proposition, your differentiators and your brand tone. The result sounds like you, not a template.'
        : 'Cada pieza inyecta automáticamente tu propuesta de valor, tus diferenciadores y tu tono de marca. El resultado suena a ti, no a un template.',
    },
    {
      icon: Eye,
      title: isEnglish ? 'Your brand as seen by ChatGPT and Gemini' : 'Tu marca vista por ChatGPT y Gemini',
      description: isEnglish
        ? 'Audit how AI engines describe your company versus competitors. Detect narrative gaps before they impact your pipeline.'
        : 'Audita cómo los motores de IA describen tu empresa frente a competidores. Detecta gaps de narrativa antes de que impacten en tu pipeline.',
    },
    {
      icon: LayoutDashboard,
      title: isEnglish ? 'Plans born from intelligence' : 'Planes que nacen de la inteligencia',
      description: isEnglish
        ? 'SENSE generates marketing plans connected to what the market is saying. With objectives, priorities and actions ready for your team or your agency.'
        : 'SENSE genera planes de marketing conectados con lo que el mercado está diciendo. Con objetivos, prioridades y acciones listas para tu equipo o tu agencia.',
    },
  ];

  // ── Integrations ──
  const integrations = [
    { name: 'Google Search Console', description: isEnglish ? 'Organic search data & performance' : 'Datos de búsqueda orgánica y rendimiento' },
    { name: 'HubSpot', description: isEnglish ? 'CRM, ABM & marketing automation' : 'CRM, ABM y automatización de marketing' },
    { name: 'Perplexity AI', description: isEnglish ? 'Grounded market research' : 'Investigación de mercado con búsqueda grounded' },
    { name: 'Gemini / ChatGPT', description: isEnglish ? 'Content generation & strategic analysis' : 'Generación de contenido y análisis estratégico' },
    { name: 'Firecrawl', description: isEnglish ? 'Competitive web analysis & data extraction' : 'Análisis web y extracción de datos competitivos' },
    { name: 'Slack', description: isEnglish ? 'Signal notifications & alerts' : 'Notificaciones y alertas de señales' },
    { name: 'Gamma', description: isEnglish ? 'Automated strategic presentations' : 'Presentaciones estratégicas automatizadas' },
    { name: 'Google Analytics', description: isEnglish ? 'Traffic & behavior analytics' : 'Analítica de tráfico y comportamiento' },
    { name: 'Stripe', description: isEnglish ? 'Payments & subscriptions' : 'Pagos y suscripciones' },
  ];

  // ── For Whom ──
  const forWhom = [
    {
      icon: Users,
      title: isEnglish ? 'CMOs & Marketing Directors' : 'CMOs y Directores de Marketing',
      description: isEnglish
        ? 'You need visibility on market, competition and execution in one system. SENSE gives you the context to decide with confidence and the traceability to prove impact.'
        : 'Necesitas visibilidad sobre mercado, competencia y ejecución en un solo sistema. SENSE te da el contexto para decidir con confianza y la trazabilidad para demostrar el impacto.',
    },
    {
      icon: Building2,
      title: isEnglish ? 'Marketing Teams (5-25 people)' : 'Equipos de Marketing (5-25 personas)',
      description: isEnglish
        ? 'Too many tools, scattered data and disconnect between strategy and execution. SENSE centralizes intelligence, content and plans in a coherent flow.'
        : 'Demasiadas herramientas, datos dispersos y desconexión entre estrategia y ejecución. SENSE centraliza inteligencia, contenido y planes en un flujo coherente.',
    },
    {
      icon: Briefcase,
      title: isEnglish ? 'Marketing Agencies' : 'Agencias de Marketing',
      description: isEnglish
        ? 'Deliver a branded intelligence system to each client. Brain, Radar and Plans as service infrastructure — not shared spreadsheets.'
        : 'Entrega un sistema de inteligencia con tu marca a cada cliente. Brain, Radar y Plans como infraestructura de servicio — no como hojas de cálculo compartidas.',
    },
    {
      icon: Globe,
      title: isEnglish ? 'B2B companies in expansion' : 'Empresas B2B en expansión',
      description: isEnglish
        ? 'If you sell complex solutions in international markets, SENSE connects market signals with your pipeline. Ideal for companies with long sales cycles and multiple decision-makers.'
        : 'Si vendes soluciones complejas en mercados internacionales, SENSE conecta señales de mercado con tu pipeline. Ideal para empresas con ciclos de venta largos y múltiples decisores.',
    },
  ];

  // ── LOOP methodology ──
  const loopSteps = [
    { letter: 'L', word: 'Listen', description: isEnglish ? 'Monitor market and competitive signals' : 'Monitoriza señales de mercado y competencia' },
    { letter: 'O', word: 'Observe', description: isEnglish ? 'Detect patterns, opportunities and threats' : 'Detecta patrones, oportunidades y amenazas' },
    { letter: 'O', word: 'Orient', description: isEnglish ? 'Define drivers and strategic directives' : 'Define drivers y directivas estratégicas' },
    { letter: 'P', word: 'Plan', description: isEnglish ? 'Generate activations aligned with direction' : 'Genera activaciones alineadas con la dirección' },
  ];

  // ── Tech features ──
  const techFeatures = [
    { icon: Code2, label: isEnglish ? 'Modern Stack' : 'Stack moderno', detail: 'React, TypeScript, Supabase' },
    { icon: Zap, label: 'Edge Functions', detail: isEnglish ? 'Auto-scaling serverless logic' : 'Lógica serverless que escala automáticamente' },
    { icon: Cpu, label: isEnglish ? 'Multi-model AI' : 'IA multi-modelo', detail: 'Gemini, GPT, Perplexity' },
    { icon: Shield, label: isEnglish ? 'Your system' : 'Tu sistema', detail: isEnglish ? 'Your domain, brand & data' : 'Tu dominio, tu marca, tus datos' },
    { icon: Rocket, label: isEnglish ? 'Rapid deployment' : 'Despliegue rápido', detail: isEnglish ? 'Concept to production in 4-6 weeks' : 'De concepto a producción en 4-6 semanas' },
  ];

  // ── FAQs ──
  const faqs = isEnglish ? [
    { question: 'What makes SENSE different from a marketing dashboard?', answer: "SENSE doesn't just show data — it interprets it. It connects market signals with your strategic identity to generate direction and actionable content." },
    { question: 'Is it a shared SaaS product?', answer: "No. Each SENSE instance is private and customized for your company. Your data, your brand, your domain." },
    { question: 'Do I need a technical team to use it?', answer: "No. SENSE is designed for marketing teams. We handle the initial setup, and the system is built for daily use without technical knowledge." },
    { question: 'How does the AI work?', answer: "SENSE uses multiple AI models (Gemini, GPT, Perplexity) depending on the task. All generation is contextualized with your Brain (identity, audiences, differentiators), so outputs are specific to your business." },
    { question: 'Can I integrate my existing CRM?', answer: "Yes. SENSE has native integration with HubSpot and the ability to connect with other CRMs. Your pipeline data is cross-referenced with market intelligence for ABM and scoring." },
    { question: 'How long does implementation take?', answer: "4-6 weeks for the base system. The Brain is configured in the first week, and the intelligence modules start generating value from day one." },
  ] : [
    { question: '¿Qué diferencia a SENSE de un dashboard de marketing?', answer: 'SENSE no solo muestra datos — los interpreta. Conecta señales de mercado con tu identidad estratégica para generar dirección y contenido accionable.' },
    { question: '¿Es un producto SaaS compartido?', answer: 'No. Cada instancia de SENSE es privada y personalizada para tu empresa. Tus datos, tu marca, tu dominio.' },
    { question: '¿Necesito un equipo técnico para usarlo?', answer: 'No. SENSE está diseñado para equipos de marketing. La configuración inicial la hacemos nosotros, y el sistema está pensado para uso diario sin conocimiento técnico.' },
    { question: '¿Cómo funciona la IA?', answer: 'SENSE utiliza múltiples modelos de IA (Gemini, GPT, Perplexity) según la tarea. Toda la generación está contextualizada con tu Brain (identidad, audiencias, diferenciadores), por lo que los outputs son específicos para tu negocio.' },
    { question: '¿Puedo integrar mi CRM actual?', answer: 'Sí. SENSE tiene integración nativa con HubSpot y capacidad de conexión con otros CRMs. Los datos de tu pipeline se cruzan con inteligencia de mercado para ABM y scoring.' },
    { question: '¿Cuánto tarda la implementación?', answer: '4-6 semanas para el sistema base. El Brain se configura en la primera semana, y los módulos de inteligencia empiezan a generar valor desde el día uno.' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <EnhancedSEO />
      <Navigation />
      
      <main>
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 pt-24 pb-4">
          <nav className="flex text-sm text-muted-foreground" aria-label="Breadcrumb">
            <Link to={isEnglish ? '/en' : '/es'} className="hover:text-foreground transition-colors">
              {isEnglish ? 'Home' : 'Inicio'}
            </Link>
            <span className="mx-2">/</span>
            <Link to={isEnglish ? '/en#solutions' : '/es#soluciones'} className="hover:text-foreground transition-colors">
              {isEnglish ? 'Solutions' : 'Soluciones'}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-foreground font-medium">SENSE</span>
          </nav>
        </div>

        {/* ═══ HERO ═══ */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            {/* Pre-title badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-impulsa/10 px-4 py-1.5 text-sm font-medium text-impulsa mb-6">
              <BrainCircuit size={16} />
              <span>Made with SENSE</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-dm-sans text-foreground mb-6 leading-tight">
              SENSE: Tu sistema de{' '}
              <span className="text-gradient-primary">Inteligencia de Marketing</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 text-pretty">
              {isEnglish
                ? 'Connects your identity with market signals, delivering strategic decisions and tactical execution. 6 intelligence modules that transform scattered data into clear direction and coordinated action.'
                : 'Conecta tu identidad con las señales de mercado aportando decisiones estratégicas y ejecución táctica. 6 módulos de inteligencia que transforman datos dispersos en dirección clara y acción coordinada.'}
            </p>

            {/* Badge */}
            <p className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary mb-8">
              <Zap size={12} />
              {isEnglish ? 'Powered by AI · Governed by strategy' : 'Impulsado por IA · Gobernado por estrategia'}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="impulsa" size="lg" asChild>
                <Link to={ctaLink}>
                  {ctaButton} <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#modules">
                  {isEnglish ? 'See how it works' : 'Ver cómo funciona'}
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* ═══ SECTION 1: What is SENSE? ═══ */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-dm-sans text-foreground mb-6">
              {isEnglish
                ? 'A marketing operating system, not another tool'
                : 'Un sistema operativo de marketing, no otra herramienta más'}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-6 text-pretty">
              {isEnglish
                ? "SENSE is not a dashboard or a disguised CRM. It's an integrated system that connects your brand identity, market intelligence, strategic direction and tactical execution in a continuous flow. Everything your marketing team needs to make informed decisions and act with coherence."
                : 'SENSE no es un dashboard ni un CRM disfrazado. Es un sistema integrado que conecta tu identidad de marca, la inteligencia de mercado, la dirección estratégica y la ejecución táctica en un flujo continuo. Todo lo que tu equipo de marketing necesita para tomar decisiones informadas y actuar con coherencia.'}
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-impulsa/10 border border-impulsa/20">
              <ArrowRight size={14} className="text-impulsa" />
              <span className="text-sm font-medium text-impulsa">
                {isEnglish
                  ? 'From signal to action, without losing strategic context.'
                  : 'De la señal a la acción, sin perder el contexto estratégico.'}
              </span>
            </div>
          </div>
        </section>

        {/* ═══ SECTION 2: 6 Modules ═══ */}
        <section id="modules" className="py-16 bg-background scroll-mt-20">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-4">
              <h2 className="text-3xl md:text-4xl font-bold font-dm-sans text-foreground mb-4">
                {isEnglish ? '6 connected intelligence layers' : '6 capas de inteligencia conectadas'}
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                {isEnglish
                  ? "Each module feeds the next. They're not isolated tools — they're layers of a system that thinks like a strategist."
                  : 'Cada módulo alimenta al siguiente. No son herramientas aisladas — son capas de un sistema que piensa como un estratega.'}
              </p>
            </div>

            <div
              className="relative rounded-2xl p-6 md:p-8 mt-8"
              style={{
                backgroundImage: 'radial-gradient(circle, hsl(var(--impulsa)/0.08) 1px, transparent 1px)',
                backgroundSize: '24px 24px',
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {modules.map((mod) => (
                  <Card
                    key={mod.number}
                    className="relative border-l-2 border-l-impulsa/40 border-t border-r border-b border-border/50 hover:border-l-impulsa hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card group"
                  >
                    <CardContent className="pt-6">
                      <span className="absolute top-3 right-3 text-xs font-mono text-impulsa/25 group-hover:text-impulsa/60 transition-colors duration-300">
                        {mod.number}
                      </span>
                      <mod.icon className="h-8 w-8 text-impulsa mb-3" strokeWidth={1.5} />
                      <h3 className="text-base font-bold font-dm-sans text-foreground mb-1">
                        {mod.name} <span className="font-normal text-muted-foreground">— {mod.subtitle}</span>
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{mod.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* AI Assistant card */}
              <div
                className="mt-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 p-5 rounded-xl border border-impulsa/30 bg-impulsa/5 cursor-pointer hover:bg-impulsa/10 transition-all duration-300 group"
                onClick={() => window.dispatchEvent(new CustomEvent('openSofiaChat'))}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && window.dispatchEvent(new CustomEvent('openSofiaChat'))}
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-impulsa/10 border border-impulsa/20 flex-shrink-0">
                  <BotMessageSquare className="h-6 w-6 text-impulsa" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold font-dm-sans text-foreground">
                    {isEnglish ? 'HAYAS Copilot' : 'HAYAS Copilot'}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {isEnglish
                      ? 'It will help you get the most out of the entire System — from strategy to execution.'
                      : 'Te ayudará a sacarle el máximo rendimiento a todo el Sistema — de la estrategia a la ejecución.'}
                  </p>
                </div>
                <div className="flex items-center gap-3 flex-shrink-0">
                  <span className="inline-flex items-center gap-1 rounded-full border border-impulsa/30 bg-impulsa/10 px-2.5 py-0.5 text-xs font-semibold text-impulsa">
                    <BrainCircuit className="h-3 w-3" />
                    IA
                  </span>
                  <ArrowRight className="h-4 w-4 text-impulsa group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ SECTION 3: AI ═══ */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-dm-sans text-foreground mb-4">
                {isEnglish ? 'AI trained on your strategy, not generic prompts.' : 'IA entrenada con tu estrategia, no con prompts genéricos.'}
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                {isEnglish
                  ? "Every SENSE output — reports, content, plans — is anchored to your brand identity, your audiences and your competitive context. It's not an AI that answers: it's an AI that knows who you are and understands your entire competitive landscape."
                  : 'Cada output de SENSE —reportes, contenido, planes— está anclado a tu identidad de marca, tus audiencias y tu contexto competitivo. No es una IA que responde: es una IA que sabe quién eres y conoce todo tu contexto competitivo.'}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {aiFeatures.map((feature, idx) => (
                <div key={idx} className="p-6 rounded-xl bg-card border border-border/50 hover:shadow-md transition-shadow">
                  <feature.icon className="h-8 w-8 text-impulsa mb-4" strokeWidth={1.5} />
                  <h3 className="text-lg font-semibold font-dm-sans text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ SECTION 4: Integrations ═══ */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-dm-sans text-foreground mb-4">
                {isEnglish ? 'Connected to the tools that matter' : 'Conectado con las herramientas que importan'}
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                {isEnglish
                  ? 'SENSE integrates with your existing stack to unify data and automate workflows.'
                  : 'SENSE se integra con tu stack existente para unificar datos y automatizar flujos.'}
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {integrations.map((integration, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border/50 hover:border-impulsa/30 transition-colors">
                  <Database className="h-5 w-5 text-impulsa flex-shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">{integration.name}</p>
                    <p className="text-xs text-muted-foreground">{integration.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ SECTION 5: For Whom ═══ */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold font-dm-sans text-foreground mb-4 text-center">
              {isEnglish ? 'Designed for those who make marketing decisions' : 'Diseñado para quien toma decisiones de marketing'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
              {forWhom.map((item, idx) => (
                <div key={idx} className="p-6 rounded-xl border border-border/50 bg-card">
                  <item.icon className="h-7 w-7 text-impulsa mb-3" strokeWidth={1.5} />
                  <h3 className="text-lg font-semibold font-dm-sans text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ SECTION 6: LOOP Methodology ═══ */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold font-dm-sans text-foreground mb-4">
                {isEnglish ? 'The LOOP framework: from listening to action' : 'El framework LOOP: de la escucha a la acción'}
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                {isEnglish
                  ? 'SENSE implements a continuous marketing intelligence cycle:'
                  : 'SENSE implementa un ciclo continuo de inteligencia de marketing:'}
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {loopSteps.map((step, idx) => (
                <div key={idx} className="text-center p-6 rounded-xl bg-muted/40 border border-border/50 relative">
                  <span className="text-4xl font-bold font-dm-sans text-impulsa/20">{step.letter}</span>
                  <h3 className="text-base font-bold font-dm-sans text-foreground mt-1">{step.word}</h3>
                  <p className="text-xs text-muted-foreground mt-2">{step.description}</p>
                  {idx < 3 && (
                    <ArrowRight className="hidden md:block absolute top-1/2 -right-3 -translate-y-1/2 h-5 w-5 text-impulsa/30" />
                  )}
                </div>
              ))}
            </div>

            <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-impulsa/5 border border-impulsa/20">
              <RefreshCw className="h-5 w-5 text-impulsa" />
              <p className="text-sm text-muted-foreground text-pretty">
                {isEnglish
                  ? "It's not a linear flow — it's a circular system that feeds itself. Every new signal can confirm, adjust or reorient your strategy."
                  : 'No es un flujo lineal — es un sistema circular que se retroalimenta. Cada señal nueva puede confirmar, ajustar o reorientar tu estrategia.'}
              </p>
            </div>
          </div>
        </section>

        {/* ═══ SECTION 7: Technology ═══ */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold font-dm-sans text-foreground mb-10 text-center">
              {isEnglish ? 'Modern architecture, no technical debt' : 'Arquitectura moderna, sin deuda técnica'}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {techFeatures.map((feature, idx) => (
                <div key={idx} className="text-center p-5 rounded-xl bg-card border border-border/50">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 mb-3">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-sm font-semibold font-dm-sans text-foreground mb-1">{feature.label}</h3>
                  <p className="text-xs text-muted-foreground">{feature.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ SECTION 8: FAQs ═══ */}
        <FAQSection
          title={isEnglish ? 'Frequently Asked Questions' : 'Preguntas frecuentes'}
          subtitle={isEnglish ? 'Everything you need to know about SENSE' : 'Todo lo que necesitas saber sobre SENSE'}
          faqs={faqs}
        />

        <ReviewsSection />

        {/* ═══ Final CTA ═══ */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-dm-sans text-foreground mb-4">
              {isEnglish ? 'Ready for marketing with direction?' : '¿Preparado para un marketing con dirección?'}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {isEnglish
                ? "Request a demo and we'll show you how SENSE connects your market intelligence with execution."
                : 'Solicita una demo y te mostraremos cómo SENSE conecta tu inteligencia de mercado con la ejecución.'}
            </p>
            <Button variant="impulsa" size="lg" asChild>
              <Link to={ctaLink}>
                {ctaButton} <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default SensePlatform;
