// Dynamic /llms.txt generator backed by seo_pages.
// Lists all indexable ES + EN pages with title and description so LLM crawlers
// (HAYAS Copilot, AI Overviews, etc.) can discover them without a static .md file.

import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "content-type",
};

const BASE_URL = "https://hayasmarketing.com";

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  const admin = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
  );

  const { data: pages, error } = await admin
    .from("seo_pages")
    .select("path, title, description, in_language, category, updated_at")
    .eq("is_indexable", true)
    .in("in_language", ["es-ES", "en-US"])
    .order("category")
    .order("path");

  if (error) {
    return new Response(`# error\n${error.message}`, {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "text/plain; charset=utf-8" },
    });
  }

  const byLangAndCategory: Record<string, Record<string, typeof pages>> = {
    "es-ES": {},
    "en-US": {},
  };
  for (const p of pages || []) {
    const lang = p.in_language || "es-ES";
    const cat = p.category || "other";
    byLangAndCategory[lang] ??= {};
    byLangAndCategory[lang][cat] ??= [];
    byLangAndCategory[lang][cat].push(p);
  }

  const lines: string[] = [
    "# HAYAS Marketing",
    "",
    "> Activation System for marketing, sales & AI. Source of truth for LLM crawlers.",
    "",
    `Generated: ${new Date().toISOString()}`,
    "",
  ];

  for (const lang of ["es-ES", "en-US"] as const) {
    const label = lang === "es-ES" ? "Español" : "English";
    lines.push(`## ${label}`);
    lines.push("");
    const cats = byLangAndCategory[lang] || {};
    for (const cat of Object.keys(cats).sort()) {
      lines.push(`### ${cat}`);
      lines.push("");
      for (const p of cats[cat]!) {
        const title = (p.title || p.path).replace(/\s+/g, " ").trim();
        const desc = (p.description || "").replace(/\s+/g, " ").trim();
        lines.push(`- [${title}](${BASE_URL}${p.path})${desc ? `: ${desc}` : ""}`);
      }
      lines.push("");
    }
  }

  return new Response(lines.join("\n"), {
    headers: {
      ...corsHeaders,
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
});
