import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Seo from '@/components/Seo';
import { CheckCircle } from 'lucide-react';

const CasoExitoBuhobike: React.FC = () => {
  const pageTitle = 'Caso de Éxito Buhobike | Estrategia, Analítica y Mercado';
  const pageDescription = 'Consultoría estratégica, analítica avanzada e inteligencia de mercado para Buhobike, ecommerce líder en ciclismo.';
  const canonical = '/casos-exito/buhobike';

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Caso de Éxito — Buhobike: Pedaleando hacia el éxito digital',
    about: 'Estrategia digital, analítica avanzada e inteligencia de mercado para ecommerce de ciclismo',
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
              <span className="text-foreground">Buhobike</span>
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
        <header className="py-14 md:py-20 bg-gradient-to-br from-hayas-50 to-turquesa-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <Badge variant="secondary" className="mb-3">Caso de Éxito</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Caso de Éxito — Buhobike: Pedaleando hacia el éxito digital
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground">
              Consultoría estratégica, analítica avanzada e inteligencia de mercado para un ecommerce líder en ciclismo
            </h2>
          </div>
        </header>

        {/* Sobre la empresa */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <h3 className="text-2xl font-bold mb-3">Sobre Buhobike</h3>
                <p className="text-muted-foreground">
                  “Buhobike es una tienda online y física especializada en bicicletas, equipamiento y accesorios para ciclistas. Ofrece una amplia gama de productos de primeras marcas y un servicio al cliente experto que les ha convertido en un referente para los amantes del ciclismo.”
                </p>
              </div>
              <div className="rounded-xl overflow-hidden shadow">
                <img
                  src="https://images.unsplash.com/photo-1511735111819-9a3f7709049c?q=80&w=2070&auto=format&fit=crop"
                  alt="Buhobike — ecommerce de ciclismo"
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
              “Querían optimizar su estrategia digital para aumentar el alcance, mejorar la captación de clientes y potenciar las ventas online en un sector muy competitivo. Además, necesitaban un sistema avanzado de medición para conocer en detalle el comportamiento de los usuarios en su ecommerce y un análisis profundo de su posición en el mercado.”
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
                  <strong>Consultoría en Estrategia Digital:</strong> Análisis de la situación actual del ecommerce, identificación de oportunidades de mejora y definición de un plan estratégico para reforzar la presencia online.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 mt-1 text-primary" />
                <p className="text-muted-foreground">
                  <strong>Optimización del funnel de ventas:</strong> Revisión y propuestas para mejorar la experiencia de usuario, incrementar la conversión y fidelizar clientes.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 mt-1 text-primary" />
                <p className="text-muted-foreground">
                  <strong>Sistema de Analítica Digital y Data Mining:</strong> Implementación de un sistema avanzado de medición que registra y analiza todos los tipos de eventos de la tienda online (visitas, búsquedas, clics en productos, añadidos al carrito, compras, abandonos de carrito, interacciones con banners y más), permitiendo tomar decisiones basadas en datos reales.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 mt-1 text-primary" />
                <p className="text-muted-foreground">
                  <strong>Informe Sectorial de Tendencias y Posicionamiento:</strong> Análisis detallado del mercado de venta de bicicletas, identificando tendencias clave, competidores y oportunidades estratégicas para reforzar el posicionamiento de Buhobike.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 mt-1 text-primary" />
                <p className="text-muted-foreground">
                  <strong>Recomendaciones de marketing digital:</strong> Orientación en campañas de captación, optimización SEO y uso de canales adecuados para conectar con su público objetivo.
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
              “En ecommerce especializados, la combinación de una estrategia digital sólida, analítica avanzada e inteligencia de mercado permite tomar decisiones más precisas, optimizar la experiencia de compra y reforzar la posición competitiva.”
            </p>
          </div>
        </section>

        {/* CTA Cliente */}
        <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h3 className="text-3xl font-bold mb-4">Visita Buhobike</h3>
            <p className="opacity-90 mb-8">Descubre su catálogo, novedades y servicios para ciclistas.</p>
            <div className="flex justify-center">
              <Button asChild size="lg" variant="secondary">
                <a href="https://buhobike.com/" target="_blank" rel="noopener noreferrer">Visita Buhobike</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CasoExitoBuhobike;
