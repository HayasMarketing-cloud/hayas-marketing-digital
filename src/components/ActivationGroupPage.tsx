import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { servicesByActivation, activationMeta } from '@/data/services';
import { ACTIVATIONS, type ActivationKey } from '@/data/senseSystemMapping';
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
  },
};

interface ActivationGroupPageProps {
  activationKey: ActivationKey;
}

const ActivationGroupPage: React.FC<ActivationGroupPageProps> = ({ activationKey }) => {
  const { isEnglish } = useLanguage();
  const info = ACTIVATIONS[activationKey];
  const meta = activationMeta[activationKey];
  const services = servicesByActivation[activationKey] || [];
  const copy = ACTIVATION_COPY[activationKey];

  const t = (es: string, en: string) => isEnglish ? en : es;

  return (
    <div className="min-h-screen flex flex-col">
      <EnhancedSEO />
      <Navigation />
      
      <main className="flex-grow mt-4 md:mt-6" role="main">
        {/* Hero */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-background to-muted/30">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
              {t('Activación', 'Activation')} · {info.nameES}
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-dm-sans text-foreground mb-6 max-w-4xl mx-auto leading-tight">
              {isEnglish ? copy.heroTitleEN : copy.heroTitle}
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto mb-8">
              {isEnglish ? copy.heroSubtitleEN : copy.heroSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to={isEnglish ? '/en/contact' : '/es/agendar-reunion'}>
                  {t('Agendar reunión', 'Schedule a meeting')}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to={isEnglish ? '/en' : '/es'}>
                  {t('Ver todas las activaciones', 'See all activations')}
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Problem */}
        <section className="py-12 md:py-16 bg-muted/20">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold font-dm-sans text-foreground mb-6">
              {t('El problema', 'The problem')}
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed">
              {isEnglish ? copy.problemEN : copy.problem}
            </p>
          </div>
        </section>

        {/* Solution + Benefits */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold font-dm-sans text-foreground mb-4">
                {t('La solución', 'The solution')}
              </h2>
              <p className="text-lg text-foreground/70">
                {isEnglish ? copy.solutionIntroEN : copy.solutionIntro}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-16">
              {(isEnglish ? copy.benefitsEN : copy.benefits).map((benefit, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-lg bg-muted/30">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground font-medium text-sm">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Services grid */}
            <h2 className="text-2xl md:text-3xl font-bold font-dm-sans text-foreground mb-4 text-center">
              {t(`Qué incluye ${info.nameES}`, `What ${info.nameEN} includes`)}
            </h2>
            <p className="text-foreground/70 text-center max-w-2xl mx-auto mb-12">
              {t(
                'Cada activación combina estrategia y ejecución para generar resultados reales.',
                'Each activation combines strategy and execution to generate real results.'
              )}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {services.map((service) => (
                <Card key={service.id} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                  <CardHeader className="pb-2">
                    <div className="mb-4">{service.icon}</div>
                    <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-base mb-4">
                      {service.description}
                    </p>
                    <Link
                      to={service.href}
                      className="text-primary font-medium inline-flex items-center hover:underline"
                    >
                      {t('Ver más', 'Learn more')}
                      <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold font-dm-sans text-foreground mb-4">
              {t(
                `¿Listo para activar ${info.nameES}?`,
                `Ready to activate ${info.nameEN}?`
              )}
            </h2>
            <p className="text-foreground/70 max-w-xl mx-auto mb-8 italic">
              {t(
                'SENSE define la estrategia. Hayas la convierte en resultados.',
                'SENSE defines the strategy. Hayas turns it into results.'
              )}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to={isEnglish ? '/en/contact' : '/es/agendar-reunion'}>
                  {t('Agendar reunión', 'Schedule a meeting')}
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to={isEnglish ? '/en/contact' : '/es/solicitar-consulta'}>
                  {t('Solicitar consulta', 'Request consultation')}
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ActivationGroupPage;
