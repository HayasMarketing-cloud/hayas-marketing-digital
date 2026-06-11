-- Explicit deny policies for system-only writes (service role bypasses RLS)

-- seo_alerts: deny INSERT to non-service roles (admin UPDATE/DELETE policies remain)
CREATE POLICY "Deny inserts from clients" ON public.seo_alerts
  FOR INSERT TO authenticated, anon
  WITH CHECK (false);

-- seo_history: deny INSERT/UPDATE/DELETE to non-service roles
CREATE POLICY "Deny inserts from clients" ON public.seo_history
  FOR INSERT TO authenticated, anon
  WITH CHECK (false);
CREATE POLICY "Deny updates from clients" ON public.seo_history
  FOR UPDATE TO authenticated, anon
  USING (false) WITH CHECK (false);
CREATE POLICY "Deny deletes from clients" ON public.seo_history
  FOR DELETE TO authenticated, anon
  USING (false);

-- redeploy_log: deny INSERT/UPDATE/DELETE to non-service roles
CREATE POLICY "Deny inserts from clients" ON public.redeploy_log
  FOR INSERT TO authenticated, anon
  WITH CHECK (false);
CREATE POLICY "Deny updates from clients" ON public.redeploy_log
  FOR UPDATE TO authenticated, anon
  USING (false) WITH CHECK (false);
CREATE POLICY "Deny deletes from clients" ON public.redeploy_log
  FOR DELETE TO authenticated, anon
  USING (false);
