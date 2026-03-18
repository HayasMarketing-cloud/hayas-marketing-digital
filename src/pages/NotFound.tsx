import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Home, Search, Mail, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    
    // Set HTTP status 404 for better SEO (client-side hint)
    if (typeof window !== 'undefined') {
      window.history.replaceState({}, '', location.pathname);
    }
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex, follow" />
        <meta name="googlebot" content="noindex, follow" />
        <title>Página no encontrada | Hayas Marketing</title>
      </Helmet>
      
      <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          {/* Error Code con gradiente corporativo */}
          <div className="text-gradient-primary text-9xl font-bold mb-6">
            404
          </div>
          
          {/* Título y descripción */}
          <h1 className="text-4xl font-bold mb-4 text-foreground">
            Página no encontrada
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Lo sentimos, la página que buscas no existe o ha sido movida. 
            Te ayudamos a encontrar lo que necesitas.
          </p>
          
          {/* CTAs principales */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button asChild size="lg" className="gap-2">
              <Link to="/es">
                <Home className="h-5 w-5" />
                Ir al Inicio
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2">
              <Link to="/es/contacto">
                <Mail className="h-5 w-5" />
                Contactar
              </Link>
            </Button>
          </div>
          
          {/* Enlaces rápidos */}
          <div className="border-t border-border pt-8">
            <h2 className="text-sm font-semibold text-muted-foreground mb-4 uppercase tracking-wide">
              Enlaces útiles
            </h2>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link to="/es/servicios" className="text-primary hover:underline">
                Servicios
              </Link>
              <Link to="/es/activaciones/visibility" className="text-primary hover:underline">
                Activaciones
              </Link>
              <Link to="/es/casos-exito" className="text-primary hover:underline">
                Casos de Éxito
              </Link>
              <Link to="/es/blog" className="text-primary hover:underline">
                Blog
              </Link>
              <Link to="/es/nosotros" className="text-primary hover:underline">
                Nosotros
              </Link>
            </div>
          </div>
          
          {/* Volver atrás */}
          <div className="mt-8">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => window.history.back()}
              className="gap-2 text-muted-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Volver atrás
            </Button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default NotFound;
