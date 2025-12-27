-- Diagnostic and Fix for Jurisdictions RLS Issue
-- Run this in Supabase SQL Editor

-- ============================================
-- STEP 1: DIAGNOSTIC - Check what's in the table
-- ============================================

-- Check total count (should show ALL records)
SELECT 'Total rows in table:' as check_type, COUNT(*) as count FROM jurisdictions;

-- Check count by state to see which ones are missing
SELECT state_code, COUNT(*) as county_count
FROM jurisdictions
GROUP BY state_code
ORDER BY state_code;

-- ============================================
-- STEP 2: CHECK CURRENT RLS POLICIES
-- ============================================

-- List all RLS policies on jurisdictions table
SELECT
  policyname,
  permissive,
  roles,
  cmd,
  qual::text as using_expression,
  with_check::text as with_check_expression
FROM pg_policies
WHERE tablename = 'jurisdictions';

-- Check if RLS is enabled
SELECT
  relname as table_name,
  relrowsecurity as rls_enabled,
  relforcerowsecurity as rls_forced
FROM pg_class
WHERE relname = 'jurisdictions';

-- ============================================
-- STEP 3: FIX - Ensure anon can read all jurisdictions
-- ============================================

-- Option A: If RLS is enabled, add/update policy for SELECT
-- First, drop existing select policy if it exists
DROP POLICY IF EXISTS "Allow anonymous read access" ON jurisdictions;
DROP POLICY IF EXISTS "Anyone can read jurisdictions" ON jurisdictions;
DROP POLICY IF EXISTS "Enable read access for all users" ON jurisdictions;

-- Create new policy allowing all reads
CREATE POLICY "Enable read access for all users" ON jurisdictions
  FOR SELECT
  USING (true);

-- Verify the fix
SELECT 'Policy created successfully. Testing...' as status;

-- ============================================
-- STEP 4: VERIFY - Count should now work via anon
-- ============================================

-- This should now return all records
SELECT 'After fix - total rows:' as check_type, COUNT(*) as count FROM jurisdictions;
