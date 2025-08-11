import React from 'react';
import GHLFormEmbed from '@/components/GHLFormEmbed';

interface ServiceContactSectionProps {
  formId?: string;
  title?: string;
  subtitle?: string;
  minHeight?: number; // px
  className?: string;
}

// Contact section for service pages using the shared GHL form embed
const ServiceContactSection: React.FC<ServiceContactSectionProps> = ({
  formId = 'ZHNw4rjAzNdvFbFnIk1V',
  title = '¿Hablamos? Solicita tu propuesta',
  subtitle = 'Cuéntanos tu contexto y objetivos. Te responderemos con una propuesta alineada a tus necesidades.',
  minHeight = 820,
  className = '',
}) => {
  return (
    <section id="contacto" className={`py-20 bg-muted/30 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold mb-3">{title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <GHLFormEmbed
          formId={formId}
          title="Formulario de Servicio"
          minHeight={minHeight}
          className="bg-card"
        />
      </div>
    </section>
  );
};

export default ServiceContactSection;
