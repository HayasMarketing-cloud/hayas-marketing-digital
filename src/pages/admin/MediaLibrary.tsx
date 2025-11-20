import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { SEONavigation } from '@/components/admin/seo/SEONavigation';
import { AdminBreadcrumbs } from '@/components/admin/AdminBreadcrumbs';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Image, Palette, Layout, Package, Sparkles } from 'lucide-react';
import { ButtonsPreview } from '@/components/admin/media/ButtonsPreview';
import { BannersPreview } from '@/components/admin/media/BannersPreview';
import { IconsPreview } from '@/components/admin/media/IconsPreview';
import { ComponentsPreview } from '@/components/admin/media/ComponentsPreview';
import { ImagesPreview } from '@/components/admin/media/ImagesPreview';
import { SectionsPreview } from '@/components/admin/media/SectionsPreview';

const MediaLibrary = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <SEONavigation />
      
      <div className="container mx-auto px-4 py-8">
        <AdminBreadcrumbs currentPage="Media Library" className="mb-6" />
        
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <Sparkles className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold">Biblioteca de Medios</h1>
          </div>
          <p className="text-muted-foreground">
            Previsualización y catálogo de todos los componentes visuales, botones, iconos y elementos de diseño del sitio web.
          </p>
        </div>

        {/* Buscador global */}
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Buscar componentes, botones, iconos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </CardContent>
        </Card>

        {/* Tabs de categorías */}
        <Tabs defaultValue="buttons" className="space-y-6">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="buttons" className="gap-2">
              <Package className="h-4 w-4" />
              Botones CTA
            </TabsTrigger>
            <TabsTrigger value="banners" className="gap-2">
              <Image className="h-4 w-4" />
              Banners
            </TabsTrigger>
            <TabsTrigger value="sections" className="gap-2">
              <Layout className="h-4 w-4" />
              Secciones
            </TabsTrigger>
            <TabsTrigger value="icons" className="gap-2">
              <Sparkles className="h-4 w-4" />
              Iconos
            </TabsTrigger>
            <TabsTrigger value="components" className="gap-2">
              <Palette className="h-4 w-4" />
              Componentes
            </TabsTrigger>
            <TabsTrigger value="images" className="gap-2">
              <Image className="h-4 w-4" />
              Imágenes
            </TabsTrigger>
          </TabsList>

          <TabsContent value="buttons">
            <ButtonsPreview searchTerm={searchTerm} />
          </TabsContent>

          <TabsContent value="banners">
            <BannersPreview searchTerm={searchTerm} />
          </TabsContent>

          <TabsContent value="sections">
            <SectionsPreview searchTerm={searchTerm} />
          </TabsContent>

          <TabsContent value="icons">
            <IconsPreview searchTerm={searchTerm} />
          </TabsContent>

          <TabsContent value="components">
            <ComponentsPreview searchTerm={searchTerm} />
          </TabsContent>

          <TabsContent value="images">
            <ImagesPreview searchTerm={searchTerm} />
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
};

export default MediaLibrary;
