import { useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { RouteDefinition } from '@/utils/routeRegistry';

interface SyncRouteParams {
  newRoute: RouteDefinition;
}

/**
 * Hook to sync a new route to routeRegistryData.ts via Edge Function
 */
export const useRouteRegistrySync = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { mutateAsync: syncRoute, isPending: isSyncing } = useMutation({
    mutationFn: async ({ newRoute }: SyncRouteParams) => {
      const { data, error } = await supabase.functions.invoke('sync-route-registry', {
        body: { newRoute },
      });

      if (error) {
        throw error;
      }

      return data;
    },
    onSuccess: () => {
      // Invalidate route-related queries
      queryClient.invalidateQueries({ queryKey: ['registered-routes'] });
      
      toast({
        title: 'Ruta registrada',
        description: 'La ruta se ha añadido al registro automáticamente',
      });
    },
    onError: (error: Error) => {
      console.error('Error syncing route:', error);
      toast({
        variant: 'destructive',
        title: 'Error al registrar ruta',
        description: error.message,
      });
    },
  });

  return { syncRoute, isSyncing };
};
