import { useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { AdminToolCard } from '@/components/admin/AdminToolCard';
import { 
  BarChart3, 
  FileSearch, 
  Globe, 
  FileText, 
  Map, 
  Bot, 
  ArrowRightLeft, 
  Bell,
  Languages,
  Users,
  Settings,
  TrendingUp
} from 'lucide-react';

const AdminDashboard = () => {
  const navigate = useNavigate();

  const seoTools = [
    {
      title: 'SEO Dashboard',
      description: 'Centro de control SEO con métricas generales y estado de salud',
      icon: BarChart3,
      path: '/admin/seo',
      status: 'active' as const,
      category: 'SEO & Visibilidad'
    },
    {
      title: 'Google Search Console',
      description: 'Análisis completo de datos de GSC con páginas y keywords',
      icon: TrendingUp,
      path: '/admin/seo/gsc',
      status: 'active' as const,
      category: 'SEO & Visibilidad'
    },
    {
      title: 'Gestión de Páginas SEO',
      description: 'Administra metadatos, schemas y configuración SEO de páginas',
      icon: FileSearch,
      path: '/admin/seo/pages',
      status: 'active' as const,
      category: 'SEO & Visibilidad'
    },
    {
      title: 'Sitemap Manager',
      description: 'Gestiona y descarga sitemaps XML bilingües',
      icon: Map,
      path: '/admin/seo/sitemap',
      status: 'active' as const,
      category: 'SEO & Visibilidad'
    },
    {
      title: 'Robots.txt Manager',
      description: 'Visualiza y descarga el archivo robots.txt',
      icon: Bot,
      path: '/admin/seo/robots',
      status: 'active' as const,
      category: 'SEO & Visibilidad'
    },
    {
      title: 'Redirects Manager',
      description: 'Gestiona redirecciones 301 y análisis de .htaccess',
      icon: ArrowRightLeft,
      path: '/admin/seo/redirects',
      status: 'active' as const,
      category: 'SEO & Visibilidad'
    },
    {
      title: 'IndexNow Manager',
      description: 'Notifica cambios a buscadores con IndexNow API',
      icon: Bell,
      path: '/admin/seo/indexnow',
      status: 'active' as const,
      category: 'SEO & Visibilidad'
    }
  ];

  const contentTools = [
    {
      title: 'Translation Manager',
      description: 'Gestiona traducciones y contenido multiidioma',
      icon: Languages,
      path: '/admin/translations',
      status: 'active' as const,
      category: 'Contenido & Traducciones'
    }
  ];

  const futureTools = [
    {
      title: 'Analytics',
      description: 'Métricas de tráfico y comportamiento de usuarios',
      icon: BarChart3,
      path: '#',
      status: 'coming-soon' as const,
      category: 'Próximamente'
    },
    {
      title: 'Gestión de Usuarios',
      description: 'Administra roles y permisos de usuarios',
      icon: Users,
      path: '#',
      status: 'coming-soon' as const,
      category: 'Próximamente'
    },
    {
      title: 'Configuración',
      description: 'Ajustes generales del sistema',
      icon: Settings,
      path: '#',
      status: 'coming-soon' as const,
      category: 'Próximamente'
    }
  ];

  const totalTools = seoTools.length + contentTools.length;

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Centro de Control Administrativo
          </h1>
          <p className="text-muted-foreground text-lg mb-6">
            Gestiona todas las herramientas de administración y configuración desde un único lugar
          </p>
          
          {/* Metrics Summary */}
          <div className="flex justify-center gap-6 flex-wrap">
            <div className="bg-card border rounded-lg px-6 py-3">
              <div className="text-2xl font-bold text-primary">{totalTools}</div>
              <div className="text-sm text-muted-foreground">Herramientas Activas</div>
            </div>
            <div className="bg-card border rounded-lg px-6 py-3">
              <div className="text-2xl font-bold text-accent">{futureTools.length}</div>
              <div className="text-sm text-muted-foreground">Próximamente</div>
            </div>
          </div>
        </div>

        {/* SEO & Visibility Tools */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Globe className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold">SEO & Visibilidad</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {seoTools.map((tool) => (
              <AdminToolCard
                key={tool.path}
                {...tool}
                onClick={() => navigate(tool.path)}
              />
            ))}
          </div>
        </section>

        {/* Content & Translations Tools */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Languages className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold">Contenido & Traducciones</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {contentTools.map((tool) => (
              <AdminToolCard
                key={tool.path}
                {...tool}
                onClick={() => navigate(tool.path)}
              />
            ))}
          </div>
        </section>

        {/* Future Tools */}
        <section>
          <div className="flex items-center gap-2 mb-6">
            <Settings className="h-6 w-6 text-muted-foreground" />
            <h2 className="text-2xl font-bold text-muted-foreground">Próximamente</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {futureTools.map((tool, index) => (
              <AdminToolCard
                key={`future-${index}`}
                {...tool}
                onClick={() => {}}
              />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AdminDashboard;
