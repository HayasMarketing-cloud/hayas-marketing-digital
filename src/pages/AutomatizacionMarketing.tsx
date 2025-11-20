import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import EnhancedSEO from '@/components/EnhancedSEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Link } from 'react-router-dom';
import ServiceContactSection from '@/components/ServiceContactSection';
import { DynamicH1 } from '@/components/DynamicH1';
import { Bot, Zap, Mail, MessageSquare, Calendar, BarChart3, Workflow, ArrowRight } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';
import { useLanguageNavigation } from '@/hooks/useLanguageNavigation';

const AutomatizacionMarketing: React.FC = () => {
  const { t } = useTranslation();
  const { getLocalizedPath } = useLanguageNavigation();
  
  const page = t('pages.marketingAutomation') as any;
  return (
    <>
      <EnhancedSEO />
      <Navigation />

      <main className="pt-36">
        <div className="container mx-auto px-4">
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to={getLocalizedPath('/')}>{page.breadcrumbs.home}</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to={getLocalizedPath('/soluciones/activa-tus-ventas')}>{page.breadcrumbs.solution}</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{page.breadcrumbs.current}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* Hero Section */}
          <section className="text-center mb-12">
            <DynamicH1 
              fallback={page.hero.title}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            />
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-4xl mx-auto">
              {page.hero.subtitle}
            </p>
            <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
              <Button asChild size="lg" className="text-base">
                <Link to={getLocalizedPath('/contacto')}>{page.hero.cta1}</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-base">
                <Link to={getLocalizedPath('/nosotros')}>{page.hero.cta2}</Link>
              </Button>
            </div>
          </section>

          {/* Value Proposition */}
          <section className="py-16 bg-gradient-to-br from-background to-secondary/20 rounded-2xl mb-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                {page.valueProposition.title} <span className="text-gradient-primary">{page.valueProposition.titleHighlight}</span>
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="border-primary/20 hover:border-primary/40 transition-all">
                  <CardHeader>
                    <Bot className="w-12 h-12 text-primary mb-4" />
                    <CardTitle>{page.valueProposition.cards[0].title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {page.valueProposition.cards[0].description}
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-primary/20 hover:border-primary/40 transition-all">
                  <CardHeader>
                    <Zap className="w-12 h-12 text-primary mb-4" />
                    <CardTitle>{page.valueProposition.cards[1].title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {page.valueProposition.cards[1].description}
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-primary/20 hover:border-primary/40 transition-all">
                  <CardHeader>
                    <BarChart3 className="w-12 h-12 text-primary mb-4" />
                    <CardTitle>{page.valueProposition.cards[2].title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {page.valueProposition.cards[2].description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Detailed Service */}
          <section className="py-16 mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
                {page.detailedService.title} <span className="text-gradient-primary">{page.detailedService.titleHighlight}</span>
              </h2>
              <p className="text-lg text-muted-foreground text-center mb-12 leading-relaxed">
                {page.detailedService.subtitle}
              </p>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Workflow className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{page.detailedService.features[0].title}</h3>
                    <p className="text-muted-foreground">
                      {page.detailedService.features[0].description}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{page.detailedService.features[1].title}</h3>
                    <p className="text-muted-foreground">
                      {page.detailedService.features[1].description}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <MessageSquare className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{page.detailedService.features[2].title}</h3>
                    <p className="text-muted-foreground">
                      {page.detailedService.features[2].description}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <BarChart3 className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{page.detailedService.features[3].title}</h3>
                    <p className="text-muted-foreground">
                      {page.detailedService.features[3].description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Includes Section */}
          <section className="py-16 bg-secondary/30 rounded-2xl mb-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">
                {page.includes.title} <span className="text-gradient-primary">{page.includes.titleHighlight}</span>?
              </h2>
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {page.includes.items.map((item: string, index: number) => (
                  <div key={index} className="flex items-start gap-3 bg-background p-4 rounded-lg">
                    <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <p className="text-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-16 mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                {page.benefits.title} <span className="text-gradient-primary">{page.benefits.titleHighlight}</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {page.benefits.items.map((benefit: string, index: number) => (
                  <Card key={index} className="border-primary/10">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3">
                        <Zap className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                        <p className="text-foreground font-medium">{benefit}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-gradient-to-br from-primary/10 to-secondary/20 rounded-2xl text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {page.cta.title}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              {page.cta.subtitle}
            </p>
            <Button asChild size="lg" className="text-base">
              <Link to={getLocalizedPath('/contacto')}>{page.cta.button}</Link>
            </Button>
          </section>

          <ServiceContactSection />
        </div>
      </main>

      <Footer />
    </>
  );
};

export default AutomatizacionMarketing;
