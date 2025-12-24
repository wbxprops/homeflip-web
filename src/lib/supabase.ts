import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://ulrbhvudbladroixdttw.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVscmJodnVkYmxhZHJvaXhkdHR3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA0MDQ1MTMsImV4cCI6MjA2NTk4MDUxM30.5r0Z4q40ylzniBF3F1-E5Ed046yugWehsSfXCwdXLCI';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

