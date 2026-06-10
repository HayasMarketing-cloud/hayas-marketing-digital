// Orchestrates the full ES->EN translation pipeline for a single seo_pages row.
// Phases: 1) metadata (title/desc/h1/keywords) 2) body (HTML) 3) status update.
// Returns a JSON array of phase results so the UI can render checkpoints.

import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

type PhaseStatus = "ok" | "skipped" | "failed";
interface PhaseResult {
  name: string;
  status: PhaseStatus;
  detail?: string;
  durationMs: number;
}

const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY")!;
const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
const SERVICE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
const ANON_KEY = Deno.env.get("SUPABASE_ANON_KEY")!;

async function callAI(messages: any[], tools?: any[], tool_choice?: any) {
  const body: any = {
    model: "google/gemini-2.5-flash",
    messages,
  };
  if (tools) body.tools = tools;
  if (tool_choice) body.tool_choice = tool_choice;

  const res = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${LOVABLE_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const txt = await res.text();
    throw new Error(`AI Gateway ${res.status}: ${txt.slice(0, 400)}`);
  }
  return await res.json();
}

async function sha256(input: string) {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(input));
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  const phases: PhaseResult[] = [];
  const startPhase = (name: string) => {
    const t0 = Date.now();
    return (status: PhaseStatus, detail?: string) => {
      phases.push({ name, status, detail, durationMs: Date.now() - t0 });
    };
  };

  try {
    const authHeader = req.headers.get("Authorization");
    if (!authHeader) {
      return new Response(JSON.stringify({ error: "Authentication required" }), {
        status: 401,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const supabaseUser = createClient(SUPABASE_URL, ANON_KEY, {
      global: { headers: { Authorization: authHeader } },
    });
    const { data: { user } } = await supabaseUser.auth.getUser();
    if (!user) {
      return new Response(JSON.stringify({ error: "Invalid auth" }), {
        status: 401,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    const { data: isAdmin } = await supabaseUser.rpc("has_role", {
      _user_id: user.id,
      _role: "admin",
    });
    if (!isAdmin) {
      return new Response(JSON.stringify({ error: "Admin required" }), {
        status: 403,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const admin = createClient(SUPABASE_URL, SERVICE_KEY);

    const { esPath, enPath, category, forceBody } = await req.json();
    if (!esPath || !enPath) {
      return new Response(JSON.stringify({ error: "esPath and enPath required" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // ─── Phase 0: load ES page ───
    const endLoad = startPhase("Cargar página ES");
    const { data: esPage, error: esErr } = await admin
      .from("seo_pages")
      .select("*")
      .eq("path", esPath)
      .eq("in_language", "es-ES")
      .maybeSingle();
    if (esErr || !esPage) {
      endLoad("failed", esErr?.message || "ES page not found");
      return new Response(JSON.stringify({ phases, error: "ES page not found" }), {
        status: 404,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    endLoad("ok", esPage.title || esPath);

    // ─── Phase 1: metadata ───
    const endMeta = startPhase("Traducir metadatos SEO");
    let translatedMeta: any = null;
    try {
      const metaResp = await callAI(
        [
          {
            role: "system",
            content:
              "You are an SEO expert translator for marketing agency content. Adapt for US/UK audiences. Preserve keyword intent.",
          },
          {
            role: "user",
            content: `Translate ES->EN preserving SEO:
Title: ${esPage.title}
Description: ${esPage.description}
H1: ${esPage.h1}
Keywords: ${(esPage.keywords as any)?.join?.(", ") || ""}

Constraints: title <=60 chars, description <=160 chars, natural marketing English.`,
          },
        ],
        [{
          type: "function",
          function: {
            name: "translate_meta",
            parameters: {
              type: "object",
              properties: {
                title: { type: "string" },
                description: { type: "string" },
                h1: { type: "string" },
                keywords: { type: "array", items: { type: "string" } },
              },
              required: ["title", "description", "h1", "keywords"],
              additionalProperties: false,
            },
          },
        }],
        { type: "function", function: { name: "translate_meta" } },
      );
      const call = metaResp.choices[0].message.tool_calls?.[0];
      translatedMeta = JSON.parse(call.function.arguments);
      endMeta("ok");
    } catch (err: any) {
      endMeta("failed", err.message);
      return new Response(JSON.stringify({ phases, error: err.message }), {
        status: 502,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // ─── Phase 2: body (only if ES has body_content_html stored) ───
    const endBody = startPhase("Traducir cuerpo");
    let translatedBody: string | null = null;
    const esBody: string | null = (esPage as any).body_content_html ?? null;
    const esBodyHash = esBody ? await sha256(esBody) : null;

    // Check existing EN row to skip if already up-to-date
    const { data: existingEn } = await admin
      .from("seo_pages")
      .select("body_content_source_hash, body_content_html")
      .eq("path", enPath)
      .eq("in_language", "en-US")
      .maybeSingle();

    if (!esBody) {
      endBody(
        "skipped",
        "La página ES no tiene body_content_html en DB. Solo se traducen metadatos.",
      );
    } else if (
      !forceBody &&
      existingEn?.body_content_source_hash === esBodyHash &&
      existingEn?.body_content_html
    ) {
      translatedBody = existingEn.body_content_html;
      endBody("skipped", "El cuerpo ES no ha cambiado desde la última traducción.");
    } else {
      try {
        // Chunk very long bodies to fit token limits
        const MAX_CHARS = 18000;
        const chunks: string[] = [];
        if (esBody.length <= MAX_CHARS) {
          chunks.push(esBody);
        } else {
          // Split on </section> or </h2> boundaries to avoid breaking HTML
          let remaining = esBody;
          while (remaining.length > MAX_CHARS) {
            const slice = remaining.slice(0, MAX_CHARS);
            const lastBoundary = Math.max(
              slice.lastIndexOf("</section>"),
              slice.lastIndexOf("</h2>"),
              slice.lastIndexOf("</p>"),
            );
            const cut = lastBoundary > MAX_CHARS / 2 ? lastBoundary + 10 : MAX_CHARS;
            chunks.push(remaining.slice(0, cut));
            remaining = remaining.slice(cut);
          }
          if (remaining) chunks.push(remaining);
        }

        const translatedChunks: string[] = [];
        for (const chunk of chunks) {
          const bodyResp = await callAI([
            {
              role: "system",
              content:
                "You translate HTML from Spanish to English. PRESERVE every HTML tag, attribute, class, id and structure. Only translate visible text content and alt/title attributes. Do NOT add markdown, do NOT wrap output in code fences. Output raw HTML only. Adapt cultural references for US/UK marketing audience while keeping a professional tone.",
            },
            { role: "user", content: chunk },
          ]);
          const text = bodyResp.choices[0].message.content || "";
          // Strip code fences if model added them
          const cleaned = text
            .replace(/^```html\s*/i, "")
            .replace(/^```\s*/i, "")
            .replace(/\s*```\s*$/i, "")
            .trim();
          translatedChunks.push(cleaned);
        }
        translatedBody = translatedChunks.join("\n");
        endBody("ok", `${chunks.length} bloque(s)`);
      } catch (err: any) {
        endBody("failed", err.message);
        // Continue — we still save metadata
      }
    }

    // ─── Phase 3: persist EN row ───
    const endSave = startPhase("Guardar en base de datos");
    const status: string = translatedBody
      ? "translated"
      : esBody
      ? "failed"
      : "metadata_only";

    const upsertRow: any = {
      path: enPath,
      title: translatedMeta.title,
      description: translatedMeta.description,
      h1: translatedMeta.h1,
      h2_primary: translatedMeta.h1,
      keywords: translatedMeta.keywords,
      canonical: `https://hayasmarketing.com${enPath}`,
      in_language: "en-US",
      translation_of: esPage.id,
      schema_type: esPage.schema_type || "WebPage",
      category: category || esPage.category,
      is_indexable: true,
      og_type: esPage.og_type || "website",
      robots: "index,follow",
      og_image: esPage.og_image,
      translation_status: status,
    };
    if (translatedBody) {
      upsertRow.body_content_html = translatedBody;
      upsertRow.body_content_source_hash = esBodyHash;
      upsertRow.body_translated_at = new Date().toISOString();
    }

    const { data: newEnPage, error: upErr } = await admin
      .from("seo_pages")
      .upsert(upsertRow, { onConflict: "path,in_language" })
      .select()
      .single();

    if (upErr) {
      endSave("failed", upErr.message);
      return new Response(JSON.stringify({ phases, error: upErr.message }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    endSave("ok", `Estado: ${status}`);

    return new Response(
      JSON.stringify({
        phases,
        status,
        newEnPage,
        translatedMeta,
        hasBody: !!translatedBody,
      }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  } catch (err: any) {
    console.error("pipeline error", err);
    return new Response(
      JSON.stringify({ phases, error: err.message || String(err) }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }
});
