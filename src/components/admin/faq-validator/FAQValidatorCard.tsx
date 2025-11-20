import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ValidationStatusBadge } from './ValidationStatusBadge';
import { FAQValidationResult } from '@/utils/faq-schema-validator';
import { ExternalLink, Search, AlertCircle, CheckCircle2, HelpCircle } from 'lucide-react';

interface FAQValidatorCardProps {
  pageName: string;
  pageUrl: string;
  targetKeywords: string[];
  faqCount: number;
  validation: FAQValidationResult;
  onViewDetails: () => void;
  googleTestUrl: string;
  priority: 'high' | 'medium' | 'low';
}

export const FAQValidatorCard: React.FC<FAQValidatorCardProps> = ({
  pageName,
  pageUrl,
  targetKeywords,
  faqCount,
  validation,
  onViewDetails,
  googleTestUrl,
  priority
}) => {
  const getPriorityColor = () => {
    switch (priority) {
      case 'high':
        return 'bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-500/20';
      case 'medium':
        return 'bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20';
      case 'low':
        return 'bg-gray-500/10 text-gray-700 dark:text-gray-400 border-gray-500/20';
    }
  };

  const errorCount = validation.issues.filter(i => i.type === 'error').length;
  const warningCount = validation.issues.filter(i => i.type === 'warning').length;

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="space-y-1 flex-1">
            <CardTitle className="text-lg flex items-center gap-2">
              {pageName}
              <Badge variant="outline" className={`${getPriorityColor()} border text-xs`}>
                {priority === 'high' ? 'Alta' : priority === 'medium' ? 'Media' : 'Baja'} prioridad
              </Badge>
            </CardTitle>
            <CardDescription className="flex items-center gap-1">
              <HelpCircle className="h-3.5 w-3.5" />
              {faqCount} preguntas frecuentes
            </CardDescription>
          </div>
          <ValidationStatusBadge score={validation.score} isValid={validation.isValid} />
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Keywords */}
        <div>
          <p className="text-sm font-medium mb-2 flex items-center gap-2">
            <Search className="h-3.5 w-3.5" />
            Keywords objetivo:
          </p>
          <div className="flex flex-wrap gap-1.5">
            {targetKeywords.slice(0, 3).map((keyword, idx) => (
              <Badge key={idx} variant="secondary" className="text-xs">
                {keyword}
              </Badge>
            ))}
            {targetKeywords.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{targetKeywords.length - 3} más
              </Badge>
            )}
          </div>
        </div>

        {/* Validation Summary */}
        <div className="grid grid-cols-3 gap-2 pt-2">
          <div className="bg-muted/50 rounded-lg p-3 border text-center">
            <CheckCircle2 className="h-4 w-4 text-green-500 mx-auto mb-1" />
            <p className="text-xs text-muted-foreground">Pasados</p>
            <p className="text-lg font-bold">{validation.passedChecks}</p>
          </div>
          
          <div className="bg-muted/50 rounded-lg p-3 border text-center">
            <AlertCircle className="h-4 w-4 text-red-500 mx-auto mb-1" />
            <p className="text-xs text-muted-foreground">Errores</p>
            <p className="text-lg font-bold">{errorCount}</p>
          </div>
          
          <div className="bg-muted/50 rounded-lg p-3 border text-center">
            <AlertCircle className="h-4 w-4 text-yellow-500 mx-auto mb-1" />
            <p className="text-xs text-muted-foreground">Avisos</p>
            <p className="text-lg font-bold">{warningCount}</p>
          </div>
        </div>

        {/* Top Recommendation */}
        {validation.recommendations.length > 0 && (
          <div className="bg-blue-500/5 border border-blue-500/20 rounded-lg p-3">
            <p className="text-xs text-blue-700 dark:text-blue-400">
              💡 {validation.recommendations[0]}
            </p>
          </div>
        )}

        {/* Actions */}
        <div className="flex gap-2 pt-2">
          <Button 
            onClick={onViewDetails} 
            variant="outline" 
            size="sm"
            className="flex-1"
          >
            Ver Detalles
          </Button>
          <Button 
            onClick={() => window.open(googleTestUrl, '_blank')}
            size="sm"
            className="gap-2"
          >
            <ExternalLink className="h-3.5 w-3.5" />
            Google Test
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
