import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@18.5.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.57.2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface CheckoutRequest {
  price_id: string;
  quantity?: number;
  success_url?: string;
  cancel_url?: string;
}

const logStep = (step: string, details?: any) => {
  const detailsStr = details ? ` - ${JSON.stringify(details)}` : '';
  console.log(`[CREATE-CHECKOUT] ${step}${detailsStr}`);
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  const supabaseClient = createClient(
    Deno.env.get("SUPABASE_URL") ?? "",
    Deno.env.get("SUPABASE_ANON_KEY") ?? ""
  );

  try {
    logStep("Function started");

    // Verificar Stripe key
    const stripeKey = Deno.env.get("STRIPE_SECRET_KEY");
    if (!stripeKey) throw new Error("STRIPE_SECRET_KEY is not set");
    logStep("Stripe key verified");

    // Obtener datos del request
    const { price_id, quantity = 1, success_url, cancel_url }: CheckoutRequest = await req.json();
    logStep("Request data parsed", { price_id, quantity });

    if (!price_id) {
      throw new Error("price_id is required");
    }

    // Verificar si el usuario está autenticado (opcional)
    const authHeader = req.headers.get("Authorization");
    let user = null;
    let customerId = null;

    if (authHeader) {
      const token = authHeader.replace("Bearer ", "");
      const { data: userData, error: userError } = await supabaseClient.auth.getUser(token);
      
      if (!userError && userData.user) {
        user = userData.user;
        logStep("User authenticated", { userId: user.id, email: user.email });

        // Buscar o crear customer en la base de datos
        const { data: existingCustomer } = await supabaseClient
          .from('customers')
          .select('*')
          .eq('user_id', user.id)
          .single();

        if (existingCustomer) {
          customerId = existingCustomer.stripe_customer_id;
          logStep("Existing customer found", { customerId });
        }
      }
    }

    // Obtener información del producto
    const { data: product, error: productError } = await supabaseClient
      .from('products')
      .select('*')
      .eq('stripe_price_id', price_id)
      .eq('is_active', true)
      .single();

    if (productError || !product) {
      throw new Error(`Product not found for price_id: ${price_id}`);
    }
    logStep("Product found", { productName: product.name, category: product.category });

    // Inicializar Stripe
    const stripe = new Stripe(stripeKey, { apiVersion: "2025-08-27.basil" });

    // Verificar si existe customer en Stripe
    if (user?.email && !customerId) {
      const customers = await stripe.customers.list({ email: user.email, limit: 1 });
      if (customers.data.length > 0) {
        customerId = customers.data[0].id;
        
        // Actualizar en nuestra base de datos
        if (user) {
          await supabaseClient
            .from('customers')
            .upsert({
              user_id: user.id,
              stripe_customer_id: customerId,
              email: user.email,
              name: user.user_metadata?.full_name || null
            });
          logStep("Customer synced from Stripe", { customerId });
        }
      }
    }

    // Determinar URLs de éxito y cancelación
    const origin = req.headers.get("origin") || "https://hayasmarketing.com";
    const defaultSuccessUrl = `${origin}/es/pago-exitoso`;
    const defaultCancelUrl = `${origin}/es/pago-cancelado`;

    // Crear sesión de checkout
    const sessionData: any = {
      line_items: [
        {
          price: price_id,
          quantity: quantity,
        },
      ],
      mode: product.billing_type === 'recurring' ? 'subscription' : 'payment',
      success_url: success_url || defaultSuccessUrl,
      cancel_url: cancel_url || defaultCancelUrl,
      metadata: {
        product_category: product.category,
        product_name: product.name,
        user_id: user?.id || 'guest'
      }
    };

    // Configurar customer si existe
    if (customerId) {
      sessionData.customer = customerId;
    } else if (user?.email) {
      sessionData.customer_email = user.email;
    }

    const session = await stripe.checkout.sessions.create(sessionData);
    logStep("Checkout session created", { sessionId: session.id, url: session.url });

    // Crear orden pendiente en nuestra base de datos si hay usuario
    if (user && customerId) {
      const { data: customerData } = await supabaseClient
        .from('customers')
        .select('id')
        .eq('user_id', user.id)
        .single();

      if (customerData) {
        await supabaseClient
          .from('orders')
          .insert({
            customer_id: customerData.id,
            product_id: product.id,
            stripe_session_id: session.id,
            status: 'pending',
            amount_total: product.price_amount * quantity,
            currency: product.currency,
            metadata: {
              checkout_session_id: session.id,
              quantity: quantity
            }
          });
        logStep("Order created in database");
      }
    }

    return new Response(JSON.stringify({ 
      url: session.url,
      session_id: session.id
    }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });

  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    logStep("ERROR in create-checkout-session", { message: errorMessage });
    return new Response(
      JSON.stringify({ error: errorMessage }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 500,
      }
    );
  }
});