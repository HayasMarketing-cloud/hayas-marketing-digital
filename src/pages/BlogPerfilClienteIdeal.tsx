import React from 'react';
import BlogPostTemplate from '@/components/BlogPost/BlogPostTemplate';
import { CheckCircle } from 'lucide-react';

const BlogPerfilClienteIdeal = () => {
  const metadata = {
    title: "Cómo crear tu buyer persona para B2B y B2C [GUÍA COMPLETA + TEMPLATE]",
    description: "Aprende a crear buyer personas efectivos para B2B y B2C con nuestra guía completa. Incluye template descargable y cuestionario para definir el perfil de cliente ideal.",
    date: "2025-01-15",
    readTime: "12 min de lectura",
    category: "Estrategia de Marketing",
    author: "Equipo Hayas Marketing",
    tags: ["buyer persona", "perfil cliente ideal", "estrategia marketing", "B2B", "B2C"],
    canonical: "/blog/como-crear-buyer-persona-b2b-b2c-guia-completa",
    ogImage: "/perfil-cliente-ideal-hero.jpg",
    metaTitle: "Cómo crear tu buyer persona para B2B y B2C - Guía completa con template",
    metaDescription: "Descubre cómo crear buyer personas efectivos paso a paso. Guía completa con template descargable, cuestionario y ejemplos prácticos para B2B y B2C.",
    mainKeyword: "buyer persona",
    secondaryKeywords: ["perfil cliente ideal", "crear buyer persona", "plantilla buyer persona", "cuestionario buyer persona"],
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Cómo crear tu buyer persona para B2B y B2C [GUÍA COMPLETA + TEMPLATE]",
      "description": "Aprende a crear buyer personas efectivos para B2B y B2C con nuestra guía completa. Incluye template descargable y cuestionario para definir el perfil de cliente ideal.",
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
      "datePublished": "2025-01-15",
      "dateModified": "2025-01-15"
    }
  };

  const faqs = [
    {
      question: "¿Qué es un buyer persona y por qué es importante?",
      answer: "Un buyer persona es una representación semi-ficticia de tu cliente ideal basada en datos reales y investigación de mercado. Es importante porque te ayuda a entender mejor a tu audiencia, personalizar tu estrategia de marketing y crear contenido más relevante que genere mejores resultados."
    },
    {
      question: "¿Cuál es la diferencia entre buyer persona B2B y B2C?",
      answer: "En B2B te enfocas en el rol profesional, responsabilidades, procesos de toma de decisiones empresariales y desafíos del negocio. En B2C te centras más en aspectos personales, demografía, intereses, hábitos de consumo y motivaciones emocionales del individuo."
    },
    {
      question: "¿Cuántos buyer personas debe tener mi empresa?",
      answer: "Se recomienda comenzar con 3-5 buyer personas como máximo. Es mejor tener pocos perfiles bien definidos y detallados que muchos superficiales. Puedes expandir gradualmente según vayas conociendo mejor a tu audiencia."
    },
    {
      question: "¿Con qué frecuencia debo actualizar mis buyer personas?",
      answer: "Revisa tus buyer personas cada 6-12 meses o cuando lances nuevos productos/servicios, cambies de estrategia o detectes cambios significativos en el comportamiento de tus clientes. Mantenerlos actualizados es clave para su efectividad."
    },
    {
      question: "¿Qué herramientas puedo usar para crear mis buyer personas?",
      answer: "Puedes usar herramientas como Google Analytics, encuestas, entrevistas con clientes, datos de CRM, redes sociales, y herramientas específicas como HubSpot's Make My Persona o nuestro cuestionario descargable."
    }
  ];

  const relatedServices = [
    {
      title: "Estrategia de Marketing Digital",
      description: "Desarrollamos estrategias personalizadas basadas en tus buyer personas para maximizar el ROI de tus campañas.",
      link: "/estrategia-contenidos"
    },
    {
      title: "Implementación de CRM",
      description: "Configuramos tu CRM para segmentar automáticamente según tus buyer personas y optimizar el proceso comercial.",
      link: "/servicios/implantacion-crm"
    }
  ];

  return (
    <BlogPostTemplate
      metadata={metadata}
      heroImage={{
        src: "/perfil-cliente-ideal-hero.jpg",
        alt: "Profesionales analizando datos de buyer personas en una oficina moderna"
      }}
      faqs={faqs}
      relatedServices={relatedServices}
    >
      <div className="space-y-8">
        <section>
          <p className="text-lg text-muted-foreground mb-6">
            En un mundo donde la personalización del marketing es clave para el éxito, <strong>crear buyer personas precisos se ha convertido en una necesidad estratégica</strong>. Si quieres que tu estrategia de marketing sea realmente efectiva, necesitas conocer a fondo a tu cliente ideal.
          </p>
          
          <p className="mb-6">
            En esta guía completa te mostraremos cómo crear buyer personas efectivos tanto para <strong>B2B como B2C</strong>, con metodologías probadas, ejemplos prácticos y herramientas descargables que te permitirán desarrollar perfiles detallados de tus clientes ideales.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6 text-foreground">¿Qué necesitas para definir tu buyer persona?</h2>
          
          <p className="mb-6">
            Los <strong>buyer personas más precisos</strong> son aquellos que se desarrollan a través de una exhaustiva investigación. No se trata de crear perfiles basados en suposiciones, sino de utilizar datos reales obtenidos a través de:
          </p>

          <ul className="list-disc list-inside space-y-3 mb-6 text-muted-foreground">
            <li><strong>Focus Groups</strong> con tu audiencia objetivo</li>
            <li><strong>Entrevistas individuales</strong> con tus mejores clientes</li>
            <li><strong>Consultas con el equipo comercial</strong> que conoce directamente a los clientes</li>
            <li><strong>Análisis de datos</strong> de CRM y herramientas de analítica</li>
          </ul>

          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Proceso paso a paso (simple pero efectivo)</h3>
            <ol className="list-decimal list-inside space-y-3 text-muted-foreground">
              <li><strong>Define un grupo de clientes de referencia</strong> que te gustaría replicar</li>
              <li><strong>Crea un cuestionario específico</strong> con preguntas clave para conocer sus retos y comportamientos</li>
              <li><strong>Documenta cada entrevista</strong> con una ficha resumen para mantener el contexto</li>
              <li><strong>Recopila y analiza todas las respuestas</strong> identificando patrones comunes</li>
              <li><strong>Crea la plantilla final</strong> incluyendo solo los datos más relevantes y recurrentes</li>
            </ol>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6 text-foreground">Metodología para empresas B2B</h2>
          
          <h3 className="text-2xl font-semibold mb-4 text-foreground">Entrevista a tus mejores clientes</h3>
          <p className="mb-6">
            <strong>A diferencia del mercado B2C, este aspecto es vital en B2B.</strong> Cuando trabajamos con empresas debemos centrarnos en las que sean más rentables para nuestro negocio y que mejor se adaptan a nuestra metodología de trabajo.
          </p>

          <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-6">
            <p className="text-amber-800">
              <strong>Consejo profesional:</strong> Informa a tus clientes con antelación sobre la importancia de esta entrevista para tu empresa. La mayoría estará dispuesta a colaborar si entiende el valor que aporta.
            </p>
          </div>

          <h3 className="text-2xl font-semibold mb-4 text-foreground">Haz preguntas relacionadas con su trabajo</h3>
          <p className="mb-6">
            No te fijes tanto en las características de tus productos. <strong>Céntrate en el "trabajo" que tiene que hacer tu buyer persona para lograr sus objetivos</strong>. Esto se relaciona con el concepto de "Jobs to be Done" - entender qué tarea fundamental está tratando de completar tu cliente.
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-foreground">Consulta con tu equipo comercial</h3>
          <p className="mb-6">
            Tu equipo de ventas tiene información valiosa sobre los clientes que más beneficios generan. Explícales qué implica un buyer persona y cómo les ayudará a <strong>mejorar la calificación de oportunidades</strong> y priorizar contactos comerciales de manera más efectiva.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6 text-foreground">Organiza la información visualmente</h2>
          
          <p className="mb-6">
            Una vez recopilada la información, es momento de organizarla y dar vida a tu buyer persona de manera visual. <strong>Crear una ficha visual facilita la comprensión y el uso por parte de todo el equipo.</strong>
          </p>

          {/* Ejemplo Visual de Buyer Persona */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">Ejemplo práctico: Buyer Persona para Marketing Manager</h3>
            <p className="mb-6 text-muted-foreground">
              A continuación puedes ver un ejemplo de cómo organizar visualmente toda la información recopilada sobre tu buyer persona. Este formato incluye foto, datos demográficos, responsabilidades laborales, problemas, desafíos y comportamiento digital.
            </p>
            
            <div className="bg-white dark:bg-gray-900 rounded-xl border border-border/50 overflow-hidden shadow-lg">
              <img 
                src="/lovable-uploads/9b4c2a8f-f75f-451e-9bb6-d3e25aae34e8.png" 
                alt="Ejemplo de infografía de buyer persona - Marta Jiménez Marketing Manager con información sobre trabajo, problemas, desafíos y comportamiento digital"
                className="w-full h-auto"
              />
            </div>
            
            <div className="mt-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-xl p-6 border border-green-200 dark:border-green-800">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-green-100 dark:bg-green-900/50 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-green-800 dark:text-green-200">Elementos clave de esta infografía</h4>
                  <ul className="text-green-700 dark:text-green-300 text-sm space-y-1">
                    <li>• <strong>Foto y datos básicos:</strong> Humaniza al buyer persona</li>
                    <li>• <strong>Contexto laboral:</strong> Responsabilidades y situación actual</li>
                    <li>• <strong>Problemas identificados:</strong> Pain points específicos</li>
                    <li>• <strong>Desafíos:</strong> Objetivos que quiere conseguir</li>
                    <li>• <strong>Comportamiento digital:</strong> Cómo actúa online</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>


          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
            <p className="text-blue-800">
              <strong>Importante:</strong> Comparte tus buyer personas con toda la organización (Marketing, Ventas, Dirección) y revísalos periódicamente para mantenerlos actualizados.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6 text-foreground">Descarga nuestro cuestionario completo</h2>
          
          <p className="mb-6">
            Para facilitarte el proceso, hemos creado un <strong>cuestionario completo con las preguntas clave</strong> que necesitas hacerle a tus clientes para crear buyer personas efectivos tanto para B2B como B2C.
          </p>

          <div className="text-center mb-8">
            <a 
              href="#" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg hover:opacity-90 transition-opacity shadow-lg"
              onClick={(e) => {
                e.preventDefault();
                // Aquí iría la lógica para descargar o mostrar un formulario
                alert('Funcionalidad de descarga próximamente disponible');
              }}
            >
              📥 Descargar Cuestionario Buyer Persona GRATIS
            </a>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6 text-foreground">Integración con tu CRM</h2>
          
          <p className="mb-6">
            Para identificar si tus prospectos encajan con tus buyer personas, es importante configurar <strong>campos identificadores en tu CRM</strong>:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg p-6 border border-primary/10">
              <h3 className="text-xl font-semibold mb-3 text-foreground">Para B2B</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Título o cargo profesional</li>
                <li>Sector de la empresa</li>
                <li>Tamaño de la empresa</li>
                <li>Ubicación geográfica</li>
                <li>Presupuesto disponible</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-secondary/5 to-primary/5 rounded-lg p-6 border border-secondary/10">
              <h3 className="text-xl font-semibold mb-3 text-foreground">Para B2C</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Profesión o actividad</li>
                <li>Rango de edad</li>
                <li>Intereses específicos</li>
                <li>Ubicación geográfica</li>
                <li>Nivel socioeconómico</li>
              </ul>
            </div>
          </div>

          <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-6">
            <p className="text-green-800">
              <strong>Ejemplo práctico:</strong> Si tu buyer persona es un "Responsable de Marketing de PYMEs en Madrid", cuando alguien complete un formulario con esos datos, se asignará automáticamente a ese buyer persona y se activarán las acciones correspondientes en tu CRM.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6 text-foreground">Errores comunes al crear buyer personas</h2>
          
          <div className="space-y-4 mb-8">
            <div className="bg-red-50 border-l-4 border-red-400 p-4">
              <h3 className="font-semibold text-red-800 mb-2">❌ Basarse solo en suposiciones</h3>
              <p className="text-red-700">Crear perfiles sin investigación real lleva a estrategias inefectivas.</p>
            </div>
            
            <div className="bg-red-50 border-l-4 border-red-400 p-4">
              <h3 className="font-semibold text-red-800 mb-2">❌ Crear demasiados buyer personas</h3>
              <p className="text-red-700">Es mejor tener 3-5 perfiles bien definidos que 10 superficiales.</p>
            </div>
            
            <div className="bg-red-50 border-l-4 border-red-400 p-4">
              <h3 className="font-semibold text-red-800 mb-2">❌ No actualizar los perfiles</h3>
              <p className="text-red-700">Los buyer personas deben evolucionar con tu negocio y el mercado.</p>
            </div>
            
            <div className="bg-red-50 border-l-4 border-red-400 p-4">
              <h3 className="font-semibold text-red-800 mb-2">❌ No compartizar con el equipo</h3>
              <p className="text-red-700">Todos los departamentos deben conocer y utilizar los buyer personas.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6 text-foreground">Próximos pasos: implementa tu estrategia</h2>
          
          <p className="mb-6">
            Ahora que tienes las herramientas para crear buyer personas efectivos, es hora de implementar una estrategia de marketing que <strong>conecte realmente con tu audiencia objetivo</strong>.
          </p>

          <div className="bg-gradient-to-r from-primary to-secondary text-white rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">¿Necesitas ayuda profesional?</h3>
            <p className="mb-6 opacity-90">
              Nuestro equipo puede ayudarte a desarrollar buyer personas precisos y crear estrategias de marketing que generen resultados reales.
            </p>
            <a 
              href="/contacto" 
              className="inline-flex items-center px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-50 transition-colors"
            >
              Solicita una consulta gratuita →
            </a>
          </div>
        </section>
      </div>
    </BlogPostTemplate>
  );
};

export default BlogPerfilClienteIdeal;