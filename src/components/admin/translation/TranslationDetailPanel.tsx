import React, { useMemo, useState } from 'react';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import {
  CheckCircle, XCircle, AlertTriangle, Globe, Languages,
  ExternalLink, Eye, EyeOff, Link2, LinkIcon, Loader2,
  FileText, Zap, AlertCircle, Info
} from 'lucide-react';
import { RouteInventoryItem } from '@/hooks/useAllRoutes';
import { useTranslatePage } from '@/hooks/useTranslatePage';
import { generateEnglishSlug } from '@/utils/slugTranslation';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { useQueryClient } from '@tanstack/react-query';

interface TranslationDetailPanelProps {
  route: RouteInventoryItem | null;
  open: boolean;
  onClose: () => void;
}

// ─── Section Header ───
const SectionHeader: React.FC<{ icon: React.ReactNode; title: string; action?: React.ReactNode }> = ({ icon, title, action }) => (
  <div className="flex items-center justify-between mb-3">
    <h3 className="text-sm font-semibold flex items-center gap-2">{icon} {title}</h3>
    {action}
  </div>
);

// ─── Metadata Comparison Field ───
const ComparisonField: React.FC<{ label: string; esValue?: string; enValue?: string; maxLen?: number; minLen?: number }> = ({ label, esValue, enValue, maxLen, minLen }) => {
  const getWarning = (val?: string) => {
    if (!val) return 'Sin definir';
    const len = val.length;
    if (minLen && len < minLen) return `${len} chars (min ${minLen})`;
    if (maxLen && len > maxLen) return `${len} chars (max ${maxLen})`;
    return null;
  };

  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="space-y-1">
        <div className="flex items-center justify-between">
          <span className="text-xs text-muted-foreground">{label} (ES)</span>
          {esValue && maxLen && (
            <span className={`text-xs ${getWarning(esValue) ? 'text-yellow-600' : 'text-muted-foreground'}`}>
              {esValue.length}/{maxLen}
            </span>
          )}
        </div>
        <p className={`text-sm ${!esValue ? 'italic text-muted-foreground' : ''}`}>{esValue || 'Sin definir'}</p>
      </div>
      <div className="space-y-1">
        <div className="flex items-center justify-between">
          <span className="text-xs text-muted-foreground">{label} (EN)</span>
          {enValue && maxLen && (
            <span className={`text-xs ${getWarning(enValue) ? 'text-yellow-600' : 'text-muted-foreground'}`}>
              {enValue.length}/{maxLen}
            </span>
          )}
        </div>
        <p className={`text-sm ${!enValue ? 'italic text-muted-foreground' : ''}`}>{enValue || 'Sin definir'}</p>
      </div>
    </div>
  );
};

// ─── Recommendations Engine ───
function getRecommendations(route: RouteInventoryItem): Array<{ type: 'error' | 'warning' | 'info'; message: string }> {
  const recs: Array<{ type: 'error' | 'warning' | 'info'; message: string }> = [];

  // No DB entry
  if (!route.inDatabase) {
    recs.push({ type: 'error', message: 'Esta página no tiene datos SEO en la base de datos. Genera los metadatos SEO primero.' });
    return recs;
  }

  // Missing critical fields
  if (route.missingCriticalFields.length > 0) {
    recs.push({ type: 'error', message: `Faltan campos SEO críticos en ES: ${route.missingCriticalFields.join(', ')}` });
  }

  // No translation
  if (!route.hasTranslation) {
    recs.push({ type: 'warning', message: 'No existe versión en inglés. Usa "Traducir ahora" para crearla.' });
  }

  // Translation exists but checks
  if (route.enPageData) {
    // Draft
    if (!route.enPageData.is_indexable) {
      recs.push({ type: 'warning', message: 'La versión EN está en borrador (noindex). Cambia is_indexable a true para publicarla.' });
    }

    // translation_of not linked
    if (!route.enPageData.translation_of) {
      recs.push({ type: 'warning', message: 'El campo translation_of no está enlazado. La sincronización bilingüe no funcionará correctamente.' });
    }

    // EN not in app
    if (!route.enRouteInApp && route.translationPath) {
      recs.push({ type: 'info', message: 'La ruta EN no está registrada en la aplicación. Redirigirá a Coming Soon.' });
    }

    // Title length
    const enTitle = route.enPageData.title;
    if (enTitle) {
      if (enTitle.length < 30) recs.push({ type: 'warning', message: `El título EN tiene ${enTitle.length} caracteres (debería tener 30-60).` });
      if (enTitle.length > 60) recs.push({ type: 'warning', message: `El título EN tiene ${enTitle.length} caracteres (máximo 60).` });
    }

    // Description length
    const enDesc = route.enPageData.description;
    if (enDesc) {
      if (enDesc.length < 120) recs.push({ type: 'warning', message: `La descripción EN tiene ${enDesc.length} chars (min 120).` });
      if (enDesc.length > 160) recs.push({ type: 'warning', message: `La descripción EN tiene ${enDesc.length} chars (max 160).` });
    }

    // Missing og_image
    if (!route.enPageData.og_image) {
      recs.push({ type: 'info', message: 'Falta og_image en la versión EN.' });
    }
  }

  // Recommended fields on ES
  if (route.seoOptimized && route.missingRecommendedFields.length > 0) {
    recs.push({ type: 'info', message: `Mejoras opcionales ES: ${route.missingRecommendedFields.join(', ')}` });
  }

  return recs;
}

