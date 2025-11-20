import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { FAQValidationResult } from '@/utils/faq-schema-validator';
import { AlertTriangle, CheckCircle2, Info, XCircle, ExternalLink } from 'lucide-react';

interface FAQSchemaModalProps {
  isOpen: boolean;
  onClose: () => void;
  pageName: string;
  validation: FAQValidationResult;
  googleTestUrl: string;
  schemaJson: any;
}

export const FAQSchemaModal: React.FC<FAQSchemaModalProps> = ({
  isOpen,
  onClose,
  pageName,
  validation,
  googleTestUrl,
  schemaJson
}) => {
  const getIssueIcon = (type: 'error' | 'warning' | 'info') => {
    switch (type) {
      case 'error':
        return <XCircle className="h-4 w-4 text-red-500" />;
      case 'warning':
        return <AlertTriangle className="h-4 w-4 text-yellow-500" />;
      case 'info':
        return <Info className="h-4 w-4 text-blue-500" />;
    }
  };

  const getIssueColor = (type: 'error' | 'warning' | 'info') => {
    switch (type) {
      case 'error':
        return 'bg-red-500/10 border-red-500/20';
      case 'warning':
        return 'bg-yellow-500/10 border-yellow-500/20';
      case 'info':
        return 'bg-blue-500/10 border-blue-500/20';
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh]">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            <span>Validación FAQ Schema: {pageName}</span>
            <Badge 
              variant="outline" 
              className={
                validation.score >= 80 ? 'bg-green-500/10 text-green-700 border-green-500/20' :
                validation.score >= 60 ? 'bg-blue-500/10 text-blue-700 border-blue-500/20' :
                validation.score >= 40 ? 'bg-yellow-500/10 text-yellow-700 border-yellow-500/20' :
                'bg-red-500/10 text-red-700 border-red-500/20'
              }
            >
              Score: {validation.score}%
            </Badge>
          </DialogTitle>
          <DialogDescription>
            Resultados de validación local y acceso a Google Rich Results Test
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="max-h-[60vh] pr-4">
          <div className="space-y-6">
            {/* Summary */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-muted/50 rounded-lg p-4 border">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  <span className="text-sm font-medium">Checks Pasados</span>
                </div>
                <p className="text-2xl font-bold">{validation.passedChecks}/{validation.totalChecks}</p>
              </div>
              
              <div className="bg-muted/50 rounded-lg p-4 border">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="h-5 w-5 text-yellow-500" />
                  <span className="text-sm font-medium">Issues Totales</span>
                </div>
                <p className="text-2xl font-bold">{validation.issues.length}</p>
              </div>
              
              <div className="bg-muted/50 rounded-lg p-4 border">
                <div className="flex items-center gap-2 mb-2">
                  <XCircle className="h-5 w-5 text-red-500" />
                  <span className="text-sm font-medium">Errores Críticos</span>
                </div>
                <p className="text-2xl font-bold">
                  {validation.issues.filter(i => i.type === 'error').length}
                </p>
              </div>
            </div>

            <Separator />

            {/* Recommendations */}
            {validation.recommendations.length > 0 && (
              <div className="space-y-2">
                <h4 className="font-semibold flex items-center gap-2">
                  <Info className="h-4 w-4" />
                  Recomendaciones
                </h4>
                <ul className="space-y-2">
                  {validation.recommendations.map((rec, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm bg-blue-500/5 p-3 rounded-lg border border-blue-500/10">
                      <CheckCircle2 className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <Separator />

            {/* Issues */}
            {validation.issues.length > 0 ? (
              <div className="space-y-2">
                <h4 className="font-semibold flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4" />
                  Issues Detectados ({validation.issues.length})
                </h4>
                <div className="space-y-3">
                  {validation.issues.map((issue, idx) => (
                    <div 
                      key={idx} 
                      className={`p-4 rounded-lg border ${getIssueColor(issue.type)}`}
                    >
                      <div className="flex items-start gap-3">
                        {getIssueIcon(issue.type)}
                        <div className="flex-1 space-y-1">
                          <div className="flex items-center justify-between">
                            <p className="font-medium text-sm">{issue.message}</p>
                            <Badge variant="outline" className="text-xs">
                              {issue.field}
                            </Badge>
                          </div>
                          {issue.recommendation && (
                            <p className="text-sm text-muted-foreground">
                              💡 {issue.recommendation}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center py-8 bg-green-500/5 rounded-lg border border-green-500/20">
                <CheckCircle2 className="h-12 w-12 text-green-500 mx-auto mb-3" />
                <p className="font-semibold text-green-700 dark:text-green-400">
                  ¡Ningún issue detectado!
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  El FAQ Schema está correctamente optimizado
                </p>
              </div>
            )}

            <Separator />

            {/* Schema Preview */}
            <div className="space-y-2">
              <h4 className="font-semibold">Schema JSON Preview</h4>
              <ScrollArea className="h-48 rounded-lg border bg-muted/30">
                <pre className="p-4 text-xs">
                  {JSON.stringify(schemaJson, null, 2)}
                </pre>
              </ScrollArea>
            </div>
          </div>
        </ScrollArea>

        <div className="flex justify-between items-center pt-4 border-t">
          <Button variant="outline" onClick={onClose}>
            Cerrar
          </Button>
          <Button 
            onClick={() => window.open(googleTestUrl, '_blank')}
            className="gap-2"
          >
            <ExternalLink className="h-4 w-4" />
            Validar en Google Rich Results
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
