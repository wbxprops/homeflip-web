-- Prospect Responses Table
-- Tracks every form submission/interaction, rolls up to prospect record
-- Run this in Supabase SQL Editor

-- Create the responses table
CREATE TABLE IF NOT EXISTS prospect_responses (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL,
  name TEXT,
  phone TEXT,
  source TEXT NOT NULL,  -- hero_cta, claim_county_page, etc.
  jurisdictions_requested JSONB,  -- array of {state, counties[]}
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Index on email for fast lookups/rollups
CREATE INDEX idx_prospect_responses_email ON prospect_responses(email);

-- Index on created_at for time-based queries
CREATE INDEX idx_prospect_responses_created_at ON prospect_responses(created_at);

-- Enable RLS
ALTER TABLE prospect_responses ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (public forms)
CREATE POLICY "Allow anonymous inserts to prospect_responses"
  ON prospect_responses
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow authenticated users to read all (for admin/CRM)
CREATE POLICY "Allow authenticated users to read prospect_responses"
  ON prospect_responses
  FOR SELECT
  TO authenticated
  USING (true);

-- Grant permissions
GRANT INSERT ON prospect_responses TO anon;
GRANT SELECT ON prospect_responses TO authenticated;

-- Helpful view: Response count per prospect
CREATE OR REPLACE VIEW prospect_engagement AS
SELECT
  email,
  COUNT(*) as response_count,
  MIN(created_at) as first_response,
  MAX(created_at) as last_response,
  MAX(created_at) - MIN(created_at) as engagement_span,
  array_agg(DISTINCT source) as sources_used
FROM prospect_responses
GROUP BY email;

-- Grant access to view
GRANT SELECT ON prospect_engagement TO authenticated;
