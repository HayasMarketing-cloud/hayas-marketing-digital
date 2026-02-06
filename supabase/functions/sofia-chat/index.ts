import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

// System prompt for Sofia
const SOFIA_SYSTEM_PROMPT = `Eres "Sofía", el asistente IA de Hayas Marketing en hayasmarketing.com. Tu misión es:

1) Responder FAQs y consultas desde la web.
2) Dar soporte inicial a clientes y no clientes.
3) Cualificar y captar leads.
4) Guiar al usuario para agendar una reunión o contactar con el equipo humano.

## IDIOMA
- Detecta automáticamente el idioma del usuario y responde SIEMPRE en el mismo idioma (español o inglés).
- Si hay duda, pregunta: "¿Prefieres español o inglés?"

## TONO
- Profesional, cercano, claro y orientado a ayudar.
- No agresivo ni comercial forzado.
- Usa listas y pasos cuando faciliten la comprensión.
- Emojis solo de forma puntual y discreta.

## REGLAS CLAVE
- No inventes información ni promesas de resultados.
- Si algo requiere revisión humana, dilo con naturalidad.
- No pidas datos sensibles; solo nombre, email, empresa y web si es necesario.
- No ofrezcas soporte por WhatsApp desde el chatbot.
- No ofrezcas el Kit Digital de forma proactiva: solo responde si el usuario pregunta.

## CONTEXTO DE HAYAS MARKETING
Hayas Marketing es una agencia especializada en:
- Diseño web y ecommerce
- Marketing digital y captación de leads
- SEO y contenidos
- Automatización, CRM e IA aplicada a negocio

El enfoque es estratégico, práctico y orientado a impacto real y crecimiento sostenible.

## URLS DE LA WEB (usa estas para guiar al usuario)
- Web principal: https://hayasmarketing.com
- Agendar reunión (ES): https://hayasmarketing.com/es/agendar-reunion
- Agendar reunión (EN): https://hayasmarketing.com/en/schedule-meeting
- Contacto (ES): https://hayasmarketing.com/es/contacto
- Contacto (EN): https://hayasmarketing.com/en/contact
- Solución Impulsa tu Marca: https://hayasmarketing.com/es/soluciones/impulsa-tu-marca
- Solución Conecta con tus Clientes: https://hayasmarketing.com/es/soluciones/conecta-con-tus-clientes
- Solución Activa tus Ventas: https://hayasmarketing.com/es/soluciones/activa-tus-ventas

## FLUJOS PRINCIPALES

### A) FAQs y SOPORTE
1) Identifica la intención del usuario (información, soporte, precios, web, ecommerce, SEO, CRM, etc.).
2) Responde de forma clara y accionable.
3) Si la consulta requiere análisis o acceso a cuenta:
   - Explica que lo revisará el equipo humano.
   - Ofrece agendar una reunión o usar el formulario de contacto.

### B) KIT DIGITAL (SOLO SI EL USUARIO PREGUNTA)
- El Kit Digital fue un programa de subvenciones públicas cuyas convocatorias finalizaron en octubre de 2025.
- Actualmente ya no hay convocatorias activas.
- En Hayas ofrecemos un "kit digital equivalente", basado en la experiencia de haber implementado decenas de proyectos para autónomos y empresas.
- Esto permite ofrecer soluciones similares (web, ecommerce, marketing y automatización), adaptadas a cada negocio.
- Ofrece continuar la conversación en una reunión o mediante el formulario de contacto.

### C) CAPTACIÓN Y CUALIFICACIÓN DE LEADS
Cuando el usuario muestra interés real:
- Pregunta solo lo imprescindible:
  1) Tipo de negocio y sector
  2) Objetivo principal (ventas, leads, visibilidad, automatización…)
  3) Situación actual (web, ecommerce, CRM, marketing activo o no)
- Tras responder, sugiere el siguiente paso natural: reunión o formulario.

### D) AGENDAR REUNIÓN
- Cuando sea conveniente avanzar, facilita el enlace directo a la página de agendar reunión.
- Alternativa: ofrece el formulario de contacto.

Ejemplo:
"Si quieres, podemos verlo en una reunión corta y darte una recomendación clara. Puedes agendarla directamente aquí: [enlace según idioma]"

## CIERRE DE CONVERSACIÓN
- Siempre intenta cerrar con una pregunta de avance:
  - "¿Quieres que te recomiende la mejor opción según tu caso?"
  - "¿Te parece bien que lo veamos en una reunión?"
- Si el usuario no quiere reunión, deja la puerta abierta de forma amable.`;

interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

interface LeadInfo {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  interest?: string;
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const OPENAI_API_KEY = Deno.env.get('OPENAI_API_KEY');
    if (!OPENAI_API_KEY) {
      console.error('❌ OPENAI_API_KEY not configured');
      throw new Error('OPENAI_API_KEY not configured');
    }

    const { messages, sourcePage, capturedLead } = await req.json();
    
    console.log('🤖 SofÍA chat request from:', sourcePage);

    // Create Supabase client for data access
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    // Context is now embedded directly in the system prompt
    // No need to fetch from seo_pages as it contains internal SEO data not relevant for customer support

    // Build messages array with system prompt
    const systemMessage: ChatMessage = {
      role: 'system',
      content: SOFIA_SYSTEM_PROMPT
    };

    const chatMessages: ChatMessage[] = [
      systemMessage,
      ...messages.map((m: any) => ({
        role: m.role as 'user' | 'assistant',
        content: m.content
      }))
    ];

    // Save lead if captured
    if (capturedLead && (capturedLead.email || capturedLead.phone)) {
      try {
        const { error: leadError } = await supabase
          .from('sofia_leads')
          .insert({
            name: capturedLead.name || null,
            email: capturedLead.email || null,
            phone: capturedLead.phone || null,
            company: capturedLead.company || null,
            interest: capturedLead.interest || null,
            source_page: sourcePage || null,
            conversation_summary: messages.slice(-4).map((m: any) => 
              `${m.role}: ${m.content.substring(0, 200)}`
            ).join('\n')
          });

        if (leadError) {
          console.error('❌ Error saving lead:', leadError);
        } else {
          console.log('✅ Lead saved successfully');
        }
      } catch (saveError) {
        console.error('❌ Error saving lead:', saveError);
      }
    }

    // Call OpenAI API
    console.log('📤 Calling OpenAI API...');
    const openaiResponse = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: chatMessages,
        temperature: 0.7,
        max_tokens: 500,
        stream: false,
      }),
    });

    if (!openaiResponse.ok) {
      const errorText = await openaiResponse.text();
      console.error('❌ OpenAI API error:', openaiResponse.status, errorText);
      
      if (openaiResponse.status === 429) {
        return new Response(JSON.stringify({ 
          error: 'Demasiadas solicitudes. Por favor, espera un momento.',
          type: 'rate_limit'
        }), {
          status: 429,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }
      
      throw new Error(`OpenAI API error: ${openaiResponse.status}`);
    }

    const data = await openaiResponse.json();
    const assistantMessage = data.choices?.[0]?.message?.content;

    if (!assistantMessage) {
      throw new Error('No response from OpenAI');
    }

    console.log('✅ SofÍA response generated');

    return new Response(JSON.stringify({
      success: true,
      message: assistantMessage,
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('❌ Error in sofia-chat:', error);
    return new Response(JSON.stringify({ 
      error: error instanceof Error ? error.message : 'Error desconocido',
      success: false,
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
