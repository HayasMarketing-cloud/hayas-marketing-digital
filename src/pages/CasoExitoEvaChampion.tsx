import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Seo from '@/components/Seo';
import { CheckCircle } from 'lucide-react';

const CasoExitoEvaChampion: React.FC = () => {
  const pageTitle = 'Caso de Éxito Eva Champion | Marca personal y LinkedIn';
  const pageDescription = 'Marca personal y estrategia en LinkedIn para visibilidad internacional de una traductora profesional.';
  const canonical = '/casos-exito/eva-champion';

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Caso de Éxito — Eva Champion: Marca personal y visibilidad internacional',
    about: 'Marca personal, posicionamiento en LinkedIn y plan de contenidos internacional',
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
              <span className="text-foreground">Eva Champion</span>
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
              Caso de Éxito — Eva Champion: Marca personal y visibilidad internacional para una traductora profesional
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground">
              Potenciando su presencia en LinkedIn con estrategia y contenido de valor
            </h2>
          </div>
        </header>

        {/* Sobre la empresa */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <h3 className="text-2xl font-bold mb-3">Sobre Eva Champion</h3>
                <p className="text-muted-foreground">
                  “Eva Champion es una traductora profesional especializada en traducciones del francés al español, inglés y alemán. Con amplia experiencia y un enfoque de calidad y precisión, trabaja con clientes internacionales que requieren un alto nivel de especialización lingüística y cultural.”
                </p>
              </div>
              <div className="rounded-xl overflow-hidden shadow">
                <img
                  src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=2069&auto=format&fit=crop"
                  alt="Eva Champion — traductora profesional"
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
              “Eva quería consolidar su marca personal y aumentar su visibilidad en LinkedIn para atraer clientes de diferentes mercados internacionales. Buscaba una estrategia que no solo potenciara su imagen de marca, sino que también mostrara su experiencia y especialización.”
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
                  <strong>Construcción de Imagen de Marca:</strong> Definición de identidad visual y verbal para transmitir profesionalidad, experiencia y confianza, adaptada al entorno de LinkedIn y a su público objetivo.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 mt-1 text-primary" />
                <p className="text-muted-foreground">
                  <strong>Posicionamiento de Marca Personal:</strong> Optimización del perfil de LinkedIn para resaltar especialidades, proyectos y logros, mejorando la percepción profesional y el atractivo para potenciales clientes internacionales.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 mt-1 text-primary" />
                <p className="text-muted-foreground">
                  <strong>Estrategia y Plan de Contenidos:</strong> Plan editorial específico para LinkedIn con publicaciones temáticas, casos de éxito, consejos de traducción y muestras de trabajo, elaborados en inglés para maximizar el alcance global.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 mt-1 text-primary" />
                <p className="text-muted-foreground">
                  <strong>Objetivo empresarial concreto:</strong> Contenidos diseñados para impactar en una audiencia empresarial con necesidades recurrentes de traducción especializada, conectando con decisores clave.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 mt-1 text-primary" />
                <p className="text-muted-foreground">
                  <strong>Enfoque internacional:</strong> Orientación del contenido y el networking a audiencias de habla española, inglesa, francesa y alemana para ampliar oportunidades de colaboración.
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
              “En el sector de los servicios profesionales, una marca personal bien trabajada y una estrategia de contenidos coherente —adaptada al idioma y al público objetivo— pueden posicionar a un profesional como referente en su especialidad y abrir oportunidades internacionales.”
            </p>
          </div>
        </section>

        {/* CTA Cliente */}
        <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h3 className="text-3xl font-bold mb-4">Visita el perfil de Eva Champion</h3>
            <p className="opacity-90 mb-8">Conoce su experiencia y especialización en proyectos internacionales.</p>
            <div className="flex justify-center">
              <Button asChild size="lg" variant="secondary">
                <a href="https://www.linkedin.com/in/champion-translation/" target="_blank" rel="noopener noreferrer">Visita el perfil de Eva Champion</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CasoExitoEvaChampion;
