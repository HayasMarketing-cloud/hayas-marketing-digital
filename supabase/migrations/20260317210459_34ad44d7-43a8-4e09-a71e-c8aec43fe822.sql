
-- Update SENSE page SEO data (Spanish)
UPDATE seo_pages SET
  title = 'SENSE: Tu Sistema de Inteligencia de Marketing | Hayas Marketing',
  description = 'SENSE es un Marketing Operating System con 6 módulos de inteligencia conectados. Transforma señales de mercado en dirección estratégica y ejecución coordinada. Framework LOOP: Listen, Observe, Orient, Plan.',
  h1 = 'SENSE: Tu sistema de Inteligencia de Marketing',
  h2_primary = '6 capas de inteligencia conectadas',
  h2_secondary = '["Un sistema operativo de marketing, no otra herramienta más", "IA que entiende tu negocio", "Conectado con las herramientas que importan", "Diseñado para quien toma decisiones de marketing", "El framework LOOP: de la escucha a la acción", "Arquitectura moderna, sin deuda técnica"]'::jsonb,
  keywords = '["SENSE marketing operating system", "plataforma inteligencia marketing", "sistema operativo marketing", "inteligencia de mercado IA", "marketing intelligence platform", "framework LOOP marketing", "brand perception AI audit", "content studio IA", "market reports IA", "automatización marketing estratégico"]'::jsonb,
  schema_type = 'SoftwareApplication',
  about = '[{"@type": "SoftwareApplication", "name": "SENSE", "applicationCategory": "Marketing Operating System"}, {"@type": "Thing", "name": "Marketing Intelligence", "sameAs": "https://www.wikidata.org/wiki/Q1323528"}, {"@type": "Thing", "name": "Artificial Intelligence", "sameAs": "https://www.wikidata.org/wiki/Q11660"}]'::jsonb,
  mentions = '[{"@type": "Organization", "name": "HubSpot", "sameAs": "https://www.wikidata.org/wiki/Q5929009"}, {"@type": "Organization", "name": "Google", "sameAs": "https://www.wikidata.org/wiki/Q95"}, {"@type": "Organization", "name": "Perplexity AI"}, {"@type": "Organization", "name": "OpenAI", "sameAs": "https://www.wikidata.org/wiki/Q21708200"}]'::jsonb,
  faqs = '[{"question": "¿Qué diferencia a SENSE de un dashboard de marketing?", "answer": "SENSE no solo muestra datos — los interpreta. Conecta señales de mercado con tu identidad estratégica para generar dirección y contenido accionable."}, {"question": "¿Es un producto SaaS compartido?", "answer": "No. Cada instancia de SENSE es privada y personalizada para tu empresa. Tus datos, tu marca, tu dominio."}, {"question": "¿Necesito un equipo técnico para usarlo?", "answer": "No. SENSE está diseñado para equipos de marketing. La configuración inicial la hacemos nosotros, y el sistema está pensado para uso diario sin conocimiento técnico."}, {"question": "¿Cómo funciona la IA?", "answer": "SENSE utiliza múltiples modelos de IA (Gemini, GPT, Perplexity) según la tarea. Toda la generación está contextualizada con tu Brain (identidad, audiencias, diferenciadores), por lo que los outputs son específicos para tu negocio."}, {"question": "¿Puedo integrar mi CRM actual?", "answer": "Sí. SENSE tiene integración nativa con HubSpot y capacidad de conexión con otros CRMs. Los datos de tu pipeline se cruzan con inteligencia de mercado para ABM y scoring."}, {"question": "¿Cuánto tarda la implementación?", "answer": "4-6 semanas para el sistema base. El Brain se configura en la primera semana, y los módulos de inteligencia empiezan a generar valor desde el día uno."}]'::jsonb,
  strategic_importance = 'critical',
  optimization_priority = 95,
  updated_at = now()
WHERE id = 'a9bda314-7573-41b5-8edd-732d0bc25c2a';

-- Update SENSE page SEO data (English)
UPDATE seo_pages SET
  title = 'SENSE: Your Marketing Intelligence System | Hayas Marketing',
  description = 'SENSE is a Marketing Operating System with 6 connected intelligence modules. Transform market signals into strategic direction and coordinated execution. LOOP framework: Listen, Observe, Orient, Plan.',
  h1 = 'SENSE: Your Marketing Intelligence System',
  h2_primary = '6 connected intelligence layers',
  h2_secondary = '["A marketing operating system, not another tool", "AI that understands your business", "Connected with the tools that matter", "Designed for marketing decision-makers", "The LOOP framework: from listening to action", "Modern architecture, zero tech debt"]'::jsonb,
  keywords = '["SENSE marketing operating system", "marketing intelligence platform", "marketing operating system", "AI market intelligence", "LOOP framework marketing", "brand perception AI audit", "content studio AI", "market reports AI", "strategic marketing automation"]'::jsonb,
  schema_type = 'SoftwareApplication',
  about = '[{"@type": "SoftwareApplication", "name": "SENSE", "applicationCategory": "Marketing Operating System"}, {"@type": "Thing", "name": "Marketing Intelligence", "sameAs": "https://www.wikidata.org/wiki/Q1323528"}, {"@type": "Thing", "name": "Artificial Intelligence", "sameAs": "https://www.wikidata.org/wiki/Q11660"}]'::jsonb,
  mentions = '[{"@type": "Organization", "name": "HubSpot", "sameAs": "https://www.wikidata.org/wiki/Q5929009"}, {"@type": "Organization", "name": "Google", "sameAs": "https://www.wikidata.org/wiki/Q95"}, {"@type": "Organization", "name": "Perplexity AI"}, {"@type": "Organization", "name": "OpenAI", "sameAs": "https://www.wikidata.org/wiki/Q21708200"}]'::jsonb,
  faqs = '[{"question": "What makes SENSE different from a marketing dashboard?", "answer": "SENSE doesn''t just show data — it interprets it. It connects market signals with your strategic identity to generate direction and actionable content."}, {"question": "Is it a shared SaaS product?", "answer": "No. Each SENSE instance is private and customized for your company. Your data, your brand, your domain."}, {"question": "Do I need a technical team to use it?", "answer": "No. SENSE is designed for marketing teams. We handle the initial setup, and the system is built for daily use without technical knowledge."}, {"question": "How does the AI work?", "answer": "SENSE uses multiple AI models (Gemini, GPT, Perplexity) depending on the task. All generation is contextualized with your Brain (identity, audiences, differentiators), so outputs are specific to your business."}, {"question": "Can I integrate my existing CRM?", "answer": "Yes. SENSE has native integration with HubSpot and the ability to connect with other CRMs. Your pipeline data is cross-referenced with market intelligence for ABM and scoring."}, {"question": "How long does implementation take?", "answer": "4-6 weeks for the base system. The Brain is configured in the first week, and the intelligence modules start generating value from day one."}]'::jsonb,
  strategic_importance = 'critical',
  optimization_priority = 95,
  updated_at = now()
WHERE id = 'de39733c-aae8-4534-9d5c-4155ef335b57';
