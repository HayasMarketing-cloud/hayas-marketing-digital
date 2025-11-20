import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { useTranslationStatus } from '@/hooks/useTranslationStatus';
import { FileText, CheckCircle2, Clock, FileEdit, Code, Shield, AlertTriangle, Rocket, Zap } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';
import { ProgressDashboard } from './ProgressDashboard';

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
      title: 'Rutas Detectadas',
      subtitle: 'En tu aplicación web',
      description: 'Páginas encontradas automáticamente en el código',
      value: stats.totalInCode,
      icon: Code,
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10',
    },
    {
      title: 'Páginas Preparadas',
      subtitle: 'Con datos SEO básicos',
      description: 'Páginas que ya tienen información en la base de datos',
      value: stats.total,
      icon: FileText,
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
    },
    {
      title: '✅ Publicadas',
      subtitle: 'Traducidas y optimizadas',
      description: 'Páginas completas con traducción al inglés y SEO optimizado',
      value: stats.translated,
      icon: CheckCircle2,
      color: 'text-green-500',
      bgColor: 'bg-green-500/10',
      percentage: stats.totalInCode > 0 ? Math.round((stats.translated / stats.totalInCode) * 100) : 0,
    },
    {
      title: '🚀 Listas para Traducir',
      subtitle: 'Preparadas para crear EN',
      description: 'Tienen datos SEO en español, listas para versión en inglés',
      value: stats.pending,
      icon: Rocket,
      color: 'text-orange-500',
      bgColor: 'bg-orange-500/10',
      percentage: stats.totalInCode > 0 ? Math.round((stats.pending / stats.totalInCode) * 100) : 0,
    },
    {
      title: '⚡ Revisar SEO',
      subtitle: 'Optimización pendiente',
      description: 'Traducidas pero faltan campos SEO por completar',
      value: stats.drafts,
      icon: Zap,
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-500/10',
    },
    {
      title: '📝 Nuevas',
      subtitle: 'Sin preparar',
      description: 'Páginas detectadas que necesitan datos SEO básicos',
      value: stats.codeOnly,
      icon: FileEdit,
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/10',
    },
    {
      title: 'SEO Completo',
      subtitle: 'Totalmente optimizado',
      description: 'Páginas con todos los campos SEO validados',
      value: stats.seoOptimized,
      icon: Shield,
      color: 'text-teal-500',
      bgColor: 'bg-teal-500/10',
      percentage: stats.total > 0 ? Math.round((stats.seoOptimized / stats.total) * 100) : 0,
    },
  ];

  return (
    <div className="space-y-6">
      <ProgressDashboard />
      
      <div className="grid gap-4 md:grid-cols-4 lg:grid-cols-7">
        {statCards.map((stat) => {
        const Icon = stat.icon;
        return (
          <TooltipProvider key={stat.title}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Card className="hover:shadow-lg transition-shadow cursor-help">
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
              </TooltipTrigger>
              <TooltipContent side="bottom" className="max-w-xs">
                <p>{stat.description}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        );
      })}
      </div>
    </div>
  );
};
