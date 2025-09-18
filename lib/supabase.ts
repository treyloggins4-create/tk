import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://dgajjxvspeirklynhcdo.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRnYWpqeHZzcGVpcmtseW5oY2RvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgxNTE4OTUsImV4cCI6MjA3MzcyNzg5NX0.CsWSe-uOc51pjfVyfSifi6hw7fH0XPgZNs9WNebNJR8'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type ContactSubmission = {
  id?: string
  name: string
  email: string
  phone: string
  service: string
  services?: string
  message?: string
  created_at?: string
  updated_at?: string
  status?: 'new' | 'contacted' | 'quoted' | 'completed' | 'cancelled'
}
