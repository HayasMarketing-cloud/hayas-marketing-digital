import React, { useState, useMemo } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { AdminBreadcrumbs } from '@/components/admin/AdminBreadcrumbs';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { SyncRoutesButton } from '@/components/admin/seo/SyncRoutesButton';
import { PageDetailPanel } from '@/components/admin/seo/PageDetailPanel';
import { useSEOTrackerData, type SEOTrackerPage } from '@/hooks/useSEOTrackerData';
import { useNavigate } from 'react-router-dom';
import {
  FileText, TrendingUp, Globe, Search, Download,
  CheckCircle, XCircle, AlertTriangle, HelpCircle,
  Edit, BarChart3, Zap, MousePointerClick
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const SEOTracker: React.FC = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { pages, isLoading, metrics } = useSEOTrackerData();

  const [selectedPage, setSelectedPage] = useState<SEOTrackerPage | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [languageFilter, setLanguageFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [indexFilter, setIndexFilter] = useState('all');

  const filteredPages = useMemo(() => {
    return pages.filter(page => {
      const matchSearch = !searchTerm ||
        page.path.toLowerCase().includes(searchTerm.toLowerCase()) ||
        page.title.toLowerCase().includes(searchTerm.toLowerCase());

      const matchLang = languageFilter === 'all' ||
        (languageFilter === 'es' && page.path.startsWith('/es')) ||
        (languageFilter === 'en' && page.path.startsWith('/en'));

      const matchCategory = categoryFilter === 'all' || page.category === categoryFilter;

      const matchStatus = statusFilter === 'all' ||
        (statusFilter === 'complete' && page.isComplete && !page.hasWarnings) ||
        (statusFilter === 'incomplete' && !page.isComplete) ||
        (statusFilter === 'warnings' && page.hasWarnings);

      const matchIndex = indexFilter === 'all' ||
        (indexFilter === 'indexed' && page.indexation?.is_indexed === true) ||
        (indexFilter === 'not-indexed' && page.indexation?.is_indexed === false) ||
        (indexFilter === 'unknown' && !page.indexation);

      return matchSearch && matchLang && matchCategory && matchStatus && matchIndex;
    });
  }, [pages, searchTerm, languageFilter, categoryFilter, statusFilter, indexFilter]);

  const handleExportCSV = () => {
    const headers = ['Path', 'Título', 'Idioma', 'Categoría', 'Estado SEO', 'Schema', 'Robots', 'Clicks GSC', 'Impresiones', 'CTR', 'Posición', 'Indexada'];
    const rows = filteredPages.map(p => [
      p.path,
      `"${p.title.replace(/"/g, '""')}"`,
      p.inLanguage,
      p.category,
      p.isComplete ? 'Completa' : 'Incompleta',
      p.schemaType,
      p.robots,
      p.gscClicks ?? '',
      p.gscImpressions ?? '',
      p.gscCtr ? p.gscCtr.toFixed(2) + '%' : '',
      p.gscPosition ? p.gscPosition.toFixed(1) : '',
      p.indexation?.is_indexed === true ? 'Sí' : p.indexation?.is_indexed === false ? 'No' : 'Desconocido',
    ]);

    const csv = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `seo-tracker-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);
    toast({ title: 'CSV exportado', description: `${filteredPages.length} páginas exportadas` });
  };

  const getIndexBadge = (page: SEOTrackerPage) => {
    if (!page.indexation) return <Badge variant="outline" className="text-xs"><HelpCircle className="h-3 w-3 mr-1" />?</Badge>;
    if (page.indexation.is_indexed) return <Badge className="bg-green-600 text-xs"><CheckCircle className="h-3 w-3 mr-1" />Idx</Badge>;
    return <Badge variant="destructive" className="text-xs"><XCircle className="h-3 w-3 mr-1" />No</Badge>;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Simple SEO nav */}
      <nav className="border-b bg-background/95 backdrop-blur">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 h-12">
            <Button variant="default" size="sm" className="gap-1" onClick={() => navigate('/admin/seo')}>
              <BarChart3 className="h-4 w-4" /> SEO Tracker
            </Button>
            <Button variant="ghost" size="sm" className="gap-1" onClick={() => navigate('/admin/seo/indexnow')}>
              <Zap className="h-4 w-4" /> IndexNow
            </Button>
          </div>
        </div>
      </nav>

      <main className="flex-1 container mx-auto px-4 py-6">
        <div className="max-w-7xl mx-auto space-y-6">
          <AdminBreadcrumbs currentPage="SEO Tracker" />

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold">SEO Tracker</h1>
              <p className="text-muted-foreground text-sm">Vista unificada de todos los activos digitales</p>
            </div>
            <div className="flex gap-2 flex-wrap">
              <SyncRoutesButton onEditPage={(path) => {
                const p = pages.find(pg => pg.path === path);
                if (p) setSelectedPage(p);
              }} />
              <Button variant="outline" size="sm" onClick={handleExportCSV}>
                <Download className="h-4 w-4 mr-1" /> CSV
              </Button>
            </div>
          </div>

          {/* Metric cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card>
              <CardContent className="pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-muted-foreground">Páginas</p>
                    <p className="text-2xl font-bold">{metrics.totalPages}</p>
                  </div>
                  <FileText className="h-6 w-6 text-muted-foreground" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-muted-foreground">Score SEO</p>
                    <p className="text-2xl font-bold">{metrics.healthScore}%</p>
                  </div>
                  <TrendingUp className={`h-6 w-6 ${metrics.healthScore >= 80 ? 'text-green-500' : 'text-yellow-500'}`} />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-muted-foreground">Clicks GSC (30d)</p>
                    <p className="text-2xl font-bold">{metrics.totalGscClicks.toLocaleString()}</p>
                  </div>
                  <MousePointerClick className="h-6 w-6 text-muted-foreground" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-muted-foreground">Indexadas</p>
                    <p className="text-2xl font-bold">{metrics.indexedPages}</p>
                  </div>
                  <Globe className="h-6 w-6 text-muted-foreground" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Filters */}
          <div className="flex gap-3 flex-wrap items-center">
            <div className="relative flex-1 min-w-[200px]">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Buscar por path o título..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="pl-9" />
            </div>
            <Select value={languageFilter} onValueChange={setLanguageFilter}>
              <SelectTrigger className="w-[130px]"><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Idioma</SelectItem>
                <SelectItem value="es">🇪🇸 ES</SelectItem>
                <SelectItem value="en">🇬🇧 EN</SelectItem>
              </SelectContent>
            </Select>
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-[140px]"><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Categoría</SelectItem>
                <SelectItem value="main">Principal</SelectItem>
                <SelectItem value="service">Servicios</SelectItem>
                <SelectItem value="solution">Soluciones</SelectItem>
                <SelectItem value="blog">Blog</SelectItem>
                <SelectItem value="case-study">Casos</SelectItem>
                <SelectItem value="kit-digital">Kit Digital</SelectItem>
                <SelectItem value="tool">Herramientas</SelectItem>
              </SelectContent>
            </Select>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-[140px]"><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Estado SEO</SelectItem>
                <SelectItem value="complete">Completa</SelectItem>
                <SelectItem value="incomplete">Incompleta</SelectItem>
                <SelectItem value="warnings">Warnings</SelectItem>
              </SelectContent>
            </Select>
            <Select value={indexFilter} onValueChange={setIndexFilter}>
              <SelectTrigger className="w-[140px]"><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Indexación</SelectItem>
                <SelectItem value="indexed">Indexada</SelectItem>
                <SelectItem value="not-indexed">No indexada</SelectItem>
                <SelectItem value="unknown">Desconocida</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Pages list */}
          <div className="text-sm text-muted-foreground mb-2">{filteredPages.length} páginas</div>

          {isLoading ? (
            <div className="text-center py-12 text-muted-foreground">Cargando datos del tracker...</div>
          ) : (
            <div className="space-y-2">
              {filteredPages.map((page) => (
                <div
                  key={page.path}
                  className="border rounded-lg p-4 hover:bg-muted/30 transition-colors cursor-pointer group"
                  onClick={() => setSelectedPage(page)}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      {/* Row 1: Path + badges */}
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <span className="font-mono text-sm font-medium truncate">{page.path}</span>
                        <Badge variant="outline" className="text-xs">{page.category}</Badge>
                        {page.isComplete ? (
                          <Badge className="bg-green-600/10 text-green-700 border-green-200 text-xs">
                            <CheckCircle className="h-3 w-3 mr-1" /> Completa
                          </Badge>
                        ) : (
                          <Badge variant="destructive" className="text-xs">
                            <AlertTriangle className="h-3 w-3 mr-1" /> Incompleta
                          </Badge>
                        )}
                        {getIndexBadge(page)}
                      </div>

                      {/* Row 2: Title */}
                      <p className="text-sm text-muted-foreground truncate mb-1">
                        {page.title || <span className="italic">Sin título</span>}
                      </p>

                      {/* Row 3: GSC metrics inline */}
                      {(page.gscClicks !== null || page.gscImpressions !== null) && (
                        <div className="flex gap-4 text-xs text-muted-foreground">
                          {page.gscClicks !== null && <span>📊 {page.gscClicks} clicks</span>}
                          {page.gscImpressions !== null && <span>{page.gscImpressions.toLocaleString()} imp</span>}
                          {page.gscCtr !== null && <span>{page.gscCtr.toFixed(1)}% CTR</span>}
                          {page.gscPosition !== null && <span>Pos {page.gscPosition.toFixed(1)}</span>}
                        </div>
                      )}
                    </div>

                    <Button size="sm" variant="ghost" className="opacity-0 group-hover:opacity-100 transition-opacity" onClick={(e) => { e.stopPropagation(); setSelectedPage(page); }}>
                      <Edit className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}

              {filteredPages.length === 0 && (
                <div className="text-center py-12 text-muted-foreground">
                  <Search className="h-10 w-10 mx-auto mb-3 opacity-20" />
                  <p>No se encontraron páginas con los filtros aplicados</p>
                </div>
              )}
            </div>
          )}
        </div>
      </main>

      <PageDetailPanel
        page={selectedPage}
        open={!!selectedPage}
        onClose={() => setSelectedPage(null)}
      />

      <Footer />
    </div>
  );
};

export default SEOTracker;
