import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEONavigation from '@/components/seo-dashboard/SEONavigation';
import { AdminBreadcrumbs } from '@/components/admin/AdminBreadcrumbs';
import { SitemapTree } from '@/components/seo-dashboard/SitemapTree';
import { analyzeSitemap } from '@/utils/seo-analytics/sitemapAnalyzer';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { generateSitemapForLanguage, generateSitemapIndex } from '@/utils/sitemap-bilingual';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const SitemapManager: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<'es' | 'en' | 'index'>('index');
  const analysis = analyzeSitemap();
  
  const handleDownload = () => {
    let xml: string;
    let filename: string;
    
    if (selectedLanguage === 'index') {
      xml = generateSitemapIndex();
      filename = 'sitemap-index.xml';
    } else {
      xml = generateSitemapForLanguage(selectedLanguage);
      filename = `sitemap-${selectedLanguage}.xml`;
    }
    
    const blob = new Blob([xml], { type: 'application/xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <SEONavigation />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto space-y-6">
          <AdminBreadcrumbs currentPage="Sitemap Bilingüe" />
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold">Gestión de Sitemap Bilingüe</h1>
              <p className="text-muted-foreground mt-2">Genera sitemaps separados por idioma o el sitemap index</p>
            </div>
            <div className="flex gap-3">
              <Select value={selectedLanguage} onValueChange={(value: any) => setSelectedLanguage(value)}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Seleccionar sitemap" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="index">Sitemap Index</SelectItem>
                  <SelectItem value="es">🇪🇸 Sitemap ES</SelectItem>
                  <SelectItem value="en">🇬🇧 Sitemap EN</SelectItem>
                </SelectContent>
              </Select>
              <Button onClick={handleDownload}>
                <Download className="h-4 w-4 mr-2" />
                Descargar XML
              </Button>
            </div>
          </div>
          <SitemapTree urls={analysis.urls} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SitemapManager;
