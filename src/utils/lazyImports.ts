import { lazyWithRetry } from "@/utils/lazyWithRetry";

// Páginas principales (carga inmediata)
export const Index = lazyWithRetry(() => import("@/pages/Index"));
export const IndexEN = lazyWithRetry(() => import("@/pages/IndexEN"));
export const NotFound = lazyWithRetry(() => import("@/pages/NotFound"));
export const Error404 = lazyWithRetry(() => import("@/pages/Error404"));
export const ComingSoonEN = lazyWithRetry(() => import("@/pages/ComingSoonEN"));
export const ComingSoonRedirect = lazyWithRetry(() => import("@/pages/en/ComingSoonRedirect"));
export const TypographyPlayground = lazyWithRetry(() => import("@/pages/TypographyPlayground"));

// Nosotros y contacto
export const Nosotros = lazyWithRetry(() => import("@/pages/Nosotros"));
export const Contacto = lazyWithRetry(() => import("@/pages/Contacto"));
export const Gracias = lazyWithRetry(() => import("@/pages/Gracias"));
export const GraciasPorAgendarReunion = lazyWithRetry(() => import("@/pages/GraciasPorAgendarReunion"));
export const AgendarReunion = lazyWithRetry(() => import("@/pages/AgendarReunion"));
export const SolicitarConsulta = lazyWithRetry(() => import("@/pages/SolicitarConsulta"));

// Soluciones principales (legacy — mantener para backward compat)
export const ConectaConTusClientes = lazyWithRetry(() => import("@/pages/ConectaConTusClientes"));
export const ImpulsaTuMarca = lazyWithRetry(() => import("@/pages/ImpulsaTuMarca"));
export const ActivaTusVentas = lazyWithRetry(() => import("@/pages/ActivaTusVentas"));
export const MarketingVisibilidad = lazyWithRetry(() => import("@/pages/MarketingVisibilidad"));
export const ActivaTuEstrategiaDigital = lazyWithRetry(() => import("@/pages/ActivaTuEstrategiaDigital"));
export const SolucionesIA = lazyWithRetry(() => import("@/pages/SolucionesIA"));

// Activaciones (nuevas páginas de grupo)
export const ResearchActivation = lazyWithRetry(() => import("@/pages/activaciones/ResearchActivation"));
export const GrowthActivation = lazyWithRetry(() => import("@/pages/activaciones/GrowthActivation"));
export const VisibilityActivation = lazyWithRetry(() => import("@/pages/activaciones/VisibilityActivation"));
export const WebFunnelActivation = lazyWithRetry(() => import("@/pages/activaciones/WebFunnelActivation"));
export const CrmAutomationActivation = lazyWithRetry(() => import("@/pages/activaciones/CrmAutomationActivation"));
export const ContentBrandActivation = lazyWithRetry(() => import("@/pages/activaciones/ContentBrandActivation"));

// Servicios
export const Servicios = lazyWithRetry(() => import("@/pages/Servicios"));
export const TiendaOnline = lazyWithRetry(() => import("@/pages/TiendaOnline"));
export const DisenoWeb = lazyWithRetry(() => import("@/pages/DisenoWeb"));
export const SeoPositioning = lazyWithRetry(() => import("@/pages/SeoPositioning"));
export const CreacionMarca = lazyWithRetry(() => import("@/pages/CreacionMarca"));
export const GestionRedesSociales = lazyWithRetry(() => import("@/pages/GestionRedesSociales"));
export const PublicidadRedesSociales = lazyWithRetry(() => import("@/pages/PublicidadRedesSociales"));
export const PublicidadGoogleAds = lazyWithRetry(() => import("@/pages/PublicidadGoogleAds"));
export const AsistenteIA = lazyWithRetry(() => import("@/pages/AsistenteIA"));
export const AlojamientoMantenimiento = lazyWithRetry(() => import("@/pages/AlojamientoMantenimiento"));
export const MarketingDirecto = lazyWithRetry(() => import("@/pages/MarketingDirecto"));
export const ImplementacionFunnel = lazyWithRetry(() => import("@/pages/ImplementacionFunnel"));
export const EmailMarketingAutomatizaciones = lazyWithRetry(() => import("@/pages/EmailMarketingAutomatizaciones"));
export const ConsultoriaEstrategicaAnalitica = lazyWithRetry(() => import("@/pages/ConsultoriaEstrategicaAnalitica"));
export const IntegracionesIAProcesos = lazyWithRetry(() => import("@/pages/IntegracionesIAProcesos"));
export const FormacionIA = lazyWithRetry(() => import("@/pages/FormacionIA"));
export const EstrategiaContenidos = lazyWithRetry(() => import("@/pages/EstrategiaContenidos"));
export const AdministracionCrm = lazyWithRetry(() => import("@/pages/AdministracionCrm"));
export const LocalizacionContenidos = lazyWithRetry(() => import("@/pages/LocalizacionContenidos"));
export const CampanasInboundMarketing = lazyWithRetry(() => import("@/pages/CampanasInboundMarketing"));
export const CaptacionLeadsClientes = lazyWithRetry(() => import("@/pages/CaptacionLeadsClientes"));
export const AutomatizacionProcesosVentas = lazyWithRetry(() => import("@/pages/AutomatizacionProcesosVentas"));
export const ImplantacionCrm = lazyWithRetry(() => import("@/pages/ImplantacionCrm"));
export const SensePlatform = lazyWithRetry(() => import("@/pages/SensePlatform"));
export const AutomatizacionMarketing = lazyWithRetry(() => import("@/pages/AutomatizacionMarketing"));
export const GestionClientesCRM = lazyWithRetry(() => import("@/pages/GestionClientesCRM"));

