import React from 'react';

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
}

interface ProcessSectionProps {
  title?: string;
  subtitle?: string;
  steps: ProcessStep[];
  backgroundColor?: string;
  showIcons?: boolean;
}

const ProcessSection: React.FC<ProcessSectionProps> = ({ 
  title = "Nuestro Proceso de Desarrollo",
  subtitle,
  steps,
  backgroundColor = "bg-gradient-to-br from-gray-50 to-white",
  showIcons = true
}) => {
  return (
    <section className={`py-16 md:py-20 ${backgroundColor}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-primary to-accent text-white text-xl font-bold mb-4">
                  {step.number}
                </div>
                {showIcons && step.icon && (
                  <div className="mb-3 flex justify-center text-primary">
                    {step.icon}
                  </div>
                )}
                <h3 className="text-lg font-bold mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent -translate-x-8"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;