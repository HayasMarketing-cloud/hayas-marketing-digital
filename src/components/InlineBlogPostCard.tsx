import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';

interface InlineBlogPostCardProps {
  title: string;
  slug: string;
  image: string;
  category: string;
  className?: string;
}

const InlineBlogPostCard: React.FC<InlineBlogPostCardProps> = ({
  title,
  slug,
  image,
  category,
  className,
}) => {
  const { language, isEnglish } = useLanguage();
  const href = `/${language}/blog/${slug}`;
  const subtitle = isEnglish ? 'Dive deeper into this topic' : 'Profundiza en este tema';

  return (
    <div className={cn('max-w-4xl mx-auto px-4', className)}>
      <Link
        to={href}
        className="group flex items-center gap-5 rounded-xl border border-primary/20 bg-primary/5 p-5 transition-all hover:bg-primary/10 hover:shadow-lg hover:border-primary/30"
      >
        {/* Thumbnail */}
        <div className="w-16 h-16 sm:w-24 sm:h-24 flex-shrink-0 rounded-lg overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform group-hover:scale-105"
            loading="lazy"
          />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <Badge variant="outline" className="mb-1.5 text-[10px] uppercase tracking-wider border-primary/30 text-primary">
            {category}
          </Badge>
          <h4 className="font-bold text-base sm:text-lg text-foreground leading-snug line-clamp-2 group-hover:text-primary transition-colors">
            {title}
          </h4>
          <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>
        </div>

        {/* Arrow */}
        <ArrowRight className="h-5 w-5 flex-shrink-0 text-primary/60 group-hover:text-primary group-hover:translate-x-1 transition-all" />
      </Link>
    </div>
  );
};

export default InlineBlogPostCard;
