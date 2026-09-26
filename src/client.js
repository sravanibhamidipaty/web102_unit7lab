import { createClient } from '@supabase/supabase-js'

// Your Supabase Project URL and Publishable (anon public) key.
// These are read from the .env file at the project root.
// See .env for where to paste your values.
const URL = import.meta.env.VITE_SUPABASE_URL
const API_KEY = import.meta.env.VITE_SUPABASE_KEY

export const supabase = createClient(URL, API_KEY)
