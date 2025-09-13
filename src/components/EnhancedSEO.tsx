import React from 'react';
import { useAdvancedSEO, useSEOValidation } from '@/hooks/useAdvancedSEO';
import Seo from './Seo';
import { EnhancedPageSEOData } from '@/data/seoData';

interface EnhancedSEOProps {
  customSEO?: Partial<EnhancedPageSEOData>;
  pageContent?: string;
  skipAutoExtraction?: boolean;
  showValidationWarnings?: boolean; // Only in development
}

/**
 * Enhanced SEO component that automatically applies advanced SEO optimization
 * Uses central SEO data with automatic concept extraction and validation
 */
export const EnhancedSEO: React.FC<EnhancedSEOProps> = ({
  customSEO,
  pageContent,
  skipAutoExtraction = false,
  showValidationWarnings = false
}) => {
  const seoData = useAdvancedSEO({
    customSEO,
    pageContent,
    skipAutoExtraction
  });

  const validation = useSEOValidation(seoData);

  // Show validation warnings in development
  if (showValidationWarnings && !validation.isValid && process.env.NODE_ENV === 'development') {
    console.warn('SEO Validation Warnings:', validation.warnings);
  }

  return (
    <Seo
      title={seoData.title}
      description={seoData.description}
      keywords={seoData.keywords}
      canonical={seoData.canonical}
      ogImage={seoData.ogImage}
      ogType={seoData.ogType}
      inLanguage={seoData.inLanguage}
      about={seoData.about}
      mentions={seoData.mentions}
      faqs={seoData.faqs}
      structuredData={seoData.structuredData}
      robots={seoData.robots}
    />
  );
};

export default EnhancedSEO;