import React from 'react';
import BlogPostTemplate from '@/components/BlogPost/BlogPostTemplate';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Bot, 
  AlertCircle, 
  HelpCircle, 
  CheckCircle, 
  Plug, 
  Server, 
  Shield, 
  Cloud, 
  Database, 
  Zap, 
  Sparkles, 
  AlertTriangle, 
  Lightbulb,
  ArrowRight,
  Target
} from 'lucide-react';

const BlogChatbotsParaPaginasWeb = () => {
  const metadata = {
    title: 'Chatbots para páginas web: qué opciones existen y cuál tiene sentido para tu negocio',
    metaTitle: 'Chatbots para Web: Guía completa para elegir el mejor | Hayas Marketing',
    description: 'Descubre los tipos de chatbots para páginas web, sus ventajas y limitaciones. Guía práctica para elegir la solución que mejor encaje con tu negocio.',
    metaDescription: 'Guía completa sobre chatbots para páginas web: plugins WordPress, soluciones a medida, SaaS y CRM integrado. Descubre cuál encaja mejor con tu negocio.',
    date: '2025-01-22',
    readTime: '10 min',
    category: 'Automatización',
    author: 'Equipo Hayas Marketing',
    tags: ['Chatbots', 'Automatización', 'CRM', 'IA', 'WordPress', 'GoHighLevel', 'HubSpot'],
    canonical: '/es/blog/chatbots-para-paginas-web',
    ogImage: '/chatbots-web-hero.jpg',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Chatbots para páginas web: qué opciones existen y cuál tiene sentido para tu negocio",
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
      "datePublished": "2025-01-22",
      "dateModified": "2025-01-22",
      "image": "/chatbots-web-hero.jpg",
      "mainEntityOfPage": "https://hayasmarketing.com/es/blog/chatbots-para-paginas-web"
    },
    mainKeyword: 'chatbots para páginas web',
    secondaryKeywords: ['chatbot wordpress', 'chatbot con IA', 'chatbot CRM', 'chatbot a medida', 'chatbot SaaS']
  };

  const faqs = [
    {
      question: "¿Qué tipo de chatbot es mejor para mi web?",
      answer: "Depende de tus objetivos de negocio. Si buscas algo básico y económico, un plugin de WordPress puede ser suficiente. Si necesitas integración con ventas y CRM, una solución como GoHighLevel o HubSpot es más adecuada. Para procesos complejos o sectores regulados, considera un desarrollo a medida."
    },
    {
      question: "¿Un chatbot con IA puede sustituir al equipo humano?",
      answer: "No debería ser ese el objetivo. La IA amplifica las capacidades del equipo humano, automatizando tareas repetitivas y filtrando consultas, pero las decisiones estratégicas y la atención personalizada siguen requiriendo personas. El chatbot es un apoyo, no un sustituto."
    },
    {
      question: "¿Cuánto cuesta implementar un chatbot?",
      answer: "El rango es muy amplio: desde plugins gratuitos para WordPress hasta desarrollos a medida que pueden costar varios miles de euros. Lo importante es calcular el ROI esperado según tus objetivos: captación de leads, reducción de carga en atención al cliente, automatización de ventas, etc."
    },
    {
      question: "¿Qué diferencia hay entre un chatbot de reglas y uno con IA?",
      answer: "Los chatbots de reglas siguen flujos predefinidos y solo responden a opciones específicas. Los chatbots con IA pueden entender lenguaje natural, aprender de las conversaciones y ofrecer respuestas más flexibles y personalizadas según el contexto."
    },
    {
      question: "¿Es necesario integrar el chatbot con un CRM?",
      answer: "Si tu objetivo es captar y gestionar leads de forma profesional, sí. La integración con CRM permite que cada conversación se convierta en un registro de contacto con contexto, historial y seguimiento automatizado. Sin esta integración, pierdes información valiosa."
    }
  ];

  const relatedServices = [
    {
      title: "Integraciones IA en procesos",
      description: "Creamos asistentes inteligentes integrados con tu CRM y procesos de negocio para automatizar la captación y atención.",
      link: "/es/servicios/integraciones-ia-procesos"
    },
    {
      title: "Implantación de CRM",
      description: "Conectamos tu chatbot con GoHighLevel o HubSpot para una gestión integral de leads y clientes.",
      link: "/es/servicios/implantacion-crm"
    }
  ];

  const tiposChatbot = [
    {
      id: 'wordpress',
      badge: 'Plugin',
      title: 'Plugins de chatbot para WordPress',
      icon: Plug,
      borderColor: 'border-slate-300 dark:border-slate-700',
      description: 'Plugins que se instalan directamente en la web y permiten añadir un chat básico, con respuestas automáticas, formularios o flujos simples.',
      cuandoTieneSentido: [
        'Webs pequeñas o corporativas',
        'Presupuestos ajustados',
        'Necesidades muy básicas de atención o captación',
        'Proyectos que quieren "probar" sin mucha inversión'
      ],
      limitaciones: [
        'Automatización limitada',
        'Escasa personalización real',
        'Difícil integración con procesos de ventas complejos',
        'Poca escalabilidad'
      ],
      resumen: 'Son útiles como primer paso, pero raramente resuelven un problema de negocio completo.'
    },
    {
      id: 'medida',
      badge: 'Custom / On-Premise',
      title: 'Chatbots a medida y soluciones con control total del dato',
      icon: Server,
      secondIcon: Shield,
      borderColor: 'border-primary/30',
      description: 'Asistentes desarrollados específicamente para una empresa, con lógica propia, adaptados a sus procesos de negocio y con el máximo control sobre la infraestructura y los datos.',
      cuandoTieneSentido: [
        'Empresas con procesos complejos o alto volumen de leads',
        'Necesidades muy específicas que una plataforma estándar no puede cubrir',
        'Visión a largo plazo donde el chatbot es una herramienta central',
        'Sectores con requisitos estrictos de privacidad (RGPD, sanidad, administración pública)'
      ],
      limitaciones: [
        'Coste inicial elevado',
        'Necesidad de mantenimiento continuo',
        'Dependencia técnica',
        'Exigencia de una estrategia clara y bien definida'
      ],
      resumen: 'Este modelo no busca rapidez ni bajo coste, sino control, fiabilidad y sostenibilidad a largo plazo.'
    },
    {
      id: 'saas',
      badge: 'SaaS',
      title: 'Plataformas específicas de chatbots',
      icon: Cloud,
      borderColor: 'border-blue-300 dark:border-blue-700',
      description: 'Plataformas diseñadas exclusivamente para crear chatbots sin programar, con creación visual de flujos, integraciones estándar y plantillas predefinidas.',
      cuandoTieneSentido: [
        'Rapidez de puesta en marcha',
        'Menor coste que un desarrollo a medida',
        'Funcionalidades avanzadas sin programar',
        'Objetivo claro y chatbot como parte de una estrategia mayor'
      ],
      limitaciones: [
        'Dependencia de la plataforma',
        'Personalización limitada al sistema que ofrecen',
        'Costes recurrentes',
        'Integraciones a veces superficiales'
      ],
      resumen: 'Son una buena solución intermedia si el objetivo está claro y el chatbot forma parte de una estrategia mayor.'
    },
    {
      id: 'crm',
      badge: 'CRM Integrado',
      title: 'Chatbots integrados en un CRM (GoHighLevel, HubSpot, etc.)',
      icon: Database,
      secondIcon: Zap,
      borderColor: 'border-conecta/30',
      description: 'Un enfoque más estratégico donde el chatbot está conectado con CRM, automatizaciones, pipeline de ventas, email, WhatsApp y el equipo comercial.',
      cuandoTieneSentido: [
        'Empresas que quieren captar y gestionar leads de forma profesional',
        'Equipos comerciales activos',
        'Negocios que buscan automatizar sin perder control',
        'Estrategias de marketing y ventas integradas'
      ],
      limitaciones: [
        'Requiere inversión en el CRM completo',
        'Curva de aprendizaje inicial',
        'Necesita configuración y mantenimiento',
        'Mejor con acompañamiento experto'
      ],
      resumen: 'Aquí el chatbot deja de ser un widget y se convierte en una herramienta de negocio que realmente ayuda a vender.'
    },
    {
      id: 'avanzados',
      badge: 'Avanzado',
      title: 'Otras formas actuales de chatbots',
      icon: Sparkles,
      borderColor: 'border-activa/30',
      description: 'Widgets conversacionales conectados a bases de conocimiento, chatbots integrados con WhatsApp/email, asistentes personalizados por sector y soluciones IA en infraestructura propia.',
      cuandoTieneSentido: [
        'Entornos corporativos avanzados',
        'Sectores como educación, salud o administración pública',
        'Organizaciones con políticas estrictas de seguridad',
        'Necesidad de control total sobre datos, modelos e integraciones'
      ],
      limitaciones: [
        'Requieren más criterio estratégico',
        'Mayor inversión inicial',
        'Necesidad de expertise técnico',
        'Complejidad de implementación'
      ],
      resumen: 'Estas soluciones ofrecen más valor real cuando están bien diseñadas, pero requieren visión estratégica clara.'
    }
  ];

  return (
    <BlogPostTemplate 
      metadata={metadata}
      faqs={faqs}
      relatedServices={relatedServices}
    >
      <div className="space-y-12">
        {/* Introducción */}
        <section>
          <p className="text-lg text-elegant">
            Durante los últimos años, los chatbots para páginas web se han convertido en una de las soluciones más populares dentro del marketing digital. Prometen atención inmediata, automatización, captación de leads y, en algunos casos, incluso ventas automáticas gracias a la inteligencia artificial.
          </p>
          
          <Card className="my-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Bot className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-lg mb-3">Pero la realidad es más compleja.</p>
                  <div className="space-y-2">
                    <p className="flex items-start gap-2 text-elegant-muted">
                      <AlertCircle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                      No todas las empresas necesitan el mismo tipo de chatbot.
                    </p>
                    <p className="flex items-start gap-2 text-elegant-muted">
                      <AlertCircle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                      No todos los chatbots usan inteligencia artificial de verdad.
                    </p>
                    <p className="flex items-start gap-2 text-elegant-muted">
                      <AlertCircle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                      Instalar un chatbot sin estrategia clara suele generar más frustración que resultados.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <p className="text-elegant">
            En este artículo te explicamos qué tipos de chatbots existen actualmente, cuáles son sus ventajas y limitaciones, y cuándo tiene sentido cada opción, para que puedas tomar una decisión informada.
          </p>
        </section>

        <Separator />

        {/* Pregunta clave */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Antes de elegir un chatbot: una pregunta clave</h2>
          
          <Card className="border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-950/20">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Target className="h-8 w-8 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-xl mb-4">¿Para qué quieres un chatbot en tu web?</p>
                  <p className="text-elegant-muted mb-4">Algunos de los objetivos más habituales son:</p>
                  <div className="grid md:grid-cols-2 gap-2">
                    {[
                      'Responder preguntas frecuentes de forma automática',
                      'Captar leads (formularios conversacionales)',
                      'Cualificar contactos antes de pasar a ventas',
                      'Dar soporte básico a clientes',
                      'Automatizar parte de la atención comercial',
                      'Integrar el chat con un CRM o procesos de ventas',
                      'Ofrecer asistencia con IA entrenada en tu negocio'
                    ].map((objetivo, index) => (
                      <p key={index} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                        {objetivo}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <p className="mt-6 text-elegant">
            El problema aparece cuando se intenta resolver todo con un solo chatbot, sin definir prioridades ni encajarlo dentro de un sistema de marketing y ventas.
          </p>

          <div className="bg-muted/30 rounded-lg p-4 mt-4 border-l-4 border-primary">
            <p className="font-semibold text-primary">👉 El chatbot es un medio, no un fin.</p>
          </div>
        </section>

        <Separator />

        {/* Tipos de chatbots */}
        <section>
          <h2 className="text-3xl font-bold mb-4">Principales alternativas de chatbots para páginas web</h2>
          <p className="text-elegant-muted mb-8">
            A día de hoy, estas son las opciones más habituales que existen en el mercado. Cada una tiene sentido en contextos distintos.
          </p>

          <div className="space-y-8">
            {tiposChatbot.map((tipo, index) => {
              const IconComponent = tipo.icon;
              const SecondIconComponent = tipo.secondIcon;
              
              return (
                <Card 
                  key={tipo.id} 
                  className={`${tipo.borderColor} hover:shadow-lg transition-shadow duration-300 animate-fade-in`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex items-center gap-2">
                        <IconComponent className="h-8 w-8 text-primary" />
                        {SecondIconComponent && <SecondIconComponent className="h-6 w-6 text-primary/70" />}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2 flex-wrap">
                          <h3 className="text-xl font-bold">{index + 1}. {tipo.title}</h3>
                          <Badge variant="secondary">{tipo.badge}</Badge>
                        </div>
                        <p className="text-elegant-muted">{tipo.description}</p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mt-6">
                      <div>
                        <p className="font-semibold mb-3 text-green-700 dark:text-green-400">Cuándo tiene sentido:</p>
                        <ul className="space-y-2">
                          {tipo.cuandoTieneSentido.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm">
                              <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                              <span className="text-elegant-muted">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold mb-3 text-amber-700 dark:text-amber-400">Limitaciones:</p>
                        <ul className="space-y-2">
                          {tipo.limitaciones.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm">
                              <AlertTriangle className="h-4 w-4 text-amber-500 flex-shrink-0 mt-0.5" />
                              <span className="text-elegant-muted">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-border/50">
                      <p className="text-sm font-medium">👉 {tipo.resumen}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        <Separator />

        {/* Error común */}
        <section>
          <h2 className="text-3xl font-bold mb-6">El error más común con los chatbots</h2>
          
          <Card className="border-red-200 dark:border-red-900 bg-red-50/50 dark:bg-red-950/20">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <AlertTriangle className="h-8 w-8 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-lg mb-4">
                    Instalar un chatbot esperando que "la IA haga el trabajo sola".
                  </p>
                  <p className="text-elegant-muted mb-4">Algunos problemas habituales:</p>
                  <ul className="space-y-2">
                    {[
                      'No definir objetivos claros',
                      'No integrarlo con ventas o CRM',
                      'No entrenarlo ni revisarlo',
                      'No medir resultados',
                      'Pensar que el chatbot sustituye al equipo humano'
                    ].map((problema, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <AlertCircle className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
                        <span className="text-elegant-muted">{problema}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 font-medium text-red-700 dark:text-red-400">
                    La consecuencia suele ser un chatbot infrautilizado, que molesta más de lo que ayuda.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator />

        {/* Visión Hayas */}
        <section>
          <h2 className="text-3xl font-bold mb-6">La visión de Hayas: chatbots dentro de un sistema, no como solución aislada</h2>
          
          <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Lightbulb className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-elegant mb-4">
                    En Hayas no entendemos los chatbots como un producto independiente.
                  </p>
                  <p className="text-elegant mb-4">
                    Los entendemos como una <strong>pieza dentro de un sistema de marketing y ventas</strong>, donde:
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>la <strong>estrategia</strong> la define una persona,</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>la <strong>tecnología</strong> amplifica,</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>y la <strong>inteligencia artificial</strong> trabaja con criterio.</span>
                    </li>
                  </ul>
                  <p className="text-elegant-muted">
                    Por eso, antes de hablar de herramientas, siempre hablamos de: <strong>objetivos reales</strong>, <strong>procesos</strong>, <strong>personas</strong>, y después de tecnología.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator />

        {/* Conclusión */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Conclusión</h2>
          
          <p className="text-elegant mb-4">
            Si estás valorando incorporar un chatbot en tu web, la pregunta no es:
          </p>
          <p className="text-lg font-medium text-muted-foreground mb-4 pl-4 border-l-2 border-muted">
            "¿Qué herramienta es mejor?"
          </p>
          <p className="text-elegant mb-2">Sino:</p>
          <p className="text-lg font-semibold text-primary mb-6 pl-4 border-l-2 border-primary">
            "¿Qué quiero que este chatbot haga realmente por mi negocio?"
          </p>
          <p className="text-elegant">
            A partir de ahí, la elección cambia por completo.
          </p>
        </section>

        {/* CTA */}
        <section className="bg-muted/30 rounded-xl p-8 border border-border/50">
          <div className="text-center">
            <p className="text-elegant mb-4">
              Si quieres analizar tu caso y entender qué tipo de solución encaja mejor con tu embudo de ventas, lo fundamental es empezar por la estrategia, no por el plugin.
            </p>
            <p className="font-semibold text-lg mb-6">
              ¿Buscas una herramienta que impulse resultados reales? Hablemos de tu estrategia.
            </p>
            <Button asChild size="lg" className="group">
              <Link to="/es/contacto">
                Contáctanos
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </BlogPostTemplate>
  );
};

export default BlogChatbotsParaPaginasWeb;
