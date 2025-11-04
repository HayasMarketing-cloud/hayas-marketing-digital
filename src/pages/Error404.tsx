import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Home, FileText, Mail, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Error404: React.FC = () => {
  useEffect(() => {
    console.error('[404 ERROR] Hard 404 - Content not found:', window.location.pathname);
  }, []);

  return (
    <>
      <Helmet>
        <title>404 - Página no encontrada | Hayas Marketing</title>
        <meta name="description" content="La página que buscas no existe o ha sido movida. Descubre nuestros servicios de marketing digital." />
        <meta name="robots" content="noindex, follow" />
        <meta name="googlebot" content="noindex, follow" />
        <link rel="canonical" href="https://hayasmarketing.com/es/404" />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-background">
        <Navigation />
        
        <main className="flex-1 flex items-center justify-center px-4 py-16">
          <div className="max-w-2xl w-full text-center space-y-8">
            {/* Código 404 */}
            <h1 className="text-9xl font-bold text-gradient-primary">
              404
            </h1>
            
            {/* Título */}
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Página no encontrada
            </h2>
            
            {/* Descripción */}
            <p className="text-lg text-muted-foreground">
              Lo sentimos, la página que buscas no existe o ha sido movida. 
              Te sugerimos volver al inicio o explorar nuestros servicios.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="gap-2">
                <Link to="/es">
                  <Home className="h-5 w-5" />
                  Ir al inicio
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2">
                <Link to="/es/contacto">
                  <Mail className="h-5 w-5" />
                  Contactar
                </Link>
              </Button>
            </div>
            
            {/* Enlaces útiles */}
            <div className="border-t border-border pt-8">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Enlaces útiles</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Link 
                  to="/es/servicios" 
                  className="flex items-center gap-2 p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <FileText className="h-5 w-5 text-primary" />
                  <span className="text-foreground">Servicios</span>
                </Link>
                <Link 
                  to="/es/blog" 
                  className="flex items-center gap-2 p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <FileText className="h-5 w-5 text-primary" />
                  <span className="text-foreground">Blog</span>
                </Link>
                <Link 
                  to="/es/casos-exito" 
                  className="flex items-center gap-2 p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <FileText className="h-5 w-5 text-primary" />
                  <span className="text-foreground">Casos de Éxito</span>
                </Link>
              </div>
            </div>
            
            {/* Volver atrás */}
            <div className="mt-8">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => window.history.back()}
                className="gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                Volver atrás
              </Button>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Error404;
