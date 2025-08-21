import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Seo from '@/components/Seo';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, ArrowLeft } from 'lucide-react';

const CasoExitoLaBaneraKD = () => {
  return (
    <div className="min-h-screen bg-background">
      <Seo 
        title="Caso de Éxito: La Bañera KD - Diseño Web y SEO para Medios Audiovisuales"
        description="Conoce cómo transformamos la presencia digital de La Bañera KD con un diseño web moderno y estrategia SEO efectiva."
        canonical="https://hayasmarketing.com/casos-exito/la-banera-kd"
      />
      <Navigation />
      
      <section className="py-16 bg-gradient-to-r from-primary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Button variant="ghost" asChild className="mb-8">
              <Link to="/casos-exito" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Volver a Casos de Éxito
              </Link>
            </Button>
            
            <div className="text-center mb-8">
              <div className="flex justify-center gap-2 mb-4">
                <Badge variant="secondary">Medios Audiovisuales</Badge>
                <Badge variant="outline">Diseño Web</Badge>
                <Badge variant="outline">SEO</Badge>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">La Bañera KD</h1>
              <p className="text-xl text-muted-foreground">
                Diseño web y posicionamiento SEO para productora audiovisual
              </p>
            </div>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-4">Sobre la empresa</h2>
                <p className="text-muted-foreground leading-relaxed">
                  La Bañera KD es una productora audiovisual especializada en contenido 
                  creativo y publicitario. Necesitaba una presencia digital que reflejara 
                  su calidad creativa y atrajera nuevos clientes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Resultados obtenidos</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Rediseño completo de la identidad visual",
                    "Mejora del 200% en tiempo de permanencia",
                    "Incremento del 120% en consultas de presupuesto", 
                    "Posicionamiento top 5 en búsquedas locales"
                  ].map((resultado, index) => (
                    <div key={index} className="flex items-center gap-3 p-4 bg-muted/30 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span className="font-medium">{resultado}</span>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CasoExitoLaBaneraKD;