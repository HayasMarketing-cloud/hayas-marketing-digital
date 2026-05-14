// Trigger a Lovable redeploy by creating an empty commit on GitHub.
// Called by a Postgres trigger when seo_pages changes.
// Includes a 5-minute cooldown to avoid spam during bulk edits.

import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const OWNER = "HayasMarketing-cloud";
const REPO = "hayas-marketing-digital";
const BRANCH = "main";
const COOLDOWN_MINUTES = 5;

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });

  try {
    const githubToken = Deno.env.get("GITHUB_TOKEN");
    if (!githubToken) throw new Error("GITHUB_TOKEN not set");

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    );

    // Cooldown check via redeploy_log table
    const { data: lastRow } = await supabase
      .from("redeploy_log")
      .select("triggered_at")
      .order("triggered_at", { ascending: false })
      .limit(1)
      .maybeSingle();

    if (lastRow) {
      const elapsedMin = (Date.now() - new Date(lastRow.triggered_at).getTime()) / 60000;
      if (elapsedMin < COOLDOWN_MINUTES) {
        return new Response(
          JSON.stringify({ skipped: true, reason: `cooldown ${(COOLDOWN_MINUTES - elapsedMin).toFixed(1)}min left` }),
          { headers: { ...corsHeaders, "Content-Type": "application/json" } },
        );
      }
    }

    const gh = async (path: string, init?: RequestInit) => {
      const res = await fetch(`https://api.github.com${path}`, {
        ...init,
        headers: {
          Authorization: `Bearer ${githubToken}`,
          Accept: "application/vnd.github+json",
          "X-GitHub-Api-Version": "2022-11-28",
          "Content-Type": "application/json",
          ...(init?.headers || {}),
        },
      });
      if (!res.ok) throw new Error(`GitHub ${path}: ${res.status} ${await res.text()}`);
      return res.json();
    };

    // 1. Get current ref
    const ref = await gh(`/repos/${OWNER}/${REPO}/git/ref/heads/${BRANCH}`);
    const parentSha = ref.object.sha;

    // 2. Get parent commit (to reuse its tree)
    const parentCommit = await gh(`/repos/${OWNER}/${REPO}/git/commits/${parentSha}`);

    // 3. Create empty commit
    const newCommit = await gh(`/repos/${OWNER}/${REPO}/git/commits`, {
      method: "POST",
      body: JSON.stringify({
        message: `chore: trigger redeploy (seo_pages updated ${new Date().toISOString()})`,
        tree: parentCommit.tree.sha,
        parents: [parentSha],
      }),
    });

    // 4. Update ref to point to new commit
    await gh(`/repos/${OWNER}/${REPO}/git/refs/heads/${BRANCH}`, {
      method: "PATCH",
      body: JSON.stringify({ sha: newCommit.sha }),
    });

    // 5. Log
    await supabase.from("redeploy_log").insert({ commit_sha: newCommit.sha });

    return new Response(
      JSON.stringify({ ok: true, sha: newCommit.sha }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  } catch (err) {
    console.error("trigger-redeploy error:", err);
    return new Response(
      JSON.stringify({ error: String(err) }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }
});
