import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Settings, Target, TrendingUp, Users, FileText } from 'lucide-react';

export const StrategyTab: React.FC = () => {
  const strategies = [
    {
      type: 'seo_clasico',
      title: 'SEO Clásico',
      description: 'Optimización tradicional para buscadores como Google y Bing',
      icon: Target,
      color: 'bg-primary/10 text-primary',
      tips: [
        'Enfócate en keywords de cola larga',
        'Optimiza meta títulos y descripciones',
        'Construye backlinks de calidad'
      ]
    },
    {
      type: 'aeo',
      title: 'AEO (Answer Engine Optimization)',
      description: 'Optimización para featured snippets y respuestas directas',
      icon: FileText,
      color: 'bg-blue-500/10 text-blue-600',
      tips: [
        'Estructura contenido en formato pregunta-respuesta',
        'Usa listas y tablas estructuradas',
        'Responde preguntas de forma concisa al inicio'
      ]
    },
    {
      type: 'geo',
      title: 'GEO (Generative Engine Optimization)',
      description: 'Optimización para plataformas de IA generativa',
      icon: TrendingUp,
      color: 'bg-purple-500/10 text-purple-600',
      tips: [
        'Incluye datos verificables y fuentes',
        'Estructura información de forma clara',
        'Usa Schema markup rico (FAQPage, HowTo)'
      ]
    },
    {
      type: 'hibrido',
      title: 'Estrategia Híbrida',
      description: 'Combinación de SEO clásico, AEO y GEO',
      icon: Users,
      color: 'bg-orange-500/10 text-orange-600',
      tips: [
        'Balancea optimización para todos los canales',
        'Prioriza según el tipo de contenido',
        'Mide rendimiento en cada plataforma'
      ]
    }
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="h-5 w-5" />
            Estrategias de Posicionamiento
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {strategies.map(strategy => (
              <div 
                key={strategy.type}
                className="border rounded-lg p-4 hover:bg-muted/20 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <div className={`p-2 rounded-lg ${strategy.color}`}>
                    <strategy.icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">{strategy.title}</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      {strategy.description}
                    </p>
                    <div className="mt-3 space-y-1">
                      {strategy.tips.map((tip, i) => (
                        <p key={i} className="text-xs text-muted-foreground flex items-start gap-1">
                          <span className="text-primary">•</span>
                          {tip}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Configuración de Tracking</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8 text-muted-foreground">
            <Settings className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p>Configura las APIs de tracking para monitorizar posiciones</p>
            <Button variant="outline" className="mt-4">
              Configurar APIs
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
