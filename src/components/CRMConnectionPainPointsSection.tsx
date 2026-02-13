import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { AlertTriangle, Target, Users } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const getPainPoints = (isEnglish: boolean) => [
  {
    icon: <Target className="h-8 w-8 text-destructive" />,
    title: isEnglish ? "Your customers expect personalized and fast experiences" : "Tus clientes esperan experiencias personalizadas y rápidas",
    description: isEnglish ? "In a fast-paced digital world, customers demand immediate attention and relevant communication." : "En un mundo digital acelerado, los clientes exigen atención inmediata y comunicación relevante."
  },
  {
    icon: <AlertTriangle className="h-8 w-8 text-destructive" />,
    title: isEnglish ? "Manual lead and contact management costs you opportunities" : "La gestión manual de leads y contactos hace perder oportunidades",
    description: isEnglish ? "Without automation, slow processes and lack of follow-up lead to lost sales." : "Sin automatización, los procesos lentos y la falta de seguimiento generan pérdida de ventas."
  },
  {
    icon: <Users className="h-8 w-8 text-destructive" />,
    title: isEnglish ? "Lack of integration between marketing and sales creates inefficiencies" : "La falta de integración entre marketing y ventas genera ineficiencias",
    description: isEnglish ? "Misaligned teams and scattered data prevent you from maximizing your commercial potential." : "Equipos desalineados y datos dispersos impiden maximizar el potencial comercial."
  }
];

const CRMConnectionPainPointsSection = () => {
  const { isEnglish } = useLanguage();
  const painPoints = getPainPoints(isEnglish);

  return (
    <section className="py-20 bg-gradient-to-br from-destructive/5 via-background to-muted/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            {isEnglish
              ? <>Why do you need a <span className="text-gradient-primary">CRM today</span>?</>
              : <>¿Por qué necesitas un <span className="text-gradient-primary">CRM hoy</span>?</>}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {isEnglish
              ? "Effective customer management is the key differentiator in today's market"
              : "La gestión eficaz de clientes es el diferenciador clave en el mercado actual"}
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {painPoints.map((point, index) => (
            <Card key={index} className="border-l-4 border-l-destructive/40 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="mb-4">{point.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">{point.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{point.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-3 bg-primary/10 px-6 py-4 rounded-full">
            <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
            <p className="text-lg font-medium text-primary">
              {isEnglish
                ? "With a well-implemented CRM you can capture, retain and optimize customer relationships from the first contact"
                : "Con un CRM bien implementado puedes captar, fidelizar y optimizar la relación con tus clientes desde el primer contacto"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CRMConnectionPainPointsSection;
