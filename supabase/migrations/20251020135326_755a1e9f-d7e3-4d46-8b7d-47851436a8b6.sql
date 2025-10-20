-- Fix nullable user_id in customers table to prevent access control gaps
-- This ensures all customer records are properly associated with a user

-- First, delete any orphaned customer records without user association
-- (These would be inaccessible due to RLS policies anyway)
DELETE FROM customers WHERE user_id IS NULL;

-- Now make user_id NOT NULL to enforce user association
ALTER TABLE customers 
ALTER COLUMN user_id SET NOT NULL;

-- Add a comment documenting this security requirement
COMMENT ON COLUMN customers.user_id IS 'Required: Every customer must be associated with an authenticated user for proper access control via RLS';