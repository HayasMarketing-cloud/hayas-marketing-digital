import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const platforms = [
  {
    name: "HubSpot",
    logo: "/lovable-uploads/4e3422d2-6a85-4615-8631-c0ed5ccf1b00.png",
    alt: "HubSpot CRM Platform"
  },
  {
    name: "HighLevel",
    logo: "/lovable-uploads/highlevel-logo.png",
    alt: "HighLevel (Go High Level) CRM Platform"
  }
];

const CRMComparisonSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            ¿HubSpot o <span className="text-gradient-primary">HighLevel</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-12">
            Cada empresa es diferente. Por eso trabajamos con las dos plataformas líderes: HubSpot y HighLevel (GHL). Te ayudamos a decidir cuál se adapta mejor a tus necesidades y objetivos.
          </p>
        </div>

        <div className="flex justify-center gap-12 mb-16 max-w-2xl mx-auto">
          {platforms.map((platform, index) => (
            <Card key={index} className="flex-1 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8 text-center">
                <div className="bg-white rounded-lg p-6 mb-4 shadow-sm">
                  <img 
                    src={platform.logo}
                    alt={platform.alt}
                    className="w-full h-16 object-contain filter brightness-75 hover:brightness-100 transition-all duration-300"
                  />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {platform.name}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="group">
            <Link to="/solicitar-consulta" className="flex items-center gap-2">
              Ver comparativa completa HubSpot vs HighLevel
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CRMComparisonSection;