import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Database, MessageCircleQuestion, Activity } from 'lucide-react';
import { useAllSEOPages } from '@/hooks/useSEOData';

export const SEOMetrics: React.FC = () => {
  const { data: pages, isLoading } = useAllSEOPages();

  if (isLoading || !pages) {
    return <div className="text-muted-foreground">Cargando métricas...</div>;
  }

  const metrics = {
    total: pages.length,
    indexable: pages.filter(p => p.data.isIndexable !== false).length,
    withSchema: pages.filter(p => p.data.additionalSchema || p.data.schemaType !== 'WebPage').length,
    withFAQs: pages.filter(p => p.data.faqs && p.data.faqs.length > 0).length,
    healthScore: Math.round(
      (pages.filter(p => !p.hasWarnings).length / pages.length) * 100
    )
  };

  const metricsData = [
    {
      title: 'Páginas Totales',
      value: metrics.total,
      subtitle: `${metrics.indexable} indexables`,
      icon: FileText,
      color: 'blue'
    },
    {
      title: 'Datos Estructurados',
      value: metrics.withSchema,
      subtitle: 'Con Schema.org',
      icon: Database,
      color: 'purple'
    },
    {
      title: 'FAQs Implementadas',
      value: metrics.withFAQs,
      subtitle: 'Páginas con FAQs',
      icon: MessageCircleQuestion,
      color: 'green'
    },
    {
      title: 'Salud SEO',
      value: `${metrics.healthScore}%`,
      subtitle: 'Páginas optimizadas',
      icon: Activity,
      color: metrics.healthScore >= 80 ? 'green' : metrics.healthScore >= 60 ? 'yellow' : 'red'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {metricsData.map((metric, i) => (
        <Card key={i}>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
            <metric.icon className="h-4 w-4 text-muted-foreground" />
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
