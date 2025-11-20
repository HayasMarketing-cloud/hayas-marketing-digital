-- Table for SEO alerts
CREATE TABLE IF NOT EXISTS public.seo_alerts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  alert_type TEXT NOT NULL CHECK (alert_type IN ('new_page_no_seo', 'optimization_lost', 'missing_fields_increased')),
  severity TEXT NOT NULL CHECK (severity IN ('info', 'warning', 'critical')) DEFAULT 'info',
  page_path TEXT NOT NULL,
  message TEXT NOT NULL,
  details JSONB DEFAULT '{}'::jsonb,
  is_read BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  resolved_at TIMESTAMP WITH TIME ZONE
);

-- Index for faster queries
CREATE INDEX idx_seo_alerts_created_at ON public.seo_alerts(created_at DESC);
CREATE INDEX idx_seo_alerts_is_read ON public.seo_alerts(is_read) WHERE is_read = false;
CREATE INDEX idx_seo_alerts_type ON public.seo_alerts(alert_type);

-- Table for SEO history snapshots
CREATE TABLE IF NOT EXISTS public.seo_history (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  page_path TEXT NOT NULL,
  seo_optimized BOOLEAN DEFAULT false,
  missing_fields_count INTEGER DEFAULT 0,
  missing_fields JSONB DEFAULT '[]'::jsonb,
  status TEXT,
  snapshot_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Index for history queries
CREATE INDEX idx_seo_history_path_snapshot ON public.seo_history(page_path, snapshot_at DESC);
CREATE INDEX idx_seo_history_snapshot_at ON public.seo_history(snapshot_at DESC);

-- Enable RLS on both tables
ALTER TABLE public.seo_alerts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.seo_history ENABLE ROW LEVEL SECURITY;

-- RLS Policies for seo_alerts
CREATE POLICY "Admins can view all alerts"
  ON public.seo_alerts
  FOR SELECT
  USING (has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update alerts"
  ON public.seo_alerts
  FOR UPDATE
  USING (has_role(auth.uid(), 'admin'));

CREATE POLICY "System can insert alerts"
  ON public.seo_alerts
  FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Admins can delete alerts"
  ON public.seo_alerts
  FOR DELETE
  USING (has_role(auth.uid(), 'admin'));

-- RLS Policies for seo_history
CREATE POLICY "Admins can view history"
  ON public.seo_history
  FOR SELECT
  USING (has_role(auth.uid(), 'admin'));

CREATE POLICY "System can insert history"
  ON public.seo_history
  FOR INSERT
  WITH CHECK (true);

-- Function to clean old history (keep last 30 days)
CREATE OR REPLACE FUNCTION public.cleanup_old_seo_history()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  DELETE FROM public.seo_history
  WHERE snapshot_at < NOW() - INTERVAL '30 days';
END;
$$;

COMMENT ON TABLE public.seo_alerts IS 'Stores SEO monitoring alerts for pages that lost optimization or need attention';
COMMENT ON TABLE public.seo_history IS 'Historical snapshots of SEO status for change detection';
