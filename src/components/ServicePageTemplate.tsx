import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Seo from '@/components/Seo';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

import FAQSection from '@/components/FAQSection';
import SuccessCasesSection from '@/components/SuccessCasesSection';
import OptimizedImage from '@/components/OptimizedImage';
import UniversalServiceContactForm from '@/components/UniversalServiceContactForm';
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
  servicesTitle: string;
  servicesSubtitle: string;
  services: ServiceFeature[];
  
  // Optional Types Section
  typesTitle?: string;
  typesSubtitle?: string;
  types?: ServiceType[];
  
  // Benefits Section
  benefitsTitle: string;
  benefitsSubtitle: string;
  benefits: string[];
  
  // Process Section
  processTitle: string;
  processSubtitle: string;
  processSteps: ProcessStep[];
  
  // FAQ Section
  faqItems: Array<{
    question: string;
    answer: string;
  }>;
  
  // Additional sections
  showSuccessCases?: boolean;
  successCasesServiceSlug?: string;
  successCasesTitle?: string;
  additionalContent?: React.ReactNode;
  
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
  console.log('ServicePageTemplate data:', data);
  console.log('breadcrumbItems:', data.breadcrumbItems);
  console.log('services:', data.services);
  console.log('benefits:', data.benefits);
  console.log('processSteps:', data.processSteps);
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: data.heroTitle.replace(/<[^>]*>/g, ''),
    description: data.description,
    provider: {
      "@type": "Organization",
      name: "Hayas Marketing"
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
      <div className="bg-gray-50 py-4 mt-20">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-gray-600">
            {data.breadcrumbItems.map((item, index) => (
              <React.Fragment key={index}>
                {index > 0 && <span className="mx-2">/</span>}
                {item.href ? (
                  <Link to={item.href} className="hover:text-primary">
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-gray-900">{item.label}</span>
                )}
              </React.Fragment>
            ))}
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-white to-accent/5">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                {data.badge}
              </Badge>
              <h1 
                className="title-hero leading-tight"
                dangerouslySetInnerHTML={{ __html: data.heroTitle }}
              />
              <p className="text-hero text-gray-600 leading-relaxed">
                {data.heroSubtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="gradient-primary text-white" asChild>
                  <Link to={data.primaryCTALink}>
                    {data.primaryCTA}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to={data.secondaryCTALink}>{data.secondaryCTA}</Link>
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <OptimizedImage
                src={data.heroImage}
                alt={data.heroImageAlt}
                className="hero-image rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 
              className="title-section"
              dangerouslySetInnerHTML={{ __html: data.servicesTitle }}
            />
            <p className="text-description max-w-3xl mx-auto">
              {data.servicesSubtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.services.map((service, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
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

      {/* Types Section (Optional) */}
      {data.types && (
        <section className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
                Especialidades
              </Badge>
              <h2 
                className="title-section"
                dangerouslySetInnerHTML={{ __html: data.typesTitle || '' }}
              />
              <p className="text-description max-w-3xl mx-auto">
                {data.typesSubtitle}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {data.types.map((type, index) => (
                <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        {type.icon}
                      </div>
                      <CardTitle className="title-card">{type.title}</CardTitle>
                    </div>
                    <p className="text-gray-600">{type.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {type.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Benefits Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 
                className="title-section mb-2"
                dangerouslySetInnerHTML={{ __html: data.benefitsTitle }}
              />
              <p className="text-description mb-8">
                {data.benefitsSubtitle}
              </p>
              
              <div className="grid gap-4">
                {data.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-4 mt-1">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8" />
                  </div>
                  <h3 className="title-subsection mb-4">Garantía de Resultados</h3>
                  <p className="text-gray-600 mb-6">
                    Trabajamos con objetivos claros y métricas medibles para asegurar el éxito de tu proyecto.
                  </p>
                  <Button className="gradient-primary text-white" asChild>
                    <Link to={data.primaryCTALink}>Empezar Ahora</Link>
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 
              className="title-section"
              dangerouslySetInnerHTML={{ __html: data.processTitle }}
            />
            <p className="text-description max-w-3xl mx-auto">
              {data.processSubtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.processSteps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="text-center h-full border-none shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-primary">{step.number}</span>
                    </div>
                    <div className="mb-2 text-primary">
                      {step.icon}
                    </div>
                    <CardTitle className="text-lg font-semibold">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </CardContent>
                </Card>
                
                {/* Connection line */}
                {index < data.processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary/50 to-accent/50 transform -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Cases (Optional) */}
      {data.showSuccessCases && data.successCasesServiceSlug && (() => {
        const casesConfig = getServiceSuccessCasesConfig(data.successCasesServiceSlug);
        if (casesConfig) {
          return (
            <SuccessCasesSection
              title={data.successCasesTitle || "Casos de Éxito"}
              subtitle={casesConfig.subtitle}
              filterTags={casesConfig.filterTags}
              specificCases={casesConfig.specificCases}
              maxCases={4}
              showAllLink={true}
            />
          );
        }
        return null;
      })()}

      {/* Additional Content */}
      {data.additionalContent}


      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary/10 via-white to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="title-section">
            ¿Listo para dar el siguiente paso?
          </h2>
          <p className="text-description mb-8 max-w-2xl mx-auto">
            Agenda una consulta estratégica gratuita y descubre cómo podemos impulsar tu negocio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gradient-primary text-white" asChild>
              <Link to={data.primaryCTALink}>
                {data.primaryCTA}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/es/contacto">Consulta Personalizada</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection faqs={data.faqItems} />

      {/* Contact Form Section */}
      {data.showContactForm && (
        <UniversalServiceContactForm 
          title={data.contactFormTitle}
          subtitle={data.contactFormSubtitle}
          serviceOptions={data.contactFormOptions}
        />
      )}

      <Footer />
    </div>
  );
};

export default ServicePageTemplate;