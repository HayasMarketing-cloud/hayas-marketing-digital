import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { tagsLevel1 } from '@/data/blogTags';
import { cn } from '@/lib/utils';
import { useLocalizedRoutes } from '@/hooks/useLocalizedRoutes';

interface BlogTagFilterProps {
  className?: string;
}

const BlogTagFilter: React.FC<BlogTagFilterProps> = ({ className }) => {
  const { tag } = useParams();
  const { getRoute, withLanguagePrefix } = useLocalizedRoutes();
  
  return (
    <div className={cn("bg-muted/30 border-y border-border", className)}>
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-wrap gap-3 justify-center">
          <Link to={getRoute('blog')}>
            <Badge 
              variant={!tag ? "default" : "secondary"}
              className={cn(
                "px-4 py-2 text-sm font-medium transition-all hover:scale-105",
                !tag 
                  ? "bg-primary text-primary-foreground hover:bg-primary/90" 
                  : "hover:bg-secondary/80"
              )}
            >
              Todos los artículos
            </Badge>
          </Link>
          
          {tagsLevel1.map((tagData) => (
            <Link key={tagData.slug} to={withLanguagePrefix(`/blog/tag/${tagData.slug}`)}>
              <Badge 
                variant={tag === tagData.slug ? "default" : "secondary"}
                className={cn(
                  "px-4 py-2 text-sm font-medium transition-all hover:scale-105",
                  tag === tagData.slug 
                    ? "bg-primary text-primary-foreground hover:bg-primary/90" 
                    : "hover:bg-secondary/80"
                )}
              >
                {tagData.name}
              </Badge>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogTagFilter;