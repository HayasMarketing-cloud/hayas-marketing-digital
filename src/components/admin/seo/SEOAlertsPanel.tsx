import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useSEOAlerts } from '@/hooks/useSEOAlerts';
import { Bell, BellOff, CheckCheck, Trash2, AlertTriangle, Info, XCircle, RefreshCw, ExternalLink } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import { es } from 'date-fns/locale';
import { Separator } from '@/components/ui/separator';

export const SEOAlertsPanel = () => {
  const { 
    alerts, 
    isLoading, 
    unreadCount, 
    markAsRead, 
    markAllAsRead, 
    deleteAlert,
    runMonitoring 
  } = useSEOAlerts();

  const getAlertIcon = (type: string, severity: string) => {
    if (severity === 'critical') {
      return <XCircle className="w-5 h-5 text-red-500" />;
    }
    if (severity === 'warning') {
      return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
    }
    return <Info className="w-5 h-5 text-blue-500" />;
  };

  const getAlertBadge = (severity: string) => {
    const variants: Record<string, any> = {
      critical: 'destructive',
      warning: 'secondary',
      info: 'outline',
    };
    const labels: Record<string, string> = {
      critical: '🚨 Crítico',
      warning: '⚠️ Advertencia',
      info: 'ℹ️ Info',
    };
    return (
      <Badge variant={variants[severity] || 'outline'}>
        {labels[severity] || severity}
      </Badge>
    );
  };

  const getTypeLabel = (type: string) => {
    const labels: Record<string, string> = {
      new_page_no_seo: 'Nueva página sin SEO',
      optimization_lost: 'Optimización perdida',
      missing_fields_increased: 'Campos faltantes aumentaron',
    };
    return labels[type] || type;
  };

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bell className="w-5 h-5" />
            Alertas SEO
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="animate-pulse space-y-3">
            <div className="h-16 bg-muted rounded-lg" />
            <div className="h-16 bg-muted rounded-lg" />
            <div className="h-16 bg-muted rounded-lg" />
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Bell className="w-5 h-5" />
            Alertas SEO
            {unreadCount > 0 && (
              <Badge variant="destructive" className="ml-2">
                {unreadCount} nuevas
              </Badge>
            )}
          </CardTitle>
          <div className="flex gap-2">
            <Button
              onClick={runMonitoring}
              variant="outline"
              size="sm"
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              Ejecutar Monitoreo
            </Button>
            {unreadCount > 0 && (
              <Button
                onClick={markAllAsRead}
                variant="ghost"
                size="sm"
              >
                <CheckCheck className="w-4 h-4 mr-2" />
                Marcar todas leídas
              </Button>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {alerts.length === 0 ? (
          <div className="text-center py-12 text-muted-foreground">
            <BellOff className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <p className="font-medium">No hay alertas</p>
            <p className="text-sm mt-1">
              Las alertas aparecerán aquí cuando se detecten cambios
            </p>
          </div>
        ) : (
          <ScrollArea className="h-[400px] pr-4">
            <div className="space-y-3">
              {alerts.map((alert) => (
                <div
                  key={alert.id}
                  className={`p-4 rounded-lg border transition-colors ${
                    alert.is_read 
                      ? 'bg-background border-border/50' 
                      : 'bg-accent/50 border-accent'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3 flex-1">
                      {getAlertIcon(alert.alert_type, alert.severity)}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          {getAlertBadge(alert.severity)}
                          <Badge variant="outline" className="text-xs">
                            {getTypeLabel(alert.alert_type)}
                          </Badge>
                        </div>
                        <p className="font-medium text-sm mb-1">{alert.message}</p>
                        <code className="text-xs bg-muted px-2 py-1 rounded">
                          {alert.page_path}
                        </code>
                        
                        {alert.details && (
                          <div className="mt-2 text-xs text-muted-foreground">
                            {alert.details.missing_fields && (
                              <p>
                                <strong>Campos faltantes:</strong>{' '}
                                {alert.details.missing_fields.join(', ')}
                              </p>
                            )}
                            {alert.details.fields_lost && alert.details.fields_lost.length > 0 && (
                              <p className="text-red-600">
                                <strong>Campos perdidos:</strong>{' '}
                                {alert.details.fields_lost.join(', ')}
                              </p>
                            )}
                            {alert.details.new_missing && alert.details.new_missing.length > 0 && (
                              <p className="text-yellow-600">
                                <strong>Nuevos faltantes:</strong>{' '}
                                {alert.details.new_missing.join(', ')}
                              </p>
                            )}
                          </div>
                        )}

                        <p className="text-xs text-muted-foreground mt-2">
                          {formatDistanceToNow(new Date(alert.created_at), {
                            addSuffix: true,
                            locale: es,
                          })}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      {!alert.is_read && (
                        <Button
                          onClick={() => markAsRead(alert.id)}
                          variant="ghost"
                          size="sm"
                        >
                          <CheckCheck className="w-4 h-4" />
                        </Button>
                      )}
                      <Button
                        onClick={() => deleteAlert(alert.id)}
                        variant="ghost"
                        size="sm"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                      <Button
                        asChild
                        variant="ghost"
                        size="sm"
                      >
                        <a href={`/admin/translations?search=${alert.page_path}`} target="_blank">
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        )}
      </CardContent>
    </Card>
  );
};
