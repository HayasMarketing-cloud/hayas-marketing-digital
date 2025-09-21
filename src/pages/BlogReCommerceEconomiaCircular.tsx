import React from 'react';
import BlogPostTemplate from '@/components/BlogPost/BlogPostTemplate';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Recycle, TrendingUp, Users, Award, ArrowRight, Leaf, DollarSign, Target, CheckCircle, BarChart3 } from 'lucide-react';

const BlogReCommerceEconomiaCircular = () => {
  const metadata = {
    title: "RE-commerce: La Economía Circular del E-commerce - Partnership con Sharpei",
    metaTitle: "RE-commerce: Economía Circular en E-commerce con Sharpei | Hayas Marketing",
    description: "Descubre cómo la economía circular está transformando el e-commerce. Conoce nuestro partnership con Sharpei para impulsar la sostenibilidad en el comercio electrónico.",
    metaDescription: "Aprende sobre economía circular en e-commerce y nuestro partnership con Sharpei. Transforma tu negocio hacia la sostenibilidad y el re-commerce.",
    date: "2025-01-17",
    readTime: "8 min de lectura",
    category: "E-commerce",
    author: "Hayas Marketing",
    tags: ["Economía Circular", "E-commerce", "Partnership", "Sostenibilidad", "Re-commerce", "Sharpei"],
    canonical: "/es/blog/re-commerce-economia-circular-ecommerce-partnership-sharpei",
    ogImage: "/re-commerce-economia-circular-hero.jpg",
    mainKeyword: "economia circular y ecommerce",
    secondaryKeywords: ["re-commerce", "sostenibilidad ecommerce", "partnership sharpei", "economia circular", "comercio sostenible"],
    structuredData: {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": "RE-commerce: La Economía Circular del E-commerce - Partnership con Sharpei",
      "description": "Descubre cómo la economía circular está transformando el e-commerce. Conoce nuestro partnership con Sharpei para impulsar la sostenibilidad en el comercio electrónico.",
      "image": "https://hayasmarketing.com/re-commerce-economia-circular-hero.jpg",
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
      "datePublished": "2025-01-17",
      "dateModified": "2025-01-17",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://hayasmarketing.com/blog/re-commerce-economia-circular-ecommerce-partnership-sharpei"
      }
    }
  };

  const heroImage = {
    src: "/re-commerce-economia-circular-hero.jpg",
    alt: "Economía circular en e-commerce - Partnership Hayas Marketing y Sharpei",
    width: 1200,
    height: 675
  };

  const faqs = [
    {
      question: "¿Qué es la economía circular en el e-commerce?",
      answer: "La economía circular en e-commerce es un modelo de negocio que se basa en reducir, reutilizar y reciclar productos, minimizando el desperdicio y maximizando el valor de los recursos a través de estrategias como el re-commerce, productos reacondicionados y sistemas de devolución."
    },
    {
      question: "¿Qué es Sharpei y cómo beneficia a mi e-commerce?",
      answer: "Sharpei es una plataforma especializada en economía circular para e-commerce que permite a las empresas implementar sistemas de re-commerce, gestionar productos devueltos y crear nuevas fuentes de ingresos a través de la venta de productos reacondicionados."
    },
    {
      question: "¿Cómo puede mi empresa implementar la economía circular?",
      answer: "Puedes implementar la economía circular mediante programas de devolución, venta de productos reacondicionados, partnerships con empresas de reciclaje, y utilizando plataformas como Sharpei para gestionar todo el proceso de manera eficiente."
    },
    {
      question: "¿Qué ventajas tiene el partnership Hayas-Sharpei?",
      answer: "Nuestro partnership te ofrece una solución integral: estrategia de marketing digital especializada en sostenibilidad combinada con la tecnología de Sharpei para implementar economía circular, maximizando tanto el impacto ambiental como los beneficios económicos."
    },
    {
      question: "¿La economía circular aumenta la rentabilidad del e-commerce?",
      answer: "Sí, la economía circular puede generar nuevas fuentes de ingresos a través de productos reacondicionados, reducir costes de gestión de devoluciones, atraer consumidores conscientes y mejorar la imagen de marca, resultando en mayor rentabilidad a largo plazo."
    }
  ];

  const relatedServices = [
    {
      title: "Estrategia E-commerce Sostenible",
      description: "Desarrollamos estrategias de marketing digital enfocadas en sostenibilidad para tu e-commerce",
      link: "/estrategia-ecommerce-sostenible"
    },
    {
      title: "Implementación Sharpei",
      description: "Te ayudamos a implementar y optimizar Sharpei en tu estrategia de economía circular",
      link: "/implementacion-sharpei"
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
        {/* Introducción destacada */}
        <section className="animate-fade-in">
          <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 rounded-2xl p-8 border border-green-200/50 dark:border-green-800/50">
            <div className="flex items-start gap-4">
              <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-full">
                <Recycle className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4 text-foreground">Transformando el E-commerce hacia la Sostenibilidad</h2>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  En un mundo cada vez más consciente de la sostenibilidad y la preservación de recursos, la <strong className="text-green-600 dark:text-green-400">economía circular</strong> se está posicionando como una solución clave para transformar industrias y crear un futuro más sostenible. En el ámbito del <strong className="text-blue-600 dark:text-blue-400">e-commerce</strong>, esta revolución está cambiando la manera en que las empresas y los consumidores interactúan con los productos.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ¿Qué es la Economía Circular? */}
        <section className="space-y-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4">Conceptos Fundamentales</Badge>
            <h2 className="text-3xl font-bold mb-6 text-foreground">¿Qué es la Economía Circular?</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover-scale">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="bg-red-100 dark:bg-red-900/30 p-2 rounded-lg">
                    <ArrowRight className="h-5 w-5 text-red-600 dark:text-red-400" />
                  </div>
                  <CardTitle className="text-xl">Modelo Lineal Tradicional</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  <strong className="text-red-600 dark:text-red-400">"Extraer → Fabricar → Desechar"</strong>
                </p>
                <p className="mt-2 text-sm">
                  Sistema tradicional que genera residuos y agota recursos naturales.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-scale border-green-200 dark:border-green-800">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-lg">
                    <Recycle className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <CardTitle className="text-xl">Economía Circular</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  <strong className="text-green-600 dark:text-green-400">"Reducir → Reutilizar → Reciclar"</strong>
                </p>
                <p className="mt-2 text-sm">
                  Mantiene productos y materiales en uso el mayor tiempo posible, extrayendo máximo valor.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-background/60 backdrop-blur-sm border rounded-xl p-6">
            <p className="text-center text-muted-foreground">
              En el contexto del <strong>e-commerce</strong>, esto significa repensar completamente la cadena de valor, desde la producción hasta el consumo, pasando por la logística y la gestión de devoluciones. Las empresas que adoptan este modelo no solo contribuyen a la sostenibilidad ambiental, sino que también descubren nuevas oportunidades de negocio y fuentes de ingresos.
            </p>
          </div>
        </section>

        {/* RE-commerce */}
        <section className="space-y-8">
          <div className="text-center">
            <Badge variant="outline" className="mb-4">Innovación Digital</Badge>
            <h2 className="text-3xl font-bold mb-6 text-foreground">RE-commerce: La Nueva Frontera del E-commerce</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              El <strong className="text-primary">re-commerce</strong> emerge como una evolución natural del e-commerce tradicional, integrando los principios de la economía circular en las operaciones comerciales digitales.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: TrendingUp,
                title: "Gestión inteligente de devoluciones",
                description: "Convertir las devoluciones en oportunidades de venta",
                color: "blue"
              },
              {
                icon: Recycle,
                title: "Productos reacondicionados",
                description: "Darle una segunda vida a productos devueltos o con defectos menores",
                color: "green"
              },
              {
                icon: Users,
                title: "Marketplace de segunda mano",
                description: "Crear plataformas para la reventa de productos usados",
                color: "purple"
              },
              {
                icon: ArrowRight,
                title: "Programas de intercambio",
                description: "Facilitar el intercambio de productos entre consumidores",
                color: "orange"
              },
              {
                icon: Leaf,
                title: "Reciclaje y upcycling",
                description: "Transformar materiales en nuevos productos de valor",
                color: "teal"
              }
            ].map((feature, index) => (
              <Card key={index} className="hover-scale group">
                <CardContent className="p-6">
                  <div className={`bg-${feature.color}-100 dark:bg-${feature.color}-900/30 p-3 rounded-lg mb-4 w-fit group-hover:scale-110 transition-transform`}>
                    <feature.icon className={`h-6 w-6 text-${feature.color}-600 dark:text-${feature.color}-400`} />
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="my-12" />

        {/* Partnership Hayas x Sharpei */}
        <section className="space-y-8">
          <div className="text-center">
            <Badge className="mb-4">Partnership Estratégico</Badge>
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              Hayas Marketing <span className="text-primary">×</span> Sharpei
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Combinamos nuestra expertise en marketing digital con la tecnología líder de Sharpei para ofrecer soluciones integrales de economía circular.
            </p>
          </div>

          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 border border-primary/20">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">¿Qué es Sharpei?</h3>
                <p className="text-muted-foreground mb-6">
                  <strong>Sharpei</strong> es una plataforma tecnológica innovadora que permite a las empresas de e-commerce implementar estrategias de economía circular de manera eficiente y rentable. Su solución integral abarca desde la gestión automatizada de devoluciones hasta la creación de marketplaces de productos reacondicionados.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  { icon: Target, title: "Estrategia integral", desc: "Marketing digital + tecnología Sharpei" },
                  { icon: CheckCircle, title: "Implementación técnica", desc: "Integración fluida con sistemas existentes" },
                  { icon: Users, title: "Marketing especializado", desc: "Campañas enfocadas en sostenibilidad" }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-background/80 rounded-lg">
                    <benefit.icon className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-semibold">{benefit.title}</h4>
                      <p className="text-sm text-muted-foreground">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Ventajas Competitivas */}
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Ventajas Competitivas de la Economía Circular</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover-scale">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <DollarSign className="h-6 w-6 text-green-600 dark:text-green-400" />
                  <CardTitle className="text-xl text-green-600 dark:text-green-400">Beneficios Económicos</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  "Nuevas fuentes de ingresos: Monetización de productos devueltos",
                  "Reducción de costes: Menor inversión en nueva producción",
                  "Mayor margen de beneficio: Productos reacondicionados",
                  "Fidelización de clientes: Marcas sostenibles valoradas"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-sm">{benefit}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="hover-scale">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Leaf className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  <CardTitle className="text-xl text-blue-600 dark:text-blue-400">Beneficios Ambientales</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  "Reducción de residuos: Menos productos en vertederos",
                  "Menor huella de carbono: Reducción en nueva producción",
                  "Conservación de recursos: Uso eficiente de materias primas",
                  "Impacto social positivo: Contribución al futuro sostenible"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" />
                    <span className="text-sm">{benefit}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Casos de Éxito */}
        <section className="space-y-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4">Resultados Reales</Badge>
            <h2 className="text-3xl font-bold mb-6 text-foreground">Casos de Éxito en E-commerce Circular</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                sector: "Electrónica",
                metric: "40%",
                description: "Reducción en costes de gestión de devoluciones",
                additional: "15% ingresos adicionales con productos reacondicionados",
                icon: BarChart3,
                color: "blue"
              },
              {
                sector: "Moda y Textil",
                metric: "25%",
                description: "Aumento en retención de clientes",
                additional: "Comunidades de marca más fuertes",
                icon: TrendingUp,
                color: "purple"
              },
              {
                sector: "Hogar y Decoración",
                metric: "20%",
                description: "De las ventas totales son productos upcycled",
                additional: "Líneas completas de productos sostenibles",
                icon: Award,
                color: "green"
              }
            ].map((case_study, index) => (
              <Card key={index} className="hover-scale text-center">
                <CardContent className="p-6">
                  <div className={`bg-${case_study.color}-100 dark:bg-${case_study.color}-900/30 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center`}>
                    <case_study.icon className={`h-8 w-8 text-${case_study.color}-600 dark:text-${case_study.color}-400`} />
                  </div>
                  <h3 className="font-bold text-xl mb-2">{case_study.sector}</h3>
                  <div className={`text-4xl font-bold text-${case_study.color}-600 dark:text-${case_study.color}-400 mb-2`}>
                    {case_study.metric}
                  </div>
                  <p className="font-semibold mb-2">{case_study.description}</p>
                  <p className="text-sm text-muted-foreground">{case_study.additional}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Proceso de Implementación */}
        <section className="space-y-8">
          <div className="text-center">
            <Badge variant="outline" className="mb-4">Metodología</Badge>
            <h2 className="text-3xl font-bold mb-6 text-foreground">Cómo Implementar la Economía Circular en tu E-commerce</h2>
          </div>

          <div className="space-y-6">
            {[
              {
                step: "01",
                title: "Evaluación inicial",
                description: "Analizamos tu modelo de negocio actual, identificamos oportunidades de mejora y definimos objetivos específicos para la implementación de la economía circular.",
                color: "blue"
              },
              {
                step: "02",
                title: "Diseño de estrategia",
                description: "Desarrollamos una estrategia personalizada que integra las soluciones de Sharpei con tus procesos existentes, asegurando una transición fluida y eficiente.",
                color: "green"
              },
              {
                step: "03",
                title: "Implementación técnica",
                description: "Nuestro equipo técnico se encarga de toda la implementación, desde la integración de APIs hasta la configuración de workflows automatizados.",
                color: "purple"
              },
              {
                step: "04",
                title: "Lanzamiento y marketing",
                description: "Creamos campañas de marketing específicas para promocionar tus nuevos servicios de economía circular, asegurando una adopción exitosa por parte de tus clientes.",
                color: "orange"
              },
              {
                step: "05",
                title: "Optimización continua",
                description: "Monitoreamos el rendimiento, analizamos métricas clave y optimizamos continuamente la estrategia para maximizar resultados.",
                color: "teal"
              }
            ].map((step, index) => (
              <div key={index} className="flex gap-6 p-6 bg-gradient-to-r from-background to-background/50 rounded-xl border hover-scale group">
                <div className={`bg-${step.color}-100 dark:bg-${step.color}-900/30 text-${step.color}-600 dark:text-${step.color}-400 font-bold text-xl px-4 py-2 rounded-lg flex-shrink-0 group-hover:scale-110 transition-transform`}>
                  {step.step}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Futuro del E-commerce */}
        <section className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 border border-primary/20">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6 text-foreground">El Futuro del E-commerce es Circular</h2>
            <p className="text-lg leading-relaxed text-muted-foreground mb-6 max-w-4xl mx-auto">
              La <strong className="text-primary">economía circular y e-commerce</strong> no es solo una tendencia pasajera, sino una transformación fundamental en la forma de hacer negocios. Las empresas que adopten este modelo hoy estarán mejor posicionadas para el futuro, no solo desde el punto de vista de la sostenibilidad, sino también desde la perspectiva de la rentabilidad y la competitividad.
            </p>
            <div className="bg-background/80 backdrop-blur-sm rounded-xl p-6 border">
              <p className="text-muted-foreground">
                Nuestro partnership con <strong className="text-primary">Sharpei</strong> nos permite ofrecer a nuestros clientes una ventaja competitiva única: la combinación perfecta entre estrategia de marketing digital especializada y tecnología de vanguardia para la implementación de la economía circular.
              </p>
            </div>
          </div>
        </section>

        {/* Conclusión */}
        <section className="text-center bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Conclusión</h2>
          <p className="text-lg leading-relaxed text-muted-foreground mb-6 max-w-4xl mx-auto">
            La transformación hacia un modelo de <strong className="text-green-600 dark:text-green-400">economía circular en e-commerce</strong> representa una oportunidad única para las empresas que buscan diferenciarse, generar valor adicional y contribuir a un futuro más sostenible. Con nuestro partnership con Sharpei, estamos preparados para acompañarte en esta transición, ofreciéndote las herramientas, la tecnología y la expertise necesarias para hacer de la sostenibilidad una ventaja competitiva real.
          </p>
          <div className="bg-primary/10 rounded-xl p-6 border border-primary/20">
            <p className="text-lg font-semibold text-primary">
              El futuro del e-commerce es circular, y el momento de actuar es ahora. ¿Estás listo para formar parte de esta revolución?
            </p>
          </div>
        </section>
      </div>
    </BlogPostTemplate>
  );
};

export default BlogReCommerceEconomiaCircular;