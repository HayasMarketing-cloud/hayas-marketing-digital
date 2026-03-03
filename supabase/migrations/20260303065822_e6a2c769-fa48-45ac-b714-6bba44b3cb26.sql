
-- Table to store Core Web Vitals metrics from real users
CREATE TABLE public.web_vitals (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  metric_name text NOT NULL,          -- LCP, FID, CLS, INP, FCP, TTFB
  metric_value double precision NOT NULL,
  metric_rating text,                 -- good, needs-improvement, poor
  metric_id text,                     -- unique ID from web-vitals lib
  page_path text NOT NULL,
  navigation_type text,               -- navigate, reload, back-forward, prerender
  user_agent text,
  connection_type text,               -- 4g, 3g, etc.
  device_memory double precision,     -- GB of RAM
  created_at timestamptz NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.web_vitals ENABLE ROW LEVEL SECURITY;

-- Only system/edge functions can insert (via service role)
-- No one reads via client - admin reads via edge function or direct query
CREATE POLICY "No public read on web_vitals"
  ON public.web_vitals FOR SELECT
  USING (false);

CREATE POLICY "No public insert on web_vitals"
  ON public.web_vitals FOR INSERT
  WITH CHECK (false);

CREATE POLICY "No public update on web_vitals"
  ON public.web_vitals FOR UPDATE
  USING (false);

CREATE POLICY "No public delete on web_vitals"
  ON public.web_vitals FOR DELETE
  USING (false);

-- Index for querying by metric and time
CREATE INDEX idx_web_vitals_metric_created ON public.web_vitals (metric_name, created_at DESC);
CREATE INDEX idx_web_vitals_page_path ON public.web_vitals (page_path, created_at DESC);

-- Auto-cleanup: keep only 90 days of data
CREATE OR REPLACE FUNCTION public.cleanup_old_web_vitals()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = 'public'
AS $$
BEGIN
  DELETE FROM public.web_vitals
  WHERE created_at < NOW() - INTERVAL '90 days';
END;
$$;
