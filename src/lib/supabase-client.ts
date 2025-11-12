import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://hhcsqkmylxwdelrzgmbj.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhoY3Nxa215bHh3ZGVscnpnbWJqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM3NDQ5ODEsImV4cCI6MjA2OTMyMDk4MX0.vBMKo3BhM6gN4VPtjiwJJhotbVPYKZu-K_D_4cinOs8';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
