import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, GraduationCap } from 'lucide-react';

const MethodologySection: React.FC = () => {
  return (
    <section id="metodologia" aria-label="Metodología de trabajo" className="w-full bg-muted/50">
      <div className="container mx-auto max-w-7xl px-6 py-20">
        <header className="mb-10 text-center">
          <p className="mb-2 text-xs font-medium tracking-widest text-muted-foreground uppercase">
            Metodología de trabajo
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
            Cómo trabajamos: servicio gestionado vs. consultoría
          </h2>
          <p className="mt-3 text-base md:text-lg text-muted-foreground">
            Elige la modalidad que mejor se adapta a tu momento: ejecución continua o acompañamiento estratégico.
          </p>
        </header>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
          <article className="animate-fade-in">
            <Card className="h-full">
              <CardHeader className="flex-row items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Briefcase className="h-6 w-6" aria-hidden="true" />
                </div>
                <CardTitle className="text-xl">Servicio gestionado</CardTitle>
              </CardHeader>
              <CardContent className="pt-2">
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  <li>Equipo especialista operando tu marketing día a día.</li>
                  <li>Plan, ejecución y optimización continua orientada a resultados.</li>
                  <li>KPI y reporting mensual con foco en negocio.</li>
                  <li>Ideal para acelerar crecimiento con un partner experto.</li>
                </ul>
              </CardContent>
            </Card>
          </article>

          <article className="animate-fade-in">
            <Card className="h-full">
              <CardHeader className="flex-row items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/20 text-accent-foreground">
                  <GraduationCap className="h-6 w-6" aria-hidden="true" />
                </div>
                <CardTitle className="text-xl">Consultoría y formación</CardTitle>
              </CardHeader>
              <CardContent className="pt-2">
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  <li>Acompañamiento estratégico y transferencia de conocimiento.</li>
                  <li>Talleres, playbooks y sesiones 1:1 para tu equipo.</li>
                  <li>Implementación con vuestro equipo y gobernanza clara.</li>
                  <li>Ideal para equipos internos que quieren escalar capacidades.</li>
                </ul>
              </CardContent>
            </Card>
          </article>
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          Integración con CRM e IA de apoyo (SofÍA) en ambas modalidades.
        </p>
      </div>
    </section>
  );
};

export default MethodologySection;
