import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { AdminBreadcrumbs } from '@/components/admin/AdminBreadcrumbs';
import { SEONavigation } from '@/components/admin/seo/SEONavigation';
import { ColorPalette } from '@/components/admin/brandbook/ColorPalette';
import { LogoSection } from '@/components/admin/brandbook/LogoSection';
import { TypographySection } from '@/components/admin/brandbook/TypographySection';
import { Separator } from '@/components/ui/separator';

const BrandBook = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <SEONavigation />
        
        <div className="mb-6">
          <AdminBreadcrumbs currentPage="Brand Book" />
        </div>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-3 text-gradient-primary">
            Brand Book Hayas Marketing
          </h1>
          <p className="text-muted-foreground text-lg">
            Guía completa de identidad visual corporativa: colores, tipografías y recursos gráficos
          </p>
        </div>

        {/* Paleta de Colores */}
        <section className="mb-12">
          <ColorPalette />
        </section>

        <Separator className="my-12" />

        {/* Logotipos */}
        <section className="mb-12">
          <LogoSection />
        </section>

        <Separator className="my-12" />

        {/* Tipografías */}
        <section>
          <TypographySection />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BrandBook;
