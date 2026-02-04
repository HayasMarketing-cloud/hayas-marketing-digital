import React from 'react';
import BlogPostTemplate from '@/components/BlogPost/BlogPostTemplate';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { CheckCircle, Globe, Shield, Zap, Users, TrendingUp, ArrowRight, Star, Smartphone, Database, Lock } from 'lucide-react';

const BlogWeb30 = () => {
  const metadata = {
    title: "¿Llega la Web 3.0? El Futuro de Internet Descentralizado",
    description: "Descubre qué es la Web 3.0, sus características principales, tecnologías como blockchain y cómo transformará la experiencia digital. Guía completa sobre el futuro de internet.",
    date: "2025-01-17",
    readTime: "10 min",
    category: "Tecnología",
    author: "Rubén Reyero",
    tags: ["Web 3.0", "Blockchain", "Descentralización", "Tecnología", "Internet", "Metaverso"],
    canonical: "/es/blog/web-3-0-futuro-internet-descentralizado",
    ogImage: "/web-3-0-hero.jpg",
    metaTitle: "Web 3.0: El Futuro Descentralizado de Internet | Guía Completa",
    metaDescription: "Explora la Web 3.0 y su impacto en el futuro digital. Blockchain, descentralización, NFTs y metaverso. Todo lo que necesitas saber.",
    mainKeyword: "Web 3.0",
    secondaryKeywords: ["internet descentralizado", "blockchain", "tecnología web", "metaverso"],
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "¿Llega la Web 3.0? El Futuro de Internet Descentralizado",
      "description": "Descubre qué es la Web 3.0, sus características principales, tecnologías como blockchain y cómo transformará la experiencia digital.",
      "image": "https://hayasmarketing.com/web-3-0-hero.jpg",
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
      "datePublished": "2025-01-17T00:00:00+01:00",
      "dateModified": "2025-01-17T00:00:00+01:00"
    }
  };

  const heroImage = {
    src: "/web-3-0-hero.jpg",
    alt: "Representación futurista de la Web 3.0 con blockchain y descentralización",
    width: 1200,
    height: 675
  };

  const faqs = [
    {
      question: "¿Cuál es la principal diferencia entre Web 2.0 y Web 3.0?",
      answer: "La Web 2.0 está centralizada en grandes plataformas que controlan los datos de usuarios, mientras que la Web 3.0 se basa en la descentralización, donde los usuarios tienen control total sobre su información y activos digitales a través de tecnologías como blockchain."
    },
    {
      question: "¿Cuándo estará completamente implementada la Web 3.0?",
      answer: "La Web 3.0 ya está en desarrollo con aplicaciones como DeFi, NFTs y DAOs funcionando. Sin embargo, la adopción masiva podría tomar entre 5-10 años, dependiendo de la mejora en usabilidad, regulación y infraestructura tecnológica."
    },
    {
      question: "¿Necesito conocimientos técnicos para usar aplicaciones Web 3.0?",
      answer: "Aunque actualmente requiere ciertos conocimientos técnicos, las nuevas aplicaciones están enfocándose en mejorar la experiencia de usuario para hacerla más accesible al público general, similar a como evolucionó la Web 2.0."
    },
    {
      question: "¿Es segura la Web 3.0?",
      answer: "La Web 3.0 utiliza criptografía avanzada y blockchain para mayor seguridad, pero también presenta nuevos riesgos como la pérdida de claves privadas o vulnerabilidades en contratos inteligentes. La educación del usuario es fundamental."
    }
  ];

  const relatedServices = [
    {
      title: "Desarrollo de Aplicaciones Web",
      description: "Creamos aplicaciones web modernas preparadas para las tecnologías emergentes y el futuro digital.",
      link: "/diseno-web"
    },
    {
      title: "Consultoría en Tecnología Digital",
      description: "Te ayudamos a entender y preparar tu negocio para las nuevas tecnologías como Web 3.0 y blockchain.",
      link: "/consultoria-estrategica-analitica"
    }
  ];

  const webEvolution = [
    {
      version: "Web 1.0",
      period: "1990-2000",
      description: "Web estática de solo lectura",
      characteristics: ["Páginas HTML estáticas", "Información unidireccional", "Sin interacción de usuario", "Contenido centralizado"]
    },
    {
      version: "Web 2.0",
      period: "2000-2020",
      description: "Web social e interactiva",
      characteristics: ["Redes sociales", "Contenido generado por usuarios", "Aplicaciones web dinámicas", "Datos controlados por plataformas"]
    },
    {
      version: "Web 3.0",
      period: "2020-presente",
      description: "Web descentralizada e inteligente",
      characteristics: ["Blockchain y descentralización", "Propiedad de datos del usuario", "Contratos inteligentes", "Economía de tokens"]
    }
  ];

  const web3Technologies = [
    {
      icon: <Database className="h-6 w-6 text-primary" />,
      title: "Blockchain",
      description: "Tecnología de registro distribuido que garantiza transparencia e inmutabilidad de datos."
    },
    {
      icon: <Lock className="h-6 w-6 text-primary" />,
      title: "Criptografía",
      description: "Sistemas de seguridad avanzados para proteger transacciones y datos personales."
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "DAOs",
      description: "Organizaciones Autónomas Descentralizadas que operan mediante contratos inteligentes."
    },
    {
      icon: <Smartphone className="h-6 w-6 text-primary" />,
      title: "DApps",
      description: "Aplicaciones descentralizadas que funcionan en redes blockchain sin servidores centrales."
    },
    {
      icon: <Globe className="h-6 w-6 text-primary" />,
      title: "Metaverso",
      description: "Espacios virtuales 3D donde los usuarios pueden interactuar, trabajar y socializar."
    },
    {
      icon: <Star className="h-6 w-6 text-primary" />,
      title: "NFTs",
      description: "Tokens no fungibles que representan propiedad única de activos digitales."
    }
  ];

  const web3Benefits = [
    {
      title: "Control de Datos",
      description: "Los usuarios mantienen la propiedad y control total de su información personal"
    },
    {
      title: "Transparencia",
      description: "Todas las transacciones son verificables públicamente en la blockchain"
    },
    {
      title: "Resistencia a la Censura",
      description: "Sistemas descentralizados que no pueden ser controlados por una sola entidad"
    },
    {
      title: "Nuevas Economías",
      description: "Creación de ecosistemas económicos basados en tokens y criptomonedas"
    }
  ];

  return (
    <BlogPostTemplate
      metadata={metadata}
      heroImage={heroImage}
      faqs={faqs}
      relatedServices={relatedServices}
    >
      {/* Introducción */}
      <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-8 mb-12 border border-primary/10">
        <p className="text-lg leading-relaxed mb-6">
          La <strong>Web 3.0</strong> representa la próxima evolución de internet, prometiendo un ecosistema digital 
          descentralizado donde los usuarios recuperan el control sobre sus datos, identidad y activos digitales. 
          Basada en tecnologías como blockchain y contratos inteligentes, está transformando la forma en que 
          interactuamos online.
        </p>
        <p className="text-muted-foreground">
          En este artículo exploramos qué es exactamente la Web 3.0, sus características principales, 
          las tecnologías que la sustentan y cómo puede impactar en nuestro futuro digital.
        </p>
      </div>

      {/* Evolución de la Web */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-foreground">La Evolución de Internet: De Web 1.0 a Web 3.0</h2>
        
        <div className="space-y-6">
          {webEvolution.map((web, index) => (
            <Card key={index} className="p-6 bg-gradient-to-r from-background to-secondary/5 border border-border/50">
              <div className="flex items-start gap-6">
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {web.version.slice(-3)}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-3">
                    <h3 className="text-xl font-semibold text-foreground">{web.version}</h3>
                    <Badge variant="outline">{web.period}</Badge>
                  </div>
                  <p className="text-muted-foreground mb-4">{web.description}</p>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {web.characteristics.map((char, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span>{char}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <Separator className="my-12" />

      {/* ¿Qué es la Web 3.0? */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-foreground">¿Qué es exactamente la Web 3.0?</h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <p className="mb-6">
              La Web 3.0, también conocida como Web Semántica o Web Descentralizada, es la tercera generación 
              de internet que se caracteriza por ser más inteligente, descentralizada y centrada en el usuario.
            </p>
            <p className="mb-6">
              A diferencia de la Web 2.0, donde las grandes corporaciones controlan los datos y las plataformas, 
              la Web 3.0 utiliza tecnologías como blockchain para crear un internet donde los usuarios tienen 
              verdadera propiedad sobre su información y activos digitales.
            </p>
          </div>
          <div className="bg-blue-50 dark:bg-blue-950/30 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
            <h3 className="font-semibold mb-4 text-blue-800 dark:text-blue-200 flex items-center gap-2">
              <Globe className="h-5 w-5" />
              Características Clave de Web 3.0
            </h3>
            <ul className="space-y-2 text-sm text-blue-700 dark:text-blue-300">
              <li>• Descentralización total</li>
              <li>• Propiedad de datos del usuario</li>
              <li>• Contratos inteligentes</li>
              <li>• Interoperabilidad entre plataformas</li>
              <li>• Economías basadas en tokens</li>
              <li>• Identidad digital soberana</li>
            </ul>
          </div>
        </div>
      </section>

      <Separator className="my-12" />

      {/* Tecnologías de Web 3.0 */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-foreground">Tecnologías que Impulsan la Web 3.0</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {web3Technologies.map((tech, index) => (
            <Card key={index} className="p-6 bg-gradient-to-br from-background to-secondary/5 border border-border/50 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                  {tech.icon}
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-foreground">{tech.title}</h3>
                  <p className="text-sm text-muted-foreground">{tech.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-xl p-8 border border-purple-200 dark:border-purple-800">
          <h3 className="text-xl font-semibold mb-6 text-purple-800 dark:text-purple-200">
            El Ecosistema Web 3.0 en Acción
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium mb-3 text-foreground">Aplicaciones Actuales:</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• <strong>DeFi:</strong> Finanzas descentralizadas sin intermediarios</li>
                <li>• <strong>NFT Marketplaces:</strong> Comercio de arte y coleccionables digitales</li>
                <li>• <strong>Social Media:</strong> Redes sociales descentralizadas</li>
                <li>• <strong>Gaming:</strong> Juegos con economías propias</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-3 text-foreground">Casos de Uso Futuros:</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• <strong>Identidad Digital:</strong> Pasaportes digitales únicos</li>
                <li>• <strong>Votación:</strong> Sistemas electorales transparentes</li>
                <li>• <strong>Educación:</strong> Certificaciones verificables</li>
                <li>• <strong>Salud:</strong> Historiales médicos seguros</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Separator className="my-12" />

      {/* Beneficios y Desafíos */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-foreground">Beneficios y Desafíos de la Web 3.0</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Beneficios */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-green-700 dark:text-green-400 flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Beneficios Principales
            </h3>
            <div className="space-y-4">
              {web3Benefits.map((benefit, index) => (
                <div key={index} className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-lg p-4">
                  <h4 className="font-medium mb-2 text-green-800 dark:text-green-200">{benefit.title}</h4>
                  <p className="text-sm text-green-700 dark:text-green-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Desafíos */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-amber-700 dark:text-amber-400 flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Desafíos a Superar
            </h3>
            <div className="space-y-4">
              <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
                <h4 className="font-medium mb-2 text-amber-800 dark:text-amber-200">Escalabilidad</h4>
                <p className="text-sm text-amber-700 dark:text-amber-300">Las redes blockchain actuales tienen limitaciones de velocidad y capacidad</p>
              </div>
              <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
                <h4 className="font-medium mb-2 text-amber-800 dark:text-amber-200">Experiencia de Usuario</h4>
                <p className="text-sm text-amber-700 dark:text-amber-300">La complejidad técnica puede ser una barrera para la adopción masiva</p>
              </div>
              <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
                <h4 className="font-medium mb-2 text-amber-800 dark:text-amber-200">Regulación</h4>
                <p className="text-sm text-amber-700 dark:text-amber-300">Falta de marcos regulatorios claros en muchas jurisdicciones</p>
              </div>
              <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
                <h4 className="font-medium mb-2 text-amber-800 dark:text-amber-200">Consumo Energético</h4>
                <p className="text-sm text-amber-700 dark:text-amber-300">Algunas tecnologías blockchain requieren mucha energía</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Separator className="my-12" />

      {/* Impacto en Empresas */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-foreground">Impacto de la Web 3.0 en las Empresas</h2>
        
        <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-8 border border-primary/20 mb-8">
          <h3 className="text-xl font-semibold mb-6 text-foreground">Transformación del Modelo de Negocio</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium mb-3 text-foreground">Nuevas Oportunidades:</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Tokenización de activos y servicios</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Contratos inteligentes para automatización</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Nuevos modelos de monetización</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Relación directa con clientes sin intermediarios</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-3 text-foreground">Consideraciones Estratégicas:</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                  <span>Inversión en educación tecnológica</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                  <span>Adaptación gradual de procesos</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                  <span>Colaboración con desarrolladores Web 3.0</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                  <span>Análisis de riesgos y compliance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusión */}
      <section className="mb-12">
        <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-8 border border-primary/20">
          <h2 className="text-2xl font-bold mb-6 text-foreground">El Futuro es Descentralizado</h2>
          <p className="text-lg mb-6">
            La Web 3.0 no es solo una evolución tecnológica, sino una revolución en la forma en que 
            concebimos la propiedad digital, la privacidad y la autonomía online. Aunque aún está 
            en desarrollo, sus fundamentos ya están transformando industrias enteras.
          </p>
          <p className="text-muted-foreground mb-6">
            Las empresas que comprendan y adopten gradualmente estas tecnologías estarán mejor 
            posicionadas para liderar en la nueva economía digital. La clave está en mantenerse 
            informado, experimentar con precaución y prepararse para un futuro más descentralizado.
          </p>
          <div className="bg-primary/5 rounded-lg p-4 border border-primary/10">
            <p className="text-sm font-medium text-primary">
              💡 <strong>Reflexión final:</strong> La Web 3.0 promete devolver el poder a los usuarios, 
              pero su éxito dependerá de nuestra capacidad colectiva para construir sistemas que sean 
              tanto tecnológicamente robustos como accesibles para todos.
            </p>
          </div>
        </div>
      </section>
    </BlogPostTemplate>
  );
};

export default BlogWeb30;