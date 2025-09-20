import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, Home } from 'lucide-react';

interface ArticleBreadcrumbsProps {
  position?: 'top' | 'bottom';
  showHome?: boolean;
}

const ArticleBreadcrumbs: React.FC<ArticleBreadcrumbsProps> = ({ 
  position = 'top', 
  showHome = false 
}) => {
  const topClasses = "container mx-auto px-4 pt-4 md:pt-6 pb-8";
  const bottomClasses = "container mx-auto px-4 py-8 border-t border-border bg-muted/30";

  return (
    <div className={position === 'top' ? topClasses : bottomClasses}>
      <nav className="flex items-center space-x-2 text-sm">
        {showHome && (
          <>
        <Link 
          to="/es" 
          className="flex items-center text-muted-foreground hover:text-primary transition-colors"
        >
              <Home className="h-4 w-4 mr-1" />
              Inicio
            </Link>
            <span className="text-muted-foreground">/</span>
          </>
        )}
        
        <Link 
          to="/es/blog" 
          className="flex items-center text-muted-foreground hover:text-primary transition-colors group"
        >
          <ChevronLeft className="h-4 w-4 mr-1 group-hover:-translate-x-1 transition-transform" />
          {position === 'top' ? 'Volver al blog' : 'Ver más artículos'}
        </Link>
      </nav>
    </div>
  );
};

export default ArticleBreadcrumbs;