import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Seo from '@/components/Seo';
import { CheckCircle } from 'lucide-react';

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

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Seo title={pageTitle} description={pageDescription} canonical={canonical} structuredData={structuredData} />
      <Navigation />

      <main className="flex-grow">
        {/* Breadcrumbs */}
        <section className="py-4 bg-muted/30 border-b">
          <div className="container mx-auto px-4">
            <div className="text-sm">
              <Link to="/" className="text-muted-foreground hover:text-foreground">Inicio</Link>
              <span className="mx-2">/</span>
              <Link to="/casos-exito" className="text-muted-foreground hover:text-foreground">Casos de Éxito</Link>
              <span className="mx-2">/</span>
              <span className="text-foreground">Hikvision</span>
            </div>
          </div>
        </section>

        {/* Header Navigation */}
        <section className="py-6 bg-muted/30">
          <div className="container mx-auto px-4">
            <Link to="/casos-exito" className="inline-flex items-center text-primary hover:underline">
              ← Volver a Casos de Éxito
            </Link>
          </div>
        </section>

        {/* Hero */}
        <header className="py-14 md:py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="container mx-auto px-4 max-w-5xl">
            <Badge variant="secondary" className="mb-3">Caso de Éxito</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Caso de Éxito — Hikvision: Captando asistentes para un evento de Smart Cities
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground">
              Landing page optimizada para inscripciones en un evento tecnológico
            </h2>
          </div>
        </header>

        {/* Sobre la empresa */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <h3 className="text-2xl font-bold mb-3">Sobre Hikvision</h3>
                <p className="text-muted-foreground">
                  “Hikvision es un líder mundial en soluciones y productos de seguridad, inteligencia artificial y tecnologías de la información, con presencia global en múltiples sectores y un compromiso constante con la innovación.”
                </p>
              </div>
              <div className="rounded-xl overflow-hidden shadow">
                <img
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2069&auto=format&fit=crop"
                  alt="Hikvision — tecnología de seguridad e IA"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* El reto */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 max-w-5xl">
            <h3 className="text-2xl font-bold mb-4">El Reto</h3>
            <p className="text-muted-foreground">
              “Necesitaban una landing page específica para la inscripción a un evento de Smart Cities, capaz de comunicar el valor de la propuesta, transmitir profesionalidad y facilitar el registro de participantes de forma ágil.”
            </p>
          </div>
        </section>

        {/* Solución aplicada */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-5xl">
            <h3 className="text-2xl font-bold mb-6">Solución aplicada</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 mt-1 text-primary" />
                <p className="text-muted-foreground">
                  <strong>Diseño y Desarrollo de Landing Page:</strong> Página clara, responsive y alineada con su identidad, optimizada para la conversión y la captación de leads.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 mt-1 text-primary" />
                <p className="text-muted-foreground">
                  <strong>Copy y Mensajería Persuasiva:</strong> Textos centrados en beneficios del evento para profesionales y empresas del sector.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 mt-1 text-primary" />
                <p className="text-muted-foreground">
                  <strong>Formulario de Registro Optimizado:</strong> Campos clave y experiencia fluida para maximizar altas.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 mt-1 text-primary" />
                <p className="text-muted-foreground">
                  <strong>Elementos Visuales de Impacto:</strong> Imágenes temáticas de Smart Cities para reforzar el mensaje y el interés inmediato.
                </p>
              </li>
            </ul>
          </div>
        </section>

        {/* Lo que aprendimos */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <h3 className="text-2xl font-bold mb-4">Lo que aprendimos</h3>
            <p className="text-muted-foreground">
              “En eventos B2B, una landing page optimizada puede marcar la diferencia en la conversión de visitantes en participantes cuando diseño y mensaje se alinean con el público objetivo.”
            </p>
          </div>
        </section>

        {/* CTA Cliente */}
        <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h3 className="text-3xl font-bold mb-4">Visita Hikvision</h3>
            <p className="opacity-90 mb-8">Conoce sus soluciones tecnológicas e iniciativas en Smart Cities.</p>
            <div className="flex justify-center">
              <Button asChild size="lg" variant="secondary">
                <a href="https://www.hikvision.com/es/" target="_blank" rel="noopener noreferrer">Visita Hikvision</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CasoExitoHikvision;
