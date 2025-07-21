
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SofiaWidget from "./components/SofiaSection";
import Index from "./pages/Index";
import Nosotros from "./pages/Nosotros";
import CrmAutomatizaciones from "./pages/CrmAutomatizaciones";
import CreacionMarca from "./pages/CreacionMarca";
import MarketingVisibilidad from "./pages/MarketingVisibilidad";
import CaptacionLeads from "./pages/CaptacionLeads";
import GestionMarketing from "./pages/GestionMarketing";
import SolucionesIA from "./pages/SolucionesIA";
import KitConsulting from "./pages/KitConsulting";
import KitDigital from "./pages/KitDigital";
import CasoExitoAsendia from "./pages/CasoExitoAsendia";
import CasoExitoNexoVital from "./pages/CasoExitoNexoVital";
import CasoExitoIVirgenExtra from "./pages/CasoExitoIVirgenExtra";
import CasoExitoInboundStudents from "./pages/CasoExitoInboundStudents";
import CasoExitoCalistheniaOnline from "./pages/CasoExitoCalistheniaOnline";
import CasoExitoCentroRoraima from "./pages/CasoExitoCentroRoraima";
import CasoExitoJointsUp from "./pages/CasoExitoJointsUp";
import CasoExitoTranslateWithStyle from "./pages/CasoExitoTranslateWithStyle";
import ImplantacionCrm from "./pages/ImplantacionCrm";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SofiaWidget />
        <Routes>
          {/* PÁGINA PRINCIPAL */}
          <Route path="/" element={<Index />} />
          
          {/* NOSOTROS */}
          <Route path="/nosotros" element={<Nosotros />} />
          
          {/* SOLUCIONES - Pillar Pages */}
          <Route path="/soluciones/ia-marketing" element={<SolucionesIA />} />
          <Route path="/soluciones/crm-automatizacion" element={<CrmAutomatizaciones />} />
          <Route path="/soluciones/implantacion-crm" element={<ImplantacionCrm />} />
          <Route path="/soluciones/branding-marca" element={<CreacionMarca />} />
          <Route path="/soluciones/marketing-digital" element={<MarketingVisibilidad />} />
          <Route path="/soluciones/gestion-marketing" element={<GestionMarketing />} />
          <Route path="/soluciones/captacion-leads" element={<CaptacionLeads />} />
          <Route path="/kit-consulting" element={<KitConsulting />} />
          <Route path="/kit-digital" element={<KitDigital />} />
          
          {/* CASOS DE ÉXITO - Apoyan las soluciones */}
          <Route path="/casos-exito/asendia" element={<CasoExitoAsendia />} />
          <Route path="/casos-exito/nexo-vital" element={<CasoExitoNexoVital />} />
          <Route path="/casos-exito/i-virgen-extra" element={<CasoExitoIVirgenExtra />} />
          <Route path="/casos-exito/inbound-students" element={<CasoExitoInboundStudents />} />
          <Route path="/casos-exito/calistenia-online" element={<CasoExitoCalistheniaOnline />} />
          <Route path="/casos-exito/centro-roraima" element={<CasoExitoCentroRoraima />} />
          <Route path="/casos-exito/joints-up" element={<CasoExitoJointsUp />} />
          <Route path="/casos-exito/translate-with-style" element={<CasoExitoTranslateWithStyle />} />
          
          {/* BLOG / RECURSOS */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          
          {/* RUTAS LEGACY - Redirigen a las nuevas */}
          <Route path="/crm-automatizaciones" element={<CrmAutomatizaciones />} />
          <Route path="/creacion-marca" element={<CreacionMarca />} />
          <Route path="/marketing-visibilidad" element={<MarketingVisibilidad />} />
          <Route path="/captacion-leads" element={<CaptacionLeads />} />
          <Route path="/gestion-marketing" element={<GestionMarketing />} />
          <Route path="/soluciones-ia" element={<SolucionesIA />} />
          <Route path="/implantacion-crm" element={<ImplantacionCrm />} />
          <Route path="/caso-exito-asendia" element={<CasoExitoAsendia />} />
          <Route path="/caso-exito-nexo-vital" element={<CasoExitoNexoVital />} />
          <Route path="/caso-exito-i-virgen-extra" element={<CasoExitoIVirgenExtra />} />
          <Route path="/caso-exito-inbound-students" element={<CasoExitoInboundStudents />} />
          <Route path="/caso-exito-calistenia-online" element={<CasoExitoCalistheniaOnline />} />
          <Route path="/caso-exito-centro-roraima" element={<CasoExitoCentroRoraima />} />
          <Route path="/caso-exito-joints-up" element={<CasoExitoJointsUp />} />
          <Route path="/caso-exito-translate-with-style" element={<CasoExitoTranslateWithStyle />} />
          
          {/* PÁGINAS PENDIENTES - Temporalmente llevan a NotFound */}
          <Route path="/servicios" element={<NotFound />} />
          <Route path="/contacto" element={<NotFound />} />
          
          {/* 404 - DEBE IR SIEMPRE AL FINAL */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
