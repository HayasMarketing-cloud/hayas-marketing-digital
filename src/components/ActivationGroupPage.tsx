import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Search, TrendingUp, Eye, Globe, Zap, PenTool } from 'lucide-react';
import { servicesByActivation, activationMeta } from '@/data/services';
import { ACTIVATIONS, ACTIVATION_ORDER, type ActivationKey } from '@/data/senseSystemMapping';
import { useLanguage } from '@/contexts/LanguageContext';
import EnhancedSEO from '@/components/EnhancedSEO';

interface ActivationCopy {
  heroTitle: string;
  heroTitleEN: string;
  heroSubtitle: string;
  heroSubtitleEN: string;
  problem: string;
  problemEN: string;
  solutionIntro: string;
  solutionIntroEN: string;
  benefits: string[];
  benefitsEN: string[];
  stats: { value: string; label: string; labelEN: string }[];
}

const ACTIVATION_COPY: Record<ActivationKey, ActivationCopy> = {
  research: {
    heroTitle: 'Decide con datos, no con intuición',
    heroTitleEN: 'Decide with data, not intuition',
    heroSubtitle: 'Inteligencia de mercado, analítica avanzada e IA aplicada para tomar mejores decisiones de marketing.',
    heroSubtitleEN: 'Market intelligence, advanced analytics and applied AI to make better marketing decisions.',
    problem: 'La mayoría de empresas lanzan campañas sin entender realmente a su mercado. Invierten sin datos, sin análisis competitivo, sin saber qué funciona.',
    problemEN: 'Most companies launch campaigns without truly understanding their market. They invest without data, without competitive analysis, without knowing what works.',
    solutionIntro: 'Research Activation conecta inteligencia de mercado con ejecución. Desde la consultoría estratégica hasta la integración de IA en tus procesos.',
    solutionIntroEN: 'Research Activation connects market intelligence with execution. From strategic consulting to AI integration in your processes.',
    benefits: ['Decisiones basadas en datos reales', 'IA integrada en tus procesos de marketing', 'Consultoría estratégica con impacto medible', 'Chatbots inteligentes que trabajan 24/7'],
    benefitsEN: ['Decisions based on real data', 'AI integrated into your marketing processes', 'Strategic consulting with measurable impact', 'Intelligent chatbots working 24/7'],
    stats: [
      { value: '3x', label: 'Mejor ROI en campañas', labelEN: 'Better campaign ROI' },
      { value: '60%', label: 'Reducción en decisiones erróneas', labelEN: 'Reduction in wrong decisions' },
      { value: '24/7', label: 'Asistentes IA activos', labelEN: 'Active AI assistants' },
    ],
  },
  growth: {
    heroTitle: 'Atrae clientes que realmente compran',
    heroTitleEN: 'Attract customers who actually buy',
    heroSubtitle: 'Estrategias de captación, inbound marketing y campañas que generan leads cualificados y aceleran tu crecimiento.',
    heroSubtitleEN: 'Lead generation strategies, inbound marketing and campaigns that generate qualified leads and accelerate growth.',
    problem: 'Muchas empresas generan tráfico pero no leads. Tienen visitas pero no conversiones. Gastan en marketing sin un sistema de captación real.',
    problemEN: 'Many companies generate traffic but not leads. They have visits but no conversions. They spend on marketing without a real acquisition system.',
    solutionIntro: 'Growth Activation construye un sistema de captación completo: desde la estrategia de contenidos premium hasta la automatización de nurturing.',
    solutionIntroEN: 'Growth Activation builds a complete acquisition system: from premium content strategy to nurturing automation.',
    benefits: ['Leads cualificados con intención de compra', 'Campañas inbound que nutren y convierten', 'Estrategia multicanal coordinada', 'Marketing directo con seguimiento completo'],
    benefitsEN: ['Qualified leads with purchase intent', 'Inbound campaigns that nurture and convert', 'Coordinated multichannel strategy', 'Direct marketing with complete tracking'],
    stats: [
      { value: '5x', label: 'Más leads cualificados', labelEN: 'More qualified leads' },
      { value: '40%', label: 'Tasa de conversión', labelEN: 'Conversion rate' },
      { value: '-35%', label: 'Coste por adquisición', labelEN: 'Cost per acquisition' },
    ],
  },
  visibility: {
    heroTitle: 'Que te encuentren quienes te buscan',
    heroTitleEN: 'Be found by those who need you',
    heroSubtitle: 'SEO, publicidad digital y redes sociales para posicionar tu marca donde están tus clientes.',
    heroSubtitleEN: 'SEO, digital advertising and social media to position your brand where your customers are.',
    problem: 'Sin visibilidad no hay negocio digital. Las empresas que no aparecen en Google, no existen en redes o no invierten en ads están cediendo mercado a sus competidores.',
    problemEN: "Without visibility there is no digital business. Companies that don't appear on Google, don't exist on social media, or don't invest in ads are ceding market to competitors.",
    solutionIntro: 'Visibility Activation combina posicionamiento orgánico, publicidad de pago y presencia social para que tu marca sea la primera opción.',
    solutionIntroEN: 'Visibility Activation combines organic positioning, paid advertising and social presence so your brand is the first choice.',
    benefits: ['SEO técnico y de contenidos que posiciona', 'Campañas Google Ads y Social Ads rentables', 'Community management profesional', 'Presencia digital coherente y medible'],
    benefitsEN: ['Technical and content SEO that ranks', 'Profitable Google Ads and Social Ads campaigns', 'Professional community management', 'Coherent and measurable digital presence'],
    stats: [
      { value: '+150%', label: 'Tráfico orgánico', labelEN: 'Organic traffic' },
      { value: 'Top 3', label: 'Posiciones en Google', labelEN: 'Google positions' },
      { value: '4x', label: 'ROAS en campañas', labelEN: 'Campaign ROAS' },
    ],
  },
  'web-funnel': {
    heroTitle: 'Tu web es tu mejor vendedor',
    heroTitleEN: 'Your website is your best salesperson',
    heroSubtitle: 'Diseño web, tiendas online y funnels de conversión que transforman visitantes en clientes.',
    heroSubtitleEN: 'Web design, online stores and conversion funnels that transform visitors into customers.',
    problem: 'Una web bonita no vende. Muchas empresas tienen presencia online pero no una máquina de conversión. Sin funnel, sin estructura, sin optimización.',
    problemEN: "A pretty website doesn't sell. Many companies have online presence but not a conversion machine. No funnel, no structure, no optimization.",
    solutionIntro: 'Web & Funnel Activation crea la infraestructura digital que necesitas: desde la web hasta el embudo de conversión completo.',
    solutionIntroEN: 'Web & Funnel Activation creates the digital infrastructure you need: from the website to the complete conversion funnel.',
    benefits: ['Webs diseñadas para convertir', 'E-commerce que vende 24/7', 'Funnels optimizados paso a paso', 'Hosting y mantenimiento incluidos'],
    benefitsEN: ['Websites designed to convert', 'E-commerce that sells 24/7', 'Step-by-step optimized funnels', 'Hosting and maintenance included'],
    stats: [
      { value: '<1s', label: 'Tiempo de carga', labelEN: 'Load time' },
      { value: '+80%', label: 'Tasa de conversión', labelEN: 'Conversion rate' },
      { value: '100%', label: 'Mobile-first', labelEN: 'Mobile-first' },
    ],
  },
  'crm-automation': {
    heroTitle: 'Automatiza lo repetitivo, escala lo importante',
    heroTitleEN: 'Automate the repetitive, scale what matters',
    heroSubtitle: 'CRM, automatización de ventas y email marketing para gestionar clientes sin fricciones.',
    heroSubtitleEN: 'CRM, sales automation and email marketing to manage clients without friction.',
    problem: 'Sin CRM, pierdes oportunidades. Sin automatización, pierdes tiempo. Sin seguimiento, pierdes clientes. El 80% de las empresas gestiona sus ventas de forma manual.',
    problemEN: 'Without CRM, you lose opportunities. Without automation, you lose time. Without follow-up, you lose clients. 80% of companies manage their sales manually.',
    solutionIntro: 'CRM & Automation Activation implementa el sistema comercial que necesitas: desde la implantación del CRM hasta la automatización completa de tu pipeline.',
    solutionIntroEN: 'CRM & Automation Activation implements the commercial system you need: from CRM implementation to complete pipeline automation.',
    benefits: ['CRM configurado para tu proceso comercial', 'Automatización de tareas repetitivas', 'Email marketing con workflows inteligentes', 'Pipeline de ventas con seguimiento completo'],
    benefitsEN: ['CRM configured for your sales process', 'Automation of repetitive tasks', 'Email marketing with smart workflows', 'Sales pipeline with complete tracking'],
    stats: [
      { value: '80%', label: 'Tareas automatizadas', labelEN: 'Tasks automated' },
      { value: '+45%', label: 'Conversión de leads', labelEN: 'Lead conversion' },
      { value: '0', label: 'Leads perdidos', labelEN: 'Lost leads' },
    ],
  },
  'content-brand': {
    heroTitle: 'Una marca que conecta, un mensaje que convierte',
    heroTitleEN: 'A brand that connects, a message that converts',
    heroSubtitle: 'Branding, estrategia de contenidos y localización para construir una marca que trasciende.',
    heroSubtitleEN: 'Branding, content strategy and localization to build a brand that transcends.',
    problem: 'Sin marca clara, eres uno más. Sin contenido estratégico, no generas confianza. Sin localización, pierdes mercados internacionales.',
    problemEN: 'Without a clear brand, you are just another company. Without strategic content, you do not build trust. Without localization, you lose international markets.',
    solutionIntro: 'Content & Brand Activation construye la identidad y el relato de tu marca: desde el branding hasta la distribución multicanal de contenidos.',
    solutionIntroEN: 'Content & Brand Activation builds your brand identity and narrative: from branding to multichannel content distribution.',
    benefits: ['Identidad visual profesional y diferenciadora', 'Estrategia editorial con impacto SEO', 'Contenidos adaptados a cada mercado', 'Marca coherente en todos los canales'],
    benefitsEN: ['Professional and differentiating visual identity', 'Editorial strategy with SEO impact', 'Content adapted to each market', 'Consistent brand across all channels'],
    stats: [
      { value: '360°', label: 'Coherencia de marca', labelEN: 'Brand coherence' },
      { value: '+200%', label: 'Engagement', labelEN: 'Engagement' },
      { value: '12+', label: 'Mercados alcanzados', labelEN: 'Markets reached' },
    ],
  },
};

