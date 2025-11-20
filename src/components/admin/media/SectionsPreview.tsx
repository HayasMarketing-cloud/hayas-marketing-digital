import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Star, TrendingUp } from 'lucide-react';

interface SectionsPreviewProps {
  searchTerm: string;
}

export const SectionsPreview: React.FC<SectionsPreviewProps> = ({ searchTerm }) => {
  const sections = [
    {
      title: 'Hero Section',
      description: 'Sección principal de bienvenida',
      component: (
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-primary/20 via-primary/10 to-background p-12 text-center">
          <div className="relative z-10">
            <Badge className="mb-4">Nuevo</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Transforma tu negocio con IA
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Soluciones de marketing digital que combinan estrategia, tecnología y creatividad
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg">Comenzar ahora</Button>
              <Button size="lg" variant="outline">Más información</Button>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Features Grid',
      description: 'Grid de características o servicios',
      component: (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: CheckCircle2, title: 'Resultados garantizados', desc: 'Medimos y optimizamos constantemente' },
            { icon: Star, title: 'Equipo experto', desc: 'Profesionales certificados en marketing digital' },
            { icon: TrendingUp, title: 'Crecimiento real', desc: 'Incrementa tus ventas y visibilidad' },
          ].map((feature, idx) => (
            <div key={idx} className="p-6 border rounded-lg hover:shadow-md transition-shadow">
              <feature.icon className="h-10 w-10 text-primary mb-4" />
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.desc}</p>
            </div>
          ))}
        </div>
      )
    },
    {
      title: 'CTA Section',
      description: 'Sección de llamada a la acción',
      component: (
        <div className="bg-primary text-primary-foreground rounded-xl p-10 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Listo para impulsar tu negocio?</h2>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
            Agenda una consultoría gratuita y descubre cómo podemos ayudarte a alcanzar tus objetivos
          </p>
          <Button size="lg" variant="secondary">
            Contactar ahora
          </Button>
        </div>
      )
    },
    {
      title: 'Stats Section',
      description: 'Sección de estadísticas o logros',
      component: (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: '500+', label: 'Clientes satisfechos' },
            { value: '95%', label: 'Tasa de éxito' },
            { value: '10+', label: 'Años de experiencia' },
            { value: '24/7', label: 'Soporte continuo' },
          ].map((stat, idx) => (
            <div key={idx} className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      )
    },
    {
      title: 'Testimonial',
      description: 'Testimonio de cliente',
      component: (
        <div className="bg-accent rounded-xl p-8 max-w-2xl mx-auto">
          <div className="flex gap-1 mb-4">
            {[1, 2, 3, 4, 5].map(i => (
              <Star key={i} className="h-5 w-5 fill-primary text-primary" />
            ))}
          </div>
          <p className="text-lg mb-6 italic">
            "El equipo de Hayas Marketing transformó completamente nuestra estrategia digital. 
            Los resultados superaron nuestras expectativas en solo 3 meses."
          </p>
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-primary/20" />
            <div>
              <p className="font-semibold">María González</p>
              <p className="text-sm text-muted-foreground">CEO, TechStartup</p>
            </div>
          </div>
        </div>
      )
    },
  ];

  const filteredSections = sections.filter(section =>
    section.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    section.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {filteredSections.map((section, idx) => (
        <Card key={idx}>
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle>{section.title}</CardTitle>
                <CardDescription>{section.description}</CardDescription>
              </div>
              <Badge variant="secondary">Section</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="border rounded-lg p-4 bg-background">
              {section.component}
            </div>
          </CardContent>
        </Card>
      ))}

      {filteredSections.length === 0 && (
        <Card>
          <CardContent className="py-12 text-center text-muted-foreground">
            No se encontraron secciones con el término "{searchTerm}"
          </CardContent>
        </Card>
      )}
    </div>
  );
};
