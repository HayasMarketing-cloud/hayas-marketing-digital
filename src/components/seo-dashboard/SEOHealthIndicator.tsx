import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { AlertCircle, CheckCircle, AlertTriangle } from 'lucide-react';
import { SEOHealthScore, getGradeBadgeColor } from '@/utils/seo-analytics/seoHealthScorer';
import { cn } from '@/lib/utils';

interface SEOHealthIndicatorProps {
  health: SEOHealthScore;
}

export const SEOHealthIndicator: React.FC<SEOHealthIndicatorProps> = ({ health }) => {
  return (
    <Card className="border-2">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Estado General SEO</CardTitle>
          <Badge className={getGradeBadgeColor(health.grade)}>
            Grade {health.grade}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Overall Score */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">Puntuación Global</span>
            <span className="text-2xl font-bold">{health.overall}/100</span>
          </div>
          <Progress value={health.overall} className="h-3" />
        </div>

        {/* Individual Scores */}
        <div className="space-y-2">
          <h4 className="text-sm font-semibold mb-3">Desglose por Área</h4>
          
          {Object.entries(health.scores).map(([key, score]) => {
            const labels: Record<string, string> = {
              crawlBudget: 'Crawl Budget',
              sitemap: 'Sitemap',
              robots: 'Robots.txt',
              redirects: 'Redirecciones',
              architecture: 'Arquitectura'
            };
            
            return (
              <div key={key} className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span>{labels[key]}</span>
                  <span className={cn(
                    'font-medium',
                    score >= 80 ? 'text-green-600' :
                    score >= 60 ? 'text-yellow-600' :
                    'text-red-600'
                  )}>
                    {score}%
                  </span>
                </div>
                <Progress value={score} className="h-1.5" />
              </div>
            );
          })}
        </div>

        {/* Issues Summary */}
        <div className="grid grid-cols-3 gap-2 pt-4 border-t">
          <div className="text-center">
            <AlertCircle className="h-4 w-4 text-red-500 mx-auto mb-1" />
            <div className="text-lg font-bold">{health.issues.critical}</div>
            <div className="text-xs text-muted-foreground">Críticos</div>
          </div>
          <div className="text-center">
            <AlertTriangle className="h-4 w-4 text-yellow-500 mx-auto mb-1" />
            <div className="text-lg font-bold">{health.issues.warnings}</div>
            <div className="text-xs text-muted-foreground">Advertencias</div>
          </div>
          <div className="text-center">
            <CheckCircle className="h-4 w-4 text-blue-500 mx-auto mb-1" />
            <div className="text-lg font-bold">{health.issues.info}</div>
            <div className="text-xs text-muted-foreground">Sugerencias</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
