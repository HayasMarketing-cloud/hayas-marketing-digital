import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { useAllRoutes } from '@/hooks/useAllRoutes';
import { BarChart3, CheckCircle2, AlertCircle, Clock, Sparkles, TrendingUp, Target } from 'lucide-react';
import { useMemo } from 'react';

interface CategoryStats {
  category: string;
  total: number;
  optimized: number;
  pending: number;
  codeOnly: number;
  percentage: number;
}

export const SEOStatsDashboard = () => {
  const { routes, isLoading } = useAllRoutes();

  const stats = useMemo(() => {
    if (!routes) return null;

    // Filter Spanish pages only
    const spanishPages = routes.filter(r => r.language === 'es' && r.status !== 'orphan');

    // Overall stats
    const total = spanishPages.length;
    const optimized = spanishPages.filter(r => r.seoOptimized).length;
    const pending = spanishPages.filter(r => r.status === 'pending').length;
    const codeOnly = spanishPages.filter(r => r.status === 'code-only').length;
    const incomplete = spanishPages.filter(r => r.status === 'translated' || !r.seoOptimized).length;
    const overallPercentage = total > 0 ? Math.round((optimized / total) * 100) : 0;

    // Stats by category
    const categories = [...new Set(spanishPages.map(r => r.category))];
    const categoryStats: CategoryStats[] = categories.map(category => {
      const categoryRoutes = spanishPages.filter(r => r.category === category);
      const categoryOptimized = categoryRoutes.filter(r => r.seoOptimized).length;
      const categoryPending = categoryRoutes.filter(r => r.status === 'pending').length;
      const categoryCodeOnly = categoryRoutes.filter(r => r.status === 'code-only').length;
      
      return {
        category,
        total: categoryRoutes.length,
        optimized: categoryOptimized,
        pending: categoryPending,
        codeOnly: categoryCodeOnly,
        percentage: categoryRoutes.length > 0 
          ? Math.round((categoryOptimized / categoryRoutes.length) * 100) 
          : 0,
      };
    }).sort((a, b) => b.total - a.total);

    // Most common missing fields
    const missingFieldsCount: Record<string, number> = {};
    spanishPages.forEach(route => {
      if (!route.seoOptimized) {
        route.missingFields.forEach(field => {
          missingFieldsCount[field] = (missingFieldsCount[field] || 0) + 1;
        });
      }
    });

    const topMissingFields = Object.entries(missingFieldsCount)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 5)
      .map(([field, count]) => ({ field, count }));

    return {
      total,
      optimized,
      pending,
      codeOnly,
      incomplete,
      overallPercentage,
      categoryStats,
      topMissingFields,
    };
  }, [routes]);

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="w-5 h-5" />
            Dashboard SEO
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="animate-pulse space-y-4">
            <div className="h-24 bg-muted rounded-lg" />
            <div className="h-24 bg-muted rounded-lg" />
            <div className="h-24 bg-muted rounded-lg" />
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!stats) return null;

  const getCategoryLabel = (category: string) => {
    const labels: Record<string, string> = {
      main: '🏠 Principal',
      service: '⚙️ Servicios',
      solution: '💡 Soluciones',
      tool: '🔧 Herramientas',
      'case-study': '📊 Casos de Estudio',
      blog: '📝 Blog',
    };
    return labels[category] || category;
  };

  return (
    <div className="space-y-6">
      {/* Header Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 border-green-200 dark:border-green-800">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">Optimizadas</p>
                <p className="text-3xl font-bold text-green-700 dark:text-green-300">
                  {stats.optimized}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  de {stats.total} páginas
                </p>
              </div>
              <CheckCircle2 className="w-12 h-12 text-green-500 opacity-60" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-950 dark:to-yellow-900 border-yellow-200 dark:border-yellow-800">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">Incompletas</p>
                <p className="text-3xl font-bold text-yellow-700 dark:text-yellow-300">
                  {stats.incomplete}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  requieren revisión
                </p>
              </div>
              <AlertCircle className="w-12 h-12 text-yellow-500 opacity-60" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 border-blue-200 dark:border-blue-800">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">Por Preparar</p>
                <p className="text-3xl font-bold text-blue-700 dark:text-blue-300">
                  {stats.codeOnly}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  sin metadatos
                </p>
              </div>
              <Clock className="w-12 h-12 text-blue-500 opacity-60" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900 border-purple-200 dark:border-purple-800">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">Progreso Total</p>
                <p className="text-3xl font-bold text-purple-700 dark:text-purple-300">
                  {stats.overallPercentage}%
                </p>
                <Progress 
                  value={stats.overallPercentage} 
                  className="h-1.5 mt-2"
                />
              </div>
              <TrendingUp className="w-12 h-12 text-purple-500 opacity-60" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Progress by Category */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-5 h-5" />
            Progreso por Categoría
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {stats.categoryStats.map((cat) => (
              <div key={cat.category} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-3 flex-1">
                    <span className="font-medium min-w-[140px]">
                      {getCategoryLabel(cat.category)}
                    </span>
                    <div className="flex-1">
                      <Progress value={cat.percentage} className="h-2" />
                    </div>
                  </div>
                  <div className="flex items-center gap-4 ml-4">
                    <Badge variant="outline" className="min-w-[60px] justify-center">
                      {cat.percentage}%
                    </Badge>
                    <div className="text-xs text-muted-foreground min-w-[120px]">
                      <span className="text-green-600 font-medium">{cat.optimized}</span>
                      {' / '}
                      <span>{cat.total}</span>
                      {' optimizadas'}
                    </div>
                  </div>
                </div>
                
                {(cat.codeOnly > 0 || cat.pending > 0) && (
                  <div className="flex gap-2 ml-[140px] text-xs">
                    {cat.codeOnly > 0 && (
                      <Badge variant="secondary" className="text-xs">
                        {cat.codeOnly} por preparar
                      </Badge>
                    )}
                    {cat.pending > 0 && (
                      <Badge variant="outline" className="text-xs">
                        {cat.pending} por traducir
                      </Badge>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Top Missing Fields */}
      {stats.topMissingFields.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              Campos Más Comúnmente Faltantes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {stats.topMissingFields.map(({ field, count }) => (
                <div key={field} className="flex items-center justify-between">
                  <div className="flex items-center gap-3 flex-1">
                    <span className="font-medium capitalize">{field}</span>
                    <Progress 
                      value={(count / stats.incomplete) * 100} 
                      className="h-2 flex-1 max-w-md"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="destructive">
                      {count} página{count !== 1 ? 's' : ''}
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      ({Math.round((count / stats.incomplete) * 100)}%)
                    </span>
                  </div>
                </div>
              ))}
            </div>
            
            {stats.codeOnly > 0 && (
              <div className="mt-6 p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
                <p className="text-sm font-medium text-blue-700 dark:text-blue-300">
                  💡 Sugerencia: Usa el generador masivo de SEO con IA para optimizar {stats.codeOnly} páginas rápidamente
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* Quick Actions */}
      {stats.overallPercentage < 100 && (
        <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
          <CardContent className="p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-semibold text-lg mb-2">
                  🎯 Próximos Pasos Recomendados
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {stats.codeOnly > 0 && (
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-500" />
                      Preparar {stats.codeOnly} páginas nuevas con el generador IA
                    </li>
                  )}
                  {stats.pending > 0 && (
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      Traducir {stats.pending} páginas listas al inglés
                    </li>
                  )}
                  {stats.incomplete > 0 && (
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-yellow-500" />
                      Completar campos faltantes en {stats.incomplete} páginas
                    </li>
                  )}
                </ul>
              </div>
              <div className="text-right">
                <div className="text-4xl font-bold text-primary">
                  {stats.total - stats.optimized}
                </div>
                <div className="text-sm text-muted-foreground">
                  páginas por optimizar
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Achievement Badge */}
      {stats.overallPercentage === 100 && (
        <Card className="bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0">
          <CardContent className="p-8 text-center">
            <CheckCircle2 className="w-16 h-16 mx-auto mb-4 opacity-90" />
            <h2 className="text-2xl font-bold mb-2">
              🎉 ¡Felicitaciones! SEO 100% Optimizado
            </h2>
            <p className="text-green-100">
              Todas las {stats.total} páginas están completamente optimizadas para motores de búsqueda
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
