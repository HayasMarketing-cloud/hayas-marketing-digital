import { generateEnglishSlug, validateEnglishSlug } from './slugTranslation';

/**
 * Intelligent Spanish to English route converter
 * Uses mapping dictionary with fallback validation
 */
export const generateEnglishRoute = (esPath: string): {
  enPath: string;
  isValid: boolean;
  warnings: string[];
} => {
  // Generate using the existing slug translation utility
  let enPath = generateEnglishSlug(esPath);
  
  // Validate the generated path
  const validation = validateEnglishSlug(enPath);
  
  return {
    enPath,
    isValid: validation.valid,
    warnings: validation.errors,
  };
};

/**
 * Batch generate English routes for multiple Spanish paths
 */
export const batchGenerateEnglishRoutes = (
  esPaths: string[]
): Array<{
  esPath: string;
  enPath: string;
  isValid: boolean;
  warnings: string[];
}> => {
  return esPaths.map(esPath => ({
    esPath,
    ...generateEnglishRoute(esPath),
  }));
};
