import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { SEOEditor } from './SEOEditor';
import { Progress } from '@/components/ui/progress';
import { 
  FileText, BarChart3, Globe, Map, 
  CheckCircle, XCircle, HelpCircle, AlertTriangle,
  Loader2, ExternalLink, Download, Clock, Link2, Image, AlertOctagon
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

// On-Page Score visual
const OnPageScoreCard: React.FC<{ score: number | null }> = ({ score }) => {
  if (score === null || score === undefined) return null;
  const color = score >= 80 ? 'text-green-600' : score >= 50 ? 'text-yellow-600' : 'text-red-600';
  const bgColor = score >= 80 ? 'bg-green-600' : score >= 50 ? 'bg-yellow-600' : 'bg-red-600';
  return (
    <Card>
      <CardContent className="pt-4">
        <p className="text-xs text-muted-foreground mb-2">On-Page Score</p>
        <div className="flex items-center gap-3">
          <span className={`text-3xl font-bold ${color}`}>{Math.round(score)}</span>
          <span className="text-sm text-muted-foreground">/ 100</span>
        </div>
        <Progress value={score} className={`mt-2 h-2 [&>div]:${bgColor}`} />
      </CardContent>
    </Card>
  );
};

// Audit section
const AuditSection: React.FC<{ auditData: any }> = ({ auditData }) => {
  if (!auditData) return null;

  const { total_checks, meta_info, page_timing, links_info } = auditData;

  const handleDownload = () => {
    const blob = new Blob([JSON.stringify(auditData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `audit-report.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-4 mt-4 border-t pt-4">
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-semibold">Auditoría On-Page</h4>
        <Button onClick={handleDownload} size="sm" variant="outline" className="gap-1">
          <Download className="h-3 w-3" /> JSON
        </Button>
      </div>

      <OnPageScoreCard score={auditData.onpage_score} />

      {/* Checks summary */}
      {total_checks && (
        <div className="grid grid-cols-3 gap-2">
          <Card>
            <CardContent className="pt-3 text-center">
              <AlertOctagon className="h-4 w-4 mx-auto text-red-500 mb-1" />
              <p className="text-lg font-bold text-red-600">{total_checks.errors ?? 0}</p>
              <p className="text-xs text-muted-foreground">Errores</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-3 text-center">
              <AlertTriangle className="h-4 w-4 mx-auto text-yellow-500 mb-1" />
              <p className="text-lg font-bold text-yellow-600">{total_checks.warnings ?? 0}</p>
              <p className="text-xs text-muted-foreground">Warnings</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-3 text-center">
              <CheckCircle className="h-4 w-4 mx-auto text-green-500 mb-1" />
              <p className="text-lg font-bold text-green-600">{total_checks.passed ?? 0}</p>
              <p className="text-xs text-muted-foreground">OK</p>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Error list */}
      {total_checks?.error_list?.length > 0 && (
        <div>
          <h5 className="text-xs font-semibold text-red-600 mb-1">Errores detectados</h5>
          <div className="space-y-1 max-h-[200px] overflow-y-auto">
            {total_checks.error_list.map((err: string, i: number) => (
              <div key={i} className="text-xs p-2 rounded bg-red-50 dark:bg-red-950/20 text-red-700 dark:text-red-400 flex items-start gap-2">
                <XCircle className="h-3 w-3 mt-0.5 shrink-0" />
                <span>{err.replace(/_/g, ' ')}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Meta info */}
      {meta_info && (
        <div>
          <h5 className="text-xs font-semibold mb-2">Meta Tags</h5>
          <div className="space-y-2 text-xs">
            {meta_info.title && <div><span className="text-muted-foreground">Title:</span> <span className="font-medium">{meta_info.title}</span></div>}
            {meta_info.description && <div><span className="text-muted-foreground">Description:</span> <span className="font-medium truncate block">{meta_info.description}</span></div>}
            {meta_info.canonical && <div><span className="text-muted-foreground">Canonical:</span> <span className="font-mono">{meta_info.canonical}</span></div>}
          </div>
        </div>
      )}

      {/* Performance */}
      {page_timing && (
        <div>
          <h5 className="text-xs font-semibold mb-2 flex items-center gap-1"><Clock className="h-3 w-3" /> Rendimiento</h5>
          <div className="grid grid-cols-2 gap-2 text-xs">
            {page_timing.time_to_interactive != null && (
              <div><span className="text-muted-foreground">Time to Interactive:</span> <span className="font-bold">{(page_timing.time_to_interactive * 1000).toFixed(0)}ms</span></div>
            )}
            {page_timing.dom_complete != null && (
              <div><span className="text-muted-foreground">DOM Complete:</span> <span className="font-bold">{(page_timing.dom_complete * 1000).toFixed(0)}ms</span></div>
            )}
            {page_timing.largest_contentful_paint != null && (
              <div><span className="text-muted-foreground">LCP:</span> <span className="font-bold">{(page_timing.largest_contentful_paint * 1000).toFixed(0)}ms</span></div>
            )}
            {page_timing.duration_time != null && (
              <div><span className="text-muted-foreground">Duration:</span> <span className="font-bold">{(page_timing.duration_time * 1000).toFixed(0)}ms</span></div>
            )}
          </div>
        </div>
      )}

      {/* Links info */}
      {links_info && (
        <div className="flex gap-4 text-xs">
          <div className="flex items-center gap-1"><Link2 className="h-3 w-3 text-muted-foreground" /> <span>{links_info.internal_links_count} internos</span></div>
          <div className="flex items-center gap-1"><ExternalLink className="h-3 w-3 text-muted-foreground" /> <span>{links_info.external_links_count} externos</span></div>
        </div>
      )}

      {/* Images info */}
      {meta_info?.images_count != null && (
        <div className="flex items-center gap-1 text-xs">
          <Image className="h-3 w-3 text-muted-foreground" /> <span>{meta_info.images_count} imágenes ({meta_info.images_size ? `${(meta_info.images_size / 1024).toFixed(0)} KB` : '—'})</span>
        </div>
      )}
    </div>
  );
};

// Tab 3: Indexation + Audit
const IndexationTab: React.FC<{ page: SEOTrackerPage }> = ({ page }) => {
  const [isChecking, setIsChecking] = useState(false);
  const [checkResult, setCheckResult] = useState(page.indexation);
  const [auditData, setAuditData] = useState<any>(null);

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
        if (result.onpage_score != null || result.total_checks) {
          setAuditData({
            onpage_score: result.onpage_score,
            total_checks: result.total_checks,
            checks_detail: result.checks_detail,
            meta_info: result.meta_info,
            page_timing: result.page_timing,
            links_info: result.links_info,
          });
        }
      }
    } catch (err) {
      console.error('Check error:', err);
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
          {isChecking ? <><Loader2 className="h-4 w-4 mr-2 animate-spin" /> Verificando...</> : 'Verificar y auditar'}
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

      {!checkResult && !auditData && (
        <div className="text-center py-6 text-muted-foreground">
          <AlertTriangle className="h-8 w-8 mx-auto mb-2 opacity-40" />
          <p className="text-sm">Pulsa "Verificar y auditar" para comprobar indexación y obtener auditoría SEO on-page.</p>
        </div>
      )}

      <AuditSection auditData={auditData} />
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
