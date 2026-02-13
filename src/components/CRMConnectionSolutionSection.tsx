import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle, Lightbulb, HeadphonesIcon, ArrowRight } from 'lucide-react';
import hubspotLogo from '@/assets/logos/hubspot-logo.png';
import ghlLogo from '@/assets/logos/ghl-logo.png';
import { useLanguage } from '@/contexts/LanguageContext';

const getSolutions = (isEnglish: boolean) => [
  {
    platform: "HubSpot",
    logo: hubspotLogo,
    description: isEnglish ? "Ideal for complex processes and scalability" : "Ideal para procesos complejos y escalabilidad",
    features: isEnglish
      ? [
          "All-in-one platform for marketing, sales and service.",
          "Data that matters: advanced reporting and complete customer view.",
          "Native integration with your current business tools.",
          "Unlimited scalability to grow internationally."
        ]
      : [
          "Plataforma todo-en-uno para marketing, ventas y servicio.",
          "Datos que importan: reporting avanzado y visión completa del cliente.",
          "Integración nativa con tus herramientas empresariales actuales.",
          "Escalabilidad sin límites para crecer a nivel internacional."
        ],
    badges: isEnglish
      ? ["Medium & Large Companies", "Multinationals", "B2B"]
      : ["Medianas y Grandes Empresas", "Multinacionales", "B2B"],
    variant: "primary"
  },
  {
    platform: "Go High Level",
    logo: ghlLogo,
    description: isEnglish ? "The most competitive all-in-one" : "El todo-en-uno más competitivo",
    features: isEnglish
      ? [
          "Multichannel automation (email, WhatsApp, SMS) in a single platform.",
          "Landing pages and funnels included, no extra costs.",
          "Simplified lead management, saving time and manual tasks.",
          "Affordable pricing, designed for growing businesses."
        ]
      : [
          "Automatización multicanal (email, WhatsApp, SMS) en una sola plataforma.",
          "Landing pages y funnels incluidos, sin costes extra.",
          "Gestión de leads simplificada, ahorrando tiempo y tareas manuales.",
          "Precio accesible, pensado para negocios en crecimiento."
        ],
    badges: isEnglish
      ? ["SMBs", "Entrepreneurs", "Agencies", "B2B", "B2C", "eCommerce"]
      : ["PYMEs", "Emprendedores", "Agencias", "B2B", "B2C", "eCommerce"],
    variant: "secondary"
  }
];

const CRMConnectionSolutionSection = () => {
  const { isEnglish } = useLanguage();
  const solutions = getSolutions(isEnglish);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            {isEnglish
              ? <>Our <span className="text-gradient-primary">value proposition</span></>
              : <>Nuestra <span className="text-gradient-primary">propuesta de valor</span></>}
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
            {isEnglish
              ? "At Hayas we don't sell software: we design the strategy with you, implement the CRM that best fits your business and support you with ongoing services so your investment delivers results from day one."
              : "En Hayas no vendemos software: diseñamos contigo la estrategia, implantamos el CRM que mejor encaja con tu negocio y te acompañamos con soporte continuo y servicios de marketing y ventas para que tu inversión dé resultados desde el primer día."}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {solutions.map((solution, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow overflow-hidden">
              <div className="p-6 pb-4">
                <div className="flex items-center justify-center mb-3">
                  <img src={solution.logo} alt={`${solution.platform} logo`} className="h-16 w-auto object-contain" loading="lazy" />
                </div>
                <h2 className="text-2xl font-bold text-center mb-3">CRM {solution.platform}</h2>
                <div className="flex flex-wrap gap-2 justify-center mb-3">
                  {solution.badges.map((badgeText, badgeIndex) => (
                    <Badge key={badgeIndex} variant={solution.variant === 'primary' ? 'default' : 'secondary'}>{badgeText}</Badge>
                  ))}
                </div>
                <p className="text-muted-foreground text-center font-medium">{solution.description}</p>
              </div>
              <div className="px-6 pb-6">
                <ul className="space-y-3">
                  {solution.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-conecta-500 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>

        <div className="bg-muted/50 rounded-2xl p-8 max-w-4xl mx-auto mb-8">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-conecta-100 rounded-lg">
              <Lightbulb className="h-6 w-6 text-conecta-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-3">
                {isEnglish ? "More than technology, a complete ecosystem" : "Más que tecnología, un ecosistema completo"}
              </h3>
              <p className="text-muted-foreground mb-4">
                {isEnglish
                  ? "With Hayas your CRM is never alone: we offer strategic consulting, marketing campaigns, automations, funnels and ongoing support. So your company evolves with new technologies without losing touch with your customers."
                  : "Con Hayas tu CRM no está solo: te ofrecemos consultoría estratégica, campañas de marketing, automatizaciones, funnels y soporte continuo. Así tu empresa evoluciona con las nuevas tecnologías sin perder la conexión con tus clientes."}
              </p>
              <div className="flex items-center gap-2 text-sm text-conecta-600">
                <HeadphonesIcon className="h-4 w-4" />
                <span className="font-medium">
                  {isEnglish ? "Ongoing support and strategic consulting included" : "Soporte continuo y consultoría estratégica incluidos"}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button variant="default" size="lg" className="gap-2 bg-conecta-500 hover:bg-conecta-600">
            👉 {isEnglish ? 'Request free consultation' : 'Solicitar asesoría gratuita'}
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CRMConnectionSolutionSection;
