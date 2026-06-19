import React from 'react';
import BlogPostTemplate from '@/components/BlogPost/BlogPostTemplate';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Compass, Target, Gauge, Layers, CheckCircle, ArrowRight, Filter, Building2, Rocket, BrainCircuit } from 'lucide-react';
import driversHero from '@/assets/drivers-estrategicos-marketing-hero.jpg';

const BlogStrategicMarketingDriversEN = () => {
  const metadata = {
    title: "Strategic Marketing Drivers: turning vision into action",
    description: "What strategic drivers are, how they differ from objectives and KPIs, and how they guide marketing decisions to turn strategy into a sustainable system.",
    date: "2026-06-19",
    readTime: "11 min",
    category: "Marketing Strategy",
    author: "Rubén Reyero",
    tags: ["Strategy", "Marketing Strategy", "Drivers", "Decision Making", "Marketing Intelligence", "B2B"],
    canonical: "/en/blog/strategic-marketing-drivers",
    ogImage: "/images/blog/drivers-estrategicos-marketing-hero.jpg",
    metaTitle: "Strategic Marketing Drivers: from vision to action | Hayas",
    metaDescription: "Strategic drivers: the forces that guide your marketing decisions. The difference between objectives, drivers and KPIs, with a practical case and a method to identify them.",
    mainKeyword: "strategic marketing drivers",
    secondaryKeywords: ["strategic drivers", "marketing strategy", "marketing intelligence", "marketing decision making", "KPIs vs drivers"],
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Strategic Marketing Drivers: turning vision into action",
      "description": "How strategic drivers connect business objectives with marketing execution and simplify decision making.",
      "image": "https://hayasmarketing.com/images/blog/drivers-estrategicos-marketing-hero.jpg",
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
      "datePublished": "2026-06-19T00:00:00+02:00",
      "dateModified": "2026-06-19T00:00:00+02:00",
      "articleSection": "Marketing Strategy",
      "inLanguage": "en-US",
      "keywords": ["strategic drivers", "marketing strategy", "marketing intelligence", "KPIs", "decision making"]
    }
  };

  const faqs = [
    {
      question: "What is a strategic marketing driver?",
      answer: "A strategic driver is a guiding force that sets priorities and orients marketing decision making. It is not an objective, a channel, or a metric: it is the lever that dictates where you invest time, budget and energy to reach the business objectives."
    },
    {
      question: "How do objectives, drivers and KPIs differ?",
      answer: "Objectives define what we want to achieve (broad business goals). Strategic drivers are the forces that guide the decisions to achieve them. KPIs are the quantifiable metrics that measure progress. A single driver can influence several KPIs and contribute to several objectives."
    },
    {
      question: "How do I identify my company's strategic drivers?",
      answer: "Start from what your business needs to achieve in 12-24 months, identify what is limiting that growth, what decisions your marketing team keeps repeating, and which indicator would have the most impact if it improved. If removing a candidate driver barely changes the strategy, it was not a driver."
    },
    {
      question: "Why is it a mistake to start with tactics?",
      answer: "When marketing becomes a list of disconnected tasks (post, advertise, automate) you get operational fatigue and platform dependency. There is activity, but little real progress. Without drivers, data and AI only accelerate the chaos."
    },
    {
      question: "Do strategic drivers change over time?",
      answer: "Yes. They must evolve with the company's digital maturity and the market context. A company may prioritize brand localization in foreign markets for one semester and then pivot toward maximizing LTV through automation."
    }
  ];

  const relatedServices = [
    {
      title: "Strategic Marketing Consulting",
      description: "We define with you the drivers that organize your strategy and connect objectives, decisions and metrics.",
      link: "/en/services/strategic-consulting-analytics"
    },
    {
      title: "Marketing Intelligence Platform",
      description: "SENSE: the system that aligns data, automation and analytics with your strategic drivers.",
      link: "/en/services/marketing-intelligence-platform"
    }
  ];

  const hierarchy = [
    {
      icon: <Target className="h-5 w-5" />,
      label: "Objectives",
      question: "What do we want to achieve?",
      example: "Grow market share by 15% or expand into three new countries.",
      tone: "border-l-muted-foreground/40 text-muted-foreground"
    },
    {
      icon: <Compass className="h-5 w-5" />,
      label: "Strategic Drivers",
      question: "Which forces guide our decisions?",
      example: "Robust brand positioning or building proprietary assets.",
      tone: "border-l-primary text-primary"
    },
    {
      icon: <Gauge className="h-5 w-5" />,
      label: "KPIs",
      question: "How do we measure progress?",
      example: "Qualified leads/month, MQL→SQL rate, CAC in new markets.",
      tone: "border-l-secondary text-secondary"
    }
  ];

  const tacticTrap = [
    "We have to use AI because everyone else does.",
    "We need to post three times a week.",
    "We have to open the Spanish market right now."
  ];

  const caseDrivers = [
    {
      icon: <Building2 className="h-5 w-5" />,
      title: "1. Robust Strategic Brand Positioning",
      text: "Consolidate the company as an expert, differentiated reference for complex solutions, communicating a unique value proposition beyond technical features."
    },
    {
      icon: <Rocket className="h-5 w-5" />,
      title: "2. Expansion and Adaptation in New Markets",
      text: "Identify, enter and adapt the value proposition to the specific needs of international markets."
    },
    {
      icon: <Layers className="h-5 w-5" />,
      title: "3. Building Proprietary Assets",
      text: "Develop resources, knowledge and internal systems that reduce dependency on volatile external platforms and optimize the customer lifecycle."
    },
    {
      icon: <BrainCircuit className="h-5 w-5" />,
      title: "4. Commercial Optimization with Marketing Intelligence",
      text: "Tools, data and workflows that improve lead qualification, personalize communication and accelerate the sales cycle."
    }
  ];

  const identifySteps = [
    {
      title: "What does your company need to achieve in 12-24 months?",
      bullets: [
        "Enter new markets.",
        "Reduce dependency on a key client.",
        "Increase marketing profitability.",
        "Increase recurrence.",
        "Improve brand positioning."
      ]
    },
    {
      title: "What is currently limiting that growth?",
      bullets: [
        "Low visibility in certain markets.",
        "Excessive dependency on advertising for acquisition.",
        "Long commercial cycles.",
        "Lack of clear differentiation.",
        "Low customer retention."
      ]
    },
    {
      title: "Which decisions does your marketing team keep repeating?",
      bullets: [
        "Do we invest in brand or in direct acquisition?",
        "Do we expand into new markets or go deeper into current ones?",
        "Do we prioritize growth or profitability?"
      ]
    },
    {
      title: "Which indicator would have the biggest impact if it improved?",
      bullets: [
        "Some KPIs act as multipliers.",
        "Identifying them reveals the forces that truly move the business."
      ]
    }
  ];

  return (
    <BlogPostTemplate
      metadata={metadata}
      heroImage={{
        src: driversHero,
        alt: "Strategic marketing drivers represented as a compass orienting KPIs, funnels and decisions",
        width: 1600,
        height: 900,
        loading: "eager",
        fetchPriority: "high"
      }}
      faqs={faqs}
      relatedServices={relatedServices}
    >
      {/* Intro */}
      <section className="mb-12">
        <p className="text-lg mb-6 text-muted-foreground leading-relaxed">
          In today's dynamic digital ecosystem, companies often find themselves at a crossroads. On one side, ambitious objectives: grow 20%, go international or capture qualified leads. On the other, an avalanche of tactical actions: LinkedIn posts, web optimization, Ads campaigns.
        </p>
        <p className="text-lg mb-6 text-muted-foreground leading-relaxed">
          But what happens between the wish and the execution? Often, an uncertainty gap where questions overwhelm the teams: <em>"Are we prioritizing the right thing?", "Does this campaign really move the business needle?", "Are we building an asset or chasing the latest AI trend?"</em>
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed">
          At Hayas Marketing, we connect those dots with <strong>Strategic Drivers</strong>.
        </p>
      </section>

      {/* What are they */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-foreground">What strategic drivers are (and what they are not)</h2>
        <p className="text-lg mb-6 text-muted-foreground leading-relaxed">
          The word <em>driver</em> comes from <em>to drive</em>: to push, to lead, to direct. In strategy, a driver is exactly that: <strong>a force that sets a clear direction and helps orient every decision.</strong>
        </p>

        <Card className="border border-border/50 mb-6">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg text-primary">
                <Compass className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-foreground">It is not an objective. It is not an action. It is not a metric.</h3>
            </div>
            <p className="text-muted-foreground">
              They are the <strong>strategic engines of your marketing</strong>: the forces that define priorities, guide your strategy and simplify decisions about where to invest time, how to allocate budget and where to focus energy and talent.
            </p>
          </CardContent>
        </Card>

        <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-6 border border-primary/10">
          <p className="text-foreground">
            Setting up a lead nurturing workflow for a specific market in the CRM is an <strong>action</strong>. The driver behind it might be <strong>"Reduce the sales cycle in international markets"</strong>. Without the driver, the action is operational noise; with it, it is a calculated, purpose-driven investment.
          </p>
        </div>
      </section>

      {/* Objectives vs Drivers vs KPIs */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-foreground">Objectives vs Drivers vs KPIs: the key to clarity</h2>
        <p className="text-lg mb-8 text-muted-foreground leading-relaxed">
          Understanding the hierarchy between these three concepts is essential to build marketing intelligence.
        </p>

        <div className="grid gap-4 mb-6">
          {hierarchy.map((item, i) => (
            <Card key={i} className={`border-l-4 ${item.tone.split(' ')[0]}`}>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className={`p-2 bg-muted rounded-lg ${item.tone.split(' ')[1]}`}>{item.icon}</div>
                  <h3 className="font-semibold text-foreground text-lg">{item.label}</h3>
                </div>
                <p className="text-foreground font-medium mb-1">{item.question}</p>
                <p className="text-muted-foreground text-sm">{item.example}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-muted/50 rounded-lg p-6">
          <p className="text-foreground">
            A driver can influence multiple KPIs and contribute to several objectives, but its main function is to <strong>direct strategic priorities</strong>, not simply to measure a result.
          </p>
        </div>
      </section>

      {/* Cost of starting with tactics */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-foreground">The cost of starting with tactics</h2>
        <p className="text-lg mb-6 text-muted-foreground leading-relaxed">
          The most common mistake —especially in teams with complex operations or in the middle of digital transformation— is the tyranny of the urgent. The need to "do things for the sake of doing":
        </p>

        <div className="grid gap-3 mb-6">
          {tacticTrap.map((t, i) => (
            <div key={i} className="flex items-start gap-3 p-4 bg-destructive/5 border border-destructive/15 rounded-lg">
              <Badge variant="outline" className="border-destructive/40 text-destructive">{i + 1}</Badge>
              <p className="text-foreground italic">"{t}"</p>
            </div>
          ))}
        </div>

        <p className="text-lg text-muted-foreground leading-relaxed">
          When marketing becomes a list of disconnected tasks, operational fatigue and excessive platform dependency appear. There is a lot of activity, but little real progress. At Hayas we believe marketing should be a <strong>sustainable system</strong>, not a collection of isolated experiments.
        </p>
      </section>

      {/* How drivers transform decisions */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-foreground">How drivers transform your decision making</h2>
        <p className="text-lg mb-6 text-muted-foreground leading-relaxed">
          Drivers act as <strong>efficiency filters</strong>. At Hayas we apply the driver <em>"Building proprietary assets and fostering client independence"</em>. This approach guides our operations and simplifies decisions instantly:
        </p>

        <div className="grid gap-4 mb-6">
          {[
            "Strategic content creation gains weight over ephemeral advertising.",
            "Database (CRM) optimization becomes critical.",
            "AI implementation focuses on scaling quality production, not on automating for the sake of automation."
          ].map((t, i) => (
            <div key={i} className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg border border-border/50">
              <div className="p-2 bg-primary/10 rounded-lg text-primary flex-shrink-0">
                <Filter className="h-4 w-4" />
              </div>
              <p className="text-foreground">{t}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-6 border border-primary/20">
          <p className="text-foreground text-lg">
            In the current context, <strong>knowing what to abandon is as strategic as knowing what to start</strong>.
          </p>
        </div>
      </section>

      {/* Practical case */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-foreground">Practical case: technology solutions company</h2>
        <p className="text-lg mb-6 text-muted-foreground leading-relaxed">
          Imagine a mature technology company with complex, customized solutions, operating in a saturated national market and looking to expand while optimizing internal processes.
        </p>

        <Card className="border border-border/50 mb-8">
          <CardContent className="p-6">
            <h3 className="font-semibold text-foreground mb-3">General objective</h3>
            <p className="text-muted-foreground mb-4">Increase profitability by 25% and consolidate leadership in specialized niches, with 15% of revenue coming from new markets within 3 years.</p>
            <h3 className="font-semibold text-foreground mb-3">Challenges</h3>
            <ul className="space-y-2">
              {[
                "Dependency on limited \"word of mouth\" for customer acquisition.",
                "Difficulty generating high-value leads in new markets.",
                "Very long sales cycles due to the complexity of the offer.",
                "Growing operational cost of the marketing team without efficient scale.",
                "Undifferentiated brand perception against similar competitors."
              ].map((t, i) => (
                <li key={i} className="flex items-start gap-2 text-muted-foreground">
                  <span className="w-1.5 h-1.5 bg-muted-foreground/60 rounded-full mt-2.5 flex-shrink-0" />
                  {t}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <h3 className="text-2xl font-semibold mb-6 text-foreground">Strategic drivers you could define</h3>
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {caseDrivers.map((d, i) => (
            <Card key={i} className="border border-border/50 h-full">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">{d.icon}</div>
                  <h4 className="font-semibold text-foreground">{d.title}</h4>
                </div>
                <p className="text-muted-foreground text-sm">{d.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <h3 className="text-2xl font-semibold mb-4 text-foreground">How these drivers guide action</h3>
        <div className="space-y-4 mb-6">
          {[
            { t: "Content strategy", d: "Sector reports, advanced guides and case studies that demonstrate expertise (Drivers 1 and 3), adapted to international audiences (Driver 2)." },
            { t: "CRM management", d: "Advanced behavior-based lead scoring to identify high-potential opportunities (Driver 4)." },
            { t: "Paid media investment", d: "Highly segmented ABM campaigns in specific markets (Driver 2) with messages aligned to the positioning (Driver 1)." },
            { t: "Internal tools", d: "Centralized, automated knowledge repository for marketing and sales (Drivers 3 and 4)." }
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg">
              <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
              <p className="text-foreground"><strong>{item.t}:</strong> <span className="text-muted-foreground">{item.d}</span></p>
            </div>
          ))}
        </div>

        <div className="bg-muted/50 rounded-lg p-6">
          <p className="text-foreground">
            Without these drivers, the company might invest in generic advertising, create content without a clear audience or adopt tools that don't connect with its commercial needs. <strong>With the drivers, every action is justified and contributes to the business.</strong>
          </p>
        </div>
      </section>

      {/* Dynamic system */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-foreground">A dynamic, not static, system</h2>
        <p className="text-lg mb-6 text-muted-foreground leading-relaxed">
          Strategic drivers must evolve with your company's digital maturity and the market context. A company may prioritize <strong>"Brand localization in foreign markets"</strong> for one semester, and then pivot toward <strong>"Maximizing LTV through automation"</strong>.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Less improvisation, more real advantage. Data and AI are powerful tools, but without drivers to direct them they only accelerate the chaos. If your team is stuck in tactical execution without a clear direction, you don't need more actions: <strong>you need better drivers</strong>.
        </p>
      </section>

      {/* How to identify them */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-foreground">How to identify your own strategic drivers</h2>
        <p className="text-lg mb-8 text-muted-foreground leading-relaxed">
          Drivers are rarely found in the actions. They are found in <strong>the most important tensions, challenges and opportunities of your business</strong>.
        </p>

        <div className="space-y-6 mb-6">
          {identifySteps.map((step, i) => (
            <Card key={i} className="border border-border/50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Badge variant="secondary" className="min-w-fit text-base">{i + 1}</Badge>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground text-lg mb-3">{step.title}</h3>
                    <ul className="space-y-2">
                      {step.bullets.map((b, j) => (
                        <li key={j} className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-6 border border-primary/20">
          <p className="text-foreground text-lg">
            <strong>A simple test:</strong> if you remove a candidate driver and the strategy barely changes, it probably wasn't a driver. If removing it radically changes priorities, investments and decisions, you have found one of the real engines of your organization.
          </p>
        </div>
      </section>

      {/* SENSE */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-foreground">SENSE: strategic coherence in your marketing</h2>
        <p className="text-lg mb-6 text-muted-foreground leading-relaxed">
          The effective implementation of strategic drivers transforms marketing —from a collection of activities into a cohesive, efficient system—. Bringing it to life requires a structure that integrates data, automation and analytics under a defined direction.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Through a platform like <strong>SENSE</strong>, marketing intelligence becomes a natural extension of your drivers: it organizes knowledge, automates processes with purpose and analyzes performance, ensuring that every component of your operation is aligned with your objectives. SENSE doesn't just process information: it lets your <strong>strategy come to life</strong>, with human direction guiding the power of digital tools.
        </p>
      </section>

      {/* Closing */}
      <section className="mb-12">
        <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-8 border border-primary/20 text-center">
          <h2 className="text-3xl font-bold mb-4 text-foreground">Decide better, don't do more</h2>
          <p className="text-lg mb-4 text-muted-foreground max-w-2xl mx-auto">
            Modern strategic marketing demands judgment and a responsible use of technology.
          </p>
          <p className="text-lg text-foreground font-semibold max-w-2xl mx-auto">
            Marketing should be a system to decide intelligently, not an obstacle course.
          </p>
        </div>
      </section>
    </BlogPostTemplate>
  );
};

export default BlogStrategicMarketingDriversEN;
