import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';

interface AdminAuthState {
  isAdmin: boolean;
  isLoading: boolean;
  error: string | null;
}

export const useAdminAuth = () => {
  const { user, session, loading: authLoading } = useAuth();
  const [state, setState] = useState<AdminAuthState>({
    isAdmin: false,
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    const checkAdminRole = async () => {
      if (authLoading) return;

      if (!user || !session) {
        setState({ isAdmin: false, isLoading: false, error: null });
        return;
      }

      try {
        // Use the has_role function to check admin status
        const { data, error } = await supabase
          .rpc('has_role', { 
            _user_id: user.id, 
            _role: 'admin' 
          });

        if (error) {
          console.error('Error checking admin role:', error);
          setState({ isAdmin: false, isLoading: false, error: error.message });
          return;
        }

        setState({ isAdmin: data === true, isLoading: false, error: null });
      } catch (err) {
        console.error('Error in admin check:', err);
        setState({ 
          isAdmin: false, 
          isLoading: false, 
          error: 'Error verificando permisos de administrador' 
        });
      }
    };

    checkAdminRole();
  }, [user, session, authLoading]);

  return {
    ...state,
    user,
    session,
    isAuthenticated: !!user && !!session,
    authLoading,
  };
};
