
import React from 'react';
import { Button } from '@/components/ui/button';
import OptimizedImage from './OptimizedImage';

const HeroSection = () => {
  return (
    <main className="relative py-16 md:py-20 overflow-hidden">
      {/* Círculos decorativos de fondo con colores corporativos */}
      <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-hayas-primary/10 opacity-20" aria-hidden="true"></div>
      <div className="absolute top-24 -right-24 w-96 h-96 rounded-full bg-hayas-secondary/10 opacity-10" aria-hidden="true"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in">
              Soluciones de <span className="text-gradient-primary">Automatización</span> e <span className="text-gradient-primary">IA</span> para Marketing y Ventas
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 animate-slide-up">
              En Hayas diseñamos soluciones que mejoran la eficiencia, potencian el marketing y ventas, y fortalecen la conexión entre marcas y personas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up">
              <Button 
                className="gradient-primary text-white py-6 px-8 text-lg font-medium shadow-elegant hover-scale focus-ring"
                aria-label="Conocer nuestros servicios de marketing e IA"
              >
                Conocer servicios
              </Button>
              <Button 
                variant="outline" 
                className="py-6 px-8 text-lg font-medium hover-scale focus-ring border-primary text-primary hover:bg-primary hover:text-white"
                aria-label="Contactar con Hayas Marketing"
              >
                Contactar
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="relative animate-fade-in">
              <div className="absolute inset-0 bg-hayas-secondary/20 rounded-full blur-3xl opacity-20 shadow-glow" aria-hidden="true"></div>
              <OptimizedImage
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
                alt="Dashboard de marketing digital mostrando análisis de datos, métricas de conversión y automatización de procesos"
                className="relative z-10 w-full h-auto rounded-xl shadow-corporate"
                width={800}
                height={600}
                priority={true}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
