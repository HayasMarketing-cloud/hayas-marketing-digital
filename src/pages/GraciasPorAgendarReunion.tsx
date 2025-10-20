import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, ArrowRight, MessageCircle, Search, Calendar, PhoneCall } from 'lucide-react';
import EnhancedSEO from '@/components/EnhancedSEO';

const GraciasPorAgendarReunion = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white">
      <EnhancedSEO customSEO={{ canonical: '/es/gracias_por_agendar_reunion', robots: 'noindex, follow' }} />
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
            ¡Tu reunión está confirmada!
          </h1>
          
          <p className="text-xl text-gray-600 mb-8">
            Hemos agendado tu reunión correctamente. Recibirás un email de confirmación con todos los detalles en los próximos minutos.
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
                  <h3 className="font-semibold text-gray-900">Confirmación enviada</h3>
                  <p className="text-gray-600 text-sm">
                    Recibirás un email con los detalles de tu reunión y un enlace para añadirla a tu calendario.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-primary font-semibold text-sm">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Preparación de la reunión</h3>
                  <p className="text-gray-600 text-sm">
                    Nuestro equipo revisará tu caso antes de la reunión para aprovechar al máximo el tiempo juntos.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-primary font-semibold text-sm">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">En la reunión</h3>
                  <p className="text-gray-600 text-sm">
                    Analizaremos tu situación actual, identificaremos oportunidades y te propondremos soluciones concretas.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Sección de preparación */}
          <Card className="mb-8 bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-left flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-primary" />
                Prepárate para la reunión
              </CardTitle>
            </CardHeader>
            <CardContent className="text-left">
              <p className="text-gray-700 text-sm mb-3">
                Para aprovechar al máximo nuestra conversación, te recomendamos tener a mano:
              </p>
              <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                <li>Objetivos principales que quieres alcanzar</li>
                <li>Información sobre tu situación actual (web, redes, etc.)</li>
                <li>Presupuesto aproximado que tienes en mente</li>
                <li>Cualquier duda específica que quieras resolver</li>
              </ul>
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
                <h3 className="font-semibold text-gray-900">¿Necesitas modificar o cancelar?</h3>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Si necesitas cambiar la fecha o cancelar la reunión, contáctanos directamente:
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

export default GraciasPorAgendarReunion;
