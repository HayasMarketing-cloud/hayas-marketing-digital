import React from 'react';
import { EnhancedSEO } from '@/components/EnhancedSEO';
import { UniversalBreadcrumbs } from '@/components/UniversalBreadcrumbs';
import { Card, CardContent } from '@/components/ui/card';

const TerminosServicio = () => {
  return (
    <>
      <EnhancedSEO />
      
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <UniversalBreadcrumbs 
            customItems={[
              { label: 'Inicio', href: '/es' },
              { label: 'Términos de Servicio' }
            ]} 
          />
          
          <div className="space-y-8 mt-6">
            <header className="text-center space-y-4">
              <h1 className="text-4xl font-bold text-foreground">Términos de Servicio</h1>
              <p className="text-xl text-muted-foreground">
                Condiciones generales para la prestación de servicios de marketing digital
              </p>
            </header>

            <Card>
              <CardContent className="p-8 space-y-8">
                
                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">1. Objeto y ámbito de aplicación</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Los presentes Términos de Servicio regulan la prestación de servicios de marketing digital, 
                    automatización, CRM e inteligencia artificial ofrecidos por Hayas Marketing. Estos términos 
                    se aplicarán a todos los contratos y acuerdos comerciales establecidos con nuestros clientes.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">2. Servicios ofrecidos</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p className="leading-relaxed">Hayas Marketing ofrece las siguientes categorías de servicios:</p>
                    
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">2.1 Soluciones de Marketing y Visibilidad</h3>
                        <ul className="list-disc list-inside space-y-1 ml-4">
                          <li>Branding e identidad de marca</li>
                          <li>Creación y rediseño de sitios web</li>
                          <li>Posicionamiento SEO</li>
                          <li>Estrategia de contenidos y campañas</li>
                          <li>Publicidad en Google Ads y Meta</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">2.2 Soluciones de Gestión y Conversión</h3>
                        <ul className="list-disc list-inside space-y-1 ml-4">
                          <li>Implementación de CRM (HubSpot, GoHighLevel)</li>
                          <li>Automatización de captación y workflows</li>
                          <li>Email marketing y seguimiento de clientes</li>
                          <li>Dashboards e informes de rendimiento</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">2.3 Soluciones de IA aplicada</h3>
                        <ul className="list-disc list-inside space-y-1 ml-4">
                          <li>Creación de chatbots inteligentes (SofÍA)</li>
                          <li>Integración de IA en procesos de marketing</li>
                          <li>Consultoría en implementación de IA</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">3. Condiciones comerciales</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">3.1 Presupuestos y contratación</h3>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Todos los presupuestos tienen una validez de 30 días naturales</li>
                        <li>Los servicios se consideran contratados tras la aceptación expresa del presupuesto y el pago de la señal correspondiente</li>
                        <li>Las modificaciones del alcance requerirán presupuesto adicional</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">3.2 Condiciones de pago</h3>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Servicios únicos: 50% al contratar, 50% a la entrega</li>
                        <li>Servicios recurrentes: Pago mensual por adelantado</li>
                        <li>Servicios de implementación: Según cronograma de hitos acordado</li>
                        <li>Plazo de pago: 7 días desde la emisión de la factura</li>
                        <li>Recargo por demora: 1,5% mensual sobre importes impagados</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">4. Obligaciones de las partes</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">4.1 Obligaciones de Hayas Marketing</h3>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Prestar los servicios con la diligencia profesional exigible</li>
                        <li>Cumplir los plazos acordados salvo causas de fuerza mayor</li>
                        <li>Mantener la confidencialidad de la información del cliente</li>
                        <li>Proporcionar informes de seguimiento según lo acordado</li>
                        <li>Formar al cliente en el uso de las herramientas implementadas</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">4.2 Obligaciones del cliente</h3>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Proporcionar información y materiales necesarios en tiempo y forma</li>
                        <li>Colaborar activamente en el desarrollo del proyecto</li>
                        <li>Realizar los pagos en los plazos establecidos</li>
                        <li>Designar persona de contacto con autoridad de decisión</li>
                        <li>Revisar y aprobar entregables en un plazo máximo de 7 días hábiles</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">5. Propiedad intelectual</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Los entregables finales (diseños, contenidos, configuraciones) son propiedad del cliente una vez abonados íntegramente</li>
                      <li>Hayas Marketing conserva la propiedad de sus metodologías, procesos y know-how</li>
                      <li>El cliente se compromete a no divulgar metodologías o procesos propietarios de Hayas Marketing</li>
                      <li>Hayas Marketing podrá usar el proyecto como caso de estudio, previa autorización del cliente</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">6. Cancelación y terminación</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">6.1 Servicios recurrentes</h3>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Cualquier parte puede cancelar con 30 días de antelación</li>
                        <li>No se realizarán devoluciones de pagos ya procesados</li>
                        <li>Los trabajos en curso se entregarán según el estado de desarrollo</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">6.2 Servicios únicos</h3>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Cancelación del cliente: Se facturará el trabajo realizado hasta la fecha</li>
                        <li>Cancelación por incumplimiento: Sin derecho a devolución</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">7. Limitación de responsabilidad</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Los resultados de marketing digital dependen de múltiples factores, incluyendo mercado, competencia y colaboración del cliente</li>
                      <li>Hayas Marketing no garantiza resultados específicos en métricas como tráfico, conversiones o ventas</li>
                      <li>La responsabilidad máxima se limita al importe de los servicios contratados en el período de 12 meses anterior</li>
                      <li>No nos hacemos responsables de pérdidas de beneficios, daños indirectos o lucro cesante</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">8. Uso de herramientas de terceros</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Nuestros servicios pueden incluir el uso de plataformas de terceros (HubSpot, GoHighLevel, Google, Meta, etc.). 
                    El cliente será responsable de cumplir con los términos de servicio de estas plataformas y asumir 
                    los costes de licencias cuando corresponda.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">9. Fuerza mayor</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Hayas Marketing no será responsable por retrasos o incumplimientos debidos a circunstancias fuera 
                    de su control razonable, incluyendo pero no limitándose a: cambios en algoritmos de plataformas, 
                    caídas de servicios de terceros, pandemias, conflictos laborales o desastres naturales.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">10. Ley aplicable y jurisdicción</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Estos términos se regirán por la legislación española. Para la resolución de controversias, 
                    las partes se someten a los Juzgados y Tribunales de Madrid, España.
                  </p>
                </section>

                <section className="bg-muted/30 p-6 rounded-lg">
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">
                      <strong>Fecha de última actualización:</strong> {new Date().toLocaleDateString('es-ES', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong>Contacto para consultas:</strong> info@hayasmarketing.com
                    </p>
                  </div>
                </section>

              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </>
  );
};

export default TerminosServicio;