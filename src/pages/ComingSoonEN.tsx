import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation } from 'react-router-dom';
import { Construction, Home, Globe, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const ComingSoonEN: React.FC = () => {
  const location = useLocation();
  
  // Try to find equivalent Spanish path
  const getSpanishEquivalent = () => {
    const path = location.pathname;
    // Replace /en/ with /es/
    if (path.startsWith('/en/')) {
      return path.replace('/en/', '/es/');
    }
    return '/es';
  };

  return (
    <>
      <Helmet>
        <title>Coming Soon | Hayas Marketing</title>
        <meta name="description" content="This page is currently being translated. Please visit the Spanish version or explore our English content." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-background via-background to-hayas-purple/5">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto text-center">
            {/* Icon */}
            <div className="mb-8 inline-flex items-center justify-center w-20 h-20 rounded-full bg-hayas-purple/10">
              <Construction className="w-10 h-10 text-hayas-purple" />
            </div>
            
            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Coming Soon
            </h1>
            
            {/* Description */}
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              This page is currently being translated into English. 
              In the meantime, you can visit the Spanish version or explore our available English content.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button asChild size="lg" className="gap-2">
                <Link to="/en">
                  <Home className="w-4 h-4" />
                  Go to Home
                </Link>
              </Button>
              
              <Button asChild variant="outline" size="lg" className="gap-2">
                <Link to={getSpanishEquivalent()}>
                  <Globe className="w-4 h-4" />
                  View in Spanish
                </Link>
              </Button>
              
              <Button asChild variant="secondary" size="lg" className="gap-2">
                <Link to="/en/contact">
                  <Mail className="w-4 h-4" />
                  Contact Us
                </Link>
              </Button>
            </div>
            
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default ComingSoonEN;
