import React from 'react';
import { ColorCard } from './ColorCard';

export const ColorPalette = () => {
  const primaryColors = [
    {
      name: 'Hayas Verde',
      hex: '#4D9A00',
      tailwindClass: 'bg-hayas-500 / text-hayas-500',
      usage: 'Color principal de marca, botones primarios, acentos importantes',
      colorFamily: 'hayas'
    },
    {
      name: 'Hayas Verde Oscuro',
      hex: '#3a7300',
      tailwindClass: 'bg-hayas-700 / text-hayas-700',
      usage: 'Hover states, textos destacados, fondos oscuros',
      colorFamily: 'hayas'
    },
    {
      name: 'Hayas Verde Claro',
      hex: '#daecc0',
      tailwindClass: 'bg-hayas-100 / text-hayas-100',
      usage: 'Fondos suaves, highlights, estados informativos',
      colorFamily: 'hayas'
    }
  ];

  const secondaryColors = [
    {
      name: 'Turquesa',
      hex: '#04725A',
      tailwindClass: 'bg-secondary / text-secondary',
      usage: 'Color secundario, elementos de apoyo, iconos',
      colorFamily: 'turquesa'
    },
    {
      name: 'Azul Corporativo',
      hex: '#00467E',
      tailwindClass: 'bg-primary / text-primary',
      usage: 'Enlaces, elementos interactivos, headers',
      colorFamily: 'tertiary'
    }
  ];

  const solutionColors = [
    {
      name: 'Impulsa (Púrpura)',
      hex: '#9333ea',
      tailwindClass: 'bg-impulsa-500 / text-impulsa-500',
      usage: 'Soluciones de marketing y visibilidad',
      colorFamily: 'impulsa'
    },
    {
      name: 'Conecta (Azul)',
      hex: '#2563eb',
      tailwindClass: 'bg-conecta-500 / text-conecta-500',
      usage: 'Soluciones de gestión de clientes',
      colorFamily: 'conecta'
    },
    {
      name: 'Activa (Verde)',
      hex: '#16a34a',
      tailwindClass: 'bg-activa-500 / text-activa-500',
      usage: 'Soluciones de IA y automatización',
      colorFamily: 'activa'
    }
  ];

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-3xl font-bold mb-2">Paleta de Colores Corporativos</h2>
        <p className="text-muted-foreground">
          Sistema de colores oficial de Hayas Marketing para mantener la coherencia visual en todos los puntos de contacto
        </p>
      </div>

      {/* Colores Primarios */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          <div className="w-1 h-6 bg-hayas-500 rounded" />
          Colores Primarios
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {primaryColors.map((color) => (
            <ColorCard key={color.hex} {...color} />
          ))}
        </div>
      </div>

      {/* Colores Secundarios */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          <div className="w-1 h-6 bg-secondary rounded" />
          Colores Secundarios
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {secondaryColors.map((color) => (
            <ColorCard key={color.hex} {...color} />
          ))}
        </div>
      </div>

      {/* Colores por Solución */}
      <div>
        <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          <div className="w-1 h-6 bg-gradient-to-b from-impulsa-500 via-conecta-500 to-activa-500 rounded" />
          Colores por Solución
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutionColors.map((color) => (
            <ColorCard key={color.hex} {...color} />
          ))}
        </div>
      </div>
    </div>
  );
};
