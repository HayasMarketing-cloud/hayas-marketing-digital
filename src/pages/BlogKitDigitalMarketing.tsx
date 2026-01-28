import React from 'react';
import BlogPostTemplate from '@/components/BlogPost/BlogPostTemplate';
import { Button } from '@/components/ui/button';
import kitDigitalHero from '../assets/kit-digital-hero-updated.jpg';
import { Link } from 'react-router-dom';
import { AlertTriangle, Calendar, CheckCircle, DollarSign, FileText, Globe, Shield, Users } from 'lucide-react';
import { useLocalizedRoutes } from '@/hooks/useLocalizedRoutes';

const metadata = {
  title: "Guía del Kit Digital: qué es, para quién y cómo aprovecharlo (antes del 31 de octubre de 2025)",
  description: "Descubre todo sobre el Kit Digital: qué es, quién puede solicitarlo, cuánto dinero puedes conseguir y cómo aprovecharlo para digitalizar tu negocio antes del 31 de octubre de 2025.",
  date: "2025-01-19",
  readTime: "8 min de lectura",
  category: "Digitalización",
  author: "Hayas Marketing",
  tags: ["Kit Digital", "Digitalización", "Ayudas Públicas", "Marketing Digital", "Transformación Digital"],
  canonical: "/es/blog/kit-digital-marketing-guia-completa-2025",
  ogImage: "/kit-digital-marketing-hero.jpg",
  metaTitle: "Kit Digital para Marketing: Guía Completa 2025 | Hayas Marketing",
  metaDescription: "Guía completa del Kit Digital 2025: requisitos, convocatorias abiertas, soluciones financiadas y cómo aprovecharlo para tu marketing digital. ¡Hasta 12.000€!",
  mainKeyword: "kit digital para marketing",
  secondaryKeywords: ["kit digital 2025", "ayudas digitalización", "bono digital", "marketing digital subvencionado"],
  structuredData: {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Guía del Kit Digital: qué es, para quién y cómo aprovecharlo (antes del 31 de octubre de 2025)",
    "description": "Descubre todo sobre el Kit Digital: qué es, quién puede solicitarlo, cuánto dinero puedes conseguir y cómo aprovecharlo para digitalizar tu negocio antes del 31 de octubre de 2025.",
    "image": "https://hayasmarketing.com/kit-digital-marketing-hero.jpg",
    "author": {
      "@type": "Organization",
      "name": "Hayas Marketing"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Hayas Marketing",
      "logo": {
        "@type": "ImageObject",
        "url": "https://hayasmarketing.com/logo.png"
      }
    },
    "datePublished": "2025-01-19",
    "dateModified": "2025-01-19",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://hayasmarketing.com/blog/kit-digital-marketing-guia-completa-2025"
    }
  }
};

const faqs = [
  {
    question: "¿Puedo usar el Kit Digital para marketing digital?",
    answer: "Sí, el Kit Digital cubre varias soluciones relacionadas con marketing digital como desarrollo web, tienda online, gestión de redes sociales y CRM. Sin embargo, no financia campañas publicitarias en Google Ads o Meta Ads."
  },
  {
    question: "¿Cuándo termina la convocatoria del Kit Digital?",
    answer: "Para autónomos y microempresas (0-2 empleados), la convocatoria termina el 31 de octubre de 2025. Tras esta fecha no se prevén más prórrogas para este segmento."
  },
  {
    question: "¿Tengo que adelantar el dinero del Kit Digital?",
    answer: "No, el Agente Digitalizador gestiona la ayuda directamente con Red.es. Solo tendrás que pagar el IVA correspondiente a los servicios contratados."
  },
  {
    question: "¿Puedo elegir cualquier empresa para implementar las soluciones?",
    answer: "No, debes elegir un Agente Digitalizador autorizado por Red.es. Solo estos proveedores pueden gestionar las ayudas del Kit Digital."
  },
  {
    question: "¿Qué pasa si mi empresa tiene más de 2 empleados?",
    answer: "Las convocatorias para empresas de 3 o más empleados ya finalizaron entre diciembre de 2024 y junio de 2025. Solo quedan abiertas las de 0-2 empleados hasta octubre de 2025."
  }
];

