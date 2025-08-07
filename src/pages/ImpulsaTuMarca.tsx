import React from 'react';
import { ArrowLeft, Palette, Eye, Target, TrendingUp, Users, Star, Heart, Lightbulb, FileText, Sparkles, CheckCircle, Shield, Globe, MessageSquare, Search, Presentation, Type, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import KitDigitalBanner from '@/components/KitDigitalBanner';

import FAQSection from '@/components/FAQSection';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from '@/components/ui/breadcrumb';

const ImpulsaTuMarca = () => {
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
                  <BreadcrumbPage>Creación de Marca</BreadcrumbPage>
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
        <section className="relative py-8 md:py-12 bg-gradient-to-br from-hayas-50 to-turquesa-50 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="outline" className="mb-4 text-hayas-600 border-hayas-200">
                  Creación de Marca
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Branding e <span className="text-gradient-primary">Identidad de Marca</span>
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-700">
                  Logotipo, Manual de marca y diseño gráfico online e impreso
                </h2>
                <p className="text-xl text-gray-700 mb-8 leading-relaxed font-medium">
                  "Transformamos la presencia de tu marca con una imagen única y profesional que refleje el ADN de tu marca"
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Llevamos a cabo el proceso de diseño y creación de tu marca de principio a fin, desde el nombre, 
                  la creación del logotipo y la entrega de un completo manual de identidad corporativa con los 
                  parámetros de la comunicación y presentación en diversos formatos de tu marca.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/?scrollTo=contacto">
                    <Button className="gradient-primary text-white px-8 py-6 text-lg w-full sm:w-auto">
                      Crear mi marca
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                  <a href="#casos-exito">
                    <Button variant="outline" className="px-8 py-6 text-lg">
                      Ver casos de éxito
                    </Button>
                  </a>
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


        {/* How We Work Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                ¿Cómo <span className="text-gradient-primary">trabajamos</span>?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Nuestro enfoque personalizado garantiza que tu marca refleje auténticamente tu visión y valores empresariales.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <MessageSquare className="h-12 w-12 text-hayas-600" />,
                  title: "Briefing",
                  description: "Comprendemos tus valores, público objetivo, competidores y metas a corto y largo plazo, estableciendo una base sólida."
                },
                {
                  icon: <Lightbulb className="h-12 w-12 text-turquesa-600" />,
                  title: "Conceptos",
                  description: "Nuestro equipo creativo trabaja en la generación de ideas, explorando narrativas de marca y elementos visuales para crear una identidad única."
                },
                {
                  icon: <Search className="h-12 w-12 text-hayas-600" />,
                  title: "Referencias",
                  description: "Buscamos inspiración en diversas fuentes y compartimos referencias contigo para validar la dirección creativa de nuestro trabajo."
                },
                {
                  icon: <Presentation className="h-12 w-12 text-turquesa-600" />,
                  title: "Presentación",
                  description: "Incluye la narrativa de tu marca y elementos visuales, marcando el comienzo de la transformación de tu visión en una identidad de marca tangible."
                }
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="p-4 bg-gray-50 rounded-full">
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Services Section */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                ¿Qué incluye el servicio de <span className="text-gradient-primary">Creación de Marca</span>?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Branding e Identidad de Marca completa para posicionar tu negocio como líder en tu sector.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Type className="h-10 w-10 text-hayas-600" />,
                  title: "Naming",
                  description: "Elegimos el nombre perfecto para tu marca, asegurándonos de que sea único, memorable y refleje la esencia de tu negocio. Te asesoramos en la disponibilidad del dominio y en las redes sociales para garantizar una presencia digital sólida desde el inicio.",
                  color: "hayas"
                },
                {
                  icon: <Palette className="h-10 w-10 text-turquesa-600" />,
                  title: "Imagen de Marca",
                  description: "No nos limitamos al diseño del logo. Con nuestra experiencia en teoría gráfica, creamos una imagen completa que refleje los valores de tu marca. Diseñamos una imagen que conecte emocionalmente con tu audiencia y se destaque.",
                  color: "turquesa"
                },
                {
                  icon: <FileText className="h-10 w-10 text-hayas-600" />,
                  title: "Manual de Marca",
                  description: "Garantizamos una identidad visual coherente para tu marca mediante nuestro servicio integral de creación de manual de marca. Desde la historia de tu marca hasta las especificaciones del logotipo, colores y tipografías.",
                  color: "hayas"
                }
              ].map((service, index) => (
                <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full">
                  <CardHeader className="text-center pb-4">
                    <div className={`mb-4 mx-auto p-4 rounded-full w-fit ${service.color === 'hayas' ? 'bg-hayas-100' : 'bg-turquesa-100'}`}>
                      {service.icon}
                    </div>
                    <CardTitle className="text-2xl font-bold">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-gray-600 leading-relaxed text-center">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* CTA Section */}
            <div className="text-center bg-gradient-to-br from-hayas-50 to-turquesa-50 rounded-2xl p-8 md:p-12 mt-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                ¿Listo para crear o rediseñar tu <span className="text-gradient-primary">marca</span>?
              </h3>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Transforma tu visión en una identidad de marca que conecte con tu audiencia y genere resultados reales.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/solicitar-consulta">
                  <Button className="gradient-primary text-white px-8 py-6 text-lg">
                    Solicitar creación de marca
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <a href="#casos-exito">
                  <Button variant="outline" className="px-8 py-6 text-lg">
                    Ver casos de éxito
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Success Cases Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Casos de <span className="text-gradient-primary">éxito</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Últimos proyectos de branding e identidad de marca que han transformado negocios.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
              {[
                {
                  name: "Nexo Vital",
                  industry: "Enfermera especializada en salud integrativa",
                  service: "Branding, web, estrategia de contenidos",
                  link: "/caso-exito-nexo-vital",
                  image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=2071&auto=format&fit=crop"
                },
                {
                  name: "I Virgen Extra",
                  industry: "Consultor ingeniero en AOVE",
                  service: "Branding, desarrollo web, identidad",
                  link: "/caso-exito-i-virgen-extra",
                  image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=2069&auto=format&fit=crop"
                },
                {
                  name: "Inbound Students",
                  industry: "Servicios para estudiantes extranjeros",
                  service: "Estrategia digital, diseño web",
                  link: "/caso-exito-inbound-students",
                  image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop"
                },
                {
                  name: "Calisthenia Online",
                  industry: "Entrenador personal online",
                  service: "Branding, posicionamiento, automatización",
                  link: "/caso-exito-calisthenia-online",
                  image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop"
                },
                {
                  name: "Centro Roraima",
                  industry: "Centro de desarrollo personal",
                  service: "Branding, diseño web, contenidos",
                  link: "/caso-exito-centro-roraima",
                  image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop"
                },
                {
                  name: "Joints'Up",
                  industry: "Cirujanos traumatólogos",
                  service: "Naming, branding, diseño web",
                  link: "/caso-exito-joints-up",
                  image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=2087&auto=format&fit=crop"
                },
                {
                  name: "Dr. Parrón",
                  industry: "Traumatólogo especialista en cadera",
                  service: "Identidad corporativa, diseño web",
                  link: "/caso-exito-dr-parron",
                  image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=2071&auto=format&fit=crop"
                },
                {
                  name: "Translate with Style",
                  industry: "Traductora profesional",
                  service: "Branding, estrategia, identidad visual",
                  link: "/caso-exito-translate-with-style",
                  image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop"
                }
              ].map((project, index) => (
                <Link key={index} to={project.link}>
                  <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden cursor-pointer h-full">
                    <div className="aspect-square overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="text-lg font-bold mb-2">{project.name}</h3>
                      <p className="text-sm text-gray-500 mb-3">{project.industry}</p>
                      <p className="text-sm text-gray-600">{project.service}</p>
                    </CardContent>
                  </Card>
                </Link>
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
            <Link to="/?scrollTo=contacto">
              <Button className="bg-white text-hayas-600 hover:bg-gray-100 px-8 py-6 text-lg font-semibold">
                Iniciar mi proyecto de marca
                <ArrowRight className="w-4 h-4 ml-2 text-hayas-600" />
              </Button>
            </Link>
          </div>
        </section>

        <KitDigitalBanner />

        {/* FAQ Section */}
        <FAQSection 
          title="Preguntas Frecuentes sobre Creación de Marca"
          subtitle="Resolvemos las dudas más comunes sobre nuestro proceso de branding"
          faqs={[
            {
              question: "¿Cuánto tiempo toma el proceso completo de creación de marca?",
              answer: "El proceso completo de branding suele tomar entre 4-8 semanas, dependiendo de la complejidad del proyecto. Incluye briefing inicial, desarrollo de conceptos, presentación de propuestas, refinamiento y entrega del manual de marca completo con todas las aplicaciones."
            },
            {
              question: "¿Qué incluye exactamente el manual de marca?",
              answer: "Nuestro manual de marca incluye: historia y valores de la marca, especificaciones del logotipo y variaciones, paleta de colores con códigos exactos, tipografías corporativas, aplicaciones en papelería, normas de uso en digital, ejemplos de aplicación incorrecta y directrices de comunicación."
            },
            {
              question: "¿Hacen el registro de marca y dominio?",
              answer: "Te asesoramos en todo el proceso de registro. Verificamos disponibilidad de dominio y redes sociales, te orientamos sobre el registro de marca y podemos gestionar la compra de dominios. El registro legal de marca se realiza a través de abogados especializados que podemos recomendar."
            },
            {
              question: "¿Pueden rediseñar una marca existente?",
              answer: "Sí, nos especializamos también en rebranding. Evaluamos tu marca actual, identificamos oportunidades de mejora y desarrollamos una nueva identidad que mantenga los elementos positivos existentes mientras moderniza y fortalece la percepción de marca."
            },
            {
              question: "¿Incluyen aplicaciones para redes sociales y web?",
              answer: "Absolutamente. Todas nuestras identidades de marca incluyen adaptaciones para digital: perfiles de redes sociales, banners web, avatars, plantillas para posts, y especificaciones técnicas para implementación web con desarrolladores."
            },
            {
              question: "¿Qué pasa si no me gusta la propuesta inicial?",
              answer: "Nuestro proceso incluye hasta 3 rondas de revisiones sin costo adicional. Comenzamos con un briefing detallado para entender exactamente tu visión, y refinamos la propuesta hasta que estés completamente satisfecho con el resultado final."
            }
          ]}
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default ImpulsaTuMarca;