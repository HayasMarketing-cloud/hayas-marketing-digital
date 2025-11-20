import React from 'react';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, AlertTriangle, XCircle, Info } from 'lucide-react';

interface ValidationStatusBadgeProps {
  score: number;
  isValid: boolean;
  variant?: 'default' | 'compact';
}

export const ValidationStatusBadge: React.FC<ValidationStatusBadgeProps> = ({ 
  score, 
  isValid,
  variant = 'default' 
}) => {
  const getStatusConfig = () => {
    if (score >= 80) {
      return {
        label: 'Excelente',
        color: 'bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20',
        icon: CheckCircle,
        iconColor: 'text-green-600 dark:text-green-400'
      };
    } else if (score >= 60) {
      return {
        label: 'Bueno',
        color: 'bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20',
        icon: Info,
        iconColor: 'text-blue-600 dark:text-blue-400'
      };
    } else if (score >= 40) {
      return {
        label: 'Mejorable',
        color: 'bg-yellow-500/10 text-yellow-700 dark:text-yellow-400 border-yellow-500/20',
        icon: AlertTriangle,
        iconColor: 'text-yellow-600 dark:text-yellow-400'
      };
    } else {
      return {
        label: 'Crítico',
        color: 'bg-red-500/10 text-red-700 dark:text-red-400 border-red-500/20',
        icon: XCircle,
        iconColor: 'text-red-600 dark:text-red-400'
      };
    }
  };

  const config = getStatusConfig();
  const Icon = config.icon;

  if (variant === 'compact') {
    return (
      <Badge variant="outline" className={`${config.color} border`}>
        <Icon className={`h-3 w-3 ${config.iconColor}`} />
      </Badge>
    );
  }

  return (
    <Badge variant="outline" className={`${config.color} border gap-1.5`}>
      <Icon className={`h-3.5 w-3.5 ${config.iconColor}`} />
      <span>{config.label}</span>
      <span className="font-semibold">{score}%</span>
    </Badge>
  );
};
