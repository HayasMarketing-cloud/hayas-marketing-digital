import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';
import type { SEOSuggestions } from './useGenerateSEO';

interface BatchItem {
  path: string;
  category?: string;
  status: 'pending' | 'processing' | 'success' | 'error';
  suggestions?: SEOSuggestions;
  error?: string;
  saved?: boolean;
}

interface BatchSEOParams {
  pages: Array<{
    path: string;
    category?: string;
    pageContent?: string;
  }>;
  autoSave?: boolean;
  onProgress?: (progress: BatchProgress) => void;
}

interface BatchProgress {
  total: number;
  completed: number;
  successful: number;
  failed: number;
  items: BatchItem[];
}

const BATCH_SIZE = 3; // Process 3 pages in parallel
const BATCH_DELAY = 2000; // 2 seconds between batches
const MAX_RETRIES = 3;
const INITIAL_RETRY_DELAY = 2000; // 2 seconds

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const useBatchSEOGeneration = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState<BatchProgress | null>(null);

  const generateBatchSEO = async ({ pages, autoSave = false, onProgress }: BatchSEOParams) => {
    setIsProcessing(true);

    const items: BatchItem[] = pages.map(page => ({
      path: page.path,
      category: page.category,
      status: 'pending' as const,
    }));

    const updateProgress = () => {
      const completed = items.filter(i => i.status === 'success' || i.status === 'error').length;
      const successful = items.filter(i => i.status === 'success').length;
      const failed = items.filter(i => i.status === 'error').length;

      const newProgress = {
        total: items.length,
        completed,
        successful,
        failed,
        items: [...items],
      };

      setProgress(newProgress);
      onProgress?.(newProgress);
    };

    try {
      console.log(`🚀 Starting batch SEO generation for ${pages.length} pages`);

      // Process in batches to respect rate limits
      for (let i = 0; i < pages.length; i += BATCH_SIZE) {
        const batch = pages.slice(i, i + BATCH_SIZE);
        
        console.log(`📦 Processing batch ${Math.floor(i / BATCH_SIZE) + 1}/${Math.ceil(pages.length / BATCH_SIZE)}`);

        // Process batch items in parallel
        await Promise.all(
          batch.map(async (page, batchIndex) => {
            const itemIndex = i + batchIndex;
            items[itemIndex].status = 'processing';
            updateProgress();

            let retryCount = 0;
            let success = false;

            while (retryCount <= MAX_RETRIES && !success) {
              try {
                const { data, error } = await supabase.functions.invoke('generate-seo-suggestions', {
                  body: {
                    path: page.path,
                    pageContent: page.pageContent || `Ruta: ${page.path}\nCategoría: ${page.category || 'general'}`,
                    category: page.category || 'general',
                  },
                });

                if (error) throw error;
                if (data?.error) {
                  // Check for rate limit or payment errors
                  const errorMsg = data.error.toLowerCase();
                  if (errorMsg.includes('429') || errorMsg.includes('rate limit')) {
                    throw new Error('RATE_LIMIT');
                  }
                  if (errorMsg.includes('402') || errorMsg.includes('payment') || errorMsg.includes('credits')) {
                    throw new Error('PAYMENT_REQUIRED');
                  }
                  throw new Error(data.error);
                }
                if (!data?.success || !data?.suggestions) {
                  throw new Error('No se recibieron sugerencias');
                }

                items[itemIndex].suggestions = data.suggestions;
                items[itemIndex].status = 'success';

                // Auto-save if enabled
                if (autoSave && data.suggestions) {
                  try {
                    const { error: saveError } = await supabase.from('seo_pages').insert({
                      path: page.path,
                      title: data.suggestions.title,
                      description: data.suggestions.description,
                      h1: data.suggestions.h1,
                      keywords: data.suggestions.keywords,
                      canonical: page.path,
                      category: page.category || 'general',
                      in_language: 'es-ES',
                      is_indexable: true,
                    });

                    if (saveError) {
                      console.error(`❌ Error saving ${page.path}:`, saveError);
                      items[itemIndex].error = `Generado pero no guardado: ${saveError.message}`;
                    } else {
                      items[itemIndex].saved = true;
                      console.log(`✅ Saved ${page.path}`);
                    }
                  } catch (saveErr) {
                    items[itemIndex].error = 'Generado pero error al guardar';
                  }
                }

                console.log(`✅ Generated SEO for ${page.path}`);
                success = true;

              } catch (err) {
                const errorMessage = err instanceof Error ? err.message : 'Error desconocido';
                
                // Check if we should retry
                const shouldRetry = (
                  errorMessage === 'RATE_LIMIT' || 
                  errorMessage === 'PAYMENT_REQUIRED'
                ) && retryCount < MAX_RETRIES;

                if (shouldRetry) {
                  retryCount++;
                  const delay = INITIAL_RETRY_DELAY * Math.pow(2, retryCount - 1); // Exponential backoff: 2s, 4s, 8s
                  console.log(`⚠️ ${errorMessage} - Retry ${retryCount}/${MAX_RETRIES} for ${page.path} in ${delay}ms`);
                  await sleep(delay);
                } else {
                  // Final error after all retries
                  items[itemIndex].status = 'error';
                  items[itemIndex].error = errorMessage === 'RATE_LIMIT' 
                    ? 'Rate limit excedido (max reintentos)'
                    : errorMessage === 'PAYMENT_REQUIRED'
                    ? 'Sin créditos disponibles'
                    : errorMessage;
                  console.error(`❌ Failed to generate SEO for ${page.path} after ${retryCount} retries:`, errorMessage);
                  break;
                }
              }
            }

            updateProgress();
          })
        );

        // Delay between batches (except for the last batch)
        if (i + BATCH_SIZE < pages.length) {
          console.log(`⏳ Waiting ${BATCH_DELAY}ms before next batch...`);
          await new Promise(resolve => setTimeout(resolve, BATCH_DELAY));
        }
      }

      const finalProgress = progress || {
        total: items.length,
        completed: items.length,
        successful: items.filter(i => i.status === 'success').length,
        failed: items.filter(i => i.status === 'error').length,
        items,
      };

      console.log('🎉 Batch processing completed:', finalProgress);

      toast({
        title: '✅ Procesamiento completado',
        description: `${finalProgress.successful} exitosas, ${finalProgress.failed} fallidas`,
        variant: finalProgress.failed > 0 ? 'destructive' : 'default',
      });

      return finalProgress;

    } catch (error) {
      console.error('❌ Batch processing error:', error);
      toast({
        title: '❌ Error en procesamiento batch',
        description: error instanceof Error ? error.message : 'Error desconocido',
        variant: 'destructive',
      });
      throw error;
    } finally {
      setIsProcessing(false);
    }
  };

  const reset = () => {
    setProgress(null);
  };

  return {
    generateBatchSEO,
    isProcessing,
    progress,
    reset,
  };
};
