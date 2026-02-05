import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BarChart3, TrendingUp, MousePointer, Eye, ExternalLink } from 'lucide-react';

export const SearchConsoleTab: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5" />
            Search Console
          </CardTitle>
          <Button variant="outline" size="sm">
            <ExternalLink className="h-4 w-4 mr-2" />
            Ver en GSC
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        {/* Quick Stats */}
        <div className="grid sm:grid-cols-4 gap-4 mb-6">
          <div className="bg-muted/50 rounded-lg p-4">
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <MousePointer className="h-4 w-4" />
              Clics
            </div>
            <p className="text-2xl font-bold mt-1">-</p>
          </div>
          <div className="bg-muted/50 rounded-lg p-4">
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <Eye className="h-4 w-4" />
              Impresiones
            </div>
            <p className="text-2xl font-bold mt-1">-</p>
          </div>
          <div className="bg-muted/50 rounded-lg p-4">
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <TrendingUp className="h-4 w-4" />
              CTR
            </div>
            <p className="text-2xl font-bold mt-1">-</p>
          </div>
          <div className="bg-muted/50 rounded-lg p-4">
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <BarChart3 className="h-4 w-4" />
              Posición media
            </div>
            <p className="text-2xl font-bold mt-1">-</p>
          </div>
        </div>

        <div className="text-center py-8 text-muted-foreground border rounded-lg">
          <BarChart3 className="h-12 w-12 mx-auto mb-4 opacity-50" />
          <p className="mb-2">Los datos de Search Console se cargarán aquí</p>
          <p className="text-sm">Conectado via Service Account</p>
        </div>
      </CardContent>
    </Card>
  );
};
