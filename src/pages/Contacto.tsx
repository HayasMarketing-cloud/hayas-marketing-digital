import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

import { Card, CardContent } from '@/components/ui/card';
import { MessageSquare, Mail, Phone } from 'lucide-react';
import GHLFormEmbed from '@/components/GHLFormEmbed';
import Seo from '@/components/Seo';

const Contacto = () => {
  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Contacto | Hayas Marketing"
        description="Contacto y consultoría de marketing estratégico, IA y automatización. Hablemos para conectar, impactar y crecer."
        canonical="/contacto"
      />
      <Navigation />
      <main>
      {/* Breadcrumb */}
      <div className="bg-muted/30 py-4">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary">Inicio</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">Contacto</span>
          </nav>
        </div>
      </div>

      {/* Contact Section - Based on ContactSection but without the main title */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Contacto</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Contáctanos hoy mismo para una consulta personalizada sobre cómo nuestras soluciones pueden adaptarse a tus necesidades específicas.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-10 max-w-3xl mx-auto">
            <Card className="border border-border shadow-corporate bg-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Envíanos un mensaje</h3>
                <GHLFormEmbed
                  formId="7hfylnczt0dXbyUFFSEt"
                  title="Marketing Form - Claim Offer"
                  minHeight={820}
                />
              </CardContent>
            </Card>
            
            <div className="mt-8">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Información de contacto</h3>
                  <p className="text-muted-foreground mb-8">
                    Estamos listos para responder a todas tus preguntas y ayudarte a implementar las mejores soluciones para tu negocio.
                  </p>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="mr-4 h-10 w-10 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium">Email</h4>
                      <a href="mailto:hola@hayas.es" className="text-primary hover:text-primary/80">
                        hola@hayas.es
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 h-10 w-10 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium">Teléfono</h4>
                      <a href="tel:+34672288182" className="text-primary hover:text-primary/80">
                        +34 672 288 182
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 h-10 w-10 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium">WhatsApp</h4>
                      <a href="https://wa.me/34672288182" className="text-primary hover:text-primary/80" target="_blank" rel="noopener noreferrer">
                        Iniciar chat
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="pt-6 mt-6 border-t border-border">
                  <p className="text-muted-foreground">
                    También puedes seguirnos en redes sociales para estar al día de nuestras novedades y consejos sobre automatización e IA.
                  </p>
                  <div className="flex gap-4 mt-4">
                    <a href="https://www.linkedin.com/company/hayasmarketing/" className="h-10 w-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors" target="_blank" rel="noopener noreferrer">
                      <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                    <a href="https://www.instagram.com/hayas_marketing/" className="h-10 w-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors" target="_blank" rel="noopener noreferrer">
                      <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      </main>
      <Footer />
    </div>
  );
};

export default Contacto;