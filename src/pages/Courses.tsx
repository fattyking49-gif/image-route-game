import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Clock, User } from "lucide-react";

const Courses = () => {
  const courses = [
    {
      title: "Data Structures and Algorithms",
      code: "CS301",
      instructor: "Dr. Smith",
      credits: 4,
      status: "ongoing",
    },
    {
      title: "Database Management Systems",
      code: "CS302",
      instructor: "Prof. Johnson",
      credits: 3,
      status: "ongoing",
    },
    {
      title: "Web Development",
      code: "CS303",
      instructor: "Dr. Williams",
      credits: 3,
      status: "completed",
    },
    {
      title: "Machine Learning",
      code: "CS304",
      instructor: "Prof. Brown",
      credits: 4,
      status: "upcoming",
    },
  ];

  const statusColors = {
    ongoing: "bg-primary text-primary-foreground",
    completed: "bg-green-500 text-white",
    upcoming: "bg-accent text-accent-foreground",
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-primary mb-8">My Courses</h1>

        <div className="grid gap-4 max-w-4xl">
          {courses.map((course) => (
            <Card key={course.code} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <CardTitle className="flex items-center gap-2">
                      <BookOpen className="h-5 w-5 text-primary" />
                      {course.title}
                    </CardTitle>
                    <CardDescription>Course Code: {course.code}</CardDescription>
                  </div>
                  <Badge className={statusColors[course.status as keyof typeof statusColors]}>
                    {course.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>{course.instructor}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{course.credits} Credits</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Courses;
