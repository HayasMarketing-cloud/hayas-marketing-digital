import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { useTranslationStatus } from '@/hooks/useTranslationStatus';
import { TrendingUp, Clock, CheckCircle2, Target } from 'lucide-react';

export const ProgressDashboard: React.FC = () => {
  const { stats, isLoading } = useTranslationStatus();

  if (isLoading) {
    return (
      <Card>
        <CardContent className="p-6">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-muted rounded w-1/3" />
            <div className="h-24 bg-muted rounded" />
          </div>
        </CardContent>
      </Card>
    );
  }

  const translationProgress = stats.totalInCode > 0 
    ? Math.round((stats.translated / stats.totalInCode) * 100) 
    : 0;

  const seoProgress = stats.total > 0 
    ? Math.round((stats.seoOptimized / stats.total) * 100) 
    : 0;

  const remainingPages = stats.totalInCode - stats.translated;
  const estimatedTimeInHours = remainingPages * 0.25; // 15 min per page
  const estimatedDays = Math.ceil(estimatedTimeInHours / 8);

  return (
    <Card className="border-primary/20">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-primary" />
          Progreso del Proyecto
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Translation Progress */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Progreso de Traducción</span>
            <Badge variant={translationProgress === 100 ? "default" : "secondary"}>
              {stats.translated} / {stats.totalInCode}
            </Badge>
          </div>
          <Progress value={translationProgress} className="h-3" />
          <p className="text-xs text-muted-foreground">
            {translationProgress}% completado - {remainingPages} páginas restantes
          </p>
        </div>

        {/* SEO Optimization Progress */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Optimización SEO</span>
            <Badge variant={seoProgress >= 80 ? "default" : "secondary"}>
              {stats.seoOptimized} / {stats.total}
            </Badge>
          </div>
          <Progress value={seoProgress} className="h-3" />
          <p className="text-xs text-muted-foreground">
            {seoProgress}% optimizado - {stats.total - stats.seoOptimized} páginas por mejorar
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-4 pt-4 border-t">
          <div className="text-center space-y-1">
            <div className="flex items-center justify-center">
              <Clock className="h-4 w-4 text-orange-500 mr-1" />
              <span className="text-2xl font-bold text-orange-500">{stats.pending}</span>
            </div>
            <p className="text-xs text-muted-foreground">Pendientes</p>
          </div>
          
          <div className="text-center space-y-1">
            <div className="flex items-center justify-center">
              <CheckCircle2 className="h-4 w-4 text-green-500 mr-1" />
              <span className="text-2xl font-bold text-green-500">{stats.translated}</span>
            </div>
            <p className="text-xs text-muted-foreground">Traducidas</p>
          </div>
          
          <div className="text-center space-y-1">
            <div className="flex items-center justify-center">
              <Target className="h-4 w-4 text-teal-500 mr-1" />
              <span className="text-2xl font-bold text-teal-500">{stats.seoOptimized}</span>
            </div>
            <p className="text-xs text-muted-foreground">SEO OK</p>
          </div>
        </div>

        {/* Estimated Time */}
        {remainingPages > 0 && (
          <div className="pt-4 border-t">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Tiempo estimado restante:</span>
              <Badge variant="outline">
                ~{estimatedDays} día{estimatedDays !== 1 ? 's' : ''} ({Math.round(estimatedTimeInHours)}h)
              </Badge>
            </div>
          </div>
        )}

        {/* Completion Message */}
        {translationProgress === 100 && seoProgress === 100 && (
          <div className="pt-4 border-t">
            <div className="flex items-center gap-2 text-green-600">
              <CheckCircle2 className="h-5 w-5" />
              <span className="font-semibold">¡Proyecto completado al 100%!</span>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};