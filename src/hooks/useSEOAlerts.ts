import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';

export interface SEOAlert {
  id: string;
  alert_type: 'new_page_no_seo' | 'optimization_lost' | 'missing_fields_increased';
  severity: 'info' | 'warning' | 'critical';
  page_path: string;
  message: string;
  details: any;
  is_read: boolean;
  created_at: string;
  resolved_at: string | null;
}

export const useSEOAlerts = () => {
  const [alerts, setAlerts] = useState<SEOAlert[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [unreadCount, setUnreadCount] = useState(0);

  const fetchAlerts = async () => {
    try {
      const { data, error } = await supabase
        .from('seo_alerts')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(50);

      if (error) throw error;

      setAlerts((data || []) as SEOAlert[]);
      setUnreadCount(data?.filter(a => !a.is_read).length || 0);
    } catch (error) {
      console.error('Error fetching alerts:', error);
      toast({
        title: 'Error al cargar alertas',
        description: 'No se pudieron cargar las alertas SEO',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const markAsRead = async (alertId: string) => {
    try {
      const { error } = await supabase
        .from('seo_alerts')
        .update({ is_read: true })
        .eq('id', alertId);

      if (error) throw error;

      setAlerts(prev => 
        prev.map(a => a.id === alertId ? { ...a, is_read: true } : a)
      );
      setUnreadCount(prev => Math.max(0, prev - 1));

      toast({
        title: 'Alerta marcada como leída',
      });
    } catch (error) {
      console.error('Error marking alert as read:', error);
      toast({
        title: 'Error',
        description: 'No se pudo marcar la alerta como leída',
        variant: 'destructive',
      });
    }
  };

  const markAllAsRead = async () => {
    try {
      const { error } = await supabase
        .from('seo_alerts')
        .update({ is_read: true })
        .eq('is_read', false);

      if (error) throw error;

      setAlerts(prev => prev.map(a => ({ ...a, is_read: true })));
      setUnreadCount(0);

      toast({
        title: 'Todas las alertas marcadas como leídas',
      });
    } catch (error) {
      console.error('Error marking all alerts as read:', error);
      toast({
        title: 'Error',
        description: 'No se pudieron marcar las alertas',
        variant: 'destructive',
      });
    }
  };

  const deleteAlert = async (alertId: string) => {
    try {
      const { error } = await supabase
        .from('seo_alerts')
        .delete()
        .eq('id', alertId);

      if (error) throw error;

      const deletedAlert = alerts.find(a => a.id === alertId);
      setAlerts(prev => prev.filter(a => a.id !== alertId));
      
      if (deletedAlert && !deletedAlert.is_read) {
        setUnreadCount(prev => Math.max(0, prev - 1));
      }

      toast({
        title: 'Alerta eliminada',
      });
    } catch (error) {
      console.error('Error deleting alert:', error);
      toast({
        title: 'Error',
        description: 'No se pudo eliminar la alerta',
        variant: 'destructive',
      });
    }
  };

  const runMonitoring = async () => {
    try {
      toast({
        title: 'Ejecutando monitoreo SEO...',
        description: 'Analizando cambios en las páginas',
      });

      const { data, error } = await supabase.functions.invoke('monitor-seo-changes', {
        body: {},
      });

      if (error) throw error;

      await fetchAlerts();

      toast({
        title: '✅ Monitoreo completado',
        description: data?.summary 
          ? `${data.summary.alerts_created} alertas generadas de ${data.summary.pages_checked} páginas`
          : 'Análisis completado',
      });
    } catch (error) {
      console.error('Error running monitoring:', error);
      toast({
        title: 'Error en monitoreo',
        description: error instanceof Error ? error.message : 'Error desconocido',
        variant: 'destructive',
      });
    }
  };

  useEffect(() => {
    fetchAlerts();

    // Subscribe to real-time alerts
    const channel = supabase
      .channel('seo-alerts-changes')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'seo_alerts',
        },
        (payload) => {
          console.log('New alert received:', payload);
          setAlerts(prev => [payload.new as SEOAlert, ...prev]);
          setUnreadCount(prev => prev + 1);
          
          toast({
            title: '🔔 Nueva alerta SEO',
            description: (payload.new as SEOAlert).message,
            variant: (payload.new as SEOAlert).severity === 'critical' ? 'destructive' : 'default',
          });
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  return {
    alerts,
    isLoading,
    unreadCount,
    markAsRead,
    markAllAsRead,
    deleteAlert,
    runMonitoring,
    refresh: fetchAlerts,
  };
};