// Kit Digital y Consulting
export const KitConsulting = lazyWithRetry(() => import("@/pages/KitConsulting"));
export const KitDigital = lazyWithRetry(() => import("@/pages/KitDigital"));
export const KitDigitalPresenciaBasica = lazyWithRetry(() => import("@/pages/KitDigitalPresenciaBasica"));
export const KitDigitalGestionClientes = lazyWithRetry(() => import("@/pages/KitDigitalGestionClientes"));
export const KitDigitalRedesSociales = lazyWithRetry(() => import("@/pages/KitDigitalRedesSociales"));
export const KitDigitalPresenciaAvanzada = lazyWithRetry(() => import("@/pages/KitDigitalPresenciaAvanzada"));

// CRM y Herramientas
export const HayasCRM = lazyWithRetry(() => import("@/pages/HayasCRM"));
export const ComparativaHubSpotGoHighLevel = lazyWithRetry(() => import("@/pages/ComparativaHubSpotGoHighLevel"));
export const HerramientaGeneradorWhatsApp = lazyWithRetry(() => import("@/pages/HerramientaGeneradorWhatsApp"));
export const HerramientaCalculadoraROI = lazyWithRetry(() => import("@/pages/HerramientaCalculadoraROI"));

// Blog
export const Blog = lazyWithRetry(() => import("@/pages/Blog"));
export const BlogPost = lazyWithRetry(() => import("@/pages/BlogPost"));
export const BlogTagPage = lazyWithRetry(() => import("@/pages/BlogTagPage"));

// Autores
export const AuthorRubenReyero = lazyWithRetry(() => import("@/pages/AuthorRubenReyero"));

