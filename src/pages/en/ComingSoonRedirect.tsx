import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

/**
 * Redirect helper: any /en/* path that has no real page or DB translation
 * is funneled to the canonical /en/coming-soon URL with ?from= preserved.
 *
 * Why: prevents Google from indexing dozens of noindex placeholders.
 * Instead they see a SPA-level redirect to a single Coming Soon URL,
 * which gets reported in GSC as "Page with redirect" (clean signal)
 * and the originals drop out of the noindex bucket.
 */
const ComingSoonRedirect: React.FC = () => {
  const location = useLocation();
  const from = encodeURIComponent(location.pathname + location.search);
  return <Navigate to={`/en/coming-soon?from=${from}`} replace />;
};

export default ComingSoonRedirect;
