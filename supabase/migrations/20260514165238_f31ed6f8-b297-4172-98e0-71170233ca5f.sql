-- Enable pg_net for HTTP calls from Postgres
CREATE EXTENSION IF NOT EXISTS pg_net WITH SCHEMA extensions;

-- Log table for redeploys (also enforces cooldown)
CREATE TABLE IF NOT EXISTS public.redeploy_log (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  triggered_at timestamptz NOT NULL DEFAULT now(),
  commit_sha text,
  source text DEFAULT 'seo_pages_trigger'
);

ALTER TABLE public.redeploy_log ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admins can view redeploy log"
  ON public.redeploy_log FOR SELECT
  USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "System inserts redeploy log"
  ON public.redeploy_log FOR INSERT
  WITH CHECK (true);

CREATE INDEX IF NOT EXISTS idx_redeploy_log_triggered_at
  ON public.redeploy_log(triggered_at DESC);

-- Trigger function: calls the edge function asynchronously via pg_net
CREATE OR REPLACE FUNCTION public.notify_redeploy_on_seo_change()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, extensions
AS $$
DECLARE
  function_url text := 'https://pmldrjkmkjwbvaudjjye.supabase.co/functions/v1/trigger-redeploy';
  anon_key text := 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBtbGRyamtta2p3YnZhdWRqanllIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg1NzQ5NDEsImV4cCI6MjA3NDE1MDk0MX0.Y1ZrDGEw9HUSuWncHYNxxAGhxlqQx-LPa0Sm0aoDLnU';
BEGIN
  PERFORM net.http_post(
    url := function_url,
    headers := jsonb_build_object(
      'Content-Type', 'application/json',
      'apikey', anon_key,
      'Authorization', 'Bearer ' || anon_key
    ),
    body := jsonb_build_object('path', NEW.path, 'event', TG_OP)
  );
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS trg_seo_pages_redeploy ON public.seo_pages;

CREATE TRIGGER trg_seo_pages_redeploy
  AFTER INSERT OR UPDATE ON public.seo_pages
  FOR EACH ROW
  EXECUTE FUNCTION public.notify_redeploy_on_seo_change();