import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { TranslationStats } from '@/components/admin/translation/TranslationStats';
import { TranslationTable } from '@/components/admin/translation/TranslationTable';
import { RouteInconsistenciesPanel } from '@/components/admin/translation/RouteInconsistenciesPanel';
import { SEONavigation } from '@/components/admin/seo/SEONavigation';
import { AdminBreadcrumbs } from '@/components/admin/AdminBreadcrumbs';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
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
            {admin.subtitle}
          </p>
        </div>

        <Tabs defaultValue="translations" className="space-y-6">
          <TabsList>
            <TabsTrigger value="translations">{admin.tabs.translations}</TabsTrigger>
            <TabsTrigger value="inconsistencies">{admin.tabs.inconsistencies}</TabsTrigger>
          </TabsList>

          <TabsContent value="translations" className="space-y-6">
            <TranslationStats onCategorySelect={setSelectedCategory} />
            <TranslationTable selectedCategory={selectedCategory} />
          </TabsContent>

          <TabsContent value="inconsistencies">
            <RouteInconsistenciesPanel />
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
};

export default TranslationManager;
