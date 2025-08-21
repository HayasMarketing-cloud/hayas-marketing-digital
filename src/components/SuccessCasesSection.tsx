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
  specificCases?: string[]; // Specific case names to show (takes precedence over filterTags)
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
    link: "/casos-exito/nexo-vital",
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?q=80&w=2071&auto=format&fit=crop",
    tags: ["branding", "creacion-marca", "naming", "diseño-web", "contenidos", "salud", "identidad-visual"]
  },
  {
    name: "I Virgen Extra",
    industry: "Consultor ingeniero en AOVE",
    service: "Branding, desarrollo web, identidad",
    link: "/casos-exito/i-virgen-extra",
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=2069&auto=format&fit=crop",
    tags: ["branding", "creacion-marca", "diseño-web", "identidad-visual", "alimentacion"]
  },
  {
    name: "Inbound Students",
    industry: "Servicios para estudiantes extranjeros",
    service: "Estrategia digital, diseño web",
    link: "/casos-exito/inbound-students",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop",
    tags: ["estrategia-digital", "diseño-web", "marketing-digital", "educacion"]
  },
  {
    name: "Calisthenia Online",
    industry: "Entrenador personal online",
    service: "Branding, posicionamiento, automatización",
    link: "/casos-exito/calisthenia-online",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop",
    tags: ["branding", "creacion-marca", "naming", "posicionamiento", "deporte", "identidad-visual"]
  },
  {
    name: "Centro Roraima",
    industry: "Centro de desarrollo personal",
    service: "Branding, diseño web, contenidos",
    link: "/casos-exito/centro-roraima",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2070&auto=format&fit=crop",
    tags: ["branding", "creacion-marca", "diseño-web", "contenidos", "desarrollo-personal", "identidad-visual"]
  },
  {
    name: "Joints'Up",
    industry: "Cirujanos traumatólogos",
    service: "Naming, branding, diseño web",
    link: "/casos-exito/joints-up",
    image: "/lovable-uploads/00117a14-e9f2-49f7-87ad-ce32c0897eb7.png",
    tags: ["branding", "creacion-marca", "naming", "diseño-web", "medicina", "salud", "identidad-visual"]
  },
  {
    name: "Dr. Parrón",
    industry: "Traumatólogo especialista en cadera",
    service: "Identidad corporativa, diseño web",
    link: "/casos-exito/dr-parron",
    image: "/lovable-uploads/81da5b87-d42c-4ae4-a482-2bc8af27213c.png",
    tags: ["branding", "creacion-marca", "identidad-corporativa", "diseño-web", "medicina", "salud", "identidad-visual"]
  },
  {
    name: "Translate with Style",
    industry: "Traductora profesional",
    service: "Branding, estrategia, identidad visual",
    link: "/casos-exito/translate-with-style",
    image: "/lovable-uploads/093269a5-534e-41b3-9cca-a656adc014ca.png",
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
    image: "/lovable-uploads/ac93c5ff-3be5-4f45-99f2-8a747a8b54ab.png",
    tags: ["crm", "hubspot", "linkedin", "legal", "b2b"]
  },
  {
    name: "Moda Íntima Vania",
    industry: "Retail moda íntima",
    service: "Consultoría en redes sociales e implantación de CRM HubSpot",
    link: "/casos-exito/moda-intima-vania",
    image: "https://intimavania.com/img/cms/lookbook/25H/1603_1.jpg",
    tags: ["crm", "hubspot", "redes-sociales", "retail", "moda", "b2c"]
  },
  {
    name: "ALFIX Consultores",
    industry: "Asesoría fiscal y despacho de abogados",
    service: "Implantación CRM HubSpot con enfoque en eficiencia y venta cruzada",
    link: "/casos-exito/alfix-consultores",
    image: "/src/assets/alfix-consultores-office.jpg",
    tags: ["crm", "hubspot", "consultoria", "legal", "fiscal", "b2b"]
  },
  {
    name: "Alma Cruceros",
    industry: "Turismo y cruceros",
    service: "Campañas en Google Ads y optimización continua",
    link: "/casos-exito/alma-cruceros",
    image: "/lovable-uploads/9b7cad00-2cca-451d-a515-ac666898dbc9.png",
    tags: ["google-ads", "publicidad", "turismo", "b2c"]
  },
  {
    name: "Conversa Consultores",
    industry: "Firma de consultoría empresarial",
    service: "Diseño web profesional y estrategia SEO",
    link: "/casos-exito/conversa-consultores",
    image: "/src/assets/conversa-consultores-meeting.jpg",
    tags: ["diseño-web", "posicionamiento", "consultoria", "b2b"]
  },
  {
    name: "Buhobike",
    industry: "Ecommerce de ciclismo",
    service: "Estrategia digital, analítica avanzada e inteligencia de mercado",
    link: "/casos-exito/buhobike",
    image: "/lovable-uploads/fefc6b22-9bf5-4307-8e2c-f3693015279f.png",
    tags: ["estrategia-digital", "analitica", "data", "ecommerce", "retail"]
  },
  {
    name: "Eva Champion",
    industry: "Traductora profesional (FR-ES, EN, DE)",
    service: "Marca personal y visibilidad en LinkedIn",
    link: "/casos-exito/eva-champion",
    image: "/src/assets/eva-champion-translator.jpg",
    tags: ["marca-personal", "linkedin", "estrategia", "traduccion", "b2b"]
  },
  {
    name: "Beluga Linguistics",
    industry: "Agencia de traducción e interpretación",
    service: "CRM HubSpot, SEO internacional y LinkedIn",
    link: "/casos-exito/beluga-linguistics",
    image: "/lovable-uploads/871690e2-0d95-456b-86a1-c284ffaf7d5e.png",
    tags: ["crm", "hubspot", "seo", "linkedin", "traduccion", "b2b"]
  },
  {
    name: "Pamdamedia",
    industry: "Agencia de publicidad exterior",
    service: "Rediseño web, UX y orientación a la conversión",
    link: "/casos-exito/pamdamedia",
    image: "/lovable-uploads/pamdamedia-laptop-mockup.png",
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
  },
  {
    name: "Nova Praxis",
    industry: "Consultora estratégica B2B",
    service: "CRM, automatizaciones, LinkedIn, SEO y Google Ads",
    link: "/casos-exito/nova-praxis",
    image: "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?q=80&w=2069&auto=format&fit=crop",
    tags: ["crm", "automatizacion", "linkedin", "seo", "google-ads", "consultoria", "b2b"]
  },
  {
    name: "Aistercel",
    industry: "Aislamiento industrial y mantenimiento",
    service: "CRM HubSpot y rediseño web",
    link: "/casos-exito/aistercel",
    image: "https://images.unsplash.com/photo-1581092580496-6c76b21d2b36?q=80&w=2069&auto=format&fit=crop",
    tags: ["crm", "hubspot", "diseño-web", "ux", "industrial", "b2b"]
  },
  {
    name: "QuanticBI",
    industry: "Consultora de inteligencia de negocio",
    service: "Implantación CRM HubSpot y automatizaciones",
    link: "/casos-exito/quanticbi",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2069&auto=format&fit=crop",
    tags: ["crm", "automatizacion", "hubspot", "bi", "datos", "consultoria", "b2b"]
  },
  {
    name: "Peixos Emilio",
    industry: "Distribución mayorista de pescado fresco",
    service: "Ecommerce B2B y gestión de pedidos",
    link: "/casos-exito/peixos-emilio",
    image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?q=80&w=2069&auto=format&fit=crop",
    tags: ["diseño-web", "ecommerce", "b2b", "alimentacion", "menorca"]
  },
  {
    name: "Corte A Films",
    industry: "Productora audiovisual",
    service: "Diseño web visual e inspirador",
    link: "/casos-exito/corte-a-films",
    image: "https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?q=80&w=2069&auto=format&fit=crop",
    tags: ["diseño-web", "portfolio", "audiovisual", "b2b"]
  },
  {
    name: "Lualca",
    industry: "Construcción y mantenimiento industrial",
    service: "Rediseño, alojamiento y mantenimiento web",
    link: "/casos-exito/lualca",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2069&auto=format&fit=crop",
    tags: ["diseño-web", "alojamiento-mantenimiento", "ux", "industrial", "b2b"]
  },
  {
  name: "Centro Comercial Plaza de la Estación",
  industry: "Retail y ocio",
  service: "Estrategia de redes sociales, campañas y mantenimiento web",
  link: "/casos-exito/plaza-de-la-estacion",
  image: "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=2069&auto=format&fit=crop",
  tags: ["redes-sociales", "contenidos", "campañas", "alojamiento-mantenimiento", "retail", "b2c", "fuenlabrada"]
  },
  {
    name: "Rivas Centro",
    industry: "Centro comercial urbano en Rivas-Vaciamadrid",
    service: "Estrategia de contenidos, campañas creativas y mantenimiento web",
    link: "/casos-exito/rivas-centro",
    image: "https://images.unsplash.com/photo-1481437642641-2f0ae875f836?q=80&w=2069&auto=format&fit=crop",
    tags: ["redes-sociales", "contenidos", "campañas", "alojamiento-mantenimiento", "retail", "b2c", "rivas-vaciamadrid"]
  },
  {
    name: "HubSpot for Startups",
    industry: "Programa de crecimiento para startups",
    service: "Campaña inbound con storytelling, entrevistas y publicación web",
    link: "/casos-exito/hubspot-for-startups",
    image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=2069&auto=format&fit=crop",
    tags: ["inbound-marketing", "contenidos", "seo", "hubspot", "startups", "b2b"]
  },
  {
    name: "Beka Finance",
    industry: "Firma independiente de banca de inversión y gestión de activos",
    service: "Naming e identidad visual corporativa",
    link: "/casos-exito/beka-finance",
    image: "https://images.unsplash.com/photo-1559526324-593bc073d938?q=80&w=2069&auto=format&fit=crop",
    tags: ["branding", "naming", "identidad-visual", "finanzas", "b2b"]
  },
  {
    name: "Peris Electricidad",
    industry: "Empresa de instalaciones eléctricas",
    service: "Diseño web, CRM HubSpot y estrategia SEO",
    link: "/casos-exito/peris-electricidad",
    image: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=2069&auto=format&fit=crop",
    tags: ["diseño-web", "crm", "hubspot", "seo", "industrial", "servicios-tecnicos", "b2b"]
  },
  {
    name: "Carnicería Picos de Europa",
    industry: "Carnicería tradicional y productos cárnicos de alta calidad",
    service: "Estrategia y gestión de Instagram",
    link: "/casos-exito/carniceria-picos-de-europa",
    image: "https://images.unsplash.com/photo-1604908177520-1f23f582012f?q=80&w=2069&auto=format&fit=crop",
    tags: ["redes-sociales", "instagram", "contenidos", "alimentacion", "b2c", "retail"]
  },
  {
    name: "Pastelería La Oriental Sin Gluten",
    industry: "Pastelería artesanal sin gluten",
    service: "Rediseño de ecommerce, CRM y redes sociales",
    link: "/casos-exito/pasteleria-la-oriental-sin-gluten",
    image: "https://images.unsplash.com/photo-1541781286675-09b4d3a45f5e?q=80&w=2069&auto=format&fit=crop",
    tags: ["ecommerce", "crm", "hubspot", "redes-sociales", "ux", "conversion", "alimentacion", "b2c"]
  },
  {
    name: "FLAP Artículos de Peluquería",
    industry: "Belleza y cuidado capilar",
    service: "Estrategia de contenidos y Reels en Instagram",
    link: "/casos-exito/flap-articulos-peluqueria",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=2069&auto=format&fit=crop",
    tags: ["redes-sociales", "instagram", "reels", "contenidos", "belleza", "cosmetica", "retail", "b2c"]
  }
];

