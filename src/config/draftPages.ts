/**
 * Configuration for pages in draft mode
 * Add URLs here to protect them from public access while allowing development
 */
export const DRAFT_PAGES = [
  '/hayas-crm',
  // Add more draft pages here as needed
  // '/servicios/nueva-funcionalidad',
  // '/otra-pagina-en-desarrollo'
];

/**
 * Check if current page is in draft mode
 */
export const isDraftPage = (pathname: string): boolean => {
  return DRAFT_PAGES.includes(pathname);
};

/**
 * Check if user has developer access
 * This checks for dev parameter or localhost environment
 */
export const hasDeveloperAccess = (): boolean => {
  const urlParams = new URLSearchParams(window.location.search);
  const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
  const hasDevParam = urlParams.get('dev') === 'true';
  
  return isLocalhost || hasDevParam;
};