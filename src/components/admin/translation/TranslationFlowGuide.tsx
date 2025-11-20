import React from 'react';
import { Card } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

export const TranslationFlowGuide: React.FC = () => {
  const steps = [
    { number: 1, label: 'Preparar', color: 'bg-blue-500', description: 'Añadir datos SEO básicos' },
    { number: 2, label: 'Traducir', color: 'bg-green-500', description: 'Crear versión en inglés' },
    { number: 3, label: 'Optimizar', color: 'bg-yellow-500', description: 'Revisar SEO completo' },
    { number: 4, label: 'Publicar', color: 'bg-emerald-500', description: 'Página lista y visible' },
  ];

  return (
    <Card className="p-6 bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <h3 className="text-lg font-semibold">Flujo de Traducción</h3>
          <span className="text-sm text-muted-foreground">
            Proceso en 4 pasos simples
          </span>
        </div>
        
        <div className="flex items-center gap-2 flex-wrap">
          {steps.map((step, index) => (
            <div key={step.number} className="contents">
              <div className="flex items-center gap-3 bg-background/60 backdrop-blur-sm rounded-lg p-3 border border-border/50 flex-1 min-w-[180px]">
                <div className={`${step.color} text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm shrink-0`}>
                  {step.number}
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-sm">{step.label}</span>
                  <span className="text-xs text-muted-foreground">{step.description}</span>
                </div>
              </div>
              {index < steps.length - 1 && (
                <ArrowRight className="h-5 w-5 text-muted-foreground shrink-0 hidden lg:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};
