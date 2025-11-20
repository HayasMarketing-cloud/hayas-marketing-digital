import React from 'react';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, AlertCircle, AlertTriangle } from 'lucide-react';

interface SEOValidationBadgeProps {
  missingFields: string[];
  isOptimized: boolean;
}

export const SEOValidationBadge: React.FC<SEOValidationBadgeProps> = ({ missingFields, isOptimized }) => {
  if (isOptimized) {
    return (
      <Badge className="bg-green-500/10 text-green-600 hover:bg-green-500/20">
        <CheckCircle2 className="h-3 w-3 mr-1" />
        SEO Optimizado
      </Badge>
    );
  }

  if (missingFields.length > 3) {
    return (
      <Badge className="bg-red-500/10 text-red-600 hover:bg-red-500/20">
        <AlertCircle className="h-3 w-3 mr-1" />
        SEO Incompleto ({missingFields.length} campos)
      </Badge>
    );
  }

  return (
    <Badge className="bg-yellow-500/10 text-yellow-600 hover:bg-yellow-500/20">
      <AlertTriangle className="h-3 w-3 mr-1" />
      Mejorable ({missingFields.length} campos)
    </Badge>
  );
};
