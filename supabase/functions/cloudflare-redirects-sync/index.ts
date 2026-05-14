// Sincroniza public/_redirects con Cloudflare Bulk Redirects
// Convierte las reglas 301 exactas en una List + Rule de Cloudflare,
// devolviendo 301 reales en el edge antes de llegar al SPA.
//
// Acciones (POST { action }):
//   - "preview": parsea y muestra qué se va a subir (no escribe nada)
//   - "sync":    crea/actualiza la List "hayas_redirects" + Rule asociada
//
// Reglas con `*` (splat) y `200` (SPA fallback) se OMITEN — Bulk Redirects
// no soporta sintaxis `:splat`. Se reportan aparte para crearlas a mano
// como Redirect Rules (Transform Rules) si es necesario.

import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";

const CF_API = "https://api.cloudflare.com/client/v4";
const LIST_NAME = "hayas_redirects";
const RULE_DESCRIPTION = "hayas_redirects_bulk";

interface ParsedRedirect {
  source: string;
  destination: string;
  status: number;
}

function parseRedirects(text: string): { exact: ParsedRedirect[]; skipped: { line: string; reason: string }[] } {
  const exact: ParsedRedirect[] = [];
  const skipped: { line: string; reason: string }[] = [];
  const seen = new Set<string>();

  for (const raw of text.split("\n")) {
    const line = raw.trim();
    if (!line || line.startsWith("#")) continue;
    const parts = line.split(/\s+/);
    if (parts.length < 3) continue;
    const [source, destination, statusStr] = parts;
    const status = parseInt(statusStr, 10);

    if (status === 200) {
      skipped.push({ line, reason: "rewrite/200 (SPA fallback) — no aplica a Bulk Redirects" });
      continue;
    }
    if (source.includes("*") || source.includes(":splat") || destination.includes(":splat")) {
      skipped.push({ line, reason: "splat/wildcard — requiere Redirect Rule manual" });
      continue;
    }
    if (status !== 301 && status !== 302) {
      skipped.push({ line, reason: `status no soportado (${statusStr})` });
      continue;
    }
    // Cloudflare exige URLs absolutas con hostname
    const sourceUrl = `hayasmarketing.com${source}`;
    const targetUrl = destination.startsWith("http")
      ? destination
      : `https://hayasmarketing.com${destination}`;

    if (seen.has(sourceUrl)) {
      skipped.push({ line, reason: "duplicado (source ya presente)" });
      continue;
    }
    seen.add(sourceUrl);

    exact.push({ source: sourceUrl, destination: targetUrl, status });
  }

  return { exact, skipped };
}

async function cf(path: string, init: RequestInit, token: string) {
  const method = (init.method || "GET").toUpperCase();
  const baseHeaders: Record<string, string> = {
    "Authorization": `Bearer ${token}`,
  };
  if (method !== "GET" && method !== "HEAD") {
    baseHeaders["Content-Type"] = "application/json";
  }
  const finalHeaders = { ...baseHeaders, ...(init.headers || {}) };
  console.log("[cf]", method, path, "headers:", Object.keys(finalHeaders).join(","), "tokenLen:", token.length, "tokenPrefix:", token.slice(0, 6));
  const res = await fetch(`${CF_API}${path}`, {
    ...init,
    method,
    headers: finalHeaders,
  });
  const json = await res.json();
  if (!json.success) {
    console.error("[cf] FAIL", method, path, "status:", res.status, "body:", JSON.stringify(json).slice(0, 300));
    throw new Error(`Cloudflare API ${path} failed: ${JSON.stringify(json.errors || json)}`);
  }
  return json;
}

async function findOrCreateList(accountId: string, token: string): Promise<string> {
  const lists = await cf(`/accounts/${accountId}/rules/lists`, { method: "GET" }, token);
  const existing = (lists.result || []).find((l: any) => l.name === LIST_NAME && l.kind === "redirect");
  if (existing) return existing.id;
  const created = await cf(
    `/accounts/${accountId}/rules/lists`,
    {
      method: "POST",
      body: JSON.stringify({
        name: LIST_NAME,
        kind: "redirect",
        description: "Redirecciones 301 sincronizadas desde public/_redirects",
      }),
    },
    token,
  );
  return created.result.id;
}

