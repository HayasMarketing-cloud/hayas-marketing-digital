import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';

export interface SEOSuggestions {
  title: string;
  description: string;
  h1: string;
  keywords: string[];
  h2_primary?: string;
  og_image_suggestion?: string;
  reasoning?: string;
}

export type TargetLanguage = 'es' | 'en';

interface GenerateSEOParams {
  path: string;
  pageContent?: string;
  category?: string;
  targetLanguage?: TargetLanguage;
  existingSEO?: {
    title?: string;
    description?: string;
    h1?: string;
    keywords?: string[];
  };
}

/**
 * Detecta el idioma de destino basado en la ruta
 * - /en/... → inglés
 * - /es/... o cualquier otra → español
 */
const detectLanguageFromPath = (path: string): TargetLanguage => {
  if (path.startsWith('/en/') || path === '/en') {
    return 'en';
  }
  return 'es';
};

export const useGenerateSEO = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [suggestions, setSuggestions] = useState<SEOSuggestions | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [detectedLanguage, setDetectedLanguage] = useState<TargetLanguage>('es');

  const generateSEO = async (params: GenerateSEOParams) => {
    setIsGenerating(true);
    setError(null);
    setSuggestions(null);

    // Auto-detectar idioma si no se especifica
    const targetLanguage = params.targetLanguage || detectLanguageFromPath(params.path);
    setDetectedLanguage(targetLanguage);

    try {
      console.log('🤖 Generating SEO for:', params.path, '| Language:', targetLanguage);

      const { data, error: functionError } = await supabase.functions.invoke('generate-seo-suggestions', {
        body: {
          path: params.path,
          pageContent: params.pageContent || `Página: ${params.path}`,
          category: params.category || 'general',
          targetLanguage,
          existingSEO: params.existingSEO,
        },
      });

      if (functionError) {
        console.error('❌ Edge function error:', functionError);
        throw new Error(functionError.message);
      }

      if (data?.error) {
        throw new Error(data.error);
      }

      if (!data?.success || !data?.suggestions) {
        throw new Error('No se recibieron sugerencias de la IA');
      }

      console.log('✅ SEO generated successfully in', targetLanguage);
      setSuggestions(data.suggestions);

      const langLabel = targetLanguage === 'en' ? 'English' : 'Español';
      toast({
        title: '✨ Sugerencias generadas',
        description: `La IA ha generado metadatos SEO optimizados en ${langLabel}.`,
      });

      return data.suggestions;

    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Error desconocido al generar SEO';
      console.error('❌ useGenerateSEO error:', err);
      setError(errorMessage);

      toast({
        title: '❌ Error al generar SEO',
        description: errorMessage,
        variant: 'destructive',
      });

      throw err;
    } finally {
      setIsGenerating(false);
    }
  };

  const reset = () => {
    setSuggestions(null);
    setError(null);
    setDetectedLanguage('es');
  };

  return {
    generateSEO,
    isGenerating,
    suggestions,
    error,
    detectedLanguage,
    reset,
  };
};
