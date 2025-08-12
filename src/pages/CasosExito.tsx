import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Filter, Grid, List } from 'lucide-react';
import { ALL_SUCCESS_CASES, SuccessCase } from '@/components/SuccessCasesSection';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from '@/components/ui/breadcrumb';

const CasosExito = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('todos');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Obtener todas las etiquetas únicas para los filtros
  const allTags = Array.from(
    new Set(ALL_SUCCESS_CASES.flatMap(case_ => case_.tags))
  ).sort();

  // Filtrar casos según la etiqueta seleccionada
  const filteredCases = selectedFilter === 'todos' 
    ? ALL_SUCCESS_CASES
    : ALL_SUCCESS_CASES.filter(case_ => case_.tags.includes(selectedFilter));

  // Categorizar etiquetas para mejor organización
  const tagCategories = {
    'Soluciones': ['branding', 'creacion-marca', 'diseño-web', 'estrategia-digital', 'marketing-digital'],
    'Servicios': ['naming', 'identidad-visual', 'posicionamiento', 'automatizacion', 'contenidos', 'crm', 'alojamiento-mantenimiento', 'hubspot'],
    'Sectores': ['medicina', 'salud', 'alimentacion', 'educacion', 'deporte', 'desarrollo-personal', 'traduccion', 'transporte', 'logistica', 'ecommerce', 'higiene', 'b2b']
  };

  const getTagCategory = (tag: string) => {
    for (const [category, tags] of Object.entries(tagCategories)) {
      if (tags.includes(tag)) return category;
    }
    return 'Otros';
  };

  const formatTagName = (tag: string) => {
    if (tag === 'diseño-web') return 'Diseño Web';
    return tag.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());
  };

  return (
    <div className="min-h-screen bg-background">
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
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Casos de <span className="text-primary">Éxito</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Descubre cómo hemos transformado negocios reales con nuestras soluciones integrales 
              de marketing, branding y tecnología. Cada proyecto es único, cada resultado es medible.
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <Badge variant="secondary" className="text-sm">
                {ALL_SUCCESS_CASES.length} Proyectos Completados
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
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6 items-start justify-center">
              {/* Filtros */}
              <div className="flex flex-wrap gap-3">
                <Button
                  variant={selectedFilter === 'todos' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedFilter('todos')}
                >
                  <Filter className="h-4 w-4 mr-2" />
                  Todos ({ALL_SUCCESS_CASES.length})
                </Button>
                {Object.entries(tagCategories).map(([category, tags]) => (
                  <div key={category} className="flex flex-wrap gap-2">
                    {tags.filter(tag => allTags.includes(tag)).map(tag => (
                      <Button
                        key={tag}
                        variant={selectedFilter === tag ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setSelectedFilter(tag)}
                      >
                        {formatTagName(tag)} ({ALL_SUCCESS_CASES.filter(case_ => case_.tags.includes(tag)).length})
                      </Button>
                    ))}
                  </div>
                ))}
              </div>

              {/* Controles de vista */}
              <div className="flex items-center gap-2">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Resultados del filtro */}
            <div className="mt-4 text-sm text-muted-foreground">
              {selectedFilter === 'todos' 
                ? `Mostrando todos los ${filteredCases.length} casos de éxito`
                : `Mostrando ${filteredCases.length} casos de éxito para "${formatTagName(selectedFilter)}"`
              }
            </div>
          </div>
        </div>
      </section>

      {/* Cases Grid/List */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {filteredCases.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground mb-4">
                No se encontraron casos de éxito para el filtro seleccionado.
              </p>
              <Button onClick={() => setSelectedFilter('todos')}>
                Ver todos los casos
              </Button>
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
                        {project.tags.slice(0, viewMode === 'list' ? 6 : 3).map((tag, tagIndex) => (
                          <Badge 
                            key={tagIndex} 
                            variant="secondary" 
                            className="text-xs"
                          >
                            {formatTagName(tag)}
                          </Badge>
                        ))}
                        {project.tags.length > (viewMode === 'list' ? 6 : 3) && (
                          <Badge variant="outline" className="text-xs">
                            +{project.tags.length - (viewMode === 'list' ? 6 : 3)}
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
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            ¿Quieres ser nuestro próximo caso de éxito?
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Cada proyecto es único, pero el resultado es siempre el mismo: 
            crecimiento medible y transformación digital real.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contacto">
                Iniciar mi Proyecto
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" asChild>
              <Link to="/solicitar-consulta">
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