/**
 * Utility to programmatically update routeRegistryData.ts
 * Used to auto-register new translated routes
 */

import { RouteDefinition } from './routeRegistry';

interface RouteRegistryUpdate {
  newRoute: RouteDefinition;
  content: string;
}

/**
 * Generates the updated content for routeRegistryData.ts with a new route
 */
export const generateUpdatedRegistryContent = (
  currentContent: string,
  newRoute: RouteDefinition
): string => {
  // Find the closing bracket of the registeredRoutes array
  const arrayClosingIndex = currentContent.lastIndexOf('];');
  
  if (arrayClosingIndex === -1) {
    throw new Error('Could not find registeredRoutes array closing bracket');
  }

  // Create the new route entry
  const newRouteEntry = `  { path: '${newRoute.path}', category: '${newRoute.category}', isIndexable: ${newRoute.isIndexable}, priority: ${newRoute.priority}, changefreq: '${newRoute.changefreq}', isDynamic: ${newRoute.isDynamic}, isLegacy: ${newRoute.isLegacy} },\n`;

  // Check if route already exists
  if (currentContent.includes(`path: '${newRoute.path}'`)) {
    console.log(`Route ${newRoute.path} already exists in registry`);
    return currentContent;
  }

  // Insert the new route before the closing bracket
  const beforeClosing = currentContent.substring(0, arrayClosingIndex);
  const afterClosing = currentContent.substring(arrayClosingIndex);

  return beforeClosing + newRouteEntry + afterClosing;
};

/**
 * Validates if a route should be added to the registry
 */
export const shouldAddToRegistry = (path: string, existingContent: string): boolean => {
  // Don't add if already exists
  if (existingContent.includes(`path: '${path}'`)) {
    return false;
  }

  // Don't add admin routes
  if (path.includes('/admin')) {
    return false;
  }

  // Don't add dynamic routes
  if (path.includes(':')) {
    return false;
  }

  return true;
};

/**
 * Creates a RouteDefinition from translation parameters
 */
export const createRouteFromTranslation = (
  enPath: string,
  category: string,
  esRoute?: RouteDefinition
): RouteDefinition => {
  // Determine priority based on category
  let priority = 0.7;
  let changefreq: 'daily' | 'weekly' | 'monthly' | 'yearly' = 'monthly';

  if (category === 'main') {
    priority = 0.9;
    changefreq = 'weekly';
  } else if (category === 'solution') {
    priority = 0.8;
    changefreq = 'weekly';
  } else if (category === 'service') {
    priority = 0.7;
    changefreq = 'monthly';
  } else if (category === 'blog') {
    priority = 0.7;
    changefreq = 'weekly';
  }

  // Use ES route values if available
  if (esRoute) {
    priority = esRoute.priority;
    changefreq = esRoute.changefreq as any;
  }

  return {
    path: enPath,
    category: category as any,
    isIndexable: true,
    priority,
    changefreq,
    isDynamic: false,
    isLegacy: false,
  };
};
