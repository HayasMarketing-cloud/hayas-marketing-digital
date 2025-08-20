import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ProcessSection from '@/components/ProcessSection';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';


import FAQSection from '@/components/FAQSection';
import ServiceContactSection from '@/components/ServiceContactSection';
import { 
  ShoppingCart, Globe, Server, Palette, Settings, Smartphone, 
  CreditCard, Search, GraduationCap, Shield, BarChart3, 
  ArrowRight, CheckCircle, Star, Zap, Users, TrendingUp,
  Package, Repeat, Calendar, Bot
} from 'lucide-react';

const platforms = [
  { name: "WordPress + WooCommerce", logo: "🛒" },
  { name: "Shopify", logo: "🏪" },
  { name: "PrestaShop", logo: "🛍️" },
  { name: "Magento", logo: "🏬" }
];

const services = [
  {
    icon: <Globe className="h-8 w-8 text-primary" />,
    title: "Alojamiento Web Especializado",
    description: "Hosting optimizado para ecommerce con copias de seguridad automáticas y máxima velocidad de carga."
  },
  {
    icon: <Server className="h-8 w-8 text-primary" />,
    title: "Registro y Gestión de Dominio",
    description: "Registramos y gestionamos tu dominio personalizado para proyectar profesionalidad."
  },
  {
    icon: <Palette className="h-8 w-8 text-primary" />,
    title: "Diseño UX/UI Profesional",
    description: "Diseño centrado en la conversión con experiencia de usuario optimizada para ventas."
  },
  {
    icon: <Settings className="h-8 w-8 text-primary" />,
    title: "Gestión Autónoma",
    description: "Panel de administración intuitivo para que gestiones productos, pedidos y contenido fácilmente."
  },
  {
    icon: <Smartphone className="h-8 w-8 text-primary" />,
    title: "Diseño Responsive",
    description: "Tienda optimizada para todos los dispositivos: móvil, tablet y escritorio."
  },
  {
    icon: <CreditCard className="h-8 w-8 text-primary" />,
    title: "Pasarelas de Pago",
    description: "Integración con múltiples métodos de pago seguros: PayPal, Stripe, Redsys y más."
  },
  {
    icon: <Search className="h-8 w-8 text-primary" />,
    title: "SEO para Ecommerce",
    description: "Optimización técnica y de contenido para posicionar tus productos en Google."
  },
  {
    icon: <GraduationCap className="h-8 w-8 text-primary" />,
    title: "Formación Personalizada",
    description: "Te enseñamos a gestionar tu tienda, procesar pedidos y optimizar ventas."
  },
  {
    icon: <Shield className="h-8 w-8 text-primary" />,
    title: "Seguridad Avanzada",
    description: "Certificados SSL, protección anti-fraude y cumplimiento RGPD."
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-primary" />,
    title: "Analítica de Ventas",
    description: "Dashboard completo para analizar rendimiento, conversiones y comportamiento del cliente."
  }
];

const advancedFeatures = [
  {
    icon: <Package className="h-6 w-6 text-primary" />,
    title: "Gestión de Inventario",
    description: "Control automático de stock, alertas de reposición y gestión de variantes."
  },
  {
    icon: <Repeat className="h-6 w-6 text-primary" />,
    title: "Modelos de Suscripción",
    description: "Venta por suscripción, alquiler y renting con renovación automática."
  },
  {
    icon: <Users className="h-6 w-6 text-primary" />,
    title: "CRM Integrado",
    description: "Gestión de clientes, historial de compras y segmentación automática."
  },
  {
    icon: <Bot className="h-6 w-6 text-primary" />,
    title: "IA para Ecommerce",
    description: "Recomendaciones personalizadas, chatbots de ventas y optimización automática."
  }
];

const processSteps = [
  {
    number: "01",
    title: "Análisis y Estrategia",
    description: "Analizamos tu negocio, competencia y definimos la estrategia de ecommerce óptima."
  },
  {
    number: "02", 
    title: "Diseño y Desarrollo",
    description: "Creamos el diseño UX/UI y desarrollamos tu tienda con las mejores prácticas."
  },
  {
    number: "03",
    title: "Configuración y Testing",
    description: "Configuramos productos, pagos, envíos y realizamos pruebas exhaustivas."
  },
  {
    number: "04",
    title: "Lanzamiento y Formación",
    description: "Lanzamos tu tienda y te formamos para que la gestiones de forma autónoma."
  }
];

