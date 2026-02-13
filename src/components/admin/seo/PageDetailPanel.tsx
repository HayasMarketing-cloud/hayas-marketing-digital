import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SEOEditor } from './SEOEditor';
import { 
  FileText, BarChart3, Globe, Map, 
  CheckCircle, XCircle, HelpCircle, AlertTriangle,
  Loader2, ExternalLink
} from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import type { SEOTrackerPage } from '@/hooks/useSEOTrackerData';

interface PageDetailPanelProps {
  page: SEOTrackerPage | null;
  open: boolean;
  onClose: () => void;
}

// Tab 2: GSC data for specific page
const GSCTab: React.FC<{ path: string }> = ({ path }) => {
  const { data, isLoading } = useQuery({
    queryKey: ['page-gsc-detail', path],
    queryFn: async () => {
      const endDate = new Date().toISOString().split('T')[0];
      const startDate = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];

      const { data, error } = await supabase.functions.invoke('gsc-data', {
        body: {
          property: 'sc-domain:hayas.marketing',
          startDate,
          endDate,
          dimensions: ['page', 'query'],
          rowLimit: 500,
        },
      });

      if (error) throw error;
      return data as { rows?: Array<{ keys: string[]; clicks: number; impressions: number; ctr: number; position: number }> };
    },
    retry: 1,
  });

  const pageRows = data?.rows?.filter(row => {
    try {
      const url = new URL(row.keys[0]);
      return url.pathname === path;
    } catch { return false; }
  }) || [];

  const totalClicks = pageRows.reduce((s, r) => s + r.clicks, 0);
  const totalImpressions = pageRows.reduce((s, r) => s + r.impressions, 0);
  const avgCtr = totalImpressions > 0 ? (totalClicks / totalImpressions) * 100 : 0;
  const avgPosition = pageRows.length > 0
    ? pageRows.reduce((s, r) => s + r.position, 0) / pageRows.length
    : 0;

  const keywords = pageRows
    .filter(r => r.keys[1])
    .sort((a, b) => b.clicks - a.clicks)
    .slice(0, 20);

  if (isLoading) {
    return <div className="flex items-center gap-2 py-8 justify-center text-muted-foreground"><Loader2 className="h-4 w-4 animate-spin" /> Cargando datos GSC...</div>;
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        <Card><CardContent className="pt-4"><p className="text-xs text-muted-foreground">Clicks</p><p className="text-2xl font-bold">{totalClicks}</p></CardContent></Card>
        <Card><CardContent className="pt-4"><p className="text-xs text-muted-foreground">Impresiones</p><p className="text-2xl font-bold">{totalImpressions.toLocaleString()}</p></CardContent></Card>
        <Card><CardContent className="pt-4"><p className="text-xs text-muted-foreground">CTR</p><p className="text-2xl font-bold">{avgCtr.toFixed(2)}%</p></CardContent></Card>
        <Card><CardContent className="pt-4"><p className="text-xs text-muted-foreground">Posición media</p><p className="text-2xl font-bold">{avgPosition.toFixed(1)}</p></CardContent></Card>
      </div>

      {keywords.length > 0 && (
        <div>
          <h4 className="text-sm font-semibold mb-2">Top Keywords ({keywords.length})</h4>
          <div className="space-y-1 max-h-[300px] overflow-y-auto">
            {keywords.map((kw, i) => (
              <div key={i} className="flex items-center justify-between text-sm p-2 rounded hover:bg-muted/50">
                <span className="truncate flex-1">{kw.keys[1]}</span>
                <div className="flex gap-3 text-xs text-muted-foreground ml-2">
                  <span>{kw.clicks} clicks</span>
                  <span>Pos {kw.position.toFixed(1)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {pageRows.length === 0 && (
        <p className="text-sm text-muted-foreground text-center py-4">No hay datos de GSC para esta página en los últimos 30 días</p>
      )}
    </div>
  );
};

// Tab 3: Indexation status
const IndexationTab: React.FC<{ page: SEOTrackerPage }> = ({ page }) => {
  const [isChecking, setIsChecking] = useState(false);
  const [checkResult, setCheckResult] = useState(page.indexation);

  const handleCheck = async () => {
    setIsChecking(true);
    try {
      const { data, error } = await supabase.functions.invoke('dataforseo-check', {
        body: { urls: [page.path] },
      });

      if (error) throw error;
      const result = data?.results?.[page.path];
      if (result) {
        setCheckResult({
          is_indexed: result.is_indexed ?? null,
          google_title: result.google_title || null,
          google_snippet: result.google_snippet || null,
          google_position: result.google_position || null,
          checked_at: result.checked_at || new Date().toISOString(),
        });
      }
    } catch (err) {
      console.error('Indexation check error:', err);
    } finally {
      setIsChecking(false);
    }
  };

  const getStatusBadge = () => {
    if (!checkResult) return <Badge variant="outline"><HelpCircle className="h-3 w-3 mr-1" /> Sin verificar</Badge>;
    if (checkResult.is_indexed === true) return <Badge className="bg-green-600"><CheckCircle className="h-3 w-3 mr-1" /> Indexada</Badge>;
    if (checkResult.is_indexed === false) return <Badge variant="destructive"><XCircle className="h-3 w-3 mr-1" /> No indexada</Badge>;
    return <Badge variant="outline"><HelpCircle className="h-3 w-3 mr-1" /> Desconocido</Badge>;
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>{getStatusBadge()}</div>
        <Button onClick={handleCheck} disabled={isChecking} size="sm" variant="outline">
          {isChecking ? <><Loader2 className="h-4 w-4 mr-2 animate-spin" /> Verificando...</> : 'Verificar indexación'}
        </Button>
      </div>

      {checkResult && (
        <div className="space-y-3">
          {checkResult.google_title && (
            <div>
              <p className="text-xs text-muted-foreground mb-1">Título en Google</p>
              <p className="text-sm font-medium">{checkResult.google_title}</p>
            </div>
          )}
          {checkResult.google_snippet && (
            <div>
              <p className="text-xs text-muted-foreground mb-1">Snippet en Google</p>
              <p className="text-sm">{checkResult.google_snippet}</p>
            </div>
          )}
          {checkResult.google_position && (
            <div>
              <p className="text-xs text-muted-foreground mb-1">Posición</p>
              <p className="text-lg font-bold">{checkResult.google_position}</p>
            </div>
          )}
          {checkResult.checked_at && (
            <p className="text-xs text-muted-foreground">
              Última verificación: {new Date(checkResult.checked_at).toLocaleString('es-ES')}
            </p>
          )}
        </div>
      )}

      {!checkResult && (
        <div className="text-center py-6 text-muted-foreground">
          <AlertTriangle className="h-8 w-8 mx-auto mb-2 opacity-40" />
          <p className="text-sm">Haz clic en "Verificar indexación" para comprobar si esta página está indexada en Google.</p>
          <p className="text-xs mt-2">Requiere las claves API de DataForSEO configuradas.</p>
        </div>
      )}
    </div>
  );
};

// Tab 4: Sitemap info
const SitemapTab: React.FC<{ page: SEOTrackerPage }> = ({ page }) => {
  const isInSitemap = !page.robots.includes('noindex');
  const lang = page.path.startsWith('/en') ? 'en' : 'es';

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium">Estado en Sitemap:</span>
        {isInSitemap ? (
          <Badge className="bg-green-600"><CheckCircle className="h-3 w-3 mr-1" /> Incluida</Badge>
        ) : (
          <Badge variant="destructive"><XCircle className="h-3 w-3 mr-1" /> Excluida (noindex)</Badge>
        )}
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <p className="text-xs text-muted-foreground">Idioma</p>
          <p className="text-sm font-medium">{lang === 'es' ? '🇪🇸 Español' : '🇬🇧 English'}</p>
        </div>
        <div>
          <p className="text-xs text-muted-foreground">Robots</p>
          <p className="text-sm font-medium">{page.robots}</p>
        </div>
        <div>
          <p className="text-xs text-muted-foreground">Canonical</p>
          <p className="text-sm font-mono truncate">{page.canonical}</p>
        </div>
        <div>
          <p className="text-xs text-muted-foreground">Schema</p>
          <p className="text-sm font-medium">{page.schemaType}</p>
        </div>
      </div>

      <div>
        <p className="text-xs text-muted-foreground mb-1">Categoría</p>
        <Badge variant="outline">{page.category}</Badge>
      </div>

      <a
        href={`https://hayas.marketing${page.path}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
      >
        <ExternalLink className="h-3 w-3" /> Ver página en producción
      </a>
    </div>
  );
};

export const PageDetailPanel: React.FC<PageDetailPanelProps> = ({ page, open, onClose }) => {
  if (!page) return null;

  return (
    <Sheet open={open} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <SheetContent side="right" className="w-full sm:max-w-2xl overflow-y-auto">
        <SheetHeader>
          <SheetTitle className="font-mono text-sm">{page.path}</SheetTitle>
          <SheetDescription className="truncate">{page.title}</SheetDescription>
        </SheetHeader>

        <Tabs defaultValue="metadata" className="mt-4">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="metadata" className="text-xs gap-1"><FileText className="h-3 w-3" /> SEO</TabsTrigger>
            <TabsTrigger value="gsc" className="text-xs gap-1"><BarChart3 className="h-3 w-3" /> GSC</TabsTrigger>
            <TabsTrigger value="indexation" className="text-xs gap-1"><Globe className="h-3 w-3" /> Index</TabsTrigger>
            <TabsTrigger value="sitemap" className="text-xs gap-1"><Map className="h-3 w-3" /> Sitemap</TabsTrigger>
          </TabsList>

          <TabsContent value="metadata" className="mt-4">
            <SEOEditor path={page.path} onClose={onClose} />
          </TabsContent>

          <TabsContent value="gsc" className="mt-4">
            <GSCTab path={page.path} />
          </TabsContent>

          <TabsContent value="indexation" className="mt-4">
            <IndexationTab page={page} />
          </TabsContent>

          <TabsContent value="sitemap" className="mt-4">
            <SitemapTab page={page} />
          </TabsContent>
        </Tabs>
      </SheetContent>
    </Sheet>
  );
};
