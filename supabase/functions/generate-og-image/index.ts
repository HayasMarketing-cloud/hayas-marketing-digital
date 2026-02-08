import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.57.4";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

// Brand identity for Hayas Marketing
const BRAND_CONTEXT = {
  colors: {
    primary: "#00467E", // Azul primario
    secondary: "#4D9A00", // Verde Hayas
    accent: "#04725A", // Turquesa
    background: "#FFFFFF",
    text: "#1A1A1A",
  },
  typography: {
    heading: "DM Sans",
    body: "Inter",
  },
};

// Category-specific visual styles
const CATEGORY_STYLES: Record<string, string> = {
  main: "Modern hero image with prominent centered title text, gradient background from green (#4D9A00) to blue (#00467E), clean geometric shapes, professional and trustworthy mood",
  service: "Service-focused design with abstract icons representing digital services, blue tones (#00467E), professional corporate style, clean lines and minimal elements",
  solution: "Connected workflow visualization, interconnected geometric shapes suggesting process and automation, turquoise accent (#04725A), modern tech aesthetic",
  blog: "Editorial magazine style, large bold typography, green accent (#4D9A00), clean minimal design with subtle texture",
  "case-study": "Results-oriented design with abstract growth charts and success indicators, gradient from turquoise to blue, data visualization elements",
  tool: "Dashboard/UI elements style, modern interface components, blue primary color, tech-forward and innovative feel",
};

function buildPrompt(
  title: string,
  category: string,
  description: string,
  language: string
): string {
  const categoryStyle = CATEGORY_STYLES[category] || CATEGORY_STYLES.main;
  const langContext = language === "en" ? "English content" : "Spanish content";

  return `Create a professional Open Graph image (1200x630 pixels, 16:9 aspect ratio) for a digital marketing agency website page.

PAGE DETAILS:
- Title: "${title}"
- Category: ${category}
- Description: ${description}
- Language: ${langContext}

BRAND IDENTITY - Hayas Marketing:
- Primary color: #00467E (deep blue)
- Secondary color: #4D9A00 (vibrant green)
- Accent color: #04725A (turquoise)
- Style: Modern, clean, corporate, innovative

VISUAL REQUIREMENTS:
- ${categoryStyle}
- DO NOT include any photographs of people or faces
- Use abstract geometric shapes, gradients, and professional iconography
- Include the title text prominently in bold sans-serif font
- Ensure high contrast for readability
- Professional, trustworthy, innovative mood
- Clean and minimal composition with strategic use of whitespace

OUTPUT:
- Dimensions: 1200x630 pixels exactly
- High quality, sharp edges
- Suitable for social media sharing (Facebook, LinkedIn, Twitter)`;
}

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

    if (!supabaseUrl || !supabaseServiceKey) {
      throw new Error("Missing Supabase configuration");
    }

    // Verify admin authentication
    const authHeader = req.headers.get("Authorization");
    if (!authHeader) {
      return new Response(
        JSON.stringify({ error: "Authorization required" }),
        {
          status: 401,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey);
    const supabaseUser = createClient(supabaseUrl, supabaseServiceKey, {
      global: {
        headers: { Authorization: authHeader },
      },
    });

    // Get user from token
    const {
      data: { user },
      error: userError,
    } = await supabaseUser.auth.getUser();

    if (userError || !user) {
      return new Response(
        JSON.stringify({ error: "Invalid or expired token" }),
        {
          status: 401,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    // Verify admin role
    const { data: hasAdminRole, error: roleError } = await supabaseAdmin.rpc(
      "has_role",
      {
        _user_id: user.id,
        _role: "admin",
      }
    );

    if (roleError || !hasAdminRole) {
      return new Response(
        JSON.stringify({ error: "Admin access required" }),
        {
          status: 403,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    // Parse request body
    const { path, title, description, category, language } = await req.json();

    if (!path || !title) {
      return new Response(
        JSON.stringify({ error: "Missing required fields: path, title" }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    console.log(`[generate-og-image] Generating for: ${path}`);
    console.log(`[generate-og-image] Title: ${title}`);
    console.log(`[generate-og-image] Category: ${category || "main"}`);

    // Build the prompt
    const prompt = buildPrompt(
      title,
      category || "main",
      description || "",
      language || "es"
    );

    console.log(`[generate-og-image] Calling Lovable AI...`);

    // Call Lovable AI Gateway for image generation
    const aiResponse = await fetch(
      "https://ai.gateway.lovable.dev/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${LOVABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "google/gemini-2.5-flash-image",
          messages: [
            {
              role: "user",
              content: prompt,
            },
          ],
          modalities: ["image", "text"],
        }),
      }
    );

    if (!aiResponse.ok) {
      const status = aiResponse.status;
      if (status === 429) {
        return new Response(
          JSON.stringify({
            error: "Rate limit exceeded. Please try again in a few minutes.",
            code: "RATE_LIMIT",
          }),
          {
            status: 429,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        );
      }
      if (status === 402) {
        return new Response(
          JSON.stringify({
            error: "AI credits exhausted. Please add credits to continue.",
            code: "NO_CREDITS",
          }),
          {
            status: 402,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        );
      }
      const errorText = await aiResponse.text();
      console.error(`[generate-og-image] AI API error: ${status}`, errorText);
      throw new Error(`AI generation failed: ${status}`);
    }

    const aiData = await aiResponse.json();
    console.log(`[generate-og-image] AI response received`);

    // Extract base64 image from response
    const imageData =
      aiData.choices?.[0]?.message?.images?.[0]?.image_url?.url;

    if (!imageData || !imageData.startsWith("data:image")) {
      console.error("[generate-og-image] No image in response:", aiData);
      throw new Error("No image generated by AI");
    }

    // Extract base64 data and determine format
    const matches = imageData.match(/^data:image\/(\w+);base64,(.+)$/);
    if (!matches) {
      throw new Error("Invalid image data format");
    }

    const imageFormat = matches[1]; // png, jpeg, webp, etc.
    const base64Data = matches[2];

    // Convert base64 to Uint8Array
    const binaryString = atob(base64Data);
    const bytes = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }

    // Generate filename from path
    const pathSlug = path
      .replace(/^\//, "")
      .replace(/\//g, "-")
      .replace(/[^a-zA-Z0-9-]/g, "");
    const timestamp = Date.now();
    const filename = `${pathSlug || "page"}-${timestamp}.${imageFormat}`;

    console.log(`[generate-og-image] Uploading to Storage: ${filename}`);

    // Upload to Supabase Storage
    const { data: uploadData, error: uploadError } = await supabaseAdmin.storage
      .from("og-images")
      .upload(filename, bytes, {
        contentType: `image/${imageFormat}`,
        cacheControl: "31536000", // 1 year cache
        upsert: false,
      });

    if (uploadError) {
      console.error("[generate-og-image] Upload error:", uploadError);
      throw new Error(`Failed to upload image: ${uploadError.message}`);
    }

    // Get public URL
    const { data: publicUrlData } = supabaseAdmin.storage
      .from("og-images")
      .getPublicUrl(filename);

    const publicUrl = publicUrlData.publicUrl;

    console.log(`[generate-og-image] Success! URL: ${publicUrl}`);

    return new Response(
      JSON.stringify({
        success: true,
        url: publicUrl,
        filename: filename,
        path: path,
      }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("[generate-og-image] Error:", error);
    return new Response(
      JSON.stringify({
        error: error instanceof Error ? error.message : "Unknown error",
      }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
