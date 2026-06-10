import { useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface TranslatePageParams {
  esPath: string;
  enPath: string;
  category: string;
  forceBody?: boolean;
}

interface BatchTranslateParams {
  pages: TranslatePageParams[];
}

export interface PipelinePhase {
  name: string;
  status: 'ok' | 'skipped' | 'failed';
  detail?: string;
  durationMs: number;
}

export interface PipelineResult {
  phases: PipelinePhase[];
  status: 'translated' | 'metadata_only' | 'failed';
  hasBody: boolean;
  newEnPage: any;
  translatedMeta: any;
}

export const useTranslatePage = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  const mutation = useMutation({
    mutationFn: async ({ esPath, enPath, category, forceBody }: TranslatePageParams): Promise<PipelineResult> => {
      const { data: sessionData } = await supabase.auth.getSession();
      if (!sessionData.session?.access_token) {
        throw new Error('Sesión no válida (401). Vuelve a iniciar sesión en /admin/login y reintenta.');
      }

      const { data: result, error } = await supabase.functions.invoke('translate-page-pipeline', {
        body: { esPath, enPath, category, forceBody },
      });

      if (error) {
        const ctx = (error as any)?.context;
        const status = ctx?.status as number | undefined;
        if (status === 401) throw new Error('No autorizado (401). Tu sesión puede haber caducado.');
        if (status === 403) throw new Error('Acceso denegado (403). Sin permisos de administrador.');
        if (status === 429) throw new Error('Límite alcanzado (429). Espera unos minutos.');
        throw new Error(`HTTP ${status ?? '???'} — ${error.message}`);
      }

      return result as PipelineResult;
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['translation-status'] });
      queryClient.invalidateQueries({ queryKey: ['translation-pairs'] });
      queryClient.invalidateQueries({ queryKey: ['seo-pages'] });
      queryClient.invalidateQueries({ queryKey: ['all-routes-inventory'] });
      queryClient.invalidateQueries({ queryKey: ['dynamic-en-page'] });

      const enPath = data.newEnPage?.path || '';

      if (data.status === 'translated') {
        toast({
          title: '✅ Pipeline completado',
          description: `${enPath} — Metadatos + cuerpo traducidos y guardados en DB.`,
        });
      } else if (data.status === 'metadata_only') {
        toast({
          title: 'ℹ️ Solo metadatos traducidos',
          description: `${enPath} — La página ES no tiene cuerpo guardado en DB (es un componente React hardcodeado). Migra el contenido a body_content_html para traducirlo automáticamente.`,
        });
      } else {
        toast({
          variant: 'destructive',
          title: '⚠️ Pipeline parcial',
          description: `${enPath} — Revisa las fases en el detalle.`,
        });
      }
    },
    onError: (error: Error) => {
      console.error('Pipeline error:', error);
      toast({
        variant: 'destructive',
        title: '❌ Error en el pipeline',
        description: error.message || 'No se pudo completar la traducción',
      });
    },
  });

  const batchMutation = useMutation({
    mutationFn: async ({ pages }: BatchTranslateParams) => {
      const results: Array<{ path: string; success: boolean; error?: string; data?: PipelineResult }> = [];
      for (const page of pages) {
        try {
          const { data, error } = await supabase.functions.invoke('translate-page-pipeline', {
            body: { esPath: page.esPath, enPath: page.enPath, category: page.category, forceBody: page.forceBody },
          });
          if (error) {
            results.push({ path: page.esPath, success: false, error: error.message });
          } else {
            results.push({ path: page.esPath, success: true, data: data as PipelineResult });
          }
          await new Promise(r => setTimeout(r, 800));
        } catch (e: any) {
          results.push({ path: page.esPath, success: false, error: e.message });
        }
      }
      return results;
    },
    onSuccess: (results) => {
      queryClient.invalidateQueries({ queryKey: ['translation-status'] });
      queryClient.invalidateQueries({ queryKey: ['translation-pairs'] });
      queryClient.invalidateQueries({ queryKey: ['seo-pages'] });
      queryClient.invalidateQueries({ queryKey: ['all-routes-inventory'] });
      queryClient.invalidateQueries({ queryKey: ['dynamic-en-page'] });

      const ok = results.filter(r => r.success).length;
      const ko = results.length - ok;
      toast({ title: '✅ Lote completado', description: `${ok} OK · ${ko} con errores` });
    },
    onError: (error: Error) => {
      toast({ variant: 'destructive', title: '❌ Error en el lote', description: error.message });
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
