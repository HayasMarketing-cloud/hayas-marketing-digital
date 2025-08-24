
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SofiaWidget from "./components/SofiaSection";
import Index from "./pages/Index";
import Nosotros from "./pages/Nosotros";
import ConectaConTusClientes from "./pages/ConectaConTusClientes";
import ImpulsaTuMarca from "./pages/ImpulsaTuMarca";
import ActivaTusVentas from "./pages/ActivaTusVentas";
import MarketingVisibilidad from "./pages/MarketingVisibilidad";
import GestionMarketing from "./pages/GestionMarketing";
import SolucionesIA from "./pages/SolucionesIA";
import KitConsulting from "./pages/KitConsulting";
import KitDigital from "./pages/KitDigital";
import CasoExitoAsendia from "./pages/CasoExitoAsendia";
import CasoExitoNexoVital from "./pages/CasoExitoNexoVital";
import CasoExitoIVirgenExtra from "./pages/CasoExitoIVirgenExtra";
import CasoExitoInboundStudents from "./pages/CasoExitoInboundStudents";
import CalistheniaOnlinePage from "./pages/CalistheniaOnlinePage";

console.log('🔍 Import de CalistheniaOnlinePage:', CalistheniaOnlinePage);
import CasoExitoCentroRoraima from "./pages/CasoExitoCentroRoraima";
import CasoExitoJointsUp from "./pages/CasoExitoJointsUp";
import CasoExitoTranslateWithStyle from "./pages/CasoExitoTranslateWithStyle";
import CasoExitoFormatoEducativo from "./pages/CasoExitoFormatoEducativo";
import CasoExitoOMR from "./pages/CasoExitoOMR";
import CasoExitoAspAsepsia from "./pages/CasoExitoAspAsepsia";
import CasoExitoBufeteMaseras from "./pages/CasoExitoBufeteMaseras";
import CasoExitoModaIntimaVania from "./pages/CasoExitoModaIntimaVania";
import CasoExitoAlfixConsultores from "./pages/CasoExitoAlfixConsultores";
import CasoExitoAlmaCruceros from "./pages/CasoExitoAlmaCruceros";
import CasoExitoLaBaneraKD from "./pages/CasoExitoLaBaneraKD";
import CasoExitoSuministrosXSKD from "./pages/CasoExitoSuministrosXSKD";
import CasoExitoConversaConsultores from "./pages/CasoExitoConversaConsultores";
import CasoExitoBuhobike from "./pages/CasoExitoBuhobike";
import CasoExitoEvaChampion from "./pages/CasoExitoEvaChampion";
import CasoExitoBelugaLinguistics from "./pages/CasoExitoBelugaLinguistics";
import CasoExitoWooptix from "./pages/CasoExitoWooptix";
import CasoExitoPamdamedia from "./pages/CasoExitoPamdamedia";
import CasoExitoGiveAndGo from "./pages/CasoExitoGiveAndGo";
import CasoExitoHikvision from "./pages/CasoExitoHikvision";
import CasoExitoOWOGame from "./pages/CasoExitoOWOGame";
import CasoExitoNovaPraxis from "./pages/CasoExitoNovaPraxis";
import CasoExitoAistercel from "./pages/CasoExitoAistercel";
import CasoExitoQuanticBI from "./pages/CasoExitoQuanticBI";
import CasoExitoPeixosEmilio from "./pages/CasoExitoPeixosEmilio";
import CasoExitoCorteAFilms from "./pages/CasoExitoCorteAFilms";
import CasoExitoLualca from "./pages/CasoExitoLualca";
import CasoExitoPlazaEstacion from "./pages/CasoExitoPlazaEstacion";
import CasoExitoRivasCentro from "./pages/CasoExitoRivasCentro";
import CasoExitoHubSpotForStartups from "./pages/CasoExitoHubSpotForStartups";
import CasoExitoBekaFinance from "./pages/CasoExitoBekaFinance";
import CasoExitoPerisElectricidad from "./pages/CasoExitoPerisElectricidad";
import CasoExitoCarniceriaPicosDeEuropa from "./pages/CasoExitoCarniceriaPicosDeEuropa";
import CasoExitoLaOrientalSinGluten from "./pages/CasoExitoLaOrientalSinGluten";
import CasoExitoFLAP from "./pages/CasoExitoFLAP";
import CasoExitoWideum from "./pages/CasoExitoWideum";
import CasoExitoAECOC from '@/pages/CasoExitoAECOC';
import CasoExitoFINECT from '@/pages/CasoExitoFINECT';
import CasoExitoCOVEBO from '@/pages/CasoExitoCOVEBO';
import CasoExitoFundacionCasaMexico from '@/pages/CasoExitoFundacionCasaMexico';
import CasoExitoMotivaTuMente from '@/pages/CasoExitoMotivaTuMente';
import CasoExitoEurobitsTechnologies from '@/pages/CasoExitoEurobitsTechnologies';
import ImplantacionCrm from "./pages/ImplantacionCrm";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import AgendarReunion from "./pages/AgendarReunion";
import SolicitarConsulta from "./pages/SolicitarConsulta";
import Contacto from "./pages/Contacto";
import NotFound from "./pages/NotFound";
import TiendaOnline from "./pages/TiendaOnline";
import DisenoWeb from "./pages/DisenoWeb";
import SeoPositioning from "./pages/SeoPositioning";
import CreacionMarca from './pages/CreacionMarca';
import GestionRedesSociales from './pages/GestionRedesSociales';
import PublicidadRedesSociales from './pages/PublicidadRedesSociales';
import PublicidadGoogleAds from './pages/PublicidadGoogleAds';
import AsistenteIA from './pages/AsistenteIA';
import AlojamientoMantenimiento from './pages/AlojamientoMantenimiento';
import MarketingDirecto from './pages/MarketingDirecto';
import ImplementacionFunnel from './pages/ImplementacionFunnel';
import CasosExito from './pages/CasosExito';
import ScrollToTop from './components/ScrollToTop';
import EmailMarketingAutomatizaciones from './pages/EmailMarketingAutomatizaciones';
import ConsultoriaEstrategicaAnalitica from './pages/ConsultoriaEstrategicaAnalitica';
import IntegracionesIAProcesos from './pages/IntegracionesIAProcesos';
import FormacionIA from './pages/FormacionIA';
import EstrategiaContenidos from './pages/EstrategiaContenidos';
import AdministracionCrm from './pages/AdministracionCrm';
import LocalizacionContenidos from './pages/LocalizacionContenidos';
import CampanasInboundMarketing from './pages/CampanasInboundMarketing';
import BlogPerfilClienteIdeal from './pages/BlogPerfilClienteIdeal';
import BlogPerfilClienteIdealICP from './pages/BlogPerfilClienteIdealICP';
import CaptacionLeadsClientes from './pages/CaptacionLeadsClientes';
import AutomatizacionProcesosVentas from './pages/AutomatizacionProcesosVentas';
import BlogCalculoInversionMarketing from './pages/BlogCalculoInversionMarketing';
import BlogBrandingProcesoTecnicasNaming from './pages/BlogBrandingProcesoTecnicasNaming';
import BusinessModelCanvasEstrategiaMarketing from './pages/BusinessModelCanvasEstrategiaMarketing';
import GoogleConsentModeCookieyes from './pages/GoogleConsentModeCookieyes';
import MarketingNaturalPosicionamientoOrganico from './pages/MarketingNaturalPosicionamientoOrganico';
import BlogCrmQueEsBeneficios from './pages/BlogCrmQueEsBeneficios';
import BlogComoElegirMejorCRM from './pages/BlogComoElegirMejorCRM';
import BlogABMAccountBasedMarketing from './pages/BlogABMAccountBasedMarketing';
import BlogLeadScoringCalificacionLeads from './pages/BlogLeadScoringCalificacionLeads';
import BlogSeoInteligenciaArtificial from './pages/BlogSeoInteligenciaArtificial';
import BlogAutomatizacionMarketing from './pages/BlogAutomatizacionMarketing';
import BlogWeb30 from './pages/BlogWeb30';
import BlogSeoOnPage from './pages/BlogSeoOnPage';
import BlogSeoOffPage from './pages/BlogSeoOffPage';
import BlogKitDigitalMarketing from './pages/BlogKitDigitalMarketing';
import BlogReCommerceEconomiaCircular from './pages/BlogReCommerceEconomiaCircular';
import HayasCRM from './pages/HayasCRM';
import BlogIARedesSociales from './pages/BlogIARedesSociales';
import BlogFunnelConversionB2B from './pages/BlogFunnelConversionB2B';
import BlogEmailMarketingHubSpot from './pages/BlogEmailMarketingHubSpot';
import BlogMarketingGlobalInternacionalizacion from './pages/BlogMarketingGlobalInternacionalizacion';
import BlogTagPage from './pages/BlogTagPage';

