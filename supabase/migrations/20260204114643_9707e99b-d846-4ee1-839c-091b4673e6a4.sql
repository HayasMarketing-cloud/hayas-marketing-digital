-- Add explicit SELECT policy to deny all reads on rate_limit_log table
-- This ensures no one can read rate limiting data which could reveal system architecture
CREATE POLICY "No one can read rate limits" 
ON public.rate_limit_log 
FOR SELECT 
USING (false);