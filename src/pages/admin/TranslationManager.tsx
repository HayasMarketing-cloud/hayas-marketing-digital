import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { TranslationStats } from '@/components/admin/translation/TranslationStats';
import { TranslationTable } from '@/components/admin/translation/TranslationTable';
import { SEONavigation } from '@/components/admin/seo/SEONavigation';
import { AdminBreadcrumbs } from '@/components/admin/AdminBreadcrumbs';
import { useTranslation } from '@/hooks/useTranslation';

const TranslationManager = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const { t } = useTranslation();
  const admin = t('admin.translationManager') as any;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <SEONavigation />
      
      <div className="container mx-auto px-4 py-8">
        <AdminBreadcrumbs currentPage="Traducciones" className="mb-6" />
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">{admin.title}</h1>
          <p className="text-muted-foreground">
            Gestiona las traducciones de contenido y monitorea el progreso. Detección automática de rutas.
          </p>
          <div className="mt-4 rounded-lg border border-amber-300/50 bg-amber-50/60 dark:bg-amber-950/20 p-4 text-sm text-amber-900 dark:text-amber-200">
            <strong>⚠️ Importante:</strong> esta herramienta traduce los <strong>metadatos SEO</strong> (title, description, H1, keywords) y crea la fila EN en BD.
            Las páginas de <strong>servicios y soluciones</strong> se renderizan en inglés automáticamente vía el hook <code>useLanguage</code>.
            Los <strong>posts de blog</strong> y <strong>casos de éxito</strong> requieren además un componente <code>*EN.tsx</code> dedicado; sin él, la URL <code>/en/...</code> mostrará el cuerpo en español.
          </div>
        </div>

        <div className="space-y-6">
          <TranslationStats onCategorySelect={setSelectedCategory} />
          <TranslationTable selectedCategory={selectedCategory} />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TranslationManager;
