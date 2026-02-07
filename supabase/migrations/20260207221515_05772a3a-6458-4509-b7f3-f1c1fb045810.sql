ALTER TABLE seo_pages 
ADD CONSTRAINT valid_language_format 
CHECK (in_language IN ('es-ES', 'en-US'));