import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { RouteInventoryItem } from '@/hooks/useAllRoutes';
import { useToast } from '@/hooks/use-toast';
import { useTranslatePage } from '@/hooks/useTranslatePage';
import { Loader2, PlayCircle, CheckCircle2, XCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface BatchProcessorProps {
  selectedRoutes: RouteInventoryItem[];
  onComplete: () => void;
  onCancel: () => void;
}

interface ProcessingResult {
  route: RouteInventoryItem;
  status: 'pending' | 'processing' | 'success' | 'error';
  message?: string;
}

export const BatchProcessor: React.FC<BatchProcessorProps> = ({ selectedRoutes, onComplete, onCancel }) => {
  const { toast } = useToast();
  const { translatePage } = useTranslatePage();
  const [isProcessing, setIsProcessing] = useState(false);
  const [results, setResults] = useState<ProcessingResult[]>(
    selectedRoutes.map(route => ({ route, status: 'pending' }))
  );

  const processRoutes = async () => {
    setIsProcessing(true);

    for (let i = 0; i < selectedRoutes.length; i++) {
      const route = selectedRoutes[i];

      // Update to processing
      setResults(prev => prev.map((r, idx) => 
        idx === i ? { ...r, status: 'processing' } : r
      ));

      try {
        if (route.status === 'pending' && route.translationPath) {
          // Translate route
          await new Promise((resolve, reject) => {
            translatePage(
              {
                esPath: route.path,
                enPath: route.translationPath!,
                category: route.category,
              },
              {
                onSuccess: () => resolve(true),
                onError: (error) => reject(error),
              }
            );
          });

          setResults(prev => prev.map((r, idx) => 
            idx === i ? { ...r, status: 'success', message: 'Traducida correctamente' } : r
          ));
        } else {
          setResults(prev => prev.map((r, idx) => 
            idx === i ? { ...r, status: 'error', message: 'No se puede procesar automáticamente' } : r
          ));
        }

        // Wait a bit between requests to avoid rate limits
        await new Promise(resolve => setTimeout(resolve, 1000));

      } catch (error: any) {
        setResults(prev => prev.map((r, idx) => 
          idx === i ? { ...r, status: 'error', message: error.message || 'Error desconocido' } : r
        ));
      }
    }

    setIsProcessing(false);
    
    const successCount = results.filter(r => r.status === 'success').length;
    const errorCount = results.filter(r => r.status === 'error').length;

    toast({
      title: '🎉 Procesamiento completado',
      description: `${successCount} éxitos, ${errorCount} errores`,
    });

    setTimeout(() => {
      onComplete();
    }, 2000);
  };

  const progress = results.filter(r => r.status !== 'pending').length;
  const progressPercentage = Math.round((progress / selectedRoutes.length) * 100);

  return (
    <Card className="border-primary/20">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Procesamiento por Lotes</span>
          <Badge variant="outline">
            {selectedRoutes.length} página{selectedRoutes.length !== 1 ? 's' : ''}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {!isProcessing && progress === 0 && (
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Se procesarán automáticamente {selectedRoutes.length} páginas seleccionadas.
              Las páginas "Pendiente" serán traducidas automáticamente.
            </p>
            <div className="flex gap-2">
              <Button onClick={processRoutes} className="flex-1">
                <PlayCircle className="mr-2 h-4 w-4" />
                Iniciar Procesamiento
              </Button>
              <Button onClick={onCancel} variant="outline">
                Cancelar
              </Button>
            </div>
          </div>
        )}

        {isProcessing && (
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>Progreso:</span>
                <span>{progress} / {selectedRoutes.length}</span>
              </div>
              <Progress value={progressPercentage} className="h-2" />
            </div>

            <div className="max-h-[400px] overflow-y-auto space-y-2">
              {results.map((result, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-3 bg-muted rounded-lg"
                >
                  <div className="flex items-center gap-2 flex-1 min-w-0">
                    {result.status === 'pending' && (
                      <div className="h-4 w-4 rounded-full border-2 border-muted-foreground" />
                    )}
                    {result.status === 'processing' && (
                      <Loader2 className="h-4 w-4 animate-spin text-blue-500" />
                    )}
                    {result.status === 'success' && (
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                    )}
                    {result.status === 'error' && (
                      <XCircle className="h-4 w-4 text-red-500" />
                    )}
                    <span className="text-sm truncate">{result.route.path}</span>
                  </div>
                  {result.message && (
                    <span className="text-xs text-muted-foreground ml-2">
                      {result.message}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {!isProcessing && progress > 0 && (
          <div className="space-y-4">
            <div className="text-center py-4">
              <CheckCircle2 className="h-12 w-12 text-green-500 mx-auto mb-2" />
              <p className="font-semibold">¡Procesamiento completado!</p>
            </div>
            <Button onClick={onComplete} className="w-full">
              Cerrar
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};