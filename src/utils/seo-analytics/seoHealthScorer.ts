/**
 * SEO Health Scoring System
 */

import { analyzeCrawlBudget } from '@/utils/crawlBudgetOptimizer';
import { getIndexableUrls } from '@/utils/sitemap';

export interface SEOHealthScore {
  overall: number;
  scores: {
    crawlBudget: number;
    sitemap: number;
    robots: number;
    redirects: number;
    architecture: number;
  };
  grade: 'A' | 'B' | 'C' | 'D' | 'F';
  issues: {
    critical: number;
    warnings: number;
    info: number;
  };
}

/**
 * Calculates overall SEO health score
 */
export const calculateSEOHealth = (params: {
  crawlBudgetAnalysis: ReturnType<typeof analyzeCrawlBudget>;
  sitemapIssuesCount: number;
  robotsIssuesCount: number;
  redirectIssuesCount: number;
  totalUrls: number;
}): SEOHealthScore => {
  const {
    crawlBudgetAnalysis,
    sitemapIssuesCount,
    robotsIssuesCount,
    redirectIssuesCount,
    totalUrls
  } = params;
  
  // Score crawl budget (0-100)
  const crawlBudgetScore = Math.min(100, crawlBudgetAnalysis.optimizationScore);
  
  // Score sitemap health (0-100)
  const sitemapScore = Math.max(0, 100 - (sitemapIssuesCount * 10));
  
  // Score robots.txt (0-100)
  const robotsScore = Math.max(0, 100 - (robotsIssuesCount * 15));
  
  // Score redirects (0-100)
  const redirectScore = Math.max(0, 100 - (redirectIssuesCount * 5));
  
  // Score architecture (based on indexable ratio)
  const indexableRatio = crawlBudgetAnalysis.indexablePages / totalUrls;
  const architectureScore = indexableRatio < 0.3 ? 100 : // Ideal: <30% indexable
                            indexableRatio < 0.5 ? 80 :
                            indexableRatio < 0.7 ? 60 : 40;
  
  // Calculate weighted overall score
  const overall = Math.round(
    (crawlBudgetScore * 0.25) +
    (sitemapScore * 0.25) +
    (robotsScore * 0.15) +
    (redirectScore * 0.15) +
    (architectureScore * 0.20)
  );
  
  // Determine grade
  let grade: SEOHealthScore['grade'] = 'F';
  if (overall >= 90) grade = 'A';
  else if (overall >= 80) grade = 'B';
  else if (overall >= 70) grade = 'C';
  else if (overall >= 60) grade = 'D';
  
  // Count issues by severity
  const issues = {
    critical: (sitemapIssuesCount > 5 ? 1 : 0) + (robotsIssuesCount > 3 ? 1 : 0),
    warnings: redirectIssuesCount,
    info: crawlBudgetAnalysis.recommendations.length
  };
  
  return {
    overall,
    scores: {
      crawlBudget: crawlBudgetScore,
      sitemap: sitemapScore,
      robots: robotsScore,
      redirects: redirectScore,
      architecture: architectureScore
    },
    grade,
    issues
  };
};

/**
 * Gets color based on score
 */
export const getScoreColor = (score: number): string => {
  if (score >= 80) return 'text-green-600';
  if (score >= 60) return 'text-yellow-600';
  return 'text-red-600';
};

/**
 * Gets background color based on score
 */
export const getScoreBgColor = (score: number): string => {
  if (score >= 80) return 'bg-green-100';
  if (score >= 60) return 'bg-yellow-100';
  return 'bg-red-100';
};

/**
 * Gets badge color based on grade
 */
export const getGradeBadgeColor = (grade: SEOHealthScore['grade']): string => {
  switch (grade) {
    case 'A': return 'bg-green-500 text-white';
    case 'B': return 'bg-blue-500 text-white';
    case 'C': return 'bg-yellow-500 text-white';
    case 'D': return 'bg-orange-500 text-white';
    case 'F': return 'bg-red-500 text-white';
  }
};
