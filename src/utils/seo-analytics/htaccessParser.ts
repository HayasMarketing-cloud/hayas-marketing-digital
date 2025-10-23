/**
 * Parser for .htaccess redirect rules
 */

export interface RedirectRule {
  id: string;
  source: string;
  destination: string;
  type: '301' | '302' | 'RewriteRule';
  category?: string;
  lineNumber?: number;
}

export interface RedirectAnalysis {
  redirects: RedirectRule[];
  totalCount: number;
  byCategory: Record<string, number>;
  byType: Record<string, number>;
}

/**
 * Parses .htaccess content and extracts redirect rules
 */
export const parseHtaccess = (content: string): RedirectAnalysis => {
  const lines = content.split('\n');
  const redirects: RedirectRule[] = [];
  let currentCategory = 'General';
  
  lines.forEach((line, index) => {
    const trimmed = line.trim();
    
    // Detect category from comments
    if (trimmed.startsWith('#')) {
      const categoryMatch = trimmed.match(/# (Blog|Servicios|Kit Digital|Kit Consulting|Legacy|Páginas)/i);
      if (categoryMatch) {
        currentCategory = categoryMatch[1];
      }
      return;
    }
    
    // Parse Redirect 301/302
    const redirectMatch = trimmed.match(/^Redirect\s+(301|302)\s+(\S+)\s+(\S+)/i);
    if (redirectMatch) {
      const [, type, source, destination] = redirectMatch;
      redirects.push({
        id: `redirect-${index}`,
        source: source.trim(),
        destination: destination.trim(),
        type: type as '301' | '302',
        category: currentCategory,
        lineNumber: index + 1
      });
      return;
    }
    
    // Parse RewriteRule
    const rewriteMatch = trimmed.match(/^RewriteRule\s+\^?(.*?)\$?\s+(\S+)\s+\[([^\]]+)\]/i);
    if (rewriteMatch) {
      const [, pattern, destination, flags] = rewriteMatch;
      redirects.push({
        id: `rewrite-${index}`,
        source: pattern.trim(),
        destination: destination.trim(),
        type: 'RewriteRule',
        category: currentCategory,
        lineNumber: index + 1
      });
    }
  });
  
  // Calculate statistics
  const byCategory: Record<string, number> = {};
  const byType: Record<string, number> = {};
  
  redirects.forEach(redirect => {
    byCategory[redirect.category || 'General'] = (byCategory[redirect.category || 'General'] || 0) + 1;
    byType[redirect.type] = (byType[redirect.type] || 0) + 1;
  });
  
  return {
    redirects,
    totalCount: redirects.length,
    byCategory,
    byType
  };
};

/**
 * Finds the final destination of a URL following redirect chains
 */
export const findFinalDestination = (
  url: string, 
  redirects: RedirectRule[],
  maxDepth: number = 10
): { final: string; chain: string[]; depth: number } => {
  const chain: string[] = [url];
  let current = url;
  let depth = 0;
  
  while (depth < maxDepth) {
    const redirect = redirects.find(r => r.source === current || current.includes(r.source));
    
    if (!redirect) {
      break; // No more redirects
    }
    
    current = redirect.destination;
    chain.push(current);
    depth++;
    
    // Detect circular redirects
    if (chain.slice(0, -1).includes(current)) {
      return { final: current, chain, depth: -1 }; // -1 indicates circular
    }
  }
  
  return { final: current, chain, depth };
};

/**
 * Validates redirects and detects issues
 */
export const validateRedirects = (analysis: RedirectAnalysis): {
  chains: { source: string; chain: string[]; depth: number }[];
  circular: { source: string; chain: string[] }[];
  duplicates: { source: string; destinations: string[] }[];
  issues: string[];
} => {
  const chains: { source: string; chain: string[]; depth: number }[] = [];
  const circular: { source: string; chain: string[] }[] = [];
  const duplicates: { source: string; destinations: string[] }[] = [];
  const issues: string[] = [];
  
  // Check for redirect chains
  analysis.redirects.forEach(redirect => {
    const result = findFinalDestination(redirect.source, analysis.redirects);
    
    if (result.depth === -1) {
      circular.push({ source: redirect.source, chain: result.chain });
      issues.push(`❌ Redirección circular detectada: ${result.chain.join(' → ')}`);
    } else if (result.depth > 1) {
      chains.push({ source: redirect.source, chain: result.chain, depth: result.depth });
      issues.push(`⚠️ Cadena de ${result.depth} redirecciones: ${result.chain.join(' → ')}`);
    }
  });
  
  // Check for duplicate sources
  const sourceMap = new Map<string, string[]>();
  analysis.redirects.forEach(redirect => {
    if (!sourceMap.has(redirect.source)) {
      sourceMap.set(redirect.source, []);
    }
    sourceMap.get(redirect.source)!.push(redirect.destination);
  });
  
  sourceMap.forEach((destinations, source) => {
    if (destinations.length > 1) {
      duplicates.push({ source, destinations });
      issues.push(`❌ URL origen duplicada: ${source} → ${destinations.join(', ')}`);
    }
  });
  
  return { chains, circular, duplicates, issues };
};

/**
 * Generates .htaccess redirect code
 */
export const generateRedirectCode = (
  source: string,
  destination: string,
  type: '301' | '302' = '301'
): string => {
  return `Redirect ${type} ${source} ${destination}`;
};
