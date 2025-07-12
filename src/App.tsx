import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CrmAutomatizaciones from "./pages/CrmAutomatizaciones";
import CreacionMarca from "./pages/CreacionMarca";
import MarketingVisibilidad from "./pages/MarketingVisibilidad";
import CaptacionLeads from "./pages/CaptacionLeads";
import GestionMarketing from "./pages/GestionMarketing";
import SolucionesIA from "./pages/SolucionesIA";
import CasoExitoAsendia from "./pages/CasoExitoAsendia";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/crm-automatizaciones" element={<CrmAutomatizaciones />} />
          <Route path="/creacion-marca" element={<CreacionMarca />} />
          <Route path="/marketing-visibilidad" element={<MarketingVisibilidad />} />
          <Route path="/captacion-leads" element={<CaptacionLeads />} />
          <Route path="/gestion-marketing" element={<GestionMarketing />} />
          <Route path="/soluciones-ia" element={<SolucionesIA />} />
          <Route path="/implantacion-crm" element={<NotFound />} />
          <Route path="/campanas-inbound-marketing" element={<NotFound />} />
          <Route path="/captacion-leads-clientes" element={<NotFound />} />
          <Route path="/automatizacion-procesos-ventas" element={<NotFound />} />
          <Route path="/caso-exito-asendia" element={<CasoExitoAsendia />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
