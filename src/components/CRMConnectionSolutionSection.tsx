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
    description: "Ideal para empresas medianas y grandes con procesos complejos",
    features: [
      "Plataforma todo-en-uno completa",
      "Analytics avanzados y reporting",
      "Integraciones empresariales nativas",
      "Escalabilidad ilimitada"
    ],
    badges: ["Medianas y Grandes Empresas", "Multinacionales", "B2B"],
    variant: "primary"
  },
  {
    platform: "HighLevel (GHL)",
    logo: ghlLogo,
    description: "El todo-en-uno más competitivo para pymes y emprendedores",
    features: [
      "Automatización multicanal integrada",
      "Landing pages y funnels incluidos",
      "WhatsApp, SMS y email unificados",
      "Precio más accesible"
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
            Nuestra <span className="text-gradient-primary">propuesta</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
            En Hayas no somos fabricantes, somos consultores imparciales: te ayudamos a elegir la herramienta que mejor encaje con tu negocio, realizamos el análisis estratégico, la implantación personalizada, el onboarding de tu equipo y ofrecemos mantenimiento opcional para que siempre aproveches al máximo tu inversión.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {solutions.map((solution, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="mb-6">
                  <div className="flex items-center justify-center mb-4">
                    <img
                      src={solution.logo}
                      alt={`${solution.platform} logo`}
                      className="h-16 w-auto object-contain"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {solution.badges.map((badgeText, badgeIndex) => (
                      <Badge key={badgeIndex} variant={solution.variant === 'primary' ? 'default' : 'secondary'}>
                        {badgeText}
                      </Badge>
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground text-center">{solution.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {solution.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
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
            <div className="p-3 bg-accent/10 rounded-lg">
              <Lightbulb className="h-6 w-6 text-accent" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-3">Más que tecnología, un ecosistema completo</h3>
              <p className="text-muted-foreground mb-4">
                Además de la tecnología, ofrecemos todos los servicios de marketing y ventas asociados a tu CRM, con soporte y mejora continua para que tu empresa evolucione y se adapte siempre a las nuevas tecnologías.
              </p>
              <div className="flex items-center gap-2 text-sm text-primary">
                <HeadphonesIcon className="h-4 w-4" />
                <span className="font-medium">Soporte continuo y consultoría estratégica incluidos</span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button variant="default" size="lg" className="gap-2">
            Ver comparativa completa HubSpot vs HighLevel
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CRMConnectionSolutionSection;