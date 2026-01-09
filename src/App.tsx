import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Index from "./pages/Index";
import SuenoInfantil from "./pages/SuenoInfantil";
import SuenoAdulto from "./pages/SuenoAdulto";
import SuenoEstudioOposiciones from "./pages/SuenoEstudioOposiciones";
import SuenoRendimientoDeportivo from "./pages/SuenoRendimientoDeportivo";
import SuenoProductividadLaboral from "./pages/SuenoProductividadLaboral";
import NesaXSignal from "./pages/NesaXSignal";
import MetodoNemuri from "./pages/MetodoNemuri";
import CharlasFormaciones from "./pages/CharlasFormaciones";
import SobreNemuri from "./pages/SobreNemuri";
import Contacto from "./pages/Contacto";
import AvisoLegal from "./pages/AvisoLegal";
import PoliticaPrivacidad from "./pages/PoliticaPrivacidad";
import PoliticaCookies from "./pages/PoliticaCookies";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/sueno-infantil" element={<SuenoInfantil />} />
            <Route path="/sueno-adulto" element={<SuenoAdulto />} />
            <Route path="/sueno-estudio-oposiciones" element={<SuenoEstudioOposiciones />} />
            <Route path="/sueno-rendimiento-deportivo" element={<SuenoRendimientoDeportivo />} />
            <Route path="/sueno-productividad-laboral" element={<SuenoProductividadLaboral />} />
            <Route path="/nesa-x-signal" element={<NesaXSignal />} />
            <Route path="/metodo-nemuri" element={<MetodoNemuri />} />
            <Route path="/charlas-formaciones" element={<CharlasFormaciones />} />
            <Route path="/sobre-nemuri" element={<SobreNemuri />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/aviso-legal" element={<AvisoLegal />} />
            <Route path="/politica-privacidad" element={<PoliticaPrivacidad />} />
            <Route path="/politica-cookies" element={<PoliticaCookies />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
