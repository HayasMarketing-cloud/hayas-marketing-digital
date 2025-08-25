import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { AlertTriangle, Target, Users } from 'lucide-react';

const painPoints = [
  {
    icon: <Target className="h-8 w-8 text-destructive" />,
    title: "Tus clientes esperan experiencias personalizadas y rápidas",
    description: "En un mundo digital acelerado, los clientes exigen atención inmediata y comunicación relevante."
  },
  {
    icon: <AlertTriangle className="h-8 w-8 text-destructive" />,
    title: "La gestión manual de leads y contactos hace perder oportunidades", 
    description: "Sin automatización, los procesos lentos y la falta de seguimiento generan pérdida de ventas."
  },
  {
    icon: <Users className="h-8 w-8 text-destructive" />,
    title: "La falta de integración entre marketing y ventas genera ineficiencias",
    description: "Equipos desalineados y datos dispersos impiden maximizar el potencial comercial."
  }
];

const CRMConnectionPainPointsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-destructive/5 via-background to-muted/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            ¿Por qué necesitas un <span className="text-gradient-primary">CRM hoy</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            La gestión eficaz de clientes es el diferenciador clave en el mercado actual
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {painPoints.map((point, index) => (
            <Card key={index} className="border-l-4 border-l-destructive/40 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="mb-4">{point.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  {point.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {point.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-3 bg-primary/10 px-6 py-4 rounded-full">
            <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
            <p className="text-lg font-medium text-primary">
              Con un CRM bien implementado puedes captar, fidelizar y optimizar la relación con tus clientes desde el primer contacto
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CRMConnectionPainPointsSection;