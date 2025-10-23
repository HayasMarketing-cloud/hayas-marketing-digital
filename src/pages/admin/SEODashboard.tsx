import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { MetricsCard } from '@/components/seo-dashboard/MetricsCard';
import { SEOHealthIndicator } from '@/components/seo-dashboard/SEOHealthIndicator';
import { FileText, Globe, ArrowRight, Map, AlertTriangle } from 'lucide-react';
import { analyzeCrawlBudget } from '@/utils/crawlBudgetOptimizer';
import { getIndexableUrls } from '@/utils/sitemap';
import { analyzeSitemap } from '@/utils/seo-analytics/sitemapAnalyzer';
import { parseHtaccess, validateRedirects } from '@/utils/seo-analytics/htaccessParser';
import { parseRobotsTxt } from '@/utils/seo-analytics/robotsTxtParser';
import { calculateSEOHealth } from '@/utils/seo-analytics/seoHealthScorer';

const SEODashboard: React.FC = () => {
  const navigate = useNavigate();
  
  const dashboardData = useMemo(() => {
    const allUrls = getIndexableUrls();
    const crawlBudget = analyzeCrawlBudget(allUrls);
    const sitemapAnalysis = analyzeSitemap();
    
    // Mock data for robots and redirects (in real app, fetch from files)
    const robotsContent = `User-agent: *\nAllow: /\nDisallow: /tmp/\nCrawl-delay: 1`;
    const robotsAnalysis = parseRobotsTxt(robotsContent);
    
    const redirectsContent = ''; // Would fetch from .htaccess
    const redirectsAnalysis = parseHtaccess(redirectsContent);
    const redirectValidation = validateRedirects(redirectsAnalysis);
    
    const health = calculateSEOHealth({
      crawlBudgetAnalysis: crawlBudget,
      sitemapIssuesCount: sitemapAnalysis.issues.length,
      robotsIssuesCount: robotsAnalysis.issues.length,
      redirectIssuesCount: redirectValidation.issues.length,
      totalUrls: allUrls.length
    });
    
    return {
      crawlBudget,
      sitemapAnalysis,
      robotsAnalysis,
      redirectsAnalysis,
      redirectValidation,
      health
    };
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto space-y-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">SEO Control Center</h1>
            <p className="text-muted-foreground">Monitoreo y gestión de la estrategia SEO completa</p>
          </div>
          
          {/* Health Score */}
          <SEOHealthIndicator health={dashboardData.health} />
          
          {/* Quick Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <MetricsCard
              title="Sitemap Health"
              value={`${dashboardData.sitemapAnalysis.stats.indexableUrls}`}
              subtitle="URLs indexables"
              icon={Map}
              color={dashboardData.sitemapAnalysis.issues.length === 0 ? 'green' : 'yellow'}
              onClick={() => navigate('/admin/seo/sitemap')}
            />
            
            <MetricsCard
              title="Robots.txt"
              value={dashboardData.robotsAnalysis.blockedPatterns.length}
              subtitle="Patrones bloqueados"
              icon={Globe}
              color={dashboardData.robotsAnalysis.issues.length === 0 ? 'green' : 'red'}
              onClick={() => navigate('/admin/seo/robots')}
            />
            
            <MetricsCard
              title="Redirecciones"
              value={dashboardData.redirectsAnalysis.totalCount}
              subtitle="Total activas"
              icon={ArrowRight}
              color={dashboardData.redirectValidation.issues.length === 0 ? 'green' : 'yellow'}
              onClick={() => navigate('/admin/seo/redirects')}
            />
            
            <MetricsCard
              title="Crawl Budget"
              value={`${dashboardData.crawlBudget.optimizationScore}%`}
              subtitle="Optimización"
              icon={FileText}
              color={dashboardData.crawlBudget.optimizationScore >= 70 ? 'green' : 'yellow'}
            />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SEODashboard;
