
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { servicesByActivation, activationMeta } from '@/data/services';
import { ACTIVATION_ORDER, type ActivationKey, ACTIVATIONS } from '@/data/senseSystemMapping';

const activationH3: Record<ActivationKey, { es: string; en: string }> = {
  research: { es: 'Inteligencia de mercado, analítica e IA', en: 'Market intelligence, analytics and AI' },
  growth: { es: 'Captación, inbound y estrategia de crecimiento', en: 'Lead gen, inbound and growth strategy' },
  visibility: { es: 'SEO, publicidad y presencia digital', en: 'SEO, advertising and digital presence' },
  'web-funnel': { es: 'Diseño web, tiendas online y funnels', en: 'Web design, online stores and funnels' },
  'crm-automation': { es: 'CRM, automatización y gestión comercial', en: 'CRM, automation and sales management' },
  'content-brand': { es: 'Branding, contenidos y localización', en: 'Branding, content and localization' },
};

const ServicesSection = () => {
  return (
    <section id="servicios" className="py-16 md:py-20 bg-section-soft">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="title-section">Activaciones de HAYAS</h2>
          <p className="text-description max-w-3xl mx-auto mt-6">
            Las 6 unidades de ejecución del Marketing Activation System
          </p>
        </div>
        
        <div className="mb-8 flex flex-wrap items-center justify-center gap-3">
          {ACTIVATION_ORDER.map((key) => (
            <a
              key={key}
              href={`#home-${activationMeta[key].anchorId}`}
              className="px-4 py-2 rounded-full border hover:bg-muted/50 transition-colors"
            >
              {activationMeta[key].title}
            </a>
          ))}
        </div>

        {ACTIVATION_ORDER.map((key) => (
          <section key={key} id={`home-${activationMeta[key].anchorId}`} className="mb-12">
            <h3 className="text-2xl font-bold font-dm-sans mb-6">
              {activationH3[key].es}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesByActivation[key]?.map((service) => (
                <Card key={service.id} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className="pb-2">
                    <div className="mb-4">{service.icon}</div>
                    <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground text-base">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <Link to={service.href} aria-label={`Ver ${service.title}`}>
                      <Button size="sm">Ver {service.title}</Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </section>
        ))}
        
        <div className="text-center mt-12">
          <a href="#todos-servicios" className="text-primary hover:text-primary/80 font-medium text-lg inline-flex items-center">
            Ver todos los servicios
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
