import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { Bot, Settings, GraduationCap, Grid3X3, List, ChevronDown, ChevronUp } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface AIService {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  link: string;
  badge?: string;
}

const getAiServices = (isEnglish: boolean): AIService[] => [
  {
    icon: <Bot className="h-8 w-8 text-primary" />,
    title: isEnglish ? "AI Assistant" : "Asistente IA",
    description: isEnglish 
      ? "Intelligent chatbots that serve your customers 24/7, qualify leads, and improve user experience with natural, personalized conversations."
      : "Chatbots inteligentes que atienden a tus clientes 24/7, califican leads y mejoran la experiencia de usuario con conversaciones naturales y personalizadas.",
    features: isEnglish 
      ? ["Automated customer support", "Intelligent lead qualification", "WhatsApp and web integration", "Multi-language support"]
      : ["Atención al cliente automatizada", "Calificación inteligente de leads", "Integración con WhatsApp y web", "Soporte multiidioma"],
    link: isEnglish ? "/en/services/ai-assistant" : "/es/servicios/asistente-ia",
    badge: isEnglish ? "Most Popular" : "Más Popular"
  },
  {
    icon: <Settings className="h-8 w-8 text-primary" />,
    title: isEnglish ? "AI Automations & Integrations" : "Automatizaciones e integraciones con IA",
    description: isEnglish
      ? "Business process optimization through artificial intelligence, connecting systems and automating complex workflows."
      : "Optimización de procesos empresariales mediante inteligencia artificial, conectando sistemas y automatizando flujos de trabajo complejos.",
    features: isEnglish
      ? ["Process automation", "System integration", "ML optimization", "Predictive analytics"]
      : ["Automatización de procesos", "Integración de sistemas", "Optimización con ML", "Análisis predictivo"],
    link: isEnglish ? "/en/services/ai-integrations" : "/es/servicios/integraciones-ia-procesos"
  },
  {
    icon: <GraduationCap className="h-8 w-8 text-primary" />,
    title: isEnglish ? "AI Training for Digital Marketing" : "Formación IA aplicada a Marketing Digital",
    description: isEnglish
      ? "Specialized training for marketing teams on the strategic use of artificial intelligence tools to maximize results."
      : "Capacitación especializada para equipos de marketing en el uso estratégico de herramientas de inteligencia artificial para maximizar resultados.",
    features: isEnglish
      ? ["Hands-on AI training", "Real use cases", "Certification included", "Post-training support"]
      : ["Formación práctica en IA", "Casos de uso reales", "Certificación incluida", "Soporte post-formación"],
    link: isEnglish ? "/en/services/ai-training" : "/es/servicios/formacion-ia"
  }
];

interface AIServicesSectionProps {
  title?: string;
  description?: string;
  className?: string;
}

const AIServicesSection: React.FC<AIServicesSectionProps> = ({
  title,
  description,
  className = ""
}) => {
  const [expanded, setExpanded] = useState(false);
  const [view, setView] = useState<'grid' | 'list'>('grid');
  const { isEnglish } = useLanguage();

  const aiServices = getAiServices(isEnglish);
  const resolvedDescription = description ?? (isEnglish
    ? "We implement artificial intelligence solutions that integrate seamlessly with your existing marketing strategy."
    : "Implementamos soluciones de inteligencia artificial que se integran perfectamente con tu estrategia de marketing existente.");
  const servicesToShow = expanded ? aiServices : aiServices.slice(0, 6);

  return (
    <section className={`py-8 md:py-12 bg-gradient-to-br from-muted/30 to-background ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
            {(() => {
              const gradientPhrase = isEnglish ? 'artificial intelligence solutions' : 'soluciones de inteligencia artificial';
              return resolvedDescription.replace(new RegExp(gradientPhrase, 'gi'), `|||GRADIENT|||${gradientPhrase}|||GRADIENT|||`).split('|||GRADIENT|||').map((part, index) => {
                if (part.toLowerCase() === gradientPhrase.toLowerCase()) {
                  return <span key={index} className="text-gradient-primary">{part}</span>;
                }
                return part;
              });
            })()}
          </h2>
        </div>

        {/* View Toggle */}
        <div className="flex justify-center mb-8">
          <div className="flex bg-muted rounded-lg p-1">
            <Button
              variant={view === 'grid' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setView('grid')}
              className="flex items-center gap-2"
            >
              <Grid3X3 className="h-4 w-4" />
              Grid
            </Button>
            <Button
              variant={view === 'list' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setView('list')}
              className="flex items-center gap-2"
            >
              <List className="h-4 w-4" />
              Lista
            </Button>
          </div>
        </div>

        {/* Services Grid/List */}
        <div className={view === 'grid' 
          ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          : "space-y-6"
        }>
          {servicesToShow.map((service, index) => (
            <Card key={index} className={`border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
              view === 'list' ? 'flex flex-col md:flex-row' : ''
            }`}>
              <CardHeader className={view === 'list' ? 'md:w-1/3' : ''}>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-lg bg-muted w-fit">
                    {service.icon}
                  </div>
                  {service.badge && (
                    <Badge variant="secondary" className="text-xs">
                      {service.badge}
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-xl font-bold">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className={`${view === 'list' ? 'md:w-2/3 md:flex md:flex-col md:justify-between' : ''}`}>
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                <Link to={service.link} className="block">
                  <Button variant="outline" className="w-full hover:bg-primary hover:text-primary-foreground">
                    {isEnglish ? 'View service details' : 'Ver detalles del servicio'}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Expand/Collapse Button */}
        {aiServices.length > 6 && (
          <div className="text-center mt-12">
            <Button
              variant="outline"
              onClick={() => setExpanded(!expanded)}
              className="flex items-center gap-2"
            >
              {expanded ? (
                <>
                  <ChevronUp className="h-4 w-4" />
                  {isEnglish ? 'Show fewer services' : 'Ver menos servicios'}
                </>
              ) : (
                <>
                  <ChevronDown className="h-4 w-4" />
                  {isEnglish ? `View all AI services (${aiServices.length})` : `Ver todos los servicios de IA (${aiServices.length})`}
                </>
              )}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default AIServicesSection;