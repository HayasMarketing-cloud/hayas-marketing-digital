import React from 'react';
import { Link } from 'react-router-dom';
import BlogPostTemplate from '@/components/BlogPost/BlogPostTemplate';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  Target, 
  BarChart3, 
  Zap, 
  Mail, 
  Globe,
  TrendingUp,
  CheckCircle,
  Building2,
  Store,
  Briefcase,
  UserCheck,
  Heart
} from 'lucide-react';

const BlogCrmQueEsBeneficios = () => {
  const metadata = {
    title: "CRM: Qué es, Beneficios y Cómo Elegir el Mejor para tu Empresa",
    metaTitle: "CRM: Qué es, Beneficios y Cómo Elegir el Mejor para tu Empresa | Hayas Marketing",
    description: "Descubre qué es un CRM, sus beneficios para marketing y ventas, y cómo elegir el más adecuado para tu negocio. Guía práctica con ejemplos reales y pasos de implantación.",
    metaDescription: "Descubre qué es un CRM, sus beneficios para marketing y ventas, y cómo elegir el más adecuado para tu negocio. Guía práctica con ejemplos reales y pasos de implantación.",
    date: "2025-01-15",
    readTime: "8 min de lectura",
    category: "CRM y Automatización",
    author: "Hayas Marketing",
    tags: ["CRM", "Marketing", "Ventas", "Automatización", "Gestión de Clientes"],
    canonical: "/blog/crm-que-es-beneficios-como-elegir",
    ogImage: "/lovable-uploads/marketing-kpis-dashboard.jpg",
    mainKeyword: "CRM",
    secondaryKeywords: ["qué es un CRM", "CRM marketing", "beneficios CRM", "elegir CRM"],
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "CRM: Qué es, Beneficios y Cómo Elegir el Mejor para tu Empresa",
      "description": "Descubre qué es un CRM, sus beneficios para marketing y ventas, y cómo elegir el más adecuado para tu negocio. Guía práctica con ejemplos reales y pasos de implantación.",
      "image": "/lovable-uploads/marketing-kpis-dashboard.jpg",
      "author": {
        "@type": "Organization",
        "name": "Hayas Marketing"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Hayas Marketing",
        "logo": {
          "@type": "ImageObject",
          "url": "/logo.png"
        }
      },
      "datePublished": "2025-01-15",
      "dateModified": "2025-01-15"
    }
  };

  const faqs = [
    {
      question: "¿Qué es un CRM y para qué sirve?",
      answer: "Un CRM es un software que centraliza la información de clientes para gestionar marketing, ventas y atención al cliente de forma más eficiente, personalizada y rentable."
    },
    {
      question: "¿Cuáles son los principales beneficios de un CRM?",
      answer: "Permite segmentar clientes, automatizar campañas, integrar canales de comunicación, medir resultados en tiempo real y personalizar interacciones a gran escala. Además, facilita la creación de procesos detallados de venta para realizar seguimiento, optimizar el ciclo comercial y mejorar la atención al cliente."
    },
    {
      question: "¿Qué tipos de empresas deberían usar un CRM?",
      answer: "Desde emprendedores y startups hasta grandes empresas, cualquier negocio que quiera optimizar la gestión de clientes y aumentar su conversión puede beneficiarse de un CRM."
    },
    {
      question: "¿Cómo elegir el mejor CRM para mi empresa?",
      answer: "Define tus objetivos, analiza tu buyer journey, documenta procesos clave, identifica necesidades de automatización y evalúa opciones que se integren con tus herramientas actuales."
    },
    {
      question: "¿Cómo se mide el éxito de un CRM?",
      answer: "A través de indicadores como el coste por lead, la tasa de conversión, el tiempo medio de respuesta y la retención de clientes, comparando antes y después de su implantación."
    }
  ];

  const relatedServices = [
    {
      title: "Implantación de CRM",
      description: "Configuramos tu CRM personalizado con automatizaciones, integraciones y formación completa del equipo.",
      link: "/servicios/implantacion-crm"
    },
    {
      title: "Automatización de Procesos",
      description: "Diseñamos workflows que conectan marketing, ventas y atención al cliente de forma fluida.",
      link: "/servicios/automatizacion-procesos-ventas"
    }
  ];

  const beneficios = [
    {
      icon: <Target className="h-6 w-6" />,
      title: "Segmentación avanzada",
      description: "Mensajes adaptados a cada grupo de clientes"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Automatización de campañas",
      description: "Ahorra tiempo y asegura coherencia"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Integración multicanal",
      description: "Une datos de web, redes, email y ventas"
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Análisis en tiempo real",
      description: "Mide resultados y optimiza decisiones"
    },
    {
      icon: <UserCheck className="h-6 w-6" />,
      title: "Personalización a escala",
      description: "Experiencias relevantes para cada cliente"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Procesos de venta detallados",
      description: "Seguimiento y optimización continua del ciclo comercial"
    }
  ];

  const casosUso = [
    {
      icon: <Store className="h-6 w-6" />,
      perfil: "Para un emprendedor que comienza o en crecimiento",
      nombre: "",
      descripcion: "Necesita diferenciarse en un mercado saturado con recursos limitados y quiere crear una base sólida para escalar su negocio.",
      ejemplo: "Un emprendedor que lanza su marca de ropa sostenible usa el CRM para segmentar contactos y automatizar campañas personalizadas, logrando mayor engagement con menos esfuerzo manual."
    },
    {
      icon: <Building2 className="h-6 w-6" />,
      perfil: "Para CEOs de empresas consolidadas",
      nombre: "",
      descripcion: "Buscan coherencia y confianza en todos los puntos de contacto para mantener su posición competitiva y seguir creciendo.",
      ejemplo: "Una CEO de empresa mediana registra cada interacción en el CRM, logrando mensajes consistentes entre marketing y ventas, y consigue un 25% más de retención de clientes."
    },
    {
      icon: <Target className="h-6 w-6" />,
      perfil: "Para Gerentes de Marketing con recursos limitados",
      nombre: "",
      descripcion: "Necesitan demostrar resultados medibles y optimizar cada euro invertido en marketing para justificar presupuestos futuros.",
      ejemplo: "Un gerente de marketing automatiza campañas según el progreso del cliente en el funnel y aumenta un 40% las conversiones sin incrementar el equipo."
    },
    {
      icon: <Briefcase className="h-6 w-6" />,
      perfil: "Para Directores de Ventas de equipos comerciales",
      nombre: "",
      descripcion: "Quieren digitalizar y optimizar el equipo comercial sin perder el toque humano y la cercanía con los clientes.",
      ejemplo: "Un director comercial recibe alertas automáticas cuando un lead está listo para comprar, reduciendo un 20% el tiempo de cierre y aumentando la productividad del equipo."
    },
    {
      icon: <Heart className="h-6 w-6" />,
      perfil: "Para negocios familiares que buscan modernizarse",
      nombre: "",
      descripcion: "Desean incorporar tecnología para crecer sin perder la esencia personal y el trato cercano que los caracteriza.",
      ejemplo: "Un negocio familiar usa el CRM para enviar ofertas personalizadas en fechas importantes de cada cliente, aumentando un 35% las ventas repetidas sin perder la cercanía personal."
    }
  ];

  const pasosEleccion = [
    "Investiga opciones según tu sector y objetivos",
    "Analiza el buyer journey y define etapas de ciclo de vida",
    "Documenta procesos de marketing, ventas y atención al cliente",
    "Identifica potencial de automatización",
    "Diseña la estrategia de integración de datos",
    "Define quién implantará el CRM",
    "Mide el ROI para evaluar su impacto real"
  ];

  const pasosImplantacion = [
    "Configuración adaptada a tu flujo de trabajo",
    "Integraciones con herramientas clave",
    "Formación del equipo",
    "Seguimiento y optimización continua"
  ];

  return (
    <BlogPostTemplate
      metadata={metadata}
      heroImage={{
        src: "/src/assets/crm-dashboard-hero.jpg",
        alt: "Dashboard de CRM mostrando métricas de marketing y ventas",
        width: 1200,
        height: 630
      }}
      faqs={faqs}
      relatedServices={relatedServices}
    >
      {/* Introducción */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-foreground">Qué es un CRM y por qué es clave en marketing</h2>
        
        <p className="text-lg mb-6 text-muted-foreground leading-relaxed">
          Un <strong>CRM</strong> (<em>Customer Relationship Management</em>) es mucho más que un software: es el corazón que conecta marketing, ventas y atención al cliente en una sola estrategia. Permite centralizar datos, entender a tu audiencia y ofrecer experiencias personalizadas que generan más ventas y fidelización.
        </p>
        
        <p className="text-lg mb-8 text-muted-foreground leading-relaxed">
          En Hayas lo llamamos <em>"el marketing que no se ve"</em>, porque trabaja de fondo para que todo funcione de forma fluida y eficaz. ¿Quieres conocer todo lo que puede hacer por tu negocio? Empezamos por entender su evolución.
        </p>

        <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-6 border border-primary/10">
          <p className="text-sm text-muted-foreground mb-2">
            <strong>💡 Dato clave:</strong>
          </p>
          <p className="text-foreground">
            Las empresas que usan CRM aumentan sus ventas un promedio del 41% por vendedor y mejoran la retención de clientes hasta un 27%.
          </p>
        </div>
      </section>

      {/* Historia */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-foreground">Breve historia del CRM</h2>
        
        <p className="text-lg mb-6 text-muted-foreground leading-relaxed">
          Desde los años 50, con simples agendas de clientes, hasta los CRM actuales en la nube, esta herramienta ha evolucionado para convertirse en una plataforma 360º que integra marketing, ventas y servicio.
        </p>
        
        <p className="text-lg mb-8 text-muted-foreground leading-relaxed">
          En los 80 llegaron las bases de datos relacionales, en los 90 el software especializado (Sales Force Automation) y a partir de 2000, los CRMs en la nube como Salesforce o HubSpot. Hoy, impulsados por la inteligencia artificial, permiten predecir necesidades y automatizar acciones para cada cliente.
        </p>
      </section>

      {/* Beneficios */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-foreground">Beneficios de un CRM para marketing y ventas</h2>
        
        <p className="text-lg mb-8 text-muted-foreground leading-relaxed">
          Un CRM bien implantado ofrece ventajas claras que transforman la forma en que te relacionas con tus clientes:
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {beneficios.map((beneficio, index) => (
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

      {/* Casos de uso */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-foreground">¿Quién debería usar un CRM?</h2>
        
        <p className="text-lg mb-8 text-muted-foreground leading-relaxed">
          Un CRM es útil para cualquier negocio que quiera crecer de forma organizada. Estos son algunos perfiles y casos reales:
        </p>

        <div className="space-y-8">
          {casosUso.map((caso, index) => (
            <Card key={index} className="border border-border/50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-2 bg-secondary/10 rounded-lg text-secondary">
                    {caso.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {index + 1}. {caso.perfil}
                    </h3>
                    <p className="text-muted-foreground mb-3">{caso.descripcion}</p>
                    <div className="bg-muted/30 rounded-lg p-4">
                      <p className="text-sm"><strong>Ejemplo:</strong> {caso.ejemplo}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Guía de elección */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-foreground">¿Cómo elegir el mejor CRM?</h2>
        
        <p className="text-lg mb-8 text-muted-foreground leading-relaxed">
          Para encontrar el CRM que realmente aporte valor a tu marketing, sigue estos pasos:
        </p>

        <div className="space-y-4 mb-8">
          {pasosEleccion.map((paso, index) => (
            <div key={index} className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg">
              <Badge variant="secondary" className="min-w-fit">{index + 1}</Badge>
              <p className="text-foreground">{paso}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-secondary/5 to-primary/5 rounded-xl p-6 border border-secondary/10">
          <h3 className="font-semibold mb-2 text-foreground">💡 Consejo de Hayas</h3>
          <p className="text-muted-foreground">
            No busques el CRM "perfecto", sino el que mejor se adapte a tu proceso actual y pueda crecer contigo. La simplicidad suele ser más efectiva que la complejidad.
          </p>
        </div>
      </section>

      {/* Implantación */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-foreground">Cómo implantar un CRM con éxito</h2>
        
        <p className="text-lg mb-6 text-muted-foreground leading-relaxed">
          El éxito depende de una implantación correcta. Los elementos clave son:
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {pasosImplantacion.map((paso, index) => (
            <div key={index} className="flex items-center gap-3 p-4 bg-background border border-border/50 rounded-lg">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span className="text-foreground">{paso}</span>
            </div>
          ))}
        </div>

        <p className="text-lg mb-8 text-muted-foreground leading-relaxed">
          Medir el ROI desde el inicio es clave: compara métricas como coste por lead, tasa de conversión y tiempo de respuesta antes y después.
        </p>

        <div className="bg-muted/30 rounded-xl p-6 border border-border/50">
          <h3 className="font-semibold mb-4 text-foreground">📊 Métricas clave para medir el éxito</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium text-foreground mb-2">Antes del CRM:</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Tiempo de respuesta a leads</li>
                <li>• Tasa de conversión actual</li>
                <li>• Coste por cliente adquirido</li>
                <li>• Tiempo de cierre de ventas</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-2">Después del CRM:</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Reducción en tiempo de respuesta</li>
                <li>• Aumento en conversiones</li>
                <li>• Optimización del coste de adquisición</li>
                <li>• Aceleración del ciclo de ventas</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="mb-12">
        <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-8 border border-primary/20 text-center">
          <h2 className="text-3xl font-bold mb-4 text-foreground">Implanta un CRM que impulse tu negocio</h2>
          <p className="text-lg mb-6 text-muted-foreground max-w-2xl mx-auto">
            Un CRM bien configurado puede transformar tu marketing y ventas en semanas. En Hayas, nos encargamos de todo: elección, configuración, automatización e integración.
          </p>
          <Link 
            to="/servicios/implantacion-crm"
            className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
          >
            Descubre nuestro servicio de Implantación de CRM
          </Link>
        </div>
      </section>
    </BlogPostTemplate>
  );
};

export default BlogCrmQueEsBeneficios;