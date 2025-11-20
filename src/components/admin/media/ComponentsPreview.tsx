import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { Switch } from '@/components/ui/switch';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircle, CheckCircle2, Info } from 'lucide-react';

interface ComponentsPreviewProps {
  searchTerm: string;
}

export const ComponentsPreview: React.FC<ComponentsPreviewProps> = ({ searchTerm }) => {
  const components = [
    {
      title: 'Badges',
      description: 'Etiquetas y distintivos',
      component: (
        <div className="flex flex-wrap gap-2">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge className="bg-green-500/10 text-green-600">Success</Badge>
          <Badge className="bg-blue-500/10 text-blue-600">Info</Badge>
        </div>
      )
    },
    {
      title: 'Inputs & Forms',
      description: 'Campos de entrada y formularios',
      component: (
        <div className="space-y-4 max-w-md">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="tu@email.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="name">Nombre</Label>
            <Input id="name" placeholder="Juan Pérez" />
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <Label htmlFor="terms">Acepto los términos y condiciones</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch id="notifications" />
            <Label htmlFor="notifications">Recibir notificaciones</Label>
          </div>
        </div>
      )
    },
    {
      title: 'Avatars',
      description: 'Imágenes de perfil y avatares',
      component: (
        <div className="flex gap-4 items-center">
          <Avatar className="h-20 w-20">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar className="h-16 w-16">
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <Avatar className="h-12 w-12">
            <AvatarFallback>MP</AvatarFallback>
          </Avatar>
          <Avatar className="h-10 w-10">
            <AvatarFallback>AB</AvatarFallback>
          </Avatar>
        </div>
      )
    },
    {
      title: 'Progress Bars',
      description: 'Barras de progreso',
      component: (
        <div className="space-y-4 max-w-md">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Progreso del proyecto</span>
              <span className="text-muted-foreground">75%</span>
            </div>
            <Progress value={75} />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Optimización SEO</span>
              <span className="text-muted-foreground">40%</span>
            </div>
            <Progress value={40} />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Completado</span>
              <span className="text-muted-foreground">100%</span>
            </div>
            <Progress value={100} />
          </div>
        </div>
      )
    },
    {
      title: 'Alerts',
      description: 'Notificaciones y alertas',
      component: (
        <div className="space-y-4">
          <Alert>
            <Info className="h-4 w-4" />
            <AlertTitle>Información</AlertTitle>
            <AlertDescription>
              Esta es una alerta informativa con detalles importantes.
            </AlertDescription>
          </Alert>
          <Alert className="border-green-500/50 bg-green-500/10">
            <CheckCircle2 className="h-4 w-4 text-green-600" />
            <AlertTitle className="text-green-900 dark:text-green-100">Éxito</AlertTitle>
            <AlertDescription className="text-green-800 dark:text-green-200">
              Tu operación se completó correctamente.
            </AlertDescription>
          </Alert>
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              Ha ocurrido un error. Por favor, inténtalo de nuevo.
            </AlertDescription>
          </Alert>
        </div>
      )
    },
    {
      title: 'Cards',
      description: 'Tarjetas de contenido',
      component: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Título de Tarjeta</CardTitle>
              <CardDescription>Descripción breve de la tarjeta</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Contenido de ejemplo dentro de una tarjeta.
              </p>
            </CardContent>
          </Card>
          <Card className="border-primary/50">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Destacada</CardTitle>
                <Badge>Nuevo</Badge>
              </div>
              <CardDescription>Tarjeta con borde de color</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full">Ver detalles</Button>
            </CardContent>
          </Card>
        </div>
      )
    },
    {
      title: 'Separators',
      description: 'Líneas divisorias',
      component: (
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-medium">Sección 1</h4>
            <p className="text-sm text-muted-foreground">Contenido de la primera sección</p>
          </div>
          <Separator />
          <div>
            <h4 className="text-sm font-medium">Sección 2</h4>
            <p className="text-sm text-muted-foreground">Contenido de la segunda sección</p>
          </div>
          <Separator />
          <div>
            <h4 className="text-sm font-medium">Sección 3</h4>
            <p className="text-sm text-muted-foreground">Contenido de la tercera sección</p>
          </div>
        </div>
      )
    },
  ];

  const filteredComponents = components.filter(comp =>
    comp.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    comp.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {filteredComponents.map((comp, idx) => (
        <Card key={idx}>
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle>{comp.title}</CardTitle>
                <CardDescription>{comp.description}</CardDescription>
              </div>
              <Badge variant="secondary">UI Component</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="p-6 border rounded-lg bg-accent/50">
              {comp.component}
            </div>
          </CardContent>
        </Card>
      ))}

      {filteredComponents.length === 0 && (
        <Card>
          <CardContent className="py-12 text-center text-muted-foreground">
            No se encontraron componentes con el término "{searchTerm}"
          </CardContent>
        </Card>
      )}
    </div>
  );
};
