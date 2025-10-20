import React from 'react';
import { CheckCircle, Zap, BarChart3, Users, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: <Zap className="h-5 w-5" />,
    text: "Automatización Total"
  },
  {
    icon: <BarChart3 className="h-5 w-5" />,
    text: "Reporting Avanzado"
  },
  {
    icon: <Users className="h-5 w-5" />,
    text: "Pipeline Visual"
  },
  {
    icon: <CheckCircle className="h-5 w-5" />,
    text: "Seguimiento 24/7"
  }
];

const CRMSolutionPreviewSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary/8 via-white to-secondary/8">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Contenido */}
          <div>
            <Badge variant="secondary" className="mb-4">
              Solución Profesional
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Transformamos tu <span className="text-gradient-primary">Gestión Comercial</span> Completamente
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Implementamos el CRM perfecto para tu negocio con migración completa de datos, 
              automatizaciones inteligentes y formación integral para tu equipo.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    {feature.icon}
                  </div>
                  <span className="font-medium">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="flex items-center gap-2" asChild>
                <Link to="/es/agendar-reunion">
                  Solicitar Implementación
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Mockup Visual */}
          <div className="relative">
            {/* Dashboard Principal */}
            <div className="bg-card border rounded-xl shadow-xl p-6 relative z-10">
              {/* Header del CRM */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold">Dashboard CRM</h3>
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                </div>
              </div>

              {/* KPIs */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-primary/10 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-primary">847</div>
                  <div className="text-sm text-muted-foreground">Leads</div>
                </div>
                <div className="bg-secondary/10 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-secondary">23%</div>
                  <div className="text-sm text-muted-foreground">Conversión</div>
                </div>
                <div className="bg-accent/10 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-accent">€45K</div>
                  <div className="text-sm text-muted-foreground">Pipeline</div>
                </div>
              </div>

              {/* Pipeline Visual */}
              <div className="space-y-3">
                <h4 className="font-medium text-sm text-muted-foreground">PIPELINE DE VENTAS</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Nuevo Lead - Empresa Tech SL</span>
                    <span className="ml-auto text-sm font-medium">€3.500</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span className="text-sm">Propuesta - Marketing Digital SA</span>
                    <span className="ml-auto text-sm font-medium">€8.200</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-sm">Cierre - Consultoría ABC</span>
                    <span className="ml-auto text-sm font-medium">€12.500</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Indicadores de Rendimiento */}
            <div className="absolute -top-4 -right-4 bg-green-500 text-white px-3 py-2 rounded-full text-sm font-medium shadow-lg z-20">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                +127% ROI
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-primary text-white px-3 py-2 rounded-full text-sm font-medium shadow-lg z-20">
              <div className="flex items-center gap-1">
                <CheckCircle className="h-3 w-3" />
                100% Automatizado
              </div>
            </div>

            {/* Elementos decorativos */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl -m-4 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CRMSolutionPreviewSection;