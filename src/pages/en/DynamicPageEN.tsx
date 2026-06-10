import React, { lazy, Suspense, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet-async';
import { supabase } from '@/integrations/supabase/client';
import PageSuspense from '@/components/PageSuspense';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';


/**
 * Map from ES paths to lazy-loaded components.
 * Uses the same components as App.tsx — they already support bilingual via useLanguage.
 */
const ES_PATH_TO_LAZY: Record<string, React.LazyExoticComponent<React.ComponentType>> = {
  // ─── Services ───
  '/es/servicios/creacion-marca': lazy(() => import('@/pages/CreacionMarca')),
  '/es/servicios/diseno-web': lazy(() => import('@/pages/DisenoWeb')),
  '/es/servicios/diseno-web/alojamiento-mantenimiento': lazy(() => import('@/pages/AlojamientoMantenimiento')),
  '/es/servicios/tienda-online': lazy(() => import('@/pages/TiendaOnline')),
  '/es/servicios/seo-posicionamiento': lazy(() => import('@/pages/SeoPositioning')),
  '/es/servicios/estrategia-contenidos': lazy(() => import('@/pages/EstrategiaContenidos')),
  '/es/servicios/localizacion-contenidos': lazy(() => import('@/pages/LocalizacionContenidos')),
  '/es/servicios/campanas-inbound-marketing': lazy(() => import('@/pages/CampanasInboundMarketing')),
  '/es/servicios/captacion-leads-clientes': lazy(() => import('@/pages/CaptacionLeadsClientes')),
  '/es/servicios/publicidad-google-ads': lazy(() => import('@/pages/PublicidadGoogleAds')),
  '/es/servicios/publicidad-redes-sociales': lazy(() => import('@/pages/PublicidadRedesSociales')),
  '/es/servicios/gestion-redes-sociales': lazy(() => import('@/pages/GestionRedesSociales')),
  '/es/servicios/email-marketing-automatizaciones': lazy(() => import('@/pages/EmailMarketingAutomatizaciones')),
  '/es/servicios/implantacion-crm': lazy(() => import('@/pages/ImplantacionCrm')),
  '/es/servicios/administracion-crm': lazy(() => import('@/pages/AdministracionCrm')),
  '/es/servicios/automatizacion-procesos-ventas': lazy(() => import('@/pages/AutomatizacionProcesosVentas')),
  '/es/servicios/implementacion-funnel': lazy(() => import('@/pages/ImplementacionFunnel')),
  '/es/servicios/marketing-directo': lazy(() => import('@/pages/MarketingDirecto')),
  '/es/servicios/asistente-ia': lazy(() => import('@/pages/AsistenteIA')),
  '/es/servicios/formacion-ia': lazy(() => import('@/pages/FormacionIA')),
  '/es/servicios/integraciones-ia-procesos': lazy(() => import('@/pages/IntegracionesIAProcesos')),
  '/es/servicios/consultoria-estrategica-analitica': lazy(() => import('@/pages/ConsultoriaEstrategicaAnalitica')),

  // ─── Solutions ───
  '/es/soluciones/impulsa-tu-marca': lazy(() => import('@/pages/ImpulsaTuMarca')),
  '/es/soluciones/conecta-con-tus-clientes': lazy(() => import('@/pages/ConectaConTusClientes')),
  '/es/soluciones/activa-tus-ventas': lazy(() => import('@/pages/ActivaTusVentas')),
  '/es/soluciones/activa-tu-estrategia-digital': lazy(() => import('@/pages/ActivaTuEstrategiaDigital')),
  '/es/soluciones/ia-marketing': lazy(() => import('@/pages/SolucionesIA')),
  '/es/soluciones/marketing-visibilidad': lazy(() => import('@/pages/MarketingVisibilidad')),
  '/es/soluciones/captacion-leads': lazy(() => import('@/pages/CaptacionLeadsClientes')),
  '/es/soluciones/automatizacion-marketing': lazy(() => import('@/pages/AutomatizacionMarketing')),
  '/es/soluciones/gestion-clientes-crm': lazy(() => import('@/pages/GestionClientesCRM')),
  '/es/soluciones/plataforma-inteligencia-marketing': lazy(() => import('@/pages/SensePlatform')),

  // ─── Blog listing ───
  '/es/blog': lazy(() => import('@/pages/Blog')),

  // ─── Blog posts (dedicated components) ───
  '/es/blog/la-inteligencia-artificial-ia-y-su-aplicacion-en-marketing': lazy(() => import('@/pages/BlogIAMarketing')),
  '/es/blog/guia-tecnica-email-marketing-hubspot-configuracion': lazy(() => import('@/pages/BlogEmailMarketingHubSpot')),
  '/es/blog/configuracion-email-marketing-cumplimiento-normativo': lazy(() => import('@/pages/BlogConfiguracionEmailMarketingCumplimiento')),
  '/es/blog/perfil-cliente-ideal': lazy(() => import('@/pages/BlogPerfilClienteIdealICP')),
  '/es/blog/como-crear-buyer-persona-b2b-b2c-guia-completa': lazy(() => import('@/pages/BlogPerfilClienteIdeal')),
  '/es/blog/calculo-inversion-plan-marketing-digital': lazy(() => import('@/pages/BlogCalculoInversionMarketing')),
  '/es/blog/branding-proceso-tecnicas-naming': lazy(() => import('@/pages/BlogBrandingProcesoTecnicasNaming')),
  '/es/blog/business-model-canvas-para-crear-tu-estrategia-de-marketing': lazy(() => import('@/pages/BusinessModelCanvasEstrategiaMarketing')),
  '/es/blog/google-consent-mode-cookieyes': lazy(() => import('@/pages/GoogleConsentModeCookieyes')),
  '/es/blog/marketing-natural-posicionamiento-organico': lazy(() => import('@/pages/MarketingNaturalPosicionamientoOrganico')),
  '/es/blog/crm-que-es-beneficios': lazy(() => import('@/pages/BlogCrmQueEsBeneficios')),
  '/es/blog/como-elegir-mejor-crm-empresa-organizacion': lazy(() => import('@/pages/BlogComoElegirMejorCRM')),
  '/es/blog/abm-account-based-marketing': lazy(() => import('@/pages/BlogABMAccountBasedMarketing')),
  '/es/blog/re-commerce-economia-circular-ecommerce-partnership-sharpei': lazy(() => import('@/pages/BlogReCommerceEconomiaCircular')),
  '/es/blog/seo-off-page-estrategias-practicas-posicionamiento': lazy(() => import('@/pages/BlogSeoOffPage')),
  '/es/blog/automatizacion-marketing-digital-guia-completa': lazy(() => import('@/pages/BlogAutomatizacionMarketing')),
  '/es/blog/web-3-0-futuro-internet-descentralizado': lazy(() => import('@/pages/BlogWeb30')),
  '/es/blog/seo-on-page-guia-completa': lazy(() => import('@/pages/BlogSeoOnPage')),
  '/es/blog/lead-scoring-calificacion-leads': lazy(() => import('@/pages/BlogLeadScoringCalificacionLeads')),
  '/es/blog/seo-inteligencia-artificial': lazy(() => import('@/pages/BlogSeoInteligenciaArtificial')),
  '/es/blog/ia-redes-sociales-herramientas-riesgos': lazy(() => import('@/pages/BlogIARedesSociales')),
  '/es/blog/funnel-conversion-b2B': lazy(() => import('@/pages/BlogFunnelConversionB2B')),
  '/es/blog/marketing-global-internacionalizacion': lazy(() => import('@/pages/BlogMarketingGlobalInternacionalizacion')),
  '/es/blog/kit-digital-marketing-guia-completa-2025': lazy(() => import('@/pages/BlogKitDigitalMarketing')),
  '/es/blog/chatbots-para-paginas-web': lazy(() => import('@/pages/BlogChatbotsParaPaginasWeb')),
  '/es/blog/huella-digital-derecho-olvido': lazy(() => import('@/pages/BlogHuellaDigitalDerechoOlvido')),
  '/es/blog/guia-privacidad-huella-digital': lazy(() => import('@/pages/BlogGuiaPrivacidadHuellaDigital')),
  '/es/blog/gobernanza-ia-empresas': lazy(() => import('@/pages/BlogGobernanzaIAEmpresas')),
  '/es/blog/decision-marketing-confianza': lazy(() => import('@/pages/BlogDecisionMarketing')),
  '/es/blog/nuevo-paradigma-seo-aeo-geo': lazy(() => import('@/pages/BlogNuevoParadigmaSeoAeoGeo')),
  '/es/blog/lovable-vs-wordpress-que-plataforma-elegir': lazy(() => import('@/pages/BlogLovableVsWordpress')),
  '/es/blog/checkout-ia-ecommerce-copilot-chatgpt-gemini': lazy(() => import('@/pages/BlogCheckoutIAEcommerce')),

  // ─── Case studies listing ───
  '/es/casos-exito': lazy(() => import('@/pages/CasosExito')),

  // ─── Case studies (dedicated components) ───
  '/es/casos-exito/asendia': lazy(() => import('@/pages/CasoExitoAsendia')),
  '/es/casos-exito/nexo-vital': lazy(() => import('@/pages/CasoExitoNexoVital')),
  '/es/casos-exito/i-virgen-extra': lazy(() => import('@/pages/CasoExitoIVirgenExtra')),
  '/es/casos-exito/inbound-students': lazy(() => import('@/pages/CasoExitoInboundStudents')),
  '/es/casos-exito/calisthenia-online': lazy(() => import('@/pages/CalistheniaOnlinePage')),
  '/es/casos-exito/centro-roraima': lazy(() => import('@/pages/CasoExitoCentroRoraima')),
  '/es/casos-exito/joints-up': lazy(() => import('@/pages/CasoExitoJointsUp')),
  '/es/casos-exito/dr-parron': lazy(() => import('@/pages/CasoExitoDrParron')),
  '/es/casos-exito/translate-with-style': lazy(() => import('@/pages/CasoExitoTranslateWithStyle')),
  '/es/casos-exito/formato-educativo': lazy(() => import('@/pages/CasoExitoFormatoEducativo')),
  '/es/casos-exito/omr': lazy(() => import('@/pages/CasoExitoOMR')),
  '/es/casos-exito/asp-asepsia': lazy(() => import('@/pages/CasoExitoAspAsepsia')),
  '/es/casos-exito/bufete-maseras': lazy(() => import('@/pages/CasoExitoBufeteMaseras')),
  '/es/casos-exito/moda-intima-vania': lazy(() => import('@/pages/CasoExitoModaIntimaVania')),
  '/es/casos-exito/alfix-consultores': lazy(() => import('@/pages/CasoExitoAlfixConsultores')),
  '/es/casos-exito/alma-cruceros': lazy(() => import('@/pages/CasoExitoAlmaCruceros')),
  '/es/casos-exito/la-banera-kd': lazy(() => import('@/pages/CasoExitoLaBaneraKD')),
  '/es/casos-exito/suministros-xs-kd': lazy(() => import('@/pages/CasoExitoSuministrosXSKD')),
  '/es/casos-exito/conversa-consultores': lazy(() => import('@/pages/CasoExitoConversaConsultores')),
  '/es/casos-exito/buhobike': lazy(() => import('@/pages/CasoExitoBuhobike')),
  '/es/casos-exito/cabrera-cervantes': lazy(() => import('@/pages/CasoExitoCabreraCervantes')),
  '/es/casos-exito/eva-champion': lazy(() => import('@/pages/CasoExitoEvaChampion')),
  '/es/casos-exito/beluga-linguistics': lazy(() => import('@/pages/CasoExitoBelugaLinguistics')),
  '/es/casos-exito/wooptix': lazy(() => import('@/pages/CasoExitoWooptix')),
  '/es/casos-exito/pamdamedia': lazy(() => import('@/pages/CasoExitoPamdamedia')),
  '/es/casos-exito/give-and-go': lazy(() => import('@/pages/CasoExitoGiveAndGo')),
  '/es/casos-exito/hikvision': lazy(() => import('@/pages/CasoExitoHikvision')),
  '/es/casos-exito/owo-game': lazy(() => import('@/pages/CasoExitoOWOGame')),
  '/es/casos-exito/nova-praxis': lazy(() => import('@/pages/CasoExitoNovaPraxis')),
  '/es/casos-exito/aistercel': lazy(() => import('@/pages/CasoExitoAistercel')),
  '/es/casos-exito/quanticbi': lazy(() => import('@/pages/CasoExitoQuanticBI')),
  '/es/casos-exito/peixos-emilio': lazy(() => import('@/pages/CasoExitoPeixosEmilio')),
  '/es/casos-exito/corte-a-films': lazy(() => import('@/pages/CasoExitoCorteAFilms')),
  '/es/casos-exito/lualca': lazy(() => import('@/pages/CasoExitoLualca')),
  '/es/casos-exito/plaza-de-la-estacion': lazy(() => import('@/pages/CasoExitoPlazaEstacion')),
  '/es/casos-exito/rivas-centro': lazy(() => import('@/pages/CasoExitoRivasCentro')),
  '/es/casos-exito/hubspot-for-startups': lazy(() => import('@/pages/CasoExitoHubSpotForStartups')),
  '/es/casos-exito/beka-finance': lazy(() => import('@/pages/CasoExitoBekaFinance')),
  '/es/casos-exito/peris-electricidad': lazy(() => import('@/pages/CasoExitoPerisElectricidad')),
  '/es/casos-exito/carniceria-picos-de-europa': lazy(() => import('@/pages/CasoExitoCarniceriaPicosDeEuropa')),
  '/es/casos-exito/pasteleria-la-oriental-sin-gluten': lazy(() => import('@/pages/CasoExitoLaOrientalSinGluten')),
  '/es/casos-exito/flap-articulos-peluqueria': lazy(() => import('@/pages/CasoExitoFLAP')),
  '/es/casos-exito/wideum': lazy(() => import('@/pages/CasoExitoWideum')),
  '/es/casos-exito/aecoc': lazy(() => import('@/pages/CasoExitoAECOC')),
  '/es/casos-exito/finect': lazy(() => import('@/pages/CasoExitoFINECT')),
  '/es/casos-exito/covebo': lazy(() => import('@/pages/CasoExitoCOVEBO')),
  '/es/casos-exito/fundacion-casa-mexico': lazy(() => import('@/pages/CasoExitoFundacionCasaMexico')),
  '/es/casos-exito/motiva-tu-mente': lazy(() => import('@/pages/CasoExitoMotivaTuMente')),
  '/es/casos-exito/eurobits-technologies': lazy(() => import('@/pages/CasoExitoEurobitsTechnologies')),
  '/es/casos-exito/bodegas-vilano': lazy(() => import('@/pages/CasoExitoBodegasVilano')),
  '/es/casos-exito/unitrips': lazy(() => import('@/pages/CasoExitoUnitrips')),
  '/es/casos-exito/lola-robles-abogada': lazy(() => import('@/pages/CasoExitoLolaRoblesAbogada')),
  '/es/casos-exito/aip-clinic': lazy(() => import('@/pages/CasoExitoAIPClinic')),
  '/es/casos-exito/hotteo-travel': lazy(() => import('@/pages/CasoExitoHotteoTravel')),
};

// Fallback: generic BlogPost component for blog posts without a dedicated component
const BlogPostFallback = lazy(() => import('@/pages/BlogPost'));

// Fallback: redirect to /en/coming-soon (single canonical placeholder)
const ComingSoonRedirect = lazy(() => import('@/pages/en/ComingSoonRedirect'));

interface DynamicPageENProps {
  /** The section prefix used to build the full EN path, e.g. "services", "solutions" */
  section: string;
}

/**
 * Dynamic page resolver for EN routes.
 * Reads slug from URL, checks seo_pages DB for the EN page,
 * finds the original ES component via translation_of, and renders it.
 */
const DynamicPageEN: React.FC<DynamicPageENProps> = ({ section }) => {
  const { slug } = useParams<{ slug: string }>();
  const enPath = `/en/${section}/${slug}`;

  const { data, isLoading } = useQuery({
    queryKey: ['dynamic-en-page', enPath],
    queryFn: async () => {
      // 1. Find the EN page in seo_pages (includes body_content_html if translated)
      const { data: enPage } = await supabase
        .from('seo_pages')
        .select('id, path, translation_of, body_content_html, title, description, h1, og_image')
        .eq('path', enPath)
        .eq('in_language', 'en-US')
        .maybeSingle();

      if (!enPage || !enPage.translation_of) return { enPage: null, esPath: null };

      // 2. Find the ES page to get its path (fallback for legacy hardcoded components)
      const { data: esPage } = await supabase
        .from('seo_pages')
        .select('path')
        .eq('id', enPage.translation_of)
        .maybeSingle();

      return { enPage, esPath: esPage?.path || null };
    },
    staleTime: 5 * 60 * 1000,
  });

  const esPathForMap = data?.esPath ?? null;
  const Component = useMemo(() => {
    if (!esPathForMap) return null;
    if (ES_PATH_TO_LAZY[esPathForMap]) return ES_PATH_TO_LAZY[esPathForMap];
    if (esPathForMap.startsWith('/es/blog/')) return BlogPostFallback;
    return null;
  }, [esPathForMap]);

  if (isLoading) {
    return <PageSuspense><div /></PageSuspense>;
  }

  // ─── Priority 1: render translated body stored in DB ───
  const en = data?.enPage as any;
  if (en?.body_content_html) {
    return (
      <>
        <Helmet>
          <title>{en.title || 'HAYAS Marketing'}</title>
          {en.description && <meta name="description" content={en.description} />}
          <link rel="canonical" href={`https://hayasmarketing.com${enPath}`} />
          {en.og_image && <meta property="og:image" content={en.og_image} />}
        </Helmet>
        <Navigation />
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {en.h1 && <h1 className="text-4xl md:text-5xl font-bold mb-8">{en.h1}</h1>}
          <article
            className="prose prose-lg dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: en.body_content_html }}
          />
        </main>
        <Footer />
      </>
    );
  }

  // ─── Priority 2: legacy hardcoded *EN.tsx via mapped ES component ───
  if (!Component) {
    return (
      <Suspense fallback={<PageSuspense><div /></PageSuspense>}>
        <ComingSoonRedirect />
      </Suspense>
    );
  }

  return (
    <Suspense fallback={<PageSuspense><div /></PageSuspense>}>
      <Component />
    </Suspense>
  );
};

export default DynamicPageEN;
