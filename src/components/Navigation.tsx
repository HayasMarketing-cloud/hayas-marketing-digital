import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { ChevronDown, ArrowRight, ArrowLeft, Zap, Users, Wrench } from 'lucide-react';

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

  const pillarIcons = {
    impulsa: Zap,
    conecta: Users,
    activa: Wrench,
  };

  const pillarColors = {
    impulsa: 'bg-purple-100 text-purple-800 border-purple-200',
    conecta: 'bg-blue-100 text-blue-800 border-blue-200', 
    activa: 'bg-green-100 text-green-800 border-green-200',
  };

  const pillars = [
    { title: 'Impulsa tu marca', href: '/soluciones/impulsa-tu-marca' },
    { title: 'Conecta con tus clientes', href: '/soluciones/conecta-con-tus-clientes' },
    { title: 'Activa tus ventas', href: '/soluciones/activa-tu-estrategia-digital' },
  ];

  const pillarKeys: PillarKey[] = ['impulsa', 'conecta', 'activa'];

  // Icons and colors for each pillar
  const pillarConfig = {
    'Impulsa tu marca': { icon: Zap, color: 'text-purple-600', bgColor: 'bg-purple-50 hover:bg-purple-100' },
    'Conecta con tus clientes': { icon: Users, color: 'text-blue-600', bgColor: 'bg-blue-50 hover:bg-blue-100' },
    'Activa tus ventas': { icon: Wrench, color: 'text-green-600', bgColor: 'bg-green-50 hover:bg-green-100' },
  };

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
              <Link to="/es" className="flex items-center" onClick={() => window.scrollTo(0, 0)}>
                <img
                  src="/lovable-uploads/7ec653d8-b796-48ee-9657-8f0301af6e55.png"
                  alt="Hayas Marketing Logo"
                  className="h-20 md:h-28 w-auto"
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
                to="/es/casos-exito"
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
                <Link
                  to="/es/servicios"
                  className="text-foreground hover:text-primary font-medium transition-colors flex items-center gap-1 py-2"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Servicios
                  <ChevronDown
                    className="h-4 w-4 transition-transform duration-200"
                    style={{ transform: activeMegaMenu === 'servicios' ? 'rotate(180deg)' : 'rotate(0deg)' }}
                  />
                </Link>
              </div>

              <Link to="/es/nosotros" className="text-foreground hover:text-primary font-medium transition-colors">
                La Agencia
              </Link>
              <Link to="/es/blog" className="text-foreground hover:text-primary font-medium transition-colors">
                Blog
              </Link>
              <Link to="/es/contacto" className="text-foreground hover:text-primary font-medium transition-colors">
                Contacto
              </Link>
            </nav>

            <div className="hidden lg:block">
              <Button asChild className="gradient-primary text-white hover-scale">
                <Link to="/es/agendar-reunion">Solicitar Consulta</Link>
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
                      to="/es/casos-exito"
                      className="block text-foreground hover:text-primary font-medium transition-colors px-4 py-3 hover:bg-muted/50 rounded"
                      onClick={closeMobileMenu}
                    >
                      Casos de Éxito
                    </Link>
                    
                    <div className="space-y-2">
                      <Link
                        to="/es/servicios"
                        className="block text-foreground hover:text-primary font-medium transition-colors px-4 py-3 hover:bg-muted/50 rounded"
                        onClick={closeMobileMenu}
                      >
                        Ver Todos los Servicios
                      </Link>
                      <button
                        onClick={() => navigateToLevel('servicios')}
                        className="w-full flex items-center justify-between text-foreground hover:text-primary font-medium transition-colors px-4 py-3 hover:bg-muted/50 rounded text-left"
                      >
                        <span>Por Categorías</span>
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                    
                    <Link
                      to="/es/nosotros"
                      className="block text-foreground hover:text-primary font-medium transition-colors px-4 py-3 hover:bg-muted/50 rounded"
                      onClick={closeMobileMenu}
                    >
                      La Agencia
                    </Link>
                    
                    <Link
                      to="/es/blog"
                      className="block text-foreground hover:text-primary font-medium transition-colors px-4 py-3 hover:bg-muted/50 rounded"
                      onClick={closeMobileMenu}
                    >
                      Blog
                    </Link>
                    
                    <Link
                      to="/es/contacto"
                      className="block text-foreground hover:text-primary font-medium transition-colors px-4 py-3 hover:bg-muted/50 rounded"
                      onClick={closeMobileMenu}
                    >
                      Contacto
                    </Link>
                    
                    <div className="mt-4 px-4">
                      <Button asChild className="gradient-primary text-white w-full hover-scale">
                        <Link to="/es/agendar-reunion" onClick={closeMobileMenu}>Solicitar Consulta</Link>
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
                    
                     <div className="px-4 space-y-4">
                       {pillarKeys.map((key) => {
                         const Icon = pillarIcons[key];
                         return (
                           <div key={key} className="space-y-2">
                             <div className="flex items-center gap-2 mb-3">
                               <Icon className="h-4 w-4 text-primary" />
                               <h5 className="font-medium text-sm text-foreground">
                                 {pillarMeta[key].title}
                               </h5>
                             </div>
                             <div className="space-y-1">
                               {servicesByPillar[key].map((service) => (
                                 <Link
                                   key={service.href}
                                   to={service.href}
                                   className="block hover:bg-muted/50 py-2 px-3 rounded-lg transition-colors border border-border/30"
                                   onClick={closeMobileMenu}
                                 >
                                   <span className="font-medium text-foreground text-sm">
                                     {service.title}
                                   </span>
                                 </Link>
                               ))}
                             </div>
                           </div>
                         );
                       })}
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
              {/* Soluciones principales con iconos y colores */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {pillars.map((p) => {
                  const config = pillarConfig[p.title as keyof typeof pillarConfig];
                  const Icon = config.icon;
                  return (
                    <Link
                      key={p.href}
                      to={p.href}
                      className={`flex items-center gap-4 px-6 py-5 rounded-xl border-2 ${config.bgColor} border-gray-100 hover:border-gray-200 transition-all duration-200 group hover:shadow-lg`}
                      onClick={() => setActiveMegaMenu(null)}
                    >
                      <div className={`p-3 rounded-lg bg-white shadow-sm ${config.color}`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <span className="font-semibold text-gray-900 group-hover:text-gray-700 transition-colors">
                          {p.title}
                        </span>
                        <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-gray-600 transition-all group-hover:translate-x-1 float-right mt-1" />
                      </div>
                    </Link>
                  );
                })}
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
              <h4 className="font-semibold text-foreground mb-6 text-center">Nuestros Servicios</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {pillarKeys.map((key) => {
                  const Icon = pillarIcons[key];
                  return (
                    <div key={key} className="space-y-4">
                      <div className="flex items-center gap-2 pb-3 border-b border-border">
                        <Icon className="h-5 w-5 text-primary" />
                        <h5 className="font-semibold text-foreground">
                          {pillarMeta[key].title}
                        </h5>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {servicesByPillar[key].map((service) => (
                          <Link
                            key={service.href}
                            to={service.href}
                            onClick={() => setActiveMegaMenu(null)}
                          >
                            <Badge 
                              variant="outline"
                              className={`${pillarColors[key]} hover:opacity-80 transition-opacity cursor-pointer text-xs py-1 px-2`}
                            >
                              {service.title}
                            </Badge>
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
