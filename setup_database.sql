-- StyleSage Waitlist Database Setup
-- Run this in your Supabase SQL Editor: https://supabase.com/dashboard/project/rbtohkvrigdtqtoqeuwz/sql/new

-- Create waitlist table
CREATE TABLE IF NOT EXISTS public.waitlist (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.waitlist ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Anyone can join waitlist" ON public.waitlist;
DROP POLICY IF EXISTS "Restrict public waitlist reads" ON public.waitlist;

-- Allow anyone to insert their email into the waitlist
CREATE POLICY "Anyone can join waitlist"
ON public.waitlist
FOR INSERT
TO anon
WITH CHECK (true);

-- Restrict public access to waitlist email addresses
-- Only allow selecting through backend/service role, not through public API
CREATE POLICY "Restrict public waitlist reads"
ON public.waitlist
FOR SELECT
TO anon, authenticated
USING (false);

-- Create indexes for performance
DROP INDEX IF EXISTS idx_waitlist_email;
DROP INDEX IF EXISTS idx_waitlist_created_at;

CREATE INDEX idx_waitlist_email ON public.waitlist(email);
CREATE INDEX idx_waitlist_created_at ON public.waitlist(created_at DESC);

-- Verify the setup
SELECT 'Waitlist table created successfully!' AS status;
SELECT COUNT(*) AS total_signups FROM public.waitlist;
