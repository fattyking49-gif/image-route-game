import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import StudentInformation from "./pages/StudentInformation";
import CollegeOverview from "./pages/CollegeOverview";
import AIInterface from "./pages/AIInterface";
import SkillTraining from "./pages/SkillTraining";
import AcademicResources from "./pages/AcademicResources";
import Placement from "./pages/Placement";
import Profile from "./pages/Profile";
import Courses from "./pages/Courses";
import Community from "./pages/Community";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/student-information" element={<StudentInformation />} />
          <Route path="/college-overview" element={<CollegeOverview />} />
          <Route path="/ai-interface" element={<AIInterface />} />
          <Route path="/skill-training" element={<SkillTraining />} />
          <Route path="/academic-resources" element={<AcademicResources />} />
          <Route path="/placement" element={<Placement />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/community" element={<Community />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
