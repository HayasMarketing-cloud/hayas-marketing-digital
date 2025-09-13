import React from 'react';
import { useAdvancedSEO } from '@/hooks/useAdvancedSEO';

interface DynamicH2Props {
  type?: 'primary' | 'secondary';
  index?: number;
  fallback?: string;
  className?: string;
  children?: React.ReactNode;
}

/**
 * Dynamic H2 component that uses SEO-optimized headings from central data
 * Falls back to provided fallback or children if no SEO data is found
 */
export const DynamicH2: React.FC<DynamicH2Props> = ({ 
  type = 'primary',
  index = 0,
  fallback, 
  className = 'title-section', 
  children 
}) => {
  const { headings } = useAdvancedSEO();
  
  let content = children || fallback;
  
  if (headings) {
    if (type === 'primary' && headings.h2Primary) {
      content = headings.h2Primary;
    } else if (type === 'secondary' && headings.h2Secondary?.[index]) {
      content = headings.h2Secondary[index];
    }
  }
  
  return (
    <h2 className={className}>
      {content}
    </h2>
  );
};

export default DynamicH2;