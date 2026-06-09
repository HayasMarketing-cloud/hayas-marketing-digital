import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useParams } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { AuthProvider } from '@/contexts/AuthContext';
import { LanguageProvider } from '@/contexts/LanguageContext';
import ScrollToTop from './components/ScrollToTop';
import DraftProtection from './components/DraftProtection';
import PageSuspense from './components/PageSuspense';
import RoutePreloader from './components/RoutePreloader';
import { AdminProtectedRoute } from './components/admin/AdminProtectedRoute';
import { lazy, Suspense, useEffect, useState } from 'react';
import { RedirectManager } from './components/RedirectManager';
const DynamicPageEN = lazy(() => import('./pages/en/DynamicPageEN'));

// Lazy-load heavy components to reduce initial bundle
const SofiaChatNew = lazy(() => import('./components/SofiaChatNew'));

// RouteValidator only in development
const RouteValidator = import.meta.env.DEV
  ? lazy(() => import('./components/dev/RouteValidator'))
  : () => null;

// Lazy imports organizados por categoría
import * as Pages from './utils/lazyImports';

const queryClient = new QueryClient();

// Idle-load SofÍA after main content renders
const IdleSofia = () => {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    if ('requestIdleCallback' in window) {
      const id = requestIdleCallback(() => setReady(true));
      return () => cancelIdleCallback(id);
    }
    const t = setTimeout(() => setReady(true), 1500);
    return () => clearTimeout(t);
  }, []);
  if (!ready) return null;
  return (
    <Suspense fallback={null}>
      <SofiaChatNew />
    </Suspense>
  );
};

