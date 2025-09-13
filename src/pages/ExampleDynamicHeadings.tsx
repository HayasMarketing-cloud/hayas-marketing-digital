import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { DynamicH1 } from '@/components/DynamicH1';
import { DynamicH2 } from '@/components/DynamicH2';
import { DynamicH3 } from '@/components/DynamicH3';
import { EnhancedSEO } from '@/components/EnhancedSEO';

/**
 * Example page demonstrating the usage of dynamic SEO-optimized headings
 * This shows how H1, H2, and H3 can be automatically optimized from central data
 */
const ExampleDynamicHeadings = () => {
  return (
    <>
      <EnhancedSEO 
        customSEO={{
          title: 'Ejemplo de Encabezados Dinámicos SEO',
          description: 'Demostración del sistema avanzado de encabezados SEO dinámicos optimizados',
          headings: {
            h2Primary: 'Sistema de encabezados SEO automatizado',
            h2Secondary: [
              'Beneficios de la optimización automática',
              'Implementación centralizada de keywords',
              'Mejores prácticas de SEO aplicadas'
            ],
            h3Strategic: [
              'Gestión centralizada de contenido',
              'Optimización para motores de búsqueda',
              'Mantenimiento simplificado'
            ]
          }
        }}
      />
      <Navigation />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-900 to-blue-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="text-center">
              {/* Dynamic H1 from SEO data */}
              <DynamicH1 
                fallback="Ejemplo de Encabezados Dinámicos" 
                className="text-4xl md:text-6xl font-bold mb-6"
              />
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Demostración del sistema avanzado de encabezados SEO optimizados automáticamente
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            {/* Primary H2 from SEO data */}
            <DynamicH2 
              type="primary"
              fallback="Sistema de Encabezados SEO"
              className="text-3xl font-bold text-center mb-12"
            />
            
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-600 mb-8 text-center">
                Este sistema permite gestionar todos los encabezados H1, H2 y H3 desde datos centralizados, 
                optimizados automáticamente para SEO con keywords estratégicas.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-16">
                <div className="bg-gray-50 p-6 rounded-lg">
                  {/* Secondary H2 from SEO data */}
                  <DynamicH2 
                    type="secondary"
                    index={0}
                    fallback="Beneficios del Sistema"
                    className="text-2xl font-semibold mb-4 text-gray-900"
                  />
                  {/* Strategic H3 from SEO data */}
                  <DynamicH3 
                    index={0}
                    fallback="Gestión centralizada"
                    className="text-lg font-medium mb-3 text-gray-800"
                  />
                  <p className="text-gray-600">
                    Todos los encabezados se gestionan desde un archivo central, 
                    garantizando consistencia y optimización SEO.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  {/* Another Secondary H2 */}
                  <DynamicH2 
                    type="secondary"
                    index={1}
                    fallback="Implementación Técnica"
                    className="text-2xl font-semibold mb-4 text-gray-900"
                  />
                  {/* Another Strategic H3 */}
                  <DynamicH3 
                    index={1}
                    fallback="Optimización automática"
                    className="text-lg font-medium mb-3 text-gray-800"
                  />
                  <p className="text-gray-600">
                    Los encabezados se optimizan automáticamente con keywords relevantes, 
                    longitudes adecuadas y estructura semántica.
                  </p>
                </div>
              </div>

              {/* Third section */}
              <div className="bg-blue-50 p-8 rounded-lg">
                <DynamicH2 
                  type="secondary"
                  index={2}
                  fallback="Mejores Prácticas SEO"
                  className="text-2xl font-semibold mb-6 text-center text-gray-900"
                />
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <DynamicH3 
                      index={2}
                      fallback="Mantenimiento simplificado"
                      className="text-lg font-medium mb-3 text-gray-800"
                    />
                    <p className="text-gray-600 text-sm">
                      Actualización centralizada de todos los encabezados SEO
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <h3 className="text-lg font-medium mb-3 text-gray-800">
                      Keywords optimizadas
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Integración automática de términos estratégicos
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <h3 className="text-lg font-medium mb-3 text-gray-800">  
                      Estructura semántica
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Jerarquía de encabezados optimizada para motores de búsqueda
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Usage Examples */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Ejemplos de Uso</h2>
            
            <div className="max-w-4xl mx-auto">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-6 text-gray-900">Código de Implementación</h3>
                
                <div className="bg-gray-900 text-gray-100 p-6 rounded-lg font-mono text-sm overflow-x-auto">
                  <div className="mb-4">
                    <span className="text-green-400">// H1 dinámico optimizado</span>
                  </div>
                  <div className="mb-2">
                    <span className="text-blue-400">{'<DynamicH1'}</span>
                  </div>
                  <div className="ml-4 mb-2">
                    <span className="text-yellow-400">fallback</span>
                    <span className="text-white">=</span>
                    <span className="text-green-300">"Mi Página"</span>
                  </div>
                  <div className="ml-4 mb-2">
                    <span className="text-yellow-400">className</span>
                    <span className="text-white">=</span>
                    <span className="text-green-300">"text-4xl font-bold"</span>
                  </div>
                  <div className="mb-4">
                    <span className="text-blue-400">{'/>'}</span>
                  </div>
                  
                  <div className="mb-4">
                    <span className="text-green-400">// H2 primario desde datos SEO</span>
                  </div>
                  <div className="mb-2">
                    <span className="text-blue-400">{'<DynamicH2'}</span>
                  </div>
                  <div className="ml-4 mb-2">
                    <span className="text-yellow-400">type</span>
                    <span className="text-white">=</span>
                    <span className="text-green-300">"primary"</span>
                  </div>
                  <div className="ml-4 mb-2">
                    <span className="text-yellow-400">fallback</span>
                    <span className="text-white">=</span>
                    <span className="text-green-300">"Servicios"</span>
                  </div>
                  <div className="mb-4">
                    <span className="text-blue-400">{'/>'}</span>
                  </div>
                  
                  <div className="mb-4">
                    <span className="text-green-400">// H3 estratégico con keywords</span>
                  </div>
                  <div className="mb-2">
                    <span className="text-blue-400">{'<DynamicH3'}</span>
                  </div>
                  <div className="ml-4 mb-2">
                    <span className="text-yellow-400">index</span>
                    <span className="text-white">=</span>
                    <span className="text-purple-400">{'{0}'}</span>
                  </div>
                  <div className="ml-4 mb-2">
                    <span className="text-yellow-400">fallback</span>
                    <span className="text-white">=</span>
                    <span className="text-green-300">"Características"</span>
                  </div>
                  <div>
                    <span className="text-blue-400">{'/>'}</span>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-blue-800 text-sm">
                    <strong>Nota:</strong> Los encabezados se optimizan automáticamente desde 
                    <code className="bg-blue-200 px-2 py-1 rounded">src/data/seoData.ts</code> 
                    con keywords estratégicas, longitudes adecuadas y estructura semántica.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default ExampleDynamicHeadings;