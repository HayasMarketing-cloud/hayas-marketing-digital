import React from 'react';
import { Check, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useLocalizedRoutes } from '@/hooks/useLocalizedRoutes';
import { useLanguage } from '@/contexts/LanguageContext';

const WhyChooseUsSection = () => {
  const { getRoute } = useLocalizedRoutes();
  const { isEnglish } = useLanguage();

  const reasons = isEnglish ? [
    { id: 1, title: "Strategic and human approach", description: "Automation with intention, centered on people." },
    { id: 2, title: "Full customization", description: "Every tool adapts to each client's specific needs." },
    { id: 3, title: "Measurable results", description: "Clear impact on efficiency, conversion, and user experience." },
    { id: 4, title: "Agile integration", description: "Compatible with HubSpot, Gmail, WhatsApp, ClickUp, and more." },
    { id: 5, title: "Ethical and innovative vision", description: "AI at the service of people, not the other way around." }
  ] : [
    { id: 1, title: "Enfoque estratégico y humano", description: "Automatización con intención, centrada en personas." },
    { id: 2, title: "Personalización total", description: "Cada herramienta se adapta a las necesidades específicas del cliente." },
    { id: 3, title: "Resultados medibles", description: "Impacto claro en eficiencia, conversión y experiencia del usuario." },
    { id: 4, title: "Integración ágil", description: "Compatibles con HubSpot, Gmail, WhatsApp, ClickUp y más plataformas." },
    { id: 5, title: "Visión ética e innovadora", description: "IA al servicio de las personas, no al revés." }
  ];

  const stats = isEnglish ? [
    { value: "+40%", label: "Process efficiency" },
    { value: "+30%", label: "Conversion rate" },
    { value: "-25%", label: "Response time" },
    { value: "+60%", label: "Client satisfaction" }
  ] : [
    { value: "+40%", label: "Eficiencia en procesos" },
    { value: "+30%", label: "Tasa de conversión" },
    { value: "-25%", label: "Tiempo de respuesta" },
    { value: "+60%", label: "Satisfacción cliente" }
  ];

  return (
    <section className="section-normal bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {isEnglish ? "Why choose our solutions?" : "¿Por qué elegir nuestras soluciones?"}
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              {isEnglish 
                ? "Our commitment is to create tools that don't just automate processes, but truly transform the way you connect with your customers."
                : "Nuestro compromiso es crear herramientas que no solo automatizan procesos, sino que realmente transforman la manera en que conectas con tus clientes."}
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
              <Link to={getRoute('scheduleMeeting')}>
                {isEnglish ? "Request a Consultation" : "Solicitar Consulta"}
              </Link>
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
                <h3 className="text-2xl font-bold mb-2">
                  {isEnglish ? "Real impact on your business" : "Impacto real en tu negocio"}
                </h3>
                <p className="text-gray-600">
                  {isEnglish ? "Our clients experience:" : "Nuestros clientes experimentan:"}
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, i) => (
                  <div key={i} className={`text-center p-4 rounded-lg bg-gradient-to-br ${i % 2 === 0 ? 'from-soft-purple/20' : 'from-primary/20'} to-white`}>
                    <h4 className="text-secondary font-bold text-4xl">{stat.value}</h4>
                    <p className="text-gray-600">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
