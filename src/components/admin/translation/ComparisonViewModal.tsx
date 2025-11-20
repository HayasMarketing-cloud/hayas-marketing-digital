import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { GitCompare, Download, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import type { Tables } from '@/integrations/supabase/types';

interface ComparisonViewModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPaths?: string[];
}

type SEOPage = Tables<'seo_pages'>;

interface ComparisonPair {
  esPage: SEOPage;
  enPage: SEOPage | null;
}

export const ComparisonViewModal = ({
  isOpen,
  onClose,
  selectedPaths,
}: ComparisonViewModalProps) => {
  const [comparisons, setComparisons] = useState<ComparisonPair[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isOpen) {
      loadComparisons();
    }
  }, [isOpen, selectedPaths]);

  const loadComparisons = async () => {
    setIsLoading(true);
    try {
      // Fetch all ES pages
      const { data: esPages } = await supabase
        .from('seo_pages')
        .select('*')
        .eq('in_language', 'es-ES')
        .in('path', selectedPaths || []);

      if (!esPages) return;

      // Fetch corresponding EN pages using translation_of relationship
      const pairs: ComparisonPair[] = await Promise.all(
        esPages.map(async (esPage) => {
          const { data: enPage } = await supabase
            .from('seo_pages')
            .select('*')
            .eq('translation_of', esPage.id)
            .maybeSingle();

          return { esPage, enPage };
        })
      );

      setComparisons(pairs);
    } catch (error) {
      console.error('Error loading comparisons:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const exportToCSV = () => {
    const headers = ['Campo', 'Español', 'Inglés', 'Estado'];
    const rows: string[][] = [];

    comparisons.forEach(({ esPage, enPage }) => {
      rows.push([`--- ${esPage.path} ---`, '', '', '']);
      rows.push(['Path ES', esPage.path, enPage?.path || 'No traducido', enPage ? 'Traducido' : 'Pendiente']);
      rows.push(['Title', esPage.title, enPage?.title || '', enPage ? 'Traducido' : 'Pendiente']);
      rows.push(['Description', esPage.description, enPage?.description || '', enPage ? 'Traducido' : 'Pendiente']);
      rows.push(['H1', esPage.h1, enPage?.h1 || '', enPage ? 'Traducido' : 'Pendiente']);
      rows.push(['']);
    });

    const csv = [headers, ...rows].map(row => row.map(cell => `"${cell}"`).join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `comparacion-seo-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
  };

  const exportToJSON = () => {
    const json = JSON.stringify(comparisons, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `comparacion-seo-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
  };

  const getDiffClass = (esValue: string, enValue?: string) => {
    if (!enValue) return 'bg-muted/50 text-muted-foreground';
    if (esValue === enValue) return 'bg-yellow-500/10 text-yellow-700'; // Same = warning
    return 'bg-green-500/10 text-green-700'; // Different = translated
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-hidden flex flex-col">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <GitCompare className="w-5 h-5 text-primary" />
            Comparación ES vs EN
          </DialogTitle>
          <DialogDescription>
            Comparación lado a lado de metadatos SEO en español e inglés
          </DialogDescription>
        </DialogHeader>

        <div className="flex gap-2 pb-4 border-b">
          <Button onClick={exportToCSV} variant="outline" size="sm">
            <Download className="w-4 h-4 mr-2" />
            Exportar CSV
          </Button>
          <Button onClick={exportToJSON} variant="outline" size="sm">
            <Download className="w-4 h-4 mr-2" />
            Exportar JSON
          </Button>
        </div>

        <ScrollArea className="flex-1 pr-4">
          {isLoading ? (
            <div className="text-center py-8 text-muted-foreground">Cargando comparaciones...</div>
          ) : comparisons.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">No hay páginas para comparar</div>
          ) : (
            <div className="space-y-6">
              {comparisons.map(({ esPage, enPage }) => (
                <Card key={esPage.id} className="p-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Badge variant={enPage ? 'default' : 'secondary'}>
                        {enPage ? '✓ Traducido' : '○ Pendiente'}
                      </Badge>
                      <span className="text-sm font-medium">{esPage.path}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {/* Title */}
                    <div>
                      <p className="text-xs text-muted-foreground mb-2">🇪🇸 Title ES</p>
                      <div className="p-3 rounded bg-muted/30 text-sm">{esPage.title}</div>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-2">🇬🇧 Title EN</p>
                      <div className={`p-3 rounded text-sm ${getDiffClass(esPage.title, enPage?.title)}`}>
                        {enPage?.title || 'No traducido'}
                      </div>
                    </div>

                    {/* Description */}
                    <div>
                      <p className="text-xs text-muted-foreground mb-2">🇪🇸 Description ES</p>
                      <div className="p-3 rounded bg-muted/30 text-sm line-clamp-3">{esPage.description}</div>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-2">🇬🇧 Description EN</p>
                      <div className={`p-3 rounded text-sm line-clamp-3 ${getDiffClass(esPage.description, enPage?.description)}`}>
                        {enPage?.description || 'No traducido'}
                      </div>
                    </div>

                    {/* H1 */}
                    <div>
                      <p className="text-xs text-muted-foreground mb-2">🇪🇸 H1 ES</p>
                      <div className="p-3 rounded bg-muted/30 text-sm">{esPage.h1}</div>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-2">🇬🇧 H1 EN</p>
                      <div className={`p-3 rounded text-sm ${getDiffClass(esPage.h1, enPage?.h1)}`}>
                        {enPage?.h1 || 'No traducido'}
                      </div>
                    </div>

                    {/* Keywords */}
                    <div>
                      <p className="text-xs text-muted-foreground mb-2">🇪🇸 Keywords ES</p>
                      <div className="p-3 rounded bg-muted/30 text-sm">
                        {Array.isArray(esPage.keywords) ? (esPage.keywords as string[]).join(', ') : 'N/A'}
                      </div>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-2">🇬🇧 Keywords EN</p>
                      <div className={`p-3 rounded text-sm ${getDiffClass(
                        Array.isArray(esPage.keywords) ? (esPage.keywords as string[]).join(', ') : '',
                        enPage?.keywords ? (enPage.keywords as string[]).join(', ') : ''
                      )}`}>
                        {enPage?.keywords ? (enPage.keywords as string[]).join(', ') : 'No traducido'}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </ScrollArea>

        <div className="pt-4 border-t">
          <Button onClick={onClose} variant="outline" className="w-full">
            <X className="w-4 h-4 mr-2" />
            Cerrar
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