const relatedServices = [
  {
    title: "Diseño Web Profesional",
    description: "Creamos tu sitio web optimizado y compatible con el Kit Digital",
    link: "/servicios/diseno-web"
  },
  {
    title: "Tienda Online",
    description: "Desarrollamos tu comercio electrónico con las mejores prácticas",
    link: "/servicios/tienda-online"
  }
];

const BlogKitDigitalMarketing: React.FC = () => {
  const { getRoute } = useLocalizedRoutes();
  
  return (
    <BlogPostTemplate 
      metadata={metadata}
      heroImage={{ src: kitDigitalHero, alt: "Kit Digital - Guía completa para digitalizar tu negocio", width: 1200, height: 675 }}
      faqs={faqs}
      relatedServices={relatedServices}
    >
      {/* Alerta sobre el plazo */}
      <div className="bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-lg p-6 mb-8">
        <div className="flex items-start gap-3">
          <AlertTriangle className="h-6 w-6 text-orange-600 mt-1 flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-orange-800 mb-2">⚠️ Última oportunidad para solicitar el Kit Digital</h3>
            <p className="text-orange-700 text-sm">
              Si eres autónomo o microempresa (0-2 empleados), tienes hasta el <strong>31 de octubre de 2025</strong> para solicitar tu bono. 
              Tras esta fecha no habrá más convocatorias para este segmento.
            </p>
          </div>
        </div>
      </div>

      <h2 className="text-3xl font-bold mb-6 text-foreground">¿Qué es el Kit Digital?</h2>
      
      <p className="text-lg mb-6 text-muted-foreground leading-relaxed">
        El <strong>Kit Digital</strong> es una iniciativa pública para impulsar la digitalización de autónomos, microempresas y pymes. 
        A través de este programa, se ofrecen bonos digitales que financian la implantación de soluciones tecnológicas en las empresas, 
        con el objetivo de mejorar su competitividad, eficiencia y presencia en el entorno digital.
      </p>

      <p className="mb-8 text-muted-foreground">
        El importe de la ayuda varía en función del tamaño de la empresa y se destina a cubrir servicios clave como: 
        desarrollo web, comercio electrónico, CRM, facturación electrónica, analítica de datos o ciberseguridad, entre otros.
      </p>

      <h2 className="text-3xl font-bold mb-6 text-foreground">¿Quién puede solicitar el Kit Digital?</h2>

      <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-6 mb-8 border border-primary/10">
        <div className="flex items-center gap-3 mb-4">
          <Users className="h-6 w-6 text-primary" />
          <h3 className="text-xl font-semibold text-foreground">Está dirigido a:</h3>
        </div>
        
        <div className="bg-gradient-to-r from-orange-50 to-yellow-50 border border-orange-200 rounded-lg p-4 mb-4">
          <p className="text-orange-800 font-semibold text-sm mb-1">📍 Requisito fundamental:</p>
          <p className="text-orange-700 text-sm">
            Los beneficiarios deben ser <strong>pequeñas empresas, microempresas o autónomos con domicilio fiscal en España</strong>.
          </p>
        </div>
        
        <ul className="space-y-3 text-muted-foreground">
          <li className="flex items-start gap-2">
            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
            <span>Autónomos y microempresas (incluso sin empleados)</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
            <span>Pequeñas y medianas empresas de hasta 250 trabajadores</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
            <span>Entidades específicas como comunidades de bienes, sociedades civiles y explotaciones agrarias</span>
          </li>
        </ul>
      </div>

      <p className="mb-8 text-muted-foreground">
        Los requisitos básicos incluyen llevar al menos 6 meses de actividad, estar al corriente de las obligaciones tributarias 
        y con la Seguridad Social, y no superar el límite de ayudas de minimis fijado por la UE.
      </p>

      <h2 className="text-3xl font-bold mb-6 text-foreground">Convocatorias vigentes en 2025</h2>

      <p className="mb-6 text-muted-foreground">
        A fecha de agosto de 2025, las únicas convocatorias abiertas son:
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <DollarSign className="h-6 w-6 text-green-600" />
            <h3 className="text-lg font-semibold text-green-800">Segmento III (0–2 empleados)</h3>
          </div>
          <p className="text-green-700 text-sm mb-4">Incluye autónomos y microempresas sin plantilla.</p>
          <div className="space-y-2 text-sm">
            <p><span className="font-semibold">💰 Bono:</span> hasta 3.000 €</p>
            <p><span className="font-semibold">📅 Plazo:</span> hasta el 31 de octubre de 2025</p>
            <p className="text-red-600 font-medium">⚠️ Última oportunidad: tras esta fecha no se prevén más prórrogas</p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <DollarSign className="h-6 w-6 text-blue-600" />
            <h3 className="text-lg font-semibold text-blue-800">Convocatoria especial</h3>
          </div>
          <p className="text-blue-700 text-sm mb-4">
            Para comunidades de bienes, sociedades civiles y explotaciones agrarias (hasta 50 empleados)
          </p>
          <div className="space-y-2 text-sm">
            <p><span className="font-semibold">💰 Bono:</span> hasta 12.000 € (según tamaño)</p>
            <p><span className="font-semibold">📅 Plazo:</span> hasta el 31 de octubre de 2025</p>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8">
        <p className="text-yellow-800 text-sm">
          <strong>Importante:</strong> Todas las demás convocatorias para empresas de mayor tamaño (a partir de 3 empleados) 
          ya finalizaron entre diciembre de 2024 y junio de 2025.
        </p>
      </div>

      <h2 className="text-3xl font-bold mb-6 text-foreground">¿En qué se puede utilizar el bono?</h2>

      <p className="mb-6 text-muted-foreground">
        El bono del Kit Digital financia soluciones digitales de un catálogo oficial que incluye:
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {[
          { icon: Globe, text: "Sitio web y presencia en Internet" },
          { icon: DollarSign, text: "Tienda online y comercio electrónico" },
          { icon: Users, text: "Gestión de redes sociales" },
          { icon: FileText, text: "CRM y gestión de clientes" },
          { icon: FileText, text: "Factura electrónica" },
          { icon: FileText, text: "Business Intelligence y analítica" },
          { icon: FileText, text: "ERP y gestión de procesos" },
          { icon: Globe, text: "Oficina virtual y herramientas cloud" },
          { icon: Shield, text: "Comunicaciones seguras" },
          { icon: Shield, text: "Ciberseguridad" },
          { icon: Globe, text: "Presencia avanzada en Internet" },
          { icon: DollarSign, text: "Integración en marketplaces" }
        ].map((item, index) => (
          <div key={index} className="flex items-center gap-3 p-3 bg-background border border-border rounded-lg">
            <item.icon className="h-5 w-5 text-primary flex-shrink-0" />
            <span className="text-sm text-muted-foreground">{item.text}</span>
          </div>
        ))}
      </div>

      <p className="mb-8 text-muted-foreground">
        Cada empresa puede elegir varias soluciones hasta agotar el importe de su bono, siempre dentro de las categorías disponibles.
      </p>

      <h3 className="text-xl font-semibold mb-4 text-foreground">Gastos no cubiertos</h3>

      <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8">
        <p className="text-red-800 text-sm mb-2">
          <strong>El programa NO financia:</strong>
        </p>
        <ul className="text-red-700 text-sm space-y-1">
          <li>• Compra de hardware (ordenadores, móviles, etc.)</li>
          <li>• Campañas publicitarias en plataformas digitales como Google Ads o Meta Ads</li>
          <li>• IVA (debe ser abonado por la empresa)</li>
          <li>• Mantenimientos o formaciones posteriores a la implantación</li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold mb-6 text-foreground">¿Cómo solicitar el Kit Digital?</h2>

      <p className="mb-6 text-muted-foreground">
        El proceso para solicitar el bono digital es sencillo, pero requiere seguir varios pasos en orden:
      </p>

      <div className="space-y-6 mb-8">
        {[
          {
            step: "1",
            title: "Regístrate en el área privada de Acelera Pyme",
            description: "Este es el punto de partida obligatorio para todas las solicitudes."
          },
          {
            step: "2", 
            title: "Completa el test de autodiagnóstico",
            description: "Te permitirá conocer el nivel de digitalización actual de tu negocio y es un requisito formal antes de acceder a la ayuda."
          },
          {
            step: "3",
            title: "Consulta la convocatoria correspondiente a tu segmento",
            description: "En el caso de autónomos y microempresas (Segmento III, con 0–2 empleados), puedes presentar la solicitud telemática en la sede electrónica de Red.es."
          },
          {
            step: "4",
            title: "Envía la solicitud",
            description: "Tendrás que completar la documentación básica y las declaraciones responsables para confirmar que cumples con los requisitos."
          },
          {
            step: "5",
            title: "Selecciona la solución o soluciones de digitalización",
            description: "Una vez aprobado el bono, deberás decidir cómo invertirlo. Por ejemplo, si eres autónomo o microempresa, la opción más recomendable suele ser la Solución de sitio web y presencia en Internet."
          },
          {
            step: "6",
            title: "Elige un Agente Digitalizador autorizado",
            description: "Este será el proveedor que implante la solución elegida y gestione la ayuda directamente con Red.es, sin que tú tengas que adelantar el coste (más allá del IVA)."
          }
        ].map((item, index) => (
          <div key={index} className="flex gap-4 p-4 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg border border-primary/10">
            <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
              {item.step}
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-3xl font-bold mb-6 text-foreground">Requisitos principales para solicitar la ayuda</h2>

      <ul className="space-y-3 mb-8 text-muted-foreground">
        {[
          "Ser una pequeña empresa, microempresa o autónomo",
          "Cumplir con los límites financieros y de plantilla que definen las categorías de empresa",
          "Estar en alta y con la antigüedad mínima exigida en cada convocatoria",
          "No estar en situación de crisis (por ejemplo, concurso de acreedores)",
          "Estar al corriente de las obligaciones tributarias y con la Seguridad Social",
          "No superar el límite de ayudas de minimis establecido por la normativa europea"
        ].map((requirement, index) => (
          <li key={index} className="flex items-start gap-2">
            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
            <span>{requirement}</span>
          </li>
        ))}
      </ul>

      <h2 className="text-3xl font-bold mb-6 text-foreground">¿Dudas durante el proceso?</h2>

      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6 mb-8">
        <p className="text-blue-800 mb-4">
          Si necesitas resolver cualquier cuestión durante la solicitud, puedes ponerte en contacto directamente con el 
          Servicio de Atención para Autónomos y Empresas de Acelera Pyme:
        </p>
        <div className="space-y-2 text-blue-700">
          <p><span className="font-semibold">📞 Teléfono:</span> 900 909 001</p>
          <p><span className="font-semibold">📧 Email:</span> info@acelerapyme.gob.es</p>
          <p><span className="font-semibold">🕘 Horario:</span> Lunes a viernes de 09:00 a 18:00 h</p>
        </div>
      </div>

      <h2 className="text-3xl font-bold mb-6 text-foreground">¿Por qué aprovecharlo ahora?</h2>

      <p className="text-lg text-muted-foreground mb-6">
        El Kit Digital es una oportunidad única para modernizar tu negocio con un apoyo económico externo. 
        Si eres autónomo, microempresa o una de las entidades incluidas en la convocatoria especial, 
        tienes hasta el <strong className="text-foreground">31 de octubre de 2025</strong> para solicitar tu bono.
      </p>

      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-6 mb-8 border border-primary/20">
        <p className="text-foreground font-medium text-center">
          No esperes al último momento: planifica las soluciones que más impacto pueden tener en tu negocio 
          y da el salto hacia la digitalización con el respaldo de esta ayuda pública.
        </p>
      </div>

      <div className="text-center mt-12">
        <Link to={getRoute('contact')}>
          <Button size="lg" className="text-lg px-8 py-4">
            Solicitar Consulta Gratuita
          </Button>
        </Link>
        <p className="text-sm text-muted-foreground mt-4">
          Te ayudamos a aprovechar al máximo tu Kit Digital
        </p>
      </div>
    </BlogPostTemplate>
  );
};

export default BlogKitDigitalMarketing;