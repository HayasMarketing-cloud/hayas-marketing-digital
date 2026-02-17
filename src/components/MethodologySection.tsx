import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { BrainCircuit, GraduationCap, Users, Database, Calendar, Zap, Star } from 'lucide-react';
const MethodologySection: React.FC = () => {
  return (
    <section id="metodologia" aria-label="Modelos de colaboración y metodología de trabajo" className="w-full bg-muted/50 scroll-mt-24">
      <div className="container mx-auto max-w-7xl px-6 section-normal">
        {/* Header */}
        <header className="mb-12 text-center">
          <p className="mb-2 text-xs font-medium tracking-widest text-muted-foreground uppercase">
            Modelos de colaboración y metodología de trabajo
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold font-dm-sans text-foreground">
            Diseñamos contigo la mejor forma de avanzar
          </h2>
          <p className="mt-3 text-base md:text-lg text-muted-foreground">
            Elige la modalidad que mejor se adapta a tu momento: ejecución continua o acompañamiento estratégico.
          </p>
        </header>

        {/* Modalidades de colaboración - Primera fila */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 mb-8">
          {/* Contratación de servicio/s */}
          <article className="animate-fade-in">
            <Card className="h-full">
              <CardHeader className="flex-row items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-impulsa/20 text-impulsa">
                  <BrainCircuit className="h-6 w-6" aria-hidden="true" />
                </div>
                <CardTitle className="text-lg">Contratación solución Marketing SENSE</CardTitle>
              </CardHeader>
              <CardContent className="pt-2">
                <div className="bg-primary/5 p-4 rounded-lg mb-4">
                  <p className="font-semibold text-impulsa text-sm uppercase tracking-wide mb-2">TU SOLUCIÓN PERSONALIZADA</p>
                  <p className="text-sm text-muted-foreground">Análisis, estrategia y ejecución a medida con Marketing SENSE</p>
                </div>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Diagnóstico inicial con metodología SENSE</li>
                  <li>• Plan estratégico personalizado</li>
                  <li>• Ejecución de los servicios que necesitas</li>
                  <li>• Resultados medibles y seguimiento continuo</li>
                </ul>
              </CardContent>
            </Card>
          </article>

          {/* Consultoría y formación */}
          <article className="animate-fade-in">
            <Card className="h-full">
              <CardHeader className="flex-row items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/20 text-accent-foreground">
                  <GraduationCap className="h-6 w-6" aria-hidden="true" />
                </div>
                <CardTitle className="text-lg">Consultoría y formación</CardTitle>
              </CardHeader>
              <CardContent className="pt-2">
                <div className="bg-accent/10 p-4 rounded-lg mb-4">
                  <p className="font-semibold text-accent text-sm uppercase tracking-wide mb-2">TE ENSEÑAMOS A HACERLO MEJOR</p>
                  <p className="text-sm text-muted-foreground">Transferencia de conocimiento a tu equipo</p>
                </div>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Talleres y playbooks personalizados</li>
                  <li>• Sesiones 1:1 con especialistas</li>
                  <li>• Implementación con tu equipo</li>
                  <li>• Presupuesto según sesiones incluidas</li>
                </ul>
              </CardContent>
            </Card>
          </article>
        </div>

        {/* Externalización completa - Full width */}
        <div className="mb-12">
          <article className="animate-fade-in">
            <Card className="h-full">
              <CardHeader className="flex-row items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Users className="h-6 w-6" aria-hidden="true" />
                </div>
                <CardTitle className="text-xl">Externalización completa</CardTitle>
              </CardHeader>
              <CardContent className="pt-2">
                <div className="bg-primary/5 p-4 rounded-lg mb-6">
                  <p className="font-semibold text-primary text-sm uppercase tracking-wide mb-2">NOSOTROS NOS ENCARGAMOS DE TODO</p>
                  <p className="text-sm text-muted-foreground">Delegas la ejecución continua en nuestro equipo</p>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="font-semibold text-base text-foreground mb-3">Marketing Digital:</p>
                    <ul className="text-sm text-muted-foreground space-y-2 pl-3">
                      <li>• Equipo especialista por área (SEO, campañas, contenidos, redes sociales)</li>
                      <li>• Key Account Manager como punto de referencia</li>
                      <li>• Contacto directo con especialistas o via KAM</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-base text-foreground mb-3 flex items-center gap-2">
                      <Database className="h-5 w-5" />
                      Gestión CRM:
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-2 pl-3">
                      <li>• Administración integral HubSpot o CRM Hayas</li>
                      <li>• Soporte y consultas de tu equipo</li>
                      <li>• Fee mensual o facturación bajo demanda</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </article>
        </div>

        {/* Metodología de trabajo */}
        <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 mb-12">
          <header className="text-center mb-8">
            <h3 className="text-2xl font-semibold font-dm-sans text-foreground mb-2 flex items-center justify-center gap-2">
              <Zap className="h-6 w-6 text-primary" />
              Nuestra metodología de trabajo
            </h3>
            <p className="text-muted-foreground">Organización ágil para resultados medibles</p>
          </header>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary flex-shrink-0">
                <Calendar className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Planes mensuales</h4>
                <p className="text-sm text-muted-foreground">Establecemos objetivos y prioridades claras cada mes, adaptándonos a la evolución de tu negocio.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/20 text-accent-foreground flex-shrink-0">
                <Zap className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Sprints semanales</h4>
                <p className="text-sm text-muted-foreground">Organizamos el trabajo en bloques de ejecución ágil, medibles y adaptables a resultados.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Lo que nos diferencia */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 mb-4">
            <Star className="h-6 w-6 text-accent fill-accent" />
            <h3 className="text-xl font-semibold font-dm-sans text-foreground">Lo que nos diferencia</h3>
            <Star className="h-6 w-6 text-accent fill-accent" />
          </div>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto mb-8">
            Todas estas opciones son <span className="font-semibold text-foreground">complementarias y totalmente personalizables</span>. 
            En Hayas diseñamos propuestas únicas que combinan servicios, formación y externalización según tus necesidades específicas. 
            Con <span className="font-semibold text-primary">Marketing SENSE</span> integramos estrategia, ejecución y soporte continuo 
            para que tu negocio crezca con eficiencia y visión a largo plazo.
          </p>
          
          <Button asChild className="gradient-primary text-white hover-scale">
            <Link to="/es/agendar-reunion">Solicitar Consulta</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
export default MethodologySection;