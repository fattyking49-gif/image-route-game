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
import Auth from "./pages/Auth";
import { AuthProvider } from "./hooks/useAuth";
import { ProtectedRoute } from "./components/ProtectedRoute";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/auth" element={<Auth />} />
            <Route path="/" element={<ProtectedRoute><Index /></ProtectedRoute>} />
            <Route path="/student-information" element={<ProtectedRoute><StudentInformation /></ProtectedRoute>} />
            <Route path="/college-overview" element={<ProtectedRoute><CollegeOverview /></ProtectedRoute>} />
            <Route path="/ai-interface" element={<ProtectedRoute><AIInterface /></ProtectedRoute>} />
            <Route path="/skill-training" element={<ProtectedRoute><SkillTraining /></ProtectedRoute>} />
            <Route path="/academic-resources" element={<ProtectedRoute><AcademicResources /></ProtectedRoute>} />
            <Route path="/placement" element={<ProtectedRoute><Placement /></ProtectedRoute>} />
            <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
            <Route path="/courses" element={<ProtectedRoute><Courses /></ProtectedRoute>} />
            <Route path="/community" element={<ProtectedRoute><Community /></ProtectedRoute>} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
