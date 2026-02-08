import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SalesForecastCalculator from '@/components/calculators/SalesForecastCalculator';
import FAQSection from '@/components/FAQSection';
import EnhancedSEO from '@/components/EnhancedSEO';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  Calculator, 
  TrendingUp, 
  Target, 
  BarChart3, 
  Lightbulb,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  LineChart,
  PiggyBank,
  Users
} from 'lucide-react';

const HerramientaCalculadoraROI = () => {
  const { isEnglish } = useLanguage();

  // Bilingual content
  const content = {
    heroTitle1: isEnglish ? 'Sales Forecast Calculator' : 'Calculadora de Previsión de Ventas',
    heroTitle2: isEnglish ? 'Simulate Your Funnel Growth' : 'Simula el crecimiento de tu embudo',
    heroSubtitle: isEnglish 
      ? 'Project your monthly revenue based on traffic, conversion rates, and average ticket.'
      : 'Proyecta tus ingresos mensuales basándote en tráfico, conversiones y ticket medio.',
    heroSubtitle2: isEnglish 
      ? 'No spreadsheets, no complications, instant results.'
      : 'Sin hojas de cálculo, sin complicaciones, resultados inmediatos.',
    freeTool: isEnglish ? 'Free Tool' : 'Herramienta Gratuita',
    feature1: isEnglish ? '100% Free' : '100% Gratis',
    feature2: isEnglish ? 'No Registration' : 'Sin Registro',
    feature3: isEnglish ? '12-Month Projection' : 'Proyección a 12 Meses',
    feature4: isEnglish ? 'Export to CSV' : 'Exporta a CSV',
    benefitsTitle: isEnglish ? 'Benefits' : 'Beneficios',
    benefitsSubtitle: isEnglish 
      ? 'Why use a sales forecast calculator?'
      : '¿Por qué usar una calculadora de previsión de ventas?',
    benefitsDescription: isEnglish 
      ? 'Make data-driven decisions for your marketing strategy'
      : 'Toma decisiones basadas en datos para tu estrategia de marketing',
    useCasesTitle: isEnglish ? 'Ideal Use Cases' : 'Casos de Uso Ideales',
    useCasesSubtitle: isEnglish 
      ? 'Leverage this calculator for strategic planning'
      : 'Aprovecha esta calculadora para planificación estratégica',
    ctaTitle: isEnglish ? 'Need help with your marketing strategy?' : '¿Necesitas ayuda con tu estrategia de marketing?',
    ctaDescription: isEnglish 
      ? 'Our team can help you optimize your sales funnel, improve conversion rates, and maximize your marketing ROI.'
      : 'Nuestro equipo puede ayudarte a optimizar tu embudo de ventas, mejorar tus ratios de conversión y maximizar el ROI de tu marketing.',
    ctaButton: isEnglish ? 'Request Strategic Consultation' : 'Solicitar Consultoría Estratégica',
    consultingLink: isEnglish ? '/en/services/strategic-consulting-analytics' : '/es/servicios/consultoria-estrategica-analitica',
  };

  const benefits = [
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: isEnglish ? "Realistic Projections" : "Proyecciones Realistas",
      description: isEnglish 
        ? "Simulate different growth scenarios based on actual funnel metrics and conversion rates."
        : "Simula diferentes escenarios de crecimiento basándote en métricas reales de tu embudo."
    },
    {
      icon: <PiggyBank className="h-8 w-8 text-primary" />,
      title: isEnglish ? "Budget Planning" : "Planificación de Presupuesto",
      description: isEnglish 
        ? "Estimate the revenue you can generate to justify and plan your marketing investment."
        : "Estima los ingresos que puedes generar para justificar y planificar tu inversión en marketing."
    },
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: isEnglish ? "Identify Bottlenecks" : "Identifica Cuellos de Botella",
      description: isEnglish 
        ? "Understand which conversion rate has the biggest impact on your results."
        : "Comprende qué ratio de conversión tiene mayor impacto en tus resultados."
    },
    {
      icon: <LineChart className="h-8 w-8 text-primary" />,
      title: isEnglish ? "Data-Driven Decisions" : "Decisiones Basadas en Datos",
      description: isEnglish 
        ? "Stop guessing. Use real numbers to set realistic goals and KPIs."
        : "Deja de adivinar. Usa números reales para establecer objetivos y KPIs realistas."
    }
  ];

  const useCases = isEnglish ? [
    "Annual marketing budget planning",
    "Justifying investment to stakeholders",
    "Setting realistic sales team targets",
    "Comparing organic vs paid growth scenarios",
    "Identifying which funnel stage to optimize",
    "Forecasting revenue for business plans"
  ] : [
    "Planificación del presupuesto anual de marketing",
    "Justificar inversión ante stakeholders",
    "Establecer objetivos realistas para el equipo de ventas",
    "Comparar escenarios de crecimiento orgánico vs pagado",
    "Identificar qué etapa del embudo optimizar",
    "Proyectar ingresos para planes de negocio"
  ];

  const faqItems = isEnglish ? [
    {
      question: "What is an MQL (Marketing Qualified Lead)?",
      answer: "An MQL is a lead that has shown interest in your product or service through marketing activities (downloading content, filling forms, etc.) and meets certain criteria that indicate they could become a customer."
    },
    {
      question: "What is an SQL (Sales Qualified Lead)?",
      answer: "An SQL is a lead that has been qualified by the sales team as ready for direct sales contact. They have typically shown purchase intent and fit your ideal customer profile."
    },
    {
      question: "What conversion rates should I use?",
      answer: "Industry benchmarks vary, but typical B2B rates are: Visits to MQL: 1-3%, MQL to SQL: 10-30%, SQL to Customer: 20-50%. Start with conservative estimates and adjust based on your actual data."
    },
    {
      question: "How accurate are these projections?",
      answer: "The projections are as accurate as the data you input. They assume consistent growth rates and conversion ratios. Real results may vary due to seasonality, market changes, and other factors."
    },
    {
      question: "Can I use this for B2C businesses?",
      answer: "Yes! While the terminology (MQL/SQL) is more common in B2B, the funnel concept applies to B2C too. Just think of MQL as 'interested visitors' and SQL as 'shopping cart additions' or similar stages in your customer journey."
    },
    {
      question: "What's a realistic monthly growth rate?",
      answer: "This depends on your industry, competition, and marketing efforts. Organic growth might be 2-5% monthly, while aggressive paid campaigns could achieve 10-20%+. Be conservative in your estimates."
    },
    {
      question: "How should I use the CSV export?",
      answer: "The CSV export allows you to import the data into Excel, Google Sheets, or your BI tool for further analysis, presentations to stakeholders, or integration with other business planning documents."
    },
    {
      question: "What if my conversion rates are below these benchmarks?",
      answer: "That's valuable insight! It indicates opportunities for optimization. Focus on the funnel stage with the lowest conversion rate - improving it will have the biggest impact on overall results."
    }
  ] : [
    {
      question: "¿Qué es un MQL (Marketing Qualified Lead)?",
      answer: "Un MQL es un lead que ha mostrado interés en tu producto o servicio a través de actividades de marketing (descargando contenido, rellenando formularios, etc.) y cumple ciertos criterios que indican que podría convertirse en cliente."
    },
    {
      question: "¿Qué es un SQL (Sales Qualified Lead)?",
      answer: "Un SQL es un lead que ha sido cualificado por el equipo de ventas como listo para contacto comercial directo. Típicamente han mostrado intención de compra y encajan con tu perfil de cliente ideal."
    },
    {
      question: "¿Qué ratios de conversión debería usar?",
      answer: "Los benchmarks varían por industria, pero ratios típicos B2B son: Visitas a MQL: 1-3%, MQL a SQL: 10-30%, SQL a Cliente: 20-50%. Empieza con estimaciones conservadoras y ajusta según tus datos reales."
    },
    {
      question: "¿Qué tan precisas son estas proyecciones?",
      answer: "Las proyecciones son tan precisas como los datos que introduces. Asumen tasas de crecimiento y conversión constantes. Los resultados reales pueden variar por estacionalidad, cambios de mercado y otros factores."
    },
    {
      question: "¿Puedo usar esto para negocios B2C?",
      answer: "¡Sí! Aunque la terminología (MQL/SQL) es más común en B2B, el concepto de embudo aplica a B2C también. Piensa en MQL como 'visitantes interesados' y SQL como 'añadidos al carrito' o etapas similares en tu journey de cliente."
    },
    {
      question: "¿Cuál es un ratio de crecimiento mensual realista?",
      answer: "Depende de tu industria, competencia y esfuerzos de marketing. El crecimiento orgánico podría ser 2-5% mensual, mientras que campañas de pago agresivas podrían alcanzar 10-20%+. Sé conservador en tus estimaciones."
    },
    {
      question: "¿Cómo debería usar la exportación CSV?",
      answer: "La exportación CSV te permite importar los datos a Excel, Google Sheets o tu herramienta de BI para análisis más profundo, presentaciones a stakeholders, o integración con otros documentos de planificación de negocio."
    },
    {
      question: "¿Qué pasa si mis ratios de conversión están por debajo de estos benchmarks?",
      answer: "¡Es información valiosa! Indica oportunidades de optimización. Enfócate en la etapa del embudo con menor conversión - mejorarla tendrá el mayor impacto en los resultados generales."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-muted/20">
      <EnhancedSEO
        customSEO={{
          title: isEnglish 
            ? "Free Sales Forecast Calculator | 12-Month Revenue Projections"
            : "Calculadora de Previsión de Ventas Gratis | Proyecciones a 12 Meses",
          description: isEnglish
            ? "Calculate your marketing funnel projections for free. Simulate visits, MQLs, SQLs, and revenue over 12 months. No spreadsheets needed, instant results."
            : "Calcula las proyecciones de tu embudo de marketing gratis. Simula visitas, MQLs, SQLs e ingresos a 12 meses. Sin hojas de cálculo, resultados inmediatos.",
          keywords: ["calculadora roi marketing", "prevision ventas", "embudo marketing", "forecast ventas", "calculadora mql sql", "proyeccion ingresos"],
          canonical: isEnglish 
            ? "https://hayasmarketing.com/en/tools/roi-calculator"
            : "https://hayasmarketing.com/es/herramientas/calculadora-roi"
        }}
      />

      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        
        <div className="container mx-auto max-w-6xl relative">
          <div className="text-center space-y-6 mb-12">
            <Badge variant="outline" className="mx-auto">
              <Sparkles className="h-3 w-3 mr-1" />
              {content.freeTool}
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              {content.heroTitle1}
              <span className="text-primary block mt-2">
                {content.heroTitle2}
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {content.heroSubtitle}
              <br className="hidden md:block" />
              {content.heroSubtitle2}
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span>{content.feature1}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span>{content.feature2}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span>{content.feature3}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span>{content.feature4}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <SalesForecastCalculator />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              <Lightbulb className="h-3 w-3 mr-1" />
              {content.benefitsTitle}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {content.benefitsSubtitle}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {content.benefitsDescription}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mb-3">{benefit.icon}</div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  <CardDescription className="text-base">
                    {benefit.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {content.useCasesTitle}
            </h2>
            <p className="text-muted-foreground text-lg">
              {content.useCasesSubtitle}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {useCases.map((useCase, index) => (
              <Card key={index} className="hover:border-primary/50 transition-colors">
                <CardContent className="p-6 flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="font-medium">{useCase}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto max-w-4xl">
          <Card className="border-2">
            <CardHeader className="text-center space-y-4 pb-6">
              <div className="flex justify-center">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <BarChart3 className="h-8 w-8 text-primary" />
                </div>
              </div>
              <CardTitle className="text-3xl">
                {content.ctaTitle}
              </CardTitle>
              <CardDescription className="text-base">
                {content.ctaDescription}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
              <Button asChild size="lg" className="group">
                <Link to={content.consultingLink}>
                  {content.ctaButton}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <FAQSection faqs={faqItems} />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HerramientaCalculadoraROI;
