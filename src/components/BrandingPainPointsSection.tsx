import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertTriangle, Eye, Users, TrendingDown } from 'lucide-react';

const painPoints = [
  {
    icon: <Eye className="h-8 w-8 text-destructive" />,
    title: "Tu marca pasa desapercibida",
    description: "Sin una identidad visual sólida, tu negocio se confunde entre la multitud y pierde oportunidades de ser recordado."
  },
  {
    icon: <Users className="h-8 w-8 text-destructive" />,
    title: "No conectas con tu audiencia",
    description: "Una marca inconsistente o genérica no genera conexión emocional ni confianza con tus clientes potenciales."
  },
  {
    icon: <TrendingDown className="h-8 w-8 text-destructive" />,
    title: "Menor percepción de valor",
    description: "Sin una marca profesional, tus clientes perciben menor calidad y están menos dispuestos a pagar precios premium."
  },
  {
    icon: <AlertTriangle className="h-8 w-8 text-destructive" />,
    title: "Comunicación fragmentada",
    description: "La falta de coherencia visual en todos los puntos de contacto confunde a tu audiencia y debilita tu mensaje."
  }
];

const BrandingPainPointsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            ¿Tu marca no está generando el <span className="text-destructive">impacto esperado</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Una marca débil o inconsistente puede estar limitando seriamente el crecimiento y la rentabilidad de tu negocio
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {painPoints.map((point, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow border-destructive/10 hover:border-destructive/20">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-destructive/10 rounded-full w-fit">
                  {point.icon}
                </div>
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
              El coste de no tener una marca sólida
            </p>
            <p className="text-muted-foreground">
              Las empresas con marcas fuertes pueden cobrar hasta un 20% más por sus productos y servicios, 
              además de generar mayor lealtad y recomendación por parte de sus clientes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandingPainPointsSection;