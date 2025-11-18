import React from 'react';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, Sparkles, AlertCircle } from 'lucide-react';

type RouteStatus = 'optimized' | 'auto-generated' | 'no-data';

interface RouteStatusBadgeProps {
  status: RouteStatus;
  source?: 'database' | 'fallback';
}

export const RouteStatusBadge: React.FC<RouteStatusBadgeProps> = ({ status, source }) => {
  const statusConfig = {
    'optimized': {
      label: 'Optimizado',
      icon: CheckCircle2,
      variant: 'default' as const,
      className: 'bg-green-500 hover:bg-green-600'
    },
    'auto-generated': {
      label: 'Auto-generado',
      icon: Sparkles,
      variant: 'secondary' as const,
      className: 'bg-blue-500 hover:bg-blue-600 text-white'
    },
    'no-data': {
      label: 'Sin datos',
      icon: AlertCircle,
      variant: 'outline' as const,
      className: 'border-orange-500 text-orange-500'
    }
  };

  const config = statusConfig[status];
  const Icon = config.icon;

  return (
    <Badge variant={config.variant} className={`text-xs ${config.className}`}>
      <Icon className="h-3 w-3 mr-1" />
      {config.label}
    </Badge>
  );
};
