import React from 'react';
import { EnhancedSEO } from '@/components/EnhancedSEO';
import { INDEXABLE_CASE_STUDIES_PHASE_1 } from '@/data/seoData';

interface CaseStudyCanonicalSEOProps {
  companyName: string;
  service?: string;
  pageTitle?: string;
  pageDescription?: string;
  featuredImage?: string;
  /** Slug del caso (ej: "wooptix"). Si está en la whitelist Fase 1, se indexa y el canonical apunta a la propia página. */
  slug?: string;
}

/**
 * SEO component for individual case study pages.
 * - Si el slug está en INDEXABLE_CASE_STUDIES_PHASE_1 → index, follow + canonical self.
 * - Si no → noindex, follow + canonical al pillar /es/casos-exito (comportamiento previo).
 */
export const CaseStudyCanonicalSEO: React.FC<CaseStudyCanonicalSEOProps> = ({
  companyName,
  service,
  pageTitle,
  pageDescription,
  featuredImage,
  slug,
}) => {
  const title = pageTitle || `Caso de Éxito ${companyName} - Hayas Marketing`;
  const description = pageDescription || `Descubre cómo ayudamos a ${companyName} ${service ? `con ${service}` : 'a transformar su negocio'}. Caso de éxito real con resultados medibles.`;

  const isIndexable = !!slug && INDEXABLE_CASE_STUDIES_PHASE_1.includes(slug);
  const canonical = isIndexable ? `/es/casos-exito/${slug}` : '/es/casos-exito';
  const robots = isIndexable ? 'index, follow' : 'noindex, follow';

  return (
    <EnhancedSEO
      customSEO={{
        title,
        description,
        canonical,
        robots,
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
