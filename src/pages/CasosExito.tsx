import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ALL_SUCCESS_CASES, SuccessCase } from '@/data/successCases';
import SuccessCaseFilters from '@/components/SuccessCaseFilters';
import { getIndustriesInGroup, getServicesWithSuccessCases } from '@/data/successCasesTags';
import { EnhancedSEO } from '@/components/EnhancedSEO';
import { DynamicH1 } from '@/components/DynamicH1';
import { DynamicH2 } from '@/components/DynamicH2';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from '@/components/ui/breadcrumb';

const CasosExito = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedFilter, setSelectedFilter] = useState<string>('todos');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Initialize filter from URL parameter
  useEffect(() => {
    const filterParam = searchParams.get('filter');
    if (filterParam) {
      setSelectedFilter(filterParam);
    }
  }, [searchParams]);

  // Extract unique service tags that have success cases
  const servicesWithCases = getServicesWithSuccessCases();
  const allServiceTags = servicesWithCases.map(service => service.slug).sort();
  
  const allIndustryTags = Array.from(new Set(
    ALL_SUCCESS_CASES.flatMap(case_ => case_.tags.industries)
  )).sort();

// Filter cases based on selected filter
  const filteredCases = selectedFilter === 'todos' 
    ? ALL_SUCCESS_CASES
    : ALL_SUCCESS_CASES.filter(case_ => {
        // Handle grouped industry filters
        if (selectedFilter.endsWith('-grupo')) {
          const industriesInGroup = getIndustriesInGroup(selectedFilter);
          return case_.tags.industries.some(industry => 
            industriesInGroup.includes(industry)
          );
        }
        
        // Handle individual service/industry/tool filters
        return case_.tags.services.includes(selectedFilter) ||
               case_.tags.industries.includes(selectedFilter) ||
               (case_.tags.tools && case_.tags.tools.includes(selectedFilter));
      });

  // Define tag categories for better organization
  const tagCategories = {
    'Servicios': allServiceTags,
    'Sectores': allIndustryTags
  };

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

  return (
    <div className="min-h-screen bg-background">
      <EnhancedSEO 
        customSEO={{
          title: 'Casos de Éxito en Marketing Digital y CRM - Hayas Marketing',
          description: 'Descubre casos reales de transformación digital con marketing, CRM y automatización. Resultados medibles en más de 15 sectores diferentes.',
          canonical: '/casos-exito',
          keywords: ['casos éxito marketing digital', 'gestión de clientes', 'transformación digital', 'resultados marketing', 'CRM casos reales'],
          robots: 'index, follow'
        }}
      />
      <Navigation />
      
      {/* Breadcrumbs */}
      <section className="py-4 bg-muted/30 border-b">
        <div className="container mx-auto px-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Inicio</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Casos de Éxito</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <DynamicH1 
              fallback="Casos de Éxito en Marketing Digital y CRM"
              className="text-4xl lg:text-5xl font-bold mb-6"
            />
            <DynamicH2 
              type="primary"
              fallback="Transformaciones digitales exitosas de nuestros clientes"
              className="text-lg text-muted-foreground mb-8"
            />
            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <Badge variant="secondary" className="text-sm">
                {'>'}200 proyectos completados
              </Badge>
              <Badge variant="secondary" className="text-sm">
                +15 Sectores
              </Badge>
              <Badge variant="secondary" className="text-sm">
                100% Satisfacción
              </Badge>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <SuccessCaseFilters
              selectedFilter={selectedFilter}
              onFilterChange={setSelectedFilter}
              viewMode={viewMode}
              onViewModeChange={setViewMode}
              totalCases={ALL_SUCCESS_CASES.length}
              filteredCount={filteredCases.length}
              serviceFilters={allServiceTags}
              industryFilters={allIndustryTags}
            />
          </div>
        </div>
      </section>

      {/* Cases Grid/List */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {filteredCases.length === 0 ? (
            <div className="text-center py-12">
              <div className="max-w-md mx-auto">
                <div className="mb-6">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
                    <div className="text-2xl">🔍</div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">No hay resultados</h3>
                  <p className="text-muted-foreground">
                    No se encontraron casos de éxito para el filtro seleccionado.
                  </p>
                </div>
                <Button onClick={() => setSelectedFilter('todos')} variant="outline">
                  Ver todos los casos
                </Button>
              </div>
            </div>
          ) : (
            <div className={
              viewMode === 'grid' 
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                : "space-y-6"
            }>
              {filteredCases.map((project, index) => (
                <Link key={index} to={project.link}>
                  <Card className={`group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden cursor-pointer h-full ${
                    viewMode === 'list' ? 'flex flex-row' : ''
                  }`}>
                    <div className={viewMode === 'grid' ? "aspect-square overflow-hidden" : "w-48 h-32 flex-shrink-0 overflow-hidden"}>
                      <img 
                        src={project.image} 
                        alt={project.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className={`p-4 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                      <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                        {project.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {project.industry}
                      </p>
                      <p className="text-sm text-foreground mb-3">
                        {project.service}
                      </p>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-1">
                        {project.tags.services.slice(0, viewMode === 'list' ? 3 : 2).map((tag, tagIndex) => (
                          <Badge 
                            key={tagIndex} 
                            variant="secondary" 
                            className="text-xs"
                          >
                            {formatTagName(tag)}
                          </Badge>
                        ))}
                        {project.tags.industries.slice(0, 1).map((tag, tagIndex) => (
                          <Badge 
                            key={`ind-${tagIndex}`} 
                            variant="outline" 
                            className="text-xs"
                          >
                            {formatTagName(tag)}
                          </Badge>
                        ))}
                        {(project.tags.services.length + project.tags.industries.length) > (viewMode === 'list' ? 4 : 3) && (
                          <Badge variant="outline" className="text-xs">
                            +{(project.tags.services.length + project.tags.industries.length) - (viewMode === 'list' ? 4 : 3)}
                          </Badge>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <DynamicH2 
            type="secondary"
            index={2}
            fallback="¿Quieres ser nuestro próximo caso de éxito?"
            className="text-3xl lg:text-4xl font-bold mb-4"
          />
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Cada proyecto es único, pero el resultado es siempre el mismo: 
            crecimiento medible y transformación digital real.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/es/contacto">
                Iniciar mi Proyecto
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" asChild>
              <Link to="/es/solicitar-consulta">
                Solicitar Consulta Gratuita
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CasosExito;