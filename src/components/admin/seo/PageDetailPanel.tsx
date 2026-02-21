import React, { useState, useMemo } from 'react';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Progress } from '@/components/ui/progress';
import { SEOEditor } from './SEOEditor';
import {
  CheckCircle, XCircle, HelpCircle, AlertTriangle, AlertOctagon,
  Loader2, ExternalLink, Download, Clock, Link2, Image,
  Globe, FileText, Edit, Zap, X, MousePointerClick, Eye, Search
} from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import type { SEOTrackerPage } from '@/hooks/useSEOTrackerData';

interface PageDetailPanelProps {
  page: SEOTrackerPage | null;
  open: boolean;
  onClose: () => void;
}

// ─── KPI Metric Card ───
const KPICard: React.FC<{ label: string; value: string; icon: React.ReactNode; quality?: 'good' | 'medium' | 'bad' | 'neutral' }> = ({ label, value, icon, quality = 'neutral' }) => {
  const colorMap = { good: 'text-green-600', medium: 'text-yellow-600', bad: 'text-red-600', neutral: 'text-foreground' };
  return (
    <Card>
      <CardContent className="pt-4 pb-3">
        <div className="flex items-center justify-between mb-1">
          <p className="text-xs text-muted-foreground">{label}</p>
          {icon}
        </div>
        <p className={`text-2xl font-bold ${colorMap[quality]}`}>{value}</p>
      </CardContent>
    </Card>
  );
};

// ─── Recommendations Engine ───
const getRecommendations = (page: SEOTrackerPage): Array<{ type: 'error' | 'warning' | 'info'; message: string }> => {
  const recs: Array<{ type: 'error' | 'warning' | 'info'; message: string }> = [];

  if (!page.isComplete) recs.push({ type: 'error', message: 'Completa los campos SEO obligatorios (título, descripción, H1, keywords).' });
  if (page.title.length > 0 && page.title.length < 30) recs.push({ type: 'warning', message: `El título tiene ${page.title.length} caracteres (debería tener 30-60).` });
  if (page.title.length > 60) recs.push({ type: 'warning', message: `El título tiene ${page.title.length} caracteres (debería tener máximo 60).` });
  if (page.description.length > 0 && page.description.length < 120) recs.push({ type: 'warning', message: `La descripción tiene ${page.description.length} caracteres (debería tener 120-160).` });
  if (page.description.length > 160) recs.push({ type: 'warning', message: `La descripción tiene ${page.description.length} caracteres (debería tener máximo 160).` });
  if (page.indexation?.is_indexed === false) recs.push({ type: 'error', message: 'La página no está indexada. Considera enviarla vía IndexNow.' });
  if (!page.indexation) recs.push({ type: 'info', message: 'No se ha verificado la indexación. Pulsa "Verificar y auditar".' });
  if (page.gscClicks === null) recs.push({ type: 'info', message: 'Sin datos de Search Console. La página podría necesitar más enlaces internos.' });
  if (page.keywords.length === 0) recs.push({ type: 'warning', message: 'No hay keywords definidas. Añade palabras clave relevantes.' });
  if (page.robots.includes('noindex')) recs.push({ type: 'warning', message: 'Esta página está bloqueada para indexación (noindex).' });
  if (!page.ogImage) recs.push({ type: 'info', message: 'No hay imagen OG definida. Añade una imagen para redes sociales.' });

  return recs;
};

// ─── Section Header ───
const SectionHeader: React.FC<{ icon: React.ReactNode; title: string; action?: React.ReactNode }> = ({ icon, title, action }) => (
  <div className="flex items-center justify-between mb-3">
    <h3 className="text-sm font-semibold flex items-center gap-2">{icon} {title}</h3>
    {action}
  </div>
);

// ─── SEO Metadata Read View ───
const MetadataField: React.FC<{ label: string; value: string; maxLen?: number; minLen?: number }> = ({ label, value, maxLen, minLen }) => {
  const len = value.length;
  const hasWarning = (maxLen && len > maxLen) || (minLen && len > 0 && len < minLen);
  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between">
        <span className="text-xs text-muted-foreground">{label}</span>
        {maxLen && <span className={`text-xs ${hasWarning ? 'text-yellow-600 font-medium' : 'text-muted-foreground'}`}>{len}/{maxLen}</span>}
      </div>
      <p className={`text-sm ${!value ? 'italic text-muted-foreground' : ''}`}>{value || 'Sin definir'}</p>
    </div>
  );
};

