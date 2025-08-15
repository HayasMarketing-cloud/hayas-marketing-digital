import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Seo from '@/components/Seo';
import OptimizedImage from '@/components/OptimizedImage';
import ArticleBreadcrumbs from './ArticleBreadcrumbs';
import ArticleUtilitySection from './ArticleUtilitySection';
import NewsletterSubscription from './NewsletterSubscription';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, User } from 'lucide-react';

interface BlogPostMetadata {
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
  author: string;
  tags: string[];
  canonical: string;
  ogImage: string;
  structuredData: Record<string, any>;
}

interface BlogPostTemplateProps {
  metadata: BlogPostMetadata;
  heroImage?: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
  children: React.ReactNode;
}

const BlogPostTemplate: React.FC<BlogPostTemplateProps> = ({
  metadata,
  heroImage,
  children
}) => {
  const currentUrl = `https://hayasmarketing.com${metadata.canonical}`;

  return (
    <>
      <Seo 
        title={metadata.title}
        description={metadata.description}
        canonical={metadata.canonical}
        structuredData={metadata.structuredData}
        ogImage={metadata.ogImage}
      />
      
      <div className="min-h-screen bg-background">
        <Navigation />
        
        {/* Breadcrumbs superiores */}
        <ArticleBreadcrumbs position="top" />

        <main className="container mx-auto px-4 pb-16">
          <div className="max-w-4xl mx-auto">
            {/* Header del artículo */}
            <header className="mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground leading-tight">
                {metadata.title}
              </h1>
              
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8 flex-wrap">
                <time dateTime={metadata.date} className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {new Date(metadata.date).toLocaleDateString('es-ES', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {metadata.readTime}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  {metadata.author}
                </span>
              </div>

              <div className="flex items-center gap-2 mb-8 flex-wrap">
                <Badge variant="secondary">{metadata.category}</Badge>
                {metadata.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Imagen hero - solo si se proporciona */}
              {heroImage && (
                <div className="mb-8">
                  <OptimizedImage 
                    src={heroImage.src}
                    alt={heroImage.alt}
                    className="w-full rounded-lg shadow-lg"
                    width={heroImage.width || 1200}
                    height={heroImage.height || 675}
                    priority={true}
                  />
                </div>
              )}
            </header>

            {/* Contenido del artículo */}
            <article className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary prose-strong:text-foreground">
              {children}
            </article>
          </div>
        </main>

        {/* Sección de utilidad */}
        <ArticleUtilitySection 
          title={metadata.title}
          url={currentUrl}
        />

        {/* Newsletter */}
        <NewsletterSubscription />

        {/* Breadcrumbs inferiores */}
        <ArticleBreadcrumbs position="bottom" showHome={true} />

        <Footer />
      </div>
    </>
  );
};

export default BlogPostTemplate;