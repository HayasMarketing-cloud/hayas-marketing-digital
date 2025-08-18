import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, Tag, TrendingUp, Calendar } from 'lucide-react';
import { getTagsByParent, tagsLevel1, type TagLevel1 } from '@/data/blogTags';

interface BlogSidebarProps {
  currentTag?: string;
  allPosts?: Array<{
    tags: string[];
  }>;
}

const BlogSidebar: React.FC<BlogSidebarProps> = ({ currentTag, allPosts = [] }) => {
  const currentTagData = tagsLevel1.find(tag => tag.slug === currentTag);
  const relatedSubtags = currentTag ? getTagsByParent(currentTag) : [];
  
  // Función para contar artículos por tag
  const getArticleCountByTag = (tagSlug: string): number => {
    return allPosts.filter(post => 
      post.tags.some(tag => tag === tagSlug || tag.replace(/\s+/g, '-').toLowerCase() === tagSlug)
    ).length;
  };
  
  return (
    <aside className="space-y-6">
      {/* Newsletter Subscription */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <Mail className="h-5 w-5 text-primary" />
            Newsletter
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Recibe las últimas tendencias de marketing digital directamente en tu email.
          </p>
          <div className="space-y-2">
            <Input 
              type="email" 
              placeholder="Tu email" 
              className="w-full"
            />
            <Button className="w-full" size="sm">
              Suscribirse
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Tags Relacionados */}
      {currentTagData && relatedSubtags.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Tag className="h-5 w-5 text-primary" />
              Subtemas en {currentTagData.name}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {relatedSubtags.map((subtag) => (
                <Link key={subtag.slug} to={`/blog/tag/${subtag.slug}`}>
                  <Badge 
                    variant="outline" 
                    className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
                  >
                    {subtag.name}
                  </Badge>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Todas las Categorías */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <TrendingUp className="h-5 w-5 text-primary" />
            Todas las Categorías
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {tagsLevel1.map((tag) => (
              <Link 
                key={tag.slug} 
                to={`/blog/tag/${tag.slug}`}
                className="block"
              >
                 <div className="flex items-center justify-between p-2 rounded-lg hover:bg-muted/50 transition-colors">
                   <span className="text-sm font-medium">{tag.name}</span>
                   <Badge variant="secondary" className="text-xs">
                     {getArticleCountByTag(tag.slug)} artículo{getArticleCountByTag(tag.slug) !== 1 ? 's' : ''}
                   </Badge>
                </div>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>
    </aside>
  );
};

export default BlogSidebar;