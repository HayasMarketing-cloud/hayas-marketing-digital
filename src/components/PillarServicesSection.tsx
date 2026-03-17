import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { servicesByPillar, PillarKey } from '@/data/services';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Grid, List } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface PillarServicesSectionProps {
  pillar: PillarKey;
  title?: string;
  description?: string;
  useOptimizedH2?: boolean;
}

const pillarH2: Record<PillarKey, { es: string; en: string }> = {
  revenue: { es: 'CRM, automatización y gestión comercial', en: 'CRM, automation and sales management' },
  visibility: { es: 'Posicionamiento, publicidad y presencia digital', en: 'Positioning, advertising and digital presence' },
  content: { es: 'Contenidos, branding y diseño web', en: 'Content, branding and web design' },
  intelligence: { es: 'Analítica, IA y consultoría estratégica', en: 'Analytics, AI and strategic consulting' },
};

const PillarServicesSection: React.FC<PillarServicesSectionProps> = ({
  pillar,
  title,
  description,
  useOptimizedH2 = false
}) => {
  const [expanded, setExpanded] = useState(false);
  const [view, setView] = useState<'grid' | 'list'>('grid');
  const { isEnglish } = useLanguage();

  const resolvedTitle = title ?? (isEnglish ? 'Our Services' : 'Nuestros Servicios');
  const resolvedDescription = description ?? (isEnglish 
    ? 'Discover all professional services in this pillar to grow your business strategically and sustainably.'
    : 'Descubre todos los servicios profesionales de este pilar para hacer crecer tu negocio de forma estratégica y sostenible.');
  
  const services = servicesByPillar[pillar] ?? [];
  
  return (
    <section id="nuestros-servicios" className="py-8 md:py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="title-section">
            {useOptimizedH2 
              ? (isEnglish ? pillarH2[pillar].en : pillarH2[pillar].es) 
              : resolvedTitle}
          </h2>
          <p className="text-description max-w-3xl mx-auto">
            {resolvedDescription}
          </p>
        </div>

        {/* Selector de vista */}
        <div className="mb-8 flex items-center justify-center gap-2" role="group" aria-label={isEnglish ? "View selector" : "Selector de vista"}>
          <Button 
            size="sm" 
            variant={view === 'grid' ? 'default' : 'outline'} 
            aria-pressed={view === 'grid'} 
            onClick={() => setView('grid')} 
            aria-label={isEnglish ? "Grid view" : "Vista de cuadrícula"}
          >
            <Grid className="h-4 w-4" />
            <span className="sr-only">{isEnglish ? "Grid" : "Cuadrícula"}</span>
          </Button>
          <Button 
            size="sm" 
            variant={view === 'list' ? 'default' : 'outline'} 
            aria-pressed={view === 'list'} 
            onClick={() => setView('list')} 
            aria-label={isEnglish ? "List view" : "Vista de lista"}
          >
            <List className="h-4 w-4" />
            <span className="sr-only">{isEnglish ? "List" : "Lista"}</span>
          </Button>
        </div>

        {/* Lista/Cuadrícula de servicios */}
        <div className={`grid ${view === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'grid-cols-1 gap-6'} animate-fade-in`}>
          {services.map((service, idx) => {
            const initiallyVisible = idx < 6;
            const visible = expanded ? true : initiallyVisible;
            
            return (
              <Card 
                key={service.id} 
                className={`${visible ? '' : 'hidden'} border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full`}
              >
                <CardHeader className="pb-2">
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle className="title-card">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className={view === 'grid' ? 'text-muted-foreground text-base' : 'text-muted-foreground text-lg'}>
                    {service.description}
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Link to={service.href} aria-label={`${isEnglish ? 'View' : 'Ver'} ${service.title}`}>
                    <Button size="sm">{isEnglish ? 'View' : 'Ver'} {service.title}</Button>
                  </Link>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        {/* Botón expandir/contraer */}
        {services.length > 6 && (
          <div className="mt-10 text-center">
            <Button 
              size="sm" 
              variant="outline" 
              aria-expanded={expanded} 
              onClick={() => setExpanded(v => !v)}
            >
              {expanded ? (isEnglish ? 'Show less' : 'Ver menos') : (isEnglish ? 'View all services' : 'Ver todos los servicios')}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default PillarServicesSection;
