import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, AlertCircle } from 'lucide-react';

interface SEOPreviewCardProps {
  title: string;
  description: string;
  url: string;
  showValidation?: boolean;
}

export const SEOPreviewCard = ({ 
  title, 
  description, 
  url,
  showValidation = true 
}: SEOPreviewCardProps) => {
  const titleLength = title.length;
  const descLength = description.length;
  
  const titleStatus = titleLength >= 30 && titleLength <= 60 ? 'optimal' : 
                      titleLength >= 20 && titleLength <= 70 ? 'acceptable' : 'poor';
  
  const descStatus = descLength >= 120 && descLength <= 160 ? 'optimal' : 
                     descLength >= 100 && descLength <= 180 ? 'acceptable' : 'poor';

  const getStatusColor = (status: string) => {
    if (status === 'optimal') return 'text-green-600';
    if (status === 'acceptable') return 'text-yellow-600';
    return 'text-red-600';
  };

  const getStatusIcon = (status: string) => {
    return status === 'optimal' || status === 'acceptable' ? 
      <CheckCircle2 className="w-4 h-4" /> : 
      <AlertCircle className="w-4 h-4" />;
  };

  return (
    <div className="space-y-3">
      <Card className="p-4 bg-white border border-border/20">
        <div className="space-y-2">
          <div className="text-sm text-muted-foreground">
            {url.replace('https://', '').replace('http://', '')}
          </div>
          <div className="text-lg text-blue-600 hover:underline cursor-pointer font-medium">
            {title}
          </div>
          <div className="text-sm text-muted-foreground line-clamp-2">
            {description}
          </div>
        </div>
      </Card>

      {showValidation && (
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="flex items-center gap-2">
            <span className={getStatusColor(titleStatus)}>
              {getStatusIcon(titleStatus)}
            </span>
            <span className="text-muted-foreground">
              Title: {titleLength} chars
            </span>
            <Badge 
              variant={titleStatus === 'optimal' ? 'default' : titleStatus === 'acceptable' ? 'secondary' : 'destructive'}
              className="text-xs"
            >
              {titleStatus === 'optimal' ? '✓ Óptimo' : titleStatus === 'acceptable' ? '⚠ Aceptable' : '✗ Mejorar'}
            </Badge>
          </div>

          <div className="flex items-center gap-2">
            <span className={getStatusColor(descStatus)}>
              {getStatusIcon(descStatus)}
            </span>
            <span className="text-muted-foreground">
              Desc: {descLength} chars
            </span>
            <Badge 
              variant={descStatus === 'optimal' ? 'default' : descStatus === 'acceptable' ? 'secondary' : 'destructive'}
              className="text-xs"
            >
              {descStatus === 'optimal' ? '✓ Óptimo' : descStatus === 'acceptable' ? '⚠ Aceptable' : '✗ Mejorar'}
            </Badge>
          </div>
        </div>
      )}
    </div>
  );
};
