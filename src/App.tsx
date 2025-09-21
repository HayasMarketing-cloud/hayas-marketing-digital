
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
import ActivaTuEstrategiaDigital from "./pages/ActivaTuEstrategiaDigital";
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
import CasoExitoCabreraCervantes from "./pages/CasoExitoCabreraCervantes";
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
import CasoExitoBodegasVilano from '@/pages/CasoExitoBodegasVilano';
import CasoExitoUnitrips from '@/pages/CasoExitoUnitrips';
import CasoExitoLolaRoblesAbogada from '@/pages/CasoExitoLolaRoblesAbogada';
import CasoExitoAIPClinic from '@/pages/CasoExitoAIPClinic';
import CasoExitoHotteoTravel from '@/pages/CasoExitoHotteoTravel';
import ImplantacionCrm from "./pages/ImplantacionCrm";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import BlogIAMarketing from "./pages/BlogIAMarketing";
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
import DraftProtection from './components/DraftProtection';
import EmailMarketingAutomatizaciones from './pages/EmailMarketingAutomatizaciones';
import ConsultoriaEstrategicaAnalitica from './pages/ConsultoriaEstrategicaAnalitica';
import Servicios from './pages/Servicios';
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
import BlogConfiguracionEmailMarketingCumplimiento from './pages/BlogConfiguracionEmailMarketingCumplimiento';
import BlogMarketingGlobalInternacionalizacion from './pages/BlogMarketingGlobalInternacionalizacion';
import BlogTagPage from './pages/BlogTagPage';
import ComparativaHubSpotGoHighLevel from './pages/ComparativaHubSpotGoHighLevel';
import KitDigitalPresenciaBasica from './pages/KitDigitalPresenciaBasica';
import KitDigitalGestionClientes from './pages/KitDigitalGestionClientes';
import KitDigitalRedesSociales from './pages/KitDigitalRedesSociales';
import KitDigitalPresenciaAvanzada from './pages/KitDigitalPresenciaAvanzada';
import AvisoLegal from './pages/AvisoLegal';
import PoliticaPrivacidad from './pages/PoliticaPrivacidad';
import TerminosServicio from './pages/TerminosServicio';
import PoliticaCookies from './pages/PoliticaCookies';

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
        <DraftProtection>
          <Routes>
           {/* REDIRECCIÓN ROOT A ESPAÑOL */}
           <Route path="/" element={<Navigate to="/es" replace />} />
           
           {/* REDIRECCIONES LEGACY CRM - Fallback client-side */}
           <Route path="/es/que-es-un-crm-o-customer-relationship-management" element={<Navigate to="/es/blog/crm-que-es-beneficios" replace />} />
           <Route path="/es/que-es-un-crm-o-customer-relationship-management/" element={<Navigate to="/es/blog/crm-que-es-beneficios" replace />} />
           <Route path="/blog/que-es-un-crm-o-customer-relationship-management" element={<Navigate to="/es/blog/crm-que-es-beneficios" replace />} />
           <Route path="/blog/qué-es-un-crm-o-customer-relationship-management" element={<Navigate to="/es/blog/crm-que-es-beneficios" replace />} />
           
           {/* REDIRECCIONES SIN PREFIJO /es/ */}
          <Route path="/nosotros" element={<Navigate to="/es/nosotros" replace />} />
          <Route path="/servicios/marketing-directo" element={<Navigate to="/es/servicios/marketing-directo" replace />} />
          <Route path="/servicios/seo-positioning" element={<Navigate to="/es/servicios/seo-positioning" replace />} />
          <Route path="/comparativa-hubspot-gohighlevel" element={<Navigate to="/es/comparativa/hubspot-vs-go-high-level" replace />} />
          <Route path="/soluciones/marketing-visibilidad" element={<Navigate to="/es/soluciones/marketing-visibilidad" replace />} />
          
          {/* RUTAS EN ESPAÑOL */}
          <Route path="/es" element={<Index />} />
          
          {/* NOSOTROS */}
          <Route path="/es/nosotros" element={<Nosotros />} />
          
          {/* SOLUCIONES - 3 Nuevas Categorías Estratégicas */}
          <Route path="/es/soluciones/impulsa-tu-marca" element={<ImpulsaTuMarca />} />
          <Route path="/es/soluciones/conecta-con-tus-clientes" element={<ConectaConTusClientes />} />
          <Route path="/es/soluciones/activa-tus-ventas" element={<ActivaTusVentas />} />
          <Route path="/es/soluciones/activa-tu-estrategia-digital" element={<ActivaTuEstrategiaDigital />} />
          
          {/* SOLUCIONES - Páginas individuales (legacy y específicas) */}
          <Route path="/es/soluciones/ia-marketing" element={<SolucionesIA />} />
          
          <Route path="/es/servicios/tienda-online" element={<TiendaOnline />} />
          <Route path="/es/servicios/diseno-web" element={<DisenoWeb />} />
          <Route path="/es/servicios/diseno-web/alojamiento-mantenimiento" element={<AlojamientoMantenimiento />} />
          <Route path="/es/servicios/seo-posicionamiento" element={<SeoPositioning />} />
          <Route path="/es/servicios/seo-positioning" element={<SeoPositioning />} />
          <Route path="/es/soluciones/marketing-visibilidad" element={<MarketingVisibilidad />} />
          <Route path="/es/soluciones/gestion-marketing" element={<Navigate to="/es/servicios/administracion-crm" replace />} />
          <Route path="/es/soluciones/captacion-leads" element={<CaptacionLeadsClientes />} />
          <Route path="/es/kit-consulting" element={<KitConsulting />} />
          <Route path="/es/kit-digital" element={<KitDigital />} />
          <Route path="/es/kit-digital/presencia-basica-internet" element={<KitDigitalPresenciaBasica />} />
          <Route path="/es/kit-digital/gestion-clientes-crm" element={<KitDigitalGestionClientes />} />
          <Route path="/es/kit-digital/gestion-red-social" element={<KitDigitalRedesSociales />} />
          <Route path="/es/kit-digital/presencia-avanzada-seo" element={<KitDigitalPresenciaAvanzada />} />
          
          {/* CASOS DE ÉXITO - Página principal */}
          <Route path="/es/casos-exito" element={<CasosExito />} />
          
          {/* CASOS DE ÉXITO - Apoyan las soluciones */}
          <Route path="/es/casos-exito/asendia" element={<CasoExitoAsendia />} />
          <Route path="/es/casos-exito/nexo-vital" element={<CasoExitoNexoVital />} />
          <Route path="/es/casos-exito/i-virgen-extra" element={<CasoExitoIVirgenExtra />} />
          <Route path="/es/casos-exito/inbound-students" element={<CasoExitoInboundStudents />} />
          <Route path="/es/casos-exito/calisthenia-online" element={<CalistheniaOnlinePage />} />
          <Route path="/es/casos-exito/centro-roraima" element={<CasoExitoCentroRoraima />} />
          <Route path="/es/casos-exito/joints-up" element={<CasoExitoJointsUp />} />
          <Route path="/es/casos-exito/translate-with-style" element={<CasoExitoTranslateWithStyle />} />
          <Route path="/es/casos-exito/formato-educativo" element={<CasoExitoFormatoEducativo />} />
          <Route path="/es/casos-exito/omr" element={<CasoExitoOMR />} />
          <Route path="/es/casos-exito/asp-asepsia" element={<CasoExitoAspAsepsia />} />
          <Route path="/es/casos-exito/bufete-maseras" element={<CasoExitoBufeteMaseras />} />
          <Route path="/es/casos-exito/moda-intima-vania" element={<CasoExitoModaIntimaVania />} />
          <Route path="/es/casos-exito/alfix-consultores" element={<CasoExitoAlfixConsultores />} />
          <Route path="/es/casos-exito/alma-cruceros" element={<CasoExitoAlmaCruceros />} />
          <Route path="/es/casos-exito/la-banera-kd" element={<CasoExitoLaBaneraKD />} />
          <Route path="/es/casos-exito/suministros-xs-kd" element={<CasoExitoSuministrosXSKD />} />
          <Route path="/es/casos-exito/conversa-consultores" element={<CasoExitoConversaConsultores />} />
          <Route path="/es/casos-exito/buhobike" element={<CasoExitoBuhobike />} />
          <Route path="/es/casos-exito/cabrera-cervantes" element={<CasoExitoCabreraCervantes />} />
          <Route path="/es/casos-exito/eva-champion" element={<CasoExitoEvaChampion />} />
          <Route path="/es/casos-exito/beluga-linguistics" element={<CasoExitoBelugaLinguistics />} />
          <Route path="/es/casos-exito/wooptix" element={<CasoExitoWooptix />} />
          <Route path="/es/casos-exito/pamdamedia" element={<CasoExitoPamdamedia />} />
          <Route path="/es/casos-exito/give-and-go" element={<CasoExitoGiveAndGo />} />
          <Route path="/es/casos-exito/hikvision" element={<CasoExitoHikvision />} />
          <Route path="/es/casos-exito/owo-game" element={<CasoExitoOWOGame />} />
          <Route path="/es/casos-exito/nova-praxis" element={<CasoExitoNovaPraxis />} />
          <Route path="/es/casos-exito/aistercel" element={<CasoExitoAistercel />} />
          <Route path="/es/casos-exito/quanticbi" element={<CasoExitoQuanticBI />} />
          <Route path="/es/casos-exito/peixos-emilio" element={<CasoExitoPeixosEmilio />} />
          <Route path="/es/casos-exito/corte-a-films" element={<CasoExitoCorteAFilms />} />
          <Route path="/es/casos-exito/lualca" element={<CasoExitoLualca />} />
          <Route path="/es/casos-exito/plaza-de-la-estacion" element={<CasoExitoPlazaEstacion />} />
          <Route path="/es/casos-exito/rivas-centro" element={<CasoExitoRivasCentro />} />
          <Route path="/es/casos-exito/hubspot-for-startups" element={<CasoExitoHubSpotForStartups />} />
          <Route path="/es/casos-exito/beka-finance" element={<CasoExitoBekaFinance />} />
          <Route path="/es/casos-exito/peris-electricidad" element={<CasoExitoPerisElectricidad />} />
          <Route path="/es/casos-exito/carniceria-picos-de-europa" element={<CasoExitoCarniceriaPicosDeEuropa />} />
          <Route path="/es/casos-exito/pasteleria-la-oriental-sin-gluten" element={<CasoExitoLaOrientalSinGluten />} />
          <Route path="/es/casos-exito/flap-articulos-peluqueria" element={<CasoExitoFLAP />} />
          <Route path="/es/casos-exito/wideum" element={<CasoExitoWideum />} />
          <Route path="/es/casos-exito/aecoc" element={<CasoExitoAECOC />} />
          <Route path="/es/casos-exito/finect" element={<CasoExitoFINECT />} />
          <Route path="/es/casos-exito/covebo" element={<CasoExitoCOVEBO />} />
          <Route path="/es/casos-exito/fundacion-casa-mexico" element={<CasoExitoFundacionCasaMexico />} />
          <Route path="/es/casos-exito/motiva-tu-mente" element={<CasoExitoMotivaTuMente />} />
          <Route path="/es/casos-exito/eurobits-technologies" element={<CasoExitoEurobitsTechnologies />} />
          <Route path="/es/casos-exito/bodegas-vilano" element={<CasoExitoBodegasVilano />} />
          <Route path="/es/casos-exito/unitrips" element={<CasoExitoUnitrips />} />
          <Route path="/es/casos-exito/lola-robles-abogada" element={<CasoExitoLolaRoblesAbogada />} />
          <Route path="/es/casos-exito/aip-clinic" element={<CasoExitoAIPClinic />} />
          <Route path="/es/casos-exito/hotteo-travel" element={<CasoExitoHotteoTravel />} />
          
           {/* BLOG / RECURSOS */}
           <Route path="/es/blog" element={<Blog />} />
           
           {/* URL CANÓNICA - Post IA Marketing */}
           <Route path="/es/blog/la-inteligencia-artificial-ia-y-su-aplicacion-en-marketing" element={<BlogIAMarketing />} />
           
           <Route path="/es/blog/guia-tecnica-email-marketing-hubspot-configuracion" element={<BlogEmailMarketingHubSpot />} />
           <Route path="/es/blog/configuracion-email-marketing-cumplimiento-normativo" element={<BlogConfiguracionEmailMarketingCumplimiento />} />
             <Route path="/es/blog/tag/:tag" element={<BlogTagPage />} />
            <Route path="/es/blog/:id" element={<BlogPost />} />
            <Route path="/es/blog/perfil-cliente-ideal" element={<BlogPerfilClienteIdealICP />} />
            <Route path="/es/blog/como-crear-buyer-persona-b2b-b2c-guia-completa" element={<BlogPerfilClienteIdeal />} />
           <Route path="/es/blog/calculo-inversion-plan-marketing-digital" element={<BlogCalculoInversionMarketing />} />
           <Route path="/es/blog/branding-proceso-tecnicas-naming" element={<BlogBrandingProcesoTecnicasNaming />} />
             <Route path="/es/blog/business-model-canvas-para-crear-tu-estrategia-de-marketing" element={<BusinessModelCanvasEstrategiaMarketing />} />
              <Route path="/es/blog/google-consent-mode-cookieyes" element={<GoogleConsentModeCookieyes />} />
              <Route path="/es/blog/marketing-natural-posicionamiento-organico" element={<MarketingNaturalPosicionamientoOrganico />} />
          <Route path="/es/blog/crm-que-es-beneficios" element={<BlogCrmQueEsBeneficios />} />
          <Route path="/es/blog/como-elegir-mejor-crm-empresa-organizacion" element={<BlogComoElegirMejorCRM />} />
               <Route path="/es/blog/abm-account-based-marketing" element={<BlogABMAccountBasedMarketing />} />
        <Route path="/es/blog/re-commerce-economia-circular-ecommerce-partnership-sharpei" element={<BlogReCommerceEconomiaCircular />} />
        <Route path="/es/blog/seo-off-page-estrategias-practicas-posicionamiento" element={<BlogSeoOffPage />} />
        <Route path="/es/blog/automatizacion-marketing-digital-guia-completa" element={<BlogAutomatizacionMarketing />} />
          <Route path="/es/blog/web-3-0-futuro-internet-descentralizado" element={<BlogWeb30 />} />
          <Route path="/es/blog/seo-on-page-guia-completa" element={<BlogSeoOnPage />} />
          <Route path="/es/blog/lead-scoring-calificacion-leads" element={<BlogLeadScoringCalificacionLeads />} />
                  <Route path="/es/blog/seo-inteligencia-artificial" element={<BlogSeoInteligenciaArtificial />} />
                  <Route path="/es/blog/ia-redes-sociales-herramientas-riesgos" element={<BlogIARedesSociales />} />
        <Route path="/es/blog/funnel-conversion-b2b" element={<BlogFunnelConversionB2B />} />
        <Route path="/es/blog/marketing-global-internacionalizacion" element={<BlogMarketingGlobalInternacionalizacion />} />
          <Route path="/es/blog/kit-digital-marketing-guia-completa-2025" element={<BlogKitDigitalMarketing />} />
          
          {/* COMPARATIVAS */}
          <Route path="/es/comparativa/hubspot-vs-go-high-level" element={<ComparativaHubSpotGoHighLevel />} />
          
          
          {/* CONTACTO Y CONSULTAS */}
          <Route path="/es/agendar-reunion" element={<AgendarReunion />} />
          <Route path="/es/solicitar-consulta" element={<SolicitarConsulta />} />
          <Route path="/es/contacto" element={<Contacto />} />
          <Route path="/es/hayas-crm" element={<HayasCRM />} />
          
          
          <Route path="/es/servicios/creacion-marca" element={<CreacionMarca />} />
          <Route path="/es/servicios/gestion-redes-sociales" element={<GestionRedesSociales />} />
          <Route path="/es/servicios/publicidad-redes-sociales" element={<PublicidadRedesSociales />} />
          <Route path="/es/servicios/publicidad-google-ads" element={<PublicidadGoogleAds />} />
          <Route path="/es/servicios/email-marketing-automatizaciones" element={<EmailMarketingAutomatizaciones />} />
          <Route path="/es/servicios/consultoria-estrategica-analitica" element={<ConsultoriaEstrategicaAnalitica />} />
          <Route path="/es/servicios/formacion-ia" element={<FormacionIA />} />
          <Route path="/es/servicios/integraciones-ia-procesos" element={<IntegracionesIAProcesos />} />
          <Route path="/es/servicios/estrategia-contenidos" element={<EstrategiaContenidos />} />
          <Route path="/es/servicios/localizacion-contenidos" element={<LocalizacionContenidos />} />
          <Route path="/es/servicios/campanas-inbound-marketing" element={<CampanasInboundMarketing />} />
          <Route path="/es/servicios/asistente-ia" element={<AsistenteIA />} />
          <Route path="/es/servicios/alojamiento-mantenimiento-web" element={<Navigate to="/es/servicios/diseno-web/alojamiento-mantenimiento" replace />} />
          <Route path="/es/servicios/marketing-directo" element={<MarketingDirecto />} />
          <Route path="/es/servicios/implementacion-funnel" element={<ImplementacionFunnel />} />
          <Route path="/es/servicios/administracion-crm" element={<AdministracionCrm />} />
          <Route path="/es/servicios/automatizacion-procesos-ventas" element={<AutomatizacionProcesosVentas />} />
          <Route path="/es/servicios/captacion-leads-clientes" element={<CaptacionLeadsClientes />} />
          <Route path="/es/servicios/implantacion-crm" element={<ImplantacionCrm />} />
          <Route path="/es/servicios" element={<Servicios />} />
          
          {/* PÁGINAS LEGALES */}
          <Route path="/es/legal/aviso-legal" element={<AvisoLegal />} />
          <Route path="/es/legal/politica-privacidad" element={<PoliticaPrivacidad />} />
          <Route path="/es/legal/terminos-servicio" element={<TerminosServicio />} />
          <Route path="/es/legal/politica-cookies" element={<PoliticaCookies />} />
          
          {/* 404 - DEBE IR SIEMPRE AL FINAL */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        </DraftProtection>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
