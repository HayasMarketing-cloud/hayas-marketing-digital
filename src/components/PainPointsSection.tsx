import React from 'react';
import { AlertTriangle, Clock, Search, TrendingDown } from 'lucide-react';

const painPoints = [
  {
    icon: <Clock className="h-12 w-12 text-red-500" />,
    title: "Web Lenta",
    description: "Tu sitio web actual tarda más de 5 segundos en cargar, perdiendo visitantes y ventas."
  },
  {
    icon: <AlertTriangle className="h-12 w-12 text-orange-500" />,
    title: "Diseño Anticuado",
    description: "Un diseño obsoleto transmite falta de profesionalidad y aleja a potenciales clientes."
  },
  {
    icon: <Search className="h-12 w-12 text-blue-500" />,
    title: "No Aparece en Google",
    description: "Sin SEO técnico tu web es invisible en los motores de búsqueda, perdiendo oportunidades."
  },
  {
    icon: <TrendingDown className="h-12 w-12 text-purple-500" />,
    title: "Baja Conversión",
    description: "Los visitantes llegan pero no se convierten en leads o clientes por problemas de usabilidad."
  }
];

const PainPointsSection: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-red-50/30 via-orange-50/20 to-yellow-50/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Tu Web Actual te está <span className="text-red-600">Frenando</span>?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Estos problemas comunes están costándote clientes y oportunidades de negocio cada día.
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
              Cada día que pasa sin una web profesional es una oportunidad perdida
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;