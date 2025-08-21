import React from 'react';
import BlogPostTemplate from '@/components/BlogPost/BlogPostTemplate';
import { CheckCircle, Shield, Mail, Settings, AlertTriangle } from 'lucide-react';

const BlogEmailMarketingHubSpot = () => {
  const metadata = {
    title: "Guía técnica de Email Marketing: Configuración y cumplimiento con HubSpot",
    description: "Aprende a configurar SPF, DKIM y DMARC en HubSpot para cumplir con las nuevas políticas de Google y Yahoo. Guía técnica completa para 2025.",
    date: "2025-01-18",
    readTime: "15 min de lectura",
    category: "Email Marketing",
    author: "Equipo Hayas Marketing",
    tags: ["email marketing", "hubspot", "spf", "dkim", "dmarc", "cumplimiento", "rgpd"],
    canonical: "/blog/guia-tecnica-email-marketing-hubspot-configuracion",
    ogImage: "/email-marketing-automatizaciones-hero.jpg",
    metaTitle: "Email Marketing con HubSpot: Configuración SPF, DKIM y DMARC - Guía 2025",
    metaDescription: "Guía técnica completa para configurar email marketing en HubSpot cumpliendo con RGPD, SPF, DKIM y DMARC. Evita el spam y mejora la entregabilidad.",
    mainKeyword: "email marketing hubspot",
    secondaryKeywords: ["configuración spf dkim", "cumplimiento rgpd email", "hubspot email configuracion", "evitar spam email"],
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Guía técnica de Email Marketing: Configuración y cumplimiento con HubSpot",
      "description": "Aprende a configurar SPF, DKIM y DMARC en HubSpot para cumplir con las nuevas políticas de Google y Yahoo. Guía técnica completa para 2025.",
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
      "datePublished": "2025-01-18",
      "dateModified": "2025-01-18"
    }
  };

  const faqs = [
    {
      question: "¿Qué es SPF, DKIM y DMARC y por qué son importantes?",
      answer: "SPF verifica que los correos provienen de servidores autorizados, DKIM añade firma digital para validar autenticidad, y DMARC combina ambos para máxima seguridad. Son esenciales para evitar que tus emails vayan a spam y cumplir con las políticas de Google y Yahoo."
    },
    {
      question: "¿Cómo afectan los cambios de Google y Yahoo de 2024 a mi email marketing?",
      answer: "Desde febrero 2024, Google y Yahoo exigen autenticación robusta (SPF, DKIM, DMARC), penalizan altas tasas de spam y priorizan facilidad para cancelar suscripciones. Sin estas configuraciones, tus emails pueden no llegar a la bandeja de entrada."
    },
    {
      question: "¿Puedo configurar todo esto yo mismo en HubSpot?",
      answer: "Sí, HubSpot proporciona guías paso a paso para configurar dominios de envío, SPF y DKIM. Sin embargo, la configuración DNS requiere acceso al panel de tu proveedor de dominio y conocimientos técnicos básicos."
    },
    {
      question: "¿Qué tasa de spam debo mantener para cumplir con las normativas?",
      answer: "Debes mantener la tasa de quejas de spam por debajo del 0.1%. HubSpot te permite monitorear esta métrica y te ayuda a identificar problemas de entregabilidad antes de que afecten tu reputación."
    },
    {
      question: "¿Es obligatorio cumplir con RGPD para email marketing?",
      answer: "Sí, el RGPD es obligatorio en Europa y la Ley CAN-SPAM en Estados Unidos. Necesitas consentimiento explícito, enlaces claros de baja y facilitar el proceso de cancelación de suscripción."
    }
  ];

  const relatedServices = [
    {
      title: "Email Marketing y Automatizaciones",
      description: "Configuramos y optimizamos tus campañas de email marketing con total cumplimiento normativo.",
      link: "/email-marketing-automatizaciones"
    },
    {
      title: "Implementación de CRM",
      description: "Implementamos HubSpot y otros CRMs con configuración completa de email marketing.",
      link: "/servicios/implantacion-crm"
    }
  ];

  return (
    <BlogPostTemplate
      metadata={metadata}
      heroImage={{
        src: "/email-marketing-automatizaciones-hero.jpg",
        alt: "Profesional configurando email marketing en HubSpot con gráficos de entregabilidad y cumplimiento normativo"
      }}
      faqs={faqs}
      relatedServices={relatedServices}
    >
      <div className="space-y-8">
        <section>
          <p className="text-lg text-muted-foreground mb-6">
            En febrero de 2024, <strong>Google y Yahoo implementaron transformaciones importantes</strong> en sus políticas de correo electrónico. Estas medidas incluyeron la obligatoriedad de prácticas de autenticación robusta como SPF, DKIM y DMARC, además de penalizar altas tasas de quejas de spam.
          </p>
          
          <p className="mb-6">
            Estas actualizaciones marcaron un antes y un después, impulsando un marketing más ético, donde la <strong>autenticidad y la transparencia son clave</strong> para conectar de manera significativa con nuestras audiencias. En esta guía te mostramos cómo implementar estas buenas prácticas en HubSpot.
          </p>

          <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-6">
            <p className="text-amber-800">
              <strong>Importante:</strong> Implementar estas técnicas no solo garantiza el cumplimiento normativo, sino que mejora la entregabilidad, proyecta una imagen profesional y maximiza el impacto de tus campañas de email marketing.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6 text-foreground">5 técnicas esenciales para el cumplimiento</h2>
          
          <div className="space-y-6 mb-8">
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-6 border border-primary/10">
              <h3 className="text-xl font-semibold mb-4 text-foreground flex items-center gap-2">
                <Shield className="h-5 w-5" />
                1. Cumple con el RGPD y la Ley CAN-SPAM
              </h3>
              <p className="mb-4 text-muted-foreground">
                Antes de enviar cualquier correo, asegúrate de que tienes el <strong>consentimiento explícito del cliente</strong>. Las normativas exigen:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li><strong>Facilidad para cancelar la suscripción:</strong> Incluye un enlace claro para darse de baja en cada correo</li>
                <li><strong>Protección contra el spam:</strong> Monitorea tus tasas de quejas y manténlas lo más bajas posible</li>
                <li><strong>Consentimiento documentado:</strong> Registra cómo y cuándo obtuviste el permiso para enviar emails</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-950/20 dark:to-blue-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
              <h3 className="text-xl font-semibold mb-4 text-blue-800 dark:text-blue-200 flex items-center gap-2">
                <Mail className="h-5 w-5" />
                2. Autentica tu dirección de correo electrónico
              </h3>
              <p className="mb-4 text-blue-700 dark:text-blue-300">
                Es crucial garantizar que los correos que envías provengan de servidores autorizados. Configurar <strong>SPF, DKIM y DMARC</strong> protege tu dominio:
              </p>
              <ul className="space-y-3 text-blue-700 dark:text-blue-300">
                <li><strong>SPF:</strong> Verifica que los correos electrónicos proceden de un dominio autorizado</li>
                <li><strong>DKIM:</strong> Agrega una firma digital a tus correos electrónicos para validación</li>
                <li><strong>DMARC:</strong> Combina SPF y DKIM para una capa adicional de seguridad</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-green-100 dark:from-green-950/20 dark:to-green-900/20 rounded-lg p-6 border border-green-200 dark:border-green-800">
              <h3 className="text-xl font-semibold mb-4 text-green-800 dark:text-green-200 flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                3. Facilita la cancelación de suscripción
              </h3>
              <p className="text-green-700 dark:text-green-300">
                Haz que el proceso de darse de baja sea lo más sencillo posible. HubSpot permite integrar enlaces de baja optimizados y se actualiza para cumplir con los nuevos estándares de 'list-unsubscribe'.
              </p>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-950/20 dark:to-purple-900/20 rounded-lg p-6 border border-purple-200 dark:border-purple-800">
              <h3 className="text-xl font-semibold mb-4 text-purple-800 dark:text-purple-200 flex items-center gap-2">
                <Settings className="h-5 w-5" />
                4. Configura el dominio de envío
              </h3>
              <p className="text-purple-700 dark:text-purple-300">
                Evita que tus correos se envíen con remitentes genéricos como <code>nombre@hubspotfree.eu1.hs-send.com</code>. Configurando correctamente tu dominio proyectas una imagen profesional y confiable.
              </p>
            </div>

            <div className="bg-gradient-to-r from-red-50 to-red-100 dark:from-red-950/20 dark:to-red-900/20 rounded-lg p-6 border border-red-200 dark:border-red-800">
              <h3 className="text-xl font-semibold mb-4 text-red-800 dark:text-red-200 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                5. Controla y reduce las quejas por Spam
              </h3>
              <p className="text-red-700 dark:text-red-300">
                Mantén la tasa de spam por debajo del <strong>0.1%</strong>. En HubSpot puedes monitorear esta métrica y usar herramientas de segmentación para enviar contenido adaptado a los intereses reales de tus suscriptores.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6 text-foreground">Guía técnica: Configurar SPF, DKIM y DMARC</h2>
          
          <p className="mb-6">
            Si necesitas detalles técnicos para implementar estas configuraciones, aquí tienes una <strong>guía paso a paso</strong>:
          </p>

          <div className="space-y-6 mb-8">
            <div className="bg-white dark:bg-gray-900 rounded-xl border border-border/50 p-6">
              <h3 className="text-xl font-semibold mb-4 text-foreground">SPF (Sender Policy Framework)</h3>
              <ol className="list-decimal list-inside space-y-3 text-muted-foreground">
                <li>Accede a la configuración DNS de tu proveedor de dominio</li>
                <li>Crea o edita un registro TXT con este formato:</li>
              </ol>
              
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mt-4 mb-4">
                <p className="text-sm font-mono"><strong>Para HubSpot:</strong></p>
                <code className="text-sm bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">
                  v=spf1 include:spf.hubspot.com -all
                </code>
                
                <p className="text-sm font-mono mt-3"><strong>Si ya usas otros proveedores:</strong></p>
                <code className="text-sm bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded break-all">
                  v=spf1 include:spf.hubspot.com include:_spf.google.com include:spf.protection.outlook.com -all
                </code>
              </div>
              
              <p className="text-sm text-muted-foreground">
                <strong>Importante:</strong> Asegúrate de que solo exista un registro SPF para evitar problemas.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-xl border border-border/50 p-6">
              <h3 className="text-xl font-semibold mb-4 text-foreground">DKIM (DomainKeys Identified Mail)</h3>
              <ol className="list-decimal list-inside space-y-3 text-muted-foreground">
                <li>En HubSpot, ve a <strong>Configuración &gt; Correo Electrónico &gt; Configuración de dominios</strong></li>
                <li>Selecciona tu dominio y haz clic en <strong>Configurar DKIM</strong></li>
                <li>HubSpot generará dos registros CNAME que tendrás que añadir a tu DNS</li>
                <li>Vuelve a HubSpot y haz clic en <strong>Verificar</strong> para confirmar la configuración</li>
              </ol>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-xl border border-border/50 p-6">
              <h3 className="text-xl font-semibold mb-4 text-foreground">DMARC (Domain-based Message Authentication)</h3>
              <ol className="list-decimal list-inside space-y-3 text-muted-foreground">
                <li>Añade un registro TXT en tu DNS con este formato:</li>
              </ol>
              
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mt-4 mb-4">
                <code className="text-sm bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded break-all">
                  v=DMARC1; p=none; rua=mailto:tuemail@example.com;
                </code>
              </div>
              
              <ul className="list-disc list-inside space-y-2 text-muted-foreground text-sm">
                <li><strong>p=none:</strong> Monitorea los correos no autenticados</li>
                <li><strong>p=quarantine:</strong> Envía correos no autenticados a spam</li>
                <li><strong>p=reject:</strong> Bloquea correos no autenticados</li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
            <p className="text-blue-800">
              <strong>Herramienta recomendada:</strong> Usa <a href="https://mxtoolbox.com/" target="_blank" rel="noopener noreferrer" className="underline">MXTOOLBOX</a> para comprobar si cumples con estas medidas de autenticación.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6 text-foreground">Configurar tu dominio en HubSpot</h2>
          
          <p className="mb-6">
            <strong>Evita que tus correos se envíen con remitentes genéricos.</strong> Aquí te explicamos cómo configurar tu dominio personalizado paso a paso:
          </p>

          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg p-6 mb-8">
            <ol className="list-decimal list-inside space-y-4 text-muted-foreground">
              <li><strong>Accede a tu cuenta de HubSpot:</strong> Ve al menú principal y selecciona Configuración (icono de engranaje)</li>
              <li><strong>Dirígete a la sección de Email:</strong> En el menú lateral, busca <strong>Correo Electrónico &gt; Configuración de Dominios</strong></li>
              <li><strong>Conecta tu dominio de envío:</strong> Haz clic en <strong>Conectar dominio de envío</strong></li>
              <li><strong>Obtén los registros DNS:</strong> HubSpot te proporcionará registros CNAME específicos</li>
              <li><strong>Configura los registros DNS:</strong> Accede al panel de tu proveedor de dominio y añade los registros CNAME</li>
              <li><strong>Verifica la conexión:</strong> Regresa a HubSpot y haz clic en <strong>Verificar</strong></li>
            </ol>
          </div>

          <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-6">
            <p className="text-green-800">
              <strong>Resultado:</strong> Una vez completados estos pasos, los correos enviados desde HubSpot usarán tu dominio personalizado, mejorando la confianza de tus suscriptores y la entregabilidad de tus mensajes.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6 text-foreground">Actualización importante de HubSpot</h2>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
            <p className="text-yellow-800">
              <strong>Nueva funcionalidad de IA:</strong> HubSpot ha introducido nuevas funcionalidades de inteligencia artificial en sus envíos de correos electrónicos, lo que puede requerir que ciertos servidores adicionales sean autorizados en el SPF.
            </p>
          </div>

          <p className="mb-6">
            Si no has actualizado tu registro SPF en HubSpot, consulta si tienes una actualización pendiente:
          </p>

          <ol className="list-decimal list-inside space-y-2 mb-6 text-muted-foreground">
            <li>Entra en <strong>Configuración &gt; Contenidos &gt; Dominios</strong></li>
            <li>Toma el nuevo valor proporcionado</li>
            <li>Actualiza el registro TXT en la configuración DNS de tu dominio</li>
          </ol>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6 text-foreground">Convierte las regulaciones en oportunidades</h2>
          
          <p className="mb-6">
            Los cambios impulsados por Google y Yahoo ya forman parte del día a día en el email marketing. Sin embargo, <strong>adaptarnos no es solo cuestión de cumplir, sino una oportunidad</strong> para liderar con estrategias éticas y centradas en las personas.
          </p>

          <p className="mb-6">
            Al implementar estas buenas prácticas, fortalecemos la relación con nuestros clientes y aseguramos que nuestras campañas sean no solo efectivas, sino también memorables.
          </p>

          <div className="bg-gradient-to-r from-primary to-secondary text-white rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">¿Necesitas ayuda con tu configuración?</h3>
            <p className="mb-6 opacity-90">
              En Hayas, convertimos las normativas en ventajas competitivas, construyendo un marketing digital más transparente, auténtico y sostenible.
            </p>
            <a 
              href="/contacto" 
              className="inline-flex items-center px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-50 transition-colors"
            >
              Solicita tu consulta técnica gratuita →
            </a>
          </div>
        </section>
      </div>
    </BlogPostTemplate>
  );
};

export default BlogEmailMarketingHubSpot;