import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.57.4";
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";
import { checkRateLimit } from "../_shared/rate-limiter.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

const ContactFormSchema = z.object({
  nombre: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255).toLowerCase(),
  ayuda: z.string().optional(),
  telefono: z.string().trim().max(20).optional(),
  empresa: z.string().trim().max(100).optional(),
  mensaje: z.string().trim().max(2000).optional(),
  acceptCommunications: z.boolean().refine((val) => val === true),
  website: z.string().max(0).optional(),
  sourcePage: z.string().max(200).optional(),
});

const logStep = (step: string, details?: any) => {
  console.log(`[submit-contact-form] ${step}`, details ? JSON.stringify(details) : "");
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    logStep("Processing contact form submission");

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    const clientIp = req.headers.get("x-forwarded-for") || 
                     req.headers.get("x-real-ip") || 
                     "unknown";

    const rateLimitResult = await checkRateLimit(supabase, clientIp, {
      maxRequests: 3,
      windowMs: 5 * 60 * 1000,
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
          headers: { ...corsHeaders, "Content-Type": "application/json",
            "Retry-After": String(Math.ceil((rateLimitResult.resetAt!.getTime() - Date.now()) / 1000)),
          },
        }
      );
    }

    const body = await req.json();
    const validationResult = ContactFormSchema.safeParse(body);

    if (!validationResult.success) {
      logStep("Validation failed", { errors: validationResult.error.issues });
      return new Response(
        JSON.stringify({ error: "Datos de formulario inválidos", details: validationResult.error.issues }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const formData = validationResult.data;

    // Honeypot check
    if (formData.website) {
      logStep("Honeypot triggered", { ip: clientIp });
      return new Response(
        JSON.stringify({ error: "Solicitud inválida" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Save lead to sofia_leads
    const { error: dbError } = await supabase.from("sofia_leads").insert([{
      name: formData.nombre,
      email: formData.email,
      phone: formData.telefono || null,
      company: formData.empresa || null,
      interest: formData.ayuda || null,
      source_page: formData.sourcePage || null,
      conversation_summary: formData.mensaje || null,
      status: "new",
    }]);

    if (dbError) {
      logStep("Database insert error", { error: dbError.message });
      return new Response(
        JSON.stringify({ error: "Error al guardar el formulario" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    logStep("Lead saved to database");

    // Send email notification via Resend
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (RESEND_API_KEY) {
      try {
        const serviceLabel = formData.ayuda || "No especificado";
        const emailHtml = `
          <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: linear-gradient(135deg, #4D9A00, #00467E); padding: 24px 32px; border-radius: 12px 12px 0 0;">
              <h1 style="color: white; margin: 0; font-size: 22px;">🌿 Nuevo Lead desde la Web</h1>
            </div>
            <div style="background: #f9fafb; padding: 24px 32px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr><td style="padding: 8px 0; color: #6b7280; width: 140px;">Nombre:</td><td style="padding: 8px 0; font-weight: 600;">${formData.nombre}</td></tr>
                <tr><td style="padding: 8px 0; color: #6b7280;">Email:</td><td style="padding: 8px 0;"><a href="mailto:${formData.email}" style="color: #00467E;">${formData.email}</a></td></tr>
                ${formData.telefono ? `<tr><td style="padding: 8px 0; color: #6b7280;">Teléfono:</td><td style="padding: 8px 0;">${formData.telefono}</td></tr>` : ""}
                ${formData.empresa ? `<tr><td style="padding: 8px 0; color: #6b7280;">Empresa:</td><td style="padding: 8px 0;">${formData.empresa}</td></tr>` : ""}
                <tr><td style="padding: 8px 0; color: #6b7280;">Servicio:</td><td style="padding: 8px 0;">${serviceLabel}</td></tr>
                ${formData.sourcePage ? `<tr><td style="padding: 8px 0; color: #6b7280;">Página origen:</td><td style="padding: 8px 0;">${formData.sourcePage}</td></tr>` : ""}
              </table>
              ${formData.mensaje ? `<div style="margin-top: 16px; padding: 16px; background: white; border-radius: 8px; border: 1px solid #e5e7eb;"><p style="margin: 0 0 4px; color: #6b7280; font-size: 13px;">Mensaje:</p><p style="margin: 0; color: #1f2937;">${formData.mensaje}</p></div>` : ""}
            </div>
          </div>
        `;

        const emailRes = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${RESEND_API_KEY}`,
          },
          body: JSON.stringify({
            from: "Hayas Web <onboarding@resend.dev>",
            to: ["ruben@hayas.es"],
            subject: `Nuevo lead: ${formData.nombre} - ${serviceLabel}`,
            html: emailHtml,
          }),
        });

        const emailBody = await emailRes.text();
        if (!emailRes.ok) {
          logStep("Resend email error", { status: emailRes.status, body: emailBody });
        } else {
          logStep("Email notification sent successfully");
        }
      } catch (emailError: any) {
        logStep("Email sending failed", { error: emailError.message });
        // Don't fail the request if email fails - lead is already saved
      }
    } else {
      logStep("RESEND_API_KEY not configured, skipping email");
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: "Formulario enviado correctamente. Nos pondremos en contacto contigo pronto.",
      }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error: any) {
    logStep("Error processing form", { error: error.message });
    return new Response(
      JSON.stringify({ error: "Error interno del servidor" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
