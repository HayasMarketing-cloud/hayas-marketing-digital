import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEONavigation from '@/components/seo-dashboard/SEONavigation';
import { EnhancedSEOMetrics } from '@/components/admin/seo/EnhancedSEOMetrics';
import { EnhancedSEOPageList } from '@/components/admin/seo/EnhancedSEOPageList';
import { SEOEditor } from '@/components/admin/seo/SEOEditor';

const SEOPagesManager: React.FC = () => {
  const [selectedPage, setSelectedPage] = useState<string | null>(null);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <SEONavigation />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto space-y-6">
          <div>
            <h1 className="text-4xl font-bold mb-2">Gestión de Páginas SEO</h1>
            <p className="text-muted-foreground">
              Sistema automático de SEO con detección de rutas y auto-generación
            </p>
          </div>

          {/* Métricas mejoradas */}
          <EnhancedSEOMetrics />

          {/* Grid con lista mejorada y editor */}
          <div className="grid lg:grid-cols-2 gap-6">
            <EnhancedSEOPageList onEditPage={setSelectedPage} />
            
            {selectedPage ? (
              <SEOEditor path={selectedPage} onClose={() => setSelectedPage(null)} />
            ) : (
              <div className="flex items-center justify-center h-[700px] border rounded-lg bg-muted/20">
                <div className="text-center max-w-md">
                  <p className="text-muted-foreground mb-4">
                    Selecciona una ruta para optimizar su SEO
                  </p>
                  <p className="text-sm text-muted-foreground">
                    💡 Las rutas con estado "Auto-generado" usan SEO básico. 
                    Edítalas para optimizar títulos, descripciones y keywords.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SEOPagesManager;
