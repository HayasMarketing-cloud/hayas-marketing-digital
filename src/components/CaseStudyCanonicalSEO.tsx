import React from 'react';
import { EnhancedSEO } from '@/components/EnhancedSEO';

interface CaseStudyCanonicalSEOProps {
  companyName: string;
  service?: string;
  pageTitle?: string;
  pageDescription?: string;
  featuredImage?: string;
}

/**
 * Canonical SEO component for individual case study pages
 * Automatically sets noindex, follow and canonical to /casos-exito
 * to prevent cannibalization while preserving link equity
 */
export const CaseStudyCanonicalSEO: React.FC<CaseStudyCanonicalSEOProps> = ({
  companyName,
  service,
  pageTitle,
  pageDescription,
  featuredImage
}) => {
  const title = pageTitle || `Caso de Éxito ${companyName} - Hayas Marketing`;
  const description = pageDescription || `Descubre cómo ayudamos a ${companyName} ${service ? `con ${service}` : 'a transformar su negocio'}. Caso de éxito real con resultados medibles.`;

  return (
    <EnhancedSEO 
      customSEO={{
        title,
        description,
        canonical: '/es/casos-exito', // Canonical to main cases page
        robots: 'noindex, follow', // Don't index individual cases
        ogImage: featuredImage,
        ogType: 'article',
        keywords: [`caso éxito ${companyName.toLowerCase()}`, 'marketing digital', 'resultados', 'transformación digital'],
        about: ['Caso de Éxito', 'Transformación Digital', 'Marketing Digital'],
        mentions: [companyName, 'Hayas Marketing', service].filter(Boolean) as string[]
      }}
    />
  );
};

export default CaseStudyCanonicalSEO;