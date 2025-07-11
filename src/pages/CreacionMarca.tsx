import React from 'react';
import { ArrowLeft, Palette, Eye, Target, TrendingUp, Users, Star, Heart, Lightbulb, FileText, Sparkles, CheckCircle, Shield, Globe } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SofiaSection from '@/components/SofiaSection';

const CreacionMarca = () => {
  return (
    <div id="top" className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-8 md:py-12 bg-gradient-to-br from-hayas-50 to-turquesa-50 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="outline" className="mb-4 text-hayas-600 border-hayas-200">
                  Creación de Marca
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Construye una <span className="text-gradient-primary">marca memorable</span> que conecte
                </h1>
                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                  Desarrollamos la identidad visual, naming y posicionamiento estratégico que necesitas 
                  para destacar en tu mercado y conectar emocionalmente con tu audiencia.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="gradient-primary text-white px-8 py-6 text-lg">
                    Crear mi marca
                  </Button>
                  <Button variant="outline" className="px-8 py-6 text-lg">
                    Ver casos de éxito
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-hayas-200 to-turquesa-200 rounded-3xl transform rotate-6 scale-105 opacity-20"></div>
                <img 
                  src="https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2064&auto=format&fit=crop" 
                  alt="Creación de marca profesional" 
                  className="relative z-10 w-full h-auto rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Value Proposition Section */}
        <section className="py-8 md:py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-hayas-100 to-turquesa-100 rounded-2xl transform rotate-3"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=2070&auto=format&fit=crop" 
                    alt="Identidad de marca estratégica" 
                    className="relative z-10 w-full h-auto rounded-2xl shadow-xl"
                  />
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <Badge variant="outline" className="mb-4 text-hayas-600 border-hayas-200">
                  Branding Estratégico
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                  Tu marca es tu <span className="text-gradient-primary">mayor activo</span> empresarial
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Una marca sólida no es solo un logo bonito. Es la promesa que haces a tus clientes, 
                  la percepción que genera confianza y la diferenciación que te hace único en el mercado.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-hayas-100 rounded-lg flex items-center justify-center">
                      <Eye className="h-6 w-6 text-hayas-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Identidad Visual Coherente</h3>
                      <p className="text-gray-600">
                        Creamos una identidad visual que refleja tus valores y conecta emocionalmente 
                        con tu audiencia en todos los puntos de contacto.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-turquesa-100 rounded-lg flex items-center justify-center">
                      <Target className="h-6 w-6 text-turquesa-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Posicionamiento Estratégico</h3>
                      <p className="text-gray-600">
                        Definimos tu propuesta de valor única y cómo comunicarla para ocupar 
                        un lugar distintivo en la mente de tus clientes.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-hayas-100 rounded-lg flex items-center justify-center">
                      <Heart className="h-6 w-6 text-hayas-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Conexión Emocional</h3>
                      <p className="text-gray-600">
                        Desarrollamos una personalidad de marca que genera vínculos duraderos 
                        y transforma clientes en embajadores de tu negocio.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-8 md:py-12 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Servicios de <span className="text-gradient-primary">Creación de Marca</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Desde el concepto inicial hasta la implementación completa, te acompañamos en cada paso 
                del proceso de construcción de tu marca.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Lightbulb className="h-8 w-8 text-hayas-600" />,
                  title: "Naming & Concepto",
                  description: "Desarrollo del nombre de marca y concepto estratégico que refleje tu esencia empresarial."
                },
                {
                  icon: <Palette className="h-8 w-8 text-turquesa-600" />,
                  title: "Identidad Visual",
                  description: "Diseño de logo, paleta de colores, tipografías y elementos gráficos distintivos."
                },
                {
                  icon: <FileText className="h-8 w-8 text-hayas-600" />,
                  title: "Manual de Marca",
                  description: "Guía completa de aplicación y uso correcto de todos los elementos de marca."
                },
                {
                  icon: <Globe className="h-8 w-8 text-turquesa-600" />,
                  title: "Aplicaciones Digitales",
                  description: "Adaptación de la marca para web, redes sociales y plataformas digitales."
                },
                {
                  icon: <Users className="h-8 w-8 text-hayas-600" />,
                  title: "Estrategia de Comunicación",
                  description: "Definición del tono, voz y mensajes clave para conectar con tu audiencia."
                },
                {
                  icon: <TrendingUp className="h-8 w-8 text-turquesa-600" />,
                  title: "Posicionamiento de Mercado",
                  description: "Análisis competitivo y estrategia de diferenciación en tu sector."
                }
              ].map((service, index) => (
                <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="mb-4 p-3 rounded-lg bg-gray-100 w-fit">
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl font-bold">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-8 md:py-12 bg-gradient-to-r from-hayas-600 to-turquesa text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Listo para crear una marca que destaque?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Comencemos a construir la identidad que llevará tu negocio al siguiente nivel.
            </p>
            <Button className="bg-white text-hayas-600 hover:bg-gray-100 px-8 py-6 text-lg font-semibold">
              Iniciar mi proyecto de marca
            </Button>
          </div>
        </section>
      </main>
      
      <SofiaSection 
        solutionName="Creación de Marca"
        initialMessage="¡Hola! Veo que estás interesado en crear una marca memorable. Puedo explicarte nuestro proceso de desarrollo de identidad visual, ayudarte a entender la importancia del naming estratégico, hablarte sobre el manual de marca, o resolver dudas sobre posicionamiento y conexión emocional con tu audiencia. ¿Qué parte del branding te gustaría conocer mejor?"
      />
      <Footer />
    </div>
  );
};

export default CreacionMarca;