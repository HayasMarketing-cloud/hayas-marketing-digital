-- Add columns to support full-body translations stored in DB
ALTER TABLE public.seo_pages
  ADD COLUMN IF NOT EXISTS body_content_html TEXT,
  ADD COLUMN IF NOT EXISTS body_content_source_hash TEXT,
  ADD COLUMN IF NOT EXISTS body_translated_at TIMESTAMPTZ,
  ADD COLUMN IF NOT EXISTS translation_status TEXT
    CHECK (translation_status IN ('pending','metadata_only','translated','failed'))
    DEFAULT 'pending';

-- Backfill: rows that already have an EN translation but no body are 'metadata_only'
UPDATE public.seo_pages
SET translation_status = 'metadata_only'
WHERE in_language = 'en-US'
  AND translation_status IS NULL
  AND body_content_html IS NULL;

-- Index to resolve EN <-> ES alternates quickly
CREATE INDEX IF NOT EXISTS idx_seo_pages_translation_of_lang
  ON public.seo_pages (translation_of, in_language);

-- Index to filter by translation status for the admin dashboard
CREATE INDEX IF NOT EXISTS idx_seo_pages_translation_status
  ON public.seo_pages (translation_status)
  WHERE translation_status IS NOT NULL;