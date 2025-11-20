import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { CheckCircle2, XCircle, AlertCircle, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SEOValidationPanelProps {
  route: {
    path: string;
    title?: string;
    description?: string;
    keywords?: any;
    h1?: string;
    is_indexable?: boolean;
    missingFields: string[];
    seoOptimized: boolean;
  };
  onClose: () => void;
}

export const SEOValidationPanel: React.FC<SEOValidationPanelProps> = ({ route, onClose }) => {
  const seoChecks = [
    {
      field: 'title',
      label: 'Título SEO',
      value: route.title,
      valid: route.title && route.title.length >= 30 && route.title.length <= 60,
      recommendation: 'Entre 30-60 caracteres, incluye palabra clave principal',
      current: route.title ? `${route.title.length} caracteres` : 'No definido',
    },
    {
      field: 'description',
      label: 'Meta Description',
      value: route.description,
      valid: route.description && route.description.length >= 120 && route.description.length <= 160,
      recommendation: 'Entre 120-160 caracteres, debe ser atractiva y con CTA',
      current: route.description ? `${route.description.length} caracteres` : 'No definido',
    },
    {
      field: 'keywords',
      label: 'Keywords',
      value: route.keywords,
      valid: route.keywords && Array.isArray(route.keywords) && route.keywords.length >= 3,
      recommendation: 'Al menos 3-5 palabras clave relevantes',
      current: Array.isArray(route.keywords) ? `${route.keywords.length} keywords` : 'No definidas',
    },
    {
      field: 'h1',
      label: 'Título H1',
      value: route.h1,
      valid: !!route.h1 && route.h1.length >= 20,
      recommendation: 'Mínimo 20 caracteres, debe ser único y descriptivo',
      current: route.h1 ? `${route.h1.length} caracteres` : 'No definido',
    },
    {
      field: 'is_indexable',
      label: 'Indexabilidad',
      value: route.is_indexable,
      valid: route.is_indexable === true,
      recommendation: 'Debe estar marcada como indexable para aparecer en Google',
      current: route.is_indexable ? 'Indexable' : 'No indexable',
    },
  ];

  const validCount = seoChecks.filter(check => check.valid).length;
  const totalCount = seoChecks.length;
  const percentage = Math.round((validCount / totalCount) * 100);

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-xl">Validación SEO</CardTitle>
            <CardDescription className="mt-1">{route.path}</CardDescription>
          </div>
          <Button variant="ghost" size="sm" onClick={onClose}>
            Cerrar
          </Button>
        </div>

        <div className="mt-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Optimización SEO</span>
            <span className={`text-sm font-bold ${percentage >= 80 ? 'text-green-600' : percentage >= 50 ? 'text-yellow-600' : 'text-red-600'}`}>
              {validCount}/{totalCount} ({percentage}%)
            </span>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div 
              className={`h-2 rounded-full transition-all ${percentage >= 80 ? 'bg-green-500' : percentage >= 50 ? 'bg-yellow-500' : 'bg-red-500'}`}
              style={{ width: `${percentage}%` }}
            />
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {percentage < 80 && (
          <Alert className="bg-yellow-500/10 border-yellow-500/20">
            <AlertCircle className="h-4 w-4 text-yellow-600" />
            <AlertDescription className="text-sm text-yellow-700">
              <strong>Optimización necesaria:</strong> Esta página necesita mejorar {totalCount - validCount} campos para estar completamente optimizada para SEO.
            </AlertDescription>
          </Alert>
        )}

        <div className="space-y-3">
          {seoChecks.map((check) => (
            <div 
              key={check.field}
              className={`p-4 rounded-lg border ${
                check.valid 
                  ? 'bg-green-500/5 border-green-500/20' 
                  : 'bg-red-500/5 border-red-500/20'
              }`}
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  {check.valid ? (
                    <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                  ) : (
                    <XCircle className="h-4 w-4 text-red-600 flex-shrink-0 mt-0.5" />
                  )}
                  <span className="font-medium text-sm">{check.label}</span>
                </div>
                <Badge variant={check.valid ? 'default' : 'destructive'} className="text-xs">
                  {check.valid ? 'OK' : 'Falta'}
                </Badge>
              </div>
              
              <div className="ml-6 space-y-1">
                <p className="text-xs text-muted-foreground">
                  <strong>Estado:</strong> {check.current}
                </p>
                {!check.valid && (
                  <p className="text-xs text-yellow-700 bg-yellow-500/10 p-2 rounded">
                    💡 <strong>Recomendación:</strong> {check.recommendation}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="pt-4 border-t">
          <Button 
            className="w-full" 
            variant="outline"
            onClick={() => window.open(`https://search.google.com/test/rich-results?url=${encodeURIComponent('https://hayasmarketing.com' + route.path)}`, '_blank')}
          >
            <ExternalLink className="h-4 w-4 mr-2" />
            Validar con Google Rich Results Test
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
