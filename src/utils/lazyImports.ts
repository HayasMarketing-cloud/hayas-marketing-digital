import { lazy } from "react";

// Páginas principales (carga inmediata)
export const Index = lazy(() => import("@/pages/Index"));
export const NotFound = lazy(() => import("@/pages/NotFound"));
export const Error404 = lazy(() => import("@/pages/Error404"));

// Nosotros y contacto
export const Nosotros = lazy(() => import("@/pages/Nosotros"));
export const Contacto = lazy(() => import("@/pages/Contacto"));
export const Gracias = lazy(() => import("@/pages/Gracias"));
export const GraciasPorAgendarReunion = lazy(() => import("@/pages/GraciasPorAgendarReunion"));
export const AgendarReunion = lazy(() => import("@/pages/AgendarReunion"));
export const SolicitarConsulta = lazy(() => import("@/pages/SolicitarConsulta"));

// Soluciones principales
export const ConectaConTusClientes = lazy(() => import("@/pages/ConectaConTusClientes"));
export const ImpulsaTuMarca = lazy(() => import("@/pages/ImpulsaTuMarca"));
export const ActivaTusVentas = lazy(() => import("@/pages/ActivaTusVentas"));
export const MarketingVisibilidad = lazy(() => import("@/pages/MarketingVisibilidad"));
export const ActivaTuEstrategiaDigital = lazy(() => import("@/pages/ActivaTuEstrategiaDigital"));
export const SolucionesIA = lazy(() => import("@/pages/SolucionesIA"));

// Servicios
export const Servicios = lazy(() => import("@/pages/Servicios"));
export const TiendaOnline = lazy(() => import("@/pages/TiendaOnline"));
export const DisenoWeb = lazy(() => import("@/pages/DisenoWeb"));
export const SeoPositioning = lazy(() => import("@/pages/SeoPositioning"));
export const CreacionMarca = lazy(() => import("@/pages/CreacionMarca"));
export const GestionRedesSociales = lazy(() => import("@/pages/GestionRedesSociales"));
export const PublicidadRedesSociales = lazy(() => import("@/pages/PublicidadRedesSociales"));
export const PublicidadGoogleAds = lazy(() => import("@/pages/PublicidadGoogleAds"));
export const AsistenteIA = lazy(() => import("@/pages/AsistenteIA"));
export const AlojamientoMantenimiento = lazy(() => import("@/pages/AlojamientoMantenimiento"));
export const MarketingDirecto = lazy(() => import("@/pages/MarketingDirecto"));
export const ImplementacionFunnel = lazy(() => import("@/pages/ImplementacionFunnel"));
export const EmailMarketingAutomatizaciones = lazy(() => import("@/pages/EmailMarketingAutomatizaciones"));
export const ConsultoriaEstrategicaAnalitica = lazy(() => import("@/pages/ConsultoriaEstrategicaAnalitica"));
export const IntegracionesIAProcesos = lazy(() => import("@/pages/IntegracionesIAProcesos"));
export const FormacionIA = lazy(() => import("@/pages/FormacionIA"));
export const EstrategiaContenidos = lazy(() => import("@/pages/EstrategiaContenidos"));
export const AdministracionCrm = lazy(() => import("@/pages/AdministracionCrm"));
export const LocalizacionContenidos = lazy(() => import("@/pages/LocalizacionContenidos"));
export const CampanasInboundMarketing = lazy(() => import("@/pages/CampanasInboundMarketing"));
export const CaptacionLeadsClientes = lazy(() => import("@/pages/CaptacionLeadsClientes"));
export const AutomatizacionProcesosVentas = lazy(() => import("@/pages/AutomatizacionProcesosVentas"));
export const ImplantacionCrm = lazy(() => import("@/pages/ImplantacionCrm"));
export const AutomatizacionMarketing = lazy(() => import("@/pages/AutomatizacionMarketing"));
export const GestionClientesCRM = lazy(() => import("@/pages/GestionClientesCRM"));

