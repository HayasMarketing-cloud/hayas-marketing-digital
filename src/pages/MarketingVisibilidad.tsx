import React from 'react';
import { ArrowLeft, Target, Search, FileText, TrendingUp, Users, Star, Eye, Globe, Megaphone, BarChart3, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SofiaSection from '@/components/SofiaSection';
import FAQSection from '@/components/FAQSection';

const MarketingVisibilidad = () => {
  return (
    <div id="top" className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-32">
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
        <section className="relative py-8 md:py-12 bg-gradient-to-br from-hayas-50 to-turquesa-50 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="outline" className="mb-4 text-hayas-600 border-hayas-200">
                  Marketing y Visibilidad
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Aumenta tu <span className="text-gradient-primary">visibilidad digital</span> y atrae más clientes
                </h1>
                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                  Estrategias completas de SEO, contenidos y campañas digitales para posicionar tu marca 
                  en los primeros resultados y generar un flujo constante de clientes potenciales.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="gradient-primary text-white px-8 py-6 text-lg">
                    Aumentar mi visibilidad
                  </Button>
                  <Button variant="outline" className="px-8 py-6 text-lg">
                    Auditoría gratuita
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-hayas-200 to-turquesa-200 rounded-3xl transform rotate-6 scale-105 opacity-20"></div>
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop" 
                  alt="Marketing digital y visibilidad online" 
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
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
                    alt="Estrategia de marketing digital" 
                    className="relative z-10 w-full h-auto rounded-2xl shadow-xl"
                  />
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <Badge variant="outline" className="mb-4 text-hayas-600 border-hayas-200">
                  Visibilidad Estratégica
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                  La visibilidad es el <span className="text-gradient-primary">primer paso</span> hacia el crecimiento
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  No basta con tener un buen producto o servicio. Tus clientes potenciales necesitan 
                  encontrarte en el momento exacto en que buscan lo que ofreces.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-hayas-100 rounded-lg flex items-center justify-center">
                      <Search className="h-6 w-6 text-hayas-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">SEO Avanzado</h3>
                      <p className="text-gray-600">
                        Posicionamos tu sitio web en los primeros resultados de Google para 
                        las búsquedas más relevantes de tu sector.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-turquesa-100 rounded-lg flex items-center justify-center">
                      <FileText className="h-6 w-6 text-turquesa-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Marketing de Contenidos</h3>
                      <p className="text-gray-600">
                        Creamos contenido valioso que atrae, educa y convierte a tu audiencia 
                        en clientes leales a tu marca.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-hayas-100 rounded-lg flex items-center justify-center">
                      <Target className="h-6 w-6 text-hayas-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Campañas Dirigidas</h3>
                      <p className="text-gray-600">
                        Diseñamos campañas publicitarias precisas que maximizan el retorno 
                        de inversión en cada euro invertido.
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
                Servicios de <span className="text-gradient-primary">Marketing y Visibilidad</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Estrategias integrales que combinan técnicas de SEO, marketing de contenidos y 
                publicidad digital para maximizar tu presencia online.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Search className="h-8 w-8 text-hayas-600" />,
                  title: "SEO Técnico y OnPage",
                  description: "Optimización completa de tu sitio web para mejorar su posicionamiento en buscadores."
                },
                {
                  icon: <FileText className="h-8 w-8 text-turquesa-600" />,
                  title: "Marketing de Contenidos",
                  description: "Estrategia y creación de contenido valioso que atrae y convierte a tu audiencia."
                },
                {
                  icon: <Globe className="h-8 w-8 text-hayas-600" />,
                  title: "Presencia en Redes Sociales",
                  description: "Gestión profesional de redes sociales para aumentar tu alcance e interacción."
                },
                {
                  icon: <Target className="h-8 w-8 text-turquesa-600" />,
                  title: "Google Ads & Meta Ads",
                  description: "Campañas publicitarias optimizadas para generar leads cualificados y ventas."
                },
                {
                  icon: <BarChart3 className="h-8 w-8 text-hayas-600" />,
                  title: "Analytics y Reporting",
                  description: "Análisis detallado de métricas y resultados para optimizar constantemente."
                },
                {
                  icon: <Megaphone className="h-8 w-8 text-turquesa-600" />,
                  title: "Email Marketing",
                  description: "Campañas de email automatizadas para nutrir leads y fidelizar clientes."
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
              ¿Listo para aumentar tu visibilidad digital?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Comencemos a construir una presencia digital que genere resultados medibles.
            </p>
            <Button className="bg-white text-hayas-600 hover:bg-gray-100 px-8 py-6 text-lg font-semibold">
              Solicitar auditoría gratuita
            </Button>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection 
          title="Preguntas Frecuentes sobre Marketing y Visibilidad"
          subtitle="Resolvemos las dudas más comunes sobre estrategias de visibilidad digital"
          faqs={[
            {
              question: "¿Cuánto tiempo toma ver resultados en SEO?",
              answer: "Los primeros resultados en SEO suelen aparecer entre 3-6 meses, dependiendo de la competencia y el estado actual de tu web. Sin embargo, comenzamos a ver mejoras en indexación y posicionamiento de palabras clave de cola larga desde el segundo mes."
            },
            {
              question: "¿Qué incluye exactamente el servicio de marketing de contenidos?",
              answer: "Incluye estrategia de contenidos, calendario editorial, creación de artículos de blog, posts para redes sociales, infografías, videos (si aplica), optimización SEO de cada contenido y distribución multicanal para maximizar el alcance."
            },
            {
              question: "¿Gestionan las campañas publicitarias o solo las configuran?",
              answer: "Gestionamos completamente tus campañas: configuración inicial, creación de anuncios, segmentación de audiencias, optimización diaria, ajustes de presupuesto, análisis de rendimiento y reportes mensuales con recomendaciones de mejora."
            },
            {
              question: "¿Pueden trabajar con mi presupuesto publicitario actual?",
              answer: "Sí, optimizamos cualquier presupuesto. Para campañas efectivas recomendamos mínimos de €300-500/mes en Google Ads y €200-300/mes en Meta Ads, pero podemos adaptar estrategias para presupuestos menores o crear planes escalables."
            },
            {
              question: "¿Qué métricas utilizan para medir el éxito?",
              answer: "Medimos KPIs específicos según tus objetivos: tráfico orgánico, posicionamiento de palabras clave, leads generados, costo por adquisición (CPA), retorno de inversión publicitaria (ROAS), engagement en redes sociales y conversiones web."
            },
            {
              question: "¿Incluyen la gestión de redes sociales en el servicio?",
              answer: "Ofrecemos gestión completa de redes sociales como servicio adicional: estrategia de contenidos, diseño gráfico, programación de posts, community management, interacción con audiencia y reportes de crecimiento y engagement."
            }
          ]}
        />
      </main>
      
      <SofiaSection 
        solutionName="Marketing y Visibilidad"
        initialMessage="¡Hola! Has llegado a nuestra sección de marketing y visibilidad digital. Puedo explicarte cómo posicionamos tu web en Google con SEO avanzado, contarte sobre nuestras estrategias de marketing de contenidos, ayudarte con campañas de Google Ads y Meta Ads, o resolver dudas sobre email marketing y analytics. ¿Qué estrategia de visibilidad te interesa implementar?"
      />
      <Footer />
    </div>
  );
};

export default MarketingVisibilidad;