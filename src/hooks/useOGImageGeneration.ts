import { useState, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface GenerateOGImageParams {
  path: string;
  title: string;
  description?: string;
  category?: string;
  language?: string;
}

interface OGImageGenerationResult {
  success: boolean;
  url: string;
  filename: string;
  path: string;
}

interface OGImageGenerationState {
  isGenerating: boolean;
  generatedImage: string | null;
  error: string | null;
}

export const useOGImageGeneration = () => {
  const { toast } = useToast();
  const [state, setState] = useState<OGImageGenerationState>({
    isGenerating: false,
    generatedImage: null,
    error: null,
  });

  const generateOGImage = useCallback(
    async (params: GenerateOGImageParams): Promise<string | null> => {
      setState({
        isGenerating: true,
        generatedImage: null,
        error: null,
      });

      try {
        console.log('[useOGImageGeneration] Starting generation for:', params.path);

        // Get session for auth
        const { data: { session }, error: sessionError } = await supabase.auth.getSession();
        
        if (sessionError || !session) {
          throw new Error('Debes estar autenticado para generar imágenes');
        }

        // Call the edge function
        const response = await fetch(
          `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/generate-og-image`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${session.access_token}`,
            },
            body: JSON.stringify({
              path: params.path,
              title: params.title,
              description: params.description || '',
              category: params.category || 'main',
              language: params.language || 'es',
            }),
          }
        );

        if (!response.ok) {
          const errorData = await response.json();
          
          // Handle specific error codes
          if (response.status === 429) {
            toast({
              variant: 'destructive',
              title: '⏳ Límite de solicitudes',
              description: 'Has excedido el límite. Espera unos minutos e intenta de nuevo.',
            });
            throw new Error('Rate limit exceeded');
          }
          
          if (response.status === 402) {
            toast({
              variant: 'destructive',
              title: '💳 Sin créditos de IA',
              description: 'Los créditos de IA se han agotado. Contacta al administrador.',
            });
            throw new Error('No AI credits available');
          }

          if (response.status === 403) {
            toast({
              variant: 'destructive',
              title: '🔒 Acceso denegado',
              description: 'Necesitas permisos de administrador para generar imágenes.',
            });
            throw new Error('Admin access required');
          }

          throw new Error(errorData.error || 'Error generating image');
        }

        const result: OGImageGenerationResult = await response.json();

        console.log('[useOGImageGeneration] Success:', result.url);

        setState({
          isGenerating: false,
          generatedImage: result.url,
          error: null,
        });

        toast({
          title: '🎨 Imagen OG generada',
          description: 'La imagen se ha generado y guardado correctamente.',
        });

        return result.url;
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
        
        console.error('[useOGImageGeneration] Error:', errorMessage);
        
        setState({
          isGenerating: false,
          generatedImage: null,
          error: errorMessage,
        });

        // Only show toast if not already shown for specific errors
        if (!['Rate limit exceeded', 'No AI credits available', 'Admin access required'].includes(errorMessage)) {
          toast({
            variant: 'destructive',
            title: '❌ Error al generar imagen',
            description: errorMessage,
          });
        }

        return null;
      }
    },
    [toast]
  );

  const clearGeneratedImage = useCallback(() => {
    setState({
      isGenerating: false,
      generatedImage: null,
      error: null,
    });
  }, []);

  return {
    generateOGImage,
    clearGeneratedImage,
    isGenerating: state.isGenerating,
    generatedImage: state.generatedImage,
    error: state.error,
  };
};
