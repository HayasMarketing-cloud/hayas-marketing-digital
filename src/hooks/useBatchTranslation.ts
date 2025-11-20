import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';

interface TranslationItem {
  esPath: string;
  enPath: string;
  esPageId?: string;
  category?: string;
  status: 'pending' | 'processing' | 'success' | 'error';
  error?: string;
  translatedData?: any;
}

interface BatchTranslationParams {
  pages: Array<{
    esPath: string;
    enPath: string;
    esPageId?: string;
    category?: string;
  }>;
  onProgress?: (progress: BatchTranslationProgress) => void;
}

interface BatchTranslationProgress {
  total: number;
  completed: number;
  successful: number;
  failed: number;
  items: TranslationItem[];
}

const BATCH_SIZE = 3; // Process 3 translations in parallel
const BATCH_DELAY = 2000; // 2 seconds between batches

export const useBatchTranslation = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState<BatchTranslationProgress | null>(null);

  const batchTranslate = async ({ pages, onProgress }: BatchTranslationParams) => {
    setIsProcessing(true);

    const items: TranslationItem[] = pages.map(page => ({
      esPath: page.esPath,
      enPath: page.enPath,
      esPageId: page.esPageId,
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
      console.log(`🌍 Starting batch translation for ${pages.length} pages`);

      // Process in batches to respect rate limits
      for (let i = 0; i < pages.length; i += BATCH_SIZE) {
        const batch = pages.slice(i, i + BATCH_SIZE);
        
        console.log(`📦 Translating batch ${Math.floor(i / BATCH_SIZE) + 1}/${Math.ceil(pages.length / BATCH_SIZE)}`);

        // Process batch items in parallel
        await Promise.all(
          batch.map(async (page, batchIndex) => {
            const itemIndex = i + batchIndex;
            items[itemIndex].status = 'processing';
            updateProgress();

            try {
              // Fetch the original Spanish SEO data
              const { data: esPage, error: fetchError } = await supabase
                .from('seo_pages')
                .select('*')
                .eq('path', page.esPath)
                .single();

              if (fetchError) throw new Error(`No se encontró la página ES: ${fetchError.message}`);
              if (!esPage) throw new Error('Página ES no encontrada');

              // Call translation edge function
              const { data: translationData, error: translationError } = await supabase.functions.invoke(
                'translate-seo',
                {
                  body: {
                    seoData: {
                      title: esPage.title,
                      description: esPage.description,
                      h1: esPage.h1,
                      keywords: esPage.keywords,
                    },
                    targetLanguage: 'en',
                    esPageId: esPage.id,
                    enPath: page.enPath,
                    category: page.category || esPage.category,
                  },
                }
              );

              if (translationError) throw translationError;
              if (translationData?.error) throw new Error(translationData.error);
              if (!translationData?.success) {
                throw new Error('Traducción fallida sin datos');
              }

              items[itemIndex].status = 'success';
              items[itemIndex].translatedData = translationData.translated;
              console.log(`✅ Translated ${page.esPath} → ${page.enPath}`);

            } catch (err) {
              const errorMessage = err instanceof Error ? err.message : 'Error desconocido';
              items[itemIndex].status = 'error';
              items[itemIndex].error = errorMessage;
              console.error(`❌ Failed to translate ${page.esPath}:`, errorMessage);
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

      console.log('🎉 Batch translation completed:', finalProgress);

      toast({
        title: '✅ Traducción completada',
        description: `${finalProgress.successful} exitosas, ${finalProgress.failed} fallidas`,
        variant: finalProgress.failed > 0 ? 'destructive' : 'default',
      });

      return finalProgress;

    } catch (error) {
      console.error('❌ Batch translation error:', error);
      toast({
        title: '❌ Error en traducción batch',
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
    batchTranslate,
    isProcessing,
    progress,
    reset,
  };
};
