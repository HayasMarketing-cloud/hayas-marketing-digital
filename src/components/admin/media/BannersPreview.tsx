import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Sparkles, TrendingUp, Zap, Target } from 'lucide-react';

interface BannersPreviewProps {
  searchTerm: string;
}

export const BannersPreview: React.FC<BannersPreviewProps> = ({ searchTerm }) => {
  const banners = [
    {
      title: 'Banner Hero Principal',
      description: 'Banner de bienvenida con gradiente',
      component: (
        <div className="bg-gradient-to-r from-primary to-primary/60 text-primary-foreground rounded-lg p-8 text-center">
          <Sparkles className="h-12 w-12 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">Impulsa tu negocio con IA</h2>
          <p className="text-lg mb-6 opacity-90">Soluciones de marketing digital que generan resultados reales</p>
          <Button size="lg" variant="secondary">Comenzar ahora</Button>
        </div>
      )
    },
    {
      title: 'Banner Informativo',
      description: 'Notificación o aviso importante',
      component: (
        <div className="bg-blue-500/10 border border-blue-500/20 text-foreground rounded-lg p-6 flex items-center gap-4">
          <TrendingUp className="h-8 w-8 text-blue-600" />
          <div className="flex-1">
            <h3 className="font-semibold mb-1">Nueva funcionalidad disponible</h3>
            <p className="text-sm text-muted-foreground">Ahora puedes gestionar tus campañas desde un único dashboard</p>
          </div>
          <Button size="sm" variant="outline">Ver más</Button>
        </div>
      )
    },
    {
      title: 'Banner de Acción Rápida',
      description: 'CTA compacto con icono',
      component: (
        <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-lg p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Zap className="h-10 w-10 text-orange-600" />
            <div>
              <h3 className="font-bold text-lg">¿Listo para crecer?</h3>
              <p className="text-sm text-muted-foreground">Agenda una consultoría gratuita</p>
            </div>
          </div>
          <Button variant="default">Contactar</Button>
        </div>
      )
    },
    {
      title: 'Banner de Éxito',
      description: 'Mensaje de confirmación o logro',
      component: (
        <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-6 flex items-center gap-4">
          <div className="h-12 w-12 rounded-full bg-green-500/20 flex items-center justify-center">
            <Target className="h-6 w-6 text-green-600" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-green-900 dark:text-green-100">Campaña activada con éxito</h3>
            <p className="text-sm text-muted-foreground">Tu campaña está ahora en marcha y generando resultados</p>
          </div>
        </div>
      )
    },
    {
      title: 'Banner Minimalista',
      description: 'Diseño limpio y elegante',
      component: (
        <div className="border-l-4 border-primary bg-accent rounded-r-lg p-6">
          <h3 className="font-bold mb-2">Optimiza tu estrategia digital</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Descubre cómo la IA puede transformar tu negocio en solo 30 días
          </p>
          <Button variant="link" className="p-0">Saber más →</Button>
        </div>
      )
    },
  ];

  const filteredBanners = banners.filter(banner =>
    banner.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    banner.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {filteredBanners.map((banner, idx) => (
        <Card key={idx}>
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle>{banner.title}</CardTitle>
                <CardDescription>{banner.description}</CardDescription>
              </div>
              <Badge variant="secondary">Preview</Badge>
            </div>
          </CardHeader>
          <CardContent>
            {banner.component}
          </CardContent>
        </Card>
      ))}

      {filteredBanners.length === 0 && (
        <Card>
          <CardContent className="py-12 text-center text-muted-foreground">
            No se encontraron banners con el término "{searchTerm}"
          </CardContent>
        </Card>
      )}
    </div>
  );
};