// Kit Digital y Consulting
export const KitConsulting = lazy(() => import("@/pages/KitConsulting"));
export const KitDigital = lazy(() => import("@/pages/KitDigital"));
export const KitDigitalPresenciaBasica = lazy(() => import("@/pages/KitDigitalPresenciaBasica"));
export const KitDigitalGestionClientes = lazy(() => import("@/pages/KitDigitalGestionClientes"));
export const KitDigitalRedesSociales = lazy(() => import("@/pages/KitDigitalRedesSociales"));
export const KitDigitalPresenciaAvanzada = lazy(() => import("@/pages/KitDigitalPresenciaAvanzada"));

// CRM y Herramientas
export const HayasCRM = lazy(() => import("@/pages/HayasCRM"));
export const ComparativaHubSpotGoHighLevel = lazy(() => import("@/pages/ComparativaHubSpotGoHighLevel"));
export const HerramientaGeneradorWhatsApp = lazy(() => import("@/pages/HerramientaGeneradorWhatsApp"));

// Blog
export const Blog = lazy(() => import("@/pages/Blog"));
export const BlogPost = lazy(() => import("@/pages/BlogPost"));
export const BlogTagPage = lazy(() => import("@/pages/BlogTagPage"));

// Blog posts específicos
export const BlogIAMarketing = lazy(() => import("@/pages/BlogIAMarketing"));
export const BlogPerfilClienteIdeal = lazy(() => import("@/pages/BlogPerfilClienteIdeal"));
export const BlogPerfilClienteIdealICP = lazy(() => import("@/pages/BlogPerfilClienteIdealICP"));
export const BlogCalculoInversionMarketing = lazy(() => import("@/pages/BlogCalculoInversionMarketing"));
export const BlogBrandingProcesoTecnicasNaming = lazy(() => import("@/pages/BlogBrandingProcesoTecnicasNaming"));
export const BusinessModelCanvasEstrategiaMarketing = lazy(() => import("@/pages/BusinessModelCanvasEstrategiaMarketing"));
export const GoogleConsentModeCookieyes = lazy(() => import("@/pages/GoogleConsentModeCookieyes"));
export const MarketingNaturalPosicionamientoOrganico = lazy(() => import("@/pages/MarketingNaturalPosicionamientoOrganico"));
export const BlogCrmQueEsBeneficios = lazy(() => import("@/pages/BlogCrmQueEsBeneficios"));
export const BlogComoElegirMejorCRM = lazy(() => import("@/pages/BlogComoElegirMejorCRM"));
export const BlogABMAccountBasedMarketing = lazy(() => import("@/pages/BlogABMAccountBasedMarketing"));
export const BlogLeadScoringCalificacionLeads = lazy(() => import("@/pages/BlogLeadScoringCalificacionLeads"));
export const BlogSeoInteligenciaArtificial = lazy(() => import("@/pages/BlogSeoInteligenciaArtificial"));
export const BlogAutomatizacionMarketing = lazy(() => import("@/pages/BlogAutomatizacionMarketing"));
export const BlogWeb30 = lazy(() => import("@/pages/BlogWeb30"));
export const BlogSeoOnPage = lazy(() => import("@/pages/BlogSeoOnPage"));
export const BlogSeoOffPage = lazy(() => import("@/pages/BlogSeoOffPage"));
export const BlogKitDigitalMarketing = lazy(() => import("@/pages/BlogKitDigitalMarketing"));
export const BlogReCommerceEconomiaCircular = lazy(() => import("@/pages/BlogReCommerceEconomiaCircular"));
export const BlogIARedesSociales = lazy(() => import("@/pages/BlogIARedesSociales"));
export const BlogFunnelConversionB2B = lazy(() => import("@/pages/BlogFunnelConversionB2B"));
export const BlogEmailMarketingHubSpot = lazy(() => import("@/pages/BlogEmailMarketingHubSpot"));
export const BlogConfiguracionEmailMarketingCumplimiento = lazy(() => import("@/pages/BlogConfiguracionEmailMarketingCumplimiento"));
export const BlogMarketingGlobalInternacionalizacion = lazy(() => import("@/pages/BlogMarketingGlobalInternacionalizacion"));