// Blog posts específicos
export const BlogIAMarketing = lazyWithRetry(() => import("@/pages/BlogIAMarketing"));
export const BlogPerfilClienteIdeal = lazyWithRetry(() => import("@/pages/BlogPerfilClienteIdeal"));
export const BlogPerfilClienteIdealICP = lazyWithRetry(() => import("@/pages/BlogPerfilClienteIdealICP"));
export const BlogCalculoInversionMarketing = lazyWithRetry(() => import("@/pages/BlogCalculoInversionMarketing"));
export const BlogBrandingProcesoTecnicasNaming = lazyWithRetry(() => import("@/pages/BlogBrandingProcesoTecnicasNaming"));
export const BusinessModelCanvasEstrategiaMarketing = lazyWithRetry(() => import("@/pages/BusinessModelCanvasEstrategiaMarketing"));
export const GoogleConsentModeCookieyes = lazyWithRetry(() => import("@/pages/GoogleConsentModeCookieyes"));
export const MarketingNaturalPosicionamientoOrganico = lazyWithRetry(() => import("@/pages/MarketingNaturalPosicionamientoOrganico"));
export const BlogCrmQueEsBeneficios = lazyWithRetry(() => import("@/pages/BlogCrmQueEsBeneficios"));
export const BlogComoElegirMejorCRM = lazyWithRetry(() => import("@/pages/BlogComoElegirMejorCRM"));
export const BlogABMAccountBasedMarketing = lazyWithRetry(() => import("@/pages/BlogABMAccountBasedMarketing"));
export const BlogLeadScoringCalificacionLeads = lazyWithRetry(() => import("@/pages/BlogLeadScoringCalificacionLeads"));
export const BlogSeoInteligenciaArtificial = lazyWithRetry(() => import("@/pages/BlogSeoInteligenciaArtificial"));
export const BlogAutomatizacionMarketing = lazyWithRetry(() => import("@/pages/BlogAutomatizacionMarketing"));
export const BlogWeb30 = lazyWithRetry(() => import("@/pages/BlogWeb30"));
export const BlogSeoOnPage = lazyWithRetry(() => import("@/pages/BlogSeoOnPage"));
export const BlogSeoOffPage = lazyWithRetry(() => import("@/pages/BlogSeoOffPage"));
export const BlogKitDigitalMarketing = lazyWithRetry(() => import("@/pages/BlogKitDigitalMarketing"));
export const BlogReCommerceEconomiaCircular = lazyWithRetry(() => import("@/pages/BlogReCommerceEconomiaCircular"));
export const BlogIARedesSociales = lazyWithRetry(() => import("@/pages/BlogIARedesSociales"));
export const BlogFunnelConversionB2B = lazyWithRetry(() => import("@/pages/BlogFunnelConversionB2B"));
export const BlogEmailMarketingHubSpot = lazyWithRetry(() => import("@/pages/BlogEmailMarketingHubSpot"));
export const BlogConfiguracionEmailMarketingCumplimiento = lazyWithRetry(() => import("@/pages/BlogConfiguracionEmailMarketingCumplimiento"));
export const BlogMarketingGlobalInternacionalizacion = lazyWithRetry(() => import("@/pages/BlogMarketingGlobalInternacionalizacion"));
export const BlogChatbotsParaPaginasWeb = lazyWithRetry(() => import("@/pages/BlogChatbotsParaPaginasWeb"));
export const BlogChatbotsForWebsites = lazyWithRetry(() => import("@/pages/BlogChatbotsForWebsites"));
export const BlogHuellaDigitalDerechoOlvido = lazyWithRetry(() => import("@/pages/BlogHuellaDigitalDerechoOlvido"));
export const BlogGuiaPrivacidadHuellaDigital = lazyWithRetry(() => import("@/pages/BlogGuiaPrivacidadHuellaDigital"));
export const BlogGobernanzaIAEmpresas = lazyWithRetry(() => import("@/pages/BlogGobernanzaIAEmpresas"));
export const BlogDecisionMarketing = lazyWithRetry(() => import("@/pages/BlogDecisionMarketing"));
export const BlogNuevoParadigmaSeoAeoGeo = lazyWithRetry(() => import("@/pages/BlogNuevoParadigmaSeoAeoGeo"));
export const BlogLovableVsWordpress = lazyWithRetry(() => import("@/pages/BlogLovableVsWordpress"));
export const BlogCheckoutIAEcommerce = lazyWithRetry(() => import("@/pages/BlogCheckoutIAEcommerce"));
export const BlogParalisisAnalisisMarketing = lazyWithRetry(() => import("@/pages/BlogParalisisAnalisisMarketing"));

// Blog posts EN
export const BlogDecisionMarketingEN = lazyWithRetry(() => import("@/pages/BlogDecisionMarketingEN"));
export const BlogAIGovernanceBusiness = lazyWithRetry(() => import("@/pages/BlogAIGovernanceBusiness"));
export const BlogAISEOTools = lazyWithRetry(() => import("@/pages/BlogAISEOTools"));
export const BlogCRMWhatIsBenefits = lazyWithRetry(() => import("@/pages/BlogCRMWhatIsBenefits"));
export const BlogNewSeoParadigmAeoGeo = lazyWithRetry(() => import("@/pages/BlogNewSeoParadigmAeoGeo"));

