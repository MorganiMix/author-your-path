import Hero from "@/components/Hero";
import AuthoringModules from "@/components/AuthoringModules";
import Benefits from "@/components/Benefits";
import CallToAction from "@/components/CallToAction";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <AuthoringModules />
      <Benefits />
      <CallToAction />
    </div>
  );
};

export default Index;