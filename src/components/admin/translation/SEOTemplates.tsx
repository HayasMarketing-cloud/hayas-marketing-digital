import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { seoTemplates, SEOTemplate } from '@/utils/seoTemplates';
import { FileText, Sparkles } from 'lucide-react';

interface SEOTemplatesProps {
  onSelectTemplate: (template: SEOTemplate) => void;
  currentCategory?: string;
}

export const SEOTemplates: React.FC<SEOTemplatesProps> = ({ onSelectTemplate, currentCategory }) => {
  const filteredTemplates = currentCategory 
    ? seoTemplates.filter(t => t.category === currentCategory)
    : seoTemplates;

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-4">
        <Sparkles className="h-5 w-5 text-primary" />
        <h3 className="text-lg font-semibold">Templates SEO Predefinidos</h3>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredTemplates.map((template) => (
          <Card key={template.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <CardTitle className="text-base">{template.name}</CardTitle>
                  <CardDescription className="text-xs">{template.description}</CardDescription>
                </div>
                <Badge variant="outline" className="ml-2">
                  {template.category}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="text-xs space-y-2">
                  <div>
                    <span className="font-semibold">Title:</span>
                    <p className="text-muted-foreground truncate">{template.fields.title}</p>
                  </div>
                  <div>
                    <span className="font-semibold">Description:</span>
                    <p className="text-muted-foreground line-clamp-2">{template.fields.description}</p>
                  </div>
                  <div>
                    <span className="font-semibold">Schema:</span>
                    <Badge variant="secondary" className="ml-2 text-xs">
                      {template.fields.schema_type}
                    </Badge>
                  </div>
                </div>
                
                <Button 
                  onClick={() => onSelectTemplate(template)}
                  className="w-full"
                  size="sm"
                >
                  <FileText className="h-4 w-4 mr-2" />
                  Usar Template
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredTemplates.length === 0 && (
        <div className="text-center py-8 text-muted-foreground">
          No hay templates disponibles para esta categoría
        </div>
      )}
    </div>
  );
};