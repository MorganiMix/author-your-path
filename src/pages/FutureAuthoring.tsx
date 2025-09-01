import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const FutureAuthoring = () => {
  const [content, setContent] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const { toast } = useToast();

  const loadProgress = () => {
    try {
      const savedContent = localStorage.getItem('futureAuthoring');
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
      localStorage.setItem('futureAuthoring', content);

      toast({
        title: "Progress saved",
        description: "Your future authoring work has been saved to this device.",
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
    "Future Authoring helps you create a clear, detailed vision for your ideal life 3-5 years from now.",
    "Write about what you want your life to look like across all important areas.",
    "Be specific and detailed - the more vivid your vision, the more motivating it becomes.",
    "Consider what you want to achieve, who you want to become, and how you want to live.",
    "This is your opportunity to design your life intentionally rather than leaving it to chance."
  ];

  const questions = [
    "What kind of person do you want to be 3-5 years from now? What qualities will you have developed?",
    "What does your ideal career or work life look like? What are you doing professionally?",
    "What kind of relationships do you want to have? How will you connect with family and friends?",
    "What does optimal health and fitness look like for you? How will you feel in your body?",
    "Where do you want to live? What kind of environment will support your best life?",
    "What skills or knowledge do you want to develop? What will you have learned?",
    "How do you want to spend your time? What will a typical day or week look like?",
    "What legacy do you want to create? How do you want to contribute to the world?",
    "What experiences do you want to have? What adventures or achievements matter to you?",
    "What would need to happen for you to feel truly fulfilled and proud of your life?"
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
            <h1 className="text-2xl font-bold text-foreground">Future Authoring</h1>
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
            <h2 className="text-xl font-bold text-foreground mb-4">Vision Questions</h2>
            <p className="text-muted-foreground mb-4">
              Use these questions to guide your vision. Write freely about your ideal future - be ambitious and specific.
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
            <h2 className="text-xl font-bold text-foreground mb-4">Your Ideal Future Vision</h2>
            <Textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Describe your ideal life 3-5 years from now in vivid detail. What does success look like to you? How do you want to live, work, and connect with others..."
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

export default FutureAuthoring;