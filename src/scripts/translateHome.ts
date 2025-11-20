import { supabase } from '@/integrations/supabase/client';

export const translateHomePage = async () => {
  try {
    console.log('🌍 Iniciando traducción de la home...');
    
    // Get the Spanish home page
    const { data: esPage, error: esError } = await supabase
      .from('seo_pages')
      .select('*')
      .eq('path', '/es')
      .eq('in_language', 'es-ES')
      .single();

    if (esError || !esPage) {
      throw new Error('No se encontró la página /es');
    }

    console.log('✅ Página ES encontrada:', esPage.title);

    // Call the translation edge function
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
          enPath: '/en',
          category: 'main',
        },
      }
    );

    if (translateError) {
      console.error('❌ Error al traducir:', translateError);
      throw translateError;
    }

    console.log('✅ Traducción completada:');
    console.log('  - Título EN:', result.translatedData.title);
    console.log('  - Path EN:', result.newEnPage.path);
    console.log('  - ID EN:', result.newEnPage.id);

    return result;
  } catch (error) {
    console.error('❌ Error en traducción:', error);
    throw error;
  }
};

// Auto-ejecutar si se importa este módulo
if (import.meta.hot) {
  translateHomePage();
}