// Casos de éxito (lazy loading)
export const CasosExito = lazy(() => import("@/pages/CasosExito"));
export const CasoExitoAsendia = lazy(() => import("@/pages/CasoExitoAsendia"));
export const CasoExitoNexoVital = lazy(() => import("@/pages/CasoExitoNexoVital"));
export const CasoExitoIVirgenExtra = lazy(() => import("@/pages/CasoExitoIVirgenExtra"));
export const CasoExitoInboundStudents = lazy(() => import("@/pages/CasoExitoInboundStudents"));
export const CalistheniaOnlinePage = lazy(() => import("@/pages/CalistheniaOnlinePage"));
export const CasoExitoCentroRoraima = lazy(() => import("@/pages/CasoExitoCentroRoraima"));
export const CasoExitoJointsUp = lazy(() => import("@/pages/CasoExitoJointsUp"));
export const CasoExitoDrParron = lazy(() => import("@/pages/CasoExitoDrParron"));
export const CasoExitoTranslateWithStyle = lazy(() => import("@/pages/CasoExitoTranslateWithStyle"));
export const CasoExitoFormatoEducativo = lazy(() => import("@/pages/CasoExitoFormatoEducativo"));
export const CasoExitoOMR = lazy(() => import("@/pages/CasoExitoOMR"));
export const CasoExitoAspAsepsia = lazy(() => import("@/pages/CasoExitoAspAsepsia"));
export const CasoExitoBufeteMaseras = lazy(() => import("@/pages/CasoExitoBufeteMaseras"));
export const CasoExitoModaIntimaVania = lazy(() => import("@/pages/CasoExitoModaIntimaVania"));
export const CasoExitoAlfixConsultores = lazy(() => import("@/pages/CasoExitoAlfixConsultores"));
export const CasoExitoAlmaCruceros = lazy(() => import("@/pages/CasoExitoAlmaCruceros"));
export const CasoExitoLaBaneraKD = lazy(() => import("@/pages/CasoExitoLaBaneraKD"));
export const CasoExitoSuministrosXSKD = lazy(() => import("@/pages/CasoExitoSuministrosXSKD"));
export const CasoExitoConversaConsultores = lazy(() => import("@/pages/CasoExitoConversaConsultores"));
export const CasoExitoBuhobike = lazy(() => import("@/pages/CasoExitoBuhobike"));
export const CasoExitoCabreraCervantes = lazy(() => import("@/pages/CasoExitoCabreraCervantes"));
export const CasoExitoEvaChampion = lazy(() => import("@/pages/CasoExitoEvaChampion"));
export const CasoExitoBelugaLinguistics = lazy(() => import("@/pages/CasoExitoBelugaLinguistics"));
export const CasoExitoWooptix = lazy(() => import("@/pages/CasoExitoWooptix"));
export const CasoExitoPamdamedia = lazy(() => import("@/pages/CasoExitoPamdamedia"));
export const CasoExitoGiveAndGo = lazy(() => import("@/pages/CasoExitoGiveAndGo"));
export const CasoExitoHikvision = lazy(() => import("@/pages/CasoExitoHikvision"));
export const CasoExitoOWOGame = lazy(() => import("@/pages/CasoExitoOWOGame"));
export const CasoExitoNovaPraxis = lazy(() => import("@/pages/CasoExitoNovaPraxis"));
export const CasoExitoAistercel = lazy(() => import("@/pages/CasoExitoAistercel"));
export const CasoExitoQuanticBI = lazy(() => import("@/pages/CasoExitoQuanticBI"));
export const CasoExitoPeixosEmilio = lazy(() => import("@/pages/CasoExitoPeixosEmilio"));
export const CasoExitoCorteAFilms = lazy(() => import("@/pages/CasoExitoCorteAFilms"));
export const CasoExitoLualca = lazy(() => import("@/pages/CasoExitoLualca"));
export const CasoExitoPlazaEstacion = lazy(() => import("@/pages/CasoExitoPlazaEstacion"));
export const CasoExitoRivasCentro = lazy(() => import("@/pages/CasoExitoRivasCentro"));
export const CasoExitoHubSpotForStartups = lazy(() => import("@/pages/CasoExitoHubSpotForStartups"));
export const CasoExitoBekaFinance = lazy(() => import("@/pages/CasoExitoBekaFinance"));
export const CasoExitoPerisElectricidad = lazy(() => import("@/pages/CasoExitoPerisElectricidad"));
export const CasoExitoCarniceriaPicosDeEuropa = lazy(() => import("@/pages/CasoExitoCarniceriaPicosDeEuropa"));
export const CasoExitoLaOrientalSinGluten = lazy(() => import("@/pages/CasoExitoLaOrientalSinGluten"));
export const CasoExitoFLAP = lazy(() => import("@/pages/CasoExitoFLAP"));
export const CasoExitoWideum = lazy(() => import("@/pages/CasoExitoWideum"));
export const CasoExitoAECOC = lazy(() => import("@/pages/CasoExitoAECOC"));
export const CasoExitoFINECT = lazy(() => import("@/pages/CasoExitoFINECT"));
export const CasoExitoCOVEBO = lazy(() => import("@/pages/CasoExitoCOVEBO"));
export const CasoExitoFundacionCasaMexico = lazy(() => import("@/pages/CasoExitoFundacionCasaMexico"));
export const CasoExitoMotivaTuMente = lazy(() => import("@/pages/CasoExitoMotivaTuMente"));
export const CasoExitoEurobitsTechnologies = lazy(() => import("@/pages/CasoExitoEurobitsTechnologies"));
export const CasoExitoBodegasVilano = lazy(() => import("@/pages/CasoExitoBodegasVilano"));
export const CasoExitoUnitrips = lazy(() => import("@/pages/CasoExitoUnitrips"));
export const CasoExitoLolaRoblesAbogada = lazy(() => import("@/pages/CasoExitoLolaRoblesAbogada"));
export const CasoExitoAIPClinic = lazy(() => import("@/pages/CasoExitoAIPClinic"));
export const CasoExitoHotteoTravel = lazy(() => import("@/pages/CasoExitoHotteoTravel"));