const SuccessCasesSection: React.FC<SuccessCasesSectionProps> = ({
  title = "Casos de éxito",
  subtitle = "Últimos proyectos que han transformado negocios.",
  filterTags = [],
  specificCases = [],
  showAllLink = true,
  maxCases,
  className = "",
  id
}) => {
  // Add tag "identidad-visual" to selected projects
  const sourceCases = ALL_SUCCESS_CASES.map(case_ => {
    if (["Nexo Vital", "Calisthenia Online", "Centro Roraima", "Dr. Parrón", "Joints'Up"].includes(case_.name)) {
      const tags = Array.from(new Set([...(case_.tags || []), "identidad-visual"]));
      return { ...case_, tags };
    }
    return case_;
  });

  // Filter cases based on specific names (takes precedence) or tags
  const filteredCases = specificCases.length > 0 
    ? sourceCases.filter(case_ => specificCases.includes(case_.name))
    : filterTags.length > 0 
      ? sourceCases.filter(case_ => 
          filterTags.some(tag => case_.tags.includes(tag))
        )
      : sourceCases;

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

        {showAllLink && (filterTags.length > 0 || specificCases.length > 0) && (
          <div className="text-center">
            <Link 
              to={`/casos-exito${filterTags.length === 1 ? `?filter=${filterTags[0]}` : specificCases.length > 0 ? '?filter=diseño-web' : ''}`}
              className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors font-medium"
            >
              Ver todos los casos de éxito {filterTags.length === 1 ? `de ${filterTags[0] === 'diseño-web' ? 'Diseño Web' : filterTags[0]}` : specificCases.length > 0 ? 'de Diseño Web' : ''} →
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default SuccessCasesSection;
