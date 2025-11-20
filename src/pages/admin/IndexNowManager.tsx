import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEONavigation from '@/components/seo-dashboard/SEONavigation';
import { AdminBreadcrumbs } from '@/components/admin/AdminBreadcrumbs';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Loader2, Send, CheckCircle, XCircle, ExternalLink, Info } from 'lucide-react';
import { notifyIndexNow, notifyBulkIndexNow, buildFullUrl } from '@/utils/indexnow';
import { getIndexableUrls } from '@/utils/sitemap';
import { toast } from 'sonner';

const IndexNowManager: React.FC = () => {
  const [urls, setUrls] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null);

  const handleNotify = async () => {
    if (!urls.trim()) {
      toast.error('Ingresa al menos una URL');
      return;
    }

    setLoading(true);
    setResult(null);

    const urlList = urls
      .split('\n')
      .map(url => url.trim())
      .filter(url => url.length > 0);

    try {
      let response;
      if (urlList.length === 1) {
        const fullUrl = urlList[0].startsWith('http') 
          ? urlList[0] 
          : buildFullUrl(urlList[0]);
        response = await notifyIndexNow(fullUrl);
      } else {
        const fullUrls = urlList.map(url => 
          url.startsWith('http') ? url : buildFullUrl(url)
        );
        response = await notifyBulkIndexNow(fullUrls);
      }

      setResult(response);
      
      if (response.success) {
        toast.success(response.message);
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
      setResult({ success: false, message: errorMessage });
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleNotifyAllIndexable = async () => {
    setLoading(true);
    setResult(null);

    try {
      const indexableUrls = getIndexableUrls();
      const fullUrls = indexableUrls.map(path => buildFullUrl(path));
      
      const response = await notifyBulkIndexNow(fullUrls);
      setResult(response);
      
      if (response.success) {
        toast.success(response.message);
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
      setResult({ success: false, message: errorMessage });
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <SEONavigation />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-6">
          <AdminBreadcrumbs currentPage="IndexNow" />
          <div>
            <h1 className="text-3xl font-bold">Gestión de IndexNow</h1>
            <p className="text-muted-foreground mt-2">
              Notifica a Bing, Yandex, Seznam.cz y Naver sobre URLs nuevas o actualizadas
            </p>
          </div>

          <Alert>
            <Info className="h-4 w-4" />
            <AlertDescription>
              <strong>¿Qué es IndexNow?</strong> Un protocolo que permite notificar instantáneamente a buscadores 
              sobre cambios en tu sitio. Las URLs se indexan típicamente en 1-2 horas vs 2-7 días del crawling tradicional.
            </AlertDescription>
          </Alert>

          <Card>
            <CardHeader>
              <CardTitle>Notificar URLs</CardTitle>
              <CardDescription>
                Ingresa una o varias URLs (una por línea). Puedes usar URLs completas o paths relativos.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea
                placeholder={`Ejemplos:
https://hayasmarketing.com/es/blog/nuevo-post
/es/servicios/nuevo-servicio
/es/casos-exito/nuevo-caso`}
                value={urls}
                onChange={(e) => setUrls(e.target.value)}
                rows={8}
                className="font-mono text-sm"
              />
              
              <div className="flex gap-3">
                <Button 
                  onClick={handleNotify} 
                  disabled={loading || !urls.trim()}
                  className="flex-1"
                >
                  {loading ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Notificando...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Notificar a IndexNow
                    </>
                  )}
                </Button>
                
                <Button 
                  onClick={handleNotifyAllIndexable}
                  disabled={loading}
                  variant="secondary"
                >
                  Notificar todas las indexables
                </Button>
              </div>

              {result && (
                <Alert variant={result.success ? 'default' : 'destructive'}>
                  {result.success ? (
                    <CheckCircle className="h-4 w-4" />
                  ) : (
                    <XCircle className="h-4 w-4" />
                  )}
                  <AlertDescription>{result.message}</AlertDescription>
                </Alert>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Información del API Key</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                <div>
                  <p className="text-sm font-medium">API Key</p>
                  <p className="text-xs text-muted-foreground font-mono mt-1">
                    f8e9d7c6b5a4938271605948372615af
                  </p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                >
                  <a 
                    href="/f8e9d7c6b5a4938271605948372615af.txt" 
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Ver archivo
                  </a>
                </Button>
              </div>

              <div className="space-y-2">
                <h4 className="text-sm font-medium">Próximos pasos:</h4>
                <ol className="text-sm text-muted-foreground space-y-1 list-decimal list-inside">
                  <li>Registra tu sitio en <a href="https://www.bing.com/webmasters" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Bing Webmaster Tools</a></li>
                  <li>Verifica la propiedad usando el mismo API key</li>
                  <li>Monitoriza las URLs enviadas en "URL Submission"</li>
                  <li>Revisa el estado de indexación en "Site Explorer"</li>
                </ol>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default IndexNowManager;
