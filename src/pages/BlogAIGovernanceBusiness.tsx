import React from 'react';
import BlogPostTemplate from '@/components/BlogPost/BlogPostTemplate';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Link } from 'react-router-dom';
import gobernanzaIAHero from '@/assets/gobernanza-ia-empresas-hero.jpg';
import { useLocalizedRoutes } from '@/hooks/useLocalizedRoutes';
import { 
  Scale, 
  AlertCircle, 
  CheckCircle, 
  Shield, 
  Building2, 
  Users, 
  Brain,
  FileText,
  Target,
  TrendingUp,
  Lightbulb,
  ArrowRight,
  AlertTriangle,
  Eye,
  Landmark,
  Globe,
  BadgeCheck,
  Briefcase,
  Megaphone,
  Lock,
  UserCheck
} from 'lucide-react';

const BlogAIGovernanceBusiness = () => {
  const { getRoute } = useLocalizedRoutes();
  const metadata = {
    title: 'AI Governance: A New Strategic Responsibility for Businesses',
    metaTitle: 'AI Governance: Strategic Responsibility for Businesses | Hayas Marketing',
    description: 'Artificial intelligence requires governance. Discover why it is a strategic responsibility for businesses and how to implement it correctly.',
    metaDescription: 'AI multiplies our ability to generate content and decisions, but without governance the risk is clear. Discover how to govern AI in your company.',
    date: '2025-12-10',
    readTime: '10 min',
    category: 'Artificial Intelligence',
    author: 'Rubén Reyero',
    tags: ['AI', 'Governance', 'Strategy', 'Regulation', 'Digital Marketing', 'Automation', 'AI Ethics'],
    canonical: '/en/blog/ai-governance-business',
    ogImage: gobernanzaIAHero,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "AI Governance: A New Strategic Responsibility for Businesses",
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
      "datePublished": "2025-12-10T00:00:00+01:00",
      "dateModified": "2025-12-10T00:00:00+01:00",
      "image": "/gobernanza-ia-empresas-hero.jpg",
      "mainEntityOfPage": "https://hayasmarketing.com/en/blog/ai-governance-business"
    },
    mainKeyword: 'AI governance',
    secondaryKeywords: ['AI governance business', 'AI regulation', 'AI strategy', 'AI ethics', 'responsible AI']
  };

  const faqs = [
    {
      question: "What is AI governance?",
      answer: "AI governance consists of defining where it makes sense to use it, what decisions remain human, how results are reviewed and validated, and who assumes final responsibility. It's a framework that allows using AI well, without losing control or judgment."
    },
    {
      question: "Which bodies regulate AI internationally?",
      answer: "In the EU, the AI Act provides a comprehensive regulatory framework. In the US, the NIST AI Risk Management Framework offers guidelines. Many countries are developing their own agencies and regulations to supervise AI implementation."
    },
    {
      question: "Why is AI governance critical in marketing?",
      answer: "In marketing, AI directly influences what is communicated, how it's communicated, and to whom. It affects the brand, reputation, and trust. Without governance, there's a risk of inconsistencies, errors, or progressive loss of judgment."
    },
    {
      question: "How are companies applying AI governance?",
      answer: "Major banks and tech companies have developed internal policies and ethical committees. Organizations like Microsoft, Google, and IBM have published AI ethics principles and clear guidelines for the development and use of AI-based solutions."
    },
    {
      question: "Does AI governance slow down innovation?",
      answer: "No. Far from being a brake, governance is what allows scaling AI use without losing control, coherence, or judgment. Organizations that most intensively use AI are also those that have established clear internal principles and norms."
    }
  ];

  const relatedServices = [
    {
      title: "AI Process Integrations",
      description: "We help you integrate artificial intelligence into your processes with a clear and responsible governance framework.",
      link: "/en/services/ai-process-integration"
    },
    {
      title: "Strategic Consulting and Analytics",
      description: "We design digital strategies that include AI usage policies aligned with your business objectives.",
      link: "/en/services/strategic-consulting-analytics"
    }
  ];

  const enterpriseExamples = [
    { sector: 'Banking', companies: 'Major banks worldwide', focus: 'Ethical committees, transparency and non-discrimination' },
    { sector: 'Technology', companies: 'Microsoft, Google, IBM', focus: 'Ethical principles and development guidelines' },
    { sector: 'Associations', companies: 'IEEE, Partnership on AI', focus: 'Governance models and best practices' }
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
            Artificial intelligence has radically multiplied our capacity to generate content, data, and knowledge. It has never been so easy to produce so much, so fast, and at such low cost.
          </p>
          
          <p className="text-elegant mt-4">
            The problem is that <strong>not everything generated is valid, accurate, or useful.</strong>
          </p>
          
          <p className="text-elegant mt-4">
            Today we coexist with texts, images, analyses, and automated decisions that exceed our real capacity for review and judgment. Without clear rules, good practices, and conscious supervision, the risk is evident: turning the digital environment—and marketing—into an increasingly noisy, confusing, and hard-to-trust space.
          </p>

          <Card className="my-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <AlertTriangle className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-xl font-semibold mb-2">AI doesn't fail due to excess power.</p>
                  <p className="text-elegant text-lg">It fails when used without governance.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator />

        {/* When lack of governance has consequences */}
        <section>
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <AlertCircle className="h-8 w-8 text-destructive" />
            When Lack of Governance Has Real Consequences
          </h2>
          
          <Card className="bg-destructive/5 border-destructive/20">
            <CardContent className="p-6">
              <p className="text-elegant mb-4">
                A recent example illustrates this clearly.
              </p>
              <p className="text-elegant mb-4">
                <strong>YouTube closed two major channels for fake trailers generated with AI</strong>. A case that evidences the consequences of publishing content generated entirely with artificial intelligence and presented as legitimate.
              </p>
              <p className="text-elegant mb-4">
                It wasn't a technical error or a one-time algorithm failure.
                It was the result of using AI massively, automatically, and without clear criteria, prioritizing volume and visibility over veracity and responsibility.
              </p>
            </CardContent>
          </Card>

          <Card className="mt-4 bg-destructive/5 border-destructive/20">
            <CardContent className="p-6">
              <p className="text-elegant mb-4">
                Another recent example reinforces this trend.
              </p>
              <p className="text-elegant">
                <strong>Launching an AI-generated podcast seemed like a good idea, but it was a complete disaster for the Washington Post</strong>. A case that demonstrates how even reference media can suffer serious reputational consequences when implementing AI without an adequate governance strategy.
              </p>
            </CardContent>
          </Card>
          
          <Card className="mt-6 bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-700">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Eye className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
                <p className="text-elegant">
                  These types of cases are not anecdotal. They are a signal of something deeper:<br />
                  <strong>when AI is used without rules, trust deteriorates and consequences come sooner or later.</strong>
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator />

        {/* A growing risk: organized fraud with legitimate appearance */}
        <section>
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <AlertTriangle className="h-8 w-8 text-primary" />
            A Growing Risk: Organized Fraud with Legitimate Appearance
          </h2>
          
          <p className="text-elegant mb-4">
            Artificial intelligence has elevated the level of sophistication of digital fraud.
          </p>
          <p className="text-elegant mb-6">
            Today, organized groups can use AI to replicate with great precision the image, tone, and messages of real companies, making scams much more credible and difficult to detect for users.
          </p>

          <Card className="bg-muted/50 mb-6">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">In the field of marketing and communication, this translates into risks like:</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-elegant">
                  <AlertTriangle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Fraudulent messages that imitate real campaigns</strong><br />
                    <span className="text-elegant-muted">Emails, WhatsApp messages, or ads that copy design, language, and structure of official communications from well-known brands.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3 text-elegant">
                  <AlertTriangle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Use of AI to personalize the deception</strong><br />
                    <span className="text-elegant-muted">Automatic adaptation of messages according to user profile, increasing fraud success rate.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3 text-elegant">
                  <AlertTriangle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Corporate identity impersonation</strong><br />
                    <span className="text-elegant-muted">Fake websites, cloned social profiles, or conversational assistants that appear to be official customer service channels.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3 text-elegant">
                  <AlertTriangle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Greater credibility, greater impact</strong><br />
                    <span className="text-elegant-muted">The more professional and coherent the AI-generated message, the greater the user's trust... and the greater the potential damage to the brand and affected people.</span>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>

          <p className="text-elegant mb-4">
            AI doesn't just automate content.<br />
            <strong>It can also automate the credibility of deception when used without limits or control.</strong>
          </p>

          <Card className="mt-6 bg-primary/5 border-primary/20">
            <CardContent className="p-6">
              <p className="text-elegant text-lg italic">
                "That's why AI governance is not just a technological or legal issue.<br />
                <strong>It's an essential layer of brand, customer, and reputation protection.</strong>"
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator />

        {/* Governing AI is not slowing innovation */}
        <section>
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Scale className="h-8 w-8 text-primary" />
            Governing AI Is Not Slowing Innovation
          </h2>
          
          <p className="text-elegant mb-6">
            Talking about artificial intelligence governance does not mean setting arbitrary limits or slowing down technology adoption. <strong>It means creating a framework that allows using it well.</strong>
          </p>

          <Card className="bg-muted/50">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">AI governance consists of defining:</h3>
              <ul className="space-y-3">
                {[
                  'Where it makes sense to use it and where not',
                  'What decisions remain human',
                  'How results are reviewed and validated',
                  'Who assumes final responsibility'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-elegant">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <div className="mt-6 p-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg">
            <p className="text-elegant text-lg">
              Far from being a brake, <strong>governance is what allows scaling AI use without losing control, coherence, or judgment.</strong>
            </p>
            <p className="text-elegant-muted mt-4">
              It's no coincidence that organizations that most intensively use artificial intelligence are also those that have established clear principles, internal norms, and supervision systems.
            </p>
          </div>
        </section>

        <Separator />

        {/* Companies leading by example */}
        <section>
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Building2 className="h-8 w-8 text-primary" />
            Companies Leading AI Governance
          </h2>
          
          <p className="text-elegant mb-6">
            Several sectors are leading the way in implementing responsible AI governance:
          </p>

          <div className="space-y-4">
            {enterpriseExamples.map((example, index) => (
              <Card key={index} className="bg-muted/30">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Building2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <Badge variant="secondary">{example.sector}</Badge>
                        <span className="text-sm text-muted-foreground">{example.companies}</span>
                      </div>
                      <p className="text-elegant">{example.focus}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator />

        {/* What should we do */}
        <section>
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Target className="h-8 w-8 text-primary" />
            What Should Companies Do?
          </h2>

          <p className="text-elegant mb-6">
            Establishing an AI governance framework doesn't require being a large corporation. Any company that uses AI—even at a basic level—can start with these steps:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <FileText className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">1. Define where AI is used</h4>
                    <p className="text-sm text-muted-foreground">Map processes, tools, and specific use cases in your organization.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <UserCheck className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">2. Establish who supervises</h4>
                    <p className="text-sm text-muted-foreground">Assign clear responsibility for reviewing AI-generated results.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Shield className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">3. Create usage guidelines</h4>
                    <p className="text-sm text-muted-foreground">Define what is acceptable and what isn't when using AI in your company.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <TrendingUp className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">4. Review and iterate</h4>
                    <p className="text-sm text-muted-foreground">Governance is not static; it must evolve with technology and your needs.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator />

        {/* Conclusion */}
        <section>
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Lightbulb className="h-8 w-8 text-primary" />
            Conclusion: Governance as Competitive Advantage
          </h2>

          <p className="text-elegant mb-6">
            AI governance is not about bureaucracy or slowing things down. It's about using technology responsibly, protecting your brand, and building trust with your clients.
          </p>

          <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
            <CardContent className="p-8 text-center">
              <p className="text-xl font-medium text-foreground mb-4">
                Companies that govern their AI well today<br />
                <strong>will be the ones that earn trust tomorrow.</strong>
              </p>
              <Link 
                to={getRoute('aiProcessIntegration')}
                className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
              >
                Learn about our AI integration services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </CardContent>
          </Card>
        </section>
      </div>
    </BlogPostTemplate>
  );
};

export default BlogAIGovernanceBusiness;
