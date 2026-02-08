import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { useAllRoutes } from '@/hooks/useAllRoutes';
import { TrendingUp, Clock, CheckCircle2, Target, Globe, Lightbulb } from 'lucide-react';

export const UnifiedProgressCard: React.FC = () => {
  const { routes, isLoading } = useAllRoutes();

  if (isLoading) {
    return (
      <Card className="border-primary/20">
        <CardContent className="p-6">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-muted rounded w-1/3" />
            <div className="h-24 bg-muted rounded" />
          </div>
        </CardContent>
      </Card>
    );
  }

  // Calculate stats from routes
  const spanishPages = routes.filter(r => r.language === 'es' && r.status !== 'orphan');
  const englishPages = routes.filter(r => r.language === 'en' && r.status !== 'orphan');

  const esTotal = spanishPages.length;
  const esOptimized = spanishPages.filter(r => r.seoOptimized).length;
  const esPercentage = esTotal > 0 ? Math.round((esOptimized / esTotal) * 100) : 0;

  const enOptimized = englishPages.filter(r => r.seoOptimized).length;
  const enPercentage = esTotal > 0 ? Math.round((enOptimized / esTotal) * 100) : 0;

  const pending = spanishPages.filter(r => r.status === 'pending').length;
  const translated = spanishPages.filter(r => r.hasTranslation).length;
  const seoOptimized = spanishPages.filter(r => r.seoOptimized).length;

  // Pages ready to translate (Spanish pages with SEO but no English version)
  const readyToTranslate = esOptimized - enOptimized;
  
  // Estimated time (15 min per page)
  const remainingPages = esTotal - esOptimized;
  const estimatedTimeInHours = remainingPages * 0.25;
  const estimatedDays = Math.ceil(estimatedTimeInHours / 8);

  const isComplete = esPercentage === 100 && enPercentage === 100;

  return (
    <Card className="border-primary/20 bg-gradient-to-r from-primary/5 to-purple-500/5">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-primary" />
          Progreso del Proyecto
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Dual Progress Bars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Spanish Progress */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium">🇪🇸 Español</span>
              </div>
              <Badge variant={esPercentage === 100 ? "default" : "secondary"}>
                {esOptimized} / {esTotal}
              </Badge>
            </div>
            <Progress value={esPercentage} className="h-3" />
            <p className="text-xs text-muted-foreground">
              {esPercentage}% optimizado
            </p>
          </div>

          {/* English Progress */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium">🇬🇧 English</span>
              </div>
              <Badge variant={enPercentage === 100 ? "default" : "secondary"}>
                {enOptimized} / {esTotal}
              </Badge>
            </div>
            <Progress value={enPercentage} className="h-3" />
            <p className="text-xs text-muted-foreground">
              {enPercentage}% traducido y optimizado
            </p>
          </div>
        </div>

        {/* Mini Stats Grid */}
        <div className="grid grid-cols-3 gap-4 pt-4 border-t">
          <div className="text-center space-y-1 p-3 bg-background/50 rounded-lg">
            <div className="flex items-center justify-center">
              <Clock className="h-4 w-4 text-orange-500 mr-1" />
              <span className="text-2xl font-bold text-orange-500">{pending}</span>
            </div>
            <p className="text-xs text-muted-foreground">Pendientes</p>
          </div>
          
          <div className="text-center space-y-1 p-3 bg-background/50 rounded-lg">
            <div className="flex items-center justify-center">
              <CheckCircle2 className="h-4 w-4 text-green-500 mr-1" />
              <span className="text-2xl font-bold text-green-500">{translated}</span>
            </div>
            <p className="text-xs text-muted-foreground">Traducidas</p>
          </div>
          
          <div className="text-center space-y-1 p-3 bg-background/50 rounded-lg">
            <div className="flex items-center justify-center">
              <Target className="h-4 w-4 text-teal-500 mr-1" />
              <span className="text-2xl font-bold text-teal-500">{seoOptimized}</span>
            </div>
            <p className="text-xs text-muted-foreground">SEO OK</p>
          </div>
        </div>

        {/* Insights */}
        {!isComplete && (
          <div className="pt-4 border-t space-y-3">
            {readyToTranslate > 0 && (
              <div className="flex items-center gap-2 text-sm p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
                <Lightbulb className="h-4 w-4 text-blue-500 flex-shrink-0" />
                <span className="text-blue-700 dark:text-blue-300">
                  {readyToTranslate} página{readyToTranslate !== 1 ? 's' : ''} ES lista{readyToTranslate !== 1 ? 's' : ''} para traducir al inglés
                </span>
              </div>
            )}
            
            {remainingPages > 0 && (
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Tiempo estimado restante:</span>
                <Badge variant="outline">
                  ~{estimatedDays} día{estimatedDays !== 1 ? 's' : ''} ({Math.round(estimatedTimeInHours)}h)
                </Badge>
              </div>
            )}
          </div>
        )}

        {/* Completion Message */}
        {isComplete && (
          <div className="pt-4 border-t">
            <div className="flex items-center gap-2 text-green-600 p-3 bg-green-500/10 rounded-lg">
              <CheckCircle2 className="h-5 w-5" />
              <span className="font-semibold">¡Proyecto completado al 100%!</span>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
