import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-primary/5 via-background to-primary-light/5">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
          Ready to Begin Your Self-Discovery Journey?
        </h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Take the first step toward greater self-understanding and a more fulfilling life. 
          Start with any module or complete the full suite.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-primary to-primary-light hover:from-primary-dark hover:to-primary text-primary-foreground px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
            onClick={() => document.getElementById('modules')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get Started Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-primary text-primary hover:bg-primary/5 px-8 py-4 rounded-lg text-lg"
            onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLScB-F7Lz3APPLoXDA3JHjfVZtEwwGwYHgtadFpc_Glfc7TAog/viewform?usp=dialog', '_blank')}
          >
            Try Free Sample
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left max-w-2xl mx-auto">
          <div className="flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
            <span className="text-sm text-muted-foreground">Lifetime access</span>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
            <span className="text-sm text-muted-foreground">Research-backed</span>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
            <span className="text-sm text-muted-foreground">30-day guarantee</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;