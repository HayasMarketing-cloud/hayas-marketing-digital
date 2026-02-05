import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Users, Plus, MoreHorizontal } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useContentAudiences } from '@/hooks/useContentHub';
import { Skeleton } from '@/components/ui/skeleton';

export const AudiencesSection: React.FC = () => {
  const { data: audiences, isLoading } = useContentAudiences();

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <Skeleton className="h-8 w-48" />
        </CardHeader>
        <CardContent className="space-y-4">
          {[1, 2, 3].map(i => (
            <Skeleton key={i} className="h-20 w-full" />
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
            <Users className="h-5 w-5" />
            Audiencias ({audiences?.length || 0})
          </CardTitle>
          <Button size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Nueva Audiencia
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        {audiences && audiences.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-4">
            {audiences.map(audience => (
              <div 
                key={audience.id}
                className="border rounded-lg p-4 hover:bg-muted/20 transition-colors"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-medium">{audience.name}</h4>
                    {audience.description && (
                      <p className="text-sm text-muted-foreground mt-1">
                        {audience.description}
                      </p>
                    )}
                    <div className="flex items-center gap-2 mt-2">
                      <Badge variant={audience.is_active ? 'default' : 'secondary'}>
                        {audience.is_active ? 'Activa' : 'Inactiva'}
                      </Badge>
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
                      <DropdownMenuItem>Ver keywords</DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">
                        Eliminar
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 text-muted-foreground">
            <Users className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p>No hay audiencias configuradas</p>
            <Button variant="link" className="mt-2">
              Crear primera audiencia
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
