import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2, TrendingUp, Zap } from 'lucide-react';

const KitConsultingBanner = () => {
  return (
    <section className="py-8 md:py-12 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-white/20 rounded-lg transform rotate-12"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-white/20 rounded-lg transform -rotate-12"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 border border-white/20 rounded-lg transform rotate-45"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Content Section */}
          <div>
            <Badge className="mb-4 bg-orange-500 text-white border-orange-500 hover:bg-orange-600">
              Programa Oficial
            </Badge>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Somos Asesores Digitales de{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-cyan-400">
                Kit Consulting
              </span>
            </h2>
            
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Accede a ayudas de hasta <span className="font-bold text-orange-400">24.000€</span> para 
              la transformación digital de tu PYME. Especialistas certificados en IA, 
              análisis de datos, ciberseguridad y más.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center">
                  <Building2 className="h-5 w-5 text-orange-400" />
                </div>
                <div>
                  <p className="font-semibold text-sm">Para PYMEs</p>
                  <p className="text-xs text-gray-400">Especializado</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                  <TrendingUp className="h-5 w-5 text-cyan-400" />
                </div>
                <div>
                  <p className="font-semibold text-sm">7 Soluciones</p>
                  <p className="text-xs text-gray-400">Diferentes áreas</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center">
                  <Zap className="h-5 w-5 text-orange-400" />
                </div>
                <div>
                  <p className="font-semibold text-sm">Hasta 6.000€</p>
                  <p className="text-xs text-gray-400">Por solución</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                asChild
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-6 text-lg font-semibold shadow-lg"
              >
                <Link to="/kit-consulting">
                  Solicitar Asesoramiento
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              
              <Button 
                asChild
                variant="outline" 
                className="border-white/30 text-hayas-600 bg-white hover:bg-gray-100 px-8 py-6 text-lg"
              >
                <Link to="/kit-consulting">
                  Más Información
                </Link>
              </Button>
            </div>
          </div>

          {/* Logo Section */}
          <div className="relative flex items-center justify-center">
            {/* Decorative Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-cyan-500/20 rounded-3xl transform rotate-6 scale-110 blur-xl"></div>
            <div className="absolute inset-0 bg-gradient-to-tl from-cyan-500/20 to-orange-500/20 rounded-3xl transform -rotate-6 scale-105 blur-lg"></div>
            
            {/* Logo Container */}
            <div className="relative z-10 bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
              <img 
                src="/lovable-uploads/33d68296-8cdf-4012-934b-214b42e6902d.png" 
                alt="Kit Consulting - Juntos hacia un futuro digital" 
                className="w-full max-w-md h-auto"
              />
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-orange-400 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-cyan-400 rounded-full animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KitConsultingBanner;