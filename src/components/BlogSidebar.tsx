import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail } from 'lucide-react';

interface BlogSidebarProps {
  currentTag?: string;
  allPosts?: Array<{
    tags: string[];
  }>;
}

const BlogSidebar: React.FC<BlogSidebarProps> = ({ currentTag, allPosts = [] }) => {
  
  return (
    <aside className="space-y-6">
      {/* Newsletter Subscription */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <Mail className="h-5 w-5 text-primary" />
            Newsletter de Marketing
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Recibe las últimas tendencias de marketing digital, estrategias exclusivas y contenido premium directamente en tu email.
          </p>
          <div className="space-y-2">
            <Input 
              type="email" 
              placeholder="Tu email profesional" 
              className="w-full"
            />
            <Button className="w-full" size="sm">
              Suscribirse Gratis
            </Button>
          </div>
          <p className="text-xs text-muted-foreground text-center">
            📧 Sin spam. Cancela cuando quieras.
          </p>
        </CardContent>
      </Card>
    </aside>
  );
};

export default BlogSidebar;