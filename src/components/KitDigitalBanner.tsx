import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Globe, TrendingUp, Calendar, Settings, ShoppingCart } from 'lucide-react';
const KitDigitalBanner = () => {
  return (
    <div className="bg-gradient-to-r from-primary to-accent py-8 px-6 rounded-lg shadow-lg my-8">
      <div className="max-w-4xl mx-auto text-center">
        <Badge className="bg-white/20 text-white border-white/30 mb-4">
          Kit Digital 2024
        </Badge>
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Acelera tu Transformación Digital
        </h3>
        <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
          Aprovecha las ayudas del Kit Digital para digitalizar tu empresa. 
          Te ayudamos con la solicitud y implementación completa.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
            <Link to="/kit-digital">
              <Calendar className="w-5 h-5 mr-2" />
              Solicitar Kit Digital
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
          <div className="flex items-center gap-4 text-white/80 text-sm">
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span>+500 empresas</span>
            </div>
            <div className="flex items-center gap-1">
              <TrendingUp className="w-4 h-4" />
              <span>Hasta 12.000€</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default KitDigitalBanner;