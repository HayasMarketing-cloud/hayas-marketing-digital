import React from 'react';
import { useLocation } from 'react-router-dom';
import { isDraftPage, hasDeveloperAccess } from '@/config/draftPages';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Construction, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface DraftProtectionProps {
  children: React.ReactNode;
}

const DraftProtection: React.FC<DraftProtectionProps> = ({ children }) => {
  const location = useLocation();
  const isCurrentPageDraft = isDraftPage(location.pathname);
  const hasDevAccess = hasDeveloperAccess();

  // If not a draft page, render normally
  if (!isCurrentPageDraft) {
    return <>{children}</>;
  }

  // If draft page but no developer access, show not available message
  if (!hasDevAccess) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="container mx-auto px-4 text-center max-w-md">
          <Construction className="w-16 h-16 mx-auto mb-6 text-muted-foreground" />
          <h1 className="text-2xl font-bold mb-4">Página en Desarrollo</h1>
          <p className="text-muted-foreground mb-6">
            Esta página está actualmente en desarrollo y no está disponible para el público.
          </p>
          <Button 
            onClick={() => window.history.back()} 
            variant="outline"
          >
            Volver
          </Button>
        </div>
      </div>
    );
  }

  // If developer access, show page with development banner
  return (
    <div>
      <Alert className="rounded-none border-x-0 border-t-0 bg-amber-50 border-amber-200 dark:bg-amber-950/20 dark:border-amber-900">
        <Eye className="h-4 w-4 text-amber-600" />
        <AlertDescription className="text-amber-800 dark:text-amber-200">
          <strong>Modo Desarrollador:</strong> Esta página está en desarrollo y no es accesible públicamente. 
          Solo visible con acceso de desarrollador.
        </AlertDescription>
      </Alert>
      {children}
    </div>
  );
};

export default DraftProtection;