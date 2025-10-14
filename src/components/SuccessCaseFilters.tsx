import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { 
  X, 
  Grid3X3, 
  List, 
  Building2, 
  Wrench,
  Zap,
  Users,
  ChevronDown,
  Filter
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { GROUPED_INDUSTRIES, getServicesWithSuccessCases } from '@/data/successCasesTags';
import { tagsLevel2, getTagsByParent } from '@/data/blogTags';

interface SuccessCaseFiltersProps {
  selectedFilter: string;
  onFilterChange: (filter: string) => void;
  viewMode: 'grid' | 'list';
  onViewModeChange: (mode: 'grid' | 'list') => void;
  totalCases: number;
  filteredCount: number;
  serviceFilters: string[];
  industryFilters: string[];
}

const SuccessCaseFilters: React.FC<SuccessCaseFiltersProps> = ({
  selectedFilter,
  onFilterChange,
  viewMode,
  onViewModeChange,
  totalCases,
  filteredCount,
  serviceFilters,
  industryFilters
}) => {
  const hasActiveFilters = selectedFilter !== 'todos';
  const [isOpen, setIsOpen] = useState(hasActiveFilters);

  const formatTagName = (tag: string): string => {
    const tagMap: { [key: string]: string } = {
      'implantacion-crm': 'Implantación CRM',
      'administracion-crm': 'Administración CRM', 
      'automatizacion-procesos-ventas': 'Automatización de Ventas',
      'seo-positioning': 'Posicionamiento SEO',
      'publicidad-google-ads': 'Publicidad Google Ads',
      'publicidad-redes-sociales': 'Publicidad en Redes',
      'gestion-redes-sociales': 'Gestión de Redes',
      'estrategia-contenidos': 'Estrategia de Contenidos',
      'email-marketing': 'Email Marketing',
      'automatizacion-marketing': 'Automatización Marketing',
      'creacion-marca': 'Creación de Marca',
      'diseno-web': 'Diseño Web',
      'tienda-online': 'Tienda Online',
      'consultoria-estrategica': 'Consultoría Estratégica',
      'integraciones-ia': 'Integraciones IA',
      'formacion-ia': 'Formación IA',
      'captacion-leads': 'Captación de Leads',
      'campanas-inbound': 'Campañas Inbound'
    };
    
    return tagMap[tag] || tag.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };

  const clearFilter = () => {
    onFilterChange('todos');
  };

  // Get only services that have success cases
  const servicesWithCases = getServicesWithSuccessCases();
  
  // Filter pillar services to only include those with success cases
  const impulsaServices = getTagsByParent('impulsa-tu-marca').filter(service => 
    servicesWithCases.some(s => s.slug === service.slug)
  );
  const conectaServices = getTagsByParent('conecta-con-tus-clientes').filter(service => 
    servicesWithCases.some(s => s.slug === service.slug)
  );
  const activaServices = getTagsByParent('activa-tus-ventas').filter(service => 
    servicesWithCases.some(s => s.slug === service.slug)
  );

  // Pillar icons and colors
  const pillarConfig = {
    'impulsa-tu-marca': { icon: Zap, color: 'bg-purple-100 text-purple-700 hover:bg-purple-200' },
    'conecta-con-tus-clientes': { icon: Users, color: 'bg-blue-100 text-blue-700 hover:bg-blue-200' },
    'activa-tus-ventas': { icon: Wrench, color: 'bg-green-100 text-green-700 hover:bg-green-200' }
  };

  return (
    <div className="space-y-4">
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <Card>
          <CardContent className="p-4">
            {/* Compact Header - Always Visible */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" className="flex items-center gap-2 hover:bg-muted p-0 h-auto">
                    <Filter className="h-4 w-4 text-primary" />
                    <span className="font-semibold text-base">Filtrar casos de éxito</span>
                    {hasActiveFilters && (
                      <Badge variant="secondary" className="text-xs">
                        1 filtro activo
                      </Badge>
                    )}
                    <ChevronDown className={cn(
                      "h-4 w-4 text-muted-foreground transition-transform duration-200",
                      isOpen && "rotate-180"
                    )} />
                  </Button>
                </CollapsibleTrigger>
                
                {/* View Mode Toggle - Always Visible */}
                <div className="flex gap-1">
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => onViewModeChange('grid')}
                    className="gap-1 text-xs px-3 py-1"
                  >
                    <Grid3X3 className="h-3 w-3" />
                    Grid
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => onViewModeChange('list')}
                    className="gap-1 text-xs px-3 py-1"
                  >
                    <List className="h-3 w-3" />
                    Lista
                  </Button>
                </div>
              </div>

              {/* Active Filter Display - Always Visible */}
              {hasActiveFilters && (
                <div className="flex items-center gap-2 pt-2 border-t">
                  <span className="text-xs text-muted-foreground">Filtro activo:</span>
                  <Badge variant="secondary" className="gap-1 text-xs">
                    {GROUPED_INDUSTRIES.find(g => g.slug === selectedFilter)?.name || 
                     tagsLevel2.find(t => t.slug === selectedFilter)?.name ||
                     formatTagName(selectedFilter)}
                    <button
                      onClick={clearFilter}
                      className="hover:bg-destructive/20 rounded-sm p-0.5"
                    >
                      <X className="h-2 w-2" />
                    </button>
                  </Badge>
                </div>
              )}
            </div>

            {/* Collapsible Filter Content */}
            <CollapsibleContent className="data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
              <div className="pt-4 mt-4 border-t">
                {/* Two Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {/* Left Column: Filter by Sector */}
                  <div className="space-y-3">
                    <h4 className="font-medium text-sm flex items-center gap-2">
                      <Building2 className="h-4 w-4 text-primary" />
                      Filtrar por Sector
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {GROUPED_INDUSTRIES.map(sector => (
                        <div
                          key={sector.slug}
                          onClick={() => onFilterChange(sector.slug)}
                          className={cn(
                            "p-2 rounded-lg border cursor-pointer transition-all text-center text-xs",
                            selectedFilter === sector.slug 
                              ? 'border-primary bg-primary/5 text-primary font-medium' 
                              : 'border-border hover:border-primary/50 hover:bg-muted/50'
                          )}
                        >
                          {sector.name}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Filter by Service */}
                  <div className="space-y-3">
                    <h4 className="font-medium text-sm flex items-center gap-2">
                      <Wrench className="h-4 w-4 text-primary" />
                      Filtrar por Servicio
                    </h4>
                    <div className="space-y-3">
                      {/* Impulsa Services */}
                      <div>
                        <div className="flex items-center gap-1 mb-2">
                          <Zap className="h-3 w-3 text-purple-600" />
                          <span className="text-xs font-medium text-purple-600">Impulsa</span>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {impulsaServices.map(service => (
                            <Badge
                              key={service.slug}
                              variant={selectedFilter === service.slug ? 'default' : 'outline'}
                              className={cn(
                                "cursor-pointer text-xs px-2 py-1 transition-colors",
                                selectedFilter === service.slug 
                                  ? '' 
                                  : 'hover:bg-purple-100 hover:text-purple-700 hover:border-purple-300'
                              )}
                              onClick={() => onFilterChange(service.slug)}
                            >
                              {service.name}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Conecta Services */}
                      <div>
                        <div className="flex items-center gap-1 mb-2">
                          <Users className="h-3 w-3 text-blue-600" />
                          <span className="text-xs font-medium text-blue-600">Conecta</span>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {conectaServices.map(service => (
                            <Badge
                              key={service.slug}
                              variant={selectedFilter === service.slug ? 'default' : 'outline'}
                              className={cn(
                                "cursor-pointer text-xs px-2 py-1 transition-colors",
                                selectedFilter === service.slug 
                                  ? '' 
                                  : 'hover:bg-blue-100 hover:text-blue-700 hover:border-blue-300'
                              )}
                              onClick={() => onFilterChange(service.slug)}
                            >
                              {service.name}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Activa Services */}
                      <div>
                        <div className="flex items-center gap-1 mb-2">
                          <Wrench className="h-3 w-3 text-green-600" />
                          <span className="text-xs font-medium text-green-600">Activa</span>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {activaServices.map(service => (
                            <Badge
                              key={service.slug}
                              variant={selectedFilter === service.slug ? 'default' : 'outline'}
                              className={cn(
                                "cursor-pointer text-xs px-2 py-1 transition-colors",
                                selectedFilter === service.slug 
                                  ? '' 
                                  : 'hover:bg-green-100 hover:text-green-700 hover:border-green-300'
                              )}
                              onClick={() => onFilterChange(service.slug)}
                            >
                              {service.name}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Show All Button - Only visible when filtered */}
                {hasActiveFilters && (
                  <div className="text-center mt-4">
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={clearFilter}
                      className="text-primary hover:text-primary/80 hover:bg-primary/10 gap-2 text-xs"
                    >
                      <X className="h-3 w-3" />
                      Mostrar todos los casos
                    </Button>
                  </div>
                )}
              </div>
            </CollapsibleContent>
          </CardContent>
        </Card>
      </Collapsible>

      {/* Results Summary */}
      <div className="text-center">
        <p className="text-xs text-muted-foreground">
          {hasActiveFilters ? (
            <>Mostrando <span className="font-semibold text-foreground">{filteredCount}</span> de {totalCases} casos</>
          ) : (
            <>Mostrando <span className="font-semibold text-foreground">{totalCases}</span> casos de éxito</>
          )}
        </p>
      </div>
    </div>
  );
};

export default SuccessCaseFilters;