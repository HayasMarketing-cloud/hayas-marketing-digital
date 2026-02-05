import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FileText, Plus, MoreHorizontal, Globe, Rss, Link2 } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useContentSources } from '@/hooks/useContentHub';
import { Skeleton } from '@/components/ui/skeleton';

const sourceTypeIcons: Record<string, React.ElementType> = {
  website: Globe,
  rss: Rss,
  api: Link2,
  social: Globe,
  manual: FileText,
};

export const SourcesSection: React.FC = () => {
  const { data: sources, isLoading } = useContentSources();

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <Skeleton className="h-8 w-48" />
        </CardHeader>
        <CardContent className="space-y-4">
          {[1, 2, 3].map(i => (
            <Skeleton key={i} className="h-16 w-full" />
          ))}
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            Fuentes de Contenido ({sources?.length || 0})
          </CardTitle>
          <Button size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Nueva Fuente
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        {sources && sources.length > 0 ? (
          <div className="space-y-2">
            {sources.map(source => {
              const SourceIcon = sourceTypeIcons[source.source_type] || FileText;
              return (
                <div 
                  key={source.id}
                  className="flex items-center justify-between border rounded-lg p-3 hover:bg-muted/20 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-muted rounded-lg">
                      <SourceIcon className="h-4 w-4" />
                    </div>
                    <div>
                      <span className="font-medium">{source.name}</span>
                      {source.url && (
                        <p className="text-muted-foreground text-xs truncate max-w-[300px]">
                          {source.url}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">
                      {source.reliability_score}% confiable
                    </Badge>
                    <Badge variant={source.is_active ? 'default' : 'secondary'}>
                      {source.is_active ? 'Activa' : 'Inactiva'}
                    </Badge>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Editar</DropdownMenuItem>
                        <DropdownMenuItem>Verificar ahora</DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive">
                          Eliminar
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-12 text-muted-foreground">
            <FileText className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p>No hay fuentes configuradas</p>
            <Button variant="link" className="mt-2">
              Añadir primera fuente
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
