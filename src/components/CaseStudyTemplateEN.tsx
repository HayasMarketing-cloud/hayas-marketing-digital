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
import EnhancedSEO from '@/components/EnhancedSEO';
import { CheckCircle, ExternalLink, LucideIcon } from 'lucide-react';
import { useLocalizedRoutes } from '@/hooks/useLocalizedRoutes';

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

const CaseStudyTemplateEN: React.FC<CaseStudyProps> = ({
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
  ctaButtonLink
}) => {
  const { getRoute } = useLocalizedRoutes();
  const defaultCtaLink = ctaButtonLink || getRoute('scheduleMeeting');
  
  return (
    <div className="min-h-screen bg-background">
      <EnhancedSEO
        customSEO={{
          title: pageTitle,
          description: pageDescription,
          canonical: canonical,
          ogImage: ogImage,
          additionalSchema: structuredData
        }}
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
                    <Link to={getRoute('home')}>Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to={getRoute('caseStudies')}>Case Studies</Link>
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
                <h1 className="text-4xl lg:text-5xl font-bold font-dm-sans mb-6">{companyName}</h1>
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
                      Visit Website
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
            
            {/* About the company */}
            <section className="mb-16">
              <h2 className="text-2xl font-semibold font-dm-sans mb-4">About {companyName}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {aboutCompany}
              </p>
            </section>

            {/* The Challenge */}
            <section className="mb-16">
              <h2 className="text-2xl font-semibold font-dm-sans mb-4">The Challenge</h2>
              <p className="text-muted-foreground leading-relaxed">
                {challenge}
              </p>
            </section>

            {/* Solution Applied */}
            <section className="mb-16">
              <h2 className="text-2xl font-semibold font-dm-sans mb-6">Solution Applied</h2>
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

            {/* Results Achieved */}
            {results.length > 0 && (
              <section className="mb-16">
                <h2 className="text-2xl font-semibold font-dm-sans mb-4">Results Achieved</h2>
                <div className="grid gap-4">
                  {results.map((result, index) => (
                    <div key={index} className="flex items-center gap-3 p-4 bg-muted/30 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span className="font-medium">{result}</span>
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

            {/* What We Learned */}
            {learnings && (
              <section className="mb-16">
                <h2 className="text-2xl font-semibold font-dm-sans mb-4">What We Learned</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {learnings}
                </p>
              </section>
            )}

            {/* Strategic Internal Linking */}
            <section className="mb-16">
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8">
                <h3 className="text-xl font-semibold font-dm-sans mb-6 text-center">
                  Related Services
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <Link 
                    to="/en/services/crm-implementation"
                    className="flex items-center gap-3 p-4 bg-white rounded-lg hover:shadow-md transition-all duration-200 group"
                  >
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <div>
                      <div className="font-medium text-sm group-hover:text-primary transition-colors">
                        CRM Implementation
                      </div>
                      <div className="text-xs text-primary font-medium">Popular</div>
                    </div>
                  </Link>
                  
                  <Link 
                    to="/en/services/sales-process-automation"
                    className="flex items-center gap-3 p-4 bg-white rounded-lg hover:shadow-md transition-all duration-200 group"
                  >
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <div>
                      <div className="font-medium text-sm group-hover:text-primary transition-colors">
                        Sales Automation
                      </div>
                      <div className="text-xs text-primary font-medium">Strategic</div>
                    </div>
                  </Link>
                  
                  <Link 
                    to="/en/services/strategic-consulting"
                    className="flex items-center gap-3 p-4 bg-white rounded-lg hover:shadow-md transition-all duration-200 group"
                  >
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <div>
                      <div className="font-medium text-sm group-hover:text-primary transition-colors">
                        Strategic Consulting
                      </div>
                      <div className="text-xs text-primary font-medium">Premium</div>
                    </div>
                  </Link>
                  
                  <Link 
                    to="/en/services/lead-generation-clients"
                    className="flex items-center gap-3 p-4 bg-white rounded-lg hover:shadow-md transition-all duration-200 group"
                  >
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <div>
                      <div className="font-medium text-sm group-hover:text-primary transition-colors">
                        Lead Generation
                      </div>
                      <div className="text-xs text-primary font-medium">ROI</div>
                    </div>
                  </Link>
                </div>
                
                <div className="text-center mt-6">
                  <p className="text-sm text-muted-foreground mb-4">
                    Discover how these solutions can transform your business
                  </p>
                  <div className="flex flex-wrap justify-center gap-2">
                    <Button asChild variant="outline" size="sm">
                      <Link to="/en/solutions/connect-with-customers">
                        View Complete Solution
                      </Link>
                    </Button>
                    <Button asChild variant="ghost" size="sm">
                      <Link to={getRoute('caseStudies')}>
                        More Case Studies
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA with Internal Links */}
            <section className="text-center py-12 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl">
              <h3 className="text-2xl font-bold font-dm-sans mb-4">{ctaTitle}</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                {ctaDescription}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button asChild size="lg">
                  <Link to={defaultCtaLink}>{ctaButtonText}</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to={getRoute('caseStudies')}>View More Case Studies</Link>
                </Button>
              </div>
              
              {/* Strategic Internal Links */}
              <div className="border-t border-border/20 pt-8 mt-8">
                <p className="text-sm text-muted-foreground mb-4">
                  Discover our related solutions:
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  <Button asChild variant="ghost" size="sm">
                    <Link to="/en/services/crm-implementation">
                      CRM Implementation
                    </Link>
                  </Button>
                  <Button asChild variant="ghost" size="sm">
                    <Link to="/en/services/sales-process-automation">
                      Sales Automation
                    </Link>
                  </Button>
                  <Button asChild variant="ghost" size="sm">
                    <Link to="/en/services/strategic-consulting">
                      Strategic Consulting
                    </Link>
                  </Button>
                  <Button asChild variant="ghost" size="sm">
                    <Link to="/en/solutions/connect-with-customers">
                      Connect With Customers
                    </Link>
                  </Button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CaseStudyTemplateEN;
