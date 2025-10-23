import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Priority routes that should be preloaded immediately
 * Based on SEO importance and user navigation patterns
 */
const PRIORITY_ROUTES = [
  '/es',
  '/es/servicios/estrategia-de-marketing-digital-360',
  '/es/servicios/crm-y-automatizacion-de-marketing',
  '/es/servicios/diseno-y-desarrollo-paginas-web',
  '/es/blog',
  '/es/nosotros',
  '/es/contacto',
];

/**
 * Secondary routes to preload when browser is idle
 */
const SECONDARY_ROUTES = [
  '/es/servicios/posicionamiento-web-seo',
  '/es/servicios/branding-e-identidad-de-marca',
  '/es/kit-digital',
  '/es/casos-de-exito',
];

/**
 * Preload route chunks during idle time
 */
const preloadRoute = (path: string) => {
  // Using dynamic import to trigger webpack chunk loading
  // This doesn't execute the module, just loads it into cache
  try {
    // Extract the component name from the path
    const segments = path.split('/').filter(Boolean);
    
    if (segments.length === 1 && segments[0] === 'es') {
      import('@/pages/Index');
    } else if (segments[1] === 'servicios' && segments[2]) {
      const serviceName = segments[2]
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join('');
      // Preload service pages based on existing pages
      switch (segments[2]) {
        case 'diseno-y-desarrollo-paginas-web':
          import('@/pages/DisenoWeb');
          break;
        case 'posicionamiento-web-seo':
          import('@/pages/SeoPositioning');
          break;
        case 'diseno-de-tienda-online':
          import('@/pages/TiendaOnline');
          break;
        case 'crm-y-automatizacion-de-marketing':
        case 'estrategia-de-marketing-digital-360':
        case 'branding-e-identidad-de-marca':
          // These routes exist but may use generic service components
          import('@/pages/Servicios');
          break;
      }
    } else if (segments[1] === 'blog') {
      import('@/pages/Blog');
    } else if (segments[1] === 'nosotros') {
      import('@/pages/Nosotros');
    } else if (segments[1] === 'contacto') {
      import('@/pages/Contacto');
    } else if (segments[1] === 'kit-digital') {
      import('@/pages/KitDigital');
    } else if (segments[1] === 'casos-de-exito') {
      import('@/pages/CasosExito');
    }
  } catch (error) {
    // Silently fail - preloading is an optimization, not critical
    console.debug(`Failed to preload route: ${path}`, error);
  }
};

/**
 * Hook to preload routes based on current location and user behavior
 */
export const useRoutePreloading = () => {
  const location = useLocation();

  useEffect(() => {
    // Preload priority routes immediately when browser is idle
    if ('requestIdleCallback' in window) {
      const idleCallback = window.requestIdleCallback(() => {
        PRIORITY_ROUTES.forEach(route => {
          if (route !== location.pathname) {
            preloadRoute(route);
          }
        });
      }, { timeout: 2000 });

      return () => window.cancelIdleCallback(idleCallback);
    } else {
      // Fallback for browsers without requestIdleCallback
      const timeout = setTimeout(() => {
        PRIORITY_ROUTES.forEach(route => {
          if (route !== location.pathname) {
            preloadRoute(route);
          }
        });
      }, 1000);

      return () => clearTimeout(timeout);
    }
  }, [location.pathname]);

  useEffect(() => {
    // Preload secondary routes after a delay
    const timeout = setTimeout(() => {
      if ('requestIdleCallback' in window) {
        const idleCallback = window.requestIdleCallback(() => {
          SECONDARY_ROUTES.forEach(route => {
            if (route !== location.pathname) {
              preloadRoute(route);
            }
          });
        }, { timeout: 5000 });

        return () => window.cancelIdleCallback(idleCallback);
      }
    }, 3000);

    return () => clearTimeout(timeout);
  }, [location.pathname]);

  // Preload related routes based on current page
  useEffect(() => {
    const currentPath = location.pathname;

    // If on a service page, preload other service pages
    if (currentPath.includes('/servicios/')) {
      const timeout = setTimeout(() => {
        PRIORITY_ROUTES.filter(route => route.includes('/servicios/')).forEach(route => {
          if (route !== currentPath) {
            preloadRoute(route);
          }
        });
      }, 2000);

      return () => clearTimeout(timeout);
    }

    // If on blog, preload popular blog posts
    if (currentPath.includes('/blog') && currentPath !== '/es/blog') {
      const timeout = setTimeout(() => {
        preloadRoute('/es/blog');
        // Could add specific popular blog posts here
      }, 2000);

      return () => clearTimeout(timeout);
    }

    // If on home, preload key landing pages
    if (currentPath === '/es' || currentPath === '/') {
      const timeout = setTimeout(() => {
        import('@/pages/Contacto');
        import('@/pages/Blog');
        import('@/pages/Servicios');
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [location.pathname]);
};

export default useRoutePreloading;
