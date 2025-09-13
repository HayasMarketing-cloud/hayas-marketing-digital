import React from 'react';
import { useAdvancedSEO } from '@/hooks/useAdvancedSEO';

interface DynamicH3Props {
  index?: number;
  fallback?: string;
  className?: string;
  children?: React.ReactNode;
}

/**
 * Dynamic H3 component that uses SEO-optimized headings from central data
 * Falls back to provided fallback or children if no SEO data is found
 */
export const DynamicH3: React.FC<DynamicH3Props> = ({ 
  index = 0,
  fallback, 
  className = 'title-card', 
  children 
}) => {
  const { headings } = useAdvancedSEO();
  
  let content = children || fallback;
  
  if (headings?.h3Strategic?.[index]) {
    content = headings.h3Strategic[index];
  }
  
  return (
    <h3 className={className}>
      {content}
    </h3>
  );
};

export default DynamicH3;