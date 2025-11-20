import { useMemo } from 'react';
import { generateFAQSchema } from '@/data/seoData';

interface FAQItem {
  question: string;
  answer: string;
}

interface UseFAQSEOProps {
  faqs: FAQItem[];
  pageUrl: string;
}

interface FAQSEOData {
  structuredData: Record<string, any>;
}

/**
 * Hook para generar FAQ Schema optimizado para Featured Snippets
 * Fase 7: FAQ Schema Enhancement
 * 
 * Beneficios:
 * - Mayor probabilidad de aparecer en Featured Snippets
 * - Rich Results en SERPs de Google
 * - Mejora la visibilidad y CTR
 * - Responde directamente a intenciones de búsqueda
 */
export const useFAQSEO = ({ 
  faqs, 
  pageUrl 
}: UseFAQSEOProps): FAQSEOData => {
  return useMemo(() => {
    const structuredData = generateFAQSchema(faqs, pageUrl);

    return {
      structuredData
    };
  }, [faqs, pageUrl]);
};

export default useFAQSEO;
