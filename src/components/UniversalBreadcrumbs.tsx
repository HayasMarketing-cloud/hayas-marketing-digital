import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from '@/components/ui/breadcrumb';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface UniversalBreadcrumbsProps {
  customItems?: BreadcrumbItem[];
  className?: string;
}

/**
 * Universal breadcrumbs component that automatically generates breadcrumbs
 * based on current route or accepts custom items
 */
export const UniversalBreadcrumbs: React.FC<UniversalBreadcrumbsProps> = ({
  customItems,
  className = ''
}) => {
  const location = useLocation();
  
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    if (customItems) return customItems;
    
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const breadcrumbs: BreadcrumbItem[] = [
      { label: 'Inicio', href: '/es' }
    ];

    // Build breadcrumbs from path segments
    let currentPath = '';
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      
      // Generate readable labels
      const label = getReadableLabel(segment, currentPath);
      
      // Last item shouldn't have href (current page)
      if (index === pathSegments.length - 1) {
        breadcrumbs.push({ label });
      } else {
        breadcrumbs.push({ label, href: currentPath });
      }
    });

    return breadcrumbs;
  };

  const getReadableLabel = (segment: string, fullPath: string): string => {
    // Custom mappings for better UX
    const labelMap: { [key: string]: string } = {
      'casos-exito': 'Casos de Éxito',
      'servicios': 'Servicios',
      'soluciones': 'Soluciones',
      'blog': 'Blog',
      'nosotros': 'Nosotros',
      'contacto': 'Contacto',
      'agendar-reunion': 'Agendar Reunión',
      'solicitar-consulta': 'Solicitar Consulta',
      'kit-digital': 'Kit Digital',
      'kit-consulting': 'Kit Consulting',
      'implantacion-crm': 'Implantación CRM',
      'administracion-crm': 'Administración CRM',
      'automatizacion-procesos-ventas': 'Automatización de Ventas',
      'creacion-marca': 'Creación de Marca',
      'diseno-web': 'Diseño Web',
      'seo-positioning': 'Posicionamiento SEO',
      'publicidad-google-ads': 'Publicidad Google Ads',
      'publicidad-redes-sociales': 'Publicidad en Redes',
      'gestion-redes-sociales': 'Gestión de Redes',
      'email-marketing-automatizaciones': 'Email Marketing',
      'estrategia-contenidos': 'Estrategia de Contenidos',
      'consultoria-estrategica-analitica': 'Consultoría Estratégica',
      'captacion-leads-clientes': 'Captación de Leads',
      'integraciones-ia-procesos': 'Integraciones IA',
      'impulsa-tu-marca': 'Impulsa tu Marca',
      'conecta-con-tus-clientes': 'Conecta con tus Clientes',
      'activa-tus-ventas': 'Activa tus Ventas',
      'marketing-visibilidad': 'Marketing y Visibilidad'
    };

    if (labelMap[segment]) {
      return labelMap[segment];
    }

    // For case studies, try to extract company name
    if (fullPath.includes('/casos-exito/')) {
      return segment.split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    }

    // Default: capitalize and replace dashes
    return segment.split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const breadcrumbs = generateBreadcrumbs();

  if (breadcrumbs.length <= 1) {
    return null; // Don't show breadcrumbs on home page
  }

  return (
    <section className={`py-4 bg-muted/30 border-b ${className}`}>
      <div className="container mx-auto px-4">
        <Breadcrumb>
          <BreadcrumbList>
            {breadcrumbs.map((item, index) => (
              <React.Fragment key={index}>
                <BreadcrumbItem>
                  {item.href ? (
                    <BreadcrumbLink asChild>
                      <Link to={item.href}>{item.label}</Link>
                    </BreadcrumbLink>
                  ) : (
                    <BreadcrumbPage>{item.label}</BreadcrumbPage>
                  )}
                </BreadcrumbItem>
                {index < breadcrumbs.length - 1 && <BreadcrumbSeparator />}
              </React.Fragment>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </section>
  );
};

export default UniversalBreadcrumbs;