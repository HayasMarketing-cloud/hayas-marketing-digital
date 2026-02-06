import React from 'react';
import { Link } from 'react-router-dom';
import BlogPostTemplate from '@/components/BlogPost/BlogPostTemplate';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLocalizedRoutes } from '@/hooks/useLocalizedRoutes';
import { 
  Users, 
  Target, 
  BarChart3, 
  Zap, 
  Mail, 
  Globe,
  TrendingUp,
  CheckCircle,
  Building2,
  Store,
  Briefcase,
  UserCheck,
  Heart
} from 'lucide-react';

const BlogCRMWhatIsBenefits = () => {
  const { getRoute } = useLocalizedRoutes();
  const metadata = {
    title: "CRM: What It Is, Benefits and How to Choose the Best for Your Business",
    metaTitle: "CRM: What It Is, Benefits and How to Choose the Best | Hayas Marketing",
    description: "Discover what a CRM is, its benefits for marketing and sales, and how to choose the right one for your business. Practical guide with real examples and implementation steps.",
    metaDescription: "Discover what a CRM is, its benefits for marketing and sales, and how to choose the right one for your business. Practical guide with real examples and implementation steps.",
    date: "2025-01-15",
    readTime: "8 min read",
    category: "CRM and Automation",
    author: "Rubén Reyero",
    tags: ["CRM", "Marketing", "Sales", "Automation", "Customer Management"],
    canonical: "/en/blog/crm-what-is-benefits",
    ogImage: "/lovable-uploads/marketing-kpis-dashboard.jpg",
    mainKeyword: "CRM",
    secondaryKeywords: ["what is a CRM", "CRM marketing", "CRM benefits", "choose CRM"],
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "CRM: What It Is, Benefits and How to Choose the Best for Your Business",
      "description": "Discover what a CRM is, its benefits for marketing and sales, and how to choose the right one for your business. Practical guide with real examples and implementation steps.",
      "image": "/lovable-uploads/marketing-kpis-dashboard.jpg",
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
      "datePublished": "2025-01-15T00:00:00+01:00",
      "dateModified": "2025-01-15T00:00:00+01:00"
    }
  };

  const faqs = [
    {
      question: "What is a CRM and what is it for?",
      answer: "A CRM is software that centralizes customer information to manage marketing, sales, and customer service more efficiently, personalized, and profitably."
    },
    {
      question: "What are the main benefits of a CRM?",
      answer: "It allows you to segment customers, automate campaigns, integrate communication channels, measure results in real-time, and personalize interactions at scale. It also facilitates creating detailed sales processes for tracking, optimizing the commercial cycle, and improving customer service."
    },
    {
      question: "What types of companies should use a CRM?",
      answer: "From entrepreneurs and startups to large enterprises, any business that wants to optimize customer management and increase conversion can benefit from a CRM."
    },
    {
      question: "How do I choose the best CRM for my company?",
      answer: "Define your objectives, analyze your buyer journey, document key processes, identify automation needs, and evaluate options that integrate with your current tools."
    },
    {
      question: "How is CRM success measured?",
      answer: "Through indicators like cost per lead, conversion rate, average response time, and customer retention, comparing before and after implementation."
    }
  ];

  const relatedServices = [
    {
      title: "CRM Implementation",
      description: "We configure your personalized CRM with automations, integrations, and complete team training.",
      link: "/en/services/crm-implementation"
    },
    {
      title: "Process Automation",
      description: "We design workflows that seamlessly connect marketing, sales, and customer service.",
      link: "/en/services/sales-process-automation"
    }
  ];

  const benefits = [
    {
      icon: <Target className="h-6 w-6" />,
      title: "Advanced segmentation",
      description: "Messages adapted to each customer group"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Campaign automation",
      description: "Save time and ensure consistency"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Multichannel integration",
      description: "Unite data from web, social, email, and sales"
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Real-time analytics",
      description: "Measure results and optimize decisions"
    },
    {
      icon: <UserCheck className="h-6 w-6" />,
      title: "Personalization at scale",
      description: "Relevant experiences for each customer"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Detailed sales processes",
      description: "Continuous tracking and optimization of the commercial cycle"
    }
  ];

  const useCases = [
    {
      icon: <Store className="h-6 w-6" />,
      profile: "For entrepreneurs starting or growing",
      name: "",
      description: "Need to differentiate in a saturated market with limited resources and want to create a solid foundation to scale their business.",
      example: "An entrepreneur launching a sustainable clothing brand uses CRM to segment contacts and automate personalized campaigns, achieving greater engagement with less manual effort."
    },
    {
      icon: <Building2 className="h-6 w-6" />,
      profile: "For CEOs of established companies",
      name: "",
      description: "Seek coherence and trust at all touchpoints to maintain their competitive position and continue growing.",
      example: "A mid-sized company CEO records every interaction in CRM, achieving consistent messages between marketing and sales, and gets 25% more customer retention."
    },
    {
      icon: <Target className="h-6 w-6" />,
      profile: "For Marketing Managers with limited resources",
      name: "",
      description: "Need to demonstrate measurable results and optimize every dollar invested in marketing to justify future budgets.",
      example: "A marketing manager automates campaigns based on customer funnel progress and increases conversions by 40% without growing the team."
    },
    {
      icon: <Briefcase className="h-6 w-6" />,
      profile: "For Sales Directors of commercial teams",
      name: "",
      description: "Want to digitize and optimize the sales team without losing the human touch and closeness with customers.",
      example: "A sales director receives automatic alerts when a lead is ready to buy, reducing closing time by 20% and increasing team productivity."
    },
    {
      icon: <Heart className="h-6 w-6" />,
      profile: "For family businesses looking to modernize",
      name: "",
      description: "Want to incorporate technology to grow without losing the personal essence and close treatment that characterizes them.",
      example: "A family business uses CRM to send personalized offers on each customer's important dates, increasing repeat sales by 35% without losing personal closeness."
    }
  ];

  const selectionSteps = [
    "Research options according to your sector and objectives",
    "Analyze the buyer journey and define lifecycle stages",
    "Document marketing, sales, and customer service processes",
    "Identify automation potential",
    "Design the data integration strategy",
    "Define who will implement the CRM",
    "Measure ROI to evaluate its real impact"
  ];

  const implementationSteps = [
    "Configuration adapted to your workflow",
    "Integrations with key tools",
    "Team training",
    "Continuous monitoring and optimization"
  ];

  return (
    <BlogPostTemplate
      metadata={metadata}
      heroImage={{
        src: "/crm-sistema-gestion-clientes-hero.jpg",
        alt: "CRM dashboard showing marketing and sales metrics",
        width: 1200,
        height: 630
      }}
      faqs={faqs}
      relatedServices={relatedServices}
    >
      {/* Introduction */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-foreground">What Is a CRM and Why Is It Key in Marketing</h2>
        
        <p className="text-lg mb-6 text-muted-foreground leading-relaxed">
          A <strong>CRM</strong> (<em>Customer Relationship Management</em>) is much more than software: it's the heart that connects marketing, sales, and customer service in a single strategy. It allows you to centralize data, understand your audience, and deliver personalized experiences that generate more sales and loyalty.
        </p>
        
        <p className="text-lg mb-8 text-muted-foreground leading-relaxed">
          At Hayas, we call it <em>"the marketing you don't see"</em>, because it works behind the scenes to make everything flow smoothly and effectively. Want to know everything it can do for your business? Let's start by understanding its evolution.
        </p>

        <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-6 border border-primary/10">
          <p className="text-sm text-muted-foreground mb-2">
            <strong>💡 Key fact:</strong>
          </p>
          <p className="text-foreground">
            Companies using CRM increase their sales by an average of 41% per salesperson and improve customer retention by up to 27%.
          </p>
        </div>
      </section>

      {/* History */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-foreground">Brief History of CRM</h2>
        
        <p className="text-lg mb-6 text-muted-foreground leading-relaxed">
          From the 1950s, with simple customer agendas, to today's cloud CRMs, this tool has evolved to become a 360° platform integrating marketing, sales, and service.
        </p>
        
        <p className="text-lg mb-8 text-muted-foreground leading-relaxed">
          In the 80s came relational databases, in the 90s specialized software (Sales Force Automation), and from 2000, cloud CRMs like Salesforce or HubSpot. Today, driven by artificial intelligence, they can predict needs and automate actions for each customer.
        </p>
      </section>

      {/* Benefits */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-foreground">CRM Benefits for Marketing and Sales</h2>
        
        <p className="text-lg mb-8 text-muted-foreground leading-relaxed">
          A well-implemented CRM offers clear advantages that transform how you relate to your customers:
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border border-border/50 hover:border-primary/20 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-foreground">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Use cases */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-foreground">Who Should Use a CRM?</h2>
        
        <p className="text-lg mb-8 text-muted-foreground leading-relaxed">
          A CRM is useful for any business that wants to grow in an organized way. Here are some profiles and real cases:
        </p>

        <div className="space-y-8">
          {useCases.map((useCase, index) => (
            <Card key={index} className="border border-border/50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-2 bg-secondary/10 rounded-lg text-secondary">
                    {useCase.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {index + 1}. {useCase.profile}
                    </h3>
                    <p className="text-muted-foreground mb-3">{useCase.description}</p>
                    <div className="bg-muted/30 rounded-lg p-4">
                      <p className="text-sm"><strong>Example:</strong> {useCase.example}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Selection guide */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-foreground">How to Choose the Best CRM?</h2>
        
        <p className="text-lg mb-8 text-muted-foreground leading-relaxed">
          To find the CRM that truly adds value to your marketing, follow these steps:
        </p>

        <div className="space-y-4 mb-8">
          {selectionSteps.map((step, index) => (
            <div key={index} className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg">
              <Badge variant="secondary" className="min-w-fit">{index + 1}</Badge>
              <p className="text-foreground">{step}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-secondary/5 to-primary/5 rounded-xl p-6 border border-secondary/10">
          <h3 className="font-semibold mb-2 text-foreground">💡 Hayas Tip</h3>
          <p className="text-muted-foreground">
            Don't look for the "perfect" CRM, but the one that best adapts to your current process and can grow with you. Simplicity is often more effective than complexity.
          </p>
        </div>
      </section>

      {/* Implementation */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-foreground">How to Successfully Implement a CRM</h2>
        
        <p className="text-lg mb-6 text-muted-foreground leading-relaxed">
          Success depends on correct implementation. The key elements are:
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {implementationSteps.map((step, index) => (
            <div key={index} className="flex items-center gap-3 p-4 bg-background border border-border/50 rounded-lg">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span className="text-foreground">{step}</span>
            </div>
          ))}
        </div>

        <p className="text-lg mb-8 text-muted-foreground leading-relaxed">
          Measuring ROI from the start is key: compare metrics like cost per lead, conversion rate, and response time before and after.
        </p>

        <div className="bg-muted/30 rounded-xl p-6 border border-border/50">
          <h3 className="font-semibold mb-4 text-foreground">📊 Key Metrics to Measure Success</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium text-foreground mb-2">Before CRM:</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Lead response time</li>
                <li>• Current conversion rate</li>
                <li>• Cost per acquired customer</li>
                <li>• Sales closing time</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-2">After CRM:</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Reduction in response time</li>
                <li>• Increase in conversions</li>
                <li>• Optimization of acquisition cost</li>
                <li>• Sales cycle acceleration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mb-12">
        <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-8 border border-primary/20 text-center">
          <h2 className="text-3xl font-bold mb-4 text-foreground">Implement a CRM That Drives Your Business</h2>
          <p className="text-lg mb-6 text-muted-foreground max-w-2xl mx-auto">
            A well-configured CRM can transform your marketing and sales in weeks. At Hayas, we take care of everything: selection, configuration, automation, and integration.
          </p>
          <Link 
            to={getRoute('crmImplementation')}
            className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
          >
            Discover Our CRM Implementation Service
          </Link>
        </div>
      </section>
    </BlogPostTemplate>
  );
};

export default BlogCRMWhatIsBenefits;