// ─── GSC Keywords Section ───
const GSCKeywordsSection: React.FC<{ path: string }> = ({ path }) => {
  const { data, isLoading } = useQuery({
    queryKey: ['page-gsc-detail', path],
    queryFn: async () => {
      const endDate = new Date().toISOString().split('T')[0];
      const startDate = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
      const { data, error } = await supabase.functions.invoke('gsc-data', {
        body: { property: 'sc-domain:hayas.marketing', startDate, endDate, dimensions: ['page', 'query'], rowLimit: 500 },
      });
      if (error) throw error;
      return data as { rows?: Array<{ keys: string[]; clicks: number; impressions: number; ctr: number; position: number }> };
    },
    retry: 1,
  });

  const keywords = useMemo(() => {
    const pageRows = data?.rows?.filter(row => {
      try { return new URL(row.keys[0]).pathname === path; } catch { return false; }
    }) || [];
    return pageRows.filter(r => r.keys[1]).sort((a, b) => b.clicks - a.clicks).slice(0, 20);
  }, [data, path]);

  if (isLoading) return <div className="flex items-center gap-2 py-4 justify-center text-muted-foreground"><Loader2 className="h-4 w-4 animate-spin" /> Cargando keywords...</div>;
  if (keywords.length === 0) return <p className="text-sm text-muted-foreground py-4 text-center">No hay datos de keywords en los últimos 30 días</p>;

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b text-xs text-muted-foreground">
            <th className="text-left py-2 font-medium">Keyword</th>
            <th className="text-right py-2 font-medium">Clicks</th>
            <th className="text-right py-2 font-medium">Impresiones</th>
            <th className="text-right py-2 font-medium">CTR</th>
            <th className="text-right py-2 font-medium">Posición</th>
          </tr>
        </thead>
        <tbody>
          {keywords.map((kw, i) => (
            <tr key={i} className="border-b border-border/50 hover:bg-muted/30">
              <td className="py-2 truncate max-w-[250px]">{kw.keys[1]}</td>
              <td className="py-2 text-right font-medium">{kw.clicks}</td>
              <td className="py-2 text-right">{kw.impressions.toLocaleString()}</td>
              <td className="py-2 text-right">{(kw.ctr * 100).toFixed(1)}%</td>
              <td className="py-2 text-right">{kw.position.toFixed(1)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// ─── Indexation + Audit Section ───
const IndexationSection: React.FC<{ page: SEOTrackerPage }> = ({ page }) => {
  const [isChecking, setIsChecking] = useState(false);
  const [checkResult, setCheckResult] = useState(page.indexation);
  const [auditData, setAuditData] = useState<any>(null);

  const handleCheck = async () => {
    setIsChecking(true);
    try {
      const { data, error } = await supabase.functions.invoke('dataforseo-check', { body: { urls: [page.path] } });
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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Left: Indexation status */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          {getStatusBadge()}
          <Button onClick={handleCheck} disabled={isChecking} size="sm" variant="outline">
            {isChecking ? <><Loader2 className="h-4 w-4 mr-1 animate-spin" /> Verificando...</> : <><Search className="h-4 w-4 mr-1" /> Verificar y auditar</>}
          </Button>
        </div>
        {checkResult?.google_title && (
          <div><p className="text-xs text-muted-foreground">Título en Google</p><p className="text-sm font-medium">{checkResult.google_title}</p></div>
        )}
        {checkResult?.google_snippet && (
          <div><p className="text-xs text-muted-foreground">Snippet en Google</p><p className="text-sm text-muted-foreground">{checkResult.google_snippet}</p></div>
        )}
        {checkResult?.google_position && (
          <div><p className="text-xs text-muted-foreground">Posición</p><p className="text-lg font-bold">{checkResult.google_position}</p></div>
        )}
        {checkResult?.checked_at && (
          <p className="text-xs text-muted-foreground">Última verificación: {new Date(checkResult.checked_at).toLocaleString('es-ES')}</p>
        )}
        {!checkResult && (
          <p className="text-xs text-muted-foreground">Pulsa "Verificar y auditar" para comprobar indexación y obtener auditoría on-page.</p>
        )}
      </div>

      {/* Right: Sitemap / Technical */}
      <div className="space-y-3">
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div><p className="text-xs text-muted-foreground">Robots</p><p className="font-medium">{page.robots}</p></div>
          <div><p className="text-xs text-muted-foreground">Schema</p><p className="font-medium">{page.schemaType}</p></div>
          <div><p className="text-xs text-muted-foreground">Idioma</p><p className="font-medium">{page.inLanguage}</p></div>
          <div><p className="text-xs text-muted-foreground">Categoría</p><Badge variant="outline" className="mt-0.5">{page.category}</Badge></div>
        </div>
        <div><p className="text-xs text-muted-foreground">Canonical</p><p className="text-sm font-mono truncate">{page.canonical}</p></div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-muted-foreground">Sitemap:</span>
          {!page.robots.includes('noindex') ? (
            <Badge className="bg-green-600 text-xs"><CheckCircle className="h-3 w-3 mr-1" /> Incluida</Badge>
          ) : (
            <Badge variant="destructive" className="text-xs"><XCircle className="h-3 w-3 mr-1" /> Excluida</Badge>
          )}
        </div>
      </div>
    </div>
  );
};

// ─── Audit Section ───
const AuditSection: React.FC<{ page: SEOTrackerPage }> = ({ page }) => {
  // We reuse the indexation check data; for now show stored audit data from indexation_checks
  const { data: auditRow } = useQuery({
    queryKey: ['page-audit', page.path],
    queryFn: async () => {
      const { data } = await supabase.from('indexation_checks').select('*').eq('page_path', page.path).maybeSingle();
      return data;
    },
  });

  if (!auditRow || (!auditRow.onpage_score && !auditRow.total_checks)) return null;

  const totalChecks = auditRow.total_checks as any;
  const metaInfo = auditRow.meta_info as any;
  const pageTiming = auditRow.page_timing as any;
  const linksInfo = auditRow.links_info as any;
  const score = auditRow.onpage_score;

  const handleDownload = () => {
    const blob = new Blob([JSON.stringify(auditRow, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = `audit-${page.path.replace(/\//g, '_')}.json`; a.click();
    URL.revokeObjectURL(url);
  };

  const scoreColor = score && score >= 80 ? 'text-green-600' : score && score >= 50 ? 'text-yellow-600' : 'text-red-600';

  return (
    <div className="space-y-4">
      {/* Score + checks grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {score != null && (
          <Card>
            <CardContent className="pt-3 pb-2 text-center">
              <p className="text-xs text-muted-foreground mb-1">Score</p>
              <p className={`text-3xl font-bold ${scoreColor}`}>{Math.round(score)}</p>
              <Progress value={score} className="mt-2 h-1.5" />
            </CardContent>
          </Card>
        )}
        {totalChecks && (
          <>
            <Card><CardContent className="pt-3 pb-2 text-center"><AlertOctagon className="h-4 w-4 mx-auto text-red-500 mb-1" /><p className="text-lg font-bold text-red-600">{totalChecks.errors ?? 0}</p><p className="text-xs text-muted-foreground">Errores</p></CardContent></Card>
            <Card><CardContent className="pt-3 pb-2 text-center"><AlertTriangle className="h-4 w-4 mx-auto text-yellow-500 mb-1" /><p className="text-lg font-bold text-yellow-600">{totalChecks.warnings ?? 0}</p><p className="text-xs text-muted-foreground">Warnings</p></CardContent></Card>
            <Card><CardContent className="pt-3 pb-2 text-center"><CheckCircle className="h-4 w-4 mx-auto text-green-500 mb-1" /><p className="text-lg font-bold text-green-600">{totalChecks.passed ?? 0}</p><p className="text-xs text-muted-foreground">OK</p></CardContent></Card>
          </>
        )}
      </div>

      {/* Error list */}
      {totalChecks?.error_list?.length > 0 && (
        <div className="space-y-1 max-h-[150px] overflow-y-auto">
          {totalChecks.error_list.map((err: string, i: number) => (
            <div key={i} className="text-xs p-2 rounded bg-red-50 dark:bg-red-950/20 text-red-700 dark:text-red-400 flex items-start gap-2">
              <XCircle className="h-3 w-3 mt-0.5 shrink-0" /><span>{err.replace(/_/g, ' ')}</span>
            </div>
          ))}
        </div>
      )}

      {/* Performance + Links */}
      <div className="flex flex-wrap gap-4 text-xs">
        {pageTiming?.largest_contentful_paint != null && <span><Clock className="h-3 w-3 inline mr-1" />LCP: {(pageTiming.largest_contentful_paint * 1000).toFixed(0)}ms</span>}
        {pageTiming?.time_to_interactive != null && <span>TTI: {(pageTiming.time_to_interactive * 1000).toFixed(0)}ms</span>}
        {linksInfo && <span><Link2 className="h-3 w-3 inline mr-1" />{linksInfo.internal_links_count} internos</span>}
        {linksInfo && <span><ExternalLink className="h-3 w-3 inline mr-1" />{linksInfo.external_links_count} externos</span>}
        {metaInfo?.images_count != null && <span><Image className="h-3 w-3 inline mr-1" />{metaInfo.images_count} imágenes</span>}
      </div>

      <Button onClick={handleDownload} size="sm" variant="outline" className="gap-1"><Download className="h-3 w-3" /> Descargar JSON</Button>
    </div>
  );
};

// ─── Main Panel ───
export const PageDetailPanel: React.FC<PageDetailPanelProps> = ({ page, open, onClose }) => {
  const [showEditor, setShowEditor] = useState(false);

  const recommendations = useMemo(() => page ? getRecommendations(page) : [], [page]);

  if (!page) return null;

  const ctrQuality = page.gscCtr !== null ? (page.gscCtr >= 5 ? 'good' : page.gscCtr >= 2 ? 'medium' : 'bad') : 'neutral';
  const posQuality = page.gscPosition !== null ? (page.gscPosition <= 10 ? 'good' : page.gscPosition <= 30 ? 'medium' : 'bad') : 'neutral';

  return (
    <Dialog open={open} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto p-0 gap-0">
        {/* ─── Header ─── */}
        <div className="sticky top-0 z-10 bg-background border-b px-6 py-4">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1 min-w-0">
              <DialogTitle className="font-mono text-base mb-2">{page.path}</DialogTitle>
              <p className="text-sm text-muted-foreground truncate mb-2">{page.title || 'Sin título'}</p>
              <div className="flex items-center gap-2 flex-wrap">
                {page.isComplete ? (
                  <Badge className="bg-green-600/10 text-green-700 border-green-200 text-xs"><CheckCircle className="h-3 w-3 mr-1" /> Completa</Badge>
                ) : (
                  <Badge variant="destructive" className="text-xs"><AlertTriangle className="h-3 w-3 mr-1" /> Incompleta</Badge>
                )}
                {page.indexation?.is_indexed === true && <Badge className="bg-green-600 text-xs"><Globe className="h-3 w-3 mr-1" /> Indexada</Badge>}
                {page.indexation?.is_indexed === false && <Badge variant="destructive" className="text-xs"><XCircle className="h-3 w-3 mr-1" /> No indexada</Badge>}
                {!page.indexation && <Badge variant="outline" className="text-xs"><HelpCircle className="h-3 w-3 mr-1" /> Sin verificar</Badge>}
                <Badge variant="outline" className="text-xs">{page.category}</Badge>
                <Badge variant="outline" className="text-xs">{page.inLanguage}</Badge>
              </div>
            </div>
            <div className="flex gap-2 shrink-0">
              <Button size="sm" variant="outline" onClick={() => setShowEditor(!showEditor)}>
                <Edit className="h-4 w-4 mr-1" /> {showEditor ? 'Cerrar editor' : 'Editar SEO'}
              </Button>
              <a href={`https://hayas.marketing${page.path}`} target="_blank" rel="noopener noreferrer">
                <Button size="sm" variant="outline"><ExternalLink className="h-4 w-4 mr-1" /> Ver en producción</Button>
              </a>
            </div>
          </div>
        </div>

        <div className="px-6 py-5 space-y-8">
          {/* ─── 1. KPI Summary ─── */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <KPICard label="Clicks (30d)" value={page.gscClicks?.toString() ?? '—'} icon={<MousePointerClick className="h-4 w-4 text-muted-foreground" />} quality={page.gscClicks !== null && page.gscClicks > 10 ? 'good' : 'neutral'} />
            <KPICard label="Impresiones" value={page.gscImpressions?.toLocaleString() ?? '—'} icon={<Eye className="h-4 w-4 text-muted-foreground" />} quality="neutral" />
            <KPICard label="CTR" value={page.gscCtr !== null ? `${page.gscCtr.toFixed(1)}%` : '—'} icon={<Zap className="h-4 w-4 text-muted-foreground" />} quality={ctrQuality as any} />
            <KPICard label="Posición media" value={page.gscPosition !== null ? page.gscPosition.toFixed(1) : '—'} icon={<Search className="h-4 w-4 text-muted-foreground" />} quality={posQuality as any} />
          </div>

          <Separator />

          {/* ─── 2. Indexación y Sitemap ─── */}
          <section>
            <SectionHeader icon={<Globe className="h-4 w-4" />} title="Estado de Indexación y Sitemap" />
            <IndexationSection page={page} />
          </section>

          <Separator />

          {/* ─── 3. Metadatos SEO ─── */}
          <section>
            <SectionHeader icon={<FileText className="h-4 w-4" />} title="Metadatos SEO" action={
              !showEditor && <Button size="sm" variant="ghost" onClick={() => setShowEditor(true)}><Edit className="h-4 w-4 mr-1" /> Editar</Button>
            } />
            {showEditor ? (
              <SEOEditor path={page.path} onClose={() => setShowEditor(false)} />
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <MetadataField label="Title" value={page.title} maxLen={60} minLen={30} />
                <MetadataField label="H1" value={page.h1} />
                <div className="md:col-span-2">
                  <MetadataField label="Meta Description" value={page.description} maxLen={160} minLen={120} />
                </div>
                <div className="md:col-span-2">
                  <p className="text-xs text-muted-foreground mb-1">Keywords</p>
                  <div className="flex flex-wrap gap-1">
                    {page.keywords.length > 0 ? page.keywords.map((kw, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">{kw}</Badge>
                    )) : <span className="text-sm italic text-muted-foreground">Sin keywords</span>}
                  </div>
                </div>
              </div>
            )}
          </section>

          <Separator />

          {/* ─── 4. Keywords de Search Console ─── */}
          <section>
            <SectionHeader icon={<Search className="h-4 w-4" />} title="Keywords de Search Console" />
            <GSCKeywordsSection path={page.path} />
          </section>

          <Separator />

          {/* ─── 5. Auditoría On-Page ─── */}
          <section>
            <SectionHeader icon={<AlertTriangle className="h-4 w-4" />} title="Auditoría On-Page" />
            <AuditSection page={page} />
          </section>

          <Separator />

          {/* ─── 6. Acciones Recomendadas ─── */}
          <section>
            <SectionHeader icon={<Zap className="h-4 w-4" />} title="Acciones Recomendadas" />
            {recommendations.length === 0 ? (
              <div className="flex items-center gap-2 text-sm text-green-600 py-3">
                <CheckCircle className="h-4 w-4" /> Todo en orden. No hay acciones pendientes.
              </div>
            ) : (
              <div className="space-y-2">
                {recommendations.map((rec, i) => {
                  const icon = rec.type === 'error' ? <XCircle className="h-4 w-4 text-red-500 shrink-0" /> :
                    rec.type === 'warning' ? <AlertTriangle className="h-4 w-4 text-yellow-500 shrink-0" /> :
                    <HelpCircle className="h-4 w-4 text-blue-500 shrink-0" />;
                  const bg = rec.type === 'error' ? 'bg-red-50 dark:bg-red-950/20' :
                    rec.type === 'warning' ? 'bg-yellow-50 dark:bg-yellow-950/20' :
                    'bg-blue-50 dark:bg-blue-950/20';
                  return (
                    <div key={i} className={`flex items-start gap-3 p-3 rounded-lg ${bg}`}>
                      {icon}
                      <span className="text-sm">{rec.message}</span>
                    </div>
                  );
                })}
              </div>
            )}
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
};
