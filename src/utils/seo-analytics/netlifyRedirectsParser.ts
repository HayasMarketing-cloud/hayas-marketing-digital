/**
 * Netlify/Cloudflare Pages Redirects Parser
 * Parses and analyzes _redirects file format
 * Format: /source /destination status [options]
 */

export interface NetlifyRedirectRule {
  source: string;
  destination: string;
  status: '301' | '302' | '200' | '404';
  options?: {
    force?: boolean;
    conditions?: Record<string, string>;
  };
  category?: string;
  lineNumber?: number;
}

export interface NetlifyRedirectAnalysis {
  redirects: NetlifyRedirectRule[];
  total: number;
  byStatus: {
    '301': number;
    '302': number;
    '200': number;
    '404': number;
  };
  byCategory: Record<string, number>;
  splatRules: NetlifyRedirectRule[];
}

/**
 * Parse _redirects file content
 */
export const parseNetlifyRedirects = (content: string): NetlifyRedirectAnalysis => {
  const lines = content.split('\n');
  const redirects: NetlifyRedirectRule[] = [];
  const byStatus = { '301': 0, '302': 0, '200': 0, '404': 0 };
  const byCategory: Record<string, number> = {};
  const splatRules: NetlifyRedirectRule[] = [];
  
  let currentCategory = 'Uncategorized';

  lines.forEach((line, index) => {
    const trimmed = line.trim();
    
    // Skip empty lines and comments
    if (!trimmed || trimmed.startsWith('#')) {
      // Extract category from comment headers
      const categoryMatch = trimmed.match(/^#\s*={3,}\s*$/);
      const nextLine = lines[index + 1]?.trim();
      if (categoryMatch && nextLine && nextLine.startsWith('#')) {
        currentCategory = nextLine.replace(/^#\s*/, '').replace(/\s*={3,}\s*$/, '').trim();
      }
      return;
    }

    // Parse redirect line: /source /destination status [options]
    const parts = trimmed.split(/\s+/);
    if (parts.length < 3) return;

    const [source, destination, statusCode, ...options] = parts;
    const status = (statusCode as '301' | '302' | '200' | '404') || '301';

    // Check if it's a splat rule
    const isSplat = source.includes('*') || source.includes(':splat');

    const rule: NetlifyRedirectRule = {
      source,
      destination,
      status,
      category: currentCategory,
      lineNumber: index + 1,
      options: {
        force: options.includes('!'),
      }
    };

    redirects.push(rule);
    byStatus[status]++;
    byCategory[currentCategory] = (byCategory[currentCategory] || 0) + 1;

    if (isSplat) {
      splatRules.push(rule);
    }
  });

  return {
    redirects,
    total: redirects.length,
    byStatus,
    byCategory,
    splatRules
  };
};

/**
 * Find final destination after following redirect chain
 */
export const findFinalDestination = (
  url: string,
  redirects: NetlifyRedirectRule[],
  maxDepth: number = 10
): { final: string; chain: string[]; depth: number; circular?: boolean } => {
  const chain: string[] = [url];
  let current = url;
  let depth = 0;

  while (depth < maxDepth) {
    const redirect = redirects.find(r => {
      // Exact match
      if (r.source === current) return true;
      
      // Splat match
      if (r.source.includes('*')) {
        const pattern = r.source.replace(/\*/g, '(.*)');
        const regex = new RegExp(`^${pattern}$`);
        return regex.test(current);
      }
      
      return false;
    });

    if (!redirect) break;

    let destination = redirect.destination;
    
    // Handle splat replacement
    if (redirect.source.includes('*') && destination.includes(':splat')) {
      const pattern = redirect.source.replace(/\*/g, '(.*)');
      const regex = new RegExp(`^${pattern}$`);
      const match = current.match(regex);
      if (match && match[1]) {
        destination = destination.replace(':splat', match[1]);
      }
    }

    // Check for circular redirect
    if (chain.includes(destination)) {
      return { final: destination, chain: [...chain, destination], depth, circular: true };
    }

    chain.push(destination);
    current = destination;
    depth++;
  }

  return { final: current, chain, depth };
};

/**
 * Validate redirects for common issues
 */
export const validateRedirects = (analysis: NetlifyRedirectAnalysis) => {
  const chains: { source: string; chain: string[]; depth: number }[] = [];
  const circular: { source: string; chain: string[] }[] = [];
  const duplicates: { source: string; destinations: string[] }[] = [];
  const issues: string[] = [];

  // Find redirect chains and circular redirects
  analysis.redirects.forEach(redirect => {
    const result = findFinalDestination(redirect.source, analysis.redirects);
    
    if (result.circular) {
      circular.push({ source: redirect.source, chain: result.chain });
      issues.push(`Circular redirect detected: ${result.chain.join(' → ')}`);
    } else if (result.depth > 1) {
      chains.push({ source: redirect.source, chain: result.chain, depth: result.depth });
      if (result.depth > 3) {
        issues.push(`Long redirect chain (${result.depth} redirects): ${result.chain[0]} → ${result.final}`);
      }
    }
  });

  // Find duplicate sources
  const sourceMap = new Map<string, string[]>();
  analysis.redirects.forEach(redirect => {
    const destinations = sourceMap.get(redirect.source) || [];
    destinations.push(redirect.destination);
    sourceMap.set(redirect.source, destinations);
  });

  sourceMap.forEach((destinations, source) => {
    if (destinations.length > 1) {
      duplicates.push({ source, destinations });
      issues.push(`Duplicate source "${source}" redirects to multiple destinations`);
    }
  });

  // Validate splat rules position (should be at the end)
  const splatIndex = analysis.redirects.findIndex(r => 
    r.source.includes('*') || r.source.includes(':splat')
  );
  const hasNonSplatAfter = analysis.redirects.slice(splatIndex + 1).some(r => 
    !r.source.includes('*') && !r.source.includes(':splat')
  );
  
  if (splatIndex !== -1 && hasNonSplatAfter) {
    issues.push('Splat rules should be placed at the end of the _redirects file for proper matching');
  }

  return {
    chains,
    circular,
    duplicates,
    issues,
    isValid: issues.length === 0
  };
};

/**
 * Generate redirect code for _redirects format
 */
export const generateRedirectCode = (
  source: string,
  destination: string,
  status: '301' | '302' = '301',
  force: boolean = false
): string => {
  const forceFlag = force ? '!' : '';
  return `${source}  ${destination}  ${status}${forceFlag ? '  ' + forceFlag : ''}`;
};

/**
 * Convert Apache .htaccess redirect to Netlify format
 */
export const convertHtaccessToNetlify = (htaccessLine: string): string | null => {
  // Handle simple Redirect directives
  const redirectMatch = htaccessLine.match(/^Redirect\s+(301|302)\s+(\S+)\s+(\S+)/);
  if (redirectMatch) {
    const [, status, source, destination] = redirectMatch;
    return generateRedirectCode(source, destination, status as '301' | '302');
  }

  // Handle RewriteRule
  const rewriteMatch = htaccessLine.match(/^RewriteRule\s+\^(.*)\$\s+(.+)\s+\[R=(\d+),L\]/);
  if (rewriteMatch) {
    const [, source, destination, status] = rewriteMatch;
    return generateRedirectCode(`/${source}`, destination, status as '301' | '302');
  }

  return null;
};
