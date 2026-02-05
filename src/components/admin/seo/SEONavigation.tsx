import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { FileText, Home, Languages, HelpCircle, Image, Target } from 'lucide-react';

export const SEONavigation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="border-b bg-muted/30">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Panel de Administración</h2>
          
          <div className="flex gap-2">
            <Button
              variant="ghost"
              onClick={() => navigate('/admin')}
              size="sm"
            >
              <Home className="h-4 w-4 mr-2" />
              Dashboard
            </Button>
            <Button
              variant={isActive('/admin/seo/pages') ? 'default' : 'outline'}
              onClick={() => navigate('/admin/seo/pages')}
              size="sm"
            >
              <FileText className="h-4 w-4 mr-2" />
              Páginas SEO
            </Button>
            <Button
              variant={isActive('/admin/faq-validator') ? 'default' : 'outline'}
              onClick={() => navigate('/admin/faq-validator')}
              size="sm"
            >
              <HelpCircle className="h-4 w-4 mr-2" />
              FAQ Validator
            </Button>
            <Button
              variant={isActive('/admin/translations') ? 'default' : 'outline'}
              onClick={() => navigate('/admin/translations')}
              size="sm"
            >
              <Languages className="h-4 w-4 mr-2" />
              Traducciones
            </Button>
            <Button
              variant={isActive('/admin/content-hub') ? 'default' : 'outline'}
              onClick={() => navigate('/admin/content-hub')}
              size="sm"
            >
              <Target className="h-4 w-4 mr-2" />
              Content Hub
            </Button>
            <Button
              variant={isActive('/admin/media-library') ? 'default' : 'outline'}
              onClick={() => navigate('/admin/media-library')}
              size="sm"
            >
              <Image className="h-4 w-4 mr-2" />
              Media Library
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
