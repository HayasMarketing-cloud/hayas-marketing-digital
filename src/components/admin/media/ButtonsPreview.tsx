import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Mail, Download, ExternalLink, Check, Plus, Trash2, Edit } from 'lucide-react';

interface ButtonsPreviewProps {
  searchTerm: string;
}

export const ButtonsPreview: React.FC<ButtonsPreviewProps> = ({ searchTerm }) => {
  const buttonCategories = [
    {
      title: 'Botones Primarios (CTA)',
      description: 'Acciones principales y llamadas a la acción',
      buttons: [
        { label: 'Comenzar ahora', variant: 'default' as const, icon: ArrowRight },
        { label: 'Descargar', variant: 'default' as const, icon: Download },
        { label: 'Contactar', variant: 'default' as const, icon: Mail },
        { label: 'Ver más', variant: 'default' as const, icon: ExternalLink },
      ]
    },
    {
      title: 'Botones Secundarios',
      description: 'Acciones secundarias y alternativas',
      buttons: [
        { label: 'Más información', variant: 'secondary' as const },
        { label: 'Cancelar', variant: 'secondary' as const },
        { label: 'Volver', variant: 'secondary' as const },
        { label: 'Cerrar', variant: 'secondary' as const },
      ]
    },
    {
      title: 'Botones Outline',
      description: 'Estilo con borde, ideal para acciones menos prominentes',
      buttons: [
        { label: 'Leer más', variant: 'outline' as const, icon: ArrowRight },
        { label: 'Compartir', variant: 'outline' as const },
        { label: 'Guardar', variant: 'outline' as const },
        { label: 'Editar', variant: 'outline' as const, icon: Edit },
      ]
    },
    {
      title: 'Botones Ghost',
      description: 'Estilo minimalista y discreto',
      buttons: [
        { label: 'Ver detalles', variant: 'ghost' as const },
        { label: 'Cerrar', variant: 'ghost' as const },
        { label: 'Minimizar', variant: 'ghost' as const },
        { label: 'Ajustes', variant: 'ghost' as const },
      ]
    },
    {
      title: 'Botones Destructivos',
      description: 'Para acciones críticas o de eliminación',
      buttons: [
        { label: 'Eliminar', variant: 'destructive' as const, icon: Trash2 },
        { label: 'Borrar todo', variant: 'destructive' as const },
        { label: 'Rechazar', variant: 'destructive' as const },
        { label: 'Desactivar', variant: 'destructive' as const },
      ]
    },
    {
      title: 'Tamaños de Botones',
      description: 'Diferentes tamaños para diferentes contextos',
      buttons: [
        { label: 'Pequeño', variant: 'default' as const, size: 'sm' as const },
        { label: 'Normal', variant: 'default' as const, size: 'default' as const },
        { label: 'Grande', variant: 'default' as const, size: 'lg' as const },
      ]
    },
    {
      title: 'Botones con Iconos',
      description: 'Combinaciones de texto e iconos',
      buttons: [
        { label: 'Confirmar', variant: 'default' as const, icon: Check },
        { label: 'Añadir nuevo', variant: 'default' as const, icon: Plus },
        { label: 'Abrir enlace', variant: 'outline' as const, icon: ExternalLink },
        { label: 'Enviar email', variant: 'outline' as const, icon: Mail },
      ]
    },
  ];

  const filteredCategories = buttonCategories.filter(cat => 
    cat.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cat.buttons.some(btn => btn.label.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="space-y-6">
      {filteredCategories.map((category, idx) => (
        <Card key={idx}>
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle>{category.title}</CardTitle>
                <CardDescription>{category.description}</CardDescription>
              </div>
              <Badge variant="secondary">{category.buttons.length} variantes</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4">
              {category.buttons.map((btn, btnIdx) => {
                const Icon = btn.icon;
                return (
                  <div key={btnIdx} className="flex flex-col items-center gap-2">
                    <Button 
                      variant={btn.variant} 
                      size={btn.size || 'default'}
                      className="min-w-[140px]"
                    >
                      {btn.label}
                      {Icon && <Icon className="ml-2 h-4 w-4" />}
                    </Button>
                    <code className="text-xs text-muted-foreground">
                      {btn.variant} {btn.size ? `/ ${btn.size}` : ''}
                    </code>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      ))}

      {filteredCategories.length === 0 && (
        <Card>
          <CardContent className="py-12 text-center text-muted-foreground">
            No se encontraron botones con el término "{searchTerm}"
          </CardContent>
        </Card>
      )}
    </div>
  );
};
