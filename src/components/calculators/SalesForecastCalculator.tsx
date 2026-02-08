import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  Calculator, 
  TrendingUp, 
  Users, 
  Target, 
  DollarSign,
  Download,
  RotateCcw,
  Info
} from 'lucide-react';
import {
  defaultForecastInputs,
  MonthlyForecast,
  ForecastSummary,
  SalesForecastInputs
} from '@/lib/validations/salesForecast';

const SalesForecastCalculator: React.FC = () => {
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
    <Card className="w-full max-w-6xl mx-auto shadow-lg">
      <CardHeader className="text-center pb-6">
        <div className="flex justify-center mb-4">
          <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center">
            <Calculator className="h-7 w-7 text-primary" />
          </div>
        </div>
        <CardTitle className="text-2xl md:text-3xl">{content.title}</CardTitle>
        <CardDescription className="text-base">{content.description}</CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-8">
        {/* Input Section */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Initial Data */}
          <Card className="bg-muted/30">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                {content.initialData}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Initial Visits */}
              <div className="space-y-2">
                <Label htmlFor="initialVisits">{content.initialVisits}</Label>
                <Input
                  id="initialVisits"
                  type="number"
                  value={inputs.initialVisits}
                  onChange={(e) => handleInputChange('initialVisits', parseInt(e.target.value) || 0)}
                  min={100}
                  max={10000000}
                  className="text-right font-mono"
                />
              </div>
              
              {/* Monthly Growth */}
              <div className="space-y-3">
                <div className="flex justify-between">
                  <Label>{content.monthlyGrowth}</Label>
                  <Badge variant="secondary" className="font-mono">
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
                <Label htmlFor="revenuePerClient">{content.revenuePerClient} (€)</Label>
                <Input
                  id="revenuePerClient"
                  type="number"
                  value={inputs.revenuePerClient}
                  onChange={(e) => handleInputChange('revenuePerClient', parseInt(e.target.value) || 0)}
                  min={1}
                  max={1000000}
                  className="text-right font-mono"
                />
              </div>
            </CardContent>
          </Card>
          
          {/* Conversion Rates */}
          <Card className="bg-muted/30">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" />
                {content.conversionRates}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Visits to MQL */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <Label className="flex items-center gap-1">
                    {content.visitsToMQL}
                    <span className="text-xs text-muted-foreground" title={content.mqlInfo}>
                      <Info className="h-3 w-3" />
                    </span>
                  </Label>
                  <Badge variant="secondary" className="font-mono">
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
                  <Label className="flex items-center gap-1">
                    {content.mqlToSQL}
                    <span className="text-xs text-muted-foreground" title={content.sqlInfo}>
                      <Info className="h-3 w-3" />
                    </span>
                  </Label>
                  <Badge variant="secondary" className="font-mono">
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
                <div className="flex justify-between">
                  <Label>{content.sqlToClient}</Label>
                  <Badge variant="secondary" className="font-mono">
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
        
        {/* Projection Table */}
        <Card>
          <CardHeader className="pb-4">
            <CardTitle className="text-lg">{content.projection}</CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="w-full whitespace-nowrap rounded-md border">
              <table className="w-full text-sm">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="text-left p-3 font-semibold sticky left-0 bg-muted/50">{content.month}</th>
                    {monthlyData.map((m) => (
                      <th key={m.month} className="text-center p-3 font-semibold min-w-[80px]">
                        {m.monthName}
                      </th>
                    ))}
                    <th className="text-center p-3 font-bold bg-primary/10 min-w-[100px]">{content.total}</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Visitors Row */}
                  <tr className="border-t">
                    <td className="p-3 font-medium sticky left-0 bg-background flex items-center gap-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      {content.visitors}
                    </td>
                    {monthlyData.map((m) => (
                      <td key={m.month} className="text-center p-3 font-mono text-sm">
                        {formatNumber(m.visitors)}
                      </td>
                    ))}
                    <td className="text-center p-3 font-bold font-mono bg-primary/10">
                      {formatNumber(summary.totalVisitors)}
                    </td>
                  </tr>
                  
                  {/* MQLs Row */}
                  <tr className="border-t bg-muted/20">
                    <td className="p-3 font-medium sticky left-0 bg-muted/20">{content.mqls}</td>
                    {monthlyData.map((m) => (
                      <td key={m.month} className="text-center p-3 font-mono text-sm">
                        {m.mqls}
                      </td>
                    ))}
                    <td className="text-center p-3 font-bold font-mono bg-primary/10">
                      {summary.totalMQLs}
                    </td>
                  </tr>
                  
                  {/* SQLs Row */}
                  <tr className="border-t">
                    <td className="p-3 font-medium sticky left-0 bg-background">{content.sqls}</td>
                    {monthlyData.map((m) => (
                      <td key={m.month} className="text-center p-3 font-mono text-sm">
                        {m.sqls}
                      </td>
                    ))}
                    <td className="text-center p-3 font-bold font-mono bg-primary/10">
                      {summary.totalSQLs}
                    </td>
                  </tr>
                  
                  {/* Clients Row */}
                  <tr className="border-t bg-muted/20">
                    <td className="p-3 font-medium sticky left-0 bg-muted/20 flex items-center gap-2">
                      <Target className="h-4 w-4 text-muted-foreground" />
                      {content.clients}
                    </td>
                    {monthlyData.map((m) => (
                      <td key={m.month} className="text-center p-3 font-mono text-sm">
                        {m.clients}
                      </td>
                    ))}
                    <td className="text-center p-3 font-bold font-mono bg-primary/10">
                      {summary.totalClients}
                    </td>
                  </tr>
                  
                  {/* Revenue Row */}
                  <tr className="border-t bg-primary/5">
                    <td className="p-3 font-medium sticky left-0 bg-primary/5 flex items-center gap-2">
                      <DollarSign className="h-4 w-4 text-primary" />
                      {content.revenue}
                    </td>
                    {monthlyData.map((m) => (
                      <td key={m.month} className="text-center p-3 font-mono text-sm text-primary font-medium">
                        {formatCurrency(m.revenue)}
                      </td>
                    ))}
                    <td className="text-center p-3 font-bold font-mono bg-primary/20 text-primary">
                      {formatCurrency(summary.totalRevenue)}
                    </td>
                  </tr>
                </tbody>
              </table>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </CardContent>
        </Card>
        
        {/* Summary Cards */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <Card className="text-center p-4">
            <div className="text-2xl md:text-3xl font-bold text-primary">
              {formatNumber(summary.totalVisitors)}
            </div>
            <div className="text-sm text-muted-foreground">{content.visitors}</div>
          </Card>
          <Card className="text-center p-4">
            <div className="text-2xl md:text-3xl font-bold">
              {formatNumber(summary.totalMQLs)}
            </div>
            <div className="text-sm text-muted-foreground">{content.mqls}</div>
          </Card>
          <Card className="text-center p-4">
            <div className="text-2xl md:text-3xl font-bold">
              {summary.totalSQLs}
            </div>
            <div className="text-sm text-muted-foreground">{content.sqls}</div>
          </Card>
          <Card className="text-center p-4">
            <div className="text-2xl md:text-3xl font-bold text-primary">
              {summary.totalClients}
            </div>
            <div className="text-sm text-muted-foreground">{content.clients}</div>
          </Card>
          <Card className="text-center p-4 col-span-2 md:col-span-1 bg-primary/5">
            <div className="text-2xl md:text-3xl font-bold text-primary">
              {formatCurrency(summary.totalRevenue)}
            </div>
            <div className="text-sm text-muted-foreground">{content.revenue}</div>
          </Card>
        </div>
        
        {/* Interpretation */}
        <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <TrendingUp className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">{content.interpretation}</h4>
                <p className="text-muted-foreground">
                  {content.interpretationText(summary.totalClients, summary.totalRevenue)}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Actions */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button onClick={handleExportCSV} variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            {content.downloadCSV}
          </Button>
          <Button onClick={handleReset} variant="ghost" className="gap-2">
            <RotateCcw className="h-4 w-4" />
            {content.reset}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default SalesForecastCalculator;
