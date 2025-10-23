import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from '@/contexts/AuthContext';
import SofiaWidget from "./components/SofiaSection";
import ScrollToTop from './components/ScrollToTop';
import DraftProtection from './components/DraftProtection';
import PageSuspense from './components/PageSuspense';

// Lazy imports organizados por categoría
import * as Pages from './utils/lazyImports';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AuthProvider>
        <BrowserRouter>
      <ScrollToTop />
        <SofiaWidget />
        <DraftProtection>
          <Routes>
           {/* REDIRECCIÓN ROOT A ESPAÑOL */}
           <Route path="/" element={<Navigate to="/es" replace />} />
           
           {/* REDIRECCIONES SIN PREFIJO /es/ */}
           <Route path="/blog/crm-que-es-beneficios" element={<Navigate to="/es/blog/crm-que-es-beneficios" replace />} />
           <Route path="/nosotros" element={<Navigate to="/es/nosotros" replace />} />
          <Route path="/servicios/marketing-directo" element={<Navigate to="/es/servicios/marketing-directo" replace />} />
          <Route path="/servicios/seo-positioning" element={<Navigate to="/es/servicios/seo-positioning" replace />} />
          <Route path="/comparativa-hubspot-gohighlevel" element={<Navigate to="/es/comparativa/hubspot-vs-go-high-level" replace />} />
          <Route path="/soluciones/marketing-visibilidad" element={<Navigate to="/es/soluciones/marketing-visibilidad" replace />} />
          
          {/* RUTAS EN ESPAÑOL */}
          <Route path="/es" element={<PageSuspense><Pages.Index /></PageSuspense>} />
          
          {/* NOSOTROS */}
          <Route path="/es/nosotros" element={<PageSuspense><Pages.Nosotros /></PageSuspense>} />
          
          {/* SOLUCIONES - 3 Nuevas Categorías Estratégicas */}
          <Route path="/es/soluciones/impulsa-tu-marca" element={<PageSuspense><Pages.ImpulsaTuMarca /></PageSuspense>} />
          <Route path="/es/soluciones/conecta-con-tus-clientes" element={<PageSuspense><Pages.ConectaConTusClientes /></PageSuspense>} />
          <Route path="/es/soluciones/activa-tus-ventas" element={<PageSuspense><Pages.ActivaTusVentas /></PageSuspense>} />
          <Route path="/es/soluciones/activa-tu-estrategia-digital" element={<PageSuspense><Pages.ActivaTuEstrategiaDigital /></PageSuspense>} />
          
          {/* SOLUCIONES - Páginas individuales (legacy y específicas) */}
          <Route path="/es/soluciones/ia-marketing" element={<PageSuspense><Pages.SolucionesIA /></PageSuspense>} />
          
          <Route path="/es/servicios/tienda-online" element={<PageSuspense><Pages.TiendaOnline /></PageSuspense>} />
          <Route path="/es/servicios/diseno-web" element={<PageSuspense><Pages.DisenoWeb /></PageSuspense>} />
          <Route path="/es/servicios/diseno-web/alojamiento-mantenimiento" element={<PageSuspense><Pages.AlojamientoMantenimiento /></PageSuspense>} />
          <Route path="/es/servicios/seo-posicionamiento" element={<PageSuspense><Pages.SeoPositioning /></PageSuspense>} />
           <Route path="/es/servicios/seo-positioning" element={<PageSuspense><Pages.SeoPositioning /></PageSuspense>} />
           <Route path="/es/soluciones/marketing-visibilidad" element={<PageSuspense><Pages.MarketingVisibilidad /></PageSuspense>} />
           <Route path="/es/soluciones/gestion-marketing" element={<Navigate to="/es/servicios/administracion-crm" replace />} />
          <Route path="/es/soluciones/captacion-leads" element={<PageSuspense><Pages.CaptacionLeadsClientes /></PageSuspense>} />
          <Route path="/es/kit-consulting" element={<PageSuspense><Pages.KitConsulting /></PageSuspense>} />
          <Route path="/es/kit-digital" element={<PageSuspense><Pages.KitDigital /></PageSuspense>} />
          <Route path="/es/kit-digital/presencia-basica-internet" element={<PageSuspense><Pages.KitDigitalPresenciaBasica /></PageSuspense>} />
          <Route path="/es/kit-digital/gestion-clientes-crm" element={<PageSuspense><Pages.KitDigitalGestionClientes /></PageSuspense>} />
          <Route path="/es/kit-digital/gestion-red-social" element={<PageSuspense><Pages.KitDigitalRedesSociales /></PageSuspense>} />
          <Route path="/es/kit-digital/presencia-avanzada-seo" element={<PageSuspense><Pages.KitDigitalPresenciaAvanzada /></PageSuspense>} />
          
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
          
           {/* BLOG / RECURSOS */}
           <Route path="/es/blog" element={<PageSuspense><Pages.Blog /></PageSuspense>} />
           
           {/* URL CANÓNICA - Post IA Marketing */}
           <Route path="/es/blog/la-inteligencia-artificial-ia-y-su-aplicacion-en-marketing" element={<PageSuspense><Pages.BlogIAMarketing /></PageSuspense>} />
           
           <Route path="/es/blog/guia-tecnica-email-marketing-hubspot-configuracion" element={<PageSuspense><Pages.BlogEmailMarketingHubSpot /></PageSuspense>} />
           <Route path="/es/blog/configuracion-email-marketing-cumplimiento-normativo" element={<PageSuspense><Pages.BlogConfiguracionEmailMarketingCumplimiento /></PageSuspense>} />
             <Route path="/es/blog/tag/:tag" element={<PageSuspense><Pages.BlogTagPage /></PageSuspense>} />
            <Route path="/es/blog/:id" element={<PageSuspense><Pages.BlogPost /></PageSuspense>} />
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
          
          {/* ADMIN - SEO Control Center */}
          <Route path="/admin/seo" element={<PageSuspense><Pages.SEODashboard /></PageSuspense>} />
          <Route path="/admin/seo/sitemap" element={<PageSuspense><Pages.SitemapManager /></PageSuspense>} />
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
          
          {/* 404 - DEBE IR SIEMPRE AL FINAL */}
          <Route path="*" element={<PageSuspense><Pages.NotFound /></PageSuspense>} />
        </Routes>
        </DraftProtection>
      </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
