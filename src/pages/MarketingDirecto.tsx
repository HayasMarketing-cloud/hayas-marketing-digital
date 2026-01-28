import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

import FAQSection from '@/components/FAQSection';
import { useServiceSEO } from '@/hooks/useServiceSEO';
import Seo from '@/components/Seo';
import { Package, Send, Mail, Palette, CalendarCheck2, Truck, BarChart3, Users, Sparkles, Target, Settings, CheckCircle } from 'lucide-react';
const mdServices = [
  {
    icon: <Target className="h-8 w-8 text-primary" />,
    title: 'Estrategia y Conceptualización',
    description:
      'Definimos el objetivo, propuesta creativa, mensaje, audiencias y KPI del envío para asegurar impacto y respuesta.'
  },
  {
    icon: <Palette className="h-8 w-8 text-primary" />,
    title: 'Diseño y Dirección de Arte',
    description:
      'Diseño de catálogos, revistas, invitaciones, folletos, packaging y merchandising con identidad de marca.'
  },
  {
    icon: <Package className="h-8 w-8 text-primary" />,
    title: 'Producción e Impresión',
    description:
      'Gestión integral de artes finales, materiales, acabados premium y control de calidad con partners homologados.'
  },
  {
    icon: <Truck className="h-8 w-8 text-primary" />,
    title: 'Logística y Envío',
    description:
      'Segmentación de destinatarios, personalización por datos (VDP), manipulado, ensobrado y última milla.'
  },
  {
    icon: <Mail className="h-8 w-8 text-primary" />,
    title: 'Email Marketing Complementario',
    description:
      'Diseño y envío de emails personalizados que refuerzan el contacto físico, con seguimiento de aperturas y clics.'
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-primary" />,
    title: 'Medición y Optimización',
    description:
      'Tracking con QR/URLs únicos, test A/B de creatividades y reporting con métricas de respuesta y conversión.'
  }
];

const processSteps = [
  { number: '01', title: 'Brief y estrategia', icon: <Target className="h-6 w-6" />, desc: 'Objetivos, audiencias, propuesta de valor y KPI.' },
  { number: '02', title: 'Creatividad y diseño', icon: <Sparkles className="h-6 w-6" />, desc: 'Concepto creativo y piezas: catálogo, invitación, etc.' },
  { number: '03', title: 'Producción', icon: <Settings className="h-6 w-6" />, desc: 'Artes finales, materiales y acabados premium.' },
  { number: '04', title: 'Personalización y datos', icon: <Users className="h-6 w-6" />, desc: 'VDP, segmentación y tokens de personalización.' },
  { number: '05', title: 'Logística y envío', icon: <Send className="h-6 w-6" />, desc: 'Manipulado, ensobrado, distribución y última milla.' },
  { number: '06', title: 'Email complementario', icon: <Mail className="h-6 w-6" />, desc: 'Secuencia de emails personalizados post-envío.' },
  { number: '07', title: 'Medición y mejora', icon: <BarChart3 className="h-6 w-6" />, desc: 'Dashboards, KPIs y optimización continua.' }
];

const faqItems = [
  {
    question: '¿Para qué tipo de empresas es el Marketing Directo?',
    answer:
      'Especialmente demandado por grandes empresas y marcas con bases de datos amplias o envíos B2B cualificados. También funciona en invitaciones VIP y programas de fidelización.'
  },
  {
    question: '¿Gestionáis la impresión y los envíos? ',
    answer:
      'Sí. Nos encargamos de producción, manipulado y logística con partners verificados. Integramos personalización variable (VDP) y códigos QR/URLs únicas.'
  },
  {
    question: '¿Cómo se integra el email marketing?',
    answer:
      'Creamos una secuencia de emails complementaria al envío físico para reforzar el recuerdo, captar respuesta y medir aperturas, clics y conversiones.'
  },
  {
    question: '¿Pueden medir el ROI de la campaña?',
    answer:
      'Sí. Usamos landing pages, QR únicos, UTMs y dashboards para atribuir respuestas y calcular coste por respuesta/lead y ROI.'
  }
];

const MarketingDirecto: React.FC = () => {
  const { title, description, canonical, ogImage, structuredData } = useServiceSEO({
    serviceName: "Marketing Directo",
    serviceDescription: "Campañas de marketing directo para grandes empresas: concepto creativo, diseño, producción, logística y envío + email marketing personalizado.",
    canonical: "/es/servicios/marketing-directo",
    serviceType: "Marketing Directo",
    priceRange: "€€€",
    features: [
      "Estrategia y Conceptualización",
      "Diseño y Dirección de Arte",
      "Producción e Impresión",
      "Logística y Envío",
      "Email Marketing Complementario",
      "Medición y Optimización"
    ],
    aggregateRating: {
      ratingValue: "4.7",
      reviewCount: "24"
    }
  });

  return (
    <div className="min-h-screen bg-background">
      <Seo 
        title={title}
        description={description}
        canonical={canonical}
        ogImage={ogImage}
        structuredData={structuredData}
      />
      <Navigation />

      {/* Breadcrumb */}
      <div className="bg-muted/30 py-4 mt-20">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-muted-foreground">
            <Link to="/es" className="hover:text-primary">Inicio</Link>
            <span className="mx-2">/</span>
            <Link to="/es/servicios" className="hover:text-primary">Servicios</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">Marketing Directo</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">Servicios para Grandes Empresas</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Marketing Directo que <span className="text-gradient-primary">Llega, Conecta y Convierte</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Conceptualización, diseño, producción y envío de campañas físicas (catálogos, revistas, invitaciones,
                merchandising) con personalización por datos y una secuencia de email marketing para maximizar la respuesta.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="group" asChild>
                  <Link to="/es/agendar-reunion">
                    Solicitar Propuesta
                    <CalendarCheck2 className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="#proceso">Ver Proceso</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary/10">
                <div className="text-center">
                  <Send className="h-16 w-16 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Direct Mail + Email</h3>
                  <p className="text-muted-foreground">Alcance físico con refuerzo digital personalizado</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios incluidos */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Servicio Integral de Marketing Directo</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Gestionamos el ciclo completo: estrategia, creatividad, diseño, producción, logística, email y medición.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mdServices.map((service, i) => (
              <Card key={i} className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20 h-full">
                <CardHeader>
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
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

      {/* Proceso */}
      <section id="proceso" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Metodología de Trabajo</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Un proceso probado para ejecutar campañas a gran escala con máxima trazabilidad y control de calidad.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, idx) => (
              <Card key={idx} className="text-center group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <span className="text-2xl font-bold text-primary">{step.number}</span>
                  </div>
                  <div className="mb-2 text-primary group-hover:scale-110 transition-transform duration-300">{step.icon}</div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{step.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA intermedia */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="p-8 md:p-12 bg-gradient-to-br from-accent/10 to-primary/5">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold mb-2">¿Listo para tu próxima campaña?</h3>
                <p className="text-muted-foreground">Coordinamos todo: desde la idea hasta la entrega y el reporting.</p>
              </div>
              <div className="text-right">
                <Button size="lg" asChild>
                  <Link to="/es/solicitar-consulta">Solicitar Consulta</Link>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* FAQ + Contacto */}
      <FAQSection faqs={faqItems} />
      
      
      <Footer />
    </div>
  );
};

export default MarketingDirecto;
