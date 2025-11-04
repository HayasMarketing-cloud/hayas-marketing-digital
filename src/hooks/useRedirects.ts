import { useState, useEffect } from 'react';
import { redirectsConfig, RedirectRule } from '@/config/redirectsConfig';

interface UseRedirectsReturn {
  redirects: RedirectRule[];
  isLoading: boolean;
  error: Error | null;
  source: 'config' | 'fallback';
}

/**
 * Hook para cargar las redirecciones desde redirectsConfig.ts
 * Nueva arquitectura React Router nativa (Enero 2025)
 */
export function useRedirects(): UseRedirectsReturn {
  const [redirects, setRedirects] = useState<RedirectRule[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setIsLoading(true);
    try {
      // Cargar desde redirectsConfig.ts (síncrono)
      setRedirects(redirectsConfig);
      setError(null);
    } catch (err) {
      console.error('Error loading redirectsConfig:', err);
      setError(err instanceof Error ? err : new Error('Unknown error'));
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { 
    redirects, 
    isLoading, 
    error, 
    source: 'config' 
  };
}
