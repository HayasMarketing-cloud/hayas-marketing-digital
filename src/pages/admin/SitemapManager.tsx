import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEONavigation from '@/components/seo-dashboard/SEONavigation';
import { SitemapTree } from '@/components/seo-dashboard/SitemapTree';
import { analyzeSitemap } from '@/utils/seo-analytics/sitemapAnalyzer';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { generateSitemapXML } from '@/utils/sitemap';

const SitemapManager: React.FC = () => {
  const analysis = analyzeSitemap();
  
  const handleDownload = () => {
    const xml = generateSitemapXML();
    const blob = new Blob([xml], { type: 'application/xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'sitemap.xml';
    a.click();
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <SEONavigation />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">Gestión de Sitemap</h1>
            <Button onClick={handleDownload}>
              <Download className="h-4 w-4 mr-2" />
              Descargar XML
            </Button>
          </div>
          <SitemapTree urls={analysis.urls} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SitemapManager;
