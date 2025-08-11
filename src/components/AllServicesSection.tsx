
import React, { useMemo, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { servicesByPillar, pillarMeta, PillarKey } from '@/data/services';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const AllServicesSection = () => {
  const [active, setActive] = useState<'all' | PillarKey>('all');
  // Recalcular siempre para reflejar cambios en la arquitectura sin depender de memoization del bundler
  const all = Object.values(servicesByPillar).flat();
  const filtered = active === 'all' ? all : servicesByPillar[active] ?? [];

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
          <Button
            size="sm"
            variant={active === 'all' ? 'default' : 'outline'}
            aria-pressed={active === 'all'}
            onClick={() => setActive('all')}
          >
            Todos los servicios
          </Button>
          <Button
            size="sm"
            variant={active === 'impulsa' ? 'default' : 'outline'}
            aria-pressed={active === 'impulsa'}
            onClick={() => setActive('impulsa')}
          >
            {pillarMeta.impulsa.title}
          </Button>
          <Button
            size="sm"
            variant={active === 'conecta' ? 'default' : 'outline'}
            aria-pressed={active === 'conecta'}
            onClick={() => setActive('conecta')}
          >
            {pillarMeta.conecta.title}
          </Button>
          <Button
            size="sm"
            variant={active === 'activa' ? 'default' : 'outline'}
            aria-pressed={active === 'activa'}
            onClick={() => setActive('activa')}
          >
            {pillarMeta.activa.title}
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
          {filtered.map((service) => (
            <Card key={service.id} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
              <CardHeader className="pb-2">
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Link to={service.href} aria-label={`Ver ${service.title}`}>
                  <Button size="sm">Ver {service.title}</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllServicesSection;
