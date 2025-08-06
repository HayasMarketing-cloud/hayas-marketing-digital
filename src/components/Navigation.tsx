import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ChevronDown, ArrowRight } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);

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
      categories: [
        {
          title: 'Marketing & Visibilidad',
          items: [
            { title: 'Branding y Marca', href: '/soluciones/branding-marca', description: 'Identidad corporativa' },
            { title: 'Marketing Digital', href: '/soluciones/marketing-digital', description: 'Estrategias digitales' }
          ]
        },
        {
          title: 'Gestión & Conversión',
          items: [
            { title: 'CRM y Automatización', href: '/soluciones/crm-automatizacion', description: 'Workflows inteligentes' },
            { title: 'Implantación CRM', href: '/soluciones/implantacion-crm', description: 'Setup completo' },
            { title: 'Captación de Leads', href: '/soluciones/captacion-leads', description: 'Generación de oportunidades' }
          ]
        },
        {
          title: 'Consultoría',
          items: [
            { title: 'Gestión Marketing', href: '/soluciones/gestion-marketing', description: 'Estrategia integral' },
            { title: 'IA aplicada al Marketing', href: '/soluciones/ia-marketing', description: 'Automatización inteligente' }
          ]
        }
      ]
    },
    casosExito: [
      { title: 'Centro Roraima', href: '/caso-exito-centro-roraima', image: '/lovable-uploads/2a2adcf5-d531-4d8c-91bd-bb12aac27976.png', solution: 'Branding + Web' },
      { title: 'Asendia', href: '/caso-exito-asendia', image: '/lovable-uploads/37a206e4-890d-4d31-a1c4-7dc674fe47a4.png', solution: 'CRM + Automatización' },
      { title: 'JointsUp', href: '/caso-exito-jointsup', image: '/lovable-uploads/564421eb-e67c-4075-95c0-1405855106cc.png', solution: 'Marca + Posicionamiento' },
      { title: 'IV Extra', href: '/caso-exito-iv-extra', image: '/lovable-uploads/eb03ebcf-1212-4adb-9f73-1020279eb265.png', solution: 'Branding + Web' }
    ],
    servicios: [
      { title: 'Creación de Marca', href: '/servicios/creacion-marca', description: 'Identidad visual y branding completo' },
      { title: 'Gestión de Redes Sociales', href: '/servicios/gestion-redes-sociales', description: 'Community management profesional' },
      { title: 'Publicidad en Redes Sociales', href: '/servicios/publicidad-redes-sociales', description: 'Campañas publicitarias rentables' },
      { title: 'Publicidad en Google Ads', href: '/servicios/publicidad-google-ads', description: 'SEM y campañas en Google' },
      { title: 'Diseño Web', href: '/servicios/diseno-web', description: 'Webs que convierten visitantes en clientes' },
      { title: 'SEO y Posicionamiento', href: '/servicios/seo-posicionamiento', description: 'Aparece primero en Google' },
      { title: 'Creación Tienda Online', href: '/servicios/tienda-online', description: 'E-commerce que vende 24/7' }
    ]
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 bg-background/95 backdrop-blur-md border-b border-border/50 ${
          isScrolled ? 'shadow-corporate py-2' : 'py-4'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Link to="/" className="flex items-center" onClick={() => window.scrollTo(0, 0)}>
                <img 
                  src="/lovable-uploads/7ec653d8-b796-48ee-9657-8f0301af6e55.png"  
                  alt="Hayas Marketing Logo" 
                  className="h-40 w-auto"
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
                <button className="text-foreground hover:text-hayas-primary font-medium transition-colors flex items-center gap-1 py-2">
                  Soluciones
                  <ChevronDown className="h-4 w-4 transition-transform duration-200" 
                    style={{ transform: activeMegaMenu === 'soluciones' ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                </button>
              </div>

              {/* Casos de Éxito Mega Menu */}
              <div 
                className="relative"
                onMouseEnter={() => handleMouseEnter('casos')}
                onMouseLeave={handleMouseLeave}
              >
                <button className="text-foreground hover:text-hayas-primary font-medium transition-colors flex items-center gap-1 py-2">
                  Casos de Éxito
                  <ChevronDown className="h-4 w-4 transition-transform duration-200" 
                    style={{ transform: activeMegaMenu === 'casos' ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                </button>
              </div>

              {/* Servicios Mega Menu */}
              <div 
                className="relative"
                onMouseEnter={() => handleMouseEnter('servicios')}
                onMouseLeave={handleMouseLeave}
              >
                <button className="text-foreground hover:text-hayas-primary font-medium transition-colors flex items-center gap-1 py-2">
                  Servicios
                  <ChevronDown className="h-4 w-4 transition-transform duration-200" 
                    style={{ transform: activeMegaMenu === 'servicios' ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                </button>
              </div>

              <Link to="/nosotros" className="text-foreground hover:text-hayas-primary font-medium transition-colors">
                La Agencia
              </Link>
              <Link to="/blog" className="text-foreground hover:text-hayas-primary font-medium transition-colors">
                Blog
              </Link>
              <a href="#contacto" className="text-foreground hover:text-hayas-primary font-medium transition-colors">
                Contacto
              </a>
            </nav>

            <div className="hidden lg:block">
              <Button asChild className="gradient-primary text-white hover-scale">
                <Link to="/agendar-reunion">Solicitar Consulta</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2 focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg 
                className="h-6 w-6 text-gray-700" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M6 18L18 6M6 6l12 12" 
                  />
                ) : (
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M4 6h16M4 12h16M4 18h16" 
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden bg-background border border-border mt-4 py-4 px-2 rounded-lg shadow-corporate animate-slideUp">
              <nav className="flex flex-col space-y-4">
                {/* Soluciones Accordion Mobile */}
                <div className="px-4 py-2">
                  <div className="text-foreground font-medium mb-4 border-b border-border pb-2">Soluciones</div>
                  <div className="space-y-4">
                    {megaMenuData.soluciones.categories.map((category, idx) => (
                      <div key={idx}>
                        <h4 className="font-medium text-sm text-muted-foreground mb-2 px-2">
                          {category.title}
                        </h4>
                        <div className="pl-4 space-y-2">
                          {category.items.map((item) => (
                            <Link
                              key={item.href}
                              to={item.href}
                              className="block text-sm text-foreground hover:text-primary transition-colors py-1 hover:bg-muted/50 px-2 rounded"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {item.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Casos de Éxito Mobile */}
                <div className="px-4 py-2">
                  <div className="text-foreground font-medium mb-3 border-b border-border pb-2">Casos de Éxito</div>
                  <div className="space-y-2">
                    {megaMenuData.casosExito.map((caso) => (
                      <Link
                        key={caso.href}
                        to={caso.href}
                        className="block text-sm text-foreground hover:text-primary transition-colors py-2 hover:bg-muted/50 px-2 rounded"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {caso.title}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Servicios Mobile */}
                <div className="px-4 py-2">
                  <div className="text-foreground font-medium mb-3 border-b border-border pb-2">Servicios</div>
                  <div className="space-y-2">
                    {megaMenuData.servicios.map((servicio) => (
                      <Link
                        key={servicio.href}
                        to={servicio.href}
                        className="block text-sm text-foreground hover:text-primary transition-colors py-2 hover:bg-muted/50 px-2 rounded"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {servicio.title}
                      </Link>
                    ))}
                  </div>
                </div>
                
                <Link 
                  to="/nosotros" 
                  className="text-foreground hover:text-primary font-medium transition-colors px-4 py-2 hover:bg-muted/50 rounded"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  La Agencia
                </Link>
                <Link 
                  to="/blog" 
                  className="text-foreground hover:text-primary font-medium transition-colors px-4 py-2 hover:bg-muted/50 rounded"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Blog
                </Link>
                <a 
                  href="#contacto" 
                  className="text-foreground hover:text-primary font-medium transition-colors px-4 py-2 hover:bg-muted/50 rounded"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contacto
                </a>
                <Button asChild className="gradient-primary text-white mx-4 hover-scale">
                  <Link to="/agendar-reunion">Solicitar Consulta</Link>
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Mega Menus - Positioned outside header to create continuous hover area */}
      {activeMegaMenu === 'soluciones' && (
        <div 
          className="fixed left-0 right-0 bg-background border border-border rounded-lg shadow-corporate z-30 overflow-hidden"
          style={{ top: isScrolled ? '120px' : '180px' }}
          onMouseEnter={() => handleMouseEnter('soluciones')}
          onMouseLeave={handleMouseLeave}
        >
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-3 gap-8 p-8">
              {megaMenuData.soluciones.categories.map((category, idx) => (
                <div key={idx} className="space-y-4">
                  <h4 className="font-semibold text-foreground border-b border-border pb-2">
                    {category.title}
                  </h4>
                  <div className="space-y-3">
                    {category.items.map((item) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        className="block group hover:bg-muted/50 p-3 rounded-lg transition-all duration-200"
                        onClick={() => setActiveMegaMenu(null)}
                      >
                        <div className="flex items-start justify-between">
                          <div>
                            <h5 className="font-medium text-foreground group-hover:text-hayas-primary transition-colors">
                              {item.title}
                            </h5>
                            <p className="text-sm text-muted-foreground mt-1">
                              {item.description}
                            </p>
                          </div>
                          <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-hayas-primary transition-all duration-200 transform group-hover:translate-x-1" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeMegaMenu === 'casos' && (
        <div 
          className="fixed left-0 right-0 bg-background border border-border rounded-lg shadow-corporate z-30 overflow-hidden"
          style={{ top: isScrolled ? '120px' : '180px' }}
          onMouseEnter={() => handleMouseEnter('casos')}
          onMouseLeave={handleMouseLeave}
        >
          <div className="container mx-auto px-4">
            <div className="p-6">
              <h4 className="font-semibold text-foreground mb-4 border-b border-border pb-2">
                Proyectos Destacados
              </h4>
              <div className="grid grid-cols-4 gap-4 max-w-4xl">
                {megaMenuData.casosExito.map((caso) => (
                  <Link
                    key={caso.href}
                    to={caso.href}
                    className="group hover:bg-muted/50 p-4 rounded-lg transition-all duration-200"
                    onClick={() => setActiveMegaMenu(null)}
                  >
                    <div className="flex flex-col items-center space-y-3">
                      <div className="w-16 h-16 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                        <img 
                          src={caso.image} 
                          alt={caso.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                        />
                      </div>
                      <div className="text-center">
                        <h5 className="font-medium text-foreground group-hover:text-primary transition-colors">
                          {caso.title}
                        </h5>
                        <div className="flex items-center justify-center mt-1">
                          <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                            {caso.solution}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {activeMegaMenu === 'servicios' && (
        <div 
          className="fixed left-0 right-0 bg-background border border-border rounded-lg shadow-corporate z-30 overflow-hidden"
          style={{ top: isScrolled ? '120px' : '180px' }}
          onMouseEnter={() => handleMouseEnter('servicios')}
          onMouseLeave={handleMouseLeave}
        >
          <div className="container mx-auto px-4">
            <div className="p-6">
              <h4 className="font-semibold text-foreground mb-4 border-b border-border pb-2">
                Nuestros Servicios
              </h4>
              <div className="grid grid-cols-2 gap-4 max-w-2xl">
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
                        <p className="text-sm text-muted-foreground mt-1">
                          {servicio.description}
                        </p>
                      </div>
                      <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-all duration-200 transform group-hover:translate-x-1" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
