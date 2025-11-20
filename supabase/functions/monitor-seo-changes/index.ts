import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.57.4';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log('🔍 Starting SEO monitoring check...');

    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // 1. Get current SEO status of all Spanish pages
    const { data: currentPages, error: pagesError } = await supabase
      .from('seo_pages')
      .select('path, title, description, h1, keywords, og_image, is_indexable')
      .eq('in_language', 'es-ES');

    if (pagesError) {
      console.error('Error fetching current pages:', pagesError);
      throw pagesError;
    }

    console.log(`📊 Found ${currentPages?.length || 0} pages in database`);

    // 2. Get the latest snapshot for comparison
    const { data: latestSnapshots, error: snapshotError } = await supabase
      .from('seo_history')
      .select('*')
      .order('snapshot_at', { ascending: false })
      .limit(100);

    if (snapshotError) {
      console.error('Error fetching snapshots:', snapshotError);
    }

    const latestSnapshotMap = new Map();
    latestSnapshots?.forEach(snap => {
      if (!latestSnapshotMap.has(snap.page_path)) {
        latestSnapshotMap.set(snap.page_path, snap);
      }
    });

    console.log(`📜 Found ${latestSnapshotMap.size} historical snapshots`);

    const alerts = [];
    const newSnapshots = [];

    // 3. Analyze each page
    for (const page of currentPages || []) {
      const missingFields = [];
      if (!page.title) missingFields.push('title');
      if (!page.description) missingFields.push('description');
      if (!page.h1) missingFields.push('h1');
      if (!page.keywords || (Array.isArray(page.keywords) && page.keywords.length === 0)) {
        missingFields.push('keywords');
      }
      if (!page.og_image) missingFields.push('og_image');

      const isOptimized = missingFields.length === 0;
      const previousSnapshot = latestSnapshotMap.get(page.path);

      // Create new snapshot
      newSnapshots.push({
        page_path: page.path,
        seo_optimized: isOptimized,
        missing_fields_count: missingFields.length,
        missing_fields: missingFields,
        status: isOptimized ? 'complete' : 'incomplete',
      });

      // Check for optimization loss
      if (previousSnapshot) {
        if (previousSnapshot.seo_optimized && !isOptimized) {
          alerts.push({
            alert_type: 'optimization_lost',
            severity: 'critical',
            page_path: page.path,
            message: `⚠️ La página perdió optimización SEO`,
            details: {
              previous_missing: previousSnapshot.missing_fields || [],
              current_missing: missingFields,
              fields_lost: missingFields.filter(
                f => !(previousSnapshot.missing_fields || []).includes(f)
              ),
            },
          });
          console.log(`🚨 ALERT: ${page.path} lost optimization`);
        } else if (missingFields.length > (previousSnapshot.missing_fields_count || 0)) {
          alerts.push({
            alert_type: 'missing_fields_increased',
            severity: 'warning',
            page_path: page.path,
            message: `Aumentaron los campos faltantes en SEO`,
            details: {
              previous_count: previousSnapshot.missing_fields_count || 0,
              current_count: missingFields.length,
              new_missing: missingFields.filter(
                f => !(previousSnapshot.missing_fields || []).includes(f)
              ),
            },
          });
          console.log(`⚠️ WARNING: ${page.path} has more missing fields`);
        }
      } else if (!isOptimized) {
        // New page without optimization
        alerts.push({
          alert_type: 'new_page_no_seo',
          severity: 'info',
          page_path: page.path,
          message: `Nueva página sin optimización SEO completa`,
          details: {
            missing_fields: missingFields,
          },
        });
        console.log(`ℹ️ INFO: New page ${page.path} needs SEO`);
      }
    }

    // 4. Save snapshots
    if (newSnapshots.length > 0) {
      const { error: snapshotInsertError } = await supabase
        .from('seo_history')
        .insert(newSnapshots);

      if (snapshotInsertError) {
        console.error('Error inserting snapshots:', snapshotInsertError);
      } else {
        console.log(`✅ Saved ${newSnapshots.length} snapshots`);
      }
    }

    // 5. Save alerts
    if (alerts.length > 0) {
      const { error: alertInsertError } = await supabase
        .from('seo_alerts')
        .insert(alerts);

      if (alertInsertError) {
        console.error('Error inserting alerts:', alertInsertError);
      } else {
        console.log(`🔔 Created ${alerts.length} alerts`);
      }
    }

    // 6. Cleanup old history (older than 30 days)
    const { error: cleanupError } = await supabase.rpc('cleanup_old_seo_history');
    if (cleanupError) {
      console.error('Error cleaning up old history:', cleanupError);
    }

    return new Response(JSON.stringify({
      success: true,
      summary: {
        pages_checked: currentPages?.length || 0,
        alerts_created: alerts.length,
        snapshots_saved: newSnapshots.length,
      },
      alerts: alerts.map(a => ({
        type: a.alert_type,
        path: a.page_path,
        severity: a.severity,
      })),
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('❌ Error in monitor-seo-changes:', error);
    return new Response(JSON.stringify({ 
      error: error instanceof Error ? error.message : 'Unknown error',
      success: false,
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
