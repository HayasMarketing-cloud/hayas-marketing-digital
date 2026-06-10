import React from 'react';
import BlogPostTemplate from '@/components/BlogPost/BlogPostTemplate';
import { Users, Target, BarChart3, Zap, Shield, TrendingUp, UserCheck, Building2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const BlogABMAccountBasedMarketingEN = () => {
  const metadata = {
    title: 'ABM Strategy: Account-Based Marketing for B2B Businesses',
    metaTitle: 'ABM Strategy: Account-Based Marketing for B2B | Hayas',
    description: 'Unlock the power of ABM (Account-Based Marketing) for your B2B company. Implement personalized strategies to attract key accounts and maximize ROI.',
    metaDescription: 'How to run a winning Account-Based Marketing strategy: target high-value accounts, align sales & marketing and measure ROI with the right tools.',
    date: '2025-01-19',
    readTime: '18 min',
    category: 'Digital Marketing',
    author: 'Rubén Reyero',
    tags: ['ABM', 'Account-Based Marketing', 'B2B Marketing', 'Marketing Strategy', 'Key Accounts'],
    canonical: '/en/blog/abm-account-based-marketing',
    ogImage: '/abm-account-based-marketing-hero.jpg',
    mainKeyword: 'ABM',
    secondaryKeywords: ['account based marketing', 'abm strategy', 'b2b marketing', 'target accounts'],
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'ABM Strategy: Account-Based Marketing for B2B Businesses',
      description: 'Unlock the power of ABM (Account-Based Marketing) for your B2B company. Implement personalized strategies to attract key accounts and maximize ROI.',
      author: {
        '@type': 'Person',
        name: 'Rubén Reyero',
        url: 'https://hayasmarketing.com/en/author/ruben-reyero',
      },
      publisher: {
        '@type': 'Organization',
        name: 'Hayas Marketing',
        '@id': 'https://hayasmarketing.com/#organization',
        logo: {
          '@type': 'ImageObject',
          url: 'https://hayasmarketing.com/lovable-uploads/hayas-logo.webp',
          width: 300,
          height: 100,
        },
      },
      datePublished: '2025-01-19T00:00:00+01:00',
      dateModified: '2025-01-19T00:00:00+01:00',
      mainEntityOfPage: 'https://hayasmarketing.com/en/blog/abm-account-based-marketing',
      inLanguage: 'en-US',
    },
  };

  const heroImage = {
    src: '/abm-account-based-marketing-hero.jpg',
    alt: 'Account-Based Marketing (ABM) strategy for B2B companies',
    width: 1200,
    height: 675,
    loading: 'eager' as const,
    fetchPriority: 'high' as const,
  };

  const relatedServices = [
    {
      title: 'CRM Implementation',
      description: 'We set up your CRM with advanced ABM capabilities to identify and manage high-value target accounts.',
      link: '/en/services/crm-implementation',
    },
    {
      title: 'Sales Process Automation',
      description: 'We design custom workflows to automate acquisition and follow-up of large B2B accounts.',
      link: '/en/services/sales-process-automation',
    },
  ];

  const abmBenefits = [
    { icon: <Target className="h-6 w-6" />, title: 'High-quality focus', description: 'Concentrates on pre-qualified, high-value accounts.' },
    { icon: <Users className="h-6 w-6" />, title: 'Sales & Marketing alignment', description: 'Unifies both teams around shared revenue goals.' },
    { icon: <BarChart3 className="h-6 w-6" />, title: 'Higher ROI', description: 'Greater return by concentrating resources on specific accounts.' },
    { icon: <UserCheck className="h-6 w-6" />, title: 'Extreme personalization', description: 'Content and outreach tailored to each target account.' },
    { icon: <Building2 className="h-6 w-6" />, title: 'Shorter sales cycles', description: 'Streamlined processes for large, complex accounts.' },
    { icon: <TrendingUp className="h-6 w-6" />, title: 'Controlled scalability', description: 'Sustainable growth focused on strategic accounts.' },
  ];

  const abmKeys = [
    'Keep Marketing and Sales aligned around shared targets.',
    'Identify your target accounts using an ICP (Ideal Customer Profile) matrix.',
    'Map the key buying-committee personas inside each account.',
    'Analyze which content resonates with each role and account.',
    'Start attracting contacts from your target accounts strategically.',
    'Convert those contacts into qualified business opportunities.',
    'Measure performance with ABM-specific metrics.',
    'Nurture and retain these accounts as strategic business assets.',
  ];

  const abmTools = [
    { icon: <Shield className="h-6 w-6" />, title: 'Custom CRM properties', description: 'Tag accounts, contacts and buying roles for advanced segmentation.' },
    { icon: <Zap className="h-6 w-6" />, title: 'Automation workflows', description: 'Automatically identify ideal customers and target accounts.' },
    { icon: <BarChart3 className="h-6 w-6" />, title: 'Custom lead scoring', description: 'Score companies against specific criteria to prioritize accounts.' },
    { icon: <Target className="h-6 w-6" />, title: 'Target account tools', description: 'Dedicated features to track activity and engagement per account.' },
  ];

  const metrics = [
    'Number of new target accounts created',
    'Page views from target-account users',
    'Conversion ratios by account and role',
    'Average cost of conversion per account',
    'Number of new deals or opportunities',
    'Average time in each pipeline stage',
    'Close ratio for large accounts',
    'Acquisition cost by account type',
  ];

  const faqs = [
    {
      question: 'What exactly is ABM or Account-Based Marketing?',
      answer: 'ABM is a B2B marketing strategy that focuses on specific high-value accounts, fully personalizing the commercial approach for each target account instead of running mass tactics.',
    },
    {
      question: 'What are the main benefits of Account-Based Marketing?',
      answer: 'Benefits include up to 171% higher ROI, stronger alignment between marketing and sales, shorter sales cycles, extreme personalization and better retention of large accounts.',
    },
    {
      question: 'Which companies should implement an ABM strategy?',
      answer: 'B2B companies with long sales cycles, high-value products or services, niche markets, or those targeting specific large enterprises are ideal candidates for ABM.',
    },
    {
      question: 'How does ABM differ from traditional marketing?',
      answer: 'Traditional marketing attracts many leads and filters them later. ABM flips the logic: first identify specific accounts, then fully personalize the strategy for each one.',
    },
    {
      question: 'Which tools are essential to run ABM?',
      answer: 'An advanced CRM with ABM features, lead-scoring tools, automation platforms, content personalization systems and analytics built around target accounts.',
    },
    {
      question: 'How long does an ABM strategy take to deliver results?',
      answer: 'First results typically appear within 3–6 months. ABM is a long-term play that reaches its full potential after 12–18 months of consistent execution.',
    },
  ];

  return (
    <BlogPostTemplate metadata={metadata} heroImage={heroImage} faqs={faqs} relatedServices={relatedServices}>
      <div className="space-y-12">
        <section>
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-6 border border-primary/10 mb-8">
            <p className="text-sm text-muted-foreground mb-2"><strong>📊 Key stat:</strong></p>
            <p className="text-foreground">
              Companies running ABM strategies achieve up to 171% higher ROI than traditional marketing and close 36% more deals with large accounts.
            </p>
          </div>

          <p className="text-lg mb-6 text-muted-foreground leading-relaxed">
            <strong>Account-Based Marketing (ABM)</strong> is a game-changing strategy for B2B companies focused on winning and retaining high-value accounts. Unlike traditional marketing, ABM flips the logic: instead of casting a wide net, it concentrates on specific, pre-identified accounts.
          </p>

          <p className="text-lg mb-8 text-muted-foreground leading-relaxed">
            The approach has gained traction thanks to advances in digital technology, which enable unprecedented segmentation and personalization — making ABM executable at scale with greater precision and measurable results.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">The objective of an ABM strategy</h2>

          <p className="text-lg mb-6 text-muted-foreground leading-relaxed">
            The primary goal of Account-Based Marketing is the <strong>acquisition of pre-selected, highly qualified target accounts</strong>, maximizing the value of every potential customer.
          </p>

          <div className="bg-muted/30 rounded-lg p-6 mb-8">
            <h3 className="font-semibold mb-3 text-foreground">A practical ABM example:</h3>
            <p className="text-muted-foreground mb-4">
              Imagine you are a fiber-optic manufacturer in Portugal expanding into Spain. Your goal is to win Telefónica, Vodafone, Orange and Masmóvil as clients.
            </p>
            <p className="text-muted-foreground">
              With ABM, all your marketing and sales efforts focus specifically on those four accounts — creating personalized content, unique outreach strategies and sales processes adapted to each one.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Benefits of Account-Based Marketing</h2>

          <p className="text-lg mb-8 text-muted-foreground leading-relaxed">
            ABM transforms the traditional go-to-market motion, delivering meaningful competitive advantages:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {abmBenefits.map((b, i) => (
              <Card key={i} className="border border-border/50 hover:border-primary/20 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">{b.icon}</div>
                    <div>
                      <h3 className="font-semibold mb-2 text-foreground">{b.title}</h3>
                      <p className="text-sm text-muted-foreground">{b.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Keys to a successful ABM strategy</h2>

          <p className="text-lg mb-8 text-muted-foreground leading-relaxed">
            Successful ABM execution requires proven methodologies and a sharp focus on strategic execution:
          </p>

          <div className="space-y-4 mb-8">
            {abmKeys.map((k, i) => (
              <div key={i} className="flex items-start gap-4 p-4 bg-muted/20 rounded-lg border border-border/30">
                <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold shrink-0">
                  {i + 1}
                </div>
                <p className="text-muted-foreground leading-relaxed">{k}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Essential tools for your ABM strategy</h2>

          <p className="text-lg mb-8 text-muted-foreground leading-relaxed">
            ABM success depends on the right technology stack to execute, measure and optimize the strategy:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {abmTools.map((t, i) => (
              <Card key={i} className="border border-border/50 hover:border-secondary/20 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-secondary/10 rounded-lg text-secondary">{t.icon}</div>
                    <div>
                      <h3 className="font-semibold mb-2 text-foreground">{t.title}</h3>
                      <p className="text-sm text-muted-foreground">{t.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-gradient-to-br from-secondary/5 to-accent/5 rounded-xl p-6 border border-secondary/10">
            <h3 className="font-semibold mb-4 text-foreground">Additional ABM tooling:</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• <strong>Smart content:</strong> Account-personalized landing pages and websites.</li>
              <li>• <strong>Personalized email marketing:</strong> Messaging tailored to roles and personas.</li>
              <li>• <strong>Sales playbooks:</strong> Specific guides for each account type.</li>
              <li>• <strong>Intelligent automation:</strong> Personalized reminders and follow-ups.</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Key metrics to measure ABM success</h2>

          <p className="text-lg mb-8 text-muted-foreground leading-relaxed">
            ABM requires specific metrics that reflect the personalized nature of the strategy:
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {metrics.map((m, i) => (
              <div key={i} className="flex items-center gap-3 p-3 bg-muted/20 rounded-lg border border-border/30">
                <div className="w-2 h-2 bg-primary rounded-full shrink-0"></div>
                <span className="text-muted-foreground text-sm">{m}</span>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-6 border border-primary/10">
            <p className="text-sm text-muted-foreground mb-2"><strong>⚡ Expert tip:</strong></p>
            <p className="text-foreground">
              Nurturing and retaining ABM accounts is essential — especially in ARR/MRR models. Treat every renewal as a new sales opportunity.
            </p>
          </div>
        </section>
      </div>
    </BlogPostTemplate>
  );
};

export default BlogABMAccountBasedMarketingEN;
