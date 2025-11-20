import { LucideIcon } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface AdminToolCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  path: string;
  status: 'active' | 'beta' | 'coming-soon';
  category: string;
  onClick: () => void;
}

export const AdminToolCard = ({
  title,
  description,
  icon: Icon,
  status,
  onClick
}: AdminToolCardProps) => {
  const isDisabled = status === 'coming-soon';

  const statusConfig = {
    active: { label: 'Activo', variant: 'default' as const },
    beta: { label: 'Beta', variant: 'secondary' as const },
    'coming-soon': { label: 'Próximamente', variant: 'outline' as const }
  };

  return (
    <Card
      className={cn(
        'cursor-pointer transition-all duration-200 hover:shadow-lg hover:scale-105',
        isDisabled && 'opacity-60 cursor-not-allowed hover:scale-100'
      )}
      onClick={!isDisabled ? onClick : undefined}
    >
      <CardHeader>
        <div className="flex items-start justify-between mb-2">
          <div className="p-2 rounded-lg bg-primary/10">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <Badge variant={statusConfig[status].variant}>
            {statusConfig[status].label}
          </Badge>
        </div>
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription className="text-sm">
          {description}
        </CardDescription>
      </CardHeader>
    </Card>
  );
};
