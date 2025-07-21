import React from 'react';
import { Star, ExternalLink } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ReviewsSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Descubre las experiencias reales de empresas que han transformado su marketing con nosotros
          </p>
          
          {/* Rating preview */}
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-sm font-medium">5.0 en Google</span>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 shadow-lg border-primary/10">
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold mb-4">
                Reseñas verificadas de Google Maps
              </h3>
              
              {/* Placeholder for Google Maps widget */}
              <div className="bg-muted/50 rounded-lg p-12 border-2 border-dashed border-muted-foreground/20">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Star className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-center">
                    <p className="text-muted-foreground mb-2">
                      Widget de Google Maps se insertará aquí
                    </p>
                    <p className="text-sm text-muted-foreground/70">
                      Aquí aparecerán las reseñas reales de Google Maps de forma automática
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center pt-6 border-t">
              <Button asChild variant="outline" className="gap-2">
                <a 
                  href="https://g.page/r/CZUFs5nSlx_oEAE/review" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Star className="w-4 h-4" />
                  Deja tu reseña
                </a>
              </Button>
              
              <Button asChild variant="ghost" className="gap-2">
                <a 
                  href="https://maps.google.com/maps?q=hayas+marketing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-4 h-4" />
                  Ver todas las reseñas
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;