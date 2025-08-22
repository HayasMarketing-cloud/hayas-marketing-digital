import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Palette, Target, Users, Zap, CheckCircle } from 'lucide-react';
import OptimizedImage from '@/components/OptimizedImage';

const BrandingSolutionPreviewSection = () => {
  const features = [
    "Estrategia de marca basada en research",
    "Identidad visual completa y coherente", 
    "Manual de marca profesional",
    "Implementación en todos los materiales"
  ];

  const stats = [
    { number: "+300%", label: "Reconocimiento de marca" },
    { number: "+250%", label: "Percepción de valor" },
    { number: "98%", label: "Clientes satisfechos" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <Badge variant="default" className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
              <Palette className="h-4 w-4 mr-2" />
              Branding Estratégico
            </Badge>
            
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Creamos marcas que <span className="text-gradient-primary">conectan y convierten</span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8">
              Transformamos tu negocio en una marca memorable y diferenciada que genera 
              conexión emocional, aumenta la percepción de valor y impulsa el crecimiento sostenible.
            </p>

            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-4 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-primary">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group" asChild>
                <Link to="#contacto">
                  Crear mi Marca
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="#proceso">Ver Metodología</Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {/* Imagen principal */}
              <div className="col-span-2">
                <Card className="overflow-hidden">
                  <OptimizedImage
                    src="/creacion-marca-hero.jpg"
                    alt="Proceso de creación de marca - estrategia, diseño e implementación"
                    className="w-full h-48 object-cover"
                    sizes="(max-width: 1024px) 100vw, 600px"
                  />
                </Card>
              </div>
              
              {/* Cards de beneficios */}
              <Card className="p-4 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-2">
                  <Target className="h-6 w-6 text-primary" />
                  <CardTitle className="text-sm">Estrategia</CardTitle>
                </div>
                <p className="text-xs text-muted-foreground">
                  Posicionamiento único basado en análisis profundo
                </p>
              </Card>

              <Card className="p-4 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-2">
                  <Users className="h-6 w-6 text-primary" />
                  <CardTitle className="text-sm">Conexión</CardTitle>
                </div>
                <p className="text-xs text-muted-foreground">
                  Identidad que resuena con tu audiencia objetivo
                </p>
              </Card>
            </div>

            {/* Badge flotante */}
            <div className="absolute -top-4 -right-4">
              <Card className="p-3 bg-primary text-primary-foreground shadow-lg">
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4" />
                  <span className="text-xs font-semibold">Marca Memorable</span>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandingSolutionPreviewSection;