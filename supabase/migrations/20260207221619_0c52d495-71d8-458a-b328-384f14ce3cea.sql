-- Add unique constraint for path + in_language to enable proper upsert
CREATE UNIQUE INDEX IF NOT EXISTS seo_pages_path_in_language_unique 
ON public.seo_pages (path, in_language);