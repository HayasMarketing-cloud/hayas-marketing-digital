import { useEffect } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { getRedirectForPath } from '@/config/redirectsConfig';

/**
 * Componente que intercepta la navegación de React Router y aplica redirecciones
 * Se renderiza antes de cualquier componente de página para procesar redirects
 * 
 * Características:
 * - Aplica redirecciones 301 (permanentes) usando Navigate replace
 * - Aplica redirecciones 404 (contenido inexistente) enviando a /es/404
 * - Funciona en cualquier plataforma (no depende de configuración del hosting)
 * - Tipado con TypeScript para prevenir errores
 */
export const RedirectManager: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    try {
      const redirect = getRedirectForPath(location.pathname);
      if (redirect) {
        console.log(
          `[RedirectManager] ${redirect.type} redirect: ${redirect.source} → ${redirect.destination}`,
          `(${redirect.category})`
        );
      }
    } catch (error) {
      console.error('[RedirectManager] Error processing redirect:', error);
    }
  }, [location.pathname]);

  try {
    const redirect = getRedirectForPath(location.pathname);

    // Si hay un redirect configurado, aplicarlo
    if (redirect) {
      if (redirect.type === '301') {
        // Redirección permanente - usar replace para no agregar al historial
        return <Navigate to={redirect.destination} replace />;
      }
      
      if (redirect.type === '404') {
        // Contenido inexistente - enviar a página 404 dedicada
        return <Navigate to="/es/404" replace />;
      }
    }
  } catch (error) {
    console.error('[RedirectManager] Critical error:', error);
    // En caso de error crítico, permitir que el routing normal continúe
    return null;
  }

  // No hay redirect, continuar con el routing normal
  return null;
};
