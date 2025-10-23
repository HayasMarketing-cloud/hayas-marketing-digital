import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { LayoutDashboard, Map, Globe, ArrowRight, BarChart3 } from 'lucide-react';

const SEONavigation: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { path: '/admin/seo', label: 'Dashboard', icon: LayoutDashboard },
    { path: '/admin/seo/gsc', label: 'Search Console', icon: BarChart3 },
    { path: '/admin/seo/sitemap', label: 'Sitemap', icon: Map },
    { path: '/admin/seo/robots', label: 'Robots.txt', icon: Globe },
    { path: '/admin/seo/redirects', label: 'Redirecciones', icon: ArrowRight },
  ];

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex items-center space-x-2 h-14 overflow-x-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  'flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap',
                  isActive
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                )}
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default SEONavigation;
