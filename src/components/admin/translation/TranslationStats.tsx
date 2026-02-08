import React from 'react';
import { UnifiedProgressCard } from './UnifiedProgressCard';

interface TranslationStatsProps {
  onCategorySelect?: (category: string) => void;
}

export const TranslationStats: React.FC<TranslationStatsProps> = () => {
  return <UnifiedProgressCard />;
};
