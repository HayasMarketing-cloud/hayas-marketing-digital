import React from 'react';
import { ArrowLeft, Calendar, MessageSquare, Phone, Mail, Clock, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import StandardGHLForm from '@/components/StandardGHLForm';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from '@/components/ui/breadcrumb';

const SolicitarConsulta = () => {
  return (
    <div id="top" className="min-h-screen bg-white">
      <Navigation />
      
      <main>
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
                  <BreadcrumbPage>Solicitar Consulta</BreadcrumbPage>
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
                Consulta Gratuita
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Solicita tu <span className="text-gradient-primary">consulta estratégica</span> gratuita
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Analizamos tu situación actual y te proponemos las mejores soluciones para hacer crecer tu negocio
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="flex items-center justify-center gap-3 bg-white/80 backdrop-blur-sm rounded-lg p-4">
                  <Clock className="h-6 w-6 text-hayas-600" />
                  <span className="font-medium">30 min gratuitos</span>
                </div>
                <div className="flex items-center justify-center gap-3 bg-white/80 backdrop-blur-sm rounded-lg p-4">
                  <MessageSquare className="h-6 w-6 text-turquesa-600" />
                  <span className="font-medium">Análisis personalizado</span>
                </div>
                <div className="flex items-center justify-center gap-3 bg-white/80 backdrop-blur-sm rounded-lg p-4">
                  <CheckCircle className="h-6 w-6 text-hayas-600" />
                  <span className="font-medium">Sin compromiso</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Options */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Elige cómo quieres <span className="text-gradient-primary">contactarnos</span>
                </h2>
                <p className="text-lg text-gray-600">
                  Estamos aquí para ayudarte de la forma que te resulte más cómoda
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Contact Form */}
                <Card className="border-none shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold flex items-center gap-3">
                      <MessageSquare className="h-6 w-6 text-hayas-600" />
                      Formulario de contacto
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6 p-0">
                    <StandardGHLForm
                      formId="7hfylnczt0dXbyUFFSEt"
                      title="Solicitar Consulta"
                      minHeight={820}
                      showHeader={false}
                    />
                  </CardContent>
                </Card>

                {/* Direct Contact Options */}
                <div className="space-y-6">
                  <Card className="border-none shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-2xl font-bold flex items-center gap-3">
                        <Calendar className="h-6 w-6 text-turquesa-600" />
                        Agendar reunión
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-6">
                        Reserva directamente una videollamada de 30 minutos para analizar tu proyecto en detalle.
                      </p>
                      <Link to="/agendar-reunion">
                        <Button className="w-full gradient-primary text-white py-4">
                          Agendar reunión gratuita
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>

                  <Card className="border-none shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-2xl font-bold flex items-center gap-3">
                        <Phone className="h-6 w-6 text-hayas-600" />
                        Contacto directo
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <Phone className="h-5 w-5 text-hayas-600" />
                        <div>
                          <p className="font-medium">Teléfono</p>
                          <p className="text-gray-600">+34 XXX XXX XXX</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <Mail className="h-5 w-5 text-turquesa-600" />
                        <div>
                          <p className="font-medium">Email</p>
                          <p className="text-gray-600">hola@hayasmarketing.com</p>
                        </div>
                      </div>

                      <Link to="/contacto">
                        <Button variant="outline" className="w-full py-4">
                          Ver más opciones de contacto
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                ¿Qué obtienes en tu <span className="text-gradient-primary">consulta gratuita</span>?
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                {[
                  {
                    icon: <MessageSquare className="h-10 w-10 text-hayas-600" />,
                    title: "Análisis de situación",
                    description: "Evaluamos tu presencia digital actual y identificamos oportunidades de mejora."
                  },
                  {
                    icon: <CheckCircle className="h-10 w-10 text-turquesa-600" />,
                    title: "Propuesta personalizada",
                    description: "Te presentamos las soluciones más adecuadas para tus objetivos y presupuesto."
                  },
                  {
                    icon: <Calendar className="h-10 w-10 text-hayas-600" />,
                    title: "Plan de acción",
                    description: "Definimos los próximos pasos y tiempos para hacer realidad tu proyecto."
                  }
                ].map((benefit, index) => (
                  <Card key={index} className="border-none shadow-lg text-center">
                    <CardHeader>
                      <div className="mx-auto mb-4 p-3 bg-gray-100 rounded-lg w-fit">
                        {benefit.icon}
                      </div>
                      <CardTitle className="text-xl font-bold">
                        {benefit.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">
                        {benefit.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SolicitarConsulta;