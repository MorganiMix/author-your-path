-- Create table for storing authoring progress
CREATE TABLE public.authoring_progress (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID,
  module_type TEXT NOT NULL CHECK (module_type IN ('past', 'present', 'future')),
  session_data JSONB NOT NULL DEFAULT '{}',
  content TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.authoring_progress ENABLE ROW LEVEL SECURITY;

-- Create policies for user access (allowing anonymous users for now)
CREATE POLICY "Users can view their own progress" 
ON public.authoring_progress 
FOR SELECT 
USING (true);

CREATE POLICY "Users can create their own progress" 
ON public.authoring_progress 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Users can update their own progress" 
ON public.authoring_progress 
FOR UPDATE 
USING (true);

CREATE POLICY "Users can delete their own progress" 
ON public.authoring_progress 
FOR DELETE 
USING (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_authoring_progress_updated_at
BEFORE UPDATE ON public.authoring_progress
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();