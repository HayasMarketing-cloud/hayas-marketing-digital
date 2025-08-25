import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle, Lightbulb, HeadphonesIcon, ArrowRight } from 'lucide-react';
import hubspotLogo from '@/assets/logos/hubspot-logo.png';
import ghlLogo from '@/assets/logos/ghl-logo.png';

const solutions = [
  {
    platform: "HubSpot",
    logo: hubspotLogo,
    description: "Ideal para procesos complejos y escalabilidad",
    features: [
      "Plataforma todo-en-uno para marketing, ventas y servicio.",
      "Datos que importan: reporting avanzado y visión completa del cliente.",
      "Integración nativa con tus herramientas empresariales actuales.",
      "Escalabilidad sin límites para crecer a nivel internacional."
    ],
    badges: ["Medianas y Grandes Empresas", "Multinacionales", "B2B"],
    variant: "primary"
  },
  {
    platform: "Go High Level",
    logo: ghlLogo,
    description: "El todo-en-uno más competitivo",
    features: [
      "Automatización multicanal (email, WhatsApp, SMS) en una sola plataforma.",
      "Landing pages y funnels incluidos, sin costes extra.",
      "Gestión de leads simplificada, ahorrando tiempo y tareas manuales.",
      "Precio accesible, pensado para negocios en crecimiento."
    ],
    badges: ["PYMEs", "Emprendedores", "Agencias", "B2B", "B2C", "eCommerce"],
    variant: "secondary"
  }
];

const CRMConnectionSolutionSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Nuestra <span className="text-gradient-primary">propuesta de valor</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
            En Hayas no vendemos software: diseñamos contigo la estrategia, implantamos el CRM que mejor encaja con tu negocio y te acompañamos con soporte continuo y servicios de marketing y ventas para que tu inversión dé resultados desde el primer día.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {solutions.map((solution, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="mb-6">
                  <div className="flex items-center justify-center mb-6">
                    <img
                      src={solution.logo}
                      alt={`${solution.platform} logo`}
                      className="h-20 w-auto object-contain"
                      loading="lazy"
                    />
                  </div>
                  <h2 className="text-2xl font-bold text-center mb-4">CRM {solution.platform}</h2>
                  <div className="flex flex-wrap gap-2 justify-center mb-4">
                    {solution.badges.map((badgeText, badgeIndex) => (
                      <Badge key={badgeIndex} variant={solution.variant === 'primary' ? 'default' : 'secondary'}>
                        {badgeText}
                      </Badge>
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground text-center font-medium">{solution.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {solution.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-conecta-500 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-muted/50 rounded-2xl p-8 max-w-4xl mx-auto mb-8">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-conecta-100 rounded-lg">
              <Lightbulb className="h-6 w-6 text-conecta-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-3">Más que tecnología, un ecosistema completo</h3>
              <p className="text-muted-foreground mb-4">
                Con Hayas tu CRM no está solo: te ofrecemos consultoría estratégica, campañas de marketing, automatizaciones, funnels y soporte continuo. Así tu empresa evoluciona con las nuevas tecnologías sin perder la conexión con tus clientes.
              </p>
              <div className="flex items-center gap-2 text-sm text-conecta-600">
                <HeadphonesIcon className="h-4 w-4" />
                <span className="font-medium">Soporte continuo y consultoría estratégica incluidos</span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button variant="default" size="lg" className="gap-2 bg-conecta-500 hover:bg-conecta-600">
            👉 Solicitar asesoría gratuita
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CRMConnectionSolutionSection;