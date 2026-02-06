import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { EnhancedSEO } from '@/components/EnhancedSEO';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from '@/components/ui/breadcrumb';
import { successCaseImages } from '@/data/successCaseImages';

// English case studies data
const EN_SUCCESS_CASES = [
  {
    name: "Asendia",
    industry: "Cross-border e-commerce and logistics",
    service: "B2B CRM with HubSpot and sales automation",
    link: "/en/case-studies/asendia",
    image: successCaseImages.asendia || "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
    tags: ["CRM", "Automation", "B2B"]
  },
  {
    name: "Formato Educativo",
    industry: "Educational platform",
    service: "CRM implementation and administration",
    link: "/en/case-studies/formato-educativo",
    image: successCaseImages.formatoEducativo || "https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=2070&auto=format&fit=crop",
    tags: ["CRM", "Education", "HubSpot"]
  },
  {
    name: "Beka Finance",
    industry: "Investment banking and asset management",
    service: "Naming and visual identity",
    link: "/en/case-studies/beka-finance",
    image: "/lovable-uploads/cb5e2b7b-ad42-4a68-b3e7-bf2f51e4ce45.png",
    tags: ["Branding", "Finance", "Identity"]
  },
  {
    name: "AECOC",
    industry: "Consumer sector business association",
    service: "CRM and digital marketing for education",
    link: "/en/case-studies/aecoc",
    image: "/lovable-uploads/34af75c9-4cb5-4537-853e-73361c647202.png",
    tags: ["CRM", "Social Media", "Education"]
  },
  {
    name: "Peris Electricidad",
    industry: "Electrical installations and energy",
    service: "Web design, CRM and SEO strategy",
    link: "/en/case-studies/peris-electricidad",
    image: successCaseImages.perisElectricidad || "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop",
    tags: ["Web Design", "CRM", "SEO"]
  },
  {
    name: "Inbound Students",
    industry: "Educational services for international students",
    service: "Digital strategy and web design",
    link: "/en/case-studies/inbound-students",
    image: successCaseImages.inboundStudents || "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop",
    tags: ["Web Design", "Strategy", "Education"]
  },
  {
    name: "HubSpot for Startups",
    industry: "Startup ecosystem",
    service: "Inbound marketing campaign with success stories",
    link: "/en/case-studies/hubspot-for-startups",
    image: successCaseImages.hubSpotForStartups || "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2074&auto=format&fit=crop",
    tags: ["Inbound", "Content", "Startups"]
  },
  {
    name: "ASP ASEPSIA",
    industry: "Hygiene and disinfection solutions",
    service: "HubSpot CRM and sales automation",
    link: "/en/case-studies/asp-asepsia",
    image: "/lovable-uploads/6cf96609-e73c-4a3b-8939-bdc4e1330033.png",
    tags: ["CRM", "Automation", "Industrial"]
  },
  {
    name: "Nexo Vital",
    industry: "Integrative health specialist",
    service: "Branding and web development",
    link: "/en/case-studies/nexo-vital",
    image: successCaseImages.nexoVital || "/lovable-uploads/a07d3b40-7f87-4665-a586-cc46889c713b.png",
    tags: ["Branding", "Web", "Health"]
  },
  {
    name: "QuanticBI",
    industry: "Business Intelligence consulting",
    service: "HubSpot CRM implementation",
    link: "/en/case-studies/quanticbi",
    image: successCaseImages.quanticBI || "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    tags: ["CRM", "Consulting", "BI"]
  }
];

const CaseStudiesEN = () => {
  return (
    <div className="min-h-screen bg-background">
      <EnhancedSEO 
        customSEO={{
          title: 'Digital Marketing and CRM Case Studies | Hayas Marketing',
          description: 'Discover real digital transformation cases with marketing, CRM and automation. Measurable results across 15+ different industries.',
          canonical: '/en/case-studies',
          keywords: ['digital marketing case studies', 'CRM success stories', 'digital transformation', 'marketing results', 'real CRM cases'],
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
                  <Link to="/en">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Case Studies</BreadcrumbPage>
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
              Digital Marketing and CRM Case Studies
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Successful digital transformations from our clients
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <Badge variant="secondary" className="text-sm">
                {'>'}200 completed projects
              </Badge>
              <Badge variant="secondary" className="text-sm">
                +15 Industries
              </Badge>
              <Badge variant="secondary" className="text-sm">
                100% Satisfaction
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Cases Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {EN_SUCCESS_CASES.map((project, index) => (
              <Link key={index} to={project.link}>
                <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden cursor-pointer h-full">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-lg font-bold font-dm-sans mb-2 group-hover:text-primary transition-colors">
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
                      {project.tags.map((tag, tagIndex) => (
                        <Badge 
                          key={tagIndex} 
                          variant="secondary" 
                          className="text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Be Our Next Success Story?
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Every project is unique, but the result is always the same: 
            measurable growth and real digital transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/en/contact">
                Start My Project
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white bg-white/20 hover:bg-white hover:text-primary backdrop-blur-sm" asChild>
              <Link to="/en/schedule-meeting">
                Schedule Free Consultation
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudiesEN;
