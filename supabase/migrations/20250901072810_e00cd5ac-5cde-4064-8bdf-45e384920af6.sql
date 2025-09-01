-- Fix critical security vulnerability in authoring_progress table
-- Update RLS policies to restrict access to user's own data only

-- First, make user_id column NOT NULL since it's required for security
ALTER TABLE public.authoring_progress 
ALTER COLUMN user_id SET NOT NULL;

-- Drop existing insecure policies
DROP POLICY IF EXISTS "Users can view their own progress" ON public.authoring_progress;
DROP POLICY IF EXISTS "Users can create their own progress" ON public.authoring_progress;
DROP POLICY IF EXISTS "Users can update their own progress" ON public.authoring_progress;
DROP POLICY IF EXISTS "Users can delete their own progress" ON public.authoring_progress;

-- Create secure policies that restrict access to user's own data
CREATE POLICY "Users can view their own progress" 
ON public.authoring_progress 
FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own progress" 
ON public.authoring_progress 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own progress" 
ON public.authoring_progress 
FOR UPDATE 
USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own progress" 
ON public.authoring_progress 
FOR DELETE 
USING (auth.uid() = user_id);