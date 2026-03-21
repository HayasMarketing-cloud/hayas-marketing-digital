import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.57.4";
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";
import { checkRateLimit } from "../_shared/rate-limiter.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

// URL validation schema
const URLSchema = z
  .string()
  .trim()
  .url()
  .max(500)
  .optional()
  .or(z.literal(""));

// Zod schema for server-side validation
const FreelancerFormSchema = z.object({
  firstName: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255).toLowerCase(),
  area: z.string().trim().min(1).max(100),
  experience: z.string().trim().min(1).max(50),
  portfolio: URLSchema,
  linkedin: URLSchema,
  about: z.string().trim().max(1000).optional(),
  acceptCommunications: z.boolean().refine((val) => val === true),
  website: z.string().max(0), // Honeypot field - must be empty
});

const logStep = (step: string, details?: any) => {
  console.log(`[submit-freelancer-form] ${step}`, details ? JSON.stringify(details) : "");
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    logStep("Processing freelancer form submission");

    // Initialize Supabase client
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    // Parse request body first to get email for rate limiting
    const body = await req.json();
    
    const email = body.email?.toLowerCase() || "unknown";

    logStep("Checking rate limit", { email });

    // Apply rate limiting: 2 requests per hour per email
    const rateLimitResult = await checkRateLimit(supabase, email, {
      maxRequests: 2,
      windowMs: 60 * 60 * 1000, // 1 hour
      endpoint: "submit-freelancer-form",
    });

    if (!rateLimitResult.allowed) {
      logStep("Rate limit exceeded", { email });
      return new Response(
        JSON.stringify({
          error: "Has enviado demasiadas solicitudes. Por favor, inténtalo más tarde.",
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

    // Validate form data
    logStep("Validating form data");

    const validationResult = FreelancerFormSchema.safeParse(body);

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
      logStep("Honeypot triggered - potential bot", { email });
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
    // 1. Save to database (freelancers table)
    // 2. Send email notification to team
    // 3. Send confirmation email to freelancer
    
    logStep("Freelancer application submitted", {
      email: formData.email,
      area: formData.area,
      experience: formData.experience,
    });

    // TODO: Implement actual form processing
    // Example: Save to freelancers table, send notification emails, etc.

    return new Response(
      JSON.stringify({
        success: true,
        message: "Tu solicitud ha sido enviada correctamente. Revisaremos tu perfil y nos pondremos en contacto contigo pronto.",
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
      }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
