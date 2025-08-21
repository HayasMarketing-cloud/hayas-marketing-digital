import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Seo from '@/components/Seo';
import OptimizedImage from '@/components/OptimizedImage';
import ArticleBreadcrumbs from './ArticleBreadcrumbs';
import ArticleUtilitySection from './ArticleUtilitySection';
import ArticleFAQSection from './ArticleFAQSection';
import NewsletterSubscription from './NewsletterSubscription';
import RelatedServiceSection from './RelatedServiceSection';
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
  metaTitle?: string;
  metaDescription?: string;
  mainKeyword?: string;
  secondaryKeywords?: string[];
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
  faqs?: Array<{
    question: string;
    answer: string;
  }>;
  relatedServices?: Array<{
    title: string;
    description: string;
    link: string;
  }>;
}

const BlogPostTemplate: React.FC<BlogPostTemplateProps> = ({
  metadata,
  heroImage,
  children,
  faqs,
  relatedServices
}) => {
  const currentUrl = `https://hayasmarketing.com${metadata.canonical}`;

  // Generar schema de FAQ si hay FAQs
  const faqSchema = faqs && faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null;

  // Combinar structured data con FAQ schema
  const combinedStructuredData = faqSchema 
    ? [metadata.structuredData, faqSchema]
    : metadata.structuredData;

  return (
    <>
      <Seo 
        title={metadata.metaTitle || metadata.title}
        description={metadata.metaDescription || metadata.description}
        canonical={metadata.canonical}
        structuredData={combinedStructuredData}
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

              {/* Hero image disabled - no images inside posts */}
            </header>

            {/* Contenido del artículo */}
            <article className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary prose-strong:text-foreground prose-ul:text-muted-foreground prose-ol:text-muted-foreground prose-li:text-muted-foreground">
              {children}
            </article>

            {/* Related Service Section */}
            <RelatedServiceSection serviceTags={metadata.tags} className="mt-16" />

            {/* FAQ Section */}
            {faqs && faqs.length > 0 && (
              <div className="mt-16">
                <ArticleFAQSection faqs={faqs} />
              </div>
            )}

            {/* CTA Section */}
            {relatedServices && relatedServices.length > 0 && (
              <section className="mt-16 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-8 border border-primary/10">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-4 text-foreground">
                    ¿Necesitas ayuda implementando estas estrategias?
                  </h3>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Nuestro equipo puede ayudarte a aplicar todo lo que has aprendido en este artículo
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {relatedServices.map((service, index) => (
                    <div key={index} className="bg-background/80 backdrop-blur-sm rounded-lg p-6 border border-border/50">
                      <h4 className="font-semibold mb-2 text-foreground">{service.title}</h4>
                      <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                      <Link to={service.link} className="inline-flex items-center text-primary hover:text-primary/80 font-medium text-sm">
                        Saber más →
                      </Link>
                    </div>
                  ))}
                </div>
              </section>
            )}
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