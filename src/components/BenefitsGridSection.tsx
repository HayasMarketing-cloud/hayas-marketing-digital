import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Palette, Search, Zap, Smartphone, Shield, HeadphonesIcon, CheckCircle, BrainCircuit, Link2
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface BenefitsGridSectionProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

const BenefitsGridSection: React.FC<BenefitsGridSectionProps> = ({
  title,
  subtitle,
  className = ""
}) => {
  const { isEnglish } = useLanguage();

  const defaultTitle = isEnglish ? "Benefits that make the difference" : "Beneficios que marcan la diferencia";
  const defaultSubtitle = isEnglish
    ? "Everything you need for a successful and professional web presence"
    : "Todo lo que necesitas para tener una presencia web exitosa y profesional";

  const benefits = [
    {
      icon: <Palette className="h-8 w-8" />,
      title: isEnglish ? "100% custom design" : "Diseño 100% personalizado",
      description: isEnglish ? "Unique, tailor-made design that reflects your brand identity" : "Diseño único y a medida que refleja la identidad de tu marca",
      color: "text-purple-600 bg-purple-100"
    },
    {
      icon: <Search className="h-8 w-8" />,
      title: isEnglish ? "SEO optimized" : "SEO optimizado",
      description: isEnglish ? "Technical structure optimized to rank on Google from day one" : "Estructura técnica optimizada para aparecer en Google desde el día uno",
      color: "text-blue-600 bg-blue-100"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: isEnglish ? "Ultra-fast speed" : "Velocidad ultrarrápida",
      description: isEnglish ? "Loads in under 3 seconds ensuring the best user experience" : "Carga en menos de 3 segundos garantizando mejor experiencia de usuario",
      color: "text-yellow-600 bg-yellow-100"
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "100% responsive",
      description: isEnglish ? "Perfect performance on mobile phones, tablets and desktops" : "Perfecto funcionamiento en móviles, tablets y ordenadores",
      color: "text-green-600 bg-green-100"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: isEnglish ? "Advanced security" : "Seguridad avanzada",
      description: isEnglish ? "Complete protection with SSL, automatic backups and 24/7 monitoring" : "Protección completa con SSL, backups automáticos y monitorización 24/7",
      color: "text-red-600 bg-red-100"
    },
    {
      icon: <HeadphonesIcon className="h-8 w-8" />,
      title: isEnglish ? "Ongoing support" : "Soporte continuo",
      description: isEnglish ? "Technical assistance, updates and permanent strategic consulting" : "Asistencia técnica, actualizaciones y consultoría estratégica permanente",
      color: "text-indigo-600 bg-indigo-100"
    },
    {
      icon: <BrainCircuit className="h-8 w-8" />,
      title: isEnglish ? "Applied AI" : "IA aplicada",
      description: isEnglish ? "AI-optimized content, automated SEO workflows and intelligent assistants" : "Contenidos optimizados con IA, workflows SEO automatizados y asistentes inteligentes",
      color: "text-violet-600 bg-violet-100"
    },
    {
      icon: <Link2 className="h-8 w-8" />,
      title: isEnglish ? "Real integrations" : "Integraciones reales",
      description: isEnglish ? "Connected to CRM, Google Search Console, analytics and automation tools" : "Conectada con CRM, Google Search Console, analítica y herramientas de automatización",
      color: "text-cyan-600 bg-cyan-100"
    }
  ];

  return (
    <section className={`py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title || defaultTitle}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{subtitle || defaultSubtitle}</p>
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
            <span className="font-medium">
              {isEnglish ? "100% satisfaction guarantee" : "Garantía de satisfacción del 100%"}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsGridSection;
