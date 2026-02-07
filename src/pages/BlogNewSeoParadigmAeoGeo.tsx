import React from 'react';
import BlogPostTemplate from '@/components/BlogPost/BlogPostTemplate';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useLocalizedRoutes } from '@/hooks/useLocalizedRoutes';
import { 
  Search, 
  MessageSquare, 
  Brain,
  Globe,
  Building2,
  MessageCircle,
  CheckCircle,
  Target,
  TrendingUp,
  ArrowRight,
  Eye,
  Database,
  FileText,
  Shield,
  Users,
  Zap,
  Bot
} from 'lucide-react';

const BlogNewSeoParadigmAeoGeo = () => {
  const { getRoute } = useLocalizedRoutes();
  
  const metadata = {
    title: 'The New SEO Paradigm in the AI Era (AEO and GEO)',
    metaTitle: 'New SEO Paradigm: AEO and GEO for Google, Bing and ChatGPT | Hayas Marketing',
    description: 'Discover AEO (Answer Engine Optimization) and GEO (Generative Engine Optimization) strategies to position your brand in Google, Bing Copilot and ChatGPT.',
    metaDescription: 'SEO has evolved from optimizing for clicks to becoming the source cited by AI. Learn AEO and GEO for Google SGE, Bing Copilot and ChatGPT.',
    date: '2026-02-07',
    readTime: '14 min',
    category: 'SEO',
    author: 'Rubén Reyero',
    tags: ['SEO', 'AEO', 'GEO', 'AI', 'ChatGPT', 'Google SGE', 'Bing Copilot', 'Digital Marketing'],
    canonical: '/en/blog/new-seo-paradigm-aeo-geo',
    ogImage: '/seo-aeo-geo-paradigma-hero.jpg',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "The New SEO Paradigm in the AI Era (AEO and GEO)",
      "author": {
        "@type": "Person",
        "name": "Rubén Reyero",
        "url": "https://hayasmarketing.com/es/autor/ruben-reyero"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Hayas Marketing",
        "@id": "https://hayasmarketing.com/#organization",
        "logo": {
          "@type": "ImageObject",
          "url": "https://hayasmarketing.com/lovable-uploads/hayas-logo.webp",
          "width": 300,
          "height": 100
        }
      },
      "datePublished": "2026-02-07T00:00:00+01:00",
      "dateModified": "2026-02-07T00:00:00+01:00",
      "image": "/seo-aeo-geo-paradigma-hero.jpg",
      "mainEntityOfPage": "https://hayasmarketing.com/en/blog/new-seo-paradigm-aeo-geo",
      "inLanguage": "en-US",
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": [
          "article header h1",
          ".article-lead",
          "[data-faq-section] h3:first-of-type"
        ]
      }
    },
    mainKeyword: 'new SEO paradigm AI',
    secondaryKeywords: ['AEO', 'GEO', 'Answer Engine Optimization', 'Generative Engine Optimization', 'SEO for AI', 'Google SGE', 'Bing Copilot']
  };

  const faqs = [
    {
      question: "What is AEO (Answer Engine Optimization)?",
      answer: "AEO optimizes content to be easily retrievable and interpretable by AI assistants that answer questions. The focus shifts from clicks to clarity and action."
    },
    {
      question: "What is GEO (Generative Engine Optimization)?",
      answer: "GEO aims to have your brand discovered and recommended within generative AI systems like ChatGPT, Copilot, or Perplexity, building credibility and trust."
    },
    {
      question: "What is the difference between GEO and AEO?",
      answer: "AEO optimizes for direct answers to specific questions (featured snippets, voice responses). GEO goes further: it seeks for generative AIs to cite you as a trusted source and recommend you proactively, even without a direct user query."
    },
    {
      question: "Are Google and Bing still important with AI?",
      answer: "Yes. Google SGE and Bing Copilot reinforce the importance of E-E-A-T, structured content, and clarity. SEO fundamentals are the foundation for AI visibility."
    },
    {
      question: "How can I appear in ChatGPT responses?",
      answer: "Allow GPTBot access, create deep and well-structured content, and ensure presence in listicles and third-party guides that AIs use as sources."
    },
    {
      question: "What are Microsoft's three data channels?",
      answer: "They are: crawled data (indexed web), feed data (catalogs, prices), and live data (reviews, on-site experience). Optimizing all three is key for Bing Copilot."
    }
  ];

  const relatedServices = [
    {
      title: "SEO, AEO and GEO",
      description: "Comprehensive positioning for traditional search engines and generative AI assistants.",
      link: "/en/services/seo-positioning"
    },
    {
      title: "Content Strategy",
      description: "Content optimized for humans and machines, with AEO-ready structure.",
      link: "/en/services/content-strategy"
    }
  ];

  return (
    <BlogPostTemplate 
      metadata={metadata}
      faqs={faqs}
      relatedServices={relatedServices}
    >
      <div className="space-y-12">
        {/* Introduction */}
        <section>
          <p className="text-lg text-elegant">
            The way users find information on the internet is changing radically, and with it, the rules of the SEO game. Search has evolved from a click-centric model to one dominated by <strong>generative responses and AI Agents</strong>.
          </p>
          
          <p className="text-elegant mt-4">
            The focus is no longer just appearing in position #1 of traditional organic results, but <strong>being the chosen and cited source by artificial intelligence engines</strong>. This shift defines the new paradigm, based on two key concepts: <strong>AEO (Answer/Agentic Engine Optimization)</strong> and <strong>GEO (Generative Engine Optimization)</strong>.
          </p>

          <Card className="my-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <TrendingUp className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-xl font-semibold mb-2">The goal is no longer the click.</p>
                  <p className="text-elegant text-lg">It's becoming the trusted source that AI recommends.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator />

        {/* AEO and GEO Definitions */}
        <section>
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Target className="h-8 w-8 text-primary" />
            AEO and GEO: The New Visibility Metric
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <Card className="bg-gradient-to-br from-conecta-50 to-conecta-100/50 dark:from-conecta-900/20 dark:to-conecta-800/10 border-conecta-200 dark:border-conecta-700">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <MessageSquare className="h-8 w-8 text-conecta-500" />
                  <h3 className="text-xl font-bold text-conecta-900 dark:text-conecta-100">AEO</h3>
                </div>
                <p className="text-sm font-medium text-conecta-600 dark:text-conecta-300 mb-3">Answer/Agentic Engine Optimization</p>
                <p className="text-elegant">
                  Focuses on making your content and data <strong>easily retrievable and interpretable</strong> by AI assistants that answer questions and perform actions.
                </p>
                <Badge className="mt-4" variant="secondary">Focus: Clarity and Action</Badge>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-impulsa-50 to-impulsa-100/50 dark:from-impulsa-900/20 dark:to-impulsa-800/10 border-impulsa-200 dark:border-impulsa-700">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Brain className="h-8 w-8 text-impulsa-500" />
                  <h3 className="text-xl font-bold text-impulsa-900 dark:text-impulsa-100">GEO</h3>
                </div>
                <p className="text-sm font-medium text-impulsa-600 dark:text-impulsa-300 mb-3">Generative Engine Optimization</p>
                <p className="text-elegant">
                  Aims for your brand to be <strong>discovered and convincing</strong> within generative AI systems, building credibility and trust so that AI recommends your products or services.
                </p>
                <Badge className="mt-4" variant="secondary">Focus: Influence</Badge>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator />

        {/* Google SGE */}
        <section>
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Globe className="h-8 w-8 text-primary" />
            1. Google (SGE): Enhanced E-E-A-T and Structural Clarity
          </h2>
          
          <p className="text-elegant mb-6">
            Google, with its <strong>Search Generative Experience (SGE)</strong>, insists that "fundamentals still matter", but the way it presents information changes the focus.
          </p>

          <Card className="bg-muted/50">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Key Recommendations for Google SGE</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-elegant">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Visible E-E-A-T:</strong> Trust is paramount. Show identifiable authors with credentials, cite primary sources, and ensure transparency about your site ("About us").
                  </div>
                </li>
                <li className="flex items-start gap-3 text-elegant">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Readable structure and format:</strong> AI favors short paragraphs, bullets, and question-answer blocks that are easy to extract. Adopt an "inverted pyramid" approach: direct and concise answer first, details later.
                  </div>
                </li>
                <li className="flex items-start gap-3 text-elegant">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Neutral and deep content:</strong> Avoid filler text and promotional language. Google AI prefers clear, neutral, and objective facts. Include FAQ sections, lists, and tables so AI can take "digestible snippets" as citations.
                  </div>
                </li>
                <li className="flex items-start gap-3 text-elegant">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Schema.org:</strong> Use structured markup (Article, FAQPage, HowTo) to improve machine clarity and readability, making it easier for AI to correctly interpret your content as a reliable source.
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <Separator />

        {/* Bing/Microsoft Copilot */}
        <section>
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Building2 className="h-8 w-8 text-primary" />
            2. Bing/Microsoft (Copilot): The Three Data Channels
          </h2>
          
          <p className="text-elegant mb-6">
            Microsoft's official guide, <em>"From Discovery to Influence: A Guide to AEO and GEO"</em>, emphasizes the importance of trust and data integrity for its assistants like Copilot.
          </p>

          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <Card className="bg-gradient-to-br from-turquesa-50 to-turquesa-100/50 dark:from-turquesa-900/20 dark:to-turquesa-800/10 border-turquesa-200 dark:border-turquesa-700">
              <CardContent className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Search className="h-6 w-6 text-turquesa-600" />
                  <span className="font-bold text-turquesa-800 dark:text-turquesa-200">Channel 1</span>
                </div>
                <h4 className="font-semibold mb-2">Crawled Data</h4>
                <p className="text-sm text-elegant">Web content indexed by Bing crawlers.</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-hayas-50 to-hayas-100/50 dark:from-hayas-900/20 dark:to-hayas-800/10 border-hayas-200 dark:border-hayas-700">
              <CardContent className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Database className="h-6 w-6 text-hayas-600" />
                  <span className="font-bold text-hayas-800 dark:text-hayas-200">Channel 2</span>
                </div>
                <h4 className="font-semibold mb-2">Feed Data</h4>
                <p className="text-sm text-elegant">Catalogs, prices, and stock provided directly to the platform.</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-activa-50 to-activa-100/50 dark:from-activa-900/20 dark:to-activa-800/10 border-activa-200 dark:border-activa-700">
              <CardContent className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Eye className="h-6 w-6 text-activa-600" />
                  <span className="font-bold text-activa-800 dark:text-activa-200">Channel 3</span>
                </div>
                <h4 className="font-semibold mb-2">Live Data</h4>
                <p className="text-sm text-elegant">Reviews, user experience, and on-site behavior.</p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-muted/50">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Microsoft's AEO/GEO Strategy</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-elegant">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Impeccable Structured Data:</strong> Use schema.org exhaustively (Product, Offer, Organization) and incorporate dynamic fields (price, stock). The accuracy and consistency of this data is vital: products with more filled fields rank higher.
                  </div>
                </li>
                <li className="flex items-start gap-3 text-elegant">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Authority and Trust Signals:</strong> AIs prioritize sources they can trust. Strengthen your credibility with verified user reviews, press mentions, certifications, and awards.
                  </div>
                </li>
                <li className="flex items-start gap-3 text-elegant">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Preparation for Agents (Agentic Commerce):</strong> AI doesn't just read your site, it acts on it. A Copilot might attempt a purchase process. Take care of on-site experience (Web Vitals, checkout, broken links) to avoid losing AI-assisted sales.
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <Separator />

        {/* ChatGPT/OpenAI */}
        <section>
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <MessageCircle className="h-8 w-8 text-primary" />
            3. ChatGPT/OpenAI: The Corporate Blog as a Training Source
          </h2>
          
          <p className="text-elegant mb-6">
            OpenAI is not a traditional search engine, but its model influences billions of queries. Visibility here is achieved in two phases: <strong>model training</strong> and <strong>real-time search</strong>.
          </p>

          <Card className="bg-muted/50">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Keys to Visibility in ChatGPT/OpenAI</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-elegant">
                  <Bot className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Allow GPTBot Access:</strong> For your content to become part of the model's knowledge (pre-training), it's essential not to block OpenAI's GPTBot crawler in your robots.txt.
                  </div>
                </li>
                <li className="flex items-start gap-3 text-elegant">
                  <FileText className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Deep and Friendly-Format Content:</strong> Evidence indicates that the corporate blog is the primary source that AIs cite in B2B environments. Technical documentation, whitepapers, and information-rich product sheets become "data points" that the model absorbs.
                  </div>
                </li>
                <li className="flex items-start gap-3 text-elegant">
                  <Users className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>The Power of Digital PR:</strong> For generic questions (e.g., "best CRM solutions"), more than 75% of citations come from listicles or "Top 10" guides created by third parties. Ensuring your inclusion in influential listings is critical.
                  </div>
                </li>
                <li className="flex items-start gap-3 text-elegant">
                  <Shield className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Reinforce Trustworthiness:</strong> ChatGPT tends to cite high-authority sources (Wikipedia, major media). Neutral, well-documented content with visible authorship has more chances of being extracted, as the model prioritizes avoiding hallucinations.
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <Separator />

        {/* Strategic Opportunity */}
        <section>
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Zap className="h-8 w-8 text-primary" />
            A Strategic Opportunity
          </h2>
          
          <p className="text-elegant mb-6">
            The new SEO paradigm is a mindset shift: from chasing clicks to <strong>demonstrating the authority and usefulness of our data and content</strong>.
          </p>

          <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20 mb-8">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Our strategic focus is:</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Badge variant="default" className="mt-1">1</Badge>
                  <div>
                    <h4 className="font-semibold mb-1">Audit "AEO-Readiness"</h4>
                    <p className="text-elegant">Ensure that the technical structure (Schema.org) and content organization are optimal for direct answer extraction by AIs.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Badge variant="default" className="mt-1">2</Badge>
                  <div>
                    <h4 className="font-semibold mb-1">Produce "Non-Transferable Trust" Content</h4>
                    <p className="text-elegant">Publish analyses, original data, and first-hand perspectives (E-E-A-T) that demonstrate a level of experience that AIs cannot synthesize.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Badge variant="default" className="mt-1">3</Badge>
                  <div>
                    <h4 className="font-semibold mb-1">Influence Strategy</h4>
                    <p className="text-elegant">Combine SEO, impeccable structured data, and Digital PR to ensure presence in the "three data channels" (Microsoft) and in the listicles that AIs use to generate their final recommendations (ChatGPT, Gemini, Claude, Perplexity...).</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="p-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg">
            <p className="text-elegant text-lg mb-4">
              The goal is to position Hayas and our clients not only as organic referents, but as <strong>sources of knowledge that are reviewed, verified, and backed by human judgment</strong>.
            </p>
            <p className="text-elegant">
              In an environment where more and more content is generated automatically, we believe that true value lies in the combination of artificial intelligence and expert review to offer reliable, useful, and responsible information.
            </p>
          </div>
        </section>

        <Separator />

        {/* Final CTA */}
        <section className="text-center">
          <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">
                Need to adapt your positioning strategy to the AI era?
              </h3>
              <p className="text-elegant text-lg mb-6 max-w-2xl mx-auto">
                Discover how we can help you transition from traditional SEO to the new AEO/GEO model.
              </p>
              <Button asChild size="lg" className="gap-2">
                <Link to="/en/services/seo-positioning">
                  Our SEO positioning solution
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </section>
      </div>
    </BlogPostTemplate>
  );
};

export default BlogNewSeoParadigmAeoGeo;
