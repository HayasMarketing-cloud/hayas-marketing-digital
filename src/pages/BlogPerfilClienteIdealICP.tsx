import React from 'react';
import BlogPostTemplate from '@/components/BlogPost/BlogPostTemplate';
import { CheckCircle, Target, Users, TrendingUp } from 'lucide-react';

const BlogPerfilClienteIdealICP = () => {
  const metadata = {
    title: "Perfil de cliente ideal: qué es y cómo definirlo para tu negocio",
    description: "Descubre cómo crear el perfil de cliente ideal (ICP) perfecto para optimizar tu estrategia de marketing, mejorar las ventas y maximizar la rentabilidad de tu negocio.",
    date: "2025-01-10",
    readTime: "10 min de lectura",
    category: "Estrategia de Marketing",
    author: "Equipo Hayas Marketing",
    tags: ["perfil cliente ideal", "ICP", "estrategia marketing", "segmentación", "ventas"],
    canonical: "/es/blog/perfil-cliente-ideal",
    ogImage: "/perfil-cliente-ideal-hero.jpg",
    metaTitle: "Perfil de cliente ideal (ICP): qué es y cómo definirlo - Guía 2025",
    metaDescription: "Aprende a crear el perfil de cliente ideal (ICP) perfecto para tu negocio. Guía completa con ejemplos, templates y estrategias para maximizar tus ventas.",
    mainKeyword: "perfil cliente ideal",
    secondaryKeywords: ["ICP marketing", "ideal customer profile", "segmentación clientes", "cliente objetivo"],
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Perfil de cliente ideal: qué es y cómo definirlo para tu negocio",
      "description": "Descubre cómo crear el perfil de cliente ideal (ICP) perfecto para optimizar tu estrategia de marketing, mejorar las ventas y maximizar la rentabilidad de tu negocio.",
      "image": "https://hayasmarketing.com/perfil-cliente-ideal-hero.jpg",
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
      "datePublished": "2025-01-10",
      "dateModified": "2025-01-10"
    }
  };

  const faqs = [
    {
      question: "¿Cuál es la diferencia entre buyer persona e ICP?",
      answer: "El ICP (Ideal Customer Profile) se centra en las características de la empresa ideal (sector, tamaño, ingresos), mientras que el buyer persona describe a la persona específica que toma las decisiones dentro de esa empresa (rol, motivaciones, desafíos)."
    },
    {
      question: "¿Cómo sé si mi perfil de cliente ideal es correcto?",
      answer: "Un ICP correcto debe generar tasas de conversión más altas, ciclos de venta más cortos y mayor retención de clientes. Analiza métricas como CAC (coste de adquisición), LTV (valor de vida del cliente) y tasa de conversión."
    },
    {
      question: "¿Con qué frecuencia debo revisar mi ICP?",
      answer: "Revisa tu ICP cada trimestre y actualízalo cuando lances nuevos productos, entres en nuevos mercados o detectes cambios significativos en los patrones de compra de tus clientes."
    },
    {
      question: "¿Puede una empresa tener múltiples ICPs?",
      answer: "Sí, especialmente empresas con múltiples líneas de producto o que operan en diferentes mercados. Sin embargo, es recomendable empezar con 1-3 ICPs bien definidos antes de expandirse."
    }
  ];

  const relatedServices = [
    {
      title: "Estrategia de Marketing Digital",
      description: "Desarrollamos estrategias personalizadas basadas en tu perfil de cliente ideal para maximizar el ROI.",
      link: "/estrategia-contenidos"
    },
    {
      title: "Captación de Leads",
      description: "Implementamos sistemas de captación dirigidos específicamente a tu cliente ideal.",
      link: "/captacion-leads"
    }
  ];

  return (
    <BlogPostTemplate
      metadata={metadata}
      heroImage={{
        src: "/perfil-cliente-ideal-hero.jpg",
        alt: "Equipo de marketing analizando datos de clientes ideales en dashboard digital"
      }}
      faqs={faqs}
      relatedServices={relatedServices}
    >
      <div className="space-y-8">
        <section>
          <p className="text-lg text-muted-foreground mb-6">
            <strong>Definir correctamente tu perfil de cliente ideal (ICP) es la base de cualquier estrategia de marketing exitosa.</strong> Sin esta claridad, estarás disparando a ciegas, gastando recursos en audiencias que nunca se convertirán en clientes rentables.
          </p>
          
          <p className="mb-6">
            En esta guía te mostraremos <strong>qué es exactamente un ICP, cómo se diferencia de un buyer persona</strong> y te daremos un framework práctico para definir el tuyo, con ejemplos reales y plantillas que puedes implementar inmediatamente.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6 text-foreground">¿Qué es el perfil de cliente ideal (ICP)?</h2>
          
          <p className="mb-6">
            El <strong>Ideal Customer Profile (ICP)</strong> es una descripción detallada de la empresa o persona que obtiene el máximo valor de tu producto o servicio, y que a su vez genera el mayor valor para tu negocio.
          </p>

          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold mb-4 text-foreground flex items-center gap-2">
              <Target className="h-5 w-5" />
              Características clave de un ICP efectivo
            </h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span><strong>Rentabilidad:</strong> Genera ingresos superiores al coste de adquisición</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span><strong>Retención:</strong> Permanece más tiempo como cliente</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span><strong>Escalabilidad:</strong> Tiene potencial de crecimiento y upselling</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span><strong>Recomendación:</strong> Actúa como embajador de tu marca</span>
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6 text-foreground">ICP vs Buyer Persona: diferencias clave</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/20 dark:to-blue-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
              <h3 className="text-xl font-semibold mb-3 text-blue-800 dark:text-blue-200 flex items-center gap-2">
                <Target className="h-5 w-5" />
                ICP (Ideal Customer Profile)
              </h3>
              <ul className="list-disc list-inside space-y-2 text-blue-700 dark:text-blue-300 text-sm">
                <li>Se enfoca en la <strong>empresa/organización</strong></li>
                <li>Criterios: sector, tamaño, ingresos, ubicación</li>
                <li>Identifica <strong>qué empresas</strong> comprar</li>
                <li>Usado para <strong>segmentación y targeting</strong></li>
                <li>Más estratégico y cuantitativo</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/20 dark:to-green-900/20 rounded-lg p-6 border border-green-200 dark:border-green-800">
              <h3 className="text-xl font-semibold mb-3 text-green-800 dark:text-green-200 flex items-center gap-2">
                <Users className="h-5 w-5" />
                Buyer Persona
              </h3>
              <ul className="list-disc list-inside space-y-2 text-green-700 dark:text-green-300 text-sm">
                <li>Se enfoca en la <strong>persona individual</strong></li>
                <li>Criterios: rol, motivaciones, desafíos, comportamiento</li>
                <li>Identifica <strong>quién dentro</strong> de la empresa decide</li>
                <li>Usado para <strong>messaging y contenido</strong></li>
                <li>Más táctico y cualitativo</li>
              </ul>
            </div>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-6">
            <p className="text-amber-800">
              <strong>En resumen:</strong> El ICP te dice <em>a qué empresas</em> dirigirte, el buyer persona te dice <em>cómo hablarles</em>.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6 text-foreground">Framework para definir tu ICP</h2>
          
          <h3 className="text-2xl font-semibold mb-4 text-foreground">1. Analiza tus mejores clientes actuales</h3>
          <p className="mb-6">
            Empieza por identificar a tus <strong>top 10-15 clientes más rentables</strong>. Estos son los que:
          </p>

          <ul className="list-disc list-inside space-y-2 mb-6 text-muted-foreground">
            <li>Generan mayor volumen de ingresos</li>
            <li>Tienen menor coste de adquisición</li>
            <li>Permanecen más tiempo contigo</li>
            <li>Compran productos/servicios adicionales</li>
            <li>Te recomiendan a otros clientes</li>
          </ul>

          <h3 className="text-2xl font-semibold mb-4 text-foreground">2. Identifica patrones comunes</h3>
          <p className="mb-6">
            Busca características que se repiten en tus mejores clientes:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Para B2B:</h4>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground text-sm">
                <li><strong>Sector:</strong> ¿En qué industrias destacas?</li>
                <li><strong>Tamaño:</strong> Número de empleados, facturación</li>
                <li><strong>Geografía:</strong> Ubicación, mercados</li>
                <li><strong>Tecnología:</strong> Stack tecnológico que usan</li>
                <li><strong>Madurez:</strong> Fase de crecimiento de la empresa</li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Para B2C:</h4>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground text-sm">
                <li><strong>Demografía:</strong> Edad, ubicación, ingresos</li>
                <li><strong>Profesión:</strong> Sector, nivel profesional</li>
                <li><strong>Comportamiento:</strong> Hábitos de compra, canales preferidos</li>
                <li><strong>Psicografía:</strong> Valores, intereses, estilo de vida</li>
                <li><strong>Situación:</strong> Momento vital, necesidades específicas</li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-semibold mb-4 text-foreground">3. Valida con datos cuantitativos</h3>
          <p className="mb-6">
            No te bases solo en intuición. <strong>Valida tus hipótesis con datos reales</strong>:
          </p>

          <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 mb-6">
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Métricas clave para validar tu ICP
            </h4>
            <ul className="grid md:grid-cols-2 gap-2 text-sm text-muted-foreground">
              <li>• <strong>CAC</strong> (Customer Acquisition Cost)</li>
              <li>• <strong>LTV</strong> (Customer Lifetime Value)</li>
              <li>• <strong>Tasa de conversión</strong> por segmento</li>
              <li>• <strong>Tiempo de ciclo de venta</strong></li>
              <li>• <strong>Tasa de retención</strong></li>
              <li>• <strong>NPS</strong> (Net Promoter Score)</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6 text-foreground">Ejemplo práctico de ICP</h2>
          
          <div className="bg-white dark:bg-gray-900 rounded-xl border border-border/50 p-6 mb-8">
            <h3 className="text-xl font-semibold mb-4 text-foreground">ICP para una agencia de marketing digital</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3 text-primary">Características firmográficas</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><strong>Sector:</strong> E-commerce, SaaS, Servicios profesionales</li>
                  <li><strong>Tamaño:</strong> 10-100 empleados</li>
                  <li><strong>Ingresos:</strong> €500K - €5M anuales</li>
                  <li><strong>Ubicación:</strong> España, Portugal, México</li>
                  <li><strong>Crecimiento:</strong> 20%+ anual</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3 text-secondary">Características situacionales</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><strong>Desafío:</strong> Necesita escalar adquisición de clientes</li>
                  <li><strong>Presupuesto:</strong> €3K-€15K/mes en marketing</li>
                  <li><strong>Tecnología:</strong> HubSpot, Shopify, Google Analytics</li>
                  <li><strong>Decisor:</strong> CMO, CEO, Head of Marketing</li>
                  <li><strong>Urgencia:</strong> Busca resultados en 3-6 meses</li>
                </ul>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-semibold mb-4 text-foreground">Matriz de priorización del ICP</h3>
          <p className="mb-6">
            Una forma efectiva de organizar tu ICP es mediante una <strong>matriz de priorización</strong> que clasifique las características de tus clientes potenciales según su importancia para tu negocio:
          </p>

          <div className="mb-8">
            <img 
              src="/lovable-uploads/6fad16c6-2f7d-4554-89d6-fd7cf3e55d10.png" 
              alt="Matriz de priorización del perfil de cliente ideal mostrando clasificación de países, empleados, buyer persona, presupuesto e industria en categorías HIGH, MEDIUM y LOW"
              className="w-full h-auto rounded-lg border border-border/50 shadow-lg"
            />
          </div>
          
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
            <p className="text-blue-800">
              <strong>Cómo usar esta matriz:</strong> Los clientes que encajen en la categoría "HIGH" en múltiples dimensiones deben ser tu prioridad absoluta. Los de categoría "MEDIUM" pueden ser oportunidades secundarias, mientras que los "LOW" requieren mayor inversión para convertirse.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6 text-foreground">Cómo usar tu ICP en marketing y ventas</h2>
          
          <div className="space-y-6 mb-8">
            <div className="border-l-4 border-primary pl-4">
              <h3 className="text-lg font-semibold mb-2 text-foreground">En Marketing</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm">
                <li>Segmentación de audiencias en publicidad digital</li>
                <li>Creación de contenido específico para cada ICP</li>
                <li>Optimización de landing pages por perfil</li>
                <li>Personalización de email marketing</li>
              </ul>
            </div>
            
            <div className="border-l-4 border-secondary pl-4">
              <h3 className="text-lg font-semibold mb-2 text-foreground">En Ventas</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm">
                <li>Priorización de leads y oportunidades</li>
                <li>Personalización de propuestas comerciales</li>
                <li>Enfoque de prospección y cold outreach</li>
                <li>Asignación de recursos de ventas</li>
              </ul>
            </div>
            
            <div className="border-l-4 border-accent pl-4">
              <h3 className="text-lg font-semibold mb-2 text-foreground">En Producto</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm">
                <li>Desarrollo de funcionalidades específicas</li>
                <li>Estrategia de pricing por segmento</li>
                <li>Roadmap de producto orientado al ICP</li>
                <li>Experiencia de usuario personalizada</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6 text-foreground">Errores comunes al definir el ICP</h2>
          
          <div className="space-y-4 mb-8">
            <div className="bg-red-50 border-l-4 border-red-400 p-4">
              <h3 className="font-semibold text-red-800 mb-2">❌ Ser demasiado amplio o genérico</h3>
              <p className="text-red-700 text-sm">"Empresas que necesitan marketing" no es un ICP útil. Sé específico.</p>
            </div>
            
            <div className="bg-red-50 border-l-4 border-red-400 p-4">
              <h3 className="font-semibold text-red-800 mb-2">❌ Basarse solo en intuición</h3>
              <p className="text-red-700 text-sm">Usa datos reales de tus mejores clientes actuales para validar.</p>
            </div>
            
            <div className="bg-red-50 border-l-4 border-red-400 p-4">
              <h3 className="font-semibold text-red-800 mb-2">❌ No actualizar el ICP regularmente</h3>
              <p className="text-red-700 text-sm">Tu ICP debe evolucionar con tu negocio y el mercado.</p>
            </div>
            
            <div className="bg-red-50 border-l-4 border-red-400 p-4">
              <h3 className="font-semibold text-red-800 mb-2">❌ No comunicarlo a todo el equipo</h3>
              <p className="text-red-700 text-sm">Marketing, ventas y producto deben conocer y usar el ICP.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6 text-foreground">Próximos pasos</h2>
          
          <p className="mb-6">
            Definir tu perfil de cliente ideal es solo el primer paso. Ahora necesitas <strong>implementar estrategias específicas</strong> para atraer, convertir y retener a estos clientes ideales.
          </p>

          <div className="bg-gradient-to-r from-primary to-secondary text-white rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">¿Listo para maximizar tu ROI?</h3>
            <p className="mb-6 opacity-90">
              Te ayudamos a definir tu ICP perfecto y crear estrategias de marketing que generen resultados medibles.
            </p>
            <a 
              href="/es/contacto" 
              className="inline-flex items-center px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-50 transition-colors"
            >
              Solicita tu consulta estratégica gratuita →
            </a>
          </div>
        </section>
      </div>
    </BlogPostTemplate>
  );
};

export default BlogPerfilClienteIdealICP;