import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { SEONavigation } from '@/components/admin/seo/SEONavigation';
import { AdminBreadcrumbs } from '@/components/admin/AdminBreadcrumbs';
import { KeywordTracker } from '@/components/admin/content-hub/KeywordTracker';
import { BriefingEstrategico } from '@/components/admin/content-hub/BriefingEstrategico';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Target, BookOpen } from 'lucide-react';

const ContentHub = () => {
  const [activeSection, setActiveSection] = useState('keywords');

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      <SEONavigation />
      
      <main className="flex-grow container mx-auto px-4 py-6 mt-24">
        <AdminBreadcrumbs currentPage="Content Hub" className="mb-6" />
        
        <Tabs value={activeSection} onValueChange={setActiveSection} className="space-y-6">
          <TabsList className="bg-muted/50">
            <TabsTrigger value="keywords" className="gap-2">
              <Target className="h-4 w-4" />
              Keyword Tracker
            </TabsTrigger>
            <TabsTrigger value="briefing" className="gap-2">
              <BookOpen className="h-4 w-4" />
              Briefing Estratégico
            </TabsTrigger>
          </TabsList>

          <TabsContent value="keywords">
            <KeywordTracker />
          </TabsContent>
          <TabsContent value="briefing">
            <BriefingEstrategico />
          </TabsContent>
        </Tabs>
      </main>
      
      <Footer />
    </div>
  );
};

export default ContentHub;
