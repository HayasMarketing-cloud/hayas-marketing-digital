import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Copy, Check } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ColorCardProps {
  name: string;
  hex: string;
  tailwindClass: string;
  usage: string;
  colorFamily?: string;
}

export const ColorCard: React.FC<ColorCardProps> = ({
  name,
  hex,
  tailwindClass,
  usage,
  colorFamily
}) => {
  const { toast } = useToast();
  const [copied, setCopied] = React.useState(false);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    toast({
      title: "Copiado al portapapeles",
      description: `${text} copiado correctamente`,
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div 
        className="h-32 w-full"
        style={{ backgroundColor: hex }}
      />
      <CardContent className="p-4">
        <h4 className="font-bold text-lg mb-2">{name}</h4>
        
        <div className="space-y-2 mb-3">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex items-center justify-between bg-muted p-2 rounded cursor-pointer hover:bg-muted/80" onClick={() => handleCopy(hex)}>
                  <code className="text-sm font-mono">{hex}</code>
                  {copied ? (
                    <Check className="h-4 w-4 text-green-600" />
                  ) : (
                    <Copy className="h-4 w-4 text-muted-foreground" />
                  )}
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Click para copiar código hexadecimal</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="bg-muted p-2 rounded">
                  <code className="text-xs font-mono text-muted-foreground">{tailwindClass}</code>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Clase de Tailwind CSS</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        <p className="text-sm text-muted-foreground">
          <strong>Uso:</strong> {usage}
        </p>
      </CardContent>
    </Card>
  );
};
