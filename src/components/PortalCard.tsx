import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface PortalCardProps {
  title: string;
  icon: LucideIcon;
  to: string;
  description?: string;
}

const PortalCard = ({ title, icon: Icon, to, description }: PortalCardProps) => {
  return (
    <Link to={to} className="group">
      <Card className="h-full transition-all hover:shadow-lg hover:scale-105 hover:border-primary">
        <CardContent className="flex flex-col items-center justify-center p-8 text-center">
          <div className="mb-4 rounded-2xl bg-primary/10 p-6 transition-colors group-hover:bg-primary/20">
            <Icon className="h-16 w-16 text-primary" />
          </div>
          <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
          {description && (
            <p className="text-sm text-muted-foreground">{description}</p>
          )}
        </CardContent>
      </Card>
    </Link>
  );
};

export default PortalCard;
