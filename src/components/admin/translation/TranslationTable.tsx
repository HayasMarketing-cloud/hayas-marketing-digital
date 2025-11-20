import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Edit, Eye, Plus, Languages, ExternalLink } from 'lucide-react';
import { useTranslationPairs } from '@/hooks/useTranslationPairs';
import { TranslationDialog } from './TranslationDialog';
import { useNavigate } from 'react-router-dom';

interface TranslationTableProps {
  selectedCategory?: string;
}

export const TranslationTable: React.FC<TranslationTableProps> = ({ selectedCategory }) => {
  const { pairs, isLoading } = useTranslationPairs();
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [categoryFilter, setCategoryFilter] = useState<string>(selectedCategory || 'all');
  const [selectedPair, setSelectedPair] = useState<any>(null);
  const navigate = useNavigate();

  const filteredPairs = useMemo(() => {
    if (!pairs) return [];

    return pairs.filter(pair => {
      const matchesSearch = pair.esPath.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pair.esTitle?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pair.enPath?.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesStatus = statusFilter === 'all' || 
        (statusFilter === 'translated' && pair.status === 'translated') ||
        (statusFilter === 'pending' && pair.status === 'pending') ||
        (statusFilter === 'draft' && pair.status === 'draft');
      
      const matchesCategory = categoryFilter === 'all' || pair.category === categoryFilter;

      return matchesSearch && matchesStatus && matchesCategory;
    });
  }, [pairs, searchTerm, statusFilter, categoryFilter]);

  React.useEffect(() => {
    if (selectedCategory && selectedCategory !== categoryFilter) {
      setCategoryFilter(selectedCategory);
    }
  }, [selectedCategory]);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'translated':
        return <Badge className="bg-green-500/10 text-green-500 hover:bg-green-500/20">✅ Traducida</Badge>;
      case 'draft':
        return <Badge className="bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20">⚠️ Borrador</Badge>;
      case 'pending':
        return <Badge className="bg-red-500/10 text-red-500 hover:bg-red-500/20">❌ Pendiente</Badge>;
      default:
        return <Badge variant="outline">Desconocido</Badge>;
    }
  };

  const getCategoryBadge = (category: string) => {
    const categoryColors: Record<string, string> = {
      main: 'bg-blue-500/10 text-blue-500',
      service: 'bg-purple-500/10 text-purple-500',
      solution: 'bg-indigo-500/10 text-indigo-500',
      blog: 'bg-orange-500/10 text-orange-500',
      'case-study': 'bg-pink-500/10 text-pink-500',
      tool: 'bg-cyan-500/10 text-cyan-500',
    };

    return (
      <Badge className={categoryColors[category] || 'bg-muted text-muted-foreground'}>
        {category}
      </Badge>
    );
  };

  if (isLoading) {
    return (
      <Card>
        <CardContent className="p-6">
          <div className="animate-pulse space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-16 bg-muted rounded" />
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Páginas y Traducciones ({filteredPairs.length})</span>
            <Languages className="h-5 w-5 text-muted-foreground" />
          </CardTitle>
          
          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 mt-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Buscar páginas..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Estado" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos los estados</SelectItem>
                <SelectItem value="translated">Traducidas</SelectItem>
                <SelectItem value="pending">Pendientes</SelectItem>
                <SelectItem value="draft">Borradores</SelectItem>
              </SelectContent>
            </Select>

            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Categoría" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas las categorías</SelectItem>
                <SelectItem value="main">Principales</SelectItem>
                <SelectItem value="service">Servicios</SelectItem>
                <SelectItem value="solution">Soluciones</SelectItem>
                <SelectItem value="blog">Blog</SelectItem>
                <SelectItem value="case-study">Casos de Éxito</SelectItem>
                <SelectItem value="tool">Herramientas</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>

        <CardContent>
          <div className="space-y-4">
            {filteredPairs.map((pair) => (
              <div
                key={pair.esPath}
                className="border rounded-lg p-4 hover:bg-accent/50 transition-colors"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 space-y-2">
                    {/* Spanish Version */}
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs">ES</Badge>
                      <span className="font-medium">{pair.esPath}</span>
                      {getCategoryBadge(pair.category)}
                    </div>
                    {pair.esTitle && (
                      <p className="text-sm text-muted-foreground ml-10">{pair.esTitle}</p>
                    )}

                    {/* English Version */}
                    <div className="flex items-center gap-2 ml-4">
                      {pair.enPath ? (
                        <>
                          <Badge variant="outline" className="text-xs">EN</Badge>
                          <span className="text-sm">{pair.enPath}</span>
                          <a 
                            href={pair.enPath} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:text-blue-600"
                          >
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        </>
                      ) : (
                        <span className="text-sm text-muted-foreground">→ Sin traducir</span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {getStatusBadge(pair.status)}
                    
                    {pair.status === 'translated' ? (
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => navigate(`/admin/seo/pages?path=${pair.esPath}`)}
                        >
                          <Edit className="h-4 w-4 mr-1" />
                          Editar ES
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => navigate(`/admin/seo/pages?path=${pair.enPath}`)}
                        >
                          <Edit className="h-4 w-4 mr-1" />
                          Editar EN
                        </Button>
                      </div>
                    ) : pair.status === 'draft' ? (
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => navigate(`/admin/seo/pages?path=${pair.enPath}`)}
                      >
                        <Edit className="h-4 w-4 mr-1" />
                        Continuar
                      </Button>
                    ) : (
                      <Button
                        size="sm"
                        onClick={() => setSelectedPair(pair)}
                        className="bg-blue-500 hover:bg-blue-600"
                      >
                        <Plus className="h-4 w-4 mr-1" />
                        Traducir
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {filteredPairs.length === 0 && (
              <div className="text-center py-12 text-muted-foreground">
                <Languages className="h-12 w-12 mx-auto mb-4 opacity-20" />
                <p>No se encontraron páginas con estos filtros</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {selectedPair && (
        <TranslationDialog
          pair={selectedPair}
          onClose={() => setSelectedPair(null)}
        />
      )}
    </>
  );
};
