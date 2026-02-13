import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Edit, AlertTriangle } from 'lucide-react';
import { useAllSEOPages } from '@/hooks/useSEOData';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';

interface EnhancedSEOPageListProps {
  onEditPage: (path: string) => void;
}

export const EnhancedSEOPageList: React.FC<EnhancedSEOPageListProps> = ({ onEditPage }) => {
  const { data: pages, isLoading } = useAllSEOPages();
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [languageFilter, setLanguageFilter] = useState<string>('all');

  const filteredPages = useMemo(() => {
    if (!pages) return [];

    return pages.filter(page => {
      const matchesSearch =
        page.path.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (page.data.title?.toLowerCase().includes(searchTerm.toLowerCase()) ?? false);

      const matchesCategory = categoryFilter === 'all' || page.data.category === categoryFilter;
      const matchesLanguage = languageFilter === 'all' ||
        (languageFilter === 'es-ES' && page.path.startsWith('/es')) ||
        (languageFilter === 'en-US' && page.path.startsWith('/en'));

      return matchesSearch && matchesCategory && matchesLanguage;
    });
  }, [pages, searchTerm, categoryFilter, languageFilter]);

  if (isLoading) {
    return <div className="text-muted-foreground">Cargando páginas...</div>;
  }

  const allPages = pages || [];
  const stats = {
    total: allPages.length,
    es: allPages.filter(p => p.path.startsWith('/es')).length,
    en: allPages.filter(p => p.path.startsWith('/en')).length,
    withWarnings: allPages.filter(p => p.hasWarnings).length,
  };

  return (
    <Card className="h-[700px] flex flex-col">
      <CardHeader>
        <div className="flex items-center justify-between mb-4">
          <CardTitle>Páginas SEO ({filteredPages.length})</CardTitle>
        </div>

        {/* Stats Bar */}
        <div className="flex gap-2 mb-4 flex-wrap">
          <Badge variant="outline" className="bg-blue-50 border-blue-200">
            <span className="font-semibold mr-1">{stats.es}</span> 🇪🇸 Español
          </Badge>
          <Badge variant="outline" className="bg-green-50 border-green-200">
            <span className="font-semibold mr-1">{stats.en}</span> 🇬🇧 English
          </Badge>
          {stats.withWarnings > 0 && (
            <Badge variant="outline" className="bg-orange-50 border-orange-200">
              <AlertTriangle className="h-3 w-3 mr-1" />
              <span className="font-semibold mr-1">{stats.withWarnings}</span> Con warnings
            </Badge>
          )}
        </div>

        {/* Filtros */}
        <div className="flex gap-4 flex-wrap">
          <div className="relative flex-1 min-w-[200px]">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar por path o título..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9"
            />
          </div>
          <Select value={categoryFilter} onValueChange={setCategoryFilter}>
            <SelectTrigger className="w-[160px]">
              <SelectValue placeholder="Categoría" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todas</SelectItem>
              <SelectItem value="main">Principal</SelectItem>
              <SelectItem value="service">Servicios</SelectItem>
              <SelectItem value="solution">Soluciones</SelectItem>
              <SelectItem value="blog">Blog</SelectItem>
              <SelectItem value="case-study">Casos</SelectItem>
              <SelectItem value="kit-digital">Kit Digital</SelectItem>
              <SelectItem value="tool">Herramientas</SelectItem>
            </SelectContent>
          </Select>
          <Select value={languageFilter} onValueChange={setLanguageFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Idioma" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos los idiomas</SelectItem>
              <SelectItem value="es-ES">🇪🇸 Español</SelectItem>
              <SelectItem value="en-US">🇬🇧 English</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>

      <CardContent className="flex-1 overflow-y-auto">
        <div className="space-y-2">
          {filteredPages.map((page) => (
            <div
              key={page.path}
              className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 transition-colors group cursor-pointer"
              onClick={() => onEditPage(page.path)}
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <span className="font-mono text-sm truncate font-medium">{page.path}</span>

                  {page.hasWarnings && (
                    <Badge variant="destructive" className="text-xs">
                      <AlertTriangle className="h-3 w-3 mr-1" />
                      Warnings
                    </Badge>
                  )}

                  <Badge variant="outline" className="text-xs">
                    {page.data.category || 'main'}
                  </Badge>
                </div>

                {page.data.title ? (
                  <p className="text-sm text-muted-foreground truncate">{page.data.title}</p>
                ) : (
                  <p className="text-sm text-muted-foreground italic">Sin título definido</p>
                )}
              </div>

              <div className="flex gap-2 ml-4">
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={(e) => { e.stopPropagation(); onEditPage(page.path); }}
                  title="Editar SEO"
                >
                  <Edit className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}

          {filteredPages.length === 0 && (
            <div className="text-center py-12 text-muted-foreground">
              <Search className="h-12 w-12 mx-auto mb-4 opacity-20" />
              <p>No se encontraron páginas con los filtros aplicados</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
