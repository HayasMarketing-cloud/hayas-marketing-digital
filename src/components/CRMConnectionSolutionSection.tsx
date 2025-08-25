import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Building2, Users, Lightbulb, HeadphonesIcon } from 'lucide-react';

const solutions = [
  {
    platform: "HubSpot",
    icon: <Building2 className="h-8 w-8" />,
    description: "Ideal para empresas medianas y grandes con procesos complejos",
    features: [
      "Plataforma todo-en-uno completa",
      "Analytics avanzados y reporting",
      "Integraciones empresariales nativas",
      "Escalabilidad ilimitada"
    ],
    badge: "Empresas B2B",
    variant: "primary"
  },
  {
    platform: "HighLevel (GHL)",
    icon: <Users className="h-8 w-8" />,
    description: "El todo-en-uno más competitivo para pymes y emprendedores",
    features: [
      "Automatización multicanal integrada",
      "Landing pages y funnels incluidos",
      "WhatsApp, SMS y email unificados",
      "Precio más accesible"
    ],
    badge: "PYMEs y Emprendedores",
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
            En Hayas no somos fabricantes, somos consultores imparciales: te ayudamos a elegir la herramienta que mejor encaje con tu negocio y la ponemos en marcha contigo.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {solutions.map((solution, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg ${solution.variant === 'primary' ? 'bg-primary/10 text-primary' : 'bg-secondary/10 text-secondary'}`}>
                    {solution.icon}
                  </div>
                  <Badge variant={solution.variant === 'primary' ? 'default' : 'secondary'}>
                    {solution.badge}
                  </Badge>
                </div>
                <CardTitle className="text-2xl">{solution.platform}</CardTitle>
                <p className="text-muted-foreground">{solution.description}</p>
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

        <div className="bg-muted/50 rounded-2xl p-8 max-w-4xl mx-auto">
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
      </div>
    </section>
  );
};

export default CRMConnectionSolutionSection;