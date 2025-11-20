import React from 'react';
import { TypographyExample } from './TypographyExample';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const TypographySection = () => {
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-3xl font-bold mb-2">Sistema Tipográfico</h2>
        <p className="text-muted-foreground">
          Jerarquía tipográfica y ejemplos de uso para mantener consistencia en todos los materiales de comunicación
        </p>
      </div>

      <Tabs defaultValue="helvetica" className="w-full">
        <TabsList className="grid w-full max-w-md grid-cols-2 mb-6">
          <TabsTrigger value="helvetica">Helvetica (Principal)</TabsTrigger>
          <TabsTrigger value="arimo">Arimo (Alternativa)</TabsTrigger>
        </TabsList>

        <TabsContent value="helvetica" className="space-y-6">
          <div className="mb-4 p-4 bg-primary/5 border border-primary/20 rounded-lg">
            <h4 className="font-semibold text-primary mb-2">✨ Tipografía Principal - Helvetica</h4>
            <p className="text-sm text-muted-foreground">
              Fuente corporativa principal. Usar en títulos, headings y textos destacados para máxima legibilidad y profesionalismo.
            </p>
          </div>

          <div className="space-y-6">
            <TypographyExample level="h1" font="helvetica" />
            <TypographyExample level="h2" font="helvetica" />
            <TypographyExample level="h3" font="helvetica" />
            <TypographyExample level="h4" font="helvetica" />
            <TypographyExample level="body" font="helvetica" />
            <TypographyExample level="small" font="helvetica" />
          </div>
        </TabsContent>

        <TabsContent value="arimo" className="space-y-6">
          <div className="mb-4 p-4 bg-secondary/5 border border-secondary/20 rounded-lg">
            <h4 className="font-semibold text-secondary mb-2">📝 Tipografía Alternativa - Arimo</h4>
            <p className="text-sm text-muted-foreground">
              Fuente alternativa para casos específicos donde se requiera mayor diferenciación o licencias abiertas.
            </p>
          </div>

          <div className="space-y-6">
            <TypographyExample level="h1" font="arimo" />
            <TypographyExample level="h2" font="arimo" />
            <TypographyExample level="h3" font="arimo" />
            <TypographyExample level="h4" font="arimo" />
            <TypographyExample level="body" font="arimo" />
            <TypographyExample level="small" font="arimo" />
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-8 p-4 bg-muted/50 rounded-lg border border-border">
        <h4 className="font-semibold mb-3">📏 Directrices Tipográficas</h4>
        <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
          <div>
            <h5 className="font-semibold text-foreground mb-2">Tamaños Responsivos</h5>
            <ul className="space-y-1 list-disc list-inside">
              <li>H1: 36px → 48px (móvil → desktop)</li>
              <li>H2: 30px → 36px</li>
              <li>H3: 24px → 30px</li>
              <li>H4: 20px → 24px</li>
              <li>Body: 16px (base)</li>
              <li>Small: 14px</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-foreground mb-2">Mejores Prácticas</h5>
            <ul className="space-y-1 list-disc list-inside">
              <li>Interlineado mínimo: 1.5 para texto body</li>
              <li>Máximo 75 caracteres por línea</li>
              <li>Contraste mínimo WCAG AA (4.5:1)</li>
              <li>Usar pesos: Regular (400) y Bold (700)</li>
              <li>Evitar más de 3 niveles jerárquicos visibles</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
