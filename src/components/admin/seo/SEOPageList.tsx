import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Search, Edit, AlertTriangle } from 'lucide-react';
import { useAllSEOPages } from '@/hooks/useSEOData';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface SEOPageListProps {
  onEditPage: (path: string) => void;
}

export const SEOPageList: React.FC<SEOPageListProps> = ({ onEditPage }) => {
  const { data: pages, isLoading } = useAllSEOPages();
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');

  if (isLoading || !pages) {
    return <div className="text-muted-foreground">Cargando páginas...</div>;
  }

  const filteredPages = pages.filter(page => {
    const matchesSearch = 
      page.path.toLowerCase().includes(searchTerm.toLowerCase()) ||
      page.data.title.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = categoryFilter === 'all' || page.data.category === categoryFilter;

    return matchesSearch && matchesCategory;
  });

  return (
    <Card className="h-[600px] flex flex-col">
      <CardHeader>
        <CardTitle>Páginas SEO</CardTitle>
        <div className="flex gap-4 mt-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar por path o título..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9"
            />
          </div>
          <Select value={categoryFilter} onValueChange={setCategoryFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Categoría" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todas</SelectItem>
              <SelectItem value="main">Principal</SelectItem>
              <SelectItem value="service">Servicios</SelectItem>
              <SelectItem value="solution">Soluciones</SelectItem>
              <SelectItem value="blog">Blog</SelectItem>
              <SelectItem value="case-study">Casos de Éxito</SelectItem>
              <SelectItem value="kit-digital">Kit Digital</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent className="flex-1 overflow-y-auto">
        <div className="space-y-2">
          {filteredPages.map((page) => (
            <div
              key={page.path}
              className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 transition-colors"
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <span className="font-mono text-sm truncate">{page.path}</span>
                  {page.source === 'database' ? (
                    <Badge variant="default" className="text-xs">Editado</Badge>
                  ) : (
                    <Badge variant="outline" className="text-xs">Por defecto</Badge>
                  )}
                  {page.hasWarnings && (
                    <Badge variant="destructive" className="text-xs">
                      <AlertTriangle className="h-3 w-3 mr-1" />
                      Warnings
                    </Badge>
                  )}
                  {!page.data.isIndexable && (
                    <Badge variant="secondary" className="text-xs">NoIndex</Badge>
                  )}
                </div>
                <p className="text-sm text-muted-foreground truncate">{page.data.title}</p>
              </div>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => onEditPage(page.path)}
              >
                <Edit className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
