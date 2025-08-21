import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Search, 
  Filter, 
  ChevronDown, 
  ChevronRight, 
  X,
  Grid,
  List,
  Briefcase,
  Building,
  Wrench
} from 'lucide-react';
import { cn } from '@/lib/utils';

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

interface FilterGroup {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  filters: string[];
  expanded: boolean;
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
  const [searchTerm, setSearchTerm] = useState('');
  const [filterGroups, setFilterGroups] = useState<FilterGroup[]>([
    {
      id: 'servicios',
      label: 'Servicios',
      icon: Briefcase,
      filters: serviceFilters,
      expanded: false
    },
    {
      id: 'sectores',
      label: 'Sectores',
      icon: Building,
      filters: industryFilters,
      expanded: false
    }
  ]);

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

  const toggleGroup = (groupId: string) => {
    setFilterGroups(prev => prev.map(group => 
      group.id === groupId 
        ? { ...group, expanded: !group.expanded }
        : group
    ));
  };

  const clearFilter = () => {
    onFilterChange('todos');
    setSearchTerm('');
  };

  const filteredOptions = filterGroups.map(group => ({
    ...group,
    filters: group.filters.filter(filter => 
      formatTagName(filter).toLowerCase().includes(searchTerm.toLowerCase())
    )
  }));

  const hasActiveFilters = selectedFilter !== 'todos';

  return (
    <div className="space-y-6">
      {/* Search and Main Controls */}
      <Card className="bg-card/50 backdrop-blur-sm">
        <CardContent className="p-6">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Buscar por servicio o sector..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-background/50"
              />
            </div>

            {/* View Mode Controls */}
            <div className="flex items-center gap-2">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'outline'}
                size="sm"
                onClick={() => onViewModeChange('grid')}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'outline'}
                size="sm"
                onClick={() => onViewModeChange('list')}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Active Filter Display */}
          {hasActiveFilters && (
            <div className="flex items-center gap-2 mt-4 pt-4 border-t">
              <span className="text-sm text-muted-foreground">Filtro activo:</span>
              <Badge variant="secondary" className="gap-2">
                {formatTagName(selectedFilter)}
                <button
                  onClick={clearFilter}
                  className="ml-1 hover:bg-muted-foreground/20 rounded-full p-0.5"
                >
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Filter Categories */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Service and Industry Groups */}
        {filteredOptions.map(group => (
          <Card key={group.id} className="overflow-hidden">
            <CardContent className="p-0">
              <button
                onClick={() => toggleGroup(group.id)}
                className="w-full p-4 flex items-center justify-between hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <group.icon className="h-5 w-5 text-primary" />
                  <span className="font-semibold">{group.label}</span>
                  <Badge variant="outline" className="text-xs">
                    {group.filters.length}
                  </Badge>
                </div>
                {group.expanded ? (
                  <ChevronDown className="h-4 w-4" />
                ) : (
                  <ChevronRight className="h-4 w-4" />
                )}
              </button>

              {group.expanded && (
                <div className="border-t bg-muted/20 p-3 space-y-2 max-h-60 overflow-y-auto">
                  {group.filters.length === 0 ? (
                    <p className="text-sm text-muted-foreground text-center py-2">
                      No se encontraron filtros
                    </p>
                  ) : (
                    group.filters.map(filter => (
                      <Button
                        key={filter}
                        variant={selectedFilter === filter ? 'default' : 'ghost'}
                        size="sm"
                        onClick={() => onFilterChange(filter)}
                        className="w-full justify-start text-left h-auto py-2 px-3"
                      >
                        <span className="truncate">{formatTagName(filter)}</span>
                      </Button>
                    ))
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Show All Link - Only visible when filtered */}
      {hasActiveFilters && (
        <div className="text-center">
          <Button 
            variant="ghost" 
            onClick={clearFilter}
            className="text-primary hover:text-primary/80 hover:bg-primary/10 gap-2"
          >
            <Filter className="h-4 w-4" />
            Mostrar todos los casos
          </Button>
        </div>
      )}

      {/* Results Summary */}
      <div className="text-center">
        <p className="text-sm text-muted-foreground">
          {selectedFilter === 'todos' 
            ? `Mostrando todos los ${filteredCount} casos de éxito`
            : `Mostrando ${filteredCount} casos para "${formatTagName(selectedFilter)}"`
          }
        </p>
      </div>
    </div>
  );
};

export default SuccessCaseFilters;