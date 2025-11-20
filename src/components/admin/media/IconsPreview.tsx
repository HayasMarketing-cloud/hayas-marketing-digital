import React, { useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import * as Icons from 'lucide-react';

interface IconsPreviewProps {
  searchTerm: string;
}

export const IconsPreview: React.FC<IconsPreviewProps> = ({ searchTerm }) => {
  // Iconos más comunes organizados por categoría
  const iconCategories = [
    {
      title: 'Marketing & Negocio',
      icons: [
        'TrendingUp', 'Target', 'BarChart3', 'PieChart', 'DollarSign', 
        'Users', 'UserPlus', 'Award', 'Briefcase', 'Rocket'
      ]
    },
    {
      title: 'Comunicación',
      icons: [
        'Mail', 'Phone', 'MessageCircle', 'Send', 'Mic', 
        'Video', 'Headphones', 'Bell', 'BellRing', 'MessageSquare'
      ]
    },
    {
      title: 'Tecnología & Digital',
      icons: [
        'Code', 'Laptop', 'Smartphone', 'Monitor', 'Database', 
        'Server', 'Cloud', 'Wifi', 'Globe', 'Cpu'
      ]
    },
    {
      title: 'Redes Sociales',
      icons: [
        'Share2', 'ThumbsUp', 'Heart', 'Star', 'Eye', 
        'TrendingUp', 'Users2', 'AtSign', 'Hash', 'Image'
      ]
    },
    {
      title: 'Acciones',
      icons: [
        'Plus', 'Edit', 'Trash2', 'Check', 'X', 
        'Download', 'Upload', 'Save', 'Copy', 'Search'
      ]
    },
    {
      title: 'Navegación',
      icons: [
        'ArrowRight', 'ArrowLeft', 'ArrowUp', 'ArrowDown', 'ChevronRight', 
        'ChevronLeft', 'Menu', 'Home', 'ExternalLink', 'Maximize'
      ]
    },
    {
      title: 'Estado & Feedback',
      icons: [
        'CheckCircle2', 'AlertCircle', 'AlertTriangle', 'Info', 'HelpCircle', 
        'XCircle', 'Clock', 'Loader2', 'Zap', 'Sparkles'
      ]
    },
    {
      title: 'Archivos & Documentos',
      icons: [
        'File', 'FileText', 'FolderOpen', 'Image', 'FileImage', 
        'Video', 'Music', 'Download', 'Upload', 'Paperclip'
      ]
    },
  ];

  const filteredCategories = useMemo(() => {
    if (!searchTerm) return iconCategories;
    
    return iconCategories
      .map(category => ({
        ...category,
        icons: category.icons.filter(icon =>
          icon.toLowerCase().includes(searchTerm.toLowerCase())
        )
      }))
      .filter(category => 
        category.icons.length > 0 ||
        category.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
  }, [searchTerm]);

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Iconos Lucide React</CardTitle>
          <CardDescription>
            Biblioteca completa de iconos vectoriales. Todos escalables y personalizables.
          </CardDescription>
        </CardHeader>
      </Card>

      {filteredCategories.map((category, idx) => (
        <Card key={idx}>
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="text-lg">{category.title}</CardTitle>
              </div>
              <Badge variant="secondary">{category.icons.length} iconos</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-5 sm:grid-cols-8 md:grid-cols-10 gap-4">
              {category.icons.map((iconName) => {
                const IconComponent = Icons[iconName as keyof typeof Icons] as React.ComponentType<any>;
                
                if (!IconComponent) return null;
                
                return (
                  <div
                    key={iconName}
                    className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-accent transition-colors cursor-pointer group"
                    title={iconName}
                  >
                    <div className="h-12 w-12 flex items-center justify-center">
                      <IconComponent className="h-6 w-6 text-foreground group-hover:scale-110 transition-transform" />
                    </div>
                    <span className="text-xs text-muted-foreground text-center break-all">
                      {iconName}
                    </span>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      ))}

      {filteredCategories.length === 0 && (
        <Card>
          <CardContent className="py-12 text-center text-muted-foreground">
            No se encontraron iconos con el término "{searchTerm}"
          </CardContent>
        </Card>
      )}
    </div>
  );
};
