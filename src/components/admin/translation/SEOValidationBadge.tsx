import React from 'react';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, AlertCircle, AlertTriangle, Sparkles } from 'lucide-react';

interface SEOValidationBadgeProps {
  missingFields: string[];
  missingCriticalFields?: string[];
  missingRecommendedFields?: string[];
  isOptimized: boolean;
  isFullyOptimized?: boolean;
}

export const SEOValidationBadge: React.FC<SEOValidationBadgeProps> = ({ 
  missingFields, 
  missingCriticalFields = [],
  missingRecommendedFields = [],
  isOptimized,
  isFullyOptimized = false 
}) => {
  // Estado 1: Todo completo (críticos + recomendados)
  if (isFullyOptimized || (isOptimized && missingRecommendedFields.length === 0)) {
    return (
      <Badge className="bg-green-500/10 text-green-600 hover:bg-green-500/20">
        <CheckCircle2 className="h-3 w-3 mr-1" />
        SEO Optimizado
      </Badge>
    );
  }

  // Estado 2: Críticos OK pero faltan recomendados
  if (isOptimized && missingRecommendedFields.length > 0) {
    return (
      <Badge className="bg-yellow-500/10 text-yellow-600 hover:bg-yellow-500/20">
        <Sparkles className="h-3 w-3 mr-1" />
        Mejorable ({missingRecommendedFields.length})
      </Badge>
    );
  }

  // Estado 3: Faltan campos críticos (muchos)
  if (missingCriticalFields.length > 2) {
    return (
      <Badge className="bg-red-500/10 text-red-600 hover:bg-red-500/20">
        <AlertCircle className="h-3 w-3 mr-1" />
        SEO Incompleto ({missingCriticalFields.length})
      </Badge>
    );
  }

  // Estado 4: Faltan pocos campos críticos
  return (
    <Badge className="bg-orange-500/10 text-orange-600 hover:bg-orange-500/20">
      <AlertTriangle className="h-3 w-3 mr-1" />
      Faltan {missingCriticalFields.length} básicos
    </Badge>
  );
};