// Casos de éxito (lazy loading)
export const CasosExito = lazyWithRetry(() => import("@/pages/CasosExito"));
export const CasoExitoAsendia = lazyWithRetry(() => import("@/pages/CasoExitoAsendia"));
export const CasoExitoNexoVital = lazyWithRetry(() => import("@/pages/CasoExitoNexoVital"));
export const CasoExitoIVirgenExtra = lazyWithRetry(() => import("@/pages/CasoExitoIVirgenExtra"));
export const CasoExitoInboundStudents = lazyWithRetry(() => import("@/pages/CasoExitoInboundStudents"));
export const CalistheniaOnlinePage = lazyWithRetry(() => import("@/pages/CalistheniaOnlinePage"));
export const CasoExitoCentroRoraima = lazyWithRetry(() => import("@/pages/CasoExitoCentroRoraima"));
export const CasoExitoJointsUp = lazyWithRetry(() => import("@/pages/CasoExitoJointsUp"));
export const CasoExitoDrParron = lazyWithRetry(() => import("@/pages/CasoExitoDrParron"));
export const CasoExitoTranslateWithStyle = lazyWithRetry(() => import("@/pages/CasoExitoTranslateWithStyle"));
export const CasoExitoFormatoEducativo = lazyWithRetry(() => import("@/pages/CasoExitoFormatoEducativo"));
export const CasoExitoOMR = lazyWithRetry(() => import("@/pages/CasoExitoOMR"));
export const CasoExitoAspAsepsia = lazyWithRetry(() => import("@/pages/CasoExitoAspAsepsia"));
export const CasoExitoBufeteMaseras = lazyWithRetry(() => import("@/pages/CasoExitoBufeteMaseras"));
export const CasoExitoModaIntimaVania = lazyWithRetry(() => import("@/pages/CasoExitoModaIntimaVania"));
export const CasoExitoAlfixConsultores = lazyWithRetry(() => import("@/pages/CasoExitoAlfixConsultores"));
export const CasoExitoAlmaCruceros = lazyWithRetry(() => import("@/pages/CasoExitoAlmaCruceros"));
export const CasoExitoLaBaneraKD = lazyWithRetry(() => import("@/pages/CasoExitoLaBaneraKD"));
export const CasoExitoSuministrosXSKD = lazyWithRetry(() => import("@/pages/CasoExitoSuministrosXSKD"));
export const CasoExitoConversaConsultores = lazyWithRetry(() => import("@/pages/CasoExitoConversaConsultores"));
export const CasoExitoBuhobike = lazyWithRetry(() => import("@/pages/CasoExitoBuhobike"));
export const CasoExitoCabreraCervantes = lazyWithRetry(() => import("@/pages/CasoExitoCabreraCervantes"));
export const CasoExitoEvaChampion = lazyWithRetry(() => import("@/pages/CasoExitoEvaChampion"));
export const CasoExitoBelugaLinguistics = lazyWithRetry(() => import("@/pages/CasoExitoBelugaLinguistics"));
export const CasoExitoWooptix = lazyWithRetry(() => import("@/pages/CasoExitoWooptix"));
export const CasoExitoPamdamedia = lazyWithRetry(() => import("@/pages/CasoExitoPamdamedia"));
export const CasoExitoGiveAndGo = lazyWithRetry(() => import("@/pages/CasoExitoGiveAndGo"));
export const CasoExitoHikvision = lazyWithRetry(() => import("@/pages/CasoExitoHikvision"));
export const CasoExitoOWOGame = lazyWithRetry(() => import("@/pages/CasoExitoOWOGame"));
export const CasoExitoNovaPraxis = lazyWithRetry(() => import("@/pages/CasoExitoNovaPraxis"));
export const CasoExitoAistercel = lazyWithRetry(() => import("@/pages/CasoExitoAistercel"));
export const CasoExitoQuanticBI = lazyWithRetry(() => import("@/pages/CasoExitoQuanticBI"));
export const CasoExitoPeixosEmilio = lazyWithRetry(() => import("@/pages/CasoExitoPeixosEmilio"));
export const CasoExitoCorteAFilms = lazyWithRetry(() => import("@/pages/CasoExitoCorteAFilms"));
export const CasoExitoLualca = lazyWithRetry(() => import("@/pages/CasoExitoLualca"));
export const CasoExitoPlazaEstacion = lazyWithRetry(() => import("@/pages/CasoExitoPlazaEstacion"));
export const CasoExitoRivasCentro = lazyWithRetry(() => import("@/pages/CasoExitoRivasCentro"));
export const CasoExitoHubSpotForStartups = lazyWithRetry(() => import("@/pages/CasoExitoHubSpotForStartups"));
export const CasoExitoBekaFinance = lazyWithRetry(() => import("@/pages/CasoExitoBekaFinance"));
export const CasoExitoPerisElectricidad = lazyWithRetry(() => import("@/pages/CasoExitoPerisElectricidad"));
export const CasoExitoCarniceriaPicosDeEuropa = lazyWithRetry(() => import("@/pages/CasoExitoCarniceriaPicosDeEuropa"));
export const CasoExitoLaOrientalSinGluten = lazyWithRetry(() => import("@/pages/CasoExitoLaOrientalSinGluten"));
export const CasoExitoFLAP = lazyWithRetry(() => import("@/pages/CasoExitoFLAP"));
export const CasoExitoWideum = lazyWithRetry(() => import("@/pages/CasoExitoWideum"));
export const CasoExitoAECOC = lazyWithRetry(() => import("@/pages/CasoExitoAECOC"));
export const CasoExitoFINECT = lazyWithRetry(() => import("@/pages/CasoExitoFINECT"));
export const CasoExitoCOVEBO = lazyWithRetry(() => import("@/pages/CasoExitoCOVEBO"));
export const CasoExitoFundacionCasaMexico = lazyWithRetry(() => import("@/pages/CasoExitoFundacionCasaMexico"));
export const CasoExitoMotivaTuMente = lazyWithRetry(() => import("@/pages/CasoExitoMotivaTuMente"));
export const CasoExitoEurobitsTechnologies = lazyWithRetry(() => import("@/pages/CasoExitoEurobitsTechnologies"));
export const CasoExitoBodegasVilano = lazyWithRetry(() => import("@/pages/CasoExitoBodegasVilano"));
export const CasoExitoUnitrips = lazyWithRetry(() => import("@/pages/CasoExitoUnitrips"));
export const CasoExitoLolaRoblesAbogada = lazyWithRetry(() => import("@/pages/CasoExitoLolaRoblesAbogada"));
export const CasoExitoAIPClinic = lazyWithRetry(() => import("@/pages/CasoExitoAIPClinic"));
export const CasoExitoHotteoTravel = lazyWithRetry(() => import("@/pages/CasoExitoHotteoTravel"));

