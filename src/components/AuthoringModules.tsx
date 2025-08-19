import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, User, Target, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const modules = [
  {
    icon: Clock,
    title: "Past Authoring",
    subtitle: "Understand Your History",
    description: "Explore and make sense of your past experiences, both positive and negative. This module helps you identify patterns, resolve unfinished business, and integrate your experiences into a coherent narrative.",
    duration: "2-4 hours",
    benefits: ["Process past traumas", "Identify life patterns", "Gain emotional clarity", "Build resilience"]
  },
  {
    icon: User,
    title: "Present Authoring",
    subtitle: "Know Yourself Now",
    description: "Examine your current personality, relationships, and life circumstances. Understand your strengths, weaknesses, and the person you are today across all areas of your life.",
    duration: "3-5 hours", 
    benefits: ["Self-awareness", "Identify strengths", "Recognize blind spots", "Improve relationships"]
  },
  {
    icon: Target,
    title: "Future Authoring",
    subtitle: "Design Your Vision",
    description: "Create a clear, detailed vision for your future and develop concrete plans to achieve your goals. This module helps you clarify your values and create actionable steps toward your ideal life.",
    duration: "2-4 hours",
    benefits: ["Set meaningful goals", "Create action plans", "Increase motivation", "Build discipline"]
  }
];

const AuthoringModules = () => {
  return (
    <section className="py-20 px-4 bg-gradient-subtle">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Three Modules, One Transformative Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Each module is designed to work together, providing you with a comprehensive 
            understanding of yourself and a clear path forward.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {modules.map((module, index) => {
            const IconComponent = module.icon;
            return (
              <Card key={index} className="p-8 hover:shadow-card transition-all duration-300 border-0 bg-card/80 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{module.title}</h3>
                    <p className="text-sm text-primary font-medium">{module.subtitle}</p>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {module.description}
                </p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Estimated Time:</span>
                    <span className="font-medium text-foreground">{module.duration}</span>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium text-foreground mb-2">Key Benefits:</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {module.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {module.title === "Past Authoring" ? (
                  <Link to="/past-authoring">
                    <Button className="w-full bg-primary hover:bg-primary-dark text-primary-foreground">
                      Start Module
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                ) : module.title === "Present Authoring" ? (
                  <Link to="/present-authoring">
                    <Button className="w-full bg-primary hover:bg-primary-dark text-primary-foreground">
                      Start Module
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                ) : module.title === "Future Authoring" ? (
                  <Link to="/future-authoring">
                    <Button className="w-full bg-primary hover:bg-primary-dark text-primary-foreground">
                      Start Module
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                ) : (
                  <Button className="w-full bg-primary hover:bg-primary-dark text-primary-foreground">
                    Start Module
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                )}
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AuthoringModules;