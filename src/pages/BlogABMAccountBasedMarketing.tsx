import React from 'react';
import BlogPostTemplate from '@/components/BlogPost/BlogPostTemplate';
import { Users, Target, BarChart3, Briefcase, Zap, Shield, ArrowRight, TrendingUp, UserCheck, Building2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const BlogABMAccountBasedMarketing = () => {
  const metadata = {
    title: "ABM: Estrategia Account-Based Marketing para Captar Grandes Cuentas",
    metaTitle: "ABM: Estrategia Account-Based Marketing para Captar Grandes Cuentas | Hayas",
    metaDescription: "Descubre cómo implementar una estrategia ABM exitosa. Guía completa de Account-Based Marketing para captar y fidelizar grandes cuentas B2B con herramientas y métricas clave.",
    description: "Descubre cómo implementar una estrategia ABM exitosa para captar y fidelizar grandes cuentas B2B. Guía completa con herramientas, métricas y casos prácticos.",
    date: "2025-01-19",
    readTime: "18 min",
    category: "Marketing Digital",
    author: "Rubén Reyero",
    tags: ["ABM", "Marketing ABM", "Account-Based Marketing", "B2B", "Grandes Cuentas"],
    canonical: "/es/blog/abm-account-based-marketing",
    ogImage: "/src/assets/business-model-canvas-estrategia-marketing-hero.jpg",
    mainKeyword: "ABM",
    secondaryKeywords: ["Marketing ABM", "Account-Based Marketing", "estrategia ABM", "cuentas objetivo"],
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "ABM: Estrategia Account-Based Marketing para Captar Grandes Cuentas",
      "description": "Descubre cómo implementar una estrategia ABM exitosa. Guía completa de Account-Based Marketing para captar y fidelizar grandes cuentas B2B con herramientas y métricas clave.",
      "author": {
        "@type": "Person",
        "name": "Rubén Reyero",
        "url": "https://hayasmarketing.com/es/autor/ruben-reyero"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Hayas Marketing"
      },
      "datePublished": "2025-01-19",
      "dateModified": "2025-01-19"
    }
  };

  const heroImage = {
    src: "/abm-account-based-marketing-hero.jpg",
    alt: "Estrategia Account-Based Marketing ABM para empresas B2B",
    width: 1200,
    height: 675,
    loading: "eager" as const,
    fetchPriority: "high" as const
  };

  const relatedServices = [
    {
      title: "Implantación de CRM",
      description: "Configuramos tu CRM con funcionalidades ABM avanzadas para identificar y gestionar cuentas objetivo de alto valor.",
      link: "/servicios/implantacion-crm"
    },
    {
      title: "Automatización de Procesos",
      description: "Diseñamos workflows personalizados para automatizar la captación y seguimiento de grandes cuentas B2B.",
      link: "/servicios/automatizacion-procesos-ventas"
    }
  ];

  const beneficiosABM = [
    {
      icon: <Target className="h-6 w-6" />,
      title: "Enfoque en alta calidad",
      description: "Se centra en cuentas de alto valor previamente calificadas"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Alineación Marketing-Ventas",
      description: "Unifica esfuerzos para maximizar la efectividad"
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "ROI más alto",
      description: "Mayor retorno al concentrar recursos en cuentas específicas"
    },
    {
      icon: <UserCheck className="h-6 w-6" />,
      title: "Personalización extrema",
      description: "Contenido y estrategias adaptadas a cada cuenta objetivo"
    },
    {
      icon: <Building2 className="h-6 w-6" />,
      title: "Ciclos de venta más cortos",
      description: "Procesos optimizados para cuentas grandes y complejas"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Escalabilidad controlada",
      description: "Crecimiento sostenible focalizando en cuentas estratégicas"
    }
  ];

  const clavesABM = [
    "Mantén alineados a tus equipos de Marketing y Ventas con objetivos compartidos",
    "Identifica tus cuentas objetivo usando matrices ICP (Perfil de Cliente Ideal)",
    "Identifica a las personas clave en el proceso de compra de cada cuenta",
    "Analiza qué tipo de contenido resulta atractivo para cada rol y cuenta",
    "Comienza a atraer contactos de tus cuentas objetivo de forma estratégica",
    "Convierte esos contactos en oportunidades de negocio cualificadas",
    "Mide el rendimiento con métricas específicas de ABM",
    "Cuida y fideliza estas cuentas como activos estratégicos del negocio"
  ];

  const herramientasABM = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Propiedades personalizadas en CRM",
      description: "Etiqueta cuentas, contactos y roles de compra para segmentación avanzada"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Workflows de automatización",
      description: "Identifica automáticamente clientes ideales y cuentas objetivo"
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Lead Scoring personalizado",
      description: "Puntúa empresas según criterios específicos para priorizar cuentas"
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Herramientas de cuentas objetivo",
      description: "Funcionalidades específicas para seguimiento y análisis de actividad"
    }
  ];

  const metricas = [
    "Número de nuevas cuentas objetivo creadas",
    "Páginas vistas por usuarios de cuentas objetivo",
    "Ratios de conversión por cuenta y rol",
    "Coste medio de conversión por cuenta",
    "Número de nuevos Deals u oportunidades",
    "Tiempo medio en cada etapa del pipeline",
    "Ratio de cierre de grandes cuentas",
    "Coste de adquisición por tipo de cuenta"
  ];

  const faqs = [
    {
      question: "¿Qué es exactamente el ABM o Account-Based Marketing?",
      answer: "El ABM es una estrategia de marketing B2B que se enfoca en cuentas específicas de alto valor, personalizando completamente la aproximación comercial para cada cuenta objetivo en lugar de usar tácticas masivas."
    },
    {
      question: "¿Cuáles son los principales beneficios del Marketing ABM?",
      answer: "Los beneficios incluyen ROI 171% superior, mayor alineación entre marketing y ventas, ciclos de venta más cortos, personalización extrema y mejor retención de grandes cuentas."
    },
    {
      question: "¿Qué empresas deberían implementar una estrategia ABM?",
      answer: "Empresas B2B con ciclos de venta largos, productos/servicios de alto valor, mercados de nicho o que buscan penetrar en grandes corporaciones específicas son candidatas ideales para ABM."
    },
    {
      question: "¿Cómo se diferencia el ABM del marketing tradicional?",
      answer: "Mientras el marketing tradicional busca atraer muchos leads para filtrarlos después, el ABM invierte la lógica: primero identifica cuentas específicas y luego personaliza completamente la estrategia para cada una."
    },
    {
      question: "¿Qué herramientas son esenciales para implementar ABM?",
      answer: "Un CRM avanzado con funcionalidades ABM, herramientas de lead scoring, plataformas de automatización, sistemas de personalización de contenido y analytics específicos para cuentas objetivo."
    },
    {
      question: "¿Cuánto tiempo tarda en mostrar resultados una estrategia ABM?",
      answer: "Los primeros resultados pueden verse entre 3-6 meses, pero el ABM es una estrategia a largo plazo que muestra su mayor potencial después de 12-18 meses de implementación consistente."
    }
  ];

  return (
    <BlogPostTemplate
      metadata={metadata}
      heroImage={heroImage}
      faqs={faqs}
      relatedServices={relatedServices}
    >
      <div className="space-y-12">
        {/* Introducción */}
        <section>
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-6 border border-primary/10 mb-8">
            <p className="text-sm text-muted-foreground mb-2">
              <strong>📊 Dato clave:</strong>
            </p>
            <p className="text-foreground">
              Las empresas que implementan estrategias ABM obtienen un ROI 171% superior al marketing tradicional y cierran un 36% más de deals con grandes cuentas.
            </p>
          </div>

          <p className="text-lg mb-6 text-muted-foreground leading-relaxed">
            El <strong>Account-Based Marketing (ABM)</strong> es una estrategia revolucionaria para empresas B2B que se enfoca en la captación y fidelización de grandes cuentas de alto valor. A diferencia del marketing tradicional, el Marketing ABM invierte la lógica: en lugar de lanzar redes amplias, se concentra en cuentas específicas previamente identificadas.
          </p>
          
          <p className="text-lg mb-8 text-muted-foreground leading-relaxed">
            Esta metodología ha ganado popularidad gracias al avance de las tecnologías digitales, que permiten una segmentación y personalización sin precedentes, facilitando su implementación a gran escala con mayor precisión y resultados medibles.
          </p>
        </section>

        {/* Objetivo del ABM */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Objetivo de una estrategia ABM</h2>
          
          <p className="text-lg mb-6 text-muted-foreground leading-relaxed">
            El objetivo principal del Account-Based Marketing es la <strong>captación de cuentas objetivo previamente seleccionadas y altamente calificadas</strong>, maximizando el valor de cada cliente potencial.
          </p>

          <div className="bg-muted/30 rounded-lg p-6 mb-8">
            <h3 className="font-semibold mb-3 text-foreground">Ejemplo práctico de ABM:</h3>
            <p className="text-muted-foreground mb-4">
              Imagina que eres un fabricante de fibra óptica en Portugal y decides expandirte a España. Tu meta es conseguir como clientes a Telefónica, Vodafone, Orange y Masmóvil.
            </p>
            <p className="text-muted-foreground">
              Con ABM, todos tus esfuerzos de marketing y ventas se enfocarán específicamente en estas cuatro cuentas, creando contenido personalizado, estrategias de aproximación únicas y procesos de venta adaptados a cada una.
            </p>
          </div>
        </section>

        {/* Beneficios */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Beneficios del Marketing ABM</h2>
          
          <p className="text-lg mb-8 text-muted-foreground leading-relaxed">
            El ABM transforma la aproximación comercial tradicional, ofreciendo ventajas competitivas significativas:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {beneficiosABM.map((beneficio, index) => (
              <Card key={index} className="border border-border/50 hover:border-primary/20 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                      {beneficio.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 text-foreground">{beneficio.title}</h3>
                      <p className="text-sm text-muted-foreground">{beneficio.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Claves para adoptar ABM */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Claves para adoptar una estrategia ABM exitosa</h2>
          
          <p className="text-lg mb-8 text-muted-foreground leading-relaxed">
            La implementación exitosa de Account-Based Marketing requiere seguir metodologías probadas y mantener el foco en la ejecución estratégica:
          </p>

          <div className="space-y-4 mb-8">
            {clavesABM.map((clave, index) => (
              <div key={index} className="flex items-start gap-4 p-4 bg-muted/20 rounded-lg border border-border/30">
                <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold shrink-0">
                  {index + 1}
                </div>
                <p className="text-muted-foreground leading-relaxed">{clave}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Herramientas */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Herramientas esenciales para tu estrategia ABM</h2>
          
          <p className="text-lg mb-8 text-muted-foreground leading-relaxed">
            El éxito del Marketing ABM depende de las herramientas tecnológicas adecuadas que permitan ejecutar, medir y optimizar la estrategia:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {herramientasABM.map((herramienta, index) => (
              <Card key={index} className="border border-border/50 hover:border-secondary/20 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-secondary/10 rounded-lg text-secondary">
                      {herramienta.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 text-foreground">{herramienta.title}</h3>
                      <p className="text-sm text-muted-foreground">{herramienta.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-gradient-to-br from-secondary/5 to-accent/5 rounded-xl p-6 border border-secondary/10">
            <h3 className="font-semibold mb-4 text-foreground">Herramientas adicionales para ABM:</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• <strong>Contenido inteligente:</strong> Landing pages y sitios web personalizados por cuenta</li>
              <li>• <strong>Email marketing personalizado:</strong> Mensajes adaptados a roles y personalidades</li>
              <li>• <strong>Playbooks de ventas:</strong> Guías específicas para cada tipo de cuenta</li>
              <li>• <strong>Automatización inteligente:</strong> Recordatorios y seguimientos personalizados</li>
            </ul>
          </div>
        </section>

        {/* Métricas */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Métricas clave para medir el éxito del ABM</h2>
          
          <p className="text-lg mb-8 text-muted-foreground leading-relaxed">
            El Account-Based Marketing requiere métricas específicas que reflejen la naturaleza personalizada de esta estrategia:
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {metricas.map((metrica, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-muted/20 rounded-lg border border-border/30">
                <div className="w-2 h-2 bg-primary rounded-full shrink-0"></div>
                <span className="text-muted-foreground text-sm">{metrica}</span>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-6 border border-primary/10">
            <p className="text-sm text-muted-foreground mb-2">
              <strong>⚡ Consejo de experto:</strong>
            </p>
            <p className="text-foreground">
              El cuidado y fidelización de cuentas ABM es fundamental, especialmente en modelos ARR/MRR. Trata cada renovación como una nueva oportunidad de venta.
            </p>
          </div>
        </section>
      </div>
    </BlogPostTemplate>
  );
};

export default BlogABMAccountBasedMarketing;