import React from 'react';
import { LogoCard } from './LogoCard';

export const LogoSection = () => {
  const logos = [
    {
      name: 'Logo Principal Hayas',
      path: '/lovable-uploads/hayas-logo.png',
      description: 'Logotipo principal de Hayas Marketing. Usar en headers, firmas de email y materiales oficiales.'
    },
    {
      name: 'Logo Partner HighLevel',
      path: '/lovable-uploads/highlevel-logo.png',
      description: 'Logo de partner tecnológico. Usar en secciones de CRM y herramientas de automatización.'
    }
  ];

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-3xl font-bold mb-2">Logotipos Corporativos</h2>
        <p className="text-muted-foreground">
          Recursos gráficos oficiales de la marca. Mantener proporciones y espaciado de seguridad al usar los logos.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {logos.map((logo) => (
          <LogoCard key={logo.path} {...logo} />
        ))}
      </div>

      <div className="mt-6 p-4 bg-muted/50 rounded-lg border border-border">
        <h4 className="font-semibold mb-2">📌 Directrices de uso</h4>
        <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
          <li>Mantener siempre el espacio de seguridad equivalente a la altura de la "H" del logo</li>
          <li>No modificar colores, proporciones o elementos del logo</li>
          <li>Usar sobre fondos que garanticen legibilidad (mínimo contraste WCAG AA)</li>
          <li>Tamaño mínimo recomendado: 120px de ancho para web, 30mm para impresión</li>
        </ul>
      </div>
    </div>
  );
};
