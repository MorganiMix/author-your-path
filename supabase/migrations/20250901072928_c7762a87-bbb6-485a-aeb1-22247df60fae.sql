-- Fix critical security vulnerability in authoring_progress table
-- Step 1: Clean up existing data with NULL user_id values

-- Delete records with NULL user_id (these cannot be secured properly)
DELETE FROM public.authoring_progress WHERE user_id IS NULL;

-- Step 2: Make user_id column NOT NULL since it's required for security
ALTER TABLE public.authoring_progress 
ALTER COLUMN user_id SET NOT NULL;

-- Step 3: Drop existing insecure policies
DROP POLICY IF EXISTS "Users can view their own progress" ON public.authoring_progress;
DROP POLICY IF EXISTS "Users can create their own progress" ON public.authoring_progress;
DROP POLICY IF EXISTS "Users can update their own progress" ON public.authoring_progress;
DROP POLICY IF EXISTS "Users can delete their own progress" ON public.authoring_progress;

-- Step 4: Create secure policies that restrict access to user's own data
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