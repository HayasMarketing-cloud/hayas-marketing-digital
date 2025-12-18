import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Seo from '@/components/Seo';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Search, LayoutGrid, Rocket, Users, TrendingUp } from 'lucide-react';
import { allServices, pillarMeta, PillarKey } from '@/data/services';
import { generateItemListSchema } from '@/data/seoData';
import DynamicH1 from '@/components/DynamicH1';

const Servicios: React.FC = () => {
  const [selectedPillar, setSelectedPillar] = useState<PillarKey | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Generate ItemList schema for all services
  const itemListSchema = generateItemListSchema({
    items: allServices.map(s => ({
      name: s.title,
      url: `https://hayasmarketing.com${s.href}`,
      description: s.description
    })),
    listName: 'Servicios de Marketing Digital - Hayas Marketing',
    listDescription: 'Catálogo completo de servicios: branding, web, SEO, publicidad, CRM, IA y automatización para hacer crecer tu negocio.'
  });

  // Filter services
  const filteredServices = allServices.filter(service => {
    const matchesPillar = selectedPillar === 'all' || service.pillar === selectedPillar;
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          service.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesPillar && matchesSearch;
  });

  const getPillarColor = (pillar: PillarKey) => {
    const colors = {
      impulsa: 'impulsa',
      conecta: 'conecta',
      activa: 'activa'
    };
    return colors[pillar];
  };

  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="Servicios de Marketing Digital | Hayas Marketing"
        description="Descubre nuestros servicios de marketing digital: branding, diseño web, SEO, publicidad online, CRM, automatización e inteligencia artificial para impulsar tu negocio."
        canonical="/es/servicios"
        structuredData={[itemListSchema]}
        keywords={["servicios marketing digital", "agencia marketing", "branding", "diseño web", "SEO", "publicidad online", "CRM", "automatización", "inteligencia artificial"]}
      />
      <Navigation />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <DynamicH1 
                fallback="Servicios de Marketing Digital"
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              >
                Servicios de <span className="text-gradient-primary">Marketing Digital</span>
              </DynamicH1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                Soluciones integrales para impulsar tu marca, conectar con tus clientes y activar tus ventas. 
                Desde branding y diseño web hasta automatización con IA.
              </p>
            </div>
          </div>
        </section>

        {/* Filters Section */}
        <section className="py-10 bg-muted/30 border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center gap-6">
              {/* Search - Centered */}
              <div className="relative w-full max-w-md">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Buscar servicios..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-border rounded-full bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary shadow-sm transition-all"
                />
              </div>

              {/* Pillar filters - Centered */}
              <div className="flex gap-3 flex-wrap justify-center">
                <Button
                  variant={selectedPillar === 'all' ? 'default' : 'outline'}
                  onClick={() => setSelectedPillar('all')}
                  className="rounded-full px-6"
                >
                  <LayoutGrid className="h-4 w-4" />
                  Todos
                </Button>
                <Button
                  variant={selectedPillar === 'impulsa' ? 'impulsa' : 'impulsa-outline'}
                  onClick={() => setSelectedPillar('impulsa')}
                  className="rounded-full px-6"
                >
                  <Rocket className="h-4 w-4" />
                  Impulsa tu marca
                </Button>
                <Button
                  variant={selectedPillar === 'conecta' ? 'conecta' : 'conecta-outline'}
                  onClick={() => setSelectedPillar('conecta')}
                  className="rounded-full px-6"
                >
                  <Users className="h-4 w-4" />
                  Conecta con tus clientes
                </Button>
                <Button
                  variant={selectedPillar === 'activa' ? 'activa' : 'activa-outline'}
                  onClick={() => setSelectedPillar('activa')}
                  className="rounded-full px-6"
                >
                  <TrendingUp className="h-4 w-4" />
                  Activa tus ventas
                </Button>
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
                  No se encontraron servicios que coincidan con tu búsqueda.
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
                      <div className={`mb-4 mx-auto p-4 rounded-full w-fit bg-${getPillarColor(service.pillar)}-100 group-hover:bg-${getPillarColor(service.pillar)}-200 transition-colors duration-300`}>
                        {service.icon}
                      </div>
                      <Badge variant="outline" className={`mb-2 text-${getPillarColor(service.pillar)}-600 border-${getPillarColor(service.pillar)}-200`}>
                        {pillarMeta[service.pillar].title}
                      </Badge>
                      <CardTitle className="text-xl font-bold">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-gray-600 leading-relaxed text-center mb-4">
                        {service.description}
                      </p>
                      <div className="text-center">
                        <Button variant="outline" size="sm" asChild className="group-hover:bg-primary group-hover:text-white transition-colors">
                          <Link to={service.href}>
                            Ver servicio
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                ¿No sabes qué servicio necesitas?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Agenda una consulta gratuita y te ayudaremos a diseñar la estrategia perfecta para tu negocio.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/es/solicitar-consulta">
                    Solicitar consultoría gratuita
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/es/casos-exito">
                    Ver casos de éxito
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
