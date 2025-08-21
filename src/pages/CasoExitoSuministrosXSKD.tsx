import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Seo from '@/components/Seo';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, ArrowLeft } from 'lucide-react';

const CasoExitoSuministrosXSKD = () => {
  return (
    <div className="min-h-screen bg-background">
      <Seo 
        title="Caso de Éxito: Suministros XS KD - Posicionamiento SEO Industrial"
        description="Descubre cómo ayudamos a Suministros XS KD a mejorar su posicionamiento SEO y presencia digital en el sector industrial retail."
        canonical="https://hayasmarketing.com/casos-exito/suministros-xs-kd"
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
                <Badge variant="secondary">Retail Industrial</Badge>
                <Badge variant="outline">SEO</Badge>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">Suministros XS KD</h1>
              <p className="text-xl text-muted-foreground">
                Posicionamiento SEO y presencia digital especializada
              </p>
            </div>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-4">Sobre la empresa</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Suministros XS KD es una empresa especializada en la distribución de productos 
                  industriales y suministros técnicos, que necesitaba mejorar su visibilidad 
                  online en un mercado altamente competitivo.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Resultados obtenidos</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Mejora del 150% en tráfico orgánico",
                    "Incremento del 80% en consultas comerciales", 
                    "Posicionamiento top 3 para keywords estratégicas",
                    "Mayor visibilidad en búsquedas industriales"
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

export default CasoExitoSuministrosXSKD;