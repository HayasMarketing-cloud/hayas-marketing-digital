-- Crear tabla principal para datos SEO editables
CREATE TABLE IF NOT EXISTS public.seo_pages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  path text UNIQUE NOT NULL,
  
  -- Meta tags básicos
  title text NOT NULL,
  description text NOT NULL,
  
  -- Estructura de headings
  h1 text NOT NULL,
  h2_primary text,
  h2_secondary jsonb DEFAULT '[]'::jsonb,
  h3_strategic jsonb DEFAULT '[]'::jsonb,
  
  -- Keywords y canonicals
  keywords jsonb DEFAULT '[]'::jsonb,
  canonical text NOT NULL,
  robots text DEFAULT 'index,follow',
  
  -- Open Graph
  og_image text,
  og_type text DEFAULT 'website',
  
  -- Schema.org
  schema_type text DEFAULT 'WebPage',
  category text DEFAULT 'main',
  about jsonb DEFAULT '[]'::jsonb,
  mentions jsonb DEFAULT '[]'::jsonb,
  
  -- FAQs y Schema adicional
  faqs jsonb DEFAULT '[]'::jsonb,
  additional_schema jsonb,
  
  -- Idioma y relaciones
  in_language text DEFAULT 'es-ES',
  pillar_page text,
  related_pages jsonb DEFAULT '[]'::jsonb,
  
  -- Metadatos de gestión
  is_indexable boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Índices para búsqueda rápida
CREATE INDEX IF NOT EXISTS idx_seo_pages_path ON public.seo_pages(path);
CREATE INDEX IF NOT EXISTS idx_seo_pages_category ON public.seo_pages(category);
CREATE INDEX IF NOT EXISTS idx_seo_pages_is_indexable ON public.seo_pages(is_indexable);

-- Habilitar RLS
ALTER TABLE public.seo_pages ENABLE ROW LEVEL SECURITY;

-- Políticas RLS públicas (temporal para desarrollo)
CREATE POLICY "Anyone can read SEO data"
ON public.seo_pages FOR SELECT
TO public
USING (true);

CREATE POLICY "Anyone can insert SEO data"
ON public.seo_pages FOR INSERT
TO public
WITH CHECK (true);

CREATE POLICY "Anyone can update SEO data"
ON public.seo_pages FOR UPDATE
TO public
USING (true);

CREATE POLICY "Anyone can delete SEO data"
ON public.seo_pages FOR DELETE
TO public
USING (true);

-- Trigger para actualizar updated_at automáticamente
CREATE TRIGGER set_seo_pages_updated_at
BEFORE UPDATE ON public.seo_pages
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();