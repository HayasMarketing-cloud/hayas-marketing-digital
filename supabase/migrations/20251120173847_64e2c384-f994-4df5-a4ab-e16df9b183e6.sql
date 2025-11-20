-- Fix security warnings: Add search_path to functions

-- Recreate calculate_seo_priority with search_path
CREATE OR REPLACE FUNCTION public.calculate_seo_priority(page_row public.seo_pages)
RETURNS INTEGER
LANGUAGE plpgsql
STABLE
SECURITY DEFINER
SET search_path = public
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

-- Recreate update_seo_priority trigger function with search_path
CREATE OR REPLACE FUNCTION public.update_seo_priority()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  NEW.priority_score := public.calculate_seo_priority(NEW);
  RETURN NEW;
END;
$$;