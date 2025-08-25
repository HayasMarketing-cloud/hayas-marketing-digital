import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, Link2, Zap, Target, BarChart3 } from 'lucide-react';

const benefits = [
  {
    icon: <TrendingUp className="h-8 w-8 text-primary" />,
    title: "ROI claro",
    description: "Mide el impacto real en tus ventas y marketing con métricas precisas y dashboards intuitivos."
  },
  {
    icon: <Link2 className="h-8 w-8 text-primary" />,
    title: "Integración marketing-ventas", 
    description: "Un ecosistema unificado que conecta todos tus procesos comerciales sin fricciones."
  },
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: "Automatización",
    description: "Menos tareas manuales, más foco en lo estratégico. Libera tiempo para hacer crecer tu negocio."
  },
  {
    icon: <Target className="h-8 w-8 text-primary" />,
    title: "Segmentación inteligente",
    description: "Mensajes personalizados que convierten. Llega al cliente correcto en el momento adecuado."
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-primary" />,
    title: "Métricas en tiempo real",
    description: "Dashboards claros para tomar decisiones informadas y optimizar continuamente tus resultados."
  }
];

const CRMConnectionBenefitsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Qué ganarás <span className="text-gradient-primary">con nosotros</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Beneficios tangibles que transformarán la forma en que te relacionas con tus clientes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.slice(0, 3).map((benefit, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="mb-6 flex justify-center">
                  <div className="p-4 bg-primary/10 rounded-full">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-8">
          {benefits.slice(3).map((benefit, index) => (
            <Card key={index + 3} className="text-center hover:shadow-lg transition-shadow border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="mb-6 flex justify-center">
                  <div className="p-4 bg-primary/10 rounded-full">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CRMConnectionBenefitsSection;