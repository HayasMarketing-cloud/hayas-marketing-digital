import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

interface LogoCardProps {
  name: string;
  path: string;
  description: string;
}

export const LogoCard: React.FC<LogoCardProps> = ({
  name,
  path,
  description
}) => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = path;
    link.download = path.split('/').pop() || 'logo.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle className="text-lg">{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="bg-muted/30 rounded-lg p-8 mb-4 flex items-center justify-center min-h-[200px]">
          <img 
            src={path} 
            alt={name} 
            className="max-h-32 max-w-full object-contain"
          />
        </div>
        
        <p className="text-sm text-muted-foreground mb-4">
          {description}
        </p>

        <Button 
          onClick={handleDownload} 
          variant="outline" 
          className="w-full"
        >
          <Download className="h-4 w-4 mr-2" />
          Descargar Logo
        </Button>
      </CardContent>
    </Card>
  );
};
