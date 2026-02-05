import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Lightbulb, 
  Plus, 
  FileText, 
  Video, 
  Share2,
  MoreHorizontal
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useContentIdeas } from '@/hooks/useContentHub';
import { Skeleton } from '@/components/ui/skeleton';

const statusConfig: Record<string, { label: string; color: string }> = {
  idea: { label: 'Idea', color: 'bg-gray-100 text-gray-700' },
  planned: { label: 'Planificado', color: 'bg-blue-100 text-blue-700' },
  in_progress: { label: 'En progreso', color: 'bg-yellow-100 text-yellow-700' },
  published: { label: 'Publicado', color: 'bg-green-100 text-green-700' },
  archived: { label: 'Archivado', color: 'bg-gray-200 text-gray-500' },
};

const priorityConfig: Record<string, { label: string; color: string }> = {
  low: { label: 'Baja', color: 'text-gray-500' },
  medium: { label: 'Media', color: 'text-yellow-600' },
  high: { label: 'Alta', color: 'text-orange-600' },
  urgent: { label: 'Urgente', color: 'text-red-600' },
};

const contentTypeIcons: Record<string, React.ElementType> = {
  blog: FileText,
  landing: FileText,
  guide: FileText,
  video: Video,
  social: Share2,
};

export const ContentIdeasTab: React.FC = () => {
  const { data: ideas, isLoading } = useContentIdeas();
  const [filter, setFilter] = useState<string>('all');

  const filteredIdeas = filter === 'all' 
    ? ideas 
    : ideas?.filter(i => i.status === filter);

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <Skeleton className="h-8 w-48" />
        </CardHeader>
        <CardContent className="space-y-4">
          {[1, 2, 3].map(i => (
            <Skeleton key={i} className="h-24 w-full" />
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
            <Lightbulb className="h-5 w-5" />
            Ideas de Contenido ({filteredIdeas?.length || 0})
          </CardTitle>
          <Button size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Nueva Idea
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Status filters */}
        <div className="flex gap-2 flex-wrap">
          <Button 
            variant={filter === 'all' ? 'default' : 'outline'} 
            size="sm"
            onClick={() => setFilter('all')}
          >
            Todas
          </Button>
          {Object.entries(statusConfig).map(([key, { label }]) => (
            <Button
              key={key}
              variant={filter === key ? 'default' : 'outline'}
              size="sm"
              onClick={() => setFilter(key)}
            >
              {label}
            </Button>
          ))}
        </div>

        {/* Ideas list */}
        <div className="space-y-3">
          {filteredIdeas?.map(idea => {
            const status = statusConfig[idea.status] || statusConfig.idea;
            const priority = priorityConfig[idea.priority] || priorityConfig.medium;
            const ContentIcon = contentTypeIcons[idea.content_type] || FileText;

            return (
              <div 
                key={idea.id} 
                className="border rounded-lg p-4 hover:bg-muted/20 transition-colors"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-muted rounded-lg">
                      <ContentIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium">{idea.title}</h4>
                      {idea.description && (
                        <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                          {idea.description}
                        </p>
                      )}
                      <div className="flex items-center gap-2 mt-2">
                        <Badge className={status.color}>{status.label}</Badge>
                        <span className={`text-xs font-medium ${priority.color}`}>
                          Prioridad {priority.label}
                        </span>
                        {idea.estimated_traffic && (
                          <span className="text-xs text-muted-foreground">
                            ~{idea.estimated_traffic.toLocaleString()} visitas/mes
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Editar</DropdownMenuItem>
                      <DropdownMenuItem>Generar briefing</DropdownMenuItem>
                      <DropdownMenuItem>Cambiar estado</DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">
                        Eliminar
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            );
          })}

          {(!filteredIdeas || filteredIdeas.length === 0) && (
            <div className="text-center py-12 text-muted-foreground">
              <Lightbulb className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>No hay ideas de contenido</p>
              <Button variant="link" className="mt-2">
                Crear primera idea
              </Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
