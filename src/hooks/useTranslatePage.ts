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

      // 2. Call edge function to translate content
      const { data: translatedData, error: translateError } = await supabase.functions.invoke(
        'translate-seo',
        {
          body: {
            seoData: {
              title: esPage.title,
              description: esPage.description,
              h1: esPage.h1,
              keywords: esPage.keywords,
            },
            targetLanguage: 'en-US',
          },
        }
      );

      if (translateError) {
        console.error('Translation error:', translateError);
        throw new Error('Error al traducir el contenido');
      }

      // 3. Create the EN page in database
      const { data: newEnPage, error: insertError } = await supabase
        .from('seo_pages')
        .insert({
          path: enPath,
          title: translatedData.title,
          description: translatedData.description,
          h1: translatedData.h1,
          h2_primary: translatedData.h1, // Use H1 as H2 primary for now
          keywords: translatedData.keywords,
          canonical: `https://hayasmarketing.com${enPath}`,
          in_language: 'en-US',
          translation_of: esPage.id,
          schema_type: esPage.schema_type,
          category: category,
          is_indexable: true,
          og_type: esPage.og_type || 'website',
          robots: 'index,follow',
        })
        .select()
        .single();

      if (insertError) {
        console.error('Insert error:', insertError);
        throw new Error('Error al crear la página EN en la base de datos');
      }

      return { esPage, newEnPage, translatedData };
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
