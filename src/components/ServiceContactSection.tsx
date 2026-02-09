import React from 'react';
import StandardGHLForm from '@/components/StandardGHLForm';

interface ServiceContactSectionProps {
  formId?: string;
  title?: string;
  subtitle?: string;
  minHeight?: number; // px
  className?: string;
}

// Contact section for service pages using the standardized GHL form design
const ServiceContactSection: React.FC<ServiceContactSectionProps> = ({
  formId = '7hfylnczt0dXbyUFFSEt',
  title = '¿Hablamos? Solicita tu propuesta',
  subtitle = 'Cuéntanos tu contexto y objetivos. Te responderemos con una propuesta alineada a tus necesidades.',
  minHeight = 820,
  className = '',
}) => {
  return (
    <section id="contacto" className={`py-20 bg-muted/30 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold font-dm-sans mb-3">{title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <StandardGHLForm
            formId={formId}
            title="Formulario de Servicio"
            minHeight={minHeight}
            showHeader={false}
          />
        </div>
      </div>
    </section>
  );
};

export default ServiceContactSection;
