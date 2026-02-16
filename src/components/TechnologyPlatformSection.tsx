import React from 'react';
import { Code2, Zap, Link2, BrainCircuit, Rocket, Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const TechnologyPlatformSection: React.FC = () => {
  const { isEnglish } = useLanguage();

  const title = isEnglish
    ? "Built with modern technology and applied AI"
    : "Construido con tecnología moderna e IA aplicada";

  const subtitle = isEnglish
    ? "We don't use templates or generic CMS. We build your website with Lovable — React and TypeScript technology — integrated with real tools and powered by applied AI."
    : "No usamos plantillas ni CMS genéricos. Construimos tu web con Lovable — tecnología React y TypeScript — integrada con herramientas reales y potenciada con IA aplicada.";

  const features = [
    {
      icon: <Code2 className="h-7 w-7" />,
      title: isEnglish ? 'Lovable Technology' : 'Tecnología Lovable',
      description: isEnglish
        ? 'React, TypeScript and component architecture. Fast, scalable and without legacy code.'
        : 'React, TypeScript y arquitectura de componentes. Rápida, escalable y sin código legacy.',
      color: 'text-primary bg-primary/10',
    },
    {
      icon: <Zap className="h-7 w-7" />,
      title: isEnglish ? 'Sub-second speed' : 'Velocidad por debajo del segundo',
      description: isEnglish
        ? 'Optimized Core Web Vitals. Your site loads instantly on any device.'
        : 'Core Web Vitals optimizados. Tu web carga al instante en cualquier dispositivo.',
      color: 'text-yellow-600 bg-yellow-100',
    },
    {
      icon: <BrainCircuit className="h-7 w-7" />,
      title: isEnglish ? 'Applied AI' : 'IA aplicada',
      description: isEnglish
        ? 'AI-optimized content, automated SEO, and intelligent assistants integrated into your website.'
        : 'Contenidos optimizados con IA, SEO automatizado y asistentes inteligentes integrados en tu web.',
      color: 'text-purple-600 bg-purple-100',
    },
    {
      icon: <Link2 className="h-7 w-7" />,
      title: isEnglish ? 'Real integrations' : 'Integraciones reales',
      description: isEnglish
        ? 'Connected to Google Search Console, HubSpot, GoHighLevel, DataForSEO, analytics and more.'
        : 'Conectada con Google Search Console, HubSpot, GoHighLevel, DataForSEO, analítica y más.',
      color: 'text-blue-600 bg-blue-100',
    },
    {
      icon: <Rocket className="h-7 w-7" />,
      title: isEnglish ? 'Rapid deployment' : 'Despliegue rápido',
      description: isEnglish
        ? 'From concept to launch in 4-6 weeks. No 6-month development cycles.'
        : 'De concepto a lanzamiento en 4-6 semanas. Sin ciclos de desarrollo de 6 meses.',
      color: 'text-green-600 bg-green-100',
    },
    {
      icon: <Shield className="h-7 w-7" />,
      title: isEnglish ? 'Full ownership' : 'Propiedad total',
      description: isEnglish
        ? 'Your domain, your brand, your data. A platform you own, not a shared login.'
        : 'Tu dominio, tu marca, tus datos. Una plataforma tuya, no un login compartido.',
      color: 'text-red-600 bg-red-100',
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full group">
              <CardContent className="p-6 text-center">
                <div className={`inline-flex p-4 rounded-full mb-6 ${feature.color} group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologyPlatformSection;
