import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEONavigation from '@/components/seo-dashboard/SEONavigation';
import { AdminBreadcrumbs } from '@/components/admin/AdminBreadcrumbs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Globe, TrendingUp, MousePointerClick, Search, RefreshCw, Download } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

interface GSCRow {
  keys: string[];
  clicks: number;
  impressions: number;
  ctr: number;
  position: number;
}

interface GSCData {
  rows?: GSCRow[];
}

const GSCFullReport: React.FC = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState('');
  const [dateRange] = useState({
    startDate: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    endDate: new Date().toISOString().split('T')[0],
  });

  const { data, isLoading, refetch } = useQuery<GSCData>({
    queryKey: ['gsc-full-data', dateRange],
    queryFn: async () => {
      const { data, error } = await supabase.functions.invoke('gsc-data', {
        body: {
          property: 'https://hayasmarketing.com/',
          startDate: dateRange.startDate,
          endDate: dateRange.endDate,
          dimensions: ['page', 'query'],
          rowLimit: 1000,
        },
      });

      if (error) throw error;
      return data;
    },
    retry: 1,
  });

  const topPages = data?.rows
    ?.reduce((acc: { [key: string]: GSCRow }, row) => {
      const page = row.keys[0];
      if (!acc[page]) {
        acc[page] = { ...row };
      } else {
        acc[page].clicks += row.clicks;
        acc[page].impressions += row.impressions;
      }
      return acc;
    }, {});

  const topPagesArray = topPages 
    ? Object.values(topPages).sort((a, b) => b.clicks - a.clicks) 
    : [];

  const topQueries = data?.rows
    ?.sort((a, b) => b.clicks - a.clicks) || [];

  const filteredPages = topPagesArray.filter(row =>
    row.keys[0].toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredQueries = topQueries.filter(row =>
    row.keys[1]?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalClicks = data?.rows?.reduce((sum, row) => sum + row.clicks, 0) || 0;
  const totalImpressions = data?.rows?.reduce((sum, row) => sum + row.impressions, 0) || 0;
  const avgCTR = totalImpressions > 0 ? (totalClicks / totalImpressions) * 100 : 0;

  const handleExport = () => {
    const csv = [
      ['Tipo', 'URL/Query', 'Clicks', 'Impresiones', 'CTR', 'Posición'],
      ...topPagesArray.map(row => [
        'Página',
        row.keys[0],
        row.clicks,
        row.impressions,
        (row.ctr * 100).toFixed(2) + '%',
        row.position.toFixed(1)
      ]),
      [],
      ...topQueries.map(row => [
        'Keyword',
        row.keys[1],
        row.clicks,
        row.impressions,
        (row.ctr * 100).toFixed(2) + '%',
        row.position.toFixed(1)
      ])
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `gsc-report-${dateRange.startDate}-${dateRange.endDate}.csv`;
    a.click();
    
    toast({
      title: "Exportado con éxito",
      description: "El reporte se ha descargado en formato CSV",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <SEONavigation />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto space-y-6">
          <AdminBreadcrumbs currentPage="Google Search Console" />
          {/* Header */}
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold mb-2">Google Search Console - Informe Completo</h1>
              <p className="text-muted-foreground">
                Análisis detallado del rendimiento orgánico de Hayas Marketing
              </p>
            </div>
            <div className="flex gap-2">
              <Button onClick={() => refetch()} variant="outline" disabled={isLoading}>
                <RefreshCw className={`h-4 w-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
                Actualizar
              </Button>
              <Button onClick={handleExport} disabled={!data?.rows?.length}>
                <Download className="h-4 w-4 mr-2" />
                Exportar CSV
              </Button>
            </div>
          </div>

          {/* Overview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium flex items-center gap-2">
                  <MousePointerClick className="h-4 w-4 text-muted-foreground" />
                  Total Clicks
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{totalClicks.toLocaleString()}</div>
                <p className="text-xs text-muted-foreground mt-1">Últimos 30 días</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                  Impresiones
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{totalImpressions.toLocaleString()}</div>
                <p className="text-xs text-muted-foreground mt-1">Últimos 30 días</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium flex items-center gap-2">
                  <Search className="h-4 w-4 text-muted-foreground" />
                  CTR Promedio
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{avgCTR.toFixed(2)}%</div>
                <p className="text-xs text-muted-foreground mt-1">Últimos 30 días</p>
              </CardContent>
            </Card>
          </div>

          {/* Search Filter */}
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <Search className="h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Buscar páginas o keywords..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="max-w-md"
                />
              </div>
            </CardContent>
          </Card>

          {/* Pages Table */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5" />
                  Todas las Páginas ({filteredPages.length})
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <div className="text-center py-8 text-muted-foreground">
                  Cargando datos de Google Search Console...
                </div>
              ) : filteredPages.length > 0 ? (
                <div className="border rounded-lg overflow-hidden">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[50px]">#</TableHead>
                        <TableHead>URL</TableHead>
                        <TableHead className="text-right">Clicks</TableHead>
                        <TableHead className="text-right">Impresiones</TableHead>
                        <TableHead className="text-right">CTR</TableHead>
                        <TableHead className="text-right">Posición</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredPages.map((row, idx) => (
                        <TableRow key={idx}>
                          <TableCell className="font-medium">{idx + 1}</TableCell>
                          <TableCell className="max-w-md truncate">
                            <a 
                              href={row.keys[0]} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-primary hover:underline"
                            >
                              {row.keys[0]}
                            </a>
                          </TableCell>
                          <TableCell className="text-right font-semibold">{row.clicks}</TableCell>
                          <TableCell className="text-right">{row.impressions.toLocaleString()}</TableCell>
                          <TableCell className="text-right">{(row.ctr * 100).toFixed(2)}%</TableCell>
                          <TableCell className="text-right">{row.position.toFixed(1)}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  No se encontraron resultados
                </div>
              )}
            </CardContent>
          </Card>

          {/* Keywords Table */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="h-5 w-5" />
                Todas las Keywords ({filteredQueries.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <div className="text-center py-8 text-muted-foreground">
                  Cargando datos...
                </div>
              ) : filteredQueries.length > 0 ? (
                <div className="border rounded-lg overflow-hidden">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[50px]">#</TableHead>
                        <TableHead>Keyword</TableHead>
                        <TableHead>Página</TableHead>
                        <TableHead className="text-right">Clicks</TableHead>
                        <TableHead className="text-right">Impresiones</TableHead>
                        <TableHead className="text-right">CTR</TableHead>
                        <TableHead className="text-right">Posición</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredQueries.map((row, idx) => (
                        <TableRow key={idx}>
                          <TableCell className="font-medium">{idx + 1}</TableCell>
                          <TableCell className="font-semibold">{row.keys[1]}</TableCell>
                          <TableCell className="max-w-xs truncate text-xs text-muted-foreground">
                            {row.keys[0]}
                          </TableCell>
                          <TableCell className="text-right font-semibold">{row.clicks}</TableCell>
                          <TableCell className="text-right">{row.impressions.toLocaleString()}</TableCell>
                          <TableCell className="text-right">{(row.ctr * 100).toFixed(2)}%</TableCell>
                          <TableCell className="text-right">{row.position.toFixed(1)}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  No se encontraron resultados
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default GSCFullReport;
