import React from 'react';
import { EnhancedSEO } from '@/components/EnhancedSEO';
import { UniversalBreadcrumbs } from '@/components/UniversalBreadcrumbs';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const AvisoLegal = () => {
  const { isEnglish, languageCode } = useLanguage();

  const content = {
    title: isEnglish ? 'Legal Notice' : 'Aviso Legal',
    subtitle: isEnglish 
      ? 'Legal information and terms of use of the website'
      : 'Información legal y condiciones de uso del sitio web',
    
    // Section 1
    section1Title: isEnglish ? '1. Identification data' : '1. Datos identificativos',
    owner: isEnglish ? 'Owner' : 'Titular',
    address: isEnglish ? 'Address' : 'Domicilio',
    email: 'Email',
    phone: isEnglish ? 'Phone' : 'Teléfono',
    
    // Section 2
    section2Title: isEnglish ? '2. Purpose' : '2. Objeto',
    section2Text: isEnglish 
      ? 'This Legal Notice regulates the use of the hayasmarketing.com website, owned by Hayas Marketing, a company specialized in digital marketing, CRM, automation and artificial intelligence for businesses.'
      : 'El presente Aviso Legal regula el uso del sitio web hayasmarketing.com, propiedad de Hayas Marketing, empresa especializada en marketing digital, CRM, automatización e inteligencia artificial para empresas.',
    
    // Section 3
    section3Title: isEnglish ? '3. Conditions of access and use' : '3. Condiciones de acceso y uso',
    section3Para1: isEnglish 
      ? 'Access to this website is free except for the cost of connection through the telecommunications network provided by the access provider contracted by the user.'
      : 'El acceso a este sitio web es gratuito salvo en lo relativo al coste de conexión a través de la red de telecomunicaciones suministrada por el proveedor de acceso que hubiere contratado el usuario.',
    section3Para2: isEnglish 
      ? 'The user agrees to make appropriate use of the contents and services that Hayas Marketing offers through its website and, by way of example but not limited to:'
      : 'El usuario se compromete a hacer un uso adecuado de los contenidos y servicios que Hayas Marketing ofrece a través de su sitio web y con carácter enunciativo pero no limitativo:',
    condition1: isEnglish 
      ? 'Not to use the contents and services offered to engage in illicit, illegal activities or activities contrary to good faith and public order'
      : 'No emplear los contenidos y servicios ofrecidos para incurrir en actividades ilícitas, ilegales o contrarias a la buena fe y al orden público',
    condition2: isEnglish 
      ? 'Not to disseminate content or propaganda of a racist, xenophobic, illegal-pornographic nature, promoting terrorism or violating human rights'
      : 'No difundir contenidos o propaganda de carácter racista, xenófobo, pornográfico-ilegal, de apología del terrorismo o atentatorio contra los derechos humanos',
    condition3: isEnglish 
      ? 'Not to cause damage to the physical and logical systems of Hayas Marketing, its suppliers or third parties'
      : 'No causar daños en los sistemas físicos y lógicos de Hayas Marketing, de sus proveedores o de terceras personas',
    condition4: isEnglish 
      ? 'Not to introduce or spread computer viruses or any other physical or logical systems that are likely to cause damage on the network'
      : 'No introducir o difundir en la red virus informáticos o cualesquiera otros sistemas físicos o lógicos que sean susceptibles de causar daños',
    
    // Section 4
    section4Title: isEnglish ? '4. Contents' : '4. Contenidos',
    section4Text: isEnglish 
      ? 'Hayas Marketing reserves the right to unilaterally modify, without prior notice, the presentation and configuration of the website, as well as the contents, services, conditions of access, etc.'
      : 'Hayas Marketing se reserva el derecho a modificar unilateralmente, sin previo aviso, la presentación y configuración del sitio web, así como los contenidos, servicios, condiciones de acceso, etc.',
    
    // Section 5
    section5Title: isEnglish ? '5. Liabilities' : '5. Responsabilidades',
    section5Intro: isEnglish 
      ? 'Hayas Marketing shall not be liable for damages of any kind that may arise from:'
      : 'Hayas Marketing no se hace responsable de los daños y perjuicios de toda naturaleza que pudieran derivarse de:',
    liability1: isEnglish 
      ? 'The inability to access the website or the lack of veracity, accuracy, completeness and/or timeliness of the contents'
      : 'La imposibilidad de acceso al sitio web o la falta de veracidad, exactitud, exhaustividad y/o actualidad de los contenidos',
    liability2: isEnglish 
      ? 'Errors or omissions in the contents'
      : 'Los errores o omisiones en los contenidos',
    liability3: isEnglish 
      ? 'The unavailability of the website'
      : 'La falta de disponibilidad del sitio web',
    liability4: isEnglish 
      ? 'The transmission of viruses or malicious programs through the website'
      : 'La transmisión de virus o programas maliciosos a través del sitio web',
    
    // Section 6
    section6Title: isEnglish ? '6. Intellectual and industrial property' : '6. Propiedad intelectual e industrial',
    section6Text: isEnglish 
      ? 'The contents, programs, data, databases, sound files, images, photographs, software, graphic designs, texts, etc., contained on this website are protected by intellectual and industrial property laws, and their reproduction, distribution, public communication and transformation are expressly prohibited, except for personal and private use.'
      : 'Los contenidos, programas, datos, bases de datos, archivos de sonido, imágenes, fotografías, software, diseños gráficos, textos, etc., contenidos en este sitio web están protegidos por las leyes de propiedad intelectual e industrial, siendo expresamente prohibida su reproducción, distribución, comunicación pública y transformación, salvo para uso personal y privado.',
    
    // Section 7
    section7Title: isEnglish ? '7. Applicable law and jurisdiction' : '7. Legislación aplicable y jurisdicción',
    section7Text: isEnglish 
      ? 'These conditions shall be governed by Spanish law. For the resolution of any dispute, the parties submit to the Courts and Tribunals of Madrid, expressly waiving any other jurisdiction.'
      : 'Las presentes condiciones se regirán por la legislación española. Para la resolución de cualquier controversia las partes se someterán a los Juzgados y Tribunales de Madrid, renunciando expresamente a cualquier otro fuero.',
    
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
                    <p><strong>{content.owner}:</strong> Apps 4 Business SL</p>
                    <p><strong>CIF:</strong> B86554490</p>
                    <p><strong>{content.address}:</strong> Calle Manzanares 4 - 28005 Madrid</p>
                    <p><strong>{content.email}:</strong> info@hayasmarketing.com</p>
                    <p><strong>{content.phone}:</strong> 672288182</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">{content.section2Title}</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {content.section2Text}
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">{content.section3Title}</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p className="leading-relaxed">{content.section3Para1}</p>
                    <p className="leading-relaxed">{content.section3Para2}</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>{content.condition1}</li>
                      <li>{content.condition2}</li>
                      <li>{content.condition3}</li>
                      <li>{content.condition4}</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">{content.section4Title}</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {content.section4Text}
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">{content.section5Title}</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p className="leading-relaxed">{content.section5Intro}</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>{content.liability1}</li>
                      <li>{content.liability2}</li>
                      <li>{content.liability3}</li>
                      <li>{content.liability4}</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">{content.section6Title}</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {content.section6Text}
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">{content.section7Title}</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {content.section7Text}
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

export default AvisoLegal;
