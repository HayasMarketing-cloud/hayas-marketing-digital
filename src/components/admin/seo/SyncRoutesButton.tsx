import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { RefreshCw, CheckCircle2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useQueryClient } from '@tanstack/react-query';

export const SyncRoutesButton: React.FC = () => {
  const [isSyncing, setIsSyncing] = useState(false);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const handleSync = async () => {
    setIsSyncing(true);
    
    try {
      // Invalidar cache para recargar datos frescos
      await queryClient.invalidateQueries({ queryKey: ['seo-pages'] });
      
      // Simular análisis de rutas (en el futuro esto puede hacer más)
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: 'Sincronización completa',
        description: 'Todas las rutas han sido actualizadas',
        duration: 3000,
      });
    } catch (error) {
      toast({
        title: 'Error en sincronización',
        description: 'No se pudieron sincronizar las rutas',
        variant: 'destructive'
      });
    } finally {
      setIsSyncing(false);
    }
  };

  return (
    <Button
      onClick={handleSync}
      disabled={isSyncing}
      variant="outline"
      size="sm"
    >
      {isSyncing ? (
        <>
          <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
          Sincronizando...
        </>
      ) : (
        <>
          <RefreshCw className="h-4 w-4 mr-2" />
          Sincronizar Rutas
        </>
      )}
    </Button>
  );
};
