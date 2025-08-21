import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Star } from 'lucide-react';
import { getTagBySlug } from '@/data/blogTags';

interface RelatedServiceSectionProps {
  serviceTags: string[];
  className?: string;
}

const RelatedServiceSection: React.FC<RelatedServiceSectionProps> = ({ 
  serviceTags, 
  className = "" 
}) => {
  // Obtener el primer servicio relacionado que tenga URL
  const relatedService = serviceTags
    .map(tag => getTagBySlug(tag))
    .find(tagData => tagData && 'serviceUrl' in tagData && tagData.serviceUrl);

  if (!relatedService || !('serviceUrl' in relatedService)) {
    return null;
  }

  return (
    <Card className={`bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 ${className}`}>
      <CardHeader>
        <div className="flex items-center gap-2 mb-2">
          <Star className="h-5 w-5 text-primary" />
          <Badge variant="secondary" className="bg-primary/10 text-primary">
            Servicio Relacionado
          </Badge>
        </div>
        <CardTitle className="text-xl">
          ¿Te interesa {relatedService.name}?
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-muted-foreground">
          {relatedService.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link to={relatedService.serviceUrl} className="flex-1">
            <Button className="w-full group">
              Ver servicio completo
              <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Link to="/contacto" className="flex-1">
            <Button variant="outline" className="w-full">
              Consulta gratuita
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default RelatedServiceSection;