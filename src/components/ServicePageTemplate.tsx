import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Seo from '@/components/Seo';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import UniversalBreadcrumbs from '@/components/UniversalBreadcrumbs';

import FAQSection from '@/components/FAQSection';
import SuccessCasesSection from '@/components/SuccessCasesSection';
import OptimizedImage from '@/components/OptimizedImage';
import ServiceContactSection from '@/components/ServiceContactSection';
import { getServiceSuccessCasesConfig } from '@/data/serviceSuccessCasesMapping';
import { ArrowRight, CheckCircle } from 'lucide-react';

export interface ServiceFeature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface ServiceType {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ServicePageData {
  // SEO & Metadata
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
  structuredData?: Record<string, any>; // Optional custom structured data
  
  // Hero Section
  badge: string;
  heroTitle: string;
  heroSubtitle: string;
  heroImage: string;
  heroImageAlt: string;
  primaryCTA: string;
  primaryCTALink: string;
  secondaryCTA: string;
  secondaryCTALink: string;
  
  // Services/Features Section
  services: ServiceFeature[];
  servicesTitle: string;
  servicesSubtitle: string;
  
  // Types Section (Optional)
  types?: ServiceType[];
  typesTitle?: string;
  typesSubtitle?: string;
  
  // Benefits Section
  benefits: string[];
  benefitsTitle: string;
  benefitsSubtitle: string;
  
  // Process Section
  processSteps: ProcessStep[];
  processTitle: string;
  processSubtitle: string;
  
  // FAQ Section
  faqItems: Array<{
    question: string;
    answer: string;
  }>;
  
  // Additional Content
  additionalContent?: React.ReactNode;
  
  // Success Cases
  showSuccessCases?: boolean;
  successCasesServiceSlug?: string;
  successCasesTitle?: string;
  
  // Contact Form Section
  showContactForm?: boolean;
  contactFormTitle?: string;
  contactFormSubtitle?: string;
  contactFormOptions?: Array<{ value: string; label: string }>;
  
  // Breadcrumb
  breadcrumbItems: Array<{
    label: string;
    href?: string;
  }>;
}

interface ServicePageTemplateProps {
  data: ServicePageData;
}

const ServicePageTemplate: React.FC<ServicePageTemplateProps> = ({ data }) => {
  // Use custom structured data if provided, otherwise generate default
  const structuredData = data.structuredData || {
    "@context": "https://schema.org",
    "@type": "Service",
    name: data.heroTitle,
    description: data.heroSubtitle,
    provider: {
      "@type": "Organization",
      name: "Hayas Marketing",
      address: {
        "@type": "PostalAddress",
        addressCountry: "ES"
      }
    },
    areaServed: "ES",
    url: data.canonical
  };

  return (
    <div className="min-h-screen bg-white">
      <Seo 
        title={data.title} 
        description={data.description} 
        canonical={data.canonical} 
        structuredData={structuredData}
        ogImage={data.ogImage}
      />
      <Navigation />
      
      {/* Breadcrumb */}
      <div className="bg-section-soft py-4">
        <div className="container mx-auto px-4">
          <UniversalBreadcrumbs customItems={data.breadcrumbItems} />
        </div>
      </div>

      <main id="main-content">
        {/* Hero Section */}
        <section className="section-loose bg-gradient-to-br from-primary/5 via-white to-accent/5">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="stack-md">
                <div>
                  <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                    {data.badge}
                  </Badge>
                  <h1 className="title-hero text-foreground">
                    {data.heroTitle}
                  </h1>
                  <p className="text-hero text-muted-foreground">
                    {data.heroSubtitle}
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="gradient-primary text-white hover-scale focus-ring" asChild>
                    <Link to={data.primaryCTALink}>
                      {data.primaryCTA}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="hover-scale focus-ring" asChild>
                    <Link to={data.secondaryCTALink}>
                      {data.secondaryCTA}
                    </Link>
                  </Button>
                </div>
              </div>
              
              <div className="order-first lg:order-last">
                <OptimizedImage
                  src={data.heroImage}
                  alt={data.heroImageAlt}
                  className="hero-image rounded-2xl shadow-2xl"
                  priority={true}
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="section-loose bg-section-soft">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 stack-md">
              <h2 className="title-section">{data.servicesTitle}</h2>
              <p className="text-description max-w-3xl mx-auto">
                {data.servicesSubtitle}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {data.services.map((service, index) => (
                <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full hover-scale">
                  <CardHeader className="pb-4">
                    <div className="mb-4 p-3 rounded-lg bg-primary/10 w-fit">
                      {service.icon}
                    </div>
                    <CardTitle className="title-card">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section-loose bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="stack-md">
                <div>
                  <h2 className="title-section">{data.benefitsTitle}</h2>
                  <p className="text-description">{data.benefitsSubtitle}</p>
                </div>
                
                <div className="grid gap-4">
                  {data.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start hover-scale">
                      <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-4 mt-1">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 hover-scale">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="h-8 w-8" />
                    </div>
                    <h3 className="title-subsection mb-4">Garantía de Resultados</h3>
                    <p className="text-gray-600 mb-6">
                      Trabajamos con objetivos claros y métricas medibles para asegurar el éxito de tu proyecto.
                    </p>
                    <Button className="gradient-primary text-white hover-scale focus-ring" asChild>
                      <Link to={data.primaryCTALink}>Empezar Ahora</Link>
                    </Button>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="section-loose bg-section-soft">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 stack-md">
              <h2 className="title-section">{data.processTitle}</h2>
              <p className="text-description max-w-3xl mx-auto">{data.processSubtitle}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {data.processSteps.map((step, index) => (
                <div key={index} className="relative">
                  <Card className="text-center h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 hover-scale focus-ring">
                    <CardHeader>
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl font-bold text-primary">{step.number}</span>
                      </div>
                      <div className="mb-2 text-primary">{step.icon}</div>
                      <CardTitle className="text-lg font-semibold">{step.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm">{step.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Content */}
        {data.additionalContent}

        {/* FAQ Section */}
        <FAQSection faqs={data.faqItems} />

        {/* Contact Form Section */}
        {data.showContactForm && (
          <ServiceContactSection 
            formId="7hfylnczt0dXbyUFFSEt"
            title={data.contactFormTitle || '¿Hablamos? Solicita tu propuesta'}
            subtitle={data.contactFormSubtitle || 'Cuéntanos tu contexto y objetivos. Te responderemos con una propuesta alineada a tus necesidades.'}
            minHeight={820}
          />
        )}
      </main>

      <Footer />
    </div>
  );
};

export default ServicePageTemplate;
