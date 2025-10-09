-- Secure payments table: Only allow system (service role) to insert payment records
-- This prevents users from creating fake payment records

-- Add a restrictive INSERT policy that blocks regular authenticated users
-- Only service role (used by webhooks and edge functions) can insert
CREATE POLICY "Only system can create payment records"
ON public.payments
FOR INSERT
TO authenticated
WITH CHECK (false);

-- Add a comment to document the security model
COMMENT ON TABLE public.payments IS 'Payment records are created exclusively by Stripe webhooks and edge functions using service role authentication. Direct user insertions are blocked by RLS.';

-- Ensure the table has RLS enabled (it already should be, but being explicit)
ALTER TABLE public.payments ENABLE ROW LEVEL SECURITY;