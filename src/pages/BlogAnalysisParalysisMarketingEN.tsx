import React from 'react';
import BlogPostTemplate from '@/components/BlogPost/BlogPostTemplate';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import paralysisHero from '@/assets/paralisis-analisis-marketing-hero.jpg';
import { BarChart3, Compass, Filter, Layers, Target, AlertTriangle, CheckCircle2 } from 'lucide-react';

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
    </BlogPostTemplate>
  );
};

export default BlogAnalysisParalysisMarketingEN;
