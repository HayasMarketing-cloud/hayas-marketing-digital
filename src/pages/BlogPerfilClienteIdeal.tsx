import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Seo from '@/components/Seo';
import OptimizedImage from '@/components/OptimizedImage';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle, Target, Users, TrendingUp, Brain, BarChart3 } from 'lucide-react';
import heroImage from '@/assets/perfil-cliente-ideal-hero.jpg';

const BlogPerfilClienteIdeal = () => {
  const publishDate = "2025-01-14";
  const lastModified = "2025-01-14";

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Perfil de cliente ideal: qué es y cómo definirlo para tu negocio",
    "description": "Descubre cómo crear el perfil de cliente ideal (ICP) perfecto para optimizar tu estrategia de marketing, mejorar las ventas y maximizar la rentabilidad de tu negocio.",
    "image": `${window.location.origin}${heroImage}`,
    "author": {
      "@type": "Organization",
      "name": "Hayas Marketing"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Hayas Marketing",
      "logo": {
        "@type": "ImageObject",
        "url": `${window.location.origin}/favicon.ico`
      }
    },
    "datePublished": publishDate,
    "dateModified": lastModified,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${window.location.origin}/blog/perfil-cliente-ideal`
    },
    "keywords": "perfil de cliente ideal, ICP, ideal customer profile, marketing digital, estrategia de ventas, segmentación de clientes"
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Seo
        title="Perfil de cliente ideal: qué es y cómo definirlo para tu negocio"
        description="Descubre cómo crear el perfil de cliente ideal (ICP) perfecto para optimizar tu estrategia de marketing, mejorar las ventas y maximizar la rentabilidad de tu negocio."
        canonical="/blog/perfil-cliente-ideal"
        structuredData={[articleSchema]}
      />
      <Navigation />
      
      <main className="flex-grow pt-24" role="main">
        {/* Breadcrumbs */}
        <nav className="container mx-auto px-4 py-4">
          <Link 
            to="/blog" 
            className="inline-flex items-center text-hayas-primary hover:text-hayas-secondary font-medium transition-colors"
          >
            ← Volver al blog
          </Link>
        </nav>
        
        <article className="container mx-auto px-4 py-8 max-w-4xl">
          
          {/* Hero Section */}
          <header className="mb-12">
            <div className="mb-8">
              <OptimizedImage
                src={heroImage}
                alt="Perfil de cliente ideal - análisis y segmentación de clientes para estrategias de marketing exitosas"
                className="w-full h-96 object-cover rounded-xl shadow-elegant"
                width={1200}
                height={630}
                priority={true}
              />
            </div>
            
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-hayas-primary leading-tight">
                Perfil de cliente ideal: qué es y cómo definirlo
              </h1>
              
              <div className="bg-gradient-to-r from-hayas-primary/10 to-hayas-secondary/10 rounded-xl p-6 mb-6 border-l-4 border-hayas-primary">
                <p className="text-lg text-gray-700 leading-relaxed">
                  <strong>El perfil de cliente ideal (ICP)</strong> es la herramienta clave que permite a las empresas identificar, atraer y retener a los clientes más rentables y valiosos para su negocio.
                </p>
              </div>
              
              <div className="flex flex-wrap justify-center gap-2 text-sm text-gray-600 mb-4">
                <time dateTime={publishDate}>14 de enero, 2025</time>
                <span>•</span>
                <span>12 min de lectura</span>
                <span>•</span>
                <span>Estrategia de Marketing</span>
              </div>
            </div>
          </header>

          {/* Introducción */}
          <section className="mb-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Un <strong>perfil de cliente ideal</strong>, también conocido como ICP (Ideal Customer Profile), es una descripción detallada de la empresa o persona que obtendría el máximo beneficio de tu producto o servicio y, por lo tanto, es más probable que se convierta en un cliente leal y de alto valor.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Es sin duda, una de las herramientas clave en una <Link to="/estrategia-contenidos" className="text-hayas-primary hover:text-hayas-secondary font-medium underline">Estrategia de Marketing</Link> y Ventas. Hace unos años hablábamos de target o público objetivo, pero a medida que conocemos muchos más datos de las personas y las empresas, ya podemos identificar un perfil muy concreto de nuestro Cliente Ideal con el objetivo de priorizar su identificación y su gestión.
            </p>

            {/* Estadística destacada */}
            <div className="bg-hayas-primary text-white rounded-xl p-8 text-center mb-8">
              <div className="flex items-center justify-center mb-4">
                <TrendingUp className="h-12 w-12" />
              </div>
              <h3 className="text-2xl font-bold mb-2">68% de empresas</h3>
              <p className="text-lg opacity-90">incrementan sus ventas al definir correctamente su perfil de cliente ideal</p>
            </div>
          </section>

          {/* Por qué es importante */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-hayas-primary">
              ¿Por qué es importante crear el perfil de cliente ideal?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-500">
                <h3 className="text-xl font-semibold mb-3 text-blue-900">Negocios B2B</h3>
                <p className="text-gray-700">
                  En el ámbito B2B, el perfil de cliente ideal se vuelve fundamental debido al tiempo invertido en la captación, incorporación y gestión de cada cliente. Es crucial asegurarse de estar trabajando con los clientes ideales para garantizar el éxito y la rentabilidad.
                </p>
              </div>
              
              <div className="bg-green-50 rounded-xl p-6 border-l-4 border-green-500">
                <h3 className="text-xl font-semibold mb-3 text-green-900">Negocios B2C</h3>
                <p className="text-gray-700">
                  En B2C, el perfil de cliente ideal es esencial para hacer crecer tu negocio de manera adecuada. Antes de replicar el modelo de negocio para escalar, es crucial asegurarse de captar la atención e interés de los clientes ideales.
                </p>
              </div>
            </div>
          </section>

          {/* Quién es tu cliente ideal */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-hayas-primary">
              ¿Quién es tu cliente ideal?
            </h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Tu cliente ideal es aquél que es más rentable para tu negocio, pero también que te permite tener una relación sostenible a lo largo del tiempo.
            </p>
            
            <div className="bg-yellow-50 rounded-xl p-6 border-l-4 border-yellow-500 mb-8">
              <div className="flex items-start">
                <Brain className="h-6 w-6 text-yellow-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-yellow-900 mb-2">Punto clave</h4>
                  <p className="text-gray-700">
                    Es importante pensar en toda la cadena de valor del Cliente, poniendo más énfasis en lo que ocurre después de la Venta. De nada vale vender una primera vez si no logramos fidelizar y acompañar a nuestros Clientes en su viaje.
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-semibold mb-6 text-hayas-secondary">
              Criterios para definir el perfil de cliente ideal
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-hayas-primary text-white rounded-full p-2 mr-4 mt-1">
                  <BarChart3 className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Clientes que generan mayor rentabilidad</h4>
                  <p className="text-gray-700">
                    Selecciona personas y/o empresas que pertenecen a un segmento concreto de población, tamaño de empresa, volumen de empleados y todos aquellos criterios que cumplen tus clientes más rentables.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-hayas-secondary text-white rounded-full p-2 mr-4 mt-1">
                  <Users className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Relación comercial a largo plazo</h4>
                  <p className="text-gray-700">
                    En función de tu propuesta de valor, especialización y las características de tu empresa, siempre aportas más valor a unas personas/empresas que a otras.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Beneficios importantes */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-hayas-primary">
              Beneficios de crear un perfil de cliente ideal
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="bg-hayas-primary/10 rounded-full p-3 w-fit mb-4">
                  <Target className="h-6 w-6 text-hayas-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Enfoque de marketing y ventas</h3>
                <p className="text-gray-600 text-sm">
                  Personaliza tus esfuerzos para atraer y retener a los clientes más valiosos, adaptando mensajes y canales.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="bg-hayas-secondary/10 rounded-full p-3 w-fit mb-4">
                  <CheckCircle className="h-6 w-6 text-hayas-secondary" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Desarrollo de productos</h3>
                <p className="text-gray-600 text-sm">
                  Desarrolla productos o servicios que satisfagan las necesidades específicas de tu cliente ideal.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="bg-hayas-primary/10 rounded-full p-3 w-fit mb-4">
                  <TrendingUp className="h-6 w-6 text-hayas-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Mayor eficiencia</h3>
                <p className="text-gray-600 text-sm">
                  Utiliza tus recursos de manera más eficiente, consiguiendo mayor ROI en marketing y ventas.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="bg-hayas-secondary/10 rounded-full p-3 w-fit mb-4">
                  <Users className="h-6 w-6 text-hayas-secondary" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Experiencia personalizada</h3>
                <p className="text-gray-600 text-sm">
                  Crea experiencias que se alineen con las expectativas y preferencias de tu cliente ideal.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="bg-hayas-primary/10 rounded-full p-3 w-fit mb-4">
                  <BarChart3 className="h-6 w-6 text-hayas-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Crecimiento sostenible</h3>
                <p className="text-gray-600 text-sm">
                  Atrae y retén clientes ideales con mayor valor de vida, generando más ingresos a largo plazo.
                </p>
              </div>
            </div>
          </section>

          {/* Cómo definir el perfil */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-hayas-primary">
              ¿Cómo se define un perfil de cliente ideal?
            </h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              La forma de crear un perfil de cliente ideal varía dependiendo de si estás empezando desde cero o si ya tienes datos de clientes existentes.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Empresas nuevas */}
              <div className="bg-blue-50 rounded-xl p-8">
                <h3 className="text-2xl font-semibold mb-6 text-blue-900">
                  Empresas de nueva creación
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">1</span>
                    <div>
                      <h4 className="font-semibold mb-1">Investigación de mercado</h4>
                      <p className="text-sm text-gray-700">Realiza encuestas, entrevistas y grupos focales para entender a tu público objetivo.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">2</span>
                    <div>
                      <h4 className="font-semibold mb-1">Análisis de competencia</h4>
                      <p className="text-sm text-gray-700">Observa a quién se dirigen tus competidores y cómo se posicionan en el mercado.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">3</span>
                    <div>
                      <h4 className="font-semibold mb-1">Identificación de necesidades</h4>
                      <p className="text-sm text-gray-700">Define qué problemas puede resolver tu producto y quién se beneficiaría más.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">4</span>
                    <div>
                      <h4 className="font-semibold mb-1">Creación de perfiles</h4>
                      <p className="text-sm text-gray-700">Utiliza la información recopilada para crear perfiles detallados y específicos.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Empresas con experiencia */}
              <div className="bg-green-50 rounded-xl p-8">
                <h3 className="text-2xl font-semibold mb-6 text-green-900">
                  Empresas con datos existentes
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">1</span>
                    <div>
                      <h4 className="font-semibold mb-1">Análisis de datos</h4>
                      <p className="text-sm text-gray-700">Analiza datos de ventas, interacciones, uso del producto y comportamiento web.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">2</span>
                    <div>
                      <h4 className="font-semibold mb-1">Segmentación</h4>
                      <p className="text-sm text-gray-700">Divide a tus clientes en grupos basados en características comunes.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">3</span>
                    <div>
                      <h4 className="font-semibold mb-1">Encuestas a clientes</h4>
                      <p className="text-sm text-gray-700">Obtén información sobre necesidades, preferencias y comportamientos actuales.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">4</span>
                    <div>
                      <h4 className="font-semibold mb-1">Actualización continua</h4>
                      <p className="text-sm text-gray-700">Revisa y actualiza regularmente tus perfiles con nueva información.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 rounded-xl p-6 border-l-4 border-yellow-500 mt-8">
              <div className="flex items-start">
                <Brain className="h-6 w-6 text-yellow-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-yellow-900 mb-2">Importante recordar</h4>
                  <p className="text-gray-700">
                    Los perfiles de cliente ideal no son estáticos. Deberías revisarlos y actualizarlos regularmente a medida que obtienes más información sobre tus clientes y a medida que cambian sus necesidades y comportamientos.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Diferencia con Buyer Persona */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-hayas-primary">
              Diferencia entre buyer persona y cliente ideal
            </h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              El Buyer Persona y el Perfil de cliente ideal son dos conceptos diferentes pero interrelacionados. Veamos las diferencias según el modelo de negocio:
            </p>

            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
                <thead className="bg-hayas-primary text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Concepto</th>
                    <th className="px-6 py-4 text-left">B2B</th>
                    <th className="px-6 py-4 text-left">B2C</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="px-6 py-4 font-semibold">Cliente Ideal</td>
                    <td className="px-6 py-4 text-gray-700">Descripción detallada de la empresa que mejor se ajusta a tu estrategia de negocio</td>
                    <td className="px-6 py-4 text-gray-700">Características de las personas más rentables y adecuadas para tu negocio</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold">Buyer Persona</td>
                    <td className="px-6 py-4 text-gray-700">Representación del individuo dentro de la empresa con poder de decisión (CEO, Director de Compras, etc.)</td>
                    <td className="px-6 py-4 text-gray-700">Representación detallada de un individuo específico, incluyendo desafíos y comportamientos</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Automatización y CRM */}
          <section className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-hayas-secondary">
              Automatización con CRM para gestionar tu perfil de cliente ideal
            </h3>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Gracias a los datos que ahora tenemos de nuestros prospectos y clientes en nuestro CRM, podemos identificar, calificar y priorizar la gestión de las personas y empresas que cumplen con este perfil.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Las empresas ya están utilizando sistemas de digitalización y automatización de procesos de Marketing Digital en su CRM para identificar y clasificar sus mejores Leads u Oportunidades, priorizando todas aquellas personas o empresas que cumplan con todos los requisitos del perfil de cliente ideal.
            </p>
          </section>

          {/* CTA especializado */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold mb-4 text-center text-gray-900">
                ¿Quieres conectar mejor con tu perfil de cliente ideal?
              </h3>
              <p className="text-lg text-gray-700 mb-6 text-center max-w-4xl mx-auto">
                En Hayas te ayudamos a <strong>conectar y mejorar la relación</strong> con tus clientes actuales y potenciales. Implementamos CRM, automatizaciones inteligentes y estrategias personalizadas que te permiten identificar, atraer y fidelizar a tu cliente ideal de forma efectiva.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild className="gradient-primary text-white px-8 py-3">
                  <Link to="/conecta-con-tus-clientes">
                    📘 Conecta con tus clientes
                  </Link>
                </Button>
                <Button asChild variant="outline" className="px-8 py-3 border-gray-300 text-gray-700 hover:bg-gray-50">
                  <Link to="/contacto">
                    Solicitar Consulta
                  </Link>
                </Button>
              </div>
            </div>
          </section>

          {/* Artículos relacionados */}
          <section className="mb-12">
            <h3 className="text-2xl font-bold mb-8 text-hayas-primary">Artículos relacionados</h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Link to="/blog/como-crear-funnel-conversion-b2b" className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="p-6">
                  <h4 className="text-lg font-semibold mb-3 group-hover:text-hayas-primary transition-colors">
                    Cómo crear un funnel de conversión para empresas B2B
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Descubre cómo diseñar un embudo de ventas efectivo que convierta visitantes en clientes B2B.
                  </p>
                </div>
              </Link>
              
              <Link to="/blog/buyer-personas-que-son-como-crearlos" className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="p-6">
                  <h4 className="text-lg font-semibold mb-3 group-hover:text-hayas-primary transition-colors">
                    Qué son y para qué sirven los buyer personas
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Aprende a crear buyer personas efectivos para mejorar tu estrategia de marketing digital.
                  </p>
                </div>
              </Link>
              
              <Link to="/implantacion-crm" className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="p-6">
                  <h4 className="text-lg font-semibold mb-3 group-hover:text-hayas-primary transition-colors">
                    Implantación de CRM para gestionar clientes
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Optimiza la gestión de tus clientes ideales con un sistema CRM profesional.
                  </p>
                </div>
              </Link>
            </div>
          </section>

        </article>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPerfilClienteIdeal;