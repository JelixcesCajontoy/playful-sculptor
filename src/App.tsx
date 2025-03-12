
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Psychology from "./pages/programs/Psychology";
import Communication from "./pages/programs/Communication";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/programs/bachelor-of-science-in-psychology" element={<Psychology />} />
          <Route path="/programs/bachelor-of-arts-in-communication" element={<Communication />} />
          <Route path="/programs/bs-in-computer-science" element={<Psychology />} />
          <Route path="/programs/bs-in-information-technology" element={<Psychology />} />
          <Route path="/programs/bachelor-in-elementary-education" element={<Psychology />} />
          <Route path="/programs/bachelor-in-secondary-education" element={<Psychology />} />
          <Route path="/programs/bs-in-business-administration" element={<Psychology />} />
          <Route path="/programs/bs-in-hospitality-management" element={<Psychology />} />
          <Route path="/programs/bs-in-criminology" element={<Psychology />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
