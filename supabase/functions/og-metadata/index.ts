import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const SITE_URL = 'https://hayasmarketing.com';
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;
const DEFAULT_BLOG_OG_IMAGE = `${SITE_URL}/images/og-default-blog.jpg`;

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const url = new URL(req.url);
    const path = url.searchParams.get('path');

    if (!path) {
      return new Response(JSON.stringify({ error: 'path parameter required' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_ANON_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Query seo_pages for this path
    const { data: seoData } = await supabase
      .from('seo_pages')
      .select('title, description, og_image, og_type, in_language')
      .eq('path', path)
      .eq('is_indexable', true)
      .maybeSingle();

    const title = seoData?.title || 'Hayas Marketing - Soluciones de IA, CRM y Marketing Digital';
    const description = seoData?.description || 'Especialistas en IA aplicada al marketing, automatización CRM, branding y marketing digital.';
    const ogType = seoData?.og_type || 'website';
    const locale = seoData?.in_language || 'es-ES';
    
    // Determine OG image: DB value > blog default > global default
    let ogImage = seoData?.og_image;
    if (!ogImage) {
      ogImage = path.includes('/blog') ? DEFAULT_BLOG_OG_IMAGE : DEFAULT_OG_IMAGE;
    } else if (!ogImage.startsWith('http')) {
      ogImage = `${SITE_URL}${ogImage}`;
    }

    const pageUrl = `${SITE_URL}${path}`;

    // Also try to find the hero image from the blog post path
    // Blog posts typically have hero images at /[slug]-hero.jpg
    if (path.includes('/blog/') && !seoData?.og_image) {
      const slug = path.split('/blog/').pop()?.replace(/\/$/, '');
      if (slug) {
        // Check common hero image patterns
        const heroImagePath = `${SITE_URL}/${slug}-hero.jpg`;
        // We'll use the default blog OG since we can't verify file existence here
        ogImage = DEFAULT_BLOG_OG_IMAGE;
      }
    }

    const html = `<!DOCTYPE html>
<html lang="${locale.split('-')[0]}">
<head>
  <meta charset="UTF-8">
  <title>${escapeHtml(title)}</title>
  <meta name="description" content="${escapeHtml(description)}">
  
  <meta property="og:type" content="${ogType}">
  <meta property="og:url" content="${pageUrl}">
  <meta property="og:title" content="${escapeHtml(title)}">
  <meta property="og:description" content="${escapeHtml(description)}">
  <meta property="og:image" content="${ogImage}">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:locale" content="${locale.replace('-', '_')}">
  <meta property="og:site_name" content="Hayas Marketing">
  
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${escapeHtml(title)}">
  <meta name="twitter:description" content="${escapeHtml(description)}">
  <meta name="twitter:image" content="${ogImage}">
  
  <link rel="canonical" href="${pageUrl}">
  
  <!-- Redirect real users to the actual page -->
  <meta http-equiv="refresh" content="0;url=${pageUrl}">
</head>
<body>
  <p>Redirigiendo a <a href="${pageUrl}">${escapeHtml(title)}</a></p>
</body>
</html>`;

    return new Response(html, {
      headers: {
        ...corsHeaders,
        'Content-Type': 'text/html; charset=utf-8',
        'Cache-Control': 'public, max-age=3600, s-maxage=86400',
      },
    });
  } catch (error) {
    console.error('OG metadata error:', error);
    return new Response(JSON.stringify({ error: 'Internal error' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
