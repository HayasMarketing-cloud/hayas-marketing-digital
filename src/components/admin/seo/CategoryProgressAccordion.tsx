import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useAllRoutes } from '@/hooks/useAllRoutes';
import { Target, Sparkles } from 'lucide-react';
import { useMemo } from 'react';

interface CategoryStats {
  category: string;
  total: number;
  optimized: number;
  pending: number;
  codeOnly: number;
  percentage: number;
}

export const CategoryProgressAccordion: React.FC = () => {
  const { routes, isLoading } = useAllRoutes();

  const stats = useMemo(() => {
    if (!routes) return null;

    const spanishPages = routes.filter(r => r.language === 'es' && r.status !== 'orphan');
    const incomplete = spanishPages.filter(r => r.status === 'translated' || !r.seoOptimized).length;

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
      categoryStats,
      topMissingFields,
      incomplete,
    };
  }, [routes]);

  if (isLoading || !stats) return null;

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
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="category-progress" className="border rounded-lg">
        <AccordionTrigger className="px-4 hover:no-underline">
          <div className="flex items-center gap-2">
            <Target className="w-5 h-5 text-muted-foreground" />
            <span className="font-semibold">Detalle por Categoría</span>
            <Badge variant="outline" className="ml-2">
              {stats.categoryStats.length} categorías
            </Badge>
          </div>
        </AccordionTrigger>
        <AccordionContent className="px-4 pb-4">
          <div className="space-y-6">
            {/* Category Progress */}
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
                      <div className="text-xs text-muted-foreground min-w-[100px]">
                        <span className="text-green-600 font-medium">{cat.optimized}</span>
                        {' / '}
                        <span>{cat.total}</span>
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

            {/* Top Missing Fields */}
            {stats.topMissingFields.length > 0 && (
              <div className="pt-4 border-t space-y-3">
                <h4 className="font-medium text-sm flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-muted-foreground" />
                  Campos Más Comúnmente Faltantes
                </h4>
                <div className="space-y-2">
                  {stats.topMissingFields.map(({ field, count }) => (
                    <div key={field} className="flex items-center justify-between text-sm">
                      <span className="capitalize text-muted-foreground">{field}</span>
                      <Badge variant="destructive" className="text-xs">
                        {count} página{count !== 1 ? 's' : ''}
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
