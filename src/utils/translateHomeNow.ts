import { supabase } from '@/integrations/supabase/client';

export const translateHomeNow = async () => {
  console.log('🌍 Traduciendo home /es → /en...');
  
  const { data: esPage, error: esError } = await supabase
    .from('seo_pages')
    .select('*')
    .eq('path', '/es')
    .eq('in_language', 'es-ES')
    .single();

  if (esError || !esPage) {
    throw new Error('No se encontró /es');
  }

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

  if (translateError) throw translateError;

  console.log('✅ Home traducida:', result.newEnPage.path);
  return result;
};

// Auto-ejecutar
translateHomeNow().catch(console.error);
