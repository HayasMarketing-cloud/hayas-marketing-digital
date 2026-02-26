import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const STORAGE_KEY = 'copilot_navigation_history';
const MAX_HISTORY_ITEMS = 10;

interface NavigationEntry {
  path: string;
  timestamp: number;
}

export const useNavigationHistory = () => {
  const location = useLocation();

  useEffect(() => {
    // Don't track admin pages
    if (location.pathname.startsWith('/admin')) return;

    const history = getNavigationHistory();
    
    // Don't add duplicate consecutive entries
    if (history.length > 0 && history[history.length - 1].path === location.pathname) {
      return;
    }

    // Add new entry
    history.push({
      path: location.pathname,
      timestamp: Date.now()
    });

    // Keep only last N entries
    const trimmedHistory = history.slice(-MAX_HISTORY_ITEMS);
    
    // Save to sessionStorage
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(trimmedHistory));
    } catch (e) {
      console.warn('Could not save navigation history:', e);
    }
  }, [location.pathname]);
};

export const getNavigationHistory = (): NavigationEntry[] => {
  try {
    const stored = sessionStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (e) {
    return [];
  }
};

export const getNavigationSummary = (): string => {
  const history = getNavigationHistory();
  
  if (history.length === 0) return '';
  
  // Map paths to readable names
  const pageNames: Record<string, string> = {
    '/es': 'Inicio',
    '/en': 'Home',
    '/es/soluciones/impulsa-tu-marca': 'Impulsa tu Marca (Branding)',
    '/es/soluciones/conecta-con-tus-clientes': 'Conecta con tus Clientes (Marketing)',
    '/es/soluciones/activa-tus-ventas': 'Activa tus Ventas (CRM)',
    '/es/agendar-reunion': 'Agendar Reunión',
    '/es/contacto': 'Contacto',
    '/es/servicios': 'Servicios',
    '/es/nosotros': 'Nosotros',
    '/es/blog': 'Blog',
    '/en/solutions/boost-your-brand': 'Boost Your Brand (Branding)',
    '/en/solutions/connect-with-customers': 'Connect with Customers (Marketing)',
    '/en/solutions/activate-sales': 'Activate Sales (CRM)',
    '/en/schedule-meeting': 'Schedule Meeting',
    '/en/contact': 'Contact',
    '/en/services': 'Services',
    '/en/about-us': 'About Us',
    '/en/blog': 'Blog',
  };

  const visitedPages = history.map(entry => {
    // Try exact match first
    if (pageNames[entry.path]) {
      return pageNames[entry.path];
    }
    // Try to match partial paths for services, blog posts, etc.
    if (entry.path.includes('/servicios/')) return 'Servicio específico';
    if (entry.path.includes('/services/')) return 'Specific service';
    if (entry.path.includes('/blog/')) return 'Artículo del blog';
    if (entry.path.includes('/casos-exito/')) return 'Caso de éxito';
    if (entry.path.includes('/case-studies/')) return 'Case study';
    return entry.path;
  });

  // Remove duplicates while maintaining order
  const uniquePages = [...new Set(visitedPages)];
  
  return uniquePages.join(' → ');
};

export const clearNavigationHistory = () => {
  try {
    sessionStorage.removeItem(STORAGE_KEY);
  } catch (e) {
    console.warn('Could not clear navigation history:', e);
  }
};
