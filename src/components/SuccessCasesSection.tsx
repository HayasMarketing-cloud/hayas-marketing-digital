import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export interface SuccessCase {
  name: string;
  industry: string;
  service: string;
  link: string;
  image: string;
  tags: string[]; // Tags for filtering by solution/service
}

interface SuccessCasesSectionProps {
  title?: string;
  subtitle?: string;
  filterTags?: string[]; // Tags to filter cases by
  showAllLink?: boolean;
  maxCases?: number;
  className?: string;
  id?: string; // For anchor links
}

// Central repository of all success cases
export const ALL_SUCCESS_CASES: SuccessCase[] = [
  {
    name: "Nexo Vital",
    industry: "Enfermera especializada en salud integrativa",
    service: "Branding, web, estrategia de contenidos",
    link: "/caso-exito-nexo-vital",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=2071&auto=format&fit=crop",
    tags: ["branding", "creacion-marca", "diseño-web", "contenidos", "salud"]
  },
  {
    name: "I Virgen Extra",
    industry: "Consultor ingeniero en AOVE",
    service: "Branding, desarrollo web, identidad",
    link: "/caso-exito-i-virgen-extra",
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=2069&auto=format&fit=crop",
    tags: ["branding", "creacion-marca", "diseño-web", "identidad-visual", "alimentacion"]
  },
  {
    name: "Inbound Students",
    industry: "Servicios para estudiantes extranjeros",
    service: "Estrategia digital, diseño web",
    link: "/caso-exito-inbound-students",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop",
    tags: ["estrategia-digital", "diseño-web", "marketing-digital", "educacion"]
  },
  {
    name: "Calisthenia Online",
    industry: "Entrenador personal online",
    service: "Branding, posicionamiento, automatización",
    link: "/caso-exito-calisthenia-online",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop",
    tags: ["branding", "creacion-marca", "posicionamiento", "automatizacion", "deporte"]
  },
  {
    name: "Centro Roraima",
    industry: "Centro de desarrollo personal",
    service: "Branding, diseño web, contenidos",
    link: "/caso-exito-centro-roraima",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop",
    tags: ["branding", "creacion-marca", "diseño-web", "contenidos", "desarrollo-personal"]
  },
  {
    name: "Joints'Up",
    industry: "Cirujanos traumatólogos",
    service: "Naming, branding, diseño web",
    link: "/caso-exito-joints-up",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=2087&auto=format&fit=crop",
    tags: ["branding", "creacion-marca", "naming", "diseño-web", "medicina", "salud"]
  },
  {
    name: "Dr. Parrón",
    industry: "Traumatólogo especialista en cadera",
    service: "Identidad corporativa, diseño web",
    link: "/caso-exito-dr-parron",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=2071&auto=format&fit=crop",
    tags: ["branding", "creacion-marca", "identidad-corporativa", "diseño-web", "medicina", "salud"]
  },
  {
    name: "Translate with Style",
    industry: "Traductora profesional",
    service: "Branding, estrategia, identidad visual",
    link: "/caso-exito-translate-with-style",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop",
    tags: ["branding", "creacion-marca", "identidad-visual", "estrategia", "traduccion"]
  },
  {
    name: "Formato Educativo",
    industry: "Plataforma educativa",
    service: "Implantación y administración de CRM",
    link: "/casos-exito/formato-educativo",
    image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=2070&auto=format&fit=crop",
    tags: ["automatizacion", "educacion", "marketing-digital"]
  },
  {
    name: "OMR (Transportes Especiales)",
    industry: "Agencia de transportes especiales",
    service: "Diseño web y alojamiento/mantenimiento",
    link: "/casos-exito/omr",
    image: "/lovable-uploads/db7fa3bb-b3cd-437c-bdab-9aaa050b134e.png",
    tags: ["diseño-web", "alojamiento-mantenimiento", "transporte"]
  },
  {
    name: "Asendia",
    industry: "E-commerce transfronterizo y logística",
    service: "CRM B2B con HubSpot y automatización de ventas",
    link: "/casos-exito/asendia",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
    tags: ["crm", "automatizacion", "hubspot", "ecommerce", "logistica", "b2b"]
  },
  {
    name: "ASP ASEPSIA",
    industry: "Higiene y desinfección profesional",
    service: "Implantación CRM HubSpot, automatización de ventas y consultoría continua",
    link: "/casos-exito/asp-asepsia",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop",
    tags: ["crm", "automatizacion", "hubspot", "higiene"]
  },
  {
    name: "Bufete MASERAS",
    industry: "Despacho de abogados",
    service: "Implantación CRM HubSpot y gestión de LinkedIn",
    link: "/casos-exito/bufete-maseras",
    image: "https://images.unsplash.com/photo-1528747045269-390fe33c19d8?q=80&w=2070&auto=format&fit=crop",
    tags: ["crm", "hubspot", "linkedin", "legal", "b2b"]
  },
  {
    name: "Moda Íntima Vania",
    industry: "Retail moda íntima",
    service: "Consultoría en redes sociales e implantación de CRM HubSpot",
    link: "/casos-exito/moda-intima-vania",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=2070&auto=format&fit=crop",
    tags: ["crm", "hubspot", "redes-sociales", "retail", "moda", "b2c"]
  },
  {
    name: "ALFIX Consultores",
    industry: "Asesoría fiscal y despacho de abogados",
    service: "Implantación CRM HubSpot con enfoque en eficiencia y venta cruzada",
    link: "/casos-exito/alfix-consultores",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070&auto=format&fit=crop",
    tags: ["crm", "hubspot", "consultoria", "legal", "fiscal", "b2b"]
  },
  {
    name: "Alma Cruceros",
    industry: "Turismo y cruceros",
    service: "Campañas en Google Ads y optimización continua",
    link: "/casos-exito/alma-cruceros",
    image: "https://images.unsplash.com/photo-1476610182048-b716b8518aae?q=80&w=2070&auto=format&fit=crop",
    tags: ["google-ads", "publicidad", "turismo", "b2c"]
  },
  {
    name: "Conversa Consultores",
    industry: "Firma de consultoría empresarial",
    service: "Diseño web profesional y estrategia SEO",
    link: "/casos-exito/conversa-consultores",
    image: "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?q=80&w=2070&auto=format&fit=crop",
    tags: ["diseño-web", "posicionamiento", "consultoria", "b2b"]
  },
  {
    name: "Buhobike",
    industry: "Ecommerce de ciclismo",
    service: "Estrategia digital, analítica avanzada e inteligencia de mercado",
    link: "/casos-exito/buhobike",
    image: "https://images.unsplash.com/photo-1511735111819-9a3f7709049c?q=80&w=2070&auto=format&fit=crop",
    tags: ["estrategia-digital", "analitica", "data", "ecommerce", "retail"]
  },
  {
    name: "Eva Champion",
    industry: "Traductora profesional (FR-ES, EN, DE)",
    service: "Marca personal y visibilidad en LinkedIn",
    link: "/casos-exito/eva-champion",
    image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=2069&auto=format&fit=crop",
    tags: ["marca-personal", "linkedin", "estrategia", "traduccion", "b2b"]
  },
  {
    name: "Beluga Linguistics",
    industry: "Agencia de traducción e interpretación",
    service: "CRM HubSpot, SEO internacional y LinkedIn",
    link: "/casos-exito/beluga-linguistics",
    image: "https://images.unsplash.com/photo-1518081461904-9ac4b8653aab?q=80&w=2069&auto=format&fit=crop",
    tags: ["crm", "hubspot", "seo", "linkedin", "traduccion", "b2b"]
  },
  {
    name: "Pamdamedia",
    industry: "Agencia de publicidad exterior",
    service: "Rediseño web, UX y orientación a la conversión",
    link: "/casos-exito/pamdamedia",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2069&auto=format&fit=crop",
    tags: ["diseño-web", "ux", "conversion", "publicidad-exterior", "b2b"]
  },
  {
    name: "Give and Go",
    industry: "Agencia de eventos deportivos (baloncesto)",
    service: "Diseño web con ecommerce e inscripciones",
    link: "/casos-exito/give-and-go",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=2069&auto=format&fit=crop",
    tags: ["diseño-web", "ecommerce", "eventos", "deporte", "baloncesto"]
  },
  {
    name: "Hikvision",
    industry: "Tecnología de seguridad e IA",
    service: "Landing B2B optimizada para registros de evento",
    link: "/casos-exito/hikvision",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2069&auto=format&fit=crop",
    tags: ["landing", "b2b", "eventos", "smart-cities", "tecnologia"]
  },
  {
    name: "OWO Game",
    industry: "Startup de gaming inmersivo (háptica)",
    service: "CRM, SEO y redes sociales para crecimiento internacional",
    link: "/casos-exito/owo-game",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2069&auto=format&fit=crop",
    tags: ["crm", "seo", "redes-sociales", "gaming", "startup"]
  }
];

