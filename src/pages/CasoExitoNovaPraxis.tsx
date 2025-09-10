import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ReviewSection from '@/components/ReviewSection';
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
import { CheckCircle, ExternalLink, Target, Zap, Linkedin, Search, Megaphone } from 'lucide-react';
import { successCaseImages } from '@/data/successCaseImages';

const CasoExitoNovaPraxis = () => {
  const caseStudyData = {
    pageTitle: "Caso de Éxito Nova Praxis | CRM, SEO, LinkedIn y Ads",
    pageDescription: "CRM con automatizaciones, SEO, LinkedIn y Google Ads para impulsar el crecimiento B2B de Nova Praxis.",
    canonical: "/casos-exito/nova-praxis",
    ogImage: successCaseImages.novaPraxis,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "CaseStudy",
      headline: "Caso de Éxito — Nova Praxis: Optimización comercial y visibilidad para una consultora estratégica",
      about: "CRM HubSpot, automatizaciones, LinkedIn, SEO y Google Ads para crecimiento empresarial",
      url: "/casos-exito/nova-praxis",
      inLanguage: "es",
      author: { "@type": "Organization", name: "Hayas Marketing" },
      publisher: {
        "@type": "Organization",
        name: "Hayas Marketing",
        logo: {
          "@type": "ImageObject",
          url: "https://hayas.marketing/lovable-uploads/hayas-logo.png"
        }
      }
    },
    companyName: "Nova Praxis",
    subtitle: "Optimización comercial y visibilidad para una consultora estratégica: CRM, automatizaciones, LinkedIn, SEO y Google Ads para impulsar el crecimiento empresarial",
    badges: ["Consultoría Estratégica", "CRM HubSpot", "SEO", "LinkedIn"],
    websiteUrl: "https://nova-praxis.com",
    featuredImage: successCaseImages.novaPraxis,
    featuredImageAlt: "Nova Praxis — consultoría estratégica B2B",
    aboutCompany: "Nova Praxis es una consultora estratégica que ayuda a empresas y organizaciones a diseñar e implementar planes de transformación, innovación y desarrollo organizativo. Su enfoque combina visión a largo plazo con soluciones prácticas adaptadas a cada cliente.",
    challenge: "Necesitaban centralizar la gestión de clientes, mejorar su posicionamiento online y reforzar su presencia en LinkedIn para llegar a decisores de alto nivel. Además, querían automatizar procesos de cualificación de leads y optimizar sus campañas de captación digital.",
    solutions: [
      {
        icon: Target,
        title: 'Implantación de CRM HubSpot',
        description: 'Configuración personalizada para centralizar datos de clientes y oportunidades, facilitando el seguimiento comercial y la gestión de relaciones.'
      },
      {
        icon: Zap,
        title: 'Automatizaciones en CRM',
        description: 'Sistema de lead scoring que clasifica prospectos según interés y potencial de conversión, priorizando acciones del equipo de ventas.'
      },
      {
        icon: Linkedin,
        title: 'Gestión de LinkedIn',
        description: 'Estrategia editorial y optimización de perfil corporativo para posicionamiento como referente en consultoría estratégica y atracción de audiencias B2B.'
      },
      {
        icon: Search,
        title: 'Estrategia y Posicionamiento SEO',
        description: 'Auditoría técnica, optimización de contenidos y arquitectura web orientada a palabras clave estratégicas para aumentar visibilidad y tráfico cualificado.'
      },
      {
        icon: Megaphone,
        title: 'Consultoría y Formación en Google Ads',
        description: 'Capacitación y apoyo en campañas de captación B2B con segmentación por sector, ubicación y cargo.'
      }
    ],
    results: [
      'Centralización eficaz de la gestión comercial',
      'Automatización inteligente de procesos de ventas',
      'Incremento significativo en visibilidad B2B',
      'Mejora en la generación de leads cualificados'
    ],
    learnings: "En consultoras estratégicas, integrar un CRM bien configurado con automatizaciones inteligentes, SEO, Google Ads segmentado y presencia activa en LinkedIn crea un ecosistema comercial y de marketing altamente eficiente."
  };

  const reviewData = [
    {
      id: "miguel-alonso-nova-praxis",
      name: "Miguel Alonso",
      position: "Socio Director",
      company: "Nova Praxis",
      message: "Hayas demuestra gran profesionalidad y profundidad en la definición estratégica del marketing",
      rating: 5,
      date: "",
      avatar: "/lovable-uploads/844b8adb-0e8c-48df-9265-49d739a1fd14.png"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title={caseStudyData.pageTitle}
        description={caseStudyData.pageDescription}
        canonical={caseStudyData.canonical}
        ogImage={caseStudyData.ogImage}
        structuredData={caseStudyData.structuredData}
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
                  <BreadcrumbPage>{caseStudyData.companyName}</BreadcrumbPage>
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
                  {caseStudyData.badges.map((badge, index) => (
                    <Badge 
                      key={index} 
                      variant={index === 0 ? "secondary" : "outline"}
                    >
                      {badge}
                    </Badge>
                  ))}
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold mb-6">{caseStudyData.companyName}</h1>
                <p className="text-xl text-muted-foreground mb-8">
                  {caseStudyData.subtitle}
                </p>
                <div className="flex gap-4">
                  <Button asChild>
                    <a 
                      href={caseStudyData.websiteUrl} 
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
                  src={caseStudyData.featuredImage} 
                  alt={caseStudyData.featuredImageAlt}
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
              <h2 className="text-2xl font-semibold mb-4">Sobre {caseStudyData.companyName}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {caseStudyData.aboutCompany}
              </p>
            </section>

            {/* El Reto */}
            <section className="mb-16">
              <h2 className="text-2xl font-semibold mb-4">El Reto</h2>
              <p className="text-muted-foreground leading-relaxed">
                {caseStudyData.challenge}
              </p>
            </section>

            {/* Solución aplicada */}
            <section className="mb-16">
              <h2 className="text-2xl font-semibold mb-6">Solución aplicada</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
                {caseStudyData.solutions.map(({ icon: Icon, title, description }, index) => (
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
            <section className="mb-16">
              <h2 className="text-2xl font-semibold mb-4">Resultados obtenidos</h2>
              <div className="grid gap-4">
                {caseStudyData.results.map((resultado, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-muted/30 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="font-medium">{resultado}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Lo que aprendimos */}
            <section className="mb-16">
              <h2 className="text-2xl font-semibold mb-4">Lo que aprendimos</h2>
              <p className="text-muted-foreground leading-relaxed">
                {caseStudyData.learnings}
              </p>
            </section>

            {/* CTA */}
            <section className="text-center py-12 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">Visita Nova Praxis</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Conoce su enfoque estratégico y las soluciones que implementan para empresas.
              </p>
              <Button asChild size="lg">
                <a 
                  href={caseStudyData.websiteUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Visita Nova Praxis
                </a>
              </Button>
            </section>
          </div>
        </div>
      </main>

      {/* Review Section */}
      <ReviewSection 
        reviews={reviewData}
        title="Recomendación del cliente"
        subtitle="Testimonio directo del director de Nova Praxis sobre nuestra colaboración"
      />

      <Footer />
    </div>
  );
};

export default CasoExitoNovaPraxis;