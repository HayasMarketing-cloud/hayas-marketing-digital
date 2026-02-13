import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Shield, Smartphone, BarChart3 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const SolutionPreviewSection: React.FC = () => {
  const { isEnglish } = useLanguage();

  const features = [
    {
      icon: <Zap className="h-5 w-5" />,
      text: isEnglish ? "Loads in under 3 seconds" : "Carga en menos de 3 segundos"
    },
    {
      icon: <Shield className="h-5 w-5" />,
      text: isEnglish ? "Security and automatic backups" : "Seguridad y respaldos automáticos"
    },
    {
      icon: <Smartphone className="h-5 w-5" />,
      text: isEnglish ? "100% responsive and mobile-first" : "100% responsive y móvil-first"
    },
    {
      icon: <BarChart3 className="h-5 w-5" />,
      text: isEnglish ? "SEO optimized for Google" : "SEO optimizado para Google"
    }
  ];

  const meetingLink = isEnglish ? '/en/schedule-meeting' : '/es/agendar-reunion';

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-primary/5 via-white to-accent/5">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {isEnglish
                ? <>Our <span className="text-gradient-primary">solution</span>: websites that convert visitors into customers</>
                : <>Nuestra <span className="text-gradient-primary">solución</span>: webs que convierten visitantes en clientes</>
              }
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {isEnglish
                ? "We develop professional websites that combine exceptional design, advanced technology and conversion strategy to grow your business."
                : "Desarrollamos sitios web profesionales que combinan diseño excepcional, tecnología avanzada y estrategia de conversión para hacer crecer tu negocio."}
            </p>
            
            <div className="grid grid-cols-1 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                    {feature.icon}
                  </div>
                  <span className="text-gray-700 font-medium">{feature.text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gradient-primary text-white" asChild>
                <Link to={meetingLink}>
                  {isEnglish ? "See how it works" : "Ver cómo funciona"}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="#casos-exito">{isEnglish ? "Success stories" : "Casos de éxito"}</Link>
              </Button>
            </div>
          </div>
          
          <div className="relative">
            {/* Modern website mockup */}
            <div className="bg-white rounded-2xl shadow-2xl p-6 border border-gray-100">
              {/* Browser header */}
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <div className="flex-1 bg-gray-100 rounded ml-4 h-6 flex items-center px-3">
                  <span className="text-xs text-gray-500">{isEnglish ? "https://your-new-website.com" : "https://tu-nueva-web.com"}</span>
                </div>
              </div>
              
              {/* Website content mockup */}
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-primary to-accent rounded-lg p-6 text-white">
                  <div className="h-4 bg-white/30 rounded w-3/4 mb-2"></div>
                  <div className="h-6 bg-white/50 rounded w-1/2 mb-4"></div>
                  <div className="h-8 bg-white rounded w-32"></div>
                </div>
                
                <div className="grid grid-cols-3 gap-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="bg-gray-50 rounded-lg p-4 text-center">
                      <div className={`w-8 h-8 ${i % 2 === 0 ? 'bg-accent/20' : 'bg-primary/20'} rounded-full mx-auto mb-2`}></div>
                      <div className="h-2 bg-gray-200 rounded mb-1"></div>
                      <div className="h-2 bg-gray-200 rounded w-2/3 mx-auto"></div>
                    </div>
                  ))}
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="h-3 bg-gray-300 rounded w-1/3 mx-auto mb-3"></div>
                  <div className="h-8 bg-primary rounded w-24 mx-auto"></div>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-4 -right-4 bg-green-500 text-white p-3 rounded-full shadow-lg">
              <div className="text-center">
                <div className="text-xs font-bold">98</div>
                <div className="text-xs">Speed</div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-blue-500 text-white p-3 rounded-full shadow-lg">
              <div className="text-center">
                <div className="text-xs font-bold">SEO</div>
                <div className="text-xs">100%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionPreviewSection;
