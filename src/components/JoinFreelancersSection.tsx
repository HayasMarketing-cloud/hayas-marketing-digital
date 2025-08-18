import React from "react";
import { Card } from "@/components/ui/card";
import GHLFormEmbed from "@/components/GHLFormEmbed";
const JoinFreelancersSection: React.FC = () => {
  return <section id="unete-freelance" className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient-primary">
              ¿Eres profesional freelance en marketing o martech?
            </h2>
            <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
              En Hayas Marketing colaboramos con especialistas para proyectos por demanda.
              Si trabajas en marketing digital, contenidos, paid media, SEO, CRM (GHL/HubSpot),
              automatización o desarrollo web, nos encantará conocerte.
            </p>
            <ul className="space-y-3 text-gray-700 max-w-2xl mx-auto text-left">
              <li className="flex items-start gap-3"><span className="text-hayas-primary">•</span> Proyectos según tu especialidad y disponibilidad</li>
              <li className="flex items-start gap-3"><span className="text-hayas-primary">•</span> Colaboraciones transparentes y de largo plazo</li>
              <li className="flex items-start gap-3"><span className="text-hayas-primary">•</span> Enfoque estratégico y herramientas de trabajo eficientes</li>
            </ul>
          </div>

          <div className="relative">
            <h3 className="text-2xl font-semibold mb-6 text-hayas-primary text-center">¡Unete a nuestro equipo!</h3>
            <GHLFormEmbed formId="Jm7egbHEB8NN1jqNNtk5" title="Solicitud colaboradores" className="shadow-corporate border border-gray-100" minHeight={939} />
          </div>
        </div>
      </div>
    </section>;
};
export default JoinFreelancersSection;