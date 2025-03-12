
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Psychology from "./pages/programs/Psychology";
import Communication from "./pages/programs/Communication";
import ComputerScience from "./pages/programs/ComputerScience";
import InformationTechnology from "./pages/programs/InformationTechnology";
import ElementaryEducation from "./pages/programs/ElementaryEducation";
import SecondaryEducation from "./pages/programs/SecondaryEducation";
import BusinessAdministration from "./pages/programs/BusinessAdministration";
import HospitalityManagement from "./pages/programs/HospitalityManagement";
import Criminology from "./pages/programs/Criminology";

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
          <Route path="/programs/bs-in-computer-science" element={<ComputerScience />} />
          <Route path="/programs/bs-in-information-technology" element={<InformationTechnology />} />
          <Route path="/programs/bachelor-in-elementary-education" element={<ElementaryEducation />} />
          <Route path="/programs/bachelor-in-secondary-education" element={<SecondaryEducation />} />
          <Route path="/programs/bs-in-business-administration" element={<BusinessAdministration />} />
          <Route path="/programs/bs-in-hospitality-management" element={<HospitalityManagement />} />
          <Route path="/programs/bs-in-criminology" element={<Criminology />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
