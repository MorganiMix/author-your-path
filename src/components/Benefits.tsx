import { Card } from "@/components/ui/card";
import { TrendingUp, Brain, Heart, Users } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Improved Academic & Professional Performance",
    description: "Research shows participants experience better grades, increased work performance, and higher achievement of personal goals.",
    stat: "29% improvement in GPA"
  },
  {
    icon: Brain,
    title: "Enhanced Mental Clarity",
    description: "Gain deeper self-understanding and clarity about your motivations, values, and life direction through structured self-reflection.",
    stat: "Significant reduction in anxiety"
  },
  {
    icon: Heart,
    title: "Better Emotional Regulation", 
    description: "Process past experiences and develop healthier coping mechanisms, leading to improved emotional well-being and resilience.",
    stat: "Decreased depression symptoms"
  },
  {
    icon: Users,
    title: "Stronger Relationships",
    description: "Better self-knowledge leads to improved communication, deeper connections, and more satisfying personal relationships.",
    stat: "Enhanced social skills"
  }
];

const Benefits = () => {
  return (
    <section id="benefits" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Scientifically Proven Benefits
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            The Self Authoring Suite is backed by extensive research conducted at leading universities. 
            Participants consistently report significant improvements across multiple areas of life.
          </p>
          <div className="inline-flex items-center gap-2 bg-primary/5 text-primary px-4 py-2 rounded-full text-sm font-medium">
            <Brain className="w-4 h-4" />
            Published in peer-reviewed journals
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <Card key={index} className="p-8 hover:shadow-card transition-all duration-300 border border-border/50 bg-card">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center flex-shrink-0">
                    <IconComponent className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{benefit.description}</p>
                    <div className="inline-flex items-center bg-secondary px-3 py-1 rounded-full">
                      <span className="text-sm font-medium text-secondary-foreground">{benefit.stat}</span>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
        
        <div className="bg-gradient-to-r from-primary/5 to-primary-light/5 rounded-2xl p-8 text-center border border-primary/10">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Join Thousands Who Have Transformed Their Lives
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            "The Self Authoring Suite helped me understand patterns I never noticed before. 
            It's given me clarity about my goals and the confidence to pursue them."
          </p>
          <div className="flex items-center justify-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-5 h-5 text-yellow-400">★</div>
              ))}
            </div>
            <span className="text-sm text-muted-foreground ml-2">- Sarah M., University Student</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;