// ─── EN Status Description ───
function getEnStatus(route: RouteInventoryItem): { label: string; color: string; description: string } {
  if (!route.hasTranslation && !route.enPageData) {
    return { label: 'Sin traducción', color: 'text-red-600', description: 'No existe versión EN. Redirige a Coming Soon.' };
  }
  if (route.enPageData && !route.enPageData.is_indexable) {
    return { label: 'Borrador', color: 'text-yellow-600', description: 'La versión EN existe pero no es visible para Google (noindex).' };
  }
  if (route.enPageData?.is_indexable && !route.enRouteInApp) {
    return { label: 'Sin ruta en app', color: 'text-orange-600', description: 'Existe en DB pero falta ruta en la aplicación. Redirigirá a Coming Soon.' };
  }
  if (route.enPageData?.is_indexable) {
    return { label: 'Publicada', color: 'text-green-600', description: 'Versión EN publicada y activa.' };
  }
  return { label: 'Desconocido', color: 'text-muted-foreground', description: '' };
}

// ─── Main Panel ───
export const TranslationDetailPanel: React.FC<TranslationDetailPanelProps> = ({ route, open, onClose }) => {
  const { translatePageAsync, isTranslating } = useTranslatePage();
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [isPublishing, setIsPublishing] = useState(false);
  const [isLinking, setIsLinking] = useState(false);

  const recommendations = useMemo(() => route ? getRecommendations(route) : [], [route]);
  const enStatus = useMemo(() => route ? getEnStatus(route) : null, [route]);

  if (!route) return null;

  const handleTranslate = async () => {
    const enPath = route.translationPath || generateEnglishSlug(route.path);
    try {
      await translatePageAsync({
        esPath: route.path,
        enPath,
        category: route.category,
      });
      queryClient.invalidateQueries({ queryKey: ['all-routes-inventory'] });
      toast({ title: '✅ Traducción completada', description: enPath });
    } catch (err: any) {
      // Error already handled by useTranslatePage
    }
  };

  const handleTogglePublish = async () => {
    if (!route.enPageData?.dbId) return;
    setIsPublishing(true);
    try {
      const newValue = !route.enPageData.is_indexable;
      const { error } = await supabase
        .from('seo_pages')
        .update({ is_indexable: newValue })
        .eq('id', route.enPageData.dbId);
      if (error) throw error;
      queryClient.invalidateQueries({ queryKey: ['all-routes-inventory'] });
      toast({ title: newValue ? '✅ Página EN publicada' : '📝 Página EN en borrador' });
    } catch (err: any) {
      toast({ variant: 'destructive', title: 'Error', description: err.message });
    } finally {
      setIsPublishing(false);
    }
  };

  const handleLinkTranslation = async () => {
    if (!route.enPageData?.dbId || !route.dbId) return;
    setIsLinking(true);
    try {
      const { error } = await supabase
        .from('seo_pages')
        .update({ translation_of: route.dbId })
        .eq('id', route.enPageData.dbId);
      if (error) throw error;
      queryClient.invalidateQueries({ queryKey: ['all-routes-inventory'] });
      toast({ title: '✅ Traducción vinculada correctamente' });
    } catch (err: any) {
      toast({ variant: 'destructive', title: 'Error', description: err.message });
    } finally {
      setIsLinking(false);
    }
  };

  const recIcons = { error: <XCircle className="h-4 w-4 text-red-500 shrink-0" />, warning: <AlertTriangle className="h-4 w-4 text-yellow-500 shrink-0" />, info: <Info className="h-4 w-4 text-blue-500 shrink-0" /> };
  const recBg = { error: 'bg-red-50 dark:bg-red-950/20', warning: 'bg-yellow-50 dark:bg-yellow-950/20', info: 'bg-blue-50 dark:bg-blue-950/20' };

  return (
    <Dialog open={open} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto p-0 gap-0">
        {/* ─── Header ─── */}
        <div className="sticky top-0 z-10 bg-background border-b px-6 py-4">
          <div className="flex-1 min-w-0">
            <DialogTitle className="font-mono text-base mb-2">{route.path}</DialogTitle>
            <p className="text-sm text-muted-foreground truncate mb-2">{route.title || 'Sin título'}</p>
            <div className="flex items-center gap-2 flex-wrap">
              <Badge variant="outline" className="text-xs">{route.category}</Badge>
              {route.status === 'complete' && <Badge className="bg-emerald-500/10 text-emerald-600 text-xs"><CheckCircle className="h-3 w-3 mr-1" /> Completa</Badge>}
              {route.status === 'translated' && <Badge className="bg-yellow-500/10 text-yellow-600 text-xs"><Zap className="h-3 w-3 mr-1" /> Revisar SEO</Badge>}
              {route.status === 'pending' && <Badge className="bg-green-500/10 text-green-600 text-xs"><Languages className="h-3 w-3 mr-1" /> Lista para traducir</Badge>}
              {route.status === 'code-only' && <Badge className="bg-blue-500/10 text-blue-600 text-xs"><FileText className="h-3 w-3 mr-1" /> Nueva</Badge>}
              {route.is_indexable ? (
                <Badge className="bg-green-600/10 text-green-700 text-xs"><Eye className="h-3 w-3 mr-1" /> Publicada ES</Badge>
              ) : route.inDatabase ? (
                <Badge className="bg-yellow-500/10 text-yellow-700 text-xs"><EyeOff className="h-3 w-3 mr-1" /> Borrador ES</Badge>
              ) : null}
            </div>
          </div>
        </div>

        <div className="px-6 py-6 space-y-8">
          {/* ─── Estado Actual (3 columns) ─── */}
          <div>
            <SectionHeader icon={<Globe className="h-4 w-4" />} title="Estado Actual" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* ES Version */}
              <Card>
                <CardContent className="pt-4 pb-3 space-y-2">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-bold px-2 py-0.5 rounded bg-red-100 dark:bg-red-950 text-red-700">ES</span>
                    <span className="text-sm font-medium">Versión Española</span>
                  </div>
                  {route.inDatabase ? (
                    <>
                      <div className="flex items-center gap-1.5 text-sm">
                        {route.seoOptimized ? (
                          <><CheckCircle className="h-3.5 w-3.5 text-green-600" /> <span>SEO completo</span></>
                        ) : (
                          <><AlertTriangle className="h-3.5 w-3.5 text-yellow-600" /> <span>SEO incompleto</span></>
                        )}
                      </div>
                      <div className="flex items-center gap-1.5 text-sm">
                        {route.is_indexable ? (
                          <><Eye className="h-3.5 w-3.5 text-green-600" /> <span>Indexable</span></>
                        ) : (
                          <><EyeOff className="h-3.5 w-3.5 text-yellow-600" /> <span>No indexable</span></>
                        )}
                      </div>
                      {route.missingCriticalFields.length > 0 && (
                        <p className="text-xs text-red-600">Faltan: {route.missingCriticalFields.join(', ')}</p>
                      )}
                    </>
                  ) : (
                    <p className="text-xs text-muted-foreground">Sin datos en la DB</p>
                  )}
                </CardContent>
              </Card>

              {/* EN Version */}
              <Card>
                <CardContent className="pt-4 pb-3 space-y-2">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-bold px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-blue-700">EN</span>
                    <span className="text-sm font-medium">Versión Inglesa</span>
                  </div>
                  {enStatus && (
                    <div className={`text-sm ${enStatus.color} font-medium`}>{enStatus.label}</div>
                  )}
                  {route.translationPath && (
                    <code className="text-xs font-mono bg-muted px-1.5 py-0.5 rounded block truncate">{route.translationPath}</code>
                  )}
                  {enStatus && (
                    <p className="text-xs text-muted-foreground">{enStatus.description}</p>
                  )}
                </CardContent>
              </Card>

              {/* Link Status */}
              <Card>
                <CardContent className="pt-4 pb-3 space-y-2">
                  <div className="flex items-center gap-2 mb-2">
                    <Link2 className="h-4 w-4" />
                    <span className="text-sm font-medium">Vinculación</span>
                  </div>
                  {route.enPageData?.translation_of ? (
                    <div className="flex items-center gap-1.5 text-sm text-green-600">
                      <CheckCircle className="h-3.5 w-3.5" /> <span>translation_of enlazado</span>
                    </div>
                  ) : route.hasTranslation ? (
                    <div className="space-y-2">
                      <div className="flex items-center gap-1.5 text-sm text-red-600">
                        <XCircle className="h-3.5 w-3.5" /> <span>translation_of NO enlazado</span>
                      </div>
                      <Button size="sm" variant="outline" onClick={handleLinkTranslation} disabled={isLinking}>
                        {isLinking ? <Loader2 className="h-3 w-3 animate-spin mr-1" /> : <LinkIcon className="h-3 w-3 mr-1" />}
                        Vincular ahora
                      </Button>
                    </div>
                  ) : (
                    <p className="text-xs text-muted-foreground">No aplica (sin traducción)</p>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>

          <Separator />

          {/* ─── SEO Comparison ─── */}
          {route.inDatabase && (
            <div>
              <SectionHeader icon={<FileText className="h-4 w-4" />} title="Metadatos SEO Comparados" />
              <div className="space-y-4">
                <ComparisonField label="Título" esValue={route.title} enValue={route.enPageData?.title} maxLen={60} minLen={30} />
                <ComparisonField label="Descripción" esValue={route.description} enValue={route.enPageData?.description} maxLen={160} minLen={120} />
                <ComparisonField label="H1" esValue={route.h1} enValue={route.enPageData?.h1} />
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-xs text-muted-foreground">Keywords (ES)</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {Array.isArray(route.keywords) && route.keywords.length > 0 ? (
                        route.keywords.slice(0, 8).map((kw: string, i: number) => (
                          <Badge key={i} variant="outline" className="text-xs">{kw}</Badge>
                        ))
                      ) : (
                        <span className="text-xs italic text-muted-foreground">Sin keywords</span>
                      )}
                    </div>
                  </div>
                  <div>
                    <span className="text-xs text-muted-foreground">Keywords (EN)</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {Array.isArray(route.enPageData?.keywords) && route.enPageData.keywords.length > 0 ? (
                        route.enPageData.keywords.slice(0, 8).map((kw: string, i: number) => (
                          <Badge key={i} variant="outline" className="text-xs">{kw}</Badge>
                        ))
                      ) : (
                        <span className="text-xs italic text-muted-foreground">Sin keywords</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <Separator />

          {/* ─── Recommendations ─── */}
          {recommendations.length > 0 && (
            <div>
              <SectionHeader icon={<AlertCircle className="h-4 w-4" />} title="Acciones Recomendadas" />
              <div className="space-y-2">
                {recommendations.map((rec, i) => (
                  <div key={i} className={`flex items-start gap-2 p-3 rounded-lg text-sm ${recBg[rec.type]}`}>
                    {recIcons[rec.type]}
                    <span>{rec.message}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <Separator />

          {/* ─── Actions ─── */}
          <div>
            <SectionHeader icon={<Zap className="h-4 w-4" />} title="Acciones" />
            <div className="flex flex-wrap gap-3">
              {/* Translate */}
              {route.status === 'pending' && (
                <Button onClick={handleTranslate} disabled={isTranslating} className="bg-green-600 hover:bg-green-700">
                  {isTranslating ? <Loader2 className="h-4 w-4 mr-2 animate-spin" /> : <Languages className="h-4 w-4 mr-2" />}
                  Traducir ahora
                </Button>
              )}

              {/* Toggle publish EN */}
              {route.enPageData && (
                <Button onClick={handleTogglePublish} disabled={isPublishing} variant="outline">
                  {isPublishing ? <Loader2 className="h-4 w-4 mr-2 animate-spin" /> : route.enPageData.is_indexable ? <EyeOff className="h-4 w-4 mr-2" /> : <Eye className="h-4 w-4 mr-2" />}
                  {route.enPageData.is_indexable ? 'Despublicar EN' : 'Publicar EN'}
                </Button>
              )}

              {/* View in production */}
              <Button variant="outline" asChild>
                <a href={`https://hayasmarketing.com${route.path}`} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Ver en producción (ES)
                </a>
              </Button>

              {route.translationPath && (
                <Button variant="outline" asChild>
                  <a href={`https://hayasmarketing.com${route.translationPath}`} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Ver en producción (EN)
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
