import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import EnhancedSEO from '@/components/EnhancedSEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Search, LayoutGrid, DollarSign, Brain, Eye, PenTool } from 'lucide-react';
import { allServices, pillarMeta, PillarKey } from '@/data/services';
import { generateItemListSchema } from '@/data/seoData';
import DynamicH1 from '@/components/DynamicH1';
import { useLanguage } from '@/contexts/LanguageContext';

const pillarOrder: PillarKey[] = ['revenue', 'visibility', 'content', 'intelligence'];
const pillarIcons: Record<PillarKey, React.ElementType> = {
  revenue: DollarSign,
  intelligence: Brain,
  visibility: Eye,
  content: PenTool,
};

const Servicios: React.FC = () => {
  const { isEnglish } = useLanguage();
  const [selectedPillar, setSelectedPillar] = useState<PillarKey | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const content = {
    heroTitle: isEnglish ? 'Digital Marketing' : 'Marketing Digital',
    heroTitleHighlight: isEnglish ? 'Services' : 'Servicios de',
    heroSubtitle: isEnglish 
      ? 'Capabilities activated through SENSE across 4 strategic pillars: Revenue, Visibility, Content and Intelligence.'
      : 'Capacidades activadas a través de SENSE en 4 pilares estratégicos: Revenue, Visibility, Content e Intelligence.',
    searchPlaceholder: isEnglish ? 'Search services...' : 'Buscar servicios...',
    filterAll: isEnglish ? 'All' : 'Todos',
    noResults: isEnglish 
      ? 'No services found matching your search.'
      : 'No se encontraron servicios que coincidan con tu búsqueda.',
    viewService: isEnglish ? 'View service' : 'Ver servicio',
    ctaTitle: isEnglish ? "Not sure which service you need?" : '¿No sabes qué servicio necesitas?',
    ctaSubtitle: isEnglish 
      ? 'Schedule a free consultation and we will help you design the perfect strategy for your business.'
      : 'Agenda una consulta gratuita y te ayudaremos a diseñar la estrategia perfecta para tu negocio.',
    ctaButton: isEnglish ? 'Request free consultation' : 'Solicitar consultoría gratuita',
    ctaSecondary: isEnglish ? 'View success stories' : 'Ver casos de éxito',
    consultaLink: isEnglish ? '/en/request-consultation' : '/es/solicitar-consulta',
    casosLink: isEnglish ? '/en/success-stories' : '/es/casos-exito',
  };

  // Generate ItemList schema for all services
  const itemListSchema = generateItemListSchema({
    items: allServices.map(s => ({
      name: s.title,
      url: `https://hayasmarketing.com${s.href}`,
      description: s.description
    })),
    listName: isEnglish 
      ? 'Digital Marketing Services - Hayas Marketing'
      : 'Servicios de Marketing Digital - Hayas Marketing',
    listDescription: isEnglish
      ? 'Complete service catalog: branding, web, SEO, advertising, CRM, AI and automation to grow your business.'
      : 'Catálogo completo de servicios: branding, web, SEO, publicidad, CRM, IA y automatización para hacer crecer tu negocio.'
  });

  // Filter services
  const filteredServices = allServices.filter(service => {
    const matchesPillar = selectedPillar === 'all' || service.pillar === selectedPillar;
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          service.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesPillar && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white">
      <EnhancedSEO />
      <Navigation />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <DynamicH1 
                fallback={isEnglish ? "Digital Marketing Services" : "Servicios de Marketing Digital"}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              >
                {content.heroTitleHighlight} <span className="text-gradient-primary">{content.heroTitle}</span>
              </DynamicH1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                {content.heroSubtitle}
              </p>
            </div>
          </div>
        </section>

        {/* Filters Section */}
        <section className="py-10 bg-muted/30 border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center gap-6">
              {/* Search */}
              <div className="relative w-full max-w-md">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder={content.searchPlaceholder}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-border rounded-full bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary shadow-sm transition-all"
                />
              </div>

              {/* Pillar filters */}
              <div className="flex gap-3 flex-wrap justify-center">
                <Button
                  variant={selectedPillar === 'all' ? 'default' : 'outline'}
                  onClick={() => setSelectedPillar('all')}
                  className="rounded-full px-6"
                >
                  <LayoutGrid className="h-4 w-4" />
                  {content.filterAll}
                </Button>
                {pillarOrder.map((key) => {
                  const Icon = pillarIcons[key];
                  return (
                    <Button
                      key={key}
                      variant={selectedPillar === key ? 'default' : 'outline'}
                      onClick={() => setSelectedPillar(key)}
                      className="rounded-full px-6"
                    >
                      <Icon className="h-4 w-4" />
                      {pillarMeta[key].title}
                    </Button>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            {filteredServices.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-xl text-muted-foreground">
                  {content.noResults}
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredServices.map((service) => (
                  <Card 
                    key={service.id} 
                    className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full group"
                  >
                    <CardHeader className="text-center pb-4">
                      <div className="mb-4 mx-auto p-4 rounded-full w-fit bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                        {service.icon}
                      </div>
                      <div className="flex justify-center mb-2">
                        <Badge variant="outline" className="text-xs px-3 py-1">
                          {pillarMeta[service.pillar].title}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl font-bold">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-muted-foreground leading-relaxed text-center mb-4">
                        {service.description}
                      </p>
                      <div className="text-center">
                        <Button variant="outline" size="sm" asChild className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                          <Link to={service.href}>
                            {content.viewService}
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-primary/10 via-white to-accent/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold font-dm-sans mb-6">
                {content.ctaTitle}
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                {content.ctaSubtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to={content.consultaLink}>
                    {content.ctaButton}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to={content.casosLink}>
                    {content.ctaSecondary}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Servicios;
