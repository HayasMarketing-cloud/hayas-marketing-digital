import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.57.4";
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";
import { checkRateLimit } from "../_shared/rate-limiter.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

// Zod schema for server-side validation
const ContactFormSchema = z.object({
  nombre: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255).toLowerCase(),
  ayuda: z.string().optional(),
  telefono: z.string().trim().max(20).optional(),
  empresa: z.string().trim().max(100).optional(),
  mensaje: z.string().trim().max(2000).optional(),
  acceptCommunications: z.boolean().refine((val) => val === true),
  website: z.string().max(0), // Honeypot field - must be empty
});

const logStep = (step: string, details?: any) => {
  console.log(`[submit-contact-form] ${step}`, details ? JSON.stringify(details) : "");
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    logStep("Processing contact form submission");

    // Initialize Supabase client
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    // Get client IP for rate limiting
    const clientIp = req.headers.get("x-forwarded-for") || 
                     req.headers.get("x-real-ip") || 
                     "unknown";

    logStep("Checking rate limit", { ip: clientIp });

    // Apply rate limiting: 3 requests per 5 minutes
    const rateLimitResult = await checkRateLimit(supabase, clientIp, {
      maxRequests: 3,
      windowMs: 5 * 60 * 1000, // 5 minutes
      endpoint: "submit-contact-form",
    });

    if (!rateLimitResult.allowed) {
      logStep("Rate limit exceeded", { ip: clientIp });
      return new Response(
        JSON.stringify({
          error: "Demasiadas solicitudes. Por favor, inténtalo más tarde.",
          retryAfter: Math.ceil((rateLimitResult.resetAt!.getTime() - Date.now()) / 1000),
        }),
        {
          status: 429,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
            "Retry-After": String(Math.ceil((rateLimitResult.resetAt!.getTime() - Date.now()) / 1000)),
          },
        }
      );
    }

    // Parse and validate request body
    const body = await req.json();
    logStep("Validating form data");

    const validationResult = ContactFormSchema.safeParse(body);

    if (!validationResult.success) {
      logStep("Validation failed", { errors: validationResult.error.issues });
      return new Response(
        JSON.stringify({
          error: "Datos de formulario inválidos",
          details: validationResult.error.issues,
        }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const formData = validationResult.data;
    logStep("Form data validated successfully");

    // Check honeypot field for bot protection
    if (formData.website) {
      logStep("Honeypot triggered - potential bot", { ip: clientIp });
      return new Response(
        JSON.stringify({
          error: "Solicitud inválida",
        }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    // Here you would typically:
    // 1. Save to database
    // 2. Send email notification
    // 3. Integrate with CRM (e.g., GoHighLevel)
    
    // For now, just log the submission
    logStep("Contact form submitted", {
      email: formData.email,
      hasMessage: !!formData.mensaje,
    });

    // TODO: Implement actual form processing
    // Example: Send email via Resend, save to database, etc.

    return new Response(
      JSON.stringify({
        success: true,
        message: "Formulario enviado correctamente. Nos pondremos en contacto contigo pronto.",
      }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error: any) {
    logStep("Error processing form", { error: error.message });
    return new Response(
      JSON.stringify({
        error: "Error interno del servidor",
        details: error.message,
      }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
