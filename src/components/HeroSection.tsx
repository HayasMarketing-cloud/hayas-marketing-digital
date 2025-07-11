
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative py-8 md:py-12 overflow-hidden">
      {/* Círculos decorativos de fondo */}
      <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-hayas-100 opacity-20"></div>
      <div className="absolute top-24 -right-24 w-96 h-96 rounded-full bg-turquesa-light opacity-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Soluciones de <span className="text-gradient-primary">Automatización</span> e <span className="text-gradient-primary">IA</span> para Marketing y Ventas
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              En Hayas diseñamos soluciones que mejoran la eficiencia, potencian el marketing y ventas, y fortalecen la conexión entre marcas y personas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="gradient-primary text-white py-6 px-8 text-lg font-medium">
                Conocer servicios
              </Button>
              <Button variant="outline" className="py-6 px-8 text-lg font-medium">
                Contactar
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute inset-0 bg-hayas-200 rounded-full blur-3xl opacity-20"></div>
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop" 
                alt="Dashboard de marketing digital y análisis de datos" 
                className="relative z-10 w-full h-auto rounded-xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
