import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, X, Star, Server, Wrench } from 'lucide-react';

interface PlanFeature {
  name: string;
  basic: boolean | string;
  pro: boolean | string;
  proDedicado: boolean | string;
}

const planFeatures: PlanFeature[] = [
  { name: "Hosting incluido", basic: "Compartido", pro: "Optimizado", proDedicado: "Dedicado" },
  { name: "Actualizaciones de WP, plugins y temas", basic: false, pro: true, proDedicado: true },
  { name: "Copias de seguridad periódicas", basic: false, pro: true, proDedicado: true },
  { name: "Monitoreo de seguridad", basic: false, pro: true, proDedicado: true },
  { name: "Optimización de velocidad", basic: false, pro: true, proDedicado: true },
  { name: "Revisión de errores y caídas", basic: false, pro: true, proDedicado: true },
  { name: "Soporte técnico prioritario", basic: false, pro: true, proDedicado: true },
  { name: "Cambios menores en la web*", basic: false, pro: true, proDedicado: true },
  { name: "Servidor dedicado (mayor velocidad)", basic: false, pro: false, proDedicado: true },
  { name: "IP exclusiva", basic: false, pro: false, proDedicado: true },
];

const plans = [
  {
    id: "basic",
    name: "Basic",
    subtitle: "Alojamiento web básico",
    price: 6,
    popular: false,
    icon: <Server className="h-6 w-6" />,
  },
  {
    id: "pro",
    name: "Pro",
    subtitle: "Alojamiento + Mantenimiento",
    price: 49,
    popular: true,
    icon: <Star className="h-6 w-6" />,
  },
  {
    id: "pro-dedicado",
    name: "Pro + Hosting Dedicado",
    subtitle: "Dedicado + Mantenimiento",
    price: 64,
    popular: false,
    icon: <Wrench className="h-6 w-6" />,
  },
];

const FeatureCell = ({ value }: { value: boolean | string }) => {
  if (typeof value === "string") {
    return <span className="text-sm font-medium text-foreground">{value}</span>;
  }
  return value ? (
    <Check className="h-5 w-5 text-green-500 mx-auto" />
  ) : (
    <X className="h-5 w-5 text-muted-foreground/40 mx-auto" />
  );
};

const HostingPlansTable: React.FC = () => {
  return (
    <div className="w-full">
      {/* Desktop Table */}
      <div className="hidden lg:block overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="text-left p-4 bg-muted/50 rounded-tl-lg font-semibold text-foreground">
                Característica
              </th>
              {plans.map((plan, index) => (
                <th 
                  key={plan.id}
                  className={`p-4 text-center relative ${
                    plan.popular 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-muted/50'
                  } ${index === plans.length - 1 ? 'rounded-tr-lg' : ''}`}
                >
                  {plan.popular && (
                    <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground border-0">
                      <Star className="h-3 w-3 mr-1" />
                      Más Popular
                    </Badge>
                  )}
                  <div className="flex items-center justify-center gap-2 mb-1">
                    {plan.icon}
                    <span className="font-bold text-lg">{plan.name}</span>
                  </div>
                  <div className={`text-sm ${plan.popular ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                    {plan.subtitle}
                  </div>
                  <div className="mt-2">
                    <span className="text-3xl font-bold">{plan.price}€</span>
                    <span className={`text-sm ${plan.popular ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>/mes</span>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {planFeatures.map((feature, index) => (
              <tr 
                key={index} 
                className={`border-b border-border/50 ${index % 2 === 0 ? 'bg-background' : 'bg-muted/20'}`}
              >
                <td className="p-4 text-foreground font-medium">{feature.name}</td>
                <td className="p-4 text-center">
                  <FeatureCell value={feature.basic} />
                </td>
                <td className="p-4 text-center bg-primary/5">
                  <FeatureCell value={feature.pro} />
                </td>
                <td className="p-4 text-center">
                  <FeatureCell value={feature.proDedicado} />
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td className="p-4 bg-muted/30 rounded-bl-lg"></td>
              {plans.map((plan, index) => (
                <td 
                  key={plan.id} 
                  className={`p-4 text-center ${
                    plan.popular ? 'bg-primary/10' : 'bg-muted/30'
                  } ${index === plans.length - 1 ? 'rounded-br-lg' : ''}`}
                >
                  <Button 
                    variant={plan.popular ? "default" : "outline"} 
                    className="w-full"
                    asChild
                  >
                    <Link to="/es/contacto">Contratar Plan</Link>
                  </Button>
                </td>
              ))}
            </tr>
          </tfoot>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="lg:hidden space-y-6">
        {plans.map((plan) => (
          <Card 
            key={plan.id}
            className={`overflow-hidden ${plan.popular ? 'border-primary border-2 shadow-lg' : ''}`}
          >
            {plan.popular && (
              <div className="bg-primary text-primary-foreground text-center py-2">
                <Star className="h-4 w-4 inline mr-2" />
                <span className="font-semibold">Más Popular</span>
              </div>
            )}
            <div className="p-6">
              <div className="flex items-center gap-3 mb-2">
                <div className={`p-2 rounded-lg ${plan.popular ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                  {plan.icon}
                </div>
                <div>
                  <h3 className="font-bold text-xl text-foreground">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground">{plan.subtitle}</p>
                </div>
              </div>
              
              <div className="my-4">
                <span className="text-4xl font-bold text-primary">{plan.price}€</span>
                <span className="text-muted-foreground">/mes</span>
              </div>

              <ul className="space-y-3 mb-6">
                {planFeatures.map((feature, index) => {
                  const value = plan.id === "basic" 
                    ? feature.basic 
                    : plan.id === "pro" 
                      ? feature.pro 
                      : feature.proDedicado;
                  
                  const isIncluded = value === true || typeof value === "string";
                  
                  return (
                    <li 
                      key={index} 
                      className={`flex items-center gap-3 ${!isIncluded ? 'opacity-40' : ''}`}
                    >
                      {isIncluded ? (
                        <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      ) : (
                        <X className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                      )}
                      <span className="text-sm">
                        {feature.name}
                        {typeof value === "string" && (
                          <span className="text-primary font-medium ml-1">({value})</span>
                        )}
                      </span>
                    </li>
                  );
                })}
              </ul>

              <Button 
                variant={plan.popular ? "default" : "outline"} 
                className="w-full"
                size="lg"
                asChild
              >
                <Link to="/es/contacto">Contratar Plan</Link>
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {/* Footnote */}
      <p className="text-sm text-muted-foreground mt-6 text-center">
        * Los cambios menores incluyen ajustes de texto, imágenes o pequeñas modificaciones (máx. 2 al mes).
        <br />
        Para cambios estructurales o rediseños se presupuestan aparte.
      </p>
    </div>
  );
};

export default HostingPlansTable;
