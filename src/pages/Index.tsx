import Navigation from "@/components/Navigation";
import PortalCard from "@/components/PortalCard";
import { BookOpen, User, GraduationCap, Bot, Handshake, TrendingUp } from "lucide-react";

const Index = () => {
  const portalSections = [
    {
      title: "Academic Resources",
      icon: BookOpen,
      to: "/academic-resources",
      description: "Access timetables, events, and notices"
    },
    {
      title: "Student Information",
      icon: User,
      to: "/student-information",
      description: "Manage your personal details and records"
    },
    {
      title: "College Overview",
      icon: GraduationCap,
      to: "/college-overview",
      description: "Learn about courses, faculty, and campus"
    },
    {
      title: "AI Interface",
      icon: Bot,
      to: "/ai-interface",
      description: "Get instant help from our AI assistant"
    },
    {
      title: "Placement Cell",
      icon: Handshake,
      to: "/placement",
      description: "Explore career opportunities"
    },
    {
      title: "Skill Training",
      icon: TrendingUp,
      to: "/skill-training",
      description: "Enhance your skills and prepare for success"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-12">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">
            Welcome To E Smart Web Portal
          </h1>
          <p className="text-lg text-muted-foreground">
            Your comprehensive campus management system
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {portalSections.map((section) => (
            <PortalCard
              key={section.to}
              title={section.title}
              icon={section.icon}
              to={section.to}
              description={section.description}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;
