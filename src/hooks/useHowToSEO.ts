import { useMemo } from 'react';
import { generateHowToSchema } from '@/data/seoData';

export interface HowToStep {
  name: string;
  text: string;
  image?: string;
  url?: string;
}

interface HowToSEOData {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
  structuredData: Record<string, any>;
}

interface UseHowToSEOProps {
  howToName: string;
  howToDescription: string;
  canonical: string;
  steps: HowToStep[];
  totalTime?: string; // ISO 8601 duration format: PT30M = 30 minutes
  estimatedCost?: {
    currency: string;
    value: string;
  };
  supply?: string[]; // Materials or tools needed
  heroImagePath?: string;
}

/**
 * Hook for HowTo/Tutorial pages with Schema.org HowTo markup
 * Optimized for Google's HowTo rich results
 */
export const useHowToSEO = ({ 
  howToName, 
  howToDescription, 
  canonical,
  steps,
  totalTime,
  estimatedCost,
  supply,
  heroImagePath
}: UseHowToSEOProps): HowToSEOData => {
  return useMemo(() => {
    const title = `${howToName} | Guía Paso a Paso | Hayas Marketing`;
    const ogImage = heroImagePath ? `${window.location.origin}${heroImagePath}` : undefined;
    
    const structuredData = generateHowToSchema({
      howToName,
      howToDescription,
      canonical,
      steps,
      totalTime,
      estimatedCost,
      supply
    });

    return {
      title,
      description: howToDescription,
      canonical,
      ogImage,
      structuredData
    };
  }, [howToName, howToDescription, canonical, steps, totalTime, estimatedCost, supply, heroImagePath]);
};

export default useHowToSEO;
