import { useEffect } from 'react';

interface SeoProps {
  title: string;
  description?: string;
  canonical?: string; // path or absolute URL
  structuredData?: Record<string, any>;
}

const Seo = ({ title, description, canonical, structuredData }: SeoProps) => {
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
  }, [title, description, canonical, structuredData]);

  return null;
};

export default Seo;
