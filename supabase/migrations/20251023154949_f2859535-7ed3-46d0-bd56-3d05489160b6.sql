-- Add missing UPDATE and DELETE policies for payments table
-- This prevents accidental privilege escalation and makes the security model explicit

-- Prevent all client updates (only service role via webhooks can update)
CREATE POLICY "System manages payment updates"
ON payments FOR UPDATE
TO authenticated
USING (false);

-- Prevent all deletions
CREATE POLICY "Payments cannot be deleted"
ON payments FOR DELETE
TO authenticated
USING (false);