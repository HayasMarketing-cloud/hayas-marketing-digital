import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@18.5.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.57.2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const logStep = (step: string, details?: any) => {
  const detailsStr = details ? ` - ${JSON.stringify(details)}` : '';
  console.log(`[WEBHOOK-HANDLER] ${step}${detailsStr}`);
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
    logStep("Webhook handler started");

    // Verificar Stripe key
    const stripeKey = Deno.env.get("STRIPE_SECRET_KEY");
    if (!stripeKey) throw new Error("STRIPE_SECRET_KEY is not set");

    const stripe = new Stripe(stripeKey, { apiVersion: "2025-08-27.basil" });

    // Obtener el cuerpo del webhook
    const body = await req.text();
    const signature = req.headers.get("stripe-signature");

    if (!signature) {
      throw new Error("No signature found");
    }

    let event: Stripe.Event;

    try {
      // Verify webhook signature for security
      const webhookSecret = Deno.env.get("STRIPE_WEBHOOK_SECRET");
      if (!webhookSecret) {
        throw new Error("STRIPE_WEBHOOK_SECRET is not configured");
      }
      
      event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
      logStep("Event verified and parsed", { type: event.type, id: event.id });
    } catch (err) {
      logStep("ERROR verifying webhook signature", { error: err });
      throw new Error("Webhook signature verification failed");
    }

    // Procesar diferentes tipos de eventos
    switch (event.type) {
      case 'checkout.session.completed':
        await handleCheckoutCompleted(event.data.object as Stripe.Checkout.Session, supabaseClient, stripe);
        break;
        
      case 'payment_intent.succeeded':
        await handlePaymentSucceeded(event.data.object as Stripe.PaymentIntent, supabaseClient);
        break;
        
      case 'payment_intent.payment_failed':
        await handlePaymentFailed(event.data.object as Stripe.PaymentIntent, supabaseClient);
        break;
        
      case 'invoice.payment_succeeded':
        await handleInvoicePaymentSucceeded(event.data.object as Stripe.Invoice, supabaseClient);
        break;
        
      case 'customer.subscription.created':
      case 'customer.subscription.updated':
      case 'customer.subscription.deleted':
        await handleSubscriptionChange(event.data.object as Stripe.Subscription, supabaseClient, event.type);
        break;
        
      default:
        logStep("Unhandled event type", { type: event.type });
    }

    return new Response(JSON.stringify({ received: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });

  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    logStep("ERROR in webhook-handler", { message: errorMessage });
    return new Response(
      JSON.stringify({ error: "Webhook processing failed" }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 400,
      }
    );
  }
});

async function handleCheckoutCompleted(
  session: Stripe.Checkout.Session,
  supabaseClient: any,
  stripe: Stripe
) {
  logStep("Processing checkout.session.completed", { sessionId: session.id });

  try {
    // Actualizar orden en la base de datos
    const { data: order, error: orderError } = await supabaseClient
      .from('orders')
      .select('*')
      .eq('stripe_session_id', session.id)
      .single();

    if (orderError || !order) {
      logStep("Order not found for session", { sessionId: session.id });
      return;
    }

    // Actualizar estado de la orden
    await supabaseClient
      .from('orders')
      .update({
        status: 'paid',
        stripe_payment_intent_id: session.payment_intent,
        stripe_subscription_id: session.subscription,
        updated_at: new Date().toISOString()
      })
      .eq('id', order.id);

    // Crear registro de pago
    if (session.payment_intent) {
      const paymentIntent = await stripe.paymentIntents.retrieve(session.payment_intent as string);
      
      await supabaseClient
        .from('payments')
        .insert({
          order_id: order.id,
          stripe_payment_id: paymentIntent.id,
          amount: paymentIntent.amount,
          currency: paymentIntent.currency,
          status: paymentIntent.status,
          payment_method_type: paymentIntent.charges.data[0]?.payment_method_details?.type || 'unknown',
          stripe_webhook_data: session
        });
    }

    logStep("Order and payment updated successfully", { orderId: order.id });

  } catch (error) {
    logStep("ERROR in handleCheckoutCompleted", { error: error });
  }
}

async function handlePaymentSucceeded(
  paymentIntent: Stripe.PaymentIntent,
  supabaseClient: any
) {
  logStep("Processing payment_intent.succeeded", { paymentIntentId: paymentIntent.id });

  try {
    // Actualizar estado del pago en la base de datos
    await supabaseClient
      .from('payments')
      .update({
        status: 'succeeded',
        stripe_webhook_data: paymentIntent
      })
      .eq('stripe_payment_id', paymentIntent.id);

    logStep("Payment status updated to succeeded");

  } catch (error) {
    logStep("ERROR in handlePaymentSucceeded", { error: error });
  }
}

async function handlePaymentFailed(
  paymentIntent: Stripe.PaymentIntent,
  supabaseClient: any
) {
  logStep("Processing payment_intent.payment_failed", { paymentIntentId: paymentIntent.id });

  try {
    // Actualizar estado del pago
    await supabaseClient
      .from('payments')
      .update({
        status: 'failed',
        stripe_webhook_data: paymentIntent
      })
      .eq('stripe_payment_id', paymentIntent.id);

    // Actualizar estado de la orden
    const { data: payment } = await supabaseClient
      .from('payments')
      .select('order_id')
      .eq('stripe_payment_id', paymentIntent.id)
      .single();

    if (payment) {
      await supabaseClient
        .from('orders')
        .update({
          status: 'cancelled',
          updated_at: new Date().toISOString()
        })
        .eq('id', payment.order_id);
    }

    logStep("Payment and order status updated to failed/cancelled");

  } catch (error) {
    logStep("ERROR in handlePaymentFailed", { error: error });
  }
}

async function handleInvoicePaymentSucceeded(
  invoice: Stripe.Invoice,
  supabaseClient: any
) {
  logStep("Processing invoice.payment_succeeded", { invoiceId: invoice.id });

  try {
    // Para suscripciones, actualizar el estado correspondiente
    if (invoice.subscription) {
      await supabaseClient
        .from('orders')
        .update({
          status: 'paid',
          updated_at: new Date().toISOString()
        })
        .eq('stripe_subscription_id', invoice.subscription);
    }

    logStep("Subscription payment processed");

  } catch (error) {
    logStep("ERROR in handleInvoicePaymentSucceeded", { error: error });
  }
}

async function handleSubscriptionChange(
  subscription: Stripe.Subscription,
  supabaseClient: any,
  eventType: string
) {
  logStep("Processing subscription change", { subscriptionId: subscription.id, eventType });

  try {
    const status = eventType === 'customer.subscription.deleted' ? 'cancelled' : 
                  subscription.status === 'active' ? 'paid' : 'pending';

    await supabaseClient
      .from('orders')
      .update({
        status: status,
        updated_at: new Date().toISOString()
      })
      .eq('stripe_subscription_id', subscription.id);

    logStep("Subscription status updated", { status });

  } catch (error) {
    logStep("ERROR in handleSubscriptionChange", { error: error });
  }
}