import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useRouteInconsistencies } from '@/hooks/useRouteInconsistencies';
import { AlertCircle, CheckCircle2, AlertTriangle, FileCode, Database, Globe } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

const issueLabels = {
  'complete': 'Completo ✓',
  'missing_in_app': 'Falta en App.tsx',
  'missing_in_registry': 'Falta en routeRegistryData.ts',
  'missing_in_db': 'Falta en seo_pages (DB)',
  'orphan_in_registry': 'Huérfano en routeRegistryData.ts',
  'orphan_in_db': 'Huérfano en DB (sin ruta en código)',
};

const issueDescriptions = {
  'complete': 'La ruta existe en todos los sistemas',
  'missing_in_app': 'La ruta existe en DB y registro pero no en App.tsx - Añádela al código',
  'missing_in_registry': 'La ruta existe en App.tsx y DB pero no en routeRegistryData.ts',
  'missing_in_db': 'La ruta existe en el código pero no tiene datos SEO en la base de datos',
  'orphan_in_registry': 'La ruta está en routeRegistryData.ts pero no existe en App.tsx ni DB',
  'orphan_in_db': 'La ruta tiene datos SEO en DB pero no existe en el código',
};

const getSeverityColor = (severity: string) => {
  switch (severity) {
    case 'error': return 'destructive';
    case 'warning': return 'secondary';
    case 'success': return 'default';
    default: return 'default';
  }
};

const getSeverityIcon = (severity: string) => {
  switch (severity) {
    case 'error': return <AlertCircle className="h-4 w-4 text-destructive" />;
    case 'warning': return <AlertTriangle className="h-4 w-4 text-yellow-500" />;
    case 'success': return <CheckCircle2 className="h-4 w-4 text-green-500" />;
    default: return null;
  }
};

export const RouteInconsistenciesPanel = () => {
  const { data: inconsistencies, isLoading } = useRouteInconsistencies();

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <Skeleton className="h-6 w-64" />
          <Skeleton className="h-4 w-96 mt-2" />
        </CardHeader>
        <CardContent>
          <Skeleton className="h-20 w-full" />
        </CardContent>
      </Card>
    );
  }

  const errors = inconsistencies?.filter(i => i.severity === 'error') || [];
  const warnings = inconsistencies?.filter(i => i.severity === 'warning') || [];
  const complete = inconsistencies?.filter(i => i.severity === 'success') || [];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <AlertTriangle className="h-5 w-5" />
          Detector de Inconsistencias
        </CardTitle>
        <CardDescription>
          Compara rutas EN entre App.tsx, routeRegistryData.ts y seo_pages (DB)
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Summary */}
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center p-4 bg-destructive/10 rounded-lg">
            <div className="text-3xl font-bold text-destructive">{errors.length}</div>
            <div className="text-sm text-muted-foreground">Errores</div>
          </div>
          <div className="text-center p-4 bg-yellow-500/10 rounded-lg">
            <div className="text-3xl font-bold text-yellow-600">{warnings.length}</div>
            <div className="text-sm text-muted-foreground">Advertencias</div>
          </div>
          <div className="text-center p-4 bg-green-500/10 rounded-lg">
            <div className="text-3xl font-bold text-green-600">{complete.length}</div>
            <div className="text-sm text-muted-foreground">Completas</div>
          </div>
        </div>

        {/* Info Alert */}
        <Alert>
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            <strong>Cómo interpretar:</strong>
            <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
              <li><strong>Errores:</strong> Requieren acción inmediata - rutas huérfanas o faltantes</li>
              <li><strong>Advertencias:</strong> Revisar - falta sincronizar entre sistemas</li>
              <li><strong>Completas:</strong> Rutas correctamente configuradas en todos los sistemas</li>
            </ul>
          </AlertDescription>
        </Alert>

        {/* Errors */}
        {errors.length > 0 && (
          <div className="space-y-2">
            <h3 className="font-semibold text-destructive flex items-center gap-2">
              <AlertCircle className="h-4 w-4" />
              Errores Críticos
            </h3>
            {errors.map((inc) => (
              <div
                key={inc.path}
                className="p-4 border border-destructive/20 bg-destructive/5 rounded-lg space-y-2"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm">{inc.path}</span>
                  <Badge variant={getSeverityColor(inc.severity)}>
                    {issueLabels[inc.issue]}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  {issueDescriptions[inc.issue]}
                </p>
                <div className="flex gap-4 text-xs">
                  <div className="flex items-center gap-1">
                    <FileCode className="h-3 w-3" />
                    <span className={inc.inApp ? 'text-green-600' : 'text-red-600'}>
                      {inc.inApp ? '✓' : '✗'} App.tsx
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Globe className="h-3 w-3" />
                    <span className={inc.inRegistry ? 'text-green-600' : 'text-red-600'}>
                      {inc.inRegistry ? '✓' : '✗'} Registry
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Database className="h-3 w-3" />
                    <span className={inc.inDatabase ? 'text-green-600' : 'text-red-600'}>
                      {inc.inDatabase ? '✓' : '✗'} DB
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Warnings */}
        {warnings.length > 0 && (
          <div className="space-y-2">
            <h3 className="font-semibold text-yellow-600 flex items-center gap-2">
              <AlertTriangle className="h-4 w-4" />
              Advertencias
            </h3>
            {warnings.map((inc) => (
              <div
                key={inc.path}
                className="p-4 border border-yellow-500/20 bg-yellow-500/5 rounded-lg space-y-2"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm">{inc.path}</span>
                  <Badge variant={getSeverityColor(inc.severity)}>
                    {issueLabels[inc.issue]}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  {issueDescriptions[inc.issue]}
                </p>
                <div className="flex gap-4 text-xs">
                  <div className="flex items-center gap-1">
                    <FileCode className="h-3 w-3" />
                    <span className={inc.inApp ? 'text-green-600' : 'text-red-600'}>
                      {inc.inApp ? '✓' : '✗'} App.tsx
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Globe className="h-3 w-3" />
                    <span className={inc.inRegistry ? 'text-green-600' : 'text-red-600'}>
                      {inc.inRegistry ? '✓' : '✗'} Registry
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Database className="h-3 w-3" />
                    <span className={inc.inDatabase ? 'text-green-600' : 'text-red-600'}>
                      {inc.inDatabase ? '✓' : '✗'} DB
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Complete - Collapsed */}
        {complete.length > 0 && (
          <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <span className="font-semibold text-green-700">
                {complete.length} rutas correctamente sincronizadas
              </span>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
