import { useMemo } from 'react';
import { generateServiceSchema } from '@/data/seoData';

interface ServiceSEOData {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
  structuredData: Record<string, any>;
}

interface UseServiceSEOProps {
  serviceName: string;
  serviceDescription: string;
  canonical: string;
  heroImagePath?: string;
  serviceType?: string;
  priceRange?: string;
  features?: string[];
  aggregateRating?: {
    ratingValue: string;
    reviewCount: string;
  };
}

export const useServiceSEO = ({ 
  serviceName, 
  serviceDescription, 
  canonical,
  heroImagePath,
  serviceType = "Marketing Digital",
  priceRange,
  features,
  aggregateRating
}: UseServiceSEOProps): ServiceSEOData => {
  return useMemo(() => {
    const title = `${serviceName} | Hayas Marketing`;
    const ogImage = heroImagePath ? `${window.location.origin}${heroImagePath}` : undefined;
    
    // Use new generateServiceSchema helper (FASE 1)
    const structuredData = generateServiceSchema({
      serviceName,
      serviceDescription,
      serviceType,
      canonical,
      priceRange,
      features,
      aggregateRating
    });

    return {
      title,
      description: serviceDescription,
      canonical,
      ogImage,
      structuredData
    };
  }, [serviceName, serviceDescription, canonical, heroImagePath, serviceType, priceRange, features, aggregateRating]);
};

export default useServiceSEO;