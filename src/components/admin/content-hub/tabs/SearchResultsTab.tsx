import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, Globe, Bot } from 'lucide-react';

export const SearchResultsTab: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Search className="h-5 w-5" />
          Resultados de Búsqueda
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Google/Bing Results */}
          <div className="space-y-4">
            <h3 className="font-semibold flex items-center gap-2">
              <Globe className="h-4 w-4" />
              Buscadores Tradicionales
            </h3>
            <div className="text-center py-8 text-muted-foreground border rounded-lg">
              <Search className="h-8 w-8 mx-auto mb-2 opacity-50" />
              <p>Selecciona una keyword para ver resultados</p>
            </div>
          </div>

          {/* AI Results */}
          <div className="space-y-4">
            <h3 className="font-semibold flex items-center gap-2">
              <Bot className="h-4 w-4" />
              Plataformas de IA
            </h3>
            <div className="text-center py-8 text-muted-foreground border rounded-lg">
              <Bot className="h-8 w-8 mx-auto mb-2 opacity-50" />
              <p>Menciones en Perplexity, ChatGPT, etc.</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
