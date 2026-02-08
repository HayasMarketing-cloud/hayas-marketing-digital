import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { 
  Calculator, 
  ChevronDown, 
  ChevronUp, 
  CheckCircle2, 
  BarChart3,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';
import SalesForecastCalculator from './SalesForecastCalculator';

interface SalesForecastCalculatorWidgetProps {
  defaultOpen?: boolean;
  showFullPageLink?: boolean;
  variant?: 'default' | 'compact';
  className?: string;
}

const SalesForecastCalculatorWidget: React.FC<SalesForecastCalculatorWidgetProps> = ({
  defaultOpen = false,
  showFullPageLink = true,
  variant = 'default',
  className
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const { isEnglish } = useLanguage();

  const content = {
    title: isEnglish ? 'Sales Forecast Calculator' : 'Calculadora de Previsión de Ventas',
    description: isEnglish 
      ? 'Simulate your marketing funnel growth over 12 months and discover how many clients you can get.'
      : 'Simula el crecimiento de tu embudo de marketing a 12 meses y descubre cuántos clientes puedes conseguir.',
    open: isEnglish ? 'Open Calculator' : 'Abrir Calculadora',
    close: isEnglish ? 'Close Calculator' : 'Cerrar Calculadora',
    fullPage: isEnglish ? 'View full page tool' : 'Ver herramienta a pantalla completa',
    badges: {
      free: isEnglish ? 'Free' : 'Gratis',
      noRegistration: isEnglish ? 'No Registration' : 'Sin Registro',
      instant: isEnglish ? 'Instant Results' : 'Resultados Inmediatos'
    }
  };

  return (
    <Card className={cn(
      "overflow-hidden border-primary/20 shadow-lg my-8",
      variant === 'compact' && "shadow-md",
      className
    )}>
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        {/* Collapsible Header - Always visible */}
        <CollapsibleTrigger asChild>
          <div 
            className={cn(
              "cursor-pointer bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10",
              "hover:from-primary/15 hover:via-accent/10 hover:to-primary/15",
              "transition-all duration-300",
              "p-6 md:p-8",
              isOpen && "border-b border-primary/10"
            )}
          >
            <div className="flex flex-col md:flex-row items-center gap-6">
              {/* Icon */}
              <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg relative flex-shrink-0">
                <div className="absolute inset-0 rounded-2xl bg-primary/30 animate-pulse" />
                <Calculator className="h-8 w-8 text-primary-foreground relative z-10" />
              </div>
              
              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-bold mb-2 flex items-center justify-center md:justify-start gap-2">
                  {content.title}
                  <Sparkles className="h-5 w-5 text-primary opacity-60" />
                </h3>
                <p className="text-muted-foreground text-sm md:text-base max-w-xl">
                  {content.description}
                </p>
                
                {/* Badges */}
                <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-4">
                  <Badge variant="secondary" className="bg-green-500/10 text-green-700 border-green-500/20 px-3 py-1">
                    <CheckCircle2 className="h-3 w-3 mr-1" />
                    {content.badges.free}
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-500/10 text-blue-700 border-blue-500/20 px-3 py-1">
                    <CheckCircle2 className="h-3 w-3 mr-1" />
                    {content.badges.noRegistration}
                  </Badge>
                  <Badge variant="secondary" className="bg-amber-500/10 text-amber-700 border-amber-500/20 px-3 py-1">
                    <BarChart3 className="h-3 w-3 mr-1" />
                    {content.badges.instant}
                  </Badge>
                </div>
              </div>
              
              {/* Toggle Button */}
              <Button 
                variant={isOpen ? "outline" : "default"}
                className={cn(
                  "gap-2 px-6 py-5 text-base font-medium flex-shrink-0",
                  !isOpen && "bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg"
                )}
              >
                {isOpen ? (
                  <>
                    <ChevronUp className="h-5 w-5" />
                    {content.close}
                  </>
                ) : (
                  <>
                    <ChevronDown className="h-5 w-5" />
                    {content.open}
                  </>
                )}
              </Button>
            </div>
          </div>
        </CollapsibleTrigger>
        
        {/* Expandable Content */}
        <CollapsibleContent className="data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
          <SalesForecastCalculator hideHeader compact />
        </CollapsibleContent>
      </Collapsible>
      
      {/* Optional Full Page Link */}
      {showFullPageLink && (
        <div className="p-4 border-t border-primary/10 bg-muted/30 text-center">
          <Link 
            to="/es/herramientas/calculadora-roi"
            className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 font-medium transition-colors group"
          >
            <ExternalLink className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            {content.fullPage}
          </Link>
        </div>
      )}
    </Card>
  );
};

export default SalesForecastCalculatorWidget;
