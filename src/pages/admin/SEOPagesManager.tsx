import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEONavigation from '@/components/seo-dashboard/SEONavigation';
import { AdminBreadcrumbs } from '@/components/admin/AdminBreadcrumbs';
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
          <AdminBreadcrumbs currentPage="Páginas SEO" />
          <div>
            <h1 className="text-4xl font-bold mb-2">Editor de Páginas SEO</h1>
            <p className="text-muted-foreground">
              Gestiona los metadatos SEO de todas las páginas de la web
            </p>
          </div>

          <EnhancedSEOMetrics />

          <div className="grid lg:grid-cols-2 gap-6">
            <EnhancedSEOPageList onEditPage={setSelectedPage} />
            
            {selectedPage ? (
              <SEOEditor path={selectedPage} onClose={() => setSelectedPage(null)} />
            ) : (
              <div className="flex items-center justify-center h-[700px] border rounded-lg bg-muted/20">
                <div className="text-center max-w-md">
                  <p className="text-muted-foreground mb-4">
                    Selecciona una página para editar su SEO
                  </p>
                  <p className="text-sm text-muted-foreground">
                    💡 Haz clic en cualquier página de la lista para abrir el editor.
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
