import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Phone, MessageCircle } from 'lucide-react';
import StandardGHLForm from '@/components/StandardGHLForm';
import Seo from '@/components/Seo';

const Contacto = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5">
      <Seo
        title="Contacto | Hayas Marketing"
        description="Contacto y consultoría de marketing estratégico, IA y automatización. Hablemos para conectar, impactar y crecer."
        canonical="/contacto"
      />
      <Navigation />
      <main>
        {/* Breadcrumb */}
        <div className="bg-muted/30 py-4 mt-24">
          <div className="container mx-auto px-4">
            <nav className="text-sm text-muted-foreground">
              <Link to="/" className="hover:text-primary">Inicio</Link>
              <span className="mx-2">/</span>
              <span className="text-foreground">Contacto</span>
            </nav>
          </div>
        </div>

        {/* Hero heading */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">Contacto</h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Contáctanos hoy mismo para una consulta personalizada sobre cómo nuestras soluciones pueden adaptarse a tus necesidades específicas.
              </p>
            </div>

            {/* Main grid: Form + Sidebar (igual a Solicitar Consulta) */}
            <div className="grid lg:grid-cols-3 gap-12 items-start max-w-6xl mx-auto">
              {/* Formulario (col-span-2) */}
              <div className="lg:col-span-2">
                <div className="bg-card rounded-2xl shadow-2xl border border-border/50 overflow-hidden">
                  <div className="p-8 border-b border-border/30">
                    <h2 className="text-2xl font-semibold mb-3">Envíanos un mensaje</h2>
                    <p className="text-muted-foreground">
                      Cuéntanos tu contexto y objetivos. Te responderemos con una propuesta alineada a tus necesidades.
                    </p>
                  </div>
                  <div className="p-0">
                    <StandardGHLForm
                      formId="7hfylnczt0dXbyUFFSEt"
                      title="Formulario de Contacto"
                      minHeight={820}
                      showHeader={false}
                    />
                  </div>
                </div>
              </div>

              {/* Sidebar de contacto directo y SofÍA */}
              <div className="space-y-6">
                {/* Contacto Directo */}
                <div className="bg-card rounded-2xl p-8 shadow-xl border border-border/50">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6">
                      <Phone className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Contacto Directo</h3>
                    <p className="text-muted-foreground mb-6">Habla directamente con nuestro equipo</p>
                    <div className="space-y-3">
                      <a
                        href="tel:672288182"
                        className="flex items-center justify-center gap-3 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:scale-105 w-full"
                      >
                        <Phone className="w-5 h-5" />
                        Llamar
                      </a>
                      <a
                        href="https://wa.me/34672288182"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:scale-105 w-full"
                      >
                        <MessageCircle className="w-5 h-5" />
                        WhatsApp
                      </a>
                    </div>
                  </div>
                </div>

                {/* SofÍA */}
                <div className="bg-card rounded-2xl p-8 shadow-xl border border-border/50">
                  <div className="text-center">
                    <div className="relative w-20 h-20 mx-auto mb-6">
                      <div className="w-20 h-20 bg-gradient-to-r from-accent to-accent/80 rounded-full flex items-center justify-center relative overflow-hidden">
                        <img
                          src="/lovable-uploads/2a2adcf5-d531-4d8c-91bd-bb12aac27976.png"
                          alt="SofÍA"
                          className="w-16 h-16 rounded-full object-cover"
                        />
                        <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white">
                          <div className="absolute inset-0 bg-green-400 rounded-full animate-ping"></div>
                        </div>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">Chatea con SofÍA</h3>
                    <p className="text-muted-foreground mb-6">
                      Nuestra asistente de IA está disponible 24/7 para resolver tus dudas sobre nuestros servicios
                    </p>
                    <button
                      onClick={() => window.dispatchEvent(new CustomEvent('openSofiaChat'))}
                      className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-lime-500 to-lime-600 hover:from-lime-600 hover:to-lime-700 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:scale-105 w-full shadow-md"
                    >
                      <MessageCircle className="w-5 h-5" />
                      Iniciar Conversación
                    </button>
                    <p className="text-xs text-muted-foreground mt-3">Respuesta inmediata • Disponible siempre</p>
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
