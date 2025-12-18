import React from 'react';
import { useDynamicH1 } from '@/hooks/useAdvancedSEO';

interface DynamicH1Props {
  fallback?: string;
  className?: string;
  children?: React.ReactNode;
}

/**
 * Dynamic H1 component that automatically uses SEO-optimized H1 from central data
 * Falls back to provided fallback or children if no SEO data is found
 */
export const DynamicH1: React.FC<DynamicH1Props> = ({ 
  fallback, 
  className = '', 
  children 
}) => {
  const optimizedH1 = useDynamicH1(fallback);
  
  // Use children first, then optimized H1, then fallback
  const content = children || (optimizedH1 !== fallback ? optimizedH1 : fallback);
  
  return (
    <h1 className={`font-dm-sans ${className}`}>
      {content}
    </h1>
  );
};

export default DynamicH1;