const SuccessCasesSection: React.FC<SuccessCasesSectionProps> = ({
  title = "Casos de éxito",
  subtitle = "Últimos proyectos que han transformado negocios.",
  filterTags = [],
  showAllLink = true,
  maxCases,
  className = "",
  id
}) => {
  // Filter cases based on tags
  const filteredCases = filterTags.length > 0 
    ? ALL_SUCCESS_CASES.filter(case_ => 
        filterTags.some(tag => case_.tags.includes(tag))
      )
    : ALL_SUCCESS_CASES;

  // Limit number of cases if specified
  const displayCases = maxCases 
    ? filteredCases.slice(0, maxCases)
    : filteredCases;

  if (displayCases.length === 0) {
    return null;
  }

  return (
    <section id={id} className={`py-12 md:py-16 bg-white ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {title.includes('span') ? (
              <span dangerouslySetInnerHTML={{ __html: title }} />
            ) : (
              <>
                {title.split(' ').map((word, index) => 
                  word.toLowerCase() === 'éxito' ? (
                    <span key={index} className="text-gradient-primary">{word}</span>
                  ) : (
                    word + ' '
                  )
                )}
              </>
            )}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {displayCases.map((project, index) => (
            <Link key={index} to={project.link}>
              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden cursor-pointer h-full">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-bold mb-2">{project.name}</h3>
                  <p className="text-sm text-gray-500 mb-3">{project.industry}</p>
                  <p className="text-sm text-gray-600 mb-3">{project.service}</p>
                  
                  {/* Display relevant tags */}
                  <div className="flex flex-wrap gap-1">
                    {project.tags.slice(0, 3).map((tag, tagIndex) => (
                      <Badge 
                        key={tagIndex} 
                        variant="secondary" 
                        className="text-xs"
                      >
                        {tag.replace('-', ' ')}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {showAllLink && filterTags.length > 0 && (
          <div className="text-center">
            <Link 
              to="/casos-exito" 
              className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors font-medium"
            >
              Ver todos los casos de éxito →
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default SuccessCasesSection;