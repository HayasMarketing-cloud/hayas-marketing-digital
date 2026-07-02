import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useSEOPage } from '@/hooks/useSEOData';

const SITE_URL = 'https://hayasmarketing.com';

/**
 * GlobalSEO
 * -------------------------------------------------
 * Solución global al problema de "títulos duplicados".
 *
 * Lee la ruta actual, consulta `seo_pages` en la base de datos
 * (via useSEOPage) y aplica dinámicamente <title>, <meta description>,
 * canonical, robots y OG por página.
 *
 * Si la página NO tiene registro en `seo_pages`, se genera un título
 * único derivado del slug para evitar que colisione con el título por
 * defecto del index.html (que es el origen de los duplicados en Bing).
 */
function humanizeSlug(path: string): string {
  const clean = path.replace(/^\/(es|en)\/?/, '').replace(/\/$/, '');
  if (!clean) return 'Inicio';
  const last = clean.split('/').filter(Boolean).pop() || '';
  return last
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

export default function GlobalSEO() {
  const { pathname } = useLocation();
  // Normalizar (sin trailing slash salvo raíz)
  const path = pathname.length > 1 ? pathname.replace(/\/$/, '') : pathname;
  const language = path.startsWith('/en') ? 'en-US' : 'es-ES';

  const { data } = useSEOPage(path, language);

  const seo = data?.data;

  // Título único de respaldo cuando no hay registro en DB
  const brand = 'Hayas Marketing';
  const fallbackTitle =
    path === '/' || path === '/es' || path === '/en'
      ? language === 'en-US'
        ? 'Hayas Marketing — AI, CRM & Digital Marketing Solutions'
        : 'Hayas Marketing — Soluciones de IA, CRM y Marketing Digital'
      : `${humanizeSlug(path)} | ${brand}`;

  const title = seo?.title || fallbackTitle;
  const description =
    seo?.description ||
    (language === 'en-US'
      ? 'Hayas Marketing — strategic marketing, CRM and AI activations for growing companies.'
      : 'Hayas Marketing — activaciones estratégicas de marketing, CRM e IA para empresas en crecimiento.');
  const canonical = seo?.canonical || `${SITE_URL}${path}`;
  const robots = seo?.robots || 'index,follow';
  const ogImage = seo?.ogImage;
  const ogType = seo?.ogType || 'website';

  return (
    <Helmet>
      <html lang={language.split('-')[0]} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta name="robots" content={robots} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content={ogType} />
      {ogImage ? <meta property="og:image" content={ogImage} /> : null}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {ogImage ? <meta name="twitter:image" content={ogImage} /> : null}
    </Helmet>
  );
}
