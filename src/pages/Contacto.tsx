import React from 'react';
import { ArrowLeft, MapPin, Phone, Mail, Clock, MessageSquare, Calendar, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from '@/components/ui/breadcrumb';

const Contacto = () => {
  return (
    <div id="top" className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-56">
        {/* Breadcrumbs */}
        <section className="py-4 bg-gray-50 border-b">
          <div className="container mx-auto px-4">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/">Inicio</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Contacto</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </section>

        {/* Header Navigation */}
        <section className="py-6 bg-gray-50">
          <div className="container mx-auto px-4">
            <Link to="/#top" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver al Inicio
            </Link>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-hayas-50 to-turquesa-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-4 text-hayas-600 border-hayas-200">
                Contacto
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Hablemos de tu <span className="text-gradient-primary">proyecto</span>
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Estamos aquí para ayudarte a hacer crecer tu negocio. Contacta con nosotros de la forma que prefieras.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <div>
                  <h2 className="text-3xl font-bold mb-6">
                    Envíanos un <span className="text-gradient-primary">mensaje</span>
                  </h2>
                  <p className="text-gray-600 mb-8">
                    Completa el formulario y nos pondremos en contacto contigo lo antes posible.
                  </p>
                  
                  <Card className="border-none shadow-lg">
                    <CardContent className="p-8 space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="nombre">Nombre *</Label>
                          <Input id="nombre" placeholder="Tu nombre" className="mt-1" />
                        </div>
                        <div>
                          <Label htmlFor="empresa">Empresa</Label>
                          <Input id="empresa" placeholder="Nombre de tu empresa" className="mt-1" />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="email">Email *</Label>
                          <Input id="email" type="email" placeholder="tu@email.com" className="mt-1" />
                        </div>
                        <div>
                          <Label htmlFor="telefono">Teléfono</Label>
                          <Input id="telefono" placeholder="Tu teléfono" className="mt-1" />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="asunto">Asunto</Label>
                        <Input id="asunto" placeholder="¿De qué quieres hablarnos?" className="mt-1" />
                      </div>

                      <div>
                        <Label htmlFor="mensaje">Mensaje *</Label>
                        <Textarea 
                          id="mensaje" 
                          placeholder="Cuéntanos más sobre tu proyecto, necesidades o consulta..."
                          className="mt-1 min-h-[150px]"
                        />
                      </div>

                      <Button className="w-full gradient-primary text-white py-6 text-lg">
                        Enviar mensaje
                      </Button>
                    </CardContent>
                  </Card>
                </div>

                {/* Contact Information */}
                <div>
                  <h2 className="text-3xl font-bold mb-6">
                    Información de <span className="text-gradient-primary">contacto</span>
                  </h2>
                  
                  <div className="space-y-6 mb-8">
                    <Card className="border-none shadow-lg">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="p-3 bg-hayas-100 rounded-lg">
                            <Phone className="h-6 w-6 text-hayas-600" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold mb-1">Teléfono</h3>
                            <p className="text-gray-600">+34 XXX XXX XXX</p>
                            <p className="text-sm text-gray-500 mt-1">Lun - Vie: 9:00 - 18:00</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-none shadow-lg">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="p-3 bg-turquesa-100 rounded-lg">
                            <Mail className="h-6 w-6 text-turquesa-600" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold mb-1">Email</h3>
                            <p className="text-gray-600">hola@hayasmarketing.com</p>
                            <p className="text-sm text-gray-500 mt-1">Respuesta en 24h</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-none shadow-lg">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="p-3 bg-hayas-100 rounded-lg">
                            <MapPin className="h-6 w-6 text-hayas-600" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold mb-1">Ubicación</h3>
                            <p className="text-gray-600">Málaga, España</p>
                            <p className="text-sm text-gray-500 mt-1">Trabajamos en remoto</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Quick Actions */}
                  <div className="space-y-4">
                    <Link to="/solicitar-consulta">
                      <Button className="w-full gradient-primary text-white py-4">
                        <Calendar className="w-4 h-4 mr-2" />
                        Solicitar consulta gratuita
                      </Button>
                    </Link>
                    
                    <Link to="/agendar-reunion">
                      <Button variant="outline" className="w-full py-4">
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Agendar reunión
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Office Hours & FAQ */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Office Hours */}
                <Card className="border-none shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold flex items-center gap-3">
                      <Clock className="h-6 w-6 text-hayas-600" />
                      Horarios de atención
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="font-medium">Lunes - Viernes</span>
                      <span className="text-gray-600">9:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="font-medium">Sábados</span>
                      <span className="text-gray-600">10:00 - 14:00</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="font-medium">Domingos</span>
                      <span className="text-gray-600">Cerrado</span>
                    </div>
                    <div className="mt-4 p-3 bg-hayas-50 rounded-lg">
                      <p className="text-sm text-gray-600">
                        <strong>Nota:</strong> Para urgencias, siempre puedes enviarnos un email y te responderemos lo antes posible.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Contact */}
                <Card className="border-none shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold flex items-center gap-3">
                      <Users className="h-6 w-6 text-turquesa-600" />
                      Contacto rápido
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-600 mb-4">
                      ¿Tienes una pregunta rápida? Estas son las formas más directas de contactarnos:
                    </p>
                    
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <MessageSquare className="h-5 w-5 text-hayas-600" />
                        <div>
                          <p className="font-medium">WhatsApp</p>
                          <p className="text-sm text-gray-600">Respuesta inmediata</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <Mail className="h-5 w-5 text-turquesa-600" />
                        <div>
                          <p className="font-medium">Email directo</p>
                          <p className="text-sm text-gray-600">Respuesta en 2-4 horas</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <Calendar className="h-5 w-5 text-hayas-600" />
                        <div>
                          <p className="font-medium">Videollamada</p>
                          <p className="text-sm text-gray-600">Agenda en 24-48h</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contacto;