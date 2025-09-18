import React from 'react';
import BlogPostTemplate from '@/components/BlogPost/BlogPostTemplate';
import { CheckCircle, Shield, Mail, Settings, AlertTriangle, Lock, Server, Globe, GitCompare, Check, ArrowRight } from 'lucide-react';

const BlogConfiguracionEmailMarketingCumplimiento = () => {
  const metadata = {
    title: "Guía técnica para configurar tu email marketing con cumplimiento normativo (en cualquier plataforma)",
    description: "Aprende a configurar SPF, DKIM y DMARC en HubSpot, Go High Level, Mailchimp y otras plataformas. Guía completa de email marketing con cumplimiento RGPD 2025.",
    date: "2025-09-12",
    readTime: "18 min de lectura",
    category: "Email Marketing",
    author: "Equipo Hayas Marketing",
    tags: ["email marketing", "spf", "dkim", "dmarc", "cumplimiento", "rgpd", "hubspot", "go high level", "mailchimp"],
    canonical: "/blog/configuracion-email-marketing-cumplimiento-normativo",
    ogImage: "/email-marketing-automatizaciones-hero.jpg",
    metaTitle: "Configuración Email Marketing: SPF, DKIM y DMARC para Cualquier Plataforma 2025",
    metaDescription: "Guía técnica universal para configurar email marketing cumpliendo RGPD y normativas. Ejemplos prácticos para HubSpot, Go High Level y Mailchimp.",
    mainKeyword: "configuración email marketing cumplimiento",
    secondaryKeywords: ["spf dkim dmarc configuracion", "email marketing rgpd", "configurar dominio email", "cumplimiento normativo email"],
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Guía técnica para configurar tu email marketing con cumplimiento normativo (en cualquier plataforma)",
      "description": "Aprende a configurar SPF, DKIM y DMARC en HubSpot, Go High Level, Mailchimp y otras plataformas. Guía completa de email marketing con cumplimiento RGPD 2025.",
      "image": "https://hayasmarketing.com/email-marketing-automatizaciones-hero.jpg",
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
      "datePublished": "2025-09-12",
      "dateModified": "2025-09-12"
    }
  };

  const faqs = [
    {
      question: "¿Puedo usar la misma configuración SPF para múltiples plataformas de email marketing?",
      answer: "Sí, pero debes consolidar todos los proveedores en un solo registro SPF. Por ejemplo, si usas HubSpot y Mailchimp, tu registro sería: v=spf1 include:spf.hubspot.com include:servers.mcsv.net ~all. Nunca tengas múltiples registros SPF para el mismo dominio."
    },
    {
      question: "¿Qué diferencia hay entre configurar DKIM en HubSpot vs Go High Level?",
      answer: "HubSpot genera automáticamente los registros DKIM en su interfaz. Go High Level depende de tu proveedor SMTP (Mailgun, Sendgrid), donde debes configurar DKIM por separado. Ambos requieren añadir registros CNAME en tu DNS, pero el proceso de obtención es diferente."
    },
    {
      question: "¿Es obligatorio usar subdominios para email marketing?",
      answer: "No es obligatorio, pero es altamente recomendado. Usar subdominios como mail.tudominio.com protege tu dominio principal si hay problemas de entregabilidad y te permite tener configuraciones específicas para diferentes tipos de emails."
    },
    {
      question: "¿Cómo afecta el cumplimiento RGPD si mi empresa no está en Europa?",
      answer: "Si envías emails a residentes de la UE, el RGPD se aplica independientemente de dónde esté tu empresa. Además, cada país tiene sus propias regulaciones (CAN-SPAM en EE.UU., LOPDGDD en España). Es mejor cumplir con los estándares más estrictos."
    },
    {
      question: "¿Qué hacer si mi tasa de spam supera el 0.1%?",
      answer: "Suspende los envíos inmediatamente y analiza: segmenta mejor tu lista, verifica la calidad del contenido, revisa la frecuencia de envío y limpia contactos inactivos. En plataformas como HubSpot o Mailchimp, usa las herramientas de análisis para identificar el problema específico."
    },
    {
      question: "¿Cuánto tiempo tarda en propagarse la configuración DNS?",
      answer: "Los registros DNS pueden tardar de 15 minutos a 48 horas en propagarse completamente. SPF y DMARC suelen ser más rápidos (15-60 minutos), mientras que DKIM puede tardar más. Usa herramientas como MXToolbox para verificar el estado."
    }
  ];

  const relatedServices = [
    {
      title: "Email Marketing y Automatizaciones",
      description: "Configuramos y optimizamos tus campañas de email marketing con total cumplimiento normativo en cualquier plataforma.",
      link: "/email-marketing-automatizaciones"
    },
    {
      title: "Implementación de CRM",
      description: "Implementamos HubSpot, Go High Level y otros CRMs con configuración completa de email marketing.",
      link: "/servicios/implantacion-crm"
    }
  ];

  return (
    <BlogPostTemplate
      metadata={metadata}
      heroImage={{
        src: "/email-marketing-automatizaciones-hero.jpg",
        alt: "Configuración técnica de email marketing con cumplimiento normativo en múltiples plataformas"
      }}
      faqs={faqs}
      relatedServices={relatedServices}
    >
      <div className="space-y-8">
        {/* Introducción */}
        <section>
          <p className="text-lg text-muted-foreground mb-6">
            Una configuración correcta de email marketing va más allá de elegir una plataforma. <strong>Independientemente de si uses HubSpot, Go High Level, Mailchimp o ActiveCampaign</strong>, existe un conjunto de configuraciones técnicas esenciales que determinan si tus emails llegan a la bandeja de entrada o van directamente a spam.
          </p>
          
          <p className="mb-6">
            En esta guía evergreen, te mostramos cómo implementar estas configuraciones universales, usando <strong>HubSpot como ejemplo práctico</strong> pero proporcionando instrucciones aplicables a cualquier plataforma profesional de email marketing.
          </p>

          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-6 border border-primary/20 mb-8">
            <h3 className="text-xl font-bold mb-4 text-foreground flex items-center gap-2">
              <CheckCircle className="h-6 w-6 text-primary" />
              Beneficios clave de una configuración adecuada
            </h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-600" />
                <span>Entregabilidad asegurada</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-600" />
                <span>Cumplimiento normativo (RGPD, CAN-SPAM, LOPDGDD)</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-600" />
                <span>Protección de la reputación del dominio</span>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
            <p className="text-blue-800">
              <strong>Nota importante:</strong> Aunque usaremos HubSpot como ejemplo principal, también mencionaremos Go High Level y Mailchimp para mostrar las diferencias y similitudes entre plataformas.
            </p>
          </div>
        </section>

        {/* Configuración esencial */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-foreground">Configuración esencial de cualquier plataforma</h2>
          
          <p className="text-lg mb-8">
            Estas son las configuraciones técnicas que <strong>toda plataforma de email marketing profesional debe tener</strong>, independientemente del proveedor que elijas:
          </p>

          <div className="space-y-8">
            {/* Autenticación del dominio */}
            <div className="bg-white dark:bg-gray-900 rounded-xl border border-border p-8">
              <h3 className="text-2xl font-semibold mb-6 text-foreground flex items-center gap-3">
                <Lock className="h-6 w-6 text-primary" />
                Autenticación del dominio: SPF, DKIM, DMARC
              </h3>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">SPF (Sender Policy Framework)</h4>
                  <p className="text-sm text-muted-foreground">Verifica que los emails provienen de servidores autorizados por tu dominio.</p>
                  <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded text-xs font-mono">
                    v=spf1 include:servidores ~all
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">DKIM (DomainKeys Identified Mail)</h4>
                  <p className="text-sm text-muted-foreground">Añade firma digital criptográfica para validar la autenticidad.</p>
                  <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded text-xs">
                    Registro CNAME con clave pública
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">DMARC (Domain-based Message Authentication)</h4>
                  <p className="text-sm text-muted-foreground">Combina SPF y DKIM para máxima seguridad y reportes.</p>
                  <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded text-xs font-mono">
                    v=DMARC1; p=quarantine;
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-400 p-4">
                <p className="text-amber-800 text-sm">
                  <strong>¿Unificar o separar registros?</strong> Si usas múltiples plataformas (ej: HubSpot + Mailchimp), debes consolidar TODOS los proveedores en UN SOLO registro SPF. Nunca tengas registros SPF duplicados para el mismo dominio.
                </p>
              </div>
            </div>

            {/* Verificación del dominio */}
            <div className="bg-white dark:bg-gray-900 rounded-xl border border-border p-8">
              <h3 className="text-2xl font-semibold mb-6 text-foreground flex items-center gap-3">
                <Server className="h-6 w-6 text-primary" />
                Verificación del dominio de envío
              </h3>
              
              <p className="mb-4 text-muted-foreground">
                Cada plataforma tiene su proceso de verificación, pero el principio es universal:
              </p>
              
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground mb-6">
                <li>La plataforma genera registros DNS únicos</li>
                <li>Añades estos registros en tu proveedor de dominio</li>
                <li>La plataforma verifica la configuración</li>
                <li>Una vez verificado, puedes enviar desde tu dominio personalizado</li>
              </ol>

              <div className="bg-green-50 border-l-4 border-green-400 p-4">
                <p className="text-green-800 text-sm">
                  <strong>Resultado:</strong> Envías desde tu@tuempresa.com en lugar de tu@plataforma-generica.com
                </p>
              </div>
            </div>

            {/* Subdominios dedicados */}
            <div className="bg-white dark:bg-gray-900 rounded-xl border border-border p-8">
              <h3 className="text-2xl font-semibold mb-6 text-foreground flex items-center gap-3">
                <Globe className="h-6 w-6 text-primary" />
                Uso de subdominios dedicados para campañas
              </h3>
              
              <p className="mb-4 text-muted-foreground">
                Los subdominios protegen tu dominio principal y permiten configuraciones específicas:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-green-700">✅ Recomendado</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• <strong>mail.tuempresa.com</strong> - Campañas marketing</li>
                    <li>• <strong>noreply.tuempresa.com</strong> - Emails transaccionales</li>
                    <li>• <strong>support.tuempresa.com</strong> - Comunicaciones soporte</li>
                  </ul>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-red-700">❌ Evitar</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Usar solo el dominio principal para todo</li>
                    <li>• Mezclar emails transaccionales con marketing</li>
                    <li>• No tener configuración específica por tipo</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Personalización del remitente */}
            <div className="bg-white dark:bg-gray-900 rounded-xl border border-border p-8">
              <h3 className="text-2xl font-semibold mb-6 text-foreground flex items-center gap-3">
                <Settings className="h-6 w-6 text-primary" />
                Personalización del remitente y reply-to
              </h3>
              
              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="font-semibold mb-2">Remitente (From)</h4>
                  <p className="text-sm text-muted-foreground mb-2">Debe ser consistente y reconocible:</p>
                  <div className="bg-green-50 p-3 rounded border border-green-200">
                    <code className="text-green-800">Marketing Hayas &lt;hola@mail.hayasmarketing.com&gt;</code>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Respuesta (Reply-to)</h4>
                  <p className="text-sm text-muted-foreground mb-2">Debe ser una dirección monitoreada:</p>
                  <div className="bg-green-50 p-3 rounded border border-green-200">
                    <code className="text-green-800">hola@hayasmarketing.com</code>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tabla comparativa de plataformas */}
          <div className="mt-12">
            <h3 className="text-xl font-semibold mb-6 text-foreground flex items-center gap-2">
              <GitCompare className="h-5 w-5" />
              Ejemplos comparativos por plataforma
            </h3>
            
            <div className="overflow-x-auto">
              <table className="w-full border border-border rounded-lg overflow-hidden">
                <thead className="bg-muted">
                  <tr>
                    <th className="text-left p-4 font-semibold">Aspecto</th>
                    <th className="text-left p-4 font-semibold">HubSpot</th>
                    <th className="text-left p-4 font-semibold">Go High Level</th>
                    <th className="text-left p-4 font-semibold">Mailchimp</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="p-4 font-medium">Configuración DKIM</td>
                    <td className="p-4 text-sm">Automática en configuración de dominios</td>
                    <td className="p-4 text-sm">Manual vía Mailgun/Sendgrid</td>
                    <td className="p-4 text-sm">Automática con verificación DNS</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium">SPF requerido</td>
                    <td className="p-4 text-sm"><code>include:spf.hubspot.com</code></td>
                    <td className="p-4 text-sm"><code>include:mailgun.org</code> o <code>include:sendgrid.net</code></td>
                    <td className="p-4 text-sm"><code>include:servers.mcsv.net</code></td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium">Verificación dominio</td>
                    <td className="p-4 text-sm">CNAME + TXT automáticos</td>
                    <td className="p-4 text-sm">Depende del proveedor SMTP</td>
                    <td className="p-4 text-sm">TXT + CNAME automáticos</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium">Reportes DMARC</td>
                    <td className="p-4 text-sm">Básicos incluidos</td>
                    <td className="p-4 text-sm">Vía proveedor SMTP</td>
                    <td className="p-4 text-sm">Básicos incluidos</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Cumplimiento normativo universal */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-foreground">Cumplimiento normativo universal</h2>
          
          <p className="text-lg mb-8">
            Independientemente de tu plataforma, <strong>estas regulaciones se aplican a nivel global</strong> y son críticas para el éxito de tus campañas:
          </p>

          <div className="space-y-6">
            {/* Requisitos legales */}
            <div className="bg-gradient-to-r from-red-50 to-red-100 dark:from-red-950/20 dark:to-red-900/20 rounded-lg p-6 border border-red-200 dark:border-red-800">
              <h3 className="text-xl font-semibold mb-4 text-red-800 dark:text-red-200 flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Requisitos legales: RGPD, CAN-SPAM, LOPDGDD
              </h3>
              
              <div className="grid md:grid-cols-3 gap-6 text-sm">
                <div>
                  <h4 className="font-semibold mb-2 text-red-800 dark:text-red-200">RGPD (Europa)</h4>
                  <ul className="space-y-1 text-red-700 dark:text-red-300">
                    <li>• Consentimiento explícito</li>
                    <li>• Base legal documentada</li>
                    <li>• Derecho al olvido</li>
                    <li>• Portabilidad de datos</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2 text-red-800 dark:text-red-200">CAN-SPAM (EE.UU.)</h4>
                  <ul className="space-y-1 text-red-700 dark:text-red-300">
                    <li>• Línea de asunto clara</li>
                    <li>• Identificación del remitente</li>
                    <li>• Opción de baja visible</li>
                    <li>• Dirección física válida</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2 text-red-800 dark:text-red-200">LOPDGDD (España)</h4>
                  <ul className="space-y-1 text-red-700 dark:text-red-300">
                    <li>• Consentimiento informado</li>
                    <li>• Finalidad específica</li>
                    <li>• Minimización de datos</li>
                    <li>• Responsabilidad proactiva</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Consentimiento y doble opt-in */}
            <div className="bg-gradient-to-r from-green-50 to-green-100 dark:from-green-950/20 dark:to-green-900/20 rounded-lg p-6 border border-green-200 dark:border-green-800">
              <h3 className="text-xl font-semibold mb-4 text-green-800 dark:text-green-200 flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                Consentimiento expreso y doble opt-in
              </h3>
              
              <div className="space-y-4 text-green-700 dark:text-green-300">
                <div>
                  <h4 className="font-semibold mb-2">Proceso recomendado:</h4>
                  <ol className="list-decimal list-inside space-y-2 text-sm">
                    <li><strong>Formulario claro:</strong> Explica qué tipo de emails recibirán y con qué frecuencia</li>
                    <li><strong>Confirmación inicial:</strong> Email de bienvenida automático</li>
                    <li><strong>Doble opt-in:</strong> Enlace de confirmación en el email de bienvenida</li>
                    <li><strong>Documentación:</strong> Registro de fecha, hora e IP del consentimiento</li>
                  </ol>
                </div>
              </div>
            </div>

            {/* Políticas de privacidad */}
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-950/20 dark:to-blue-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
              <h3 className="text-xl font-semibold mb-4 text-blue-800 dark:text-blue-200 flex items-center gap-2">
                <Mail className="h-5 w-5" />
                Políticas de privacidad y desuscripción claras
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6 text-sm">
                <div>
                  <h4 className="font-semibold mb-2 text-blue-800 dark:text-blue-200">Elementos obligatorios en emails:</h4>
                  <ul className="space-y-1 text-blue-700 dark:text-blue-300">
                    <li>• Enlace de baja visible y funcional</li>
                    <li>• Dirección física de la empresa</li>
                    <li>• Identificación clara del remitente</li>
                    <li>• Motivo por el cual recibe el email</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2 text-blue-800 dark:text-blue-200">Proceso de baja:</h4>
                  <ul className="space-y-1 text-blue-700 dark:text-blue-300">
                    <li>• Máximo 1 clic para darse de baja</li>
                    <li>• Procesamiento en máximo 10 días hábiles</li>
                    <li>• Confirmación del proceso</li>
                    <li>• Sin solicitar motivos obligatorios</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Auditoría de contactos */}
            <div className="bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-950/20 dark:to-purple-900/20 rounded-lg p-6 border border-purple-200 dark:border-purple-800">
              <h3 className="text-xl font-semibold mb-4 text-purple-800 dark:text-purple-200 flex items-center gap-2">
                <Settings className="h-5 w-5" />
                Auditoría de contactos y logs de actividad
              </h3>
              
              <div className="space-y-4 text-purple-700 dark:text-purple-300 text-sm">
                <p><strong>Auditorías regulares necesarias:</strong></p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Limpieza de contactos inactivos (+6 meses sin engagement)</li>
                  <li>Verificación de emails válidos (bounce &lt; 2%)</li>
                  <li>Segmentación por nivel de engagement</li>
                  <li>Revisión de quejas de spam (&lt; 0.1%)</li>
                </ul>
                
                <p className="mt-4"><strong>Logs obligatorios a mantener:</strong></p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Fecha y fuente de cada suscripción</li>
                  <li>IP y timestamp del consentimiento</li>
                  <li>Historial de comunicaciones enviadas</li>
                  <li>Registros de bajas y motivos</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Checklist destacada */}
          <div className="mt-8 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-xl p-8 border border-primary/30">
            <h3 className="text-2xl font-bold mb-6 text-center text-foreground">📋 Checklist de Cumplimiento Normativo</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground">✅ Configuración técnica</h4>
                <div className="space-y-2 text-sm">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded" />
                    <span>SPF configurado correctamente</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded" />
                    <span>DKIM activado y verificado</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded" />
                    <span>DMARC implementado</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded" />
                    <span>Dominio personalizado verificado</span>
                  </label>
                </div>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground">✅ Cumplimiento legal</h4>
                <div className="space-y-2 text-sm">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded" />
                    <span>Proceso de doble opt-in activo</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded" />
                    <span>Política de privacidad actualizada</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded" />
                    <span>Enlace de baja en todos los emails</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded" />
                    <span>Logs de consentimiento documentados</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mejores prácticas técnicas */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-foreground">Mejores prácticas técnicas de entregabilidad</h2>
          
          <div className="space-y-8">
            {/* Warm-up de dominios/IPs */}
            <div className="bg-white dark:bg-gray-900 rounded-xl border border-border p-8">
              <h3 className="text-xl font-semibold mb-4 text-foreground">🔥 Warm-up de dominios/IPs</h3>
              
              <p className="mb-4 text-muted-foreground">
                Cuando configuras un nuevo dominio o IP, los proveedores de email (Gmail, Outlook) no confían inmediatamente. El warm-up es esencial:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-foreground">Cronograma recomendado:</h4>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex justify-between">
                      <span><strong>Semana 1:</strong></span>
                      <span>50-100 emails/día</span>
                    </div>
                    <div className="flex justify-between">
                      <span><strong>Semana 2:</strong></span>
                      <span>200-500 emails/día</span>
                    </div>
                    <div className="flex justify-between">
                      <span><strong>Semana 3:</strong></span>
                      <span>1,000-2,000 emails/día</span>
                    </div>
                    <div className="flex justify-between">
                      <span><strong>Semana 4+:</strong></span>
                      <span>Volumen completo</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3 text-foreground">Qué enviar durante warm-up:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Emails transaccionales (confirmaciones, facturas)</li>
                    <li>• Contenido altamente relevante</li>
                    <li>• A tus contactos más engaged</li>
                    <li>• Evita promociones agresivas</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Listas limpias */}
            <div className="bg-white dark:bg-gray-900 rounded-xl border border-border p-8">
              <h3 className="text-xl font-semibold mb-4 text-foreground">🧹 Listas limpias y segmentadas</h3>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-green-700">✅ Buenas prácticas</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Segmentar por engagement</li>
                    <li>• Limpiar bounces inmediatamente</li>
                    <li>• Re-engagement campaigns</li>
                    <li>• Validación de emails</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3 text-red-700">❌ Evitar siempre</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Listas compradas o alquiladas</li>
                    <li>• Emails sin consentimiento</li>
                    <li>• Contactos inactivos +12 meses</li>
                    <li>• Direcciones con muchos bounces</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3 text-blue-700">📊 Métricas a vigilar</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Open rate &gt; 20%</li>
                    <li>• Click rate &gt; 2%</li>
                    <li>• Bounce rate &lt; 2%</li>
                    <li>• Spam rate &lt; 0.1%</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Spam traps */}
            <div className="bg-white dark:bg-gray-900 rounded-xl border border-border p-8">
              <h3 className="text-xl font-semibold mb-4 text-foreground">🕳️ Evitar spam traps y correos inactivos</h3>
              
              <div className="mb-6">
                <p className="text-muted-foreground mb-4">Los spam traps son emails creados específicamente para detectar spammers:</p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                    <h4 className="font-semibold text-red-800 mb-2">Tipos de spam traps:</h4>
                    <ul className="space-y-1 text-sm text-red-700">
                      <li>• <strong>Pristine:</strong> Emails nunca usados por personas reales</li>
                      <li>• <strong>Recycled:</strong> Emails abandonados convertidos en traps</li>
                      <li>• <strong>Typos:</strong> Dominios con errores tipográficos</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <h4 className="font-semibold text-green-800 mb-2">Cómo evitarlos:</h4>
                    <ul className="space-y-1 text-sm text-green-700">
                      <li>• Solo emails con opt-in verificado</li>
                      <li>• Validación en tiempo real en formularios</li>
                      <li>• Monitoreo de engagement regular</li>
                      <li>• Limpieza automática de inactivos</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Monitorización de reputación */}
            <div className="bg-white dark:bg-gray-900 rounded-xl border border-border p-8">
              <h3 className="text-xl font-semibold mb-4 text-foreground">📊 Monitorizar reputación del dominio</h3>
              
              <p className="mb-4 text-muted-foreground">
                Herramientas esenciales para monitorizar tu reputación de email:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-foreground">Google Postmaster Tools</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Reputación del dominio e IP</li>
                    <li>• Tasas de entregabilidad a Gmail</li>
                    <li>• Retroalimentación sobre spam</li>
                    <li>• Problemas de autenticación</li>
                  </ul>
                  <a 
                    href="https://postmaster.google.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-primary hover:underline text-sm mt-2"
                  >
                    Configurar Google Postmaster <ArrowRight className="h-3 w-3" />
                  </a>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3 text-foreground">Microsoft SNDS</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Datos de entregabilidad a Outlook</li>
                    <li>• Estadísticas de spam y bloqueos</li>
                    <li>• Feedback loops configurables</li>
                    <li>• Reportes de reputación de IP</li>
                  </ul>
                  <a 
                    href="https://sendersupport.olc.protection.outlook.com/snds/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-primary hover:underline text-sm mt-2"
                  >
                    Configurar Microsoft SNDS <ArrowRight className="h-3 w-3" />
                  </a>
                </div>
              </div>
              
              <div className="mt-6 bg-blue-50 p-4 rounded-lg border border-blue-200">
                <p className="text-blue-800 text-sm">
                  <strong>Herramientas adicionales:</strong> MXToolbox, Mail Tester, GlockApps para verificaciones puntuales de configuración y deliverability.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Configuración avanzada por plataformas */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-foreground">Configuración avanzada: Ejemplos prácticos</h2>
          
          <p className="text-lg mb-8 text-muted-foreground">
            Aquí tienes guías específicas para las <strong>plataformas más populares</strong>, con pasos detallados para implementar toda la configuración técnica:
          </p>

          <div className="space-y-8">
            {/* HubSpot */}
            <div className="bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-950/20 dark:to-orange-900/20 rounded-xl p-8 border border-orange-200 dark:border-orange-800">
              <h3 className="text-2xl font-semibold mb-6 text-orange-800 dark:text-orange-200">🟠 HubSpot: Configuración completa</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3 text-orange-800 dark:text-orange-200">1. Autenticación de dominio</h4>
                  <ol className="list-decimal list-inside space-y-2 text-sm text-orange-700 dark:text-orange-300">
                    <li>Ve a <strong>Configuración → Correo electrónico → Configuración de dominios</strong></li>
                    <li>Haz clic en <strong>"Conectar dominio de envío"</strong></li>
                    <li>Introduce tu subdominio (ej: mail.tuempresa.com)</li>
                    <li>Copia los registros DNS generados automáticamente</li>
                    <li>Añade los registros en tu proveedor de dominio</li>
                    <li>Vuelve a HubSpot y verifica la configuración</li>
                  </ol>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3 text-orange-800 dark:text-orange-200">2. Configurar SPF para HubSpot</h4>
                  <div className="bg-orange-100 dark:bg-orange-900/30 p-4 rounded-lg">
                    <p className="text-sm mb-2 text-orange-800 dark:text-orange-200"><strong>Registro TXT para tu dominio:</strong></p>
                    <code className="text-xs bg-white dark:bg-gray-800 px-2 py-1 rounded">
                      v=spf1 include:spf.hubspot.com ~all
                    </code>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3 text-orange-800 dark:text-orange-200">3. Validación y reportes</h4>
                  <p className="text-sm text-orange-700 dark:text-orange-300">
                    HubSpot proporciona reportes automáticos de entregabilidad en <strong>Marketing → Email → Análisis</strong>. 
                    Monitoriza métricas como bounce rate, spam complaints y engagement.
                  </p>
                </div>
              </div>
            </div>

            {/* Go High Level */}
            <div className="bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-950/20 dark:to-purple-900/20 rounded-xl p-8 border border-purple-200 dark:border-purple-800">
              <h3 className="text-2xl font-semibold mb-6 text-purple-800 dark:text-purple-200">🟣 Go High Level: Configuración con Mailgun/Sendgrid</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3 text-purple-800 dark:text-purple-200">1. Configuración en GHL (usando Mailgun)</h4>
                  <ol className="list-decimal list-inside space-y-2 text-sm text-purple-700 dark:text-purple-300">
                    <li>Ve a <strong>Settings → Email Services → Mailgun</strong></li>
                    <li>Configura tu dominio en Mailgun primero</li>
                    <li>Obtén las credenciales API de Mailgun</li>
                    <li>Introduce las credenciales en GHL</li>
                    <li>Configura el dominio de envío personalizado</li>
                  </ol>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3 text-purple-800 dark:text-purple-200">2. Registros DNS necesarios (Mailgun)</h4>
                  <div className="bg-purple-100 dark:bg-purple-900/30 p-4 rounded-lg space-y-3">
                    <div>
                      <p className="text-sm font-medium text-purple-800 dark:text-purple-200">SPF:</p>
                      <code className="text-xs bg-white dark:bg-gray-800 px-2 py-1 rounded">
                        v=spf1 include:mailgun.org ~all
                      </code>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-purple-800 dark:text-purple-200">DKIM (ejemplo):</p>
                      <code className="text-xs bg-white dark:bg-gray-800 px-2 py-1 rounded">
                        k1._domainkey CNAME k1.tudominio.mailgun.org
                      </code>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3 text-purple-800 dark:text-purple-200">3. Alternativa con Twilio SendGrid</h4>
                  <p className="text-sm text-purple-700 dark:text-purple-300">
                    Si prefieres SendGrid, el proceso es similar pero usando <code>include:sendgrid.net</code> para SPF 
                    y configurando los registros CNAME específicos que proporciona SendGrid.
                  </p>
                </div>
              </div>
            </div>

            {/* Mailchimp */}
            <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 dark:from-yellow-950/20 dark:to-yellow-900/20 rounded-xl p-8 border border-yellow-200 dark:border-yellow-800">
              <h3 className="text-2xl font-semibold mb-6 text-yellow-800 dark:text-yellow-200">🟡 Mailchimp: Validación de dominios y reportes</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3 text-yellow-800 dark:text-yellow-200">1. Verificación de dominio</h4>
                  <ol className="list-decimal list-inside space-y-2 text-sm text-yellow-700 dark:text-yellow-300">
                    <li>Ve a <strong>Account & Billing → Settings → Domains</strong></li>
                    <li>Haz clic en <strong>"Verify a Domain"</strong></li>
                    <li>Introduce tu dominio personalizado</li>
                    <li>Añade el registro TXT proporcionado en tu DNS</li>
                    <li>Verifica la configuración en Mailchimp</li>
                  </ol>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3 text-yellow-800 dark:text-yellow-200">2. Configuración SPF para Mailchimp</h4>
                  <div className="bg-yellow-100 dark:bg-yellow-900/30 p-4 rounded-lg">
                    <p className="text-sm mb-2 text-yellow-800 dark:text-yellow-200"><strong>Registro SPF:</strong></p>
                    <code className="text-xs bg-white dark:bg-gray-800 px-2 py-1 rounded">
                      v=spf1 include:servers.mcsv.net ~all
                    </code>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3 text-yellow-800 dark:text-yellow-200">3. Reportes de engagement</h4>
                  <p className="text-sm text-yellow-700 dark:text-yellow-300">
                    Mailchimp ofrece reportes detallados en <strong>Reports → Email</strong> con métricas de entregabilidad, 
                    engagement y sugerencias automáticas para mejorar tus campañas.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Herramientas de verificación */}
          <div className="mt-8 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-xl p-8 border">
            <h3 className="text-xl font-semibold mb-6 text-foreground flex items-center gap-2">
              🔧 Herramientas de verificación universal
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <h4 className="font-semibold mb-2">MXToolbox</h4>
                <p className="text-sm text-muted-foreground mb-3">Verifica SPF, DKIM, DMARC y reputación de dominio</p>
                <a 
                  href="https://mxtoolbox.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-primary hover:underline text-sm"
                >
                  Usar MXToolbox <ArrowRight className="h-3 w-3" />
                </a>
              </div>
              
              <div className="text-center">
                <h4 className="font-semibold mb-2">Mail Tester</h4>
                <p className="text-sm text-muted-foreground mb-3">Prueba tus emails antes de enviar campañas</p>
                <a 
                  href="https://www.mail-tester.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-primary hover:underline text-sm"
                >
                  Usar Mail Tester <ArrowRight className="h-3 w-3" />
                </a>
              </div>
              
              <div className="text-center">
                <h4 className="font-semibold mb-2">DMARC Analyzer</h4>
                <p className="text-sm text-muted-foreground mb-3">Analiza reportes DMARC y optimiza políticas</p>
                <a 
                  href="https://dmarcanalyzer.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-primary hover:underline text-sm"
                >
                  Usar DMARC Analyzer <ArrowRight className="h-3 w-3" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Conclusión */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-foreground">La configuración técnica como activo estratégico</h2>
          
          <p className="text-lg mb-6 text-muted-foreground">
            Una configuración técnica sólida de email marketing <strong>no es solo una necesidad técnica, sino un activo estratégico</strong> 
            que protege tu marca, maximiza el alcance de tus mensajes y construye confianza a largo plazo con tus audiencias.
          </p>
          
          <p className="mb-8 text-muted-foreground">
            Al implementar estas configuraciones universales - independientemente de tu plataforma - estás construyendo una 
            <strong>infraestructura de comunicación robusta y confiable</strong> que será la base de todas tus futuras estrategias de marketing directo.
          </p>

          <div className="bg-gradient-to-br from-primary via-secondary to-accent text-white rounded-2xl p-8 text-center shadow-lg">
            <h3 className="text-2xl font-bold mb-4">¿Necesitas ayuda con tu configuración técnica?</h3>
            <p className="mb-6 opacity-90 max-w-2xl mx-auto">
              En Hayas ayudamos a emprendedores y pymes a configurar y optimizar sus plataformas de email marketing 
              (HubSpot, GHL, Mailchimp, ActiveCampaign…) para que sus campañas sean seguras, legales y efectivas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/es/contacto"
                className="bg-white text-primary font-semibold px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors inline-flex items-center justify-center gap-2"
              >
                Revisar mi configuración actual
                <ArrowRight className="h-4 w-4" />
              </a>
              <a 
                href="/es/servicios/email-marketing-automatizaciones"
                className="border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white/10 transition-colors inline-flex items-center justify-center gap-2"
              >
                Ver servicio completo
              </a>
            </div>
          </div>
        </section>
      </div>
    </BlogPostTemplate>
  );
};

export default BlogConfiguracionEmailMarketingCumplimiento;