import React from 'react';
import { ArrowLeft, Dumbbell, TrendingUp, Award, ExternalLink, CheckCircle, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const CasoExitoCalistheniaOnline = () => {
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
                  Calistenia Online: <span className="text-gradient-primary">Fuerza</span> Digital
                </h1>
                <p className="text-xl text-gray-700 mb-8 leading-relaxed font-medium">
                  De entrenador personal a referente digital en calistenia con sistemas automatizados
                </p>
                <div className="flex items-center gap-4 mb-8">
                  <Badge className="bg-hayas-100 text-hayas-700">Entrenamiento Online</Badge>
                  <Badge className="bg-turquesa-100 text-turquesa-700">Calistenia</Badge>
                </div>
                <Link to="https://calistheniaonline.com" target="_blank">
                  <Button className="gradient-primary text-white px-6 py-3">
                    Visitar Web
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-hayas-200 to-turquesa-200 rounded-3xl transform rotate-6 scale-105 opacity-20"></div>
                <img 
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop" 
                  alt="Calistenia Online - Entrenamiento Digital" 
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
                Sobre <span className="text-gradient-primary">Calistenia Online</span>
              </h2>
              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-hayas-600">Perfil del Cliente</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        Entrenador personal especializado en calistenia con una visión clara: democratizar el acceso 
                        al entrenamiento con peso corporal a través de programas online estructurados y sistemas 
                        de seguimiento personalizado.
                      </p>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-hayas-600" />
                          <span className="text-gray-700">Especialista en calistenia</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-hayas-600" />
                          <span className="text-gray-700">Entrenamiento con peso corporal</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-hayas-600" />
                          <span className="text-gray-700">Programas personalizados</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-turquesa-600">El Reto</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Transformar un negocio de entrenamiento presencial en una plataforma digital escalable. 
                        Necesitaba crear un sistema que permitiera atender a cientos de clientes manteniendo 
                        la personalización y calidad del servicio, diferenciándose en un mercado saturado de fitness online.
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
                    icon: <Award className="h-8 w-8 text-hayas-600" />,
                    title: "Branding Deportivo",
                    description: "Identidad visual que transmite fuerza, disciplina y profesionalidad en el mundo de la calistenia."
                  },
                  {
                    icon: <Users className="h-8 w-8 text-turquesa-600" />,
                    title: "Posicionamiento Digital",
                    description: "Estrategia de redes sociales que establece autoridad en calistenia y atrae audiencia comprometida."
                  },
                  {
                    icon: <Dumbbell className="h-8 w-8 text-hayas-600" />,
                    title: "Sistema de Entrenamiento",
                    description: "Automatización completa del proceso de entrega de rutinas y seguimiento de progreso."
                  },
                  {
                    icon: <TrendingUp className="h-8 w-8 text-turquesa-600" />,
                    title: "Embudo de Captación",
                    description: "Sistema automatizado de captación que convierte seguidores en clientes de alto valor."
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
                    <div className="text-3xl font-bold text-hayas-600 mb-2">+500%</div>
                    <p className="text-gray-600">Incremento en clientes online</p>
                  </CardContent>
                </Card>
                <Card className="text-center border-none shadow-lg">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-turquesa-600 mb-2">80%</div>
                    <p className="text-gray-600">Automatización de procesos</p>
                  </CardContent>
                </Card>
                <Card className="text-center border-none shadow-lg">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-hayas-600 mb-2">+1000%</div>
                    <p className="text-gray-600">Crecimiento en redes sociales</p>
                  </CardContent>
                </Card>
              </div>

              <Card className="border-none shadow-lg bg-gradient-to-br from-hayas-50 to-turquesa-50">
                <CardContent className="p-8">
                  <blockquote className="text-lg italic text-gray-700 mb-4 text-center">
                    "La transformación ha sido increíble. Pasé de entrenar 20 personas presencialmente a tener 
                    más de 500 alumnos online con sistemas totalmente automatizados. Ahora puedo enfocarme en 
                    crear contenido de calidad mientras el negocio crece de forma escalable."
                  </blockquote>
                  <div className="text-center">
                    <p className="font-semibold text-hayas-600">- Fundador de Calistenia Online</p>
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
                Este caso nos enseñó el poder de la automatización inteligente en servicios personalizados. 
                Descubrimos que es posible mantener la calidad del entrenamiento personal mientras se escala 
                digitalmente, siempre que se combinen sistemas robustos con una marca auténtica que transmita 
                los valores del entrenador y genere comunidad en torno a la disciplina.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 bg-hayas-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Quieres escalar tu negocio de servicios personalizados?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Transformamos negocios tradicionales en plataformas digitales escalables sin perder la esencia personal. 
              Tu expertise merece una marca y sistemas a su altura.
            </p>
            <Link to="/?scrollTo=contacto">
              <Button className="bg-white text-hayas-600 hover:bg-gray-100 px-8 py-3 text-lg">
                Escalar mi Negocio Digital
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CasoExitoCalistheniaOnline;