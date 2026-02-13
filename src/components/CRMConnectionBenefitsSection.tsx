import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, Link2, Zap, Target, BarChart3 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const getBenefits = (isEnglish: boolean) => [
  {
    icon: <TrendingUp className="h-8 w-8 text-primary" />,
    title: isEnglish ? "Clear ROI" : "ROI claro",
    description: isEnglish ? "Measure the real impact on your sales and marketing with precise metrics and intuitive dashboards." : "Mide el impacto real en tus ventas y marketing con métricas precisas y dashboards intuitivos."
  },
  {
    icon: <Link2 className="h-8 w-8 text-primary" />,
    title: isEnglish ? "Marketing-sales integration" : "Integración marketing-ventas",
    description: isEnglish ? "A unified ecosystem that connects all your commercial processes seamlessly." : "Un ecosistema unificado que conecta todos tus procesos comerciales sin fricciones."
  },
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: isEnglish ? "Automation" : "Automatización",
    description: isEnglish ? "Fewer manual tasks, more focus on strategy. Free up time to grow your business." : "Menos tareas manuales, más foco en lo estratégico. Libera tiempo para hacer crecer tu negocio."
  },
  {
    icon: <Target className="h-8 w-8 text-primary" />,
    title: isEnglish ? "Smart segmentation" : "Segmentación inteligente",
    description: isEnglish ? "Personalized messages that convert. Reach the right customer at the right time." : "Mensajes personalizados que convierten. Llega al cliente correcto en el momento adecuado."
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-primary" />,
    title: isEnglish ? "Real-time metrics" : "Métricas en tiempo real",
    description: isEnglish ? "Clear dashboards to make informed decisions and continuously optimize your results." : "Dashboards claros para tomar decisiones informadas y optimizar continuamente tus resultados."
  }
];

const CRMConnectionBenefitsSection = () => {
  const { isEnglish } = useLanguage();
  const benefits = getBenefits(isEnglish);

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            {isEnglish
              ? <>What you'll gain <span className="text-gradient-primary">with us</span></>
              : <>Qué ganarás <span className="text-gradient-primary">con nosotros</span></>}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {isEnglish
              ? "Tangible benefits that will transform how you relate to your customers"
              : "Beneficios tangibles que transformarán la forma en que te relacionas con tus clientes"}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.slice(0, 3).map((benefit, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="mb-6 flex justify-center"><div className="p-4 bg-primary/10 rounded-full">{benefit.icon}</div></div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-8">
          {benefits.slice(3).map((benefit, index) => (
            <Card key={index + 3} className="text-center hover:shadow-lg transition-shadow border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="mb-6 flex justify-center"><div className="p-4 bg-primary/10 rounded-full">{benefit.icon}</div></div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CRMConnectionBenefitsSection;
