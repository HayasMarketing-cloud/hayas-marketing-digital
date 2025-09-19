import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import BlogPostTemplate from '@/components/BlogPost/BlogPostTemplate';
import ArticleFAQSection from '@/components/BlogPost/ArticleFAQSection';
import AIApplicationsSection from '@/components/BlogPost/AIApplicationsSection';
import { Brain, Zap, Shield, Settings, Cookie, Eye } from 'lucide-react';

const metadata = {
  title: "Cómo instalar Consent Mode en Google Tag Manager con CookieYes",
  description: "Guía completa para configurar Google Consent Mode con CookieYes en Google Tag Manager. Cumple con GDPR y mejora la privacidad de tus usuarios mientras mantienes el seguimiento.",
  date: "2025-01-17",
  readTime: "15 min",
  category: "Analítica Digital",
  author: "Daniela Hayas",
  tags: ['Google Tag Manager', 'Consent Mode', 'CookieYes', 'GDPR', 'Privacidad', 'Analítica'],
  canonical: "/blog/google-consent-mode-cookieyes",
  ogImage: "/src/assets/google-consent-mode-cookieyes-hero.jpg",
  structuredData: {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Cómo instalar Consent Mode en Google Tag Manager con CookieYes",
    "description": "Guía completa para configurar Google Consent Mode con CookieYes en Google Tag Manager. Cumple con GDPR y mejora la privacidad de tus usuarios mientras mantienes el seguimiento.",
    "image": "/src/assets/google-consent-mode-cookieyes-hero.jpg",
    "author": {
      "@type": "Person",
      "name": "Daniela Hayas"
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
    "dateModified": "2025-01-17"
  }
};

const faqs = [
  {
    question: "¿Qué es Google Consent Mode y por qué es importante para mi web?",
    answer: "Google Consent Mode es una herramienta que permite modificar el comportamiento de las etiquetas de Google Analytics y Google Ads según las preferencias de privacidad de los usuarios. Es esencial para cumplir con el GDPR mientras mantienes la capacidad de recopilar datos útiles para tu negocio."
  },
  {
    question: "¿CookieYes es gratuito o necesito pagar por el servicio?",
    answer: "CookieYes ofrece un plan gratuito para sitios web con hasta 25,000 páginas vistas mensuales. Para sitios más grandes o funcionalidades avanzadas, tienen planes de pago desde $9/mes que incluyen soporte prioritario y características adicionales."
  },
  {
    question: "¿Afectará la implementación de Consent Mode a mis métricas de Google Analytics?",
    answer: "Google Consent Mode utiliza modelado de datos para estimar el comportamiento de usuarios que no han dado su consentimiento, por lo que mantendrás insights valiosos. Aunque puede haber diferencias en los datos, la precisión general se mantiene alta y cumples con las regulaciones de privacidad."
  }
];

const aiApplications = [
  {
    title: "Análisis Predictivo de Consentimiento",
    description: "Usa IA para predecir qué usuarios son más propensos a dar su consentimiento y optimizar el banner de cookies.",
    icon: <Brain className="w-5 h-5 text-purple-600" />,
    tools: ["Google Analytics Intelligence", "TensorFlow", "BigQuery ML"]
  },
  {
    title: "Personalización Inteligente de Banners",
    description: "Implementa A/B testing automático para optimizar el texto y diseño del banner de consentimiento.",
    icon: <Eye className="w-5 h-5 text-purple-600" />,
    tools: ["Google Optimize", "Dynamic Yield", "Adobe Target"]
  },
  {
    title: "Automatización de Compliance",
    description: "Configura sistemas que detecten automáticamente nuevas regulaciones y ajusten la configuración de cookies.",
    icon: <Shield className="w-5 h-5 text-purple-600" />,
    tools: ["OneTrust", "TrustArc", "Cookiebot"]
  },
  {
    title: "Análisis de Impacto en Tiempo Real",
    description: "Monitorea automáticamente cómo los cambios en el consentimiento afectan tus métricas de negocio.",
    icon: <Zap className="w-5 h-5 text-purple-600" />,
    tools: ["Google Tag Manager", "Segment", "Amplitude"]
  }
];

const GoogleConsentModeCookieyes: React.FC = () => {
  return (
    <BlogPostTemplate metadata={metadata}>
      {/* Caja destacada inicial */}
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-3 text-blue-800">🎯 Lo que aprenderás en esta guía</h2>
        <p className="text-blue-700 mb-4">
          Configurar Google Consent Mode con CookieYes te permite cumplir con GDPR mientras mantienes el seguimiento esencial para tu negocio. En 8 pasos simples, tendrás un sistema completo de gestión de consentimiento.
        </p>
        <div className="flex flex-wrap gap-2">
          <span className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-sm">✓ Configuración GTM</span>
          <span className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-sm">✓ Integración CookieYes</span>
          <span className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-sm">✓ Cumplimiento GDPR</span>
        </div>
      </div>

      <h2>¿Qué es Google Consent Mode y por qué usar CookieYes?</h2>
      
      <p>
        El <strong>Modo de Consentimiento de Google (Consent Mode)</strong> permite modificar el comportamiento de etiquetas como 
        <strong>Google Analytics y Google Ads</strong> en función de las preferencias del usuario sobre cookies y privacidad.
      </p>

      <p>
        <strong>CookieYes</strong> es una <strong>plataforma de gestión de consentimiento (CMP)</strong> que se integra con Google Tag Manager 
        para facilitar la <strong>configuración de banners de cookies</strong>, automatizando la activación de etiquetas según la elección del usuario.
      </p>

      <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
        <h3 className="text-lg font-semibold mb-3 text-green-800">✨ Ventajas de usar CookieYes con GTM</h3>
        <ul className="space-y-2 text-green-700">
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>Implementación rápida sin necesidad de modificar manualmente el código fuente</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span><strong>Bloqueo automático de cookies</strong> de terceros antes del consentimiento</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>Integración con <strong>Google Analytics, Google Ads</strong> y otras herramientas de seguimiento</span>
          </li>
        </ul>
      </div>

      <h2>Pasos para instalar CookieYes en Google Tag Manager</h2>

      <h3>Paso 1: Crear una cuenta en Google Tag Manager</h3>

      <p>Si aún no tienes una cuenta en <strong>Google Tag Manager</strong>, sigue estos pasos:</p>

      <ol className="space-y-2 mb-6">
        <li>1. Accede a <a href="https://tagmanager.google.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Tag Manager</a> y regístrate.</li>
        <li>2. Crea una nueva cuenta y selecciona el país correspondiente.</li>
        <li>3. Añade un nombre de contenedor y elige «Web» como tipo de contenedor.</li>
        <li>4. Acepta los Términos de Servicio y haz clic en Crear.</li>
      </ol>

      <h3>Paso 2: Instalar el código de Google Tag Manager en tu sitio web</h3>

      <p>Después de crear el contenedor en GTM, aparecerán <strong>dos fragmentos de código</strong>.</p>

      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
        <h4 className="font-semibold text-gray-800 mb-3">📋 Instrucciones de instalación:</h4>
        <ul className="space-y-2 text-gray-700">
          <li>• <strong>Copia el primer código</strong> y pégalo dentro de la etiqueta <code>&lt;head&gt;</code> de tu sitio web.</li>
          <li>• <strong>Copia el segundo código</strong> y colócalo después de la etiqueta <code>&lt;body&gt;</code>.</li>
        </ul>
      </div>

      <p>Si usas <strong>WordPress</strong>, la ruta del archivo header.php es:</p>
      
      <ol className="space-y-1 mb-4">
        <li>1. Accede a tuweb/wp-admin</li>
        <li>2. Apariencia</li>
        <li>3. Editor de archivos de tema</li>
        <li>4. Busca el archivo header.php</li>
      </ol>

      <p>También puedes usar plugins como:</p>
      
      <ul className="space-y-1 mb-6">
        <li>• <a href="https://es.wordpress.org/plugins/duracelltomi-google-tag-manager/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">GTM4WP – A Google Tag Manager(GTM) plugin for WordPress</a></li>
        <li>• <a href="https://wordpress.org/plugins/google-site-kit/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Site Kit by Google</a></li>
      </ul>

      <h3>Paso 3: Agregar la plantilla CMP de CookieYes en GTM</h3>

      <p>Volvemos a GTM para integrar <strong>CookieYes CMP (Consent Management Platform)</strong>:</p>

      <ol className="space-y-3 mb-6">
        <li>
          <strong>1.</strong> Abre GTM, ve a <code>Administrador</code> → <code>Configuración del contenedor</code> y en <code>Ajustes adicionales</code> activa: 
          <strong>Habilitar resumen de consentimiento</strong>.
        </li>
        <li>
          <strong>2.</strong> Vuelve a <code>Espacio de Trabajo</code> y ve a la sección <code>Etiquetas</code>.
        </li>
        <li>
          <strong>3.</strong> Haz clic en <code>Nuevo</code> → <code>Configuración de etiqueta</code> → <code>Descubrir más en la Galería de Plantillas</code>.
        </li>
        <li>
          <strong>4.</strong> Busca <strong>CookieYes CMP</strong> y da a <code>añadir a espacio de trabajo</code> → ¿Seguro que quiere añadir una plantilla comunitaria? <code>Añadir</code>.
        </li>
      </ol>

      <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold mb-3 text-orange-800">📌 ¿Dónde encontrar la clave del sitio web?</h4>
        <ul className="space-y-2 text-orange-700">
          <li>• Inicia sesión en <a href="https://www.cookieyes.com/es/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">CookieYes</a> y ve a <code>Configuración avanzada</code> → <code>Obtener código de instalación</code>.</li>
          <li>• Copia la clave del sitio web que aparece en el atributo <code>src="https://cdn-cookieyes.com/client_data/YOUR_WEBSITE_KEY/script.js"</code>.</li>
          <li>• No incluyas el origen completo, solo la <strong>clave única del sitio (YOUR_WEBSITE_KEY)</strong>.</li>
          <li>• O puede ir directamente a la pestaña de <strong>Instalar con GTM</strong>.</li>
        </ul>
      </div>

      <h3>Paso 4: Configurar los permisos de consentimiento en GTM para CookieYes</h3>

      <p>Para definir el <strong>estado de consentimiento predeterminado</strong>, sigue estos pasos:</p>

      <ol className="space-y-2 mb-6">
        <li>1. En la misma pestaña, configuración de la etiqueta <strong>CookieYes CMP</strong>, despliega <code>Default Consent Settings</code> y haz clic en <code>Agregar configuración (Add Setting)</code>.</li>
        <li>2. Recomendamos dejarlo como está y dar a <code>Añadir</code>: pero si quieres configurar sigue leyendo.</li>
        <li>3. Damos a guardar y nos pregunta <code>Añadir disparador</code>, hacemos clic.</li>
        <li>4. Elige el disparador: Usa <strong>«Inicialización de consentimiento: Todas las páginas»</strong> para que se active antes que cualquier otra etiqueta.</li>
        <li>5. Guarda los cambios y publica la nueva configuración en GTM.</li>
      </ol>

      <h3>Paso 5: Configurar el Consentimiento de Etiquetas en Google Manager</h3>

      <p>Para este paso tienes que ir a Etiquetas:</p>

      <ul className="space-y-2 mb-6">
        <li>• Ir a la sección «Etiquetas».</li>
        <li>• Acceder al <strong>modo de configuración de consentimiento</strong>.</li>
        <li>• En la parte superior, junto al botón <code>«Nueva»</code> y la lupa, aparecerá un <strong>icono de escudo 🛡 (modo de consentimiento)</strong>.</li>
        <li>• Haz clic en el escudo.</li>
      </ul>

      <p>Configurar las <strong>etiquetas de publicidad y seguimiento</strong>. Este paso dependerá de las etiquetas que tengas configuradas en Tag Manager.</p>

      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
        <h4 className="font-semibold text-gray-800 mb-3">🏷️ Tipos de etiquetas a configurar:</h4>
        <ul className="space-y-2 text-gray-700">
          <li>• Configurar etiquetas que <strong>NO requieren consentimiento adicional</strong>: CookieYes CMP</li>
          <li>• Configurar etiquetas con <strong>Consentimiento Integrado de Google</strong>: Google Ads y Google Analytics</li>
          <li>• Configurar etiquetas que <strong>SÍ requieren consentimiento adicional</strong>: Meta Pixel</li>
        </ul>
      </div>

      <h4>A) Configurar etiquetas que NO requieren consentimiento adicional</h4>

      <p>Etiqueta de CookieYes CMP:</p>

      <ol className="space-y-1 mb-6">
        <li>1. Haz clic en <code>CookieYes CMP</code> (nombre de la etiqueta) y ve a <code>«Configuración avanzada»</code>.</li>
        <li>2. Dirígete a <code>«Configuración de consentimiento»</code>.</li>
        <li>3. Selecciona <strong><code>«No se requiere ningún consentimiento adicional»</code></strong>.</li>
        <li>4. Guarda los cambios.</li>
      </ol>

      <h4>B) Configurar etiquetas con Consentimiento Integrado de Google</h4>

      <p>
        Algunas etiquetas de Google como <strong>Google Ads y Google Analytics</strong> tienen <strong>comprobaciones de consentimiento integradas</strong>. 
        Esto significa que pueden recopilar datos básicos sin almacenar cookies, hasta que el usuario otorgue su consentimiento.
      </p>

      <div className="space-y-4 mb-6">
        <div>
          <h5 className="font-semibold mb-2">Etiqueta de Google Ads / Remarketing</h5>
          <ol className="space-y-1 text-sm">
            <li>1. Dentro del <code>icono de escudo</code> 🛡 (modo de consentimiento) selecciona la etiqueta <code>Google Ads / Remarketing</code>.</li>
            <li>2. Ve a <code>«Configuración avanzada»</code> → <code>«Configuración de consentimiento»</code>.</li>
            <li>3. Verás que ya tiene activadas las opciones: <code>ad_storage</code>, <code>ad_personalization</code>, <code>ad_user_data</code>.</li>
            <li>4. Selecciona <strong><code>«No se requiere ningún consentimiento adicional»</code></strong> y guarda la etiqueta.</li>
          </ol>
        </div>

        <div>
          <h5 className="font-semibold mb-2">Etiqueta de Configuración de Google Analytics (GA4)</h5>
          <ol className="space-y-1 text-sm">
            <li>1. Selecciona la etiqueta de <strong>Google Analytics (GA4)</strong>.</li>
            <li>2. Ve a <code>«Configuración avanzada»</code> → <code>«Configuración de consentimiento»</code>.</li>
            <li>3. Selecciona <strong><code>«No se requiere ningún consentimiento adicional»</code></strong>.</li>
            <li>4. Guarda los cambios.</li>
          </ol>
        </div>
      </div>

      <h4>C) Configurar etiquetas que SÍ requieren consentimiento adicional (Meta Pixel)</h4>

      <p>
        Algunas etiquetas como <strong>Meta Pixel (Facebook Pixel)</strong> NO tienen comprobaciones de consentimiento integradas. 
        En estos casos, debemos configurarlas manualmente para que solo se activen cuando el usuario haya otorgado su consentimiento.
      </p>

      <ol className="space-y-2 mb-6">
        <li>1. Selecciona la <code>Etiqueta del Pixel de Meta</code>.</li>
        <li>2. Ve a <code>«Configuración avanzada»</code> → <code>«Configuración de consentimiento»</code>.</li>
        <li>3. Como no tiene controles de consentimiento integrados, selecciona <strong><code>«La etiqueta requiere consentimientos adicionales para activarse»</code></strong>. Dentro de la casilla incluimos <code>«ad_storage»</code>.</li>
        <li>4. Ahora vamos al activador. Debemos configurar el activador adecuado para el Pixel de Meta.</li>
        <li>5. Guarda la etiqueta.</li>
      </ol>

      <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold mb-3 text-orange-800">📌 Configurar el activador adecuado para el Pixel de Meta</h4>
        <ol className="space-y-1 text-orange-700">
          <li>1. Eliminamos el activador actual y agregamos uno nuevo desde elegir activador dándole al +.</li>
          <li>2. Selecciona <strong>Evento personalizado</strong> y en Nombre del evento pon <code>cookie_consent_update</code>.</li>
          <li>3. Nómbralo <code>Bloqueo de Cookies de Terceros</code>.</li>
          <li>4. Guarda.</li>
        </ol>
      </div>

      <h3>Paso 6: Verificar la instalación de CookieYes en GTM</h3>

      <p>Para asegurarte de que todo funciona correctamente:</p>

      <ol className="space-y-2 mb-6">
        <li>1. Accede a <strong>CookieYes</strong> → <code>Configuración avanzada</code> (Advanced Settings).</li>
        <li>2. Baja hasta <strong>Google consent mode (GCM)</strong>.</li>
        <li>3. Haz clic en <code>Verificar ahora</code> (Check now) en la opción <code>Verificar estado de GCM</code> (Check GCM status).</li>
        <li>4. Si la configuración es correcta, verás un mensaje de <code>«No se detectó ningún error»</code> (No error detected).</li>
      </ol>

      <p>
        También puedes usar la <strong>Consola de Google Chrome</strong> (<code>F12</code> → «Aplicación» → «Almacenamiento de cookies») 
        para comprobar que las <strong>cookies se bloquean correctamente</strong>.
      </p>

      <h3>Paso 7: Excluir el JavaScript de CookieYes en WP Rocket</h3>

      <p>
        Si utilizas <strong>WordPress y el plugin WP Rocket</strong>, es recomendable <strong>excluir el archivo de CookieYes</strong> 
        para evitar problemas de carga del banner de cookies.
      </p>

      <div className="space-y-4 mb-6">
        <div>
          <h5 className="font-semibold mb-2">A) Primero intenta excluir el código:</h5>
          <ol className="space-y-1 text-sm">
            <li>1. Accede al panel de administración de WordPress.</li>
            <li>2. En el menú de la izquierda, dirígete a <code>«Ajustes»</code> → <code>«WP Rocket»</code>.</li>
            <li>3. En el menú lateral derecho, haz clic en <code>«Optimizar Archivos»</code>.</li>
            <li>4. Busca la opción <code>«Cargar archivos JavaScript de manera diferida»</code> y márcala.</li>
            <li>5. En el cuadro de texto que aparece, introduce: <code>client_data/(.*)/script.js</code></li>
            <li>6. Guarda los cambios y borra la caché de la web.</li>
          </ol>
        </div>

        <div>
          <h5 className="font-semibold mb-2">B) Si el problema persiste:</h5>
          <p className="text-sm">
            Si estás utilizando WP Rocket o plugins de optimización similares, podrían estar interfiriendo con la funcionalidad del Modo Consentimiento de Google. 
            Prueba a <strong>desactivarlos temporalmente</strong> y comprueba de nuevo el estado del comprobador de GCM.
          </p>
        </div>
      </div>

      <h3>Paso 8: Publicar los cambios en Google Tag Manager</h3>

      <p>Una vez que todo funcione correctamente, <strong>publicamos las nuevas etiquetas en GTM</strong>:</p>

      <ol className="space-y-1 mb-8">
        <li>1. Ir a Google Tag Manager y hacer clic en «Enviar».</li>
        <li>2. Asigna un nombre a la versión, como <code>«Configuración de Consentimiento con CookieYes»</code>.</li>
        <li>3. Publica los cambios.</li>
      </ol>

      <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
        <h3 className="text-lg font-semibold mb-3 text-green-800">🎉 ¡Felicidades!</h3>
        <p className="text-green-700">
          A partir de ahora, el sitio web utilizará el <strong>banner de consentimiento de CookieYes</strong> para controlar 
          cuándo se activan las etiquetas. Tu sitio cumple con GDPR mientras mantienes el seguimiento esencial para tu negocio.
        </p>
      </div>

      <h2>Optimización con Inteligencia Artificial</h2>
      
      <p>
        La gestión de consentimiento puede beneficiarse enormemente de la IA para mejorar las tasas de consentimiento 
        y optimizar la experiencia del usuario.
      </p>

      <AIApplicationsSection 
        title="Aplicaciones de IA en Gestión de Consentimiento"
        description="Descubre cómo la inteligencia artificial puede optimizar tu estrategia de gestión de cookies y consentimiento."
        applications={aiApplications}
      />

      <h2>Errores comunes y cómo evitarlos</h2>

      <div className="space-y-4 mb-8">
        <div className="border border-red-200 rounded-lg p-4">
          <h4 className="font-semibold text-red-800 mb-2">❌ Error: Banner no aparece</h4>
          <p className="text-red-700 text-sm mb-2"><strong>Causa:</strong> Plugins de caché o optimización interfieren con CookieYes</p>
          <p className="text-red-600 text-sm"><strong>Solución:</strong> Excluir el script de CookieYes de la optimización y limpiar caché</p>
        </div>

        <div className="border border-red-200 rounded-lg p-4">
          <h4 className="font-semibold text-red-800 mb-2">❌ Error: Etiquetas se ejecutan sin consentimiento</h4>
          <p className="text-red-700 text-sm mb-2"><strong>Causa:</strong> Configuración incorrecta del consentimiento en GTM</p>
          <p className="text-red-600 text-sm"><strong>Solución:</strong> Revisar la configuración de consentimiento de cada etiqueta y usar el activador correcto</p>
        </div>

        <div className="border border-red-200 rounded-lg p-4">
          <h4 className="font-semibold text-red-800 mb-2">❌ Error: Datos incompletos en Google Analytics</h4>
          <p className="text-red-700 text-sm mb-2"><strong>Causa:</strong> Consent Mode no está configurado correctamente</p>
          <p className="text-red-600 text-sm"><strong>Solución:</strong> Verificar que GA4 tenga habilitado el modelado de datos y Consent Mode esté activo</p>
        </div>
      </div>

      <ArticleFAQSection faqs={faqs} />

      <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-lg p-6 mt-8">
        <h3 className="text-lg font-semibold mb-3 text-purple-800">🚀 ¿Necesitas ayuda con la implementación?</h3>
        <p className="text-purple-700 mb-4">
          En Hayas Marketing somos especialistas en analítica digital y cumplimiento de normativas. Si necesitas ayuda 
          para implementar Google Consent Mode o cualquier otra herramienta de seguimiento, contáctanos.
        </p>
        <p className="text-purple-600 text-sm mb-6">
          Ofrecemos servicios de consultoría, implementación y formación en Google Tag Manager, Google Analytics y herramientas de privacy compliance.
        </p>
        <Link to="/es/solicitar-consulta">
          <Button className="gradient-primary">
            Solicitar Consulta Gratuita
          </Button>
        </Link>
      </div>
    </BlogPostTemplate>
  );
};

export default GoogleConsentModeCookieyes;