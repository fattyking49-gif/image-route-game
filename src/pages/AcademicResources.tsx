import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, CalendarRange, AlertTriangle, Megaphone } from "lucide-react";

const AcademicResources = () => {
  const sections = [
    {
      icon: Calendar,
      title: "Timetable management",
      description: "Manage schedule and appointments",
    },
    {
      icon: CalendarRange,
      title: "College and university event details",
      description: "Upcoming academis and university events",
    },
    {
      icon: AlertTriangle,
      title: "Issues/problems raised by college",
      description: "Address concerns and report issues",
    },
    {
      icon: Megaphone,
      title: "Notices and workshops",
      description: "View important announcements",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-primary mb-8">
          Academic Resources
        </h1>

        <div className="grid gap-4 max-w-3xl">
          {sections.map((section, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-primary/10 p-3">
                    <section.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-1">{section.title}</CardTitle>
                    <CardDescription className="text-base">
                      {section.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default AcademicResources;
