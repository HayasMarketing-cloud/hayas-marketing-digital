import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Globe, TrendingUp, Calendar, Settings, ShoppingCart, Building2, Target, Euro } from 'lucide-react';

const KitDigitalBanner = () => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-orange-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-blue-500/10 to-orange-500/10 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <div className="text-white space-y-8">
            <div className="space-y-6">
              <Badge className="bg-orange-500 hover:bg-orange-600 text-white border-none px-4 py-2 text-sm font-semibold">
                Programa Oficial
              </Badge>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Aplica tu bono digital para mejorar tu presencia orgánica en{' '}
                <span className="text-gradient-primary">Google</span>
              </h2>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                Accede a tu bono digital de hasta <span className="font-bold text-orange-400">3.000€</span> para la transformación digital de tu negocio. 
                Especialistas certificados en digitalización, diseño web, e-commerce y más.
              </p>
              
              <div className="bg-orange-500/20 border border-orange-500/30 rounded-lg p-4 mb-4">
                <p className="text-orange-300 text-sm mb-2">
                  <span className="font-semibold">Para empresas constituidas en España.</span>
                </p>
                <p className="text-white font-bold text-lg">
                  ¡Solicítalo antes del próximo 31 de octubre!
                </p>
              </div>
            </div>
            
            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-orange-500/20 rounded-lg">
                  <Building2 className="h-5 w-5 text-orange-400" />
                </div>
                <div>
                  <div className="text-sm font-semibold">Para Autónomos</div>
                  <div className="text-xs text-gray-400">y pymes hasta 2 empleados</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-500/20 rounded-lg">
                  <Target className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <div className="text-sm font-semibold">11 Soluciones</div>
                  <div className="text-xs text-gray-400">Diferentes áreas</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-green-500/20 rounded-lg">
                  <Euro className="h-5 w-5 text-green-400" />
                </div>
                <div>
                  <div className="text-sm font-semibold">Hasta 3.000€</div>
                  <div className="text-xs text-gray-400">Por solución</div>
                </div>
              </div>
            </div>
            
            {/* Button */}
            <div className="flex justify-start">
              <Button 
                size="lg" 
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-6 text-lg"
                asChild
              >
                <Link to="/kit-digital">
                  Más Información
                </Link>
              </Button>
            </div>
          </div>
          
          {/* Logo Section */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 text-center">
              {/* Decorative floating elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-orange-500/20 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-blue-500/20 rounded-full animate-pulse delay-1000"></div>
              
              {/* Logo */}
              <div className="space-y-6">
                <div className="mx-auto flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/6e8dd311-f7cc-4c6d-ad4b-0402c053afda.png" 
                    alt="Kit Digital Logo Oficial"
                    className="h-20 w-auto"
                  />
                </div>
                
                <div>
                  <p className="text-gray-300 text-sm">Juntos hacia un futuro digital</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default KitDigitalBanner;