import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem as BreadcrumbItemUI,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from '@/components/ui/breadcrumb';
import { useLanguage } from '@/contexts/LanguageContext';
import { buildBreadcrumbTrail, type BreadcrumbNode } from '@/data/breadcrumbHierarchy';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface UniversalBreadcrumbsProps {
  customItems?: BreadcrumbItem[];
  className?: string;
}

/**
 * Universal breadcrumbs component using the centralized semantic hierarchy.
 * Automatically maps services to their parent Activation for knowledge graph coherence.
 */
export const UniversalBreadcrumbs: React.FC<UniversalBreadcrumbsProps> = ({
  customItems,
  className = ''
}) => {
  const location = useLocation();
  const { language } = useLanguage();

  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    if (customItems) return customItems;

    const lang = language === 'en' ? 'en' : 'es';
    const trail = buildBreadcrumbTrail(location.pathname, lang);

    // Convert BreadcrumbNode[] to the display format
    // Last item has no href (current page)
    return trail.map((node, index) => ({
      label: node.label,
      href: index === trail.length - 1 ? undefined : node.href,
    }));
  };

  const breadcrumbs = generateBreadcrumbs();

  if (breadcrumbs.length <= 1) {
    return null;
  }

  return (
    <section className={`py-4 bg-muted/30 border-b ${className}`}>
      <div className="container mx-auto px-4">
        <Breadcrumb>
          <BreadcrumbList>
            {breadcrumbs.map((item, index) => (
              <React.Fragment key={`breadcrumb-${index}`}>
                <BreadcrumbItemUI>
                  {item.href ? (
                    <BreadcrumbLink asChild>
                      <Link to={item.href}>{item.label}</Link>
                    </BreadcrumbLink>
                  ) : (
                    <BreadcrumbPage>{item.label}</BreadcrumbPage>
                  )}
                </BreadcrumbItemUI>
                {index < breadcrumbs.length - 1 && (
                  <BreadcrumbSeparator />
                )}
              </React.Fragment>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </section>
  );
};

export default UniversalBreadcrumbs;
