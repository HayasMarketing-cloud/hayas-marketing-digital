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
          <div className="mt-4 rounded-lg border border-amber-300/50 bg-amber-50/60 dark:bg-amber-950/20 p-4 text-sm text-amber-900 dark:text-amber-200 space-y-2">
            <p>
              <strong>⚠️ Cómo funciona la traducción:</strong> esta herramienta traduce los <strong>metadatos SEO</strong> (title, description, H1, keywords) y crea/actualiza la fila EN en la base de datos (<code>seo_pages</code> con <code>in_language='en-US'</code> y <code>translation_of</code> apuntando al ES).
            </p>
            <p>
              <strong>✅ Traducción automática del cuerpo:</strong> las páginas de <strong>servicios, soluciones y activaciones</strong> usan el hook <code>useLanguage</code> y se renderizan en inglés de forma automática al traducir los metadatos.
            </p>
            <p>
              <strong>🛠️ Traducción manual del cuerpo:</strong> los <strong>posts de blog</strong> y <strong>casos de éxito</strong> requieren además un componente <code>*EN.tsx</code> dedicado, registrado en <code>src/utils/lazyImports.ts</code>, una ruta explícita en <code>src/App.tsx</code> y el mapeo recíproco en <code>src/hooks/useLanguageNavigation.ts</code>. Sin estos pasos, <code>/en/...</code> caerá en <code>DynamicPageEN</code> y mostrará el cuerpo en español (o "Coming soon" si no hay fallback).
            </p>
            <p>
              <strong>🔔 Avisos:</strong> al traducir un blog o caso de éxito verás un toast de advertencia recordando que solo se han traducido los metadatos. Recuerda también añadir las URLs a <code>public/sitemap-en.xml</code> y <code>public/sitemap-es.xml</code> con sus <code>hreflang</code> recíprocos.
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
