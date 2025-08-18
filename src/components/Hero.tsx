import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-background via-secondary to-background py-20 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-8">
          <BookOpen className="w-4 h-4" />
          Evidence-Based Self-Development
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
          The Self Authoring
          <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent"> Suite</span>
        </h1>
        
        <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          A comprehensive writing program designed to help you understand your past, 
          clarify your present, and plan your future. Backed by psychological research 
          and used by thousands to improve their lives.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button size="lg" className="bg-gradient-to-r from-primary to-primary-light hover:from-primary-dark hover:to-primary text-primary-foreground px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            Start Your Journey
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/5 px-8 py-3 rounded-lg">
            Learn More
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <div className="text-3xl font-bold text-primary mb-2">15,000+</div>
            <div className="text-muted-foreground">Completed Programs</div>
          </div>
          <div className="p-6">
            <div className="text-3xl font-bold text-primary mb-2">Research</div>
            <div className="text-muted-foreground">Backed</div>
          </div>
          <div className="p-6">
            <div className="text-3xl font-bold text-primary mb-2">4.8/5</div>
            <div className="text-muted-foreground">User Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;