import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Sparkles, Brain, Zap } from 'lucide-react';

interface AIApplication {
  title: string;
  description: string;
  tools?: string[];
  icon: React.ReactNode;
}

interface AIApplicationsSectionProps {
  applications: AIApplication[];
  title?: string;
  description?: string;
}

const AIApplicationsSection: React.FC<AIApplicationsSectionProps> = ({
  applications,
  title = "Aplicaciones de IA",
  description = "Descubre cómo la inteligencia artificial puede optimizar estos procesos"
}) => {
  return (
    <section className="my-12">
      <div className="bg-gradient-to-br from-purple-50 to-blue-50 border border-purple-200 rounded-lg p-8">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-purple-100 rounded-full">
              <Sparkles className="w-8 h-8 text-purple-600" />
            </div>
          </div>
          
          <h3 className="text-2xl font-bold mb-3 text-gray-900">
            {title}
          </h3>
          
          <p className="text-gray-600 max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {applications.map((app, index) => (
            <Card key={index} className="bg-white/80 backdrop-blur-sm border-purple-200/50 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-purple-100 rounded-lg flex-shrink-0">
                    {app.icon}
                  </div>
                  <div>
                    <CardTitle className="text-lg text-gray-900">
                      {app.title}
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {app.description}
                </p>
                
                {app.tools && app.tools.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {app.tools.map((tool, toolIndex) => (
                      <Badge key={toolIndex} variant="secondary" className="text-xs bg-purple-100 text-purple-700 hover:bg-purple-200">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-purple-200 rounded-full px-4 py-2">
            <Brain className="w-4 h-4 text-purple-600" />
            <span className="text-sm text-gray-700 font-medium">
              IA aplicada al marketing y ventas
            </span>
            <Zap className="w-4 h-4 text-purple-600" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIApplicationsSection;