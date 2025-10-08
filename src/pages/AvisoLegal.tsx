import React from 'react';
import { EnhancedSEO } from '@/components/EnhancedSEO';
import { UniversalBreadcrumbs } from '@/components/UniversalBreadcrumbs';
import { Card, CardContent } from '@/components/ui/card';

const AvisoLegal = () => {
  return (
    <>
      <EnhancedSEO />
      
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <UniversalBreadcrumbs 
            customItems={[
              { label: 'Inicio', href: '/es' },
              { label: 'Aviso Legal' }
            ]} 
          />
          
          <div className="space-y-8 mt-6">
            <header className="text-center space-y-4">
              <h1 className="text-4xl font-bold text-foreground">Aviso Legal</h1>
              <p className="text-xl text-muted-foreground">
                Información legal y condiciones de uso del sitio web
              </p>
            </header>

            <Card>
              <CardContent className="p-8 space-y-8">
                
                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">1. Datos identificativos</h2>
                  <div className="space-y-3 text-muted-foreground">
                    <p><strong>Titular:</strong> Apps 4 Business SL</p>
                    <p><strong>CIF:</strong> B86554490</p>
                    <p><strong>Domicilio:</strong> Calle Manzanares 4 - 28005 Madrid</p>
                    <p><strong>Email:</strong> info@hayasmarketing.com</p>
                    <p><strong>Teléfono:</strong> 672288182</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">2. Objeto</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    El presente Aviso Legal regula el uso del sitio web hayasmarketing.com, propiedad de Hayas Marketing, 
                    empresa especializada en marketing digital, CRM, automatización e inteligencia artificial para empresas.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">3. Condiciones de acceso y uso</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p className="leading-relaxed">
                      El acceso a este sitio web es gratuito salvo en lo relativo al coste de conexión a través de la red 
                      de telecomunicaciones suministrada por el proveedor de acceso que hubiere contratado el usuario.
                    </p>
                    <p className="leading-relaxed">
                      El usuario se compromete a hacer un uso adecuado de los contenidos y servicios que Hayas Marketing 
                      ofrece a través de su sitio web y con carácter enunciativo pero no limitativo:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>No emplear los contenidos y servicios ofrecidos para incurrir en actividades ilícitas, ilegales o contrarias a la buena fe y al orden público</li>
                      <li>No difundir contenidos o propaganda de carácter racista, xenófobo, pornográfico-ilegal, de apología del terrorismo o atentatorio contra los derechos humanos</li>
                      <li>No causar daños en los sistemas físicos y lógicos de Hayas Marketing, de sus proveedores o de terceras personas</li>
                      <li>No introducir o difundir en la red virus informáticos o cualesquiera otros sistemas físicos o lógicos que sean susceptibles de causar daños</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">4. Contenidos</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Hayas Marketing se reserva el derecho a modificar unilateralmente, sin previo aviso, la presentación y 
                    configuración del sitio web, así como los contenidos, servicios, condiciones de acceso, etc.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">5. Responsabilidades</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p className="leading-relaxed">
                      Hayas Marketing no se hace responsable de los daños y perjuicios de toda naturaleza que pudieran derivarse de:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>La imposibilidad de acceso al sitio web o la falta de veracidad, exactitud, exhaustividad y/o actualidad de los contenidos</li>
                      <li>Los errores o omisiones en los contenidos</li>
                      <li>La falta de disponibilidad del sitio web</li>
                      <li>La transmisión de virus o programas maliciosos a través del sitio web</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">6. Propiedad intelectual e industrial</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Los contenidos, programas, datos, bases de datos, archivos de sonido, imágenes, fotografías, software, 
                    diseños gráficos, textos, etc., contenidos en este sitio web están protegidos por las leyes de propiedad 
                    intelectual e industrial, siendo expresamente prohibida su reproducción, distribución, comunicación pública 
                    y transformación, salvo para uso personal y privado.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">7. Legislación aplicable y jurisdicción</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Las presentes condiciones se regirán por la legislación española. Para la resolución de cualquier controversia 
                    las partes se someterán a los Juzgados y Tribunales de Madrid, renunciando expresamente a cualquier otro fuero.
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

export default AvisoLegal;