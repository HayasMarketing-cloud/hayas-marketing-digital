import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Seo from '@/components/Seo';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from '@/components/ui/breadcrumb';

interface CaseStudyData {
  // SEO and metadata
  slug: string;
  title: string;
  description: string;
  
  // Hero section
  heroTitle: string;
  heroSubtitle: string;
  heroImage: string;
  heroImageAlt: string;
  badge?: string;
  
  // Client info
  clientName: string;
  industry?: string;
  solution?: string;
  duration?: string;
  websiteUrl?: string;
  
  // Content sections
  aboutClient: string;
  challenge: string;
  solutions: Array<{
    title: string;
    description: string;
    icon?: React.ReactNode;
  }>;
  learnings: string;
  
  // Optional additional content
  additionalContent?: React.ReactNode;
}

interface CaseStudyTemplateProps {
  data: CaseStudyData;
}

const CaseStudyTemplate: React.FC<CaseStudyTemplateProps> = ({ data }) => {
  const canonical = `/casos-exito/${data.slug}`;
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CaseStudy",
    headline: data.title,
    about: data.description,
    url: canonical,
    inLanguage: "es",
    publisher: { "@type": "Organization", name: "Hayas Marketing" },
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Seo 
        title={data.title} 
        description={data.description} 
        canonical={canonical} 
        structuredData={structuredData} 
      />
      <Navigation />

      <main className="flex-grow">
        {/* Breadcrumbs */}
        <section className="py-4 bg-gray-50 border-b">
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
                  <BreadcrumbPage>{data.clientName}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-hayas-50 to-turquesa-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="outline" className="mb-4 text-hayas-600 border-hayas-200">
                  {data.badge || "Caso de Éxito"}
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  {data.heroTitle}
                </h1>
                <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                  {data.heroSubtitle}
                </p>
                
                {/* Client details */}
                <div className="space-y-3 mb-8">
                  {data.industry && (
                    <div className="flex items-center gap-3">
                      <Badge variant="secondary">Industria</Badge>
                      <span className="text-gray-700">{data.industry}</span>
                    </div>
                  )}
                  {data.solution && (
                    <div className="flex items-center gap-3">
                      <Badge variant="secondary">Solución</Badge>
                      <span className="text-gray-700">{data.solution}</span>
                    </div>
                  )}
                  {data.duration && (
                    <div className="flex items-center gap-3">
                      <Badge variant="secondary">Duración</Badge>
                      <span className="text-gray-700">{data.duration}</span>
                    </div>
                  )}
                </div>

                {data.websiteUrl && (
                  <Button className="gradient-primary text-white px-6 py-3" asChild>
                    <Link to={data.websiteUrl} target="_blank" rel="noopener">
                      Visitar Web
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                )}
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-hayas-200 to-turquesa-200 rounded-3xl transform rotate-6 scale-105 opacity-20"></div>
                <img 
                  src={data.heroImage}
                  alt={data.heroImageAlt}
                  className="relative z-10 w-full h-auto rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
              <article className="lg:col-span-8 space-y-12">
                {/* About Client */}
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Sobre <span className="text-gradient-primary">{data.clientName}</span>
                  </h2>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-600 leading-relaxed">
                      {data.aboutClient}
                    </p>
                  </div>
                </div>

                {/* Challenge */}
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    El <span className="text-gradient-primary">Reto</span>
                  </h2>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-600 leading-relaxed">
                      {data.challenge}
                    </p>
                  </div>
                </div>

                {/* Solutions */}
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-8">
                    Solución <span className="text-gradient-primary">Aplicada</span>
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {data.solutions.map((solution, index) => (
                      <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
                        <CardHeader>
                          {solution.icon && (
                            <div className="mb-4 p-3 rounded-lg bg-hayas-100 w-fit text-hayas-600">
                              {solution.icon}
                            </div>
                          )}
                          <CardTitle className="text-xl font-bold">
                            {solution.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600 leading-relaxed">
                            {solution.description}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Learnings */}
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Lo que <span className="text-gradient-primary">Aprendimos</span>
                  </h2>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-600 leading-relaxed">
                      {data.learnings}
                    </p>
                  </div>
                </div>

                {/* Additional Content */}
                {data.additionalContent && (
                  <div>
                    {data.additionalContent}
                  </div>
                )}
              </article>

              {/* Sidebar */}
              <aside className="lg:col-span-4">
                <div className="sticky top-8 space-y-6">
                  {data.websiteUrl && (
                    <Card className="border-none shadow-lg">
                      <CardContent className="p-6 text-center">
                        <h3 className="text-lg font-semibold mb-4">Visita el proyecto</h3>
                        <Button className="w-full gradient-primary text-white" asChild>
                          <Link to={data.websiteUrl} target="_blank" rel="noopener">
                            Ver {data.clientName}
                            <ExternalLink className="w-4 h-4 ml-2" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  )}
                  
                  <Card className="border-none shadow-lg">
                    <CardContent className="p-6 text-center">
                      <h3 className="text-lg font-semibold mb-4">¿Quieres resultados similares?</h3>
                      <Button variant="outline" className="w-full" asChild>
                        <Link to="/contacto">
                          Solicitar Consulta
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 bg-hayas-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Listo para crear tu propio caso de éxito?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Cada proyecto es único. Descubre cómo podemos ayudarte a alcanzar tus objetivos específicos.
            </p>
            <Button className="bg-white text-hayas-600 hover:bg-gray-100 px-8 py-3 text-lg" asChild>
              <Link to="/contacto">
                Iniciar mi Proyecto
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CaseStudyTemplate;