import { useEffect } from 'react';
import { hayasOrganizationSchema } from '@/data/seoData';

interface SeoProps {
  title: string;
  description?: string;
  keywords?: string[];
  canonical?: string; // path or absolute URL
  structuredData?: Record<string, any> | Array<Record<string, any>>;
  ogImage?: string; // absolute or path from root
  ogType?: 'website' | 'article' | 'service';
  inLanguage?: string;
  about?: string[];
  mentions?: string[];
  faqs?: Array<{ question: string; answer: string }>;
  robots?: string; // e.g., "noindex, follow" or "index, follow"
}

const Seo = ({ 
  title, 
  description, 
  keywords,
  canonical, 
  structuredData, 
  ogImage, 
  ogType = 'website',
  inLanguage = 'es-ES',
  about,
  mentions,
  faqs,
  robots
}: SeoProps) => {
  useEffect(() => {
    // Title
    document.title = title;

    // Meta description
    if (description) {
      let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
      if (!meta) {
        meta = document.createElement('meta');
        meta.name = 'description';
        document.head.appendChild(meta);
      }
      meta.content = description;
    }

    // Keywords
    if (keywords && keywords.length > 0) {
      let keywordsMeta = document.querySelector('meta[name="keywords"]') as HTMLMetaElement | null;
      if (!keywordsMeta) {
        keywordsMeta = document.createElement('meta');
        keywordsMeta.name = 'keywords';
        document.head.appendChild(keywordsMeta);
      }
      keywordsMeta.content = keywords.join(', ');
    }

    // Language
    document.documentElement.lang = inLanguage.split('-')[0];

    // Canonical - always add canonical tag
    const currentPath = window.location.pathname;
    const canonicalUrl = canonical || currentPath;
    const href = canonicalUrl.startsWith('http') ? canonicalUrl : `${window.location.origin}${canonicalUrl}`;
    
    let linkCanonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.rel = 'canonical';
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.href = href;

    // Robots meta tag for indexing control
    // Si la página tiene robots definido explícitamente en BD, respetarlo
    // Root path siempre indexable para SEO
    // Solo aplicar noindex por defecto a páginas EN sin configuración
    const isEnglishRoute = currentPath.startsWith('/en');
    const isRootPath = currentPath === '/' || currentPath === '';
    const effectiveRobots = robots 
      ? robots 
      : (isRootPath ? 'index, follow' : (isEnglishRoute ? 'noindex, follow' : 'index, follow'));
    
    let robotsMeta = document.querySelector('meta[name="robots"]') as HTMLMetaElement | null;
    if (!robotsMeta) {
      robotsMeta = document.createElement('meta');
      robotsMeta.name = 'robots';
      document.head.appendChild(robotsMeta);
    }
    robotsMeta.content = effectiveRobots;

    // Hreflang tags for multilingual support
    // Remove existing hreflang tags first
    document.querySelectorAll('link[rel="alternate"][hreflang]').forEach(el => el.remove());
    
    // Determine the base path (without language prefix)
    const pathWithoutLang = currentPath.replace(/^\/(es|en)/, '');
    
    // Add Spanish version
    const hreflangEs = document.createElement('link');
    hreflangEs.rel = 'alternate';
    hreflangEs.hreflang = 'es';
    hreflangEs.href = `${window.location.origin}/es${pathWithoutLang}`;
    document.head.appendChild(hreflangEs);
    
    // Add English version
    const hreflangEn = document.createElement('link');
    hreflangEn.rel = 'alternate';
    hreflangEn.hreflang = 'en';
    hreflangEn.href = `${window.location.origin}/en${pathWithoutLang}`;
    document.head.appendChild(hreflangEn);
    
    // Add x-default (default to Spanish)
    const hreflangDefault = document.createElement('link');
    hreflangDefault.rel = 'alternate';
    hreflangDefault.hreflang = 'x-default';
    hreflangDefault.href = `${window.location.origin}/es${pathWithoutLang}`;
    document.head.appendChild(hreflangDefault);

    // Sitemap reference
    let linkSitemap = document.querySelector('link[rel="sitemap"]') as HTMLLinkElement | null;
    if (!linkSitemap) {
      linkSitemap = document.createElement('link');
      linkSitemap.rel = 'sitemap';
      linkSitemap.type = 'application/xml';
      document.head.appendChild(linkSitemap);
    }
    linkSitemap.href = `${window.location.origin}/sitemap.xml`;

    // Open Graph & Twitter
    const pageUrl = canonical
      ? (canonical.startsWith('http') ? canonical : `${window.location.origin}${canonical}`)
      : `${window.location.origin}${currentPath}`;

    const setMeta = (attr: 'name' | 'property', key: string, value: string) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute('content', value);
    };

    setMeta('property', 'og:type', ogType);
    setMeta('property', 'og:site_name', 'Hayas Marketing');
    setMeta('property', 'og:url', pageUrl);
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:locale', inLanguage);
    if (description) setMeta('property', 'og:description', description);
    if (ogImage) {
      const fullImageUrl = ogImage.startsWith('http') ? ogImage : `${window.location.origin}${ogImage}`;
      setMeta('property', 'og:image', fullImageUrl);
      setMeta('property', 'og:image:alt', title);
    }

    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:url', pageUrl);
    setMeta('name', 'twitter:title', title);
    if (description) setMeta('name', 'twitter:description', description);
    if (ogImage) {
      const fullImageUrl = ogImage.startsWith('http') ? ogImage : `${window.location.origin}${ogImage}`;
      setMeta('name', 'twitter:image', fullImageUrl);
    }

    // Enhanced structured data with automatic additions
    // Clear existing JSON-LD scripts first to prevent duplicates
    const existingScripts = document.querySelectorAll('script[type="application/ld+json"][data-seo-managed]');
    existingScripts.forEach(script => script.remove());
    
    const addJsonLdScript = (data: Record<string, any>, label?: string) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-seo-managed', 'true');
      if (label) script.setAttribute('data-schema-type', label);
      script.textContent = JSON.stringify(data);
      document.head.appendChild(script);
    };
    
    // Always include organization schema
    addJsonLdScript(hayasOrganizationSchema, 'Organization');

    // Add breadcrumb schema if applicable
    if (canonical && canonical !== '/') {
      const pathSegments = canonical.split('/').filter(Boolean);
      // Detect language from path or inLanguage prop
      const isEnglish = inLanguage.startsWith('en') || currentPath.startsWith('/en');
      const homeLabel = isEnglish ? 'Home' : 'Inicio';
      
      if (pathSegments.length > 0) {
        const breadcrumbSchema = {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: homeLabel,
              item: `${window.location.origin}/${isEnglish ? 'en' : 'es'}`
            },
            ...pathSegments
              .filter(segment => segment !== 'es' && segment !== 'en') // Exclude language prefix
              .map((segment, index) => ({
                "@type": "ListItem",
                position: index + 2,
                name: segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' '),
                item: `${window.location.origin}/${pathSegments.slice(0, pathSegments.indexOf(segment) + 1).join('/')}`
              }))
          ]
        };
        
        addJsonLdScript(breadcrumbSchema, 'BreadcrumbList');
      }
    }

    // FAQPage schema if FAQs provided
    if (faqs && faqs.length > 0) {
      const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer
          }
        }))
      };
      
      addJsonLdScript(faqSchema, 'FAQPage');
    }

    // Enhanced structured data with about and mentions
    if (structuredData) {
      const dataArray = Array.isArray(structuredData) ? structuredData : [structuredData];
      dataArray.forEach((data) => {
        // Enhance with about and mentions if provided
        const enhancedData = { 
          ...data,
          ...(inLanguage && { inLanguage }),
          ...(about && about.length > 0 && { about }),
          ...(mentions && mentions.length > 0 && { mentions })
        };
        
        addJsonLdScript(enhancedData, data['@type'] || 'StructuredData');
      });
    }

    return () => {
      // Only remove scripts if component is truly unmounting (not just re-rendering)
      // This prevents React.StrictMode double-render from removing scripts prematurely
    };
  }, [title, description, keywords, canonical, structuredData, ogImage, ogType, inLanguage, about, mentions, faqs, robots]);

  return null;
};

export default Seo;
