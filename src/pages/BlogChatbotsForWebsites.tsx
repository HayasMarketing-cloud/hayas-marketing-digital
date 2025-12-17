import React from 'react';
import BlogPostTemplate from '@/components/BlogPost/BlogPostTemplate';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import chatbotsHeroImage from '@/assets/chatbots-web-hero.jpg';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Bot, 
  AlertCircle, 
  HelpCircle, 
  CheckCircle, 
  Plug, 
  Server, 
  Shield, 
  Cloud, 
  Database, 
  Zap, 
  Sparkles, 
  AlertTriangle, 
  Lightbulb,
  ArrowRight,
  Target
} from 'lucide-react';

const BlogChatbotsForWebsites = () => {
  const metadata = {
    title: 'Chatbots for Websites: What Options Exist and Which Makes Sense for Your Business',
    metaTitle: 'Chatbots for Websites: Complete Guide to Choose the Best | Hayas Marketing',
    description: 'Discover the types of chatbots for websites, their advantages and limitations. Practical guide to choose the solution that best fits your business.',
    metaDescription: 'Complete guide on chatbots for websites: WordPress plugins, custom solutions, SaaS and integrated CRM. Discover which fits best with your business.',
    date: '2025-11-18',
    readTime: '10 min',
    category: 'Automation',
    author: 'Hayas Marketing Team',
    tags: ['Chatbots', 'Automation', 'CRM', 'AI', 'WordPress', 'GoHighLevel', 'HubSpot'],
    canonical: '/en/blog/chatbots-for-websites',
    ogImage: chatbotsHeroImage,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Chatbots for Websites: What Options Exist and Which Makes Sense for Your Business",
      "author": {
        "@type": "Organization",
        "name": "Hayas Marketing"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Hayas Marketing",
        "logo": {
          "@type": "ImageObject",
          "url": "https://hayasmarketing.com/logo.png"
        }
      },
      "datePublished": "2025-11-18",
      "dateModified": "2025-11-18",
      "image": "/chatbots-web-hero.jpg",
      "mainEntityOfPage": "https://hayasmarketing.com/en/blog/chatbots-for-websites"
    },
    mainKeyword: 'chatbots for websites',
    secondaryKeywords: ['wordpress chatbot', 'AI chatbot', 'CRM chatbot', 'custom chatbot', 'SaaS chatbot']
  };

  const faqs = [
    {
      question: "What type of chatbot is best for my website?",
      answer: "It depends on your business objectives. If you're looking for something basic and economical, a WordPress plugin may be sufficient. If you need integration with sales and CRM, a solution like GoHighLevel or HubSpot is more appropriate. For complex processes or regulated industries, consider a custom development."
    },
    {
      question: "Can an AI chatbot replace the human team?",
      answer: "That shouldn't be the goal. AI amplifies the capabilities of the human team, automating repetitive tasks and filtering inquiries, but strategic decisions and personalized attention still require people. The chatbot is a support tool, not a replacement."
    },
    {
      question: "How much does it cost to implement a chatbot?",
      answer: "The range is very wide: from free WordPress plugins to custom developments that can cost several thousand euros. What's important is calculating the expected ROI according to your objectives: lead capture, reducing customer service workload, sales automation, etc."
    },
    {
      question: "What's the difference between a rules-based chatbot and an AI one?",
      answer: "Rules-based chatbots follow predefined flows and only respond to specific options. AI chatbots can understand natural language, learn from conversations, and offer more flexible and personalized responses based on context."
    },
    {
      question: "Is it necessary to integrate the chatbot with a CRM?",
      answer: "If your goal is to capture and manage leads professionally, yes. CRM integration allows each conversation to become a contact record with context, history, and automated follow-up. Without this integration, you lose valuable information."
    }
  ];

  const relatedServices = [
    {
      title: "AI Process Integrations",
      description: "We create intelligent assistants integrated with your CRM and business processes to automate capture and customer service.",
      link: "/en/services/ai-process-integration"
    },
    {
      title: "CRM Implementation",
      description: "We connect your chatbot with GoHighLevel or HubSpot for comprehensive lead and customer management.",
      link: "/en/services/crm-implementation"
    }
  ];

  const chatbotTypes = [
    {
      id: 'wordpress',
      badge: 'Plugin',
      title: 'WordPress Chatbot Plugins',
      icon: Plug,
      borderColor: 'border-slate-300 dark:border-slate-700',
      description: 'Plugins that install directly on the website and allow adding a basic chat, with automated responses, forms, or simple flows.',
      whenItMakesSense: [
        'Small or corporate websites',
        'Tight budgets',
        'Very basic support or capture needs',
        'Projects that want to "test" without much investment'
      ],
      limitations: [
        'Limited automation',
        'Scarce real personalization',
        'Difficult integration with complex sales processes',
        'Low scalability'
      ],
      summary: 'They are useful as a first step, but rarely solve a complete business problem.'
    },
    {
      id: 'custom',
      badge: 'Custom / On-Premise',
      title: 'Custom Chatbots and Solutions with Total Data Control',
      icon: Server,
      secondIcon: Shield,
      borderColor: 'border-primary/30',
      description: 'Assistants developed specifically for a company, with their own logic, adapted to their business processes and with maximum control over infrastructure and data.',
      whenItMakesSense: [
        'Companies with complex processes or high lead volume',
        'Very specific needs that a standard platform cannot cover',
        'Long-term vision where the chatbot is a central tool',
        'Industries with strict privacy requirements (GDPR, healthcare, public administration)'
      ],
      limitations: [
        'High initial cost',
        'Need for continuous maintenance',
        'Technical dependency',
        'Requirement of a clear and well-defined strategy'
      ],
      summary: 'This model doesn\'t seek speed or low cost, but control, reliability, and long-term sustainability.'
    },
    {
      id: 'saas',
      badge: 'SaaS',
      title: 'Specific Chatbot Platforms',
      icon: Cloud,
      borderColor: 'border-blue-300 dark:border-blue-700',
      description: 'Platforms designed exclusively to create chatbots without programming, with visual flow creation, standard integrations, and predefined templates.',
      whenItMakesSense: [
        'Quick deployment',
        'Lower cost than custom development',
        'Advanced features without programming',
        'Clear objective and chatbot as part of a larger strategy'
      ],
      limitations: [
        'Platform dependency',
        'Personalization limited to what the system offers',
        'Recurring costs',
        'Sometimes superficial integrations'
      ],
      summary: 'They are a good intermediate solution if the objective is clear and the chatbot is part of a larger strategy.'
    },
    {
      id: 'crm',
      badge: 'Integrated CRM',
      title: 'CRM-Integrated Chatbots (GoHighLevel, HubSpot, etc.)',
      icon: Database,
      secondIcon: Zap,
      borderColor: 'border-conecta/30',
      description: 'A more strategic approach where the chatbot is connected with CRM, automations, sales pipeline, email, WhatsApp, and the sales team.',
      whenItMakesSense: [
        'Companies that want to capture and manage leads professionally',
        'Active sales teams',
        'Businesses looking to automate without losing control',
        'Integrated marketing and sales strategies'
      ],
      limitations: [
        'Requires investment in the complete CRM',
        'Initial learning curve',
        'Needs configuration and maintenance',
        'Better with expert guidance'
      ],
      summary: 'Here the chatbot stops being a widget and becomes a business tool that actually helps sell.'
    },
    {
      id: 'advanced',
      badge: 'Advanced',
      title: 'Other Current Forms of Chatbots',
      icon: Sparkles,
      borderColor: 'border-activa/30',
      description: 'Conversational widgets connected to knowledge bases, chatbots integrated with WhatsApp/email, sector-personalized assistants, and AI solutions on own infrastructure.',
      whenItMakesSense: [
        'Advanced corporate environments',
        'Industries like education, healthcare, or public administration',
        'Organizations with strict security policies',
        'Need for total control over data, models, and integrations'
      ],
      limitations: [
        'Require more strategic judgment',
        'Higher initial investment',
        'Need for technical expertise',
        'Implementation complexity'
      ],
      summary: 'These solutions offer more real value when well designed, but require clear strategic vision.'
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
            Over the past few years, chatbots for websites have become one of the most popular solutions in digital marketing. They promise immediate attention, automation, lead capture, and in some cases, even automatic sales thanks to artificial intelligence.
          </p>
          
          <Card className="my-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Bot className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-lg mb-3">But reality is more complex.</p>
                  <div className="space-y-2">
                    <p className="flex items-start gap-2 text-elegant-muted">
                      <AlertCircle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                      Not all companies need the same type of chatbot.
                    </p>
                    <p className="flex items-start gap-2 text-elegant-muted">
                      <AlertCircle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                      Not all chatbots actually use artificial intelligence.
                    </p>
                    <p className="flex items-start gap-2 text-elegant-muted">
                      <AlertCircle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                      Installing a chatbot without a clear strategy usually generates more frustration than results.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <p className="text-elegant">
            In this article, we explain what types of chatbots currently exist, what their advantages and limitations are, and when each option makes sense, so you can make an informed decision.
          </p>
        </section>

        <Separator />

        {/* Key Question */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Before Choosing a Chatbot: A Key Question</h2>
          
          <Card className="border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-950/20">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Target className="h-8 w-8 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-xl mb-4">What do you want a chatbot for on your website?</p>
                  <p className="text-elegant-muted mb-4">Some of the most common objectives are:</p>
                  <div className="grid md:grid-cols-2 gap-2">
                    {[
                      'Answer frequently asked questions automatically',
                      'Capture leads (conversational forms)',
                      'Qualify contacts before passing to sales',
                      'Provide basic customer support',
                      'Automate part of commercial attention',
                      'Integrate chat with CRM or sales processes',
                      'Offer assistance with AI trained on your business'
                    ].map((objective, index) => (
                      <p key={index} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                        {objective}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <p className="mt-6 text-elegant">
            The problem appears when trying to solve everything with a single chatbot, without defining priorities or fitting it within a marketing and sales system.
          </p>

          <div className="bg-muted/30 rounded-lg p-4 mt-4 border-l-4 border-primary">
            <p className="font-semibold text-primary">👉 The chatbot is a means, not an end.</p>
          </div>
        </section>

        <Separator />

        {/* Chatbot Types */}
        <section>
          <h2 className="text-3xl font-bold mb-4">Main Chatbot Alternatives for Websites</h2>
          <p className="text-elegant-muted mb-8">
            Today, these are the most common options available in the market. Each one makes sense in different contexts.
          </p>

          <div className="space-y-8">
            {chatbotTypes.map((type, index) => {
              const IconComponent = type.icon;
              const SecondIconComponent = type.secondIcon;
              
              return (
                <Card 
                  key={type.id} 
                  className={`${type.borderColor} hover:shadow-lg transition-shadow duration-300 animate-fade-in`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex items-center gap-2">
                        <IconComponent className="h-8 w-8 text-primary" />
                        {SecondIconComponent && <SecondIconComponent className="h-6 w-6 text-primary/70" />}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2 flex-wrap">
                          <h3 className="text-xl font-bold">{index + 1}. {type.title}</h3>
                          <Badge variant="secondary">{type.badge}</Badge>
                        </div>
                        <p className="text-elegant-muted">{type.description}</p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mt-6">
                      <div>
                        <p className="font-semibold mb-3 text-green-700 dark:text-green-400">When it makes sense:</p>
                        <ul className="space-y-2">
                          {type.whenItMakesSense.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm">
                              <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                              <span className="text-elegant-muted">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold mb-3 text-amber-700 dark:text-amber-400">Limitations:</p>
                        <ul className="space-y-2">
                          {type.limitations.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm">
                              <AlertTriangle className="h-4 w-4 text-amber-500 flex-shrink-0 mt-0.5" />
                              <span className="text-elegant-muted">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-border/50">
                      <p className="text-sm font-medium">👉 {type.summary}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        <Separator />

        {/* Common Error */}
        <section>
          <h2 className="text-3xl font-bold mb-6">The Most Common Mistake with Chatbots</h2>
          
          <Card className="border-red-200 dark:border-red-900 bg-red-50/50 dark:bg-red-950/20">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <AlertTriangle className="h-8 w-8 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-lg mb-4">
                    Installing a chatbot expecting "AI to do the work alone".
                  </p>
                  <p className="text-elegant-muted mb-4">Some common problems:</p>
                  <ul className="space-y-2">
                    {[
                      'Not defining clear objectives',
                      'Not integrating it with sales or CRM',
                      'Not training or reviewing it',
                      'Not measuring results',
                      'Thinking the chatbot replaces the human team'
                    ].map((problem, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <AlertCircle className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
                        <span className="text-elegant-muted">{problem}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 font-medium text-red-700 dark:text-red-400">
                    The consequence is usually an underutilized chatbot that annoys more than it helps.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator />

        {/* Hayas Vision */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Hayas Vision: Chatbots Within a System, Not as an Isolated Solution</h2>
          
          <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Lightbulb className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-elegant mb-4">
                    At Hayas, we don't understand chatbots as an independent product.
                  </p>
                  <p className="text-elegant mb-4">
                    We understand them as a <strong>piece within a marketing and sales system</strong>, where:
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>the <strong>strategy</strong> is defined by a person,</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong>technology</strong> amplifies,</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>and <strong>artificial intelligence</strong> works with judgment.</span>
                    </li>
                  </ul>
                  <p className="text-elegant-muted">
                    That's why, before talking about tools, we always talk about: <strong>real objectives</strong>, <strong>processes</strong>, <strong>people</strong>, and then technology.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator />

        {/* Conclusion */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Conclusion</h2>
          
          <p className="text-elegant mb-4">
            If you're considering adding a chatbot to your website, the question isn't:
          </p>
          <p className="text-lg font-medium text-muted-foreground mb-4 pl-4 border-l-2 border-muted">
            "What tool is best?"
          </p>
          <p className="text-elegant mb-2">But rather:</p>
          <p className="text-lg font-semibold text-primary mb-6 pl-4 border-l-2 border-primary">
            "What do I want this chatbot to actually do for my business?"
          </p>
          <p className="text-elegant">
            From there, the choice changes completely.
          </p>
        </section>

        {/* CTA */}
        <section className="bg-muted/30 rounded-xl p-8 border border-border/50">
          <div className="text-center">
            <p className="text-elegant mb-4">
              If you want to analyze your case and understand what type of solution best fits your sales funnel, the key is to start with strategy, not with the plugin.
            </p>
            <p className="font-semibold text-lg mb-6">
              Looking for a tool that drives real results? Let's talk about your strategy.
            </p>
            <Button asChild size="lg" className="group">
              <Link to="/en/contact">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </BlogPostTemplate>
  );
};

export default BlogChatbotsForWebsites;