// Componente reutilizable para redirecciones legacy
function LegacyRedirect({ section }: { section: string }) {
  const { slug } = useParams();
  const path = slug ? `${section}/${slug}` : section;
  return <Navigate to={`/es/${path}`} replace />;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <AuthProvider>
          <BrowserRouter>
            <LanguageProvider>
              <ScrollToTop />
              <RoutePreloader />
              <Suspense fallback={null}><RouteValidator /></Suspense>
              <IdleSofia />
              <DraftProtection>
                {/* Gestor de redirecciones React Router nativo */}
                <RedirectManager />
              
              <Routes>
           {/* REDIRECCIÓN ROOT A ESPAÑOL */}
           <Route path="/" element={<Navigate to="/es" replace />} />
           <Route path="/e" element={<Navigate to="/es" replace />} />
           
           {/* REDIRECCIONES DINÁMICAS LEGACY (sin /es/) */}
           <Route path="/casos-exito/:slug/*" element={<LegacyRedirect section="casos-exito" />} />
           <Route path="/servicios/:slug/*" element={<LegacyRedirect section="servicios" />} />
           <Route path="/blog/:slug/*" element={<LegacyRedirect section="blog" />} />
           <Route path="/kit-digital/:slug/*" element={<LegacyRedirect section="kit-digital" />} />
           <Route path="/soluciones/:slug/*" element={<LegacyRedirect section="soluciones" />} />
           
           {/* REDIRECCIÓN ESPECÍFICA BLOG POST */}
           <Route path="/es/que-es-y-para-que-sirve-el-perfil-de-cliente-ideal" element={<Navigate to="/es/blog/perfil-cliente-ideal" replace />} />
           <Route path="/es/que-es-y-para-que-sirve-el-perfil-de-cliente-ideal/" element={<Navigate to="/es/blog/perfil-cliente-ideal" replace />} />
           {/* Legacy corto → slug definitivo */}
           <Route path="/es/ia-en-redes-sociales" element={<Navigate to="/es/blog/ia-redes-sociales-herramientas-riesgos" replace />} />
           <Route path="/es/ia-en-redes-sociales/" element={<Navigate to="/es/blog/ia-redes-sociales-herramientas-riesgos" replace />} />
           
           {/* REDIRECCIONES SIN PREFIJO /es/ */}
           <Route path="/blog/crm-que-es-beneficios" element={<Navigate to="/es/blog/crm-que-es-beneficios" replace />} />
           <Route path="/nosotros" element={<Navigate to="/es/nosotros" replace />} />
           
           {/* Navegación y Contacto Legacy */}
           <Route path="/contacto" element={<Navigate to="/es/contacto" replace />} />
           <Route path="/contactar" element={<Navigate to="/es/contacto" replace />} />
           <Route path="/agenda-una-reunion/" element={<Navigate to="/es/contacto" replace />} />
           <Route path="/captacion-leads" element={<Navigate to="/es/soluciones/captacion-leads" replace />} />
           <Route path="/captacion-leads-clientes" element={<Navigate to="/es/servicios/captacion-leads-clientes" replace />} />
           <Route path="/creacion-marca" element={<Navigate to="/es/servicios/creacion-marca" replace />} />
           <Route path="/estrategia-contenidos" element={<Navigate to="/es/servicios/estrategia-contenidos" replace />} />
           <Route path="/gestion-marketing" element={<Navigate to="/es/servicios/campanas-inbound-marketing" replace />} />
           <Route path="/automatizacion-procesos-ventas" element={<Navigate to="/es/servicios/automatizacion-procesos-ventas" replace />} />
           <Route path="/sector-fintech" element={<Navigate to="/es/soluciones" replace />} />
           <Route path="/sector-educacion" element={<Navigate to="/es/soluciones" replace />} />
           <Route path="/servicios-inbound-marketing-b2b/seo" element={<Navigate to="/es/servicios/seo-posicionamiento" replace />} />
           <Route path="/servicios-inbound-marketing-b2b/automatizacion-marketing" element={<Navigate to="/es/servicios/automatizacion-procesos-ventas" replace />} />
           <Route path="/que-es-marketing-natural" element={<Navigate to="/es/blog/marketing-natural-posicionamiento-organico" replace />} />
           <Route path="/agencia-marketingdigital-madrid" element={<Navigate to="/es/servicios" replace />} />
           
           {/* Servicios Legacy SIN /es/ */}
           <Route path="/servicios/email-marketing-automatizaciones" element={<Navigate to="/es/servicios/email-marketing-automatizaciones" replace />} />
           <Route path="/servicios/consultoria-estrategica-analitica" element={<Navigate to="/es/servicios/consultoria-estrategica-analitica" replace />} />
           <Route path="/servicios/integraciones-ia-procesos" element={<Navigate to="/es/servicios/integraciones-ia-procesos" replace />} />
           <Route path="/servicios" element={<Navigate to="/es/servicios" replace />} />
           <Route path="/branding-e-identidad-de-marca/" element={<Navigate to="/es/servicios/creacion-marca" replace />} />
           <Route path="/publicidad-en-google-ads/" element={<Navigate to="/es/servicios/publicidad-google-ads" replace />} />
           <Route path="/publicidad-google-ads" element={<Navigate to="/es/servicios/publicidad-google-ads" replace />} />
           <Route path="/contenidos-y-seo/" element={<Navigate to="/es/servicios/estrategia-contenidos" replace />} />
           <Route path="/diseno-y-desarrollo-paginas-web/" element={<Navigate to="/es/servicios/diseno-web" replace />} />
           <Route path="/diseno-web" element={<Navigate to="/es/servicios/diseno-web" replace />} />
           <Route path="/gestion-de-redes-sociales/" element={<Navigate to="/es/servicios/gestion-redes-sociales" replace />} />
           <Route path="/gestion-redes-sociales" element={<Navigate to="/es/servicios/gestion-redes-sociales" replace />} />
           <Route path="/crm-y-automatizacion-de-marketing/" element={<Navigate to="/es/servicios/implantacion-crm" replace />} />
           <Route path="/seo-y-posicionamiento-en-buscadores/" element={<Navigate to="/es/servicios/seo-posicionamiento" replace />} />
           <Route path="/estrategia-de-marketing-digital-360/" element={<Navigate to="/es/servicios/campanas-inbound-marketing" replace />} />
           <Route path="/email-marketing-automatizaciones" element={<Navigate to="/es/servicios/email-marketing-automatizaciones" replace />} />
           <Route path="/consultoria-estrategica-analitica" element={<Navigate to="/es/servicios/consultoria-estrategica-analitica" replace />} />
           <Route path="/consultoria-seo" element={<Navigate to="/es/servicios/seo-posicionamiento" replace />} />
           <Route path="/link-building" element={<Navigate to="/es/servicios/seo-posicionamiento" replace />} />
           <Route path="/servicios-de-marketing-digital-integrados-en-tu-estrategia" element={<Navigate to="/es/servicios" replace />} />
          <Route path="/servicios/marketing-directo" element={<Navigate to="/es/servicios/marketing-directo" replace />} />
          <Route path="/servicios/seo-positioning" element={<Navigate to="/es/servicios/seo-positioning" replace />} />
          <Route path="/comparativa-hubspot-gohighlevel" element={<Navigate to="/es/comparativa/hubspot-vs-go-high-level" replace />} />
          <Route path="/soluciones/marketing-visibilidad" element={<Navigate to="/es/soluciones/marketing-visibilidad" replace />} />
          
          {/* RUTAS EN ESPAÑOL */}
          <Route path="/es" element={<PageSuspense><Pages.Index /></PageSuspense>} />
          
           {/* NOSOTROS */}
          <Route path="/es/nosotros" element={<PageSuspense><Pages.Nosotros /></PageSuspense>} />
          
          {/* ACTIVACIONES - 6 Grupos de ejecución */}
          <Route path="/es/activaciones/research" element={<PageSuspense><Pages.ResearchActivation /></PageSuspense>} />
          <Route path="/es/activaciones/growth" element={<PageSuspense><Pages.GrowthActivation /></PageSuspense>} />
          <Route path="/es/activaciones/visibility" element={<PageSuspense><Pages.VisibilityActivation /></PageSuspense>} />
          <Route path="/es/activaciones/web-funnel" element={<PageSuspense><Pages.WebFunnelActivation /></PageSuspense>} />
          <Route path="/es/activaciones/crm-automation" element={<PageSuspense><Pages.CrmAutomationActivation /></PageSuspense>} />
          <Route path="/es/activaciones/content-brand" element={<PageSuspense><Pages.ContentBrandActivation /></PageSuspense>} />
          
          {/* SOLUCIONES LEGACY → Redirect a Activaciones */}
          <Route path="/es/soluciones/impulsa-tu-marca" element={<Navigate to="/es/activaciones/visibility" replace />} />
          <Route path="/es/soluciones/conecta-con-tus-clientes" element={<Navigate to="/es/activaciones/crm-automation" replace />} />
          <Route path="/es/soluciones/activa-tus-ventas" element={<Navigate to="/es/activaciones/growth" replace />} />
          <Route path="/es/soluciones/activa-tu-estrategia-digital" element={<Navigate to="/es/activaciones/growth" replace />} />
          <Route path="/es/soluciones/ia-marketing" element={<Navigate to="/es/activaciones/research" replace />} />
          <Route path="/es/soluciones/marketing-visibilidad" element={<Navigate to="/es/activaciones/visibility" replace />} />
          <Route path="/es/soluciones/gestion-marketing" element={<Navigate to="/es/servicios/administracion-crm" replace />} />
          <Route path="/es/soluciones/captacion-leads" element={<Navigate to="/es/activaciones/growth" replace />} />
          <Route path="/es/soluciones/automatizacion-marketing" element={<Navigate to="/es/activaciones/crm-automation" replace />} />
          <Route path="/es/soluciones/gestion-clientes-crm" element={<Navigate to="/es/activaciones/crm-automation" replace />} />
          
          <Route path="/es/servicios/tienda-online" element={<PageSuspense><Pages.TiendaOnline /></PageSuspense>} />
          <Route path="/es/kit-consulting" element={<PageSuspense><Pages.KitConsulting /></PageSuspense>} />
          <Route path="/es/kit-digital" element={<PageSuspense><Pages.KitDigital /></PageSuspense>} />
          <Route path="/es/kit-digital/presencia-basica-internet" element={<PageSuspense><Pages.KitDigitalPresenciaBasica /></PageSuspense>} />
          <Route path="/es/kit-digital/gestion-clientes-crm" element={<PageSuspense><Pages.KitDigitalGestionClientes /></PageSuspense>} />
          <Route path="/es/kit-digital/gestion-red-social" element={<PageSuspense><Pages.KitDigitalRedesSociales /></PageSuspense>} />
           <Route path="/es/kit-digital/presencia-avanzada-seo" element={<PageSuspense><Pages.KitDigitalPresenciaAvanzada /></PageSuspense>} />
           
           {/* Kit Digital - Páginas individuales eliminadas */}
           <Route path="/es/kit-digital-gestion-de-clientes-crm-hubspot" element={<Navigate to="/es/servicios/kit-digital-gestion-de-clientes-crm" replace />} />
           <Route path="/es/kit-digital-gestion-de-clientes-crm-hubspot/" element={<Navigate to="/es/servicios/kit-digital-gestion-de-clientes-crm" replace />} />
           <Route path="/es/kit-digital-paginas-web" element={<Navigate to="/es/kit-digital" replace />} />
           <Route path="/es/kit-digital-paginas-web/" element={<Navigate to="/es/kit-digital" replace />} />
           <Route path="/es/kit-digital-tienda-online" element={<Navigate to="/es/kit-digital" replace />} />
           <Route path="/es/kit-digital-tienda-online/" element={<Navigate to="/es/kit-digital" replace />} />
           <Route path="/es/kit-digital-marketplaces" element={<Navigate to="/es/kit-digital" replace />} />
           <Route path="/es/kit-digital-marketplaces/" element={<Navigate to="/es/kit-digital" replace />} />
           <Route path="/es/kit-digital-seo-avanzado" element={<Navigate to="/es/kit-digital" replace />} />
           <Route path="/es/kit-digital-seo-avanzado/" element={<Navigate to="/es/kit-digital" replace />} />
           <Route path="/es/kit-digital-gestion-redes-sociales" element={<Navigate to="/es/kit-digital" replace />} />
           <Route path="/es/kit-digital-gestion-redes-sociales/" element={<Navigate to="/es/kit-digital" replace />} />
           <Route path="/es/kit-digital-gestion-de-procesos" element={<Navigate to="/es/kit-digital" replace />} />
           <Route path="/es/kit-digital-gestion-de-procesos/" element={<Navigate to="/es/kit-digital" replace />} />
           <Route path="/es/kit-digital-gestion-de-clientes-crm" element={<Navigate to="/es/servicios/kit-digital-gestion-de-clientes-crm" replace />} />
           <Route path="/es/kit-digital-gestion-de-clientes-crm/" element={<Navigate to="/es/servicios/kit-digital-gestion-de-clientes-crm" replace />} />
           <Route path="/kit-digital-gestion-de-clientes-crm/" element={<Navigate to="/es/servicios/kit-digital-gestion-de-clientes-crm" replace />} />
           <Route path="/kit-digital-seo-avanzado/" element={<Navigate to="/es/kit-digital" replace />} />
           <Route path="/kit-digital-gestion-redes-sociales/" element={<Navigate to="/es/kit-digital" replace />} />
           <Route path="/kit-digital-tienda-online/" element={<Navigate to="/es/kit-digital" replace />} />
           
           {/* CASOS DE ÉXITO - Redirecciones legacy SIN /es/ (sin y con trailing slash) */}
           <Route path="/casos-exito/motiva-tu-mente" element={<Navigate to="/es/casos-exito/motiva-tu-mente" replace />} />
           <Route path="/casos-exito/motiva-tu-mente/" element={<Navigate to="/es/casos-exito/motiva-tu-mente" replace />} />
           <Route path="/casos-exito/aistercel" element={<Navigate to="/es/casos-exito/aistercel" replace />} />
           <Route path="/casos-exito/aistercel/" element={<Navigate to="/es/casos-exito/aistercel" replace />} />
           <Route path="/casos-exito/moda-intima-vania" element={<Navigate to="/es/casos-exito/moda-intima-vania" replace />} />
           <Route path="/casos-exito/moda-intima-vania/" element={<Navigate to="/es/casos-exito/moda-intima-vania" replace />} />
           <Route path="/casos-exito/wooptix" element={<Navigate to="/es/casos-exito/wooptix" replace />} />
           <Route path="/casos-exito/wooptix/" element={<Navigate to="/es/casos-exito/wooptix" replace />} />
           <Route path="/casos-exito/plaza-de-la-estacion" element={<Navigate to="/es/casos-exito/plaza-de-la-estacion" replace />} />
           <Route path="/casos-exito/plaza-de-la-estacion/" element={<Navigate to="/es/casos-exito/plaza-de-la-estacion" replace />} />
           <Route path="/casos-exito/unitrips" element={<Navigate to="/es/casos-exito/unitrips" replace />} />
           <Route path="/casos-exito/unitrips/" element={<Navigate to="/es/casos-exito/unitrips" replace />} />
           <Route path="/casos-exito/finect" element={<Navigate to="/es/casos-exito/finect" replace />} />
           <Route path="/casos-exito/finect/" element={<Navigate to="/es/casos-exito/finect" replace />} />
           <Route path="/casos-exito/eurobits-technologies" element={<Navigate to="/es/casos-exito/eurobits-technologies" replace />} />
           <Route path="/casos-exito/eurobits-technologies/" element={<Navigate to="/es/casos-exito/eurobits-technologies" replace />} />
           <Route path="/casos-exito/fundacion-casa-mexico" element={<Navigate to="/es/casos-exito/fundacion-casa-mexico" replace />} />
           <Route path="/casos-exito/fundacion-casa-mexico/" element={<Navigate to="/es/casos-exito/fundacion-casa-mexico" replace />} />
           <Route path="/casos-exito/covebo" element={<Navigate to="/es/casos-exito/covebo" replace />} />
           <Route path="/casos-exito/covebo/" element={<Navigate to="/es/casos-exito/covebo" replace />} />
           <Route path="/casos-exito/beka-finance" element={<Navigate to="/es/casos-exito/beka-finance" replace />} />
           <Route path="/casos-exito/beka-finance/" element={<Navigate to="/es/casos-exito/beka-finance" replace />} />
           <Route path="/casos-exito/give-and-go" element={<Navigate to="/es/casos-exito/give-and-go" replace />} />
           <Route path="/casos-exito/give-and-go/" element={<Navigate to="/es/casos-exito/give-and-go" replace />} />
           <Route path="/casos-exito/lualca" element={<Navigate to="/es/casos-exito/lualca" replace />} />
           <Route path="/casos-exito/lualca/" element={<Navigate to="/es/casos-exito/lualca" replace />} />
           <Route path="/casos-exito/aecoc" element={<Navigate to="/es/casos-exito/aecoc" replace />} />
           <Route path="/casos-exito/aecoc/" element={<Navigate to="/es/casos-exito/aecoc" replace />} />
           <Route path="/casos-exito/asendia" element={<Navigate to="/es/casos-exito/asendia" replace />} />
           <Route path="/casos-exito/asendia/" element={<Navigate to="/es/casos-exito/asendia" replace />} />
           <Route path="/casos-exito/asp-asepsia" element={<Navigate to="/es/casos-exito/asp-asepsia" replace />} />
           <Route path="/casos-exito/asp-asepsia/" element={<Navigate to="/es/casos-exito/asp-asepsia" replace />} />
           <Route path="/casos-exito/buhobike" element={<Navigate to="/es/casos-exito/buhobike" replace />} />
           <Route path="/casos-exito/buhobike/" element={<Navigate to="/es/casos-exito/buhobike" replace />} />
           <Route path="/casos-exito/cabrera-cervantes" element={<Navigate to="/es/casos-exito/cabrera-cervantes" replace />} />
           <Route path="/casos-exito/cabrera-cervantes/" element={<Navigate to="/es/casos-exito/cabrera-cervantes" replace />} />
           <Route path="/casos-exito/jointsup" element={<Navigate to="/es/casos-exito/joints-up" replace />} />
           <Route path="/casos-exito/jointsup/" element={<Navigate to="/es/casos-exito/joints-up" replace />} />
           <Route path="/casos-exito/aip-clinic" element={<Navigate to="/es/casos-exito/aip-clinic" replace />} />
           <Route path="/casos-exito/aip-clinic/" element={<Navigate to="/es/casos-exito/aip-clinic" replace />} />
           <Route path="/casos-exito/hotteo-travel" element={<Navigate to="/es/casos-exito/hotteo-travel" replace />} />
           <Route path="/casos-exito/hotteo-travel/" element={<Navigate to="/es/casos-exito/hotteo-travel" replace />} />
           <Route path="/casos-exito" element={<Navigate to="/es/casos-exito" replace />} />
           <Route path="/casos-exito/" element={<Navigate to="/es/casos-exito" replace />} />
           
           {/* CASOS DE ÉXITO - Página principal */}
           <Route path="/es/casos-exito" element={<PageSuspense><Pages.CasosExito /></PageSuspense>} />
           
           {/* CASOS DE ÉXITO - Apoyan las soluciones */}
          <Route path="/es/casos-exito/asendia" element={<PageSuspense><Pages.CasoExitoAsendia /></PageSuspense>} />
          <Route path="/es/casos-exito/nexo-vital" element={<PageSuspense><Pages.CasoExitoNexoVital /></PageSuspense>} />
          <Route path="/es/casos-exito/i-virgen-extra" element={<PageSuspense><Pages.CasoExitoIVirgenExtra /></PageSuspense>} />
          <Route path="/es/casos-exito/inbound-students" element={<PageSuspense><Pages.CasoExitoInboundStudents /></PageSuspense>} />
          <Route path="/es/casos-exito/calisthenia-online" element={<PageSuspense><Pages.CalistheniaOnlinePage /></PageSuspense>} />
          <Route path="/es/casos-exito/centro-roraima" element={<PageSuspense><Pages.CasoExitoCentroRoraima /></PageSuspense>} />
          <Route path="/es/casos-exito/joints-up" element={<PageSuspense><Pages.CasoExitoJointsUp /></PageSuspense>} />
          <Route path="/es/casos-exito/dr-parron" element={<PageSuspense><Pages.CasoExitoDrParron /></PageSuspense>} />
          <Route path="/es/casos-exito/translate-with-style" element={<PageSuspense><Pages.CasoExitoTranslateWithStyle /></PageSuspense>} />
          <Route path="/es/casos-exito/formato-educativo" element={<PageSuspense><Pages.CasoExitoFormatoEducativo /></PageSuspense>} />
          <Route path="/es/casos-exito/omr" element={<PageSuspense><Pages.CasoExitoOMR /></PageSuspense>} />
          <Route path="/es/casos-exito/asp-asepsia" element={<PageSuspense><Pages.CasoExitoAspAsepsia /></PageSuspense>} />
          <Route path="/es/casos-exito/bufete-maseras" element={<PageSuspense><Pages.CasoExitoBufeteMaseras /></PageSuspense>} />
          <Route path="/es/casos-exito/moda-intima-vania" element={<PageSuspense><Pages.CasoExitoModaIntimaVania /></PageSuspense>} />
          <Route path="/es/casos-exito/alfix-consultores" element={<PageSuspense><Pages.CasoExitoAlfixConsultores /></PageSuspense>} />
          <Route path="/es/casos-exito/alma-cruceros" element={<PageSuspense><Pages.CasoExitoAlmaCruceros /></PageSuspense>} />
          <Route path="/es/casos-exito/la-banera-kd" element={<PageSuspense><Pages.CasoExitoLaBaneraKD /></PageSuspense>} />
          <Route path="/es/casos-exito/suministros-xs-kd" element={<PageSuspense><Pages.CasoExitoSuministrosXSKD /></PageSuspense>} />
          <Route path="/es/casos-exito/conversa-consultores" element={<PageSuspense><Pages.CasoExitoConversaConsultores /></PageSuspense>} />
          <Route path="/es/casos-exito/buhobike" element={<PageSuspense><Pages.CasoExitoBuhobike /></PageSuspense>} />
          <Route path="/es/casos-exito/cabrera-cervantes" element={<PageSuspense><Pages.CasoExitoCabreraCervantes /></PageSuspense>} />
          <Route path="/es/casos-exito/eva-champion" element={<PageSuspense><Pages.CasoExitoEvaChampion /></PageSuspense>} />
          <Route path="/es/casos-exito/beluga-linguistics" element={<PageSuspense><Pages.CasoExitoBelugaLinguistics /></PageSuspense>} />
          <Route path="/es/casos-exito/wooptix" element={<PageSuspense><Pages.CasoExitoWooptix /></PageSuspense>} />
          <Route path="/es/casos-exito/pamdamedia" element={<PageSuspense><Pages.CasoExitoPamdamedia /></PageSuspense>} />
          <Route path="/es/casos-exito/give-and-go" element={<PageSuspense><Pages.CasoExitoGiveAndGo /></PageSuspense>} />
          <Route path="/es/casos-exito/hikvision" element={<PageSuspense><Pages.CasoExitoHikvision /></PageSuspense>} />
          <Route path="/es/casos-exito/owo-game" element={<PageSuspense><Pages.CasoExitoOWOGame /></PageSuspense>} />
          <Route path="/es/casos-exito/nova-praxis" element={<PageSuspense><Pages.CasoExitoNovaPraxis /></PageSuspense>} />
          <Route path="/es/casos-exito/aistercel" element={<PageSuspense><Pages.CasoExitoAistercel /></PageSuspense>} />
          <Route path="/es/casos-exito/quanticbi" element={<PageSuspense><Pages.CasoExitoQuanticBI /></PageSuspense>} />
          <Route path="/es/casos-exito/peixos-emilio" element={<PageSuspense><Pages.CasoExitoPeixosEmilio /></PageSuspense>} />
          <Route path="/es/casos-exito/corte-a-films" element={<PageSuspense><Pages.CasoExitoCorteAFilms /></PageSuspense>} />
          <Route path="/es/casos-exito/lualca" element={<PageSuspense><Pages.CasoExitoLualca /></PageSuspense>} />
          <Route path="/es/casos-exito/plaza-de-la-estacion" element={<PageSuspense><Pages.CasoExitoPlazaEstacion /></PageSuspense>} />
          <Route path="/es/casos-exito/rivas-centro" element={<PageSuspense><Pages.CasoExitoRivasCentro /></PageSuspense>} />
          <Route path="/es/casos-exito/hubspot-for-startups" element={<PageSuspense><Pages.CasoExitoHubSpotForStartups /></PageSuspense>} />
          <Route path="/es/casos-exito/beka-finance" element={<PageSuspense><Pages.CasoExitoBekaFinance /></PageSuspense>} />
          <Route path="/es/casos-exito/peris-electricidad" element={<PageSuspense><Pages.CasoExitoPerisElectricidad /></PageSuspense>} />
          <Route path="/es/casos-exito/carniceria-picos-de-europa" element={<PageSuspense><Pages.CasoExitoCarniceriaPicosDeEuropa /></PageSuspense>} />
          <Route path="/es/casos-exito/pasteleria-la-oriental-sin-gluten" element={<PageSuspense><Pages.CasoExitoLaOrientalSinGluten /></PageSuspense>} />
          <Route path="/es/casos-exito/flap-articulos-peluqueria" element={<PageSuspense><Pages.CasoExitoFLAP /></PageSuspense>} />
          <Route path="/es/casos-exito/wideum" element={<PageSuspense><Pages.CasoExitoWideum /></PageSuspense>} />
          <Route path="/es/casos-exito/aecoc" element={<PageSuspense><Pages.CasoExitoAECOC /></PageSuspense>} />
          <Route path="/es/casos-exito/finect" element={<PageSuspense><Pages.CasoExitoFINECT /></PageSuspense>} />
          <Route path="/es/casos-exito/covebo" element={<PageSuspense><Pages.CasoExitoCOVEBO /></PageSuspense>} />
          <Route path="/es/casos-exito/fundacion-casa-mexico" element={<PageSuspense><Pages.CasoExitoFundacionCasaMexico /></PageSuspense>} />
          <Route path="/es/casos-exito/motiva-tu-mente" element={<PageSuspense><Pages.CasoExitoMotivaTuMente /></PageSuspense>} />
          <Route path="/es/casos-exito/eurobits-technologies" element={<PageSuspense><Pages.CasoExitoEurobitsTechnologies /></PageSuspense>} />
          <Route path="/es/casos-exito/bodegas-vilano" element={<PageSuspense><Pages.CasoExitoBodegasVilano /></PageSuspense>} />
          <Route path="/es/casos-exito/unitrips" element={<PageSuspense><Pages.CasoExitoUnitrips /></PageSuspense>} />
          <Route path="/es/casos-exito/lola-robles-abogada" element={<PageSuspense><Pages.CasoExitoLolaRoblesAbogada /></PageSuspense>} />
          <Route path="/es/casos-exito/aip-clinic" element={<PageSuspense><Pages.CasoExitoAIPClinic /></PageSuspense>} />
          <Route path="/es/casos-exito/hotteo-travel" element={<PageSuspense><Pages.CasoExitoHotteoTravel /></PageSuspense>} />
          
            {/* Blog Posts Legacy SIN /es/ */}
            <Route path="/blog" element={<Navigate to="/es/blog" replace />} />
            <Route path="/blog/" element={<Navigate to="/es/blog" replace />} />
            <Route path="/blog/page/2" element={<Navigate to="/es/blog" replace />} />
            <Route path="/blog/como-crear-un-funnel-de-conversion-para-empresas-b2b" element={<Navigate to="/es/blog/funnel-conversion-b2B" replace />} />
            <Route path="/como-crear-un-funnel-de-conversion-para-empresas-b2b" element={<Navigate to="/es/blog/funnel-conversion-b2B" replace />} />
            <Route path="/blog/marketing-global-internacionalizacion-i18n-y-localizacion-l10n" element={<Navigate to="/es/blog/marketing-global-internacionalizacion" replace />} />
            <Route path="/marketing-global-internacionalizacion-i18n-y-localizacion-l10n/" element={<Navigate to="/es/blog/marketing-global-internacionalizacion" replace />} />
           <Route path="/re-commerce-la-economia-circular-del-e-commerce/" element={<Navigate to="/es/blog/re-commerce-economia-circular-ecommerce-partnership-sharpei" replace />} />
           <Route path="/branding-proceso-y-tecnicas-de-naming" element={<Navigate to="/es/blog/branding-proceso-tecnicas-naming" replace />} />
           <Route path="/que-es-smarketing" element={<Navigate to="/es/blog/abm-account-based-marketing" replace />} />
           <Route path="/como-elegir-el-mejor-crm-para-tu-empresa-u-organizacion/" element={<Navigate to="/es/blog/como-elegir-mejor-crm-empresa-organizacion" replace />} />
           <Route path="/food-design-festival-2024-innovacion-y-tecnologia-en-el-sector-alimentario/" element={<Navigate to="/es/blog" replace />} />
           <Route path="/llega-la-web-3-0/" element={<Navigate to="/es/blog/web-3-0-futuro-internet-descentralizado" replace />} />
           <Route path="/identidad-corporativa-para-restaurantes/" element={<Navigate to="/es/casos-exito" replace />} />
           <Route path="/marketing-de-influencers-vs-microinfluencers/" element={<Navigate to="/es/blog" replace />} />
           <Route path="/buenas-practicas-tecnicas-de-email-marketing-con-hubspot/" element={<Navigate to="/es/blog/guia-tecnica-email-marketing-hubspot-configuracion" replace />} />
           <Route path="/como-crear-una-estrategia-de-marketing-de-contenidos-eficaz/" element={<Navigate to="/es/blog/business-model-canvas-para-crear-tu-estrategia-de-marketing" replace />} />
           <Route path="/estrategia-de-marketing-digital-360/" element={<Navigate to="/es/servicios/campanas-inbound-marketing" replace />} />
           <Route path="/como-crear-un-funnel-de-conversion-para-empresas-b2b/" element={<Navigate to="/es/blog/funnel-conversion-b2B" replace />} />
           <Route path="/proyectos-de-empresas-con-tecnologia-blockchain/" element={<Navigate to="/es/blog/proyectos-empresas-blockchain" replace />} />
           <Route path="/guia-completa-kit-digital-2024-para-autonomos-y-pymes/" element={<Navigate to="/es/blog/kit-digital-marketing-guia-completa-2025" replace />} />
           <Route path="/como-configurar-tu-crm-de-hubspot/" element={<Navigate to="/es/blog/guia-tecnica-email-marketing-hubspot-configuracion" replace />} />
           <Route path="/que-es-y-para-que-sirven-los-buyer-personas/" element={<Navigate to="/es/blog/como-crear-buyer-persona-b2b-b2c-guia-completa" replace />} />
           <Route path="/crm-y-automatizacion-de-marketing/" element={<Navigate to="/es/blog/crm-que-es-beneficios" replace />} />
           <Route path="/que-es-un-crm-o-customer-relationship-management/" element={<Navigate to="/es/blog/crm-que-es-beneficios" replace />} />
           <Route path="/como-se-crea-una-estrategia-de-branding/" element={<Navigate to="/es/blog/branding-proceso-tecnicas-naming" replace />} />
           <Route path="/tu-estrategia-con-marketing-model-canvas/" element={<Navigate to="/es/blog/business-model-canvas-para-crear-tu-estrategia-de-marketing" replace />} />
           <Route path="/descubre-los-verdaderos-ladrones-del-tiempo-y-recupera-tu-productividad/" element={<Navigate to="/es/blog" replace />} />
            <Route path="/branding-proceso-y-tecnicas-de-naming/" element={<Navigate to="/es/blog/branding-proceso-tecnicas-naming" replace />} />
            <Route path="/blog/branding-proceso-y-tecnicas-de-naming" element={<Navigate to="/es/blog/branding-proceso-tecnicas-naming" replace />} />
            <Route path="/como-crear-tu-buyer-persona-para-b2b-infografia/" element={<Navigate to="/es/blog/como-crear-buyer-persona-b2b-b2c-guia-completa" replace />} />
            <Route path="/proyectos-de-empresas-con-tecnologia-blockchain/" element={<Navigate to="/es/blog/proyectos-empresas-blockchain" replace />} />
            <Route path="/blog/proyectos-b2b-con-tecnologia-blockchain" element={<Navigate to="/es/blog/proyectos-empresas-blockchain" replace />} />
            <Route path="/estrategia-de-captacion-de-leads-para-la-escuela-de-negocios-formato-educativo/" element={<Navigate to="/es/blog" replace />} />
            <Route path="/estrategia-account-based-marketing-abm-para-captar-grandes-cuentas/" element={<Navigate to="/es/blog/abm-account-based-marketing" replace />} />
            <Route path="/guia-completa-kit-digital-2024-para-autonomos-y-pymes/" element={<Navigate to="/es/blog/kit-digital-marketing-guia-completa-2025" replace />} />
            <Route path="/como-configurar-tu-crm-de-hubspot/" element={<Navigate to="/es/blog" replace />} />
            <Route path="/blog/como-configurar-tu-crm-de-hubspot" element={<Navigate to="/es/blog" replace />} />
            <Route path="/que-es-smarketing/" element={<Navigate to="/es/blog" replace />} />
            <Route path="/blog/que-es-smarketing" element={<Navigate to="/es/blog" replace />} />
            <Route path="/que-es-smarketing" element={<Navigate to="/es/blog" replace />} />
            <Route path="/blog/que-es-y-para-que-sirven-los-buyer-personas" element={<Navigate to="/es/blog/como-crear-buyer-persona-b2b-b2c-guia-completa" replace />} />
            <Route path="/que-es-y-para-que-sirven-los-buyer-personas/" element={<Navigate to="/es/blog/como-crear-buyer-persona-b2b-b2c-guia-completa" replace />} />
            <Route path="/blog/tu-estrategia-con-marketing-model-canvas" element={<Navigate to="/es/blog/business-model-canvas-para-crear-tu-estrategia-de-marketing" replace />} />
            <Route path="/tu-estrategia-con-marketing-model-canvas/" element={<Navigate to="/es/blog/business-model-canvas-para-crear-tu-estrategia-de-marketing" replace />} />
            <Route path="/marketing-de-influencers-vs-microinfluencers/" element={<Navigate to="/es/blog" replace />} />
            <Route path="/identidad-corporativa-para-restaurantes/" element={<Navigate to="/es/soluciones/branding-identidad" replace />} />
            <Route path="/food-design-festival-2024-innovacion-y-tecnologia-en-el-sector-alimentario/" element={<Navigate to="/es/blog" replace />} />
            <Route path="/descubre-los-verdaderos-ladrones-del-tiempo-y-recupera-tu-productividad/" element={<Navigate to="/es/blog" replace />} />
            <Route path="/llega-la-web-3-0/" element={<Navigate to="/es/blog/web-3-0-futuro-internet-descentralizado" replace />} />
            <Route path="/como-elegir-el-mejor-crm-para-tu-empresa-u-organizacion/" element={<Navigate to="/es/blog/como-elegir-mejor-crm-empresa-organizacion" replace />} />
            <Route path="/automatizacion-de-marketing-digital/" element={<Navigate to="/es/blog/automatizacion-marketing-digital-guia-completa" replace />} />
            <Route path="/como-se-crea-una-estrategia-de-branding/" element={<Navigate to="/es/soluciones/branding-identidad" replace />} />
            <Route path="/buenas-practicas-tecnicas-de-email-marketing-con-hubspot/" element={<Navigate to="/es/blog" replace />} />
            <Route path="/que-es-un-crm-o-customer-relationship-management/" element={<Navigate to="/es/blog/crm-que-es-beneficios" replace />} />
            <Route path="/como-crear-una-estrategia-de-marketing-de-contenidos-eficaz/" element={<Navigate to="/es/blog" replace />} />
            <Route path="/blog/guia-completa-kit-digital-2024-para-autonomos-y-pymes?hsLang=es" element={<Navigate to="/es/blog/kit-digital-marketing-guia-completa-2025" replace />} />
            
            {/* BLOG / RECURSOS */}
            <Route path="/es/blog" element={<PageSuspense><Pages.Blog /></PageSuspense>} />
            
            {/* REDIRECCIONES CLIENT-SIDE - Post IA Marketing (URLs legacy SIN /blog/) */}
           <Route path="/es/la-inteligencia-artificial-ia-y-su-aplicacion-en-marketing" 
                  element={<Navigate to="/es/blog/la-inteligencia-artificial-ia-y-su-aplicacion-en-marketing" replace />} />
           <Route path="/es/la-inteligencia-artificial-ia-y-su-aplicacion-en-marketing/" 
                  element={<Navigate to="/es/blog/la-inteligencia-artificial-ia-y-su-aplicacion-en-marketing" replace />} />
           <Route path="/la-inteligencia-artificial-ia-y-su-aplicacion-en-marketing" 
                  element={<Navigate to="/es/blog/la-inteligencia-artificial-ia-y-su-aplicacion-en-marketing" replace />} />
           <Route path="/la-inteligencia-artificial-ia-y-su-aplicacion-en-marketing/" 
                  element={<Navigate to="/es/blog/la-inteligencia-artificial-ia-y-su-aplicacion-en-marketing" replace />} />
           
           {/* URL CANÓNICA - Post IA Marketing */}
           <Route path="/es/blog/la-inteligencia-artificial-ia-y-su-aplicacion-en-marketing" element={<PageSuspense><Pages.BlogIAMarketing /></PageSuspense>} />
           
           <Route path="/es/blog/guia-tecnica-email-marketing-hubspot-configuracion" element={<PageSuspense><Pages.BlogEmailMarketingHubSpot /></PageSuspense>} />
           <Route path="/es/blog/configuracion-email-marketing-cumplimiento-normativo" element={<PageSuspense><Pages.BlogConfiguracionEmailMarketingCumplimiento /></PageSuspense>} />
           
            {/* REDIRECCIONES CRÍTICAS - URLs truncadas y legacy de otros posts */}
            {/* Buyer Persona - Redirecciones legacy */}
            <Route path="/es/blog/como-crear-tu-buyer-persona-para-b2b-infografia" 
                   element={<Navigate to="/es/blog/como-crear-buyer-persona-b2b-b2c-guia-completa" replace />} />
            <Route path="/es/blog/como-crear-tu-buyer-persona-para-b2b-infografia/" 
                   element={<Navigate to="/es/blog/como-crear-buyer-persona-b2b-b2c-guia-completa" replace />} />
            <Route path="/blog/como-crear-tu-buyer-persona-para-b2b-infografia" 
                   element={<Navigate to="/es/blog/como-crear-buyer-persona-b2b-b2c-guia-completa" replace />} />
            <Route path="/blog/como-crear-tu-buyer-persona-para-b2b-infografia/" 
                   element={<Navigate to="/es/blog/como-crear-buyer-persona-b2b-b2c-guia-completa" replace />} />
            
            {/* Re-commerce - URLs truncadas */}
            <Route path="/es/re-commerce-la-economia-circular-del-e-" 
                   element={<Navigate to="/es/blog/re-commerce-economia-circular-ecommerce-partnership-sharpei" replace />} />
            
            {/* IA Marketing - URLs truncadas */}
            <Route path="/es/la-inteligencia-" 
                   element={<Navigate to="/es/blog/la-inteligencia-artificial-ia-y-su-aplicacion-en-marketing" replace />} />
            <Route path="/es/la-inteligencia-artificial-ia-y-su-aplicacion-en-" 
                   element={<Navigate to="/es/blog/la-inteligencia-artificial-ia-y-su-aplicacion-en-marketing" replace />} />
            <Route path="/es/la-inteligencia-artificial-ia-y-su" 
                   element={<Navigate to="/es/blog/la-inteligencia-artificial-ia-y-su-aplicacion-en-marketing" replace />} />
            <Route path="/blog/como-crear-tu-buyer-persona-para-b2b-" 
                   element={<Navigate to="/es/blog/como-crear-buyer-persona-b2b-b2c-guia-completa" replace />} />
            
            {/* URLs Truncadas Adicionales */}
            <Route path="/blog/marketing-de-" element={<Navigate to="/es/blog" replace />} />
            <Route path="/blog/branding-proceso-y-" element={<Navigate to="/es/blog/branding-proceso-tecnicas-naming" replace />} />
            <Route path="/es/estrategia-account-based-marketing-" element={<Navigate to="/es/blog/abm-account-based-marketing" replace />} />
            <Route path="/es/que-es-un-crm-o-customer-" element={<Navigate to="/es/blog/crm-que-es-beneficios" replace />} />
            <Route path="/es/re-commerce-la-economia-circular-del-e-commerce" element={<Navigate to="/es/blog/re-commerce-economia-circular-ecommerce-partnership-sharpei" replace />} />
           
           <Route path="/es/blog/tag/:tag" element={<PageSuspense><Pages.BlogTagPage /></PageSuspense>} />
            <Route path="/es/blog/perfil-cliente-ideal" element={<PageSuspense><Pages.BlogPerfilClienteIdealICP /></PageSuspense>} />
            <Route path="/es/blog/como-crear-buyer-persona-b2b-b2c-guia-completa" element={<PageSuspense><Pages.BlogPerfilClienteIdeal /></PageSuspense>} />
           <Route path="/es/blog/calculo-inversion-plan-marketing-digital" element={<PageSuspense><Pages.BlogCalculoInversionMarketing /></PageSuspense>} />
           <Route path="/es/blog/branding-proceso-tecnicas-naming" element={<PageSuspense><Pages.BlogBrandingProcesoTecnicasNaming /></PageSuspense>} />
             <Route path="/es/blog/business-model-canvas-para-crear-tu-estrategia-de-marketing" element={<PageSuspense><Pages.BusinessModelCanvasEstrategiaMarketing /></PageSuspense>} />
              <Route path="/es/blog/google-consent-mode-cookieyes" element={<PageSuspense><Pages.GoogleConsentModeCookieyes /></PageSuspense>} />
              <Route path="/es/blog/marketing-natural-posicionamiento-organico" element={<PageSuspense><Pages.MarketingNaturalPosicionamientoOrganico /></PageSuspense>} />
          <Route path="/es/blog/crm-que-es-beneficios" element={<PageSuspense><Pages.BlogCrmQueEsBeneficios /></PageSuspense>} />
          <Route path="/es/blog/como-elegir-mejor-crm-empresa-organizacion" element={<PageSuspense><Pages.BlogComoElegirMejorCRM /></PageSuspense>} />
               <Route path="/es/blog/abm-account-based-marketing" element={<PageSuspense><Pages.BlogABMAccountBasedMarketing /></PageSuspense>} />
        <Route path="/es/blog/re-commerce-economia-circular-ecommerce-partnership-sharpei" element={<PageSuspense><Pages.BlogReCommerceEconomiaCircular /></PageSuspense>} />
        <Route path="/es/blog/seo-off-page-estrategias-practicas-posicionamiento" element={<PageSuspense><Pages.BlogSeoOffPage /></PageSuspense>} />
        <Route path="/es/blog/automatizacion-marketing-digital-guia-completa" element={<PageSuspense><Pages.BlogAutomatizacionMarketing /></PageSuspense>} />
          <Route path="/es/blog/web-3-0-futuro-internet-descentralizado" element={<PageSuspense><Pages.BlogWeb30 /></PageSuspense>} />
          <Route path="/es/blog/seo-on-page-guia-completa" element={<PageSuspense><Pages.BlogSeoOnPage /></PageSuspense>} />
          <Route path="/es/blog/lead-scoring-calificacion-leads" element={<PageSuspense><Pages.BlogLeadScoringCalificacionLeads /></PageSuspense>} />
                  <Route path="/es/blog/seo-inteligencia-artificial" element={<PageSuspense><Pages.BlogSeoInteligenciaArtificial /></PageSuspense>} />
                  <Route path="/es/blog/ia-redes-sociales-herramientas-riesgos" element={<PageSuspense><Pages.BlogIARedesSociales /></PageSuspense>} />
        <Route path="/es/blog/funnel-conversion-b2B" element={<PageSuspense><Pages.BlogFunnelConversionB2B /></PageSuspense>} />
        <Route path="/es/blog/marketing-global-internacionalizacion" element={<PageSuspense><Pages.BlogMarketingGlobalInternacionalizacion /></PageSuspense>} />
          <Route path="/es/blog/kit-digital-marketing-guia-completa-2025" element={<PageSuspense><Pages.BlogKitDigitalMarketing /></PageSuspense>} />
          <Route path="/es/blog/chatbots-para-paginas-web" element={<PageSuspense><Pages.BlogChatbotsParaPaginasWeb /></PageSuspense>} />
          <Route path="/es/blog/huella-digital-derecho-olvido" element={<PageSuspense><Pages.BlogHuellaDigitalDerechoOlvido /></PageSuspense>} />
          <Route path="/es/blog/guia-privacidad-huella-digital" element={<PageSuspense><Pages.BlogGuiaPrivacidadHuellaDigital /></PageSuspense>} />
          <Route path="/es/blog/gobernanza-ia-empresas" element={<PageSuspense><Pages.BlogGobernanzaIAEmpresas /></PageSuspense>} />
          <Route path="/es/blog/decision-marketing-confianza" element={<PageSuspense><Pages.BlogDecisionMarketing /></PageSuspense>} />
           <Route path="/es/blog/nuevo-paradigma-seo-aeo-geo" element={<PageSuspense><Pages.BlogNuevoParadigmaSeoAeoGeo /></PageSuspense>} />
           <Route path="/es/blog/lovable-vs-wordpress-que-plataforma-elegir" element={<PageSuspense><Pages.BlogLovableVsWordpress /></PageSuspense>} />
           <Route path="/es/blog/checkout-ia-ecommerce-copilot-chatgpt-gemini" element={<PageSuspense><Pages.BlogCheckoutIAEcommerce /></PageSuspense>} />
           <Route path="/es/blog/paralisis-por-analisis-marketing" element={<PageSuspense><Pages.BlogParalisisAnalisisMarketing /></PageSuspense>} />
           <Route path="/es/blog/:id" element={<PageSuspense><Pages.BlogPost /></PageSuspense>} />
          
          {/* AUTORES */}
          <Route path="/es/autor/ruben-reyero" element={<PageSuspense><Pages.AuthorRubenReyero /></PageSuspense>} />
          
          {/* COMPARATIVAS */}
          <Route path="/es/comparativa/hubspot-vs-go-high-level" element={<PageSuspense><Pages.ComparativaHubSpotGoHighLevel /></PageSuspense>} />
          
          
          {/* CONTACTO Y CONSULTAS */}
          <Route path="/es/agendar-reunion" element={<PageSuspense><Pages.AgendarReunion /></PageSuspense>} />
          <Route path="/es/solicitar-consulta" element={<PageSuspense><Pages.SolicitarConsulta /></PageSuspense>} />
          <Route path="/es/contacto" element={<PageSuspense><Pages.Contacto /></PageSuspense>} />
           <Route path="/es/gracias" element={<PageSuspense><Pages.Gracias /></PageSuspense>} />
           <Route path="/es/gracias_por_agendar_reunion" element={<PageSuspense><Pages.GraciasPorAgendarReunion /></PageSuspense>} />
           <Route path="/es/gracias_por_agendar_reunión" element={<PageSuspense><Pages.GraciasPorAgendarReunion /></PageSuspense>} />
           <Route path="/es/hayas-crm" element={<PageSuspense><Pages.HayasCRM /></PageSuspense>} />
          
          
          <Route path="/es/servicios/diseno-web" element={<PageSuspense><Pages.DisenoWeb /></PageSuspense>} />
          <Route path="/es/servicios/diseno-web/alojamiento-mantenimiento" element={<PageSuspense><Pages.AlojamientoMantenimiento /></PageSuspense>} />
          <Route path="/es/servicios/creacion-marca" element={<PageSuspense><Pages.CreacionMarca /></PageSuspense>} />
          <Route path="/es/servicios/gestion-redes-sociales" element={<PageSuspense><Pages.GestionRedesSociales /></PageSuspense>} />
          <Route path="/es/servicios/publicidad-redes-sociales" element={<PageSuspense><Pages.PublicidadRedesSociales /></PageSuspense>} />
          <Route path="/es/servicios/publicidad-google-ads" element={<PageSuspense><Pages.PublicidadGoogleAds /></PageSuspense>} />
          <Route path="/es/servicios/email-marketing-automatizaciones" element={<PageSuspense><Pages.EmailMarketingAutomatizaciones /></PageSuspense>} />
          <Route path="/es/servicios/consultoria-estrategica-analitica" element={<PageSuspense><Pages.ConsultoriaEstrategicaAnalitica /></PageSuspense>} />
          <Route path="/es/servicios/formacion-ia" element={<PageSuspense><Pages.FormacionIA /></PageSuspense>} />
          <Route path="/es/servicios/integraciones-ia-procesos" element={<PageSuspense><Pages.IntegracionesIAProcesos /></PageSuspense>} />
          <Route path="/es/servicios/estrategia-contenidos" element={<PageSuspense><Pages.EstrategiaContenidos /></PageSuspense>} />
          <Route path="/es/servicios/localizacion-contenidos" element={<PageSuspense><Pages.LocalizacionContenidos /></PageSuspense>} />
          <Route path="/es/servicios/campanas-inbound-marketing" element={<PageSuspense><Pages.CampanasInboundMarketing /></PageSuspense>} />
           <Route path="/es/servicios/asistente-ia" element={<PageSuspense><Pages.AsistenteIA /></PageSuspense>} />
           <Route path="/es/servicios/alojamiento-mantenimiento-web" element={<Navigate to="/es/servicios/diseno-web/alojamiento-mantenimiento" replace />} />
           <Route path="/es/servicios/marketing-directo" element={<PageSuspense><Pages.MarketingDirecto /></PageSuspense>} />
           <Route path="/es/soluciones/plataforma-inteligencia-marketing" element={<PageSuspense><Pages.SensePlatform /></PageSuspense>} />
           {/* Redirect 301 from old SENSE service path */}
           <Route path="/es/servicios/plataforma-inteligencia-marketing" element={<Navigate to="/es/soluciones/plataforma-inteligencia-marketing" replace />} />
           
           {/* Páginas específicas con /es/ que necesitan redirección */}
           <Route path="/es/servicios-publicidad-en-redes-sociales/" element={<Navigate to="/es/servicios/publicidad-redes-sociales" replace />} />
           <Route path="/es/crm-y-automatizacion-de-marketing/" element={<Navigate to="/es/servicios/implantacion-crm" replace />} />
           <Route path="/es/crm-y-automatizacion-de-marketing" element={<Navigate to="/es/servicios/implantacion-crm" replace />} />
           <Route path="/es/gestion-de-redes-sociales/" element={<Navigate to="/es/servicios/gestion-redes-sociales" replace />} />
           <Route path="/es/gestion-de-redes-sociales" element={<Navigate to="/es/servicios/gestion-redes-sociales" replace />} />
           <Route path="/es/diseno-y-desarrollo-paginas-web/" element={<Navigate to="/es/servicios/diseno-web" replace />} />
           <Route path="/es/diseno-y-desarrollo-paginas-web" element={<Navigate to="/es/servicios/diseno-web" replace />} />
           <Route path="/es/branding-e-identidad-de-marca/" element={<Navigate to="/es/servicios/creacion-marca" replace />} />
           <Route path="/es/branding-e-identidad-de-marca" element={<Navigate to="/es/servicios/creacion-marca" replace />} />
           <Route path="/es/publicidad-en-google-ads/" element={<Navigate to="/es/servicios/publicidad-google-ads" replace />} />
           <Route path="/es/contenidos-y-seo/" element={<Navigate to="/es/servicios/estrategia-contenidos" replace />} />
           <Route path="/es/contenidos-y-seo" element={<Navigate to="/es/servicios/estrategia-contenidos" replace />} />
           <Route path="/es/seo-y-posicionamiento-en-buscadores/" element={<Navigate to="/es/servicios/seo-posicionamiento" replace />} />
           <Route path="/es/estrategia-de-marketing-digital-360/" element={<Navigate to="/es/servicios/campanas-inbound-marketing" replace />} />
           <Route path="/es/estrategia-de-marketing-digital-360" element={<Navigate to="/es/servicios/campanas-inbound-marketing" replace />} />
           <Route path="/es/servicios-de-marketing-digital-integrados-en-tu-estrategia/" element={<Navigate to="/es/servicios" replace />} />
           <Route path="/es/servicios-de-marketing-digital-integrados-en-tu-estrategia" element={<Navigate to="/es/servicios" replace />} />
           <Route path="/servicios-de-marketing-digital-integrados-en-tu-estrategia" element={<Navigate to="/es/servicios" replace />} />
           <Route path="/es/automatizacion-de-marketing-digital/" element={<Navigate to="/es/blog/automatizacion-marketing-digital-guia-completa" replace />} />
           <Route path="/es/automatizacion-de-marketing-digital" element={<Navigate to="/es/blog/automatizacion-marketing-digital-guia-completa" replace />} />
           <Route path="/es/ecommerce-tienda-online/" element={<Navigate to="/es/servicios/tienda-online" replace />} />
           <Route path="/es/alojamiento-mantenimiento" element={<Navigate to="/es/servicios/diseno-web/alojamiento-mantenimiento" replace />} />
           <Route path="/es/soluciones-ia" element={<Navigate to="/es/soluciones/ia-marketing" replace />} />
           
           {/* URLs malformadas - Limpiar */}
           <Route path="/https:/*" element={<Navigate to="/es" replace />} />
           <Route path="/es/conecta-con-tus-clientes" element={<Navigate to="/es/soluciones/gestion-conversion-clientes" replace />} />
           <Route path="/es/activa-tus-ventas" element={<Navigate to="/es/soluciones/gestion-conversion-clientes" replace />} />
           <Route path="/es/impulsa-tu-marca" element={<Navigate to="/es/soluciones/branding-identidad" replace />} />
           <Route path="/es/legal" element={<Navigate to="/es/aviso-legal" replace />} />
           <Route path="/es/pagina-ejemplo/" element={<Navigate to="/es" replace />} />
           <Route path="/es/agencia-de-inbound-marketing-y-ventas-online/" element={<Navigate to="/es/nosotros" replace />} />
           <Route path="/es/agencia-de-inbound-marketing-y-ventas-online" element={<Navigate to="/es/nosotros" replace />} />
           <Route path="/es/servicios/agendar-reunion" element={<Navigate to="/es/contacto" replace />} />
           <Route path="/soluciones/activa-tu-estrategia-digital" element={<Navigate to="/es/soluciones/consultoria-estrategica" replace />} />
           <Route path="/ampliacion-de-las-ayudas-del-kit-digital-en-2024/" element={<Navigate to="/es/blog" replace />} />
          
           {/* REDIRECTS MANAGER - Legacy URL */}
           <Route path="/redirects-manager" element={<Navigate to="/admin/seo/redirects" replace />} />
           
{/* ADMIN - Login (public) */}
             <Route path="/admin/login" element={<PageSuspense><Pages.AdminLogin /></PageSuspense>} />
             
             {/* ADMIN - Dashboard & Tools (protected) */}
             <Route path="/admin" element={<AdminProtectedRoute><PageSuspense><Pages.AdminDashboard /></PageSuspense></AdminProtectedRoute>} />
             <Route path="/admin/dashboard" element={<Navigate to="/admin" replace />} />
             
             {/* ADMIN - SEO Control Center (protected) */}
              <Route path="/admin/seo" element={<AdminProtectedRoute><PageSuspense><Pages.SEOTracker /></PageSuspense></AdminProtectedRoute>} />
              <Route path="/admin/seo/gsc" element={<Navigate to="/admin/seo" replace />} />
              <Route path="/admin/seo/pages" element={<Navigate to="/admin/seo" replace />} />
              <Route path="/admin/seo/sitemap" element={<Navigate to="/admin/seo" replace />} />
              <Route path="/admin/seo/indexnow" element={<AdminProtectedRoute><PageSuspense><Pages.IndexNowManager /></PageSuspense></AdminProtectedRoute>} />
              {/* ADMIN - Content & Branding (protected) */}
              <Route path="/admin/faq-validator" element={<AdminProtectedRoute><PageSuspense><Pages.FAQValidator /></PageSuspense></AdminProtectedRoute>} />
              <Route path="/admin/translations" element={<AdminProtectedRoute><PageSuspense><Pages.TranslationManager /></PageSuspense></AdminProtectedRoute>} />
              <Route path="/admin/media-library" element={<AdminProtectedRoute><PageSuspense><Pages.MediaLibrary /></PageSuspense></AdminProtectedRoute>} />
              <Route path="/admin/brandbook" element={<AdminProtectedRoute><PageSuspense><Pages.BrandBook /></PageSuspense></AdminProtectedRoute>} />
              <Route path="/admin/content-hub" element={<AdminProtectedRoute><PageSuspense><Pages.ContentHub /></PageSuspense></AdminProtectedRoute>} />
              <Route path="/admin/sofia" element={<AdminProtectedRoute><PageSuspense><Pages.SofiaChatbotAdmin /></PageSuspense></AdminProtectedRoute>} />
           
           {/* Página 404 dedicada */}
           <Route path="/es/404" element={<PageSuspense><Pages.Error404 /></PageSuspense>} />
           
          <Route path="/es/servicios/implementacion-funnel" element={<PageSuspense><Pages.ImplementacionFunnel /></PageSuspense>} />
          <Route path="/es/servicios/administracion-crm" element={<PageSuspense><Pages.AdministracionCrm /></PageSuspense>} />
          <Route path="/es/servicios/automatizacion-procesos-ventas" element={<PageSuspense><Pages.AutomatizacionProcesosVentas /></PageSuspense>} />
          <Route path="/es/servicios/captacion-leads-clientes" element={<PageSuspense><Pages.CaptacionLeadsClientes /></PageSuspense>} />
          <Route path="/es/servicios/implantacion-crm" element={<PageSuspense><Pages.ImplantacionCrm /></PageSuspense>} />
          <Route path="/es/servicios" element={<PageSuspense><Pages.Servicios /></PageSuspense>} />
          
          {/* PÁGINAS LEGALES */}
          <Route path="/es/legal/aviso-legal" element={<PageSuspense><Pages.AvisoLegal /></PageSuspense>} />
          <Route path="/es/legal/politica-privacidad" element={<PageSuspense><Pages.PoliticaPrivacidad /></PageSuspense>} />
          <Route path="/es/legal/terminos-servicio" element={<PageSuspense><Pages.TerminosServicio /></PageSuspense>} />
          <Route path="/es/legal/politica-cookies" element={<PageSuspense><Pages.PoliticaCookies /></PageSuspense>} />
          
          {/* HERRAMIENTAS GRATUITAS */}
          <Route path="/es/herramientas/generador-whatsapp-link" element={<PageSuspense><Pages.HerramientaGeneradorWhatsApp /></PageSuspense>} />
          <Route path="/es/herramientas/calculadora-roi" element={<PageSuspense><Pages.HerramientaCalculadoraROI /></PageSuspense>} />
          
          {/* ============================================
              ENGLISH ROUTES (/en/*)
              ============================================ */}
          
          {/* HOMEPAGE */}
          <Route path="/en" element={<PageSuspense><Pages.IndexEN /></PageSuspense>} />
          
          {/* ABOUT US */}
          <Route path="/en/about-us" element={<PageSuspense><Pages.Nosotros /></PageSuspense>} />
          
          {/* SOLUTIONS - Main Strategic Categories */}
          <Route path="/en/solutions/boost-your-brand" element={<PageSuspense><Pages.ImpulsaTuMarca /></PageSuspense>} />
          <Route path="/en/solutions/connect-with-customers" element={<PageSuspense><Pages.ConectaConTusClientes /></PageSuspense>} />
          <Route path="/en/solutions/activate-sales" element={<PageSuspense><Pages.ActivaTusVentas /></PageSuspense>} />
          <Route path="/en/solutions/activate-digital-strategy" element={<PageSuspense><Pages.ActivaTuEstrategiaDigital /></PageSuspense>} />
          <Route path="/en/solutions/ai-marketing" element={<PageSuspense><Pages.SolucionesIA /></PageSuspense>} />
          <Route path="/en/solutions/marketing-visibility" element={<PageSuspense><Pages.MarketingVisibilidad /></PageSuspense>} />
          <Route path="/en/solutions/lead-generation" element={<PageSuspense><Pages.CaptacionLeadsClientes /></PageSuspense>} />
          <Route path="/en/solutions/marketing-automation" element={<PageSuspense><Pages.AutomatizacionMarketing /></PageSuspense>} />
          <Route path="/en/solutions/crm-client-management" element={<PageSuspense><Pages.GestionClientesCRM /></PageSuspense>} />
          
          {/* SERVICES - Main page */}
          <Route path="/en/services" element={<PageSuspense><Pages.Servicios /></PageSuspense>} />
          
          {/* SERVICES - Core Services */}
          <Route path="/en/services/online-store" element={<PageSuspense><Pages.TiendaOnline /></PageSuspense>} />
          <Route path="/en/services/web-design" element={<PageSuspense><Pages.DisenoWeb /></PageSuspense>} />
          <Route path="/en/services/web-design/hosting-maintenance" element={<PageSuspense><Pages.AlojamientoMantenimiento /></PageSuspense>} />
          <Route path="/en/services/seo-positioning" element={<PageSuspense><Pages.SeoPositioning /></PageSuspense>} />
          <Route path="/en/services/brand-creation" element={<PageSuspense><Pages.CreacionMarca /></PageSuspense>} />
          <Route path="/en/services/social-media-management" element={<PageSuspense><Pages.GestionRedesSociales /></PageSuspense>} />
          <Route path="/en/services/social-media-advertising" element={<PageSuspense><Pages.PublicidadRedesSociales /></PageSuspense>} />
          <Route path="/en/services/google-ads-advertising" element={<PageSuspense><Pages.PublicidadGoogleAds /></PageSuspense>} />
          <Route path="/en/services/email-marketing-automation" element={<PageSuspense><Pages.EmailMarketingAutomatizaciones /></PageSuspense>} />
          <Route path="/en/services/strategic-consulting-analytics" element={<PageSuspense><Pages.ConsultoriaEstrategicaAnalitica /></PageSuspense>} />
          <Route path="/en/services/ai-training" element={<PageSuspense><Pages.FormacionIA /></PageSuspense>} />
          <Route path="/en/services/ai-process-integration" element={<PageSuspense><Pages.IntegracionesIAProcesos /></PageSuspense>} />
          <Route path="/en/services/content-strategy" element={<PageSuspense><Pages.EstrategiaContenidos /></PageSuspense>} />
          <Route path="/en/services/content-localization" element={<PageSuspense><Pages.LocalizacionContenidos /></PageSuspense>} />
          <Route path="/en/services/inbound-marketing-campaigns" element={<PageSuspense><Pages.CampanasInboundMarketing /></PageSuspense>} />
          <Route path="/en/services/ai-assistant" element={<PageSuspense><Pages.AsistenteIA /></PageSuspense>} />
          <Route path="/en/services/direct-marketing" element={<PageSuspense><Pages.MarketingDirecto /></PageSuspense>} />
          <Route path="/en/services/crm-implementation" element={<PageSuspense><Pages.ImplantacionCrm /></PageSuspense>} />
          <Route path="/en/services/crm-administration" element={<PageSuspense><Pages.AdministracionCrm /></PageSuspense>} />
          <Route path="/en/services/sales-process-automation" element={<PageSuspense><Pages.AutomatizacionProcesosVentas /></PageSuspense>} />
          <Route path="/en/services/lead-generation-clients" element={<PageSuspense><Pages.CaptacionLeadsClientes /></PageSuspense>} />
           <Route path="/en/services/funnel-implementation" element={<PageSuspense><Pages.ImplementacionFunnel /></PageSuspense>} />
           <Route path="/en/services/crm-customer-management" element={<PageSuspense><Pages.GestionClientesCRM /></PageSuspense>} />
           <Route path="/en/solutions/marketing-intelligence-platform" element={<PageSuspense><Pages.SensePlatform /></PageSuspense>} />
           {/* Redirect 301 from old SENSE service path */}
           <Route path="/en/services/marketing-intelligence-platform" element={<Navigate to="/en/solutions/marketing-intelligence-platform" replace />} />
          
          
{/* CASE STUDIES - Main page */}
          <Route path="/en/case-studies" element={<PageSuspense><Pages.CaseStudiesEN /></PageSuspense>} />
          
          {/* CASE STUDIES - Individual cases (Top 10 translated) */}
          <Route path="/en/case-studies/asendia" element={<PageSuspense><Pages.CaseStudyAsendia /></PageSuspense>} />
          <Route path="/en/case-studies/formato-educativo" element={<PageSuspense><Pages.CaseStudyFormatoEducativo /></PageSuspense>} />
          <Route path="/en/case-studies/beka-finance" element={<PageSuspense><Pages.CaseStudyBekaFinance /></PageSuspense>} />
          <Route path="/en/case-studies/aecoc" element={<PageSuspense><Pages.CaseStudyAECOC /></PageSuspense>} />
          <Route path="/en/case-studies/peris-electricidad" element={<PageSuspense><Pages.CaseStudyPerisElectricidad /></PageSuspense>} />
          <Route path="/en/case-studies/inbound-students" element={<PageSuspense><Pages.CaseStudyInboundStudents /></PageSuspense>} />
          <Route path="/en/case-studies/hubspot-for-startups" element={<PageSuspense><Pages.CaseStudyHubSpotForStartups /></PageSuspense>} />
          <Route path="/en/case-studies/asp-asepsia" element={<PageSuspense><Pages.CaseStudyASPAsepsia /></PageSuspense>} />
          <Route path="/en/case-studies/nexo-vital" element={<PageSuspense><Pages.CaseStudyNexoVital /></PageSuspense>} />
          <Route path="/en/case-studies/quanticbi" element={<PageSuspense><Pages.CaseStudyQuanticBI /></PageSuspense>} />
          
          {/* BLOG */}
          <Route path="/en/blog" element={<PageSuspense><Pages.Blog /></PageSuspense>} />
          <Route path="/en/blog/chatbots-for-websites" element={<PageSuspense><Pages.BlogChatbotsForWebsites /></PageSuspense>} />
          <Route path="/en/blog/decision-marketing" element={<PageSuspense><Pages.BlogDecisionMarketingEN /></PageSuspense>} />
          <Route path="/en/blog/ai-governance-business" element={<PageSuspense><Pages.BlogAIGovernanceBusiness /></PageSuspense>} />
          <Route path="/en/blog/ai-seo-tools" element={<PageSuspense><Pages.BlogAISEOTools /></PageSuspense>} />
          <Route path="/en/blog/crm-what-is-benefits" element={<PageSuspense><Pages.BlogCRMWhatIsBenefits /></PageSuspense>} />
          <Route path="/en/blog/new-seo-paradigm-aeo-geo" element={<PageSuspense><Pages.BlogNewSeoParadigmAeoGeo /></PageSuspense>} />
          {/* Removed: /en/blog/:id catch-all was here but intercepted DynamicPageEN blog routes. Now DynamicPageEN (line 635) handles all non-explicit EN blog slugs */}
          
          {/* COMPARISONS */}
          <Route path="/en/comparison/hubspot-vs-go-high-level" element={<PageSuspense><Pages.ComparativaHubSpotGoHighLevel /></PageSuspense>} />
          
          {/* CONTACT & CONSULTATIONS */}
          <Route path="/en/schedule-meeting" element={<PageSuspense><Pages.AgendarReunion /></PageSuspense>} />
          <Route path="/en/request-consultation" element={<PageSuspense><Pages.SolicitarConsulta /></PageSuspense>} />
          <Route path="/en/contact" element={<PageSuspense><Pages.Contacto /></PageSuspense>} />
          <Route path="/en/thank-you" element={<PageSuspense><Pages.Gracias /></PageSuspense>} />
          <Route path="/en/thank-you-meeting" element={<PageSuspense><Pages.GraciasPorAgendarReunion /></PageSuspense>} />
          
          {/* ADMIN PAGES */}
          <Route path="/en/admin/seo/pages" element={<PageSuspense><Pages.SEOPagesManager /></PageSuspense>} />
          <Route path="/en/admin/seo/sitemap" element={<PageSuspense><Pages.SitemapManager /></PageSuspense>} />
          
          {/* LEGAL PAGES */}
          <Route path="/en/legal/privacy-policy" element={<PageSuspense><Pages.PoliticaPrivacidad /></PageSuspense>} />
          <Route path="/en/legal/cookie-policy" element={<PageSuspense><Pages.PoliticaCookies /></PageSuspense>} />
          
          {/* FREE TOOLS */}
          <Route path="/en/tools/whatsapp-link-generator" element={<PageSuspense><Pages.HerramientaGeneradorWhatsApp /></PageSuspense>} />
          <Route path="/en/tools/roi-calculator" element={<PageSuspense><Pages.HerramientaCalculadoraROI /></PageSuspense>} />
          
           {/* DYNAMIC EN CATCH-ALL ROUTES (fallback for DB-translated pages without explicit routes) */}
          <Route path="/en/services/:slug" element={<PageSuspense><DynamicPageEN section="services" /></PageSuspense>} />
          <Route path="/en/solutions/:slug" element={<PageSuspense><DynamicPageEN section="solutions" /></PageSuspense>} />
          <Route path="/en/blog/:slug" element={<PageSuspense><DynamicPageEN section="blog" /></PageSuspense>} />
          <Route path="/en/case-studies/:slug" element={<PageSuspense><DynamicPageEN section="case-studies" /></PageSuspense>} />

           {/* ============================================
              END OF ENGLISH ROUTES
              ============================================ */}
          
          {/* Single canonical Coming Soon URL (only EN page with noindex) */}
          <Route path="/en/coming-soon" element={<PageSuspense><Pages.ComingSoonEN /></PageSuspense>} />

          {/* ENGLISH CATCH-ALL — redirects any undefined /en/* to /en/coming-soon?from=...
             so Google sees a clean SPA redirect instead of dozens of noindex placeholders. */}
          <Route path="/en/*" element={<PageSuspense><Pages.ComingSoonRedirect /></PageSuspense>} />

          {/* TYPOGRAPHY PLAYGROUND - Página de prueba tipográfica */}
          <Route path="/typography-playground" element={<PageSuspense><Pages.TypographyPlayground /></PageSuspense>} />
          
          {/* 404 - MUST BE AT THE END */}
          <Route path="*" element={<PageSuspense><Pages.NotFound /></PageSuspense>} />
        </Routes>
        </DraftProtection>
      </LanguageProvider>
      </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
