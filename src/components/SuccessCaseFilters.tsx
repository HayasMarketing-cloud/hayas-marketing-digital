import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  Filter, 
  X, 
  Grid3X3, 
  List, 
  Building2, 
  Wrench,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { GROUPED_INDUSTRIES, getIndustriesInGroup } from '@/data/successCasesTags';

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
  const [searchTerm, setSearchTerm] = useState('');

  const hasActiveFilters = selectedFilter !== 'todos';

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
    setSearchTerm('');
  };

  // Create filter options from the new grouped categories
  const filterOptions = GROUPED_INDUSTRIES.map(group => ({
    id: group.slug,
    label: group.name,
    icon: Building2,
    count: filteredCount // We'll use the passed count for now
  }));

  return (
    <div className="space-y-6">
      {/* Search and View Controls */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Input
                placeholder="Buscar casos de éxito..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Filter className="h-4 w-4 text-muted-foreground" />
              </div>
            </div>

            {/* View Mode Toggle */}
            <div className="flex gap-2">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'outline'}
                size="sm"
                onClick={() => onViewModeChange('grid')}
                className="gap-2"
              >
                <Grid3X3 className="h-4 w-4" />
                Grid
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'outline'}
                size="sm"
                onClick={() => onViewModeChange('list')}
                className="gap-2"
              >
                <List className="h-4 w-4" />
                Lista
              </Button>
            </div>
          </div>

          {/* Active Filter Display */}
          {hasActiveFilters && (
            <div className="flex items-center gap-2 mt-4 pt-4 border-t">
              <span className="text-sm text-muted-foreground">Filtro activo:</span>
              <Badge variant="secondary" className="gap-2">
                {GROUPED_INDUSTRIES.find(g => g.slug === selectedFilter)?.name || formatTagName(selectedFilter)}
                <button
                  onClick={clearFilter}
                  className="hover:bg-destructive/20 rounded-sm p-0.5"
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
        {filterOptions.map(option => (
          <Card 
            key={option.id}
            className={cn(
              "cursor-pointer transition-all duration-200 hover:shadow-md",
              selectedFilter === option.id ? 'ring-2 ring-primary bg-primary/5' : 'hover:bg-muted/30'
            )}
          >
            <CardContent 
              className="p-6 text-center"
              onClick={() => onFilterChange(option.id)}
            >
              <div className="flex items-center justify-center gap-3 mb-3">
                <option.icon className="h-6 w-6 text-primary" />
                <span className="font-semibold text-lg">{option.label}</span>
              </div>
              <div className="text-sm text-muted-foreground">
                Ver casos de este sector
              </div>
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