// Post-build script: genera un index.html por ruta con OG meta personalizadas
// leyendo de la tabla seo_pages. Permite previews sociales correctas sin SSR.
import fs from 'node:fs/promises';
import path from 'node:path';

const SITE_URL = 'https://hayasmarketing.com';
const SUPABASE_URL = 'https://pmldrjkmkjwbvaudjjye.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBtbGRyamtta2p3YnZhdWRqanllIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg1NzQ5NDEsImV4cCI6MjA3NDE1MDk0MX0.Y1ZrDGEw9HUSuWncHYNxxAGhxlqQx-LPa0Sm0aoDLnU';

const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;
const DEFAULT_BLOG_OG_IMAGE = `${SITE_URL}/images/blog/checkout-ia-ecommerce-hero.jpg`;

const escapeHtml = (s) => String(s ?? '')
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;').replace(/'/g, '&#039;');

function resolveOgImage(ogImage, p) {
  if (!ogImage) return p?.includes('/blog') ? DEFAULT_BLOG_OG_IMAGE : DEFAULT_OG_IMAGE;
  if (ogImage.startsWith('http')) return ogImage;
  return `${SITE_URL}${ogImage.startsWith('/') ? '' : '/'}${ogImage}`;
}

function normalizeCanonical(raw, path) {
  const fallback = `${SITE_URL}${path}`;
  if (!raw) return fallback;
  try {
    const u = new URL(raw, SITE_URL); // resuelve relativos contra apex
    if (u.host === 'hayasmarketing.com' || u.host === 'www.hayasmarketing.com') {
      u.protocol = 'https:';
      u.host = 'hayasmarketing.com';
      u.hash = '';
    }
    // Si es otro host (cross-canonical legítimo) → respetar tal cual
    let out = u.toString();
    // strip trailing slash salvo en root
    if (u.pathname !== '/' && out.endsWith('/')) out = out.slice(0, -1);
    return out;
  } catch {
    return fallback;
  }
}

function patchHtml(baseHtml, page) {
  const title = page.title || 'Hayas Marketing';
  const description = page.description || '';
  const ogType = page.og_type || 'website';
  const locale = (page.in_language || 'es-ES').replace('-', '_');
  const ogImage = resolveOgImage(page.og_image, page.path);
  const pageUrl = `${SITE_URL}${page.path}`;
  const canonical = normalizeCanonical(page.canonical, page.path);


  let html = baseHtml;

  // <title>
  html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(title)}</title>`);

  // helper para reemplazar/insertar metas
  const setMeta = (attrName, attrValue, contentValue) => {
    const re = new RegExp(`<meta\\s+${attrName}=["']${attrValue}["'][^>]*>`, 'i');
    const tag = `<meta ${attrName}="${attrValue}" content="${escapeHtml(contentValue)}" />`;
    if (re.test(html)) html = html.replace(re, tag);
    else html = html.replace('</head>', `    ${tag}\n  </head>`);
  };

  setMeta('name', 'description', description);
  setMeta('property', 'og:type', ogType);
  setMeta('property', 'og:url', pageUrl);
  setMeta('property', 'og:title', title);
  setMeta('property', 'og:description', description);
  setMeta('property', 'og:image', ogImage);
  setMeta('property', 'og:locale', locale);
  setMeta('name', 'twitter:url', pageUrl);
  setMeta('name', 'twitter:title', title);
  setMeta('name', 'twitter:description', description);
  setMeta('name', 'twitter:image', ogImage);

  // canonical
  html = html.replace(
    /<link\s+rel=["']canonical["'][^>]*>/i,
    `<link rel="canonical" href="${escapeHtml(canonical)}" />`
  );

  // robots
  if (page.robots) {
    html = html.replace(
      /<meta\s+name=["']robots["'][^>]*>/i,
      `<meta name="robots" content="${escapeHtml(page.robots)}" />`
    );
  }

  // <html lang="">
  const lang = (page.in_language || 'es-ES').split('-')[0];
  html = html.replace(/<html[^>]*lang=["'][^"']*["']/i, `<html lang="${lang}"`);

  return html;
}

async function fetchPages() {
  const url = `${SUPABASE_URL}/rest/v1/seo_pages?select=path,title,description,og_image,og_type,in_language,canonical,robots&is_indexable=eq.true&limit=2000`;
  const r = await fetch(url, {
    headers: { apikey: SUPABASE_ANON_KEY, Authorization: `Bearer ${SUPABASE_ANON_KEY}` },
  });
  if (!r.ok) throw new Error(`Supabase ${r.status}: ${await r.text()}`);
  return r.json();
}

export async function prerenderOg(distDir = 'dist') {
  const indexPath = path.join(distDir, 'index.html');
  const baseHtml = await fs.readFile(indexPath, 'utf8');

  let pages = [];
  try {
    pages = await fetchPages();
  } catch (e) {
    console.warn('[prerender-og] No se pudieron leer seo_pages:', e.message);
    return;
  }

  let written = 0, skipped = 0;
  for (const page of pages) {
    const p = page.path;
    if (!p || typeof p !== 'string' || !p.startsWith('/')) { skipped++; continue; }
    if (p === '/') continue; // root ya es index.html
    // normaliza barra final
    const clean = p.replace(/\/+$/, '');
    const outDir = path.join(distDir, clean);
    const outFile = path.join(outDir, 'index.html');
    try {
      await fs.mkdir(outDir, { recursive: true });
      await fs.writeFile(outFile, patchHtml(baseHtml, page), 'utf8');
      written++;
    } catch (e) {
      console.warn(`[prerender-og] Error en ${p}:`, e.message);
      skipped++;
    }
  }
  console.log(`[prerender-og] ✅ ${written} rutas pre-renderizadas (${skipped} omitidas)`);
}

// Ejecución directa: `node scripts/prerender-og.mjs [distDir]`
if (import.meta.url === `file://${process.argv[1]}`) {
  prerenderOg(process.argv[2] || 'dist').catch((e) => {
    console.error('[prerender-og] Falló:', e);
    process.exit(0); // no romper el build por esto
  });
}
