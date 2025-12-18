import React from 'react';
import { TypographyExample } from './TypographyExample';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const TypographySection = () => {
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-3xl font-bold font-dm-sans mb-2">Sistema Tipográfico</h2>
        <p className="text-muted-foreground">
          Jerarquía tipográfica dual: DM Sans para títulos e Inter para cuerpo de texto y UI
        </p>
      </div>

      <Tabs defaultValue="dm-sans" className="w-full">
        <TabsList className="grid w-full max-w-md grid-cols-2 mb-6">
          <TabsTrigger value="dm-sans">DM Sans (Títulos)</TabsTrigger>
          <TabsTrigger value="inter">Inter (Body/UI)</TabsTrigger>
        </TabsList>

        <TabsContent value="dm-sans" className="space-y-6">
          <div className="mb-4 p-4 bg-primary/5 border border-primary/20 rounded-lg">
            <h4 className="font-semibold font-dm-sans text-primary mb-2">✨ Tipografía de Títulos - DM Sans</h4>
            <p className="text-sm text-muted-foreground">
              Fuente para todos los títulos y headings (H1, H2, H3, H4). Transmite profesionalismo con un toque distintivo y moderno.
            </p>
          </div>

          <div className="space-y-6">
            <TypographyExample level="h1" font="dm-sans" />
            <TypographyExample level="h2" font="dm-sans" />
            <TypographyExample level="h3" font="dm-sans" />
            <TypographyExample level="h4" font="dm-sans" />
          </div>
        </TabsContent>

        <TabsContent value="inter" className="space-y-6">
          <div className="mb-4 p-4 bg-secondary/5 border border-secondary/20 rounded-lg">
            <h4 className="font-semibold text-secondary mb-2">📝 Tipografía de Cuerpo - Inter</h4>
            <p className="text-sm text-muted-foreground">
              Fuente para texto de contenido, UI, navegación y botones. Máxima legibilidad en pantalla y versatilidad.
            </p>
          </div>

          <div className="space-y-6">
            <TypographyExample level="body" font="inter" />
            <TypographyExample level="small" font="inter" />
            <TypographyExample level="ui" font="inter" />
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-8 p-4 bg-muted/50 rounded-lg border border-border">
        <h4 className="font-semibold font-dm-sans mb-3">📏 Directrices Tipográficas</h4>
        <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
          <div>
            <h5 className="font-semibold font-dm-sans text-foreground mb-2">Tamaños Responsivos</h5>
            <ul className="space-y-1 list-disc list-inside">
              <li>H1: 36px → 48px (móvil → desktop) - DM Sans Bold</li>
              <li>H2: 30px → 36px - DM Sans Bold</li>
              <li>H3: 24px → 30px - DM Sans Semibold</li>
              <li>H4: 20px → 24px - DM Sans Semibold</li>
              <li>Body: 16px (base) - Inter Regular</li>
              <li>Small: 14px - Inter Regular</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold font-dm-sans text-foreground mb-2">Reglas de Uso</h5>
            <ul className="space-y-1 list-disc list-inside">
              <li><strong>DM Sans:</strong> Títulos H1-H4, badges, frases destacadas</li>
              <li><strong>Inter:</strong> Body text, navegación, botones, UI</li>
              <li>Interlineado mínimo: 1.5 para texto body</li>
              <li>Contraste mínimo WCAG AA (4.5:1)</li>
              <li>No mezclar más de estas 2 tipografías</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
