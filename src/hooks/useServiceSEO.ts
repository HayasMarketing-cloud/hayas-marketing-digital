import { useMemo } from 'react';

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
}

export const useServiceSEO = ({ 
  serviceName, 
  serviceDescription, 
  canonical,
  heroImagePath 
}: UseServiceSEOProps): ServiceSEOData => {
  return useMemo(() => {
    const title = `${serviceName} | Hayas Marketing`;
    const ogImage = heroImagePath ? `${window.location.origin}${heroImagePath}` : undefined;
    
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Service",
      name: serviceName,
      description: serviceDescription,
      provider: {
        "@type": "Organization",
        name: "Hayas Marketing",
        url: "https://hayasmarketing.com",
        logo: `${window.location.origin}/favicon.ico`
      },
      areaServed: "ES",
      url: `${window.location.origin}${canonical}`,
      serviceType: "Marketing Digital",
      category: "Marketing y Publicidad"
    };

    return {
      title,
      description: serviceDescription,
      canonical,
      ogImage,
      structuredData
    };
  }, [serviceName, serviceDescription, canonical, heroImagePath]);
};

export default useServiceSEO;