
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { servicesByPillar, pillarMeta, PillarKey } from '@/data/services';

const pillarOrder: PillarKey[] = ['impulsa','conecta','activa'];

const ServicesSection = () => {
  return (
    <section id="servicios" className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestros Servicios</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Descubre cómo nuestras soluciones de automatización e inteligencia artificial pueden transformar tu estrategia de marketing y ventas.
          </p>
        </div>
        
        <div className="mb-8 flex flex-wrap items-center justify-center gap-3">
          {pillarOrder.map((key) => (
            <a
              key={key}
              href={`#home-${pillarMeta[key].anchorId}`}
              className="px-4 py-2 rounded-full border hover:bg-muted/50 transition-colors"
            >
              {pillarMeta[key].title}
            </a>
          ))}
        </div>

        {pillarOrder.map((key) => (
          <section key={key} id={`home-${pillarMeta[key].anchorId}`} className="mb-12">
            <h3 className="text-2xl font-bold mb-6">{pillarMeta[key].title}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesByPillar[key]?.map((service) => (
                <Card key={service.id} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className="pb-2">
                    <div className="mb-4">{service.icon}</div>
                    <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 text-base">
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
          <a href="#todos-servicios" className="text-hayas-600 hover:text-hayas-800 font-medium text-lg inline-flex items-center">
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
