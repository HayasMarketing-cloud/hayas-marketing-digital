import React, { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, CheckCircle, AlertCircle } from 'lucide-react';

const TranslateHomeTest = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const handleTranslate = async () => {
    setLoading(true);
    setError(null);
    setResult(null);

    try {
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
      const { data: translationResult, error: translateError } = await supabase.functions.invoke(
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

      console.log('✅ Traducción completada:', translationResult);
      setResult(translationResult);
    } catch (err: any) {
      console.error('❌ Error:', err);
      setError(err.message || 'Error desconocido');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-2xl mx-auto space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Traducir Home (/es → /en)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button 
              onClick={handleTranslate} 
              disabled={loading}
              className="w-full"
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Traduciendo...
                </>
              ) : (
                'Traducir Home al Inglés'
              )}
            </Button>

            {error && (
              <div className="p-4 bg-destructive/10 border border-destructive rounded-lg flex items-start gap-2">
                <AlertCircle className="h-5 w-5 text-destructive mt-0.5" />
                <div>
                  <p className="font-semibold text-destructive">Error</p>
                  <p className="text-sm text-destructive/80">{error}</p>
                </div>
              </div>
            )}

            {result && (
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <p className="font-semibold text-green-900">¡Traducción exitosa!</p>
                </div>
                <div className="space-y-2 text-sm text-green-800">
                  <p><strong>Título EN:</strong> {result.translatedData?.title}</p>
                  <p><strong>Descripción EN:</strong> {result.translatedData?.description}</p>
                  <p><strong>H1 EN:</strong> {result.translatedData?.h1}</p>
                  <p><strong>Path EN:</strong> {result.newEnPage?.path}</p>
                  <p><strong>ID EN:</strong> {result.newEnPage?.id}</p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TranslateHomeTest;
