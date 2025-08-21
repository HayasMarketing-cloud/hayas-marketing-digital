import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Palette, 
  Search, 
  Zap, 
  Smartphone, 
  Settings, 
  BarChart3,
  Shield,
  HeadphonesIcon,
  TrendingUp,
  CheckCircle
} from 'lucide-react';

const benefits = [
  {
    icon: <Palette className="h-8 w-8" />,
    title: "Diseño 100% personalizado",
    description: "Diseño único y a medida que refleja la identidad de tu marca",
    color: "text-purple-600 bg-purple-100"
  },
  {
    icon: <Search className="h-8 w-8" />,
    title: "SEO optimizado",
    description: "Estructura técnica optimizada para aparecer en Google desde el día uno",
    color: "text-blue-600 bg-blue-100"
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Velocidad ultrarrápida",
    description: "Carga en menos de 3 segundos garantizando mejor experiencia de usuario",
    color: "text-yellow-600 bg-yellow-100"
  },
  {
    icon: <Smartphone className="h-8 w-8" />,
    title: "100% responsive",
    description: "Perfecto funcionamiento en móviles, tablets y ordenadores",
    color: "text-green-600 bg-green-100"
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Seguridad avanzada",
    description: "Protección completa con SSL, backups automáticos y monitorización 24/7",
    color: "text-red-600 bg-red-100"
  },
  {
    icon: <HeadphonesIcon className="h-8 w-8" />,
    title: "Soporte continuo",
    description: "Asistencia técnica, actualizaciones y consultoría estratégica permanente",
    color: "text-indigo-600 bg-indigo-100"
  }
];

interface BenefitsGridSectionProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

const BenefitsGridSection: React.FC<BenefitsGridSectionProps> = ({
  title = "Beneficios que marcan la diferencia",
  subtitle = "Todo lo que necesitas para tener una presencia web exitosa y profesional",
  className = ""
}) => {
  return (
    <section className={`py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full group">
              <CardContent className="p-6 text-center">
                <div className={`inline-flex p-4 rounded-full mb-6 ${benefit.color} group-hover:scale-110 transition-transform duration-300`}>
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-6 py-3 rounded-full">
            <CheckCircle className="h-5 w-5" />
            <span className="font-medium">Garantía de satisfacción del 100%</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsGridSection;