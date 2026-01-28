import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, ArrowRight, Download, MessageCircle } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

const PagoExitoso = () => {
  const { refreshSubscription } = useAuth();

  useEffect(() => {
    // Refrescar el estado de suscripción cuando llegue a esta página
    setTimeout(() => {
      refreshSubscription();
    }, 2000);
  }, [refreshSubscription]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white">
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
            ¡Pago realizado con éxito!
          </h1>
          
          <p className="text-xl text-gray-600 mb-8">
            Tu pago se ha procesado correctamente. En breve recibirás un email de confirmación con todos los detalles.
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
                  <h3 className="font-semibold text-gray-900">Email de confirmación</h3>
                  <p className="text-gray-600 text-sm">
                    Recibirás un email con la factura y detalles del servicio contratado.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-primary font-semibold text-sm">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Contacto del equipo</h3>
                  <p className="text-gray-600 text-sm">
                    Nuestro equipo se pondrá en contacto contigo en las próximas 24 horas para coordinar el proyecto.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-primary font-semibold text-sm">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Inicio del proyecto</h3>
                  <p className="text-gray-600 text-sm">
                    Comenzaremos a trabajar en tu proyecto según los plazos acordados.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Botones de acción */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/es/mi-cuenta">
                <Download className="mr-2 h-4 w-4" />
                Ver mi cuenta
              </Link>
            </Button>
            
            <Button variant="outline" size="lg" asChild>
              <Link to="/es/contacto">
                <MessageCircle className="mr-2 h-4 w-4" />
                Contactar soporte
              </Link>
            </Button>
            
            <Button variant="ghost" size="lg" asChild>
              <Link to="/es">
                Volver al inicio
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Información adicional */}
          <div className="mt-12 p-6 bg-gray-50 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">¿Necesitas ayuda?</h3>
            <p className="text-gray-600 text-sm mb-4">
              Si tienes alguna pregunta sobre tu compra o necesitas asistencia, no dudes en contactarnos.
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

export default PagoExitoso;