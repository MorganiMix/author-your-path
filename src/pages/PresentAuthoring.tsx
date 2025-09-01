import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const PresentAuthoring = () => {
  const [content, setContent] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const { toast } = useToast();

  const loadProgress = () => {
    try {
      const savedContent = localStorage.getItem('presentAuthoring');
      if (savedContent) {
        setContent(savedContent);
      }
    } catch (error) {
      console.error('Error loading progress:', error);
    }
  };

  const saveProgress = () => {
    setIsSaving(true);
    try {
      localStorage.setItem('presentAuthoring', content);

      toast({
        title: "Progress saved",
        description: "Your present authoring work has been saved to this device.",
      });
    } catch (error) {
      console.error('Error saving progress:', error);
      toast({
        title: "Error saving progress",
        description: "There was an error saving your work. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSaving(false);
    }
  };

  useEffect(() => {
    loadProgress();
  }, []);

  const instructions = [
    "Present Authoring helps you examine your current life situation with clarity and honesty.",
    "Write about your personality, relationships, career, health, and life circumstances as they are today.",
    "Be thorough and honest in your self-assessment. This is for your eyes only.",
    "Consider both your strengths and areas for improvement without judgment.",
    "Take your time and write as much detail as feels meaningful to you."
  ];

  const questions = [
    "How would you describe your personality? What are your key strengths and weaknesses?",
    "What are your current relationships like? Family, friends, romantic partners?",
    "How satisfied are you with your career or current work situation?",
    "What is your relationship with your physical and mental health?",
    "What habits do you have that serve you well? Which ones hold you back?",
    "How do you handle stress and challenges in your daily life?",
    "What brings you the most joy and fulfillment currently?",
    "In what areas of your life do you feel stuck or unfulfilled?",
    "How do you spend your time? Are you satisfied with how you use your days?",
    "What would others say are your most notable characteristics?"
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link to="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <h1 className="text-2xl font-bold text-foreground">Present Authoring</h1>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="space-y-8">
          <Card className="p-6 bg-card/80 backdrop-blur-sm border-0">
            <h2 className="text-xl font-bold text-foreground mb-4">Instructions</h2>
            <ul className="space-y-3">
              {instructions.map((instruction, index) => (
                <li key={index} className="flex items-start text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                  {instruction}
                </li>
              ))}
            </ul>
          </Card>

          <Card className="p-6 bg-card/80 backdrop-blur-sm border-0">
            <h2 className="text-xl font-bold text-foreground mb-4">Reflection Questions</h2>
            <p className="text-muted-foreground mb-4">
              Use these questions as prompts for your writing. You don't need to answer them in order or separately - let them guide your reflection.
            </p>
            <ul className="space-y-3">
              {questions.map((question, index) => (
                <li key={index} className="flex items-start text-muted-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-2 mr-3 flex-shrink-0" />
                  {question}
                </li>
              ))}
            </ul>
          </Card>

          <Card className="p-6 bg-card/80 backdrop-blur-sm border-0">
            <h2 className="text-xl font-bold text-foreground mb-4">Your Present Self Analysis</h2>
            <Textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Begin writing about your current self and life situation. Take your time and be thorough..."
              className="min-h-[400px] resize-none text-base leading-relaxed"
            />
            <div className="flex justify-between items-center mt-4">
              <p className="text-sm text-muted-foreground">
                {content.length > 0 ? `${content.split(' ').length} words` : '0 words'}
              </p>
            </div>
          </Card>
        </div>
      </main>

      <div className="fixed bottom-6 right-6">
        <Button 
          onClick={saveProgress} 
          disabled={isSaving}
          className="bg-primary hover:bg-primary-dark text-primary-foreground shadow-lg"
        >
          {isSaving ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Saving...
            </>
          ) : (
            'Save Progress'
          )}
        </Button>
      </div>
    </div>
  );
};

export default PresentAuthoring;