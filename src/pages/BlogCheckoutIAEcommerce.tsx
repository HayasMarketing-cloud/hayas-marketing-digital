import React from 'react';
import { Link } from 'react-router-dom';
import BlogPostTemplate from '@/components/BlogPost/BlogPostTemplate';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Bot, Globe, ArrowRight, CheckCircle, AlertTriangle, TrendingUp, Database, Layers } from 'lucide-react';
import checkoutHero from '@/assets/checkout-ia-ecommerce-hero.jpg';

const BlogCheckoutIAEcommerce = () => {
  const metadata = {
    title: "Cuando el checkout deja de estar en tu web: lo que Copilot, ChatGPT y Gemini cambian para el ecommerce",
    description: "Microsoft, OpenAI y Google convergen en convertir la conversación con IA en un canal transaccional completo. Análisis estratégico de Copilot Checkout, ChatGPT Instant Checkout y Google UCP para ecommerce managers.",
    date: "2026-03-02",
    readTime: "12 min",
    category: "Ecommerce e IA",
    author: "Rubén Reyero",
    tags: ["Ecommerce", "IA", "Tienda Online", "Estrategia Digital", "ChatGPT", "Google", "Microsoft"],
    canonical: "/es/blog/checkout-ia-ecommerce-copilot-chatgpt-gemini",
    ogImage: "/images/blog/checkout-ia-ecommerce-hero.jpg",
    metaTitle: "Checkout en IA: Copilot, ChatGPT y Gemini Cambian el Ecommerce | Hayas Marketing",
    metaDescription: "Microsoft, OpenAI y Google convierten la conversación con IA en canal transaccional. Análisis estratégico de Copilot Checkout, ChatGPT Instant Checkout y Google UCP.",
    mainKeyword: "checkout IA ecommerce",
    secondaryKeywords: ["Copilot Checkout", "ChatGPT Instant Checkout", "Google UCP", "comercio conversacional", "ecommerce manager"],
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Cuando el checkout deja de estar en tu web: lo que Copilot, ChatGPT y Gemini cambian para el ecommerce",
      "description": "Microsoft, OpenAI y Google convergen en convertir la conversación con IA en un canal transaccional completo.",
      "image": "https://hayasmarketing.com/images/blog/checkout-ia-ecommerce-hero.jpg",
      "author": {
        "@type": "Person",
        "name": "Rubén Reyero",
        "url": "https://hayasmarketing.com/es/autor/ruben-reyero"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Hayas Marketing",
        "@id": "https://hayasmarketing.com/#organization",
        "logo": {
          "@type": "ImageObject",
          "url": "https://hayasmarketing.com/lovable-uploads/hayas-logo.webp",
          "width": 300,
          "height": 100
        }
      },
      "datePublished": "2026-03-02T00:00:00+01:00",
      "dateModified": "2026-03-02T00:00:00+01:00",
      "articleSection": "Ecommerce e IA",
      "keywords": ["checkout IA", "Copilot Checkout", "ChatGPT ecommerce", "Google UCP", "comercio conversacional"],
      "mentions": [
        { "@type": "Thing", "name": "Microsoft Copilot", "sameAs": "https://www.wikidata.org/wiki/Q125309674" },
        { "@type": "Thing", "name": "ChatGPT", "sameAs": "https://www.wikidata.org/wiki/Q115539300" },
        { "@type": "Thing", "name": "Google Gemini", "sameAs": "https://www.wikidata.org/wiki/Q115541552" },
        { "@type": "Thing", "name": "Shopify", "sameAs": "https://www.wikidata.org/wiki/Q4351583" },
        { "@type": "Thing", "name": "Stripe", "sameAs": "https://www.wikidata.org/wiki/Q15052408" }
      ]
    }
  };

  const faqs = [
    {
      question: "¿Qué es Copilot Checkout de Microsoft?",
      answer: "Es una funcionalidad presentada en NRF 2026 que permite a los usuarios buscar, comparar y comprar productos directamente dentro de Microsoft Copilot, sin salir del chat. Se integra con Shopify, Stripe, PayPal y Etsy, y el comerciante mantiene el control como Merchant of Record."
    },
    {
      question: "¿Cómo funciona el Instant Checkout de ChatGPT?",
      answer: "Lanzado en septiembre de 2025, permite comprar productos directamente desde la conversación con ChatGPT. Disponible para usuarios Free, Plus y Pro en EE. UU., se integra con Shopify y Stripe. Los comerciantes pagan una pequeña comisión por transacción y mantienen la titularidad."
    },
    {
      question: "¿Qué es el Universal Commerce Protocol (UCP) de Google?",
      answer: "Es un estándar abierto desarrollado por Google junto a Shopify, Walmart, Target y más de 20 grandes actores. Habilita compras conversacionales en Gemini y AI Mode en Search, permitiendo a agentes de IA consultar catálogo, inventario y completar compras manteniendo al comerciante como Merchant of Record."
    },
    {
      question: "¿Mi ecommerce necesita adaptarse al comercio conversacional?",
      answer: "Si bien las webs no van a desaparecer, la tendencia estructural indica que más compras se iniciarán en IA. Lo prioritario hoy es tener catálogos normalizados, atributos claros, feeds actualizados y presencia correcta en Google Merchant Center para estar preparado."
    },
    {
      question: "¿El comercio conversacional es una amenaza para las tiendas online?",
      answer: "Depende de la madurez digital. Para ecommerce que dependen de tácticas de urgencia o funnels forzados puede ser un riesgo. Para negocios con producto diferencial, marca sólida e infraestructura de datos cuidada, se convierte en un nuevo canal con menor fricción."
    }
  ];

  const relatedServices = [
    {
      title: "Tienda Online",
      description: "Creamos tu ecommerce preparado para el comercio conversacional con catálogos estructurados y feeds optimizados.",
      link: "/es/servicios/tienda-online"
    },
    {
      title: "Consultoría Estratégica Digital",
      description: "Analizamos tu infraestructura digital y te preparamos para los nuevos canales de venta con IA.",
      link: "/es/soluciones/activa-tus-ventas"
    }
  ];

  const commonPatterns = [
    { icon: <ShoppingCart className="h-5 w-5" />, text: "La compra ocurre dentro de la conversación." },
    { icon: <Globe className="h-5 w-5" />, text: "El usuario no necesita visitar la web." },
    { icon: <Database className="h-5 w-5" />, text: "El comerciante mantiene control de datos y operación." },
    { icon: <Layers className="h-5 w-5" />, text: "Las integraciones pasan por Shopify, Stripe y feeds estructurados." },
    { icon: <Bot className="h-5 w-5" />, text: "La interfaz se desplaza del navegador al asistente." },
  ];

  return (
    <BlogPostTemplate
      metadata={metadata}
      heroImage={{
        src: checkoutHero,
        alt: "Checkout conversacional con IA: Copilot, ChatGPT y Gemini transforman el ecommerce",
        width: 1200,
        height: 630,
        loading: "eager",
        fetchPriority: "high"
      }}
      faqs={faqs}
      relatedServices={relatedServices}
    >
      {/* Introducción */}
      <section className="mb-12">
        <p className="text-lg mb-6 text-muted-foreground leading-relaxed">
          Durante años, el funnel del ecommerce ha sido relativamente estable: SEO/Ads, landing, producto, checkout, postventa. En 2025 y 2026 ese esquema empieza a cambiar.
        </p>

        <p className="text-lg mb-6 text-muted-foreground leading-relaxed">
          Microsoft, OpenAI y Google están empujando en la misma dirección: <strong>convertir la conversación con IA en un canal transaccional completo</strong>. No es solo recomendación de productos. Es compra directa dentro del asistente. Y eso tiene implicaciones estratégicas reales.
        </p>
      </section>

      {/* 1. Microsoft Copilot Checkout */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-foreground">1. Microsoft Copilot Checkout</h2>

        <p className="text-lg mb-6 text-muted-foreground leading-relaxed">
          Microsoft presentó <strong>Copilot Checkout</strong> en NRF 2026. Permite buscar productos dentro de Copilot, compararlos, seleccionarlos y completar el pago sin salir del chat.
        </p>

        <Card className="border border-border/50 mb-6">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg text-primary">
                <ShoppingCart className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-foreground">Integraciones iniciales</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Shopify</Badge>
              <Badge variant="secondary">Stripe</Badge>
              <Badge variant="secondary">PayPal</Badge>
              <Badge variant="secondary">Etsy</Badge>
              <Badge variant="outline">Urban Outfitters</Badge>
              <Badge variant="outline">Anthropologie</Badge>
            </div>
          </CardContent>
        </Card>

        <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-6 border border-primary/10">
          <p className="text-foreground">
            Microsoft enfatiza algo clave: <strong>el comerciante sigue siendo el Merchant of Record</strong>. Mantiene control de datos, cumplimiento y servicio postventa. Copilot no quiere ser marketplace. Quiere ser la nueva interfaz.
          </p>
        </div>
      </section>

      {/* 2. OpenAI – Instant Checkout en ChatGPT */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-foreground">2. OpenAI: Instant Checkout en ChatGPT</h2>

        <p className="text-lg mb-6 text-muted-foreground leading-relaxed">
          En septiembre de 2025, OpenAI lanzó <strong>"Buy it in ChatGPT"</strong> (Instant Checkout).
        </p>

        <Card className="border border-border/50 mb-6">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-secondary/10 rounded-lg text-secondary">
                <Bot className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-foreground">Datos relevantes</h3>
            </div>
            <ul className="space-y-3">
              {[
                "Disponible para usuarios Free, Plus y Pro en EE. UU.",
                "Permite comprar productos directamente desde la conversación.",
                "Integración con Shopify y Stripe mediante un protocolo abierto de comercio.",
                "Comerciantes pagan una pequeña comisión por transacción.",
                "Inicialmente soporta compra de un solo producto (carrito múltiple en desarrollo)."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <p className="text-lg text-muted-foreground leading-relaxed">
          OpenAI también insiste en que el comerciante mantiene la titularidad de la transacción. Lo relevante aquí no es la función en sí. Es que <strong>ChatGPT deja de ser solo descubrimiento y pasa a ser canal de conversión</strong>.
        </p>
      </section>

      {/* 3. Google – Universal Commerce Protocol (UCP) */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-foreground">3. Google: Universal Commerce Protocol (UCP)</h2>

        <p className="text-lg mb-6 text-muted-foreground leading-relaxed">
          Google responde con algo más ambicioso: el <strong>Universal Commerce Protocol (UCP)</strong>. No es solo una función. Es un estándar abierto diseñado para habilitar compras conversacionales en Gemini y AI Mode en Search.
        </p>

        <Card className="border border-border/50 mb-6">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-accent/10 rounded-lg text-accent-foreground">
                <Globe className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-foreground">Datos estratégicos</h3>
            </div>
            <ul className="space-y-3">
              {[
                "Desarrollado junto a Shopify, Walmart, Target, Etsy, Wayfair y más de 20 grandes actores.",
                "Compatible con Google Merchant Center.",
                "Permite a agentes de IA consultar catálogo, inventario y completar compra.",
                "Incluye soporte para gestión de pedidos y postventa.",
                "Mantiene al comerciante como Merchant of Record."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <div className="bg-gradient-to-br from-secondary/5 to-primary/5 rounded-xl p-6 border border-secondary/10">
          <p className="text-foreground">
            Lo importante: <strong>Google no solo habilita checkout en IA. Intenta crear la infraestructura estándar del comercio conversacional</strong>.
          </p>
        </div>
      </section>

      {/* El patrón común */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-foreground">El patrón común</h2>

        <p className="text-lg mb-8 text-muted-foreground leading-relaxed">
          Los tres movimientos comparten 5 elementos clave:
        </p>

        <div className="grid gap-4 mb-8">
          {commonPatterns.map((pattern, index) => (
            <div key={index} className="flex items-center gap-4 p-4 bg-muted/30 rounded-lg border border-border/50">
              <div className="p-2 bg-primary/10 rounded-lg text-primary flex-shrink-0">
                {pattern.icon}
              </div>
              <span className="text-foreground font-medium">{pattern.text}</span>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-6 border border-primary/20">
          <p className="text-lg font-semibold text-foreground text-center">
            Cuando Microsoft, OpenAI y Google convergen en la misma dirección, no es experimento. Es tendencia estructural.
          </p>
        </div>
      </section>

      {/* Qué cambia para un Ecommerce Manager */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-foreground">Qué cambia realmente para un Ecommerce Manager</h2>

        <p className="text-lg mb-8 text-muted-foreground leading-relaxed">
          No es solo un nuevo canal. Es un cambio en la capa donde ocurre la decisión.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="border-l-4 border-l-muted-foreground/30">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-4 text-muted-foreground">Hasta ahora optimizabas</h3>
              <ul className="space-y-2">
                {["UX", "CRO", "Landings", "Paid media", "SEO tradicional"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-muted-foreground">
                    <span className="w-1.5 h-1.5 bg-muted-foreground/40 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-primary">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-4 text-primary">Ahora empieza a importar más</h3>
              <ul className="space-y-2">
                {["Arquitectura de catálogo", "Calidad de atributos", "Estructuración de datos", "Integración con plataformas", "Preparación para IA commerce"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-foreground">
                    <ArrowRight className="h-4 w-4 text-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="bg-muted/50 rounded-lg p-6">
          <p className="text-foreground text-lg">
            La pregunta deja de ser <em>"¿Está optimizada mi landing?"</em> y pasa a ser: <strong>"¿Está preparada mi infraestructura para que una IA entienda y venda mi producto?"</strong>
          </p>
        </div>
      </section>

      {/* Lo que debes revisar hoy */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-foreground">Lo que debes revisar hoy</h2>

        <p className="text-lg mb-8 text-muted-foreground leading-relaxed">
          Sin cambiar tu ecommerce mañana, sí deberías analizar:
        </p>

        <div className="space-y-4 mb-8">
          {[
            "¿Mi catálogo está normalizado y completo?",
            "¿Mis atributos permiten comparación clara?",
            "¿Tengo feeds limpios y actualizados?",
            "¿Estoy en Google Merchant Center correctamente estructurado?",
            "¿Mi stack tecnológico permite integraciones ágiles?",
            "¿Dependo exclusivamente de tráfico web directo?"
          ].map((question, index) => (
            <div key={index} className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg">
              <Badge variant="secondary" className="min-w-fit">{index + 1}</Badge>
              <p className="text-foreground">{question}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ¿Amenaza o oportunidad? */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-foreground">¿Amenaza o oportunidad?</h2>

        <p className="text-lg mb-8 text-muted-foreground leading-relaxed">
          Depende de tu madurez digital.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="border border-destructive/20 bg-destructive/5">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="h-5 w-5 text-destructive" />
                <h3 className="font-semibold text-foreground">Puede ser un riesgo si...</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Dependes de ofertas agresivas</li>
                <li>• Usas funnels forzados</li>
                <li>• Inviertes intensivamente en paid media</li>
                <li>• Aplicas tácticas de urgencia</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border border-primary/20 bg-primary/5">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-foreground">Puede ser oportunidad si...</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Tienes producto diferencial</li>
                <li>• Cuentas con marca sólida</li>
                <li>• Cuidas tu infraestructura de datos</li>
                <li>• Tu integración tecnológica es flexible</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Lo que probablemente pasará */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-foreground">Lo que probablemente pasará</h2>

        <p className="text-lg mb-6 text-muted-foreground leading-relaxed">
          No desaparecerán las webs. Pero sí veremos:
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {[
            "Más compras iniciadas en IA.",
            "Más descubrimiento fuera de tu dominio.",
            "Menos dependencia del clic tradicional.",
            "Mayor peso de la estructuración de datos frente al diseño visual."
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 p-4 bg-background border border-border/50 rounded-lg">
              <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
              <span className="text-foreground">{item}</span>
            </div>
          ))}
        </div>

        <div className="bg-muted/50 rounded-lg p-6">
          <p className="text-lg font-medium text-foreground">
            <strong>El ecommerce no muere. Se desacopla parcialmente de su interfaz tradicional.</strong>
          </p>
        </div>
      </section>

      {/* Conclusión estratégica */}
      <section className="mb-12">
        <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-8 border border-primary/20 text-center">
          <h2 className="text-3xl font-bold mb-4 text-foreground">Conclusión estratégica</h2>
          <p className="text-lg mb-4 text-muted-foreground max-w-2xl mx-auto">
            La batalla ya no es solo por tráfico. Es por ser elegible dentro de la conversación.
          </p>
          <p className="text-lg mb-4 text-muted-foreground max-w-2xl mx-auto">
            Copilot, ChatGPT y Gemini no compiten solo por responder preguntas. <strong>Compiten por intermediar la decisión</strong>.
          </p>
          <p className="text-lg text-foreground font-semibold max-w-2xl mx-auto">
            Y cuando la decisión cambia de interfaz, sobreviven los sistemas preparados, no las tácticas aisladas.
          </p>
        </div>
      </section>
    </BlogPostTemplate>
  );
};

export default BlogCheckoutIAEcommerce;
