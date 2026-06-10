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
          <div className="mt-4 rounded-lg border border-emerald-300/50 bg-emerald-50/60 dark:bg-emerald-950/20 p-4 text-sm text-emerald-900 dark:text-emerald-200 space-y-2">
            <p>
              <strong>🚀 Pipeline de traducción automatizado:</strong> al pulsar <em>Traducir</em> se ejecutan en cadena 4 fases sin tocar el repo:
            </p>
            <ol className="list-decimal list-inside space-y-1 pl-2">
              <li><strong>Metadatos SEO</strong> — title, description, H1, keywords (Lovable AI).</li>
              <li><strong>Cuerpo</strong> — si la página ES tiene <code>body_content_html</code> en DB, se traduce a HTML EN preservando la estructura.</li>
              <li><strong>Persistencia</strong> — se guarda la fila EN en <code>seo_pages</code> con <code>translation_of</code>, <code>body_content_html</code> y hash del original.</li>
              <li><strong>Render</strong> — <code>DynamicPageEN</code> sirve el cuerpo desde DB en <code>/en/...</code> sin necesidad de componentes <code>*EN.tsx</code>.</li>
            </ol>
            <p>
              <strong>📡 Discoverability dinámica:</strong> el sitemap bilingüe y <code>/llms.txt</code> se sirven desde edge functions que leen <code>seo_pages</code> en cada petición — no hace falta editar XML manualmente.
            </p>
            <p>
              <strong>⚠️ Páginas con cuerpo hardcodeado:</strong> servicios, soluciones y los blogs/casos legacy (componentes React con texto en el JSX) sólo traducen metadatos. Para traducir el cuerpo automáticamente, migra el contenido a <code>body_content_html</code> en DB.
            </p>
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
