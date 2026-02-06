-- Create table for leads captured by Sofia chatbot
CREATE TABLE public.sofia_leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT,
  email TEXT,
  phone TEXT,
  company TEXT,
  interest TEXT,
  source_page TEXT,
  conversation_summary TEXT,
  status TEXT DEFAULT 'new',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.sofia_leads ENABLE ROW LEVEL SECURITY;

-- Allow admins to view all leads
CREATE POLICY "Admins can view all leads" 
ON public.sofia_leads 
FOR SELECT 
USING (
  EXISTS (
    SELECT 1 FROM public.user_roles 
    WHERE user_id = auth.uid() 
    AND role = 'admin'
  )
);

-- Allow admins to manage leads
CREATE POLICY "Admins can manage leads" 
ON public.sofia_leads 
FOR ALL 
USING (
  EXISTS (
    SELECT 1 FROM public.user_roles 
    WHERE user_id = auth.uid() 
    AND role = 'admin'
  )
);

-- Allow public insert for lead capture (the chatbot needs to save leads without auth)
CREATE POLICY "Public can insert leads" 
ON public.sofia_leads 
FOR INSERT 
WITH CHECK (true);

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_sofia_leads_updated_at
BEFORE UPDATE ON public.sofia_leads
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();