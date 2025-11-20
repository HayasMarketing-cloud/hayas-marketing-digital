import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface TypographyExampleProps {
  level: 'h1' | 'h2' | 'h3' | 'h4' | 'body' | 'small';
  font: 'helvetica' | 'arimo';
  text?: string;
}

export const TypographyExample: React.FC<TypographyExampleProps> = ({
  level,
  font,
  text
}) => {
  const fontClass = font === 'helvetica' ? 'font-helvetica' : 'font-arimo';
  
  const config = {
    h1: {
      label: 'H1 - Título Principal',
      class: 'text-4xl lg:text-5xl font-bold',
      defaultText: 'Marketing Digital que Impulsa tu Negocio',
      usage: 'Títulos de página principal, hero sections'
    },
    h2: {
      label: 'H2 - Título de Sección',
      class: 'text-3xl lg:text-4xl font-bold',
      defaultText: 'Soluciones Estratégicas para Empresas',
      usage: 'Títulos de sección, bloques destacados'
    },
    h3: {
      label: 'H3 - Subtítulo',
      class: 'text-2xl lg:text-3xl font-semibold',
      defaultText: 'Captación de Leads y Conversión',
      usage: 'Subtítulos de contenido, cards de servicios'
    },
    h4: {
      label: 'H4 - Encabezado',
      class: 'text-xl lg:text-2xl font-semibold',
      defaultText: 'Automatización de Procesos',
      usage: 'Encabezados menores, títulos de cards'
    },
    body: {
      label: 'Body - Texto de Contenido',
      class: 'text-base',
      defaultText: 'En Hayas Marketing desarrollamos soluciones integrales de marketing digital que combinan estrategia, tecnología e inteligencia artificial para ayudar a empresas a alcanzar sus objetivos comerciales.',
      usage: 'Texto principal, descripciones, párrafos'
    },
    small: {
      label: 'Small - Texto Pequeño',
      class: 'text-sm',
      defaultText: 'Información complementaria y notas al pie',
      usage: 'Metadatos, fechas, disclaimers, texto auxiliar'
    }
  };

  const currentConfig = config[level];
  const displayText = text || currentConfig.defaultText;

  const renderText = () => {
    switch (level) {
      case 'h1':
        return <h1 className={`${currentConfig.class} ${fontClass}`}>{displayText}</h1>;
      case 'h2':
        return <h2 className={`${currentConfig.class} ${fontClass}`}>{displayText}</h2>;
      case 'h3':
        return <h3 className={`${currentConfig.class} ${fontClass}`}>{displayText}</h3>;
      case 'h4':
        return <h4 className={`${currentConfig.class} ${fontClass}`}>{displayText}</h4>;
      case 'body':
        return <p className={`${currentConfig.class} ${fontClass}`}>{displayText}</p>;
      case 'small':
        return <p className={`${currentConfig.class} ${fontClass} text-muted-foreground`}>{displayText}</p>;
      default:
        return <p className={fontClass}>{displayText}</p>;
    }
  };

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-6">
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <h4 className="text-sm font-semibold text-muted-foreground">{currentConfig.label}</h4>
            <code className="text-xs bg-muted px-2 py-1 rounded">{currentConfig.class}</code>
          </div>
          <p className="text-xs text-muted-foreground mb-4">
            <strong>Uso:</strong> {currentConfig.usage}
          </p>
        </div>
        
        <div className="p-4 bg-background border border-border rounded-lg">
          {renderText()}
        </div>
        
        <div className="mt-3 text-xs text-muted-foreground">
          <strong>Fuente:</strong> {font === 'helvetica' ? 'Helvetica' : 'Arimo'}
        </div>
      </CardContent>
    </Card>
  );
};
