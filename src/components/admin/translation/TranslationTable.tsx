import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Search, Languages, ExternalLink, AlertCircle, CheckCircle2, Clock, Code, FileText, AlertTriangle, Database, Zap, ListChecks, Sparkles } from 'lucide-react';
import { useAllRoutes, RouteInventoryItem } from '@/hooks/useAllRoutes';
import { SEOValidationBadge } from './SEOValidationBadge';
import { SEOValidationPanel } from './SEOValidationPanel';
import { QuickActionModal } from './QuickActionModal';
import { BatchProcessor } from './BatchProcessor';
import { TranslationWizard } from './TranslationWizard';
import { useQueryClient } from '@tanstack/react-query';

interface TranslationTableProps {
  selectedCategory?: string;
}

export const TranslationTable: React.FC<TranslationTableProps> = ({ selectedCategory }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [categoryFilter, setCategoryFilter] = useState<string>(selectedCategory || 'all');
  const [selectedRoute, setSelectedRoute] = useState<RouteInventoryItem | null>(null);
  const [selectedRoutes, setSelectedRoutes] = useState<string[]>([]);
  const [showQuickAction, setShowQuickAction] = useState(false);
  const [quickActionRoute, setQuickActionRoute] = useState<RouteInventoryItem | null>(null);
  const [showBatchProcessor, setShowBatchProcessor] = useState(false);
  const [showWizard, setShowWizard] = useState(false);
  const { routes, isLoading } = useAllRoutes();
  const queryClient = useQueryClient();

  React.useEffect(() => {
    if (selectedCategory && selectedCategory !== categoryFilter) {
      setCategoryFilter(selectedCategory);
    }
  }, [selectedCategory]);

  const getStatusBadge = (status: RouteInventoryItem['status']) => {
    const statusConfig = {
      complete: { 
        label: 'Completa', 
        icon: CheckCircle2,
        className: 'bg-green-500/10 text-green-600 hover:bg-green-500/20' 
      },
      translated: { 
        label: 'Traducida', 
        icon: Languages,
        className: 'bg-blue-500/10 text-blue-600 hover:bg-blue-500/20' 
      },
      pending: { 
        label: 'Pendiente', 
        icon: Clock,
        className: 'bg-orange-500/10 text-orange-600 hover:bg-orange-500/20' 
      },
      'code-only': { 
        label: 'Solo en Código', 
        icon: Code,
        className: 'bg-purple-500/10 text-purple-600 hover:bg-purple-500/20' 
      },
      orphan: { 
        label: 'Huérfana', 
        icon: AlertTriangle,
        className: 'bg-red-500/10 text-red-600 hover:bg-red-500/20' 
      },
    };

    const config = statusConfig[status] || statusConfig.pending;
    const Icon = config.icon;
    
    return (
      <Badge className={config.className}>
        <Icon className="h-3 w-3 mr-1" />
        {config.label}
      </Badge>
    );
  };

  const getCategoryBadge = (category: string) => {
    const categoryColors: Record<string, string> = {
      main: 'bg-blue-500/10 text-blue-600 hover:bg-blue-500/20',
      service: 'bg-purple-500/10 text-purple-600 hover:bg-purple-500/20',
      solution: 'bg-indigo-500/10 text-indigo-600 hover:bg-indigo-500/20',
      blog: 'bg-orange-500/10 text-orange-600 hover:bg-orange-500/20',
      'case-study': 'bg-pink-500/10 text-pink-600 hover:bg-pink-500/20',
      tool: 'bg-cyan-500/10 text-cyan-600 hover:bg-cyan-500/20',
    };

    return (
      <Badge className={categoryColors[category] || 'bg-muted text-muted-foreground hover:bg-muted/80'}>
        {category}
      </Badge>
    );
  };

  const filteredRoutes = useMemo(() => {
    return routes.filter(route => {
      const matchesSearch = 
        route.path.toLowerCase().includes(searchTerm.toLowerCase()) ||
        route.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        route.translationPath?.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesStatus = statusFilter === 'all' || route.status === statusFilter;
      const matchesCategory = categoryFilter === 'all' || route.category === categoryFilter;

      return matchesSearch && matchesStatus && matchesCategory;
    });
  }, [routes, searchTerm, statusFilter, categoryFilter]);

  const handleSelectAll = () => {
    if (selectedRoutes.length === filteredRoutes.length) {
      setSelectedRoutes([]);
    } else {
      setSelectedRoutes(filteredRoutes.map(r => r.path));
    }
  };

  const handleSelectRoute = (path: string) => {
    if (selectedRoutes.includes(path)) {
      setSelectedRoutes(selectedRoutes.filter(p => p !== path));
    } else {
      setSelectedRoutes([...selectedRoutes, path]);
    }
  };

  const handleQuickAction = (route: RouteInventoryItem) => {
    setQuickActionRoute(route);
    setShowQuickAction(true);
  };

  const handleBatchProcess = () => {
    if (selectedRoutes.length === 0) return;
    setShowBatchProcessor(true);
  };

  const handleRefresh = () => {
    setSelectedRoutes([]);
    setShowQuickAction(false);
    setShowBatchProcessor(false);
    setShowWizard(false);
    queryClient.invalidateQueries({ queryKey: ['all-routes'] });
  };

  const selectedRoutesData = routes.filter(r => selectedRoutes.includes(r.path));

  if (isLoading) {
    return (
      <Card>
        <CardContent className="p-6">
          <div className="animate-pulse space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-24 bg-muted rounded" />
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
          <CardTitle className="flex items-center gap-2">
            <Languages className="h-5 w-5" />
            Páginas y Traducciones ({filteredRoutes.length})
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Filtros */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Buscar por ruta o título..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Estado" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos los estados</SelectItem>
                <SelectItem value="complete">Completas</SelectItem>
                <SelectItem value="translated">Traducidas</SelectItem>
                <SelectItem value="pending">Pendientes</SelectItem>
                <SelectItem value="code-only">Solo en Código</SelectItem>
                <SelectItem value="orphan">Huérfanas</SelectItem>
              </SelectContent>
            </Select>

            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Categoría" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas las categorías</SelectItem>
                <SelectItem value="main">Principal</SelectItem>
                <SelectItem value="service">Servicios</SelectItem>
                <SelectItem value="solution">Soluciones</SelectItem>
                <SelectItem value="tool">Herramientas</SelectItem>
                <SelectItem value="blog">Blog</SelectItem>
                <SelectItem value="case-study">Casos de Estudio</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Lista de páginas */}
          {filteredRoutes.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground">
              <AlertCircle className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>No se encontraron páginas con los filtros aplicados</p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredRoutes.map((route) => (
                <div 
                  key={route.path} 
                  className="border rounded-lg p-4 hover:bg-accent/50 transition-colors"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 space-y-3">
                      {/* Header con Path y Estado */}
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1 flex-wrap">
                            <code className="text-sm font-mono bg-muted px-2 py-1 rounded">
                              {route.path}
                            </code>
                            {route.inApp && (
                              <Badge variant="outline" className="text-xs">
                                <Code className="h-3 w-3 mr-1" />
                                En App
                              </Badge>
                            )}
                            {route.inDatabase && (
                              <Badge variant="outline" className="text-xs">
                                <Database className="h-3 w-3 mr-1" />
                                En DB
                              </Badge>
                            )}
                            {route.is_indexable && (
                              <Badge variant="outline" className="text-xs bg-green-500/10 text-green-600 border-green-500/20">
                                <CheckCircle2 className="h-3 w-3 mr-1" />
                                Publicada
                              </Badge>
                            )}
                          </div>
                          {route.title && (
                            <p className="text-sm text-muted-foreground">{route.title}</p>
                          )}
                        </div>
                        <div className="flex items-center gap-2">
                          {getStatusBadge(route.status)}
                          {getCategoryBadge(route.category)}
                        </div>
                      </div>

                      {/* Traducción y SEO */}
                      <div className="flex items-center gap-4 text-sm flex-wrap">
                        {route.hasTranslation && route.translationPath ? (
                          <div className="flex items-center gap-2">
                            <Languages className="h-4 w-4 text-muted-foreground" />
                            <span className="text-muted-foreground">EN:</span>
                            <code className="text-xs font-mono bg-muted px-2 py-1 rounded">
                              {route.translationPath}
                            </code>
                          </div>
                        ) : (
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <AlertCircle className="h-4 w-4" />
                            <span className="text-sm">Sin traducción</span>
                          </div>
                        )}
                        
                        {route.inDatabase && (
                          <SEOValidationBadge 
                            missingFields={route.missingFields} 
                            isOptimized={route.seoOptimized} 
                          />
                        )}
                      </div>

                      {/* Campos SEO faltantes */}
                      {route.missingFields.length > 0 && route.inDatabase && (
                        <div className="text-xs text-muted-foreground">
                          Faltan: {route.missingFields.join(', ')}
                        </div>
                      )}
                    </div>

                    {/* Acciones contextuales */}
                    <div className="flex items-center gap-2 flex-shrink-0">
                      {route.status === 'code-only' && (
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => setSelectedRoute(route)}
                        >
                          <Database className="h-4 w-4 mr-1" />
                          Añadir a DB
                        </Button>
                      )}
                      
                      {route.status === 'pending' && (
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => setSelectedRoute(route)}
                        >
                          <Languages className="h-4 w-4 mr-1" />
                          Traducir
                        </Button>
                      )}
                      
                      {(route.status === 'translated' || route.status === 'complete') && !route.seoOptimized && (
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => setSelectedRoute(route)}
                        >
                          <AlertCircle className="h-4 w-4 mr-1" />
                          Optimizar SEO
                        </Button>
                      )}

                      {route.inDatabase && (
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => setSelectedRoute(route)}
                        >
                          <FileText className="h-4 w-4 mr-1" />
                          Ver Detalles
                        </Button>
                      )}
                      
                      <Button
                        size="sm"
                        variant="ghost"
                        asChild
                      >
                        <a href={route.path} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {selectedRoute && (
        <SEOValidationPanel
          route={selectedRoute}
          onClose={() => setSelectedRoute(null)}
        />
      )}
    </>
  );
};
