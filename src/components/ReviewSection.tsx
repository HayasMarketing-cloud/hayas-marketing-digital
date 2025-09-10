import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

interface Review {
  id: string;
  name: string;
  position: string;
  company?: string;
  message: string;
  rating: number;
  date: string;
  avatar?: string;
  logo?: string;
}

interface ReviewSectionProps {
  reviews: Review[];
  title?: string;
  subtitle?: string;
}

const ReviewSection: React.FC<ReviewSectionProps> = ({ 
  reviews, 
  title = "Lo que dicen nuestros clientes",
  subtitle = "Testimonios reales de empresas que han transformado su presencia digital con nuestras soluciones"
}) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-16 bg-gradient-to-br from-muted/30 to-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {reviews.map((review) => (
            <Card key={review.id} className="h-full hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex-shrink-0">
                    {review.avatar || review.logo ? (
                      <img 
                        src={review.avatar || review.logo} 
                        alt={`${review.name} avatar`}
                        className="w-12 h-12 rounded-full object-cover border-2 border-border"
                      />
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-primary font-semibold text-lg">
                          {review.name.charAt(0)}
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex-grow">
                    <h3 className="font-semibold text-foreground">{review.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {review.position}
                      {review.company && (
                        <span className="block font-medium">{review.company}</span>
                      )}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1 mb-3">
                  {renderStars(review.rating)}
                  <span className="text-sm text-muted-foreground ml-2">
                    {review.date}
                  </span>
                </div>

                <blockquote className="text-foreground leading-relaxed">
                  "{review.message}"
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;