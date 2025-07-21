import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Globe, TrendingUp, Calendar, Settings, ShoppingCart } from 'lucide-react';

const KitDigitalBanner = () => {
  return (
    <section className="py-8 md:py-12 bg-gradient-to-br from-blue-900 via-indigo-800 to-blue-900 text-white relative overflow-hidden">
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
            <Badge className="mb-4 bg-blue-500 text-white border-blue-500 hover:bg-blue-600">
              Subvención Gobierno de España
            </Badge>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Digitaliza tu negocio con{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                Kit Digital
              </span>
            </h2>
            
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Autónomos y micropymes, obten hasta <span className="font-bold text-cyan-400">3.000€</span> en 
              subvención directa para digitalizar tu negocio. Web profesional, SEO, redes sociales y más.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <Users className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <p className="font-semibold text-sm">Autónomos</p>
                  <p className="text-xs text-gray-400">Hasta 2 empleados</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                  <Globe className="h-5 w-5 text-cyan-400" />
                </div>
                <div>
                  <p className="font-semibold text-sm">Web + SEO</p>
                  <p className="text-xs text-gray-400">Presencia digital</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <TrendingUp className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <p className="font-semibold text-sm">Hasta 3.000€</p>
                  <p className="text-xs text-gray-400">Sin coste</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                asChild
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-6 text-lg font-semibold shadow-lg"
              >
                <Link to="/kit-digital">
                  Quiero mi bono de 3.000€
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              
              <Button 
                asChild
                variant="outline" 
                className="border-white/30 text-hayas-600 bg-white hover:bg-gray-100 px-8 py-6 text-lg"
              >
                <Link to="/kit-digital">
                  Más Información
                </Link>
              </Button>
            </div>

            <div className="mt-6 flex items-center gap-4">
              <Badge className="bg-green-100 text-green-800 text-sm px-3 py-1">
                <Calendar className="h-4 w-4 mr-1" />
                Convocatoria abierta
              </Badge>
            </div>
          </div>

          {/* Visual Section */}
          <div className="relative flex items-center justify-center">
            {/* Decorative Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-3xl transform rotate-6 scale-110 blur-xl"></div>
            <div className="absolute inset-0 bg-gradient-to-tl from-blue-500/20 to-cyan-500/20 rounded-3xl transform -rotate-6 scale-105 blur-lg"></div>
            
            {/* Content Container */}
            <div className="relative z-10 bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl max-w-md">
              <div className="text-center">
                <div className="mb-6">
                  <img 
                    src="/lovable-uploads/f9d2b651-7c92-42b3-86ce-64e3add924c6.png" 
                    alt="Kit Digital - Logo oficial" 
                    className="h-16 w-auto mx-auto"
                  />
                </div>
                <p className="text-gray-600 mb-6">Digitalización para autónomos y micropymes</p>
                
                <div className="space-y-3 text-left">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                      <Globe className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-sm text-gray-700">Web profesional</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                      <TrendingUp className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-sm text-gray-700">Posicionamiento SEO</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                      <Users className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-sm text-gray-700">Redes sociales</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <Settings className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-sm text-gray-700">CRM gestión clientes</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center">
                      <ShoppingCart className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-sm text-gray-700">Tienda online</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-cyan-400 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-400 rounded-full animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KitDigitalBanner;