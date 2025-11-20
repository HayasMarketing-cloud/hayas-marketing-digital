import { useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface TranslatePageParams {
  esPath: string;
  enPath: string;
  category: string;
}

export const useTranslatePage = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  const mutation = useMutation({
    mutationFn: async ({ esPath, enPath, category }: TranslatePageParams) => {
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
            enPath: enPath,
            category: category,
          },
        }
      );

      if (translateError) {
        console.error('Translation error:', translateError);
        throw new Error('Error al traducir el contenido');
      }

      return { 
        esPage, 
        newEnPage: result.newEnPage, 
        translatedData: result.translatedData 
      };
    },
    onSuccess: (data) => {
      // Invalidate queries to refresh the UI
      queryClient.invalidateQueries({ queryKey: ['translation-status'] });
      queryClient.invalidateQueries({ queryKey: ['translation-pairs'] });
      queryClient.invalidateQueries({ queryKey: ['seo-pages'] });

      toast({
        title: '✅ Página traducida con éxito',
        description: `${data.newEnPage.path} - Los metadatos SEO se han generado automáticamente`,
      });
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

  return {
    translatePage: mutation.mutate,
    isTranslating: mutation.isPending,
    error: mutation.error,
  };
};
