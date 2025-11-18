import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, CheckCircle2, Sparkles, AlertCircle, TrendingUp } from 'lucide-react';
import { useAllSEOPages } from '@/hooks/useSEOData';
import { getRegisteredRoutes, getIndexableRoutes } from '@/utils/routeRegistryData';

export const EnhancedSEOMetrics: React.FC = () => {
  const { data: pages, isLoading } = useAllSEOPages();
  
  if (isLoading || !pages) {
    return <div className="text-muted-foreground">Cargando métricas...</div>;
  }

  const allRoutes = getRegisteredRoutes();
  const indexableRoutes = getIndexableRoutes();
  const dbPaths = new Set(pages.filter(p => p.source === 'database').map(p => p.path));
  
  // Calcular métricas
  const routesWithOptimizedSEO = indexableRoutes.filter(r => dbPaths.has(r.path)).length;
  const routesWithAutoSEO = indexableRoutes.length - routesWithOptimizedSEO;
  const healthScore = indexableRoutes.length > 0 
    ? Math.round((routesWithOptimizedSEO / indexableRoutes.length) * 100)
    : 100;

  const metrics = [
    {
      title: 'Rutas Totales',
      value: allRoutes.length,
      subtitle: `${indexableRoutes.length} indexables`,
      icon: FileText,
      color: 'blue'
    },
    {
      title: 'SEO Optimizado',
      value: routesWithOptimizedSEO,
      subtitle: 'Editadas manualmente',
      icon: CheckCircle2,
      color: 'green'
    },
    {
      title: 'Auto-generadas',
      value: routesWithAutoSEO,
      subtitle: 'Con SEO básico',
      icon: Sparkles,
      color: 'blue'
    },
    {
      title: 'Score SEO',
      value: `${healthScore}%`,
      subtitle: 'Nivel de optimización',
      icon: TrendingUp,
      color: healthScore >= 80 ? 'green' : healthScore >= 60 ? 'yellow' : 'red'
    }
  ];

  const getColorClass = (color: string) => {
    const colors = {
      blue: 'text-blue-500',
      green: 'text-green-500',
      yellow: 'text-yellow-500',
      red: 'text-red-500',
      purple: 'text-purple-500'
    };
    return colors[color as keyof typeof colors] || 'text-muted-foreground';
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {metrics.map((metric, i) => (
        <Card key={i}>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
            <metric.icon className={`h-4 w-4 ${getColorClass(metric.color)}`} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metric.value}</div>
            <p className="text-xs text-muted-foreground mt-1">{metric.subtitle}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
