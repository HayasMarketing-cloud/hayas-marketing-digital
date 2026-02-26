import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Info, CheckCircle, X, Calendar, MessageCircle } from 'lucide-react';

interface ProgramTransitionBannerProps {
  programName: 'Kit Digital' | 'Kit Consulting';
}

const ProgramTransitionBanner = ({ programName }: ProgramTransitionBannerProps) => {
  const storageKey = `banner-dismissed-${programName.toLowerCase().replace(' ', '-')}`;
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem(storageKey);
    if (dismissed === 'true') {
      setIsDismissed(true);
    }
  }, [storageKey]);

  const handleDismiss = () => {
    setIsDismissed(true);
    localStorage.setItem(storageKey, 'true');
  };

  const handleOpenSofia = () => {
    window.dispatchEvent(new CustomEvent('openCopilotChat'));
  };

  if (isDismissed) {
    return null;
  }

  const benefits = [
    'Web profesional',
    'SEO y visibilidad',
    'CRM y automatización',
    'IA aplicada'
  ];

  return (
    <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-hayas-600 mx-4 md:mx-0">
      <div className="container mx-auto px-4 py-6 md:py-8">
        <div className="relative">
          {/* Close Button */}
          <button
            onClick={handleDismiss}
            className="absolute top-0 right-0 p-1 text-gray-500 hover:text-gray-700 transition-colors"
            aria-label="Cerrar banner"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Header */}
          <div className="flex items-start gap-3 mb-4 pr-8">
            <div className="p-2 bg-amber-100 rounded-lg shrink-0">
              <Info className="h-5 w-5 text-amber-700" />
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 font-display">
                El programa {programName} ha finalizado
              </h3>
              <p className="text-gray-700 mt-1">
                Pero tu transformación digital no tiene por qué esperar.
              </p>
            </div>
          </div>

          {/* Main Message */}
          <div className="mb-6">
            <p className="text-gray-700 leading-relaxed">
              Durante estos <strong>3 años y medio</strong> que ha durado el programa, en Hayas Marketing hemos creado una{' '}
              <strong className="text-hayas-700">solución eficiente de Marketing 360 con IA Esencial</strong> que te ofrece todo lo que necesitas para digitalizar tu negocio:
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-hayas-600 shrink-0" />
                <span className="text-sm font-medium text-gray-800">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button 
              className="bg-gradient-to-r from-hayas-500 to-turquesa-500 text-white hover:from-hayas-600 hover:to-turquesa-600"
              asChild
            >
              <Link to="/es/agendar-reunion">
                <Calendar className="h-4 w-4 mr-2" />
                Agendar Reunión
              </Link>
            </Button>
            <Button 
              variant="outline" 
              className="border-hayas-300 text-hayas-700 hover:bg-hayas-50"
              onClick={handleOpenSofia}
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              Hablar con HAYAS Copilot
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramTransitionBanner;
