import React, { useState, useMemo } from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Progress } from '@/components/ui/progress';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  Calculator, 
  TrendingUp, 
  Users, 
  Target, 
  DollarSign,
  Download,
  RotateCcw,
  Info,
  Sparkles,
  Rocket,
  BarChart3,
  CheckCircle2,
  Zap
} from 'lucide-react';
import {
  defaultForecastInputs,
  MonthlyForecast,
  ForecastSummary,
  SalesForecastInputs
} from '@/lib/validations/salesForecast';

interface SalesForecastCalculatorProps {
  hideHeader?: boolean;
  compact?: boolean;
}

const SalesForecastCalculator: React.FC<SalesForecastCalculatorProps> = ({
  hideHeader = false,
  compact = false
}) => {
  const { isEnglish } = useLanguage();
  
  // State for inputs
  const [inputs, setInputs] = useState<SalesForecastInputs>(defaultForecastInputs);
  
  // Month names
  const monthNames = isEnglish
    ? ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    : ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
  
  // Bilingual content
  const content = {
    title: isEnglish ? 'Sales Forecast Calculator' : 'Calculadora de Previsión de Ventas',
    description: isEnglish 
      ? 'Simulate your marketing funnel growth over 12 months'
      : 'Simula el crecimiento de tu embudo de marketing a 12 meses',
    initialData: isEnglish ? 'Initial Data' : 'Datos Iniciales',
    conversionRates: isEnglish ? 'Conversion Rates' : 'Ratios de Conversión',
    initialVisits: isEnglish ? 'Initial Monthly Visits' : 'Visitas Mensuales Iniciales',
    monthlyGrowth: isEnglish ? 'Monthly Growth' : 'Crecimiento Mensual',
    visitsToMQL: isEnglish ? 'Visits → MQL' : 'Visitas → MQL',
    mqlToSQL: isEnglish ? 'MQL → SQL' : 'MQL → SQL',
    sqlToClient: isEnglish ? 'SQL → Client' : 'SQL → Cliente',
    revenuePerClient: isEnglish ? 'Revenue per Client' : 'Ingreso por Cliente',
    projection: isEnglish ? 'Annual Projection' : 'Proyección Anual',
    summary: isEnglish ? 'Summary' : 'Resumen',
    visitors: isEnglish ? 'Visitors' : 'Visitantes',
    mqls: 'MQLs',
    sqls: 'SQLs',
    clients: isEnglish ? 'Clients' : 'Clientes',
    revenue: isEnglish ? 'Revenue' : 'Ingresos',
    totalGrowth: isEnglish ? 'Total Growth' : 'Crecimiento Total',
    total: 'Total',
    month: isEnglish ? 'Month' : 'Mes',
    downloadCSV: isEnglish ? 'Download CSV' : 'Descargar CSV',
    reset: isEnglish ? 'Reset' : 'Reiniciar',
    interpretation: isEnglish ? 'Interpretation' : 'Interpretación',
    interpretationText: isEnglish 
      ? (clients: number, revenue: number) => `With these settings, you could acquire ${clients} clients and generate €${revenue.toLocaleString()} in revenue over 12 months.`
      : (clients: number, revenue: number) => `Con esta configuración, podrías adquirir ${clients} clientes y generar ${revenue.toLocaleString()} € de ingresos en 12 meses.`,
    mqlInfo: isEnglish ? 'Marketing Qualified Lead' : 'Lead Cualificado de Marketing',
    sqlInfo: isEnglish ? 'Sales Qualified Lead' : 'Lead Cualificado de Ventas',
    interactiveTool: isEnglish ? 'Interactive Tool' : 'Herramienta Interactiva',
    noRegistration: isEnglish ? 'No Registration' : 'Sin Registro',
    estimatedROI: isEnglish ? 'Estimated ROI' : 'ROI Estimado',
    performanceLevels: {
      loss: isEnglish ? 'Loss' : 'Pérdida',
      low: isEnglish ? 'Low' : 'Bajo',
      good: isEnglish ? 'Good' : 'Bueno',
      great: isEnglish ? 'Very Good' : 'Muy Bueno',
      excellent: isEnglish ? 'Excellent' : 'Excelente',
    }
  };
  
  // Calculate forecast data
  const { monthlyData, summary } = useMemo(() => {
    const data: MonthlyForecast[] = [];
    let visitors = inputs.initialVisits;
    
    for (let i = 0; i < 12; i++) {
      if (i > 0) {
        visitors = visitors * (1 + inputs.monthlyGrowth);
      }
      
      const mqls = visitors * inputs.visitsToMQL;
      const sqls = mqls * inputs.mqlToSQL;
      const clients = sqls * inputs.sqlToClient;
      const revenue = clients * inputs.revenuePerClient;
      
      data.push({
        month: i + 1,
        monthName: monthNames[i],
        growthRate: i === 0 ? 0 : inputs.monthlyGrowth * 100,
        visitors: Math.round(visitors),
        mqls: Math.round(mqls * 10) / 10,
        sqls: Math.round(sqls * 10) / 10,
        clients: Math.round(clients * 10) / 10,
        revenue: Math.round(revenue),
      });
    }
    
    const summaryData: ForecastSummary = {
      totalVisitors: data.reduce((sum, m) => sum + m.visitors, 0),
      totalMQLs: Math.round(data.reduce((sum, m) => sum + m.mqls, 0)),
      totalSQLs: Math.round(data.reduce((sum, m) => sum + m.sqls, 0) * 10) / 10,
      totalClients: Math.round(data.reduce((sum, m) => sum + m.clients, 0)),
      totalRevenue: Math.round(data.reduce((sum, m) => sum + m.revenue, 0)),
      totalGrowth: Math.round(((data[11].visitors - data[0].visitors) / data[0].visitors) * 100),
    };
    
    return { monthlyData: data, summary: summaryData };
  }, [inputs, monthNames]);
  
  // Calculate performance level based on estimated ROI
  const performanceLevel = useMemo(() => {
    // Estimate investment based on average CPC
    const estimatedInvestment = inputs.initialVisits * 0.5; // 0.50 EUR CPC average
    const roi = estimatedInvestment > 0 
      ? ((summary.totalRevenue - estimatedInvestment) / estimatedInvestment) * 100 
      : 0;
    
    if (roi < 0) return { level: 'loss', label: content.performanceLevels.loss, color: 'bg-destructive', percent: 5, roi };
    if (roi < 100) return { level: 'low', label: content.performanceLevels.low, color: 'bg-orange-500', percent: 25, roi };
    if (roi < 300) return { level: 'good', label: content.performanceLevels.good, color: 'bg-yellow-500', percent: 50, roi };
    if (roi < 500) return { level: 'great', label: content.performanceLevels.great, color: 'bg-lime-500', percent: 75, roi };
    return { level: 'excellent', label: content.performanceLevels.excellent, color: 'bg-green-500', percent: 100, roi };
  }, [inputs.initialVisits, summary.totalRevenue, content.performanceLevels]);
  
  // Handle input changes
  const handleInputChange = (field: keyof SalesForecastInputs, value: number) => {
    setInputs(prev => ({ ...prev, [field]: value }));
  };
  
  // Reset to defaults
  const handleReset = () => {
    setInputs(defaultForecastInputs);
  };
  
  // Export to CSV
  const handleExportCSV = () => {
    const headers = [content.month, content.visitors, content.mqls, content.sqls, content.clients, content.revenue];
    const rows = monthlyData.map(m => [
      m.monthName,
      m.visitors,
      m.mqls,
      m.sqls,
      m.clients,
      m.revenue
    ]);
    rows.push([content.total, summary.totalVisitors, summary.totalMQLs, summary.totalSQLs, summary.totalClients, summary.totalRevenue]);
    
    const csvContent = [headers, ...rows].map(row => row.join(',')).join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'sales-forecast.csv';
    link.click();
    URL.revokeObjectURL(url);
  };
  
  // Format percentage for display
  const formatPercentage = (value: number) => `${(value * 100).toFixed(1)}%`;
  
  // Format number with locale
  const formatNumber = (value: number) => value.toLocaleString();
  
  // Format currency
  const formatCurrency = (value: number) => `€${value.toLocaleString()}`;

  return (
    <Card className={cn(
      "w-full max-w-6xl mx-auto overflow-hidden",
      !compact && "shadow-2xl border-primary/20",
      compact && "shadow-none border-0 rounded-none"
    )}>
      {/* Hero Header with Gradient - Only show if not hidden */}
      {!hideHeader && (
        <CardHeader className="text-center pb-8 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 relative">
          {/* Decorative elements */}
          <div className="absolute top-4 right-4 opacity-20">
            <Sparkles className="h-8 w-8 text-primary animate-pulse" />
          </div>
          <div className="absolute bottom-4 left-4 opacity-20">
            <Zap className="h-6 w-6 text-accent" />
          </div>
          
          {/* Animated Icon */}
          <div className="flex justify-center mb-6">
            <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-xl relative">
              <div className="absolute inset-0 rounded-2xl bg-primary/50 animate-ping opacity-20" />
              <Calculator className="h-10 w-10 text-primary-foreground relative z-10" />
            </div>
          </div>
          
          <CardTitle className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text">
            {content.title}
          </CardTitle>
          <CardDescription className="text-base md:text-lg mt-2 max-w-2xl mx-auto">
            {content.description}
          </CardDescription>
          
          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <Badge variant="secondary" className="px-4 py-1.5 text-sm bg-background/80 backdrop-blur-sm border border-primary/20">
              <BarChart3 className="h-3.5 w-3.5 mr-1.5" />
              {content.interactiveTool}
            </Badge>
            <Badge variant="secondary" className="px-4 py-1.5 text-sm bg-background/80 backdrop-blur-sm border border-accent/20">
              <CheckCircle2 className="h-3.5 w-3.5 mr-1.5 text-green-500" />
              {content.noRegistration}
            </Badge>
          </div>
        </CardHeader>
      )}
      
      <CardContent className={cn(
        "space-y-8 p-6 md:p-8",
        compact && "space-y-6 p-4 md:p-6"
      )}>
        {/* Input Section with Glassmorphism */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Initial Data Card */}
          <Card className="bg-background/80 backdrop-blur-sm border-primary/10 hover:shadow-lg hover:border-primary/30 transition-all duration-300 hover:scale-[1.01]">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                  <TrendingUp className="h-5 w-5 text-primary" />
                </div>
                {content.initialData}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Initial Visits */}
              <div className="space-y-2">
                <Label htmlFor="initialVisits" className="text-sm font-medium">{content.initialVisits}</Label>
                <Input
                  id="initialVisits"
                  type="number"
                  value={inputs.initialVisits}
                  onChange={(e) => handleInputChange('initialVisits', parseInt(e.target.value) || 0)}
                  min={100}
                  max={10000000}
                  className="text-right font-mono text-lg border-primary/20 focus:border-primary/50 transition-colors"
                />
              </div>
              
              {/* Monthly Growth */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <Label className="text-sm font-medium">{content.monthlyGrowth}</Label>
                  <Badge className="font-mono bg-primary/10 text-primary hover:bg-primary/20 border-0">
                    {formatPercentage(inputs.monthlyGrowth)}
                  </Badge>
                </div>
                <Slider
                  value={[inputs.monthlyGrowth * 100]}
                  onValueChange={([value]) => handleInputChange('monthlyGrowth', value / 100)}
                  min={0}
                  max={50}
                  step={0.5}
                  className="py-2"
                />
              </div>
              
              {/* Revenue per Client */}
              <div className="space-y-2">
                <Label htmlFor="revenuePerClient" className="text-sm font-medium">{content.revenuePerClient} (€)</Label>
                <Input
                  id="revenuePerClient"
                  type="number"
                  value={inputs.revenuePerClient}
                  onChange={(e) => handleInputChange('revenuePerClient', parseInt(e.target.value) || 0)}
                  min={1}
                  max={1000000}
                  className="text-right font-mono text-lg border-primary/20 focus:border-primary/50 transition-colors"
                />
              </div>
            </CardContent>
          </Card>
          
          {/* Conversion Rates Card */}
          <Card className="bg-background/80 backdrop-blur-sm border-accent/10 hover:shadow-lg hover:border-accent/30 transition-all duration-300 hover:scale-[1.01]">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center">
                  <Target className="h-5 w-5 text-accent-foreground" />
                </div>
                {content.conversionRates}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Visits to MQL */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <Label className="flex items-center gap-1.5 text-sm font-medium">
                    {content.visitsToMQL}
                    <span className="text-muted-foreground cursor-help" title={content.mqlInfo}>
                      <Info className="h-3.5 w-3.5" />
                    </span>
                  </Label>
                  <Badge className="font-mono bg-accent/10 text-accent-foreground hover:bg-accent/20 border-0">
                    {formatPercentage(inputs.visitsToMQL)}
                  </Badge>
                </div>
                <Slider
                  value={[inputs.visitsToMQL * 100]}
                  onValueChange={([value]) => handleInputChange('visitsToMQL', value / 100)}
                  min={0.1}
                  max={20}
                  step={0.1}
                  className="py-2"
                />
              </div>
              
              {/* MQL to SQL */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <Label className="flex items-center gap-1.5 text-sm font-medium">
                    {content.mqlToSQL}
                    <span className="text-muted-foreground cursor-help" title={content.sqlInfo}>
                      <Info className="h-3.5 w-3.5" />
                    </span>
                  </Label>
                  <Badge className="font-mono bg-accent/10 text-accent-foreground hover:bg-accent/20 border-0">
                    {formatPercentage(inputs.mqlToSQL)}
                  </Badge>
                </div>
                <Slider
                  value={[inputs.mqlToSQL * 100]}
                  onValueChange={([value]) => handleInputChange('mqlToSQL', value / 100)}
                  min={1}
                  max={100}
                  step={1}
                  className="py-2"
                />
              </div>
              
              {/* SQL to Client */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <Label className="text-sm font-medium">{content.sqlToClient}</Label>
                  <Badge className="font-mono bg-accent/10 text-accent-foreground hover:bg-accent/20 border-0">
                    {formatPercentage(inputs.sqlToClient)}
                  </Badge>
                </div>
                <Slider
                  value={[inputs.sqlToClient * 100]}
                  onValueChange={([value]) => handleInputChange('sqlToClient', value / 100)}
                  min={1}
                  max={100}
                  step={1}
                  className="py-2"
                />
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Projection Table with Enhanced Styling */}
        <Card className="overflow-hidden border-primary/10">
          <CardHeader className="pb-4 bg-gradient-to-r from-primary/5 to-accent/5">
            <CardTitle className="text-lg flex items-center gap-3">
              <Sparkles className="h-5 w-5 text-primary" />
              {content.projection}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <ScrollArea className="w-full whitespace-nowrap">
              <table className="w-full text-sm">
                <thead className="bg-gradient-to-r from-primary/10 to-accent/10">
                  <tr>
                    <th className="text-left p-4 font-semibold sticky left-0 bg-gradient-to-r from-primary/10 to-primary/5 z-10">{content.month}</th>
                    {monthlyData.map((m) => (
                      <th key={m.month} className="text-center p-4 font-semibold min-w-[85px]">
                        {m.monthName}
                      </th>
                    ))}
                    <th className="text-center p-4 font-bold bg-gradient-to-r from-primary/20 to-accent/20 min-w-[110px]">
                      {content.total}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* Visitors Row */}
                  <tr className="border-t hover:bg-primary/5 transition-colors">
                    <td className="p-4 font-medium sticky left-0 bg-background z-10">
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        {content.visitors}
                      </div>
                    </td>
                    {monthlyData.map((m) => (
                      <td key={m.month} className="text-center p-4 font-mono text-sm">
                        {formatNumber(m.visitors)}
                      </td>
                    ))}
                    <td className="text-center p-4 font-bold font-mono bg-gradient-to-r from-primary/10 to-accent/10">
                      {formatNumber(summary.totalVisitors)}
                    </td>
                  </tr>
                  
                  {/* MQLs Row */}
                  <tr className="border-t bg-muted/30 hover:bg-primary/5 transition-colors">
                    <td className="p-4 font-medium sticky left-0 bg-muted/30 z-10">{content.mqls}</td>
                    {monthlyData.map((m) => (
                      <td key={m.month} className="text-center p-4 font-mono text-sm">
                        {m.mqls}
                      </td>
                    ))}
                    <td className="text-center p-4 font-bold font-mono bg-gradient-to-r from-primary/10 to-accent/10">
                      {summary.totalMQLs}
                    </td>
                  </tr>
                  
                  {/* SQLs Row */}
                  <tr className="border-t hover:bg-primary/5 transition-colors">
                    <td className="p-4 font-medium sticky left-0 bg-background z-10">{content.sqls}</td>
                    {monthlyData.map((m) => (
                      <td key={m.month} className="text-center p-4 font-mono text-sm">
                        {m.sqls}
                      </td>
                    ))}
                    <td className="text-center p-4 font-bold font-mono bg-gradient-to-r from-primary/10 to-accent/10">
                      {summary.totalSQLs}
                    </td>
                  </tr>
                  
                  {/* Clients Row */}
                  <tr className="border-t bg-muted/30 hover:bg-primary/5 transition-colors">
                    <td className="p-4 font-medium sticky left-0 bg-muted/30 z-10">
                      <div className="flex items-center gap-2">
                        <Target className="h-4 w-4 text-muted-foreground" />
                        {content.clients}
                      </div>
                    </td>
                    {monthlyData.map((m) => (
                      <td key={m.month} className="text-center p-4 font-mono text-sm">
                        {m.clients}
                      </td>
                    ))}
                    <td className="text-center p-4 font-bold font-mono bg-gradient-to-r from-primary/10 to-accent/10">
                      {summary.totalClients}
                    </td>
                  </tr>
                  
                  {/* Revenue Row - Highlighted */}
                  <tr className="border-t bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 hover:from-primary/10 hover:via-primary/15 hover:to-primary/10 transition-colors">
                    <td className="p-4 font-medium sticky left-0 bg-primary/5 z-10">
                      <div className="flex items-center gap-2">
                        <DollarSign className="h-4 w-4 text-primary" />
                        <span className="text-primary font-semibold">{content.revenue}</span>
                      </div>
                    </td>
                    {monthlyData.map((m) => (
                      <td key={m.month} className="text-center p-4 font-mono text-sm text-primary font-medium">
                        {formatCurrency(m.revenue)}
                      </td>
                    ))}
                    <td className="text-center p-4 font-bold font-mono text-lg bg-gradient-to-r from-primary/20 to-accent/20 text-primary">
                      {formatCurrency(summary.totalRevenue)}
                    </td>
                  </tr>
                </tbody>
              </table>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </CardContent>
        </Card>
        
        {/* Summary Cards with 3D Effect */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <Card className="text-center p-5 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group border-primary/10">
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
              <Users className="h-5 w-5 text-primary" />
            </div>
            <div className="text-2xl md:text-3xl font-bold text-primary group-hover:scale-105 transition-transform">
              {formatNumber(summary.totalVisitors)}
            </div>
            <div className="text-sm text-muted-foreground mt-1">{content.visitors}</div>
          </Card>
          
          <Card className="text-center p-5 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group border-primary/10">
            <div className="h-10 w-10 rounded-full bg-blue-500/10 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
              <BarChart3 className="h-5 w-5 text-blue-500" />
            </div>
            <div className="text-2xl md:text-3xl font-bold group-hover:scale-105 transition-transform">
              {formatNumber(summary.totalMQLs)}
            </div>
            <div className="text-sm text-muted-foreground mt-1">{content.mqls}</div>
          </Card>
          
          <Card className="text-center p-5 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group border-primary/10">
            <div className="h-10 w-10 rounded-full bg-amber-500/10 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
              <Target className="h-5 w-5 text-amber-500" />
            </div>
            <div className="text-2xl md:text-3xl font-bold group-hover:scale-105 transition-transform">
              {summary.totalSQLs}
            </div>
            <div className="text-sm text-muted-foreground mt-1">{content.sqls}</div>
          </Card>
          
          <Card className="text-center p-5 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group border-primary/10">
            <div className="h-10 w-10 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
              <CheckCircle2 className="h-5 w-5 text-green-500" />
            </div>
            <div className="text-2xl md:text-3xl font-bold text-green-600 group-hover:scale-105 transition-transform">
              {summary.totalClients}
            </div>
            <div className="text-sm text-muted-foreground mt-1">{content.clients}</div>
          </Card>
          
          {/* Revenue Card - Premium Style */}
          <Card className="text-center p-5 col-span-2 md:col-span-1 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 border-primary/30 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group relative overflow-hidden">
            <div className="absolute top-2 right-2 opacity-20">
              <Sparkles className="h-5 w-5 text-primary animate-pulse" />
            </div>
            <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
              <DollarSign className="h-5 w-5 text-primary" />
            </div>
            <div className="text-2xl md:text-3xl font-bold text-primary group-hover:scale-105 transition-transform">
              {formatCurrency(summary.totalRevenue)}
            </div>
            <div className="text-sm text-muted-foreground mt-1">{content.revenue}</div>
          </Card>
        </div>
        
        {/* Interpretation with Performance Bar */}
        <Card className="bg-gradient-to-br from-primary/10 via-transparent to-accent/10 border-l-4 border-l-primary border-primary/20 overflow-hidden">
          <CardContent className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-start gap-6">
              {/* Icon */}
              <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center flex-shrink-0 shadow-lg relative">
                <div className="absolute inset-0 rounded-2xl bg-primary/30 animate-pulse" />
                <Rocket className="h-8 w-8 text-primary-foreground relative z-10" />
              </div>
              
              {/* Content */}
              <div className="flex-1 space-y-4">
                <div>
                  <h4 className="font-bold text-lg mb-2">{content.interpretation}</h4>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    {content.interpretationText(summary.totalClients, summary.totalRevenue)}
                  </p>
                </div>
                
                {/* Performance Bar */}
                <div className="space-y-3 pt-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-medium">{content.estimatedROI}</span>
                    <span className="font-bold text-primary">
                      {performanceLevel.roi.toFixed(0)}%
                    </span>
                  </div>
                  
                  <div className="relative">
                    <Progress value={performanceLevel.percent} className="h-3" />
                    <div 
                      className={`absolute top-0 left-0 h-3 rounded-full transition-all duration-500 ${performanceLevel.color}`}
                      style={{ width: `${performanceLevel.percent}%` }}
                    />
                  </div>
                  
                  {/* Performance Level Labels */}
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span className={performanceLevel.level === 'loss' ? 'text-destructive font-semibold' : ''}>
                      {content.performanceLevels.loss}
                    </span>
                    <span className={performanceLevel.level === 'low' ? 'text-orange-500 font-semibold' : ''}>
                      {content.performanceLevels.low}
                    </span>
                    <span className={performanceLevel.level === 'good' ? 'text-yellow-500 font-semibold' : ''}>
                      {content.performanceLevels.good}
                    </span>
                    <span className={performanceLevel.level === 'great' ? 'text-lime-500 font-semibold' : ''}>
                      {content.performanceLevels.great}
                    </span>
                    <span className={performanceLevel.level === 'excellent' ? 'text-green-500 font-semibold' : ''}>
                      {content.performanceLevels.excellent}
                    </span>
                  </div>
                  
                  {/* Current Level Badge */}
                  <div className="flex justify-center pt-2">
                    <Badge 
                      className={`${performanceLevel.color} text-white px-4 py-1.5 text-sm font-semibold`}
                    >
                      {performanceLevel.label}
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Actions */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
          <Button 
            onClick={handleExportCSV} 
            variant="outline" 
            className="gap-2 px-6 py-5 text-base hover:shadow-lg hover:border-primary/50 transition-all duration-300"
          >
            <Download className="h-5 w-5" />
            {content.downloadCSV}
          </Button>
          <Button 
            onClick={handleReset} 
            variant="ghost" 
            className="gap-2 px-6 py-5 text-base hover:bg-muted transition-all duration-300"
          >
            <RotateCcw className="h-5 w-5" />
            {content.reset}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default SalesForecastCalculator;