// Admin - SEO Control Center
export const AdminLogin = lazyWithRetry(() => import("@/pages/admin/AdminLogin"));
export const AdminDashboard = lazyWithRetry(() => import("@/pages/admin/AdminDashboard"));
export const SEODashboard = lazyWithRetry(() => import("@/pages/admin/SEODashboard"));
export const SEOPagesManager = lazyWithRetry(() => import("@/pages/admin/SEOPagesManager"));
export const SitemapManager = lazyWithRetry(() => import("@/pages/admin/SitemapManager"));
export const GSCFullReport = lazyWithRetry(() => import("@/pages/admin/GSCFullReport"));
export const SEOTracker = lazyWithRetry(() => import("@/pages/admin/SEOTracker"));
export const IndexNowManager = lazyWithRetry(() => import("@/pages/admin/IndexNowManager"));
export const FAQValidator = lazyWithRetry(() => import("@/pages/admin/FAQValidator"));
export const TranslationManager = lazyWithRetry(() => import("@/pages/admin/TranslationManager"));
export const MediaLibrary = lazyWithRetry(() => import("@/pages/admin/MediaLibrary"));
export const BrandBook = lazyWithRetry(() => import("@/pages/admin/BrandBook"));
export const ContentHub = lazyWithRetry(() => import("@/pages/admin/ContentHub"));
export const SofiaChatbotAdmin = lazyWithRetry(() => import("@/pages/admin/SofiaChatbotAdmin"));

// Case Studies EN
export const CaseStudiesEN = lazyWithRetry(() => import("@/pages/en/CaseStudiesEN"));
export const CaseStudyAsendia = lazyWithRetry(() => import("@/pages/en/case-studies/CaseStudyAsendia"));
export const CaseStudyFormatoEducativo = lazyWithRetry(() => import("@/pages/en/case-studies/CaseStudyFormatoEducativo"));
export const CaseStudyBekaFinance = lazyWithRetry(() => import("@/pages/en/case-studies/CaseStudyBekaFinance"));
export const CaseStudyAECOC = lazyWithRetry(() => import("@/pages/en/case-studies/CaseStudyAECOC"));
export const CaseStudyPerisElectricidad = lazyWithRetry(() => import("@/pages/en/case-studies/CaseStudyPerisElectricidad"));
export const CaseStudyInboundStudents = lazyWithRetry(() => import("@/pages/en/case-studies/CaseStudyInboundStudents"));
export const CaseStudyHubSpotForStartups = lazyWithRetry(() => import("@/pages/en/case-studies/CaseStudyHubSpotForStartups"));
export const CaseStudyASPAsepsia = lazyWithRetry(() => import("@/pages/en/case-studies/CaseStudyASPAsepsia"));
export const CaseStudyNexoVital = lazyWithRetry(() => import("@/pages/en/case-studies/CaseStudyNexoVital"));
export const CaseStudyQuanticBI = lazyWithRetry(() => import("@/pages/en/case-studies/CaseStudyQuanticBI"));

// Páginas legales
export const AvisoLegal = lazyWithRetry(() => import("@/pages/AvisoLegal"));
export const PoliticaPrivacidad = lazyWithRetry(() => import("@/pages/PoliticaPrivacidad"));
export const TerminosServicio = lazyWithRetry(() => import("@/pages/TerminosServicio"));
export const PoliticaCookies = lazyWithRetry(() => import("@/pages/PoliticaCookies"));