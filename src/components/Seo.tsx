import { useEffect } from 'react';

interface SeoProps {
  title: string;
  description?: string;
  canonical?: string; // path or absolute URL
  structuredData?: Record<string, any>;
  ogImage?: string; // absolute or path from root
}

const Seo = ({ title, description, canonical, structuredData, ogImage }: SeoProps) => {
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

    // Canonical
    if (canonical) {
      const href = canonical.startsWith('http') ? canonical : `${window.location.origin}${canonical}`;
      let linkCanonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
      if (!linkCanonical) {
        linkCanonical = document.createElement('link');
        linkCanonical.rel = 'canonical';
        document.head.appendChild(linkCanonical);
      }
      linkCanonical.href = href;
    }

    // Open Graph & Twitter
    const pageUrl = canonical
      ? (canonical.startsWith('http') ? canonical : `${window.location.origin}${canonical}`)
      : window.location.href;

    const setMeta = (attr: 'name' | 'property', key: string, value: string) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute('content', value);
    };

    setMeta('property', 'og:type', 'website');
    setMeta('property', 'og:site_name', 'Hayas Marketing');
    setMeta('property', 'og:url', pageUrl);
    setMeta('property', 'og:title', title);
    if (description) setMeta('property', 'og:description', description);
    if (ogImage) setMeta('property', 'og:image', ogImage);

    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:url', pageUrl);
    setMeta('name', 'twitter:title', title);
    if (description) setMeta('name', 'twitter:description', description);
    if (ogImage) setMeta('name', 'twitter:image', ogImage);

    // Structured data
    let scriptEl: HTMLScriptElement | null = null;
    if (structuredData) {
      scriptEl = document.createElement('script');
      scriptEl.type = 'application/ld+json';
      scriptEl.text = JSON.stringify(structuredData);
      document.head.appendChild(scriptEl);
    }

    return () => {
      if (scriptEl && document.head.contains(scriptEl)) {
        document.head.removeChild(scriptEl);
      }
    };
  }, [title, description, canonical, structuredData, ogImage]);

  return null;
};

export default Seo;
