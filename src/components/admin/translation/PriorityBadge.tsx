import { Badge } from '@/components/ui/badge';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { TrendingUp, TrendingDown, AlertCircle, Zap } from 'lucide-react';

interface PriorityBadgeProps {
  score: number;
  strategicImportance?: string;
  showTooltip?: boolean;
}

export const PriorityBadge = ({ 
  score, 
  strategicImportance = 'medium',
  showTooltip = true 
}: PriorityBadgeProps) => {
  const getPriorityConfig = () => {
    if (score >= 80) {
      return {
        label: '🔥 Crítica',
        className: 'bg-red-500/10 text-red-600 border-red-500/30',
        icon: AlertCircle,
        tooltip: 'Prioridad crítica - Optimizar inmediatamente',
      };
    } else if (score >= 60) {
      return {
        label: '⚡ Alta',
        className: 'bg-orange-500/10 text-orange-600 border-orange-500/30',
        icon: Zap,
        tooltip: 'Prioridad alta - Optimizar pronto',
      };
    } else if (score >= 40) {
      return {
        label: '📈 Media',
        className: 'bg-yellow-500/10 text-yellow-600 border-yellow-500/30',
        icon: TrendingUp,
        tooltip: 'Prioridad media - Planificar optimización',
      };
    } else {
      return {
        label: '📉 Baja',
        className: 'bg-gray-500/10 text-gray-600 border-gray-500/30',
        icon: TrendingDown,
        tooltip: 'Prioridad baja - Optimizar cuando sea posible',
      };
    }
  };

  const config = getPriorityConfig();
  const Icon = config.icon;

  const badge = (
    <Badge 
      variant="outline" 
      className={`${config.className} flex items-center gap-1`}
    >
      <Icon className="w-3 h-3" />
      {config.label}
      <span className="ml-1 text-xs opacity-70">({score})</span>
    </Badge>
  );

  if (!showTooltip) {
    return badge;
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          {badge}
        </TooltipTrigger>
        <TooltipContent>
          <div className="text-xs space-y-1">
            <p className="font-semibold">{config.tooltip}</p>
            <p className="text-muted-foreground">Score: {score}/100</p>
            {strategicImportance && (
              <p className="text-muted-foreground">
                Importancia: {strategicImportance}
              </p>
            )}
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