const activationStyles: Record<ActivationKey, { icon: React.ElementType; accentClass: string; gradientFrom: string; gradientTo: string; iconBg: string }> = {
  research: { icon: Search, accentClass: 'text-amber-600', gradientFrom: 'from-amber-50', gradientTo: 'to-orange-50/30', iconBg: 'bg-amber-100' },
  growth: { icon: TrendingUp, accentClass: 'text-emerald-600', gradientFrom: 'from-emerald-50', gradientTo: 'to-green-50/30', iconBg: 'bg-emerald-100' },
  visibility: { icon: Eye, accentClass: 'text-purple-600', gradientFrom: 'from-purple-50', gradientTo: 'to-violet-50/30', iconBg: 'bg-purple-100' },
  'web-funnel': { icon: Globe, accentClass: 'text-blue-600', gradientFrom: 'from-blue-50', gradientTo: 'to-sky-50/30', iconBg: 'bg-blue-100' },
  'crm-automation': { icon: Zap, accentClass: 'text-rose-600', gradientFrom: 'from-rose-50', gradientTo: 'to-pink-50/30', iconBg: 'bg-rose-100' },
  'content-brand': { icon: PenTool, accentClass: 'text-teal-600', gradientFrom: 'from-teal-50', gradientTo: 'to-cyan-50/30', iconBg: 'bg-teal-100' },
};

