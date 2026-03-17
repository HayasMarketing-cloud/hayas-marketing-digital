import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { ChevronDown, ArrowRight, ArrowLeft, DollarSign, Brain, Eye, PenTool } from 'lucide-react';
import { useLanguageNavigation } from '@/hooks/useLanguageNavigation';
import { useTranslation } from '@/hooks/useTranslation';
import { useLocalizedRoutes } from '@/hooks/useLocalizedRoutes';

import { servicesByPillar, pillarMeta } from '@/data/services';
import type { PillarKey } from '@/data/services';

const Navigation = () => {
  const { language, isEnglish, toggleLanguage } = useLanguageNavigation();
  const { t } = useTranslation();
  const { getRoute } = useLocalizedRoutes();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);
  const headerRef = useRef<HTMLElement | null>(null);
  const [headerHeight, setHeaderHeight] = useState<number>(0);
  const [mobileMenuLevel, setMobileMenuLevel] = useState<'main' | 'soluciones'>('main');

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

  // GTM: Enviar origen en página de gracias si existe en sessionStorage
  useEffect(() => {
    try {
      const isThankYou = window.location.pathname.startsWith('/es/gracias');
      const raw = sessionStorage.getItem('ghl_last_form');
      if (isThankYou && raw) {
        const data = JSON.parse(raw);
        (window as any).dataLayer = (window as any).dataLayer || [];
        (window as any).dataLayer.push({
          event: 'ghl_thankyou',
          form_id: data.form_id,
          origin_url: data.origin_url,
          thankyou_url: window.location.href,
          form_name: data.form_name
        });
        console.log('ℹ️ GTM: ghl_thankyou enviado', data);
        sessionStorage.removeItem('ghl_last_form');
      }
    } catch (e) {
      // no-op
    }
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

  const pillarIcons: Record<PillarKey, React.ElementType> = {
    revenue: DollarSign,
    intelligence: Brain,
    visibility: Eye,
    content: PenTool,
  };

  const pillarColors: Record<PillarKey, string> = {
    revenue: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    intelligence: 'bg-amber-100 text-amber-800 border-amber-200',
    visibility: 'bg-purple-100 text-purple-800 border-purple-200',
    content: 'bg-blue-100 text-blue-800 border-blue-200',
  };

  const pillars = [
    { key: 'revenue' as PillarKey, title: 'Revenue', href: getRoute('solutionsActivateSales') },
    { key: 'visibility' as PillarKey, title: 'Visibility', href: getRoute('solutionsBoostBrand') },
    { key: 'content' as PillarKey, title: 'Content', href: getRoute('solutionsConnectCustomers') },
    { key: 'intelligence' as PillarKey, title: 'Intelligence', href: `/${language}/soluciones/ia-marketing` },
  ];

  const pillarKeys: PillarKey[] = ['revenue', 'visibility', 'content', 'intelligence'];

  const pillarConfig: Record<string, { icon: React.ElementType; color: string; bgColor: string }> = {
    'Revenue': { icon: DollarSign, color: 'text-emerald-600', bgColor: 'bg-emerald-50 hover:bg-emerald-100' },
    'Visibility': { icon: Eye, color: 'text-purple-600', bgColor: 'bg-purple-50 hover:bg-purple-100' },
    'Content': { icon: PenTool, color: 'text-blue-600', bgColor: 'bg-blue-50 hover:bg-blue-100' },
    'Intelligence': { icon: Brain, color: 'text-amber-600', bgColor: 'bg-amber-50 hover:bg-amber-100' },
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileMenuLevel('main');
  };

  const navigateToLevel = (level: 'main' | 'soluciones') => {
    setMobileMenuLevel(level);
  };

  return (
    <>
      {/* Skip Link for Accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded-md z-50 focus-ring"
      >
        Saltar al contenido principal
      </a>
      
      <header
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 bg-background/95 backdrop-blur-md border-b border-border/50 ${
          isScrolled ? 'shadow-corporate py-3 md:py-4' : 'py-4 md:py-5'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Link to={`/${language}`} className="flex items-center overflow-visible" onClick={() => window.scrollTo(0, 0)}>
                <div className="logo-container relative inline-flex items-center origin-left overflow-visible -ml-2 md:-ml-3 scale-[2.2] md:scale-[2.8]">
                  <img
                    src="/lovable-uploads/7ec653d8-b796-48ee-9657-8f0301af6e55.png"
                    alt="Hayas Marketing Logo"
                    className="h-10 md:h-12 w-auto"
                    width={48}
                    height={48}
                  />
                </div>
              </Link>
            </div>

            {/* Desktop CTA + Language + Hamburger */}
            <div className="flex items-center gap-3">
              {/* Language Selector */}
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleLanguage}
                className="hover:bg-muted transition-colors"
                aria-label={`Switch to ${isEnglish ? 'Spanish' : 'English'}`}
              >
                <span className="text-lg">{isEnglish ? '🇪🇸' : '🇬🇧'}</span>
                <span className="ml-2 text-sm font-medium hidden sm:inline">{isEnglish ? 'ES' : 'EN'}</span>
              </Button>
              
              <Button asChild className="gradient-primary text-white hover-scale hidden sm:flex">
                <Link to={getRoute('scheduleMeeting')}>{t('footer.scheduleConsultation')}</Link>
              </Button>

              {/* Hamburger Menu Button - Always visible */}
              <button 
                className="p-2 focus-ring" 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
                aria-expanded={mobileMenuOpen}
              >
                <svg className="h-6 w-6 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

        </div>
      </header>

      {/* Full-screen Slide Panel Menu */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 z-40 animate-fade-in"
            onClick={closeMobileMenu}
          />
          
          {/* Slide Panel */}
          <div className="fixed top-0 right-0 h-full w-full sm:w-96 bg-background z-50 shadow-2xl animate-slide-in-right overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-border sticky top-0 bg-background z-10">
              <span className="font-semibold font-dm-sans text-foreground">{t('nav.menu') || 'Menú'}</span>
              <button 
                onClick={closeMobileMenu}
                className="p-2 hover:bg-muted rounded-lg transition-colors"
                aria-label="Cerrar menú"
              >
                <svg className="h-5 w-5 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <nav className="p-4 space-y-6">
              {/* Main Navigation Level */}
              {mobileMenuLevel === 'main' && (
                <>
                  {/* Primary Navigation */}
                  <div className="space-y-1">
                    <button
                      onClick={() => navigateToLevel('soluciones')}
                      className="w-full flex items-center justify-between text-foreground hover:text-primary font-medium transition-colors px-3 py-3 hover:bg-muted/50 rounded-lg text-left"
                    >
                      <span>{t('nav.solutions')}</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                    
                    <Link
                      to={getRoute('services')}
                      className="block text-foreground hover:text-primary font-medium transition-colors px-3 py-3 hover:bg-muted/50 rounded-lg"
                      onClick={closeMobileMenu}
                    >
                      {t('nav.services')}
                    </Link>
                    
                    <Link
                      to={getRoute('caseStudies')}
                      className="block text-foreground hover:text-primary font-medium transition-colors px-3 py-3 hover:bg-muted/50 rounded-lg"
                      onClick={closeMobileMenu}
                    >
                      {t('nav.caseStudies')}
                    </Link>
                    
                    <Link
                      to={getRoute('blog')}
                      className="block text-foreground hover:text-primary font-medium transition-colors px-3 py-3 hover:bg-muted/50 rounded-lg"
                      onClick={closeMobileMenu}
                    >
                      {t('nav.blog')}
                    </Link>
                    
                    <Link
                      to={getRoute('aboutUs')}
                      className="block text-foreground hover:text-primary font-medium transition-colors px-3 py-3 hover:bg-muted/50 rounded-lg"
                      onClick={closeMobileMenu}
                    >
                      {t('nav.theAgency')}
                    </Link>
                    
                    <Link
                      to={getRoute('contact')}
                      className="block text-foreground hover:text-primary font-medium transition-colors px-3 py-3 hover:bg-muted/50 rounded-lg"
                      onClick={closeMobileMenu}
                    >
                      {t('nav.contact')}
                    </Link>
                  </div>

                  {/* Featured Services Section */}
                  <div className="border-t border-border pt-4">
                    <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-3 mb-3">
                      {t('footer.featuredServices')}
                    </h4>
                    <div className="grid grid-cols-2 gap-1">
                      <Link to={`/${language}/servicios/creacion-marca`} className="text-sm text-muted-foreground hover:text-primary transition-colors px-3 py-2 hover:bg-muted/50 rounded" onClick={closeMobileMenu}>{t('footer.creacion-marca')}</Link>
                      <Link to={`/${language}/servicios/diseno-web`} className="text-sm text-muted-foreground hover:text-primary transition-colors px-3 py-2 hover:bg-muted/50 rounded" onClick={closeMobileMenu}>{t('footer.diseno-web')}</Link>
                      <Link to={`/${language}/servicios/implantacion-crm`} className="text-sm text-muted-foreground hover:text-primary transition-colors px-3 py-2 hover:bg-muted/50 rounded" onClick={closeMobileMenu}>{t('footer.implantacion-crm')}</Link>
                      <Link to={`/${language}/servicios/seo-posicionamiento`} className="text-sm text-muted-foreground hover:text-primary transition-colors px-3 py-2 hover:bg-muted/50 rounded" onClick={closeMobileMenu}>{t('footer.seo-posicionamiento')}</Link>
                      <Link to={`/${language}/servicios/automatizacion-procesos-ventas`} className="text-sm text-muted-foreground hover:text-primary transition-colors px-3 py-2 hover:bg-muted/50 rounded" onClick={closeMobileMenu}>{t('footer.automatizacion-comercial')}</Link>
                      <Link to={`/${language}/servicios/captacion-leads-clientes`} className="text-sm text-muted-foreground hover:text-primary transition-colors px-3 py-2 hover:bg-muted/50 rounded" onClick={closeMobileMenu}>{t('footer.captacion-leads')}</Link>
                    </div>
                  </div>

                  {/* Resources Section */}
                  <div className="border-t border-border pt-4">
                    <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-3 mb-3">
                      {t('footer.resources')}
                    </h4>
                    <div className="space-y-1">
                      <Link to={`/${language}/casos-exito`} className="block text-sm text-muted-foreground hover:text-primary transition-colors px-3 py-2 hover:bg-muted/50 rounded" onClick={closeMobileMenu}>{t('footer.caseStudies')}</Link>
                      <Link to={`/${language}/blog`} className="block text-sm text-muted-foreground hover:text-primary transition-colors px-3 py-2 hover:bg-muted/50 rounded" onClick={closeMobileMenu}>{t('footer.blogGuides')}</Link>
                      <Link to={`/${language}/nosotros`} className="block text-sm text-muted-foreground hover:text-primary transition-colors px-3 py-2 hover:bg-muted/50 rounded" onClick={closeMobileMenu}>{t('footer.aboutUs')}</Link>
                    </div>
                  </div>
                  
                  {/* Actions */}
                  <div className="border-t border-border pt-4 space-y-3">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={toggleLanguage}
                      className="w-full justify-start"
                    >
                      <span className="text-lg mr-2">{isEnglish ? '🇪🇸' : '🇬🇧'}</span>
                      <span className="text-sm font-medium">{isEnglish ? 'Cambiar a Español' : 'Switch to English'}</span>
                    </Button>
                    
                    <Button asChild className="gradient-primary text-white w-full hover-scale">
                      <Link to={getRoute('scheduleMeeting')} onClick={closeMobileMenu}>{t('footer.scheduleConsultation')}</Link>
                    </Button>
                  </div>
                </>
              )}

              {/* Soluciones Level */}
              {mobileMenuLevel === 'soluciones' && (
                <div className="space-y-4">
                  <div className="flex items-center pb-3 border-b border-border">
                    <button
                      onClick={() => navigateToLevel('main')}
                      className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      {t('nav.backToMain')}
                    </button>
                    <span className="ml-4 font-medium font-dm-sans text-foreground">{t('nav.solutions')}</span>
                  </div>
                  
                  <div className="space-y-3">
                    {pillars.map((p) => {
                      const config = pillarConfig[p.title as keyof typeof pillarConfig];
                      const Icon = config?.icon || DollarSign;
                      return (
                        <Link
                          key={p.href}
                          to={p.href}
                          className={`flex items-center gap-3 p-4 rounded-xl border border-border/50 hover:border-primary/30 transition-all ${config?.bgColor || 'hover:bg-muted/50'}`}
                          onClick={closeMobileMenu}
                        >
                          <div className={`p-2 rounded-lg bg-background shadow-sm ${config?.color || 'text-primary'}`}>
                            <Icon className="h-5 w-5" />
                          </div>
                          <span className="font-medium text-foreground">{p.title}</span>
                          <ArrowRight className="h-4 w-4 text-muted-foreground ml-auto" />
                        </Link>
                      );
                    })}
                  </div>
                  
                </div>
              )}
            </nav>
          </div>
        </>
      )}

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
              <h4 className="font-semibold text-foreground mb-6 text-center">{t('megaMenu.servicesTitle')}</h4>
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