const successCases = [
  {
    name: "Major Wine & Food",
    category: "Distribuidora de Vinos Premium",
    service: "Tienda Online Premium",
    results: "+150% ventas online, +200% conversión móvil"
  },
  {
    name: "IV Virgen Extra",
    category: "Aceite de Oliva Ecológico", 
    service: "Ecommerce B2C + B2B",
    results: "+300% alcance digital, nuevos canales"
  },
  {
    name: "Centro Roraima",
    category: "Centro de Formación",
    service: "Plataforma Cursos Online",
    results: "+250% inscripciones, automatización"
  }
];

const faqItems = [
  {
    question: "¿Cuánto tiempo tarda en estar lista mi tienda online?",
    answer: "El desarrollo completo de una tienda online profesional toma entre 4-8 semanas, dependiendo de la complejidad, número de productos y funcionalidades específicas requeridas."
  },
  {
    question: "¿Qué plataforma de ecommerce recomiendan?",
    answer: "Recomendamos la plataforma según tus necesidades: WooCommerce para máxima personalización, Shopify para facilidad de uso, o soluciones enterprise como Magento para grandes volúmenes."
  },
  {
    question: "¿Incluyen la migración desde mi tienda actual?",
    answer: "Sí, incluimos la migración completa de productos, clientes, pedidos y SEO desde tu tienda actual sin pérdida de datos ni posicionamiento."
  },
  {
    question: "¿Qué métodos de pago puedo integrar?",
    answer: "Integramos todos los métodos principales: tarjetas de crédito/débito, PayPal, Bizum, transferencias, contra reembolso, y pasarelas específicas de tu país."
  },
  {
    question: "¿La tienda estará optimizada para móviles?",
    answer: "Absolutamente. Todas nuestras tiendas tienen diseño responsive y están optimizadas para ofrecer la mejor experiencia en móviles, donde ocurre el 60% de las compras online."
  },
  {
    question: "¿Incluyen formación para gestionar la tienda?",
    answer: "Sí, incluimos formación completa personalizada para que aprendas a gestionar productos, procesar pedidos, analizar ventas y optimizar tu tienda de forma autónoma."
  },
  {
    question: "¿Qué soporte ofrecen después del lanzamiento?",
    answer: "Ofrecemos soporte técnico continuo, actualizaciones de seguridad, backups automáticos y consultoría estratégica para ayudarte a hacer crecer tu negocio online."
  },
  {
    question: "¿Pueden integrar mi tienda con mi sistema de gestión actual?",
    answer: "Sí, integramos tu ecommerce con ERPs, CRMs, sistemas de facturación, gestión de almacén y cualquier herramienta que uses en tu negocio."
  }
];

