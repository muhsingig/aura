import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// Always create the client; if env vars are wrong, Supabase will surface a clear runtime error.
export const appSupabase: SupabaseClient = createClient(supabaseUrl, supabaseAnonKey);

