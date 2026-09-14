import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Projects from "./pages/Projects";
import CaseStudy from "./pages/CaseStudy";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PassionPlay from "./pages/PassionPlay";
import ActionForHappiness from "./pages/ActionForHappiness";

import ParentClubs from "./pages/ParentClubs";
import Awans from "./pages/Awans";
import Showroom from "./pages/Showroom";
import Styleguide from "./pages/Styleguide";
import NotFound from "./pages/NotFound";
import { LanguageProvider } from "@/i18n/LanguageContext";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/kluby-rodzicow" element={<ParentClubs />} />
            <Route path="/projects/awans" element={<Awans />} />
            <Route path="/projects/:id" element={<CaseStudy />} />
            <Route path="/showroom" element={<Showroom />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/passion-play" element={<PassionPlay />} />
            <Route path="/passion-play/action-for-happiness" element={<ActionForHappiness />} />
            <Route path="/styleguide" element={<Styleguide />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
