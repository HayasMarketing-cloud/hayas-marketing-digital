/**
 * Parser and analyzer for robots.txt files
 */

export interface RobotsDirective {
  userAgent: string;
  rules: {
    type: 'Allow' | 'Disallow' | 'Crawl-delay' | 'Sitemap';
    value: string;
  }[];
}

export interface RobotsAnalysis {
  directives: RobotsDirective[];
  sitemaps: string[];
  blockedPatterns: string[];
  allowedPatterns: string[];
  crawlDelay?: number;
  issues: string[];
  recommendations: string[];
}

/**
 * Parses robots.txt content into structured data
 */
export const parseRobotsTxt = (content: string): RobotsAnalysis => {
  const lines = content.split('\n').filter(line => line.trim() && !line.trim().startsWith('#'));
  
  const directives: RobotsDirective[] = [];
  const sitemaps: string[] = [];
  const blockedPatterns: string[] = [];
  const allowedPatterns: string[] = [];
  const issues: string[] = [];
  const recommendations: string[] = [];
  let crawlDelay: number | undefined;
  
  let currentUserAgent = '';
  let currentRules: RobotsDirective['rules'] = [];
  
  lines.forEach((line, index) => {
    const trimmed = line.trim();
    const [directive, ...valueParts] = trimmed.split(':');
    const value = valueParts.join(':').trim();
    
    if (directive.toLowerCase() === 'user-agent') {
      // Save previous user-agent rules if any
      if (currentUserAgent && currentRules.length > 0) {
        directives.push({ userAgent: currentUserAgent, rules: [...currentRules] });
      }
      currentUserAgent = value;
      currentRules = [];
    } else if (directive.toLowerCase() === 'disallow') {
      currentRules.push({ type: 'Disallow', value });
      if (value) blockedPatterns.push(value);
    } else if (directive.toLowerCase() === 'allow') {
      currentRules.push({ type: 'Allow', value });
      if (value) allowedPatterns.push(value);
    } else if (directive.toLowerCase() === 'crawl-delay') {
      const delay = parseInt(value);
      currentRules.push({ type: 'Crawl-delay', value });
      crawlDelay = delay;
      if (delay > 5) {
        issues.push(`⚠️ Crawl-delay muy alto (${delay}s) puede reducir la frecuencia de rastreo`);
      }
    } else if (directive.toLowerCase() === 'sitemap') {
      currentRules.push({ type: 'Sitemap', value });
      sitemaps.push(value);
    }
  });
  
  // Save last user-agent rules
  if (currentUserAgent && currentRules.length > 0) {
    directives.push({ userAgent: currentUserAgent, rules: currentRules });
  }
  
  // Generate recommendations
  if (blockedPatterns.length === 0) {
    recommendations.push('💡 Considera bloquear rutas innecesarias como /tmp/, /admin/, archivos JSON');
  }
  
  if (sitemaps.length === 0) {
    issues.push('❌ No hay sitemap declarado en robots.txt');
  }
  
  if (blockedPatterns.some(p => p.includes('/blog') || p.includes('/servicios'))) {
    issues.push('❌ CRÍTICO: Estás bloqueando contenido importante (/blog o /servicios)');
  }
  
  return {
    directives,
    sitemaps,
    blockedPatterns,
    allowedPatterns,
    crawlDelay,
    issues,
    recommendations
  };
};

/**
 * Tests if a URL would be blocked by robots.txt rules
 */
export const testUrlAgainstRobots = (url: string, analysis: RobotsAnalysis): { 
  allowed: boolean; 
  reason: string;
  matchedRule?: string;
} => {
  const path = url.replace(/^https?:\/\/[^\/]+/, '');
  
  // Check blocked patterns first (Disallow has priority)
  for (const pattern of analysis.blockedPatterns) {
    if (pattern === '/') {
      return { allowed: false, reason: 'Todo el sitio está bloqueado', matchedRule: `Disallow: ${pattern}` };
    }
    
    if (path.startsWith(pattern) || new RegExp(pattern.replace('*', '.*')).test(path)) {
      return { 
        allowed: false, 
        reason: `Bloqueada por robots.txt`,
        matchedRule: `Disallow: ${pattern}`
      };
    }
  }
  
  // Check allowed patterns
  for (const pattern of analysis.allowedPatterns) {
    if (path.startsWith(pattern)) {
      return { 
        allowed: true, 
        reason: 'Explícitamente permitida',
        matchedRule: `Allow: ${pattern}`
      };
    }
  }
  
  // If not explicitly disallowed, it's allowed
  return { allowed: true, reason: 'No hay restricciones' };
};

/**
 * Detects conflicts between sitemap and robots.txt
 */
export const detectSitemapRobotsConflicts = (
  sitemapUrls: string[],
  robotsAnalysis: RobotsAnalysis
): { url: string; issue: string }[] => {
  const conflicts: { url: string; issue: string }[] = [];
  
  sitemapUrls.forEach(url => {
    const test = testUrlAgainstRobots(url, robotsAnalysis);
    if (!test.allowed) {
      conflicts.push({
        url,
        issue: `URL en sitemap pero bloqueada en robots.txt (${test.matchedRule})`
      });
    }
  });
  
  return conflicts;
};
