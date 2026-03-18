import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { servicesByActivation, activationMeta } from '@/data/services';
import { ACTIVATIONS, type ActivationKey } from '@/data/senseSystemMapping';
import { useLanguage } from '@/contexts/LanguageContext';
import EnhancedSEO from '@/components/EnhancedSEO';

interface ActivationGroupPageProps {
  activationKey: ActivationKey;
}

const ActivationGroupPage: React.FC<ActivationGroupPageProps> = ({ activationKey }) => {
  const { isEnglish } = useLanguage();
  const info = ACTIVATIONS[activationKey];
  const meta = activationMeta[activationKey];
  const services = servicesByActivation[activationKey] || [];

  const title = isEnglish ? info.nameEN : info.nameES;
  const description = isEnglish ? info.descriptionEN : info.descriptionES;

  return (
    <div className="min-h-screen flex flex-col">
      <EnhancedSEO />
      <Navigation />
      
      <main className="flex-grow mt-4 md:mt-6" role="main">
        {/* Hero */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-background to-muted/30">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
              {isEnglish ? 'Activation' : 'Activación'}
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-dm-sans text-foreground mb-6">
              {title}
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto mb-8">
              {description}
            </p>
            <Button size="lg" asChild>
              <Link to={isEnglish ? '/en/contact' : '/es/contacto'}>
                {isEnglish ? 'Get started' : 'Empezar ahora'}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Services grid */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold font-dm-sans text-foreground mb-4 text-center">
              {isEnglish ? `What ${title} includes` : `Qué incluye ${title}`}
            </h2>
            <p className="text-foreground/70 text-center max-w-2xl mx-auto mb-12">
              {isEnglish
                ? 'Each activation combines strategy and execution to generate real results.'
                : 'Cada activación combina estrategia y ejecución para generar resultados reales.'}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {services.map((service) => (
                <Card key={service.id} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                  <CardHeader className="pb-2">
                    <div className="mb-4">{service.icon}</div>
                    <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-base mb-4">
                      {service.description}
                    </p>
                    <Link
                      to={service.href}
                      className="text-primary font-medium inline-flex items-center hover:underline"
                    >
                      {isEnglish ? 'Learn more' : 'Ver más'}
                      <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold font-dm-sans text-foreground mb-4">
              {isEnglish
                ? `Ready to activate ${title}?`
                : `¿Listo para activar ${title}?`}
            </h2>
            <p className="text-foreground/70 max-w-xl mx-auto mb-8">
              {isEnglish
                ? 'SENSE defines the strategy. Hayas turns it into results.'
                : 'SENSE define la estrategia. Hayas la convierte en resultados.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to={isEnglish ? '/en/contact' : '/es/agendar-reunion'}>
                  {isEnglish ? 'Schedule a meeting' : 'Agendar reunión'}
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to={isEnglish ? '/en' : '/es'}>
                  {isEnglish ? 'See all activations' : 'Ver todas las activaciones'}
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ActivationGroupPage;
