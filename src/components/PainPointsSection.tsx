import React from 'react';
import { AlertTriangle, Clock, Search, TrendingDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const PainPointsSection: React.FC = () => {
  const { isEnglish } = useLanguage();

  const painPoints = [
    {
      icon: <Clock className="h-12 w-12 text-red-500" />,
      title: isEnglish ? "Slow website" : "Web lenta",
      description: isEnglish
        ? "Your current website takes more than 5 seconds to load, losing visitors and sales."
        : "Tu sitio web actual tarda más de 5 segundos en cargar, perdiendo visitantes y ventas."
    },
    {
      icon: <AlertTriangle className="h-12 w-12 text-orange-500" />,
      title: isEnglish ? "Outdated design" : "Diseño anticuado",
      description: isEnglish
        ? "An obsolete design conveys a lack of professionalism and drives away potential customers."
        : "Un diseño obsoleto transmite falta de profesionalidad y aleja a potenciales clientes."
    },
    {
      icon: <Search className="h-12 w-12 text-blue-500" />,
      title: isEnglish ? "Invisible on search and AI" : "Invisible en buscadores e IAs",
      description: isEnglish
        ? "Without an SEO, AEO and GEO strategy, your website doesn't appear on Google or in AI answers from ChatGPT, Copilot or Perplexity."
        : "Sin una estrategia SEO, AEO y GEO, tu web no aparece ni en Google ni en las respuestas de ChatGPT, Copilot o Perplexity."
    },
    {
      icon: <TrendingDown className="h-12 w-12 text-purple-500" />,
      title: isEnglish ? "No integrations" : "Sin integraciones",
      description: isEnglish
        ? "Leads get lost because your website is not connected to a CRM, analytics or automation tools."
        : "Los leads se pierden porque tu web no está conectada con un CRM, analítica ni herramientas de automatización."
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-red-50/30 via-orange-50/20 to-yellow-50/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {isEnglish
              ? <>Is your current website <span className="text-red-600">holding you back</span>?</>
              : <>¿Tu web actual te está <span className="text-red-600">frenando</span>?</>
            }
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {isEnglish
              ? "These common problems are costing you customers and business opportunities every day."
              : "Estos problemas comunes están costándote clientes y oportunidades de negocio cada día."}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {painPoints.map((point, index) => (
            <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="mb-6 flex justify-center">
                <div className="p-4 rounded-full bg-white shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  {point.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{point.title}</h3>
              <p className="text-gray-600 leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-md">
            <AlertTriangle className="h-5 w-5 text-orange-500" />
            <span className="text-gray-700 font-medium">
              {isEnglish
                ? "Every day without a professional website is a lost opportunity"
                : "Cada día que pasa sin una web profesional es una oportunidad perdida"}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;
