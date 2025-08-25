import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { 
  Clock, 
  DollarSign, 
  Users, 
  Target, 
  AlertTriangle,
  TrendingDown
} from 'lucide-react';

const painPoints = [
  {
    icon: Users,
    title: "Equipo interno sobrecargado",
    description: "Tu equipo dedica tiempo valioso a gestión operativa en lugar de estrategia y crecimiento."
  },
  {
    icon: DollarSign,
    title: "Costes fijos elevados",
    description: "Mantener especialistas internos en CRM, automatización y marketing supone un coste fijo alto."
  },
  {
    icon: Target,
    title: "Falta de especialización",
    description: "La gestión de CRM requiere conocimientos específicos que no siempre están disponibles internamente."
  },
  {
    icon: Clock,
    title: "Lentitud en implementación",
    description: "Los proyectos de optimización y nuevas funcionalidades se retrasan por falta de recursos dedicados."
  },
  {
    icon: TrendingDown,
    title: "ROI no optimizado",
    description: "Sin especialistas dedicados, el potencial de tu CRM y canales digitales no se aprovecha completamente."
  },
  {
    icon: AlertTriangle,
    title: "Dependencia de proveedores",
    description: "Múltiples proveedores externos crean dependencias, falta de coordinación y sobrecostes."
  }
];

const CRMAdministrationPainPointsSection: React.FC = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            ¿Te sientes <span className="text-gradient-primary">identificado</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Estos son los principales desafíos que enfrentan las empresas al gestionar su CRM y marketing internamente
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {painPoints.map((point, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center mb-3">
                  <point.icon className="w-6 h-6 text-destructive" />
                </div>
                <CardTitle className="text-lg">{point.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{point.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Alert className="border-destructive/20 bg-destructive/5">
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription className="text-center text-lg font-medium">
            <strong>El coste de no tener un CRM organizado y gestionado estratégicamente puede superar el 30% de tus ingresos potenciales.</strong>
          </AlertDescription>
        </Alert>
      </div>
    </section>
  );
};

export default CRMAdministrationPainPointsSection;