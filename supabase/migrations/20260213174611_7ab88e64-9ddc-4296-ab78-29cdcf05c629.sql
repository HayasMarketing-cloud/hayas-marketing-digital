
-- Create table for caching DataForSEO indexation checks
CREATE TABLE public.indexation_checks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  page_path TEXT NOT NULL,
  is_indexed BOOLEAN,
  google_title TEXT,
  google_snippet TEXT,
  google_position INTEGER,
  google_cache_date TIMESTAMP WITH TIME ZONE,
  checked_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  raw_response JSONB
);

-- Unique index on page_path to avoid duplicates
CREATE UNIQUE INDEX idx_indexation_checks_page_path ON public.indexation_checks (page_path);

-- Enable RLS
ALTER TABLE public.indexation_checks ENABLE ROW LEVEL SECURITY;

-- Admins can do everything
CREATE POLICY "Admins can manage indexation checks"
ON public.indexation_checks
FOR ALL
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));
