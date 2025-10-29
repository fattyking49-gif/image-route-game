import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { User, Calendar, Star, Award } from "lucide-react";
import { toast } from "sonner";

const StudentInformation = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Information submitted successfully!");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-primary mb-8">
          Student Information Submission
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6 max-w-3xl">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5 text-primary" />
                Student Personal Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="Enter your full name" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="your.email@example.com" />
              </div>
              <div>
                <Label htmlFor="roll">Roll Number</Label>
                <Input id="roll" placeholder="Enter your roll number" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                Attendance and Progress
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div>
                <Label htmlFor="attendance">Total Days Attended</Label>
                <Input id="attendance" type="number" placeholder="165" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="h-5 w-5 text-primary" />
                Achievements and Projects
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div>
                <Label htmlFor="achievements">Notable Achievements</Label>
                <Input
                  id="achievements"
                  placeholder="e.g., Robotics Competition Winner"
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                Certificates, Internships, and Skill Records
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div>
                <Label htmlFor="certificates">Certificates & Internships</Label>
                <Input
                  id="certificates"
                  placeholder="e.g., Summer Engineering Internship"
                />
              </div>
            </CardContent>
          </Card>

          <Button type="submit" size="lg" className="w-full md:w-auto">
            Submit
          </Button>
        </form>
      </main>
    </div>
  );
};

export default StudentInformation;
