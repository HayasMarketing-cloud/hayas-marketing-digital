import { useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { routeExistsInRegistry, generateRouteCodeData, RouteCodeData } from '@/utils/routeCodeGenerator';

interface TranslatePageParams {
  esPath: string;
  enPath: string;
  category: string;
}

interface BatchTranslateParams {
  pages: TranslatePageParams[];
}

interface TranslationResult {
  esPage: any;
  newEnPage: any;
  translatedData: any;
  routeExists: boolean;
  codeData: RouteCodeData | null;
}

export const useTranslatePage = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  const mutation = useMutation({
    mutationFn: async ({ esPath, enPath, category }: TranslatePageParams): Promise<TranslationResult> => {
      // 1. Get the original ES page data
      const { data: esPage, error: esError } = await supabase
        .from('seo_pages')
        .select('*')
        .eq('path', esPath)
        .eq('in_language', 'es-ES')
        .single();

      if (esError || !esPage) {
        throw new Error('No se encontró la página ES original');
      }

      // 2. Call edge function to translate content AND create EN page
      // The edge function uses service role to bypass RLS policies
      const { data: sessionData } = await supabase.auth.getSession();
      const accessToken = sessionData.session?.access_token;
      if (!accessToken) {
        throw new Error('Sesión no válida (401). Vuelve a iniciar sesión en /admin/login y reintenta.');
      }

      const { data: result, error: translateError } = await supabase.functions.invoke('translate-seo', {
        body: {
          seoData: {
            title: esPage.title,
            description: esPage.description,
            h1: esPage.h1,
            keywords: esPage.keywords,
            schema_type: esPage.schema_type,
            og_type: esPage.og_type,
          },
          targetLanguage: 'en-US',
          esPageId: esPage.id,
          enPath: enPath,
          category: category,
        },
      });

      if (translateError) {
        const ctx = (translateError as any)?.context;
        const status = ctx?.status as number | undefined;
        const rawBody = ctx?.body;
        const bodyText = rawBody
          ? (typeof rawBody === 'string' ? rawBody : JSON.stringify(rawBody))
          : undefined;

        console.error('Translation invoke error:', {
          message: translateError.message,
          status,
          body: rawBody,
        });

        if (status === 401) {
          throw new Error('No autorizado (401). Tu sesión puede haber caducado: vuelve a iniciar sesión en /admin/login.');
        }
        if (status === 403) {
          throw new Error('Acceso denegado (403). Tu usuario no tiene permisos de administrador.');
        }
        if (status === 429) {
          throw new Error('Límite de uso alcanzado (429). Espera unos minutos y reintenta.');
        }

        const compactBody = bodyText && bodyText.length > 300 ? `${bodyText.slice(0, 300)}…` : bodyText;
        const details = [`HTTP ${status ?? '???'}`, translateError.message, compactBody]
          .filter(Boolean)
          .join(' — ');

        throw new Error(details || 'Error al traducir el contenido');
      }

      // 3. Check if route exists in registry
      const routeExists = routeExistsInRegistry(enPath);
      const codeData = routeExists ? null : generateRouteCodeData(esPath, enPath);

      return {
        esPage,
        newEnPage: (result as any)?.newEnPage,
        translatedData: (result as any)?.translatedData,
        routeExists,
        codeData,
      };
    },
    onSuccess: (data) => {
      // Invalidate queries to refresh the UI
      queryClient.invalidateQueries({ queryKey: ['translation-status'] });
      queryClient.invalidateQueries({ queryKey: ['translation-pairs'] });
      queryClient.invalidateQueries({ queryKey: ['seo-pages'] });

      // Only show toast if route already exists (no code needed)
      if (data.routeExists) {
        toast({
          title: '✅ Página traducida con éxito',
          description: data.newEnPage.path,
        });
      }
      // If !routeExists, the calling component will show the modal
    },
    onError: (error: Error) => {
      console.error('Translation mutation error:', error);
      toast({
        variant: 'destructive',
        title: '❌ Error al traducir',
        description: error.message || 'No se pudo completar la traducción',
      });
    },
  });

  const batchMutation = useMutation({
    mutationFn: async ({ pages }: BatchTranslateParams) => {
      const results = [];
      
      for (const page of pages) {
        try {
          // Get the original ES page data
          const { data: esPage, error: esError } = await supabase
            .from('seo_pages')
            .select('*')
            .eq('path', page.esPath)
            .eq('in_language', 'es-ES')
            .single();

          if (esError || !esPage) {
            results.push({ 
              path: page.esPath, 
              success: false, 
              error: 'No se encontró la página ES original' 
            });
            continue;
          }

          // Call edge function to translate
          const { data: result, error: translateError } = await supabase.functions.invoke(
            'translate-seo',
            {
              body: {
                seoData: {
                  title: esPage.title,
                  description: esPage.description,
                  h1: esPage.h1,
                  keywords: esPage.keywords,
                  schema_type: esPage.schema_type,
                  og_type: esPage.og_type,
                },
                targetLanguage: 'en-US',
                esPageId: esPage.id,
                enPath: page.enPath,
                category: page.category,
              },
            }
          );

          if (translateError) {
            results.push({ 
              path: page.esPath, 
              success: false, 
              error: 'Error al traducir el contenido' 
            });
            continue;
          }

          results.push({ 
            path: page.esPath, 
            success: true, 
            data: result 
          });

          // Wait a bit between requests to avoid rate limits
          await new Promise(resolve => setTimeout(resolve, 1000));

        } catch (error: any) {
          results.push({ 
            path: page.esPath, 
            success: false, 
            error: error.message 
          });
        }
      }

      return results;
    },
    onSuccess: (results) => {
      queryClient.invalidateQueries({ queryKey: ['translation-status'] });
      queryClient.invalidateQueries({ queryKey: ['translation-pairs'] });
      queryClient.invalidateQueries({ queryKey: ['seo-pages'] });

      const successCount = results.filter(r => r.success).length;
      const errorCount = results.filter(r => !r.success).length;

      toast({
        title: `✅ Procesamiento completado`,
        description: `${successCount} páginas traducidas, ${errorCount} errores`,
      });
    },
    onError: (error: Error) => {
      toast({
        variant: 'destructive',
        title: '❌ Error en el procesamiento por lotes',
        description: error.message,
      });
    },
  });

  return {
    translatePage: mutation.mutate,
    translatePageAsync: mutation.mutateAsync,
    isTranslating: mutation.isPending,
    translationData: mutation.data,
    error: mutation.error,
    batchTranslate: batchMutation.mutate,
    isBatchTranslating: batchMutation.isPending,
  };
};
