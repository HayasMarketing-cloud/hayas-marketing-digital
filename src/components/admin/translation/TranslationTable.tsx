import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TranslationDetailPanel } from './TranslationDetailPanel';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Search, Languages, ExternalLink, AlertCircle, CheckCircle2, Clock, Code, FileText, AlertTriangle, Database, Zap, ListChecks, Sparkles, FileEdit, Rocket, TrendingUp, Settings, Image } from 'lucide-react';
import { useAllRoutes, RouteInventoryItem } from '@/hooks/useAllRoutes';
import { SEOValidationBadge } from './SEOValidationBadge';
import { SEOValidationPanel } from './SEOValidationPanel';
import { QuickActionModal } from './QuickActionModal';
import { BatchProcessor } from './BatchProcessor';
import { TranslationWizard } from './TranslationWizard';
import { BatchTranslationGenerator } from './BatchTranslationGenerator';
import { ComparisonViewModal } from './ComparisonViewModal';
import { PriorityBadge } from './PriorityBadge';
import { PriorityEditor } from './PriorityEditor';
import { TranslationFlowGuide } from './TranslationFlowGuide';
import { BatchSEOGenerator } from '../seo/BatchSEOGenerator';
import { SEOAlertsPanel } from '../seo/SEOAlertsPanel';
import { CategoryProgressAccordion } from '../seo/CategoryProgressAccordion';
import { useQueryClient } from '@tanstack/react-query';

interface TranslationTableProps {
  selectedCategory?: string;
}