const queryClient = new QueryClient();

console.log('🛣️  Registrando rutas...');
console.log('✅ Componente CalistheniaOnlinePage disponible:', typeof CalistheniaOnlinePage);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
    <BrowserRouter>
      <ScrollToTop />
        <SofiaWidget />
        <Routes>
          {/* PÁGINA PRINCIPAL */}
          <Route path="/" element={<Index />} />
          
          {/* NOSOTROS */}
          <Route path="/nosotros" element={<Nosotros />} />
          
          {/* SOLUCIONES - 3 Nuevas Categorías Estratégicas */}
          <Route path="/soluciones/impulsa-tu-marca" element={<ImpulsaTuMarca />} />
          <Route path="/soluciones/conecta-con-tus-clientes" element={<ConectaConTusClientes />} />
          <Route path="/soluciones/activa-tus-ventas" element={<ActivaTusVentas />} />
          <Route path="/soluciones/activa-tu-estrategia-digital" element={<Navigate to="/soluciones/activa-tus-ventas" replace />} />
          
          {/* SOLUCIONES - Páginas individuales (legacy y específicas) */}
          <Route path="/soluciones/ia-marketing" element={<SolucionesIA />} />
          
          <Route path="/servicios/tienda-online" element={<TiendaOnline />} />
          <Route path="/servicios/diseno-web" element={<DisenoWeb />} />
          <Route path="/servicios/diseno-web/alojamiento-mantenimiento" element={<AlojamientoMantenimiento />} />
          <Route path="/servicios/seo-posicionamiento" element={<SeoPositioning />} />
          <Route path="/soluciones/marketing-digital" element={<MarketingVisibilidad />} />
          <Route path="/soluciones/gestion-marketing" element={<GestionMarketing />} />
          <Route path="/soluciones/captacion-leads" element={<CaptacionLeadsClientes />} />
          <Route path="/kit-consulting" element={<KitConsulting />} />
          <Route path="/kit-digital" element={<KitDigital />} />
          
          {/* CASOS DE ÉXITO - Página principal */}
          <Route path="/casos-exito" element={<CasosExito />} />
          
          {/* CASOS DE ÉXITO - Apoyan las soluciones */}
          <Route path="/casos-exito/asendia" element={<CasoExitoAsendia />} />
          <Route path="/casos-exito/nexo-vital" element={<CasoExitoNexoVital />} />
          <Route path="/casos-exito/i-virgen-extra" element={<CasoExitoIVirgenExtra />} />
          <Route path="/casos-exito/inbound-students" element={<CasoExitoInboundStudents />} />
          <Route path="/casos-exito/calisthenia-online" element={<CalistheniaOnlinePage />} />
          <Route path="/casos-exito/centro-roraima" element={<CasoExitoCentroRoraima />} />
          <Route path="/casos-exito/joints-up" element={<CasoExitoJointsUp />} />
          <Route path="/casos-exito/translate-with-style" element={<CasoExitoTranslateWithStyle />} />
          <Route path="/casos-exito/formato-educativo" element={<CasoExitoFormatoEducativo />} />
          <Route path="/casos-exito/omr" element={<CasoExitoOMR />} />
          <Route path="/casos-exito/asp-asepsia" element={<CasoExitoAspAsepsia />} />
          <Route path="/casos-exito/bufete-maseras" element={<CasoExitoBufeteMaseras />} />
          <Route path="/casos-exito/moda-intima-vania" element={<CasoExitoModaIntimaVania />} />
          <Route path="/casos-exito/alfix-consultores" element={<CasoExitoAlfixConsultores />} />
          <Route path="/casos-exito/alma-cruceros" element={<CasoExitoAlmaCruceros />} />
          <Route path="/casos-exito/la-banera-kd" element={<CasoExitoLaBaneraKD />} />
          <Route path="/casos-exito/suministros-xs-kd" element={<CasoExitoSuministrosXSKD />} />
          <Route path="/casos-exito/conversa-consultores" element={<CasoExitoConversaConsultores />} />
          <Route path="/casos-exito/buhobike" element={<CasoExitoBuhobike />} />
          <Route path="/casos-exito/eva-champion" element={<CasoExitoEvaChampion />} />
          <Route path="/casos-exito/beluga-linguistics" element={<CasoExitoBelugaLinguistics />} />
          <Route path="/casos-exito/wooptix" element={<CasoExitoWooptix />} />
          <Route path="/casos-exito/pamdamedia" element={<CasoExitoPamdamedia />} />
          <Route path="/casos-exito/give-and-go" element={<CasoExitoGiveAndGo />} />
          <Route path="/casos-exito/hikvision" element={<CasoExitoHikvision />} />
          <Route path="/casos-exito/owo-game" element={<CasoExitoOWOGame />} />
          <Route path="/casos-exito/nova-praxis" element={<CasoExitoNovaPraxis />} />
          <Route path="/casos-exito/aistercel" element={<CasoExitoAistercel />} />
          <Route path="/casos-exito/quanticbi" element={<CasoExitoQuanticBI />} />
          <Route path="/casos-exito/peixos-emilio" element={<CasoExitoPeixosEmilio />} />
          <Route path="/casos-exito/corte-a-films" element={<CasoExitoCorteAFilms />} />
          <Route path="/casos-exito/lualca" element={<CasoExitoLualca />} />
          <Route path="/casos-exito/plaza-de-la-estacion" element={<CasoExitoPlazaEstacion />} />
          <Route path="/casos-exito/rivas-centro" element={<CasoExitoRivasCentro />} />
          <Route path="/casos-exito/hubspot-for-startups" element={<CasoExitoHubSpotForStartups />} />
          <Route path="/casos-exito/beka-finance" element={<CasoExitoBekaFinance />} />
          <Route path="/casos-exito/peris-electricidad" element={<CasoExitoPerisElectricidad />} />
          <Route path="/casos-exito/carniceria-picos-de-europa" element={<CasoExitoCarniceriaPicosDeEuropa />} />
          <Route path="/casos-exito/pasteleria-la-oriental-sin-gluten" element={<CasoExitoLaOrientalSinGluten />} />
          <Route path="/casos-exito/flap-articulos-peluqueria" element={<CasoExitoFLAP />} />
          <Route path="/casos-exito/wideum" element={<CasoExitoWideum />} />
          <Route path="/casos-exito/aecoc" element={<CasoExitoAECOC />} />
          <Route path="/casos-exito/finect" element={<CasoExitoFINECT />} />
          <Route path="/casos-exito/covebo" element={<CasoExitoCOVEBO />} />
          <Route path="/casos-exito/fundacion-casa-mexico" element={<CasoExitoFundacionCasaMexico />} />
          <Route path="/casos-exito/motiva-tu-mente" element={<CasoExitoMotivaTuMente />} />
          <Route path="/casos-exito/eurobits-technologies" element={<CasoExitoEurobitsTechnologies />} />
          
           {/* BLOG / RECURSOS */}
           <Route path="/blog" element={<Blog />} />
            <Route path="/blog/guia-tecnica-email-marketing-hubspot-configuracion" element={<BlogEmailMarketingHubSpot />} />
            <Route path="/blog/tag/:tag" element={<BlogTagPage />} />
           <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/blog/perfil-cliente-ideal" element={<BlogPerfilClienteIdealICP />} />
            <Route path="/blog/como-crear-buyer-persona-b2b-b2c-guia-completa" element={<BlogPerfilClienteIdeal />} />
           <Route path="/blog/calculo-inversion-plan-marketing-digital" element={<BlogCalculoInversionMarketing />} />
           <Route path="/blog/branding-proceso-tecnicas-naming" element={<BlogBrandingProcesoTecnicasNaming />} />
             <Route path="/blog/business-model-canvas-para-crear-tu-estrategia-de-marketing" element={<BusinessModelCanvasEstrategiaMarketing />} />
              <Route path="/blog/google-consent-mode-cookieyes" element={<GoogleConsentModeCookieyes />} />
              <Route path="/blog/marketing-natural-posicionamiento-organico" element={<MarketingNaturalPosicionamientoOrganico />} />
          <Route path="/blog/crm-que-es-beneficios" element={<BlogCrmQueEsBeneficios />} />
          <Route path="/blog/como-elegir-mejor-crm-empresa-organizacion" element={<BlogComoElegirMejorCRM />} />
               <Route path="/blog/abm-account-based-marketing" element={<BlogABMAccountBasedMarketing />} />
        <Route path="/blog/re-commerce-economia-circular-ecommerce-partnership-sharpei" element={<BlogReCommerceEconomiaCircular />} />
        <Route path="/blog/seo-off-page-estrategias-practicas-posicionamiento" element={<BlogSeoOffPage />} />
        <Route path="/blog/automatizacion-marketing-digital-guia-completa" element={<BlogAutomatizacionMarketing />} />
          <Route path="/blog/web-3-0-futuro-internet-descentralizado" element={<BlogWeb30 />} />
          <Route path="/blog/seo-on-page-guia-completa" element={<BlogSeoOnPage />} />
          <Route path="/blog/lead-scoring-calificacion-leads" element={<BlogLeadScoringCalificacionLeads />} />
                  <Route path="/blog/seo-inteligencia-artificial" element={<BlogSeoInteligenciaArtificial />} />
                  <Route path="/blog/ia-redes-sociales-herramientas-riesgos" element={<BlogIARedesSociales />} />
        <Route path="/blog/funnel-conversion-b2b" element={<BlogFunnelConversionB2B />} />
        <Route path="/blog/marketing-global-internacionalizacion" element={<BlogMarketingGlobalInternacionalizacion />} />
        <Route path="/blog/kit-digital-marketing-guia-completa-2025" element={<BlogKitDigitalMarketing />} />
          
          
          {/* CONTACTO Y CONSULTAS */}
          <Route path="/agendar-reunion" element={<AgendarReunion />} />
          <Route path="/solicitar-consulta" element={<SolicitarConsulta />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/hayas-crm" element={<HayasCRM />} />
          
          {/* RUTAS LEGACY - Redirigen a las nuevas URLs estandarizadas */}
          <Route path="/crm-automatizaciones" element={<ConectaConTusClientes />} />
          <Route path="/creacion-marca" element={<ImpulsaTuMarca />} />
          <Route path="/soluciones/crm-automatizacion" element={<ConectaConTusClientes />} />
          <Route path="/soluciones/branding-marca" element={<ImpulsaTuMarca />} />
          <Route path="/marketing-visibilidad" element={<MarketingVisibilidad />} />
          <Route path="/captacion-leads" element={<CaptacionLeadsClientes />} />
          <Route path="/gestion-marketing" element={<GestionMarketing />} />
          <Route path="/soluciones-ia" element={<SolucionesIA />} />
          <Route path="/implantacion-crm" element={<ImplantacionCrm />} />
          
          {/* Redirecciones de URLs legacy de casos de éxito */}
          <Route path="/caso-exito-asendia" element={<Navigate to="/casos-exito/asendia" replace />} />
          <Route path="/caso-exito-nexo-vital" element={<Navigate to="/casos-exito/nexo-vital" replace />} />
          <Route path="/caso-exito-i-virgen-extra" element={<Navigate to="/casos-exito/i-virgen-extra" replace />} />
          <Route path="/caso-exito-inbound-students" element={<Navigate to="/casos-exito/inbound-students" replace />} />
          <Route path="/caso-exito-calistenia-online" element={<Navigate to="/casos-exito/calisthenia-online" replace />} />
          <Route path="/caso-exito-centro-roraima" element={<Navigate to="/casos-exito/centro-roraima" replace />} />
          <Route path="/caso-exito-joints-up" element={<Navigate to="/casos-exito/joints-up" replace />} />
          <Route path="/caso-exito-translate-with-style" element={<Navigate to="/casos-exito/translate-with-style" replace />} />
          <Route path="/caso-exito-formato-educativo" element={<Navigate to="/casos-exito/formato-educativo" replace />} />
          <Route path="/caso-exito-omr" element={<Navigate to="/casos-exito/omr" replace />} />
          <Route path="/caso-exito-wooptix" element={<Navigate to="/casos-exito/wooptix" replace />} />
          <Route path="/caso-exito-pamdamedia" element={<Navigate to="/casos-exito/pamdamedia" replace />} />
          <Route path="/caso-exito-give-and-go" element={<Navigate to="/casos-exito/give-and-go" replace />} />
          <Route path="/caso-exito-hikvision" element={<Navigate to="/casos-exito/hikvision" replace />} />
          <Route path="/caso-exito-owo-game" element={<Navigate to="/casos-exito/owo-game" replace />} />
          <Route path="/caso-exito-nova-praxis" element={<Navigate to="/casos-exito/nova-praxis" replace />} />
          <Route path="/caso-exito-aistercel" element={<Navigate to="/casos-exito/aistercel" replace />} />
          <Route path="/caso-exito-quanticbi" element={<Navigate to="/casos-exito/quanticbi" replace />} />
          <Route path="/caso-exito-peixos-emilio" element={<Navigate to="/casos-exito/peixos-emilio" replace />} />
          <Route path="/caso-exito-corte-a-films" element={<Navigate to="/casos-exito/corte-a-films" replace />} />
          <Route path="/caso-exito-lualca" element={<Navigate to="/casos-exito/lualca" replace />} />
          <Route path="/caso-exito-plaza-de-la-estacion" element={<Navigate to="/casos-exito/plaza-de-la-estacion" replace />} />
          <Route path="/caso-exito-rivas-centro" element={<Navigate to="/casos-exito/rivas-centro" replace />} />
          <Route path="/caso-exito-hubspot-for-startups" element={<Navigate to="/casos-exito/hubspot-for-startups" replace />} />
          <Route path="/caso-exito-beka-finance" element={<Navigate to="/casos-exito/beka-finance" replace />} />
          <Route path="/caso-exito-peris-electricidad" element={<Navigate to="/casos-exito/peris-electricidad" replace />} />
          <Route path="/caso-exito-carniceria-picos-de-europa" element={<Navigate to="/casos-exito/carniceria-picos-de-europa" replace />} />
          <Route path="/caso-exito-pasteleria-la-oriental-sin-gluten" element={<Navigate to="/casos-exito/pasteleria-la-oriental-sin-gluten" replace />} />
          <Route path="/caso-exito-flap-articulos-peluqueria" element={<Navigate to="/casos-exito/flap-articulos-peluqueria" replace />} />
          
          <Route path="/servicios/creacion-marca" element={<CreacionMarca />} />
          <Route path="/servicios/gestion-redes-sociales" element={<GestionRedesSociales />} />
          <Route path="/servicios/publicidad-redes-sociales" element={<PublicidadRedesSociales />} />
          <Route path="/servicios/publicidad-google-ads" element={<PublicidadGoogleAds />} />
          <Route path="/servicios/email-marketing-automatizaciones" element={<EmailMarketingAutomatizaciones />} />
          <Route path="/servicios/consultoria-estrategica-analitica" element={<ConsultoriaEstrategicaAnalitica />} />
          <Route path="/servicios/formacion-ia" element={<FormacionIA />} />
          <Route path="/servicios/integraciones-ia-procesos" element={<IntegracionesIAProcesos />} />
          <Route path="/servicios/estrategia-contenidos" element={<EstrategiaContenidos />} />
          <Route path="/servicios/localizacion-contenidos" element={<LocalizacionContenidos />} />
          <Route path="/servicios/campanas-inbound-marketing" element={<CampanasInboundMarketing />} />
          <Route path="/servicios/asistente-ia" element={<AsistenteIA />} />
          <Route path="/servicios/alojamiento-mantenimiento-web" element={<Navigate to="/servicios/diseno-web/alojamiento-mantenimiento" replace />} />
          <Route path="/servicios/marketing-directo" element={<MarketingDirecto />} />
          <Route path="/servicios/implementacion-funnel" element={<ImplementacionFunnel />} />
          <Route path="/servicios/administracion-crm" element={<AdministracionCrm />} />
          <Route path="/servicios/automatizacion-procesos-ventas" element={<AutomatizacionProcesosVentas />} />
          <Route path="/servicios/captacion-leads-clientes" element={<CaptacionLeadsClientes />} />
          <Route path="/servicios/implantacion-crm" element={<ImplantacionCrm />} />
          <Route path="/servicios" element={<NotFound />} />
          
          {/* 404 - DEBE IR SIEMPRE AL FINAL */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
