import React from 'react';
import { EnhancedSEO } from '@/components/EnhancedSEO';
import { UniversalBreadcrumbs } from '@/components/UniversalBreadcrumbs';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const PoliticaPrivacidad = () => {
  const { isEnglish, languageCode } = useLanguage();

  const content = {
    title: isEnglish ? 'Privacy Policy' : 'Política de Privacidad',
    subtitle: isEnglish 
      ? 'Information about the processing of personal data'
      : 'Información sobre el tratamiento de datos personales',
    
    // Section 1
    section1Title: isEnglish ? '1. Data Controller' : '1. Responsable del tratamiento',
    responsible: isEnglish ? 'Controller' : 'Responsable',
    address: isEnglish ? 'Address' : 'Domicilio',
    dpoEmail: isEnglish ? 'DPO Contact Email' : 'Email de contacto DPO',
    phone: isEnglish ? 'Phone' : 'Teléfono',
    
    // Section 2
    section2Title: isEnglish ? '2. Purposes of processing' : '2. Finalidades del tratamiento',
    section2Intro: isEnglish 
      ? 'At Hayas Marketing we process personal data of users for the following purposes:'
      : 'En Hayas Marketing tratamos los datos personales de los usuarios para las siguientes finalidades:',
    purpose1Label: isEnglish ? 'Inquiries and contact:' : 'Consultas y contacto:',
    purpose1Text: isEnglish ? 'Managing inquiries made through web forms' : 'Gestionar las consultas realizadas a través de formularios web',
    purpose2Label: isEnglish ? 'Newsletter and communications:' : 'Newsletter y comunicaciones:',
    purpose2Text: isEnglish ? 'Sending information about digital marketing, CRM and AI services' : 'Envío de información sobre servicios de marketing digital, CRM e IA',
    purpose3Label: isEnglish ? 'Professional services:' : 'Servicios profesionales:',
    purpose3Text: isEnglish ? 'Management and provision of digital marketing, automation and CRM services' : 'Gestión y prestación de servicios de marketing digital, automatización y CRM',
    purpose4Label: isEnglish ? 'SofIA Chatbot:' : 'Chatbot SofÍA:',
    purpose4Text: isEnglish ? 'Automated customer service through artificial intelligence' : 'Atención al cliente automatizada mediante inteligencia artificial',
    purpose5Label: isEnglish ? 'Web analytics:' : 'Análisis web:',
    purpose5Text: isEnglish ? 'Improving user experience and navigation analysis' : 'Mejora de la experiencia de usuario y análisis de navegación',
    purpose6Label: isEnglish ? 'Legal compliance:' : 'Cumplimiento legal:',
    purpose6Text: isEnglish ? 'Tax, accounting and regulatory obligations' : 'Obligaciones fiscales, contables y normativas',
    
    // Section 3
    section3Title: isEnglish ? '3. Legal basis for processing' : '3. Base legal del tratamiento',
    basis1Label: isEnglish ? 'Consent:' : 'Consentimiento:',
    basis1Text: isEnglish ? 'For newsletter, commercial communications and use of the SofIA chatbot' : 'Para newsletter, comunicaciones comerciales y uso del chatbot SofÍA',
    basis2Label: isEnglish ? 'Contract performance:' : 'Ejecución contractual:',
    basis2Text: isEnglish ? 'For the provision of digital marketing and CRM services' : 'Para la prestación de servicios de marketing digital y CRM',
    basis3Label: isEnglish ? 'Legitimate interest:' : 'Interés legítimo:',
    basis3Text: isEnglish ? 'For web analytics, service improvement and B2B commercial prospecting' : 'Para análisis web, mejora de servicios y prospección comercial B2B',
    basis4Label: isEnglish ? 'Legal compliance:' : 'Cumplimiento legal:',
    basis4Text: isEnglish ? 'For tax and accounting obligations' : 'Para obligaciones fiscales y contables',
    
    // Section 4
    section4Title: isEnglish ? '4. Data processed' : '4. Datos tratados',
    section4Intro: isEnglish ? 'The data we may process includes:' : 'Los datos que podemos tratar incluyen:',
    data1: isEnglish ? 'Identification data: name, surname, email, phone' : 'Datos identificativos: nombre, apellidos, email, teléfono',
    data2: isEnglish ? 'Professional data: company, position, industry' : 'Datos profesionales: empresa, cargo, sector de actividad',
    data3: isEnglish ? 'Browsing data: IP, cookies, web behavior analysis' : 'Datos de navegación: IP, cookies, análisis de comportamiento web',
    data4: isEnglish ? 'Communication data: chatbot messages, inquiries, contact history' : 'Datos de comunicación: mensajes del chatbot, consultas, historial de contacto',
    data5: isEnglish ? 'Commercial data: contracted services, project history' : 'Datos comerciales: servicios contratados, historial de proyectos',
    
    // Section 5
    section5Title: isEnglish ? '5. Data retention' : '5. Conservación de datos',
    retention1Label: isEnglish ? 'Web inquiries:' : 'Consultas web:',
    retention1Text: isEnglish ? '3 years from last contact' : '3 años desde el último contacto',
    retention2Label: isEnglish ? 'Newsletter:' : 'Newsletter:',
    retention2Text: isEnglish ? 'Until service unsubscription' : 'Hasta la baja del servicio',
    retention3Label: isEnglish ? 'Active clients:' : 'Clientes activos:',
    retention3Text: isEnglish ? 'During service provision + 6 years (tax obligations)' : 'Durante la prestación del servicio + 6 años (obligaciones fiscales)',
    retention4Label: isEnglish ? 'Cookies and analytics:' : 'Cookies y análisis:',
    retention4Text: isEnglish ? 'According to user configuration (maximum 24 months)' : 'Según configuración del usuario (máximo 24 meses)',
    retention5Label: isEnglish ? 'SofIA Chatbot:' : 'Chatbot SofÍA:',
    retention5Text: isEnglish ? '12 months for service improvement' : '12 meses para mejora del servicio',
    
    // Section 6
    section6Title: isEnglish ? '6. Data recipients' : '6. Destinatarios de los datos',
    section6Intro: isEnglish 
      ? 'We may share data with the following categories of recipients:'
      : 'Podemos compartir datos con las siguientes categorías de destinatarios:',
    recipient1Label: isEnglish ? 'CRM Platforms:' : 'Plataformas CRM:',
    recipient1Text: isEnglish ? 'HubSpot, GoHighLevel (for client management)' : 'HubSpot, GoHighLevel (para gestión de clientes)',
    recipient2Label: isEnglish ? 'Marketing tools:' : 'Herramientas de marketing:',
    recipient2Text: 'Google Analytics, Meta Business, LinkedIn',
    recipient3Label: isEnglish ? 'AI Services:' : 'Servicios de IA:',
    recipient3Text: isEnglish ? 'Chatbot and automation providers' : 'Proveedores de chatbot y automatización',
    recipient4Label: isEnglish ? 'Technology providers:' : 'Proveedores tecnológicos:',
    recipient4Text: isEnglish ? 'Hosting, email marketing, web analytics' : 'Hosting, email marketing, análisis web',
    recipient5Label: isEnglish ? 'Public administrations:' : 'Administraciones públicas:',
    recipient5Text: isEnglish ? 'When legally required' : 'Cuando sea legalmente requerido',
    
    // Section 7
    section7Title: isEnglish ? '7. International transfers' : '7. Transferencias internacionales',
    section7Text: isEnglish 
      ? 'Some of our providers may be located outside the European Economic Area. In these cases, we ensure that adequate safeguards exist (adequacy decisions, standard clauses, certifications) to protect your personal data.'
      : 'Algunos de nuestros proveedores pueden estar ubicados fuera del Espacio Económico Europeo. En estos casos, nos aseguramos de que existan garantías adecuadas (decisiones de adecuación, cláusulas tipo, certificaciones) para proteger sus datos personales.',
    
    // Section 8
    section8Title: isEnglish ? '8. Data subject rights' : '8. Derechos de los interesados',
    section8Intro: isEnglish ? 'You have the right to:' : 'Usted tiene derecho a:',
    right1Label: isEnglish ? 'Access:' : 'Acceso:',
    right1Text: isEnglish ? 'Obtain information about what data we process' : 'Obtener información sobre qué datos tratamos',
    right2Label: isEnglish ? 'Rectification:' : 'Rectificación:',
    right2Text: isEnglish ? 'Correct inaccurate or incomplete data' : 'Corregir datos inexactos o incompletos',
    right3Label: isEnglish ? 'Erasure:' : 'Supresión:',
    right3Text: isEnglish ? 'Request deletion of your data' : 'Solicitar la eliminación de sus datos',
    right4Label: isEnglish ? 'Restriction:' : 'Limitación:',
    right4Text: isEnglish ? 'Restrict processing in certain cases' : 'Restringir el tratamiento en ciertos casos',
    right5Label: isEnglish ? 'Portability:' : 'Portabilidad:',
    right5Text: isEnglish ? 'Receive your data in a structured format' : 'Recibir sus datos en formato estructurado',
    right6Label: isEnglish ? 'Objection:' : 'Oposición:',
    right6Text: isEnglish ? 'Object to processing for personal reasons' : 'Oponerse al tratamiento por motivos personales',
    right7Label: isEnglish ? 'Automated decisions:' : 'Decisiones automatizadas:',
    right7Text: isEnglish ? 'Not be subject to decisions based solely on automated processing' : 'No ser objeto de decisiones basadas únicamente en tratamiento automatizado',
    rightsContact: isEnglish 
      ? 'To exercise these rights, you can contact us at:'
      : 'Para ejercer estos derechos, puede contactar con nosotros en:',
    
    // Section 9
    section9Title: isEnglish ? '9. Data security' : '9. Seguridad de los datos',
    section9Text: isEnglish 
      ? 'We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure or destruction. We use encryption, controlled access and regular security audits.'
      : 'Implementamos medidas técnicas y organizativas apropiadas para proteger sus datos personales contra el acceso no autorizado, alteración, divulgación o destrucción. Utilizamos cifrado, acceso controlado y auditorías regulares de seguridad.',
    
    // Section 10
    section10Title: isEnglish ? '10. Complaints' : '10. Reclamaciones',
    section10Text: isEnglish 
      ? 'If you believe that the processing of your personal data violates the regulations, you can file a complaint with the Spanish Data Protection Agency (www.aepd.es) or with the supervisory authority of your country of habitual residence.'
      : 'Si considera que el tratamiento de sus datos personales vulnera la normativa, puede presentar una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es) o ante la autoridad de control de su país de residencia habitual.',
    
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
                  <div className="space-y-3 text-muted-foreground">
                    <p><strong>{content.responsible}:</strong> Apps 4 Business SL</p>
                    <p><strong>CIF:</strong> B86554490</p>
                    <p><strong>{content.address}:</strong> Calle Manzanares 4 - 28005 Madrid</p>
                    <p><strong>{content.dpoEmail}:</strong> ruben@hayas.es</p>
                    <p><strong>{content.phone}:</strong> 672288182</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">{content.section2Title}</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p className="leading-relaxed">{content.section2Intro}</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li><strong>{content.purpose1Label}</strong> {content.purpose1Text}</li>
                      <li><strong>{content.purpose2Label}</strong> {content.purpose2Text}</li>
                      <li><strong>{content.purpose3Label}</strong> {content.purpose3Text}</li>
                      <li><strong>{content.purpose4Label}</strong> {content.purpose4Text}</li>
                      <li><strong>{content.purpose5Label}</strong> {content.purpose5Text}</li>
                      <li><strong>{content.purpose6Label}</strong> {content.purpose6Text}</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">{content.section3Title}</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li><strong>{content.basis1Label}</strong> {content.basis1Text}</li>
                      <li><strong>{content.basis2Label}</strong> {content.basis2Text}</li>
                      <li><strong>{content.basis3Label}</strong> {content.basis3Text}</li>
                      <li><strong>{content.basis4Label}</strong> {content.basis4Text}</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">{content.section4Title}</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p className="leading-relaxed">{content.section4Intro}</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>{content.data1}</li>
                      <li>{content.data2}</li>
                      <li>{content.data3}</li>
                      <li>{content.data4}</li>
                      <li>{content.data5}</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">{content.section5Title}</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li><strong>{content.retention1Label}</strong> {content.retention1Text}</li>
                      <li><strong>{content.retention2Label}</strong> {content.retention2Text}</li>
                      <li><strong>{content.retention3Label}</strong> {content.retention3Text}</li>
                      <li><strong>{content.retention4Label}</strong> {content.retention4Text}</li>
                      <li><strong>{content.retention5Label}</strong> {content.retention5Text}</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">{content.section6Title}</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p className="leading-relaxed">{content.section6Intro}</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li><strong>{content.recipient1Label}</strong> {content.recipient1Text}</li>
                      <li><strong>{content.recipient2Label}</strong> {content.recipient2Text}</li>
                      <li><strong>{content.recipient3Label}</strong> {content.recipient3Text}</li>
                      <li><strong>{content.recipient4Label}</strong> {content.recipient4Text}</li>
                      <li><strong>{content.recipient5Label}</strong> {content.recipient5Text}</li>
                    </ul>
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
                  <div className="space-y-4 text-muted-foreground">
                    <p className="leading-relaxed">{content.section8Intro}</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li><strong>{content.right1Label}</strong> {content.right1Text}</li>
                      <li><strong>{content.right2Label}</strong> {content.right2Text}</li>
                      <li><strong>{content.right3Label}</strong> {content.right3Text}</li>
                      <li><strong>{content.right4Label}</strong> {content.right4Text}</li>
                      <li><strong>{content.right5Label}</strong> {content.right5Text}</li>
                      <li><strong>{content.right6Label}</strong> {content.right6Text}</li>
                      <li><strong>{content.right7Label}</strong> {content.right7Text}</li>
                    </ul>
                    <p className="mt-4">
                      {content.rightsContact} <strong>ruben@hayas.es</strong>
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">{content.section9Title}</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {content.section9Text}
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">{content.section10Title}</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {content.section10Text}
                  </p>
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

export default PoliticaPrivacidad;
