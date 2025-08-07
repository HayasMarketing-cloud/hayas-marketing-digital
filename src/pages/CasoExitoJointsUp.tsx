import React from 'react';
import { ArrowLeft, Heart, TrendingUp, Award, ExternalLink, CheckCircle, Stethoscope } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import jointsupHeroImage from '@/assets/jointsup-traumatology-hero.jpg';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from '@/components/ui/breadcrumb';

const CasoExitoJointsUp = () => {
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
                  <BreadcrumbLink asChild>
                    <Link to="/creacion-marca">Creación de Marca</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>JointsUp</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </section>

        {/* Header Navigation */}
        <section className="py-6 bg-gray-50">
          <div className="container mx-auto px-4">
            <Link to="/creacion-marca" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver a Creación de Marca
            </Link>
          </div>
        </section>

        {/* Hero Section */}
        <section className="relative py-12 md:py-16 bg-gradient-to-br from-hayas-50 to-turquesa-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="outline" className="mb-4 text-hayas-600 border-hayas-200">
                  Caso de Éxito
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Joints'Up: <span className="text-gradient-primary">Excelencia</span> Médica Especializada
                </h1>
                <p className="text-xl text-gray-700 mb-8 leading-relaxed font-medium">
                  Creando una marca médica de confianza para cirujanos traumatólogos especializados
                </p>
                <div className="flex items-center gap-4 mb-8">
                  <Badge className="bg-hayas-100 text-hayas-700">Cirugía Traumatológica</Badge>
                  <Badge className="bg-turquesa-100 text-turquesa-700">Especialistas Médicos</Badge>
                </div>
                <Link to="https://jointsup.es" target="_blank">
                  <Button className="gradient-primary text-white px-6 py-3">
                    Visitar Web
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-hayas-200 to-turquesa-200 rounded-3xl transform rotate-6 scale-105 opacity-20"></div>
                <img 
                  src={jointsupHeroImage} 
                  alt="Joints'Up - Cirugía Traumatológica Especializada" 
                  className="relative z-10 w-full h-auto rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Client Profile */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Sobre <span className="text-gradient-primary">Joints'Up</span>
              </h2>
              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-hayas-600">Perfil del Cliente</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        Grupo de cirujanos traumatólogos altamente especializados en cirugía de hombro, rodilla, 
                        codo, manos y dedos, espalda y cadera. Su práctica médica se centra en técnicas avanzadas 
                        y tratamientos innovadores para problemas articulares y óseos complejos, atendiendo tanto 
                        a pacientes deportistas como población general.
                      </p>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-hayas-600" />
                          <span className="text-gray-700">Cirugía de hombro especializada</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-hayas-600" />
                          <span className="text-gray-700">Cirugía de rodilla avanzada</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-hayas-600" />
                          <span className="text-gray-700">Cirugía de codo especializada</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-hayas-600" />
                          <span className="text-gray-700">Cirugía de manos y dedos</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-hayas-600" />
                          <span className="text-gray-700">Cirugía de espalda y columna</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-hayas-600" />
                          <span className="text-gray-700">Cirugía de cadera avanzada</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-turquesa-600">El Reto</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Necesitaban crear una marca médica que transmitiera autoridad científica y generara 
                        confianza inmediata en pacientes que requieren cirugías complejas. El desafío era 
                        comunicar su alta especialización técnica de manera accesible, diferenciándose en 
                        un sector donde la credibilidad y la reputación son fundamentales.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Solution */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Solución <span className="text-gradient-primary">Aplicada</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    icon: <Award className="h-8 w-8 text-hayas-600" />,
                    title: "Naming Estratégico",
                    description: "Desarrollo del nombre 'Joints'Up' que comunica especialización articular y mejora ascendente."
                  },
                  {
                    icon: <Stethoscope className="h-8 w-8 text-turquesa-600" />,
                    title: "Branding Médico",
                    description: "Identidad visual que equilibra profesionalidad científica con accesibilidad humana."
                  },
                  {
                    icon: <Heart className="h-8 w-8 text-hayas-600" />,
                    title: "Diseño Web Médico",
                    description: "Plataforma digital que genera confianza y facilita la toma de decisiones del paciente."
                  }
                ].map((service, index) => (
                  <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardHeader className="text-center">
                      <div className="mb-4 mx-auto p-3 rounded-lg bg-gray-100 w-fit">
                        {service.icon}
                      </div>
                      <CardTitle className="text-lg font-bold">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-center">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Resultados y <span className="text-gradient-primary">Beneficios</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <Card className="text-center border-none shadow-lg">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-hayas-600 mb-2">+350%</div>
                    <p className="text-gray-600">Aumento en consultas especializadas</p>
                  </CardContent>
                </Card>
                <Card className="text-center border-none shadow-lg">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-turquesa-600 mb-2">90%</div>
                    <p className="text-gray-600">Mejora en confianza del paciente</p>
                  </CardContent>
                </Card>
                <Card className="text-center border-none shadow-lg">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-hayas-600 mb-2">+200%</div>
                    <p className="text-gray-600">Incremento en derivaciones médicas</p>
                  </CardContent>
                </Card>
              </div>

              <Card className="border-none shadow-lg bg-gradient-to-br from-hayas-50 to-turquesa-50">
                <CardContent className="p-8">
                  <blockquote className="text-lg italic text-gray-700 mb-4 text-center">
                    "La identidad de Joints'Up ha transformado nuestra práctica médica. Los pacientes llegan 
                    con mayor confianza y comprensión de nuestros servicios. La marca transmite exactamente 
                    lo que somos: especialistas comprometidos con la excelencia en cirugía articular."
                  </blockquote>
                  <div className="text-center">
                    <p className="font-semibold text-hayas-600">- Director Médico de Joints'Up</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Learning */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Lo que <span className="text-gradient-primary">Aprendimos</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Este proyecto nos enseñó la complejidad del branding médico especializado. Descubrimos que 
                en el sector sanitario, la marca debe equilibrar autoridad científica con calidez humana, 
                comunicando competencia técnica sin generar distancia emocional. El naming y la identidad 
                visual se convierten en herramientas cruciales para generar confianza instantánea.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 bg-hayas-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Tu práctica médica necesita una marca de confianza?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Creamos identidades médicas que transmiten autoridad profesional y generan confianza 
              inmediata en pacientes. Tu especialización merece una marca a su altura.
            </p>
            <Link to="/?scrollTo=contacto">
              <Button className="bg-white text-hayas-600 hover:bg-gray-100 px-8 py-3 text-lg">
                Crear mi Marca Médica
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CasoExitoJointsUp;