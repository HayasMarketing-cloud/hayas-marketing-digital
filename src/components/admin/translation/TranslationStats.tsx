import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { useTranslationStatus } from '@/hooks/useTranslationStatus';
import { FileText, CheckCircle2, Clock, FileEdit, Code, Shield, AlertTriangle } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

interface TranslationStatsProps {
  onCategorySelect?: (category: string) => void;
}

export const TranslationStats: React.FC<TranslationStatsProps> = ({ onCategorySelect }) => {
  const { stats, isLoading } = useTranslationStatus();
  const { t } = useTranslation();
  const adminStats = t('admin.stats') as any;

  if (isLoading) {
    return (
      <div className="grid gap-4 md:grid-cols-4 lg:grid-cols-7">
        {[1, 2, 3, 4, 5, 6, 7].map((i) => (
          <Card key={i}>
            <CardContent className="p-6">
              <div className="h-20 animate-pulse bg-muted rounded" />
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  const statCards = [
    {
      title: 'Rutas en Código',
      subtitle: 'Total detectadas',
      value: stats.totalInCode,
      icon: Code,
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10',
    },
    {
      title: adminStats.totalPages,
      subtitle: 'En base de datos',
      value: stats.total,
      icon: FileText,
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
    },
    {
      title: adminStats.translated,
      subtitle: 'Traducidas y publicadas',
      value: stats.translated,
      icon: CheckCircle2,
      color: 'text-green-500',
      bgColor: 'bg-green-500/10',
      percentage: stats.totalInCode > 0 ? Math.round((stats.translated / stats.totalInCode) * 100) : 0,
    },
    {
      title: adminStats.pending,
      subtitle: 'Sin traducir',
      value: stats.pending,
      icon: Clock,
      color: 'text-orange-500',
      bgColor: 'bg-orange-500/10',
      percentage: stats.totalInCode > 0 ? Math.round((stats.pending / stats.totalInCode) * 100) : 0,
    },
    {
      title: adminStats.drafts,
      subtitle: 'Borradores',
      value: stats.drafts,
      icon: FileEdit,
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-500/10',
    },
    {
      title: 'Solo en Código',
      subtitle: 'Sin datos SEO',
      value: stats.codeOnly,
      icon: AlertTriangle,
      color: 'text-red-500',
      bgColor: 'bg-red-500/10',
    },
    {
      title: 'SEO Optimizado',
      subtitle: 'Completo y validado',
      value: stats.seoOptimized,
      icon: Shield,
      color: 'text-teal-500',
      bgColor: 'bg-teal-500/10',
      percentage: stats.total > 0 ? Math.round((stats.seoOptimized / stats.total) * 100) : 0,
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-4 lg:grid-cols-7">
      {statCards.map((stat) => {
        const Icon = stat.icon;
        return (
          <Card key={stat.title} className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div className="space-y-1">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                {stat.subtitle && (
                  <p className="text-xs text-muted-foreground">{stat.subtitle}</p>
                )}
              </div>
              <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                <Icon className={`h-4 w-4 ${stat.color}`} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold">{stat.value}</div>
                {stat.percentage !== undefined && (
                  <Badge variant="outline" className="ml-2">
                    {stat.percentage}%
                  </Badge>
                )}
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};
