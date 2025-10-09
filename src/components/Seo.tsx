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
    try {
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

      // Robots meta tag for indexing control
      if (robots) {
        let robotsMeta = document.querySelector('meta[name="robots"]') as HTMLMetaElement | null;
        if (!robotsMeta) {
          robotsMeta = document.createElement('meta');
          robotsMeta.name = 'robots';
          document.head.appendChild(robotsMeta);
        }
        robotsMeta.content = robots;
      } else {
        // Default to index, follow if no robots specified
        let robotsMeta = document.querySelector('meta[name="robots"]') as HTMLMetaElement | null;
        if (!robotsMeta) {
          robotsMeta = document.createElement('meta');
          robotsMeta.name = 'robots';
          document.head.appendChild(robotsMeta);
        }
        robotsMeta.content = 'index, follow';
      }

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
      const created: HTMLScriptElement[] = [];
      
      // Always include organization schema
      const orgScript = document.createElement('script');
      orgScript.type = 'application/ld+json';
      orgScript.text = JSON.stringify(hayasOrganizationSchema);
      document.head.appendChild(orgScript);
      created.push(orgScript);

      // Add breadcrumb schema if applicable
      if (canonical && canonical !== '/') {
        const pathSegments = canonical.split('/').filter(Boolean);
        if (pathSegments.length > 0) {
          const breadcrumbSchema = {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Inicio",
                item: `${window.location.origin}/`
              },
              ...pathSegments.map((segment, index) => ({
                "@type": "ListItem",
                position: index + 2,
                name: segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' '),
                item: `${window.location.origin}/${pathSegments.slice(0, index + 1).join('/')}`
              }))
            ]
          };
          
          const breadcrumbScript = document.createElement('script');
          breadcrumbScript.type = 'application/ld+json';
          breadcrumbScript.text = JSON.stringify(breadcrumbSchema);
          document.head.appendChild(breadcrumbScript);
          created.push(breadcrumbScript);
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
        
        const faqScript = document.createElement('script');
        faqScript.type = 'application/ld+json';
        faqScript.text = JSON.stringify(faqSchema);
        document.head.appendChild(faqScript);
        created.push(faqScript);
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
          
          const s = document.createElement('script');
          s.type = 'application/ld+json';
          s.text = JSON.stringify(enhancedData);
          document.head.appendChild(s);
          created.push(s);
        });
      }

      return () => {
        created.forEach((s) => {
          if (document.head.contains(s)) document.head.removeChild(s);
        });
      };
    } catch (error) {
      console.error('Error en SEO component:', error);
      return () => {}; // Return empty cleanup function
    }
  }, [title, description, keywords, canonical, structuredData, ogImage, ogType, inLanguage, about, mentions, faqs, robots]);

  return null;
};

export default Seo;
