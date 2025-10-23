import { useRoutePreloading } from '@/hooks/useRoutePreloading';

/**
 * Component wrapper to enable route preloading
 * Must be placed inside BrowserRouter
 */
const RoutePreloader = () => {
  useRoutePreloading();
  return null;
};

export default RoutePreloader;
