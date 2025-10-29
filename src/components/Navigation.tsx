import { Link, useLocation } from "react-router-dom";
import { Home, User, BookOpen, Users, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const location = useLocation();
  const { signOut, user } = useAuth();

  const navItems = [
    { name: "Home", path: "/", icon: Home },
    { name: "Profile", path: "/profile", icon: User },
    { name: "Courses", path: "/courses", icon: BookOpen },
    { name: "Community", path: "/community", icon: Users },
  ];

  return (
    <nav className="border-b border-border bg-card">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-8">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center gap-2 text-lg font-medium transition-colors hover:text-primary",
                  isActive ? "text-primary" : "text-foreground/70"
                )}
              >
                <Icon className="h-5 w-5" />
                <span>{item.name}</span>
              </Link>
            );
          })}
          </div>
          
          {user && (
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">
                {user.email}
              </span>
              <Button
                onClick={signOut}
                variant="outline"
                size="sm"
                className="flex items-center gap-2"
              >
                <LogOut className="h-4 w-4" />
                Logout
              </Button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
