import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Users, MessageCircle, Calendar, Trophy } from "lucide-react";

const Community = () => {
  const announcements = [
    {
      title: "Tech Fest 2025",
      description: "Annual technical festival - Registration now open!",
      date: "Feb 15, 2025",
      icon: Trophy,
    },
    {
      title: "Study Group Meet",
      description: "Weekly study session for upcoming exams",
      date: "Every Saturday",
      icon: Users,
    },
    {
      title: "Guest Lecture",
      description: "Industry expert talk on AI and Machine Learning",
      date: "Jan 30, 2025",
      icon: MessageCircle,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-primary mb-8">Community</h1>

        <div className="max-w-4xl space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Campus Announcements</CardTitle>
              <CardDescription>Stay updated with latest campus activities</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {announcements.map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-muted/50">
                  <div className="rounded-lg bg-primary/10 p-3">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{item.description}</p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      <span>{item.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Student Groups</CardTitle>
              <CardDescription>Join clubs and interest groups</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {["Coding Club", "Cultural Committee", "Sports Team", "Tech Club"].map((group) => (
                  <div key={group} className="flex items-center gap-3 p-4 rounded-lg border">
                    <Avatar>
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        <Users className="h-5 w-5" />
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{group}</p>
                      <p className="text-xs text-muted-foreground">200+ members</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Community;
