import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { supabase } from '@/integrations/supabase/client';
import { 
  TrendingUp, TrendingDown, MousePointer, Eye, 
  BarChart3, RefreshCw, ExternalLink, AlertCircle 
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface GSCMetrics {
  clicks: number;
  impressions: number;
  ctr: number;
  position: number;
}

interface GSCQuickMetricsProps {
  showFullLink?: boolean;
}

export const GSCQuickMetrics: React.FC<GSCQuickMetricsProps> = ({ showFullLink = true }) => {
  const navigate = useNavigate();
  const [metrics, setMetrics] = useState<GSCMetrics | null>(null);
  const [previousMetrics, setPreviousMetrics] = useState<GSCMetrics | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  const fetchGSCData = async () => {
    setIsLoading(true);
    setError(null);

    try {
      // Últimos 7 días
      const endDate = new Date();
      const startDate = new Date();
      startDate.setDate(startDate.getDate() - 7);
      
      // 7 días anteriores para comparación
      const prevEndDate = new Date(startDate);
      prevEndDate.setDate(prevEndDate.getDate() - 1);
      const prevStartDate = new Date(prevEndDate);
      prevStartDate.setDate(prevStartDate.getDate() - 7);

      const formatDate = (date: Date) => date.toISOString().split('T')[0];

      // Llamadas paralelas para período actual y anterior
      const [currentResponse, previousResponse] = await Promise.all([
        supabase.functions.invoke('gsc-data', {
          body: {
            property: 'sc-domain:hayas.marketing',
            startDate: formatDate(startDate),
            endDate: formatDate(endDate),
            dimensions: [],
            rowLimit: 1
          }
        }),
        supabase.functions.invoke('gsc-data', {
          body: {
            property: 'sc-domain:hayas.marketing',
            startDate: formatDate(prevStartDate),
            endDate: formatDate(prevEndDate),
            dimensions: [],
            rowLimit: 1
          }
        })
      ]);

      if (currentResponse.error) {
        throw new Error(currentResponse.error.message);
      }

      const currentData = currentResponse.data;
      const previousData = previousResponse.data;

      // Extraer métricas agregadas
      if (currentData?.rows && currentData.rows.length > 0) {
        const row = currentData.rows[0];
        setMetrics({
          clicks: row.clicks || 0,
          impressions: row.impressions || 0,
          ctr: (row.ctr || 0) * 100,
          position: row.position || 0
        });
      } else {
        // Si no hay rows, calcular totales
        setMetrics({
          clicks: currentData?.rows?.reduce((acc: number, r: any) => acc + (r.clicks || 0), 0) || 0,
          impressions: currentData?.rows?.reduce((acc: number, r: any) => acc + (r.impressions || 0), 0) || 0,
          ctr: 0,
          position: 0
        });
      }

      if (previousData?.rows && previousData.rows.length > 0) {
        const row = previousData.rows[0];
        setPreviousMetrics({
          clicks: row.clicks || 0,
          impressions: row.impressions || 0,
          ctr: (row.ctr || 0) * 100,
          position: row.position || 0
        });
      }

      setLastUpdated(new Date());
    } catch (err) {
      console.error('Error fetching GSC data:', err);
      setError(err instanceof Error ? err.message : 'Error al cargar datos de GSC');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchGSCData();
  }, []);

  const calculateChange = (current: number, previous: number) => {
    if (previous === 0) return null;
    return ((current - previous) / previous) * 100;
  };

  const renderTrend = (current: number, previous: number | undefined, inverted = false) => {
    if (!previous) return null;
    const change = calculateChange(current, previous);
    if (change === null) return null;
    
    const isPositive = inverted ? change < 0 : change > 0;
    const Icon = isPositive ? TrendingUp : TrendingDown;
    const color = isPositive ? 'text-green-600' : 'text-red-600';
    
    return (
      <span className={`flex items-center gap-1 text-xs ${color}`}>
        <Icon className="h-3 w-3" />
        {Math.abs(change).toFixed(1)}%
      </span>
    );
  };

  if (error) {
    return (
      <Card className="border-destructive/50">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2 text-base">
            <BarChart3 className="h-4 w-4" />
            Google Search Console
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-2 text-destructive text-sm">
            <AlertCircle className="h-4 w-4" />
            <span>{error}</span>
          </div>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={fetchGSCData}
            className="mt-3"
          >
            <RefreshCw className="h-3 w-3 mr-2" />
            Reintentar
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2 text-base">
              <BarChart3 className="h-4 w-4 text-primary" />
              Google Search Console
            </CardTitle>
            <CardDescription className="text-xs">
              Últimos 7 días vs. semana anterior
            </CardDescription>
          </div>
          <div className="flex items-center gap-2">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={fetchGSCData}
              disabled={isLoading}
              className="h-7 w-7"
            >
              <RefreshCw className={`h-3 w-3 ${isLoading ? 'animate-spin' : ''}`} />
            </Button>
            {showFullLink && (
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => navigate('/admin/seo/gsc')}
                className="h-7 text-xs"
              >
                Ver más
                <ExternalLink className="h-3 w-3 ml-1" />
              </Button>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="space-y-2">
                <Skeleton className="h-4 w-16" />
                <Skeleton className="h-8 w-20" />
              </div>
            ))}
          </div>
        ) : metrics ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <MousePointer className="h-3 w-3 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">Clicks</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold">{metrics.clicks.toLocaleString()}</span>
                {renderTrend(metrics.clicks, previousMetrics?.clicks)}
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Eye className="h-3 w-3 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">Impresiones</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold">{metrics.impressions.toLocaleString()}</span>
                {renderTrend(metrics.impressions, previousMetrics?.impressions)}
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <BarChart3 className="h-3 w-3 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">CTR</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold">{metrics.ctr.toFixed(2)}%</span>
                {renderTrend(metrics.ctr, previousMetrics?.ctr)}
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-3 w-3 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">Posición media</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold">{metrics.position.toFixed(1)}</span>
                {renderTrend(metrics.position, previousMetrics?.position, true)}
              </div>
            </div>
          </div>
        ) : (
          <p className="text-sm text-muted-foreground">No hay datos disponibles</p>
        )}

        {lastUpdated && (
          <p className="text-xs text-muted-foreground mt-4">
            Actualizado: {lastUpdated.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })}
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default GSCQuickMetrics;
