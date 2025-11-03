import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEONavigation from '@/components/seo-dashboard/SEONavigation';
import { SEOMetrics } from '@/components/admin/seo/SEOMetrics';
import { SEOPageList } from '@/components/admin/seo/SEOPageList';
import { SEOEditor } from '@/components/admin/seo/SEOEditor';

const SEOPagesManager: React.FC = () => {
  const [selectedPage, setSelectedPage] = useState<string | null>(null);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <SEONavigation />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto space-y-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Gestión de Páginas SEO</h1>
            <p className="text-muted-foreground">
              Edita dinámicamente los meta tags, títulos y estructura SEO de cada página
            </p>
          </div>

          {/* Métricas globales */}
          <SEOMetrics />

          {/* Grid con lista y editor */}
          <div className="grid lg:grid-cols-2 gap-6">
            <SEOPageList onEditPage={setSelectedPage} />
            
            {selectedPage ? (
              <SEOEditor path={selectedPage} onClose={() => setSelectedPage(null)} />
            ) : (
              <div className="flex items-center justify-center h-[600px] border rounded-lg bg-muted/20">
                <p className="text-muted-foreground">
                  Selecciona una página para editar sus datos SEO
                </p>
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
