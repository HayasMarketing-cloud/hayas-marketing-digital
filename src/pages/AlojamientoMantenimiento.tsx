import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

import { useServiceSEO } from '@/hooks/useServiceSEO';
import EnhancedSEO from '@/components/EnhancedSEO';
import FAQSection from '@/components/FAQSection';
import ServiceContactSection from '@/components/ServiceContactSection';
import SuccessCasesSection from '@/components/SuccessCasesSection';
import { getServiceSuccessCasesConfig } from '@/data/serviceSuccessCasesMapping';
import { 
  Server, Shield, Zap, BarChart3, Settings, Globe, Clock,
  ArrowRight, CheckCircle, Star, Wrench, Database, Monitor,
  Sparkles, Timer, Lock, CloudRain, TrendingUp, AlertTriangle
} from 'lucide-react';
import HostingPlansTable from '@/components/hosting/HostingPlansTable';

const hostingMaintenanceServices = [
  {
    icon: <Server className="h-8 w-8 text-primary" />,
    title: "Alojamiento Premium",
    description: "Hosting optimizado para WordPress con servidores rápidos, SSL gratuito y soporte técnico especializado."
  },
  {
    icon: <Shield className="h-8 w-8 text-primary" />,
    title: "Seguridad Avanzada",
    description: "Protección completa contra malware, ataques y vulnerabilidades con monitorización 24/7."
  },
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: "Optimización de Rendimiento",
    description: "Tu web siempre rápida con optimización de base de datos, caché avanzado y CDN global."
  },
  {
    icon: <CloudRain className="h-8 w-8 text-primary" />,
    title: "Copias de Seguridad Automáticas",
    description: "Backups diarios automáticos con restauración en un clic ante cualquier problema."
  },
  {
    icon: <Settings className="h-8 w-8 text-primary" />,
    title: "Actualizaciones Continuas",
    description: "Mantenemos WordPress, plugins y temas siempre actualizados y seguros automáticamente."
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-primary" />,
    title: "Monitorización 24/7",
    description: "Supervisión constante del estado de tu web con alertas inmediatas ante cualquier incidencia."
  }
];

const maintenancePillars = [
  {
    title: "Seguridad",
    icon: <Shield className="h-6 w-6" />,
    description: "Defensa proactiva contra hackers y malware",
    features: ["Firewall avanzado", "Detección de malware", "Monitoreo de accesos", "Actualizaciones de seguridad"]
  },
  {
    title: "Rendimiento",
    icon: <Zap className="h-6 w-6" />,
    description: "Velocidad óptima para mejor experiencia de usuario",
    features: ["Optimización de base de datos", "Caché avanzado", "Compresión de imágenes", "CDN global"]
  },
  {
    title: "Actualizaciones",
    icon: <Settings className="h-6 w-6" />,
    description: "WordPress, plugins y temas siempre al día",
    features: ["Core WordPress", "Plugins premium", "Temas actualizados", "Compatibilidad testing"]
  },
  {
    title: "Copias de Seguridad",
    icon: <CloudRain className="h-6 w-6" />,
    description: "Tu seguro de vida digital completo",
    features: ["Backups diarios", "Almacenamiento externo", "Restauración 1-clic", "Verificación automática"]
  }
];

// Los planes ahora están definidos en el componente HostingPlansTable

const processSteps = [
  {
    number: "01",
    title: "Migración Segura",
    description: "Transferimos tu web actual sin downtime, manteniendo todos tus datos y configuraciones intactas.",
    icon: <Globe className="h-6 w-6" />
  },
  {
    number: "02", 
    title: "Configuración Optimizada",
    description: "Configuramos el hosting y optimizamos WordPress para máximo rendimiento y seguridad.",
    icon: <Settings className="h-6 w-6" />
  },
  {
    number: "03",
    title: "Implementación de Seguridad",
    description: "Instalamos sistemas de protección avanzados y configuramos copias de seguridad automáticas.",
    icon: <Shield className="h-6 w-6" />
  },
  {
    number: "04",
    title: "Monitorización Continua",
    description: "Supervisamos tu web 24/7 realizando mantenimiento proactivo y optimizaciones constantes.",
    icon: <Monitor className="h-6 w-6" />
  }
];

const successCases = [
  {
    client: "E-commerce Premium",
    problem: "Caídas frecuentes y velocidad lenta",
    solution: "Hosting optimizado + Mantenimiento completo",
    results: "99.9% uptime - 75% mejora en velocidad",
    timeframe: "2 meses",
    testimonial: "Desde que cambiamos el hosting, no hemos tenido ni una sola caída. La velocidad es increíble."
  },
  {
    client: "Blog Corporativo",
    problem: "Hackeo y pérdida de contenido",
    solution: "Restauración + Seguridad avanzada",
    results: "100% recuperación - 0 incidentes desde entonces",
    timeframe: "1 mes",
    testimonial: "Nos salvaron después del hackeo. Ahora dormimos tranquilos sabiendo que estamos protegidos."
  },
  {
    client: "Agencia de Marketing",
    problem: "Gestión manual de múltiples webs",
    solution: "Hosting gestionado para 15 sitios",
    results: "10 horas/semana ahorradas en mantenimiento",
    timeframe: "3 meses",
    testimonial: "Ya no perdemos tiempo en tareas técnicas. Nos centramos en lo que sabemos hacer: marketing."
  }
];

