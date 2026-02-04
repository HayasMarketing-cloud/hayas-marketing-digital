import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@18.5.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.57.2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const logStep = (step: string, details?: any) => {
  const detailsStr = details ? ` - ${JSON.stringify(details)}` : '';
  console.log(`[CHECK-SUBSCRIPTION] ${step}${detailsStr}`);
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  const supabaseClient = createClient(
    Deno.env.get("SUPABASE_URL") ?? "",
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
    { auth: { persistSession: false } }
  );

  try {
    logStep("Function started");

    // Verificar Stripe key
    const stripeKey = Deno.env.get("STRIPE_SECRET_KEY");
    if (!stripeKey) {
      logStep("ERROR: Stripe key not configured");
      throw new Error("Service configuration error");
    }
    logStep("Stripe key verified");

    const authHeader = req.headers.get("Authorization");
    if (!authHeader) {
      logStep("ERROR: No authorization header");
      throw new Error("Authentication required");
    }
    logStep("Authorization header found");

    const token = authHeader.replace("Bearer ", "");
    logStep("Authenticating user with token");
    
    const { data: userData, error: userError } = await supabaseClient.auth.getUser(token);
    if (userError) {
      logStep("ERROR: User authentication failed", { error: userError.message });
      throw new Error("Authentication failed");
    }
    const user = userData.user;
    if (!user?.email) {
      logStep("ERROR: User has no email");
      throw new Error("Authentication failed");
    }
    const maskedUserId = user.id.substring(0, 8) + '...';
    logStep("User authenticated", { userId: maskedUserId });

    const stripe = new Stripe(stripeKey, { apiVersion: "2025-08-27.basil" });

    // Buscar customer en nuestra base de datos
    const { data: customer } = await supabaseClient
      .from('customers')
      .select('*')
      .eq('user_id', user.id)
      .single();

    if (!customer?.stripe_customer_id) {
      logStep("No customer found, returning unsubscribed state");
      return new Response(JSON.stringify({ 
        subscribed: false,
        has_purchases: false,
        active_subscriptions: []
      }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      });
    }

    logStep("Found customer", { customerId: customer.stripe_customer_id });

    // Buscar suscripciones activas en Stripe
    const subscriptions = await stripe.subscriptions.list({
      customer: customer.stripe_customer_id,
      status: "active",
      limit: 10,
    });

    // Buscar órdenes completadas en nuestra base de datos
    const { data: orders } = await supabaseClient
      .from('orders')
      .select(`
        *,
        products (
          name,
          category,
          billing_type
        )
      `)
      .eq('customer_id', customer.id)
      .eq('status', 'paid')
      .order('created_at', { ascending: false });

    const hasActiveSubs = subscriptions.data.length > 0;
    const hasPurchases = (orders?.length || 0) > 0;

    let activeSubscriptions = [];
    if (hasActiveSubs) {
      activeSubscriptions = subscriptions.data.map(sub => ({
        id: sub.id,
        product_id: sub.items.data[0].price.product,
        status: sub.status,
        current_period_end: new Date(sub.current_period_end * 1000).toISOString(),
        cancel_at_period_end: sub.cancel_at_period_end
      }));
      logStep("Active subscriptions found", { count: activeSubscriptions.length });
    }

    return new Response(JSON.stringify({
      subscribed: hasActiveSubs,
      has_purchases: hasPurchases,
      active_subscriptions: activeSubscriptions,
      recent_orders: orders?.slice(0, 5) || []
    }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    logStep("ERROR in check-subscription", { message: errorMessage });
    return new Response(JSON.stringify({ error: "An error occurred processing your request" }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});