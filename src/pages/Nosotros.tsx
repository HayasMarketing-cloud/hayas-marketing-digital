import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ReviewsSection from '@/components/ReviewsSection';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Target, Users, TrendingUp, Award, CheckCircle, Lightbulb, Zap, Heart, ArrowRight, Bot, GraduationCap, BarChart3, Settings } from 'lucide-react';

// Import logos
import hubspotLogo from '@/assets/logos/hubspot-logo.png';
import ghlLogo from '@/assets/logos/ghl-logo.png';
import googleLogo from '@/assets/logos/google-logo.png';
import metaLogo from '@/assets/logos/meta-logo.png';
import wordpressLogo from '@/assets/logos/wordpress-logo.png';
import lovableLogo from '@/assets/logos/lovable-logo.png';
import aiLogo from '@/assets/logos/ai-logo.png';
import JoinFreelancersSection from '@/components/JoinFreelancersSection';
const Nosotros = () => {
  const teamMembers = [{
    name: "Rubén",
    role: "CEO & Founder",
    description: "Visionario y líder estratégico, especializado en transformación digital y crecimiento empresarial sostenible.",
    image: "/lovable-uploads/4aedecdb-9c20-490d-ba11-072181bdf3d6.png"
  }, {
    name: "Fátima",
    role: "Social Media Manager",
    description: "Experta en gestión de redes sociales, creación de contenido y community management para potenciar la presencia digital.",
    image: "/lovable-uploads/1d44b1f0-6326-4c3b-8653-d985c9724dd2.png"
  }, {
    name: "Ebelyn",
    role: "Digital Marketing Manager",
    description: "Especialista en estrategias digitales integrales, SEO, SEM y automatización de campañas para maximizar el ROI.",
    image: "/lovable-uploads/869ded51-92ac-41e0-815c-65c18ee5a35d.png"
  }, {
    name: "Sandra",
    role: "Directora de Arte",
    description: "Creativa experta en branding, diseño visual y experiencia de usuario. Transforma ideas en identidades visuales impactantes.",
    image: "/lovable-uploads/1a251b6e-acde-4e14-90a6-7cac838ba078.png"
  }, {
    name: "Iolanda",
    role: "Key Account Manager",
    description: "Gestora de cuentas clave especializada en relaciones comerciales estratégicas y crecimiento de clientes corporativos.",
    image: "/lovable-uploads/55bec5bb-9e3b-4208-9101-ea3fa923568f.png"
  }, {
    name: "Daniela",
    role: "Key Account Manager",
    description: "Responsable de desarrollo comercial y atención personalizada a clientes estratégicos, garantizando resultados excepcionales.",
    image: "/lovable-uploads/26de1124-c82f-4741-800d-030e305eb147.png"
  }];
  const values = [{
    icon: <Lightbulb className="h-8 w-8 text-white" />,
    title: "Educación y Empoderamiento",
    description: "Proveemos herramientas y conocimientos para fomentar la autogestión y decisiones informadas alineadas con tu propósito."
  }, {
    icon: <Users className="h-8 w-8 text-white" />,
    title: "Inclusión y Diversidad",
    description: "Adaptamos nuestras propuestas a las necesidades únicas de cada cliente, respetando y reflejando su autenticidad."
  }, {
    icon: <Heart className="h-8 w-8 text-white" />,
    title: "Trabajo en Equipo y Conciliación",
    description: "Fomentamos la colaboración auténtica priorizando un equilibrio genuino entre vida laboral y personal."
  }, {
    icon: <Zap className="h-8 w-8 text-white" />,
    title: "Eficiencia y Simplicidad Estratégica",
    description: "Diseñamos estrategias ágiles que priorizan la esencia, eliminando lo superfluo y enfocándonos en el impacto real."
  }, {
    icon: <TrendingUp className="h-8 w-8 text-white" />,
    title: "Crecimiento Sostenible y Adaptativo",
    description: "Estrategias que evolucionan continuamente para generar impacto positivo duradero mediante mejora continua."
  }, {
    icon: <CheckCircle className="h-8 w-8 text-white" />,
    title: "Respeto a la Privacidad",
    description: "Garantizamos la confidencialidad y uso responsable de la información, priorizando el respeto a cada individuo."
  }];
  const certifications = [{
    name: "HubSpot Partner",
    logo: "/lovable-uploads/5b8c9d90-e355-4b27-b2a3-018f2c5a6734.png"
  }, {
    name: "Go High Level",
    logo: "/lovable-uploads/db3b7311-53c8-4d88-9818-3377203174a3.png"
  }, {
    name: "Google Partner",
    logo: googleLogo
  }, {
    name: "Meta Business Partner",
    logo: "/lovable-uploads/e9556961-6aaa-41da-8ccb-fc0cdbd24142.png"
  }, {
    name: "WordPress",
    logo: "/lovable-uploads/ed1d9897-ed2d-49a3-9ce2-1cea880aee32.png"
  }, {
    name: "Lovable Partner",
    logo: "/lovable-uploads/7794bc2d-846f-4d33-96bc-01ea5fe75d53.png"
  }, {
    name: "WhatsApp Business",
    logo: "/lovable-uploads/d5141b27-1db2-4f9b-8ff4-486fb23e0ae8.png"
  }, {
    name: "Shopify Partner",
    logo: "/lovable-uploads/481fb23a-8710-41bb-93e6-b3c991fa58c8.png"
  }, {
    name: "Aircall Partner",
    logo: "/lovable-uploads/b18fc977-3bb3-4613-8232-8fac4fb4d9ee.png"
  }, {
    name: "AEPD",
    logo: "/lovable-uploads/f4b23acc-a714-4f14-92f4-50ba1fda2565.png"
  }, {
    name: "Sharpei",
    logo: "/lovable-uploads/42d61146-8307-49fd-bf0e-6f48707c1284.png"
  }, {
    name: "Connectif",
    logo: "/lovable-uploads/92c382be-7597-473a-97d4-fc45f3d7d598.png"
  }];
  return <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow pt-24">
        {/* Hero Section - Modernized with gradient background */}
        <section className="relative py-24 md:py-32 lg:py-40 overflow-hidden bg-header-gradient bg-pattern-dots">
          {/* Enhanced decorative elements */}
          <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
            <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-hayas-primary/15 blur-3xl"></div>
            <div className="absolute top-20 -right-32 w-96 h-96 rounded-full bg-hayas-secondary/10 blur-2xl"></div>
            <div className="absolute top-1/2 left-1/4 w-40 h-40 rounded-full bg-hayas-primary/8 blur-xl"></div>
          </div>
          
          {/* Floating geometric shapes */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
            <div className="absolute top-20 left-10 w-6 h-6 bg-hayas-primary/20 rotate-45 animate-pulse"></div>
            <div className="absolute bottom-32 right-20 w-8 h-8 bg-hayas-secondary/15 rounded-full animate-bounce" style={{
            animationDelay: '2s'
          }}></div>
            <div className="absolute top-40 right-1/4 w-4 h-4 bg-hayas-primary/25 rotate-12"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <h1 className="title-hero mb-8 leading-tight animate-fade-in">
                Somos <span className="text-gradient-primary">Hayas Marketing</span>
              </h1>
              <p className="text-hero text-gray-800 mb-8 animate-slide-up max-w-4xl mx-auto leading-relaxed font-medium">Agencia y consultora de marketing digital especializada en estrategia, automatización e inteligencia artificial al servicio de las personas.</p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-up">
                <Button className="gradient-primary text-white py-8 px-10 text-xl font-medium shadow-elegant hover-scale focus-ring transform transition-all duration-300">
                  <span className="flex items-center gap-2">
                    Conocer nuestros servicios
                    <ArrowRight className="h-5 w-5" />
                  </span>
                </Button>
                <Button variant="outline" className="py-8 px-10 text-xl font-medium hover-scale focus-ring border-2 border-hayas-primary text-hayas-primary hover:bg-hayas-primary hover:text-white bg-white/90 backdrop-blur-sm shadow-lg">
                  Solicitar consulta gratuita
                </Button>
              </div>
            </div>
          </div>
          
          {/* Bottom section separator */}
          <div className="absolute bottom-0 left-0 right-0 h-px section-divider"></div>
        </section>

        {/* Nuestro Enfoque - Sección de enfoques estratégicos */}
        <section className="relative py-20 md:py-28 bg-gradient-to-br from-white via-hayas-primary/5 to-hayas-secondary/10 overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
            <div className="absolute top-20 -left-20 w-64 h-64 rounded-full bg-hayas-primary/10 blur-2xl"></div>
            <div className="absolute bottom-20 -right-20 w-80 h-80 rounded-full bg-hayas-secondary/8 blur-3xl"></div>
            <div className="absolute top-1/2 left-1/3 w-32 h-32 rounded-full bg-hayas-primary/5 blur-xl"></div>
          </div>
          
          {/* Subtle geometric patterns */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
            <div className="absolute top-32 left-12 w-3 h-3 bg-hayas-primary/20 rotate-45"></div>
            <div className="absolute bottom-40 right-16 w-4 h-4 bg-hayas-secondary/15 rounded-full"></div>
            <div className="absolute top-20 right-1/3 w-2 h-2 bg-hayas-primary/25"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-7xl mx-auto">
              {/* Header section */}
              <div className="text-center mb-16 relative">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-6 w-16 h-1 bg-gradient-primary rounded-full opacity-70"></div>
                <h2 className="title-section mb-6 text-gradient-primary relative">
                  Nuestro Enfoque
                  <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-hayas-primary/40 rounded-full"></span>
                </h2>
                <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
                  Cinco pilares fundamentales que guían cada proyecto y definen nuestra forma única de generar resultados sostenibles para nuestros clientes.
                </p>
              </div>
              
              {/* Cards grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 lg:gap-8">
                {/* Estrategia con propósito */}
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 lg:p-8 text-center shadow-elegant hover-scale border border-white/50 relative overflow-hidden group">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-primary opacity-80"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-hayas-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Target className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold mb-4 text-hayas-primary leading-tight">Estrategia con propósito</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Desarrollamos estrategias alineadas con los objetivos reales de tu negocio, enfocándonos en resultados medibles y crecimiento sostenible.
                    </p>
                  </div>
                </div>
                
                {/* Tecnología con intención */}
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 lg:p-8 text-center shadow-elegant hover-scale border border-white/50 relative overflow-hidden group">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-primary opacity-80"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-hayas-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Settings className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold mb-4 text-hayas-primary leading-tight">Tecnología con intención</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Implementamos IA, automatización y CRM de forma estratégica, potenciando la eficiencia sin perder el toque humano.
                    </p>
                  </div>
                </div>
                
                {/* Formación para la autonomía */}
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 lg:p-8 text-center shadow-elegant hover-scale border border-white/50 relative overflow-hidden group">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-primary opacity-80"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-hayas-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <GraduationCap className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold mb-4 text-hayas-primary leading-tight">Formación para la autonomía</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Capacitamos a tu equipo con conocimientos y herramientas para que puedas gestionar y optimizar tus propios procesos.
                    </p>
                  </div>
                </div>
                
                {/* Medición real de resultados */}
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 lg:p-8 text-center shadow-elegant hover-scale border border-white/50 relative overflow-hidden group">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-primary opacity-80"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-hayas-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <BarChart3 className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold mb-4 text-hayas-primary leading-tight">Medición real de resultados</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Establecemos KPIs claros y reportes transparentes que demuestran el ROI y el impacto real de cada acción.
                    </p>
                  </div>
                </div>
                
                {/* Conexión humana y marcas con valores */}
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 lg:p-8 text-center shadow-elegant hover-scale border border-white/50 relative overflow-hidden group md:col-span-2 lg:col-span-1">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-primary opacity-80"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-hayas-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Heart className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold mb-4 text-hayas-primary leading-tight">Conexión humana y marcas con valores</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Creamos vínculos auténticos entre tu marca y audiencia, priorizando la transparencia y los valores compartidos.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom section separator */}
          <div className="absolute bottom-0 left-0 right-0 h-px section-divider"></div>
        </section>

        {/* Nuestra Historia - Pure white background for contrast */}
        <section className="relative py-24 md:py-32 bg-section-light">
          {/* Subtle top border */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-hayas-primary/20 to-transparent"></div>
          
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Enhanced header section */}
              <div className="text-center mb-20 relative">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4 w-20 h-1 bg-gradient-primary rounded-full opacity-60"></div>
                <h2 className="title-section mb-8 text-gradient-primary relative">
                  Nuestra Historia
                  <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-hayas-primary/30 rounded-full"></span>
                </h2>
                <p className="text-hero text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium">
                  Desde 2014, ayudamos a emprendedores y empresas a conectar de forma más efectiva y auténtica con sus clientes, impulsando su crecimiento a través de estrategias de marketing digital esenciales.
                </p>
              </div>
              
              {/* Enhanced cards layout */}
              <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
                <div className="bg-white rounded-2xl p-8 text-center shadow-elegant hover-scale border border-gray-100 relative overflow-hidden group">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-primary"></div>
                  <div className="relative z-10">
                    <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Target className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="title-card mb-4 text-hayas-primary">Nuestra Misión</h3>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      Impulsar el crecimiento de emprendedores, pymes y empresas mediante soluciones estratégicas y personalizadas que integren lo esencial en marketing digital, CRM y automatización, generando resultados medibles, sostenibles y con impacto real.
                    </p>
                  </div>
                </div>
                
                <div className="bg-white rounded-2xl p-8 text-center shadow-elegant hover-scale border border-gray-100 relative overflow-hidden group">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-primary"></div>
                  <div className="relative z-10">
                    <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Lightbulb className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="title-card mb-4 text-hayas-primary">Nuestra Visión</h3>
                    <p className="text-gray-700 text-lg leading-relaxed">Ser una agencia de marketing internacional de referencia en España, con un enfoque estratégico 360 que combine estrategia digital, gestión de clientes y tecnología avanzada para impulsar el crecimiento y la competitividad de las empresas.</p>
                  </div>
                </div>
                
                <div className="bg-white rounded-2xl p-8 text-center shadow-elegant hover-scale border border-gray-100 relative overflow-hidden group">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-primary"></div>
                  <div className="relative z-10">
                    <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Award className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="title-card mb-4 text-hayas-primary">Nuestro Compromiso</h3>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      Diseñar e implementar soluciones personalizadas que combinen estrategia, creatividad y tecnología para maximizar la eficiencia, la conexión con las audiencias y el retorno de inversión de nuestros clientes, manteniendo siempre un enfoque humano y ético.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom section separator */}
          <div className="absolute bottom-0 left-0 right-0 h-px section-divider"></div>
        </section>

        {/* ¿Por qué Hayas? - Sección de origen del nombre */}
        <section className="py-16 md:py-20 relative overflow-hidden">
          {/* Fondo del bosque de hayas */}
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
          backgroundImage: `url('/lovable-uploads/1399f918-aa74-41b7-b838-f1dc283e5b87.png')`,
          filter: 'brightness(0.6) contrast(1.1)'
        }}></div>
          
          {/* Overlay para mejorar legibilidad */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/75 to-white/70"></div>
          
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
                  Creciendo juntos: nuestra comunidad de impulso empresarial
                </h2>
                <p className="text-lg text-gray-900 font-medium max-w-2xl mx-auto">
                  Como un bosque de hayas, crecemos juntos: sólidos en nuestros valores, flexibles para adaptarnos a los distintos contextos y con una visión amplia para impulsar nuestras empresas.
                </p>
              </div>
              
              <div className="max-w-4xl mx-auto">
                {/* Contenido principal de texto */}
                <div className="space-y-8">
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 border-l-4 border-hayas-primary shadow-sm">
                    <p className="text-gray-900 font-medium leading-relaxed text-lg">
                      Los bosques de hayas son uno de los <span className="font-bold text-hayas-primary">ecosistemas más bellos y resilientes</span> de Europa:
                    </p>
                    <ul className="mt-6 space-y-3">
                      <li className="flex items-center text-gray-900">
                        <CheckCircle className="h-5 w-5 text-hayas-primary mr-3 flex-shrink-0" />
                        <span className="text-lg">prosperan en comunidad</span>
                      </li>
                      <li className="flex items-center text-gray-900">
                        <CheckCircle className="h-5 w-5 text-hayas-primary mr-3 flex-shrink-0" />
                        <span className="text-lg">filtran la luz de forma armoniosa</span>
                      </li>
                      <li className="flex items-center text-gray-900">
                        <CheckCircle className="h-5 w-5 text-hayas-primary mr-3 flex-shrink-0" />
                        <span className="text-lg">permiten que cada árbol crezca con fuerza, sin perder su conexión</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl p-8 shadow-sm border border-gray-200">
                    <p className="text-gray-900 font-medium leading-relaxed mb-6 text-lg">
                      Nos inspira su capacidad para crear un <span className="font-bold text-hayas-primary">microclima fértil</span>, 
                      donde todo se equilibra con inteligencia natural: el suelo nutre, las raíces conectan, el aire fluye.
                    </p>
                    <p className="text-gray-900 font-medium leading-relaxed text-lg">
                      Como los hayedos, <span className="font-bold text-hayas-primary">evolucionamos de forma orgánica</span>, 
                      buscando sostenibilidad, conexión y propósito en todo lo que hacemos.
                    </p>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </section>

        {/* Nuestro Equipo - Fondo blanco */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient-primary">Nuestro Equipo</h2>
                <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                  Un equipo diverso, humano y multidisciplinar que comparte una visión: hacer del marketing una herramienta de transformación sostenible.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {teamMembers.map((member, index) => <div key={index} className="bg-white rounded-xl p-6 text-center shadow-corporate hover-scale group">
                    <div className="relative w-48 h-48 mx-auto mb-4 overflow-hidden rounded-full border-4 border-gradient-primary">
                      <img src={member.image} alt={`${member.name} - ${member.role}`} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-hayas-primary">{member.name}</h3>
                    <p className="text-hayas-primary font-medium mb-3 text-sm">{member.role}</p>
                    <p className="text-gray-700 text-sm leading-relaxed">{member.description}</p>
                  </div>)}
              </div>
            </div>
          </div>
        </section>

        {/* Nuestros Valores - Fondo tenue */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-hayas-secondary/5 to-hayas-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient-primary">Nuestros Valores</h2>
                <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                  Los principios que guían cada proyecto y relación con nuestros clientes
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {values.map((value, index) => <div key={index} className="text-center group">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-hayas-primary">{value.title}</h3>
                    <p className="text-gray-700">{value.description}</p>
                  </div>)}
              </div>
            </div>
          </div>
        </section>

        <JoinFreelancersSection />


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
                  {certifications.slice(0, 3).map((cert, index) => <div key={index} className="group hover-scale">
                      <div className="bg-white rounded-xl p-8 shadow-corporate border border-gray-100 group-hover:shadow-elegant transition-all duration-300">
                        <div className="h-20 flex items-center justify-center mb-4">
                          <img src={cert.logo} alt={`${cert.name} logo`} className="h-16 w-auto object-contain filter transition-all duration-300 group-hover:scale-110" />
                        </div>
                        <p className="text-sm font-semibold text-hayas-primary text-center">{cert.name}</p>
                      </div>
                    </div>)}
                </div>
                
                {/* Segunda línea - 3 logos */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {certifications.slice(3, 6).map((cert, index) => <div key={index} className="group hover-scale">
                      <div className="bg-white rounded-xl p-8 shadow-corporate border border-gray-100 group-hover:shadow-elegant transition-all duration-300">
                        <div className="h-20 flex items-center justify-center mb-4">
                          <img src={cert.logo} alt={`${cert.name} logo`} className="h-16 w-auto object-contain filter transition-all duration-300 group-hover:scale-110" />
                        </div>
                        <p className="text-sm font-semibold text-hayas-primary text-center">{cert.name}</p>
                      </div>
                    </div>)}
                </div>
                
                {/* Tercera línea - 3 logos */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {certifications.slice(6).map((cert, index) => <div key={index} className="group hover-scale">
                      <div className="bg-white rounded-xl p-8 shadow-corporate border border-gray-100 group-hover:shadow-elegant transition-all duration-300">
                        <div className="h-20 flex items-center justify-center mb-4">
                          <img src={cert.logo} alt={`${cert.name} logo`} className={`${cert.name === 'AEPD' ? 'h-20' : 'h-16'} w-auto object-contain filter transition-all duration-300 group-hover:scale-110`} />
                        </div>
                        <p className="text-sm font-semibold text-hayas-primary text-center">{cert.name}</p>
                      </div>
                    </div>)}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Lo que dicen nuestros clientes - Fondo blanco */}
        <section className="py-16 md:py-20 bg-white">
          <ReviewsSection />
        </section>


        {/* CTA Final - Solicitar Asesoría */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-white rounded-2xl p-8 md:p-12 shadow-elegant border border-gray-100">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gradient-primary mb-4">
                    👉 ¿Listo para impulsar tu negocio con estrategia y sentido?
                  </h2>
                  <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                    Agenda una consulta gratuita de 30 minutos y descubre cómo podemos ayudarte a 
                    conseguir más clientes y optimizar tu estrategia digital.
                  </p>
                </div>
                
                <div className="flex justify-center">
                  <Button 
                    className="gradient-primary text-white py-6 px-8 text-lg font-medium shadow-elegant hover-scale focus-ring"
                    onClick={() => window.location.href = '/agendar-reunion'}
                  >
                    <ArrowRight className="mr-2 h-5 w-5" />
                    Solicitar Asesoría Gratuita
                  </Button>
                </div>
                
                <div className="mt-8 flex items-center justify-center gap-6 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-hayas-primary" />
                    <span>Sin compromiso</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-hayas-primary" />
                    <span>Consulta personalizada</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-hayas-primary" />
                    <span>Consultoría inicial gratuita</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>;
};
export default Nosotros;