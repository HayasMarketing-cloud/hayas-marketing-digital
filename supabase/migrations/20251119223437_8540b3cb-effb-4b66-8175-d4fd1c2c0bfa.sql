-- Fase 0: Sistema SEO Bilingüe
-- 1. Eliminar constraint UNIQUE en path (permite duplicados ES/EN)
ALTER TABLE public.seo_pages 
DROP CONSTRAINT IF EXISTS seo_pages_path_key;

-- 2. Crear constraint UNIQUE compuesto (path + in_language)
ALTER TABLE public.seo_pages 
ADD CONSTRAINT seo_pages_path_language_unique 
UNIQUE (path, in_language);

-- 3. Crear índice para mejorar queries por idioma
CREATE INDEX IF NOT EXISTS idx_seo_pages_language ON public.seo_pages(in_language);

-- 4. Actualizar valores por defecto
ALTER TABLE public.seo_pages 
ALTER COLUMN in_language SET DEFAULT 'es-ES';

-- 5. Añadir columna para gestionar traducciones relacionadas
ALTER TABLE public.seo_pages 
ADD COLUMN IF NOT EXISTS translation_of UUID REFERENCES public.seo_pages(id) ON DELETE SET NULL;

COMMENT ON COLUMN public.seo_pages.translation_of IS 'ID de la versión en otro idioma de esta página';