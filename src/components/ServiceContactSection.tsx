import React from 'react';
import NativeServiceForm from '@/components/NativeServiceForm';

interface ServiceContactSectionProps {
  title?: string;
  subtitle?: string;
  className?: string;
  sourcePage?: string;
}

const ServiceContactSection: React.FC<ServiceContactSectionProps> = ({
  title = '¿Hablamos? Solicita tu propuesta',
  subtitle = 'Cuéntanos tu contexto y objetivos. Te responderemos con una propuesta alineada a tus necesidades.',
  className = '',
  sourcePage = '',
}) => {
  return (
    <section id="contacto" className={`py-20 gradient-soft ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold font-dm-sans mb-3">{title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <NativeServiceForm sourcePage={sourcePage} />
        </div>
      </div>
    </section>
  );
};

export default ServiceContactSection;