async function replaceListItems(accountId: string, listId: string, items: ParsedRedirect[], token: string) {
  // PUT replaces all items atomically. Body: array of { redirect: {...} }
  const payload = items.map((r) => ({
    redirect: {
      source_url: r.source,
      target_url: r.destination,
      status_code: r.status,
      preserve_query_string: true,
      include_subdomains: true,
      subpath_matching: false,
      preserve_path_suffix: false,
    },
  }));
  // Cloudflare PUT lists/items returns an operation_id (async); we don't poll,
  // but we surface it for visibility.
  return await cf(
    `/accounts/${accountId}/rules/lists/${listId}/items`,
    { method: "PUT", body: JSON.stringify(payload) },
    token,
  );
}

async function ensureRedirectRule(zoneId: string, accountId: string, listId: string, token: string) {
  // Bulk redirects via lists must be at ACCOUNT level on http_request_redirect phase
  const phase = "http_request_redirect";
  const rulesets = await cf(`/accounts/${accountId}/rulesets`, { method: "GET" }, token);
  let ruleset = (rulesets.result || []).find((r: any) => r.phase === phase && r.kind === "root");

  if (!ruleset) {
    const created = await cf(
      `/accounts/${accountId}/rulesets`,
      {
        method: "POST",
        body: JSON.stringify({
          name: "Hayas bulk redirects",
          kind: "root",
          phase,
          rules: [],
        }),
      },
      token,
    );
    ruleset = created.result;
  }

  const expression = `http.request.full_uri in $${LIST_NAME}`;
  const newRule = {
    action: "redirect",
    action_parameters: { from_list: { name: LIST_NAME, key: "http.request.full_uri" } },
    expression,
    description: RULE_DESCRIPTION,
    enabled: true,
  };

  const detail = await cf(`/accounts/${accountId}/rulesets/${ruleset.id}`, { method: "GET" }, token);
  const existingRule = (detail.result.rules || []).find((r: any) => r.description === RULE_DESCRIPTION);

  if (existingRule) {
    await cf(
      `/accounts/${accountId}/rulesets/${ruleset.id}/rules/${existingRule.id}`,
      { method: "PATCH", body: JSON.stringify(newRule) },
      token,
    );
    return { ruleId: existingRule.id, action: "updated" };
  }

  const added = await cf(
    `/accounts/${accountId}/rulesets/${ruleset.id}/rules`,
    { method: "POST", body: JSON.stringify(newRule) },
    token,
  );
  const addedId = added.result?.rules?.slice(-1)?.[0]?.id;
  return { ruleId: addedId, action: "created" };
}

const WWW_RULE_DESCRIPTION = "hayas_www_to_apex";

