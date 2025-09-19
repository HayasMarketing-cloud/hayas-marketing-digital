import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { servicesByPillar, pillarMeta, PillarKey } from '@/data/services';
import EnhancedBreadcrumbs from '@/components/EnhancedBreadcrumbs';
import Seo from '@/components/Seo';
import { DynamicH1 } from '@/components/DynamicH1';
import { Sparkles, Target, Users2, Zap } from 'lucide-react';

const pillarOrder: PillarKey[] = ['impulsa', 'conecta', 'activa'];

const pillarIcons = {
  impulsa: <Sparkles className="h-8 w-8 text-white" />,
  conecta: <Users2 className="h-8 w-8 text-white" />,
  activa: <Zap className="h-8 w-8 text-white" />
};

const pillarColors = {
  impulsa: 'from-purple-600 to-pink-600',
  conecta: 'from-blue-600 to-cyan-600', 
  activa: 'from-green-600 to-emerald-600'
};

const Servicios = () => {
  return (
    <>
      <Seo 
        title="Servicios de Marketing Digital y CRM - Hayas Marketing"
        description="Descubre todos nuestros servicios de marketing digital: creación de marca, diseño web, SEO, CRM, automatización y más. Soluciones integrales para hacer crecer tu negocio."
        canonical="/servicios"
        keywords={['servicios marketing digital', 'CRM', 'automatización', 'diseño web', 'SEO']}
        ogImage="/og-servicios.jpg"
        ogType="website"
        inLanguage="es-ES"
        about={['Servicios de Marketing', 'CRM', 'Automatización', 'Diseño Web', 'SEO']}
        mentions={['Branding', 'Google Ads', 'Meta Ads', 'HubSpot', 'GoHighLevel']}
      />
      <Navigation />
      
      <main>
        {/* Hero Banner */}
        <section className="relative bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 pt-20 pb-16 overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full blur-xl"></div>
            <div className="absolute top-40 right-20 w-48 h-48 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-2xl"></div>
            <div className="absolute bottom-20 left-1/3 w-64 h-64 bg-gradient-to-r from-indigo-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <EnhancedBreadcrumbs 
              items={[
                { label: 'Inicio', href: '/' },
                { label: 'Servicios', href: '/servicios' }
              ]}
              className="mb-8 [&_a]:text-white/80 [&_a:hover]:text-white [&_span]:text-white/60"
            />
            
            <div className="text-center max-w-4xl mx-auto">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                  <Target className="h-12 w-12 text-white" />
                </div>
              </div>
              
              <DynamicH1 
                fallback="Servicios Hayas Marketing"
                className="text-4xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-white via-purple-100 to-blue-100 bg-clip-text text-transparent"
              />
              
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                Soluciones integrales de marketing digital e inteligencia artificial
                <br />
                <span className="text-lg text-white/80">Diseñadas para hacer crecer tu negocio de forma estratégica y sostenible</span>
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 text-white/80">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                  <Sparkles className="h-5 w-5" />
                  <span>Impulsa tu marca</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                  <Users2 className="h-5 w-5" />
                  <span>Conecta con tus clientes</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                  <Zap className="h-5 w-5" />
                  <span>Activa tus ventas</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Servicios por Pilares */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            {pillarOrder.map((key, index) => (
              <div key={key} className={`mb-16 ${index !== pillarOrder.length - 1 ? 'border-b border-gray-200 pb-16' : ''}`}>
                {/* Header del Pilar */}
                <div className="text-center mb-12">
                  <div className="flex justify-center mb-6">
                    <div className={`p-4 bg-gradient-to-r ${pillarColors[key]} rounded-2xl shadow-lg`}>
                      {pillarIcons[key]}
                    </div>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                    {key === 'impulsa' && 'Servicios de branding y posicionamiento web'}
                    {key === 'conecta' && 'Automatización CRM y gestión de clientes'}
                    {key === 'activa' && 'Estrategias de captación y conversión de leads'}
                  </h2>
                  
                  <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-6 rounded-full"></div>
                  
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    {key === 'impulsa' && 'Construye una identidad sólida y aumenta tu visibilidad en el mercado'}
                    {key === 'conecta' && 'Establece relaciones duraderas y gestiona eficientemente tus clientes'}
                    {key === 'activa' && 'Optimiza tus procesos de venta y maximiza tu conversión'}
                  </p>
                </div>

                {/* Grid de Servicios */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {servicesByPillar[key]?.map((service) => (
                    <Card key={service.id} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group bg-white">
                      <CardHeader className="pb-4">
                        <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                          {service.icon}
                        </div>
                        <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors">
                          {service.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <CardDescription className="text-gray-600 text-base leading-relaxed">
                          {service.description}
                        </CardDescription>
                      </CardContent>
                      <CardFooter className="pt-4">
                        <Link to={service.href} className="w-full" aria-label={`Ver detalles de ${service.title}`}>
                          <Button className="w-full group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 transition-all duration-300">
                            Ver detalles
                          </Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  ))}
                </div>

                {/* CTA del Pilar */}
                <div className="text-center mt-12">
                  <Link to={pillarMeta[key].href}>
                    <Button variant="outline" size="lg" className="group">
                      Ver todas las soluciones de {pillarMeta[key].title}
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              ¿No sabes por dónde empezar?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Te ayudamos a identificar las mejores soluciones para tu negocio con una consulta estratégica gratuita
            </p>
            <Link to="/es/contacto">
              <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100">
                Solicitar consulta gratuita
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Servicios;