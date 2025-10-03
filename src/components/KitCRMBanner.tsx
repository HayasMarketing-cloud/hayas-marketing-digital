import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { Building2, Users, Euro, AlertCircle } from 'lucide-react';

const KitCRMBanner = () => {
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
                Programa Oficial Kit Digital
              </Badge>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Aplica tu bono digital para{' '}
                <span className="text-gradient-primary">implementar tu sistema de gestión de clientes (CRM)</span>
              </h2>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                Accede al programa Kit Digital y financia la implementación de tu CRM profesional. 
                Gestiona leads, automatiza procesos y centraliza toda tu información comercial con ayuda del bono digital.
              </p>
              
              <div className="bg-orange-500/20 border border-orange-500/30 rounded-lg p-4 mb-4">
                <p className="text-orange-300 text-sm mb-2">
                  <span className="font-semibold">Para empresas constituidas en España.</span>
                </p>
                <p className="text-white font-bold text-lg">
                  ¡Solicítalo antes del 31 de octubre de 2025!
                </p>
              </div>
            </div>
            
            {/* Features - Convocatorias disponibles */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-4">Convocatorias disponibles:</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Segmento III */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <div className="flex items-start space-x-3 mb-3">
                    <div className="p-2 bg-orange-500/20 rounded-lg">
                      <Building2 className="h-5 w-5 text-orange-400" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold">Segmento III</div>
                      <div className="text-xs text-gray-400">0 a 2 empleados</div>
                    </div>
                  </div>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-2xl font-bold text-orange-400">3.000€</span>
                  </div>
                  <div className="flex items-start gap-2 bg-blue-500/20 rounded p-2 mt-2">
                    <AlertCircle className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                    <p className="text-xs text-blue-200">
                      *De los cuales 1.000€ están reservados para puesto seguro en internet
                    </p>
                  </div>
                </div>
                
                {/* Comunidades de Bienes */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <div className="flex items-start space-x-3 mb-3">
                    <div className="p-2 bg-blue-500/20 rounded-lg">
                      <Users className="h-5 w-5 text-blue-400" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold">Comunidades de Bienes</div>
                      <div className="text-xs text-gray-400">Hasta 50 empleados</div>
                    </div>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-xs text-gray-400">Hasta</span>
                    <span className="text-2xl font-bold text-green-400">12.000€</span>
                  </div>
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
                <Link to="/es/kit-digital">
                  Solicitar Información
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
                  <p className="text-gray-300 text-sm">Transforma tu gestión comercial con ayuda del bono digital</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KitCRMBanner;