const benefits = [
  "Hosting premium optimizado para WordPress",
  "Mantenimiento técnico completamente automatizado",
  "Seguridad avanzada con protección 24/7",
  "Copias de seguridad diarias con restauración fácil",
  "Soporte técnico especializado cuando lo necesites",
  "Actualizaciones automáticas sin riesgo de errores"
];

const faqItems = [
  {
    question: "¿Qué incluye exactamente el servicio de mantenimiento?",
    answer: "Incluye actualizaciones automáticas de WordPress, plugins y temas, copias de seguridad diarias, monitorización de seguridad 24/7, optimización de rendimiento, limpieza de malware y soporte técnico especializado."
  },
  {
    question: "¿Pueden migrar mi web actual sin perder nada?",
    answer: "Sí, realizamos migraciones completas sin downtime. Transferimos todos tus archivos, base de datos, emails y configuraciones. El proceso es totalmente transparente para tus visitantes."
  },
  {
    question: "¿Qué pasa si mi web se infecta con malware?",
    answer: "Nuestro sistema detecta y elimina malware automáticamente. Si hay una infección compleja, nuestro equipo la limpia manualmente y refuerza la seguridad para prevenir futuros ataques."
  },
  {
    question: "¿Puedo cancelar el servicio cuando quiera?",
    answer: "Sí, no hay permanencia. Puedes cancelar cuando quieras y te ayudamos a migrar tu web a otro proveedor si es necesario, sin costes adicionales."
  },
  {
    question: "¿El hosting incluye certificado SSL?",
    answer: "Sí, todos nuestros planes incluyen certificado SSL gratuito con renovación automática, fundamental para la seguridad y el SEO de tu web."
  },
  {
    question: "¿Qué nivel de soporte técnico ofrecen?",
    answer: "Ofrecemos soporte especializado en WordPress por email (24h), chat en vivo (horario laboral) y teléfono (planes premium). Nuestro equipo resuelve cualquier problema técnico."
  }
];

