import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, AlertTriangle, Globe, TrendingUp } from 'lucide-react';
import { useAllSEOPages } from '@/hooks/useSEOData';

export const EnhancedSEOMetrics: React.FC = () => {
  const { data: pages, isLoading } = useAllSEOPages();

  if (isLoading || !pages) {
    return <div className="text-muted-foreground">Cargando métricas...</div>;
  }

  const esPages = pages.filter(p => p.path.startsWith('/es'));
  const enPages = pages.filter(p => p.path.startsWith('/en'));
  const withWarnings = pages.filter(p => p.hasWarnings);

  // Campos críticos: title, description, keywords, h1
  const complete = pages.filter(p => {
    const d = p.data;
    return d.title && d.description && d.h1 && d.keywords && d.keywords.length > 0;
  });

  const healthScore = pages.length > 0
    ? Math.round((complete.length / pages.length) * 100)
    : 100;

  const metrics = [
    {
      title: 'Total Páginas',
      value: pages.length,
      subtitle: `${esPages.length} ES · ${enPages.length} EN`,
      icon: FileText,
      color: 'blue'
    },
    {
      title: 'Campos Completos',
      value: complete.length,
      subtitle: `de ${pages.length} páginas`,
      icon: TrendingUp,
      color: 'green'
    },
    {
      title: 'Con Warnings',
      value: withWarnings.length,
      subtitle: 'Título o descripción',
      icon: AlertTriangle,
      color: withWarnings.length > 0 ? 'yellow' : 'green'
    },
    {
      title: 'Score SEO',
      value: `${healthScore}%`,
      subtitle: 'Campos críticos completos',
      icon: Globe,
      color: healthScore >= 80 ? 'green' : healthScore >= 60 ? 'yellow' : 'red'
    }
  ];

  const getColorClass = (color: string) => {
    const colors: Record<string, string> = {
      blue: 'text-blue-500',
      green: 'text-green-500',
      yellow: 'text-yellow-500',
      red: 'text-red-500',
    };
    return colors[color] || 'text-muted-foreground';
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
