import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Building2, TrendingUp, Users } from "lucide-react";

const Placement = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-primary mb-8">
          Placement Cell
        </h1>

        <div className="grid gap-6 max-w-4xl">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Briefcase className="h-6 w-6 text-primary" />
                Career Opportunities
              </CardTitle>
              <CardDescription>
                Explore job openings and internship opportunities from top companies
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Access our placement portal to view current openings, company profiles, and application deadlines.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building2 className="h-6 w-6 text-primary" />
                Company Partners
              </CardTitle>
              <CardDescription>
                Meet our recruiting partners and industry connections
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Learn about companies that regularly recruit from our campus and their selection process.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-6 w-6 text-primary" />
                Placement Statistics
              </CardTitle>
              <CardDescription>
                View our placement records and success stories
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Discover our placement achievements, average packages, and student testimonials.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-6 w-6 text-primary" />
                Career Counseling
              </CardTitle>
              <CardDescription>
                Get personalized career guidance and support
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Book appointments with our career counselors for resume review, interview prep, and career planning.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Placement;
