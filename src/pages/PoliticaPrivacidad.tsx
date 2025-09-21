import React from 'react';
import { EnhancedSEO } from '@/components/EnhancedSEO';
import { UniversalBreadcrumbs } from '@/components/UniversalBreadcrumbs';
import { Card, CardContent } from '@/components/ui/card';

const PoliticaPrivacidad = () => {
  return (
    <>
      <EnhancedSEO />
      
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <UniversalBreadcrumbs />
          
          <div className="space-y-8 mt-6">
            <header className="text-center space-y-4">
              <h1 className="text-4xl font-bold text-foreground">Política de Privacidad</h1>
              <p className="text-xl text-muted-foreground">
                Información sobre el tratamiento de datos personales
              </p>
            </header>

            <Card>
              <CardContent className="p-8 space-y-8">
                
                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">1. Responsable del tratamiento</h2>
                  <div className="space-y-3 text-muted-foreground">
                    <p><strong>Responsable:</strong> Hayas Marketing</p>
                    <p><strong>CIF:</strong> [PENDIENTE - Completar con CIF real]</p>
                    <p><strong>Domicilio:</strong> Madrid, España [PENDIENTE - Dirección fiscal completa]</p>
                    <p><strong>Email de contacto DPO:</strong> privacidad@hayasmarketing.com</p>
                    <p><strong>Teléfono:</strong> [PENDIENTE - Teléfono de contacto]</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">2. Finalidades del tratamiento</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p className="leading-relaxed">
                      En Hayas Marketing tratamos los datos personales de los usuarios para las siguientes finalidades:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li><strong>Consultas y contacto:</strong> Gestionar las consultas realizadas a través de formularios web</li>
                      <li><strong>Newsletter y comunicaciones:</strong> Envío de información sobre servicios de marketing digital, CRM e IA</li>
                      <li><strong>Servicios profesionales:</strong> Gestión y prestación de servicios de marketing digital, automatización y CRM</li>
                      <li><strong>Chatbot SofÍA:</strong> Atención al cliente automatizada mediante inteligencia artificial</li>
                      <li><strong>Análisis web:</strong> Mejora de la experiencia de usuario y análisis de navegación</li>
                      <li><strong>Cumplimiento legal:</strong> Obligaciones fiscales, contables y normativas</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">3. Base legal del tratamiento</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li><strong>Consentimiento:</strong> Para newsletter, comunicaciones comerciales y uso del chatbot SofÍA</li>
                      <li><strong>Ejecución contractual:</strong> Para la prestación de servicios de marketing digital y CRM</li>
                      <li><strong>Interés legítimo:</strong> Para análisis web, mejora de servicios y prospección comercial B2B</li>
                      <li><strong>Cumplimiento legal:</strong> Para obligaciones fiscales y contables</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">4. Datos tratados</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p className="leading-relaxed">Los datos que podemos tratar incluyen:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Datos identificativos: nombre, apellidos, email, teléfono</li>
                      <li>Datos profesionales: empresa, cargo, sector de actividad</li>
                      <li>Datos de navegación: IP, cookies, análisis de comportamiento web</li>
                      <li>Datos de comunicación: mensajes del chatbot, consultas, historial de contacto</li>
                      <li>Datos comerciales: servicios contratados, historial de proyectos</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">5. Conservación de datos</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li><strong>Consultas web:</strong> 3 años desde el último contacto</li>
                      <li><strong>Newsletter:</strong> Hasta la baja del servicio</li>
                      <li><strong>Clientes activos:</strong> Durante la prestación del servicio + 6 años (obligaciones fiscales)</li>
                      <li><strong>Cookies y análisis:</strong> Según configuración del usuario (máximo 24 meses)</li>
                      <li><strong>Chatbot SofÍA:</strong> 12 meses para mejora del servicio</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">6. Destinatarios de los datos</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p className="leading-relaxed">
                      Podemos compartir datos con las siguientes categorías de destinatarios:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li><strong>Plataformas CRM:</strong> HubSpot, GoHighLevel (para gestión de clientes)</li>
                      <li><strong>Herramientas de marketing:</strong> Google Analytics, Meta Business, LinkedIn</li>
                      <li><strong>Servicios de IA:</strong> Proveedores de chatbot y automatización</li>
                      <li><strong>Proveedores tecnológicos:</strong> Hosting, email marketing, análisis web</li>
                      <li><strong>Administraciones públicas:</strong> Cuando sea legalmente requerido</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">7. Transferencias internacionales</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Algunos de nuestros proveedores pueden estar ubicados fuera del Espacio Económico Europeo. 
                    En estos casos, nos aseguramos de que existan garantías adecuadas (decisiones de adecuación, 
                    cláusulas tipo, certificaciones) para proteger sus datos personales.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">8. Derechos de los interesados</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p className="leading-relaxed">Usted tiene derecho a:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li><strong>Acceso:</strong> Obtener información sobre qué datos tratamos</li>
                      <li><strong>Rectificación:</strong> Corregir datos inexactos o incompletos</li>
                      <li><strong>Supresión:</strong> Solicitar la eliminación de sus datos</li>
                      <li><strong>Limitación:</strong> Restringir el tratamiento en ciertos casos</li>
                      <li><strong>Portabilidad:</strong> Recibir sus datos en formato estructurado</li>
                      <li><strong>Oposición:</strong> Oponerse al tratamiento por motivos personales</li>
                      <li><strong>Decisiones automatizadas:</strong> No ser objeto de decisiones basadas únicamente en tratamiento automatizado</li>
                    </ul>
                    <p className="mt-4">
                      Para ejercer estos derechos, puede contactar con nosotros en: <strong>privacidad@hayasmarketing.com</strong>
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">9. Seguridad de los datos</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Implementamos medidas técnicas y organizativas apropiadas para proteger sus datos personales 
                    contra el acceso no autorizado, alteración, divulgación o destrucción. Utilizamos cifrado, 
                    acceso controlado y auditorías regulares de seguridad.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">10. Reclamaciones</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Si considera que el tratamiento de sus datos personales vulnera la normativa, puede presentar 
                    una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es) o ante la 
                    autoridad de control de su país de residencia habitual.
                  </p>
                </section>

                <section className="bg-muted/30 p-6 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Fecha de última actualización:</strong> {new Date().toLocaleDateString('es-ES', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </p>
                </section>

              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </>
  );
};

export default PoliticaPrivacidad;