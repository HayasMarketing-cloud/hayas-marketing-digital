
import React from 'react';
import { Check, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const reasons = [
  {
    id: 1,
    title: "Enfoque estratégico y humano",
    description: "Automatización con intención, centrada en personas."
  },
  {
    id: 2,
    title: "Personalización total",
    description: "Cada herramienta se adapta a las necesidades específicas del cliente."
  },
  {
    id: 3,
    title: "Resultados medibles",
    description: "Impacto claro en eficiencia, conversión y experiencia del usuario."
  },
  {
    id: 4,
    title: "Integración ágil",
    description: "Compatibles con HubSpot, Gmail, WhatsApp, ClickUp y más plataformas."
  },
  {
    id: 5,
    title: "Visión ética e innovadora",
    description: "IA al servicio de las personas, no al revés."
  }
];

const WhyChooseUsSection = () => {
  return (
    <section className="section-normal bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Por qué elegir nuestras soluciones?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Nuestro compromiso es crear herramientas que no solo automatizan procesos, sino que realmente transforman la manera en que conectas con tus clientes.
            </p>
            
            <div className="space-y-4 mb-8">
              {reasons.map((reason) => (
                <div key={reason.id} className="flex items-start">
                  <div className="mt-1 mr-4 h-6 w-6 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">{reason.title}</h3>
                    <p className="text-gray-600">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <Button asChild className="gradient-primary text-white hover-scale">
              <Link to="/agendar-reunion">Solicitar Consulta</Link>
            </Button>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="absolute inset-0 bg-soft-purple rounded-xl blur-xl opacity-30"></div>
            <div className="relative bg-white p-8 rounded-xl shadow-xl border border-gray-100">
              <div className="text-center mb-8">
                <div className="inline-block p-3 bg-soft-purple/20 rounded-full mb-4">
                  <div className="bg-gradient-to-r from-secondary to-primary h-16 w-16 rounded-full flex items-center justify-center">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2">Impacto real en tu negocio</h3>
                <p className="text-gray-600">Nuestros clientes experimentan:</p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 rounded-lg bg-gradient-to-br from-soft-purple/20 to-white">
                  <h4 className="text-secondary font-bold text-4xl">+40%</h4>
                  <p className="text-gray-600">Eficiencia en procesos</p>
                </div>
                <div className="text-center p-4 rounded-lg bg-gradient-to-br from-primary/20 to-white">
                  <h4 className="text-secondary font-bold text-4xl">+30%</h4>
                  <p className="text-gray-600">Tasa de conversión</p>
                </div>
                <div className="text-center p-4 rounded-lg bg-gradient-to-br from-primary/20 to-white">
                  <h4 className="text-secondary font-bold text-4xl">-25%</h4>
                  <p className="text-gray-600">Tiempo de respuesta</p>
                </div>
                <div className="text-center p-4 rounded-lg bg-gradient-to-br from-soft-purple/20 to-white">
                  <h4 className="text-secondary font-bold text-4xl">+60%</h4>
                  <p className="text-gray-600">Satisfacción cliente</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