const TiendaOnline = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4 mt-20">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-gray-600">
            <Link to="/" className="hover:text-primary">Inicio</Link>
            <span className="mx-2">/</span>
            <Link to="/soluciones" className="hover:text-primary">Soluciones</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Tienda Online</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-white to-accent/5">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                🛒 Ecommerce Profesional
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Creamos tu <span className="text-gradient-primary">Tienda Online</span> que vende 24/7
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Desarrollamos tiendas online profesionales que convierten visitantes en clientes. 
                Diseño optimizado, tecnología avanzada y estrategia de ventas integrada.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="gradient-primary text-white" asChild>
                  <Link to="/agendar-reunion">
                    Solicitar Propuesta
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="#casos-exito">Ver Casos de Éxito</Link>
                </Button>
              </div>
              
              {/* Platform Logos */}
              <div>
                <p className="text-sm text-gray-500 mb-3">Desarrollamos en las mejores plataformas:</p>
                <div className="flex flex-wrap gap-4">
                  {platforms.map((platform, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="text-lg">{platform.logo}</span>
                      <span>{platform.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <span className="text-xs text-gray-500">tutienda.com</span>
                  </div>
                  <div className="space-y-3">
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                    <div className="grid grid-cols-2 gap-2 mt-4">
                      <div className="h-16 bg-primary/10 rounded"></div>
                      <div className="h-16 bg-primary/10 rounded"></div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Venta online 24/7</span>
                  <div className="flex items-center gap-1 text-green-600">
                    <TrendingUp className="h-4 w-4" />
                    <span className="text-sm font-medium">+247% ventas</span>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-primary text-white p-3 rounded-full shadow-lg">
                <ShoppingCart className="h-6 w-6" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-accent text-white p-3 rounded-full shadow-lg">
                <BarChart3 className="h-6 w-6" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Servicio <span className="text-gradient-primary">Integral</span> de Ecommerce
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Todo lo que necesitas para vender online con éxito. Desde el diseño hasta la analítica, 
              cubrimos cada aspecto de tu tienda digital.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
                <CardHeader className="pb-4">
                  <div className="mb-4 p-3 rounded-lg bg-primary/10 w-fit">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Features */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
              Funcionalidades Avanzadas
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Potencia tu Tienda con <span className="text-gradient-primary">IA y Automatización</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Lleva tu ecommerce al siguiente nivel con funcionalidades avanzadas que automatizan procesos 
              y mejoran la experiencia del cliente.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {advancedFeatures.map((feature, index) => (
              <div key={index} className="flex gap-4 p-6 bg-white rounded-xl shadow-md border border-gray-100">
                <div className="p-3 rounded-lg bg-primary/10 shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Sharpei Integration */}
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12 border border-primary/10">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">🐾</span>
                  <h3 className="text-2xl font-bold">Sharpei Integration</h3>
                </div>
                <h4 className="text-xl font-semibold mb-4 text-gray-800">
                  Vende por suscripción, alquiler o renting desde tu ecommerce
                </h4>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  ¿Y si tus productos no solo se compraran, sino también se alquilaran, suscribieran o renovaran automáticamente? 
                  Con Sharpei, llevamos tu tienda online al siguiente nivel, incorporando nuevos modelos de consumo.
                </p>
                <div className="flex items-center gap-4 mb-6">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-sm">Integración plug & play</span>
                </div>
                <Button className="gradient-primary text-white" asChild>
                  <a href="https://www.gosharpei.com/" target="_blank" rel="noopener noreferrer">
                    Descubrir Sharpei
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <span className="font-medium">Suscripción Mensual</span>
                    <Badge className="bg-green-100 text-green-800">Activa</Badge>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <span className="font-medium">Alquiler por Días</span>
                    <Badge className="bg-blue-100 text-blue-800">Disponible</Badge>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <span className="font-medium">Renting Empresarial</span>
                    <Badge className="bg-purple-100 text-purple-800">Premium</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <ProcessSection
        title={
          <>
            Nuestro <span className="text-gradient-primary">Proceso</span> de Desarrollo
          </>
        }
        subtitle="Metodología probada que garantiza el éxito de tu tienda online desde la estrategia hasta el lanzamiento."
        steps={processSteps}
        backgroundColor="bg-white"
        showIcons={false}
      />

      {/* Success Cases */}
      <section id="casos-exito" className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Casos de <span className="text-gradient-primary">Éxito</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Tiendas online que hemos desarrollado y que están generando resultados excepcionales para nuestros clientes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successCases.map((case_, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="h-5 w-5 text-yellow-500 fill-current" />
                    <Star className="h-5 w-5 text-yellow-500 fill-current" />
                    <Star className="h-5 w-5 text-yellow-500 fill-current" />
                    <Star className="h-5 w-5 text-yellow-500 fill-current" />
                    <Star className="h-5 w-5 text-yellow-500 fill-current" />
                  </div>
                  <CardTitle className="text-lg">{case_.name}</CardTitle>
                  <p className="text-sm text-gray-500">{case_.category}</p>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Badge variant="outline" className="text-primary border-primary/30">
                    {case_.service}
                  </Badge>
                  <p className="text-sm text-gray-600 font-medium">{case_.results}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link to="/casos-de-exito">
                Ver Todos los Casos de Éxito
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Listo para Lanzar tu Tienda Online?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Agenda una reunión estratégica gratuita y descubre cómo podemos hacer crecer tu negocio online.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100" asChild>
              <Link to="/agendar-reunion">
                Agenda Reunión Gratuita
                <Calendar className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
              <Link to="/contacto">Solicitar Información</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Preguntas <span className="text-gradient-primary">Frecuentes</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Resolvemos las dudas más comunes sobre el desarrollo de tiendas online.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <FAQSection faqs={faqItems} />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ServiceContactSection
        title="¿Hablamos sobre tu tienda online?"
        subtitle="Cuéntanos tu proyecto y objetivos. Te responderemos con una propuesta personalizada para tu tienda online."
      />
      
      <Footer />
    </div>
  );
};

export default TiendaOnline;