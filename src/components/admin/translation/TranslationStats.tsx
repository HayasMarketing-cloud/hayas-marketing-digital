import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useTranslationStatus } from '@/hooks/useTranslationStatus';
import { Globe, CheckCircle, AlertCircle, Clock } from 'lucide-react';

interface TranslationStatsProps {
  onCategorySelect?: (category: string) => void;
}

export const TranslationStats: React.FC<TranslationStatsProps> = ({ onCategorySelect }) => {
  const { stats, isLoading } = useTranslationStatus();

  if (isLoading) {
    return (
      <div className="grid gap-4 md:grid-cols-4">
        {[1, 2, 3, 4].map((i) => (
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
      title: 'Total de Páginas',
      value: stats.total,
      icon: Globe,
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
    },
    {
      title: 'Traducidas',
      value: stats.translated,
      icon: CheckCircle,
      color: 'text-green-500',
      bgColor: 'bg-green-500/10',
      percentage: stats.total > 0 ? Math.round((stats.translated / stats.total) * 100) : 0,
    },
    {
      title: 'Pendientes',
      value: stats.pending,
      icon: AlertCircle,
      color: 'text-red-500',
      bgColor: 'bg-red-500/10',
      percentage: stats.total > 0 ? Math.round((stats.pending / stats.total) * 100) : 0,
    },
    {
      title: 'Borradores',
      value: stats.drafts,
      icon: Clock,
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-500/10',
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-4">
      {statCards.map((stat) => {
        const Icon = stat.icon;
        return (
          <Card key={stat.title} className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                <Icon className={`h-4 w-4 ${stat.color}`} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              {stat.percentage !== undefined && (
                <p className="text-xs text-muted-foreground">
                  {stat.percentage}% del total
                </p>
              )}
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};
