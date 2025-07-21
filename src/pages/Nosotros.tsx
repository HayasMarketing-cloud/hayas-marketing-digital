
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ReviewsSection from '@/components/ReviewsSection';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { 
  Target, 
  Users, 
  TrendingUp, 
  Award, 
  CheckCircle, 
  Lightbulb,
  Zap,
  Heart,
  ArrowRight
} from 'lucide-react';

const Nosotros = () => {
  const teamMembers = [
    {
      name: "David Hayas",
      role: "CEO & Fundador",
      description: "Especialista en estrategia digital y transformación empresarial con más de 8 años de experiencia.",
      image: "/lovable-uploads/team-david.jpg"
    },
    {
      name: "Equipo Técnico",
      role: "Desarrollo & Automatización", 
      description: "Especialistas certificados en HubSpot, Go High Level y tecnologías de IA.",
      image: "/lovable-uploads/team-tech.jpg"
    },
    {
      name: "Equipo Creativo",
      role: "Diseño & Contenidos",
      description: "Expertos en branding, diseño web y estrategias de contenido digital.",
      image: "/lovable-uploads/team-creative.jpg"
    }
  ];

  const values = [
    {
      icon: <Target className="h-8 w-8 text-hayas-primary" />,
      title: "Estrategia",
      description: "Cada proyecto comienza con un análisis profundo y una estrategia personalizada para alcanzar tus objetivos específicos."
    },
    {
      icon: <Zap className="h-8 w-8 text-hayas-primary" />,
      title: "Eficiencia",
      description: "Implementamos soluciones que automatizan procesos y optimizan recursos para maximizar tu retorno de inversión."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-hayas-primary" />,
      title: "Adaptación",
      description: "Nos mantenemos a la vanguardia tecnológica para ofrecer siempre las mejores soluciones del mercado."
    },
    {
      icon: <Heart className="h-8 w-8 text-hayas-primary" />,
      title: "Crecimiento Sostenible",
      description: "Construimos relaciones a largo plazo, acompañando el crecimiento de nuestros clientes paso a paso."
    }
  ];

  const methodology = [
    {
      step: "01",
      title: "Análisis y Diagnóstico",
      description: "Evaluamos tu situación actual, identificamos oportunidades y definimos objetivos claros."
    },
    {
      step: "02", 
      title: "Estrategia Personalizada",
      description: "Diseñamos un plan de acción específico adaptado a tu sector, presupuesto y metas."
    },
    {
      step: "03",
      title: "Implementación Tecnológica", 
      description: "Ejecutamos la estrategia utilizando las mejores herramientas y tecnologías disponibles."
    },
    {
      step: "04",
      title: "Formación del Equipo",
      description: "Capacitamos a tu equipo para que pueda gestionar y optimizar las herramientas implementadas."
    },
    {
      step: "05",
      title: "Seguimiento Continuo",
      description: "Monitoreamos resultados y realizamos optimizaciones constantes para mejorar el rendimiento."
    }
  ];

  const certifications = [
    { name: "HubSpot", logo: "/lovable-uploads/hubspot-logo.png" },
    { name: "Go High Level", logo: "/lovable-uploads/ghl-logo.png" },
    { name: "Google Analytics", logo: "/lovable-uploads/ga-logo.png" },
    { name: "Meta Business", logo: "/lovable-uploads/meta-logo.png" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow pt-24">
        {/* Hero Section - Fondo blanco */}
        <section className="relative py-16 md:py-20 overflow-hidden bg-white">
          {/* Círculos decorativos de fondo */}
          <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-hayas-primary/10 opacity-20" aria-hidden="true"></div>
          <div className="absolute top-24 -right-24 w-96 h-96 rounded-full bg-hayas-secondary/10 opacity-10" aria-hidden="true"></div>
          
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in">
                Somos <span className="text-gradient-primary">Hayas Marketing</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8 animate-slide-up max-w-3xl mx-auto">
                Agencia especializada en transformación digital con enfoque integral: estrategia, eficiencia, adaptación y crecimiento sostenible
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
                <Button className="gradient-primary text-white py-6 px-8 text-lg font-medium shadow-elegant hover-scale focus-ring">
                  Conocer nuestros servicios
                </Button>
                <Button variant="outline" className="py-6 px-8 text-lg font-medium hover-scale focus-ring border-primary text-primary hover:bg-primary hover:text-white">
                  Solicitar consulta gratuita
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Nuestra Historia - Fondo tenue */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-hayas-primary/5 to-hayas-secondary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient-primary">Nuestra Historia</h2>
                <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                  Construyendo el futuro digital de las empresas, una solución a la vez
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white rounded-xl p-6 text-center shadow-corporate hover-scale">
                  <Target className="h-12 w-12 text-hayas-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-hayas-primary">Nuestra Misión</h3>
                  <p className="text-gray-700">
                    Impulsar el crecimiento de emprendedores, startups y empresas con soluciones 
                    de marketing digital personalizadas que generen resultados reales y medibles.
                  </p>
                </div>
                
                <div className="bg-white rounded-xl p-6 text-center shadow-corporate hover-scale">
                  <Lightbulb className="h-12 w-12 text-hayas-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-hayas-primary">Nuestra Visión</h3>
                  <p className="text-gray-700">
                    Ser referentes en la implementación de tecnología aplicada al marketing y ventas, 
                    ayudando a las empresas a automatizar y escalar sus procesos comerciales.
                  </p>
                </div>
                
                <div className="bg-white rounded-xl p-6 text-center shadow-corporate hover-scale">
                  <Award className="h-12 w-12 text-hayas-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-hayas-primary">Nuestro Compromiso</h3>
                  <p className="text-gray-700">
                    Ofrecer soluciones integrales que combinen estrategia, tecnología e inteligencia 
                    artificial para maximizar la eficiencia y el retorno de inversión.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Nuestros Valores - Fondo blanco */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient-primary">Nuestros Valores</h2>
                <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                  Los principios que guían cada proyecto y relación con nuestros clientes
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {values.map((value, index) => (
                  <div key={index} className="text-center group">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-hayas-primary">{value.title}</h3>
                    <p className="text-gray-700">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Nuestro Equipo - Fondo tenue */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-hayas-secondary/5 to-hayas-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient-primary">Nuestro Equipo</h2>
                <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                  Profesionales especializados en marketing digital, CRM y automatización
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {teamMembers.map((member, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 text-center shadow-corporate hover-scale">
                    <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-hayas-primary">{member.name}</h3>
                    <p className="text-hayas-primary font-medium mb-3">{member.role}</p>
                    <p className="text-gray-700 text-sm">{member.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Nuestra Metodología - Fondo blanco */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient-primary">Nuestra Metodología</h2>
                <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                  Un proceso probado que garantiza resultados exitosos en cada proyecto
                </p>
              </div>
              
              <div className="space-y-6">
                {methodology.map((step, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-corporate hover-scale border border-gray-100">
                    <div className="flex flex-col md:flex-row items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                          {step.step}
                        </div>
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-xl font-semibold mb-2 text-hayas-primary">{step.title}</h3>
                        <p className="text-gray-700">{step.description}</p>
                      </div>
                      <ArrowRight className="hidden md:block h-6 w-6 text-gray-400" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Certificaciones y Partners - Fondo tenue */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-hayas-primary/5 to-hayas-secondary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient-primary">Certificaciones y Partners</h2>
              <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto">
                Trabajamos con las mejores tecnologías y mantenemos certificaciones oficiales
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
                {certifications.map((cert, index) => (
                  <div key={index} className="p-4 hover-scale">
                    <div className="bg-white rounded-lg p-6 shadow-corporate border">
                      <div className="h-16 flex items-center justify-center">
                        <CheckCircle className="h-12 w-12 text-hayas-primary" />
                      </div>
                      <p className="text-sm font-medium mt-2 text-hayas-primary">{cert.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Lo que dicen nuestros clientes - Fondo blanco */}
        <section className="py-16 md:py-20 bg-white">
          <ReviewsSection />
        </section>

        {/* CTA Final - Fondo gradiente */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-hayas-primary to-hayas-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                ¿Listo para transformar tu negocio?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Únete a las empresas que ya han potenciado su crecimiento con nuestras soluciones integrales
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-hayas-primary hover:bg-gray-100 py-6 px-8 text-lg font-medium hover-scale">
                  Solicitar consulta gratuita
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-hayas-primary py-6 px-8 text-lg hover-scale">
                  Ver casos de éxito
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Nosotros;
