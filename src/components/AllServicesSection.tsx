
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { servicesByPillar, pillarMeta, PillarKey } from '@/data/services';
import { Link } from 'react-router-dom';

const pillarOrder: PillarKey[] = ['impulsa','conecta','activa'];

const AllServicesSection = () => {
  return (
    <section id="todos-servicios" className="py-8 md:py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Todos Nuestros Servicios</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Descubre el catálogo completo de servicios profesionales que ofrecemos para hacer crecer tu negocio de forma estratégica y sostenible.
          </p>
        </div>
        
        <div className="mb-8 flex flex-wrap items-center justify-center gap-3">
          {pillarOrder.map((key) => (
            <a
              key={key}
              href={`#${pillarMeta[key].anchorId}`}
              className="px-4 py-2 rounded-full border hover:bg-muted/50 transition-colors"
            >
              {pillarMeta[key].title}
            </a>
          ))}
        </div>

        {pillarOrder.map((key) => (
          <section key={key} id={pillarMeta[key].anchorId} className="mb-12">
            <h3 className="text-2xl font-bold mb-6">{pillarMeta[key].title}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesByPillar[key]?.map((service) => (
                <Link key={service.id} to={service.href} aria-label={`Ver ${service.title}`}>
                  <Card className="border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
                    <CardHeader className="pb-2">
                      <div className="mb-4">{service.icon}</div>
                      <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600 text-base">
                        {service.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
};

export default AllServicesSection;
