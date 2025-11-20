import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { TranslationStats } from '@/components/admin/translation/TranslationStats';
import { TranslationTable } from '@/components/admin/translation/TranslationTable';
import { SEONavigation } from '@/components/admin/seo/SEONavigation';

const TranslationManager = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <SEONavigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Panel de Traducción</h1>
          <p className="text-muted-foreground">
            Gestiona las traducciones de contenido y monitorea el progreso
          </p>
        </div>

        <TranslationStats onCategorySelect={setSelectedCategory} />
        
        <div className="mt-8">
          <TranslationTable selectedCategory={selectedCategory} />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TranslationManager;
