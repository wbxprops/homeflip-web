-- Migration: Add survey_data column to prospect_responses
-- Date: 2026-01-12
-- Purpose: Store pre-strategy survey responses as JSONB

-- Run this in Supabase SQL Editor (whitebox-one database)

ALTER TABLE prospect_responses
ADD COLUMN IF NOT EXISTS survey_data JSONB;

-- Add comment for documentation
COMMENT ON COLUMN prospect_responses.survey_data IS 'JSON object containing pre-strategy survey responses: investor_type, is_full_time, strategies, experience_years, deals_last_12_months, goal, biggest_struggle, current_sources, why_now, commitment_level';

-- Example survey_data structure:
-- {
--   "investor_type": "experienced" | "completed_one" | "looking_first" | "not_investor",
--   "is_full_time": "yes" | "day_job" | "retired",
--   "strategies": ["long_term_rentals", "short_term_rentals", "buy_fix_sell", "wholesaling", "agent", "other", "unsure"],
--   "experience_years": "0-6_months" | "6mo-1yr" | "1-2yrs" | "2+yrs" | "less_than_1yr" | "1-5yrs" | "5+yrs",
--   "deals_last_12_months": 5,
--   "goal": "Build passive income...",
--   "biggest_struggle": "Finding deals...",
--   "current_sources": "MLS, driving for dollars",
--   "why_now": "Ready to scale up",
--   "commitment_level": 4
-- }
