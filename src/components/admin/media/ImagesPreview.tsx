import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Image as ImageIcon } from 'lucide-react';

interface ImagesPreviewProps {
  searchTerm: string;
}

export const ImagesPreview: React.FC<ImagesPreviewProps> = ({ searchTerm }) => {
  const imageCategories = [
    {
      title: 'Imágenes Placeholder',
      description: 'Imágenes de ejemplo y marcadores de posición',
      images: [
        { src: '/placeholder.svg', alt: 'Placeholder estándar', label: 'Standard' },
        { src: '/placeholder.svg', alt: 'Placeholder cuadrado', label: 'Cuadrado', aspect: 'square' },
        { src: '/placeholder.svg', alt: 'Placeholder panorámico', label: 'Panorámico', aspect: 'video' },
      ]
    },
  ];

  const filteredCategories = imageCategories.filter(cat =>
    cat.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cat.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <Card className="border-primary/20 bg-primary/5">
        <CardHeader>
          <div className="flex items-center gap-3">
            <ImageIcon className="h-6 w-6 text-primary" />
            <div>
              <CardTitle>Gestión de Imágenes</CardTitle>
              <CardDescription>
                Las imágenes del sitio web se encuentran en el directorio <code className="text-xs bg-muted px-1 py-0.5 rounded">public/</code> y <code className="text-xs bg-muted px-1 py-0.5 rounded">src/assets/</code>
              </CardDescription>
            </div>
          </div>
        </CardHeader>
      </Card>

      {filteredCategories.map((category, idx) => (
        <Card key={idx}>
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle>{category.title}</CardTitle>
                <CardDescription>{category.description}</CardDescription>
              </div>
              <Badge variant="secondary">{category.images.length} imágenes</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {category.images.map((img, imgIdx) => (
                <div key={imgIdx} className="space-y-2">
                  <div className={`relative overflow-hidden rounded-lg border bg-muted ${
                    img.aspect === 'square' ? 'aspect-square' : 
                    img.aspect === 'video' ? 'aspect-video' : 
                    'aspect-[4/3]'
                  }`}>
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-medium">{img.label}</p>
                    <code className="text-xs text-muted-foreground">{img.src}</code>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}

      {filteredCategories.length === 0 && (
        <Card>
          <CardContent className="py-12 text-center text-muted-foreground">
            No se encontraron imágenes con el término "{searchTerm}"
          </CardContent>
        </Card>
      )}
    </div>
  );
};
