import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { XCircle, ArrowLeft, MessageCircle, RefreshCw } from 'lucide-react';
import { useLocalizedRoutes } from '@/hooks/useLocalizedRoutes';

const PagoCancelado = () => {
  const { getRoute } = useLocalizedRoutes();
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-white">
      <Navigation />
      
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto text-center">
          {/* Icono de cancelación */}
          <div className="mb-8">
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto">
              <XCircle className="w-10 h-10 text-red-600" />
            </div>
          </div>

          {/* Título principal */}
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Pago cancelado
          </h1>
          
          <p className="text-xl text-gray-600 mb-8">
            No se ha realizado ningún cargo. Puedes intentar de nuevo cuando estés listo.
          </p>

          {/* Tarjeta de información */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-left">¿Qué ha ocurrido?</CardTitle>
            </CardHeader>
            <CardContent className="text-left space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-gray-400 rounded-full flex-shrink-0 mt-2"></div>
                <p className="text-gray-600 text-sm">
                  El proceso de pago fue cancelado antes de completarse
                </p>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-gray-400 rounded-full flex-shrink-0 mt-2"></div>
                <p className="text-gray-600 text-sm">
                  No se ha realizado ningún cargo a tu tarjeta o método de pago
                </p>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-gray-400 rounded-full flex-shrink-0 mt-2"></div>
                <p className="text-gray-600 text-sm">
                  Puedes intentar realizar el pago nuevamente cuando desees
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Razones comunes */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-left">Posibles motivos</CardTitle>
            </CardHeader>
            <CardContent className="text-left">
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Decidiste cancelar el proceso de pago</li>
                <li>• Cerraste la ventana de pago accidentalmente</li>
                <li>• Hubo un problema técnico temporal</li>
                <li>• Necesitas más tiempo para revisar los detalles</li>
              </ul>
            </CardContent>
          </Card>

          {/* Botones de acción */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to={getRoute('services')}>
                <RefreshCw className="mr-2 h-4 w-4" />
                Intentar de nuevo
              </Link>
            </Button>
            
            <Button variant="outline" size="lg" asChild>
              <Link to={getRoute('contact')}>
                <MessageCircle className="mr-2 h-4 w-4" />
                Contactar soporte
              </Link>
            </Button>
            
            <Button variant="ghost" size="lg" asChild>
              <Link to={getRoute('home')}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Volver al inicio
              </Link>
            </Button>
          </div>

          {/* Información de contacto */}
          <div className="mt-12 p-6 bg-gray-50 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">¿Necesitas ayuda?</h3>
            <p className="text-gray-600 text-sm mb-4">
              Si experimentaste algún problema técnico o tienes preguntas sobre nuestros servicios, estaremos encantados de ayudarte.
            </p>
            <div className="flex justify-center space-x-6 text-sm text-gray-500">
              <span>📧 info@hayasmarketing.com</span>
              <span>📞 +34 XXX XXX XXX</span>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PagoCancelado;