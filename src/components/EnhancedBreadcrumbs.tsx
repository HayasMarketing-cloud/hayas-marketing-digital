import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { getTagBySlug, getParentTag } from '@/data/blogTags';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface EnhancedBreadcrumbsProps {
  items?: BreadcrumbItem[];
  currentTag?: string;
  postTitle?: string;
  className?: string;
}

const EnhancedBreadcrumbs: React.FC<EnhancedBreadcrumbsProps> = ({ 
  items, 
  currentTag, 
  postTitle,
  className = "container mx-auto px-4 py-4"
}) => {
  // Si se proporcionan items personalizados, usarlos
  if (items) {
    return (
      <nav className={className}>
        <div className="flex items-center space-x-2 text-sm">
          <Link 
            to="/" 
            className="flex items-center text-muted-foreground hover:text-primary transition-colors"
          >
            <Home className="h-4 w-4 mr-1" />
            Inicio
          </Link>
          
          {items.map((item, index) => (
            <React.Fragment key={index}>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
              {index === items.length - 1 ? (
                <span className="text-foreground font-medium">{item.label}</span>
              ) : (
                <Link 
                  to={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </React.Fragment>
          ))}
        </div>
      </nav>
    );
  }

  // Generar breadcrumbs automáticamente para tags
  const breadcrumbItems: BreadcrumbItem[] = [
    { label: "Blog", href: "/blog" }
  ];

  if (currentTag) {
    const tagData = getTagBySlug(currentTag);
    const parentTag = getParentTag(currentTag);
    
    // Si es un subtag, añadir el tag padre primero
    if (parentTag && tagData && 'parent' in tagData) {
      breadcrumbItems.push({
        label: parentTag.name,
        href: `/blog/tag/${parentTag.slug}`
      });
    }
    
    // Añadir el tag actual
    if (tagData) {
      breadcrumbItems.push({
        label: tagData.name,
        href: `/blog/tag/${tagData.slug}`
      });
    }
  }

  // Si hay un título de post, añadirlo como último elemento
  if (postTitle) {
    breadcrumbItems.push({
      label: postTitle,
      href: "#"
    });
  }

  return (
    <nav className={className}>
      <div className="flex items-center space-x-2 text-sm">
        <Link 
          to="/" 
          className="flex items-center text-muted-foreground hover:text-primary transition-colors"
        >
          <Home className="h-4 w-4 mr-1" />
          Inicio
        </Link>
        
        {breadcrumbItems.map((item, index) => (
          <React.Fragment key={index}>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
            {index === breadcrumbItems.length - 1 || item.href === "#" ? (
              <span className="text-foreground font-medium">{item.label}</span>
            ) : (
              <Link 
                to={item.href}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            )}
          </React.Fragment>
        ))}
      </div>
    </nav>
  );
};

export default EnhancedBreadcrumbs;