import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const TypographyPlayground = () => {
  return (
    <>
      <Helmet>
        <title>Typography Playground | Hayas Marketing</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-10">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-semibold text-foreground">Typography Playground</h1>
                <p className="text-sm text-muted-foreground">Prueba de combinaciones tipográficas editoriales</p>
              </div>
              <Link to="/es">
                <Button variant="outline" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Volver
                </Button>
              </Link>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 py-12 space-y-16">
          {/* Principio rector */}
          <section className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-muted-foreground italic">
              "La tipografía no debe llamar la atención. Debe sostener el pensamiento."
            </p>
            <p className="text-sm text-muted-foreground mt-2">— Principio rector</p>
          </section>

          {/* OPCIÓN A: Inter + Fraunces */}
          <section className="space-y-8">
            <div className="flex items-center gap-4">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold">A</span>
              <div>
                <h2 className="text-xl font-semibold text-foreground">Inter + Fraunces</h2>
                <p className="text-sm text-muted-foreground">Editorial serena — Recomendada</p>
              </div>
            </div>

            <Card className="overflow-hidden">
              <CardContent className="p-0">
                {/* Hero simulado */}
                <div className="bg-gradient-to-br from-background via-muted/30 to-background p-12 lg:p-16 text-center space-y-6">
                  <h1 className="font-fraunces text-4xl lg:text-6xl font-semibold text-foreground leading-tight">
                    El marketing ha cambiado.
                  </h1>
                  <p className="font-inter text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
                    Tu estrategia también debería. Combinamos tecnología, datos e inteligencia artificial para crear soluciones que realmente funcionan.
                  </p>
                </div>

                <Separator />

                {/* Sección editorial */}
                <div className="p-8 lg:p-12 space-y-8">
                  <h2 className="font-fraunces text-3xl lg:text-4xl font-semibold text-foreground">
                    Soluciones que crecen contigo
                  </h2>
                  
                  <p className="font-inter text-base text-muted-foreground leading-relaxed max-w-3xl">
                    En Hayas Marketing desarrollamos estrategias integrales que combinan branding, tecnología y automatización. No vendemos servicios genéricos. Resolvemos problemas reales con soluciones medibles.
                  </p>

                  {/* Frase manifiesto */}
                  <blockquote className="border-l-4 border-primary pl-6 py-4 my-8">
                    <p className="font-fraunces text-2xl lg:text-3xl text-foreground italic leading-relaxed">
                      "No vendemos servicios. Resolvemos problemas."
                    </p>
                  </blockquote>

                  {/* Cards de ejemplo */}
                  <div className="grid md:grid-cols-3 gap-6 pt-4">
                    {['Impulsa tu marca', 'Conecta con tus clientes', 'Activa tus ventas'].map((title, i) => (
                      <div key={i} className="p-6 rounded-xl border border-border bg-card hover:shadow-lg transition-shadow">
                        <h3 className="font-fraunces text-xl font-semibold text-foreground mb-2">{title}</h3>
                        <p className="font-inter text-sm text-muted-foreground">
                          Estrategias personalizadas para cada etapa del customer journey.
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Info técnica */}
            <div className="flex flex-wrap gap-4 text-sm">
              <code className="px-3 py-1 bg-muted rounded">font-fraunces</code>
              <span className="text-muted-foreground">→ H1, H2, frases manifiesto, titulares editoriales</span>
            </div>
          </section>

          <Separator className="my-12" />

          {/* OPCIÓN B: Inter + DM Sans */}
          <section className="space-y-8">
            <div className="flex items-center gap-4">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-secondary text-secondary-foreground font-bold">B</span>
              <div>
                <h2 className="text-xl font-semibold text-foreground">Inter + DM Sans</h2>
                <p className="text-sm text-muted-foreground">Humanista contemporánea — Equilibrada</p>
              </div>
            </div>

            <Card className="overflow-hidden">
              <CardContent className="p-0">
                {/* Hero simulado */}
                <div className="bg-gradient-to-br from-background via-muted/30 to-background p-12 lg:p-16 text-center space-y-6">
                  <h1 className="font-dm-sans text-4xl lg:text-6xl font-semibold text-foreground leading-tight">
                    El marketing ha cambiado.
                  </h1>
                  <p className="font-inter text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
                    Tu estrategia también debería. Combinamos tecnología, datos e inteligencia artificial para crear soluciones que realmente funcionan.
                  </p>
                </div>

                <Separator />

                {/* Sección editorial */}
                <div className="p-8 lg:p-12 space-y-8">
                  <h2 className="font-dm-sans text-3xl lg:text-4xl font-semibold text-foreground">
                    Soluciones que crecen contigo
                  </h2>
                  
                  <p className="font-inter text-base text-muted-foreground leading-relaxed max-w-3xl">
                    En Hayas Marketing desarrollamos estrategias integrales que combinan branding, tecnología y automatización. No vendemos servicios genéricos. Resolvemos problemas reales con soluciones medibles.
                  </p>

                  {/* Frase manifiesto */}
                  <blockquote className="border-l-4 border-secondary pl-6 py-4 my-8">
                    <p className="font-dm-sans text-2xl lg:text-3xl text-foreground italic leading-relaxed">
                      "No vendemos servicios. Resolvemos problemas."
                    </p>
                  </blockquote>

                  {/* Cards de ejemplo */}
                  <div className="grid md:grid-cols-3 gap-6 pt-4">
                    {['Impulsa tu marca', 'Conecta con tus clientes', 'Activa tus ventas'].map((title, i) => (
                      <div key={i} className="p-6 rounded-xl border border-border bg-card hover:shadow-lg transition-shadow">
                        <h3 className="font-dm-sans text-xl font-semibold text-foreground mb-2">{title}</h3>
                        <p className="font-inter text-sm text-muted-foreground">
                          Estrategias personalizadas para cada etapa del customer journey.
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Info técnica */}
            <div className="flex flex-wrap gap-4 text-sm">
              <code className="px-3 py-1 bg-muted rounded">font-dm-sans</code>
              <span className="text-muted-foreground">→ H1, H2, secciones clave</span>
            </div>
          </section>

          <Separator className="my-12" />

          {/* Comparativa lado a lado */}
          <section className="space-y-8">
            <h2 className="text-2xl font-semibold text-foreground text-center">Comparativa directa</h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Fraunces */}
              <Card>
                <CardContent className="p-8 space-y-4">
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Fraunces (Serif)</span>
                  <h3 className="font-fraunces text-3xl font-semibold text-foreground">Marketing has changed.</h3>
                  <p className="font-inter text-muted-foreground">Serif moderna, suave y orgánica. No es clásica ni corporativa. Tiene personalidad sin imponerse.</p>
                  <div className="pt-4 space-y-2 text-sm">
                    <p className="font-fraunces text-xl text-foreground">Aa Bb Cc Dd Ee Ff Gg</p>
                    <p className="font-fraunces text-lg text-foreground">1234567890</p>
                  </div>
                </CardContent>
              </Card>

              {/* DM Sans */}
              <Card>
                <CardContent className="p-8 space-y-4">
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">DM Sans (Sans-serif)</span>
                  <h3 className="font-dm-sans text-3xl font-semibold text-foreground">Marketing has changed.</h3>
                  <p className="font-inter text-muted-foreground">Humana, abierta, calmada. No es tecnológica ni corporativa dura. Mantiene coherencia visual total.</p>
                  <div className="pt-4 space-y-2 text-sm">
                    <p className="font-dm-sans text-xl text-foreground">Aa Bb Cc Dd Ee Ff Gg</p>
                    <p className="font-dm-sans text-lg text-foreground">1234567890</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Reglas de aplicación */}
          <section className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-2xl font-semibold text-foreground">Reglas de aplicación</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-destructive/20">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-destructive mb-3">NO hacer</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Mezclar más de 2 tipografías</li>
                    <li>• Usar serif para body text</li>
                    <li>• Cambiar botones o UI base</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-primary/20">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-primary mb-3">SÍ hacer</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Mantener Inter como columna vertebral</li>
                    <li>• Usar la segunda fuente solo donde importa</li>
                    <li>• Mucho aire, tamaños generosos, interlineado amplio</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default TypographyPlayground;
