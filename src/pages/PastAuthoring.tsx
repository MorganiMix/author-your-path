import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Save } from "lucide-react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const PastAuthoring = () => {
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [progressId, setProgressId] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    // Load existing progress on component mount
    loadProgress();
  }, []);

  const loadProgress = async () => {
    try {
      const { data, error } = await supabase
        .from('authoring_progress')
        .select('*')
        .eq('module_type', 'past')
        .maybeSingle();

      if (error) throw error;

      if (data) {
        setContent(data.content || "");
        setProgressId(data.id);
      }
    } catch (error) {
      console.error('Error loading progress:', error);
    }
  };

  const saveProgress = async () => {
    setIsLoading(true);
    
    try {
      if (progressId) {
        // Update existing progress
        const { error } = await supabase
          .from('authoring_progress')
          .update({ content })
          .eq('id', progressId);

        if (error) throw error;
      } else {
        // Create new progress
        const { data, error } = await supabase
          .from('authoring_progress')
          .insert([
            {
              module_type: 'past',
              content,
              session_data: {}
            }
          ])
          .select()
          .single();

        if (error) throw error;
        setProgressId(data.id);
      }

      toast({
        title: "Progress Saved",
        description: "Your writing has been saved successfully.",
      });
    } catch (error) {
      console.error('Error saving progress:', error);
      toast({
        title: "Save Failed",
        description: "There was an error saving your progress. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const instructions = [
    "Take some time to think about your past experiences, both positive and negative.",
    "Write about significant events, relationships, and moments that have shaped who you are today.",
    "Be honest and detailed in your reflections. This is for your personal growth.",
    "Focus on understanding patterns and learning from your experiences.",
    "There's no right or wrong way to do this - write what feels authentic to you."
  ];

  const questions = [
    "What are the most significant positive experiences from your past?",
    "What negative experiences or traumas have affected you?",
    "How have your relationships shaped who you are?",
    "What patterns do you notice in your past behavior?",
    "What lessons have you learned from your mistakes?",
    "How have you grown and changed over the years?",
    "What aspects of your past are you most proud of?",
    "What would you tell your younger self?"
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link to="/">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-foreground">Past Authoring</h1>
            <p className="text-muted-foreground">Understand Your History</p>
          </div>
        </div>

        {/* Instructions */}
        <Card className="p-6 mb-8">
          <h2 className="text-xl font-semibold text-foreground mb-4">Instructions</h2>
          <div className="space-y-3">
            {instructions.map((instruction, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-sm font-medium text-primary">{index + 1}</span>
                </div>
                <p className="text-muted-foreground">{instruction}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Questions */}
        <Card className="p-6 mb-8">
          <h2 className="text-xl font-semibold text-foreground mb-4">Reflection Questions</h2>
          <p className="text-muted-foreground mb-4">
            Use these questions to guide your writing. You don't need to answer all of them, but they can help spark your reflection.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {questions.map((question, index) => (
              <div key={index} className="p-3 bg-muted/50 rounded-lg">
                <p className="text-sm text-foreground">{question}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Writing Area */}
        <Card className="p-6 mb-8">
          <h2 className="text-xl font-semibold text-foreground mb-4">Your Past Authoring</h2>
          <Textarea
            placeholder="Begin writing about your past experiences here..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="min-h-[400px] resize-none"
          />
          <div className="mt-4 text-sm text-muted-foreground">
            Words: {content.trim().split(/\s+/).filter(word => word.length > 0).length}
          </div>
        </Card>

        {/* Save Button */}
        <div className="fixed bottom-8 right-8">
          <Button 
            onClick={saveProgress}
            disabled={isLoading || !content.trim()}
            className="gap-2 shadow-lg"
            size="lg"
          >
            <Save className="w-4 h-4" />
            {isLoading ? "Saving..." : "Save Progress"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PastAuthoring;