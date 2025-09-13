// Example usage of the advanced SEO system
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { EnhancedSEO } from '@/components/EnhancedSEO';
import { DynamicH1 } from '@/components/DynamicH1';
import { useAdvancedSEO } from '@/hooks/useAdvancedSEO';

const ExampleAdvancedSEO = () => {
  // Example: Using the advanced SEO hook with custom overrides
  const pageContent = `
    Esta página de ejemplo muestra el uso de CRM avanzado con HubSpot y GoHighLevel.
    También integramos automatización de marketing y publicidad en Google Ads.
    Nuestro sistema de inteligencia artificial SofÍA ayuda a gestionar leads automáticamente.
  `;

  const customSEO = {
    title: 'Ejemplo de SEO Avanzado - Hayas Marketing',
    description: 'Página de ejemplo que demuestra el uso del sistema SEO avanzado con Schema.org, about y mentions automáticos.',
    keywords: ['ejemplo', 'SEO avanzado', 'Schema.org', 'automatización'],
    faqs: [
      {
        question: "¿Cómo funciona el sistema SEO avanzado?",
        answer: "Nuestro sistema SEO avanzado extrae automáticamente conceptos clave del contenido y genera Schema.org optimizado con propiedades about y mentions."
      }
    ]
  };

  // Using the hook directly for advanced use cases
  const seoData = useAdvancedSEO({
    pageContent,
    customSEO,
    skipAutoExtraction: false
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Option 1: Using EnhancedSEO component (recommended for most cases) */}
      <EnhancedSEO 
        customSEO={customSEO}
        pageContent={pageContent}
        showValidationWarnings={true}
      />
      
      {/* Option 2: Manual SEO configuration using the hook data
      <Seo
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        canonical={seoData.canonical}
        ogImage={seoData.ogImage}
        ogType={seoData.ogType}
        inLanguage={seoData.inLanguage}
        about={seoData.about}
        mentions={seoData.mentions}
        faqs={seoData.faqs}
        structuredData={seoData.structuredData}
      />
      */}
      
      <Navigation />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-purple-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              {/* Using DynamicH1 that automatically gets optimized H1 from SEO data */}
              <DynamicH1 
                fallback="Ejemplo de SEO Avanzado"
                className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
              />
              
              <p className="text-xl text-gray-600 mb-8">
                Esta página demuestra el uso completo del sistema SEO avanzado de Hayas Marketing
              </p>
              
              {/* SEO validation info (only shown in development) */}
              {process.env.NODE_ENV === 'development' && (
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-8">
                  <h3 className="font-semibold text-yellow-800 mb-2">SEO Data Info (Dev Mode)</h3>
                  <div className="text-left text-sm text-yellow-700 space-y-1">
                    <p><strong>Title:</strong> {seoData.title} ({seoData.title.length} chars)</p>
                    <p><strong>Description:</strong> {seoData.description} ({seoData.description?.length} chars)</p>
                    <p><strong>H1:</strong> {seoData.h1}</p>
                    <p><strong>Schema Type:</strong> {seoData.schemaType}</p>
                    <p><strong>About:</strong> {seoData.about?.join(', ')}</p>
                    <p><strong>Mentions:</strong> {seoData.mentions?.join(', ')}</p>
                    <p><strong>Is Canonical:</strong> {seoData.isCanonical ? 'Yes' : 'No'}</p>
                    {seoData.pillarPage && <p><strong>Pillar Page:</strong> {seoData.pillarPage}</p>}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-lg">
              <h2>Características del Sistema SEO Avanzado</h2>
              
              <h3>🎯 Schema.org Automático</h3>
              <ul>
                <li><strong>About:</strong> Extracción automática de conceptos clave</li>
                <li><strong>Mentions:</strong> Identificación de entidades mencionadas</li>
                <li><strong>inLanguage:</strong> Soporte multilingüe (es-ES por defecto)</li>
                <li><strong>Organization Schema:</strong> Incluido automáticamente en todas las páginas</li>
              </ul>

              <h3>🔧 Canónicos Estratégicos</h3>
              <ul>
                <li>Prevención de canibalización entre pillar pages y páginas satélite</li>
                <li>Redirección automática de canónicos</li>
                <li>Gestión inteligente de páginas relacionadas</li>
              </ul>

              <h3>📊 FAQPage Schema</h3>
              <ul>
                <li>Generación automática cuando hay FAQs definidas</li>
                <li>Integración con el contenido existente</li>
                <li>Optimización para rich snippets</li>
              </ul>

              <h3>🎨 H1 Dinámicos</h3>
              <ul>
                <li>H1s optimizados centralizados del CSV</li>
                <li>Componente DynamicH1 para uso automático</li>
                <li>Fallbacks inteligentes</li>
              </ul>

              <div style={{display: 'none'}}>
                {pageContent}
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ExampleAdvancedSEO;