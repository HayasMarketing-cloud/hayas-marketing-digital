-- Create rate limiting table for edge function protection
CREATE TABLE IF NOT EXISTS public.rate_limit_log (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  identifier TEXT NOT NULL,
  endpoint TEXT NOT NULL,
  request_count INTEGER DEFAULT 1,
  window_start TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create index for efficient rate limit lookups
CREATE INDEX idx_rate_limit_identifier_endpoint 
ON public.rate_limit_log(identifier, endpoint, window_start);

-- Enable RLS
ALTER TABLE public.rate_limit_log ENABLE ROW LEVEL SECURITY;

-- Policy: Only system can manage rate limit logs
CREATE POLICY "System manages rate limits"
ON public.rate_limit_log
FOR ALL
USING (false)
WITH CHECK (false);

-- Create function to clean old rate limit records (older than 24 hours)
CREATE OR REPLACE FUNCTION public.cleanup_rate_limit_logs()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  DELETE FROM public.rate_limit_log
  WHERE created_at < NOW() - INTERVAL '24 hours';
END;
$$;