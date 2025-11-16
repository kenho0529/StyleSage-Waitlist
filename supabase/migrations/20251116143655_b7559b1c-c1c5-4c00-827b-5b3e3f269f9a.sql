-- Restrict public access to waitlist email addresses
-- Only allow selecting through backend/service role, not through public API
CREATE POLICY "Restrict public waitlist reads"
ON public.waitlist
FOR SELECT
TO anon, authenticated
USING (false);