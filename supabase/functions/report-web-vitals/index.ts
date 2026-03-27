import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { checkRateLimit } from "../_shared/rate-limiter.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

interface WebVitalPayload {
  metric_name: string;
  metric_value: number;
  metric_rating?: string;
  metric_id?: string;
  page_path: string;
  navigation_type?: string;
  user_agent?: string;
  connection_type?: string;
  device_memory?: number;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  try {
    // Use service role to bypass RLS
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    // Rate limiting
    const clientIp = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    const rateLimitResult = await checkRateLimit(supabase, clientIp, {
      maxRequests: 60,
      windowMs: 60 * 1000,
      endpoint: "report-web-vitals",
    });

    if (!rateLimitResult.allowed) {
      return new Response(JSON.stringify({ error: "Too many requests" }), {
        status: 429,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const body = await req.json();
    const metrics: WebVitalPayload[] = Array.isArray(body) ? body : [body];

    // Validate
    const validMetrics = metrics.filter(
      (m) =>
        m.metric_name &&
        typeof m.metric_value === "number" &&
        m.page_path &&
        ["LCP", "FID", "CLS", "INP", "FCP", "TTFB"].includes(m.metric_name)
    );

    if (validMetrics.length === 0) {
      return new Response(JSON.stringify({ error: "No valid metrics" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Use service role to bypass RLS
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    const { error } = await supabase.from("web_vitals").insert(
      validMetrics.map((m) => ({
        metric_name: m.metric_name,
        metric_value: m.metric_value,
        metric_rating: typeof m.metric_rating === "string" ? m.metric_rating.substring(0, 50) : null,
        metric_id: typeof m.metric_id === "string" ? m.metric_id.substring(0, 100) : null,
        page_path: String(m.page_path).substring(0, 500),
        navigation_type: typeof m.navigation_type === "string" ? m.navigation_type.substring(0, 50) : null,
        user_agent: typeof m.user_agent === "string" ? m.user_agent.substring(0, 500) : null,
        connection_type: typeof m.connection_type === "string" ? m.connection_type.substring(0, 50) : null,
        device_memory: m.device_memory || null,
      }))
    );

    if (error) {
      console.error("Insert error:", error);
      return new Response(JSON.stringify({ error: "Failed to store metrics" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(
      JSON.stringify({ ok: true, count: validMetrics.length }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (err) {
    console.error("Error:", err);
    return new Response(JSON.stringify({ error: "Internal error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
