import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAdminAuth } from '@/hooks/useAdminAuth';
import { Loader2, ShieldAlert } from 'lucide-react';

interface AdminProtectedRouteProps {
  children: React.ReactNode;
}

export const AdminProtectedRoute: React.FC<AdminProtectedRouteProps> = ({ children }) => {
  const { isAdmin, isLoading, isAuthenticated, authLoading, error } = useAdminAuth();
  const location = useLocation();

  // Show loading state while checking authentication
  if (authLoading || isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center space-y-4">
          <Loader2 className="h-8 w-8 animate-spin mx-auto text-primary" />
          <p className="text-muted-foreground">Verificando acceso...</p>
        </div>
      </div>
    );
  }

  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/admin/login" state={{ from: location }} replace />;
  }

  // Show access denied if authenticated but not admin
  if (!isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center space-y-4 max-w-md px-4">
          <ShieldAlert className="h-16 w-16 mx-auto text-destructive" />
          <h1 className="text-2xl font-bold">Acceso Denegado</h1>
          <p className="text-muted-foreground">
            No tienes permisos de administrador para acceder a esta sección.
          </p>
          {error && (
            <p className="text-sm text-destructive">{error}</p>
          )}
          <div className="pt-4">
            <a 
              href="/es" 
              className="text-primary hover:underline"
            >
              Volver al inicio
            </a>
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};
