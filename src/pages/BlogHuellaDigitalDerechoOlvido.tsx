import React from 'react';
import BlogPostTemplate from '@/components/BlogPost/BlogPostTemplate';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import huellaDigitalHeroImage from '@/assets/huella-digital-hero.jpg';
import { useLocalizedRoutes } from '@/hooks/useLocalizedRoutes';
import { 
  Fingerprint, 
  Shield, 
  AlertCircle, 
  CheckCircle, 
  Scale, 
  Globe, 
  UserX, 
  Lock, 
  Eye, 
  FileText, 
  Heart, 
  ArrowRight,
  AlertTriangle,
  Lightbulb,
  Building2,
  Users,
  Search
} from 'lucide-react';

const BlogHuellaDigitalDerechoOlvido = () => {
  const { getRoute } = useLocalizedRoutes();
  const metadata = {
    title: 'Huella digital y derecho al olvido: privacidad y conciencia en la era digital',
    metaTitle: 'Huella Digital y Derecho al Olvido: Privacidad en la Era Digital | Hayas Marketing',
    description: 'Exploramos qué es la huella digital, el derecho al olvido según el RGPD y la LOPDGDD, y cómo gestionar la privacidad digital con responsabilidad.',
    metaDescription: 'Guía completa sobre huella digital, derecho al olvido y privacidad online. RGPD, LOPDGDD y gestión de datos personales tras el fallecimiento.',
    date: '2025-11-25',
    readTime: '9 min',
    category: 'Privacidad Digital',
    author: 'Rubén Reyero',
    tags: ['Privacidad', 'RGPD', 'Derecho al Olvido', 'Huella Digital', 'LOPDGDD', 'Digitalización Consciente'],
    canonical: '/es/blog/huella-digital-derecho-olvido',
    ogImage: huellaDigitalHeroImage,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Huella digital y derecho al olvido: privacidad y conciencia en la era digital",
      "author": {
        "@type": "Person",
        "name": "Rubén Reyero",
        "url": "https://hayasmarketing.com/es/autor/ruben-reyero"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Hayas Marketing",
        "logo": {
          "@type": "ImageObject",
          "url": "https://hayasmarketing.com/logo.png"
        }
      },
      "datePublished": "2025-11-25",
      "dateModified": "2025-11-25",
      "image": "/huella-digital-hero.jpg",
      "mainEntityOfPage": "https://hayasmarketing.com/es/blog/huella-digital-derecho-olvido"
    },
    mainKeyword: 'huella digital derecho al olvido',
    secondaryKeywords: ['privacidad digital', 'RGPD', 'LOPDGDD', 'derecho de supresión', 'datos personales']
  };

  const faqs = [
    {
      question: "¿Qué es la huella digital?",
      answer: "La huella digital es el conjunto de datos, perfiles, contenidos e información personal que una persona va dejando en Internet a lo largo del tiempo: redes sociales, fotografías, comentarios, perfiles profesionales, registros en plataformas, noticias, menciones y resultados en buscadores."
    },
    {
      question: "¿Qué es el derecho al olvido?",
      answer: "Es una manifestación del derecho de supresión de datos personales recogido en el RGPD. Permite solicitar la eliminación de datos cuando ya no son necesarios, se ha retirado el consentimiento, son inexactos o el tratamiento es ilícito. Se aplica especialmente a buscadores y redes sociales."
    },
    {
      question: "¿Puedo eliminar los perfiles digitales de un familiar fallecido?",
      answer: "Sí. La LOPDGDD española establece que familiares, herederos o personas vinculadas pueden solicitar el acceso, rectificación o eliminación de los datos personales de personas fallecidas, salvo que el fallecido dejara instrucciones expresas en contra."
    },
    {
      question: "¿El derecho al olvido es absoluto?",
      answer: "No. Siempre debe equilibrarse con otros derechos como la libertad de información o el interés público. Hay casos en los que la información puede mantenerse por razones de interés general o histórico."
    },
    {
      question: "¿Por qué es difícil eliminar un perfil de LinkedIn de una persona fallecida?",
      answer: "LinkedIn exige certificado de defunción y documentación legal que acredite representación formal (testamento, orden judicial, etc.). Si no se dispone de esa autorización, solo permite convertir el perfil en conmemorativo. La plataforma prioriza su política interna sobre la facilidad del proceso."
    }
  ];

  const relatedServices = [
    {
      title: "Consultoría Estratégica y Analítica",
      description: "Te ayudamos a diseñar estrategias digitales responsables que respeten la privacidad y cumplan con la normativa.",
      link: "/es/servicios/consultoria-estrategica-analitica"
    },
    {
      title: "Implantación de CRM",
      description: "Gestionamos la implementación de CRM con criterios de privacidad, cumplimiento RGPD y tratamiento responsable de datos.",
      link: "/es/servicios/implantacion-crm"
    }
  ];

  const queIncluyeHuella = [
    { icon: Globe, text: 'Redes sociales' },
    { icon: Eye, text: 'Fotografías' },
    { icon: FileText, text: 'Comentarios' },
    { icon: Building2, text: 'Perfiles profesionales' },
    { icon: Users, text: 'Registros en plataformas' },
    { icon: Search, text: 'Noticias, menciones y resultados en buscadores' },
    { icon: AlertCircle, text: 'Datos que otros publican sobre nosotros' }
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
            Vivimos en una era en la que todo deja rastro.
            Cada búsqueda, cada perfil, cada publicación, cada formulario rellenado construye lo que hoy llamamos <strong>huella digital</strong>.
          </p>
          
          <Card className="my-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Fingerprint className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-elegant mb-4">
                    La digitalización nos ha traído enormes oportunidades, pero también una pregunta incómoda que a menudo se deja de lado:
                  </p>
                  <p className="text-xl font-semibold text-primary">
                    ¿Qué pasa con esa huella cuando deja de representarnos… o cuando ya no estamos?
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <p className="text-elegant">
            Desde el marketing digital trabajamos cada día con datos, plataformas y tecnología. Pero detrás de cada dato hay una persona. Y por eso creemos que <strong>la digitalización necesita conciencia, límites y responsabilidad</strong>.
          </p>
        </section>

        <Separator />

        {/* Qué es la huella digital */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Qué es la huella digital y por qué importa</h2>
          
          <p className="text-elegant mb-6">
            La huella digital es el conjunto de datos, perfiles, contenidos e información personal que una persona va dejando en Internet a lo largo del tiempo.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <Card className="border-border/50">
              <CardContent className="p-6">
                <p className="font-semibold mb-4 text-elegant">No se trata solo de:</p>
                <ul className="space-y-2">
                  {[
                    { icon: Globe, text: 'Redes sociales' },
                    { icon: Eye, text: 'Fotografías' },
                    { icon: FileText, text: 'Comentarios' }
                  ].map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <li key={index} className="flex items-center gap-3">
                        <IconComponent className="h-5 w-5 text-muted-foreground" />
                        <span className="text-elegant-muted">{item.text}</span>
                      </li>
                    );
                  })}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-primary/30 bg-primary/5">
              <CardContent className="p-6">
                <p className="font-semibold mb-4 text-primary">También incluye:</p>
                <ul className="space-y-2">
                  {[
                    { icon: Building2, text: 'Perfiles profesionales' },
                    { icon: Users, text: 'Registros en plataformas' },
                    { icon: Search, text: 'Noticias, menciones y resultados en buscadores' },
                    { icon: AlertCircle, text: 'Datos que otros publican sobre nosotros' }
                  ].map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <li key={index} className="flex items-center gap-3">
                        <IconComponent className="h-5 w-5 text-primary" />
                        <span className="text-elegant-muted">{item.text}</span>
                      </li>
                    );
                  })}
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-950/20">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <AlertTriangle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
                <p className="text-elegant">
                  En muchos casos, esa huella permanece activa durante años, incluso cuando ya no refleja quiénes somos… o cuando la persona ha fallecido.
                </p>
              </div>
            </CardContent>
          </Card>

          <p className="mt-6 text-elegant font-medium">
            Aquí es donde entran en juego la <strong>privacidad digital</strong> y el <strong>derecho al olvido</strong>.
          </p>
        </section>

        <Separator />

        {/* Marco legal - Derecho al olvido */}
        <section>
          <h2 className="text-3xl font-bold mb-6">El derecho al olvido: el marco legal esencial</h2>
          
          <Card className="mb-6 border-blue-200 dark:border-blue-800 bg-blue-50/50 dark:bg-blue-950/20">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Scale className="h-8 w-8 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-lg mb-3">Reglamento General de Protección de Datos (RGPD)</p>
                  <p className="text-elegant-muted">
                    En Europa, la protección de la privacidad digital se articula principalmente a través del RGPD. Dentro de este marco existe el llamado <strong>derecho al olvido</strong>, que en realidad es una manifestación del <strong>derecho de supresión de datos personales</strong>.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <p className="text-elegant mb-4">
            En términos sencillos, el RGPD permite a cualquier persona solicitar la eliminación de sus datos cuando, entre otros supuestos:
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {[
              'Ya no son necesarios para la finalidad con la que fueron recogidos',
              'Se ha retirado el consentimiento',
              'Los datos son inexactos, desactualizados o excesivos',
              'El tratamiento es ilícito'
            ].map((supuesto, index) => (
              <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-muted/30 border border-border/50">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-elegant-muted text-sm">{supuesto}</span>
              </div>
            ))}
          </div>

          <p className="text-elegant mb-4">Este derecho se aplica especialmente a:</p>
          
          <div className="space-y-3 mb-8">
            <div className="flex items-start gap-3 p-4 rounded-lg bg-primary/5 border border-primary/20">
              <Search className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold">Motores de búsqueda</p>
                <p className="text-sm text-elegant-muted">Solicitando la desindexación de resultados asociados al nombre de una persona</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-lg bg-primary/5 border border-primary/20">
              <Globe className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold">Redes sociales y plataformas online</p>
                <p className="text-sm text-elegant-muted">Solicitando la eliminación de perfiles o contenidos personales</p>
              </div>
            </div>
          </div>

          <Card className="border-conecta/30 bg-conecta/5">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Shield className="h-8 w-8 text-conecta flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-lg mb-3">Ley Orgánica de Protección de Datos (LOPDGDD)</p>
                  <p className="text-elegant-muted mb-4">
                    En España, este marco se desarrolla y refuerza mediante la LOPDGDD, que reconoce de forma expresa:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-conecta flex-shrink-0 mt-0.5" />
                      <span>El derecho al olvido en buscadores</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-conecta flex-shrink-0 mt-0.5" />
                      <span>El derecho al olvido en redes sociales y servicios digitales</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="bg-muted/30 rounded-lg p-4 mt-6 border-l-4 border-amber-500">
            <p className="text-sm text-elegant">
              <strong>Eso sí, es importante aclararlo:</strong> el derecho al olvido no es absoluto. Siempre debe equilibrarse con otros derechos, como la libertad de información o el interés público.
            </p>
          </div>
        </section>

        <Separator />

        {/* Personas fallecidas */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Huella digital y personas fallecidas: lo que dice la ley</h2>
          
          <Card className="mb-6 border-red-200 dark:border-red-900 bg-red-50/50 dark:bg-red-950/20">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <UserX className="h-8 w-8 text-red-600 flex-shrink-0 mt-1" />
                <p className="text-elegant">
                  Aquí aparece uno de los <strong>grandes puntos ciegos de la digitalización</strong>. El RGPD no se aplica directamente a personas fallecidas, pero la legislación española sí regula esta situación.
                </p>
              </div>
            </CardContent>
          </Card>

          <p className="text-elegant mb-4">La LOPDGDD establece que, tras el fallecimiento de una persona:</p>

          <div className="space-y-3 mb-6">
            <div className="flex items-start gap-3 p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800">
              <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span className="text-elegant">
                <strong>Familiares, herederos o personas vinculadas</strong> pueden solicitar el acceso, rectificación o eliminación de sus datos personales
              </span>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800">
              <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span className="text-elegant">
                También pueden decidir sobre la <strong>eliminación o mantenimiento de perfiles digitales</strong> en redes sociales y plataformas online
              </span>
            </div>
          </div>

          <div className="bg-muted/30 rounded-lg p-4 border-l-4 border-primary">
            <p className="text-elegant">
              <strong>La única limitación relevante es la voluntad expresa del fallecido:</strong> si en vida dejó instrucciones prohibiendo el acceso o la eliminación de sus datos, esa voluntad debe respetarse. En ausencia de instrucciones, la ley sí permite actuar.
            </p>
          </div>
        </section>

        <Separator />

        {/* Caso LinkedIn */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Cuando la ley choca con la práctica: el caso LinkedIn</h2>
          
          <p className="text-elegant mb-6">
            Sobre el papel, el marco legal existe. En la práctica, la experiencia suele ser mucho más compleja. Un ejemplo claro es <strong>LinkedIn</strong>.
          </p>

          <Card className="mb-6 border-blue-300 dark:border-blue-700">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Building2 className="h-8 w-8 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-lg mb-4">Para cerrar la cuenta de una persona fallecida, <a href="https://www.linkedin.com/help/linkedin/answer/a1380121?lang=es" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">LinkedIn exige</a>:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <FileText className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-elegant">Certificado de defunción</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Scale className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-elegant">Documentación legal que acredite representación formal (testamento, orden judicial, certificado de administrador, etc.)</span>
                    </li>
                  </ul>
                  <p className="mt-4 text-sm text-elegant-muted">
                    Si no se dispone de esa autorización, LinkedIn solo permite convertir el perfil en <strong>conmemorativo</strong>, pero no eliminarlo.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-950/20">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <AlertTriangle className="h-8 w-8 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-lg mb-3">La paradoja</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-elegant-muted">
                      <span>•</span>
                      <span>La ley española <strong>permite</strong> a familiares solicitar la eliminación</span>
                    </li>
                    <li className="flex items-start gap-2 text-elegant-muted">
                      <span>•</span>
                      <span>La plataforma <strong>impone requisitos</strong> mucho más restrictivos</span>
                    </li>
                  </ul>
                  <p className="mt-4 text-elegant">
                    LinkedIn no incumple la ley, pero eleva el nivel de exigencia al máximo, priorizando su política interna y la prevención de riesgos legales.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <p className="mt-6 text-elegant font-medium text-red-700 dark:text-red-400">
            El resultado es claro: un derecho reconocido legalmente puede convertirse en un proceso largo, complejo y frustrante para las familias.
          </p>
        </section>

        <Separator />

        {/* Digitalización consciente */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Digitalización consciente: una responsabilidad compartida</h2>
          
          <p className="text-elegant mb-6">
            Desde el marketing digital, esta realidad nos interpela directamente. Trabajamos con datos, automatizaciones y plataformas, pero <strong>no todo lo técnicamente posible es éticamente deseable</strong>.
          </p>

          <Card className="mb-6 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Heart className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-xl font-semibold text-primary mb-4">
                    La privacidad no es un obstáculo para la innovación. Es un valor.
                  </p>
                  <p className="text-elegant-muted mb-4">La huella digital:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span className="text-elegant">No debería perpetuarse sin sentido</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span className="text-elegant">No debería quedar fuera del control de las personas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span className="text-elegant">No debería convertirse en una carga para quienes vienen después</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-conecta/30 bg-conecta/5">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Lightbulb className="h-8 w-8 text-conecta flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-lg mb-4">Hablar de digitalización consciente es hablar de:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-conecta flex-shrink-0 mt-0.5" />
                      <span className="text-elegant"><strong>Diseñar con respeto</strong></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-conecta flex-shrink-0 mt-0.5" />
                      <span className="text-elegant"><strong>Tratar los datos con responsabilidad</strong></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-conecta flex-shrink-0 mt-0.5" />
                      <span className="text-elegant"><strong>Poner a las personas en el centro</strong>, también cuando ya no están</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator />

        {/* Conclusión */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Mirar hacia delante</h2>
          
          <p className="text-elegant mb-4">
            El derecho al olvido existe. El marco legal también.
          </p>
          <p className="text-elegant mb-6">
            Pero la realidad demuestra que <strong>prevenir en vida es clave para evitar problemas después</strong>.
          </p>

          <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20 mb-6">
            <CardContent className="p-6">
              <p className="font-semibold text-lg mb-2">Ya está disponible la guía práctica:</p>
              <Link to="/es/blog/guia-privacidad-huella-digital" className="text-xl font-bold text-primary hover:underline block mb-4">
                Guía práctica para proteger tu privacidad y tu identidad digital
              </Link>
              <ul className="space-y-2">
                {[
                  'Cómo gestionar la huella digital en vida',
                  'Qué pasos dar para proteger la privacidad',
                  'Qué opciones ofrecen las principales plataformas'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-elegant">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <div className="bg-gradient-to-r from-primary/10 to-conecta/10 rounded-xl p-6 border border-primary/20">
            <p className="text-lg font-semibold text-center text-primary">
              Porque una digitalización verdaderamente responsable no empieza cuando hay un problema,<br />
              <span className="text-conecta">empieza cuando aún estamos a tiempo de decidir.</span>
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-muted/30 rounded-xl p-8 border border-border/50">
          <div className="text-center">
            <p className="text-elegant mb-4">
              Si tu empresa trabaja con datos de clientes y quieres asegurarte de que tu estrategia digital respeta la privacidad y el marco legal, podemos ayudarte.
            </p>
            <p className="font-semibold text-lg mb-6">
              ¿Quieres diseñar una estrategia digital consciente y responsable?
            </p>
            <Button asChild size="lg" className="group">
              <Link to={getRoute('contact')}>
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

export default BlogHuellaDigitalDerechoOlvido;
