import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from '@/components/ui/breadcrumb';
import Seo from '@/components/Seo';
import { CheckCircle, ExternalLink, Globe, Target, Users, Settings } from 'lucide-react';

const CasoExitoHikvision: React.FC = () => {
  const pageTitle = 'Caso de Éxito Hikvision | Landing B2B para Smart Cities';
  const pageDescription = 'Landing page optimizada para inscripciones en evento de Smart Cities: diseño, copy y formulario de registro.';
  const canonical = '/casos-exito/hikvision';

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Caso de Éxito — Hikvision: Captando asistentes para un evento de Smart Cities',
    about: 'Landing page B2B optimizada para registro de participantes en evento tecnológico',
    author: { '@type': 'Organization', name: 'Hayas Marketing' },
    url: canonical,
  };

  const resultados = [
    'Landing page optimizada para conversión',
    'Incremento significativo en las inscripciones al evento',
    'Mejora en la calidad de los leads generados',
    'Comunicación efectiva del valor del evento'
  ];

  return (
    <div className="min-h-screen bg-background">
      <Seo title={pageTitle} description={pageDescription} canonical={canonical} structuredData={structuredData} />
      <Navigation />

      <main>
        {/* Breadcrumbs */}
        <section className="py-4 bg-muted/30 border-b">
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
                  <BreadcrumbLink asChild>
                    <Link to="/casos-exito">Casos de Éxito</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Hikvision</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </section>

        {/* Hero */}
        <header className="py-14 md:py-20 bg-gradient-to-br from-hayas-50 to-turquesa-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex gap-2 mb-6">
                  <Badge variant="secondary">Smart Cities</Badge>
                  <Badge variant="outline">Landing Page</Badge>
                  <Badge variant="outline">B2B</Badge>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold mb-6">Hikvision</h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Captando asistentes para un evento de Smart Cities con landing page 
                  optimizada para inscripciones en evento tecnológico
                </p>
                <div className="flex gap-4">
                  <Button asChild>
                    <a 
                      href="https://www.hikvision.com/es/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="gap-2"
                    >
                      Visitar Web
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2069&auto=format&fit=crop" 
                  alt="Hikvision - Líder mundial en soluciones de seguridad e inteligencia artificial"
                  className="relative z-10 w-full h-[400px] md:h-[400px] object-cover rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            
            {/* Sobre Hikvision */}
            <section className="mb-16">
              <h2 className="text-2xl font-semibold mb-4">Sobre Hikvision</h2>
              <p className="text-muted-foreground leading-relaxed">
                Hikvision es un líder mundial en soluciones y productos de seguridad, inteligencia artificial y 
                tecnologías de la información, con presencia global en múltiples sectores y un compromiso constante 
                con la innovación en el ámbito de las Smart Cities.
              </p>
            </section>

            {/* El Reto */}
            <section className="mb-16">
              <h2 className="text-2xl font-semibold mb-4">El Reto</h2>
              <p className="text-muted-foreground leading-relaxed">
                Necesitaban una landing page específica para la inscripción a un evento de Smart Cities, capaz de 
                comunicar el valor de la propuesta, transmitir profesionalidad y facilitar el registro de participantes 
                de forma ágil, dirigida a profesionales y empresas del sector tecnológico.
              </p>
            </section>

            {/* Solución aplicada */}
            <section className="mb-16">
              <h2 className="text-2xl font-semibold mb-6">Solución aplicada</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="h-full">
                  <CardHeader>
                    <div className="w-10 h-10 rounded-md bg-primary/10 text-primary flex items-center justify-center mb-3">
                      <Globe className="w-5 h-5" />
                    </div>
                    <CardTitle className="text-lg">Diseño y Desarrollo de Landing</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Página clara, responsive y alineada con su identidad, optimizada para la conversión y la captación de leads.</p>
                  </CardContent>
                </Card>
                
                <Card className="h-full">
                  <CardHeader>
                    <div className="w-10 h-10 rounded-md bg-primary/10 text-primary flex items-center justify-center mb-3">
                      <Target className="w-5 h-5" />
                    </div>
                    <CardTitle className="text-lg">Copy y Mensajería Persuasiva</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Textos centrados en beneficios del evento para profesionales y empresas del sector Smart Cities.</p>
                  </CardContent>
                </Card>
                
                <Card className="h-full">
                  <CardHeader>
                    <div className="w-10 h-10 rounded-md bg-primary/10 text-primary flex items-center justify-center mb-3">
                      <Users className="w-5 h-5" />
                    </div>
                    <CardTitle className="text-lg">Formulario de Registro Optimizado</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Campos clave y experiencia fluida para maximizar altas y facilitar el proceso de inscripción.</p>
                  </CardContent>
                </Card>
                
                <Card className="h-full">
                  <CardHeader>
                    <div className="w-10 h-10 rounded-md bg-primary/10 text-primary flex items-center justify-center mb-3">
                      <Settings className="w-5 h-5" />
                    </div>
                    <CardTitle className="text-lg">Elementos Visuales de Impacto</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Imágenes temáticas de Smart Cities para reforzar el mensaje y el interés inmediato.</p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Resultados obtenidos */}
            <section className="mb-16">
              <h2 className="text-2xl font-semibold mb-4">Resultados obtenidos</h2>
              <div className="grid gap-4">
                {resultados.map((resultado, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-muted/30 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="font-medium">{resultado}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Lo que aprendimos */}
            <section className="mb-16">
              <h2 className="text-2xl font-semibold mb-4">Lo que aprendimos</h2>
              <p className="text-muted-foreground leading-relaxed">
                En eventos B2B, una landing page optimizada puede marcar la diferencia en la conversión de visitantes 
                en participantes cuando diseño y mensaje se alinean perfectamente con el público objetivo y sus 
                necesidades específicas.
              </p>
            </section>

            {/* CTA */}
            <section className="text-center py-12 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">¿Necesitas una landing que convierta?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Creamos landing pages optimizadas que maximizan las conversiones y captan leads cualificados 
                para tus eventos y campañas.
              </p>
              <Button asChild size="lg">
                <Link to="/agendar-reunion">Crear mi landing page</Link>
              </Button>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CasoExitoHikvision;