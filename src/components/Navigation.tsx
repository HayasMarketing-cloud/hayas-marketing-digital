import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ChevronDown, ArrowRight, ArrowLeft } from 'lucide-react';

import { servicesByPillar, pillarMeta } from '@/data/services';
import type { PillarKey } from '@/data/services';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);
  const headerRef = useRef<HTMLElement | null>(null);
  const [headerHeight, setHeaderHeight] = useState<number>(0);
  const [mobileMenuLevel, setMobileMenuLevel] = useState<'main' | 'soluciones' | 'servicios'>('main');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const updateHeight = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };
    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, [isScrolled]);

  const handleMouseEnter = (menuName: string) => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    setActiveMegaMenu(menuName);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setActiveMegaMenu(null);
    }, 150);
    setHoverTimeout(timeout);
  };

  const megaMenuData = {
    soluciones: {
      title: 'Soluciones',
      categories: [],
    },
    servicios: [
      { title: 'Creación de Marca', href: '/servicios/creacion-marca', description: 'Identidad visual y branding completo' },
      { title: 'Gestión de Redes Sociales', href: '/servicios/gestion-redes-sociales', description: 'Community management profesional' },
      { title: 'Publicidad en Redes Sociales', href: '/servicios/publicidad-redes-sociales', description: 'Campañas publicitarias rentables' },
      { title: 'Publicidad en Google Ads', href: '/servicios/publicidad-google-ads', description: 'SEM y campañas en Google' },
      { title: 'Estrategia de contenidos', href: '/servicios/estrategia-contenidos', description: 'Plan editorial SEO y distribución multicanal' },
      { title: 'Email marketing y automatizaciones', href: '/servicios/email-marketing-automatizaciones', description: 'Workflows y personalización conectados a tu CRM' },
      { title: 'Consultoría estratégica y analítica', href: '/servicios/consultoria-estrategica-analitica', description: 'Decisiones con datos y reporting fiable' },
      { title: 'Integraciones y optimización con IA', href: '/servicios/integraciones-ia-procesos', description: 'Conecta sistemas y automatiza procesos' },
      { title: 'Marketing Directo', href: '/servicios/marketing-directo', description: 'Catálogos e invitaciones con envío y email' },
      { title: 'Implementación de Funnel', href: '/servicios/implementacion-funnel', description: 'Embudo de conversión con automatización' },
      { title: 'Implantación CRM', href: '/servicios/implantacion-crm', description: 'Setup completo de CRM personalizado' },
      { title: 'Asistente IA para Atención al Cliente', href: '/servicios/asistente-ia-atencion-cliente', description: 'Chatbots inteligentes 24/7' },
      { title: 'Diseño Web', href: '/servicios/diseno-web', description: 'Webs que convierten visitantes en clientes' },
      { title: 'SEO y Posicionamiento', href: '/servicios/seo-posicionamiento', description: 'Aparece primero en Google' },
      { title: 'Creación Tienda Online', href: '/servicios/tienda-online', description: 'E-commerce que vende 24/7' },
    ],
  } as const;

  const pillars = [
    { title: 'Impulsa tu marca', href: '/soluciones/impulsa-tu-marca' },
    { title: 'Conecta con tus clientes', href: '/soluciones/conecta-con-tus-clientes' },
    { title: 'Activa tus ventas', href: '/soluciones/activa-tu-estrategia-digital' },
  ];

  const pillarKeys: PillarKey[] = ['impulsa', 'conecta', 'activa'];

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileMenuLevel('main');
  };

  const navigateToLevel = (level: 'main' | 'soluciones' | 'servicios') => {
    setMobileMenuLevel(level);
  };

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 bg-background/95 backdrop-blur-md border-b border-border/50 ${
          isScrolled ? 'shadow-corporate py-0.5' : 'py-1'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Link to="/" className="flex items-center" onClick={() => window.scrollTo(0, 0)}>
                <img
                  src="/lovable-uploads/7ec653d8-b796-48ee-9657-8f0301af6e55.png"
                  alt="Hayas Marketing Logo"
                  className="h-28 md:h-32 w-auto"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {/* Soluciones Mega Menu */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter('soluciones')}
                onMouseLeave={handleMouseLeave}
              >
                <button className="text-foreground hover:text-primary font-medium transition-colors flex items-center gap-1 py-2">
                  Soluciones
                  <ChevronDown
                    className="h-4 w-4 transition-transform duration-200"
                    style={{ transform: activeMegaMenu === 'soluciones' ? 'rotate(180deg)' : 'rotate(0deg)' }}
                  />
                </button>
              </div>

              {/* Casos de Éxito: solo enlace */}
              <Link
                to="/casos-exito"
                className="text-foreground hover:text-primary font-medium transition-colors py-2"
                onClick={() => window.scrollTo(0, 0)}
              >
                Casos de Éxito
              </Link>

              {/* Servicios Mega Menu */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter('servicios')}
                onMouseLeave={handleMouseLeave}
              >
                <button className="text-foreground hover:text-primary font-medium transition-colors flex items-center gap-1 py-2">
                  Servicios
                  <ChevronDown
                    className="h-4 w-4 transition-transform duration-200"
                    style={{ transform: activeMegaMenu === 'servicios' ? 'rotate(180deg)' : 'rotate(0deg)' }}
                  />
                </button>
              </div>

              <Link to="/nosotros" className="text-foreground hover:text-primary font-medium transition-colors">
                La Agencia
              </Link>
              <Link to="/blog" className="text-foreground hover:text-primary font-medium transition-colors">
                Blog
              </Link>
              <Link to="/contacto" className="text-foreground hover:text-primary font-medium transition-colors">
                Contacto
              </Link>
            </nav>

            <div className="hidden lg:block">
              <Button asChild className="gradient-primary text-white hover-scale">
                <Link to="/agendar-reunion">Solicitar Consulta</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button className="lg:hidden p-2 focus:outline-none" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <svg className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden bg-background border border-border mt-4 py-4 px-2 rounded-lg shadow-corporate animate-slideUp max-h-[80vh] overflow-y-auto">
              <nav className="flex flex-col">
                
                {/* Main Level */}
                {mobileMenuLevel === 'main' && (
                  <div className="space-y-2">
                    <button
                      onClick={() => navigateToLevel('soluciones')}
                      className="w-full flex items-center justify-between text-foreground hover:text-primary font-medium transition-colors px-4 py-3 hover:bg-muted/50 rounded text-left"
                    >
                      <span>Soluciones</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                    
                    <Link
                      to="/casos-exito"
                      className="block text-foreground hover:text-primary font-medium transition-colors px-4 py-3 hover:bg-muted/50 rounded"
                      onClick={closeMobileMenu}
                    >
                      Casos de Éxito
                    </Link>
                    
                    <button
                      onClick={() => navigateToLevel('servicios')}
                      className="w-full flex items-center justify-between text-foreground hover:text-primary font-medium transition-colors px-4 py-3 hover:bg-muted/50 rounded text-left"
                    >
                      <span>Servicios</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                    
                    <Link
                      to="/nosotros"
                      className="block text-foreground hover:text-primary font-medium transition-colors px-4 py-3 hover:bg-muted/50 rounded"
                      onClick={closeMobileMenu}
                    >
                      La Agencia
                    </Link>
                    
                    <Link
                      to="/blog"
                      className="block text-foreground hover:text-primary font-medium transition-colors px-4 py-3 hover:bg-muted/50 rounded"
                      onClick={closeMobileMenu}
                    >
                      Blog
                    </Link>
                    
                    <Link
                      to="/contacto"
                      className="block text-foreground hover:text-primary font-medium transition-colors px-4 py-3 hover:bg-muted/50 rounded"
                      onClick={closeMobileMenu}
                    >
                      Contacto
                    </Link>
                    
                    <div className="mt-4 px-4">
                      <Button asChild className="gradient-primary text-white w-full hover-scale">
                        <Link to="/agendar-reunion" onClick={closeMobileMenu}>Solicitar Consulta</Link>
                      </Button>
                    </div>
                  </div>
                )}

                {/* Soluciones Level */}
                {mobileMenuLevel === 'soluciones' && (
                  <div className="space-y-2">
                    <div className="flex items-center px-4 py-3 border-b border-border mb-4">
                      <button
                        onClick={() => navigateToLevel('main')}
                        className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Volver
                      </button>
                      <span className="ml-4 font-medium text-foreground">Soluciones</span>
                    </div>
                    
                    <div className="px-4 space-y-3">
                      <div className="mb-6">
                        <h4 className="font-medium text-sm text-muted-foreground mb-3">Enfoques estratégicos</h4>
                        <div className="space-y-2">
                          {pillars.map((p) => (
                            <Link
                              key={p.href}
                              to={p.href}
                              className="block text-foreground hover:text-primary transition-colors py-3 px-3 hover:bg-muted/50 rounded-lg border border-border/50"
                              onClick={closeMobileMenu}
                            >
                              <div className="flex items-center justify-between">
                                <span className="font-medium">{p.title}</span>
                                <ArrowRight className="h-4 w-4 text-muted-foreground" />
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-sm text-muted-foreground mb-3">Servicios por categoría</h4>
                        <div className="space-y-4">
                          {pillarKeys.map((key) => (
                            <div key={key} className="space-y-2">
                              <h5 className="text-xs font-medium text-primary uppercase tracking-wide">
                                {pillarMeta[key].title}
                              </h5>
                              <div className="space-y-1">
                                {servicesByPillar[key].slice(0, 4).map((svc) => (
                                  <Link
                                    key={svc.href}
                                    to={svc.href}
                                    className="block text-sm text-muted-foreground hover:text-primary transition-colors py-2 px-2 hover:bg-muted/30 rounded"
                                    onClick={closeMobileMenu}
                                  >
                                    • {svc.title}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Servicios Level */}
                {mobileMenuLevel === 'servicios' && (
                  <div className="space-y-2">
                    <div className="flex items-center px-4 py-3 border-b border-border mb-4">
                      <button
                        onClick={() => navigateToLevel('main')}
                        className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Volver
                      </button>
                      <span className="ml-4 font-medium text-foreground">Servicios</span>
                    </div>
                    
                    <div className="px-4 space-y-2">
                      {megaMenuData.servicios.map((servicio) => (
                        <Link
                          key={servicio.href}
                          to={servicio.href}
                          className="block hover:bg-muted/50 py-3 px-3 rounded-lg transition-colors border border-border/30"
                          onClick={closeMobileMenu}
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <h5 className="font-medium text-foreground mb-1">
                                {servicio.title}
                              </h5>
                              <p className="text-xs text-muted-foreground">{servicio.description}</p>
                            </div>
                            <ArrowRight className="h-4 w-4 text-muted-foreground mt-1 ml-2 flex-shrink-0" />
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
                
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Spacer to offset fixed header so breadcrumbs and hero aren't hidden */}
      <div aria-hidden style={{ height: headerHeight }}></div>

      {/* Mega Menus - Positioned outside header to create continuous hover area */}
      {activeMegaMenu === 'soluciones' && (
        <div
          className="fixed left-0 right-0 bg-background border border-border rounded-lg shadow-corporate z-30 overflow-hidden"
          style={{ top: headerHeight }}
          onMouseEnter={() => handleMouseEnter('soluciones')}
          onMouseLeave={handleMouseLeave}
        >
          <div className="container mx-auto px-4">
            <div className="p-8 space-y-6">
              {/* Pillar Pages quick access */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {pillars.map((p) => (
                  <Link
                    key={p.href}
                    to={p.href}
                    className="flex items-center justify-between px-4 py-3 rounded-lg border hover:bg-muted/50 transition-colors group"
                    onClick={() => setActiveMegaMenu(null)}
                  >
                    <span className="font-medium text-foreground group-hover:text-primary">{p.title}</span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-transform group-hover:translate-x-1" />
                  </Link>
                ))}
              </div>

              {/* Servicios asociados por solución */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {pillarKeys.map((key) => (
                  <div key={key} className="space-y-2">
                    <ul className="space-y-1">
                      {servicesByPillar[key].map((svc) => (
                        <li key={svc.href}>
                          <Link
                            to={svc.href}
                            className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 py-1"
                            onClick={() => setActiveMegaMenu(null)}
                            aria-label={`${svc.title} — ${pillarMeta[key].title}`}
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                            {svc.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {activeMegaMenu === 'servicios' && (
        <div
          className="fixed left-0 right-0 bg-background border border-border rounded-lg shadow-corporate z-30 overflow-hidden"
          style={{ top: headerHeight }}
          onMouseEnter={() => handleMouseEnter('servicios')}
          onMouseLeave={handleMouseLeave}
        >
          <div className="container mx-auto px-4">
            <div className="p-6">
              <h4 className="font-semibold text-foreground mb-4 border-b border-border pb-2">Nuestros Servicios</h4>
              <div className="max-h-[60vh] overflow-auto pr-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {megaMenuData.servicios.map((servicio) => (
                    <Link
                      key={servicio.href}
                      to={servicio.href}
                      className="block group hover:bg-muted/50 p-4 rounded-lg transition-all duration-200"
                      onClick={() => setActiveMegaMenu(null)}
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <h5 className="font-medium text-foreground group-hover:text-primary transition-colors">
                            {servicio.title}
                          </h5>
                          <p className="text-sm text-muted-foreground mt-1">{servicio.description}</p>
                        </div>
                        <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-all duration-200 transform group-hover:translate-x-1" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
