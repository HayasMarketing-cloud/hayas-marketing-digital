// Dynamic XML sitemap with reciprocal hreflang alternates from seo_pages.
// Query ?lang=es | en | index (default: index)

import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "content-type",
};

const BASE_URL = "https://hayas-marketing-digital.lovable.app";

function esc(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  const url = new URL(req.url);
  const lang = url.searchParams.get("lang") || "index";

  const admin = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
  );

  if (lang === "index") {
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap><loc>${BASE_URL}/sitemap-es-dynamic.xml</loc></sitemap>
  <sitemap><loc>${BASE_URL}/sitemap-en-dynamic.xml</loc></sitemap>
</sitemapindex>`;
    return new Response(xml, {
      headers: { ...corsHeaders, "Content-Type": "application/xml; charset=utf-8" },
    });
  }

  const targetLang = lang === "en" ? "en-US" : "es-ES";

  // Fetch all pages with their alternates via translation_of
  const { data: pages, error } = await admin
    .from("seo_pages")
    .select("id, path, in_language, translation_of, updated_at, is_indexable")
    .eq("is_indexable", true);

  if (error) {
    return new Response(`<!-- ${error.message} -->`, {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/xml" },
    });
  }

  const byId = new Map((pages || []).map((p) => [p.id, p]));
  const target = (pages || []).filter((p) => p.in_language === targetLang);

  const urls = target.map((p) => {
    // Find alternate
    let alternate: typeof p | undefined;
    if (p.translation_of) {
      alternate = byId.get(p.translation_of);
    } else {
      // ES rows: look for EN that points back at this id
      alternate = (pages || []).find(
        (x) => x.translation_of === p.id && x.in_language !== p.in_language,
      );
    }
    const altTags = alternate
      ? [
          `    <xhtml:link rel="alternate" hreflang="${
            alternate.in_language === "en-US" ? "en" : "es"
          }" href="${BASE_URL}${esc(alternate.path)}"/>`,
          `    <xhtml:link rel="alternate" hreflang="${
            p.in_language === "en-US" ? "en" : "es"
          }" href="${BASE_URL}${esc(p.path)}"/>`,
          `    <xhtml:link rel="alternate" hreflang="x-default" href="${BASE_URL}${
            esc(p.in_language === "es-ES" ? p.path : alternate.path)
          }"/>`,
        ].join("\n")
      : "";

    return `  <url>
    <loc>${BASE_URL}${esc(p.path)}</loc>
    <lastmod>${new Date(p.updated_at).toISOString()}</lastmod>
${altTags}
  </url>`;
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join("\n")}
</urlset>`;

  return new Response(xml, {
    headers: {
      ...corsHeaders,
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
});
