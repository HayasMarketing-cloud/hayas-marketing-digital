import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Componente de desarrollo que valida enlaces en el DOM
 * Detecta rutas internas sin prefijo de idioma (/es o /en)
 * Solo activo en modo desarrollo
 */
const RouteValidator = () => {
  const location = useLocation();

  useEffect(() => {
    // Solo ejecutar en desarrollo
    if (import.meta.env.PROD) return;

    const validateLinks = () => {
      const links = document.querySelectorAll('a[href]');
      const invalidLinks: { href: string; element: HTMLAnchorElement; context: string }[] = [];

      // Patrones que NO requieren prefijo de idioma
      const exemptPatterns = [
        /^https?:\/\//, // URLs externas
        /^mailto:/, // Emails
        /^tel:/, // Teléfonos
        /^#/, // Anchors
        /^\/admin/, // Rutas de admin
        /^\/api/, // APIs
        /^\/auth/, // Auth sin idioma (legacy)
        /^\/(es|en)/, // Ya tiene prefijo correcto
        /^javascript:/, // JavaScript inline
        /^data:/, // Data URLs
      ];

      links.forEach((link) => {
        const anchor = link as HTMLAnchorElement;
        const href = anchor.getAttribute('href');

        if (!href) return;

        // Verificar si está exento
        const isExempt = exemptPatterns.some((pattern) => pattern.test(href));
        if (isExempt) return;

        // Si empieza con / pero no tiene prefijo de idioma, es inválido
        if (href.startsWith('/') && !href.match(/^\/(es|en)(\/|$|#)/)) {
          // Obtener contexto del enlace
          const parentText = anchor.closest('nav, header, footer, section')?.className || 'unknown';
          const linkText = anchor.textContent?.trim().slice(0, 30) || 'no text';

          invalidLinks.push({
            href,
            element: anchor,
            context: `"${linkText}" in ${parentText}`,
          });
        }
      });

      if (invalidLinks.length > 0) {
        console.group(
          `%c⚠️ RouteValidator: ${invalidLinks.length} enlace(s) sin prefijo de idioma`,
          'color: #ff9800; font-weight: bold;'
        );
        
        invalidLinks.forEach(({ href, context }) => {
          console.warn(
            `%c${href}%c → ${context}`,
            'color: #f44336; font-weight: bold;',
            'color: #666;'
          );
        });

        console.log(
          '%c💡 Usa useLocalizedRoutes() para generar rutas correctas',
          'color: #2196f3; font-style: italic;'
        );
        
        console.groupEnd();
      }
    };

    // Validar después de que el DOM se renderice
    const timeoutId = setTimeout(validateLinks, 500);

    // También validar cuando cambia la ruta
    return () => clearTimeout(timeoutId);
  }, [location.pathname]);

  // Este componente no renderiza nada
  return null;
};

export default RouteValidator;
