import React from 'react';
import { Star, ExternalLink, MapPin } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/hooks/useTranslation';

const ReviewsSection = () => {
  const { t, language } = useTranslation();
  
  // Dynamic URL for booking meeting based on language
  const bookingUrl = language === 'en' ? '/en/schedule-meeting' : '/es/agendar-reunion';

  return (
    <section className="section-normal bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
            {t('reviews.title')}
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            {t('reviews.subtitle')}
          </p>
          
          {/* Rating preview */}
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-sm font-medium">{t('reviews.googleRating')}</span>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 shadow-lg border-primary/10">
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold mb-4">
                {t('reviews.verifiedReviews')}
              </h3>
              
              {/* Google Maps Widget */}
              <div className="w-full flex justify-center">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.8112518155117!2d-3.7207809233882307!3d40.413031971440155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42292583f70915%3A0xe81f97d299b30595!2sHayas%20Marketing!5e0!3m2!1ses!2ses!4v1753116498157!5m2!1ses!2ses" 
                  width="100%" 
                  height="400" 
                  className="max-w-4xl rounded-lg shadow-md"
                  style={{border:0}} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Hayas Marketing Office Location"
                ></iframe>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6 border-t">
              <Button asChild variant="default" className="gap-2 bg-hayas-primary hover:bg-hayas-primary/90">
                <a 
                  href="https://www.google.es/maps/dir/?api=1&destination=C.+de+Manzanares,+4,+Arganzuela,+28005+Madrid" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <MapPin className="w-4 h-4" />
                  {t('reviews.directions')}
                </a>
              </Button>
              <Button asChild variant="outline" className="gap-2 border-hayas-primary text-hayas-primary hover:bg-hayas-primary hover:text-white">
                <a href={bookingUrl}>
                  {t('reviews.bookOnline')}
                </a>
              </Button>
            </div>
            
            {/* Ver todas las reseñas link */}
            <div className="flex justify-center pt-4">
              <Button asChild variant="ghost" className="gap-2 text-sm">
                <a 
                  href="https://www.google.com/maps/place/Hayas+Marketing/@40.413032,-3.7181997,15z/data=!4m8!3m7!1s0xd42292583f70915:0xe81f97d299b30595!8m2!3d40.413032!4d-3.7181997!9m1!1b1!16s%2Fg%2F11t_8h8twt?entry=ttu&g_ep=EgoyMDI1MDEyMS4wIKXMDSoASAFQAw%3D%3D" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-3 h-3" />
                  {t('reviews.seeAll')}
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
