import React, { lazy, Suspense, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import PageSuspense from '@/components/PageSuspense';

/**
 * Map from ES paths to lazy-loaded components.
 * Uses the same components as App.tsx — they already support bilingual via useLanguage.
 */
const ES_PATH_TO_LAZY: Record<string, React.LazyExoticComponent<React.ComponentType>> = {
  // Services
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
  // Solutions
  '/es/soluciones/impulsa-tu-marca': lazy(() => import('@/pages/ImpulsaTuMarca')),
  '/es/soluciones/conecta-con-tus-clientes': lazy(() => import('@/pages/ConectaConTusClientes')),
  '/es/soluciones/activa-tus-ventas': lazy(() => import('@/pages/ActivaTusVentas')),
  '/es/soluciones/activa-tu-estrategia-digital': lazy(() => import('@/pages/ActivaTuEstrategiaDigital')),
  '/es/soluciones/ia-marketing': lazy(() => import('@/pages/SolucionesIA')),
  '/es/soluciones/marketing-visibilidad': lazy(() => import('@/pages/MarketingVisibilidad')),
  '/es/soluciones/captacion-leads': lazy(() => import('@/pages/CaptacionLeadsClientes')),
  '/es/soluciones/automatizacion-marketing': lazy(() => import('@/pages/AutomatizacionMarketing')),
  '/es/soluciones/gestion-clientes-crm': lazy(() => import('@/pages/GestionClientesCRM')),
  // Blog
  '/es/blog': lazy(() => import('@/pages/Blog')),
  // Case studies
  '/es/casos-exito': lazy(() => import('@/pages/CasosExito')),
};

// Fallback Coming Soon
const ComingSoonEN = lazy(() => import('@/pages/ComingSoonEN'));

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
      // 1. Find the EN page in seo_pages
      const { data: enPage } = await supabase
        .from('seo_pages')
        .select('id, path, translation_of')
        .eq('path', enPath)
        .eq('in_language', 'en-US')
        .maybeSingle();

      if (!enPage || !enPage.translation_of) return null;

      // 2. Find the ES page to get its path
      const { data: esPage } = await supabase
        .from('seo_pages')
        .select('path')
        .eq('id', enPage.translation_of)
        .maybeSingle();

      return esPage?.path || null;
    },
    staleTime: 5 * 60 * 1000,
  });

  const Component = useMemo(() => {
    if (!data) return null;
    return ES_PATH_TO_LAZY[data] || null;
  }, [data]);

  if (isLoading) {
    return <PageSuspense><div /></PageSuspense>;
  }

  if (!Component) {
    return (
      <Suspense fallback={<PageSuspense><div /></PageSuspense>}>
        <ComingSoonEN />
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
