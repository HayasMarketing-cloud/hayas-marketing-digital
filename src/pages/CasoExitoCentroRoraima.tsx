import React from 'react';
import { ArrowLeft, Heart, TrendingUp, Award, ExternalLink, CheckCircle, BookOpen } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const CasoExitoCentroRoraima = () => {
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
                  Centro Roraima: <span className="text-gradient-primary">Transformación</span> Personal
                </h1>
                <p className="text-xl text-gray-700 mb-8 leading-relaxed font-medium">
                  Posicionando un centro de desarrollo personal como referente en formación terapéutica
                </p>
                <div className="flex items-center gap-4 mb-8">
                  <Badge className="bg-hayas-100 text-hayas-700">Desarrollo Personal</Badge>
                  <Badge className="bg-turquesa-100 text-turquesa-700">Formación Terapéutica</Badge>
                </div>
                <Link to="https://centrororaima.com" target="_blank">
                  <Button className="gradient-primary text-white px-6 py-3">
                    Visitar Web
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-hayas-200 to-turquesa-200 rounded-3xl transform rotate-6 scale-105 opacity-20"></div>
                <img 
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop" 
                  alt="Centro Roraima - Desarrollo Personal" 
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
                Sobre <span className="text-gradient-primary">Centro Roraima</span>
              </h2>
              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-hayas-600">Perfil del Cliente</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        Centro especializado en desarrollo personal y formación terapéutica que ofrece un enfoque 
                        integral del crecimiento humano. Combina técnicas tradicionales con metodologías modernas 
                        para facilitar procesos de transformación personal profunda.
                      </p>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-hayas-600" />
                          <span className="text-gray-700">Desarrollo personal integral</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-hayas-600" />
                          <span className="text-gray-700">Formación terapéutica certificada</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-hayas-600" />
                          <span className="text-gray-700">Metodologías innovadoras</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-turquesa-600">El Reto</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Necesitaban posicionarse como centro de referencia en un mercado donde la credibilidad 
                        y la confianza son fundamentales. El reto era comunicar la profundidad de su enfoque 
                        terapéutico mientras transmitían accesibilidad y calidez humana para atraer tanto a 
                        particulares como a profesionales en formación.
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
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    icon: <Heart className="h-8 w-8 text-hayas-600" />,
                    title: "Branding Humanizado",
                    description: "Identidad visual que transmite calidez, profesionalidad y transformación personal."
                  },
                  {
                    icon: <BookOpen className="h-8 w-8 text-turquesa-600" />,
                    title: "Diseño Web",
                    description: "Plataforma digital que refleja la esencia del centro y facilita la conexión con usuarios."
                  },
                  {
                    icon: <Award className="h-8 w-8 text-hayas-600" />,
                    title: "Estrategia de Contenidos",
                    description: "Consultoría en contenidos que posiciona como autoridad en desarrollo personal."
                  },
                  {
                    icon: <TrendingUp className="h-8 w-8 text-turquesa-600" />,
                    title: "SEO Orgánico",
                    description: "Posicionamiento natural para búsquedas relacionadas con terapia y crecimiento personal."
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
                    <div className="text-3xl font-bold text-hayas-600 mb-2">+180%</div>
                    <p className="text-gray-600">Aumento en consultas terapéuticas</p>
                  </CardContent>
                </Card>
                <Card className="text-center border-none shadow-lg">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-turquesa-600 mb-2">+220%</div>
                    <p className="text-gray-600">Incremento en inscripciones formativas</p>
                  </CardContent>
                </Card>
                <Card className="text-center border-none shadow-lg">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-hayas-600 mb-2">TOP 5</div>
                    <p className="text-gray-600">Posicionamiento en búsquedas locales</p>
                  </CardContent>
                </Card>
              </div>

              <Card className="border-none shadow-lg bg-gradient-to-br from-hayas-50 to-turquesa-50">
                <CardContent className="p-8">
                  <blockquote className="text-lg italic text-gray-700 mb-4 text-center">
                    "La nueva identidad de marca ha transformado completamente nuestra presencia. Ahora las personas 
                    nos encuentran fácilmente y confían en nosotros desde el primer contacto. Hemos pasado de ser 
                    un centro local a convertirnos en referencia regional en desarrollo personal."
                  </blockquote>
                  <div className="text-center">
                    <p className="font-semibold text-hayas-600">- Directora del Centro Roraima</p>
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
                Este proyecto nos enseñó la importancia de equilibrar la profundidad terapéutica con la 
                accesibilidad comunicativa. Descubrimos que en el sector del desarrollo personal, la 
                autenticidad de la marca debe reflejar tanto la competencia profesional como la calidez 
                humana, creando un puente de confianza que facilite procesos de transformación personal.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 bg-hayas-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Tu centro de formación necesita mayor visibilidad?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Ayudamos a centros de desarrollo personal y formación a posicionarse como referentes 
              en su sector a través de estrategias de marca auténticas y efectivas.
            </p>
            <Link to="/?scrollTo=contacto">
              <Button className="bg-white text-hayas-600 hover:bg-gray-100 px-8 py-3 text-lg">
                Posicionar mi Centro
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CasoExitoCentroRoraima;