async function ensureWwwToApexRule(zoneId: string, token: string) {
  const phase = "http_request_dynamic_redirect";
  const rulesets = await cf(`/zones/${zoneId}/rulesets`, { method: "GET" }, token);
  let ruleset = (rulesets.result || []).find((r: any) => r.phase === phase && r.kind === "zone");

  if (!ruleset) {
    const created = await cf(
      `/zones/${zoneId}/rulesets`,
      {
        method: "POST",
        body: JSON.stringify({
          name: "Dynamic redirect rules",
          kind: "zone",
          phase,
          rules: [],
        }),
      },
      token,
    );
    ruleset = created.result;
  }

  const newRule = {
    action: "redirect",
    action_parameters: {
      from_value: {
        status_code: 301,
        target_url: {
          expression: `concat("https://hayasmarketing.com", http.request.uri.path)`,
        },
        preserve_query_string: true,
      },
    },
    expression: `(http.host eq "www.hayasmarketing.com")`,
    description: WWW_RULE_DESCRIPTION,
    enabled: true,
  };

  const detail = await cf(`/zones/${zoneId}/rulesets/${ruleset.id}`, { method: "GET" }, token);
  const existing = (detail.result.rules || []).find((r: any) => r.description === WWW_RULE_DESCRIPTION);

  if (existing) {
    await cf(
      `/zones/${zoneId}/rulesets/${ruleset.id}/rules/${existing.id}`,
      { method: "PATCH", body: JSON.stringify(newRule) },
      token,
    );
    return { ruleId: existing.id, action: "updated" };
  }

  const added = await cf(
    `/zones/${zoneId}/rulesets/${ruleset.id}/rules`,
    { method: "POST", body: JSON.stringify(newRule) },
    token,
  );
  const addedId = added.result?.rules?.slice(-1)?.[0]?.id;
  return { ruleId: addedId, action: "created" };
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });

  try {
    const rawToken = Deno.env.get("CLOUDFLARE_API_TOKEN") || "";
    const token = rawToken.trim().replace(/[\r\n\t ]/g, "");
    const accountId = (Deno.env.get("CLOUDFLARE_ACCOUNT_ID") || "").trim();
    const zoneId = (Deno.env.get("CLOUDFLARE_ZONE_ID") || "").trim();
    if (!token || !accountId || !zoneId) {
      return new Response(
        JSON.stringify({ error: "Faltan secrets de Cloudflare" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const body = req.method === "POST" ? await req.json().catch(() => ({})) : {};
    const action = body.action || "preview";

    // Debug: verificar token
    if (action === "verify") {
      const verifyRes = await fetch("https://api.cloudflare.com/client/v4/user/tokens/verify", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const verifyJson = await verifyRes.json();
      const listsRes = await fetch(`https://api.cloudflare.com/client/v4/accounts/${accountId}/rules/lists`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const listsJson = await listsRes.json();
      return new Response(JSON.stringify({
        accountId,
        zoneId,
        rawTokenLength: rawToken.length,
        cleanTokenLength: token.length,
        hadWhitespace: rawToken.length !== token.length,
        tokenPrefix: token.slice(0, 6),
        tokenSuffix: token.slice(-4),
        verify: verifyJson,
        listsStatus: listsRes.status,
        lists: listsJson,
      }, null, 2), { headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }

    // Descargar _redirects desde el sitio publicado
    const redirectsRes = await fetch("https://hayasmarketing.com/_redirects");
    if (!redirectsRes.ok) {
      throw new Error(`No se pudo descargar /_redirects (HTTP ${redirectsRes.status})`);
    }
    const text = await redirectsRes.text();
    const { exact, skipped } = parseRedirects(text);

    if (action === "preview") {
      return new Response(
        JSON.stringify({
          action: "preview",
          totals: { eligible: exact.length, skipped: skipped.length },
          sample: exact.slice(0, 10),
          skipped_sample: skipped.slice(0, 10),
        }, null, 2),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    if (action !== "sync") {
      return new Response(JSON.stringify({ error: "action debe ser 'preview' o 'sync'" }), {
        status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Cloudflare Bulk Redirects List máx 10.000 items en plan estándar — OK
    if (exact.length === 0) {
      return new Response(JSON.stringify({ error: "0 redirecciones elegibles" }), {
        status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const listId = await findOrCreateList(accountId, token);
    const itemsResp = await replaceListItems(accountId, listId, exact, token);
    const ruleResp = await ensureRedirectRule(zoneId, accountId, listId, token);
    const wwwRuleResp = await ensureWwwToApexRule(zoneId, token);

    return new Response(
      JSON.stringify({
        action: "sync",
        listId,
        itemsUploaded: exact.length,
        skipped: skipped.length,
        operation_id: itemsResp.result?.operation_id,
        rule: ruleResp,
        www_rule: wwwRuleResp,
        skipped_sample: skipped.slice(0, 10),
      }, null, 2),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  } catch (err) {
    console.error("[cloudflare-redirects-sync]", err);
    return new Response(
      JSON.stringify({ error: err instanceof Error ? err.message : String(err) }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }
});
