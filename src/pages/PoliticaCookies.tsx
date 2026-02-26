import React from 'react';
import { EnhancedSEO } from '@/components/EnhancedSEO';
import { UniversalBreadcrumbs } from '@/components/UniversalBreadcrumbs';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const PoliticaCookies = () => {
  const { isEnglish, languageCode } = useLanguage();

  const content = {
    title: isEnglish ? 'Cookie Policy' : 'Política de Cookies',
    subtitle: isEnglish 
      ? 'Information about the use of cookies on our website'
      : 'Información sobre el uso de cookies en nuestro sitio web',
    
    // Section 1
    section1Title: isEnglish ? '1. What are cookies?' : '1. ¿Qué son las cookies?',
    section1Text: isEnglish 
      ? 'Cookies are small text files that are stored on your device when you visit a website. They allow the website to remember your actions and preferences (such as login, language, font size and other display preferences) for a period of time, so you do not have to re-enter them each time you return to the site or browse from one page to another.'
      : 'Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita un sitio web. Permiten que el sitio web recuerde sus acciones y preferencias (como inicio de sesión, idioma, tamaño de fuente y otras preferencias de visualización) durante un período de tiempo, para que no tenga que volver a introducirlas cada vez que regrese al sitio o navegue de una página a otra.',
    
    // Section 2
    section2Title: isEnglish ? '2. How do we use cookies?' : '2. ¿Cómo utilizamos las cookies?',
    section2Intro: isEnglish 
      ? 'At Hayas Marketing we use cookies to improve user experience, analyze web traffic and optimize our digital marketing services. We use them to:'
      : 'En Hayas Marketing utilizamos cookies para mejorar la experiencia del usuario, analizar el tráfico web y optimizar nuestros servicios de marketing digital. Las utilizamos para:',
    use1: isEnglish ? 'Remember your preferences and settings' : 'Recordar sus preferencias y configuraciones',
    use2: isEnglish ? 'Analyze how you use our website' : 'Analizar cómo utiliza nuestro sitio web',
    use3: isEnglish ? 'Personalize content and services' : 'Personalizar el contenido y los servicios',
    use4: isEnglish ? 'Improve HAYAS Copilot chatbot functionality' : 'Mejorar la funcionalidad del chatbot HAYAS Copilot',
    use5: isEnglish ? 'Measure the effectiveness of our marketing campaigns' : 'Medir la efectividad de nuestras campañas de marketing',
    use6: isEnglish ? 'Provide social media features' : 'Proporcionar funcionalidades de redes sociales',
    
    // Section 3
    section3Title: isEnglish ? '3. Types of cookies we use' : '3. Tipos de cookies que utilizamos',
    
    section3_1Title: isEnglish ? '3.1 Essential cookies (necessary)' : '3.1 Cookies esenciales (necesarias)',
    section3_1Desc: isEnglish 
      ? 'They are essential for the website to function. They do not require consent.'
      : 'Son imprescindibles para el funcionamiento del sitio web. No requieren consentimiento.',
    essential1: isEnglish ? 'Session cookies to maintain navigation' : 'Cookies de sesión para mantener la navegación',
    essential2: isEnglish ? 'Security cookies to prevent attacks' : 'Cookies de seguridad para prevenir ataques',
    essential3: isEnglish ? 'Basic website functionality cookies' : 'Cookies de funcionalidad básica del sitio',
    
    section3_2Title: isEnglish ? '3.2 Analytics cookies' : '3.2 Cookies analíticas',
    section3_2Desc: isEnglish 
      ? 'They allow us to analyze website usage to improve performance and user experience.'
      : 'Nos permiten analizar el uso del sitio web para mejorar el rendimiento y la experiencia del usuario.',
    analytics1: isEnglish ? 'Traffic, behavior and conversion analysis' : 'Análisis de tráfico, comportamiento y conversiones',
    analytics2: isEnglish ? 'Heat maps and user experience analysis' : 'Mapas de calor y análisis de experiencia de usuario',
    analytics3: isEnglish ? 'Site performance metrics' : 'Métricas de rendimiento del sitio',
    
    section3_3Title: isEnglish ? '3.3 Marketing cookies' : '3.3 Cookies de marketing',
    section3_3Desc: isEnglish 
      ? 'They are used to show relevant ads and measure the effectiveness of advertising campaigns.'
      : 'Se utilizan para mostrar anuncios relevantes y medir la efectividad de las campañas publicitarias.',
    marketing1: isEnglish ? 'Conversion tracking and remarketing' : 'Seguimiento de conversiones y remarketing',
    marketing2: isEnglish ? 'Audience analysis and ad optimization' : 'Análisis de audiencias y optimización de anuncios',
    marketing3: isEnglish ? 'B2B segmentation and professional analysis' : 'Segmentación B2B y análisis profesional',
    marketing4: isEnglish ? 'Lead tracking and content personalization' : 'Seguimiento de leads y personalización de contenido',
    
    section3_4Title: isEnglish ? '3.4 Functionality cookies' : '3.4 Cookies de funcionalidad',
    section3_4Desc: isEnglish 
      ? 'They improve website functionality and provide personalized features.'
      : 'Mejoran la funcionalidad del sitio web y proporcionan características personalizadas.',
    functionality1: isEnglish ? 'Remember conversations and user history' : 'Recordar conversaciones e historial de usuario',
    functionality2: isEnglish ? 'Language, theme, user settings' : 'Idioma, tema, configuraciones de usuario',
    functionality3: isEnglish ? 'Autocomplete and validation' : 'Autocompletado y validación',
    
    section3_5Title: isEnglish ? '3.5 Social media cookies' : '3.5 Cookies de redes sociales',
    section3_5Desc: isEnglish 
      ? 'They allow integration with social media platforms.'
      : 'Permiten la integración con plataformas de redes sociales.',
    social1: isEnglish ? 'Share buttons and professional widgets' : 'Botones de compartir y widgets profesionales',
    social2: isEnglish ? 'Social integration and tracking pixels' : 'Integración social y píxeles de seguimiento',
    social3: isEnglish ? 'Timeline widgets and share buttons' : 'Widgets de timeline y botones de compartir',
    social4: isEnglish ? 'Embedded videos and analytics' : 'Videos integrados y análisis',
    
    // Section 4
    section4Title: isEnglish ? '4. Cookie duration' : '4. Duración de las cookies',
    sessionCookies: isEnglish ? 'Session cookies' : 'Cookies de sesión',
    sessionDesc: isEnglish ? 'They are automatically deleted when you close your browser.' : 'Se eliminan automáticamente cuando cierra el navegador.',
    persistentCookies: isEnglish ? 'Persistent cookies' : 'Cookies persistentes',
    persistent1: isEnglish ? 'Up to 24 months' : 'Hasta 24 meses',
    persistent2: isEnglish ? 'Between 30 days and 2 years' : 'Entre 30 días y 2 años',
    persistent3: isEnglish ? 'Up to 12 months' : 'Hasta 12 meses',
    persistent4: isEnglish ? 'Up to 1 year' : 'Hasta 1 año',
    analyticsLabel: isEnglish ? 'Analytics:' : 'Analíticas:',
    marketingLabel: isEnglish ? 'Marketing:' : 'Marketing:',
    functionalityLabel: isEnglish ? 'Functionality:' : 'Funcionalidad:',
    preferencesLabel: isEnglish ? 'Preferences:' : 'Preferencias:',
    
    // Section 5
    section5Title: isEnglish ? '5. Cookie management' : '5. Gestión de cookies',
    section5_1Title: isEnglish ? '5.1 Browser settings' : '5.1 Configuración del navegador',
    section5_1Desc: isEnglish 
      ? 'You can control cookies through your browser settings:'
      : 'Puede controlar las cookies a través de la configuración de su navegador:',
    section5_2Title: isEnglish ? '5.2 Cookie banner' : '5.2 Banner de cookies',
    section5_2Desc: isEnglish 
      ? 'On your first visit, we show a banner where you can accept or reject non-essential cookies. You can change your preferences at any time from the link in the footer.'
      : 'En su primera visita, mostramos un banner donde puede aceptar o rechazar cookies no esenciales. Puede modificar sus preferencias en cualquier momento desde el enlace en el pie de página.',
    section5_3Title: isEnglish ? '5.3 Third-party cookie opt-out' : '5.3 Exclusión de cookies de terceros',
    
    // Section 6
    section6Title: isEnglish ? '6. HAYAS Copilot (AI Chatbot) cookies' : '6. Cookies de HAYAS Copilot (Chatbot IA)',
    section6Intro: isEnglish 
      ? 'Our HAYAS Copilot chatbot uses specific cookies to:'
      : 'Nuestro chatbot HAYAS Copilot utiliza cookies específicas para:',
    sofia1: isEnglish ? 'Remember conversation history during your session' : 'Recordar el historial de conversaciones durante su sesión',
    sofia2: isEnglish ? 'Personalize responses based on your previous interactions' : 'Personalizar las respuestas según sus interacciones previas',
    sofia3: isEnglish ? 'Improve AI response accuracy' : 'Mejorar la precisión de las respuestas de IA',
    sofia4: isEnglish ? 'Analyze query patterns to optimize the service' : 'Analizar patrones de consultas para optimizar el servicio',
    sofiaNote: isEnglish 
      ? 'These cookies are stored locally in your browser and do not contain personally identifiable information.'
      : 'Estas cookies se almacenan localmente en su navegador y no contienen información personal identificable.',
    
    // Section 7
    section7Title: isEnglish ? '7. Data transfers' : '7. Transferencias de datos',
    section7Text: isEnglish 
      ? 'Some cookie providers may transfer data outside the European Economic Area. We ensure that all our providers comply with applicable data protection regulations and have adequate safeguards to protect your information.'
      : 'Algunos proveedores de cookies pueden transferir datos fuera del Espacio Económico Europeo. Nos aseguramos de que todos nuestros proveedores cumplan con las regulaciones de protección de datos aplicables y tengan garantías adecuadas para proteger su información.',
    
    // Section 8
    section8Title: isEnglish ? '8. Policy updates' : '8. Actualizaciones de la política',
    section8Text: isEnglish 
      ? 'This cookie policy may be updated occasionally. We will notify you of any significant changes through a notice on our website or by email if applicable.'
      : 'Esta política de cookies puede actualizarse ocasionalmente. Le notificaremos cualquier cambio significativo a través de un aviso en nuestro sitio web o por email si es aplicable.',
    
    // Section 9
    section9Title: isEnglish ? '9. Contact' : '9. Contacto',
    section9Intro: isEnglish 
      ? 'If you have questions about our cookie policy, you can contact us at:'
      : 'Si tiene preguntas sobre nuestra política de cookies, puede contactarnos en:',
    
    lastUpdated: isEnglish ? 'Last updated:' : 'Fecha de última actualización:',
  };

  return (
    <>
      <EnhancedSEO />
      
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <UniversalBreadcrumbs />
          
          <div className="space-y-8 mt-6">
            <header className="text-center space-y-4">
              <h1 className="text-4xl font-bold text-foreground">{content.title}</h1>
              <p className="text-xl text-muted-foreground">
                {content.subtitle}
              </p>
            </header>

            <Card>
              <CardContent className="p-8 space-y-8">
                
                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">{content.section1Title}</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {content.section1Text}
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">{content.section2Title}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {content.section2Intro}
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4 text-muted-foreground">
                    <li>{content.use1}</li>
                    <li>{content.use2}</li>
                    <li>{content.use3}</li>
                    <li>{content.use4}</li>
                    <li>{content.use5}</li>
                    <li>{content.use6}</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">{content.section3Title}</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-3">{content.section3_1Title}</h3>
                      <p className="text-muted-foreground mb-2">{content.section3_1Desc}</p>
                      <ul className="list-disc list-inside space-y-1 ml-4 text-muted-foreground text-sm">
                        <li>{content.essential1}</li>
                        <li>{content.essential2}</li>
                        <li>{content.essential3}</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-3">{content.section3_2Title}</h3>
                      <p className="text-muted-foreground mb-2">{content.section3_2Desc}</p>
                      <ul className="list-disc list-inside space-y-1 ml-4 text-muted-foreground text-sm">
                        <li><strong>Google Analytics:</strong> {content.analytics1}</li>
                        <li><strong>Hotjar:</strong> {content.analytics2}</li>
                        <li><strong>{isEnglish ? 'Internal cookies:' : 'Cookies internas:'}</strong> {content.analytics3}</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-3">{content.section3_3Title}</h3>
                      <p className="text-muted-foreground mb-2">{content.section3_3Desc}</p>
                      <ul className="list-disc list-inside space-y-1 ml-4 text-muted-foreground text-sm">
                        <li><strong>Google Ads:</strong> {content.marketing1}</li>
                        <li><strong>Meta Pixel:</strong> {content.marketing2}</li>
                        <li><strong>LinkedIn Insight Tag:</strong> {content.marketing3}</li>
                        <li><strong>HubSpot:</strong> {content.marketing4}</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-3">{content.section3_4Title}</h3>
                      <p className="text-muted-foreground mb-2">{content.section3_4Desc}</p>
                      <ul className="list-disc list-inside space-y-1 ml-4 text-muted-foreground text-sm">
                        <li><strong>{isEnglish ? 'HAYAS Copilot:' : 'HAYAS Copilot:'}</strong> {content.functionality1}</li>
                        <li><strong>{isEnglish ? 'Preferences:' : 'Preferencias:'}</strong> {content.functionality2}</li>
                        <li><strong>{isEnglish ? 'Forms:' : 'Formularios:'}</strong> {content.functionality3}</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-3">{content.section3_5Title}</h3>
                      <p className="text-muted-foreground mb-2">{content.section3_5Desc}</p>
                      <ul className="list-disc list-inside space-y-1 ml-4 text-muted-foreground text-sm">
                        <li><strong>LinkedIn:</strong> {content.social1}</li>
                        <li><strong>Facebook:</strong> {content.social2}</li>
                        <li><strong>Twitter:</strong> {content.social3}</li>
                        <li><strong>YouTube:</strong> {content.social4}</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">{content.section4Title}</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">{content.sessionCookies}</h3>
                      <p>{content.sessionDesc}</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">{content.persistentCookies}</h3>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li><strong>{content.analyticsLabel}</strong> {content.persistent1}</li>
                        <li><strong>{content.marketingLabel}</strong> {content.persistent2}</li>
                        <li><strong>{content.functionalityLabel}</strong> {content.persistent3}</li>
                        <li><strong>{content.preferencesLabel}</strong> {content.persistent4}</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">{content.section5Title}</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">{content.section5_1Title}</h3>
                      <p className="mb-2">{content.section5_1Desc}</p>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li><strong>Chrome:</strong> {isEnglish ? 'Settings → Privacy and security → Cookies' : 'Configuración → Privacidad y seguridad → Cookies'}</li>
                        <li><strong>Firefox:</strong> {isEnglish ? 'Options → Privacy and security → Cookies' : 'Opciones → Privacidad y seguridad → Cookies'}</li>
                        <li><strong>Safari:</strong> {isEnglish ? 'Preferences → Privacy → Cookies' : 'Preferencias → Privacidad → Cookies'}</li>
                        <li><strong>Edge:</strong> {isEnglish ? 'Settings → Cookies and site permissions' : 'Configuración → Cookies y permisos del sitio'}</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">{content.section5_2Title}</h3>
                      <p>{content.section5_2Desc}</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">{content.section5_3Title}</h3>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li><strong>Google Ads:</strong> <a href="https://adssettings.google.com" className="text-primary hover:underline" target="_blank" rel="noopener">adssettings.google.com</a></li>
                        <li><strong>Facebook:</strong> <a href="https://www.facebook.com/ads/preferences" className="text-primary hover:underline" target="_blank" rel="noopener">facebook.com/ads/preferences</a></li>
                        <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/psettings/advertising" className="text-primary hover:underline" target="_blank" rel="noopener">linkedin.com/psettings/advertising</a></li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">{content.section6Title}</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p className="leading-relaxed">{content.section6Intro}</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>{content.sofia1}</li>
                      <li>{content.sofia2}</li>
                      <li>{content.sofia3}</li>
                      <li>{content.sofia4}</li>
                    </ul>
                    <p className="leading-relaxed mt-4">{content.sofiaNote}</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">{content.section7Title}</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {content.section7Text}
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">{content.section8Title}</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {content.section8Text}
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">{content.section9Title}</h2>
                  <p className="text-muted-foreground leading-relaxed">{content.section9Intro}</p>
                  <ul className="list-none space-y-1 ml-4 text-muted-foreground mt-2">
                    <li><strong>Email:</strong> ruben@hayas.es</li>
                    <li><strong>Web:</strong> hayasmarketing.com/{isEnglish ? 'contact' : 'contacto'}</li>
                  </ul>
                </section>

                <section className="bg-muted/30 p-6 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>{content.lastUpdated}</strong> {new Date().toLocaleDateString(languageCode, { 
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
