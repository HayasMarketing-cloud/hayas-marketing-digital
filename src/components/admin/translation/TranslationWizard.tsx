import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { RouteInventoryItem } from '@/hooks/useAllRoutes';
import { CheckCircle2, ArrowRight, ArrowLeft } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface TranslationWizardProps {
  isOpen: boolean;
  onClose: () => void;
  routes: RouteInventoryItem[];
}

const steps = [
  { id: 1, name: 'Selección', description: 'Seleccionar páginas a procesar' },
  { id: 2, name: 'Datos SEO', description: 'Completar información SEO' },
  { id: 3, name: 'Traducción', description: 'Traducir automáticamente' },
  { id: 4, name: 'Optimización', description: 'Revisar y optimizar' },
  { id: 5, name: 'Validación', description: 'Validar y publicar' },
];

export const TranslationWizard: React.FC<TranslationWizardProps> = ({ isOpen, onClose, routes }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedRoutes, setSelectedRoutes] = useState<RouteInventoryItem[]>([]);

  const progress = (currentStep / steps.length) * 100;

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    } else {
      onClose();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Selecciona las páginas que deseas procesar en este flujo
            </p>
            <div className="max-h-[400px] overflow-y-auto space-y-2">
              {routes.filter(r => r.status === 'code-only' || r.status === 'pending').map((route) => (
                <div
                  key={route.path}
                  className="flex items-center justify-between p-3 bg-muted rounded-lg hover:bg-muted/80 cursor-pointer"
                  onClick={() => {
                    if (selectedRoutes.find(r => r.path === route.path)) {
                      setSelectedRoutes(selectedRoutes.filter(r => r.path !== route.path));
                    } else {
                      setSelectedRoutes([...selectedRoutes, route]);
                    }
                  }}
                >
                  <div className="flex items-center gap-2 flex-1">
                    <input
                      type="checkbox"
                      checked={!!selectedRoutes.find(r => r.path === route.path)}
                      onChange={() => {}}
                      className="rounded"
                    />
                    <span className="text-sm">{route.path}</span>
                  </div>
                  <Badge variant="outline">{route.status}</Badge>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between pt-4 border-t">
              <span className="text-sm text-muted-foreground">
                {selectedRoutes.length} página{selectedRoutes.length !== 1 ? 's' : ''} seleccionada{selectedRoutes.length !== 1 ? 's' : ''}
              </span>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-4 py-6">
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Completar Datos SEO</h3>
              <p className="text-sm text-muted-foreground">
                Para cada página seleccionada, se abrirá el formulario de datos SEO
              </p>
            </div>
            <div className="bg-muted p-4 rounded-lg">
              <p className="text-sm">
                Este paso te guiará para completar los campos SEO esenciales para cada página usando templates predefinidos o entrada manual.
              </p>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-4 py-6">
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Traducción Automática</h3>
              <p className="text-sm text-muted-foreground">
                Las páginas se traducirán automáticamente usando IA
              </p>
            </div>
            <div className="bg-muted p-4 rounded-lg">
              <p className="text-sm">
                El sistema traducirá automáticamente todo el contenido SEO manteniendo la estructura y optimización para cada idioma.
              </p>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-4 py-6">
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Revisar y Optimizar</h3>
              <p className="text-sm text-muted-foreground">
                Revisa las traducciones y optimiza el SEO si es necesario
              </p>
            </div>
            <div className="bg-muted p-4 rounded-lg">
              <p className="text-sm">
                Podrás revisar cada traducción y hacer ajustes finos para asegurar que el contenido sea perfecto antes de publicar.
              </p>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-4 py-6">
            <div className="text-center">
              <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">¡Listo para Publicar!</h3>
              <p className="text-sm text-muted-foreground">
                Todas las páginas están optimizadas y listas
              </p>
            </div>
            <div className="bg-green-500/10 p-4 rounded-lg border border-green-500/20">
              <p className="text-sm text-center">
                Las páginas procesadas están ahora en la base de datos y listas para ser indexadas por Google.
              </p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>Asistente de Traducción Paso a Paso</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium">Paso {currentStep} de {steps.length}</span>
              <span className="text-muted-foreground">{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Steps */}
          <div className="flex items-center justify-between">
            {steps.map((step, idx) => (
              <div key={step.id} className="flex flex-col items-center flex-1">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-colors ${
                    currentStep > step.id
                      ? 'bg-green-500 border-green-500 text-white'
                      : currentStep === step.id
                      ? 'bg-primary border-primary text-white'
                      : 'bg-background border-muted-foreground text-muted-foreground'
                  }`}
                >
                  {currentStep > step.id ? (
                    <CheckCircle2 className="h-5 w-5" />
                  ) : (
                    step.id
                  )}
                </div>
                <span className="text-xs mt-2 text-center">{step.name}</span>
              </div>
            ))}
          </div>

          {/* Step Content */}
          <div className="min-h-[300px]">
            {renderStepContent()}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between pt-4 border-t">
            <Button
              onClick={handlePrevious}
              disabled={currentStep === 1}
              variant="outline"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Anterior
            </Button>
            <Button onClick={handleNext}>
              {currentStep === steps.length ? 'Finalizar' : 'Siguiente'}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};