export const TranslationTable: React.FC<TranslationTableProps> = ({ selectedCategory }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'default' | 'priority'>('default');
  const [categoryFilter, setCategoryFilter] = useState<string>(selectedCategory || 'all');
  const [selectedRoute, setSelectedRoute] = useState<RouteInventoryItem | null>(null);
  const [selectedRoutes, setSelectedRoutes] = useState<string[]>([]);
  const [showQuickAction, setShowQuickAction] = useState(false);
  const [quickActionRoute, setQuickActionRoute] = useState<RouteInventoryItem | null>(null);
  const [showBatchProcessor, setShowBatchProcessor] = useState(false);
  const [showBatchSEO, setShowBatchSEO] = useState(false);
  const [showWizard, setShowWizard] = useState(false);
  const [showBatchTranslation, setShowBatchTranslation] = useState(false);
  const [showComparison, setShowComparison] = useState(false);
  const [priorityEditorRoute, setPriorityEditorRoute] = useState<RouteInventoryItem | null>(null);
  const [detailRoute, setDetailRoute] = useState<RouteInventoryItem | null>(null);
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
        label: '✅ Publicada', 
        tooltip: 'Página completa: traducida y con SEO optimizado',
        icon: CheckCircle2,
        className: 'bg-emerald-500/10 text-emerald-600 hover:bg-emerald-500/20' 
      },
      translated: { 
        label: '⚡ Revisar SEO', 
        tooltip: 'Ya está traducida, pero falta optimizar algunos campos SEO',
        icon: Zap,
        className: 'bg-yellow-500/10 text-yellow-600 hover:bg-yellow-500/20' 
      },
      pending: { 
        label: '🚀 Lista para traducir', 
        tooltip: 'Tiene datos SEO en español, lista para crear la versión en inglés',
        icon: Rocket,
        className: 'bg-green-500/10 text-green-600 hover:bg-green-500/20' 
      },
      'code-only': { 
        label: '📝 Nueva', 
        tooltip: 'Página detectada en tu web que necesita datos SEO básicos',
        icon: FileEdit,
        className: 'bg-blue-500/10 text-blue-600 hover:bg-blue-500/20' 
      },
      orphan: { 
        label: '🔒 Sistema', 
        tooltip: 'Página técnica del sistema (oculta del listado principal)',
        icon: AlertTriangle,
        className: 'bg-gray-500/10 text-gray-600 hover:bg-gray-500/20' 
      },
    };

    const config = statusConfig[status] || statusConfig.pending;
    const Icon = config.icon;
    
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Badge className={config.className}>
              {config.label}
            </Badge>
          </TooltipTrigger>
          <TooltipContent>
            <p className="max-w-xs">{config.tooltip}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
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
    let filtered = routes.filter(route => {
      // 🔒 Ocultar páginas orphan (sistema) y páginas EN (solo mostrar ES)
      if (route.status === 'orphan') return false;
      if (route.language === 'en') return false;
      
      const matchesSearch = 
        route.path.toLowerCase().includes(searchTerm.toLowerCase()) ||
        route.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        route.translationPath?.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesStatus = statusFilter === 'all' || route.status === statusFilter;
      const matchesCategory = categoryFilter === 'all' || route.category === categoryFilter;

      return matchesSearch && matchesStatus && matchesCategory;
    });

    // Sort by priority if selected
    if (sortBy === 'priority') {
      filtered = [...filtered].sort((a, b) => {
        const scoreA = a.priorityScore || 0;
        const scoreB = b.priorityScore || 0;
        return scoreB - scoreA; // Higher priority first
      });
    }

    return filtered;
  }, [routes, searchTerm, statusFilter, categoryFilter, sortBy]);

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
    setShowBatchSEO(false);
    setShowWizard(false);
    queryClient.invalidateQueries({ queryKey: ['all-routes-inventory'] });
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
    <div className="space-y-4">
      <SEOAlertsPanel />
      
      <CategoryProgressAccordion />
      
      <TranslationFlowGuide />
      
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Languages className="h-5 w-5" />
            Páginas en Español ({filteredRoutes.length})
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
                <SelectItem value="code-only">📝 Nuevas</SelectItem>
                <SelectItem value="pending">🚀 Listas para traducir</SelectItem>
                <SelectItem value="translated">⚡ Revisar SEO</SelectItem>
                <SelectItem value="complete">✅ Publicadas</SelectItem>
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

            <Select value={sortBy} onValueChange={(val) => setSortBy(val as 'default' | 'priority')}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Ordenar" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="default">Orden predeterminado</SelectItem>
                <SelectItem value="priority">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4" />
                    Por prioridad
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Acciones batch */}
          {selectedRoutes.length > 0 && (
            <div className="bg-primary/10 p-4 rounded-lg flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Checkbox
                  checked={selectedRoutes.length === filteredRoutes.length}
                  onCheckedChange={handleSelectAll}
                />
                <span className="font-medium">
                  {selectedRoutes.length} página{selectedRoutes.length !== 1 ? 's' : ''} seleccionada{selectedRoutes.length !== 1 ? 's' : ''}
                </span>
              </div>
              <div className="flex gap-2">
                {/* Show SEO generation only for pages without SEO */}
                {selectedRoutesData.every(r => !r.seoOptimized) && (
                  <Button
                    onClick={() => setShowBatchSEO(true)}
                    variant="default"
                    size="sm"
                  >
                    <Sparkles className="w-4 h-4 mr-2" />
                    Generar SEO con IA
                  </Button>
                )}
                
                {/* Show translation only for pages with SEO */}
                {selectedRoutesData.every(r => r.seoOptimized) && (
                  <>
                    <Button
                      onClick={() => setShowBatchTranslation(true)}
                      variant="default"
                      size="sm"
                    >
                      <Languages className="w-4 h-4 mr-2" />
                      Traducir Seleccionadas
                    </Button>
                    <Button
                      onClick={() => setShowComparison(true)}
                      variant="outline"
                      size="sm"
                    >
                      <FileText className="w-4 h-4 mr-2" />
                      Comparar ES vs EN
                    </Button>
                  </>
                )}
                
                <Button
                  onClick={() => setSelectedRoutes([])}
                  variant="outline"
                  size="sm"
                >
                  Limpiar
                </Button>
              </div>
            </div>
          )}

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
                  className="border rounded-lg p-4 hover:bg-accent/50 transition-colors cursor-pointer"
                  onClick={() => setDetailRoute(route)}
                >
                  <div className="flex items-start justify-between gap-4">
                    {/* Checkbox para selección */}
                    <div className="pt-1" onClick={(e) => e.stopPropagation()}>
                      <Checkbox
                        checked={selectedRoutes.includes(route.path)}
                        onCheckedChange={() => handleSelectRoute(route.path)}
                      />
                    </div>

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
                            {route.priorityScore !== undefined && route.priorityScore > 0 && (
                              <PriorityBadge 
                                score={route.priorityScore} 
                                strategicImportance={route.strategicImportance}
                              />
                            )}
                          </div>
                          {route.title && (
                            <p className="text-sm text-muted-foreground">{route.title}</p>
                          )}
                        </div>
                        <div className="flex items-center gap-2">
                          {getStatusBadge(route.status)}
                          {getCategoryBadge(route.category)}
                          {route.inDatabase && (
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => setPriorityEditorRoute(route)}
                            >
                              <Settings className="h-4 w-4" />
                            </Button>
                          )}
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
                            missingCriticalFields={route.missingCriticalFields}
                            missingRecommendedFields={route.missingRecommendedFields}
                            isOptimized={route.seoOptimized}
                            isFullyOptimized={route.seoFullyOptimized}
                          />
                        )}
                      </div>

                      {/* Campos SEO faltantes - Distinguir críticos de recomendados */}
                      {route.inDatabase && route.missingCriticalFields && route.missingCriticalFields.length > 0 && (
                        <div className="text-xs text-red-600">
                          Faltan (básicos): {route.missingCriticalFields.join(', ')}
                        </div>
                      )}
                      {route.inDatabase && route.seoOptimized && route.missingRecommendedFields && route.missingRecommendedFields.length > 0 && (
                        <div className="text-xs text-yellow-600">
                          Mejoras recomendadas: {route.missingRecommendedFields.join(', ')}
                        </div>
                      )}
                    </div>

                    {/* Acciones contextuales */}
                    <div className="flex items-center gap-2 flex-shrink-0" onClick={(e) => e.stopPropagation()}>
                      {route.status === 'code-only' && (
                        <Button
                          size="lg"
                          className="bg-blue-500 hover:bg-blue-600 text-white"
                          onClick={() => handleQuickAction(route)}
                        >
                          <FileEdit className="h-4 w-4 mr-2" />
                          Preparar Página
                        </Button>
                      )}
                      
                      {route.status === 'pending' && (
                        <Button
                          size="lg"
                          className="bg-green-500 hover:bg-green-600 text-white"
                          onClick={() => handleQuickAction(route)}
                        >
                          <Languages className="h-4 w-4 mr-2" />
                          TRADUCIR AHORA
                        </Button>
                      )}
                      
                      {route.status === 'translated' && !route.seoOptimized && (
                        <Button
                          size="lg"
                          className="bg-yellow-500 hover:bg-yellow-600 text-white"
                          onClick={() => handleQuickAction(route)}
                        >
                          <Zap className="h-4 w-4 mr-2" />
                          Optimizar SEO
                        </Button>
                      )}
                      
                      {route.status === 'complete' && route.seoOptimized && !route.seoFullyOptimized && route.missingRecommendedFields && route.missingRecommendedFields.length > 0 && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-yellow-500 text-yellow-600 hover:bg-yellow-500/10"
                          onClick={() => handleQuickAction(route)}
                        >
                          <Sparkles className="h-4 w-4 mr-2" />
                          Añadir OG Image
                        </Button>
                      )}
                      
                      {route.status === 'complete' && route.seoFullyOptimized && (
                        <Badge className="bg-emerald-500/20 text-emerald-700 px-4 py-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 mr-2" />
                          Completa
                        </Badge>
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

      <QuickActionModal
        route={quickActionRoute}
        isOpen={showQuickAction}
        onClose={() => setShowQuickAction(false)}
        onSuccess={handleRefresh}
      />

      {showBatchProcessor && selectedRoutesData.length > 0 && (
        <BatchProcessor
          selectedRoutes={selectedRoutesData}
          onComplete={handleRefresh}
          onCancel={() => setShowBatchProcessor(false)}
        />
      )}

      {showBatchSEO && selectedRoutesData.length > 0 && (
        <BatchSEOGenerator
          isOpen={showBatchSEO}
          onClose={() => setShowBatchSEO(false)}
          routes={selectedRoutesData}
          onSuccess={handleRefresh}
        />
      )}

      <TranslationWizard
        isOpen={showWizard}
        onClose={() => setShowWizard(false)}
        routes={selectedRoutesData}
      />

      <BatchTranslationGenerator
        isOpen={showBatchTranslation}
        onClose={() => setShowBatchTranslation(false)}
        routes={selectedRoutesData}
        onSuccess={handleRefresh}
      />

      <ComparisonViewModal
        isOpen={showComparison}
        onClose={() => setShowComparison(false)}
        selectedPaths={selectedRoutes}
      />

      {priorityEditorRoute && (
        <PriorityEditor
          isOpen={!!priorityEditorRoute}
          onClose={() => setPriorityEditorRoute(null)}
          pagePath={priorityEditorRoute.path}
          currentImportance={priorityEditorRoute.strategicImportance}
          currentTraffic={priorityEditorRoute.estimatedTraffic}
          onSuccess={handleRefresh}
        />
      )}

      <TranslationDetailPanel
        route={detailRoute}
        open={!!detailRoute}
        onClose={() => setDetailRoute(null)}
      />
    </div>
  );
};
