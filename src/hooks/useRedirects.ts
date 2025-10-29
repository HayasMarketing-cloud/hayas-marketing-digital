import { useState, useEffect } from 'react';
import { ParsedRedirect, parseRedirectsFile, loadRedirectsFile } from '@/utils/seo-analytics/redirectsParser';
import { extractRedirectsFromRoutes } from '@/utils/seo-analytics/redirectExtractor';

interface UseRedirectsReturn {
  redirects: ParsedRedirect[];
  isLoading: boolean;
  error: Error | null;
  source: 'file' | 'fallback';
}

/**
 * Hook para cargar y parsear las redirecciones desde public/_redirects
 * Con fallback a datos legacy si falla la carga
 */
export function useRedirects(): UseRedirectsReturn {
  const [redirects, setRedirects] = useState<ParsedRedirect[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [source, setSource] = useState<'file' | 'fallback'>('file');

  useEffect(() => {
    async function loadRedirects() {
      try {
        setIsLoading(true);
        const content = await loadRedirectsFile();
        const parsed = parseRedirectsFile(content);
        setRedirects(parsed);
        setSource('file');
        setError(null);
      } catch (err) {
        console.error('Error loading _redirects file:', err);
        setError(err instanceof Error ? err : new Error('Unknown error'));
        
        // Fallback a datos legacy
        const fallbackData = extractRedirectsFromRoutes();
        const parsedFallback: ParsedRedirect[] = fallbackData.map((r, idx) => ({
          ...r,
          isSplat: false,
          lineNumber: idx + 1
        }));
        setRedirects(parsedFallback);
        setSource('fallback');
      } finally {
        setIsLoading(false);
      }
    }

    loadRedirects();
  }, []);

  return { redirects, isLoading, error, source };
}
