import React from 'react';
import { Database, Users, TrendingDown, AlertTriangle, Clock, FileX } from 'lucide-react';

const painPoints = [
  {
    icon: <Database className="h-8 w-8 text-destructive" />,
    title: "Datos Desorganizados",
    description: "Información de clientes dispersa en Excel, emails y notas sin conexión entre ellas"
  },
  {
    icon: <Clock className="h-8 w-8 text-destructive" />,
    title: "Procesos Manuales",
    description: "Seguimiento manual de leads que consume tiempo y genera errores humanos"
  },
  {
    icon: <TrendingDown className="h-8 w-8 text-destructive" />,
    title: "Pérdida de Oportunidades",
    description: "Leads que se escapan por falta de seguimiento oportuno y sistemático"
  },
  {
    icon: <FileX className="h-8 w-8 text-destructive" />,
    title: "Sin Historial Completo",
    description: "Falta de trazabilidad de interacciones y decisiones con cada prospecto"
  }
];

const CRMPainPointsSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            ¿Tu Gestión Comercial es un <span className="text-destructive">Caos</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            El 67% de las empresas pierden clientes potenciales por no tener un sistema organizado de gestión comercial
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {painPoints.map((point, index) => (
            <div key={index} className="text-center p-6 bg-card rounded-lg border hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                {point.icon}
              </div>
              <h3 className="text-lg font-semibold mb-3">{point.title}</h3>
              <p className="text-muted-foreground text-sm">{point.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center bg-destructive/10 border border-destructive/20 rounded-lg p-6 max-w-2xl mx-auto">
          <AlertTriangle className="h-8 w-8 text-destructive mx-auto mb-3" />
          <p className="text-destructive font-medium">
            <strong>Cada día sin un CRM organizado</strong> significa oportunidades perdidas y clientes que van a la competencia
          </p>
        </div>
      </div>
    </section>
  );
};

export default CRMPainPointsSection;