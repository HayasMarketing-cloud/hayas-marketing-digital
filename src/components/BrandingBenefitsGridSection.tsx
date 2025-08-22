import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Target, Eye, TrendingUp, Users, Zap, Shield,
  Star, CheckCircle, BarChart3
} from 'lucide-react';

const benefits = [
  {
    icon: <Target className="h-8 w-8" />,
    title: "Diferenciación Estratégica",
    description: "Posiciona tu marca de forma única en el mercado, destacando frente a la competencia con una propuesta de valor clara.",
    color: "text-blue-500"
  },
  {
    icon: <Eye className="h-8 w-8" />,
    title: "Mayor Reconocimiento",
    description: "Aumenta la recordación y visibilidad de tu marca hasta 3 veces más con una identidad visual coherente y memorable.",
    color: "text-green-500"
  },
  {
    icon: <TrendingUp className="h-8 w-8" />,
    title: "Incremento de Valor",
    description: "Las marcas fuertes pueden cobrar entre 15-20% más por sus productos y servicios, mejorando la rentabilidad.",
    color: "text-purple-500"
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Conexión Emocional",
    description: "Genera vínculos duraderos con tu audiencia que van más allá del producto, creando lealtad genuina.",
    color: "text-orange-500"
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Comunicación Coherente",
    description: "Unifica toda tu comunicación bajo una identidad sólida que transmite profesionalidad y confianza.",
    color: "text-yellow-500"
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Credibilidad Profesional",
    description: "Una marca bien diseñada transmite seriedad y profesionalidad, generando mayor confianza en los clientes.",
    color: "text-indigo-500"
  },
  {
    icon: <BarChart3 className="h-8 w-8" />,
    title: "Crecimiento Sostenible",
    description: "Facilita la expansión del negocio con una base de marca sólida que respalda nuevos productos y mercados.",
    color: "text-emerald-500"
  },
  {
    icon: <Star className="h-8 w-8" />,
    title: "Ventaja Competitiva",
    description: "Obtén una posición privilegiada en tu sector con una marca que atrae y retiene a los mejores clientes.",
    color: "text-pink-500"
  }
];

interface BrandingBenefitsGridSectionProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

const BrandingBenefitsGridSection: React.FC<BrandingBenefitsGridSectionProps> = ({
  title = "Beneficios de una Marca Sólida",
  subtitle = "Descubre cómo una identidad de marca bien desarrollada transforma tu negocio y genera resultados medibles",
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
            <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 group border-border/50 hover:border-primary/20">
              <CardHeader className="pb-4">
                <div className={`mx-auto mb-4 p-4 rounded-lg bg-background group-hover:scale-110 transition-transform duration-300 ${benefit.color}`}>
                  {benefit.icon}
                </div>
                <CardTitle className="text-lg">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Garantía de satisfacción */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary rounded-full">
                    <Star className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Garantía de Satisfacción 100%</h3>
                    <p className="text-muted-foreground">
                      Trabajamos hasta que tu marca refleje perfectamente la esencia de tu negocio
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-green-600">
                  <CheckCircle className="h-5 w-5" />
                  <span className="font-semibold">Marca profesional garantizada</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BrandingBenefitsGridSection;