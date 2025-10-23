import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.57.2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const logStep = (step: string, details?: any) => {
  const detailsStr = details ? ` - ${JSON.stringify(details)}` : '';
  console.log(`[GET-USER-ORDERS] ${step}${detailsStr}`);
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

    const authHeader = req.headers.get("Authorization");
    if (!authHeader) {
      logStep("ERROR: No authorization header");
      throw new Error("Authentication required");
    }

    const token = authHeader.replace("Bearer ", "");
    const { data: userData, error: userError } = await supabaseClient.auth.getUser(token);
    if (userError) {
      logStep("ERROR: User authentication failed", { error: userError.message });
      throw new Error("Authentication failed");
    }
    const user = userData.user;
    if (!user) {
      logStep("ERROR: No user found");
      throw new Error("Authentication failed");
    }
    logStep("User authenticated", { userId: user.id });

    // Buscar customer
    const { data: customer } = await supabaseClient
      .from('customers')
      .select('id')
      .eq('user_id', user.id)
      .single();

    if (!customer) {
      logStep("No customer found");
      return new Response(JSON.stringify({ orders: [] }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      });
    }

    // Obtener órdenes con información del producto
    const { data: orders, error: ordersError } = await supabaseClient
      .from('orders')
      .select(`
        *,
        products (
          name,
          description,
          category,
          billing_type,
          billing_interval
        ),
        payments (
          amount,
          status,
          payment_method_type,
          created_at
        )
      `)
      .eq('customer_id', customer.id)
      .order('created_at', { ascending: false });

    if (ordersError) {
      logStep("ERROR: Failed to fetch orders", { error: ordersError.message });
      throw new Error("Failed to fetch orders");
    }

    logStep("Orders fetched", { count: orders?.length || 0 });

    return new Response(JSON.stringify({ 
      orders: orders || [],
      total_orders: orders?.length || 0
    }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });

  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    logStep("ERROR in get-user-orders", { message: errorMessage });
    return new Response(JSON.stringify({ error: "An error occurred processing your request" }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});