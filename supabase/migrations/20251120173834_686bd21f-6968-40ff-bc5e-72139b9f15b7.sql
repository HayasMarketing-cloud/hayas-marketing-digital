-- Add priority and metrics fields to seo_pages table
ALTER TABLE public.seo_pages 
ADD COLUMN IF NOT EXISTS priority_score INTEGER DEFAULT 0,
ADD COLUMN IF NOT EXISTS strategic_importance TEXT DEFAULT 'medium' CHECK (strategic_importance IN ('low', 'medium', 'high', 'critical')),
ADD COLUMN IF NOT EXISTS estimated_traffic INTEGER DEFAULT 0,
ADD COLUMN IF NOT EXISTS last_optimized_at TIMESTAMP WITH TIME ZONE,
ADD COLUMN IF NOT EXISTS optimization_priority INTEGER DEFAULT 50;

-- Create index for priority queries
CREATE INDEX IF NOT EXISTS idx_seo_pages_priority ON public.seo_pages(priority_score DESC);
CREATE INDEX IF NOT EXISTS idx_seo_pages_strategic ON public.seo_pages(strategic_importance, priority_score DESC);

-- Function to calculate priority score automatically
CREATE OR REPLACE FUNCTION public.calculate_seo_priority(page_row public.seo_pages)
RETURNS INTEGER
LANGUAGE plpgsql
STABLE
AS $$
DECLARE
  score INTEGER := 0;
  category_weight INTEGER := 0;
  freshness_bonus INTEGER := 0;
  traffic_weight INTEGER := 0;
BEGIN
  -- Category-based scoring (0-40 points)
  category_weight := CASE page_row.category
    WHEN 'main' THEN 40        -- Homepage, main pages
    WHEN 'service' THEN 35     -- Service pages
    WHEN 'solution' THEN 30    -- Solution pages
    WHEN 'tool' THEN 25        -- Tool pages
    WHEN 'case-study' THEN 20  -- Case studies
    WHEN 'blog' THEN 15        -- Blog posts
    ELSE 10
  END;
  
  -- Strategic importance (0-30 points)
  score := score + CASE page_row.strategic_importance
    WHEN 'critical' THEN 30
    WHEN 'high' THEN 20
    WHEN 'medium' THEN 10
    ELSE 5
  END;
  
  -- Traffic estimation (0-20 points)
  traffic_weight := LEAST(page_row.estimated_traffic / 50, 20);
  
  -- Freshness bonus (0-10 points) - pages never optimized get priority
  IF page_row.last_optimized_at IS NULL THEN
    freshness_bonus := 10;
  ELSIF page_row.last_optimized_at < NOW() - INTERVAL '90 days' THEN
    freshness_bonus := 5;
  END IF;
  
  -- Calculate total score (max 100)
  score := category_weight + score + traffic_weight + freshness_bonus;
  
  RETURN LEAST(score, 100);
END;
$$;

-- Trigger to auto-calculate priority on insert/update
CREATE OR REPLACE FUNCTION public.update_seo_priority()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
BEGIN
  NEW.priority_score := public.calculate_seo_priority(NEW);
  RETURN NEW;
END;
$$;

CREATE TRIGGER trigger_update_seo_priority
  BEFORE INSERT OR UPDATE ON public.seo_pages
  FOR EACH ROW
  EXECUTE FUNCTION public.update_seo_priority();

-- Update existing rows with calculated priority
UPDATE public.seo_pages
SET priority_score = public.calculate_seo_priority(seo_pages.*);

COMMENT ON COLUMN public.seo_pages.priority_score IS 'Auto-calculated priority score (0-100) based on category, traffic, and strategic importance';
COMMENT ON COLUMN public.seo_pages.strategic_importance IS 'Manual strategic importance flag: low, medium, high, critical';
COMMENT ON COLUMN public.seo_pages.estimated_traffic IS 'Estimated monthly traffic/views for this page';
COMMENT ON COLUMN public.seo_pages.optimization_priority IS 'User-adjustable optimization priority (1-100)';
COMMENT ON FUNCTION public.calculate_seo_priority IS 'Automatically calculates priority score based on multiple factors';