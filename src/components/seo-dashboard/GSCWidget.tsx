import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Globe, TrendingUp, MousePointerClick, Search, AlertCircle, RefreshCw } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

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

export const GSCWidget: React.FC = () => {
  const { toast } = useToast();
  const [dateRange, setDateRange] = useState({
    startDate: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    endDate: new Date().toISOString().split('T')[0],
  });

  const { data, isLoading, error, refetch, isError } = useQuery<GSCData>({
    queryKey: ['gsc-data', dateRange],
    queryFn: async () => {
      const { data, error } = await supabase.functions.invoke('gsc-data', {
        body: {
          property: 'https://hayasmarketing.com/',
          startDate: dateRange.startDate,
          endDate: dateRange.endDate,
          dimensions: ['page', 'query'],
          rowLimit: 100,
        },
      });

      if (error) throw error;
      return data;
    },
    retry: 1,
    enabled: false, // No ejecutar automáticamente hasta que el usuario configure las credenciales
  });

  const handleConnect = () => {
    toast({
      title: "Conectar Google Search Console",
      description: "Para conectar GSC necesitas configurar las credenciales en Lovable Cloud Secrets",
    });
  };

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

  const topPagesArray = topPages ? Object.values(topPages).sort((a, b) => b.clicks - a.clicks).slice(0, 5) : [];

  const topQueries = data?.rows
    ?.sort((a, b) => b.clicks - a.clicks)
    .slice(0, 5);

  const totalClicks = data?.rows?.reduce((sum, row) => sum + row.clicks, 0) || 0;
  const totalImpressions = data?.rows?.reduce((sum, row) => sum + row.impressions, 0) || 0;
  const avgCTR = totalImpressions > 0 ? (totalClicks / totalImpressions) * 100 : 0;

  if (isError) {
    return (
      <Card className="border-destructive/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-destructive">
            <AlertCircle className="h-5 w-5" />
            Error de Conexión con Google Search Console
          </CardTitle>
          <CardDescription>
            No se pudo conectar con la API de Google Search Console
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              {error instanceof Error ? error.message : 'Error desconocido'}
            </p>
            <div className="bg-muted p-4 rounded-lg space-y-2">
              <h4 className="font-semibold text-sm">¿Cómo configurar la conexión?</h4>
              <ol className="text-sm space-y-2 list-decimal list-inside">
                <li>Crea un Service Account en Google Cloud Console</li>
                <li>Habilita la API de Google Search Console</li>
                <li>Descarga el archivo JSON con las credenciales</li>
                <li>Añade los siguientes secrets en Lovable Cloud:
                  <ul className="ml-6 mt-2 space-y-1 list-disc list-inside">
                    <li><code className="bg-background px-2 py-0.5 rounded">GSC_SERVICE_EMAIL</code></li>
                    <li><code className="bg-background px-2 py-0.5 rounded">GSC_PRIVATE_KEY</code></li>
                    <li><code className="bg-background px-2 py-0.5 rounded">GSC_PROPERTY_URL</code></li>
                  </ul>
                </li>
                <li>Otorga permisos de lectura al Service Account en Search Console</li>
              </ol>
            </div>
            <Button onClick={() => refetch()} variant="outline">
              <RefreshCw className="h-4 w-4 mr-2" />
              Reintentar
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
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
            <div className="text-2xl font-bold">{isLoading ? '...' : totalClicks.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">Últimos 30 días</p>
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
            <div className="text-2xl font-bold">{isLoading ? '...' : totalImpressions.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">Últimos 30 días</p>
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
            <div className="text-2xl font-bold">{isLoading ? '...' : `${avgCTR.toFixed(2)}%`}</div>
            <p className="text-xs text-muted-foreground">Últimos 30 días</p>
          </CardContent>
        </Card>
      </div>

      {/* Top Pages */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Top 5 Páginas por Clicks</CardTitle>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <div className="text-sm text-muted-foreground">Cargando datos...</div>
          ) : topPagesArray.length > 0 ? (
            <div className="space-y-3">
              {topPagesArray.map((row, idx) => (
                <div key={idx} className="flex items-center justify-between border-b pb-2 last:border-0">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{row.keys[0]}</p>
                    <p className="text-xs text-muted-foreground">
                      {row.impressions.toLocaleString()} impresiones
                    </p>
                  </div>
                  <div className="text-right ml-4">
                    <p className="text-sm font-bold">{row.clicks}</p>
                    <p className="text-xs text-muted-foreground">{(row.ctr * 100).toFixed(1)}% CTR</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <Globe className="h-12 w-12 mx-auto text-muted-foreground/50 mb-4" />
              <p className="text-sm text-muted-foreground mb-4">
                No hay datos disponibles. Conecta tu cuenta de Google Search Console.
              </p>
              <Button onClick={handleConnect} variant="outline">
                <Globe className="h-4 w-4 mr-2" />
                Configurar Conexión
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Top Queries */}
      {topQueries && topQueries.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Top 5 Keywords</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {topQueries.map((row, idx) => (
                <div key={idx} className="flex items-center justify-between border-b pb-2 last:border-0">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium">{row.keys[1]}</p>
                    <p className="text-xs text-muted-foreground">
                      Posición promedio: {row.position.toFixed(1)}
                    </p>
                  </div>
                  <div className="text-right ml-4">
                    <p className="text-sm font-bold">{row.clicks}</p>
                    <p className="text-xs text-muted-foreground">{(row.ctr * 100).toFixed(1)}% CTR</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
