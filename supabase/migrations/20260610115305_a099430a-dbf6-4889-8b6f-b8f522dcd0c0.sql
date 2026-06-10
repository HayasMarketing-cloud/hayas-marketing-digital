DROP POLICY IF EXISTS "Public can insert leads" ON public.sofia_leads;

CREATE POLICY "Admins can read web vitals"
ON public.web_vitals
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

REVOKE EXECUTE ON FUNCTION public.update_updated_at_column() FROM PUBLIC, anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) FROM PUBLIC, anon;
GRANT  EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) TO authenticated, service_role;

REVOKE EXECUTE ON FUNCTION public.calculate_seo_priority(public.seo_pages) FROM PUBLIC, anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.update_seo_priority() FROM PUBLIC, anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.cleanup_rate_limit_logs() FROM PUBLIC, anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.cleanup_old_seo_history() FROM PUBLIC, anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.cleanup_old_web_vitals() FROM PUBLIC, anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.notify_redeploy_on_seo_change() FROM PUBLIC, anon, authenticated;