interface ActivationGroupPageProps {
  activationKey: ActivationKey;
}

const ActivationGroupPage: React.FC<ActivationGroupPageProps> = ({ activationKey }) => {
  const { isEnglish, language } = useLanguage();
  const info = ACTIVATIONS[activationKey];
  const meta = activationMeta[activationKey];
  const services = servicesByActivation[activationKey] || [];
  const copy = ACTIVATION_COPY[activationKey];
  const style = activationStyles[activationKey];
  const Icon = style.icon;

  const t = (es: string, en: string) => isEnglish ? en : es;

  // Other activations for cross-linking
  const otherActivations = ACTIVATION_ORDER.filter(k => k !== activationKey);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <EnhancedSEO />
      <Navigation />

      <main className="flex-grow" role="main" id="main-content">
        {/* ─── Hero ─── */}
        <section className={`relative py-20 md:py-32 bg-gradient-to-br ${style.gradientFrom} ${style.gradientTo} overflow-hidden`}>
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary/5 to-transparent rounded-full -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-primary/5 to-transparent rounded-full translate-y-1/3 -translate-x-1/4" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 mb-8">
                <div className={`p-2 rounded-lg ${style.iconBg}`}>
                  <Icon className={`h-5 w-5 ${style.accentClass}`} />
                </div>
                <span className={`text-sm font-semibold uppercase tracking-widest ${style.accentClass}`}>
                  {info.nameES}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-dm-sans text-foreground leading-[1.1] mb-6">
                {isEnglish ? copy.heroTitleEN : copy.heroTitle}
              </h1>

              <p className="text-lg md:text-xl text-foreground/60 max-w-2xl mb-10 leading-relaxed">
                {isEnglish ? copy.heroSubtitleEN : copy.heroSubtitle}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="gradient-primary text-white hover-scale" asChild>
                  <Link to={isEnglish ? '/en/contact' : '/es/agendar-reunion'}>
                    {t('Agendar reunión estratégica', 'Schedule strategic meeting')}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-6 mt-16 max-w-2xl">
              {copy.stats.map((stat, i) => (
                <div key={i} className="text-left">
                  <p className={`text-3xl md:text-4xl font-bold font-dm-sans ${style.accentClass}`}>
                    {stat.value}
                  </p>
                  <p className="text-sm text-foreground/50 mt-1">
                    {isEnglish ? stat.labelEN : stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Problem → Solution split ─── */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
              {/* Problem */}
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-foreground/40 mb-4 block">
                  {t('El problema', 'The problem')}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold font-dm-sans text-foreground mb-6 leading-tight">
                  {t('¿Por qué tu marketing no genera resultados?', 'Why isn\'t your marketing generating results?')}
                </h2>
                <p className="text-lg text-foreground/60 leading-relaxed">
                  {isEnglish ? copy.problemEN : copy.problem}
                </p>
              </div>

              {/* Solution + benefits */}
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-foreground/40 mb-4 block">
                  {t('La solución', 'The solution')}
                </span>
                <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
                  {isEnglish ? copy.solutionIntroEN : copy.solutionIntro}
                </p>
                <div className="space-y-4">
                  {(isEnglish ? copy.benefitsEN : copy.benefits).map((benefit, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className={`h-5 w-5 ${style.accentClass} flex-shrink-0 mt-0.5`} />
                      <span className="text-foreground/80 font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Services grid ─── */}
        <section className={`py-20 md:py-28 bg-gradient-to-b ${style.gradientFrom} to-background`}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-16">
              <span className="text-xs font-semibold uppercase tracking-widest text-foreground/40 mb-4 block">
                {t('Servicios incluidos', 'Included services')}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-dm-sans text-foreground leading-tight">
                {t(`Qué incluye ${info.nameES}`, `What ${info.nameEN} includes`)}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, idx) => (
                <Link
                  key={service.id}
                  to={service.href}
                  className="group relative bg-background rounded-2xl border border-border/50 p-8 hover:border-border hover:shadow-lg transition-all duration-300"
                >
                  <div className="mb-6 text-foreground/30 group-hover:text-foreground/50 transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-bold font-dm-sans text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-foreground/50 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <span className={`inline-flex items-center text-sm font-medium ${style.accentClass} group-hover:gap-2 transition-all`}>
                    {t('Explorar', 'Explore')}
                    <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ─── SENSE Philosophy ─── */}
        <section className="py-20 md:py-28 bg-foreground text-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-xs font-semibold uppercase tracking-widest text-background/40 mb-6 block">
                {t('Nuestro método', 'Our method')}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-dm-sans mb-6 leading-tight">
                {t('SENSE piensa. Hayas activa.', 'SENSE thinks. Hayas activates.')}
              </h2>
              <p className="text-lg text-background/60 leading-relaxed mb-10">
                {t(
                  `${info.nameES} no es un servicio aislado. Es una unidad de ejecución conectada a SENSE, nuestro sistema operativo de marketing que analiza, decide y mide cada acción.`,
                  `${info.nameEN} is not an isolated service. It's an execution unit connected to SENSE, our marketing operating system that analyzes, decides and measures every action.`
                )}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="outline" className="border-background/20 text-background hover:bg-background/10" asChild>
                  <Link to={isEnglish ? '/en' : '/es'}>
                    {t('Conocer SENSE', 'Discover SENSE')}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`rounded-3xl bg-gradient-to-br ${style.gradientFrom} ${style.gradientTo} p-12 md:p-20`}>
              <div className="max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-bold font-dm-sans text-foreground mb-6 leading-tight">
                  {t(
                    `¿Listo para activar ${info.nameES}?`,
                    `Ready to activate ${info.nameEN}?`
                  )}
                </h2>
                <p className="text-lg text-foreground/60 mb-10 leading-relaxed">
                  {t(
                    'Agenda una reunión estratégica sin compromiso. Analizamos tu situación actual y te proponemos un plan de acción concreto.',
                    'Schedule a no-commitment strategic meeting. We analyze your current situation and propose a concrete action plan.'
                  )}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="gradient-primary text-white hover-scale" asChild>
                    <Link to={isEnglish ? '/en/contact' : '/es/agendar-reunion'}>
                      {t('Agendar reunión', 'Schedule a meeting')}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link to={isEnglish ? '/en/contact' : '/es/contacto'}>
                      {t('Contactar', 'Contact us')}
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Other Activations ─── */}
        <section className="py-16 md:py-20 bg-muted/20 border-t border-border/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-foreground/40 mb-8">
              {t('Otras activaciones', 'Other activations')}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {otherActivations.map((key) => {
                const otherStyle = activationStyles[key];
                const OtherIcon = otherStyle.icon;
                const otherMeta = activationMeta[key];
                const href = isEnglish ? otherMeta.hrefEN : otherMeta.href;
                return (
                  <Link
                    key={key}
                    to={href}
                    className="flex items-center gap-3 p-4 rounded-xl bg-background border border-border/50 hover:border-border hover:shadow-md transition-all group"
                  >
                    <div className={`p-2 rounded-lg ${otherStyle.iconBg}`}>
                      <OtherIcon className={`h-4 w-4 ${otherStyle.accentClass}`} />
                    </div>
                    <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                      {ACTIVATIONS[key].nameES}
                    </span>
                    <ArrowRight className="h-3.5 w-3.5 text-foreground/30 ml-auto group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ActivationGroupPage;
