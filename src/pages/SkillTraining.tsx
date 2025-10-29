import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings, Mail, Users } from "lucide-react";

const SkillTraining = () => {
  const sections = [
    {
      icon: Settings,
      title: "Test your skills section",
      description: "Mock interviews and preparation guides",
    },
    {
      icon: Mail,
      title: "Interview tips",
      description: "Interview tips",
    },
    {
      icon: Users,
      title: "Anti-ragging and student welfare cell",
      description: "Support and safety resources",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-primary mb-8">
          Skills & Training
        </h1>

        <div className="grid gap-4 max-w-3xl">
          {sections.map((section, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-accent/20 p-3">
                    <section.icon className="h-8 w-8 text-accent-foreground" />
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

export default SkillTraining;
