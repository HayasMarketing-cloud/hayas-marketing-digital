import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@18.5.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.57.2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const logStep = (step: string, details?: any) => {
  const detailsStr = details ? ` - ${JSON.stringify(details)}` : '';
  console.log(`[CUSTOMER-PORTAL] ${step}${detailsStr}`);
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  const supabaseClient = createClient(
    Deno.env.get("SUPABASE_URL") ?? "",
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
    { auth: { persistSession: false } }
  );

  try {
    logStep("Customer portal function started");

    // Verificar Stripe key
    const stripeKey = Deno.env.get("STRIPE_SECRET_KEY");
    if (!stripeKey) {
      logStep("ERROR: Stripe key not configured");
      throw new Error("Service configuration error");
    }
    logStep("Stripe key verified");

    // Verificar autenticación
    const authHeader = req.headers.get("Authorization");
    if (!authHeader) {
      logStep("ERROR: No authorization header");
      throw new Error("Authentication required");
    }
    logStep("Authorization header found");

    const token = authHeader.replace("Bearer ", "");
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
    logStep("User authenticated", { userId: user.id });

    // Buscar customer en la base de datos
    const { data: customer, error: customerError } = await supabaseClient
      .from('customers')
      .select('*')
      .eq('user_id', user.id)
      .single();

    if (customerError || !customer?.stripe_customer_id) {
      logStep("ERROR: Customer not found", { error: customerError?.message });
      throw new Error("Customer not found");
    }
    logStep("Customer found", { customerId: customer.stripe_customer_id });

    // Inicializar Stripe
    const stripe = new Stripe(stripeKey, { apiVersion: "2025-08-27.basil" });

    // Obtener URL de retorno
    const origin = req.headers.get("origin") || "https://hayasmarketing.com";
    const returnUrl = `${origin}/es/mi-cuenta`;

    // Crear sesión del portal de cliente
    const portalSession = await stripe.billingPortal.sessions.create({
      customer: customer.stripe_customer_id,
      return_url: returnUrl,
    });
    logStep("Customer portal session created", { 
      sessionId: portalSession.id, 
      url: portalSession.url 
    });

    return new Response(JSON.stringify({ 
      url: portalSession.url,
      session_id: portalSession.id
    }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });

  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    logStep("ERROR in customer-portal", { message: errorMessage });
    return new Response(
      JSON.stringify({ error: "An error occurred processing your request" }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 500,
      }
    );
  }
});