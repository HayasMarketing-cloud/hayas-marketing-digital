import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MetricsCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: LucideIcon;
  trend?: 'up' | 'down' | 'neutral';
  trendValue?: string;
  color?: 'green' | 'yellow' | 'red' | 'blue';
  onClick?: () => void;
}

export const MetricsCard: React.FC<MetricsCardProps> = ({
  title,
  value,
  subtitle,
  icon: Icon,
  trend,
  trendValue,
  color = 'blue',
  onClick
}) => {
  const colorClasses = {
    green: 'bg-green-50 text-green-700 border-green-200',
    yellow: 'bg-yellow-50 text-yellow-700 border-yellow-200',
    red: 'bg-red-50 text-red-700 border-red-200',
    blue: 'bg-blue-50 text-blue-700 border-blue-200'
  };

  const iconBgColors = {
    green: 'bg-green-100',
    yellow: 'bg-yellow-100',
    red: 'bg-red-100',
    blue: 'bg-blue-100'
  };

  return (
    <Card 
      className={cn(
        'border-2 transition-all duration-200',
        colorClasses[color],
        onClick && 'cursor-pointer hover:shadow-lg hover:scale-105'
      )}
      onClick={onClick}
    >
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <div className={cn('p-2 rounded-full', iconBgColors[color])}>
          <Icon className="h-4 w-4" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {subtitle && (
          <p className="text-xs opacity-75 mt-1">{subtitle}</p>
        )}
        {trend && trendValue && (
          <div className={cn(
            'text-xs mt-2 flex items-center gap-1',
            trend === 'up' ? 'text-green-600' : 
            trend === 'down' ? 'text-red-600' : 
            'text-gray-600'
          )}>
            <span>{trendValue}</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
