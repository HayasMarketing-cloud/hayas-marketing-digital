import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertTriangle, Eye, Users, TrendingDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const getPainPoints = (isEnglish: boolean) => [
  {
    icon: <Eye className="h-8 w-8 text-destructive" />,
    title: isEnglish ? "Your brand goes unnoticed" : "Tu marca pasa desapercibida",
    description: isEnglish ? "Without a solid visual identity, your business blends into the crowd and misses opportunities to be remembered." : "Sin una identidad visual sólida, tu negocio se confunde entre la multitud y pierde oportunidades de ser recordado."
  },
  {
    icon: <Users className="h-8 w-8 text-destructive" />,
    title: isEnglish ? "You don't connect with your audience" : "No conectas con tu audiencia",
    description: isEnglish ? "An inconsistent or generic brand doesn't generate emotional connection or trust with potential customers." : "Una marca inconsistente o genérica no genera conexión emocional ni confianza con tus clientes potenciales."
  },
  {
    icon: <TrendingDown className="h-8 w-8 text-destructive" />,
    title: isEnglish ? "Lower perceived value" : "Menor percepción de valor",
    description: isEnglish ? "Without a professional brand, customers perceive lower quality and are less willing to pay premium prices." : "Sin una marca profesional, tus clientes perciben menor calidad y están menos dispuestos a pagar precios premium."
  },
  {
    icon: <AlertTriangle className="h-8 w-8 text-destructive" />,
    title: isEnglish ? "Fragmented communication" : "Comunicación fragmentada",
    description: isEnglish ? "Lack of visual consistency across all touchpoints confuses your audience and weakens your message." : "La falta de coherencia visual en todos los puntos de contacto confunde a tu audiencia y debilita tu mensaje."
  }
];

const BrandingPainPointsSection = () => {
  const { isEnglish } = useLanguage();
  const painPoints = getPainPoints(isEnglish);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold font-dm-sans mb-4">
            {isEnglish
              ? <>Is your brand not generating the <span className="text-destructive">expected impact</span>?</>
              : <>¿Tu marca no está generando el <span className="text-destructive">impacto esperado</span>?</>}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {isEnglish
              ? "A weak or inconsistent brand can be seriously limiting your business growth and profitability"
              : "Una marca débil o inconsistente puede estar limitando seriamente el crecimiento y la rentabilidad de tu negocio"}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {painPoints.map((point, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow border-destructive/10 hover:border-destructive/20">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-destructive/10 rounded-full w-fit">{point.icon}</div>
                <CardTitle className="text-lg">{point.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{point.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-destructive/5 border border-destructive/20 rounded-lg p-6">
            <AlertTriangle className="h-12 w-12 text-destructive mx-auto mb-4" />
            <p className="text-lg font-semibold text-destructive mb-2">
              {isEnglish ? "The cost of not having a solid brand" : "El coste de no tener una marca sólida"}
            </p>
            <p className="text-muted-foreground">
              {isEnglish
                ? "Companies with strong brands can charge up to 20% more for their products and services, while also generating greater loyalty and referrals from their customers."
                : "Las empresas con marcas fuertes pueden cobrar hasta un 20% más por sus productos y servicios, además de generar mayor lealtad y recomendación por parte de sus clientes."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandingPainPointsSection;
