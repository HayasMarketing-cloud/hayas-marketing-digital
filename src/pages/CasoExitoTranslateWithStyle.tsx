import React from 'react';
import { ArrowLeft, Globe, TrendingUp, Award, ExternalLink, CheckCircle, Languages } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const CasoExitoTranslateWithStyle = () => {
  return (
    <div id="top" className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-32">
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
                  Translate With Style: <span className="text-gradient-primary">Elegancia</span> Lingüística
                </h1>
                <p className="text-xl text-gray-700 mb-8 leading-relaxed font-medium">
                  Posicionando una traductora profesional como referente en marketing y moda internacional
                </p>
                <div className="flex items-center gap-4 mb-8">
                  <Badge className="bg-hayas-100 text-hayas-700">Traducción Especializada</Badge>
                  <Badge className="bg-turquesa-100 text-turquesa-700">Marketing & Moda</Badge>
                </div>
                <Link to="https://translatewithstyle.com" target="_blank">
                  <Button className="gradient-primary text-white px-6 py-3">
                    Visitar Web
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-hayas-200 to-turquesa-200 rounded-3xl transform rotate-6 scale-105 opacity-20"></div>
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop" 
                  alt="Translate With Style - Traducción Profesional" 
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
                Sobre <span className="text-gradient-primary">Translate With Style</span>
              </h2>
              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-hayas-600">Perfil del Cliente</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        Traductora profesional altamente especializada en textos de marketing, branding y moda. 
                        Su expertise combina dominio lingüístico con comprensión profunda de códigos culturales 
                        y tendencias del sector fashion y comunicación comercial internacional.
                      </p>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-hayas-600" />
                          <span className="text-gray-700">Traducción de marketing especializada</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-hayas-600" />
                          <span className="text-gray-700">Sector moda y lifestyle</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-hayas-600" />
                          <span className="text-gray-700">Comunicación cultural</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-turquesa-600">El Reto</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Diferenciarse en un mercado saturado de traductores generalistas, posicionándose como 
                        la especialista premium en sectores creativos y de alta gama. Necesitaba una marca 
                        que reflejara sofisticación y expertise cultural, atrayendo marcas internacionales 
                        que valoran la traducción como estrategia de marca.
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
                    title: "Branding Sofisticado",
                    description: "Identidad visual que transmite elegancia, profesionalidad y comprensión cultural avanzada."
                  },
                  {
                    icon: <Languages className="h-8 w-8 text-turquesa-600" />,
                    title: "Estrategia de Comunicación",
                    description: "Desarrollo de mensajes que posicionan la traducción como herramienta estratégica de marca."
                  },
                  {
                    icon: <Globe className="h-8 w-8 text-hayas-600" />,
                    title: "Diseño Web Premium",
                    description: "Plataforma digital que refleja el nivel de sofisticación de marcas internacionales objetivo."
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
                    <div className="text-3xl font-bold text-hayas-600 mb-2">+280%</div>
                    <p className="text-gray-600">Incremento en clientes premium</p>
                  </CardContent>
                </Card>
                <Card className="text-center border-none shadow-lg">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-turquesa-600 mb-2">+150%</div>
                    <p className="text-gray-600">Aumento en tarifas especializadas</p>
                  </CardContent>
                </Card>
                <Card className="text-center border-none shadow-lg">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-hayas-600 mb-2">85%</div>
                    <p className="text-gray-600">Clientes internacionales de moda</p>
                  </CardContent>
                </Card>
              </div>

              <Card className="border-none shadow-lg bg-gradient-to-br from-hayas-50 to-turquesa-50">
                <CardContent className="p-8">
                  <blockquote className="text-lg italic text-gray-700 mb-4 text-center">
                    "La nueva marca me ha posicionado exactamente donde quería estar: trabajando con marcas 
                    internacionales de moda y lifestyle que valoran la traducción como parte integral de 
                    su estrategia. Ahora soy percibida como consultora cultural, no solo traductora."
                  </blockquote>
                  <div className="text-center">
                    <p className="font-semibold text-hayas-600">- Fundadora de Translate With Style</p>
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
                Este proyecto nos demostró el poder de la especialización ultra-nicho en servicios profesionales. 
                Aprendimos que cuando se domina perfectamente un sector específico, la marca debe reflejar no solo 
                competencia técnica sino también comprensión cultural profunda. La sofisticación visual se convierte 
                en una herramienta de credibilidad instantánea en mercados premium.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 bg-hayas-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Tu expertise merece posicionamiento premium?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Transformamos servicios profesionales especializados en marcas premium que atraen 
              los clientes más selectos del mercado. Tu especialización puede ser tu mayor ventaja competitiva.
            </p>
            <Link to="/?scrollTo=contacto">
              <Button className="bg-white text-hayas-600 hover:bg-gray-100 px-8 py-3 text-lg">
                Crear mi Marca Premium
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CasoExitoTranslateWithStyle;