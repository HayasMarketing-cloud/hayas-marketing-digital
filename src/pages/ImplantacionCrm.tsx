import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Building2, Users, CheckCircle, ArrowRight
} from 'lucide-react';

const types = [
  {
    title: "Solución B2B con HubSpot",
    description: "Perfecta para empresas que venden a otras empresas con procesos de venta complejos.",
    features: [
      "Plataforma todo-en-uno para marketing, ventas y servicio",
      "Integración nativa con herramientas empresariales", 
      "Analytics avanzados y reporting completo",
      "Escalabilidad empresarial"
    ],
    idealFor: [
      "Consultorías y servicios profesionales",
      "Software y tecnología",
      "Proveedores industriales",
      "Agencias de marketing"
    ],
    icon: <Building2 className="w-8 h-8" />,
    variant: "primary"
  },
  {
    title: "Solución B2C con Go High Level",
    description: "Optimizada para empresas que venden directamente al consumidor final.",
    features: [
      "Automatización de marketing multicanal",
      "Landing pages y funnels integrados",
      "SMS, WhatsApp y email en una plataforma",
      "Calendario y reservas online"
    ],
    idealFor: [
      "E-commerce y retail",
      "Servicios locales (gym, belleza, salud)",
      "Educación y formación online",
      "Inmobiliarias y seguros"
    ],
    icon: <Users className="w-8 h-8" />,
    variant: "secondary"
  }
];

const ImplantacionCrm = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Breadcrumb */}
      <div className="bg-muted/30 py-4 mt-20">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-gray-600">
            <Link to="/" className="hover:text-primary">Inicio</Link>
            <span className="mx-2">/</span>
            <Link to="/servicios" className="hover:text-primary">Servicios</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Implantación CRM</span>
          </nav>
        </div>
      </div>

      {/* Hero Section Básico */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Implantación <span className="text-gradient-primary">CRM</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Implementamos y configuramos sistemas CRM profesionales para optimizar tu gestión comercial y automatizar tus procesos de ventas.
          </p>
          <Button asChild size="lg">
            <Link to="/contacto">
              Solicitar consulta gratuita
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Sección de Soluciones Especializadas */}
      <section id="tipos" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Soluciones <span className="text-gradient-primary">especializadas</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Elegimos la plataforma perfecta según tu modelo de negocio y objetivos específicos
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {types.map((type, index) => (
              <Card key={index} className="relative overflow-hidden hover:shadow-xl transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-3 rounded-lg ${type.variant === 'primary' ? 'bg-primary/10 text-primary' : 'bg-secondary/10 text-secondary'}`}>
                      {type.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl">{type.title}</CardTitle>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{type.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3">Características principales:</h4>
                      <ul className="space-y-2">
                        {type.features.map((feature, fIndex) => (
                          <li key={fIndex} className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Ideal para:</h4>
                      <div className="flex flex-wrap gap-2">
                        {type.idealFor.map((item, iIndex) => (
                          <Badge key={iIndex} variant="outline" className="text-xs">
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            ¿Listo para transformar tu gestión comercial?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Cuéntanos sobre tu negocio y te enviaremos una propuesta personalizada
          </p>
          <Button asChild size="lg">
            <Link to="/contacto">
              Solicitar consulta
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ImplantacionCrm;