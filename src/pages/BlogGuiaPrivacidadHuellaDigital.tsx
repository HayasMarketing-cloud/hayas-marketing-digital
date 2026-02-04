import React from 'react';
import BlogPostTemplate from '@/components/BlogPost/BlogPostTemplate';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import guiaPrivacidadHeroImage from '@/assets/guia-privacidad-huella-digital-hero.jpg';
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
  Search,
  Settings,
  Trash2,
  Key,
  Smartphone,
  ExternalLink,
  ShieldCheck,
  Phone,
  UserCheck,
  ScrollText
} from 'lucide-react';

const BlogGuiaPrivacidadHuellaDigital = () => {
  const { getRoute } = useLocalizedRoutes();
  const metadata = {
    title: 'Guía práctica para proteger tu privacidad y tu identidad digital',
    metaTitle: 'Guía Práctica: Protege tu Privacidad y Huella Digital | Hayas Marketing',
    description: 'Guía completa para gestionar tu huella digital en vida: identifica perfiles, ajusta privacidad, ejerce el derecho al olvido y protege tu identidad online.',
    metaDescription: 'Aprende a gestionar tu huella digital: inventario de perfiles, configuración de privacidad, derecho al olvido, albacea digital y protección de la identidad online.',
    date: '2025-12-03',
    readTime: '12 min',
    category: 'Privacidad Digital',
    author: 'Rubén Reyero',
    tags: ['Privacidad', 'Huella Digital', 'Identidad Digital', 'Derecho al Olvido', 'RGPD', 'Digitalización Consciente', 'Seguridad Online'],
    canonical: '/es/blog/guia-privacidad-huella-digital',
    ogImage: guiaPrivacidadHeroImage,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Guía práctica para proteger tu privacidad y tu identidad digital",
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
      "datePublished": "2025-12-03T00:00:00+01:00",
      "dateModified": "2025-12-03T00:00:00+01:00",
      "image": "/guia-privacidad-huella-digital-hero.jpg",
      "mainEntityOfPage": "https://hayasmarketing.com/es/blog/guia-privacidad-huella-digital"
    },
    mainKeyword: 'proteger privacidad digital',
    secondaryKeywords: ['huella digital', 'identidad digital', 'derecho al olvido', 'privacidad online', 'albacea digital']
  };

  const faqs = [
    {
      question: "¿Cómo puedo saber qué huella digital tengo?",
      answer: "Busca tu nombre y apellidos en Google (también en modo incógnito), revisa tus redes sociales activas e inactivas, perfiles profesionales y cuentas antiguas en servicios que ya no usas. No se trata de borrar todo, sino de tomar conciencia."
    },
    {
      question: "¿Qué plataformas tienen privacidad por defecto más restrictiva?",
      answer: "Apple destaca por priorizar la privacidad por diseño. En cambio, la mayoría de redes sociales como Instagram, LinkedIn, Twitter/X y TikTok tienen cuentas públicas por defecto. Google y Facebook ofrecen privacidad media-baja si no se ajustan manualmente."
    },
    {
      question: "¿Cómo puedo ejercer el derecho al olvido?",
      answer: "Puedes solicitar desindexación en buscadores (Google) a través de su Centro de ayuda buscando 'derecho al olvido'. Para plataformas, accede a su Centro de ayuda oficial y busca términos como 'eliminar cuenta' o 'derecho de supresión'. Si no responden, puedes acudir a la AEPD."
    },
    {
      question: "¿Qué es un albacea digital?",
      answer: "Es una persona de confianza que puede gestionar tus cuentas digitales. Algunas plataformas ofrecen opciones oficiales (Google, Facebook, Apple) y para el resto conviene dejar un inventario de cuentas e instrucciones claras a alguien de confianza."
    },
    {
      question: "¿Cuándo debo acudir a la policía por problemas digitales?",
      answer: "Cuando hay suplantación de identidad, uso indebido de perfiles de personas fallecidas, difusión de datos sin consentimiento, acoso, amenazas, extorsión online, publicación de contenidos íntimos o accesos no autorizados a cuentas. La Policía Nacional y Guardia Civil tienen unidades de delitos tecnológicos."
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

  const privacidadPlataformas = [
    { plataforma: 'Google', nivel: 'Media–baja', implica: 'Actividad y perfil asociados a servicios si no se limita', color: 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300' },
    { plataforma: 'Facebook', nivel: 'Media', implica: 'Perfil y publicaciones visibles para "amigos" o público', color: 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300' },
    { plataforma: 'Instagram', nivel: 'Baja', implica: 'Cuentas públicas por defecto', color: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300' },
    { plataforma: 'LinkedIn', nivel: 'Baja', implica: 'Perfil profesional indexado en buscadores', color: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300' },
    { plataforma: 'Twitter / X', nivel: 'Baja', implica: 'Publicaciones públicas y rastreables', color: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300' },
    { plataforma: 'TikTok', nivel: 'Baja', implica: 'Perfil y vídeos públicos salvo cambio manual', color: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300' },
    { plataforma: 'Apple', nivel: 'Alta', implica: 'Privacidad prioritaria por diseño', color: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' },
    { plataforma: 'Microsoft', nivel: 'Media', implica: 'Depende del servicio concreto', color: 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300' }
  ];

  const plataformasSinAlbacea = [
    { nombre: 'Instagram', descripcion: 'Cuentas conmemorativas o eliminación' },
    { nombre: 'LinkedIn', descripcion: 'Cerrar o conmemorar la cuenta de un miembro fallecido' },
    { nombre: 'Twitter / X', descripcion: 'Desactivar la cuenta de una persona fallecida' },
    { nombre: 'Microsoft', descripcion: 'Acceder o cerrar la cuenta de una persona fallecida' },
    { nombre: 'TikTok', descripcion: 'Cuenta de una persona fallecida' }
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
            La huella digital no se crea de golpe ni desaparece sola.
            Se construye con el tiempo a través de perfiles, publicaciones, registros y datos que vamos dejando en Internet, muchas veces sin darnos cuenta.
          </p>
          
          <Card className="my-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Shield className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-elegant mb-4">
                    Gestionarla en vida no significa desaparecer de la red, sino <strong>decidir conscientemente qué dejamos, dónde y con qué propósito</strong>.
                  </p>
                  <p className="text-elegant-muted">
                    Desde una visión de digitalización consciente, esta guía recoge los pasos prácticos para hacerlo de forma responsable, realista y humana.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator />

        {/* 1. Identifica tu huella digital real */}
        <section>
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary font-bold text-lg">1</span>
            Identifica tu huella digital real
          </h2>
          
          <p className="text-elegant mb-6">
            El primer paso es saber dónde estás presente.
          </p>

          <Card className="mb-6 border-border/50">
            <CardContent className="p-6">
              <p className="font-semibold mb-4 text-elegant">Haz un inventario básico de:</p>
              <ul className="space-y-3">
                {[
                  { icon: Globe, text: 'Redes sociales activas e inactivas' },
                  { icon: Building2, text: 'Perfiles profesionales' },
                  { icon: UserX, text: 'Cuentas antiguas en servicios que ya no usas' },
                  { icon: Eye, text: 'Contenidos públicos asociados a tu nombre' }
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

          <Card className="border-blue-200 dark:border-blue-800 bg-blue-50/50 dark:bg-blue-950/20">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Lightbulb className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold mb-2">Un ejercicio sencillo:</p>
                  <ul className="space-y-2 text-elegant-muted">
                    <li>• Busca tu nombre y apellidos en Google</li>
                    <li>• Repite la búsqueda en modo incógnito</li>
                  </ul>
                  <p className="mt-4 text-primary font-medium">
                    👉 No se trata de borrar todo, sino de tomar conciencia.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator />

        {/* 2. Decide qué perfiles quieres mantener */}
        <section>
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary font-bold text-lg">2</span>
            Decide qué perfiles quieres mantener (y cuáles no)
          </h2>
          
          <p className="text-elegant mb-6">
            No todos los perfiles abiertos merecen seguir existiendo.
          </p>

          <Card className="mb-6 border-border/50">
            <CardContent className="p-6">
              <p className="font-semibold mb-4 text-elegant">Pregúntate:</p>
              <ul className="space-y-3">
                {[
                  '¿Este perfil me representa hoy?',
                  '¿Tiene un propósito claro?',
                  '¿Aporta algo o solo expone datos?'
                ].map((pregunta, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="text-elegant-muted">{pregunta}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-green-200 dark:border-green-800 bg-green-50/50 dark:bg-green-950/20">
            <CardContent className="p-6">
              <p className="font-semibold mb-4 text-green-700 dark:text-green-300">Acciones recomendadas:</p>
              <ul className="space-y-2">
                {[
                  { icon: Trash2, text: 'Cerrar cuentas que no uses' },
                  { icon: UserX, text: 'Eliminar perfiles duplicados' },
                  { icon: Settings, text: 'Revisar biografías, fotos y datos visibles' }
                ].map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <li key={index} className="flex items-center gap-3">
                      <IconComponent className="h-5 w-5 text-green-600" />
                      <span className="text-elegant-muted">{item.text}</span>
                    </li>
                  );
                })}
              </ul>
              <p className="mt-4 text-green-700 dark:text-green-300 font-medium">
                👉 Menos perfiles, mejor gestionados, es más protección.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator />

        {/* 3. Ajusta la privacidad */}
        <section>
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary font-bold text-lg">3</span>
            Ajusta la privacidad (no la dejes por defecto)
          </h2>
          
          <Card className="mb-6 border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-950/20">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <AlertTriangle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
                <p className="text-elegant">
                  Muchas plataformas digitales priorizan la visibilidad por defecto, no la privacidad.
                  <strong> Si no revisas los ajustes, probablemente estás compartiendo más de lo que crees.</strong>
                </p>
              </div>
            </CardContent>
          </Card>

          <h3 className="text-xl font-semibold mb-4">Privacidad por defecto en las principales plataformas</h3>

          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-muted/50">
                  <th className="text-left p-3 border border-border font-semibold">Plataforma</th>
                  <th className="text-left p-3 border border-border font-semibold">Privacidad por defecto</th>
                  <th className="text-left p-3 border border-border font-semibold">Qué implica</th>
                </tr>
              </thead>
              <tbody>
                {privacidadPlataformas.map((item, index) => (
                  <tr key={index} className="hover:bg-muted/30 transition-colors">
                    <td className="p-3 border border-border font-medium">{item.plataforma}</td>
                    <td className="p-3 border border-border">
                      <Badge className={item.color}>{item.nivel}</Badge>
                    </td>
                    <td className="p-3 border border-border text-elegant-muted">{item.implica}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <Card className="border-primary/30 bg-primary/5">
            <CardContent className="p-6">
              <p className="font-semibold mb-3 text-primary">👉 Conclusión: si no tocas nada, la mayoría de plataformas asumen visibilidad.</p>
              <p className="font-medium mb-3 text-elegant">Revisa como mínimo:</p>
              <ul className="space-y-2">
                {[
                  'Quién puede ver tu perfil',
                  'Si apareces en buscadores',
                  'Qué datos son públicos',
                  'Qué apps tienen acceso a tu cuenta'
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2 text-elegant-muted">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        <Separator />

        {/* 4. Ejercita tu derecho al olvido */}
        <section>
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary font-bold text-lg">4</span>
            Ejercita tu derecho al olvido cuando sea necesario
          </h2>
          
          <p className="text-elegant mb-4">Si detectas información que:</p>
          
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {[
              'Está desactualizada',
              'Es irrelevante',
              'Te perjudica',
              'Ya no refleja quién eres'
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 border border-border/50">
                <AlertCircle className="h-5 w-5 text-amber-500" />
                <span className="text-elegant-muted">{item}</span>
              </div>
            ))}
          </div>

          <Card className="mb-8 border-blue-200 dark:border-blue-800 bg-blue-50/50 dark:bg-blue-950/20">
            <CardContent className="p-6">
              <p className="text-elegant">
                Puedes solicitar <strong>desindexación en buscadores</strong> y/o <strong>supresión en la plataforma</strong> donde se publicó.
                <br /><br />
                <span className="text-amber-600 dark:text-amber-400 font-medium">⚠️ No es lo mismo: quitar de Google no borra el contenido original.</span>
              </p>
            </CardContent>
          </Card>

          <h3 className="text-xl font-semibold mb-4">Cómo hacerlo de forma segura (sin depender de enlaces frágiles)</h3>

          <div className="space-y-6">
            <Card className="border-border/50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Search className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-lg mb-3">A) Desindexación en buscadores (Google)</p>
                    <p className="text-elegant-muted mb-3">
                      Google mantiene un procedimiento específico para solicitudes relacionadas con el derecho al olvido y la retirada de resultados asociados a un nombre.
                    </p>
                    <p className="font-medium mb-2">Cómo proceder:</p>
                    <ul className="space-y-2 text-elegant-muted">
                      <li>• Accede al Centro de ayuda de Google</li>
                      <li>• Busca "derecho al olvido" o "retirada de resultados"</li>
                      <li>• Sigue el formulario oficial que Google tenga activo en ese momento</li>
                    </ul>
                    <p className="mt-3 text-sm text-muted-foreground italic">
                      👉 Google cambia URLs internas con frecuencia, por lo que siempre es más fiable entrar desde su Centro de ayuda que usar enlaces antiguos.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Globe className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-lg mb-3">B) Supresión en redes sociales y plataformas</p>
                    <p className="text-elegant-muted mb-3">
                      Aquí el proceso depende de cada servicio y los enlaces cambian a menudo.
                    </p>
                    <p className="font-medium mb-2">La vía más fiable es:</p>
                    <ul className="space-y-2 text-elegant-muted">
                      <li>• Entrar en el Centro de ayuda oficial de la plataforma</li>
                      <li>• Buscar términos como: "eliminar cuenta", "eliminar contenido", "datos personales", "privacidad", "derecho de supresión"</li>
                      <li>• Seguir el canal que indique la propia plataforma</li>
                    </ul>
                    <p className="mt-3 text-sm text-amber-600 dark:text-amber-400">
                      ⚠️ Recomendación práctica: desconfía de enlaces externos o antiguos. Las plataformas actualizan estos flujos con frecuencia.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Scale className="h-6 w-6 text-purple-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-lg mb-3">C) Si la plataforma no responde o rechaza sin base</p>
                    <p className="text-elegant-muted mb-3">
                      En España puedes acudir a la <strong>Agencia Española de Protección de Datos (AEPD)</strong>.
                    </p>
                    <p className="font-medium mb-2">La AEPD:</p>
                    <ul className="space-y-2 text-elegant-muted">
                      <li>• Informa sobre el derecho de supresión</li>
                      <li>• Proporciona formularios oficiales</li>
                      <li>• Permite reclamar cuando una empresa no atiende correctamente el derecho</li>
                    </ul>
                    <p className="mt-3 text-sm text-muted-foreground italic">
                      👉 Buscar directamente en la web oficial de la AEPD: "ejercicio del derecho de supresión" o "derecho al olvido".
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-6 border-primary/30 bg-primary/5">
            <CardContent className="p-6 text-center">
              <p className="text-lg font-semibold text-primary">
                El derecho al olvido no es automático, pero sí exigible.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator />

        {/* 5. Instituciones públicas */}
        <section>
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary font-bold text-lg">5</span>
            Cuando la huella digital vulnera tu intimidad: instituciones públicas
          </h2>
          
          <p className="text-elegant mb-6">
            No todos los problemas digitales se resuelven desde un formulario o una configuración.
          </p>

          <Card className="mb-6 border-border/50">
            <CardContent className="p-6">
              <p className="font-semibold mb-4 text-elegant">Hay situaciones en las que entran en juego derechos fundamentales:</p>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { icon: Lock, text: 'Intimidad' },
                  { icon: Fingerprint, text: 'Identidad digital' },
                  { icon: Shield, text: 'Protección de datos personales' }
                ].map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
                      <IconComponent className="h-5 w-5 text-primary" />
                      <span className="text-elegant-muted">{item.text}</span>
                    </div>
                  );
                })}
              </div>
              <p className="mt-4 text-elegant">
                En estos casos, <strong>Policía Nacional y Guardia Civil</strong> tienen competencias reales para intervenir.
              </p>
            </CardContent>
          </Card>

          <h3 className="text-xl font-semibold mb-4">¿En qué casos pueden actuar?</h3>
          
          <div className="grid md:grid-cols-2 gap-3 mb-6">
            {[
              'Suplantación de identidad',
              'Uso indebido de perfiles de personas fallecidas',
              'Difusión de datos personales sin consentimiento',
              'Acoso, amenazas o extorsión online',
              'Publicación de contenidos íntimos o sensibles',
              'Accesos no autorizados a cuentas digitales'
            ].map((caso, index) => (
              <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800">
                <AlertTriangle className="h-5 w-5 text-red-500 flex-shrink-0" />
                <span className="text-elegant-muted">{caso}</span>
              </div>
            ))}
          </div>

          <p className="text-elegant font-medium mb-6">
            Aquí ya no hablamos solo de privacidad, sino de <strong>posibles delitos digitales</strong>.
          </p>

          <h3 className="text-xl font-semibold mb-4">Canales oficiales de ayuda</h3>
          
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            {[
              { nombre: 'Policía Nacional', descripcion: 'Delitos tecnológicos', icon: ShieldCheck },
              { nombre: 'Guardia Civil', descripcion: 'Incidentes telemáticos', icon: Shield },
              { nombre: 'INCIBE – Línea 017', descripcion: 'Asesoramiento gratuito', icon: Phone }
            ].map((canal, index) => {
              const IconComponent = canal.icon;
              return (
                <Card key={index} className="border-border/50">
                  <CardContent className="p-4 text-center">
                    <IconComponent className="h-8 w-8 text-primary mx-auto mb-2" />
                    <p className="font-semibold">{canal.nombre}</p>
                    <p className="text-sm text-muted-foreground">{canal.descripcion}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <Card className="border-primary/30 bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardContent className="p-6">
              <p className="font-semibold text-lg mb-3 text-primary">🛡️ ¿Cuándo acudir a la "policía digital"?</p>
              <ul className="space-y-2 text-elegant">
                <li>👉 Cuando hay daño real o riesgo</li>
                <li>👉 Cuando la plataforma no responde</li>
                <li>👉 Cuando hay suplantación, acoso o uso indebido de datos</li>
                <li>👉 Cuando la persona afectada no puede defenderse (menores, personas fallecidas)</li>
              </ul>
              <p className="mt-4 font-medium text-primary">
                Acudir a estas instituciones no es exagerar, es ejercer un derecho.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator />

        {/* 6. Controla accesos */}
        <section>
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary font-bold text-lg">6</span>
            Controla accesos y evita bloqueos innecesarios
          </h2>
          
          <p className="text-elegant mb-4">El mayor problema hoy no suele ser la contraseña, sino:</p>
          
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            {[
              { icon: Key, text: 'Accesos olvidados' },
              { icon: Settings, text: 'Apps con permisos antiguos' },
              { icon: Smartphone, text: 'Verificación en dos pasos imposible de superar' }
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Card key={index} className="border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-950/20">
                  <CardContent className="p-4 flex items-center gap-3">
                    <IconComponent className="h-6 w-6 text-amber-600" />
                    <span className="text-elegant-muted">{item.text}</span>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <Card className="border-green-200 dark:border-green-800 bg-green-50/50 dark:bg-green-950/20">
            <CardContent className="p-6">
              <p className="font-semibold mb-3 text-green-700 dark:text-green-300">Conviene revisar:</p>
              <ul className="space-y-2">
                {[
                  'Qué servicios externos tienen acceso a tu cuenta',
                  'Si tienes códigos de recuperación guardados',
                  'Si dependes de un único móvil'
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2 text-elegant-muted">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-green-700 dark:text-green-300 font-medium">
                Esto no es solo seguridad: es facilitar la gestión futura de tu huella digital.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator />

        {/* 7. Albacea digital */}
        <section>
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary font-bold text-lg">7</span>
            Tu albacea digital: dos vías para dejarlo resuelto
          </h2>
          
          <p className="text-elegant mb-6">
            Hablar de albacea digital no es solo hablar de lo que permiten las plataformas.
            En la práctica existen <strong>dos vías complementarias</strong>.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-blue-200 dark:border-blue-800 bg-blue-50/50 dark:bg-blue-950/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Building2 className="h-6 w-6 text-blue-600" />
                  <p className="font-semibold text-lg">Vía 1: opciones oficiales de las plataformas</p>
                </div>
                <p className="text-elegant-muted mb-4">
                  Algunas plataformas permiten configurar en vida qué ocurrirá con la cuenta:
                </p>
                <ul className="space-y-2">
                  {[
                    'Google (cuenta inactiva)',
                    'Facebook (contacto de legado)',
                    'Apple (representante digital)'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2 text-elegant-muted">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm text-muted-foreground italic">
                  Son el camino oficial, pero no cubren todos los casos.
                </p>
              </CardContent>
            </Card>

            <Card className="border-green-200 dark:border-green-800 bg-green-50/50 dark:bg-green-950/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <UserCheck className="h-6 w-6 text-green-600" />
                  <p className="font-semibold text-lg">Vía 2: albacea digital de confianza</p>
                </div>
                <p className="text-elegant-muted mb-4">
                  Especialmente importante en plataformas que no ofrecen contacto de legado.
                </p>
                <p className="font-medium mb-2">Aquí entran:</p>
                <ul className="space-y-2">
                  {[
                    'Inventario de cuentas',
                    'Planificación del 2FA',
                    'Instrucciones claras'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2 text-elegant-muted">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm text-muted-foreground italic">
                  No se trata de compartir contraseñas sin control, sino de evitar bloqueos innecesarios.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator />

        {/* 8. Plataformas sin albacea digital */}
        <section>
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary font-bold text-lg">8</span>
            Plataformas sin albacea digital: páginas oficiales de referencia
          </h2>
          
          <p className="text-elegant mb-6">
            En estas plataformas no puedes dejar nada configurado en vida; la gestión se hace tras el fallecimiento:
          </p>

          <div className="space-y-3 mb-6">
            {plataformasSinAlbacea.map((plataforma, index) => (
              <Card key={index} className="border-border/50">
                <CardContent className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Globe className="h-5 w-5 text-muted-foreground" />
                    <span className="font-medium">{plataforma.nombre}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">{plataforma.descripcion}</span>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-950/20">
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <p className="text-elegant-muted">
                  👉 Siempre desde sus centros de ayuda oficiales, ya que los formularios cambian con frecuencia.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator />

        {/* 9. Deja instrucciones claras */}
        <section>
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary font-bold text-lg">9</span>
            Deja instrucciones claras (aunque sean simples)
          </h2>
          
          <p className="text-elegant mb-6">No hace falta un documento complejo.</p>

          <Card className="border-primary/30 bg-primary/5 mb-6">
            <CardContent className="p-6">
              <p className="font-semibold mb-4 text-primary">Basta con:</p>
              <ul className="space-y-3">
                {[
                  'Decidir qué quieres que pase con tus perfiles',
                  'Dejarlo claro a una persona de confianza',
                  'Aprovechar las opciones oficiales cuando existan'
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-elegant">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-green-200 dark:border-green-800 bg-green-50/50 dark:bg-green-950/20">
            <CardContent className="p-6 text-center">
              <Heart className="h-8 w-8 text-green-600 mx-auto mb-3" />
              <p className="text-lg font-semibold text-green-700 dark:text-green-300">
                Gestionar la huella digital también es cuidar a los demás.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator />

        {/* Cierre final */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Cierre final</h2>
          
          <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
            <CardContent className="p-8">
              <p className="text-xl text-elegant mb-6">
                La huella digital habla de nosotros incluso cuando no estamos presentes.
              </p>
              
              <p className="font-semibold mb-4 text-lg">Gestionarla en vida es:</p>
              <ul className="space-y-3 mb-6">
                {[
                  'Un acto de responsabilidad',
                  'Una forma de protección',
                  'Una decisión consciente sobre tu identidad digital'
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-elegant">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
              
              <Separator className="my-6" />
              
              <p className="text-elegant mb-4">
                La tecnología avanza rápido.<br />
                <strong>La conciencia digital debería avanzar con ella.</strong>
              </p>
              
              <p className="text-primary font-semibold text-lg">
                Desde una digitalización consciente, proteger la privacidad no es ir contra el progreso:<br />
                es poner a las personas en el centro.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* CTA - Artículo relacionado */}
        <section className="mt-12">
          <Card className="border-primary/30 bg-gradient-to-br from-background to-muted/30 overflow-hidden">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="flex-1">
                  <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                    Artículo relacionado
                  </Badge>
                  <h3 className="text-2xl font-bold mb-3">¿Quieres entender el marco legal?</h3>
                  <p className="text-elegant-muted mb-4">
                    Lee nuestro artículo anterior sobre el derecho al olvido, el RGPD y la LOPDGDD para comprender el contexto legal de la privacidad digital.
                  </p>
                  <Button asChild className="gap-2">
                    <Link to="/es/blog/huella-digital-derecho-olvido">
                      Leer artículo completo
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <div className="flex-shrink-0">
                  <ScrollText className="h-24 w-24 text-primary/20" />
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </BlogPostTemplate>
  );
};

export default BlogGuiaPrivacidadHuellaDigital;
