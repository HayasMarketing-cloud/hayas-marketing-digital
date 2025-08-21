import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  TrendingUp, Clock, Users, BarChart3, 
  Zap, Shield, Target, Database,
  CheckCircle, Star
} from 'lucide-react';

const benefits = [
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: "Aumento de Conversiones",
    description: "Mejora del 40% en la tasa de conversión gracias al seguimiento automatizado y personalizado",
    color: "text-green-600"
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Ahorro de Tiempo",
    description: "Automatización del 80% de tareas repetitivas, liberando tiempo para actividades estratégicas",
    color: "text-blue-600"
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Gestión Centralizada",
    description: "Toda la información de clientes en un solo lugar, accesible para todo el equipo",
    color: "text-purple-600"
  },
  {
    icon: <BarChart3 className="h-6 w-6" />,
    title: "Reporting Inteligente",
    description: "Dashboards en tiempo real con métricas clave para tomar decisiones basadas en datos",
    color: "text-orange-600"
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Automatización Total",
    description: "Workflows personalizados que nutren leads y mantienen clientes comprometidos",
    color: "text-yellow-600"
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Datos Seguros",
    description: "Protección avanzada de datos con backups automáticos y acceso controlado",
    color: "text-red-600"
  },
  {
    icon: <Target className="h-6 w-6" />,
    title: "Segmentación Avanzada",
    description: "Divide tu audiencia en segmentos específicos para campañas más efectivas",
    color: "text-indigo-600"
  },
  {
    icon: <Database className="h-6 w-6" />,
    title: "Migración Sin Pérdidas",
    description: "Transferencia completa de datos desde tu sistema actual sin perder información",
    color: "text-teal-600"
  }
];

interface CRMBenefitsGridSectionProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

const CRMBenefitsGridSection: React.FC<CRMBenefitsGridSectionProps> = ({
  title = "Beneficios de Nuestra Implementación CRM",
  subtitle = "Resultados reales que transforman tu gestión comercial",
  className = ""
}) => {
  return (
    <section className={`py-20 bg-muted/30 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            {title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow bg-card">
              <CardHeader className="pb-3">
                <div className={`${benefit.color} mb-3`}>
                  {benefit.icon}
                </div>
                <CardTitle className="text-lg">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Garantía */}
        <div className="text-center bg-primary/10 border border-primary/20 rounded-lg p-8 max-w-2xl mx-auto">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-primary/20 rounded-full">
              <Star className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h3 className="text-xl font-bold mb-2">Garantía de Satisfacción 100%</h3>
          <p className="text-muted-foreground">
            Si no estás completamente satisfecho con la implementación en los primeros 30 días, 
            te devolvemos el 100% de tu inversión.
          </p>
          <div className="flex justify-center mt-4">
            <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
            <span className="text-sm font-medium text-green-700">
              Más de 150 implementaciones exitosas
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CRMBenefitsGridSection;