import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import OptimizedImage from './OptimizedImage';
const HeroSection = () => {
  return <main className="relative section-tight overflow-hidden">
      {/* Círculos decorativos de fondo con colores corporativos */}
      <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-hayas-primary/10 opacity-20" aria-hidden="true"></div>
      <div className="absolute top-24 -right-24 w-96 h-96 rounded-full bg-hayas-secondary/10 opacity-10" aria-hidden="true"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
            <h1 className="title-hero leading-tight animate-fade-in">
              Agencia de <span className="text-gradient-primary">Marketing Digital</span> y <span className="text-gradient-primary">Gestión de Clientes</span>
            </h1>
            <p className="text-hero text-gray-700 animate-slide-up">Soluciones que impulsan tu marca, conectan con tus clientes y activan tu estrategia digital.</p>
            <div className="flex justify-center animate-slide-up stack-sm">
              <Button asChild variant="outline" className="py-6 px-8 text-lg font-medium hover-scale focus-ring border-primary text-primary hover:bg-primary hover:text-white" aria-label="Descubrir cómo trabajamos en Hayas Marketing">
                <Link to="/?scrollTo=metodologia">Descubre cómo lo hacemos</Link>
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="relative animate-fade-in">
              <div className="absolute inset-0 bg-hayas-secondary/20 rounded-full blur-3xl opacity-20 shadow-glow" aria-hidden="true"></div>
              <OptimizedImage 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop" 
                alt="Dashboard de marketing digital mostrando análisis de datos, métricas de conversión y automatización de procesos" 
                className="relative z-10 w-full h-auto rounded-xl shadow-corporate object-cover aspect-[4/3] md:aspect-auto" 
                width={800} 
                height={600} 
                priority={true} 
                sizes="(max-width: 768px) 100vw, 50vw" 
              />
            </div>
          </div>
        </div>
      </div>
    </main>;
};
export default HeroSection;