// Admin - SEO Control Center
export const AdminDashboard = lazy(() => import("@/pages/admin/AdminDashboard"));
export const SEODashboard = lazy(() => import("@/pages/admin/SEODashboard"));
export const SEOPagesManager = lazy(() => import("@/pages/admin/SEOPagesManager"));
export const SitemapManager = lazy(() => import("@/pages/admin/SitemapManager"));
export const RobotsManager = lazy(() => import("@/pages/admin/RobotsManager"));
export const RedirectsManager = lazy(() => import("@/pages/admin/RedirectsManager"));
export const GSCFullReport = lazy(() => import("@/pages/admin/GSCFullReport"));
export const IndexNowManager = lazy(() => import("@/pages/admin/IndexNowManager"));
export const FAQValidator = lazy(() => import("@/pages/admin/FAQValidator"));
export const TranslationManager = lazy(() => import("@/pages/admin/TranslationManager"));

// Páginas legales
export const AvisoLegal = lazy(() => import("@/pages/AvisoLegal"));
export const PoliticaPrivacidad = lazy(() => import("@/pages/PoliticaPrivacidad"));
export const TerminosServicio = lazy(() => import("@/pages/TerminosServicio"));
export const PoliticaCookies = lazy(() => import("@/pages/PoliticaCookies"));