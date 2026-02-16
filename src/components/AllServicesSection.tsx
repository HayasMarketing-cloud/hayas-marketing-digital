import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { useServices, PillarKey } from '@/hooks/useServices';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Grid, List } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';
import GoogleGIcon from '@/components/icons/GoogleGIcon';

const AllServicesSection = () => {
  const { t } = useTranslation();
  const { services, servicesByPillar } = useServices(GoogleGIcon);
  const [active, setActive] = useState<'all' | PillarKey>('all');
  const [expanded, setExpanded] = useState(false);
  const [view, setView] = useState<'grid' | 'list'>('grid');
  
  const filtered = active === 'all' ? services : servicesByPillar[active] ?? [];

  // Normaliza strings para búsquedas por slug/título (quita tildes y minúsculas)
  const normalize = (s: string) => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  // Palabras clave para los 6 servicios iniciales (ES y EN)
  const preferredMatchers = [
    'diseno-web', 'web-design',
    'implantacion-crm', 'crm-implementation',
    'creacion-marca', 'brand-creation',
    'asistente-ia', 'ai-assistant',
    'seo', 'seo-positioning',
    'localizacion', 'localization'
  ];
  const isPreferred = (title: string, href: string) => {
    const t = normalize(title);
    const h = normalize(href);
    return preferredMatchers.some(m => h.includes(m) || t.includes(m));
  };

  const pillarTitles = {
    impulsa: t('servicesSection.pillars.impulsa'),
    conecta: t('servicesSection.pillars.conecta'),
    activa: t('servicesSection.pillars.activa')
  };

  return (
    <section id="todos-servicios" className="py-8 md:py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="title-section">{t('servicesSection.title')}</h2>
          <p className="text-description max-w-3xl mx-auto">
            {t('servicesSection.subtitle')}
          </p>
        </div>

        {/* Filtros por pilar */}
        <div className="mb-6 flex flex-wrap items-center justify-center gap-3">
          <Button size="sm" variant={active === 'all' ? 'default' : 'outline'} aria-pressed={active === 'all'} onClick={() => setActive('all')}>
            {t('servicesSection.all')}
          </Button>
          <Button size="sm" variant={active === 'impulsa' ? 'default' : 'outline'} aria-pressed={active === 'impulsa'} onClick={() => setActive('impulsa')}>
            {pillarTitles.impulsa}
          </Button>
          <Button size="sm" variant={active === 'conecta' ? 'default' : 'outline'} aria-pressed={active === 'conecta'} onClick={() => setActive('conecta')}>
            {pillarTitles.conecta}
          </Button>
          <Button size="sm" variant={active === 'activa' ? 'default' : 'outline'} aria-pressed={active === 'activa'} onClick={() => setActive('activa')}>
            {pillarTitles.activa}
          </Button>
        </div>

        {/* Selector de vista */}
        <div className="mb-8 flex items-center justify-center gap-2" role="group" aria-label={t('servicesSection.viewSelector')}>
          <Button size="sm" variant={view === 'grid' ? 'default' : 'outline'} aria-pressed={view === 'grid'} onClick={() => setView('grid')} aria-label={t('servicesSection.gridView')}>
            <Grid className="h-4 w-4" />
            <span className="sr-only">{t('servicesSection.gridView')}</span>
          </Button>
          <Button size="sm" variant={view === 'list' ? 'default' : 'outline'} aria-pressed={view === 'list'} onClick={() => setView('list')} aria-label={t('servicesSection.listView')}>
            <List className="h-4 w-4" />
            <span className="sr-only">{t('servicesSection.listView')}</span>
          </Button>
        </div>

        {/* Lista/Cuadrícula de servicios */}
        <div className={`grid ${view === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'grid-cols-1 gap-6'} animate-fade-in`}>
          {filtered.map((service, idx) => {
            const initiallyVisible = idx < 6;
            const visible = expanded ? true : initiallyVisible;
            const isFeatured = 'featured' in service && (service as any).featured;
            return (
              <Card key={service.id} className={`${visible ? '' : 'hidden'} ${isFeatured ? 'md:col-span-2 lg:col-span-3 border-2 border-impulsa/30 bg-impulsa/5' : 'border-none'} shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full`}>
                <CardHeader className={view === 'list' ? 'pb-2' : 'pb-2'}>
                  <div className="flex items-center gap-3 mb-4">
                    <service.Icon className="h-10 w-10 text-hayas-primary" />
                    {isFeatured && (
                      <span className="inline-flex items-center rounded-full bg-impulsa/10 px-3 py-1 text-xs font-semibold text-impulsa border border-impulsa/20">
                        ✨ Nuevo
                      </span>
                    )}
                  </div>
                  <CardTitle className={isFeatured ? 'text-xl md:text-2xl font-bold' : 'title-card'}>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className={isFeatured ? 'text-gray-600 text-base md:text-lg' : view === 'grid' ? 'text-gray-600 text-base' : 'text-gray-600 text-lg'}>
                    {service.description}
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Link to={service.href} aria-label={`${t('servicesSection.viewService')} ${service.title}`}>
                    <Button size={isFeatured ? 'default' : 'sm'} variant={isFeatured ? 'impulsa' : 'default'}>{t('servicesSection.viewService')} {service.title}</Button>
                  </Link>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        {/* Botón expandir/contraer */}
        <div className="mt-10 text-center">
          <Button size="sm" variant="outline" aria-expanded={expanded} onClick={() => setExpanded(v => !v)}>
            {expanded ? t('servicesSection.viewLess') : t('servicesSection.viewAll')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AllServicesSection;
