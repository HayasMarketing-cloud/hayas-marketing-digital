
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

// Import logos
import hubspotLogo from '@/assets/logos/hubspot-logo.png';
import ghlLogo from '@/assets/logos/ghl-logo.png';
import googleLogo from '@/assets/logos/google-logo.png';
import metaLogo from '@/assets/logos/meta-logo.png';
import wordpressLogo from '@/assets/logos/wordpress-logo.png';
import lovableLogo from '@/assets/logos/lovable-logo.png';
import aiLogo from '@/assets/logos/ai-logo.png';

const Nosotros = () => {
  const teamMembers = [
    {
      name: "Rubén",
      role: "CEO & Founder",
      description: "Visionario y líder estratégico, especializado en transformación digital y crecimiento empresarial sostenible.",
      image: "/lovable-uploads/4aedecdb-9c20-490d-ba11-072181bdf3d6.png"
    },
    {
      name: "Fátima",
      role: "Social Media Manager",
      description: "Experta en gestión de redes sociales, creación de contenido y community management para potenciar la presencia digital.",
      image: "/lovable-uploads/b6816c4b-e843-4d7b-b2b9-7f935a389f54.png"
    },
    {
      name: "Ebelyn",
      role: "Digital Marketing Manager",
      description: "Especialista en estrategias digitales integrales, SEO, SEM y automatización de campañas para maximizar el ROI.",
      image: "/lovable-uploads/869ded51-92ac-41e0-815c-65c18ee5a35d.png"
    },
    {
      name: "Sandra",
      role: "Directora de Arte",
      description: "Creativa experta en branding, diseño visual y experiencia de usuario. Transforma ideas en identidades visuales impactantes.",
      image: "/lovable-uploads/ce1fa101-303c-4d7c-8fcf-c33db3e18dba.png"
    },
    {
      name: "Iolanda",
      role: "Key Account Manager",
      description: "Gestora de cuentas clave especializada en relaciones comerciales estratégicas y crecimiento de clientes corporativos.",
      image: "/lovable-uploads/55bec5bb-9e3b-4208-9101-ea3fa923568f.png"
    },
    {
      name: "Daniela",
      role: "Key Account Manager", 
      description: "Responsable de desarrollo comercial y atención personalizada a clientes estratégicos, garantizando resultados excepcionales.",
      image: "/lovable-uploads/26de1124-c82f-4741-800d-030e305eb147.png"
    }
  ];

  const values = [
    {
      icon: <Target className="h-8 w-8 text-white" />,
      title: "Estrategia",
      description: "Desarrollamos estrategias personalizadas basadas en un análisis profundo de tu negocio, mercado y objetivos específicos."
    },
    {
      icon: <Zap className="h-8 w-8 text-white" />,
      title: "Eficiencia",
      description: "Implementamos tecnologías y procesos que automatizan tareas repetitivas, optimizando recursos y maximizando el ROI."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-white" />,
      title: "Adaptación",
      description: "Nos mantenemos a la vanguardia tecnológica, integrando las últimas innovaciones como IA y automatización avanzada."
    },
    {
      icon: <Heart className="h-8 w-8 text-white" />,
      title: "Crecimiento Sostenible",
      description: "Construimos soluciones escalables que crecen contigo, estableciendo relaciones comerciales duraderas y exitosas."
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
    { name: "HubSpot Partner", logo: "/lovable-uploads/5b8c9d90-e355-4b27-b2a3-018f2c5a6734.png" },
    { name: "Go High Level", logo: "/lovable-uploads/5d28af4c-58ec-4895-8624-3261f0debd4a.png" },
    { name: "Google Partner", logo: googleLogo },
    { name: "Meta Business Partner", logo: "/lovable-uploads/e9556961-6aaa-41da-8ccb-fc0cdbd24142.png" },
    { name: "WordPress", logo: "/lovable-uploads/ed1d9897-ed2d-49a3-9ce2-1cea880aee32.png" },
    { name: "Lovable Partner", logo: "/lovable-uploads/fb2f07e0-ba96-4372-91b6-842a64e4c41e.png" },
    { name: "WhatsApp Business", logo: "/lovable-uploads/d5141b27-1db2-4f9b-8ff4-486fb23e0ae8.png" },
    { name: "Shopify Partner", logo: "/lovable-uploads/481fb23a-8710-41bb-93e6-b3c991fa58c8.png" },
    { name: "Aircall Partner", logo: "/lovable-uploads/b18fc977-3bb3-4613-8232-8fac4fb4d9ee.png" }
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
                Agencia de marketing digital y consultoría especializada en gestión de clientes (CRM) y estrategia digital. 
                Trabajamos con un enfoque integral centrado en la estrategia, eficiencia, adaptación y crecimiento sostenible.
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
                  Desde 2016, transformamos la forma en que las empresas se conectan con sus clientes a través del marketing digital
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white rounded-xl p-6 text-center shadow-corporate hover-scale">
                  <Target className="h-12 w-12 text-hayas-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-hayas-primary">Nuestra Misión</h3>
                  <p className="text-gray-700">
                    Lanzar e impulsar el crecimiento de emprendedores, startups y empresas mediante soluciones 
                    integrales de marketing digital y automatización que generen resultados reales y medibles.
                  </p>
                </div>
                
                <div className="bg-white rounded-xl p-6 text-center shadow-corporate hover-scale">
                  <Lightbulb className="h-12 w-12 text-hayas-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-hayas-primary">Nuestra Visión</h3>
                  <p className="text-gray-700">
                    Ser la agencia de referencia en España para la implementación de tecnología aplicada al marketing y ventas, 
                    especializándonos en CRM, automatización e inteligencia artificial.
                  </p>
                </div>
                
                <div className="bg-white rounded-xl p-6 text-center shadow-corporate hover-scale">
                  <Award className="h-12 w-12 text-hayas-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-hayas-primary">Nuestro Compromiso</h3>
                  <p className="text-gray-700">
                    Desarrollar soluciones personalizadas que combinen estrategia digital, tecnología avanzada 
                    e inteligencia artificial para maximizar la eficiencia y el retorno de inversión de nuestros clientes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ¿Por qué Hayas? - Sección de origen del nombre */}
        <section className="py-16 md:py-20 relative overflow-hidden">
          {/* Fondo del bosque de hayas */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/lovable-uploads/1399f918-aa74-41b7-b838-f1dc283e5b87.png')`,
              filter: 'brightness(0.3) contrast(0.8)',
            }}
          ></div>
          
          {/* Overlay para mejorar legibilidad */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/90 to-white/85"></div>
          
          {/* Decoraciones sutiles */}
          <div className="absolute top-0 left-0 w-full h-full opacity-5">
            <div className="absolute top-12 left-12 w-32 h-32 rounded-full bg-hayas-primary/20"></div>
            <div className="absolute bottom-12 right-12 w-48 h-48 rounded-full bg-hayas-secondary/15"></div>
            <div className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full bg-hayas-primary/10"></div>
          </div>
          
          <div className="container mx-auto px-4 relative">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient-primary">
                  🌳 Nuestra historia: ¿Por qué Hayas?
                </h2>
                <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                  Elegimos el nombre Hayas no por azar, sino por todo lo que representa
                </p>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                {/* Columna de texto */}
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-hayas-primary/5 to-hayas-secondary/5 rounded-xl p-6 border-l-4 border-hayas-primary">
                    <p className="text-gray-700 leading-relaxed">
                      Los bosques de hayas son uno de los <span className="font-semibold text-hayas-primary">ecosistemas más bellos y resilientes</span> de Europa:
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-center text-gray-700">
                        <CheckCircle className="h-4 w-4 text-hayas-primary mr-2 flex-shrink-0" />
                        prosperan en comunidad
                      </li>
                      <li className="flex items-center text-gray-700">
                        <CheckCircle className="h-4 w-4 text-hayas-primary mr-2 flex-shrink-0" />
                        filtran la luz de forma armoniosa
                      </li>
                      <li className="flex items-center text-gray-700">
                        <CheckCircle className="h-4 w-4 text-hayas-primary mr-2 flex-shrink-0" />
                        permiten que cada árbol crezca con fuerza, sin perder su conexión
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 shadow-corporate border border-gray-100">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Nos inspira su capacidad para crear un <span className="font-semibold text-hayas-primary">microclima fértil</span>, 
                      donde todo se equilibra con inteligencia natural: el suelo nutre, las raíces conectan, el aire fluye.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Como los hayedos, <span className="font-semibold text-hayas-primary">evolucionamos de forma orgánica</span>, 
                      buscando sostenibilidad, conexión y propósito en todo lo que hacemos.
                    </p>
                  </div>
                </div>
                
                {/* Columna visual - Árbol/Ecosistema */}
                <div className="relative">
                  <div className="bg-gradient-to-br from-hayas-primary/10 to-hayas-secondary/10 rounded-2xl p-8 text-center">
                    <div className="relative max-w-sm mx-auto">
                      {/* Copa del árbol - Estrategia */}
                      <div className="mb-8">
                        <div className="w-32 h-32 bg-gradient-primary rounded-full mx-auto flex items-center justify-center mb-4 shadow-elegant">
                          <Target className="h-12 w-12 text-white" />
                        </div>
                        <h3 className="font-semibold text-hayas-primary mb-2">Copa = Estrategia</h3>
                        <p className="text-sm text-gray-600">Visión amplia que proyecta sombra y dirección</p>
                      </div>
                      
                      {/* Tronco - Conexión */}
                      <div className="w-4 h-16 bg-gradient-to-b from-hayas-primary to-hayas-secondary mx-auto mb-8 rounded-full shadow-md"></div>
                      <div className="mb-8">
                        <div className="w-24 h-24 bg-gradient-to-br from-hayas-secondary to-hayas-primary rounded-full mx-auto flex items-center justify-center mb-4 shadow-elegant">
                          <Users className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="font-semibold text-hayas-primary mb-2">Tronco = Conexión</h3>
                        <p className="text-sm text-gray-600">Hojas que se adaptan con flexibilidad</p>
                      </div>
                      
                      {/* Raíces - Confianza */}
                      <div className="flex justify-center space-x-4 mb-4">
                        <div className="w-2 h-8 bg-gradient-to-t from-hayas-primary/60 to-transparent rounded-full transform -rotate-12"></div>
                        <div className="w-2 h-10 bg-gradient-to-t from-hayas-primary/60 to-transparent rounded-full"></div>
                        <div className="w-2 h-8 bg-gradient-to-t from-hayas-primary/60 to-transparent rounded-full transform rotate-12"></div>
                      </div>
                      <div>
                        <div className="w-20 h-20 bg-gradient-to-br from-hayas-primary/80 to-hayas-secondary/80 rounded-full mx-auto flex items-center justify-center mb-4 shadow-elegant">
                          <Heart className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="font-semibold text-hayas-primary mb-2">Raíces = Confianza</h3>
                        <p className="text-sm text-gray-600">Cimientos profundos y duraderos</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Frase destacada final */}
              <div className="text-center">
                <div className="bg-gradient-to-r from-hayas-primary to-hayas-secondary rounded-2xl p-8 text-white shadow-elegant max-w-4xl mx-auto">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    En Hayas, creemos en construir relaciones como un bosque
                  </h3>
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div>
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Heart className="h-6 w-6 text-white" />
                      </div>
                      <p className="font-medium">Raíces profundas</p>
                      <p className="text-sm opacity-90">confianza</p>
                    </div>
                    <div>
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Zap className="h-6 w-6 text-white" />
                      </div>
                      <p className="font-medium">Hojas adaptables</p>
                      <p className="text-sm opacity-90">flexibilidad</p>
                    </div>
                    <div>
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Target className="h-6 w-6 text-white" />
                      </div>
                      <p className="font-medium">Copa amplia</p>
                      <p className="text-sm opacity-90">estrategia</p>
                    </div>
                  </div>
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
                  Un equipo multidisciplinar de 8 profesionales especializados en marketing digital, desarrollo, CRM y consultoría estratégica
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {teamMembers.map((member, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 text-center shadow-corporate hover-scale group">
                    <div className="relative w-48 h-48 mx-auto mb-4 overflow-hidden rounded-full border-4 border-gradient-primary">
                      <img 
                        src={member.image} 
                        alt={`${member.name} - ${member.role}`}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-hayas-primary">{member.name}</h3>
                    <p className="text-hayas-primary font-medium mb-3 text-sm">{member.role}</p>
                    <p className="text-gray-700 text-sm leading-relaxed">{member.description}</p>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient-primary">Certificaciones y Partners Tecnológicos</h2>
              <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto">
                Somos partners oficiales y mantenemos certificaciones en las principales plataformas tecnológicas del mercado
              </p>
              
              <div className="space-y-8">
                {/* Primera línea - 3 logos */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {certifications.slice(0, 3).map((cert, index) => (
                    <div key={index} className="group hover-scale">
                      <div className="bg-white rounded-xl p-8 shadow-corporate border border-gray-100 group-hover:shadow-elegant transition-all duration-300">
                        <div className="h-20 flex items-center justify-center mb-4">
                          <img 
                            src={cert.logo} 
                            alt={`${cert.name} logo`}
                            className="h-16 w-auto object-contain filter transition-all duration-300 group-hover:scale-110"
                          />
                        </div>
                        <p className="text-sm font-semibold text-hayas-primary text-center">{cert.name}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Segunda línea - 3 logos */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {certifications.slice(3, 6).map((cert, index) => (
                    <div key={index} className="group hover-scale">
                      <div className="bg-white rounded-xl p-8 shadow-corporate border border-gray-100 group-hover:shadow-elegant transition-all duration-300">
                        <div className="h-20 flex items-center justify-center mb-4">
                          <img 
                            src={cert.logo} 
                            alt={`${cert.name} logo`}
                            className="h-16 w-auto object-contain filter transition-all duration-300 group-hover:scale-110"
                          />
                        </div>
                        <p className="text-sm font-semibold text-hayas-primary text-center">{cert.name}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Tercera línea - 3 logos */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {certifications.slice(6).map((cert, index) => (
                    <div key={index} className="group hover-scale">
                      <div className="bg-white rounded-xl p-8 shadow-corporate border border-gray-100 group-hover:shadow-elegant transition-all duration-300">
                        <div className="h-20 flex items-center justify-center mb-4">
                          <img 
                            src={cert.logo} 
                            alt={`${cert.name} logo`}
                            className="h-16 w-auto object-contain filter transition-all duration-300 group-hover:scale-110"
                          />
                        </div>
                        <p className="text-sm font-semibold text-hayas-primary text-center">{cert.name}</p>
                      </div>
                    </div>
                  ))}
                </div>
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
