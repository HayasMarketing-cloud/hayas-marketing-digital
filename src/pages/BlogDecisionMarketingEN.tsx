import React from 'react';
import BlogPostTemplate from '@/components/BlogPost/BlogPostTemplate';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Link } from 'react-router-dom';
import decisionMarketingHero from '@/assets/decision-marketing-hero.jpg';
import { useLocalizedRoutes } from '@/hooks/useLocalizedRoutes';
import { 
  Target, 
  Users, 
  Brain,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Lightbulb,
  Heart,
  Scale,
  Clock,
  BarChart3,
  Handshake,
  Eye,
  MessageCircle,
  Shield
} from 'lucide-react';

const BlogDecisionMarketingEN = () => {
  const { getRoute } = useLocalizedRoutes();
  const metadata = {
    title: 'Decision Marketing: When Marketing Stops Pushing and Starts Building Trust',
    metaTitle: 'Decision Marketing: Marketing That Builds Trust | Hayas Marketing',
    description: 'Decision Marketing is a strategic approach that prioritizes the quality of choices over the volume of conversions. Discover how to guide conscious decisions.',
    metaDescription: 'Discover Decision Marketing: an approach that helps people choose well, not decide quickly. More trust, better relationships, sustainable results.',
    date: '2026-01-02',
    readTime: '12 min',
    category: 'Marketing Strategies',
    author: 'Rubén Reyero',
    tags: ['Decision Marketing', 'Strategy', 'Conscious Marketing', 'Trust', 'Customer Journey'],
    canonical: '/en/blog/decision-marketing',
    ogImage: decisionMarketingHero,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Decision Marketing: When Marketing Stops Pushing and Starts Building Trust",
      "author": {
        "@type": "Person",
        "name": "Rubén Reyero",
        "url": "https://hayasmarketing.com/es/autor/ruben-reyero"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Hayas Marketing",
        "logo": {
          "@type": "ImageObject",
          "url": "https://hayasmarketing.com/logo.png"
        }
      },
      "datePublished": "2026-01-02",
      "dateModified": "2026-01-02",
      "image": "/decision-marketing-hero.jpg",
      "mainEntityOfPage": "https://hayasmarketing.com/en/blog/decision-marketing"
    },
    mainKeyword: 'decision marketing',
    secondaryKeywords: ['conscious marketing', 'choice quality', 'trust marketing', 'customer journey', 'B2B marketing']
  };

  const faqs = [
    {
      question: "What is Decision Marketing?",
      answer: "Decision Marketing is a strategic approach based on a simple idea: marketing doesn't just influence what is bought, but how decisions are made. It's not about selling faster, but about designing environments where making good choices is possible."
    },
    {
      question: "What's the difference between Decision Marketing and traditional marketing?",
      answer: "Traditional marketing typically optimizes for pushing quick decisions (push) or attracting (pull). Decision Marketing adds a third dimension: accompanying the choice process, respecting the person's pace and prioritizing that the decision is right for both parties."
    },
    {
      question: "What type of companies benefit from Decision Marketing?",
      answer: "It makes special sense for companies with real value propositions, who trust their product or service and bet on long-term relationships. It's particularly useful in B2B, complex services, and high-value decisions."
    },
    {
      question: "Does Decision Marketing ignore commercial results?",
      answer: "No. Decision Marketing doesn't ignore results, but prioritizes the quality of choices over the quantity of impacts. Better-chosen relationships generate more stable and sustainable results over time."
    },
    {
      question: "How is success measured in Decision Marketing?",
      answer: "Beyond traditional conversions, it measures: post-purchase satisfaction, repurchase rate, duration of the client relationship, and the real customer lifetime value (LTV)."
    }
  ];

  const relatedServices = [
    {
      title: "Strategic Consulting",
      description: "We help you design marketing strategies that prioritize relationship quality and build trust.",
      link: "/en/services/strategic-consulting-analytics"
    },
    {
      title: "Inbound Marketing Campaigns",
      description: "We implement campaigns that accompany the client in their decision process, without artificial pressure.",
      link: "/en/services/inbound-marketing-campaigns"
    }
  ];

  return (
    <BlogPostTemplate
      metadata={metadata}
      heroImage={{
        src: decisionMarketingHero,
        alt: 'Decision Marketing: strategic approach to build trust',
        width: 1920,
        height: 1080,
        loading: "eager",
        fetchPriority: "high"
      }}
      faqs={faqs}
      relatedServices={relatedServices}
    >
      {/* Introduction */}
      <section className="mb-12">
        <p className="text-xl text-muted-foreground italic mb-8 border-l-4 border-primary pl-6">
          "A more conscious way to help make better decisions."
        </p>

        <p className="text-elegant mb-6">
          For years, much of marketing has relied on a very clear premise: <strong>provoking quick decisions</strong>.
          More impact, more urgency, more stimuli.
        </p>

        <p className="text-elegant mb-6">
          This approach has been effective in certain contexts, but as markets mature and people become more informed—and also more saturated—its limits become evident:
          impulsive decisions, unrealistic expectations, and fragile relationships.
        </p>

        <p className="text-elegant">
          In this scenario, a quiet but profound change emerges in how we understand marketing: <strong>Decision Marketing</strong>.
        </p>
      </section>

      <Separator className="my-12" />

      {/* When converting is no longer enough */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
          <Target className="h-8 w-8 text-primary" />
          When Converting Is No Longer Enough
        </h2>

        <p className="text-elegant mb-6">
          Many current strategies remain optimized to push:
          reduce friction, accelerate the click, close as soon as possible.
        </p>

        <p className="text-elegant mb-4">For example:</p>

        <ul className="space-y-3 mb-6">
          <li className="flex items-start gap-3">
            <ArrowRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
            <span className="text-elegant">Landing pages designed solely to generate urgency</span>
          </li>
          <li className="flex items-start gap-3">
            <ArrowRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
            <span className="text-elegant">Messages that promise more than the service can deliver</span>
          </li>
          <li className="flex items-start gap-3">
            <ArrowRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
            <span className="text-elegant">Campaigns focused on volume without discriminating who they target</span>
          </li>
        </ul>

        <p className="text-elegant mb-6">
          This can work for low-risk products or impulse purchases.
          But in more complex decisions—services, B2B, medium and long-term projects—it generates clear side effects:
        </p>

        <Card className="bg-destructive/5 border-destructive/20 mb-6">
          <CardContent className="p-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-destructive"></div>
                <span className="text-elegant">Early cancellations</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-destructive"></div>
                <span className="text-elegant">High churn</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-destructive"></div>
                <span className="text-elegant">Brand erosion</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-destructive"></div>
                <span className="text-elegant">Clients who buy... but don't stay</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <p className="text-elegant font-medium">
          In other words: conversion is achieved, but not always the right choice.
        </p>
      </section>

      <Separator className="my-12" />

      {/* From push to pull... and something more */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
          <TrendingUp className="h-8 w-8 text-primary" />
          From Push to Pull... and Something More
        </h2>

        <p className="text-elegant mb-6">
          For years, marketing has operated primarily from two well-known logics.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="border-primary/20">
            <CardContent className="p-6">
              <h3 className="font-bold mb-3 flex items-center gap-2">
                <ArrowRight className="h-5 w-5 text-primary" />
                Push Marketing
              </h3>
              <p className="text-sm text-muted-foreground">
                Oriented to push: direct messages, commercial pressure, impact and urgency to provoke quick action.
              </p>
            </CardContent>
          </Card>
          <Card className="border-primary/20">
            <CardContent className="p-6">
              <h3 className="font-bold mb-3 flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                Pull Marketing
              </h3>
              <p className="text-sm text-muted-foreground">
                Oriented to attract: content, visibility, positioning and value so people approach on their own initiative.
              </p>
            </CardContent>
          </Card>
        </div>

        <p className="text-elegant mb-6">
          Both approaches remain valid and necessary in many contexts. But they share a limitation: <strong>they focus on the moment of action, not the complete choice process</strong>.
        </p>

        <p className="text-elegant mb-6">
          In more mature markets, where decisions are more reflective, complex, and comparative, a third need appears: <strong>not to push or just attract, but to accompany</strong>.
        </p>

        <Card className="bg-primary/5 border-primary/20 mb-6">
          <CardContent className="p-6">
            <h3 className="font-bold mb-4">Accompanying means:</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                <span className="text-elegant">Understanding the person's real moment</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                <span className="text-elegant">Offering the right context</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                <span className="text-elegant">Respecting the pace</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                <span className="text-elegant">Accepting that a good choice is more important than a quick decision</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <p className="text-elegant font-medium">
          It's in this space where the Decision Marketing approach begins to take shape.
        </p>
      </section>

      <Separator className="my-12" />

      {/* What is Decision Marketing */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
          <Brain className="h-8 w-8 text-primary" />
          What Is Decision Marketing
        </h2>

        <p className="text-elegant mb-6">
          Decision Marketing is not a specific technique or a closed framework.
          <strong> It's a strategic approach</strong>.
        </p>

        <p className="text-elegant mb-6">
          It starts from a simple idea:
          <strong> marketing doesn't just influence what is bought, but how decisions are made</strong>.
        </p>

        <p className="text-elegant mb-4">It includes everything that surrounds a choice:</p>

        <ul className="space-y-3 mb-6">
          <li className="flex items-start gap-3">
            <div className="h-2 w-2 rounded-full bg-primary mt-2"></div>
            <span className="text-elegant">The context in which an offer is presented</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="h-2 w-2 rounded-full bg-primary mt-2"></div>
            <span className="text-elegant">The message and its degree of clarity</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="h-2 w-2 rounded-full bg-primary mt-2"></div>
            <span className="text-elegant">The timing</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="h-2 w-2 rounded-full bg-primary mt-2"></div>
            <span className="text-elegant">The experience before, during and after</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="h-2 w-2 rounded-full bg-primary mt-2"></div>
            <span className="text-elegant">And the strategic decisions the company makes</span>
          </li>
        </ul>

        <Card className="bg-secondary/30 border-secondary/50">
          <CardContent className="p-6 text-center">
            <p className="text-lg font-medium text-foreground">
              It's not about selling faster, but about <strong>designing environments where making good choices is possible</strong>.
            </p>
          </CardContent>
        </Card>
      </section>

      <Separator className="my-12" />

      {/* An approach, not a methodology */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
          <Lightbulb className="h-8 w-8 text-primary" />
          An Approach, Not a Methodology
        </h2>

        <p className="text-elegant mb-6">
          Decision Marketing is not a methodology or a closed formula. It doesn't propose universal steps or promise automatic results.
        </p>

        <p className="text-elegant mb-6">
          <strong>It's an approach, a lens through which to observe and design marketing</strong>.
        </p>

        <p className="text-elegant mb-6">
          Instead of telling you what to do, it helps evaluate how and why certain decisions are made:
          what messages are sent, what objectives are prioritized, what experiences are designed, and what metrics are considered relevant.
        </p>

        <p className="text-elegant mb-8">
          Its value isn't in imposing a process, but in offering <strong>a framework of criteria</strong> that allows adaptation to real, changing, and increasingly complex contexts.
        </p>

        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="p-6 text-center">
            <p className="text-lg text-foreground">
              The key question shifts from <span className="line-through text-muted-foreground">"does this convert?"</span> to: <strong className="text-primary">does this help choose well?</strong>
            </p>
          </CardContent>
        </Card>
      </section>

      <Separator className="my-12" />

      {/* From impact to choice quality */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
          <Scale className="h-8 w-8 text-primary" />
          From Impact to Choice Quality
        </h2>

        <p className="text-elegant mb-6">
          The shift that Decision Marketing proposes is subtle, but decisive:
        </p>

        <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20 mb-8">
          <CardContent className="p-8 text-center">
            <p className="text-xl font-medium text-foreground">
              The goal of marketing isn't to force a decision,<br />
              but to <strong>help the choice be right for both parties</strong>.
            </p>
          </CardContent>
        </Card>

        <p className="text-elegant mb-4">For example:</p>

        <ul className="space-y-3 mb-6">
          <li className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
            <span className="text-elegant">Clearly explaining who a service is <strong>not</strong> for</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
            <span className="text-elegant">Offering content that helps compare options, including competitors</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
            <span className="text-elegant">Eliminating unnecessary urgency from the purchase process</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
            <span className="text-elegant">Designing onboardings that reinforce the decision, not just celebrate it</span>
          </li>
        </ul>
      </section>

      <Separator className="my-12" />

      {/* Measuring what matters */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
          <BarChart3 className="h-8 w-8 text-primary" />
          Measuring What Matters
        </h2>

        <p className="text-elegant mb-6">
          In a traditional approach, what's measured is what's immediately visible:
          clicks, leads, conversions, cost per acquisition.
        </p>

        <p className="text-elegant mb-6">
          These metrics are important, but insufficient when the objective is building lasting relationships.
        </p>

        <Card className="bg-primary/5 border-primary/20 mb-6">
          <CardContent className="p-6">
            <h3 className="font-bold mb-4">In Decision Marketing, additional indicators are considered:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <Heart className="h-5 w-5 text-primary mt-0.5" />
                <span className="text-elegant">Post-purchase satisfaction</span>
              </div>
              <div className="flex items-start gap-3">
                <TrendingUp className="h-5 w-5 text-primary mt-0.5" />
                <span className="text-elegant">Repurchase rate</span>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary mt-0.5" />
                <span className="text-elegant">Relationship duration</span>
              </div>
              <div className="flex items-start gap-3">
                <BarChart3 className="h-5 w-5 text-primary mt-0.5" />
                <span className="text-elegant">Real customer lifetime value (LTV)</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <p className="text-elegant font-medium">
          These metrics speak not only of what was achieved, but of how well the choice was made.
        </p>
      </section>

      <Separator className="my-12" />

      {/* When it makes sense */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
          <Handshake className="h-8 w-8 text-primary" />
          When Does Decision Marketing Make Sense
        </h2>

        <p className="text-elegant mb-6">
          Decision Marketing has special application in contexts where:
        </p>

        <ul className="space-y-3 mb-6">
          <li className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
            <span className="text-elegant">The decision has a significant impact (time, money, commitment)</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
            <span className="text-elegant">There are multiple options to compare</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
            <span className="text-elegant">The buying cycle is long or complex</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
            <span className="text-elegant">Post-sale matters as much as the sale</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
            <span className="text-elegant">Trust is a key differentiating factor</span>
          </li>
        </ul>

        <Card className="bg-secondary/30 border-secondary/50">
          <CardContent className="p-6">
            <p className="text-elegant">
              <strong>Real sectors:</strong> B2B consulting, complex services, education, health, SaaS, professional services...
              Any environment where you don't just sell a product, but build a relationship.
            </p>
          </CardContent>
        </Card>
      </section>

      <Separator className="my-12" />

      {/* Conclusion */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
          <Eye className="h-8 w-8 text-primary" />
          A Different Way of Understanding Marketing
        </h2>

        <p className="text-elegant mb-6">
          Decision Marketing is not presented as an alternative to the rest of marketing.
          It's a complementary perspective that enriches how strategies are designed, messages are built, and results are measured.
        </p>

        <p className="text-elegant mb-6">
          In a context where attention is increasingly limited and skepticism toward commercial messages grows,
          helping people choose well may be the most sustainable competitive advantage.
        </p>

        <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
          <CardContent className="p-8 text-center">
            <p className="text-xl font-medium text-foreground mb-4">
              The difference isn't in doing more,<br />
              but in <strong>making better decisions from the start</strong>.
            </p>
            <Link 
              to={getRoute('contact')}
              className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
            >
              Talk to us about your strategy
              <ArrowRight className="h-4 w-4" />
            </Link>
          </CardContent>
        </Card>
      </section>
    </BlogPostTemplate>
  );
};

export default BlogDecisionMarketingEN;
