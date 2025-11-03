import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, ArrowRight, MessageCircle, Search, FileText, PhoneCall } from 'lucide-react';
import EnhancedSEO from '@/components/EnhancedSEO';

const Gracias = () => {
  // GTM: Si estamos en iframe, notificar al parent que se cargó la página de gracias
  useEffect(() => {
    try {
      if (window.self !== window.top) {
        window.parent.postMessage({
          type: 'ghl_iframe_thankyou',
          thankyou_url: window.location.href
        }, '*');
        console.log('✅ postMessage enviado al parent desde página de gracias');
      }
    } catch (e) {
      console.warn('ℹ️ No se pudo enviar postMessage (cross-domain):', e);
    }

    // Limpiar parámetros de la URL
    if (window.location.search) {
      const cleanUrl = window.location.pathname;
      window.history.replaceState({}, document.title, cleanUrl);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white">
      <EnhancedSEO customSEO={{ canonical: '/es/gracias', robots: 'noindex, follow' }} />
      <Navigation />
      
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto text-center">
          {/* Icono de éxito */}
          <div className="mb-8">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
          </div>

          {/* Título principal */}
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            ¡Gracias por contactarnos!
          </h1>
          
          <p className="text-xl text-gray-600 mb-8">
            Hemos recibido tu mensaje correctamente. Nuestro equipo revisará tu consulta y te responderemos en las próximas 24 horas.
          </p>

          {/* Tarjeta de información */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-left">¿Qué sigue ahora?</CardTitle>
            </CardHeader>
            <CardContent className="text-left space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-primary font-semibold text-sm">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Revisión de tu mensaje</h3>
                  <p className="text-gray-600 text-sm">
                    Nuestro equipo está revisando tu consulta en estos momentos para comprender tus necesidades específicas.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-primary font-semibold text-sm">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Contacto personalizado</h3>
                  <p className="text-gray-600 text-sm">
                    Te responderemos en las próximas 24 horas por el medio de contacto que nos indicaste.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-primary font-semibold text-sm">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Propuesta a medida</h3>
                  <p className="text-gray-600 text-sm">
                    Prepararemos una propuesta personalizada alineada con tus objetivos y necesidades específicas.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Botones de acción */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button asChild size="lg">
              <Link to="/es/soluciones/impulsa-tu-marca">
                <Search className="mr-2 h-4 w-4" />
                Explorar soluciones
              </Link>
            </Button>
            
            <Button variant="outline" size="lg" asChild>
              <Link to="/es/casos-exito">
                <FileText className="mr-2 h-4 w-4" />
                Ver casos de éxito
              </Link>
            </Button>
            
            <Button variant="ghost" size="lg" asChild>
              <Link to="/es">
                Volver al inicio
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Información de contacto urgente */}
          <Card className="bg-gray-50 border-2 border-primary/20">
            <CardContent className="pt-6">
              <div className="flex items-center justify-center mb-3">
                <PhoneCall className="w-5 h-5 text-primary mr-2" />
                <h3 className="font-semibold text-gray-900">¿Necesitas una respuesta más rápida?</h3>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Si tu consulta es urgente, puedes contactarnos directamente a través de:
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 text-sm text-gray-700">
                <a 
                  href="https://wa.me/34656908615" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center hover:text-primary transition-colors"
                >
                  <MessageCircle className="w-4 h-4 mr-1" />
                  WhatsApp
                </a>
                <a 
                  href="mailto:hola@hayas.es"
                  className="flex items-center justify-center hover:text-primary transition-colors"
                >
                  📧 hola@hayas.es
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Gracias;
