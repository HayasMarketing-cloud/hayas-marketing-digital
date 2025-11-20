import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useRouteInconsistencies } from '@/hooks/useRouteInconsistencies';
import { AlertCircle, CheckCircle2, AlertTriangle, FileCode, Database, Globe } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import { useTranslation } from '@/hooks/useTranslation';


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
  const { t } = useTranslation();
  const incons = t('admin.inconsistencies') as any;

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
          {incons.title}
        </CardTitle>
        <CardDescription>
          {incons.subtitle}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Summary */}
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center p-4 bg-destructive/10 rounded-lg">
            <div className="text-3xl font-bold text-destructive">{errors.length}</div>
            <div className="text-sm text-muted-foreground">{incons.summary.errors}</div>
          </div>
          <div className="text-center p-4 bg-yellow-500/10 rounded-lg">
            <div className="text-3xl font-bold text-yellow-600">{warnings.length}</div>
            <div className="text-sm text-muted-foreground">{incons.summary.warnings}</div>
          </div>
          <div className="text-center p-4 bg-green-500/10 rounded-lg">
            <div className="text-3xl font-bold text-green-600">{complete.length}</div>
            <div className="text-sm text-muted-foreground">{incons.summary.complete}</div>
          </div>
        </div>

        {/* Info Alert */}
        <Alert>
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            <strong>{incons.howTo.title}</strong>
            <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
              <li>{incons.howTo.errorItem}</li>
              <li>{incons.howTo.warningItem}</li>
              <li>{incons.howTo.completeItem}</li>
            </ul>
          </AlertDescription>
        </Alert>

        {/* Errors */}
        {errors.length > 0 && (
          <div className="space-y-2">
            <h3 className="font-semibold text-destructive flex items-center gap-2">
              <AlertCircle className="h-4 w-4" />
              {incons.summary.errors}
            </h3>
            {errors.map((item) => (
              <div
                key={item.path}
                className="p-4 border border-destructive/20 bg-destructive/5 rounded-lg"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    {getSeverityIcon(item.severity)}
                    <span className="font-medium">{item.path}</span>
                    <Badge variant={getSeverityColor(item.severity)}>
                      {incons.issues[item.issue as keyof typeof incons.issues]}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground ml-6">
                    {incons.descriptions[item.issue as keyof typeof incons.descriptions]}
                  </p>
                  <div className="flex items-center gap-4 ml-6 text-xs">
                    <div className="flex items-center gap-1">
                      <FileCode className="h-3 w-3" />
                      <span className={item.in_app ? 'text-green-600' : 'text-muted-foreground'}>
                        {incons.sources.app} {item.in_app ? '✓' : '✗'}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Globe className="h-3 w-3" />
                      <span className={item.in_registry ? 'text-green-600' : 'text-muted-foreground'}>
                        {incons.sources.registry} {item.in_registry ? '✓' : '✗'}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Database className="h-3 w-3" />
                      <span className={item.in_db ? 'text-green-600' : 'text-muted-foreground'}>
                        {incons.sources.database} {item.in_db ? '✓' : '✗'}
                      </span>
                    </div>
                  </div>

                  {item.issue !== 'complete' && (
                    <div className="ml-6 mt-2 p-2 bg-muted rounded text-xs">
                      <strong>{incons.solution}:</strong> {incons.descriptions[item.issue as keyof typeof incons.descriptions]}
                    </div>
                  )}
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
              {incons.summary.warnings}
            </h3>
            {warnings.map((item) => (
              <div
                key={item.path}
                className="p-4 border border-yellow-500/20 bg-yellow-500/5 rounded-lg"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    {getSeverityIcon(item.severity)}
                    <span className="font-medium">{item.path}</span>
                    <Badge variant={getSeverityColor(item.severity)}>
                      {incons.issues[item.issue as keyof typeof incons.issues]}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground ml-6">
                    {incons.descriptions[item.issue as keyof typeof incons.descriptions]}
                  </p>
                  
                  <div className="flex items-center gap-4 ml-6 text-xs">
                    <div className="flex items-center gap-1">
                      <FileCode className="h-3 w-3" />
                      <span className={item.in_app ? 'text-green-600' : 'text-muted-foreground'}>
                        {incons.sources.app} {item.in_app ? '✓' : '✗'}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Globe className="h-3 w-3" />
                      <span className={item.in_registry ? 'text-green-600' : 'text-muted-foreground'}>
                        {incons.sources.registry} {item.in_registry ? '✓' : '✗'}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Database className="h-3 w-3" />
                      <span className={item.in_db ? 'text-green-600' : 'text-muted-foreground'}>
                        {incons.sources.database} {item.in_db ? '✓' : '✗'}
                      </span>
                    </div>
                  </div>

                  {item.issue !== 'complete' && (
                    <div className="ml-6 mt-2 p-2 bg-muted rounded text-xs">
                      <strong>{incons.solution}:</strong> {incons.descriptions[item.issue as keyof typeof incons.descriptions]}
                    </div>
                  )}
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
