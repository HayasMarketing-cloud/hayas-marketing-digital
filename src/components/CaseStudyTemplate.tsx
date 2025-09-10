import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from '@/components/ui/breadcrumb';
import Seo from '@/components/Seo';
import { CheckCircle, ExternalLink, LucideIcon } from 'lucide-react';

interface Solution {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface Testimonial {
  quote: string;
  author: string;
  position: string;
  company: string;
}

interface CaseStudyProps {
  // SEO and Meta
  pageTitle: string;
  pageDescription: string;
  canonical: string;
  ogImage: string;
  structuredData: any;

  // Header content
  companyName: string;
  subtitle: string;
  badges: string[];
  websiteUrl: string;
  featuredImage: string;
  featuredImageAlt: string;

  // Content sections
  aboutCompany: string;
  challenge: string;
  solutions: Solution[];
  results: string[];
  testimonial?: Testimonial;
  learnings?: string;

  // CTA
  ctaTitle: string;
  ctaDescription: string;
  ctaButtonText: string;
  ctaButtonLink?: string;
}

const CaseStudyTemplate: React.FC<CaseStudyProps> = ({
  pageTitle,
  pageDescription,
  canonical,
  ogImage,
  structuredData,
  companyName,
  subtitle,
  badges,
  websiteUrl,
  featuredImage,
  featuredImageAlt,
  aboutCompany,
  challenge,
  solutions,
  results,
  testimonial,
  learnings,
  ctaTitle,
  ctaDescription,
  ctaButtonText,
  ctaButtonLink = "/agendar-reunion"
}) => {
  return (
    <div className="min-h-screen bg-background">
      <Seo
        title={pageTitle}
        description={pageDescription}
        canonical={canonical}
        ogImage={ogImage}
        structuredData={structuredData}
      />
      <Navigation />
      
      <main>
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
                  <BreadcrumbLink asChild>
                    <Link to="/casos-exito">Casos de Éxito</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>{companyName}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </section>

        {/* Hero Section */}
        <header className="py-14 md:py-20 bg-gradient-to-br from-hayas-50 to-turquesa-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex gap-2 mb-6">
                  {badges.map((badge, index) => (
                    <Badge 
                      key={index} 
                      variant={index === 0 ? "secondary" : "outline"}
                    >
                      {badge}
                    </Badge>
                  ))}
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold mb-6">{companyName}</h1>
                <p className="text-xl text-muted-foreground mb-8">
                  {subtitle}
                </p>
                <div className="flex gap-4">
                  <Button asChild>
                    <a 
                      href={websiteUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="gap-2"
                    >
                      Visitar Web
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <img 
                  src={featuredImage} 
                  alt={featuredImageAlt}
                  className="relative z-10 w-full h-[400px] md:h-[400px] object-cover rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            
            {/* Sobre la empresa */}
            <section className="mb-16">
              <h2 className="text-2xl font-semibold mb-4">Sobre {companyName}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {aboutCompany}
              </p>
            </section>

            {/* El Reto */}
            <section className="mb-16">
              <h2 className="text-2xl font-semibold mb-4">El Reto</h2>
              <p className="text-muted-foreground leading-relaxed">
                {challenge}
              </p>
            </section>

            {/* Solución aplicada */}
            <section className="mb-16">
              <h2 className="text-2xl font-semibold mb-6">Solución aplicada</h2>
              <div className={`grid gap-6 ${
                solutions.length === 1 ? 'md:grid-cols-1' :
                solutions.length === 2 ? 'md:grid-cols-2' : 
                solutions.length === 3 ? 'md:grid-cols-3' : 
                solutions.length === 6 ? 'md:grid-cols-2 lg:grid-cols-3' :
                'md:grid-cols-2 lg:grid-cols-4'
              }`}>
                {solutions.map(({ icon: Icon, title, description }, index) => (
                  <Card key={index} className="h-full">
                    <CardHeader>
                      <div className="w-10 h-10 rounded-md bg-primary/10 text-primary flex items-center justify-center mb-3">
                        <Icon className="w-5 h-5" />
                      </div>
                      <CardTitle className="text-lg">{title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Resultados obtenidos */}
            {results.length > 0 && (
              <section className="mb-16">
                <h2 className="text-2xl font-semibold mb-4">Resultados obtenidos</h2>
                <div className="grid gap-4">
                  {results.map((resultado, index) => (
                    <div key={index} className="flex items-center gap-3 p-4 bg-muted/30 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span className="font-medium">{resultado}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Testimonial */}
            {testimonial && (
              <section className="mb-16">
                <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-8 md:p-12">
                  <div className="text-center">
                    <div className="mb-6">
                      <svg className="w-12 h-12 text-primary/30 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                      </svg>
                    </div>
                    <blockquote className="text-lg md:text-xl font-medium text-gray-900 mb-6 leading-relaxed italic">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="border-t border-border/20 pt-6">
                      <p className="font-semibold text-gray-900">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                      <p className="text-sm text-muted-foreground font-medium">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* Lo que aprendimos */}
            {learnings && (
              <section className="mb-16">
                <h2 className="text-2xl font-semibold mb-4">Lo que aprendimos</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {learnings}
                </p>
              </section>
            )}

            {/* CTA */}
            <section className="text-center py-12 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">{ctaTitle}</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                {ctaDescription}
              </p>
              <Button asChild size="lg">
                <Link to={ctaButtonLink}>{ctaButtonText}</Link>
              </Button>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CaseStudyTemplate;