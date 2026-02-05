import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Users, Tag, FileText, BookOpen } from 'lucide-react';
import { AudiencesSection } from './sections/AudiencesSection';
import { CategoriesSection } from './sections/CategoriesSection';
import { SourcesSection } from './sections/SourcesSection';
import { BriefingSection } from './sections/BriefingSection';

export const BriefingEstrategico: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <BookOpen className="h-6 w-6 text-primary" />
          Briefing Estratégico
        </h1>
        <p className="text-muted-foreground mt-1">
          Gestiona audiencias, categorías, fuentes y plantillas de briefing
        </p>
      </div>

      <Tabs defaultValue="audiences">
        <TabsList>
          <TabsTrigger value="audiences" className="gap-2">
            <Users className="h-4 w-4" />
            Audiencias
          </TabsTrigger>
          <TabsTrigger value="categories" className="gap-2">
            <Tag className="h-4 w-4" />
            Categorías
          </TabsTrigger>
          <TabsTrigger value="sources" className="gap-2">
            <FileText className="h-4 w-4" />
            Fuentes
          </TabsTrigger>
          <TabsTrigger value="briefing" className="gap-2">
            <BookOpen className="h-4 w-4" />
            Plantillas
          </TabsTrigger>
        </TabsList>

        <TabsContent value="audiences" className="mt-4">
          <AudiencesSection />
        </TabsContent>
        <TabsContent value="categories" className="mt-4">
          <CategoriesSection />
        </TabsContent>
        <TabsContent value="sources" className="mt-4">
          <SourcesSection />
        </TabsContent>
        <TabsContent value="briefing" className="mt-4">
          <BriefingSection />
        </TabsContent>
      </Tabs>
    </div>
  );
};
