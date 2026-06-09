import React from 'react';
import { Link } from 'react-router-dom';
import BlogPostTemplate from '@/components/BlogPost/BlogPostTemplate';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import paralysisHero from '@/assets/paralisis-analisis-marketing-hero.jpg';
import { BarChart3, Compass, Filter, Layers, Target, AlertTriangle, CheckCircle2, BrainCircuit, Radar, Search, Rocket, ArrowRight } from 'lucide-react';

const BlogAnalysisParalysisMarketingEN = () => {
  const metadata = {
    title: 'Analysis Paralysis in Marketing: Less Data, More Judgment',
    metaTitle: 'Analysis Paralysis in Marketing | Hayas Marketing',
    description: 'Data driven marketing without analysis paralysis: how to turn information overload into clear decisions and a real growth system.',
    metaDescription: 'Analysis paralysis: how to move from stacking dashboards to deciding with judgment. Data driven marketing aligned with business outcomes.',
    date: '2026-06-09',
    readTime: '9 min',
    category: 'Data Driven Marketing',
    author: 'Rubén Reyero',
    tags: ['Analysis paralysis', 'Data driven marketing', 'Marketing analytics', 'Data driven decision making', 'Strategy'],
    canonical: '/en/blog/analysis-paralysis-marketing',
    ogImage: paralysisHero,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Analysis Paralysis in Marketing: Less Data, More Judgment",
      "author": {
        "@type": "Person",
        "name": "Rubén Reyero",
        "url": "https://hayasmarketing.com/en/author/ruben-reyero"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Hayas Marketing",
        "logo": { "@type": "ImageObject", "url": "https://hayasmarketing.com/logo.png" }
      },
      "datePublished": "2026-06-09",
      "dateModified": "2026-06-09",
      "mainEntityOfPage": "https://hayasmarketing.com/en/blog/analysis-paralysis-marketing",
      "inLanguage": "en-US"
    },
    mainKeyword: 'analysis paralysis',
    secondaryKeywords: ['data driven marketing', 'marketing analytics', 'data driven decision making', 'marketing strategy']
  };

  const faqs = [
    { question: 'What is analysis paralysis in marketing?', answer: 'It is the decision-making deadlock that happens when teams accumulate more data, dashboards and reports than they can actually interpret and act on. People stare at metrics instead of deciding.' },
    { question: 'How is it different from data driven marketing?', answer: 'Data driven marketing uses information to decide better, not to justify inaction. Analysis paralysis appears when "having data" is confused with "having judgment".' },
    { question: 'How do you avoid analysis paralysis?', answer: 'By defining upfront which decision each metric will inform, reducing the number of KPIs and building a system — not a dashboard — that connects data, decisions and actions.' },
    { question: 'Which KPIs should we really track?', answer: 'Only those directly connected to a business decision: customer acquisition cost, lifetime value, conversion by funnel stage and cycle velocity. Everything else is noise.' },
    { question: 'Does AI make analysis paralysis worse or better?', answer: 'It makes it worse when used to generate more reports; it reduces it when used to synthesize, prioritize and suggest the next concrete action.' }
  ];

  const relatedServices = [
    { title: 'Strategic consulting', description: 'We design the decision system and KPIs that actually move your business.', link: '/en/services/strategic-analytics-consulting' },
    { title: 'Marketing intelligence platform', description: 'We unify scattered data into an actionable layer connected to the business.', link: '/en/services/marketing-intelligence-platform' }
  ];

  return (
    <BlogPostTemplate
      metadata={metadata}
      heroImage={{ src: paralysisHero, alt: 'Analysis paralysis in data driven marketing', width: 1920, height: 1080, loading: 'eager', fetchPriority: 'high' }}
      faqs={faqs}
      relatedServices={relatedServices}
    >
      <section className="mb-12">
        <p className="text-xl text-muted-foreground italic mb-8 border-l-4 border-primary pl-6">
          Less noise, more system.
        </p>
        <p className="text-elegant mb-6">
          We live surrounded by dashboards, reports and metrics. And yet, deciding is harder than ever.
          That is the paradox of <strong>analysis paralysis</strong>: the more we measure, the less we move.
        </p>
        <p className="text-elegant">
          The problem is not a lack of data, but a lack of judgment to turn it into decisions. Modern marketing
          does not need more information: it needs a system that converts complexity into action.
        </p>
      </section>

      <Separator className="my-12" />

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
          <BarChart3 className="h-8 w-8 text-primary" />
          Data driven marketing without paralysis
        </h2>
        <p className="text-elegant mb-6">
          <strong>Data driven marketing</strong> was born to reduce improvisation. But in many teams it has done the
          opposite: an accumulation of panels no one questions and decisions that get postponed "until we have more data".
        </p>
        <p className="text-elegant mb-6">
          <strong>Data driven decision making</strong> is not about staring at more metrics, but at the right ones with a
          clear purpose: every KPI should be tied to a concrete decision. If no one is going to act on a number, that
          number does not belong on the dashboard.
        </p>
        <Card className="bg-muted/30 border-primary/20 mb-6">
          <CardContent className="p-6">
            <p className="text-elegant mb-2 font-semibold">Practical rule</p>
            <p className="text-elegant">
              For every metric you add to a panel, write one line describing the decision you will take when it goes
              up or down. If you cannot, it is not a metric: it is noise.
            </p>
          </CardContent>
        </Card>
      </section>

      <Separator className="my-12" />

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
          <AlertTriangle className="h-8 w-8 text-primary" />
          Symptoms of analysis paralysis
        </h2>
        <ul className="space-y-3">
          {[
            'Meetings that end with "we need to analyze it further".',
            'Dashboards with more than 15 KPIs nobody reviews regularly.',
            'A/B tests dragged out forever waiting for "significance".',
            'Teams producing reports instead of campaigns.',
            'Duplicate tools measuring the same thing with different values.'
          ].map((s) => (
            <li key={s} className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <span className="text-elegant">{s}</span>
            </li>
          ))}
        </ul>
      </section>

      <Separator className="my-12" />

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
          <Layers className="h-8 w-8 text-primary" />
          From dashboard to decision system
        </h2>
        <p className="text-elegant mb-6">
          The exit from paralysis is not adding another tool, but <strong>designing a system</strong> that connects three
          layers: data → judgment → action. Every data point enters with a question. Every question has an owner.
          Every answer triggers an action.
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          <Card><CardContent className="p-6">
            <Filter className="h-6 w-6 text-primary mb-3" />
            <h3 className="font-semibold mb-2">Filter</h3>
            <p className="text-sm text-muted-foreground">Reduce to the KPIs connected to real business decisions.</p>
          </CardContent></Card>
          <Card><CardContent className="p-6">
            <Compass className="h-6 w-6 text-primary mb-3" />
            <h3 className="font-semibold mb-2">Interpret</h3>
            <p className="text-sm text-muted-foreground">Define thresholds and narratives: what each change means.</p>
          </CardContent></Card>
          <Card><CardContent className="p-6">
            <Target className="h-6 w-6 text-primary mb-3" />
            <h3 className="font-semibold mb-2">Act</h3>
            <p className="text-sm text-muted-foreground">Assign an owner and deadline to every derived decision.</p>
          </CardContent></Card>
        </div>
      </section>

      <Separator className="my-12" />

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Less noise, more system</h2>
        <p className="text-elegant mb-6">
          In complex environments — especially in international B2B — value is not in stacking data, but in turning it
          into a business-oriented system that reduces improvisation.
        </p>
        <p className="text-elegant">
          If your marketing feels like a sequence of informational "patches" and you want to make decisions with less
          improvisation and more technical rigor, let's talk. That is the core of our proposition at Hayas:
          <strong> turning digital complexity into a clear growth system.</strong>
        </p>
      </section>

      <section className="my-16 not-prose">
        <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/5 via-background to-accent/10 p-8 md:p-12 shadow-xl">
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-accent/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary mb-6">
              <BrainCircuit className="h-4 w-4" />
              SENSE · Marketing Intelligence Platform
            </div>

            <h2 className="text-3xl md:text-5xl font-bold leading-tight text-foreground mb-6">
              From information to decision
            </h2>

            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl leading-relaxed">
              SENSE helps marketing and leadership teams connect three fundamental dimensions:
            </p>

            <div className="grid md:grid-cols-3 gap-5 mb-12">
              <Card className="bg-background/60 backdrop-blur border-border/40 hover:border-primary/40 transition-colors">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-primary/10 text-primary mb-4">
                    <Radar className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">Market Intelligence</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Monitor trends, market signals and competitor movements.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-background/60 backdrop-blur border-border/40 hover:border-primary/40 transition-colors">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-primary/10 text-primary mb-4">
                    <Search className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">Search Intelligence</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Analyze how your brand is found and perceived across search engines and AI, identifying visibility and growth opportunities.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-background/60 backdrop-blur border-border/40 hover:border-primary/40 transition-colors">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-primary/10 text-primary mb-4">
                    <Rocket className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">Marketing Activation</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Turn insights into coordinated action plans aligned with your objectives.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center max-w-2xl mx-auto mb-10">
              <p className="text-2xl md:text-3xl font-semibold leading-tight text-foreground">
                Because the problem is no longer a lack of data.
              </p>
              <p className="text-2xl md:text-3xl font-semibold leading-tight text-primary mt-2">
                It is turning data into decisions.
              </p>
            </div>

            <div className="flex justify-center">
              <Button asChild size="lg" className="group">
                <Link to="/en/solutions/marketing-intelligence-platform">
                  Explore SENSE
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </BlogPostTemplate>
  );
};

export default BlogAnalysisParalysisMarketingEN;
