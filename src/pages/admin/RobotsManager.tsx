import React, { useMemo } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEONavigation from '@/components/seo-dashboard/SEONavigation';
import { AdminBreadcrumbs } from '@/components/admin/AdminBreadcrumbs';
import { RobotsViewer } from '@/components/seo-dashboard/RobotsViewer';
import { parseRobotsTxt } from '@/utils/seo-analytics/robotsTxtParser';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const RobotsManager: React.FC = () => {
  // Contenido actual del robots.txt de producción
  const robotsContent = useMemo(() => {
    return `# Robots.txt para Hayas Marketing - Producción

User-agent: *
Allow: /

# Sitemap
Sitemap: https://hayasmarketing.com/sitemap.xml

# Directrices específicas
Crawl-delay: 1

# Bloquear archivos innecesarios
Disallow: /tmp/
Disallow: /*.json$
Disallow: /api/
Disallow: /*?*utm_*
Disallow: /*?*fbclid*
Disallow: /*?*hsLang*
Disallow: /*?*cta_guid*

# Bloquear páginas de admin y dashboard
Disallow: /admin/
Disallow: /admin/seo/
Disallow: /admin/seo/sitemap

# Bloquear páginas de conversión/gracias (no indexable)
Disallow: /es/gracias
Disallow: /es/gracias_por_agendar_reunion
Disallow: /es/gracias_por_agendar_reunión

# Bloquear contenido eliminado
Disallow: /es/contenido-eliminado`;
  }, []);

  const analysis = useMemo(() => parseRobotsTxt(robotsContent), [robotsContent]);

  const handleDownload = () => {
    const blob = new Blob([robotsContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'robots.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <SEONavigation />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto space-y-6">
          <AdminBreadcrumbs currentPage="Robots.txt" />
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold">Gestión de Robots.txt</h1>
              <p className="text-muted-foreground mt-2">
                Control de acceso de crawlers y directivas de rastreo
              </p>
            </div>
            <Button onClick={handleDownload}>
              <Download className="h-4 w-4 mr-2" />
              Descargar TXT
            </Button>
          </div>

          {/* Documentación */}
          <Card>
            <CardHeader>
              <CardTitle>¿Qué es robots.txt?</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none dark:prose-invert">
              <p className="text-muted-foreground">
                El archivo <code className="text-foreground bg-muted px-1 py-0.5 rounded">robots.txt</code> es una directiva que indica a los crawlers de buscadores 
                (Google, Bing, etc.) qué páginas pueden rastrear y cuáles deben ignorar.
              </p>
              <h4 className="font-semibold mt-4 mb-2">Directivas principales:</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><strong className="text-foreground">User-agent:</strong> Especifica el bot al que aplican las reglas</li>
                <li><strong className="text-foreground">Allow:</strong> Permite rastrear rutas específicas</li>
                <li><strong className="text-foreground">Disallow:</strong> Bloquea el rastreo de rutas</li>
                <li><strong className="text-foreground">Sitemap:</strong> Declara la ubicación del sitemap XML</li>
                <li><strong className="text-foreground">Crawl-delay:</strong> Tiempo de espera entre peticiones (en segundos)</li>
              </ul>
            </CardContent>
          </Card>

          {/* Análisis y visualización */}
          <RobotsViewer analysis={analysis} content={robotsContent} />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default RobotsManager;
