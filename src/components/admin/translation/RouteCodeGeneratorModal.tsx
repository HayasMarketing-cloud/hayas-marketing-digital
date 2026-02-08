import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Copy, Check, Code, FileCode } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface RouteCodeData {
  enPath: string;
  esPath: string;
  category: string;
  componentName: string;
}

interface RouteCodeGeneratorModalProps {
  isOpen: boolean;
  onClose: () => void;
  codeData: RouteCodeData | null;
}

const PRIORITY_MAP: Record<string, number> = {
  main: 0.9,
  solution: 0.8,
  service: 0.7,
  blog: 0.7,
  'case-study': 0.6,
  tool: 0.6,
  'kit-digital': 0.6,
  legal: 0.4,
  comparison: 0.7,
  author: 0.6,
};

const CHANGEFREQ_MAP: Record<string, string> = {
  main: 'weekly',
  solution: 'weekly',
  service: 'monthly',
  blog: 'monthly',
  'case-study': 'yearly',
  tool: 'monthly',
  'kit-digital': 'monthly',
  legal: 'yearly',
  comparison: 'monthly',
  author: 'monthly',
};

export const RouteCodeGeneratorModal: React.FC<RouteCodeGeneratorModalProps> = ({
  isOpen,
  onClose,
  codeData,
}) => {
  const { toast } = useToast();
  const [copiedSection, setCopiedSection] = useState<'app' | 'registry' | null>(null);

  if (!codeData) return null;

  const priority = PRIORITY_MAP[codeData.category] || 0.5;
  const changefreq = CHANGEFREQ_MAP[codeData.category] || 'monthly';

  const appTsxCode = `<Route path="${codeData.enPath}" element={<PageSuspense><Pages.${codeData.componentName} /></PageSuspense>} />`;
  
  const registryCode = `{ path: '${codeData.enPath}', category: '${codeData.category}', isIndexable: true, priority: ${priority}, changefreq: '${changefreq}', isDynamic: false, isLegacy: false },`;

  const handleCopy = async (code: string, section: 'app' | 'registry') => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedSection(section);
      toast({
        title: '📋 Código copiado',
        description: section === 'app' ? 'Snippet de App.tsx' : 'Snippet de routeRegistryData.ts',
      });
      setTimeout(() => setCopiedSection(null), 2000);
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Error al copiar',
        description: 'No se pudo copiar al portapapeles',
      });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Code className="h-5 w-5" />
            Código para añadir la ruta
          </DialogTitle>
          <DialogDescription>
            La página se tradujo correctamente. Añade esta ruta a los siguientes archivos:
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Info de la ruta */}
          <div className="flex items-center gap-2 flex-wrap">
            <Badge variant="outline" className="font-mono text-xs">
              {codeData.enPath}
            </Badge>
            <Badge className="bg-primary/10 text-primary">
              {codeData.category}
            </Badge>
          </div>

          {/* App.tsx snippet */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-medium flex items-center gap-2">
                <FileCode className="h-4 w-4" />
                App.tsx
              </h4>
              <Button
                size="sm"
                variant="outline"
                onClick={() => handleCopy(appTsxCode, 'app')}
                className="h-7"
              >
                {copiedSection === 'app' ? (
                  <>
                    <Check className="h-3 w-3 mr-1" />
                    Copiado
                  </>
                ) : (
                  <>
                    <Copy className="h-3 w-3 mr-1" />
                    Copiar
                  </>
                )}
              </Button>
            </div>
            <pre className="bg-muted p-3 rounded-md text-xs font-mono overflow-x-auto whitespace-pre-wrap break-all">
              {appTsxCode}
            </pre>
          </div>

          {/* routeRegistryData.ts snippet */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-medium flex items-center gap-2">
                <FileCode className="h-4 w-4" />
                routeRegistryData.ts
              </h4>
              <Button
                size="sm"
                variant="outline"
                onClick={() => handleCopy(registryCode, 'registry')}
                className="h-7"
              >
                {copiedSection === 'registry' ? (
                  <>
                    <Check className="h-3 w-3 mr-1" />
                    Copiado
                  </>
                ) : (
                  <>
                    <Copy className="h-3 w-3 mr-1" />
                    Copiar
                  </>
                )}
              </Button>
            </div>
            <pre className="bg-muted p-3 rounded-md text-xs font-mono overflow-x-auto whitespace-pre-wrap break-all">
              {registryCode}
            </pre>
          </div>

          {/* Hint */}
          <div className="text-xs text-muted-foreground bg-muted/50 p-3 rounded-md">
            💡 <strong>Ubicación sugerida:</strong> Busca la sección de rutas EN correspondiente 
            (ej. <code>// ENGLISH ROUTES</code> en routeRegistryData.ts) y añade el snippet 
            junto a rutas similares de la misma categoría.
          </div>
        </div>

        <DialogFooter>
          <Button onClick={onClose}>
            <Check className="h-4 w-4 mr-2" />
            Entendido
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
