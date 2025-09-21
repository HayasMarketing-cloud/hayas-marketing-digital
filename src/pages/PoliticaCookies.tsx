import React from 'react';
import { EnhancedSEO } from '@/components/EnhancedSEO';
import { UniversalBreadcrumbs } from '@/components/UniversalBreadcrumbs';
import { Card, CardContent } from '@/components/ui/card';

const PoliticaCookies = () => {
  return (
    <>
      <EnhancedSEO />
      
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <UniversalBreadcrumbs />
          
          <div className="space-y-8 mt-6">
            <header className="text-center space-y-4">
              <h1 className="text-4xl font-bold text-foreground">Política de Cookies</h1>
              <p className="text-xl text-muted-foreground">
                Información sobre el uso de cookies en nuestro sitio web
              </p>
            </header>

            <Card>
              <CardContent className="p-8 space-y-8">
                
                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">1. ¿Qué son las cookies?</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita un sitio web. 
                    Permiten que el sitio web recuerde sus acciones y preferencias (como inicio de sesión, idioma, tamaño de fuente 
                    y otras preferencias de visualización) durante un período de tiempo, para que no tenga que volver a introducirlas 
                    cada vez que regrese al sitio o navegue de una página a otra.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">2. ¿Cómo utilizamos las cookies?</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    En Hayas Marketing utilizamos cookies para mejorar la experiencia del usuario, analizar el tráfico web 
                    y optimizar nuestros servicios de marketing digital. Las utilizamos para:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4 text-muted-foreground">
                    <li>Recordar sus preferencias y configuraciones</li>
                    <li>Analizar cómo utiliza nuestro sitio web</li>
                    <li>Personalizar el contenido y los servicios</li>
                    <li>Mejorar la funcionalidad del chatbot SofÍA</li>
                    <li>Medir la efectividad de nuestras campañas de marketing</li>
                    <li>Proporcionar funcionalidades de redes sociales</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">3. Tipos de cookies que utilizamos</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-3">3.1 Cookies esenciales (necesarias)</h3>
                      <p className="text-muted-foreground mb-2">
                        Son imprescindibles para el funcionamiento del sitio web. No requieren consentimiento.
                      </p>
                      <ul className="list-disc list-inside space-y-1 ml-4 text-muted-foreground text-sm">
                        <li>Cookies de sesión para mantener la navegación</li>
                        <li>Cookies de seguridad para prevenir ataques</li>
                        <li>Cookies de funcionalidad básica del sitio</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-3">3.2 Cookies analíticas</h3>
                      <p className="text-muted-foreground mb-2">
                        Nos permiten analizar el uso del sitio web para mejorar el rendimiento y la experiencia del usuario.
                      </p>
                      <ul className="list-disc list-inside space-y-1 ml-4 text-muted-foreground text-sm">
                        <li><strong>Google Analytics:</strong> Análisis de tráfico, comportamiento y conversiones</li>
                        <li><strong>Hotjar:</strong> Mapas de calor y análisis de experiencia de usuario</li>
                        <li><strong>Cookies internas:</strong> Métricas de rendimiento del sitio</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-3">3.3 Cookies de marketing</h3>
                      <p className="text-muted-foreground mb-2">
                        Se utilizan para mostrar anuncios relevantes y medir la efectividad de las campañas publicitarias.
                      </p>
                      <ul className="list-disc list-inside space-y-1 ml-4 text-muted-foreground text-sm">
                        <li><strong>Google Ads:</strong> Seguimiento de conversiones y remarketing</li>
                        <li><strong>Meta Pixel:</strong> Análisis de audiencias y optimización de anuncios</li>
                        <li><strong>LinkedIn Insight Tag:</strong> Segmentación B2B y análisis profesional</li>
                        <li><strong>HubSpot:</strong> Seguimiento de leads y personalización de contenido</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-3">3.4 Cookies de funcionalidad</h3>
                      <p className="text-muted-foreground mb-2">
                        Mejoran la funcionalidad del sitio web y proporcionan características personalizadas.
                      </p>
                      <ul className="list-disc list-inside space-y-1 ml-4 text-muted-foreground text-sm">
                        <li><strong>Chatbot SofÍA:</strong> Recordar conversaciones e historial de usuario</li>
                        <li><strong>Preferencias:</strong> Idioma, tema, configuraciones de usuario</li>
                        <li><strong>Formularios:</strong> Autocompletado y validación</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-3">3.5 Cookies de redes sociales</h3>
                      <p className="text-muted-foreground mb-2">
                        Permiten la integración con plataformas de redes sociales.
                      </p>
                      <ul className="list-disc list-inside space-y-1 ml-4 text-muted-foreground text-sm">
                        <li><strong>LinkedIn:</strong> Botones de compartir y widgets profesionales</li>
                        <li><strong>Facebook:</strong> Integración social y píxeles de seguimiento</li>
                        <li><strong>Twitter:</strong> Widgets de timeline y botones de compartir</li>
                        <li><strong>YouTube:</strong> Videos integrados y análisis</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">4. Duración de las cookies</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">Cookies de sesión</h3>
                      <p>Se eliminan automáticamente cuando cierra el navegador.</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">Cookies persistentes</h3>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li><strong>Analíticas:</strong> Hasta 24 meses</li>
                        <li><strong>Marketing:</strong> Entre 30 días y 2 años</li>
                        <li><strong>Funcionalidad:</strong> Hasta 12 meses</li>
                        <li><strong>Preferencias:</strong> Hasta 1 año</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">5. Gestión de cookies</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">5.1 Configuración del navegador</h3>
                      <p className="mb-2">
                        Puede controlar las cookies a través de la configuración de su navegador:
                      </p>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li><strong>Chrome:</strong> Configuración → Privacidad y seguridad → Cookies</li>
                        <li><strong>Firefox:</strong> Opciones → Privacidad y seguridad → Cookies</li>
                        <li><strong>Safari:</strong> Preferencias → Privacidad → Cookies</li>
                        <li><strong>Edge:</strong> Configuración → Cookies y permisos del sitio</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">5.2 Banner de cookies</h3>
                      <p>
                        En su primera visita, mostramos un banner donde puede aceptar o rechazar cookies no esenciales. 
                        Puede modificar sus preferencias en cualquier momento desde el enlace en el pie de página.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">5.3 Exclusión de cookies de terceros</h3>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li><strong>Google Ads:</strong> <a href="https://adssettings.google.com" className="text-primary hover:underline" target="_blank" rel="noopener">adssettings.google.com</a></li>
                        <li><strong>Facebook:</strong> <a href="https://www.facebook.com/ads/preferences" className="text-primary hover:underline" target="_blank" rel="noopener">facebook.com/ads/preferences</a></li>
                        <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/psettings/advertising" className="text-primary hover:underline" target="_blank" rel="noopener">linkedin.com/psettings/advertising</a></li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">6. Cookies de SofÍA (Chatbot IA)</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p className="leading-relaxed">
                      Nuestro chatbot SofÍA utiliza cookies específicas para:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Recordar el historial de conversaciones durante su sesión</li>
                      <li>Personalizar las respuestas según sus interacciones previas</li>
                      <li>Mejorar la precisión de las respuestas de IA</li>
                      <li>Analizar patrones de consultas para optimizar el servicio</li>
                    </ul>
                    <p className="leading-relaxed mt-4">
                      Estas cookies se almacenan localmente en su navegador y no contienen información personal identificable.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">7. Transferencias de datos</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Algunos proveedores de cookies pueden transferir datos fuera del Espacio Económico Europeo. 
                    Nos aseguramos de que todos nuestros proveedores cumplan con las regulaciones de protección de datos 
                    aplicables y tengan garantías adecuadas para proteger su información.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">8. Actualizaciones de la política</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Esta política de cookies puede actualizarse ocasionalmente. Le notificaremos cualquier cambio 
                    significativo a través de un aviso en nuestro sitio web o por email si es aplicable.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">9. Contacto</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Si tiene preguntas sobre nuestra política de cookies, puede contactarnos en:
                  </p>
                  <ul className="list-none space-y-1 ml-4 text-muted-foreground mt-2">
                    <li><strong>Email:</strong> privacidad@hayasmarketing.com</li>
                    <li><strong>Web:</strong> hayasmarketing.com/contacto</li>
                  </ul>
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

export default PoliticaCookies;