const AlojamientoMantenimiento: React.FC = () => {
  const { title, description, canonical, ogImage, structuredData } = useServiceSEO({
    serviceName: "Alojamiento y Mantenimiento Web",
    serviceDescription: "Hosting premium y mantenimiento técnico para WordPress. Seguridad, velocidad, copias de seguridad y soporte 24/7 para que tu web funcione siempre perfecta.",
    canonical: "/es/servicios/diseno-web/alojamiento-mantenimiento",
    serviceType: "Servicios Web",
    priceRange: "€-€€",
    features: [
      "Alojamiento Premium",
      "Seguridad Avanzada",
      "Optimización de Rendimiento",
      "Copias de Seguridad Automáticas",
      "Actualizaciones Continuas",
      "Monitorización 24/7"
    ],
    aggregateRating: {
      ratingValue: "4.8",
      reviewCount: "42"
    }
  });
  
  return (
    <div className="min-h-screen bg-background">
      <EnhancedSEO />
      <Navigation />
      
      {/* Breadcrumb */}
      <div className="bg-muted/30 py-4">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-muted-foreground">
            <Link to="/es" className="hover:text-primary">Inicio</Link>
            <span className="mx-2">/</span>
            <Link to="/es/servicios/diseno-web" className="hover:text-primary">Diseño Web</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">Alojamiento y Mantenimiento Web</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">
                <Server className="h-4 w-4 mr-2" />
                Hosting & Mantenimiento WordPress
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Tu web <span className="text-primary">siempre perfecta</span> sin preocupaciones
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Hosting premium optimizado para WordPress + mantenimiento técnico completo. 
                Nos encargamos de todo: seguridad, velocidad, copias de seguridad y actualizaciones.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="group" asChild>
                   <Link to="/es/contacto">
                    Migrar mi Web
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="#planes">Ver Planes</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                {/* Server Dashboard mockup */}
                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <span className="text-xs text-gray-500">hosting.tuweb.com</span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 mb-4">
                      <Server className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium text-gray-700">Panel de Control</span>
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      <div className="bg-green-100 p-3 rounded text-center">
                        <div className="text-green-600 font-bold">99.9%</div>
                        <div className="text-xs text-gray-600">Uptime</div>
                      </div>
                      <div className="bg-blue-100 p-3 rounded text-center">
                        <div className="text-blue-600 font-bold">&lt; 1s</div>
                        <div className="text-xs text-gray-600">Carga</div>
                      </div>
                      <div className="bg-purple-100 p-3 rounded text-center">
                        <div className="text-purple-600 font-bold">SSL</div>
                        <div className="text-xs text-gray-600">Seguro</div>
                      </div>
                    </div>
                    <div className="mt-4 space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Backup automático</span>
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Monitoreo 24/7</span>
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Hosting Premium WordPress</span>
                  <div className="flex items-center gap-1 text-green-600">
                    <Shield className="h-4 w-4" />
                    <span className="text-sm font-medium">100% Seguro</span>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-primary text-white p-3 rounded-full shadow-lg">
                <Server className="h-6 w-6" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-green-500 text-white p-3 rounded-full shadow-lg">
                <Shield className="h-6 w-6" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Los 5 Pilares del Mantenimiento */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Los 4 pilares del mantenimiento integral
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Un sistema interconectado donde cada pilar refuerza a los demás para 
              garantizar que tu web funcione siempre a la perfección.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {maintenancePillars.map((pillar, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 text-center">
                <CardHeader>
                  <div className="mb-4 text-primary group-hover:scale-110 transition-transform duration-300 flex justify-center">
                    {pillar.icon}
                  </div>
                  <CardTitle className="text-xl">{pillar.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{pillar.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {pillar.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Servicios Completos */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Servicio completo de hosting y mantenimiento
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Todo lo que necesitas para que tu web WordPress funcione perfectamente: 
              desde el alojamiento hasta el mantenimiento técnico más avanzado.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hostingMaintenanceServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20">
                <CardHeader>
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Planes de Hosting */}
      <section id="planes" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Planes de hosting y mantenimiento web
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Elige el plan que mejor se adapte a tu proyecto. Desde alojamiento básico 
              hasta mantenimiento completo con servidor dedicado.
            </p>
          </div>

          <HostingPlansTable />
        </div>
      </section>

      {/* Por qué Elegirnos */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                ¿Por qué confiar tu web a nuestro hosting?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Más que hosting, es tranquilidad total. Tu web funcionará perfectamente 
                mientras tú te centras en hacer crecer tu negocio.
              </p>
              
              <div className="grid gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-4 mt-1">
                      <CheckCircle className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary/10">
                <div className="text-center">
                  <Wrench className="h-16 w-16 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Tranquilidad total</h3>
                  <p className="text-muted-foreground mb-6">
                    Nos encargamos de todo el aspecto técnico para que no tengas que preocuparte
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-primary">99.9%</div>
                      <div className="text-sm text-muted-foreground">Uptime Garantizado</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">24/7</div>
                      <div className="text-sm text-muted-foreground">Monitorización</div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Proceso de Migración */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Proceso de migración sin complicaciones
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Nos encargamos de todo el proceso técnico para que tu migración 
              sea completamente transparente para ti y tus visitantes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <span className="text-2xl font-bold text-primary">{step.number}</span>
                  </div>
                  <div className="mb-2 text-primary group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Casos de Éxito */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Casos de éxito en hosting y mantenimiento
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Empresas que han solucionado sus problemas técnicos y mejorado 
              el rendimiento de sus webs con nuestro servicio.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {successCases.map((caso, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg">{caso.client}</CardTitle>
                    <Badge variant="secondary">{caso.timeframe}</Badge>
                  </div>
                  <p className="text-sm text-red-600 font-medium mb-2">❌ {caso.problem}</p>
                  <p className="text-sm text-primary font-medium">✅ {caso.solution}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-green-50 dark:bg-green-950 p-4 rounded-lg">
                    <p className="text-sm font-medium text-green-700 dark:text-green-300">
                      {caso.results}
                    </p>
                  </div>
                  <blockquote className="text-sm text-muted-foreground italic border-l-4 border-primary pl-4">
                    "{caso.testimonial}"
                  </blockquote>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            ¿Listo para olvidarte de los problemas técnicos?
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Migra tu web a nuestro hosting premium y disfruta de tranquilidad total. 
            Nos encargamos de todo el mantenimiento técnico mientras tú haces crecer tu negocio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="group" asChild>
              <Link to="/es/contacto">
                Migrar mi Web Ahora
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" asChild>
              <Link to="/es/casos-exito">Ver Más Casos</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Success Cases Section */}
      {(() => {
        const config = getServiceSuccessCasesConfig('alojamiento-mantenimiento');
        return config ? (
          <SuccessCasesSection
            id="casos-exito"
            title="Casos de éxito en alojamiento y mantenimiento"
            subtitle={config.subtitle}
            filterTags={config.filterTags}
            specificCases={config.specificCases}
            maxCases={4}
            showAllLink={true}
          />
        ) : null;
      })()}

      {/* FAQ Section */}
      <FAQSection faqs={faqItems} />

      {/* Contact Section */}
      <ServiceContactSection
        title="¿Hablamos sobre el alojamiento y mantenimiento?"
        subtitle="Cuéntanos tu proyecto web y necesidades técnicas. Te responderemos con una propuesta personalizada."
      />

      <Footer />
    </div>
  );
};

export default AlojamientoMantenimiento;